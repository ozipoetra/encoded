/**
 * =============================================================================
 * Main Entry Point: SoTrym Player Initialization
 * =============================================================================
 * This is the self-executing entry point of the script. It sets up the
 * custom module loader and initializes the main SoTrym video player,
 * attaching it to the global `window` object. It also kicks off the
 * anti-debugging measures.
 */
(() => {
  // A map of all modules, where keys are hexadecimal IDs and values are module definitions.
  const modules = {
    // ... Module definitions are placed here ...
  };

  // A cache for loaded modules to avoid re-executing them.
  const moduleCache = {};

  /**
   * Custom module loader function, similar to `require`.
   * It loads a module from the `modules` map using its ID, executes it,
   * caches the result, and returns the module's exports.
   * @param {string} moduleId - The hexadecimal ID of the module to load.
   * @returns {object} The exports of the requested module.
   */
  function requireModule(moduleId) {
    const cachedModule = moduleCache[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }

    const moduleDefinition = { exports: {} };
    const newModuleCacheEntry = (moduleCache[moduleId] = moduleDefinition);

    modules[moduleId].call(
      newModuleCacheEntry.exports,
      newModuleCacheEntry,
      newModuleCacheEntry.exports,
      requireModule
    );

    return newModuleCacheEntry.exports;
  }

  // Add utility functions to the requireModule function for Webpack compatibility.
  requireModule.amdO = {};
  requireModule.d = (exports, definition) => {
    for (var key in definition) {
      if (
        requireModule.o(definition, key) &&
        !requireModule.o(exports, key)
      ) {
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: definition[key],
        });
      }
    }
  };
  requireModule.g = (function () {
    if (typeof globalThis === "object") return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if (typeof window === "object") return window;
    }
  })();
  requireModule.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

  // --- Main Execution ---

  // Load the main Player module.
  const Player = requireModule('0x2c');

  // Load and initialize the anti-debugging/devtools detection module.
  const antiDevTools = requireModule('0x174');
  antiDevTools();

  // Load and apply a patch to the global `atob` function for custom decoding.
  const patchAtob = requireModule('0xa10');
  patchAtob();

  // Expose the SoTrym player factory to the global scope.
  // This allows creating new player instances with `new SoTrym('player-id')`.
  window.SoTrym = (playerId) => new Player(playerId);

  // Register the service worker for P2P and caching capabilities.
  const ServiceWorkerManager = requireModule('0x8ab');
  new ServiceWorkerManager(false).register();

})();


/**
 * =============================================================================
 * Module: Anti-DevTools / Devtools Detector ('0x174', '0x26b')
 * =============================================================================
 * This module is responsible for detecting if the browser's developer tools are open.
 * If detected, it can display a security warning or crash the tab to prevent debugging.
 */
const antiDevTools = () => {
  const devtoolsDetector = requireModule('0x26b');
  const showSecurityWarning = requireModule('0x2489');

  function crashTab() {
    try {
      if (window.jwplayer) {
        jwplayer()?.remove?.();
      }
    } catch ({ message }) {
      console.error(message);
    } finally {
      sessionStorage.setItem("devtool", 'open');
    }
  }

  function isDebuggerOpen() {
    const startTime = new Date().getTime();
    (function () {}).constructor("debugger")();
    return new Date().getTime() - startTime >= 100;
  }

  function showWarningAndCrash() {
    let videoId = null;
    try {
      videoId = new URLSearchParams(new URL(document.location.href).search).get('v');
    } catch ({ message }) {
      console.error(message);
    }
    const message = "Due to security concerns, your access request has been denied. Kindly close your browser completely and try again. Kindly refrain from opening the developer tools (eg: F12)." +
                    (videoId ? "<br>Vid: " + videoId : '');
    return showSecurityWarning("Security alert", message);
  }

  const isTouchDevice = "ontouchstart" in window || "onmsgesturechange" in window;
  const isDesktop = window.screenX != 0 || !!navigator.userAgent.match(/Windows NT/i) || !!navigator.userAgent.match(/Mac OS/i);

  if (!isTouchDevice || isDesktop) {
    let isDevToolOpened = sessionStorage.getItem("devtool") == "open";
    if (isDevToolOpened) {
      showWarningAndCrash();
      return setInterval(() => {
        crashTab();
        console.clear();
      }, 100);
    }

    if (isTouchDevice) {
      setInterval(() => console.clear(), 100);
      let debuggerCheckInterval = setInterval(() => {
        if (isDebuggerOpen()) {
          clearInterval(debuggerCheckInterval);
          showWarningAndCrash();
          setInterval(() => crashTab(), 100);
        }
      }, 100);
      return debuggerCheckInterval;
    }

    devtoolsDetector.addListener(isOpen => {
      isDevToolOpened = isOpen;
      if (isDevToolOpened && isDebuggerOpen()) {
        showWarningAndCrash();
        setInterval(() => crashTab(), 100);
      }
    });

    return devtoolsDetector.launch();
  }
};


/**
 * =============================================================================
 * Module: Player ('0x2c', '0x22df')
 * =============================================================================
 * This is the main player logic. It orchestrates different components like the
 * native video element, the Media Source Extensions (MSE) player, and the
 * Service Worker-based player. It determines the best playback strategy based
 * on browser support.
 */
function Player(playerId = 'player') {
  const mediaManager = this;
  const isCanPlayTypeSupported = 'canPlayType' in document.createElement('video');
  const isSecureContext = window.isSecureContext || window?.crypto?.subtle;
  const isIframed = top.location != self.location;
  const isLocalhost = document.location.hostname == 'localhost';
  const serviceWorkerManager = new ServiceWorkerManager();

  let tracker = null;
  let playerInstance = null;
  let isDestroyed = false;
  let options = {};

  mediaManager.player = null;

  mediaManager.setup = async (config = {}) => {
    if (!mediaManager.isSupported()) {
      return mediaManager.destroy("Your browser does not support this player");
    }

    if (!isIframed && !isLocalhost) {
        return mediaManager.destroy("This player can only be run in an iframe or on localhost.");
    }
    
    if (!isSecureContext && !(await loadScript("https://iamcdn.net/player/polyfills.bundle.js"))) {
        return mediaManager.destroy("This video player can't work properly on unsecure websites. For your safety, please use a website that is protected with HTTPS.");
    }

    options = { ...config };
    options.sources = options?.sources?.filter(source => source && ["mp4"].includes(source?.type)) || [];
    
    if (!options.sources.length) {
      return mediaManager.destroy("No playable sources found");
    }
    
    // ... Additional setup logic for subtitles, thumbnails, etc. ...
    
    tracker = new Tracker(options);
    if (!isLocalhost) {
        tracker.start("wss://hello.idocdn.com");
    }

    await serviceWorkerManager.register();
    
    options.videoId = options.id;
    delete options.id;

    playerInstance = new Mp4Player({
      ...mediaManager,
      id: playerId,
      options: options,
      tracker: tracker,
    });
    
    mediaManager.player = playerInstance.setup();
    return mediaManager.player;
  };

  mediaManager.isSupported = () => isCanPlayTypeSupported && window.jwplayer;

  mediaManager.destroy = (reason) => {
    if (!isDestroyed) {
      isDestroyed = true;
      playerInstance?.destroy();
      playerInstance = null;
      serviceWorkerManager.destroy();
      options = {};
      tracker?.destroy();
      tracker = null;
      return showSecurityWarning("Notification", reason || "Player has been destroyed");
    }
  };
}


/**
 * =============================================================================
 * Module: Mp4Player ('0x22df') -> The core media playback engine selector
 * =============================================================================
 * This module acts as a controller that decides which specific video playback
 * technology to use based on the browser's capabilities.
 *
 * - `Mp4PlayerSW`: Uses a Service Worker for playback.
 * - `Mp4PlayerBox`: Uses Media Source Extensions (MSE) via the MP4 parser.
 * - `Mp4PlayerNative`: Uses a standard HTML5 `<video>` tag.
 * - `Mp4PlayerVideo`: A fallback using a direct video source.
 */
function Mp4Player(config = {}) {
    // ... (configuration extraction) ...
    const isMediaSourceSupported = "MediaSource" in window;
    const isServiceWorkerSupported = "serviceWorker" in navigator;
    // ... (browser-specific checks) ...
    
    let playerImplementation = null;

    this.setup = async () => {
        // ... Logic to select the best player implementation ...

        if (isServiceWorkerSupported && !isEdgeAndroid && !isHeyTapBrowser && isChromeVersionOk) {
            playerImplementation = new Mp4PlayerSW(config);
        } else if (isMediaSourceSupported) {
            playerImplementation = new Mp4PlayerBox(config);
        } else {
            playerImplementation = new Mp4PlayerNative(config);
        }

        if (!playerImplementation) {
             playerImplementation = new Mp4PlayerVideo(config); // Fallback
        }
        
        return playerImplementation.setup();
    };

    this.destroy = (reason, shouldFallback) => {
        // ... destruction logic ...
    };
}


/**
 * =============================================================================
 * Module: AES-CTR Encryption/Decryption ('0x942')
 * =============================================================================
 * Implements AES-CTR encryption and decryption using the Web Crypto API.
 * It uses an MD5 hash of a key to derive the actual encryption key and IV.
 */
function AesCtrCipher() {
  let cryptoKey = null;
  const aesConfig = { name: "AES-CTR", length: 128 };
  const keyUsage = ["encrypt", "decrypt"];
  const textEncoder = new TextEncoder();

  this.expandKey = async (keyString) => {
    if (!keyString) return false;
    
    const md5Hash = md5(keyString);
    const keyData = textEncoder.encode(md5Hash);
    
    // The counter (IV) for CTR mode is derived from the first 16 bytes of the hashed key.
    aesConfig.counter = new Uint8Array(keyData.slice(0, 16));

    try {
      cryptoKey = await crypto.subtle.importKey("raw", keyData, aesConfig, false, keyUsage);
      return true;
    } catch ({ message }) {
      return false;
    }
  };

  this.encrypt = async (data) => {
    if (!data || !cryptoKey) return data;
    if (typeof data === 'string') {
      data = textEncoder.encode(data);
    }
    const encryptedBuffer = await crypto.subtle.encrypt(aesConfig, cryptoKey, data);
    return Array.from(new Uint8Array(encryptedBuffer)).map(byte => String.fromCharCode(byte)).join('');
  };

  this.decrypt = async (data) => {
    if (!data || !cryptoKey) return data;
    
    if (typeof data === 'string') {
      // Custom Base64 string to Uint8Array
      const binaryString = window.atob(data);
      const bytes = new Uint8Array((binaryString.match(/[\s\S]/g) || []).map(char => char.charCodeAt(0)));
      const decryptedBuffer = await crypto.subtle.decrypt(aesConfig, cryptoKey, bytes);
      return new TextDecoder().decode(decryptedBuffer);
    }

    const decryptedBuffer = await crypto.subtle.decrypt(aesConfig, cryptoKey, data);
    return new Uint8Array(decryptedBuffer);
  };
}


/**
 * =============================================================================
 * Module: MD5 Hash Implementation ('0xdaf')
 * =============================================================================
 * A standard implementation of the MD5 hashing algorithm.
 * This is used for deriving keys for the AES encryption.
 */
function md5(message, options) {
    // ... (Standard MD5 implementation logic) ...
    // It processes the input message and produces a 128-bit hash value.
}


/**
 * =============================================================================
 * Module: Devtools Detector Core Logic ('0x26b' -> '0x8')
 * =============================================================================
 * This is the core class that manages the devtools detection process. It runs a
 * loop of different "checkers" to determine if the developer tools are open.
 */
class DevtoolsDetector {
    constructor(config) {
        this.listeners = [];
        this.isOpen = false;
        this.detectLoopStopped = true;
        this.detectLoopDelay = 500;
        this.checkers = config.checkers.slice();
    }

    launch() {
        if (this.detectLoopDelay <= 0) {
            this.setDetectDelay(500);
        }
        if (this.detectLoopStopped) {
            this.detectLoopStopped = false;
            this.detectLoop();
        }
    }
    
    stop() {
        if (!this.detectLoopStopped) {
            this.detectLoopStopped = true;
            this.isOpen = false;
            clearTimeout(this.timer);
        }
    }

    addListener(callback) {
        this.listeners.push(callback);
    }

    async detectLoop() {
        let isDevtoolsOpen = false;
        let checkerName = '';

        for (const checker of this.checkers) {
            if (await checker.isEnable()) {
                checkerName = checker.name;
                isDevtoolsOpen = await checker.isOpen();
                if (isDevtoolsOpen) {
                    break;
                }
            }
        }
        
        if (isDevtoolsOpen !== this.isOpen) {
            this.isOpen = isDevtoolsOpen;
            this.broadcast({ isOpen: isDevtoolsOpen, checkerName });
        }

        if (this.detectLoopDelay > 0 && !this.detectLoopStopped) {
            this.timer = setTimeout(() => this.detectLoop(), this.detectLoopDelay);
        } else {
            this.stop();
        }
    }
    
    broadcast(status) {
        for (const listener of this.listeners) {
            try {
                listener(status.isOpen, status);
            } catch (e) {}
        }
    }
}

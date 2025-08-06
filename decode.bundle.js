(() => {
  const modules = {
    // Define only necessary modules below...
    // Add this if patchAtob is required
    '0xa10': function (_, exports) {
      exports.default = function () {
        const originalAtob = window.atob;
        window.atob = function (input) {
          try {
            return originalAtob(input);
          } catch (e) {
            return "";
          }
        };
      };
    },

    // Main Player module
    '0x2c': function (_, exports, require) {
      const ServiceWorkerManager = require('0x8ab').default;
      const Mp4Player = require('0x22df').default;
      const Tracker = require('0xabc')?.default || function () {}; // optional tracker
      const showSecurityWarning = (title, msg) => console.warn(title, msg); // dummy fallback

      function Player(playerId = 'player') {
        const mediaManager = this;
        const isCanPlayTypeSupported = 'canPlayType' in document.createElement('video');
        const isSecureContext = window.isSecureContext || window?.crypto?.subtle;
        const isIframed = top.location != self.location;
        const isLocalhost = document.location.hostname === 'localhost';
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

          tracker = new Tracker(options);
          if (!isLocalhost && tracker.start) {
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
            playerInstance?.destroy?.();
            playerInstance = null;
            serviceWorkerManager.destroy?.();
            options = {};
            tracker?.destroy?.();
            tracker = null;
            return showSecurityWarning("Notification", reason || "Player has been destroyed");
          }
        };
      }

      exports.default = Player;
    },

    // Mp4Player selector logic
    '0x22df': function (_, exports) {
      function Mp4Player(config = {}) {
        const isMediaSourceSupported = "MediaSource" in window;
        const isServiceWorkerSupported = "serviceWorker" in navigator;
        const isEdgeAndroid = false;
        const isHeyTapBrowser = false;
        const isChromeVersionOk = true;

        let playerImplementation = null;

        this.setup = async () => {
          if (isServiceWorkerSupported && !isEdgeAndroid && !isHeyTapBrowser && isChromeVersionOk) {
            playerImplementation = new Mp4PlayerSW(config);
          } else if (isMediaSourceSupported) {
            playerImplementation = new Mp4PlayerBox(config);
          } else {
            playerImplementation = new Mp4PlayerNative(config);
          }

          if (!playerImplementation) {
            playerImplementation = new Mp4PlayerVideo(config);
          }

          return playerImplementation.setup();
        };

        this.destroy = (reason, shouldFallback) => {
          playerImplementation?.destroy?.(reason, shouldFallback);
        };
      }

      exports.default = Mp4Player;
    },

    // Dummy Service Worker manager (you can customize as needed)
    '0x8ab': function (_, exports) {
      class ServiceWorkerManager {
        constructor(enable = false) {
          this.enable = enable;
        }
        async register() {
          // You can register a service worker here
        }
        destroy() {}
      }
      exports.default = ServiceWorkerManager;
    },

    // Dummy Tracker module (optional)
    '0xabc': function (_, exports) {
      class Tracker {
        constructor(options) {}
        start(url) {}
        destroy() {}
      }
      exports.default = Tracker;
    },
  };

  const moduleCache = {};

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
  const Player = requireModule('0x2c').default;

  const patchAtob = requireModule('0xa10').default;
  patchAtob();

  window.SoTrym = (playerId) => new Player(playerId);

  const ServiceWorkerManager = requireModule('0x8ab').default;
  new ServiceWorkerManager(false).register();
})();

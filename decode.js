var a0_0x30ea9a = function () {
  var _0x84f79f = true;
  return function (_0x6150af, _0x234493) {
    var _0x318e8f = _0x84f79f ? function () {
      if (_0x234493) {
        var _0x4d6f0e = _0x234493.apply(_0x6150af, arguments);
        _0x234493 = null;
        return _0x4d6f0e;
      }
    } : function () {};
    _0x84f79f = false;
    return _0x318e8f;
  };
}();
var a0_0x12ee7e = a0_0x30ea9a(this, function () {
  return a0_0x12ee7e.toString().search("(((.+)+)+)+$").toString().constructor(a0_0x12ee7e).search("(((.+)+)+)+$");
});
a0_0x12ee7e();
(() => {
  var _0x4fc850 = {
    0x2108: (_0x4e16df, _0x5a68ec) => {
      'use strict';

      var _0xe22a6b = {
        "value": true
      };
      Object.defineProperty(_0x5a68ec, "__esModule", _0xe22a6b);
      var _0x1a7431 = function () {
        function _0x14466d(_0x47da80, _0x16faac) {
          if (undefined === _0x47da80) {
            _0x47da80 = 0x0;
          }
          var _0x414fbf = null == _0x16faac ? undefined : _0x16faac.grow;
          this.grow = _0x414fbf ? Number.isFinite(_0x414fbf) ? (_0x414fbf >> 0x3) + Number(_0x414fbf % 0x8 != 0x0) : _0x414fbf : 0x0;
          this.buffer = 'number' == typeof _0x47da80 ? new Uint8Array((_0x47da80 >> 0x3) + Number(_0x47da80 % 0x8 != 0x0)) : _0x47da80;
        }
        var _0x2ec76e = {
          "get": function () {
            return this.buffer.length << 0x3;
          },
          enumerable: false,
          configurable: true
        };
        Object.defineProperty(_0x14466d.prototype, 'length', _0x2ec76e);
        _0x14466d.prototype.get = function (_0x2dbbb0) {
          var _0x33d0b5 = _0x2dbbb0 >> 0x3;
          return _0x33d0b5 < this.buffer.length && !!(this.buffer[_0x33d0b5] & 0x80 >> _0x2dbbb0 % 0x8);
        };
        _0x14466d.prototype.set = function (_0x24f96f, _0x11a569) {
          if (undefined === _0x11a569) {
            _0x11a569 = true;
          }
          var _0x3931e0 = _0x24f96f >> 0x3;
          if (_0x11a569) {
            if (_0x3931e0 >= this.buffer.length) {
              var _0x5914e0 = Math.max(_0x3931e0 + 0x1, Math.min(0x2 * this.buffer.length, this.grow));
              if (_0x5914e0 <= this.grow) {
                var _0x43e222 = new Uint8Array(_0x5914e0);
                _0x43e222.set(this.buffer);
                this.buffer = _0x43e222;
              }
            }
            this.buffer[_0x3931e0] |= 0x80 >> _0x24f96f % 0x8;
          } else if (_0x3931e0 < this.buffer.length) {
            this.buffer[_0x3931e0] &= ~(0x80 >> _0x24f96f % 0x8);
          }
        };
        _0x14466d.prototype.setAll = function (_0x9949f2, _0x409a49) {
          if (undefined === _0x409a49) {
            _0x409a49 = 0x0;
          }
          var _0x59de45 = Math.min((_0x409a49 + _0x9949f2.length >> 0x3) + Number((_0x409a49 + _0x9949f2.length) % 0x8 != 0x0), this.grow);
          if (this.buffer.length < _0x59de45) {
            var _0x421564 = new Uint8Array(_0x59de45);
            _0x421564.set(this.buffer);
            this.buffer = _0x421564;
          }
          var _0x1cc7ac = _0x409a49 >> 0x3;
          var _0x3cb439 = 0x80 >> _0x409a49 % 0x8;
          for (var _0x4be44a = 0x0; _0x4be44a < _0x9949f2.length; _0x4be44a++) {
            if (_0x9949f2[_0x4be44a]) {
              this.buffer[_0x1cc7ac] |= _0x3cb439;
            } else {
              this.buffer[_0x1cc7ac] &= ~_0x3cb439;
            }
            if (0x1 === _0x3cb439) {
              if ((_0x1cc7ac += 0x1) >= this.buffer.length) {
                break;
              }
              _0x3cb439 = 0x80;
            } else {
              _0x3cb439 >>= 0x1;
            }
          }
        };
        _0x14466d.prototype.forEach = function (_0x281baa, _0x2594be, _0x3ae5f1) {
          if (undefined === _0x2594be) {
            _0x2594be = 0x0;
          }
          if (undefined === _0x3ae5f1) {
            _0x3ae5f1 = 0x8 * this.buffer.length;
          }
          var _0x526088 = _0x2594be >> 0x3;
          var _0x13566b = 0x80 >> _0x2594be % 0x8;
          for (var _0x26d5d5 = _0x2594be; _0x26d5d5 < _0x3ae5f1; _0x26d5d5++) {
            _0x281baa(!!(this.buffer[_0x526088] & _0x13566b), _0x26d5d5);
            if (0x1 === _0x13566b) {
              _0x526088 += 0x1;
              _0x13566b = 0x80;
            } else {
              _0x13566b >>= 0x1;
            }
          }
        };
        _0x14466d.prototype.isEmpty = function () {
          for (var _0xc745fc = 0x0; _0xc745fc < this.buffer.length; _0xc745fc++) {
            if (0x0 !== this.buffer[_0xc745fc]) {
              return false;
            }
          }
          return true;
        };
        return _0x14466d;
      }();
      _0x5a68ec['default'] = _0x1a7431;
    },
    0x867: _0x22d693 => {
      var _0x20bd02 = {
        'utf8': {
          'stringToBytes': function (_0x3a4711) {
            return _0x20bd02.bin.stringToBytes(unescape(encodeURIComponent(_0x3a4711)));
          },
          'bytesToString': function (_0x3913f2) {
            return decodeURIComponent(escape(_0x20bd02.bin.bytesToString(_0x3913f2)));
          }
        },
        'bin': {
          'stringToBytes': function (_0x5e2d28) {
            var _0xe29df1 = [];
            for (var _0x3fe326 = 0x0; _0x3fe326 < _0x5e2d28.length; _0x3fe326++) {
              _0xe29df1.push(0xff & _0x5e2d28.charCodeAt(_0x3fe326));
            }
            return _0xe29df1;
          },
          'bytesToString': function (_0x279190) {
            var _0x38c6af = [];
            for (var _0x59c3d1 = 0x0; _0x59c3d1 < _0x279190.length; _0x59c3d1++) {
              _0x38c6af.push(String.fromCharCode(_0x279190[_0x59c3d1]));
            }
            return _0x38c6af.join('');
          }
        }
      };
      _0x22d693.exports = _0x20bd02;
    },
    0xf63: _0x3ad33d => {
      var _0x268dea;
      _0x268dea = {
        'rotl': function (_0x19523b, _0x4c7024) {
          return _0x19523b << _0x4c7024 | _0x19523b >>> 0x20 - _0x4c7024;
        },
        'rotr': function (_0x35e35d, _0x720d40) {
          return _0x35e35d << 0x20 - _0x720d40 | _0x35e35d >>> _0x720d40;
        },
        'endian': function (_0x16fbb8) {
          if (_0x16fbb8.constructor == Number) {
            return 0xff00ff & (_0x16fbb8 << 0x8 | _0x16fbb8 >>> 24) | 0xff00ff00 & (_0x16fbb8 << 0x18 | _0x16fbb8 >>> 8);
          }
          for (var _0x449aae = 0x0; _0x449aae < _0x16fbb8.length; _0x449aae++) {
            _0x16fbb8[_0x449aae] = _0x268dea.endian(_0x16fbb8[_0x449aae]);
          }
          return _0x16fbb8;
        },
        'randomBytes': function (_0x33c4f6) {
          for (var _0x53f7fc = []; _0x33c4f6 > 0x0; _0x33c4f6--) {
            _0x53f7fc.push(Math.floor(0x100 * Math.random()));
          }
          return _0x53f7fc;
        },
        'bytesToWords': function (_0x4e1583) {
          var _0x42da04 = [];
          var _0x3e5ff8 = 0x0;
          for (var _0x4833e7 = 0x0; _0x3e5ff8 < _0x4e1583.length; _0x3e5ff8++, _0x4833e7 += 0x8) {
            _0x42da04[_0x4833e7 >>> 0x5] |= _0x4e1583[_0x3e5ff8] << 0x18 - _0x4833e7 % 0x20;
          }
          return _0x42da04;
        },
        'wordsToBytes': function (_0x2422d5) {
          var _0x1817aa = [];
          for (var _0x1acf64 = 0x0; _0x1acf64 < 0x20 * _0x2422d5.length; _0x1acf64 += 0x8) {
            _0x1817aa.push(_0x2422d5[_0x1acf64 >>> 0x5] >>> 0x18 - _0x1acf64 % 0x20 & 0xff);
          }
          return _0x1817aa;
        },
        'bytesToHex': function (_0x4c46df) {
          var _0x4d2aa3 = [];
          for (var _0x467c55 = 0x0; _0x467c55 < _0x4c46df.length; _0x467c55++) {
            _0x4d2aa3.push((_0x4c46df[_0x467c55] >>> 0x4).toString(0x10));
            _0x4d2aa3.push((0xf & _0x4c46df[_0x467c55]).toString(0x10));
          }
          return _0x4d2aa3.join('');
        },
        'hexToBytes': function (_0x194b50) {
          var _0x398aba = [];
          for (var _0x84b907 = 0x0; _0x84b907 < _0x194b50.length; _0x84b907 += 0x2) {
            _0x398aba.push(parseInt(_0x194b50.substr(_0x84b907, 0x2), 0x10));
          }
          return _0x398aba;
        },
        'bytesToBase64': function (_0x523721) {
          var _0x3fa276 = [];
          for (var _0x1dd87d = 0x0; _0x1dd87d < _0x523721.length; _0x1dd87d += 0x3) {
            var _0x9967a = _0x523721[_0x1dd87d] << 0x10 | _0x523721[_0x1dd87d + 0x1] << 0x8 | _0x523721[_0x1dd87d + 0x2];
            for (var _0x52f3f6 = 0x0; _0x52f3f6 < 0x4; _0x52f3f6++) {
              if (0x8 * _0x1dd87d + 0x6 * _0x52f3f6 <= 0x8 * _0x523721.length) {
                _0x3fa276.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(_0x9967a >>> 0x6 * (0x3 - _0x52f3f6) & 0x3f));
              } else {
                _0x3fa276.push('=');
              }
            }
          }
          return _0x3fa276.join('');
        },
        'base64ToBytes': function (_0x118a27) {
          _0x118a27 = _0x118a27.replace(/[^A-Z0-9+\/]/gi, '');
          var _0x568bdb = [];
          var _0xc70894 = 0x0;
          for (var _0x113712 = 0x0; _0xc70894 < _0x118a27.length; _0x113712 = ++_0xc70894 % 0x4) {
            if (0x0 != _0x113712) {
              _0x568bdb.push(("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(_0x118a27.charAt(_0xc70894 - 0x1)) & Math.pow(0x2, -0x2 * _0x113712 + 0x8) - 0x1) << 0x2 * _0x113712 | "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(_0x118a27.charAt(_0xc70894)) >>> 0x6 - 0x2 * _0x113712);
            }
          }
          return _0x568bdb;
        }
      };
      _0x3ad33d.exports = _0x268dea;
    },
    0x1e99: (_0x5da3ce, _0x17b3e3, _0x505919) => {
      var _0x1a947f = _0x505919(0x15e6);
      _0x17b3e3.formatArgs = function (_0x2dacf7) {
        _0x2dacf7[0x0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? " %c" : " ") + _0x2dacf7[0x0] + (this.useColors ? "%c " : " ") + '+' + _0x5da3ce.exports.humanize(this.diff);
        if (!this.useColors) {
          return;
        }
        const _0x230ef6 = "color: " + this.color;
        _0x2dacf7.splice(0x1, 0x0, _0x230ef6, "color: inherit");
        let _0x2de9e4 = 0x0;
        let _0xd49911 = 0x0;
        _0x2dacf7[0x0].replace(/%[a-zA-Z%]/g, _0x396157 => {
          if ('%%' !== _0x396157) {
            _0x2de9e4++;
            if ('%c' === _0x396157) {
              _0xd49911 = _0x2de9e4;
            }
          }
        });
        _0x2dacf7.splice(_0xd49911, 0x0, _0x230ef6);
      };
      _0x17b3e3.save = function (_0x1e5aa4) {
        try {
          if (_0x1e5aa4) {
            _0x17b3e3.storage.setItem("debug", _0x1e5aa4);
          } else {
            _0x17b3e3.storage.removeItem("debug");
          }
        } catch (_0x1a6be5) {}
      };
      _0x17b3e3.load = function () {
        let _0x2ff4cd;
        try {
          _0x2ff4cd = _0x17b3e3.storage.getItem("debug");
        } catch (_0xfd33c3) {}
        if (!_0x2ff4cd && undefined !== _0x1a947f && "env" in _0x1a947f) {
          _0x2ff4cd = _0x1a947f.env.DEBUG;
        }
        return _0x2ff4cd;
      };
      _0x17b3e3.useColors = function () {
        if ('undefined' != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) {
          return true;
        }
        if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
          return false;
        }
        let _0x9babfb;
        return 'undefined' != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && (_0x9babfb = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(_0x9babfb[0x1], 0xa) >= 0x1f || 'undefined' != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
      };
      _0x17b3e3.storage = function () {
        try {
          return localStorage;
        } catch (_0x53227b) {}
      }();
      _0x17b3e3.destroy = (() => {
        let _0x5dd311 = false;
        return () => {
          if (!_0x5dd311) {
            _0x5dd311 = true;
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
          }
        };
      })();
      _0x17b3e3.colors = ["#0000CC", "#0000FF", "#0033CC", '#0033FF', "#0066CC", '#0066FF', "#0099CC", '#0099FF', "#00CC00", '#00CC33', '#00CC66', '#00CC99', "#00CCCC", "#00CCFF", '#3300CC', '#3300FF', '#3333CC', "#3333FF", '#3366CC', "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", '#33CC99', "#33CCCC", "#33CCFF", '#6600CC', "#6600FF", '#6633CC', "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", '#99CC33', "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", '#CC3399', "#CC33CC", '#CC33FF', "#CC6600", '#CC6633', "#CC9900", '#CC9933', "#CCCC00", "#CCCC33", '#FF0000', "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", '#FF3333', "#FF3366", "#FF3399", "#FF33CC", '#FF33FF', '#FF6600', "#FF6633", "#FF9900", "#FF9933", '#FFCC00', "#FFCC33"];
      _0x17b3e3.log = console.debug || console.log || (() => {});
      _0x5da3ce.exports = _0x505919(0x2e0)(_0x17b3e3);
      const {
        formatters: _0x5746f6
      } = _0x5da3ce.exports;
      _0x5746f6.j = function (_0x980fc) {
        try {
          return JSON.stringify(_0x980fc);
        } catch (_0x81a8fb) {
          return "[UnexpectedJSONParseError]: " + _0x81a8fb.message;
        }
      };
    },
    0x2e0: (_0x375578, _0x295dff, _0x1cd0fe) => {
      _0x375578.exports = function (_0xd5291) {
        function _0x1fd1ad(_0x5a37b7) {
          let _0x547b50;
          let _0x3f3d00;
          let _0x518dee;
          let _0x2a2b01 = null;
          function _0x476b90(..._0x257eb6) {
            if (!_0x476b90.enabled) {
              return;
            }
            const _0x5eb801 = Number(new Date());
            const _0x3f9a2d = _0x5eb801 - (_0x547b50 || _0x5eb801);
            _0x476b90.diff = _0x3f9a2d;
            _0x476b90.prev = _0x547b50;
            _0x476b90.curr = _0x5eb801;
            _0x547b50 = _0x5eb801;
            _0x257eb6[0x0] = _0x1fd1ad.coerce(_0x257eb6[0x0]);
            if ('string' != typeof _0x257eb6[0x0]) {
              _0x257eb6.unshift('%O');
            }
            let _0x38eebb = 0x0;
            _0x257eb6[0x0] = _0x257eb6[0x0].replace(/%([a-zA-Z%])/g, (_0x1781cc, _0x1830f1) => {
              if ('%%' === _0x1781cc) {
                return '%';
              }
              _0x38eebb++;
              const _0x2b5a74 = _0x1fd1ad.formatters[_0x1830f1];
              if ("function" == typeof _0x2b5a74) {
                const _0x469339 = _0x257eb6[_0x38eebb];
                _0x1781cc = _0x2b5a74.call(_0x476b90, _0x469339);
                _0x257eb6.splice(_0x38eebb, 0x1);
                _0x38eebb--;
              }
              return _0x1781cc;
            });
            _0x1fd1ad.formatArgs.call(_0x476b90, _0x257eb6);
            (_0x476b90.log || _0x1fd1ad.log).apply(_0x476b90, _0x257eb6);
          }
          _0x476b90.namespace = _0x5a37b7;
          _0x476b90.useColors = _0x1fd1ad.useColors();
          _0x476b90.color = _0x1fd1ad.selectColor(_0x5a37b7);
          _0x476b90.extend = _0x4c760;
          _0x476b90.destroy = _0x1fd1ad.destroy;
          Object.defineProperty(_0x476b90, "enabled", {
            'enumerable': true,
            'configurable': false,
            'get': () => null !== _0x2a2b01 ? _0x2a2b01 : (_0x3f3d00 !== _0x1fd1ad.namespaces && (_0x3f3d00 = _0x1fd1ad.namespaces, _0x518dee = _0x1fd1ad.enabled(_0x5a37b7)), _0x518dee),
            'set': _0x2b8215 => {
              _0x2a2b01 = _0x2b8215;
            }
          });
          if ("function" == typeof _0x1fd1ad.init) {
            _0x1fd1ad.init(_0x476b90);
          }
          return _0x476b90;
        }
        function _0x4c760(_0x3684a7, _0x1e3438) {
          const _0x5617dc = _0x1fd1ad(this.namespace + (undefined === _0x1e3438 ? ':' : _0x1e3438) + _0x3684a7);
          _0x5617dc.log = this.log;
          return _0x5617dc;
        }
        function _0x1cc7d1(_0x490b5b) {
          return _0x490b5b.toString().substring(0x2, _0x490b5b.toString().length - 0x2).replace(/\.\*\?$/, '*');
        }
        _0x1fd1ad.debug = _0x1fd1ad;
        _0x1fd1ad["default"] = _0x1fd1ad;
        _0x1fd1ad.coerce = function (_0x2830d4) {
          return _0x2830d4 instanceof Error ? _0x2830d4.stack || _0x2830d4.message : _0x2830d4;
        };
        _0x1fd1ad.disable = function () {
          const _0x4a8bdf = [..._0x1fd1ad.names.map(_0x1cc7d1), ..._0x1fd1ad.skips.map(_0x1cc7d1).map(_0x4a7ee0 => '-' + _0x4a7ee0)].join(',');
          _0x1fd1ad.enable('');
          return _0x4a8bdf;
        };
        _0x1fd1ad.enable = function (_0x3500b7) {
          let _0x27fcdd;
          _0x1fd1ad.save(_0x3500b7);
          _0x1fd1ad.namespaces = _0x3500b7;
          _0x1fd1ad.names = [];
          _0x1fd1ad.skips = [];
          const _0x5c2369 = ("string" == typeof _0x3500b7 ? _0x3500b7 : '').split(/[\s,]+/);
          const _0x46d30a = _0x5c2369.length;
          for (_0x27fcdd = 0x0; _0x27fcdd < _0x46d30a; _0x27fcdd++) {
            if (_0x5c2369[_0x27fcdd]) {
              if ('-' === (_0x3500b7 = _0x5c2369[_0x27fcdd].replace(/\*/g, ".*?"))[0x0]) {
                _0x1fd1ad.skips.push(new RegExp('^' + _0x3500b7.slice(0x1) + '$'));
              } else {
                _0x1fd1ad.names.push(new RegExp('^' + _0x3500b7 + '$'));
              }
            }
          }
        };
        _0x1fd1ad.enabled = function (_0x123242) {
          if ('*' === _0x123242[_0x123242.length - 0x1]) {
            return true;
          }
          let _0x577892;
          let _0x38ad01;
          _0x577892 = 0x0;
          for (_0x38ad01 = _0x1fd1ad.skips.length; _0x577892 < _0x38ad01; _0x577892++) {
            if (_0x1fd1ad.skips[_0x577892].test(_0x123242)) {
              return false;
            }
          }
          _0x577892 = 0x0;
          for (_0x38ad01 = _0x1fd1ad.names.length; _0x577892 < _0x38ad01; _0x577892++) {
            if (_0x1fd1ad.names[_0x577892].test(_0x123242)) {
              return true;
            }
          }
          return false;
        };
        _0x1fd1ad.humanize = _0x1cd0fe(0x19b9);
        _0x1fd1ad.destroy = function () {
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        };
        Object.keys(_0xd5291).forEach(_0x37429a => {
          _0x1fd1ad[_0x37429a] = _0xd5291[_0x37429a];
        });
        _0x1fd1ad.names = [];
        _0x1fd1ad.skips = [];
        _0x1fd1ad.formatters = {};
        _0x1fd1ad.selectColor = function (_0x294cd9) {
          let _0x489bdd = 0x0;
          for (let _0x308760 = 0x0; _0x308760 < _0x294cd9.length; _0x308760++) {
            _0x489bdd = (_0x489bdd << 0x5) - _0x489bdd + _0x294cd9.charCodeAt(_0x308760);
            _0x489bdd |= 0x0;
          }
          return _0x1fd1ad.colors[Math.abs(_0x489bdd) % _0x1fd1ad.colors.length];
        };
        _0x1fd1ad.enable(_0x1fd1ad.load());
        return _0x1fd1ad;
      };
    },
    0x1c26: _0xd64809 => {
      _0xd64809.exports = function (_0x13a94d) {
        return null != _0x13a94d && (!!_0x13a94d.constructor && "function" == typeof _0x13a94d.constructor.isBuffer && _0x13a94d.constructor.isBuffer(_0x13a94d) || function (_0x4a59bb) {
          return 'function' == typeof _0x4a59bb.readFloatLE && "function" == typeof _0x4a59bb.slice && !!_0x4a59bb.slice(0x0, 0x0).constructor && "function" == typeof _0x4a59bb.slice(0x0, 0x0).constructor.isBuffer && _0x4a59bb.slice(0x0, 0x0).constructor.isBuffer(_0x4a59bb.slice(0x0, 0x0));
        }(_0x13a94d) || !!_0x13a94d._isBuffer);
      };
    },
    0xdaf: (_0x42ce06, _0x549a40, _0x25959d) => {
      var _0x24f70d;
      var _0x1d3964;
      var _0x200e86;
      var _0x2186f0;
      var _0x32597f;
      _0x24f70d = _0x25959d(0xf63);
      _0x1d3964 = _0x25959d(0x867).utf8;
      _0x200e86 = _0x25959d(0x1c26);
      _0x2186f0 = _0x25959d(0x867).bin;
      (_0x32597f = function (_0x472438, _0x3104b1) {
        if (_0x472438.constructor == String) {
          _0x472438 = _0x3104b1 && "binary" === _0x3104b1.encoding ? _0x2186f0.stringToBytes(_0x472438) : _0x1d3964.stringToBytes(_0x472438);
        } else if (_0x200e86(_0x472438)) {
          _0x472438 = Array.prototype.slice.call(_0x472438, 0x0);
        } else if (!(Array.isArray(_0x472438) || _0x472438.constructor === Uint8Array)) {
          _0x472438 = _0x472438.toString();
        }
        var _0x14858d = _0x24f70d.bytesToWords(_0x472438);
        var _0x49f675 = 0x8 * _0x472438.length;
        var _0x5d26e4 = 0x67452301;
        var _0x2277b4 = -0x10325477;
        var _0x19b651 = -0x67452302;
        var _0x4989ab = 0x10325476;
        for (var _0x445c73 = 0x0; _0x445c73 < _0x14858d.length; _0x445c73++) {
          _0x14858d[_0x445c73] = 0xff00ff & (_0x14858d[_0x445c73] << 0x8 | _0x14858d[_0x445c73] >>> 0x18) | 0xff00ff00 & (_0x14858d[_0x445c73] << 0x18 | _0x14858d[_0x445c73] >>> 0x8);
        }
        _0x14858d[_0x49f675 >>> 0x5] |= 0x80 << _0x49f675 % 0x20;
        _0x14858d[0xe + (_0x49f675 + 0x40 >>> 0x9 << 0x4)] = _0x49f675;
        var _0x252085 = _0x32597f._ff;
        var _0x5ca1e4 = _0x32597f._gg;
        var _0x145991 = _0x32597f._hh;
        var _0x2e223e = _0x32597f._ii;
        for (_0x445c73 = 0x0; _0x445c73 < _0x14858d.length; _0x445c73 += 0x10) {
          var _0x44cc5f = _0x5d26e4;
          var _0x53cf4b = _0x2277b4;
          var _0x56c7e9 = _0x19b651;
          var _0x11d456 = _0x4989ab;
          _0x5d26e4 = _0x252085(_0x5d26e4, _0x2277b4, _0x19b651, _0x4989ab, _0x14858d[_0x445c73 + 0x0], 0x7, -0x28955b88);
          _0x4989ab = _0x252085(_0x4989ab, _0x5d26e4, _0x2277b4, _0x19b651, _0x14858d[_0x445c73 + 0x1], 0xc, -0x173848aa);
          _0x19b651 = _0x252085(_0x19b651, _0x4989ab, _0x5d26e4, _0x2277b4, _0x14858d[_0x445c73 + 0x2], 0x11, 0x242070db);
          _0x2277b4 = _0x252085(_0x2277b4, _0x19b651, _0x4989ab, _0x5d26e4, _0x14858d[_0x445c73 + 0x3], 0x16, -0x3e423112);
          _0x5d26e4 = _0x252085(_0x5d26e4, _0x2277b4, _0x19b651, _0x4989ab, _0x14858d[_0x445c73 + 0x4], 0x7, -0xa83f051);
          _0x4989ab = _0x252085(_0x4989ab, _0x5d26e4, _0x2277b4, _0x19b651, _0x14858d[_0x445c73 + 0x5], 0xc, 0x4787c62a);
          _0x19b651 = _0x252085(_0x19b651, _0x4989ab, _0x5d26e4, _0x2277b4, _0x14858d[_0x445c73 + 0x6], 0x11, -0x57cfb9ed);
          _0x2277b4 = _0x252085(_0x2277b4, _0x19b651, _0x4989ab, _0x5d26e4, _0x14858d[_0x445c73 + 0x7], 0x16, -0x2b96aff);
          _0x5d26e4 = _0x252085(_0x5d26e4, _0x2277b4, _0x19b651, _0x4989ab, _0x14858d[_0x445c73 + 0x8], 0x7, 0x698098d8);
          _0x4989ab = _0x252085(_0x4989ab, _0x5d26e4, _0x2277b4, _0x19b651, _0x14858d[_0x445c73 + 0x9], 0xc, -0x74bb0851);
          _0x19b651 = _0x252085(_0x19b651, _0x4989ab, _0x5d26e4, _0x2277b4, _0x14858d[_0x445c73 + 0xa], 0x11, -0xa44f);
          _0x2277b4 = _0x252085(_0x2277b4, _0x19b651, _0x4989ab, _0x5d26e4, _0x14858d[_0x445c73 + 0xb], 0x16, -0x76a32842);
          _0x5d26e4 = _0x252085(_0x5d26e4, _0x2277b4, _0x19b651, _0x4989ab, _0x14858d[_0x445c73 + 0xc], 0x7, 0x6b901122);
          _0x4989ab = _0x252085(_0x4989ab, _0x5d26e4, _0x2277b4, _0x19b651, _0x14858d[_0x445c73 + 0xd], 0xc, -0x2678e6d);
          _0x19b651 = _0x252085(_0x19b651, _0x4989ab, _0x5d26e4, _0x2277b4, _0x14858d[_0x445c73 + 0xe], 0x11, -0x5986bc72);
          _0x5d26e4 = _0x5ca1e4(_0x5d26e4, _0x2277b4 = _0x252085(_0x2277b4, _0x19b651, _0x4989ab, _0x5d26e4, _0x14858d[_0x445c73 + 0xf], 0x16, 0x49b40821), _0x19b651, _0x4989ab, _0x14858d[_0x445c73 + 0x1], 0x5, -0x9e1da9e);
          _0x4989ab = _0x5ca1e4(_0x4989ab, _0x5d26e4, _0x2277b4, _0x19b651, _0x14858d[_0x445c73 + 0x6], 0x9, -0x3fbf4cc0);
          _0x19b651 = _0x5ca1e4(_0x19b651, _0x4989ab, _0x5d26e4, _0x2277b4, _0x14858d[_0x445c73 + 0xb], 0xe, 0x265e5a51);
          _0x2277b4 = _0x5ca1e4(_0x2277b4, _0x19b651, _0x4989ab, _0x5d26e4, _0x14858d[_0x445c73 + 0x0], 0x14, -0x16493856);
          _0x5d26e4 = _0x5ca1e4(_0x5d26e4, _0x2277b4, _0x19b651, _0x4989ab, _0x14858d[_0x445c73 + 0x5], 0x5, -0x29d0efa3);
          _0x4989ab = _0x5ca1e4(_0x4989ab, _0x5d26e4, _0x2277b4, _0x19b651, _0x14858d[_0x445c73 + 0xa], 0x9, 0x2441453);
          _0x19b651 = _0x5ca1e4(_0x19b651, _0x4989ab, _0x5d26e4, _0x2277b4, _0x14858d[_0x445c73 + 0xf], 0xe, -0x275e197f);
          _0x2277b4 = _0x5ca1e4(_0x2277b4, _0x19b651, _0x4989ab, _0x5d26e4, _0x14858d[_0x445c73 + 0x4], 0x14, -0x182c0438);
          _0x5d26e4 = _0x5ca1e4(_0x5d26e4, _0x2277b4, _0x19b651, _0x4989ab, _0x14858d[_0x445c73 + 0x9], 0x5, 0x21e1cde6);
          _0x4989ab = _0x5ca1e4(_0x4989ab, _0x5d26e4, _0x2277b4, _0x19b651, _0x14858d[_0x445c73 + 0xe], 0x9, -0x3cc8f82a);
          _0x19b651 = _0x5ca1e4(_0x19b651, _0x4989ab, _0x5d26e4, _0x2277b4, _0x14858d[_0x445c73 + 0x3], 0xe, -0xb2af279);
          _0x2277b4 = _0x5ca1e4(_0x2277b4, _0x19b651, _0x4989ab, _0x5d26e4, _0x14858d[_0x445c73 + 0x8], 0x14, 0x455a14ed);
          _0x5d26e4 = _0x5ca1e4(_0x5d26e4, _0x2277b4, _0x19b651, _0x4989ab, _0x14858d[_0x445c73 + 0xd], 0x5, -0x561c16fb);
          _0x4989ab = _0x5ca1e4(_0x4989ab, _0x5d26e4, _0x2277b4, _0x19b651, _0x14858d[_0x445c73 + 0x2], 0x9, -0x3105c08);
          _0x19b651 = _0x5ca1e4(_0x19b651, _0x4989ab, _0x5d26e4, _0x2277b4, _0x14858d[_0x445c73 + 0x7], 0xe, 0x676f02d9);
          _0x5d26e4 = _0x145991(_0x5d26e4, _0x2277b4 = _0x5ca1e4(_0x2277b4, _0x19b651, _0x4989ab, _0x5d26e4, _0x14858d[_0x445c73 + 0xc], 0x14, -0x72d5b376), _0x19b651, _0x4989ab, _0x14858d[_0x445c73 + 0x5], 0x4, -0x5c6be);
          _0x4989ab = _0x145991(_0x4989ab, _0x5d26e4, _0x2277b4, _0x19b651, _0x14858d[_0x445c73 + 0x8], 0xb, -0x788e097f);
          _0x19b651 = _0x145991(_0x19b651, _0x4989ab, _0x5d26e4, _0x2277b4, _0x14858d[_0x445c73 + 0xb], 0x10, 0x6d9d6122);
          _0x2277b4 = _0x145991(_0x2277b4, _0x19b651, _0x4989ab, _0x5d26e4, _0x14858d[_0x445c73 + 0xe], 0x17, -0x21ac7f4);
          _0x5d26e4 = _0x145991(_0x5d26e4, _0x2277b4, _0x19b651, _0x4989ab, _0x14858d[_0x445c73 + 0x1], 0x4, -0x5b4115bc);
          _0x4989ab = _0x145991(_0x4989ab, _0x5d26e4, _0x2277b4, _0x19b651, _0x14858d[_0x445c73 + 0x4], 0xb, 0x4bdecfa9);
          _0x19b651 = _0x145991(_0x19b651, _0x4989ab, _0x5d26e4, _0x2277b4, _0x14858d[_0x445c73 + 0x7], 0x10, -0x944b4a0);
          _0x2277b4 = _0x145991(_0x2277b4, _0x19b651, _0x4989ab, _0x5d26e4, _0x14858d[_0x445c73 + 0xa], 0x17, -0x41404390);
          _0x5d26e4 = _0x145991(_0x5d26e4, _0x2277b4, _0x19b651, _0x4989ab, _0x14858d[_0x445c73 + 0xd], 0x4, 0x289b7ec6);
          _0x4989ab = _0x145991(_0x4989ab, _0x5d26e4, _0x2277b4, _0x19b651, _0x14858d[_0x445c73 + 0x0], 0xb, -0x155ed806);
          _0x19b651 = _0x145991(_0x19b651, _0x4989ab, _0x5d26e4, _0x2277b4, _0x14858d[_0x445c73 + 0x3], 0x10, -0x2b10cf7b);
          _0x2277b4 = _0x145991(_0x2277b4, _0x19b651, _0x4989ab, _0x5d26e4, _0x14858d[_0x445c73 + 0x6], 0x17, 0x4881d05);
          _0x5d26e4 = _0x145991(_0x5d26e4, _0x2277b4, _0x19b651, _0x4989ab, _0x14858d[_0x445c73 + 0x9], 0x4, -0x262b2fc7);
          _0x4989ab = _0x145991(_0x4989ab, _0x5d26e4, _0x2277b4, _0x19b651, _0x14858d[_0x445c73 + 0xc], 0xb, -0x1924661b);
          _0x19b651 = _0x145991(_0x19b651, _0x4989ab, _0x5d26e4, _0x2277b4, _0x14858d[_0x445c73 + 0xf], 0x10, 0x1fa27cf8);
          _0x5d26e4 = _0x2e223e(_0x5d26e4, _0x2277b4 = _0x145991(_0x2277b4, _0x19b651, _0x4989ab, _0x5d26e4, _0x14858d[_0x445c73 + 0x2], 0x17, -0x3b53a99b), _0x19b651, _0x4989ab, _0x14858d[_0x445c73 + 0x0], 0x6, -0xbd6ddbc);
          _0x4989ab = _0x2e223e(_0x4989ab, _0x5d26e4, _0x2277b4, _0x19b651, _0x14858d[_0x445c73 + 0x7], 0xa, 0x432aff97);
          _0x19b651 = _0x2e223e(_0x19b651, _0x4989ab, _0x5d26e4, _0x2277b4, _0x14858d[_0x445c73 + 0xe], 0xf, -0x546bdc59);
          _0x2277b4 = _0x2e223e(_0x2277b4, _0x19b651, _0x4989ab, _0x5d26e4, _0x14858d[_0x445c73 + 0x5], 0x15, -0x36c5fc7);
          _0x5d26e4 = _0x2e223e(_0x5d26e4, _0x2277b4, _0x19b651, _0x4989ab, _0x14858d[_0x445c73 + 0xc], 0x6, 0x655b59c3);
          _0x4989ab = _0x2e223e(_0x4989ab, _0x5d26e4, _0x2277b4, _0x19b651, _0x14858d[_0x445c73 + 0x3], 0xa, -0x70f3336e);
          _0x19b651 = _0x2e223e(_0x19b651, _0x4989ab, _0x5d26e4, _0x2277b4, _0x14858d[_0x445c73 + 0xa], 0xf, -0x100b83);
          _0x2277b4 = _0x2e223e(_0x2277b4, _0x19b651, _0x4989ab, _0x5d26e4, _0x14858d[_0x445c73 + 0x1], 0x15, -0x7a7ba22f);
          _0x5d26e4 = _0x2e223e(_0x5d26e4, _0x2277b4, _0x19b651, _0x4989ab, _0x14858d[_0x445c73 + 0x8], 0x6, 0x6fa87e4f);
          _0x4989ab = _0x2e223e(_0x4989ab, _0x5d26e4, _0x2277b4, _0x19b651, _0x14858d[_0x445c73 + 0xf], 0xa, -0x1d31920);
          _0x19b651 = _0x2e223e(_0x19b651, _0x4989ab, _0x5d26e4, _0x2277b4, _0x14858d[_0x445c73 + 0x6], 0xf, -0x5cfebcec);
          _0x2277b4 = _0x2e223e(_0x2277b4, _0x19b651, _0x4989ab, _0x5d26e4, _0x14858d[_0x445c73 + 0xd], 0x15, 0x4e0811a1);
          _0x5d26e4 = _0x2e223e(_0x5d26e4, _0x2277b4, _0x19b651, _0x4989ab, _0x14858d[_0x445c73 + 0x4], 0x6, -0x8ac817e);
          _0x4989ab = _0x2e223e(_0x4989ab, _0x5d26e4, _0x2277b4, _0x19b651, _0x14858d[_0x445c73 + 0xb], 0xa, -0x42c50dcb);
          _0x19b651 = _0x2e223e(_0x19b651, _0x4989ab, _0x5d26e4, _0x2277b4, _0x14858d[_0x445c73 + 0x2], 0xf, 0x2ad7d2bb);
          _0x2277b4 = _0x2e223e(_0x2277b4, _0x19b651, _0x4989ab, _0x5d26e4, _0x14858d[_0x445c73 + 0x9], 0x15, -0x14792c6f);
          _0x5d26e4 = _0x5d26e4 + _0x44cc5f >>> 0x0;
          _0x2277b4 = _0x2277b4 + _0x53cf4b >>> 0x0;
          _0x19b651 = _0x19b651 + _0x56c7e9 >>> 0x0;
          _0x4989ab = _0x4989ab + _0x11d456 >>> 0x0;
        }
        return _0x24f70d.endian([_0x5d26e4, _0x2277b4, _0x19b651, _0x4989ab]);
      })._ff = function (_0x10fa05, _0x2ba9ca, _0x402b7d, _0xa267be, _0x373b02, _0x2d01bb, _0x208307) {
        var _0x5589b7 = _0x10fa05 + (_0x2ba9ca & _0x402b7d | ~_0x2ba9ca & _0xa267be) + (_0x373b02 >>> 0x0) + _0x208307;
        return (_0x5589b7 << _0x2d01bb | _0x5589b7 >>> 0x20 - _0x2d01bb) + _0x2ba9ca;
      };
      _0x32597f._gg = function (_0x387be4, _0x421bbb, _0x5943ea, _0x50f35d, _0xf26bb6, _0x52b6cd, _0xc46d30) {
        var _0x2d9589 = _0x387be4 + (_0x421bbb & _0x50f35d | _0x5943ea & ~_0x50f35d) + (_0xf26bb6 >>> 0x0) + _0xc46d30;
        return (_0x2d9589 << _0x52b6cd | _0x2d9589 >>> 0x20 - _0x52b6cd) + _0x421bbb;
      };
      _0x32597f._hh = function (_0x457197, _0x26fb8d, _0x209edd, _0x3ec178, _0x40ebdc, _0x40faef, _0x2b9219) {
        var _0x28e469 = _0x457197 + (_0x26fb8d ^ _0x209edd ^ _0x3ec178) + (_0x40ebdc >>> 0x0) + _0x2b9219;
        return (_0x28e469 << _0x40faef | _0x28e469 >>> 0x20 - _0x40faef) + _0x26fb8d;
      };
      _0x32597f._ii = function (_0x4ce5b5, _0x5ef35f, _0x2e30bd, _0x2b8299, _0x641eec, _0x29c8c5, _0x4a0296) {
        var _0x29a817 = _0x4ce5b5 + (_0x2e30bd ^ (_0x5ef35f | ~_0x2b8299)) + (_0x641eec >>> 0x0) + _0x4a0296;
        return (_0x29a817 << _0x29c8c5 | _0x29a817 >>> 0x20 - _0x29c8c5) + _0x5ef35f;
      };
      _0x32597f._blocksize = 0x10;
      _0x32597f._digestsize = 0x10;
      _0x42ce06.exports = function (_0x5aa02e, _0x3c930b) {
        if (null == _0x5aa02e) {
          throw new Error("Illegal argument " + _0x5aa02e);
        }
        var _0x3c8b17 = _0x24f70d.wordsToBytes(_0x32597f(_0x5aa02e, _0x3c930b));
        return _0x3c930b && _0x3c930b.asBytes ? _0x3c8b17 : _0x3c930b && _0x3c930b.asString ? _0x2186f0.bytesToString(_0x3c8b17) : _0x24f70d.bytesToHex(_0x3c8b17);
      };
    },
    0x12fe: (_0x213e98, _0xfcc107, _0x217cfb) => {
      _0x213e98.exports = _0x431004;
      const _0x5706f = _0x217cfb(0x257c);
      function _0x431004(_0x35728c, _0x2636fb) {
        if (!(this instanceof _0x431004)) {
          return new _0x431004(_0x35728c, _0x2636fb);
        }
        if (!_0x2636fb) {
          _0x2636fb = {};
        }
        this.chunkLength = Number(_0x35728c);
        if (!this.chunkLength) {
          throw new Error("First argument must be a chunk length");
        }
        this.chunks = [];
        this.closed = false;
        this.length = Number(_0x2636fb.length) || Infinity;
        if (this.length !== Infinity) {
          this.lastChunkLength = this.length % this.chunkLength || this.chunkLength;
          this.lastChunkIndex = Math.ceil(this.length / this.chunkLength) - 0x1;
        }
      }
      _0x431004.prototype.put = function (_0x5cb60b, _0x5cfd9c, _0x13aafb = () => {}) {
        if (this.closed) {
          return _0x5706f(() => _0x13aafb(new Error("Storage is closed")));
        }
        const _0x3fb8dc = _0x5cb60b === this.lastChunkIndex;
        return _0x3fb8dc && _0x5cfd9c.length !== this.lastChunkLength ? _0x5706f(() => _0x13aafb(new Error("Last chunk length must be " + this.lastChunkLength))) : _0x3fb8dc || _0x5cfd9c.length === this.chunkLength ? (this.chunks[_0x5cb60b] = _0x5cfd9c, void _0x5706f(() => _0x13aafb(null))) : _0x5706f(() => _0x13aafb(new Error("Chunk length must be " + this.chunkLength)));
      };
      _0x431004.prototype.get = function (_0x24f6e0, _0x52da07, _0x5401c4 = () => {}) {
        if ("function" == typeof _0x52da07) {
          return this.get(_0x24f6e0, null, _0x52da07);
        }
        if (this.closed) {
          return _0x5706f(() => _0x5401c4(new Error("Storage is closed")));
        }
        let _0x13bdcb = this.chunks[_0x24f6e0];
        if (!_0x13bdcb) {
          const _0x3d954a = new Error("Chunk not found");
          _0x3d954a.notFound = true;
          return _0x5706f(() => _0x5401c4(_0x3d954a));
        }
        if (!_0x52da07) {
          _0x52da07 = {};
        }
        const _0x53625f = _0x52da07.offset || 0x0;
        const _0x474273 = _0x52da07.length || _0x13bdcb.length - _0x53625f;
        if (!(0x0 === _0x53625f && _0x474273 === _0x13bdcb.length)) {
          _0x13bdcb = _0x13bdcb.slice(_0x53625f, _0x474273 + _0x53625f);
        }
        _0x5706f(() => _0x5401c4(null, _0x13bdcb));
      };
      _0x431004.prototype.close = _0x431004.prototype.destroy = function (_0x5f574f = () => {}) {
        if (this.closed) {
          return _0x5706f(() => _0x5f574f(new Error("Storage is closed")));
        }
        this.closed = true;
        this.chunks = null;
        _0x5706f(() => _0x5f574f(null));
      };
    },
    0x1711: (_0x3db292, _0x4e1140) => {
      var _0xba8eb7;
      var _0x142344;
      _0xba8eb7 = new Date();
      _0x142344 = 0x4;
      var _0x3949d1 = {
        'setLogLevel': function (_0x1c8a48) {
          _0x142344 = _0x1c8a48 == this.debug ? 0x1 : _0x1c8a48 == this.info ? 0x2 : _0x1c8a48 == this.warn ? 0x3 : (this.error, 0x4);
        },
        'debug': function (_0x3551e, _0x4ab6c7) {
          if (undefined === console.debug) {
            console.debug = console.log;
          }
          if (0x1 >= _0x142344) {
            console.debug('[' + _0x3949d1.getDurationString(new Date() - _0xba8eb7, 0x3e8) + ']', '[' + _0x3551e + ']', _0x4ab6c7);
          }
        },
        'log': function (_0x5c65f7, _0x7b73d5) {
          this.debug(_0x5c65f7.msg);
        },
        'info': function (_0x5c4838, _0x2cd383) {
          if (0x2 >= _0x142344) {
            console.info('[' + _0x3949d1.getDurationString(new Date() - _0xba8eb7, 0x3e8) + ']', '[' + _0x5c4838 + ']', _0x2cd383);
          }
        },
        'warn': function (_0x36e54e, _0x190205) {
          if (0x3 >= _0x142344) {
            console.warn('[' + _0x3949d1.getDurationString(new Date() - _0xba8eb7, 0x3e8) + ']', '[' + _0x36e54e + ']', _0x190205);
          }
        },
        'error': function (_0x5a8958, _0x51c189) {
          if (0x4 >= _0x142344) {
            console.error('[' + _0x3949d1.getDurationString(new Date() - _0xba8eb7, 0x3e8) + ']', '[' + _0x5a8958 + ']', _0x51c189);
          }
        }
      };
      _0x3949d1.getDurationString = function (_0x549ba0, _0x312831) {
        var _0x58e85d;
        function _0x4d2449(_0x2f3bf9, _0x28b2c5) {
          for (var _0x4f800b = ('' + _0x2f3bf9).split('.'); _0x4f800b[0x0].length < _0x28b2c5;) {
            _0x4f800b[0x0] = '0' + _0x4f800b[0x0];
          }
          return _0x4f800b.join('.');
        }
        if (_0x549ba0 < 0x0) {
          _0x58e85d = true;
          _0x549ba0 = -_0x549ba0;
        } else {
          _0x58e85d = false;
        }
        var _0x18e8c7 = _0x549ba0 / (_0x312831 || 0x1);
        var _0x411261 = Math.floor(_0x18e8c7 / 0xe10);
        _0x18e8c7 -= 0xe10 * _0x411261;
        var _0x195629 = Math.floor(_0x18e8c7 / 0x3c);
        var _0x232415 = 0x3e8 * (_0x18e8c7 -= 0x3c * _0x195629);
        _0x232415 -= 0x3e8 * (_0x18e8c7 = Math.floor(_0x18e8c7));
        _0x232415 = Math.floor(_0x232415);
        return (_0x58e85d ? '-' : '') + _0x411261 + ':' + _0x4d2449(_0x195629, 0x2) + ':' + _0x4d2449(_0x18e8c7, 0x2) + '.' + _0x4d2449(_0x232415, 0x3);
      };
      _0x3949d1.printRanges = function (_0xebb62a) {
        var _0xd8a010 = _0xebb62a.length;
        if (_0xd8a010 > 0x0) {
          var _0x2b22be = '';
          for (var _0x19b173 = 0x0; _0x19b173 < _0xd8a010; _0x19b173++) {
            if (_0x19b173 > 0x0) {
              _0x2b22be += ',';
            }
            _0x2b22be += '[' + _0x3949d1.getDurationString(_0xebb62a.start(_0x19b173)) + ',' + _0x3949d1.getDurationString(_0xebb62a.end(_0x19b173)) + ']';
          }
          return _0x2b22be;
        }
        return "(empty)";
      };
      _0x4e1140.Log = _0x3949d1;
      var _0x2a61c3 = function (_0x312289) {
        if (!(_0x312289 instanceof ArrayBuffer)) {
          throw "Needs an array buffer";
        }
        this.buffer = _0x312289;
        this.dataview = new DataView(_0x312289);
        this.position = 0x0;
      };
      _0x2a61c3.prototype.getPosition = function () {
        return this.position;
      };
      _0x2a61c3.prototype.getEndPosition = function () {
        return this.buffer.byteLength;
      };
      _0x2a61c3.prototype.getLength = function () {
        return this.buffer.byteLength;
      };
      _0x2a61c3.prototype.seek = function (_0x3d3668) {
        var _0x4462a6 = Math.max(0x0, Math.min(this.buffer.byteLength, _0x3d3668));
        this.position = isNaN(_0x4462a6) || !isFinite(_0x4462a6) ? 0x0 : _0x4462a6;
        return true;
      };
      _0x2a61c3.prototype.isEos = function () {
        return this.getPosition() >= this.getEndPosition();
      };
      _0x2a61c3.prototype.readAnyInt = function (_0x26eaaa, _0x5f1dc3) {
        var _0x2d6224 = 0x0;
        if (this.position + _0x26eaaa <= this.buffer.byteLength) {
          switch (_0x26eaaa) {
            case 0x1:
              _0x2d6224 = _0x5f1dc3 ? this.dataview.getInt8(this.position) : this.dataview.getUint8(this.position);
              break;
            case 0x2:
              _0x2d6224 = _0x5f1dc3 ? this.dataview.getInt16(this.position) : this.dataview.getUint16(this.position);
              break;
            case 0x3:
              if (_0x5f1dc3) {
                throw "No method for reading signed 24 bits values";
              }
              _0x2d6224 = this.dataview.getUint8(this.position) << 0x10;
              _0x2d6224 |= this.dataview.getUint8(this.position + 0x1) << 0x8;
              _0x2d6224 |= this.dataview.getUint8(this.position + 0x2);
              break;
            case 0x4:
              _0x2d6224 = _0x5f1dc3 ? this.dataview.getInt32(this.position) : this.dataview.getUint32(this.position);
              break;
            case 0x8:
              if (_0x5f1dc3) {
                throw "No method for reading signed 64 bits values";
              }
              _0x2d6224 = this.dataview.getUint32(this.position) << 0x20;
              _0x2d6224 |= this.dataview.getUint32(this.position + 0x4);
              break;
            default:
              throw "readInt method not implemented for size: " + _0x26eaaa;
          }
          this.position += _0x26eaaa;
          return _0x2d6224;
        }
        throw "Not enough bytes in buffer";
      };
      _0x2a61c3.prototype.readUint8 = function () {
        return this.readAnyInt(0x1, false);
      };
      _0x2a61c3.prototype.readUint16 = function () {
        return this.readAnyInt(0x2, false);
      };
      _0x2a61c3.prototype.readUint24 = function () {
        return this.readAnyInt(0x3, false);
      };
      _0x2a61c3.prototype.readUint32 = function () {
        return this.readAnyInt(0x4, false);
      };
      _0x2a61c3.prototype.readUint64 = function () {
        return this.readAnyInt(0x8, false);
      };
      _0x2a61c3.prototype.readString = function (_0x2adb2c) {
        if (this.position + _0x2adb2c <= this.buffer.byteLength) {
          var _0x242973 = '';
          for (var _0x3795c0 = 0x0; _0x3795c0 < _0x2adb2c; _0x3795c0++) {
            _0x242973 += String.fromCharCode(this.readUint8());
          }
          return _0x242973;
        }
        throw "Not enough bytes in buffer";
      };
      _0x2a61c3.prototype.readCString = function () {
        for (var _0x44a532 = [];;) {
          var _0xabc933 = this.readUint8();
          if (0x0 === _0xabc933) {
            break;
          }
          _0x44a532.push(_0xabc933);
        }
        return String.fromCharCode.apply(null, _0x44a532);
      };
      _0x2a61c3.prototype.readInt8 = function () {
        return this.readAnyInt(0x1, true);
      };
      _0x2a61c3.prototype.readInt16 = function () {
        return this.readAnyInt(0x2, true);
      };
      _0x2a61c3.prototype.readInt32 = function () {
        return this.readAnyInt(0x4, true);
      };
      _0x2a61c3.prototype.readInt64 = function () {
        return this.readAnyInt(0x8, false);
      };
      _0x2a61c3.prototype.readUint8Array = function (_0x515de8) {
        var _0x42f250 = new Uint8Array(_0x515de8);
        for (var _0x37634c = 0x0; _0x37634c < _0x515de8; _0x37634c++) {
          _0x42f250[_0x37634c] = this.readUint8();
        }
        return _0x42f250;
      };
      _0x2a61c3.prototype.readInt16Array = function (_0x2484a2) {
        var _0x237f27 = new Int16Array(_0x2484a2);
        for (var _0x4b3d37 = 0x0; _0x4b3d37 < _0x2484a2; _0x4b3d37++) {
          _0x237f27[_0x4b3d37] = this.readInt16();
        }
        return _0x237f27;
      };
      _0x2a61c3.prototype.readUint16Array = function (_0x86beae) {
        var _0x247b62 = new Int16Array(_0x86beae);
        for (var _0x3e7178 = 0x0; _0x3e7178 < _0x86beae; _0x3e7178++) {
          _0x247b62[_0x3e7178] = this.readUint16();
        }
        return _0x247b62;
      };
      _0x2a61c3.prototype.readUint32Array = function (_0x10bafa) {
        var _0x26c2b9 = new Uint32Array(_0x10bafa);
        for (var _0x1b449d = 0x0; _0x1b449d < _0x10bafa; _0x1b449d++) {
          _0x26c2b9[_0x1b449d] = this.readUint32();
        }
        return _0x26c2b9;
      };
      _0x2a61c3.prototype.readInt32Array = function (_0x1e961c) {
        var _0x266a0d = new Int32Array(_0x1e961c);
        for (var _0x331651 = 0x0; _0x331651 < _0x1e961c; _0x331651++) {
          _0x266a0d[_0x331651] = this.readInt32();
        }
        return _0x266a0d;
      };
      _0x4e1140.MP4BoxStream = _0x2a61c3;
      var _0x5a360b = function (_0x4522c2, _0x3af956, _0x56580c) {
        this._byteOffset = _0x3af956 || 0x0;
        if (_0x4522c2 instanceof ArrayBuffer) {
          this.buffer = _0x4522c2;
        } else if ('object' == typeof _0x4522c2) {
          this.dataView = _0x4522c2;
          if (_0x3af956) {
            this._byteOffset += _0x3af956;
          }
        } else {
          this.buffer = new ArrayBuffer(_0x4522c2 || 0x0);
        }
        this.position = 0x0;
        this.endianness = null == _0x56580c ? _0x5a360b.LITTLE_ENDIAN : _0x56580c;
      };
      _0x5a360b.prototype = {};
      _0x5a360b.prototype.getPosition = function () {
        return this.position;
      };
      _0x5a360b.prototype._realloc = function (_0x19a6a1) {
        if (this._dynamicSize) {
          var _0x578d7c = this._byteOffset + this.position + _0x19a6a1;
          var _0x33d19b = this._buffer.byteLength;
          if (_0x578d7c <= _0x33d19b) {
            if (_0x578d7c > this._byteLength) {
              this._byteLength = _0x578d7c;
            }
          } else {
            for (_0x33d19b < 0x1 && (_0x33d19b = 0x1); _0x578d7c > _0x33d19b;) {
              _0x33d19b *= 0x2;
            }
            var _0x56973d = new ArrayBuffer(_0x33d19b);
            var _0x464665 = new Uint8Array(this._buffer);
            new Uint8Array(_0x56973d, 0x0, _0x464665.length).set(_0x464665);
            this.buffer = _0x56973d;
            this._byteLength = _0x578d7c;
          }
        }
      };
      _0x5a360b.prototype._trimAlloc = function () {
        if (this._byteLength != this._buffer.byteLength) {
          var _0x17b0b5 = new ArrayBuffer(this._byteLength);
          var _0x2de035 = new Uint8Array(_0x17b0b5);
          var _0x629545 = new Uint8Array(this._buffer, 0x0, _0x2de035.length);
          _0x2de035.set(_0x629545);
          this.buffer = _0x17b0b5;
        }
      };
      _0x5a360b.BIG_ENDIAN = false;
      _0x5a360b.LITTLE_ENDIAN = true;
      _0x5a360b.prototype._byteLength = 0x0;
      Object.defineProperty(_0x5a360b.prototype, "byteLength", {
        'get': function () {
          return this._byteLength - this._byteOffset;
        }
      });
      Object.defineProperty(_0x5a360b.prototype, "buffer", {
        'get': function () {
          this._trimAlloc();
          return this._buffer;
        },
        'set': function (_0x3b7eb7) {
          this._buffer = _0x3b7eb7;
          this._dataView = new DataView(this._buffer, this._byteOffset);
          this._byteLength = this._buffer.byteLength;
        }
      });
      Object.defineProperty(_0x5a360b.prototype, "byteOffset", {
        'get': function () {
          return this._byteOffset;
        },
        'set': function (_0x1f67fd) {
          this._byteOffset = _0x1f67fd;
          this._dataView = new DataView(this._buffer, this._byteOffset);
          this._byteLength = this._buffer.byteLength;
        }
      });
      Object.defineProperty(_0x5a360b.prototype, "dataView", {
        'get': function () {
          return this._dataView;
        },
        'set': function (_0x198b81) {
          this._byteOffset = _0x198b81.byteOffset;
          this._buffer = _0x198b81.buffer;
          this._dataView = new DataView(this._buffer, this._byteOffset);
          this._byteLength = this._byteOffset + _0x198b81.byteLength;
        }
      });
      _0x5a360b.prototype.seek = function (_0x2bbd34) {
        var _0x4259a9 = Math.max(0x0, Math.min(this.byteLength, _0x2bbd34));
        this.position = isNaN(_0x4259a9) || !isFinite(_0x4259a9) ? 0x0 : _0x4259a9;
      };
      _0x5a360b.prototype.isEof = function () {
        return this.position >= this._byteLength;
      };
      _0x5a360b.prototype.mapUint8Array = function (_0x58ff) {
        this._realloc(0x1 * _0x58ff);
        var _0x1fee6a = new Uint8Array(this._buffer, this.byteOffset + this.position, _0x58ff);
        this.position += 0x1 * _0x58ff;
        return _0x1fee6a;
      };
      _0x5a360b.prototype.readInt32Array = function (_0x12abbe, _0xe26d5b) {
        _0x12abbe = null == _0x12abbe ? this.byteLength - this.position / 0x4 : _0x12abbe;
        var _0x4b714e = new Int32Array(_0x12abbe);
        _0x5a360b.memcpy(_0x4b714e.buffer, 0x0, this.buffer, this.byteOffset + this.position, _0x12abbe * _0x4b714e.BYTES_PER_ELEMENT);
        _0x5a360b.arrayToNative(_0x4b714e, null == _0xe26d5b ? this.endianness : _0xe26d5b);
        this.position += _0x4b714e.byteLength;
        return _0x4b714e;
      };
      _0x5a360b.prototype.readInt16Array = function (_0x257d8b, _0x2fa3d8) {
        _0x257d8b = null == _0x257d8b ? this.byteLength - this.position / 0x2 : _0x257d8b;
        var _0x3ea66f = new Int16Array(_0x257d8b);
        _0x5a360b.memcpy(_0x3ea66f.buffer, 0x0, this.buffer, this.byteOffset + this.position, _0x257d8b * _0x3ea66f.BYTES_PER_ELEMENT);
        _0x5a360b.arrayToNative(_0x3ea66f, null == _0x2fa3d8 ? this.endianness : _0x2fa3d8);
        this.position += _0x3ea66f.byteLength;
        return _0x3ea66f;
      };
      _0x5a360b.prototype.readInt8Array = function (_0x4c0c3e) {
        _0x4c0c3e = null == _0x4c0c3e ? this.byteLength - this.position : _0x4c0c3e;
        var _0x4d20ce = new Int8Array(_0x4c0c3e);
        _0x5a360b.memcpy(_0x4d20ce.buffer, 0x0, this.buffer, this.byteOffset + this.position, _0x4c0c3e * _0x4d20ce.BYTES_PER_ELEMENT);
        this.position += _0x4d20ce.byteLength;
        return _0x4d20ce;
      };
      _0x5a360b.prototype.readUint32Array = function (_0x56650e, _0x4ddfd0) {
        _0x56650e = null == _0x56650e ? this.byteLength - this.position / 0x4 : _0x56650e;
        var _0x59632f = new Uint32Array(_0x56650e);
        _0x5a360b.memcpy(_0x59632f.buffer, 0x0, this.buffer, this.byteOffset + this.position, _0x56650e * _0x59632f.BYTES_PER_ELEMENT);
        _0x5a360b.arrayToNative(_0x59632f, null == _0x4ddfd0 ? this.endianness : _0x4ddfd0);
        this.position += _0x59632f.byteLength;
        return _0x59632f;
      };
      _0x5a360b.prototype.readUint16Array = function (_0x466770, _0x3d58c7) {
        _0x466770 = null == _0x466770 ? this.byteLength - this.position / 0x2 : _0x466770;
        var _0x4b0975 = new Uint16Array(_0x466770);
        _0x5a360b.memcpy(_0x4b0975.buffer, 0x0, this.buffer, this.byteOffset + this.position, _0x466770 * _0x4b0975.BYTES_PER_ELEMENT);
        _0x5a360b.arrayToNative(_0x4b0975, null == _0x3d58c7 ? this.endianness : _0x3d58c7);
        this.position += _0x4b0975.byteLength;
        return _0x4b0975;
      };
      _0x5a360b.prototype.readUint8Array = function (_0x524188) {
        _0x524188 = null == _0x524188 ? this.byteLength - this.position : _0x524188;
        var _0x6ffa54 = new Uint8Array(_0x524188);
        _0x5a360b.memcpy(_0x6ffa54.buffer, 0x0, this.buffer, this.byteOffset + this.position, _0x524188 * _0x6ffa54.BYTES_PER_ELEMENT);
        this.position += _0x6ffa54.byteLength;
        return _0x6ffa54;
      };
      _0x5a360b.prototype.readFloat64Array = function (_0x58904d, _0x5984f8) {
        _0x58904d = null == _0x58904d ? this.byteLength - this.position / 0x8 : _0x58904d;
        var _0x2967c0 = new Float64Array(_0x58904d);
        _0x5a360b.memcpy(_0x2967c0.buffer, 0x0, this.buffer, this.byteOffset + this.position, _0x58904d * _0x2967c0.BYTES_PER_ELEMENT);
        _0x5a360b.arrayToNative(_0x2967c0, null == _0x5984f8 ? this.endianness : _0x5984f8);
        this.position += _0x2967c0.byteLength;
        return _0x2967c0;
      };
      _0x5a360b.prototype.readFloat32Array = function (_0x2849d9, _0x231cf3) {
        _0x2849d9 = null == _0x2849d9 ? this.byteLength - this.position / 0x4 : _0x2849d9;
        var _0xd2273 = new Float32Array(_0x2849d9);
        _0x5a360b.memcpy(_0xd2273.buffer, 0x0, this.buffer, this.byteOffset + this.position, _0x2849d9 * _0xd2273.BYTES_PER_ELEMENT);
        _0x5a360b.arrayToNative(_0xd2273, null == _0x231cf3 ? this.endianness : _0x231cf3);
        this.position += _0xd2273.byteLength;
        return _0xd2273;
      };
      _0x5a360b.prototype.readInt32 = function (_0x247bb5) {
        var _0x43dbb6 = this._dataView.getInt32(this.position, null == _0x247bb5 ? this.endianness : _0x247bb5);
        this.position += 0x4;
        return _0x43dbb6;
      };
      _0x5a360b.prototype.readInt16 = function (_0x27755b) {
        var _0xfa82f0 = this._dataView.getInt16(this.position, null == _0x27755b ? this.endianness : _0x27755b);
        this.position += 0x2;
        return _0xfa82f0;
      };
      _0x5a360b.prototype.readInt8 = function () {
        var _0x2b2885 = this._dataView.getInt8(this.position);
        this.position += 0x1;
        return _0x2b2885;
      };
      _0x5a360b.prototype.readUint32 = function (_0x3e8851) {
        var _0x265b49 = this._dataView.getUint32(this.position, null == _0x3e8851 ? this.endianness : _0x3e8851);
        this.position += 0x4;
        return _0x265b49;
      };
      _0x5a360b.prototype.readUint16 = function (_0x7f7f8e) {
        var _0x56683e = this._dataView.getUint16(this.position, null == _0x7f7f8e ? this.endianness : _0x7f7f8e);
        this.position += 0x2;
        return _0x56683e;
      };
      _0x5a360b.prototype.readUint8 = function () {
        var _0x3c778d = this._dataView.getUint8(this.position);
        this.position += 0x1;
        return _0x3c778d;
      };
      _0x5a360b.prototype.readFloat32 = function (_0x489ffa) {
        var _0x5bdcbd = this._dataView.getFloat32(this.position, null == _0x489ffa ? this.endianness : _0x489ffa);
        this.position += 0x4;
        return _0x5bdcbd;
      };
      _0x5a360b.prototype.readFloat64 = function (_0x375ffc) {
        var _0x2bcfdf = this._dataView.getFloat64(this.position, null == _0x375ffc ? this.endianness : _0x375ffc);
        this.position += 0x8;
        return _0x2bcfdf;
      };
      _0x5a360b.endianness = new Int8Array(new Int16Array([0x1]).buffer)[0x0] > 0x0;
      _0x5a360b.memcpy = function (_0x5ab2ab, _0x449a5c, _0x59be09, _0x1e88fa, _0x48ceb9) {
        var _0x2dc9e7 = new Uint8Array(_0x5ab2ab, _0x449a5c, _0x48ceb9);
        var _0x204416 = new Uint8Array(_0x59be09, _0x1e88fa, _0x48ceb9);
        _0x2dc9e7.set(_0x204416);
      };
      _0x5a360b.arrayToNative = function (_0x43c8f5, _0x2f7d1d) {
        return _0x2f7d1d == this.endianness ? _0x43c8f5 : this.flipArrayEndianness(_0x43c8f5);
      };
      _0x5a360b.nativeToEndian = function (_0x10703f, _0x1baaed) {
        return this.endianness == _0x1baaed ? _0x10703f : this.flipArrayEndianness(_0x10703f);
      };
      _0x5a360b.flipArrayEndianness = function (_0x4438a6) {
        var _0x1fc2b7 = new Uint8Array(_0x4438a6.buffer, _0x4438a6.byteOffset, _0x4438a6.byteLength);
        for (var _0x100c46 = 0x0; _0x100c46 < _0x4438a6.byteLength; _0x100c46 += _0x4438a6.BYTES_PER_ELEMENT) {
          var _0x3773a7 = _0x100c46 + _0x4438a6.BYTES_PER_ELEMENT - 0x1;
          for (var _0x228758 = _0x100c46; _0x3773a7 > _0x228758; _0x3773a7--, _0x228758++) {
            var _0x2f632e = _0x1fc2b7[_0x228758];
            _0x1fc2b7[_0x228758] = _0x1fc2b7[_0x3773a7];
            _0x1fc2b7[_0x3773a7] = _0x2f632e;
          }
        }
        return _0x4438a6;
      };
      _0x5a360b.prototype.failurePosition = 0x0;
      String.fromCharCodeUint8 = function (_0x27ad9c) {
        var _0xef07cf = [];
        for (var _0xc6e1e8 = 0x0; _0xc6e1e8 < _0x27ad9c.length; _0xc6e1e8++) {
          _0xef07cf[_0xc6e1e8] = _0x27ad9c[_0xc6e1e8];
        }
        return String.fromCharCode.apply(null, _0xef07cf);
      };
      _0x5a360b.prototype.readString = function (_0x43733f, _0x1833e7) {
        return null == _0x1833e7 || "ASCII" == _0x1833e7 ? String.fromCharCodeUint8.apply(null, [this.mapUint8Array(null == _0x43733f ? this.byteLength - this.position : _0x43733f)]) : new TextDecoder(_0x1833e7).decode(this.mapUint8Array(_0x43733f));
      };
      _0x5a360b.prototype.readCString = function (_0x3a2211) {
        var _0x39dbf2 = this.byteLength - this.position;
        var _0x42eaf7 = new Uint8Array(this._buffer, this._byteOffset + this.position);
        var _0x4f0eaf = _0x39dbf2;
        if (null != _0x3a2211) {
          _0x4f0eaf = Math.min(_0x3a2211, _0x39dbf2);
        }
        for (var _0x5cc2e6 = 0x0; _0x5cc2e6 < _0x4f0eaf && 0x0 !== _0x42eaf7[_0x5cc2e6]; _0x5cc2e6++) {
          ;
        }
        var _0x5058ca = String.fromCharCodeUint8.apply(null, [this.mapUint8Array(_0x5cc2e6)]);
        if (null != _0x3a2211) {
          this.position += _0x4f0eaf - _0x5cc2e6;
        } else if (_0x5cc2e6 != _0x39dbf2) {
          this.position += 0x1;
        }
        return _0x5058ca;
      };
      var _0x45f206 = Math.pow(0x2, 0x20);
      _0x5a360b.prototype.readInt64 = function () {
        return this.readInt32() * _0x45f206 + this.readUint32();
      };
      _0x5a360b.prototype.readUint64 = function () {
        return this.readUint32() * _0x45f206 + this.readUint32();
      };
      _0x5a360b.prototype.readInt64 = function () {
        return this.readUint32() * _0x45f206 + this.readUint32();
      };
      _0x5a360b.prototype.readUint24 = function () {
        return (this.readUint8() << 0x10) + (this.readUint8() << 0x8) + this.readUint8();
      };
      _0x4e1140.DataStream = _0x5a360b;
      _0x5a360b.prototype.save = function (_0xfce996) {
        var _0x367013 = new Blob([this.buffer]);
        if (!window.URL || !URL.createObjectURL) {
          throw "DataStream.save: Can't create object URL.";
        }
        var _0x5e7dbe = window.URL.createObjectURL(_0x367013);
        var _0x3e9b07 = document.createElement('a');
        document.body.appendChild(_0x3e9b07);
        _0x3e9b07.setAttribute("href", _0x5e7dbe);
        _0x3e9b07.setAttribute('download', _0xfce996);
        _0x3e9b07.setAttribute("target", "_self");
        _0x3e9b07.click();
        window.URL.revokeObjectURL(_0x5e7dbe);
      };
      _0x5a360b.prototype._dynamicSize = true;
      Object.defineProperty(_0x5a360b.prototype, "dynamicSize", {
        'get': function () {
          return this._dynamicSize;
        },
        'set': function (_0x1459e8) {
          if (!_0x1459e8) {
            this._trimAlloc();
          }
          this._dynamicSize = _0x1459e8;
        }
      });
      _0x5a360b.prototype.shift = function (_0x16bc39) {
        var _0x871496 = new ArrayBuffer(this._byteLength - _0x16bc39);
        var _0x1d7bd8 = new Uint8Array(_0x871496);
        var _0x15561f = new Uint8Array(this._buffer, _0x16bc39, _0x1d7bd8.length);
        _0x1d7bd8.set(_0x15561f);
        this.buffer = _0x871496;
        this.position -= _0x16bc39;
      };
      _0x5a360b.prototype.writeInt32Array = function (_0x1cb58f, _0x462ddf) {
        this._realloc(0x4 * _0x1cb58f.length);
        if (_0x1cb58f instanceof Int32Array && this.byteOffset + this.position % _0x1cb58f.BYTES_PER_ELEMENT === 0x0) {
          _0x5a360b.memcpy(this._buffer, this.byteOffset + this.position, _0x1cb58f.buffer, 0x0, _0x1cb58f.byteLength);
          this.mapInt32Array(_0x1cb58f.length, _0x462ddf);
        } else {
          for (var _0x27ab2d = 0x0; _0x27ab2d < _0x1cb58f.length; _0x27ab2d++) {
            this.writeInt32(_0x1cb58f[_0x27ab2d], _0x462ddf);
          }
        }
      };
      _0x5a360b.prototype.writeInt16Array = function (_0x545d63, _0x55eb54) {
        this._realloc(0x2 * _0x545d63.length);
        if (_0x545d63 instanceof Int16Array && this.byteOffset + this.position % _0x545d63.BYTES_PER_ELEMENT === 0x0) {
          _0x5a360b.memcpy(this._buffer, this.byteOffset + this.position, _0x545d63.buffer, 0x0, _0x545d63.byteLength);
          this.mapInt16Array(_0x545d63.length, _0x55eb54);
        } else {
          for (var _0x46a0cc = 0x0; _0x46a0cc < _0x545d63.length; _0x46a0cc++) {
            this.writeInt16(_0x545d63[_0x46a0cc], _0x55eb54);
          }
        }
      };
      _0x5a360b.prototype.writeInt8Array = function (_0x27eaf8) {
        this._realloc(0x1 * _0x27eaf8.length);
        if (_0x27eaf8 instanceof Int8Array && this.byteOffset + this.position % _0x27eaf8.BYTES_PER_ELEMENT === 0x0) {
          _0x5a360b.memcpy(this._buffer, this.byteOffset + this.position, _0x27eaf8.buffer, 0x0, _0x27eaf8.byteLength);
          this.mapInt8Array(_0x27eaf8.length);
        } else {
          for (var _0xb229c1 = 0x0; _0xb229c1 < _0x27eaf8.length; _0xb229c1++) {
            this.writeInt8(_0x27eaf8[_0xb229c1]);
          }
        }
      };
      _0x5a360b.prototype.writeUint32Array = function (_0x3ff648, _0x2c834e) {
        this._realloc(0x4 * _0x3ff648.length);
        if (_0x3ff648 instanceof Uint32Array && this.byteOffset + this.position % _0x3ff648.BYTES_PER_ELEMENT === 0x0) {
          _0x5a360b.memcpy(this._buffer, this.byteOffset + this.position, _0x3ff648.buffer, 0x0, _0x3ff648.byteLength);
          this.mapUint32Array(_0x3ff648.length, _0x2c834e);
        } else {
          for (var _0x25020d = 0x0; _0x25020d < _0x3ff648.length; _0x25020d++) {
            this.writeUint32(_0x3ff648[_0x25020d], _0x2c834e);
          }
        }
      };
      _0x5a360b.prototype.writeUint16Array = function (_0x53bd85, _0x5e8de3) {
        this._realloc(0x2 * _0x53bd85.length);
        if (_0x53bd85 instanceof Uint16Array && this.byteOffset + this.position % _0x53bd85.BYTES_PER_ELEMENT === 0x0) {
          _0x5a360b.memcpy(this._buffer, this.byteOffset + this.position, _0x53bd85.buffer, 0x0, _0x53bd85.byteLength);
          this.mapUint16Array(_0x53bd85.length, _0x5e8de3);
        } else {
          for (var _0x395508 = 0x0; _0x395508 < _0x53bd85.length; _0x395508++) {
            this.writeUint16(_0x53bd85[_0x395508], _0x5e8de3);
          }
        }
      };
      _0x5a360b.prototype.writeUint8Array = function (_0xe8c351) {
        this._realloc(0x1 * _0xe8c351.length);
        if (_0xe8c351 instanceof Uint8Array && this.byteOffset + this.position % _0xe8c351.BYTES_PER_ELEMENT === 0x0) {
          _0x5a360b.memcpy(this._buffer, this.byteOffset + this.position, _0xe8c351.buffer, 0x0, _0xe8c351.byteLength);
          this.mapUint8Array(_0xe8c351.length);
        } else {
          for (var _0x355869 = 0x0; _0x355869 < _0xe8c351.length; _0x355869++) {
            this.writeUint8(_0xe8c351[_0x355869]);
          }
        }
      };
      _0x5a360b.prototype.writeFloat64Array = function (_0x3c9c23, _0x59991f) {
        this._realloc(0x8 * _0x3c9c23.length);
        if (_0x3c9c23 instanceof Float64Array && this.byteOffset + this.position % _0x3c9c23.BYTES_PER_ELEMENT === 0x0) {
          _0x5a360b.memcpy(this._buffer, this.byteOffset + this.position, _0x3c9c23.buffer, 0x0, _0x3c9c23.byteLength);
          this.mapFloat64Array(_0x3c9c23.length, _0x59991f);
        } else {
          for (var _0x5c492f = 0x0; _0x5c492f < _0x3c9c23.length; _0x5c492f++) {
            this.writeFloat64(_0x3c9c23[_0x5c492f], _0x59991f);
          }
        }
      };
      _0x5a360b.prototype.writeFloat32Array = function (_0x3f89b5, _0x3e1d4d) {
        this._realloc(0x4 * _0x3f89b5.length);
        if (_0x3f89b5 instanceof Float32Array && this.byteOffset + this.position % _0x3f89b5.BYTES_PER_ELEMENT === 0x0) {
          _0x5a360b.memcpy(this._buffer, this.byteOffset + this.position, _0x3f89b5.buffer, 0x0, _0x3f89b5.byteLength);
          this.mapFloat32Array(_0x3f89b5.length, _0x3e1d4d);
        } else {
          for (var _0x212ba3 = 0x0; _0x212ba3 < _0x3f89b5.length; _0x212ba3++) {
            this.writeFloat32(_0x3f89b5[_0x212ba3], _0x3e1d4d);
          }
        }
      };
      _0x5a360b.prototype.writeInt32 = function (_0x2066a9, _0x304dd3) {
        this._realloc(0x4);
        this._dataView.setInt32(this.position, _0x2066a9, null == _0x304dd3 ? this.endianness : _0x304dd3);
        this.position += 0x4;
      };
      _0x5a360b.prototype.writeInt16 = function (_0x15b74f, _0x5d8ae6) {
        this._realloc(0x2);
        this._dataView.setInt16(this.position, _0x15b74f, null == _0x5d8ae6 ? this.endianness : _0x5d8ae6);
        this.position += 0x2;
      };
      _0x5a360b.prototype.writeInt8 = function (_0x311b32) {
        this._realloc(0x1);
        this._dataView.setInt8(this.position, _0x311b32);
        this.position += 0x1;
      };
      _0x5a360b.prototype.writeUint32 = function (_0x14cbb7, _0x2fa217) {
        this._realloc(0x4);
        this._dataView.setUint32(this.position, _0x14cbb7, null == _0x2fa217 ? this.endianness : _0x2fa217);
        this.position += 0x4;
      };
      _0x5a360b.prototype.writeUint16 = function (_0xaadcd3, _0x2ad009) {
        this._realloc(0x2);
        this._dataView.setUint16(this.position, _0xaadcd3, null == _0x2ad009 ? this.endianness : _0x2ad009);
        this.position += 0x2;
      };
      _0x5a360b.prototype.writeUint8 = function (_0x577511) {
        this._realloc(0x1);
        this._dataView.setUint8(this.position, _0x577511);
        this.position += 0x1;
      };
      _0x5a360b.prototype.writeFloat32 = function (_0x11743b, _0xb6ff07) {
        this._realloc(0x4);
        this._dataView.setFloat32(this.position, _0x11743b, null == _0xb6ff07 ? this.endianness : _0xb6ff07);
        this.position += 0x4;
      };
      _0x5a360b.prototype.writeFloat64 = function (_0x25e549, _0x76414) {
        this._realloc(0x8);
        this._dataView.setFloat64(this.position, _0x25e549, null == _0x76414 ? this.endianness : _0x76414);
        this.position += 0x8;
      };
      _0x5a360b.prototype.writeUCS2String = function (_0x4c35d8, _0xb7ecec, _0x36d2cc) {
        if (null == _0x36d2cc) {
          _0x36d2cc = _0x4c35d8.length;
        }
        for (var _0x6bfbd4 = 0x0; _0x6bfbd4 < _0x4c35d8.length && _0x6bfbd4 < _0x36d2cc; _0x6bfbd4++) {
          this.writeUint16(_0x4c35d8.charCodeAt(_0x6bfbd4), _0xb7ecec);
        }
        for (; _0x6bfbd4 < _0x36d2cc; _0x6bfbd4++) {
          this.writeUint16(0x0);
        }
      };
      _0x5a360b.prototype.writeString = function (_0x35b302, _0x2e7829, _0x2ee466) {
        var _0x17807d = 0x0;
        if (null == _0x2e7829 || "ASCII" == _0x2e7829) {
          if (null != _0x2ee466) {
            var _0x4760c7 = Math.min(_0x35b302.length, _0x2ee466);
            for (_0x17807d = 0x0; _0x17807d < _0x4760c7; _0x17807d++) {
              this.writeUint8(_0x35b302.charCodeAt(_0x17807d));
            }
            for (; _0x17807d < _0x2ee466; _0x17807d++) {
              this.writeUint8(0x0);
            }
          } else {
            for (_0x17807d = 0x0; _0x17807d < _0x35b302.length; _0x17807d++) {
              this.writeUint8(_0x35b302.charCodeAt(_0x17807d));
            }
          }
        } else {
          this.writeUint8Array(new TextEncoder(_0x2e7829).encode(_0x35b302.substring(0x0, _0x2ee466)));
        }
      };
      _0x5a360b.prototype.writeCString = function (_0x312030, _0x29b8d5) {
        var _0x2cb8cc = 0x0;
        if (null != _0x29b8d5) {
          var _0x146cde = Math.min(_0x312030.length, _0x29b8d5);
          for (_0x2cb8cc = 0x0; _0x2cb8cc < _0x146cde; _0x2cb8cc++) {
            this.writeUint8(_0x312030.charCodeAt(_0x2cb8cc));
          }
          for (; _0x2cb8cc < _0x29b8d5; _0x2cb8cc++) {
            this.writeUint8(0x0);
          }
        } else {
          for (_0x2cb8cc = 0x0; _0x2cb8cc < _0x312030.length; _0x2cb8cc++) {
            this.writeUint8(_0x312030.charCodeAt(_0x2cb8cc));
          }
          this.writeUint8(0x0);
        }
      };
      _0x5a360b.prototype.writeStruct = function (_0x2f5342, _0x3546eb) {
        for (var _0x103772 = 0x0; _0x103772 < _0x2f5342.length; _0x103772 += 0x2) {
          var _0x11ca37 = _0x2f5342[_0x103772 + 0x1];
          this.writeType(_0x11ca37, _0x3546eb[_0x2f5342[_0x103772]], _0x3546eb);
        }
      };
      _0x5a360b.prototype.writeType = function (_0x13444c, _0x47973f, _0x32ba06) {
        var _0x1853c7;
        if ("function" == typeof _0x13444c) {
          return _0x13444c(this, _0x47973f);
        }
        if ('object' == typeof _0x13444c && !(_0x13444c instanceof Array)) {
          return _0x13444c.set(this, _0x47973f, _0x32ba06);
        }
        var _0x4e17b6 = null;
        var _0x321e2f = "ASCII";
        var _0x555bf4 = this.position;
        if ("string" == typeof _0x13444c && /:/.test(_0x13444c)) {
          _0x1853c7 = _0x13444c.split(':');
          _0x13444c = _0x1853c7[0x0];
          _0x4e17b6 = parseInt(_0x1853c7[0x1]);
        }
        if ("string" == typeof _0x13444c && /,/.test(_0x13444c)) {
          _0x1853c7 = _0x13444c.split(',');
          _0x13444c = _0x1853c7[0x0];
          _0x321e2f = parseInt(_0x1853c7[0x1]);
        }
        switch (_0x13444c) {
          case 'uint8':
            this.writeUint8(_0x47973f);
            break;
          case "int8":
            this.writeInt8(_0x47973f);
            break;
          case "uint16":
            this.writeUint16(_0x47973f, this.endianness);
            break;
          case "int16":
            this.writeInt16(_0x47973f, this.endianness);
            break;
          case "uint32":
            this.writeUint32(_0x47973f, this.endianness);
            break;
          case 'int32':
            this.writeInt32(_0x47973f, this.endianness);
            break;
          case 'float32':
            this.writeFloat32(_0x47973f, this.endianness);
            break;
          case "float64":
            this.writeFloat64(_0x47973f, this.endianness);
            break;
          case 'uint16be':
            this.writeUint16(_0x47973f, _0x5a360b.BIG_ENDIAN);
            break;
          case "int16be":
            this.writeInt16(_0x47973f, _0x5a360b.BIG_ENDIAN);
            break;
          case "uint32be":
            this.writeUint32(_0x47973f, _0x5a360b.BIG_ENDIAN);
            break;
          case 'int32be':
            this.writeInt32(_0x47973f, _0x5a360b.BIG_ENDIAN);
            break;
          case 'float32be':
            this.writeFloat32(_0x47973f, _0x5a360b.BIG_ENDIAN);
            break;
          case "float64be":
            this.writeFloat64(_0x47973f, _0x5a360b.BIG_ENDIAN);
            break;
          case 'uint16le':
            this.writeUint16(_0x47973f, _0x5a360b.LITTLE_ENDIAN);
            break;
          case "int16le":
            this.writeInt16(_0x47973f, _0x5a360b.LITTLE_ENDIAN);
            break;
          case 'uint32le':
            this.writeUint32(_0x47973f, _0x5a360b.LITTLE_ENDIAN);
            break;
          case "int32le":
            this.writeInt32(_0x47973f, _0x5a360b.LITTLE_ENDIAN);
            break;
          case "float32le":
            this.writeFloat32(_0x47973f, _0x5a360b.LITTLE_ENDIAN);
            break;
          case 'float64le':
            this.writeFloat64(_0x47973f, _0x5a360b.LITTLE_ENDIAN);
            break;
          case 'cstring':
            this.writeCString(_0x47973f, _0x4e17b6);
            break;
          case "string":
            this.writeString(_0x47973f, _0x321e2f, _0x4e17b6);
            break;
          case "u16string":
            this.writeUCS2String(_0x47973f, this.endianness, _0x4e17b6);
            break;
          case "u16stringle":
            this.writeUCS2String(_0x47973f, _0x5a360b.LITTLE_ENDIAN, _0x4e17b6);
            break;
          case "u16stringbe":
            this.writeUCS2String(_0x47973f, _0x5a360b.BIG_ENDIAN, _0x4e17b6);
            break;
          default:
            if (0x3 == _0x13444c.length) {
              var _0x1168e6 = _0x13444c[0x1];
              for (var _0x2d9178 = 0x0; _0x2d9178 < _0x47973f.length; _0x2d9178++) {
                this.writeType(_0x1168e6, _0x47973f[_0x2d9178]);
              }
              break;
            }
            this.writeStruct(_0x13444c, _0x47973f);
        }
        if (null != _0x4e17b6) {
          this.position = _0x555bf4;
          this._realloc(_0x4e17b6);
          this.position = _0x555bf4 + _0x4e17b6;
        }
      };
      _0x5a360b.prototype.writeUint64 = function (_0x1b3b6f) {
        var _0x253a19 = Math.floor(_0x1b3b6f / _0x45f206);
        this.writeUint32(_0x253a19);
        this.writeUint32(0xffffffff & _0x1b3b6f);
      };
      _0x5a360b.prototype.writeUint24 = function (_0x13fa3b) {
        this.writeUint8((0xff0000 & _0x13fa3b) >> 0x10);
        this.writeUint8((0xff00 & _0x13fa3b) >> 0x8);
        this.writeUint8(0xff & _0x13fa3b);
      };
      _0x5a360b.prototype.adjustUint32 = function (_0x3bee52, _0x49f6ed) {
        var _0x264af2 = this.position;
        this.seek(_0x3bee52);
        this.writeUint32(_0x49f6ed);
        this.seek(_0x264af2);
      };
      _0x5a360b.prototype.mapInt32Array = function (_0x347ed7, _0x4398c0) {
        this._realloc(0x4 * _0x347ed7);
        var _0x3f47bb = new Int32Array(this._buffer, this.byteOffset + this.position, _0x347ed7);
        _0x5a360b.arrayToNative(_0x3f47bb, null == _0x4398c0 ? this.endianness : _0x4398c0);
        this.position += 0x4 * _0x347ed7;
        return _0x3f47bb;
      };
      _0x5a360b.prototype.mapInt16Array = function (_0x176919, _0xb3467f) {
        this._realloc(0x2 * _0x176919);
        var _0x5169bf = new Int16Array(this._buffer, this.byteOffset + this.position, _0x176919);
        _0x5a360b.arrayToNative(_0x5169bf, null == _0xb3467f ? this.endianness : _0xb3467f);
        this.position += 0x2 * _0x176919;
        return _0x5169bf;
      };
      _0x5a360b.prototype.mapInt8Array = function (_0x4e3be5) {
        this._realloc(0x1 * _0x4e3be5);
        var _0x39ed63 = new Int8Array(this._buffer, this.byteOffset + this.position, _0x4e3be5);
        this.position += 0x1 * _0x4e3be5;
        return _0x39ed63;
      };
      _0x5a360b.prototype.mapUint32Array = function (_0x2d28b6, _0x571551) {
        this._realloc(0x4 * _0x2d28b6);
        var _0x2fc573 = new Uint32Array(this._buffer, this.byteOffset + this.position, _0x2d28b6);
        _0x5a360b.arrayToNative(_0x2fc573, null == _0x571551 ? this.endianness : _0x571551);
        this.position += 0x4 * _0x2d28b6;
        return _0x2fc573;
      };
      _0x5a360b.prototype.mapUint16Array = function (_0xc13ff0, _0x46e4d0) {
        this._realloc(0x2 * _0xc13ff0);
        var _0x35a102 = new Uint16Array(this._buffer, this.byteOffset + this.position, _0xc13ff0);
        _0x5a360b.arrayToNative(_0x35a102, null == _0x46e4d0 ? this.endianness : _0x46e4d0);
        this.position += 0x2 * _0xc13ff0;
        return _0x35a102;
      };
      _0x5a360b.prototype.mapFloat64Array = function (_0x3c6d82, _0x4534d4) {
        this._realloc(0x8 * _0x3c6d82);
        var _0x1b7cc5 = new Float64Array(this._buffer, this.byteOffset + this.position, _0x3c6d82);
        _0x5a360b.arrayToNative(_0x1b7cc5, null == _0x4534d4 ? this.endianness : _0x4534d4);
        this.position += 0x8 * _0x3c6d82;
        return _0x1b7cc5;
      };
      _0x5a360b.prototype.mapFloat32Array = function (_0x2b1313, _0x59da1c) {
        this._realloc(0x4 * _0x2b1313);
        var _0x5f20f1 = new Float32Array(this._buffer, this.byteOffset + this.position, _0x2b1313);
        _0x5a360b.arrayToNative(_0x5f20f1, null == _0x59da1c ? this.endianness : _0x59da1c);
        this.position += 0x4 * _0x2b1313;
        return _0x5f20f1;
      };
      var _0x51e96f = function (_0x2cd14b) {
        this.buffers = [];
        this.bufferIndex = -0x1;
        if (_0x2cd14b) {
          this.insertBuffer(_0x2cd14b);
          this.bufferIndex = 0x0;
        }
      };
      (_0x51e96f.prototype = new _0x5a360b(new ArrayBuffer(), 0x0, _0x5a360b.BIG_ENDIAN)).initialized = function () {
        var _0x4d5bef;
        return this.bufferIndex > -0x1 || (this.buffers.length > 0x0 ? 0x0 === (_0x4d5bef = this.buffers[0x0]).fileStart ? (this.buffer = _0x4d5bef, this.bufferIndex = 0x0, _0x3949d1.debug("MultiBufferStream", "Stream ready for parsing"), true) : (_0x3949d1.warn("MultiBufferStream", "The first buffer should have a fileStart of 0"), this.logBufferLevel(), false) : (_0x3949d1.warn("MultiBufferStream", "No buffer to start parsing from"), this.logBufferLevel(), false));
      };
      ArrayBuffer.concat = function (_0x2d4d99, _0x592612) {
        _0x3949d1.debug("ArrayBuffer", "Trying to create a new buffer of size: " + (_0x2d4d99.byteLength + _0x592612.byteLength));
        var _0x1b930b = new Uint8Array(_0x2d4d99.byteLength + _0x592612.byteLength);
        _0x1b930b.set(new Uint8Array(_0x2d4d99), 0x0);
        _0x1b930b.set(new Uint8Array(_0x592612), _0x2d4d99.byteLength);
        return _0x1b930b.buffer;
      };
      _0x51e96f.prototype.reduceBuffer = function (_0x318539, _0x3d8c4a, _0x53e93d) {
        var _0x4b7981;
        (_0x4b7981 = new Uint8Array(_0x53e93d)).set(new Uint8Array(_0x318539, _0x3d8c4a, _0x53e93d));
        _0x4b7981.buffer.fileStart = _0x318539.fileStart + _0x3d8c4a;
        _0x4b7981.buffer.usedBytes = 0x0;
        return _0x4b7981.buffer;
      };
      _0x51e96f.prototype.insertBuffer = function (_0x52f28a) {
        var _0x131dfd = true;
        for (var _0x744999 = 0x0; _0x744999 < this.buffers.length; _0x744999++) {
          var _0x13bcd5 = this.buffers[_0x744999];
          if (_0x52f28a.fileStart <= _0x13bcd5.fileStart) {
            if (_0x52f28a.fileStart === _0x13bcd5.fileStart) {
              if (_0x52f28a.byteLength > _0x13bcd5.byteLength) {
                this.buffers.splice(_0x744999, 0x1);
                _0x744999--;
                continue;
              }
              _0x3949d1.warn("MultiBufferStream", "Buffer (fileStart: " + _0x52f28a.fileStart + " - Length: " + _0x52f28a.byteLength + ") already appended, ignoring");
            } else {
              if (!(_0x52f28a.fileStart + _0x52f28a.byteLength <= _0x13bcd5.fileStart)) {
                _0x52f28a = this.reduceBuffer(_0x52f28a, 0x0, _0x13bcd5.fileStart - _0x52f28a.fileStart);
              }
              _0x3949d1.debug("MultiBufferStream", "Appending new buffer (fileStart: " + _0x52f28a.fileStart + " - Length: " + _0x52f28a.byteLength + ')');
              this.buffers.splice(_0x744999, 0x0, _0x52f28a);
              if (0x0 === _0x744999) {
                this.buffer = _0x52f28a;
              }
            }
            _0x131dfd = false;
            break;
          }
          if (_0x52f28a.fileStart < _0x13bcd5.fileStart + _0x13bcd5.byteLength) {
            var _0x47727f = _0x13bcd5.fileStart + _0x13bcd5.byteLength - _0x52f28a.fileStart;
            var _0x1d3397 = _0x52f28a.byteLength - _0x47727f;
            if (!(_0x1d3397 > 0x0)) {
              _0x131dfd = false;
              break;
            }
            _0x52f28a = this.reduceBuffer(_0x52f28a, _0x47727f, _0x1d3397);
          }
        }
        if (_0x131dfd) {
          _0x3949d1.debug("MultiBufferStream", "Appending new buffer (fileStart: " + _0x52f28a.fileStart + " - Length: " + _0x52f28a.byteLength + ')');
          this.buffers.push(_0x52f28a);
          if (0x0 === _0x744999) {
            this.buffer = _0x52f28a;
          }
        }
      };
      _0x51e96f.prototype.logBufferLevel = function (_0x640837) {
        var _0x223dc9;
        var _0x338812;
        var _0x3960c7;
        var _0x329553;
        var _0x10ee47;
        var _0x3fab29 = [];
        var _0x3bd594 = '';
        _0x3960c7 = 0x0;
        _0x329553 = 0x0;
        for (_0x223dc9 = 0x0; _0x223dc9 < this.buffers.length; _0x223dc9++) {
          _0x338812 = this.buffers[_0x223dc9];
          if (0x0 === _0x223dc9) {
            _0x10ee47 = {};
            _0x3fab29.push(_0x10ee47);
            _0x10ee47.start = _0x338812.fileStart;
            _0x10ee47.end = _0x338812.fileStart + _0x338812.byteLength;
            _0x3bd594 += '[' + _0x10ee47.start + '-';
          } else if (_0x10ee47.end === _0x338812.fileStart) {
            _0x10ee47.end = _0x338812.fileStart + _0x338812.byteLength;
          } else {
            (_0x10ee47 = {}).start = _0x338812.fileStart;
            _0x3bd594 += _0x3fab29[_0x3fab29.length - 0x1].end - 0x1 + "], [" + _0x10ee47.start + '-';
            _0x10ee47.end = _0x338812.fileStart + _0x338812.byteLength;
            _0x3fab29.push(_0x10ee47);
          }
          _0x3960c7 += _0x338812.usedBytes;
          _0x329553 += _0x338812.byteLength;
        }
        if (_0x3fab29.length > 0x0) {
          _0x3bd594 += _0x10ee47.end - 0x1 + ']';
        }
        var _0x45b01a = _0x640837 ? _0x3949d1.info : _0x3949d1.debug;
        if (0x0 === this.buffers.length) {
          _0x45b01a("MultiBufferStream", "No more buffer in memory");
        } else {
          _0x45b01a("MultiBufferStream", this.buffers.length + " stored buffer(s) (" + _0x3960c7 + '/' + _0x329553 + " bytes), continuous ranges: " + _0x3bd594);
        }
      };
      _0x51e96f.prototype.cleanBuffers = function () {
        var _0xd52eb7;
        var _0x4e478e;
        for (_0xd52eb7 = 0x0; _0xd52eb7 < this.buffers.length; _0xd52eb7++) {
          if ((_0x4e478e = this.buffers[_0xd52eb7]).usedBytes === _0x4e478e.byteLength) {
            _0x3949d1.debug("MultiBufferStream", "Removing buffer #" + _0xd52eb7);
            this.buffers.splice(_0xd52eb7, 0x1);
            _0xd52eb7--;
          }
        }
      };
      _0x51e96f.prototype.mergeNextBuffer = function () {
        var _0x12e90d;
        if (this.bufferIndex + 0x1 < this.buffers.length) {
          if ((_0x12e90d = this.buffers[this.bufferIndex + 0x1]).fileStart === this.buffer.fileStart + this.buffer.byteLength) {
            var _0x552bc5 = this.buffer.byteLength;
            var _0x4bb1b8 = this.buffer.usedBytes;
            var _0x43be44 = this.buffer.fileStart;
            this.buffers[this.bufferIndex] = ArrayBuffer.concat(this.buffer, _0x12e90d);
            this.buffer = this.buffers[this.bufferIndex];
            this.buffers.splice(this.bufferIndex + 0x1, 0x1);
            this.buffer.usedBytes = _0x4bb1b8;
            this.buffer.fileStart = _0x43be44;
            _0x3949d1.debug("ISOFile", "Concatenating buffer for box parsing (length: " + _0x552bc5 + '->' + this.buffer.byteLength + ')');
            return true;
          }
          return false;
        }
        return false;
      };
      _0x51e96f.prototype.findPosition = function (_0x192de7, _0x3b566a, _0x4e5c48) {
        var _0x863527;
        var _0x2bf37f = null;
        var _0x33275e = -0x1;
        for (_0x863527 = true === _0x192de7 ? 0x0 : this.bufferIndex; _0x863527 < this.buffers.length && (_0x2bf37f = this.buffers[_0x863527]).fileStart <= _0x3b566a;) {
          _0x33275e = _0x863527;
          if (_0x4e5c48) {
            if (_0x2bf37f.fileStart + _0x2bf37f.byteLength <= _0x3b566a) {
              _0x2bf37f.usedBytes = _0x2bf37f.byteLength;
            } else {
              _0x2bf37f.usedBytes = _0x3b566a - _0x2bf37f.fileStart;
            }
            this.logBufferLevel();
          }
          _0x863527++;
        }
        return -0x1 !== _0x33275e && (_0x2bf37f = this.buffers[_0x33275e]).fileStart + _0x2bf37f.byteLength >= _0x3b566a ? (_0x3949d1.debug("MultiBufferStream", "Found position in existing buffer #" + _0x33275e), _0x33275e) : -0x1;
      };
      _0x51e96f.prototype.findEndContiguousBuf = function (_0x32bcf4) {
        var _0x456997;
        var _0x20c488;
        var _0x401b36;
        var _0x3e5a8e = undefined !== _0x32bcf4 ? _0x32bcf4 : this.bufferIndex;
        _0x20c488 = this.buffers[_0x3e5a8e];
        if (this.buffers.length > _0x3e5a8e + 0x1) {
          for (_0x456997 = _0x3e5a8e + 0x1; _0x456997 < this.buffers.length && (_0x401b36 = this.buffers[_0x456997]).fileStart === _0x20c488.fileStart + _0x20c488.byteLength; _0x456997++) {
            _0x20c488 = _0x401b36;
          }
        }
        return _0x20c488.fileStart + _0x20c488.byteLength;
      };
      _0x51e96f.prototype.getEndFilePositionAfter = function (_0x1502c2) {
        var _0x5622ba = this.findPosition(true, _0x1502c2, false);
        return -0x1 !== _0x5622ba ? this.findEndContiguousBuf(_0x5622ba) : _0x1502c2;
      };
      _0x51e96f.prototype.addUsedBytes = function (_0x1e0fb5) {
        this.buffer.usedBytes += _0x1e0fb5;
        this.logBufferLevel();
      };
      _0x51e96f.prototype.setAllUsedBytes = function () {
        this.buffer.usedBytes = this.buffer.byteLength;
        this.logBufferLevel();
      };
      _0x51e96f.prototype.seek = function (_0x156e89, _0x4cb7d0, _0x30d289) {
        var _0x399fbd;
        return -0x1 !== (_0x399fbd = this.findPosition(_0x4cb7d0, _0x156e89, _0x30d289)) ? (this.buffer = this.buffers[_0x399fbd], this.bufferIndex = _0x399fbd, this.position = _0x156e89 - this.buffer.fileStart, _0x3949d1.debug("MultiBufferStream", "Repositioning parser at buffer position: " + this.position), true) : (_0x3949d1.debug("MultiBufferStream", "Position " + _0x156e89 + " not found in buffered data"), false);
      };
      _0x51e96f.prototype.getPosition = function () {
        if (-0x1 === this.bufferIndex || null === this.buffers[this.bufferIndex]) {
          throw "Error accessing position in the MultiBufferStream";
        }
        return this.buffers[this.bufferIndex].fileStart + this.position;
      };
      _0x51e96f.prototype.getLength = function () {
        return this.byteLength;
      };
      _0x51e96f.prototype.getEndPosition = function () {
        if (-0x1 === this.bufferIndex || null === this.buffers[this.bufferIndex]) {
          throw "Error accessing position in the MultiBufferStream";
        }
        return this.buffers[this.bufferIndex].fileStart + this.byteLength;
      };
      _0x4e1140.MultiBufferStream = _0x51e96f;
      var _0x3e8c02 = function () {
        var _0x25911b = [];
        _0x25911b[0x3] = "ES_Descriptor";
        _0x25911b[0x4] = "DecoderConfigDescriptor";
        _0x25911b[0x5] = "DecoderSpecificInfo";
        _0x25911b[0x6] = "SLConfigDescriptor";
        this.getDescriptorName = function (_0x1026f1) {
          return _0x25911b[_0x1026f1];
        };
        var _0x115620 = this;
        var _0x5e262b = {};
        this.parseOneDescriptor = function (_0x26b4cf) {
          var _0x4f32e8;
          var _0x425e2c;
          var _0x149258;
          var _0x1a7d81 = 0x0;
          _0x4f32e8 = _0x26b4cf.readUint8();
          for (_0x149258 = _0x26b4cf.readUint8(); 0x80 & _0x149258;) {
            _0x1a7d81 = (0x7f & _0x149258) << 0x7;
            _0x149258 = _0x26b4cf.readUint8();
          }
          _0x1a7d81 += 0x7f & _0x149258;
          _0x3949d1.debug("MPEG4DescriptorParser", "Found " + (_0x25911b[_0x4f32e8] || "Descriptor " + _0x4f32e8) + ", size " + _0x1a7d81 + " at position " + _0x26b4cf.getPosition());
          (_0x425e2c = _0x25911b[_0x4f32e8] ? new _0x5e262b[_0x25911b[_0x4f32e8]](_0x1a7d81) : new _0x5e262b.Descriptor(_0x1a7d81)).parse(_0x26b4cf);
          return _0x425e2c;
        };
        _0x5e262b.Descriptor = function (_0x1e2c74, _0x49ced7) {
          this.tag = _0x1e2c74;
          this.size = _0x49ced7;
          this.descs = [];
        };
        _0x5e262b.Descriptor.prototype.parse = function (_0x178727) {
          this.data = _0x178727.readUint8Array(this.size);
        };
        _0x5e262b.Descriptor.prototype.findDescriptor = function (_0x14b03a) {
          for (var _0x5a7e5e = 0x0; _0x5a7e5e < this.descs.length; _0x5a7e5e++) {
            if (this.descs[_0x5a7e5e].tag == _0x14b03a) {
              return this.descs[_0x5a7e5e];
            }
          }
          return null;
        };
        _0x5e262b.Descriptor.prototype.parseRemainingDescriptors = function (_0x289f35) {
          for (var _0x41c640 = _0x289f35.position; _0x289f35.position < _0x41c640 + this.size;) {
            var _0x4f4879 = _0x115620.parseOneDescriptor(_0x289f35);
            this.descs.push(_0x4f4879);
          }
        };
        _0x5e262b.ES_Descriptor = function (_0x3a5bcf) {
          _0x5e262b.Descriptor.call(this, 0x3, _0x3a5bcf);
        };
        _0x5e262b.ES_Descriptor.prototype = new _0x5e262b.Descriptor();
        _0x5e262b.ES_Descriptor.prototype.parse = function (_0x4d4a04) {
          this.ES_ID = _0x4d4a04.readUint16();
          this.flags = _0x4d4a04.readUint8();
          this.size -= 0x3;
          if (0x80 & this.flags) {
            this.dependsOn_ES_ID = _0x4d4a04.readUint16();
            this.size -= 0x2;
          } else {
            this.dependsOn_ES_ID = 0x0;
          }
          if (0x40 & this.flags) {
            var _0x44eb50 = _0x4d4a04.readUint8();
            this.URL = _0x4d4a04.readString(_0x44eb50);
            this.size -= _0x44eb50 + 0x1;
          } else {
            this.URL = '';
          }
          if (0x20 & this.flags) {
            this.OCR_ES_ID = _0x4d4a04.readUint16();
            this.size -= 0x2;
          } else {
            this.OCR_ES_ID = 0x0;
          }
          this.parseRemainingDescriptors(_0x4d4a04);
        };
        _0x5e262b.ES_Descriptor.prototype.getOTI = function (_0x28a71b) {
          var _0x469b9a = this.findDescriptor(0x4);
          return _0x469b9a ? _0x469b9a.oti : 0x0;
        };
        _0x5e262b.ES_Descriptor.prototype.getAudioConfig = function (_0x3976a4) {
          var _0xa3d69f = this.findDescriptor(0x4);
          if (!_0xa3d69f) {
            return null;
          }
          var _0x35f728 = _0xa3d69f.findDescriptor(0x5);
          if (_0x35f728 && _0x35f728.data) {
            var _0x46640a = (0xf8 & _0x35f728.data[0x0]) >> 0x3;
            if (0x1f === _0x46640a && _0x35f728.data.length >= 0x2) {
              _0x46640a = 0x20 + ((0x7 & _0x35f728.data[0x0]) << 0x3) + ((0xe0 & _0x35f728.data[0x1]) >> 0x5);
            }
            return _0x46640a;
          }
          return null;
        };
        _0x5e262b.DecoderConfigDescriptor = function (_0x3bcc41) {
          _0x5e262b.Descriptor.call(this, 0x4, _0x3bcc41);
        };
        _0x5e262b.DecoderConfigDescriptor.prototype = new _0x5e262b.Descriptor();
        _0x5e262b.DecoderConfigDescriptor.prototype.parse = function (_0x2e5699) {
          this.oti = _0x2e5699.readUint8();
          this.streamType = _0x2e5699.readUint8();
          this.bufferSize = _0x2e5699.readUint24();
          this.maxBitrate = _0x2e5699.readUint32();
          this.avgBitrate = _0x2e5699.readUint32();
          this.size -= 0xd;
          this.parseRemainingDescriptors(_0x2e5699);
        };
        _0x5e262b.DecoderSpecificInfo = function (_0x511574) {
          _0x5e262b.Descriptor.call(this, 0x5, _0x511574);
        };
        _0x5e262b.DecoderSpecificInfo.prototype = new _0x5e262b.Descriptor();
        _0x5e262b.SLConfigDescriptor = function (_0x3cddc1) {
          _0x5e262b.Descriptor.call(this, 0x6, _0x3cddc1);
        };
        _0x5e262b.SLConfigDescriptor.prototype = new _0x5e262b.Descriptor();
        return this;
      };
      _0x4e1140.MPEG4DescriptorParser = _0x3e8c02;
      var _0x3cde36 = {
        'ERR_INVALID_DATA': -0x1,
        'ERR_NOT_ENOUGH_DATA': 0x0,
        'OK': 0x1,
        'BASIC_BOXES': ['mdat', "idat", 'free', 'skip', "meco", "strk"],
        'FULL_BOXES': ["hmhd", "nmhd", "iods", "xml ", "bxml", 'ipro', "mere"],
        'CONTAINER_BOXES': [["moov", ["trak", "pssh"]], ["trak"], ['edts'], ["mdia"], ["minf"], ["dinf"], ["stbl", ['sgpd', "sbgp"]], ["mvex", ["trex"]], ["moof", ["traf"]], ["traf", ["trun", "sgpd", "sbgp"]], ["vttc"], ["tref"], ["iref"], ["mfra", ["tfra"]], ['meco'], ["hnti"], ["hinf"], ["strk"], ["strd"], ['sinf'], ['rinf'], ["schi"], ["trgr"], ["udta", ['kind']], ["iprp", ["ipma"]], ["ipco"]],
        'boxCodes': [],
        'fullBoxCodes': [],
        'containerBoxCodes': [],
        'sampleEntryCodes': {},
        'sampleGroupEntryCodes': [],
        'trackGroupTypes': [],
        'UUIDBoxes': {},
        'UUIDs': [],
        'initialize': function () {
          _0x3cde36.FullBox.prototype = new _0x3cde36.Box();
          _0x3cde36.ContainerBox.prototype = new _0x3cde36.Box();
          _0x3cde36.SampleEntry.prototype = new _0x3cde36.Box();
          _0x3cde36.TrackGroupTypeBox.prototype = new _0x3cde36.FullBox();
          _0x3cde36.BASIC_BOXES.forEach(function (_0x3192a0) {
            _0x3cde36.createBoxCtor(_0x3192a0);
          });
          _0x3cde36.FULL_BOXES.forEach(function (_0x858e2b) {
            _0x3cde36.createFullBoxCtor(_0x858e2b);
          });
          _0x3cde36.CONTAINER_BOXES.forEach(function (_0x33d536) {
            _0x3cde36.createContainerBoxCtor(_0x33d536[0x0], null, _0x33d536[0x1]);
          });
        },
        'Box': function (_0x4b1772, _0x573568, _0x1fd3ed) {
          this.type = _0x4b1772;
          this.size = _0x573568;
          this.uuid = _0x1fd3ed;
        },
        'FullBox': function (_0x3272ad, _0x2d95f3, _0x2dc08d) {
          _0x3cde36.Box.call(this, _0x3272ad, _0x2d95f3, _0x2dc08d);
          this.flags = 0x0;
          this.version = 0x0;
        },
        'ContainerBox': function (_0x47a053, _0x5d5351, _0x34b92b) {
          _0x3cde36.Box.call(this, _0x47a053, _0x5d5351, _0x34b92b);
          this.boxes = [];
        },
        'SampleEntry': function (_0x457505, _0x5d54d5, _0x313e13, _0x30f665) {
          _0x3cde36.ContainerBox.call(this, _0x457505, _0x5d54d5);
          this.hdr_size = _0x313e13;
          this.start = _0x30f665;
        },
        'SampleGroupEntry': function (_0xf4b26) {
          this.grouping_type = _0xf4b26;
        },
        'TrackGroupTypeBox': function (_0x53897b, _0x1a2518) {
          _0x3cde36.FullBox.call(this, _0x53897b, _0x1a2518);
        },
        'createBoxCtor': function (_0x4d9f09, _0x1aae8a) {
          _0x3cde36.boxCodes.push(_0x4d9f09);
          _0x3cde36[_0x4d9f09 + "Box"] = function (_0x5fc9df) {
            _0x3cde36.Box.call(this, _0x4d9f09, _0x5fc9df);
          };
          _0x3cde36[_0x4d9f09 + 'Box'].prototype = new _0x3cde36.Box();
          if (_0x1aae8a) {
            _0x3cde36[_0x4d9f09 + 'Box'].prototype.parse = _0x1aae8a;
          }
        },
        'createFullBoxCtor': function (_0x1cd182, _0x4e8769) {
          _0x3cde36[_0x1cd182 + "Box"] = function (_0x589b80) {
            _0x3cde36.FullBox.call(this, _0x1cd182, _0x589b80);
          };
          _0x3cde36[_0x1cd182 + "Box"].prototype = new _0x3cde36.FullBox();
          _0x3cde36[_0x1cd182 + 'Box'].prototype.parse = function (_0x4c7f24) {
            this.parseFullHeader(_0x4c7f24);
            if (_0x4e8769) {
              _0x4e8769.call(this, _0x4c7f24);
            }
          };
        },
        'addSubBoxArrays': function (_0x4c2f43) {
          if (_0x4c2f43) {
            this.subBoxNames = _0x4c2f43;
            var _0x76b766 = _0x4c2f43.length;
            for (var _0x526393 = 0x0; _0x526393 < _0x76b766; _0x526393++) {
              this[_0x4c2f43[_0x526393] + 's'] = [];
            }
          }
        },
        'createContainerBoxCtor': function (_0x358456, _0x3f77fa, _0x281403) {
          _0x3cde36[_0x358456 + "Box"] = function (_0x4198df) {
            _0x3cde36.ContainerBox.call(this, _0x358456, _0x4198df);
            _0x3cde36.addSubBoxArrays.call(this, _0x281403);
          };
          _0x3cde36[_0x358456 + "Box"].prototype = new _0x3cde36.ContainerBox();
          if (_0x3f77fa) {
            _0x3cde36[_0x358456 + 'Box'].prototype.parse = _0x3f77fa;
          }
        },
        'createMediaSampleEntryCtor': function (_0x2d87d9, _0x3c7b5b, _0x257bae) {
          _0x3cde36.sampleEntryCodes[_0x2d87d9] = [];
          _0x3cde36[_0x2d87d9 + "SampleEntry"] = function (_0x33ed2c, _0x4e6523) {
            _0x3cde36.SampleEntry.call(this, _0x33ed2c, _0x4e6523);
            _0x3cde36.addSubBoxArrays.call(this, _0x257bae);
          };
          _0x3cde36[_0x2d87d9 + "SampleEntry"].prototype = new _0x3cde36.SampleEntry();
          if (_0x3c7b5b) {
            _0x3cde36[_0x2d87d9 + "SampleEntry"].prototype.parse = _0x3c7b5b;
          }
        },
        'createSampleEntryCtor': function (_0x5e627d, _0x7d35e8, _0x19b625, _0x3ecc9a) {
          _0x3cde36.sampleEntryCodes[_0x5e627d].push(_0x7d35e8);
          _0x3cde36[_0x7d35e8 + "SampleEntry"] = function (_0x4c1b37) {
            _0x3cde36[_0x5e627d + "SampleEntry"].call(this, _0x7d35e8, _0x4c1b37);
            _0x3cde36.addSubBoxArrays.call(this, _0x3ecc9a);
          };
          _0x3cde36[_0x7d35e8 + "SampleEntry"].prototype = new _0x3cde36[_0x5e627d + "SampleEntry"]();
          if (_0x19b625) {
            _0x3cde36[_0x7d35e8 + "SampleEntry"].prototype.parse = _0x19b625;
          }
        },
        'createEncryptedSampleEntryCtor': function (_0x4bb330, _0x1f0fc3, _0x57dc49) {
          _0x3cde36.createSampleEntryCtor.call(this, _0x4bb330, _0x1f0fc3, _0x57dc49, ["sinf"]);
        },
        'createSampleGroupCtor': function (_0x2a5915, _0x3a0223) {
          _0x3cde36[_0x2a5915 + "SampleGroupEntry"] = function (_0xc41042) {
            _0x3cde36.SampleGroupEntry.call(this, _0x2a5915, _0xc41042);
          };
          _0x3cde36[_0x2a5915 + "SampleGroupEntry"].prototype = new _0x3cde36.SampleGroupEntry();
          if (_0x3a0223) {
            _0x3cde36[_0x2a5915 + "SampleGroupEntry"].prototype.parse = _0x3a0223;
          }
        },
        'createTrackGroupCtor': function (_0x35991c, _0x1c8921) {
          _0x3cde36[_0x35991c + "TrackGroupTypeBox"] = function (_0x14ca05) {
            _0x3cde36.TrackGroupTypeBox.call(this, _0x35991c, _0x14ca05);
          };
          _0x3cde36[_0x35991c + "TrackGroupTypeBox"].prototype = new _0x3cde36.TrackGroupTypeBox();
          if (_0x1c8921) {
            _0x3cde36[_0x35991c + "TrackGroupTypeBox"].prototype.parse = _0x1c8921;
          }
        },
        'createUUIDBox': function (_0x34f3c1, _0x27c817, _0x197728, _0x460896) {
          _0x3cde36.UUIDs.push(_0x34f3c1);
          _0x3cde36.UUIDBoxes[_0x34f3c1] = function (_0x185bb4) {
            if (_0x27c817) {
              _0x3cde36.FullBox.call(this, "uuid", _0x185bb4, _0x34f3c1);
            } else if (_0x197728) {
              _0x3cde36.ContainerBox.call(this, "uuid", _0x185bb4, _0x34f3c1);
            } else {
              _0x3cde36.Box.call(this, "uuid", _0x185bb4, _0x34f3c1);
            }
          };
          _0x3cde36.UUIDBoxes[_0x34f3c1].prototype = _0x27c817 ? new _0x3cde36.FullBox() : _0x197728 ? new _0x3cde36.ContainerBox() : new _0x3cde36.Box();
          if (_0x460896) {
            _0x3cde36.UUIDBoxes[_0x34f3c1].prototype.parse = _0x27c817 ? function (_0x52221d) {
              this.parseFullHeader(_0x52221d);
              if (_0x460896) {
                _0x460896.call(this, _0x52221d);
              }
            } : _0x460896;
          }
        }
      };
      _0x3cde36.initialize();
      _0x3cde36.TKHD_FLAG_ENABLED = 0x1;
      _0x3cde36.TKHD_FLAG_IN_MOVIE = 0x2;
      _0x3cde36.TKHD_FLAG_IN_PREVIEW = 0x4;
      _0x3cde36.TFHD_FLAG_BASE_DATA_OFFSET = 0x1;
      _0x3cde36.TFHD_FLAG_SAMPLE_DESC = 0x2;
      _0x3cde36.TFHD_FLAG_SAMPLE_DUR = 0x8;
      _0x3cde36.TFHD_FLAG_SAMPLE_SIZE = 0x10;
      _0x3cde36.TFHD_FLAG_SAMPLE_FLAGS = 0x20;
      _0x3cde36.TFHD_FLAG_DUR_EMPTY = 0x10000;
      _0x3cde36.TFHD_FLAG_DEFAULT_BASE_IS_MOOF = 0x20000;
      _0x3cde36.TRUN_FLAGS_DATA_OFFSET = 0x1;
      _0x3cde36.TRUN_FLAGS_FIRST_FLAG = 0x4;
      _0x3cde36.TRUN_FLAGS_DURATION = 0x100;
      _0x3cde36.TRUN_FLAGS_SIZE = 0x200;
      _0x3cde36.TRUN_FLAGS_FLAGS = 0x400;
      _0x3cde36.TRUN_FLAGS_CTS_OFFSET = 0x800;
      _0x3cde36.Box.prototype.add = function (_0x33fe24) {
        return this.addBox(new _0x3cde36[_0x33fe24 + 'Box']());
      };
      _0x3cde36.Box.prototype.addBox = function (_0x3f0428) {
        this.boxes.push(_0x3f0428);
        if (this[_0x3f0428.type + 's']) {
          this[_0x3f0428.type + 's'].push(_0x3f0428);
        } else {
          this[_0x3f0428.type] = _0x3f0428;
        }
        return _0x3f0428;
      };
      _0x3cde36.Box.prototype.set = function (_0x4e4d8e, _0x53386b) {
        this[_0x4e4d8e] = _0x53386b;
        return this;
      };
      _0x3cde36.Box.prototype.addEntry = function (_0x160ddf, _0x78a8c) {
        var _0x216812 = _0x78a8c || "entries";
        if (!this[_0x216812]) {
          this[_0x216812] = [];
        }
        this[_0x216812].push(_0x160ddf);
        return this;
      };
      _0x4e1140.BoxParser = _0x3cde36;
      _0x3cde36.parseUUID = function (_0x325957) {
        return _0x3cde36.parseHex16(_0x325957);
      };
      _0x3cde36.parseHex16 = function (_0x4e7039) {
        var _0x461030 = '';
        for (var _0x50a0ad = 0x0; _0x50a0ad < 0x10; _0x50a0ad++) {
          var _0x15c49a = _0x4e7039.readUint8().toString(0x10);
          _0x461030 += 0x1 === _0x15c49a.length ? '0' + _0x15c49a : _0x15c49a;
        }
        return _0x461030;
      };
      _0x3cde36.parseOneBox = function (_0x339cc1, _0x3f2214, _0x5b3b12) {
        var _0x3d80e2;
        var _0x3a0160;
        var _0x295ef0;
        var _0x5a71ad = _0x339cc1.getPosition();
        var _0x5b5677 = 0x0;
        var _0x43e0a9 = {
          'code': 0x0
        };
        if (_0x339cc1.getEndPosition() - _0x5a71ad < 0x8) {
          _0x3949d1.debug("BoxParser", "Not enough data in stream to parse the type and size of the box");
          return _0x43e0a9;
        }
        var _0x16b875 = {
          code: 0x0
        };
        if (_0x5b3b12 && _0x5b3b12 < 0x8) {
          _0x3949d1.debug("BoxParser", "Not enough bytes left in the parent box to parse a new box");
          return _0x16b875;
        }
        var _0x26dd8e = _0x339cc1.readUint32();
        var _0x54b9b9 = _0x339cc1.readString(0x4);
        var _0x25aff7 = _0x54b9b9;
        _0x3949d1.debug("BoxParser", "Found box of type '" + _0x54b9b9 + "' and size " + _0x26dd8e + " at position " + _0x5a71ad);
        _0x5b5677 = 0x8;
        if ('uuid' == _0x54b9b9) {
          var _0x3dcd64 = {
            code: 0x0
          };
          if (_0x339cc1.getEndPosition() - _0x339cc1.getPosition() < 0x10 || _0x5b3b12 - _0x5b5677 < 0x10) {
            _0x339cc1.seek(_0x5a71ad);
            _0x3949d1.debug("BoxParser", "Not enough bytes left in the parent box to parse a UUID box");
            return _0x3dcd64;
          }
          _0x5b5677 += 0x10;
          _0x25aff7 = _0x295ef0 = _0x3cde36.parseUUID(_0x339cc1);
        }
        if (0x1 == _0x26dd8e) {
          var _0x596f02 = {
            code: 0x0
          };
          if (_0x339cc1.getEndPosition() - _0x339cc1.getPosition() < 0x8 || _0x5b3b12 && _0x5b3b12 - _0x5b5677 < 0x8) {
            _0x339cc1.seek(_0x5a71ad);
            _0x3949d1.warn("BoxParser", "Not enough data in stream to parse the extended size of the \"" + _0x54b9b9 + "\" box");
            return _0x596f02;
          }
          _0x26dd8e = _0x339cc1.readUint64();
          _0x5b5677 += 0x8;
        } else {
          if (0x0 === _0x26dd8e) {
            if (_0x5b3b12) {
              _0x26dd8e = _0x5b3b12;
            } else {
              if ('mdat' !== _0x54b9b9) {
                _0x3949d1.error("BoxParser", "Unlimited box size not supported for type: '" + _0x54b9b9 + "'");
                _0x3d80e2 = new _0x3cde36.Box(_0x54b9b9, _0x26dd8e);
                return {
                  'code': 0x1,
                  'box': _0x3d80e2,
                  'size': _0x3d80e2.size
                };
              }
            }
          }
        }
        return 0x0 !== _0x26dd8e && _0x26dd8e < _0x5b5677 ? (_0x3949d1.error('BoxParser', "Box of type " + _0x54b9b9 + " has an invalid size " + _0x26dd8e + " (too small to be a box)"), {
          'code': 0x0,
          'type': _0x54b9b9,
          'size': _0x26dd8e,
          'hdr_size': _0x5b5677,
          'start': _0x5a71ad
        }) : 0x0 !== _0x26dd8e && _0x5b3b12 && _0x26dd8e > _0x5b3b12 ? (_0x3949d1.error('BoxParser', "Box of type '" + _0x54b9b9 + "' has a size " + _0x26dd8e + " greater than its container size " + _0x5b3b12), {
          'code': 0x0,
          'type': _0x54b9b9,
          'size': _0x26dd8e,
          'hdr_size': _0x5b5677,
          'start': _0x5a71ad
        }) : 0x0 !== _0x26dd8e && _0x5a71ad + _0x26dd8e > _0x339cc1.getEndPosition() ? (_0x339cc1.seek(_0x5a71ad), _0x3949d1.info('BoxParser', "Not enough data in stream to parse the entire '" + _0x54b9b9 + "' box"), {
          'code': 0x0,
          'type': _0x54b9b9,
          'size': _0x26dd8e,
          'hdr_size': _0x5b5677,
          'start': _0x5a71ad
        }) : _0x3f2214 ? {
          'code': 0x1,
          'type': _0x54b9b9,
          'size': _0x26dd8e,
          'hdr_size': _0x5b5677,
          'start': _0x5a71ad
        } : (_0x3cde36[_0x54b9b9 + "Box"] ? _0x3d80e2 = new _0x3cde36[_0x54b9b9 + "Box"](_0x26dd8e) : "uuid" !== _0x54b9b9 ? (_0x3949d1.warn("BoxParser", "Unknown box type: '" + _0x54b9b9 + "'"), (_0x3d80e2 = new _0x3cde36.Box(_0x54b9b9, _0x26dd8e)).has_unparsed_data = true) : _0x3cde36.UUIDBoxes[_0x295ef0] ? _0x3d80e2 = new _0x3cde36.UUIDBoxes[_0x295ef0](_0x26dd8e) : (_0x3949d1.warn('BoxParser', "Unknown uuid type: '" + _0x295ef0 + "'"), (_0x3d80e2 = new _0x3cde36.Box(_0x54b9b9, _0x26dd8e)).uuid = _0x295ef0, _0x3d80e2.has_unparsed_data = true), _0x3d80e2.hdr_size = _0x5b5677, _0x3d80e2.start = _0x5a71ad, _0x3d80e2.write === _0x3cde36.Box.prototype.write && "mdat" !== _0x3d80e2.type && (_0x3949d1.info("BoxParser", "'" + _0x25aff7 + "' box writing not yet implemented, keeping unparsed data in memory for later write"), _0x3d80e2.parseDataAndRewind(_0x339cc1)), _0x3d80e2.parse(_0x339cc1), (_0x3a0160 = _0x339cc1.getPosition() - (_0x3d80e2.start + _0x3d80e2.size)) < 0x0 ? (_0x3949d1.warn("BoxParser", "Parsing of box '" + _0x25aff7 + "' did not read the entire indicated box data size (missing " + -_0x3a0160 + " bytes), seeking forward"), _0x339cc1.seek(_0x3d80e2.start + _0x3d80e2.size)) : _0x3a0160 > 0x0 && (_0x3949d1.error("BoxParser", "Parsing of box '" + _0x25aff7 + "' read " + _0x3a0160 + " more bytes than the indicated box data size, seeking backwards"), 0x0 !== _0x3d80e2.size && _0x339cc1.seek(_0x3d80e2.start + _0x3d80e2.size)), {
          'code': 0x1,
          'box': _0x3d80e2,
          'size': _0x3d80e2.size
        });
      };
      _0x3cde36.Box.prototype.parse = function (_0x3bc6a8) {
        if ("mdat" != this.type) {
          this.data = _0x3bc6a8.readUint8Array(this.size - this.hdr_size);
        } else if (0x0 === this.size) {
          _0x3bc6a8.seek(_0x3bc6a8.getEndPosition());
        } else {
          _0x3bc6a8.seek(this.start + this.size);
        }
      };
      _0x3cde36.Box.prototype.parseDataAndRewind = function (_0x2d864f) {
        this.data = _0x2d864f.readUint8Array(this.size - this.hdr_size);
        _0x2d864f.position -= this.size - this.hdr_size;
      };
      _0x3cde36.FullBox.prototype.parseDataAndRewind = function (_0x39a7f6) {
        this.parseFullHeader(_0x39a7f6);
        this.data = _0x39a7f6.readUint8Array(this.size - this.hdr_size);
        this.hdr_size -= 0x4;
        _0x39a7f6.position -= this.size - this.hdr_size;
      };
      _0x3cde36.FullBox.prototype.parseFullHeader = function (_0x213b61) {
        this.version = _0x213b61.readUint8();
        this.flags = _0x213b61.readUint24();
        this.hdr_size += 0x4;
      };
      _0x3cde36.FullBox.prototype.parse = function (_0x1c6b55) {
        this.parseFullHeader(_0x1c6b55);
        this.data = _0x1c6b55.readUint8Array(this.size - this.hdr_size);
      };
      _0x3cde36.ContainerBox.prototype.parse = function (_0xfc9728) {
        var _0xb3ef02;
        for (var _0x21fc72; _0xfc9728.getPosition() < this.start + this.size;) {
          if ((_0xb3ef02 = _0x3cde36.parseOneBox(_0xfc9728, false, this.size - (_0xfc9728.getPosition() - this.start))).code !== 0x1) {
            return;
          }
          _0x21fc72 = _0xb3ef02.box;
          this.boxes.push(_0x21fc72);
          if (this.subBoxNames && -0x1 != this.subBoxNames.indexOf(_0x21fc72.type)) {
            this[this.subBoxNames[this.subBoxNames.indexOf(_0x21fc72.type)] + 's'].push(_0x21fc72);
          } else {
            var _0x4a7ca9 = "uuid" !== _0x21fc72.type ? _0x21fc72.type : _0x21fc72.uuid;
            if (this[_0x4a7ca9]) {
              _0x3949d1.warn("Box of type " + _0x4a7ca9 + " already stored in field of this type");
            } else {
              this[_0x4a7ca9] = _0x21fc72;
            }
          }
        }
      };
      _0x3cde36.Box.prototype.parseLanguage = function (_0x401ff9) {
        this.language = _0x401ff9.readUint16();
        var _0x595857 = [];
        _0x595857[0x0] = this.language >> 0xa & 0x1f;
        _0x595857[0x1] = this.language >> 0x5 & 0x1f;
        _0x595857[0x2] = 0x1f & this.language;
        this.languageString = String.fromCharCode(_0x595857[0x0] + 0x60, _0x595857[0x1] + 0x60, _0x595857[0x2] + 0x60);
      };
      _0x3cde36.SAMPLE_ENTRY_TYPE_VISUAL = "Visual";
      _0x3cde36.SAMPLE_ENTRY_TYPE_AUDIO = "Audio";
      _0x3cde36.SAMPLE_ENTRY_TYPE_HINT = "Hint";
      _0x3cde36.SAMPLE_ENTRY_TYPE_METADATA = "Metadata";
      _0x3cde36.SAMPLE_ENTRY_TYPE_SUBTITLE = "Subtitle";
      _0x3cde36.SAMPLE_ENTRY_TYPE_SYSTEM = "System";
      _0x3cde36.SAMPLE_ENTRY_TYPE_TEXT = "Text";
      _0x3cde36.SampleEntry.prototype.parseHeader = function (_0x55e9d4) {
        _0x55e9d4.readUint8Array(0x6);
        this.data_reference_index = _0x55e9d4.readUint16();
        this.hdr_size += 0x8;
      };
      _0x3cde36.SampleEntry.prototype.parse = function (_0x2a2967) {
        this.parseHeader(_0x2a2967);
        this.data = _0x2a2967.readUint8Array(this.size - this.hdr_size);
      };
      _0x3cde36.SampleEntry.prototype.parseDataAndRewind = function (_0x479886) {
        this.parseHeader(_0x479886);
        this.data = _0x479886.readUint8Array(this.size - this.hdr_size);
        this.hdr_size -= 0x8;
        _0x479886.position -= this.size - this.hdr_size;
      };
      _0x3cde36.SampleEntry.prototype.parseFooter = function (_0x38c154) {
        _0x3cde36.ContainerBox.prototype.parse.call(this, _0x38c154);
      };
      _0x3cde36.createMediaSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_HINT);
      _0x3cde36.createMediaSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_METADATA);
      _0x3cde36.createMediaSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_SUBTITLE);
      _0x3cde36.createMediaSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_SYSTEM);
      _0x3cde36.createMediaSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_TEXT);
      _0x3cde36.createMediaSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_VISUAL, function (_0x586134) {
        var _0x5c2b09;
        this.parseHeader(_0x586134);
        _0x586134.readUint16();
        _0x586134.readUint16();
        _0x586134.readUint32Array(0x3);
        this.width = _0x586134.readUint16();
        this.height = _0x586134.readUint16();
        this.horizresolution = _0x586134.readUint32();
        this.vertresolution = _0x586134.readUint32();
        _0x586134.readUint32();
        this.frame_count = _0x586134.readUint16();
        _0x5c2b09 = Math.min(0x1f, _0x586134.readUint8());
        this.compressorname = _0x586134.readString(_0x5c2b09);
        if (_0x5c2b09 < 0x1f) {
          _0x586134.readString(0x1f - _0x5c2b09);
        }
        this.depth = _0x586134.readUint16();
        _0x586134.readUint16();
        this.parseFooter(_0x586134);
      });
      _0x3cde36.createMediaSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_AUDIO, function (_0x359db8) {
        this.parseHeader(_0x359db8);
        _0x359db8.readUint32Array(0x2);
        this.channel_count = _0x359db8.readUint16();
        this.samplesize = _0x359db8.readUint16();
        _0x359db8.readUint16();
        _0x359db8.readUint16();
        this.samplerate = _0x359db8.readUint32() / 0x10000;
        this.parseFooter(_0x359db8);
      });
      _0x3cde36.createSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_VISUAL, "avc1");
      _0x3cde36.createSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_VISUAL, "avc2");
      _0x3cde36.createSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_VISUAL, "avc3");
      _0x3cde36.createSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_VISUAL, "avc4");
      _0x3cde36.createSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_VISUAL, "av01");
      _0x3cde36.createSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_VISUAL, "hvc1");
      _0x3cde36.createSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_VISUAL, "hev1");
      _0x3cde36.createSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_VISUAL, "vvc1");
      _0x3cde36.createSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_VISUAL, "vvi1");
      _0x3cde36.createSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_VISUAL, "vvs1");
      _0x3cde36.createSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_VISUAL, 'vvcN');
      _0x3cde36.createSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_VISUAL, 'vp08');
      _0x3cde36.createSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_VISUAL, "vp09");
      _0x3cde36.createSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_AUDIO, "mp4a");
      _0x3cde36.createSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_AUDIO, "ac-3");
      _0x3cde36.createSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_AUDIO, "ec-3");
      _0x3cde36.createSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_AUDIO, "Opus");
      _0x3cde36.createEncryptedSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_VISUAL, "encv");
      _0x3cde36.createEncryptedSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_AUDIO, "enca");
      _0x3cde36.createEncryptedSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_SUBTITLE, 'encu');
      _0x3cde36.createEncryptedSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_SYSTEM, "encs");
      _0x3cde36.createEncryptedSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_TEXT, "enct");
      _0x3cde36.createEncryptedSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_METADATA, "encm");
      _0x3cde36.createBoxCtor('a1lx', function (_0x4d1f5a) {
        var _0x2b90d4 = 0x10 * (0x1 + (0x1 & _0x4d1f5a.readUint8()));
        this.layer_size = [];
        for (var _0x4be319 = 0x0; _0x4be319 < 0x3; _0x4be319++) {
          this.layer_size[_0x4be319] = 0x10 == _0x2b90d4 ? _0x4d1f5a.readUint16() : _0x4d1f5a.readUint32();
        }
      });
      _0x3cde36.createBoxCtor("a1op", function (_0x21c78c) {
        this.op_index = _0x21c78c.readUint8();
      });
      _0x3cde36.createFullBoxCtor("auxC", function (_0x33d5fa) {
        this.aux_type = _0x33d5fa.readCString();
        var _0xbfdc1c = this.size - this.hdr_size - (this.aux_type.length + 0x1);
        this.aux_subtype = _0x33d5fa.readUint8Array(_0xbfdc1c);
      });
      _0x3cde36.createBoxCtor("av1C", function (_0x423b49) {
        var _0x52f734 = _0x423b49.readUint8();
        if (_0x52f734 >> 0x7 & false) {
          _0x3949d1.error("av1C marker problem");
        } else {
          this.version = 0x7f & _0x52f734;
          if (0x1 === this.version) {
            _0x52f734 = _0x423b49.readUint8();
            this.seq_profile = _0x52f734 >> 0x5 & 0x7;
            this.seq_level_idx_0 = 0x1f & _0x52f734;
            _0x52f734 = _0x423b49.readUint8();
            this.seq_tier_0 = _0x52f734 >> 0x7 & 0x1;
            this.high_bitdepth = _0x52f734 >> 0x6 & 0x1;
            this.twelve_bit = _0x52f734 >> 0x5 & 0x1;
            this.monochrome = _0x52f734 >> 0x4 & 0x1;
            this.chroma_subsampling_x = _0x52f734 >> 0x3 & 0x1;
            this.chroma_subsampling_y = _0x52f734 >> 0x2 & 0x1;
            this.chroma_sample_position = 0x3 & _0x52f734;
            _0x52f734 = _0x423b49.readUint8();
            this.reserved_1 = _0x52f734 >> 0x5 & 0x7;
            if (0x0 === this.reserved_1) {
              this.initial_presentation_delay_present = _0x52f734 >> 0x4 & 0x1;
              if (0x1 === this.initial_presentation_delay_present) {
                this.initial_presentation_delay_minus_one = 0xf & _0x52f734;
              } else {
                this.reserved_2 = 0xf & _0x52f734;
                if (0x0 !== this.reserved_2) {
                  return void _0x3949d1.error("av1C reserved_2 parsing problem");
                }
              }
              var _0x155100 = this.size - this.hdr_size - 0x4;
              this.configOBUs = _0x423b49.readUint8Array(_0x155100);
            } else {
              _0x3949d1.error("av1C reserved_1 parsing problem");
            }
          } else {
            _0x3949d1.error("av1C version " + this.version + " not supported");
          }
        }
      });
      _0x3cde36.createBoxCtor("avcC", function (_0x3ca83f) {
        var _0x527369;
        var _0x576d50;
        this.configurationVersion = _0x3ca83f.readUint8();
        this.AVCProfileIndication = _0x3ca83f.readUint8();
        this.profile_compatibility = _0x3ca83f.readUint8();
        this.AVCLevelIndication = _0x3ca83f.readUint8();
        this.lengthSizeMinusOne = 0x3 & _0x3ca83f.readUint8();
        this.nb_SPS_nalus = 0x1f & _0x3ca83f.readUint8();
        _0x576d50 = this.size - this.hdr_size - 0x6;
        this.SPS = [];
        for (_0x527369 = 0x0; _0x527369 < this.nb_SPS_nalus; _0x527369++) {
          this.SPS[_0x527369] = {};
          this.SPS[_0x527369].length = _0x3ca83f.readUint16();
          this.SPS[_0x527369].nalu = _0x3ca83f.readUint8Array(this.SPS[_0x527369].length);
          _0x576d50 -= 0x2 + this.SPS[_0x527369].length;
        }
        this.nb_PPS_nalus = _0x3ca83f.readUint8();
        _0x576d50--;
        this.PPS = [];
        for (_0x527369 = 0x0; _0x527369 < this.nb_PPS_nalus; _0x527369++) {
          this.PPS[_0x527369] = {};
          this.PPS[_0x527369].length = _0x3ca83f.readUint16();
          this.PPS[_0x527369].nalu = _0x3ca83f.readUint8Array(this.PPS[_0x527369].length);
          _0x576d50 -= 0x2 + this.PPS[_0x527369].length;
        }
        if (_0x576d50 > 0x0) {
          this.ext = _0x3ca83f.readUint8Array(_0x576d50);
        }
      });
      _0x3cde36.createBoxCtor("btrt", function (_0x142897) {
        this.bufferSizeDB = _0x142897.readUint32();
        this.maxBitrate = _0x142897.readUint32();
        this.avgBitrate = _0x142897.readUint32();
      });
      _0x3cde36.createBoxCtor("clap", function (_0x307c00) {
        this.cleanApertureWidthN = _0x307c00.readUint32();
        this.cleanApertureWidthD = _0x307c00.readUint32();
        this.cleanApertureHeightN = _0x307c00.readUint32();
        this.cleanApertureHeightD = _0x307c00.readUint32();
        this.horizOffN = _0x307c00.readUint32();
        this.horizOffD = _0x307c00.readUint32();
        this.vertOffN = _0x307c00.readUint32();
        this.vertOffD = _0x307c00.readUint32();
      });
      _0x3cde36.createBoxCtor('clli', function (_0x3e1bd8) {
        this.max_content_light_level = _0x3e1bd8.readUint16();
        this.max_pic_average_light_level = _0x3e1bd8.readUint16();
      });
      _0x3cde36.createFullBoxCtor("co64", function (_0x331f57) {
        var _0x40ce4b;
        var _0x5b9a4e;
        _0x40ce4b = _0x331f57.readUint32();
        this.chunk_offsets = [];
        if (0x0 === this.version) {
          for (_0x5b9a4e = 0x0; _0x5b9a4e < _0x40ce4b; _0x5b9a4e++) {
            this.chunk_offsets.push(_0x331f57.readUint64());
          }
        }
      });
      _0x3cde36.createFullBoxCtor("CoLL", function (_0x21ece0) {
        this.maxCLL = _0x21ece0.readUint16();
        this.maxFALL = _0x21ece0.readUint16();
      });
      _0x3cde36.createBoxCtor("colr", function (_0x515c63) {
        this.colour_type = _0x515c63.readString(0x4);
        if ("nclx" === this.colour_type) {
          this.colour_primaries = _0x515c63.readUint16();
          this.transfer_characteristics = _0x515c63.readUint16();
          this.matrix_coefficients = _0x515c63.readUint16();
          var _0x5b337d = _0x515c63.readUint8();
          this.full_range_flag = _0x5b337d >> 0x7;
        } else if ("rICC" === this.colour_type || "prof" === this.colour_type) {
          this.ICC_profile = _0x515c63.readUint8Array(this.size - 0x4);
        }
      });
      _0x3cde36.createFullBoxCtor("cprt", function (_0x1c312a) {
        this.parseLanguage(_0x1c312a);
        this.notice = _0x1c312a.readCString();
      });
      _0x3cde36.createFullBoxCtor("cslg", function (_0x42ea35) {
        if (0x0 === this.version) {
          this.compositionToDTSShift = _0x42ea35.readInt32();
          this.leastDecodeToDisplayDelta = _0x42ea35.readInt32();
          this.greatestDecodeToDisplayDelta = _0x42ea35.readInt32();
          this.compositionStartTime = _0x42ea35.readInt32();
          this.compositionEndTime = _0x42ea35.readInt32();
        }
      });
      _0x3cde36.createFullBoxCtor("ctts", function (_0x9cbefc) {
        var _0x4eb76c;
        var _0x1f05d9;
        _0x4eb76c = _0x9cbefc.readUint32();
        this.sample_counts = [];
        this.sample_offsets = [];
        if (0x0 === this.version) {
          for (_0x1f05d9 = 0x0; _0x1f05d9 < _0x4eb76c; _0x1f05d9++) {
            this.sample_counts.push(_0x9cbefc.readUint32());
            var _0x5bc5e4 = _0x9cbefc.readInt32();
            if (_0x5bc5e4 < 0x0) {
              _0x3949d1.warn("BoxParser", "ctts box uses negative values without using version 1");
            }
            this.sample_offsets.push(_0x5bc5e4);
          }
        } else {
          if (0x1 == this.version) {
            for (_0x1f05d9 = 0x0; _0x1f05d9 < _0x4eb76c; _0x1f05d9++) {
              this.sample_counts.push(_0x9cbefc.readUint32());
              this.sample_offsets.push(_0x9cbefc.readInt32());
            }
          }
        }
      });
      _0x3cde36.createBoxCtor("dac3", function (_0x2e4b82) {
        var _0x4c8057 = _0x2e4b82.readUint8();
        var _0x49378f = _0x2e4b82.readUint8();
        var _0x1dce93 = _0x2e4b82.readUint8();
        this.fscod = _0x4c8057 >> 0x6;
        this.bsid = _0x4c8057 >> 0x1 & 0x1f;
        this.bsmod = (0x1 & _0x4c8057) << 0x2 | _0x49378f >> 0x6 & 0x3;
        this.acmod = _0x49378f >> 0x3 & 0x7;
        this.lfeon = _0x49378f >> 0x2 & 0x1;
        this.bit_rate_code = 0x3 & _0x49378f | _0x1dce93 >> 0x5 & 0x7;
      });
      _0x3cde36.createBoxCtor('dec3', function (_0x2a848a) {
        var _0x197bcc = _0x2a848a.readUint16();
        this.data_rate = _0x197bcc >> 0x3;
        this.num_ind_sub = 0x7 & _0x197bcc;
        this.ind_subs = [];
        for (var _0x2e4a71 = 0x0; _0x2e4a71 < this.num_ind_sub + 0x1; _0x2e4a71++) {
          var _0x9d67d4 = {};
          this.ind_subs.push(_0x9d67d4);
          var _0x2d93ca = _0x2a848a.readUint8();
          var _0x4b2f53 = _0x2a848a.readUint8();
          var _0x3766f1 = _0x2a848a.readUint8();
          _0x9d67d4.fscod = _0x2d93ca >> 0x6;
          _0x9d67d4.bsid = _0x2d93ca >> 0x1 & 0x1f;
          _0x9d67d4.bsmod = (0x1 & _0x2d93ca) << 0x4 | _0x4b2f53 >> 0x4 & 0xf;
          _0x9d67d4.acmod = _0x4b2f53 >> 0x1 & 0x7;
          _0x9d67d4.lfeon = 0x1 & _0x4b2f53;
          _0x9d67d4.num_dep_sub = _0x3766f1 >> 0x1 & 0xf;
          if (_0x9d67d4.num_dep_sub > 0x0) {
            _0x9d67d4.chan_loc = (0x1 & _0x3766f1) << 0x8 | _0x2a848a.readUint8();
          }
        }
      });
      _0x3cde36.createFullBoxCtor("dfLa", function (_0xb14105) {
        var _0x2fe5d5 = [];
        var _0x5b8dbe = ["STREAMINFO", "PADDING", "APPLICATION", "SEEKTABLE", "VORBIS_COMMENT", "CUESHEET", "PICTURE", "RESERVED"];
        for (this.parseFullHeader(_0xb14105);;) {
          var _0x4da6ac = _0xb14105.readUint8();
          var _0x1369e1 = Math.min(0x7f & _0x4da6ac, _0x5b8dbe.length - 0x1);
          if (_0x1369e1) {
            _0xb14105.readUint8Array(_0xb14105.readUint24());
          } else {
            _0xb14105.readUint8Array(0xd);
            this.samplerate = _0xb14105.readUint32() >> 0xc;
            _0xb14105.readUint8Array(0x14);
          }
          _0x2fe5d5.push(_0x5b8dbe[_0x1369e1]);
          if (0x80 & _0x4da6ac) {
            break;
          }
        }
        this.numMetadataBlocks = _0x2fe5d5.length + " (" + _0x2fe5d5.join(", ") + ')';
      });
      _0x3cde36.createBoxCtor("dimm", function (_0x317334) {
        this.bytessent = _0x317334.readUint64();
      });
      _0x3cde36.createBoxCtor('dmax', function (_0x23d571) {
        this.time = _0x23d571.readUint32();
      });
      _0x3cde36.createBoxCtor("dmed", function (_0x119499) {
        this.bytessent = _0x119499.readUint64();
      });
      _0x3cde36.createBoxCtor("dOps", function (_0x5c2ea4) {
        this.Version = _0x5c2ea4.readUint8();
        this.OutputChannelCount = _0x5c2ea4.readUint8();
        this.PreSkip = _0x5c2ea4.readUint16();
        this.InputSampleRate = _0x5c2ea4.readUint32();
        this.OutputGain = _0x5c2ea4.readInt16();
        this.ChannelMappingFamily = _0x5c2ea4.readUint8();
        if (0x0 !== this.ChannelMappingFamily) {
          this.StreamCount = _0x5c2ea4.readUint8();
          this.CoupledCount = _0x5c2ea4.readUint8();
          this.ChannelMapping = [];
          for (var _0x27085d = 0x0; _0x27085d < this.OutputChannelCount; _0x27085d++) {
            this.ChannelMapping[_0x27085d] = _0x5c2ea4.readUint8();
          }
        }
      });
      _0x3cde36.createFullBoxCtor('dref', function (_0x12568c) {
        var _0x3c59fc;
        var _0x56851a;
        this.entries = [];
        var _0x5953d3 = _0x12568c.readUint32();
        for (var _0x442d28 = 0x0; _0x442d28 < _0x5953d3; _0x442d28++) {
          if ((_0x3c59fc = _0x3cde36.parseOneBox(_0x12568c, false, this.size - (_0x12568c.getPosition() - this.start))).code !== 0x1) {
            return;
          }
          _0x56851a = _0x3c59fc.box;
          this.entries.push(_0x56851a);
        }
      });
      _0x3cde36.createBoxCtor("drep", function (_0x167d2c) {
        this.bytessent = _0x167d2c.readUint64();
      });
      _0x3cde36.createFullBoxCtor("elng", function (_0x3d9b93) {
        this.extended_language = _0x3d9b93.readString(this.size - this.hdr_size);
      });
      _0x3cde36.createFullBoxCtor('elst', function (_0x39bd23) {
        this.entries = [];
        var _0x33bcef = _0x39bd23.readUint32();
        for (var _0x4b06b9 = 0x0; _0x4b06b9 < _0x33bcef; _0x4b06b9++) {
          var _0x5ca6a4 = {};
          this.entries.push(_0x5ca6a4);
          if (0x1 === this.version) {
            _0x5ca6a4.segment_duration = _0x39bd23.readUint64();
            _0x5ca6a4.media_time = _0x39bd23.readInt64();
          } else {
            _0x5ca6a4.segment_duration = _0x39bd23.readUint32();
            _0x5ca6a4.media_time = _0x39bd23.readInt32();
          }
          _0x5ca6a4.media_rate_integer = _0x39bd23.readInt16();
          _0x5ca6a4.media_rate_fraction = _0x39bd23.readInt16();
        }
      });
      _0x3cde36.createFullBoxCtor("emsg", function (_0x4566a3) {
        if (0x1 == this.version) {
          this.timescale = _0x4566a3.readUint32();
          this.presentation_time = _0x4566a3.readUint64();
          this.event_duration = _0x4566a3.readUint32();
          this.id = _0x4566a3.readUint32();
          this.scheme_id_uri = _0x4566a3.readCString();
          this.value = _0x4566a3.readCString();
        } else {
          this.scheme_id_uri = _0x4566a3.readCString();
          this.value = _0x4566a3.readCString();
          this.timescale = _0x4566a3.readUint32();
          this.presentation_time_delta = _0x4566a3.readUint32();
          this.event_duration = _0x4566a3.readUint32();
          this.id = _0x4566a3.readUint32();
        }
        var _0x43d3ab = this.size - this.hdr_size - (0x10 + (this.scheme_id_uri.length + 0x1) + (this.value.length + 0x1));
        if (0x1 == this.version) {
          _0x43d3ab -= 0x4;
        }
        this.message_data = _0x4566a3.readUint8Array(_0x43d3ab);
      });
      _0x3cde36.createFullBoxCtor("esds", function (_0x3156d9) {
        var _0xccc171 = _0x3156d9.readUint8Array(this.size - this.hdr_size);
        if (undefined !== _0x3e8c02) {
          var _0x5eb3f8 = new _0x3e8c02();
          this.esd = _0x5eb3f8.parseOneDescriptor(new _0x5a360b(_0xccc171.buffer, 0x0, _0x5a360b.BIG_ENDIAN));
        }
      });
      _0x3cde36.createBoxCtor("fiel", function (_0x384b1c) {
        this.fieldCount = _0x384b1c.readUint8();
        this.fieldOrdering = _0x384b1c.readUint8();
      });
      _0x3cde36.createBoxCtor("frma", function (_0x33ba26) {
        this.data_format = _0x33ba26.readString(0x4);
      });
      _0x3cde36.createBoxCtor("ftyp", function (_0x3811d9) {
        var _0xd04965 = this.size - this.hdr_size;
        this.major_brand = _0x3811d9.readString(0x4);
        this.minor_version = _0x3811d9.readUint32();
        _0xd04965 -= 0x8;
        this.compatible_brands = [];
        for (var _0x333f7b = 0x0; _0xd04965 >= 0x4;) {
          this.compatible_brands[_0x333f7b] = _0x3811d9.readString(0x4);
          _0xd04965 -= 0x4;
          _0x333f7b++;
        }
      });
      _0x3cde36.createFullBoxCtor("hdlr", function (_0x5ee3b7) {
        if (0x0 === this.version) {
          _0x5ee3b7.readUint32();
          this.handler = _0x5ee3b7.readString(0x4);
          _0x5ee3b7.readUint32Array(0x3);
          this.name = _0x5ee3b7.readString(this.size - this.hdr_size - 0x14);
          if ("\0" === this.name[this.name.length - 0x1]) {
            this.name = this.name.slice(0x0, -0x1);
          }
        }
      });
      _0x3cde36.createBoxCtor("hvcC", function (_0x24c03a) {
        var _0x4c6496;
        var _0x415a78;
        var _0x1c43d4;
        var _0x5575ce;
        this.configurationVersion = _0x24c03a.readUint8();
        _0x5575ce = _0x24c03a.readUint8();
        this.general_profile_space = _0x5575ce >> 0x6;
        this.general_tier_flag = (0x20 & _0x5575ce) >> 0x5;
        this.general_profile_idc = 0x1f & _0x5575ce;
        this.general_profile_compatibility = _0x24c03a.readUint32();
        this.general_constraint_indicator = _0x24c03a.readUint8Array(0x6);
        this.general_level_idc = _0x24c03a.readUint8();
        this.min_spatial_segmentation_idc = 0xfff & _0x24c03a.readUint16();
        this.parallelismType = 0x3 & _0x24c03a.readUint8();
        this.chroma_format_idc = 0x3 & _0x24c03a.readUint8();
        this.bit_depth_luma_minus8 = 0x7 & _0x24c03a.readUint8();
        this.bit_depth_chroma_minus8 = 0x7 & _0x24c03a.readUint8();
        this.avgFrameRate = _0x24c03a.readUint16();
        _0x5575ce = _0x24c03a.readUint8();
        this.constantFrameRate = _0x5575ce >> 0x6;
        this.numTemporalLayers = (0xd & _0x5575ce) >> 0x3;
        this.temporalIdNested = (0x4 & _0x5575ce) >> 0x2;
        this.lengthSizeMinusOne = 0x3 & _0x5575ce;
        this.nalu_arrays = [];
        var _0x2c66b2 = _0x24c03a.readUint8();
        for (_0x4c6496 = 0x0; _0x4c6496 < _0x2c66b2; _0x4c6496++) {
          var _0x25cf60 = [];
          this.nalu_arrays.push(_0x25cf60);
          _0x5575ce = _0x24c03a.readUint8();
          _0x25cf60.completeness = (0x80 & _0x5575ce) >> 0x7;
          _0x25cf60.nalu_type = 0x3f & _0x5575ce;
          var _0x40c257 = _0x24c03a.readUint16();
          for (_0x415a78 = 0x0; _0x415a78 < _0x40c257; _0x415a78++) {
            var _0x23303a = {};
            _0x25cf60.push(_0x23303a);
            _0x1c43d4 = _0x24c03a.readUint16();
            _0x23303a.data = _0x24c03a.readUint8Array(_0x1c43d4);
          }
        }
      });
      _0x3cde36.createFullBoxCtor('iinf', function (_0x346233) {
        var _0x1c924b;
        if (0x0 === this.version) {
          this.entry_count = _0x346233.readUint16();
        } else {
          this.entry_count = _0x346233.readUint32();
        }
        this.item_infos = [];
        for (var _0x15d774 = 0x0; _0x15d774 < this.entry_count; _0x15d774++) {
          if ((_0x1c924b = _0x3cde36.parseOneBox(_0x346233, false, this.size - (_0x346233.getPosition() - this.start))).code !== 0x1) {
            return;
          }
          if ("infe" !== _0x1c924b.box.type) {
            _0x3949d1.error("BoxParser", "Expected 'infe' box, got " + _0x1c924b.box.type);
          }
          this.item_infos[_0x15d774] = _0x1c924b.box;
        }
      });
      _0x3cde36.createFullBoxCtor('iloc', function (_0x1bc309) {
        var _0x48c815;
        _0x48c815 = _0x1bc309.readUint8();
        this.offset_size = _0x48c815 >> 0x4 & 0xf;
        this.length_size = 0xf & _0x48c815;
        _0x48c815 = _0x1bc309.readUint8();
        this.base_offset_size = _0x48c815 >> 0x4 & 0xf;
        if (0x1 === this.version || 0x2 === this.version) {
          this.index_size = 0xf & _0x48c815;
        } else {
          this.index_size = 0x0;
        }
        this.items = [];
        var _0x70c573 = 0x0;
        if (this.version < 0x2) {
          _0x70c573 = _0x1bc309.readUint16();
        } else {
          if (0x2 !== this.version) {
            throw "version of iloc box not supported";
          }
          _0x70c573 = _0x1bc309.readUint32();
        }
        for (var _0x5b71b3 = 0x0; _0x5b71b3 < _0x70c573; _0x5b71b3++) {
          var _0x435e6d = {};
          this.items.push(_0x435e6d);
          if (this.version < 0x2) {
            _0x435e6d.item_ID = _0x1bc309.readUint16();
          } else {
            if (0x2 !== this.version) {
              throw "version of iloc box not supported";
            }
            _0x435e6d.item_ID = _0x1bc309.readUint16();
          }
          if (0x1 === this.version || 0x2 === this.version) {
            _0x435e6d.construction_method = 0xf & _0x1bc309.readUint16();
          } else {
            _0x435e6d.construction_method = 0x0;
          }
          _0x435e6d.data_reference_index = _0x1bc309.readUint16();
          switch (this.base_offset_size) {
            case 0x0:
              _0x435e6d.base_offset = 0x0;
              break;
            case 0x4:
              _0x435e6d.base_offset = _0x1bc309.readUint32();
              break;
            case 0x8:
              _0x435e6d.base_offset = _0x1bc309.readUint64();
              break;
            default:
              throw "Error reading base offset size";
          }
          var _0x42774d = _0x1bc309.readUint16();
          _0x435e6d.extents = [];
          for (var _0x1481a1 = 0x0; _0x1481a1 < _0x42774d; _0x1481a1++) {
            var _0x16072e = {};
            _0x435e6d.extents.push(_0x16072e);
            if (0x1 === this.version || 0x2 === this.version) {
              switch (this.index_size) {
                case 0x0:
                  _0x16072e.extent_index = 0x0;
                  break;
                case 0x4:
                  _0x16072e.extent_index = _0x1bc309.readUint32();
                  break;
                case 0x8:
                  _0x16072e.extent_index = _0x1bc309.readUint64();
                  break;
                default:
                  throw "Error reading extent index";
              }
            }
            switch (this.offset_size) {
              case 0x0:
                _0x16072e.extent_offset = 0x0;
                break;
              case 0x4:
                _0x16072e.extent_offset = _0x1bc309.readUint32();
                break;
              case 0x8:
                _0x16072e.extent_offset = _0x1bc309.readUint64();
                break;
              default:
                throw "Error reading extent index";
            }
            switch (this.length_size) {
              case 0x0:
                _0x16072e.extent_length = 0x0;
                break;
              case 0x4:
                _0x16072e.extent_length = _0x1bc309.readUint32();
                break;
              case 0x8:
                _0x16072e.extent_length = _0x1bc309.readUint64();
                break;
              default:
                throw "Error reading extent index";
            }
          }
        }
      });
      _0x3cde36.createBoxCtor("imir", function (_0xea0c8e) {
        var _0x4a4103 = _0xea0c8e.readUint8();
        this.reserved = _0x4a4103 >> 0x7;
        this.axis = 0x1 & _0x4a4103;
      });
      _0x3cde36.createFullBoxCtor("infe", function (_0x5ec644) {
        if (!(0x0 !== this.version && 0x1 !== this.version)) {
          this.item_ID = _0x5ec644.readUint16();
          this.item_protection_index = _0x5ec644.readUint16();
          this.item_name = _0x5ec644.readCString();
          this.content_type = _0x5ec644.readCString();
          this.content_encoding = _0x5ec644.readCString();
        }
        if (0x1 === this.version) {
          this.extension_type = _0x5ec644.readString(0x4);
          _0x3949d1.warn("BoxParser", "Cannot parse extension type");
          return void _0x5ec644.seek(this.start + this.size);
        }
        if (this.version >= 0x2) {
          if (0x2 === this.version) {
            this.item_ID = _0x5ec644.readUint16();
          } else if (0x3 === this.version) {
            this.item_ID = _0x5ec644.readUint32();
          }
          this.item_protection_index = _0x5ec644.readUint16();
          this.item_type = _0x5ec644.readString(0x4);
          this.item_name = _0x5ec644.readCString();
          if ("mime" === this.item_type) {
            this.content_type = _0x5ec644.readCString();
            this.content_encoding = _0x5ec644.readCString();
          } else if ("uri " === this.item_type) {
            this.item_uri_type = _0x5ec644.readCString();
          }
        }
      });
      _0x3cde36.createFullBoxCtor("ipma", function (_0x42f5dd) {
        var _0x4217dc;
        var _0x175e41;
        entry_count = _0x42f5dd.readUint32();
        this.associations = [];
        for (_0x4217dc = 0x0; _0x4217dc < entry_count; _0x4217dc++) {
          var _0x4135bf = {};
          this.associations.push(_0x4135bf);
          if (this.version < 0x1) {
            _0x4135bf.id = _0x42f5dd.readUint16();
          } else {
            _0x4135bf.id = _0x42f5dd.readUint32();
          }
          var _0x487387 = _0x42f5dd.readUint8();
          _0x4135bf.props = [];
          for (_0x175e41 = 0x0; _0x175e41 < _0x487387; _0x175e41++) {
            var _0x266747 = _0x42f5dd.readUint8();
            var _0x1a6387 = {};
            _0x4135bf.props.push(_0x1a6387);
            _0x1a6387.essential = (0x80 & _0x266747) >> 0x7 == 0x1;
            if (0x1 & this.flags) {
              _0x1a6387.property_index = (0x7f & _0x266747) << 0x8 | _0x42f5dd.readUint8();
            } else {
              _0x1a6387.property_index = 0x7f & _0x266747;
            }
          }
        }
      });
      _0x3cde36.createFullBoxCtor("iref", function (_0x365c38) {
        var _0x2daac4;
        var _0xde63cf;
        for (this.references = []; _0x365c38.getPosition() < this.start + this.size;) {
          if ((_0x2daac4 = _0x3cde36.parseOneBox(_0x365c38, true, this.size - (_0x365c38.getPosition() - this.start))).code !== 0x1) {
            return;
          }
          if ((_0xde63cf = 0x0 === this.version ? new _0x3cde36.SingleItemTypeReferenceBox(_0x2daac4.type, _0x2daac4.size, _0x2daac4.hdr_size, _0x2daac4.start) : new _0x3cde36.SingleItemTypeReferenceBoxLarge(_0x2daac4.type, _0x2daac4.size, _0x2daac4.hdr_size, _0x2daac4.start)).write === _0x3cde36.Box.prototype.write && "mdat" !== _0xde63cf.type) {
            _0x3949d1.warn('BoxParser', _0xde63cf.type + " box writing not yet implemented, keeping unparsed data in memory for later write");
            _0xde63cf.parseDataAndRewind(_0x365c38);
          }
          _0xde63cf.parse(_0x365c38);
          this.references.push(_0xde63cf);
        }
      });
      _0x3cde36.createBoxCtor("irot", function (_0x46a36a) {
        this.angle = 0x3 & _0x46a36a.readUint8();
      });
      _0x3cde36.createFullBoxCtor("ispe", function (_0x2f26e0) {
        this.image_width = _0x2f26e0.readUint32();
        this.image_height = _0x2f26e0.readUint32();
      });
      _0x3cde36.createFullBoxCtor('kind', function (_0x485fef) {
        this.schemeURI = _0x485fef.readCString();
        this.value = _0x485fef.readCString();
      });
      _0x3cde36.createFullBoxCtor("leva", function (_0xcd9bc0) {
        var _0x487967 = _0xcd9bc0.readUint8();
        this.levels = [];
        for (var _0x1dfe98 = 0x0; _0x1dfe98 < _0x487967; _0x1dfe98++) {
          var _0x43c5dc = {};
          this.levels[_0x1dfe98] = _0x43c5dc;
          _0x43c5dc.track_ID = _0xcd9bc0.readUint32();
          var _0x3a621a = _0xcd9bc0.readUint8();
          _0x43c5dc.padding_flag = _0x3a621a >> 0x7;
          _0x43c5dc.assignment_type = 0x7f & _0x3a621a;
          switch (_0x43c5dc.assignment_type) {
            case 0x0:
              _0x43c5dc.grouping_type = _0xcd9bc0.readString(0x4);
              break;
            case 0x1:
              _0x43c5dc.grouping_type = _0xcd9bc0.readString(0x4);
              _0x43c5dc.grouping_type_parameter = _0xcd9bc0.readUint32();
              break;
            case 0x2:
            case 0x3:
              break;
            case 0x4:
              _0x43c5dc.sub_track_id = _0xcd9bc0.readUint32();
              break;
            default:
              _0x3949d1.warn("BoxParser", "Unknown leva assignement type");
          }
        }
      });
      _0x3cde36.createBoxCtor("lsel", function (_0xbb4e56) {
        this.layer_id = _0xbb4e56.readUint16();
      });
      _0x3cde36.createBoxCtor("maxr", function (_0x337bfc) {
        this.period = _0x337bfc.readUint32();
        this.bytes = _0x337bfc.readUint32();
      });
      _0x3cde36.createBoxCtor("mdcv", function (_0x575db6) {
        this.display_primaries = [];
        this.display_primaries[0x0] = {};
        this.display_primaries[0x0].x = _0x575db6.readUint16();
        this.display_primaries[0x0].y = _0x575db6.readUint16();
        this.display_primaries[0x1] = {};
        this.display_primaries[0x1].x = _0x575db6.readUint16();
        this.display_primaries[0x1].y = _0x575db6.readUint16();
        this.display_primaries[0x2] = {};
        this.display_primaries[0x2].x = _0x575db6.readUint16();
        this.display_primaries[0x2].y = _0x575db6.readUint16();
        this.white_point = {};
        this.white_point.x = _0x575db6.readUint16();
        this.white_point.y = _0x575db6.readUint16();
        this.max_display_mastering_luminance = _0x575db6.readUint32();
        this.min_display_mastering_luminance = _0x575db6.readUint32();
      });
      _0x3cde36.createFullBoxCtor("mdhd", function (_0x51b045) {
        if (0x1 == this.version) {
          this.creation_time = _0x51b045.readUint64();
          this.modification_time = _0x51b045.readUint64();
          this.timescale = _0x51b045.readUint32();
          this.duration = _0x51b045.readUint64();
        } else {
          this.creation_time = _0x51b045.readUint32();
          this.modification_time = _0x51b045.readUint32();
          this.timescale = _0x51b045.readUint32();
          this.duration = _0x51b045.readUint32();
        }
        this.parseLanguage(_0x51b045);
        _0x51b045.readUint16();
      });
      _0x3cde36.createFullBoxCtor("mehd", function (_0x4fcb9d) {
        if (0x1 & this.flags) {
          _0x3949d1.warn("BoxParser", "mehd box incorrectly uses flags set to 1, converting version to 1");
          this.version = 0x1;
        }
        if (0x1 == this.version) {
          this.fragment_duration = _0x4fcb9d.readUint64();
        } else {
          this.fragment_duration = _0x4fcb9d.readUint32();
        }
      });
      _0x3cde36.createFullBoxCtor("meta", function (_0x19704b) {
        this.boxes = [];
        _0x3cde36.ContainerBox.prototype.parse.call(this, _0x19704b);
      });
      _0x3cde36.createFullBoxCtor('mfhd', function (_0x40659d) {
        this.sequence_number = _0x40659d.readUint32();
      });
      _0x3cde36.createFullBoxCtor('mfro', function (_0x137de1) {
        this._size = _0x137de1.readUint32();
      });
      _0x3cde36.createFullBoxCtor("mvhd", function (_0x258135) {
        if (0x1 == this.version) {
          this.creation_time = _0x258135.readUint64();
          this.modification_time = _0x258135.readUint64();
          this.timescale = _0x258135.readUint32();
          this.duration = _0x258135.readUint64();
        } else {
          this.creation_time = _0x258135.readUint32();
          this.modification_time = _0x258135.readUint32();
          this.timescale = _0x258135.readUint32();
          this.duration = _0x258135.readUint32();
        }
        this.rate = _0x258135.readUint32();
        this.volume = _0x258135.readUint16() >> 0x8;
        _0x258135.readUint16();
        _0x258135.readUint32Array(0x2);
        this.matrix = _0x258135.readUint32Array(0x9);
        _0x258135.readUint32Array(0x6);
        this.next_track_id = _0x258135.readUint32();
      });
      _0x3cde36.createBoxCtor("npck", function (_0x189bbb) {
        this.packetssent = _0x189bbb.readUint32();
      });
      _0x3cde36.createBoxCtor('nump', function (_0x18b29f) {
        this.packetssent = _0x18b29f.readUint64();
      });
      _0x3cde36.createFullBoxCtor("padb", function (_0x3cb54d) {
        var _0x3e14f0 = _0x3cb54d.readUint32();
        this.padbits = [];
        for (var _0x5f00e2 = 0x0; _0x5f00e2 < Math.floor((_0x3e14f0 + 0x1) / 0x2); _0x5f00e2++) {
          this.padbits = _0x3cb54d.readUint8();
        }
      });
      _0x3cde36.createBoxCtor("pasp", function (_0x10dbf9) {
        this.hSpacing = _0x10dbf9.readUint32();
        this.vSpacing = _0x10dbf9.readUint32();
      });
      _0x3cde36.createBoxCtor("payl", function (_0x59b3ca) {
        this.text = _0x59b3ca.readString(this.size - this.hdr_size);
      });
      _0x3cde36.createBoxCtor("payt", function (_0x628320) {
        this.payloadID = _0x628320.readUint32();
        var _0x3c38bc = _0x628320.readUint8();
        this.rtpmap_string = _0x628320.readString(_0x3c38bc);
      });
      _0x3cde36.createFullBoxCtor("pdin", function (_0x3b12e7) {
        var _0x32e299 = (this.size - this.hdr_size) / 0x8;
        this.rate = [];
        this.initial_delay = [];
        for (var _0x123a74 = 0x0; _0x123a74 < _0x32e299; _0x123a74++) {
          this.rate[_0x123a74] = _0x3b12e7.readUint32();
          this.initial_delay[_0x123a74] = _0x3b12e7.readUint32();
        }
      });
      _0x3cde36.createFullBoxCtor("pitm", function (_0x1f3899) {
        if (0x0 === this.version) {
          this.item_id = _0x1f3899.readUint16();
        } else {
          this.item_id = _0x1f3899.readUint32();
        }
      });
      _0x3cde36.createFullBoxCtor('pixi', function (_0x41aa98) {
        var _0x2a6515;
        this.num_channels = _0x41aa98.readUint8();
        this.bits_per_channels = [];
        for (_0x2a6515 = 0x0; _0x2a6515 < this.num_channels; _0x2a6515++) {
          this.bits_per_channels[_0x2a6515] = _0x41aa98.readUint8();
        }
      });
      _0x3cde36.createBoxCtor('pmax', function (_0xbcb048) {
        this.bytes = _0xbcb048.readUint32();
      });
      _0x3cde36.createFullBoxCtor("prft", function (_0x1a1ba0) {
        this.ref_track_id = _0x1a1ba0.readUint32();
        this.ntp_timestamp = _0x1a1ba0.readUint64();
        if (0x0 === this.version) {
          this.media_time = _0x1a1ba0.readUint32();
        } else {
          this.media_time = _0x1a1ba0.readUint64();
        }
      });
      _0x3cde36.createFullBoxCtor("pssh", function (_0x411fe5) {
        this.system_id = _0x3cde36.parseHex16(_0x411fe5);
        if (this.version > 0x0) {
          var _0x4345d6 = _0x411fe5.readUint32();
          this.kid = [];
          for (var _0x3e62f6 = 0x0; _0x3e62f6 < _0x4345d6; _0x3e62f6++) {
            this.kid[_0x3e62f6] = _0x3cde36.parseHex16(_0x411fe5);
          }
        }
        var _0x42e3d3 = _0x411fe5.readUint32();
        if (_0x42e3d3 > 0x0) {
          this.data = _0x411fe5.readUint8Array(_0x42e3d3);
        }
      });
      _0x3cde36.createFullBoxCtor("clef", function (_0x1d02b2) {
        this.width = _0x1d02b2.readUint32();
        this.height = _0x1d02b2.readUint32();
      });
      _0x3cde36.createFullBoxCtor("enof", function (_0x42e9ff) {
        this.width = _0x42e9ff.readUint32();
        this.height = _0x42e9ff.readUint32();
      });
      _0x3cde36.createFullBoxCtor('prof', function (_0x26f632) {
        this.width = _0x26f632.readUint32();
        this.height = _0x26f632.readUint32();
      });
      _0x3cde36.createContainerBoxCtor("tapt", null, ['clef', 'prof', "enof"]);
      _0x3cde36.createBoxCtor("rtp ", function (_0x3d2d4f) {
        this.descriptionformat = _0x3d2d4f.readString(0x4);
        this.sdptext = _0x3d2d4f.readString(this.size - this.hdr_size - 0x4);
      });
      _0x3cde36.createFullBoxCtor("saio", function (_0x3e113b) {
        if (0x1 & this.flags) {
          this.aux_info_type = _0x3e113b.readUint32();
          this.aux_info_type_parameter = _0x3e113b.readUint32();
        }
        var _0x2a572c = _0x3e113b.readUint32();
        this.offset = [];
        for (var _0xbbae2d = 0x0; _0xbbae2d < _0x2a572c; _0xbbae2d++) {
          if (0x0 === this.version) {
            this.offset[_0xbbae2d] = _0x3e113b.readUint32();
          } else {
            this.offset[_0xbbae2d] = _0x3e113b.readUint64();
          }
        }
      });
      _0x3cde36.createFullBoxCtor("saiz", function (_0x8e52e8) {
        if (0x1 & this.flags) {
          this.aux_info_type = _0x8e52e8.readUint32();
          this.aux_info_type_parameter = _0x8e52e8.readUint32();
        }
        this.default_sample_info_size = _0x8e52e8.readUint8();
        var _0x4f3d33 = _0x8e52e8.readUint32();
        this.sample_info_size = [];
        if (0x0 === this.default_sample_info_size) {
          for (var _0x522c6e = 0x0; _0x522c6e < _0x4f3d33; _0x522c6e++) {
            this.sample_info_size[_0x522c6e] = _0x8e52e8.readUint8();
          }
        }
      });
      _0x3cde36.createSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_METADATA, "mett", function (_0x2351e6) {
        this.parseHeader(_0x2351e6);
        this.content_encoding = _0x2351e6.readCString();
        this.mime_format = _0x2351e6.readCString();
        this.parseFooter(_0x2351e6);
      });
      _0x3cde36.createSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_METADATA, "metx", function (_0x1fc22b) {
        this.parseHeader(_0x1fc22b);
        this.content_encoding = _0x1fc22b.readCString();
        this.namespace = _0x1fc22b.readCString();
        this.schema_location = _0x1fc22b.readCString();
        this.parseFooter(_0x1fc22b);
      });
      _0x3cde36.createSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_SUBTITLE, "sbtt", function (_0x3c84e1) {
        this.parseHeader(_0x3c84e1);
        this.content_encoding = _0x3c84e1.readCString();
        this.mime_format = _0x3c84e1.readCString();
        this.parseFooter(_0x3c84e1);
      });
      _0x3cde36.createSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_SUBTITLE, "stpp", function (_0x1d2383) {
        this.parseHeader(_0x1d2383);
        this.namespace = _0x1d2383.readCString();
        this.schema_location = _0x1d2383.readCString();
        this.auxiliary_mime_types = _0x1d2383.readCString();
        this.parseFooter(_0x1d2383);
      });
      _0x3cde36.createSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_SUBTITLE, "stxt", function (_0x126f3d) {
        this.parseHeader(_0x126f3d);
        this.content_encoding = _0x126f3d.readCString();
        this.mime_format = _0x126f3d.readCString();
        this.parseFooter(_0x126f3d);
      });
      _0x3cde36.createSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_SUBTITLE, 'tx3g', function (_0x50e4e8) {
        this.parseHeader(_0x50e4e8);
        this.displayFlags = _0x50e4e8.readUint32();
        this.horizontal_justification = _0x50e4e8.readInt8();
        this.vertical_justification = _0x50e4e8.readInt8();
        this.bg_color_rgba = _0x50e4e8.readUint8Array(0x4);
        this.box_record = _0x50e4e8.readInt16Array(0x4);
        this.style_record = _0x50e4e8.readUint8Array(0xc);
        this.parseFooter(_0x50e4e8);
      });
      _0x3cde36.createSampleEntryCtor(_0x3cde36.SAMPLE_ENTRY_TYPE_METADATA, 'wvtt', function (_0x5e98a4) {
        this.parseHeader(_0x5e98a4);
        this.parseFooter(_0x5e98a4);
      });
      _0x3cde36.createSampleGroupCtor("alst", function (_0x2139f1) {
        var _0x558859;
        var _0x9ed639 = _0x2139f1.readUint16();
        this.first_output_sample = _0x2139f1.readUint16();
        this.sample_offset = [];
        for (_0x558859 = 0x0; _0x558859 < _0x9ed639; _0x558859++) {
          this.sample_offset[_0x558859] = _0x2139f1.readUint32();
        }
        var _0x50d488 = this.description_length - 0x4 - 0x4 * _0x9ed639;
        this.num_output_samples = [];
        this.num_total_samples = [];
        for (_0x558859 = 0x0; _0x558859 < _0x50d488 / 0x4; _0x558859++) {
          this.num_output_samples[_0x558859] = _0x2139f1.readUint16();
          this.num_total_samples[_0x558859] = _0x2139f1.readUint16();
        }
      });
      _0x3cde36.createSampleGroupCtor('avll', function (_0x671d28) {
        this.layerNumber = _0x671d28.readUint8();
        this.accurateStatisticsFlag = _0x671d28.readUint8();
        this.avgBitRate = _0x671d28.readUint16();
        this.avgFrameRate = _0x671d28.readUint16();
      });
      _0x3cde36.createSampleGroupCtor('avss', function (_0x40ef64) {
        this.subSequenceIdentifier = _0x40ef64.readUint16();
        this.layerNumber = _0x40ef64.readUint8();
        var _0x14b6e3 = _0x40ef64.readUint8();
        this.durationFlag = _0x14b6e3 >> 0x7;
        this.avgRateFlag = _0x14b6e3 >> 0x6 & 0x1;
        if (this.durationFlag) {
          this.duration = _0x40ef64.readUint32();
        }
        if (this.avgRateFlag) {
          this.accurateStatisticsFlag = _0x40ef64.readUint8();
          this.avgBitRate = _0x40ef64.readUint16();
          this.avgFrameRate = _0x40ef64.readUint16();
        }
        this.dependency = [];
        var _0x242d31 = _0x40ef64.readUint8();
        for (var _0x9674bf = 0x0; _0x9674bf < _0x242d31; _0x9674bf++) {
          var _0x2943a6 = {};
          this.dependency.push(_0x2943a6);
          _0x2943a6.subSeqDirectionFlag = _0x40ef64.readUint8();
          _0x2943a6.layerNumber = _0x40ef64.readUint8();
          _0x2943a6.subSequenceIdentifier = _0x40ef64.readUint16();
        }
      });
      _0x3cde36.createSampleGroupCtor("dtrt", function (_0x1ec9d7) {
        _0x3949d1.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
      });
      _0x3cde36.createSampleGroupCtor("mvif", function (_0x1b1986) {
        _0x3949d1.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
      });
      _0x3cde36.createSampleGroupCtor('prol', function (_0x48800e) {
        this.roll_distance = _0x48800e.readInt16();
      });
      _0x3cde36.createSampleGroupCtor("rap ", function (_0x57030b) {
        var _0x15fbe1 = _0x57030b.readUint8();
        this.num_leading_samples_known = _0x15fbe1 >> 0x7;
        this.num_leading_samples = 0x7f & _0x15fbe1;
      });
      _0x3cde36.createSampleGroupCtor('rash', function (_0x5c0a80) {
        this.operation_point_count = _0x5c0a80.readUint16();
        if (this.description_length !== 0x2 + (0x1 === this.operation_point_count ? 0x2 : 0x6 * this.operation_point_count) + 0x9) {
          _0x3949d1.warn("BoxParser", "Mismatch in " + this.grouping_type + " sample group length");
          this.data = _0x5c0a80.readUint8Array(this.description_length - 0x2);
        } else {
          if (0x1 === this.operation_point_count) {
            this.target_rate_share = _0x5c0a80.readUint16();
          } else {
            this.target_rate_share = [];
            this.available_bitrate = [];
            for (var _0x1f7544 = 0x0; _0x1f7544 < this.operation_point_count; _0x1f7544++) {
              this.available_bitrate[_0x1f7544] = _0x5c0a80.readUint32();
              this.target_rate_share[_0x1f7544] = _0x5c0a80.readUint16();
            }
          }
          this.maximum_bitrate = _0x5c0a80.readUint32();
          this.minimum_bitrate = _0x5c0a80.readUint32();
          this.discard_priority = _0x5c0a80.readUint8();
        }
      });
      _0x3cde36.createSampleGroupCtor("roll", function (_0x50b4ac) {
        this.roll_distance = _0x50b4ac.readInt16();
      });
      _0x3cde36.SampleGroupEntry.prototype.parse = function (_0x4afb61) {
        _0x3949d1.warn('BoxParser', "Unknown Sample Group type: " + this.grouping_type);
        this.data = _0x4afb61.readUint8Array(this.description_length);
      };
      _0x3cde36.createSampleGroupCtor("scif", function (_0x5c5cfc) {
        _0x3949d1.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
      });
      _0x3cde36.createSampleGroupCtor("scnm", function (_0x169006) {
        _0x3949d1.warn('BoxParser', "Sample Group type: " + this.grouping_type + " not fully parsed");
      });
      _0x3cde36.createSampleGroupCtor("seig", function (_0x2840fe) {
        this.reserved = _0x2840fe.readUint8();
        var _0x3f9738 = _0x2840fe.readUint8();
        this.crypt_byte_block = _0x3f9738 >> 0x4;
        this.skip_byte_block = 0xf & _0x3f9738;
        this.isProtected = _0x2840fe.readUint8();
        this.Per_Sample_IV_Size = _0x2840fe.readUint8();
        this.KID = _0x3cde36.parseHex16(_0x2840fe);
        this.constant_IV_size = 0x0;
        this.constant_IV = 0x0;
        if (0x1 === this.isProtected && 0x0 === this.Per_Sample_IV_Size) {
          this.constant_IV_size = _0x2840fe.readUint8();
          this.constant_IV = _0x2840fe.readUint8Array(this.constant_IV_size);
        }
      });
      _0x3cde36.createSampleGroupCtor('stsa', function (_0x436cbf) {
        _0x3949d1.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
      });
      _0x3cde36.createSampleGroupCtor('sync', function (_0x2b656c) {
        var _0x59cfd5 = _0x2b656c.readUint8();
        this.NAL_unit_type = 0x3f & _0x59cfd5;
      });
      _0x3cde36.createSampleGroupCtor('tele', function (_0x4c1e75) {
        var _0x30f47e = _0x4c1e75.readUint8();
        this.level_independently_decodable = _0x30f47e >> 0x7;
      });
      _0x3cde36.createSampleGroupCtor('tsas', function (_0x118919) {
        _0x3949d1.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
      });
      _0x3cde36.createSampleGroupCtor("tscl", function (_0x5a5e62) {
        _0x3949d1.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
      });
      _0x3cde36.createSampleGroupCtor("vipr", function (_0x4c3596) {
        _0x3949d1.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
      });
      _0x3cde36.createFullBoxCtor("sbgp", function (_0x1f1126) {
        this.grouping_type = _0x1f1126.readString(0x4);
        if (0x1 === this.version) {
          this.grouping_type_parameter = _0x1f1126.readUint32();
        } else {
          this.grouping_type_parameter = 0x0;
        }
        this.entries = [];
        var _0x141ecd = _0x1f1126.readUint32();
        for (var _0x50163f = 0x0; _0x50163f < _0x141ecd; _0x50163f++) {
          var _0x2af039 = {};
          this.entries.push(_0x2af039);
          _0x2af039.sample_count = _0x1f1126.readInt32();
          _0x2af039.group_description_index = _0x1f1126.readInt32();
        }
      });
      _0x3cde36.createFullBoxCtor("schm", function (_0x11eb04) {
        this.scheme_type = _0x11eb04.readString(0x4);
        this.scheme_version = _0x11eb04.readUint32();
        if (0x1 & this.flags) {
          this.scheme_uri = _0x11eb04.readString(this.size - this.hdr_size - 0x8);
        }
      });
      _0x3cde36.createBoxCtor("sdp ", function (_0x1f4ced) {
        this.sdptext = _0x1f4ced.readString(this.size - this.hdr_size);
      });
      _0x3cde36.createFullBoxCtor("sdtp", function (_0x2231a5) {
        var _0x2469f2;
        var _0x2d6791 = this.size - this.hdr_size;
        this.is_leading = [];
        this.sample_depends_on = [];
        this.sample_is_depended_on = [];
        this.sample_has_redundancy = [];
        for (var _0x34be49 = 0x0; _0x34be49 < _0x2d6791; _0x34be49++) {
          _0x2469f2 = _0x2231a5.readUint8();
          this.is_leading[_0x34be49] = _0x2469f2 >> 0x6;
          this.sample_depends_on[_0x34be49] = _0x2469f2 >> 0x4 & 0x3;
          this.sample_is_depended_on[_0x34be49] = _0x2469f2 >> 0x2 & 0x3;
          this.sample_has_redundancy[_0x34be49] = 0x3 & _0x2469f2;
        }
      });
      _0x3cde36.createFullBoxCtor("senc");
      _0x3cde36.createFullBoxCtor("sgpd", function (_0x3ed86f) {
        this.grouping_type = _0x3ed86f.readString(0x4);
        _0x3949d1.debug("BoxParser", "Found Sample Groups of type " + this.grouping_type);
        if (0x1 === this.version) {
          this.default_length = _0x3ed86f.readUint32();
        } else {
          this.default_length = 0x0;
        }
        if (this.version >= 0x2) {
          this.default_group_description_index = _0x3ed86f.readUint32();
        }
        this.entries = [];
        var _0x54cf3b = _0x3ed86f.readUint32();
        for (var _0x12635a = 0x0; _0x12635a < _0x54cf3b; _0x12635a++) {
          var _0x42eff2;
          _0x42eff2 = _0x3cde36[this.grouping_type + "SampleGroupEntry"] ? new _0x3cde36[this.grouping_type + "SampleGroupEntry"](this.grouping_type) : new _0x3cde36.SampleGroupEntry(this.grouping_type);
          this.entries.push(_0x42eff2);
          if (0x1 === this.version && 0x0 === this.default_length) {
            _0x42eff2.description_length = _0x3ed86f.readUint32();
          } else {
            _0x42eff2.description_length = this.default_length;
          }
          if (_0x42eff2.write === _0x3cde36.SampleGroupEntry.prototype.write) {
            _0x3949d1.info('BoxParser', "SampleGroup for type " + this.grouping_type + " writing not yet implemented, keeping unparsed data in memory for later write");
            _0x42eff2.data = _0x3ed86f.readUint8Array(_0x42eff2.description_length);
            _0x3ed86f.position -= _0x42eff2.description_length;
          }
          _0x42eff2.parse(_0x3ed86f);
        }
      });
      _0x3cde36.createFullBoxCtor("sidx", function (_0x3ca9fa) {
        this.reference_ID = _0x3ca9fa.readUint32();
        this.timescale = _0x3ca9fa.readUint32();
        if (0x0 === this.version) {
          this.earliest_presentation_time = _0x3ca9fa.readUint32();
          this.first_offset = _0x3ca9fa.readUint32();
        } else {
          this.earliest_presentation_time = _0x3ca9fa.readUint64();
          this.first_offset = _0x3ca9fa.readUint64();
        }
        _0x3ca9fa.readUint16();
        this.references = [];
        var _0x474ff4 = _0x3ca9fa.readUint16();
        for (var _0x41458e = 0x0; _0x41458e < _0x474ff4; _0x41458e++) {
          var _0x2c7b15 = {};
          this.references.push(_0x2c7b15);
          var _0x28b1d3 = _0x3ca9fa.readUint32();
          _0x2c7b15.reference_type = _0x28b1d3 >> 0x1f & 0x1;
          _0x2c7b15.referenced_size = 0x7fffffff & _0x28b1d3;
          _0x2c7b15.subsegment_duration = _0x3ca9fa.readUint32();
          _0x28b1d3 = _0x3ca9fa.readUint32();
          _0x2c7b15.starts_with_SAP = _0x28b1d3 >> 0x1f & 0x1;
          _0x2c7b15.SAP_type = _0x28b1d3 >> 0x1c & 0x7;
          _0x2c7b15.SAP_delta_time = 0xfffffff & _0x28b1d3;
        }
      });
      _0x3cde36.SingleItemTypeReferenceBox = function (_0xdb84cc, _0x594506, _0x44c9b7, _0x3145bc) {
        _0x3cde36.Box.call(this, _0xdb84cc, _0x594506);
        this.hdr_size = _0x44c9b7;
        this.start = _0x3145bc;
      };
      _0x3cde36.SingleItemTypeReferenceBox.prototype = new _0x3cde36.Box();
      _0x3cde36.SingleItemTypeReferenceBox.prototype.parse = function (_0x1909fb) {
        this.from_item_ID = _0x1909fb.readUint16();
        var _0x56a0c5 = _0x1909fb.readUint16();
        this.references = [];
        for (var _0x22010c = 0x0; _0x22010c < _0x56a0c5; _0x22010c++) {
          this.references[_0x22010c] = _0x1909fb.readUint16();
        }
      };
      _0x3cde36.SingleItemTypeReferenceBoxLarge = function (_0x4a7734, _0x36f705, _0x50a224, _0x197cf1) {
        _0x3cde36.Box.call(this, _0x4a7734, _0x36f705);
        this.hdr_size = _0x50a224;
        this.start = _0x197cf1;
      };
      _0x3cde36.SingleItemTypeReferenceBoxLarge.prototype = new _0x3cde36.Box();
      _0x3cde36.SingleItemTypeReferenceBoxLarge.prototype.parse = function (_0x3ebd19) {
        this.from_item_ID = _0x3ebd19.readUint32();
        var _0x144622 = _0x3ebd19.readUint16();
        this.references = [];
        for (var _0x2e7d6d = 0x0; _0x2e7d6d < _0x144622; _0x2e7d6d++) {
          this.references[_0x2e7d6d] = _0x3ebd19.readUint32();
        }
      };
      _0x3cde36.createFullBoxCtor('SmDm', function (_0x35cbe9) {
        this.primaryRChromaticity_x = _0x35cbe9.readUint16();
        this.primaryRChromaticity_y = _0x35cbe9.readUint16();
        this.primaryGChromaticity_x = _0x35cbe9.readUint16();
        this.primaryGChromaticity_y = _0x35cbe9.readUint16();
        this.primaryBChromaticity_x = _0x35cbe9.readUint16();
        this.primaryBChromaticity_y = _0x35cbe9.readUint16();
        this.whitePointChromaticity_x = _0x35cbe9.readUint16();
        this.whitePointChromaticity_y = _0x35cbe9.readUint16();
        this.luminanceMax = _0x35cbe9.readUint32();
        this.luminanceMin = _0x35cbe9.readUint32();
      });
      _0x3cde36.createFullBoxCtor("smhd", function (_0x31d58a) {
        this.balance = _0x31d58a.readUint16();
        _0x31d58a.readUint16();
      });
      _0x3cde36.createFullBoxCtor("ssix", function (_0xb92e09) {
        this.subsegments = [];
        var _0x159b3e = _0xb92e09.readUint32();
        for (var _0x1be10e = 0x0; _0x1be10e < _0x159b3e; _0x1be10e++) {
          var _0xdced3b = {};
          this.subsegments.push(_0xdced3b);
          _0xdced3b.ranges = [];
          var _0x131292 = _0xb92e09.readUint32();
          for (var _0x38a9fc = 0x0; _0x38a9fc < _0x131292; _0x38a9fc++) {
            var _0x46aba6 = {};
            _0xdced3b.ranges.push(_0x46aba6);
            _0x46aba6.level = _0xb92e09.readUint8();
            _0x46aba6.range_size = _0xb92e09.readUint24();
          }
        }
      });
      _0x3cde36.createFullBoxCtor("stco", function (_0x689387) {
        var _0x2492f5;
        _0x2492f5 = _0x689387.readUint32();
        this.chunk_offsets = [];
        if (0x0 === this.version) {
          for (var _0xaf3337 = 0x0; _0xaf3337 < _0x2492f5; _0xaf3337++) {
            this.chunk_offsets.push(_0x689387.readUint32());
          }
        }
      });
      _0x3cde36.createFullBoxCtor("stdp", function (_0x27419c) {
        var _0x2a1d6c = (this.size - this.hdr_size) / 0x2;
        this.priority = [];
        for (var _0x355cba = 0x0; _0x355cba < _0x2a1d6c; _0x355cba++) {
          this.priority[_0x355cba] = _0x27419c.readUint16();
        }
      });
      _0x3cde36.createFullBoxCtor('sthd');
      _0x3cde36.createFullBoxCtor('stri', function (_0x452d4d) {
        this.switch_group = _0x452d4d.readUint16();
        this.alternate_group = _0x452d4d.readUint16();
        this.sub_track_id = _0x452d4d.readUint32();
        var _0x5e9857 = (this.size - this.hdr_size - 0x8) / 0x4;
        this.attribute_list = [];
        for (var _0x4852ad = 0x0; _0x4852ad < _0x5e9857; _0x4852ad++) {
          this.attribute_list[_0x4852ad] = _0x452d4d.readUint32();
        }
      });
      _0x3cde36.createFullBoxCtor("stsc", function (_0x139444) {
        var _0x2f3b08;
        var _0x2f99ac;
        _0x2f3b08 = _0x139444.readUint32();
        this.first_chunk = [];
        this.samples_per_chunk = [];
        this.sample_description_index = [];
        if (0x0 === this.version) {
          for (_0x2f99ac = 0x0; _0x2f99ac < _0x2f3b08; _0x2f99ac++) {
            this.first_chunk.push(_0x139444.readUint32());
            this.samples_per_chunk.push(_0x139444.readUint32());
            this.sample_description_index.push(_0x139444.readUint32());
          }
        }
      });
      _0x3cde36.createFullBoxCtor("stsd", function (_0x573859) {
        var _0x2f08c1;
        var _0x7f0509;
        var _0x2cff23;
        var _0x4cd323;
        this.entries = [];
        _0x2cff23 = _0x573859.readUint32();
        for (_0x2f08c1 = 0x1; _0x2f08c1 <= _0x2cff23; _0x2f08c1++) {
          if ((_0x7f0509 = _0x3cde36.parseOneBox(_0x573859, true, this.size - (_0x573859.getPosition() - this.start))).code !== 0x1) {
            return;
          }
          if (_0x3cde36[_0x7f0509.type + "SampleEntry"]) {
            (_0x4cd323 = new _0x3cde36[_0x7f0509.type + "SampleEntry"](_0x7f0509.size)).hdr_size = _0x7f0509.hdr_size;
            _0x4cd323.start = _0x7f0509.start;
          } else {
            _0x3949d1.warn("BoxParser", "Unknown sample entry type: " + _0x7f0509.type);
            _0x4cd323 = new _0x3cde36.SampleEntry(_0x7f0509.type, _0x7f0509.size, _0x7f0509.hdr_size, _0x7f0509.start);
          }
          if (_0x4cd323.write === _0x3cde36.SampleEntry.prototype.write) {
            _0x3949d1.info("BoxParser", "SampleEntry " + _0x4cd323.type + " box writing not yet implemented, keeping unparsed data in memory for later write");
            _0x4cd323.parseDataAndRewind(_0x573859);
          }
          _0x4cd323.parse(_0x573859);
          this.entries.push(_0x4cd323);
        }
      });
      _0x3cde36.createFullBoxCtor("stsg", function (_0x1b3df8) {
        this.grouping_type = _0x1b3df8.readUint32();
        var _0x249818 = _0x1b3df8.readUint16();
        this.group_description_index = [];
        for (var _0x41800a = 0x0; _0x41800a < _0x249818; _0x41800a++) {
          this.group_description_index[_0x41800a] = _0x1b3df8.readUint32();
        }
      });
      _0x3cde36.createFullBoxCtor("stsh", function (_0x3fcbee) {
        var _0x41c763;
        var _0xe6b4b7;
        _0x41c763 = _0x3fcbee.readUint32();
        this.shadowed_sample_numbers = [];
        this.sync_sample_numbers = [];
        if (0x0 === this.version) {
          for (_0xe6b4b7 = 0x0; _0xe6b4b7 < _0x41c763; _0xe6b4b7++) {
            this.shadowed_sample_numbers.push(_0x3fcbee.readUint32());
            this.sync_sample_numbers.push(_0x3fcbee.readUint32());
          }
        }
      });
      _0x3cde36.createFullBoxCtor("stss", function (_0xc56ec2) {
        var _0x2088d2;
        var _0x60f8b6;
        _0x60f8b6 = _0xc56ec2.readUint32();
        if (0x0 === this.version) {
          this.sample_numbers = [];
          for (_0x2088d2 = 0x0; _0x2088d2 < _0x60f8b6; _0x2088d2++) {
            this.sample_numbers.push(_0xc56ec2.readUint32());
          }
        }
      });
      _0x3cde36.createFullBoxCtor("stsz", function (_0x4024cb) {
        var _0x594b1c;
        this.sample_sizes = [];
        if (0x0 === this.version) {
          this.sample_size = _0x4024cb.readUint32();
          this.sample_count = _0x4024cb.readUint32();
          for (_0x594b1c = 0x0; _0x594b1c < this.sample_count; _0x594b1c++) {
            if (0x0 === this.sample_size) {
              this.sample_sizes.push(_0x4024cb.readUint32());
            } else {
              this.sample_sizes[_0x594b1c] = this.sample_size;
            }
          }
        }
      });
      _0x3cde36.createFullBoxCtor("stts", function (_0x3cbde7) {
        var _0x199c81;
        var _0x315f08;
        var _0x4a4ff7;
        _0x199c81 = _0x3cbde7.readUint32();
        this.sample_counts = [];
        this.sample_deltas = [];
        if (0x0 === this.version) {
          for (_0x315f08 = 0x0; _0x315f08 < _0x199c81; _0x315f08++) {
            this.sample_counts.push(_0x3cbde7.readUint32());
            if ((_0x4a4ff7 = _0x3cbde7.readInt32()) < 0x0) {
              _0x3949d1.warn("BoxParser", "File uses negative stts sample delta, using value 1 instead, sync may be lost!");
              _0x4a4ff7 = 0x1;
            }
            this.sample_deltas.push(_0x4a4ff7);
          }
        }
      });
      _0x3cde36.createFullBoxCtor('stvi', function (_0x11ca41) {
        var _0x159bc6 = _0x11ca41.readUint32();
        this.single_view_allowed = 0x3 & _0x159bc6;
        this.stereo_scheme = _0x11ca41.readUint32();
        var _0x2e548b;
        var _0x9975e3;
        var _0xe331e = _0x11ca41.readUint32();
        this.stereo_indication_type = _0x11ca41.readString(_0xe331e);
        for (this.boxes = []; _0x11ca41.getPosition() < this.start + this.size;) {
          if ((_0x2e548b = _0x3cde36.parseOneBox(_0x11ca41, false, this.size - (_0x11ca41.getPosition() - this.start))).code !== 0x1) {
            return;
          }
          _0x9975e3 = _0x2e548b.box;
          this.boxes.push(_0x9975e3);
          this[_0x9975e3.type] = _0x9975e3;
        }
      });
      _0x3cde36.createBoxCtor("styp", function (_0x517387) {
        _0x3cde36.ftypBox.prototype.parse.call(this, _0x517387);
      });
      _0x3cde36.createFullBoxCtor("stz2", function (_0x3340ec) {
        var _0x266081;
        var _0x1fd8c7;
        this.sample_sizes = [];
        if (0x0 === this.version) {
          this.reserved = _0x3340ec.readUint24();
          this.field_size = _0x3340ec.readUint8();
          _0x1fd8c7 = _0x3340ec.readUint32();
          if (0x4 === this.field_size) {
            for (_0x266081 = 0x0; _0x266081 < _0x1fd8c7; _0x266081 += 0x2) {
              var _0x4ee53c = _0x3340ec.readUint8();
              this.sample_sizes[_0x266081] = _0x4ee53c >> 0x4 & 0xf;
              this.sample_sizes[_0x266081 + 0x1] = 0xf & _0x4ee53c;
            }
          } else {
            if (0x8 === this.field_size) {
              for (_0x266081 = 0x0; _0x266081 < _0x1fd8c7; _0x266081++) {
                this.sample_sizes[_0x266081] = _0x3340ec.readUint8();
              }
            } else {
              if (0x10 === this.field_size) {
                for (_0x266081 = 0x0; _0x266081 < _0x1fd8c7; _0x266081++) {
                  this.sample_sizes[_0x266081] = _0x3340ec.readUint16();
                }
              } else {
                _0x3949d1.error("BoxParser", "Error in length field in stz2 box");
              }
            }
          }
        }
      });
      _0x3cde36.createFullBoxCtor("subs", function (_0x5f08f7) {
        var _0x2811eb;
        var _0x1bf394;
        var _0xdcc031;
        var _0x578c06;
        _0xdcc031 = _0x5f08f7.readUint32();
        this.entries = [];
        for (_0x2811eb = 0x0; _0x2811eb < _0xdcc031; _0x2811eb++) {
          var _0x50f4d4 = {};
          this.entries[_0x2811eb] = _0x50f4d4;
          _0x50f4d4.sample_delta = _0x5f08f7.readUint32();
          _0x50f4d4.subsamples = [];
          if ((_0x578c06 = _0x5f08f7.readUint16()) > 0x0) {
            for (_0x1bf394 = 0x0; _0x1bf394 < _0x578c06; _0x1bf394++) {
              var _0x4b23d0 = {};
              _0x50f4d4.subsamples.push(_0x4b23d0);
              if (0x1 == this.version) {
                _0x4b23d0.size = _0x5f08f7.readUint32();
              } else {
                _0x4b23d0.size = _0x5f08f7.readUint16();
              }
              _0x4b23d0.priority = _0x5f08f7.readUint8();
              _0x4b23d0.discardable = _0x5f08f7.readUint8();
              _0x4b23d0.codec_specific_parameters = _0x5f08f7.readUint32();
            }
          }
        }
      });
      _0x3cde36.createFullBoxCtor("tenc", function (_0x55cdce) {
        _0x55cdce.readUint8();
        if (0x0 === this.version) {
          _0x55cdce.readUint8();
        } else {
          var _0x38d8cf = _0x55cdce.readUint8();
          this.default_crypt_byte_block = _0x38d8cf >> 0x4 & 0xf;
          this.default_skip_byte_block = 0xf & _0x38d8cf;
        }
        this.default_isProtected = _0x55cdce.readUint8();
        this.default_Per_Sample_IV_Size = _0x55cdce.readUint8();
        this.default_KID = _0x3cde36.parseHex16(_0x55cdce);
        if (0x1 === this.default_isProtected && 0x0 === this.default_Per_Sample_IV_Size) {
          this.default_constant_IV_size = _0x55cdce.readUint8();
          this.default_constant_IV = _0x55cdce.readUint8Array(this.default_constant_IV_size);
        }
      });
      _0x3cde36.createFullBoxCtor("tfdt", function (_0x257dd4) {
        if (0x1 == this.version) {
          this.baseMediaDecodeTime = _0x257dd4.readUint64();
        } else {
          this.baseMediaDecodeTime = _0x257dd4.readUint32();
        }
      });
      _0x3cde36.createFullBoxCtor('tfhd', function (_0x4e1887) {
        var _0x4edae2 = 0x0;
        this.track_id = _0x4e1887.readUint32();
        if (this.size - this.hdr_size > _0x4edae2 && this.flags & _0x3cde36.TFHD_FLAG_BASE_DATA_OFFSET) {
          this.base_data_offset = _0x4e1887.readUint64();
          _0x4edae2 += 0x8;
        } else {
          this.base_data_offset = 0x0;
        }
        if (this.size - this.hdr_size > _0x4edae2 && this.flags & _0x3cde36.TFHD_FLAG_SAMPLE_DESC) {
          this.default_sample_description_index = _0x4e1887.readUint32();
          _0x4edae2 += 0x4;
        } else {
          this.default_sample_description_index = 0x0;
        }
        if (this.size - this.hdr_size > _0x4edae2 && this.flags & _0x3cde36.TFHD_FLAG_SAMPLE_DUR) {
          this.default_sample_duration = _0x4e1887.readUint32();
          _0x4edae2 += 0x4;
        } else {
          this.default_sample_duration = 0x0;
        }
        if (this.size - this.hdr_size > _0x4edae2 && this.flags & _0x3cde36.TFHD_FLAG_SAMPLE_SIZE) {
          this.default_sample_size = _0x4e1887.readUint32();
          _0x4edae2 += 0x4;
        } else {
          this.default_sample_size = 0x0;
        }
        if (this.size - this.hdr_size > _0x4edae2 && this.flags & _0x3cde36.TFHD_FLAG_SAMPLE_FLAGS) {
          this.default_sample_flags = _0x4e1887.readUint32();
          _0x4edae2 += 0x4;
        } else {
          this.default_sample_flags = 0x0;
        }
      });
      _0x3cde36.createFullBoxCtor('tfra', function (_0x3280e5) {
        this.track_ID = _0x3280e5.readUint32();
        _0x3280e5.readUint24();
        var _0x42fde9 = _0x3280e5.readUint8();
        this.length_size_of_traf_num = _0x42fde9 >> 0x4 & 0x3;
        this.length_size_of_trun_num = _0x42fde9 >> 0x2 & 0x3;
        this.length_size_of_sample_num = 0x3 & _0x42fde9;
        this.entries = [];
        var _0x1ba8e6 = _0x3280e5.readUint32();
        for (var _0x242568 = 0x0; _0x242568 < _0x1ba8e6; _0x242568++) {
          if (0x1 === this.version) {
            this.time = _0x3280e5.readUint64();
            this.moof_offset = _0x3280e5.readUint64();
          } else {
            this.time = _0x3280e5.readUint32();
            this.moof_offset = _0x3280e5.readUint32();
          }
          this.traf_number = _0x3280e5["readUint" + 0x8 * (this.length_size_of_traf_num + 0x1)]();
          this.trun_number = _0x3280e5["readUint" + 0x8 * (this.length_size_of_trun_num + 0x1)]();
          this.sample_number = _0x3280e5["readUint" + 0x8 * (this.length_size_of_sample_num + 0x1)]();
        }
      });
      _0x3cde36.createFullBoxCtor("tkhd", function (_0x379b8c) {
        if (0x1 == this.version) {
          this.creation_time = _0x379b8c.readUint64();
          this.modification_time = _0x379b8c.readUint64();
          this.track_id = _0x379b8c.readUint32();
          _0x379b8c.readUint32();
          this.duration = _0x379b8c.readUint64();
        } else {
          this.creation_time = _0x379b8c.readUint32();
          this.modification_time = _0x379b8c.readUint32();
          this.track_id = _0x379b8c.readUint32();
          _0x379b8c.readUint32();
          this.duration = _0x379b8c.readUint32();
        }
        _0x379b8c.readUint32Array(0x2);
        this.layer = _0x379b8c.readInt16();
        this.alternate_group = _0x379b8c.readInt16();
        this.volume = _0x379b8c.readInt16() >> 0x8;
        _0x379b8c.readUint16();
        this.matrix = _0x379b8c.readInt32Array(0x9);
        this.width = _0x379b8c.readUint32();
        this.height = _0x379b8c.readUint32();
      });
      _0x3cde36.createBoxCtor("tmax", function (_0x51bffa) {
        this.time = _0x51bffa.readUint32();
      });
      _0x3cde36.createBoxCtor("tmin", function (_0x38353c) {
        this.time = _0x38353c.readUint32();
      });
      _0x3cde36.createBoxCtor("totl", function (_0x4e0388) {
        this.bytessent = _0x4e0388.readUint32();
      });
      _0x3cde36.createBoxCtor("tpay", function (_0x4788ca) {
        this.bytessent = _0x4788ca.readUint32();
      });
      _0x3cde36.createBoxCtor("tpyl", function (_0x5b9fdf) {
        this.bytessent = _0x5b9fdf.readUint64();
      });
      _0x3cde36.TrackGroupTypeBox.prototype.parse = function (_0x55c2b8) {
        this.parseFullHeader(_0x55c2b8);
        this.track_group_id = _0x55c2b8.readUint32();
      };
      _0x3cde36.createTrackGroupCtor("msrc");
      _0x3cde36.TrackReferenceTypeBox = function (_0x5b4d54, _0x1aba44, _0x2f0e33, _0x980f70) {
        _0x3cde36.Box.call(this, _0x5b4d54, _0x1aba44);
        this.hdr_size = _0x2f0e33;
        this.start = _0x980f70;
      };
      _0x3cde36.TrackReferenceTypeBox.prototype = new _0x3cde36.Box();
      _0x3cde36.TrackReferenceTypeBox.prototype.parse = function (_0x17e9a3) {
        this.track_ids = _0x17e9a3.readUint32Array((this.size - this.hdr_size) / 0x4);
      };
      _0x3cde36.trefBox.prototype.parse = function (_0x1818a) {
        var _0x4bef4d;
        for (var _0x35d3f6; _0x1818a.getPosition() < this.start + this.size;) {
          if ((_0x4bef4d = _0x3cde36.parseOneBox(_0x1818a, true, this.size - (_0x1818a.getPosition() - this.start))).code !== 0x1) {
            return;
          }
          if ((_0x35d3f6 = new _0x3cde36.TrackReferenceTypeBox(_0x4bef4d.type, _0x4bef4d.size, _0x4bef4d.hdr_size, _0x4bef4d.start)).write === _0x3cde36.Box.prototype.write && "mdat" !== _0x35d3f6.type) {
            _0x3949d1.info('BoxParser', "TrackReference " + _0x35d3f6.type + " box writing not yet implemented, keeping unparsed data in memory for later write");
            _0x35d3f6.parseDataAndRewind(_0x1818a);
          }
          _0x35d3f6.parse(_0x1818a);
          this.boxes.push(_0x35d3f6);
        }
      };
      _0x3cde36.createFullBoxCtor("trep", function (_0x589f7a) {
        this.track_ID = _0x589f7a.readUint32();
        for (this.boxes = []; _0x589f7a.getPosition() < this.start + this.size;) {
          ret = _0x3cde36.parseOneBox(_0x589f7a, false, this.size - (_0x589f7a.getPosition() - this.start));
          if (ret.code !== 0x1) {
            return;
          }
          box = ret.box;
          this.boxes.push(box);
        }
      });
      _0x3cde36.createFullBoxCtor("trex", function (_0xa3218f) {
        this.track_id = _0xa3218f.readUint32();
        this.default_sample_description_index = _0xa3218f.readUint32();
        this.default_sample_duration = _0xa3218f.readUint32();
        this.default_sample_size = _0xa3218f.readUint32();
        this.default_sample_flags = _0xa3218f.readUint32();
      });
      _0x3cde36.createBoxCtor("trpy", function (_0x30643e) {
        this.bytessent = _0x30643e.readUint64();
      });
      _0x3cde36.createFullBoxCtor("trun", function (_0x5ab22a) {
        var _0x2283e1 = 0x0;
        this.sample_count = _0x5ab22a.readUint32();
        _0x2283e1 += 0x4;
        if (this.size - this.hdr_size > _0x2283e1 && this.flags & _0x3cde36.TRUN_FLAGS_DATA_OFFSET) {
          this.data_offset = _0x5ab22a.readInt32();
          _0x2283e1 += 0x4;
        } else {
          this.data_offset = 0x0;
        }
        if (this.size - this.hdr_size > _0x2283e1 && this.flags & _0x3cde36.TRUN_FLAGS_FIRST_FLAG) {
          this.first_sample_flags = _0x5ab22a.readUint32();
          _0x2283e1 += 0x4;
        } else {
          this.first_sample_flags = 0x0;
        }
        this.sample_duration = [];
        this.sample_size = [];
        this.sample_flags = [];
        this.sample_composition_time_offset = [];
        if (this.size - this.hdr_size > _0x2283e1) {
          for (var _0xa7f67a = 0x0; _0xa7f67a < this.sample_count; _0xa7f67a++) {
            if (this.flags & _0x3cde36.TRUN_FLAGS_DURATION) {
              this.sample_duration[_0xa7f67a] = _0x5ab22a.readUint32();
            }
            if (this.flags & _0x3cde36.TRUN_FLAGS_SIZE) {
              this.sample_size[_0xa7f67a] = _0x5ab22a.readUint32();
            }
            if (this.flags & _0x3cde36.TRUN_FLAGS_FLAGS) {
              this.sample_flags[_0xa7f67a] = _0x5ab22a.readUint32();
            }
            if (this.flags & _0x3cde36.TRUN_FLAGS_CTS_OFFSET) {
              if (0x0 === this.version) {
                this.sample_composition_time_offset[_0xa7f67a] = _0x5ab22a.readUint32();
              } else {
                this.sample_composition_time_offset[_0xa7f67a] = _0x5ab22a.readInt32();
              }
            }
          }
        }
      });
      _0x3cde36.createFullBoxCtor("tsel", function (_0x221b1e) {
        this.switch_group = _0x221b1e.readUint32();
        var _0x34585a = (this.size - this.hdr_size - 0x4) / 0x4;
        this.attribute_list = [];
        for (var _0x42294e = 0x0; _0x42294e < _0x34585a; _0x42294e++) {
          this.attribute_list[_0x42294e] = _0x221b1e.readUint32();
        }
      });
      _0x3cde36.createFullBoxCtor('txtC', function (_0x33c0b7) {
        this.config = _0x33c0b7.readCString();
      });
      _0x3cde36.createFullBoxCtor("url ", function (_0x342455) {
        if (0x1 !== this.flags) {
          this.location = _0x342455.readCString();
        }
      });
      _0x3cde36.createFullBoxCtor("urn ", function (_0x27f48e) {
        this.name = _0x27f48e.readCString();
        if (this.size - this.hdr_size - this.name.length - 0x1 > 0x0) {
          this.location = _0x27f48e.readCString();
        }
      });
      _0x3cde36.createUUIDBox("a5d40b30e81411ddba2f0800200c9a66", true, false, function (_0x293e59) {
        this.LiveServerManifest = _0x293e59.readString(this.size - this.hdr_size).replace(/&/g, '&amp;').replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, '&quot;').replace(/'/g, "&#039;");
      });
      _0x3cde36.createUUIDBox("d08a4f1810f34a82b6c832d8aba183d3", true, false, function (_0x3654c0) {
        this.system_id = _0x3cde36.parseHex16(_0x3654c0);
        var _0xb33d72 = _0x3654c0.readUint32();
        if (_0xb33d72 > 0x0) {
          this.data = _0x3654c0.readUint8Array(_0xb33d72);
        }
      });
      _0x3cde36.createUUIDBox("a2394f525a9b4f14a2446c427c648df4", true, false);
      _0x3cde36.createUUIDBox("8974dbce7be74c5184f97148f9882554", true, false, function (_0x5b7e30) {
        this.default_AlgorithmID = _0x5b7e30.readUint24();
        this.default_IV_size = _0x5b7e30.readUint8();
        this.default_KID = _0x3cde36.parseHex16(_0x5b7e30);
      });
      _0x3cde36.createUUIDBox("d4807ef2ca3946958e5426cb9e46a79f", true, false, function (_0x46c578) {
        this.fragment_count = _0x46c578.readUint8();
        this.entries = [];
        for (var _0x710fc1 = 0x0; _0x710fc1 < this.fragment_count; _0x710fc1++) {
          var _0x492d60 = {};
          var _0x44ad09 = 0x0;
          var _0x27612d = 0x0;
          if (0x1 === this.version) {
            _0x44ad09 = _0x46c578.readUint64();
            _0x27612d = _0x46c578.readUint64();
          } else {
            _0x44ad09 = _0x46c578.readUint32();
            _0x27612d = _0x46c578.readUint32();
          }
          _0x492d60.absolute_time = _0x44ad09;
          _0x492d60.absolute_duration = _0x27612d;
          this.entries.push(_0x492d60);
        }
      });
      _0x3cde36.createUUIDBox("6d1d9b0542d544e680e2141daff757b2", true, false, function (_0x5d4f3f) {
        if (0x1 === this.version) {
          this.absolute_time = _0x5d4f3f.readUint64();
          this.duration = _0x5d4f3f.readUint64();
        } else {
          this.absolute_time = _0x5d4f3f.readUint32();
          this.duration = _0x5d4f3f.readUint32();
        }
      });
      _0x3cde36.createFullBoxCtor("vmhd", function (_0x35f986) {
        this.graphicsmode = _0x35f986.readUint16();
        this.opcolor = _0x35f986.readUint16Array(0x3);
      });
      _0x3cde36.createFullBoxCtor("vpcC", function (_0x445e37) {
        var _0x3830d6;
        if (0x1 === this.version) {
          this.profile = _0x445e37.readUint8();
          this.level = _0x445e37.readUint8();
          _0x3830d6 = _0x445e37.readUint8();
          this.bitDepth = _0x3830d6 >> 0x4;
          this.chromaSubsampling = _0x3830d6 >> 0x1 & 0x7;
          this.videoFullRangeFlag = 0x1 & _0x3830d6;
          this.colourPrimaries = _0x445e37.readUint8();
          this.transferCharacteristics = _0x445e37.readUint8();
          this.matrixCoefficients = _0x445e37.readUint8();
          this.codecIntializationDataSize = _0x445e37.readUint16();
          this.codecIntializationData = _0x445e37.readUint8Array(this.codecIntializationDataSize);
        } else {
          this.profile = _0x445e37.readUint8();
          this.level = _0x445e37.readUint8();
          _0x3830d6 = _0x445e37.readUint8();
          this.bitDepth = _0x3830d6 >> 0x4 & 0xf;
          this.colorSpace = 0xf & _0x3830d6;
          _0x3830d6 = _0x445e37.readUint8();
          this.chromaSubsampling = _0x3830d6 >> 0x4 & 0xf;
          this.transferFunction = _0x3830d6 >> 0x1 & 0x7;
          this.videoFullRangeFlag = 0x1 & _0x3830d6;
          this.codecIntializationDataSize = _0x445e37.readUint16();
          this.codecIntializationData = _0x445e37.readUint8Array(this.codecIntializationDataSize);
        }
      });
      _0x3cde36.createBoxCtor("vttC", function (_0xa7fa1) {
        this.text = _0xa7fa1.readString(this.size - this.hdr_size);
      });
      _0x3cde36.createFullBoxCtor('vvcC', function (_0x26d72c) {
        var _0x11078f;
        var _0x29f986;
        var _0x4993d5 = {
          'held_bits': undefined,
          'num_held_bits': 0x0,
          'stream_read_1_bytes': function (_0x48de55) {
            this.held_bits = _0x48de55.readUint8();
            this.num_held_bits = 0x8;
          },
          'stream_read_2_bytes': function (_0x2f81e2) {
            this.held_bits = _0x2f81e2.readUint16();
            this.num_held_bits = 0x10;
          },
          'extract_bits': function (_0x58b1f5) {
            var _0x434574 = this.held_bits >> this.num_held_bits - _0x58b1f5 & (0x1 << _0x58b1f5) - 0x1;
            this.num_held_bits -= _0x58b1f5;
            return _0x434574;
          }
        };
        _0x4993d5.stream_read_1_bytes(_0x26d72c);
        _0x4993d5.extract_bits(0x5);
        this.lengthSizeMinusOne = _0x4993d5.extract_bits(0x2);
        this.ptl_present_flag = _0x4993d5.extract_bits(0x1);
        if (this.ptl_present_flag) {
          _0x4993d5.stream_read_2_bytes(_0x26d72c);
          this.ols_idx = _0x4993d5.extract_bits(0x9);
          this.num_sublayers = _0x4993d5.extract_bits(0x3);
          this.constant_frame_rate = _0x4993d5.extract_bits(0x2);
          this.chroma_format_idc = _0x4993d5.extract_bits(0x2);
          _0x4993d5.stream_read_1_bytes(_0x26d72c);
          this.bit_depth_minus8 = _0x4993d5.extract_bits(0x3);
          _0x4993d5.extract_bits(0x5);
          _0x4993d5.stream_read_2_bytes(_0x26d72c);
          _0x4993d5.extract_bits(0x2);
          this.num_bytes_constraint_info = _0x4993d5.extract_bits(0x6);
          this.general_profile_idc = _0x4993d5.extract_bits(0x7);
          this.general_tier_flag = _0x4993d5.extract_bits(0x1);
          this.general_level_idc = _0x26d72c.readUint8();
          _0x4993d5.stream_read_1_bytes(_0x26d72c);
          this.ptl_frame_only_constraint_flag = _0x4993d5.extract_bits(0x1);
          this.ptl_multilayer_enabled_flag = _0x4993d5.extract_bits(0x1);
          this.general_constraint_info = new Uint8Array(this.num_bytes_constraint_info);
          if (this.num_bytes_constraint_info) {
            for (_0x11078f = 0x0; _0x11078f < this.num_bytes_constraint_info - 0x1; _0x11078f++) {
              var _0x3caa61 = _0x4993d5.extract_bits(0x6);
              _0x4993d5.stream_read_1_bytes(_0x26d72c);
              var _0x2b5a11 = _0x4993d5.extract_bits(0x2);
              this.general_constraint_info[_0x11078f] = _0x3caa61 << 0x2 | _0x2b5a11;
            }
            this.general_constraint_info[this.num_bytes_constraint_info - 0x1] = _0x4993d5.extract_bits(0x6);
          } else {
            _0x4993d5.extract_bits(0x6);
          }
          _0x4993d5.stream_read_1_bytes(_0x26d72c);
          this.ptl_sublayer_present_mask = 0x0;
          for (_0x29f986 = this.num_sublayers - 0x2; _0x29f986 >= 0x0; --_0x29f986) {
            var _0x54bb54 = _0x4993d5.extract_bits(0x1);
            this.ptl_sublayer_present_mask |= _0x54bb54 << _0x29f986;
          }
          for (_0x29f986 = this.num_sublayers; _0x29f986 <= 0x8 && this.num_sublayers > 0x1; ++_0x29f986) {
            _0x4993d5.extract_bits(0x1);
          }
          for (_0x29f986 = this.num_sublayers - 0x2; _0x29f986 >= 0x0; --_0x29f986) {
            if (this.ptl_sublayer_present_mask & 0x1 << _0x29f986) {
              this.sublayer_level_idc[_0x29f986] = _0x26d72c.readUint8();
            }
          }
          this.ptl_num_sub_profiles = _0x26d72c.readUint8();
          this.general_sub_profile_idc = [];
          if (this.ptl_num_sub_profiles) {
            for (_0x11078f = 0x0; _0x11078f < this.ptl_num_sub_profiles; _0x11078f++) {
              this.general_sub_profile_idc.push(_0x26d72c.readUint32());
            }
          }
          this.max_picture_width = _0x26d72c.readUint16();
          this.max_picture_height = _0x26d72c.readUint16();
          this.avg_frame_rate = _0x26d72c.readUint16();
        }
        this.nalu_arrays = [];
        var _0x23766e = _0x26d72c.readUint8();
        for (_0x11078f = 0x0; _0x11078f < _0x23766e; _0x11078f++) {
          var _0x4ebe3f = [];
          this.nalu_arrays.push(_0x4ebe3f);
          _0x4993d5.stream_read_1_bytes(_0x26d72c);
          _0x4ebe3f.completeness = _0x4993d5.extract_bits(0x1);
          _0x4993d5.extract_bits(0x2);
          _0x4ebe3f.nalu_type = _0x4993d5.extract_bits(0x5);
          var _0x3752bd = 0x1;
          if (0xd != _0x4ebe3f.nalu_type && 0xc != _0x4ebe3f.nalu_type) {
            _0x3752bd = _0x26d72c.readUint16();
          }
          for (_0x29f986 = 0x0; _0x29f986 < _0x3752bd; _0x29f986++) {
            var _0x43f226 = _0x26d72c.readUint16();
            _0x4ebe3f.push({
              'data': _0x26d72c.readUint8Array(_0x43f226),
              'length': _0x43f226
            });
          }
        }
      });
      _0x3cde36.createFullBoxCtor('vvnC', function (_0x2486cd) {
        var _0x2393b6 = strm.readUint8();
        this.lengthSizeMinusOne = 0x3 & _0x2393b6;
      });
      _0x3cde36.SampleEntry.prototype.isVideo = function () {
        return false;
      };
      _0x3cde36.SampleEntry.prototype.isAudio = function () {
        return false;
      };
      _0x3cde36.SampleEntry.prototype.isSubtitle = function () {
        return false;
      };
      _0x3cde36.SampleEntry.prototype.isMetadata = function () {
        return false;
      };
      _0x3cde36.SampleEntry.prototype.isHint = function () {
        return false;
      };
      _0x3cde36.SampleEntry.prototype.getCodec = function () {
        return this.type.replace('.', '');
      };
      _0x3cde36.SampleEntry.prototype.getWidth = function () {
        return '';
      };
      _0x3cde36.SampleEntry.prototype.getHeight = function () {
        return '';
      };
      _0x3cde36.SampleEntry.prototype.getChannelCount = function () {
        return '';
      };
      _0x3cde36.SampleEntry.prototype.getSampleRate = function () {
        return '';
      };
      _0x3cde36.SampleEntry.prototype.getSampleSize = function () {
        return '';
      };
      _0x3cde36.VisualSampleEntry.prototype.isVideo = function () {
        return true;
      };
      _0x3cde36.VisualSampleEntry.prototype.getWidth = function () {
        return this.width;
      };
      _0x3cde36.VisualSampleEntry.prototype.getHeight = function () {
        return this.height;
      };
      _0x3cde36.AudioSampleEntry.prototype.isAudio = function () {
        return true;
      };
      _0x3cde36.AudioSampleEntry.prototype.getChannelCount = function () {
        return this.channel_count;
      };
      _0x3cde36.AudioSampleEntry.prototype.getSampleRate = function () {
        return this.samplerate;
      };
      _0x3cde36.AudioSampleEntry.prototype.getSampleSize = function () {
        return this.samplesize;
      };
      _0x3cde36.SubtitleSampleEntry.prototype.isSubtitle = function () {
        return true;
      };
      _0x3cde36.MetadataSampleEntry.prototype.isMetadata = function () {
        return true;
      };
      _0x3cde36.decimalToHex = function (_0x21c06e, _0x2f6641) {
        var _0x8970a0 = Number(_0x21c06e).toString(0x10);
        for (_0x2f6641 = null == _0x2f6641 ? _0x2f6641 = 0x2 : _0x2f6641; _0x8970a0.length < _0x2f6641;) {
          _0x8970a0 = '0' + _0x8970a0;
        }
        return _0x8970a0;
      };
      _0x3cde36.avc1SampleEntry.prototype.getCodec = _0x3cde36.avc2SampleEntry.prototype.getCodec = _0x3cde36.avc3SampleEntry.prototype.getCodec = _0x3cde36.avc4SampleEntry.prototype.getCodec = function () {
        var _0x18ef8d = _0x3cde36.SampleEntry.prototype.getCodec.call(this);
        return this.avcC ? _0x18ef8d + '.' + _0x3cde36.decimalToHex(this.avcC.AVCProfileIndication) + _0x3cde36.decimalToHex(this.avcC.profile_compatibility) + _0x3cde36.decimalToHex(this.avcC.AVCLevelIndication) : _0x18ef8d;
      };
      _0x3cde36.hev1SampleEntry.prototype.getCodec = _0x3cde36.hvc1SampleEntry.prototype.getCodec = function () {
        var _0x18be0c;
        var _0x47be18 = _0x3cde36.SampleEntry.prototype.getCodec.call(this);
        if (this.hvcC) {
          _0x47be18 += '.';
          switch (this.hvcC.general_profile_space) {
            case 0x0:
              _0x47be18 += '';
              break;
            case 0x1:
              _0x47be18 += 'A';
              break;
            case 0x2:
              _0x47be18 += 'B';
              break;
            case 0x3:
              _0x47be18 += 'C';
          }
          _0x47be18 += this.hvcC.general_profile_idc;
          _0x47be18 += '.';
          var _0x486616 = this.hvcC.general_profile_compatibility;
          var _0x57a23e = 0x0;
          for (_0x18be0c = 0x0; _0x18be0c < 0x20 && (_0x57a23e |= 0x1 & _0x486616, 0x1f != _0x18be0c); _0x18be0c++) {
            _0x57a23e <<= 0x1;
            _0x486616 >>= 0x1;
          }
          _0x47be18 += _0x3cde36.decimalToHex(_0x57a23e, 0x0);
          _0x47be18 += '.';
          if (0x0 === this.hvcC.general_tier_flag) {
            _0x47be18 += 'L';
          } else {
            _0x47be18 += 'H';
          }
          _0x47be18 += this.hvcC.general_level_idc;
          var _0x280751 = false;
          var _0x48a52b = '';
          for (_0x18be0c = 0x5; _0x18be0c >= 0x0; _0x18be0c--) {
            if (this.hvcC.general_constraint_indicator[_0x18be0c] || _0x280751) {
              _0x48a52b = '.' + _0x3cde36.decimalToHex(this.hvcC.general_constraint_indicator[_0x18be0c], 0x0) + _0x48a52b;
              _0x280751 = true;
            }
          }
          _0x47be18 += _0x48a52b;
        }
        return _0x47be18;
      };
      _0x3cde36.vvc1SampleEntry.prototype.getCodec = _0x3cde36.vvi1SampleEntry.prototype.getCodec = function () {
        var _0x221660;
        var _0xb4482d = _0x3cde36.SampleEntry.prototype.getCodec.call(this);
        if (this.vvcC) {
          _0xb4482d += '.' + this.vvcC.general_profile_idc;
          if (this.vvcC.general_tier_flag) {
            _0xb4482d += '.H';
          } else {
            _0xb4482d += '.L';
          }
          _0xb4482d += this.vvcC.general_level_idc;
          var _0x476998 = '';
          if (this.vvcC.general_constraint_info) {
            var _0x103785;
            var _0x4097aa = [];
            var _0x402055 = 0x0;
            _0x402055 |= this.vvcC.ptl_frame_only_constraint << 0x7;
            _0x402055 |= this.vvcC.ptl_multilayer_enabled << 0x6;
            for (_0x221660 = 0x0; _0x221660 < this.vvcC.general_constraint_info.length; ++_0x221660) {
              _0x402055 |= this.vvcC.general_constraint_info[_0x221660] >> 0x2 & 0x3f;
              _0x4097aa.push(_0x402055);
              if (_0x402055) {
                _0x103785 = _0x221660;
              }
              _0x402055 = this.vvcC.general_constraint_info[_0x221660] >> 0x2 & 0x3;
            }
            if (undefined === _0x103785) {
              _0x476998 = ".CA";
            } else {
              _0x476998 = '.C';
              var _0x10518d = 0x0;
              var _0x433dc9 = 0x0;
              for (_0x221660 = 0x0; _0x221660 <= _0x103785; ++_0x221660) {
                _0x10518d = _0x10518d << 0x8 | _0x4097aa[_0x221660];
                for (_0x433dc9 += 0x8; _0x433dc9 >= 0x5;) {
                  _0x476998 += "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"[_0x10518d >> _0x433dc9 - 0x5 & 0x1f];
                  _0x10518d &= (0x1 << (_0x433dc9 -= 0x5)) - 0x1;
                }
              }
              if (_0x433dc9) {
                _0x476998 += "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"[0x1f & (_0x10518d <<= 0x5 - _0x433dc9)];
              }
            }
          }
          _0xb4482d += _0x476998;
        }
        return _0xb4482d;
      };
      _0x3cde36.mp4aSampleEntry.prototype.getCodec = function () {
        var _0x271172 = _0x3cde36.SampleEntry.prototype.getCodec.call(this);
        if (this.esds && this.esds.esd) {
          var _0x50d3b5 = this.esds.esd.getOTI();
          var _0x511ac9 = this.esds.esd.getAudioConfig();
          return _0x271172 + '.' + _0x3cde36.decimalToHex(_0x50d3b5) + (_0x511ac9 ? '.' + _0x511ac9 : '');
        }
        return _0x271172;
      };
      _0x3cde36.stxtSampleEntry.prototype.getCodec = function () {
        var _0xa9aa38 = _0x3cde36.SampleEntry.prototype.getCodec.call(this);
        return this.mime_format ? _0xa9aa38 + '.' + this.mime_format : _0xa9aa38;
      };
      _0x3cde36.vp08SampleEntry.prototype.getCodec = _0x3cde36.vp09SampleEntry.prototype.getCodec = function () {
        var _0x38a765 = _0x3cde36.SampleEntry.prototype.getCodec.call(this);
        var _0x182639 = this.vpcC.level;
        if (0x0 == _0x182639) {
          _0x182639 = '00';
        }
        var _0xbdbb09 = this.vpcC.bitDepth;
        if (0x8 == _0xbdbb09) {
          _0xbdbb09 = '08';
        }
        return _0x38a765 + '.0' + this.vpcC.profile + '.' + _0x182639 + '.' + _0xbdbb09;
      };
      _0x3cde36.av01SampleEntry.prototype.getCodec = function () {
        var _0x4aedb6;
        var _0x11aa9d = _0x3cde36.SampleEntry.prototype.getCodec.call(this);
        var _0x55dd12 = this.av1C.seq_level_idx_0;
        if (_0x55dd12 < 0xa) {
          _0x55dd12 = '0' + _0x55dd12;
        }
        if (0x2 === this.av1C.seq_profile && 0x1 === this.av1C.high_bitdepth) {
          _0x4aedb6 = 0x1 === this.av1C.twelve_bit ? '12' : '10';
        } else if (this.av1C.seq_profile <= 0x2) {
          _0x4aedb6 = 0x1 === this.av1C.high_bitdepth ? '10' : '08';
        }
        return _0x11aa9d + '.' + this.av1C.seq_profile + '.' + _0x55dd12 + (this.av1C.seq_tier_0 ? 'H' : 'M') + '.' + _0x4aedb6;
      };
      _0x3cde36.Box.prototype.writeHeader = function (_0x48b056, _0x89fb5b) {
        this.size += 0x8;
        if (this.size > _0x45f206) {
          this.size += 0x8;
        }
        if ("uuid" === this.type) {
          this.size += 0x10;
        }
        _0x3949d1.debug("BoxWriter", "Writing box " + this.type + " of size: " + this.size + " at position " + _0x48b056.getPosition() + (_0x89fb5b || ''));
        if (this.size > _0x45f206) {
          _0x48b056.writeUint32(0x1);
        } else {
          this.sizePosition = _0x48b056.getPosition();
          _0x48b056.writeUint32(this.size);
        }
        _0x48b056.writeString(this.type, null, 0x4);
        if ('uuid' === this.type) {
          _0x48b056.writeUint8Array(this.uuid);
        }
        if (this.size > _0x45f206) {
          _0x48b056.writeUint64(this.size);
        }
      };
      _0x3cde36.FullBox.prototype.writeHeader = function (_0x5e56a6) {
        this.size += 0x4;
        _0x3cde36.Box.prototype.writeHeader.call(this, _0x5e56a6, " v=" + this.version + " f=" + this.flags);
        _0x5e56a6.writeUint8(this.version);
        _0x5e56a6.writeUint24(this.flags);
      };
      _0x3cde36.Box.prototype.write = function (_0x1bf47b) {
        if ('mdat' === this.type) {
          if (this.data) {
            this.size = this.data.length;
            this.writeHeader(_0x1bf47b);
            _0x1bf47b.writeUint8Array(this.data);
          }
        } else {
          this.size = this.data ? this.data.length : 0x0;
          this.writeHeader(_0x1bf47b);
          if (this.data) {
            _0x1bf47b.writeUint8Array(this.data);
          }
        }
      };
      _0x3cde36.ContainerBox.prototype.write = function (_0x1e3c15) {
        this.size = 0x0;
        this.writeHeader(_0x1e3c15);
        for (var _0x1e43af = 0x0; _0x1e43af < this.boxes.length; _0x1e43af++) {
          if (this.boxes[_0x1e43af]) {
            this.boxes[_0x1e43af].write(_0x1e3c15);
            this.size += this.boxes[_0x1e43af].size;
          }
        }
        _0x3949d1.debug('BoxWriter', "Adjusting box " + this.type + " with new size " + this.size);
        _0x1e3c15.adjustUint32(this.sizePosition, this.size);
      };
      _0x3cde36.TrackReferenceTypeBox.prototype.write = function (_0x266702) {
        this.size = 0x4 * this.track_ids.length;
        this.writeHeader(_0x266702);
        _0x266702.writeUint32Array(this.track_ids);
      };
      _0x3cde36.avcCBox.prototype.write = function (_0x1a0334) {
        var _0x4500b9;
        this.size = 0x7;
        for (_0x4500b9 = 0x0; _0x4500b9 < this.SPS.length; _0x4500b9++) {
          this.size += 0x2 + this.SPS[_0x4500b9].length;
        }
        for (_0x4500b9 = 0x0; _0x4500b9 < this.PPS.length; _0x4500b9++) {
          this.size += 0x2 + this.PPS[_0x4500b9].length;
        }
        if (this.ext) {
          this.size += this.ext.length;
        }
        this.writeHeader(_0x1a0334);
        _0x1a0334.writeUint8(this.configurationVersion);
        _0x1a0334.writeUint8(this.AVCProfileIndication);
        _0x1a0334.writeUint8(this.profile_compatibility);
        _0x1a0334.writeUint8(this.AVCLevelIndication);
        _0x1a0334.writeUint8(this.lengthSizeMinusOne + 0xfc);
        _0x1a0334.writeUint8(this.SPS.length + 0xe0);
        for (_0x4500b9 = 0x0; _0x4500b9 < this.SPS.length; _0x4500b9++) {
          _0x1a0334.writeUint16(this.SPS[_0x4500b9].length);
          _0x1a0334.writeUint8Array(this.SPS[_0x4500b9].nalu);
        }
        _0x1a0334.writeUint8(this.PPS.length);
        for (_0x4500b9 = 0x0; _0x4500b9 < this.PPS.length; _0x4500b9++) {
          _0x1a0334.writeUint16(this.PPS[_0x4500b9].length);
          _0x1a0334.writeUint8Array(this.PPS[_0x4500b9].nalu);
        }
        if (this.ext) {
          _0x1a0334.writeUint8Array(this.ext);
        }
      };
      _0x3cde36.co64Box.prototype.write = function (_0xb9cc88) {
        var _0xbf383c;
        this.version = 0x0;
        this.flags = 0x0;
        this.size = 0x4 + 0x8 * this.chunk_offsets.length;
        this.writeHeader(_0xb9cc88);
        _0xb9cc88.writeUint32(this.chunk_offsets.length);
        for (_0xbf383c = 0x0; _0xbf383c < this.chunk_offsets.length; _0xbf383c++) {
          _0xb9cc88.writeUint64(this.chunk_offsets[_0xbf383c]);
        }
      };
      _0x3cde36.cslgBox.prototype.write = function (_0x1be3b1) {
        this.version = 0x0;
        this.flags = 0x0;
        this.size = 0x14;
        this.writeHeader(_0x1be3b1);
        _0x1be3b1.writeInt32(this.compositionToDTSShift);
        _0x1be3b1.writeInt32(this.leastDecodeToDisplayDelta);
        _0x1be3b1.writeInt32(this.greatestDecodeToDisplayDelta);
        _0x1be3b1.writeInt32(this.compositionStartTime);
        _0x1be3b1.writeInt32(this.compositionEndTime);
      };
      _0x3cde36.cttsBox.prototype.write = function (_0x239b36) {
        var _0x593f05;
        this.version = 0x0;
        this.flags = 0x0;
        this.size = 0x4 + 0x8 * this.sample_counts.length;
        this.writeHeader(_0x239b36);
        _0x239b36.writeUint32(this.sample_counts.length);
        for (_0x593f05 = 0x0; _0x593f05 < this.sample_counts.length; _0x593f05++) {
          _0x239b36.writeUint32(this.sample_counts[_0x593f05]);
          if (0x1 === this.version) {
            _0x239b36.writeInt32(this.sample_offsets[_0x593f05]);
          } else {
            _0x239b36.writeUint32(this.sample_offsets[_0x593f05]);
          }
        }
      };
      _0x3cde36.drefBox.prototype.write = function (_0x21a45c) {
        this.version = 0x0;
        this.flags = 0x0;
        this.size = 0x4;
        this.writeHeader(_0x21a45c);
        _0x21a45c.writeUint32(this.entries.length);
        for (var _0x4948ca = 0x0; _0x4948ca < this.entries.length; _0x4948ca++) {
          this.entries[_0x4948ca].write(_0x21a45c);
          this.size += this.entries[_0x4948ca].size;
        }
        _0x3949d1.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size);
        _0x21a45c.adjustUint32(this.sizePosition, this.size);
      };
      _0x3cde36.elngBox.prototype.write = function (_0x11d0b3) {
        this.version = 0x0;
        this.flags = 0x0;
        this.size = this.extended_language.length;
        this.writeHeader(_0x11d0b3);
        _0x11d0b3.writeString(this.extended_language);
      };
      _0x3cde36.elstBox.prototype.write = function (_0x3baaa0) {
        this.version = 0x0;
        this.flags = 0x0;
        this.size = 0x4 + 0xc * this.entries.length;
        this.writeHeader(_0x3baaa0);
        _0x3baaa0.writeUint32(this.entries.length);
        for (var _0x5eecd8 = 0x0; _0x5eecd8 < this.entries.length; _0x5eecd8++) {
          var _0x3f1a7c = this.entries[_0x5eecd8];
          _0x3baaa0.writeUint32(_0x3f1a7c.segment_duration);
          _0x3baaa0.writeInt32(_0x3f1a7c.media_time);
          _0x3baaa0.writeInt16(_0x3f1a7c.media_rate_integer);
          _0x3baaa0.writeInt16(_0x3f1a7c.media_rate_fraction);
        }
      };
      _0x3cde36.emsgBox.prototype.write = function (_0x4bd243) {
        this.version = 0x0;
        this.flags = 0x0;
        this.size = 0x10 + this.message_data.length + (this.scheme_id_uri.length + 0x1) + (this.value.length + 0x1);
        this.writeHeader(_0x4bd243);
        _0x4bd243.writeCString(this.scheme_id_uri);
        _0x4bd243.writeCString(this.value);
        _0x4bd243.writeUint32(this.timescale);
        _0x4bd243.writeUint32(this.presentation_time_delta);
        _0x4bd243.writeUint32(this.event_duration);
        _0x4bd243.writeUint32(this.id);
        _0x4bd243.writeUint8Array(this.message_data);
      };
      _0x3cde36.ftypBox.prototype.write = function (_0x46e03c) {
        this.size = 0x8 + 0x4 * this.compatible_brands.length;
        this.writeHeader(_0x46e03c);
        _0x46e03c.writeString(this.major_brand, null, 0x4);
        _0x46e03c.writeUint32(this.minor_version);
        for (var _0x59c866 = 0x0; _0x59c866 < this.compatible_brands.length; _0x59c866++) {
          _0x46e03c.writeString(this.compatible_brands[_0x59c866], null, 0x4);
        }
      };
      _0x3cde36.hdlrBox.prototype.write = function (_0x5f217f) {
        this.size = 0x14 + this.name.length + 0x1;
        this.version = 0x0;
        this.flags = 0x0;
        this.writeHeader(_0x5f217f);
        _0x5f217f.writeUint32(0x0);
        _0x5f217f.writeString(this.handler, null, 0x4);
        _0x5f217f.writeUint32(0x0);
        _0x5f217f.writeUint32(0x0);
        _0x5f217f.writeUint32(0x0);
        _0x5f217f.writeCString(this.name);
      };
      _0x3cde36.kindBox.prototype.write = function (_0xb1622c) {
        this.version = 0x0;
        this.flags = 0x0;
        this.size = this.schemeURI.length + 0x1 + (this.value.length + 0x1);
        this.writeHeader(_0xb1622c);
        _0xb1622c.writeCString(this.schemeURI);
        _0xb1622c.writeCString(this.value);
      };
      _0x3cde36.mdhdBox.prototype.write = function (_0x5acc93) {
        this.size = 0x14;
        this.flags = 0x0;
        this.version = 0x0;
        this.writeHeader(_0x5acc93);
        _0x5acc93.writeUint32(this.creation_time);
        _0x5acc93.writeUint32(this.modification_time);
        _0x5acc93.writeUint32(this.timescale);
        _0x5acc93.writeUint32(this.duration);
        _0x5acc93.writeUint16(this.language);
        _0x5acc93.writeUint16(0x0);
      };
      _0x3cde36.mehdBox.prototype.write = function (_0x39fd14) {
        this.version = 0x0;
        this.flags = 0x0;
        this.size = 0x4;
        this.writeHeader(_0x39fd14);
        _0x39fd14.writeUint32(this.fragment_duration);
      };
      _0x3cde36.mfhdBox.prototype.write = function (_0x31f6b7) {
        this.version = 0x0;
        this.flags = 0x0;
        this.size = 0x4;
        this.writeHeader(_0x31f6b7);
        _0x31f6b7.writeUint32(this.sequence_number);
      };
      _0x3cde36.mvhdBox.prototype.write = function (_0x1b9316) {
        this.version = 0x0;
        this.flags = 0x0;
        this.size = 0x60;
        this.writeHeader(_0x1b9316);
        _0x1b9316.writeUint32(this.creation_time);
        _0x1b9316.writeUint32(this.modification_time);
        _0x1b9316.writeUint32(this.timescale);
        _0x1b9316.writeUint32(this.duration);
        _0x1b9316.writeUint32(this.rate);
        _0x1b9316.writeUint16(this.volume << 0x8);
        _0x1b9316.writeUint16(0x0);
        _0x1b9316.writeUint32(0x0);
        _0x1b9316.writeUint32(0x0);
        _0x1b9316.writeUint32Array(this.matrix);
        _0x1b9316.writeUint32(0x0);
        _0x1b9316.writeUint32(0x0);
        _0x1b9316.writeUint32(0x0);
        _0x1b9316.writeUint32(0x0);
        _0x1b9316.writeUint32(0x0);
        _0x1b9316.writeUint32(0x0);
        _0x1b9316.writeUint32(this.next_track_id);
      };
      _0x3cde36.SampleEntry.prototype.writeHeader = function (_0x24a3f9) {
        this.size = 0x8;
        _0x3cde36.Box.prototype.writeHeader.call(this, _0x24a3f9);
        _0x24a3f9.writeUint8(0x0);
        _0x24a3f9.writeUint8(0x0);
        _0x24a3f9.writeUint8(0x0);
        _0x24a3f9.writeUint8(0x0);
        _0x24a3f9.writeUint8(0x0);
        _0x24a3f9.writeUint8(0x0);
        _0x24a3f9.writeUint16(this.data_reference_index);
      };
      _0x3cde36.SampleEntry.prototype.writeFooter = function (_0x4bb2b1) {
        for (var _0x253259 = 0x0; _0x253259 < this.boxes.length; _0x253259++) {
          this.boxes[_0x253259].write(_0x4bb2b1);
          this.size += this.boxes[_0x253259].size;
        }
        _0x3949d1.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size);
        _0x4bb2b1.adjustUint32(this.sizePosition, this.size);
      };
      _0x3cde36.SampleEntry.prototype.write = function (_0x406b54) {
        this.writeHeader(_0x406b54);
        _0x406b54.writeUint8Array(this.data);
        this.size += this.data.length;
        _0x3949d1.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size);
        _0x406b54.adjustUint32(this.sizePosition, this.size);
      };
      _0x3cde36.VisualSampleEntry.prototype.write = function (_0x330777) {
        this.writeHeader(_0x330777);
        this.size += 0x46;
        _0x330777.writeUint16(0x0);
        _0x330777.writeUint16(0x0);
        _0x330777.writeUint32(0x0);
        _0x330777.writeUint32(0x0);
        _0x330777.writeUint32(0x0);
        _0x330777.writeUint16(this.width);
        _0x330777.writeUint16(this.height);
        _0x330777.writeUint32(this.horizresolution);
        _0x330777.writeUint32(this.vertresolution);
        _0x330777.writeUint32(0x0);
        _0x330777.writeUint16(this.frame_count);
        _0x330777.writeUint8(Math.min(0x1f, this.compressorname.length));
        _0x330777.writeString(this.compressorname, null, 0x1f);
        _0x330777.writeUint16(this.depth);
        _0x330777.writeInt16(-0x1);
        this.writeFooter(_0x330777);
      };
      _0x3cde36.AudioSampleEntry.prototype.write = function (_0x47b77c) {
        this.writeHeader(_0x47b77c);
        this.size += 0x14;
        _0x47b77c.writeUint32(0x0);
        _0x47b77c.writeUint32(0x0);
        _0x47b77c.writeUint16(this.channel_count);
        _0x47b77c.writeUint16(this.samplesize);
        _0x47b77c.writeUint16(0x0);
        _0x47b77c.writeUint16(0x0);
        _0x47b77c.writeUint32(this.samplerate << 0x10);
        this.writeFooter(_0x47b77c);
      };
      _0x3cde36.stppSampleEntry.prototype.write = function (_0x5d824f) {
        this.writeHeader(_0x5d824f);
        this.size += this.namespace.length + 0x1 + this.schema_location.length + 0x1 + this.auxiliary_mime_types.length + 0x1;
        _0x5d824f.writeCString(this.namespace);
        _0x5d824f.writeCString(this.schema_location);
        _0x5d824f.writeCString(this.auxiliary_mime_types);
        this.writeFooter(_0x5d824f);
      };
      _0x3cde36.SampleGroupEntry.prototype.write = function (_0x41d9d3) {
        _0x41d9d3.writeUint8Array(this.data);
      };
      _0x3cde36.sbgpBox.prototype.write = function (_0x449114) {
        this.version = 0x1;
        this.flags = 0x0;
        this.size = 0xc + 0x8 * this.entries.length;
        this.writeHeader(_0x449114);
        _0x449114.writeString(this.grouping_type, null, 0x4);
        _0x449114.writeUint32(this.grouping_type_parameter);
        _0x449114.writeUint32(this.entries.length);
        for (var _0x57b532 = 0x0; _0x57b532 < this.entries.length; _0x57b532++) {
          var _0x4d45e5 = this.entries[_0x57b532];
          _0x449114.writeInt32(_0x4d45e5.sample_count);
          _0x449114.writeInt32(_0x4d45e5.group_description_index);
        }
      };
      _0x3cde36.sgpdBox.prototype.write = function (_0x2dba89) {
        var _0x1a100b;
        var _0x46f60b;
        this.flags = 0x0;
        this.size = 0xc;
        for (_0x1a100b = 0x0; _0x1a100b < this.entries.length; _0x1a100b++) {
          _0x46f60b = this.entries[_0x1a100b];
          if (0x1 === this.version) {
            if (0x0 === this.default_length) {
              this.size += 0x4;
            }
            this.size += _0x46f60b.data.length;
          }
        }
        this.writeHeader(_0x2dba89);
        _0x2dba89.writeString(this.grouping_type, null, 0x4);
        if (0x1 === this.version) {
          _0x2dba89.writeUint32(this.default_length);
        }
        if (this.version >= 0x2) {
          _0x2dba89.writeUint32(this.default_sample_description_index);
        }
        _0x2dba89.writeUint32(this.entries.length);
        for (_0x1a100b = 0x0; _0x1a100b < this.entries.length; _0x1a100b++) {
          _0x46f60b = this.entries[_0x1a100b];
          if (0x1 === this.version && 0x0 === this.default_length) {
            _0x2dba89.writeUint32(_0x46f60b.description_length);
          }
          _0x46f60b.write(_0x2dba89);
        }
      };
      _0x3cde36.sidxBox.prototype.write = function (_0xf5bb8a) {
        this.version = 0x0;
        this.flags = 0x0;
        this.size = 0x14 + 0xc * this.references.length;
        this.writeHeader(_0xf5bb8a);
        _0xf5bb8a.writeUint32(this.reference_ID);
        _0xf5bb8a.writeUint32(this.timescale);
        _0xf5bb8a.writeUint32(this.earliest_presentation_time);
        _0xf5bb8a.writeUint32(this.first_offset);
        _0xf5bb8a.writeUint16(0x0);
        _0xf5bb8a.writeUint16(this.references.length);
        for (var _0x1ca1f2 = 0x0; _0x1ca1f2 < this.references.length; _0x1ca1f2++) {
          var _0x3067f3 = this.references[_0x1ca1f2];
          _0xf5bb8a.writeUint32(_0x3067f3.reference_type << 0x1f | _0x3067f3.referenced_size);
          _0xf5bb8a.writeUint32(_0x3067f3.subsegment_duration);
          _0xf5bb8a.writeUint32(_0x3067f3.starts_with_SAP << 0x1f | _0x3067f3.SAP_type << 0x1c | _0x3067f3.SAP_delta_time);
        }
      };
      _0x3cde36.smhdBox.prototype.write = function (_0x5b9396) {
        this.version = 0x0;
        this.flags = 0x1;
        this.size = 0x4;
        this.writeHeader(_0x5b9396);
        _0x5b9396.writeUint16(this.balance);
        _0x5b9396.writeUint16(0x0);
      };
      _0x3cde36.stcoBox.prototype.write = function (_0x2bde9e) {
        this.version = 0x0;
        this.flags = 0x0;
        this.size = 0x4 + 0x4 * this.chunk_offsets.length;
        this.writeHeader(_0x2bde9e);
        _0x2bde9e.writeUint32(this.chunk_offsets.length);
        _0x2bde9e.writeUint32Array(this.chunk_offsets);
      };
      _0x3cde36.stscBox.prototype.write = function (_0x30291a) {
        var _0x356864;
        this.version = 0x0;
        this.flags = 0x0;
        this.size = 0x4 + 0xc * this.first_chunk.length;
        this.writeHeader(_0x30291a);
        _0x30291a.writeUint32(this.first_chunk.length);
        for (_0x356864 = 0x0; _0x356864 < this.first_chunk.length; _0x356864++) {
          _0x30291a.writeUint32(this.first_chunk[_0x356864]);
          _0x30291a.writeUint32(this.samples_per_chunk[_0x356864]);
          _0x30291a.writeUint32(this.sample_description_index[_0x356864]);
        }
      };
      _0x3cde36.stsdBox.prototype.write = function (_0x139df1) {
        var _0x3849e9;
        this.version = 0x0;
        this.flags = 0x0;
        this.size = 0x0;
        this.writeHeader(_0x139df1);
        _0x139df1.writeUint32(this.entries.length);
        this.size += 0x4;
        for (_0x3849e9 = 0x0; _0x3849e9 < this.entries.length; _0x3849e9++) {
          this.entries[_0x3849e9].write(_0x139df1);
          this.size += this.entries[_0x3849e9].size;
        }
        _0x3949d1.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size);
        _0x139df1.adjustUint32(this.sizePosition, this.size);
      };
      _0x3cde36.stshBox.prototype.write = function (_0x75b8cf) {
        var _0x2652a7;
        this.version = 0x0;
        this.flags = 0x0;
        this.size = 0x4 + 0x8 * this.shadowed_sample_numbers.length;
        this.writeHeader(_0x75b8cf);
        _0x75b8cf.writeUint32(this.shadowed_sample_numbers.length);
        for (_0x2652a7 = 0x0; _0x2652a7 < this.shadowed_sample_numbers.length; _0x2652a7++) {
          _0x75b8cf.writeUint32(this.shadowed_sample_numbers[_0x2652a7]);
          _0x75b8cf.writeUint32(this.sync_sample_numbers[_0x2652a7]);
        }
      };
      _0x3cde36.stssBox.prototype.write = function (_0x4f46a7) {
        this.version = 0x0;
        this.flags = 0x0;
        this.size = 0x4 + 0x4 * this.sample_numbers.length;
        this.writeHeader(_0x4f46a7);
        _0x4f46a7.writeUint32(this.sample_numbers.length);
        _0x4f46a7.writeUint32Array(this.sample_numbers);
      };
      _0x3cde36.stszBox.prototype.write = function (_0x3d2ad0) {
        var _0x44458d;
        var _0xc8368a = true;
        this.version = 0x0;
        this.flags = 0x0;
        if (this.sample_sizes.length > 0x0) {
          for (_0x44458d = 0x0; _0x44458d + 0x1 < this.sample_sizes.length;) {
            if (this.sample_sizes[_0x44458d + 0x1] !== this.sample_sizes[0x0]) {
              _0xc8368a = false;
              break;
            }
            _0x44458d++;
          }
        } else {
          _0xc8368a = false;
        }
        this.size = 0x8;
        if (!_0xc8368a) {
          this.size += 0x4 * this.sample_sizes.length;
        }
        this.writeHeader(_0x3d2ad0);
        if (_0xc8368a) {
          _0x3d2ad0.writeUint32(this.sample_sizes[0x0]);
        } else {
          _0x3d2ad0.writeUint32(0x0);
        }
        _0x3d2ad0.writeUint32(this.sample_sizes.length);
        if (!_0xc8368a) {
          _0x3d2ad0.writeUint32Array(this.sample_sizes);
        }
      };
      _0x3cde36.sttsBox.prototype.write = function (_0x3091e8) {
        var _0x4feee1;
        this.version = 0x0;
        this.flags = 0x0;
        this.size = 0x4 + 0x8 * this.sample_counts.length;
        this.writeHeader(_0x3091e8);
        _0x3091e8.writeUint32(this.sample_counts.length);
        for (_0x4feee1 = 0x0; _0x4feee1 < this.sample_counts.length; _0x4feee1++) {
          _0x3091e8.writeUint32(this.sample_counts[_0x4feee1]);
          _0x3091e8.writeUint32(this.sample_deltas[_0x4feee1]);
        }
      };
      _0x3cde36.tfdtBox.prototype.write = function (_0x23caf7) {
        var _0x2e6c4b = Math.pow(0x2, 0x20) - 0x1;
        this.version = this.baseMediaDecodeTime > _0x2e6c4b ? 0x1 : 0x0;
        this.flags = 0x0;
        this.size = 0x4;
        if (0x1 === this.version) {
          this.size += 0x4;
        }
        this.writeHeader(_0x23caf7);
        if (0x1 === this.version) {
          _0x23caf7.writeUint64(this.baseMediaDecodeTime);
        } else {
          _0x23caf7.writeUint32(this.baseMediaDecodeTime);
        }
      };
      _0x3cde36.tfhdBox.prototype.write = function (_0x2b867a) {
        this.version = 0x0;
        this.size = 0x4;
        if (this.flags & _0x3cde36.TFHD_FLAG_BASE_DATA_OFFSET) {
          this.size += 0x8;
        }
        if (this.flags & _0x3cde36.TFHD_FLAG_SAMPLE_DESC) {
          this.size += 0x4;
        }
        if (this.flags & _0x3cde36.TFHD_FLAG_SAMPLE_DUR) {
          this.size += 0x4;
        }
        if (this.flags & _0x3cde36.TFHD_FLAG_SAMPLE_SIZE) {
          this.size += 0x4;
        }
        if (this.flags & _0x3cde36.TFHD_FLAG_SAMPLE_FLAGS) {
          this.size += 0x4;
        }
        this.writeHeader(_0x2b867a);
        _0x2b867a.writeUint32(this.track_id);
        if (this.flags & _0x3cde36.TFHD_FLAG_BASE_DATA_OFFSET) {
          _0x2b867a.writeUint64(this.base_data_offset);
        }
        if (this.flags & _0x3cde36.TFHD_FLAG_SAMPLE_DESC) {
          _0x2b867a.writeUint32(this.default_sample_description_index);
        }
        if (this.flags & _0x3cde36.TFHD_FLAG_SAMPLE_DUR) {
          _0x2b867a.writeUint32(this.default_sample_duration);
        }
        if (this.flags & _0x3cde36.TFHD_FLAG_SAMPLE_SIZE) {
          _0x2b867a.writeUint32(this.default_sample_size);
        }
        if (this.flags & _0x3cde36.TFHD_FLAG_SAMPLE_FLAGS) {
          _0x2b867a.writeUint32(this.default_sample_flags);
        }
      };
      _0x3cde36.tkhdBox.prototype.write = function (_0x3d02a3) {
        this.version = 0x0;
        this.size = 0x50;
        this.writeHeader(_0x3d02a3);
        _0x3d02a3.writeUint32(this.creation_time);
        _0x3d02a3.writeUint32(this.modification_time);
        _0x3d02a3.writeUint32(this.track_id);
        _0x3d02a3.writeUint32(0x0);
        _0x3d02a3.writeUint32(this.duration);
        _0x3d02a3.writeUint32(0x0);
        _0x3d02a3.writeUint32(0x0);
        _0x3d02a3.writeInt16(this.layer);
        _0x3d02a3.writeInt16(this.alternate_group);
        _0x3d02a3.writeInt16(this.volume << 0x8);
        _0x3d02a3.writeUint16(0x0);
        _0x3d02a3.writeInt32Array(this.matrix);
        _0x3d02a3.writeUint32(this.width);
        _0x3d02a3.writeUint32(this.height);
      };
      _0x3cde36.trexBox.prototype.write = function (_0x1bfc5d) {
        this.version = 0x0;
        this.flags = 0x0;
        this.size = 0x14;
        this.writeHeader(_0x1bfc5d);
        _0x1bfc5d.writeUint32(this.track_id);
        _0x1bfc5d.writeUint32(this.default_sample_description_index);
        _0x1bfc5d.writeUint32(this.default_sample_duration);
        _0x1bfc5d.writeUint32(this.default_sample_size);
        _0x1bfc5d.writeUint32(this.default_sample_flags);
      };
      _0x3cde36.trunBox.prototype.write = function (_0x517f88) {
        this.version = 0x0;
        this.size = 0x4;
        if (this.flags & _0x3cde36.TRUN_FLAGS_DATA_OFFSET) {
          this.size += 0x4;
        }
        if (this.flags & _0x3cde36.TRUN_FLAGS_FIRST_FLAG) {
          this.size += 0x4;
        }
        if (this.flags & _0x3cde36.TRUN_FLAGS_DURATION) {
          this.size += 0x4 * this.sample_duration.length;
        }
        if (this.flags & _0x3cde36.TRUN_FLAGS_SIZE) {
          this.size += 0x4 * this.sample_size.length;
        }
        if (this.flags & _0x3cde36.TRUN_FLAGS_FLAGS) {
          this.size += 0x4 * this.sample_flags.length;
        }
        if (this.flags & _0x3cde36.TRUN_FLAGS_CTS_OFFSET) {
          this.size += 0x4 * this.sample_composition_time_offset.length;
        }
        this.writeHeader(_0x517f88);
        _0x517f88.writeUint32(this.sample_count);
        if (this.flags & _0x3cde36.TRUN_FLAGS_DATA_OFFSET) {
          this.data_offset_position = _0x517f88.getPosition();
          _0x517f88.writeInt32(this.data_offset);
        }
        if (this.flags & _0x3cde36.TRUN_FLAGS_FIRST_FLAG) {
          _0x517f88.writeUint32(this.first_sample_flags);
        }
        for (var _0xeeb337 = 0x0; _0xeeb337 < this.sample_count; _0xeeb337++) {
          if (this.flags & _0x3cde36.TRUN_FLAGS_DURATION) {
            _0x517f88.writeUint32(this.sample_duration[_0xeeb337]);
          }
          if (this.flags & _0x3cde36.TRUN_FLAGS_SIZE) {
            _0x517f88.writeUint32(this.sample_size[_0xeeb337]);
          }
          if (this.flags & _0x3cde36.TRUN_FLAGS_FLAGS) {
            _0x517f88.writeUint32(this.sample_flags[_0xeeb337]);
          }
          if (this.flags & _0x3cde36.TRUN_FLAGS_CTS_OFFSET) {
            if (0x0 === this.version) {
              _0x517f88.writeUint32(this.sample_composition_time_offset[_0xeeb337]);
            } else {
              _0x517f88.writeInt32(this.sample_composition_time_offset[_0xeeb337]);
            }
          }
        }
      };
      _0x3cde36["url Box"].prototype.write = function (_0x5462ed) {
        this.version = 0x0;
        if (this.location) {
          this.flags = 0x0;
          this.size = this.location.length + 0x1;
        } else {
          this.flags = 0x1;
          this.size = 0x0;
        }
        this.writeHeader(_0x5462ed);
        if (this.location) {
          _0x5462ed.writeCString(this.location);
        }
      };
      _0x3cde36["urn Box"].prototype.write = function (_0x3a7dc0) {
        this.version = 0x0;
        this.flags = 0x0;
        this.size = this.name.length + 0x1 + (this.location ? this.location.length + 0x1 : 0x0);
        this.writeHeader(_0x3a7dc0);
        _0x3a7dc0.writeCString(this.name);
        if (this.location) {
          _0x3a7dc0.writeCString(this.location);
        }
      };
      _0x3cde36.vmhdBox.prototype.write = function (_0x25bfe5) {
        this.version = 0x0;
        this.flags = 0x1;
        this.size = 0x8;
        this.writeHeader(_0x25bfe5);
        _0x25bfe5.writeUint16(this.graphicsmode);
        _0x25bfe5.writeUint16Array(this.opcolor);
      };
      _0x3cde36.cttsBox.prototype.unpack = function (_0x1f62a6) {
        var _0x3d2697;
        var _0xce96fa;
        var _0x3636e7;
        _0x3636e7 = 0x0;
        for (_0x3d2697 = 0x0; _0x3d2697 < this.sample_counts.length; _0x3d2697++) {
          for (_0xce96fa = 0x0; _0xce96fa < this.sample_counts[_0x3d2697]; _0xce96fa++) {
            _0x1f62a6[_0x3636e7].pts = _0x1f62a6[_0x3636e7].dts + this.sample_offsets[_0x3d2697];
            _0x3636e7++;
          }
        }
      };
      _0x3cde36.sttsBox.prototype.unpack = function (_0x1c6a5e) {
        var _0x5c20ca;
        var _0x1cb8c8;
        var _0x2fd57f;
        _0x2fd57f = 0x0;
        for (_0x5c20ca = 0x0; _0x5c20ca < this.sample_counts.length; _0x5c20ca++) {
          for (_0x1cb8c8 = 0x0; _0x1cb8c8 < this.sample_counts[_0x5c20ca]; _0x1cb8c8++) {
            _0x1c6a5e[_0x2fd57f].dts = 0x0 === _0x2fd57f ? 0x0 : _0x1c6a5e[_0x2fd57f - 0x1].dts + this.sample_deltas[_0x5c20ca];
            _0x2fd57f++;
          }
        }
      };
      _0x3cde36.stcoBox.prototype.unpack = function (_0x5f8d72) {
        var _0xf234e5;
        for (_0xf234e5 = 0x0; _0xf234e5 < this.chunk_offsets.length; _0xf234e5++) {
          _0x5f8d72[_0xf234e5].offset = this.chunk_offsets[_0xf234e5];
        }
      };
      _0x3cde36.stscBox.prototype.unpack = function (_0x121b93) {
        var _0x312a75;
        var _0x16fdbc;
        var _0x292ef0;
        var _0x3a056a;
        var _0x56ce95;
        _0x3a056a = 0x0;
        _0x56ce95 = 0x0;
        for (_0x312a75 = 0x0; _0x312a75 < this.first_chunk.length; _0x312a75++) {
          for (_0x16fdbc = 0x0; _0x16fdbc < (_0x312a75 + 0x1 < this.first_chunk.length ? this.first_chunk[_0x312a75 + 0x1] : Infinity); _0x16fdbc++) {
            _0x56ce95++;
            for (_0x292ef0 = 0x0; _0x292ef0 < this.samples_per_chunk[_0x312a75]; _0x292ef0++) {
              if (!_0x121b93[_0x3a056a]) {
                return;
              }
              _0x121b93[_0x3a056a].description_index = this.sample_description_index[_0x312a75];
              _0x121b93[_0x3a056a].chunk_index = _0x56ce95;
              _0x3a056a++;
            }
          }
        }
      };
      _0x3cde36.stszBox.prototype.unpack = function (_0x38ef36) {
        var _0x397441;
        for (_0x397441 = 0x0; _0x397441 < this.sample_sizes.length; _0x397441++) {
          _0x38ef36[_0x397441].size = this.sample_sizes[_0x397441];
        }
      };
      _0x3cde36.DIFF_BOXES_PROP_NAMES = ["boxes", "entries", "references", "subsamples", "items", "item_infos", "extents", "associations", "subsegments", "ranges", "seekLists", "seekPoints", 'esd', "levels"];
      _0x3cde36.DIFF_PRIMITIVE_ARRAY_PROP_NAMES = ["compatible_brands", 'matrix', 'opcolor', "sample_counts", "sample_counts", "sample_deltas", "first_chunk", "samples_per_chunk", "sample_sizes", "chunk_offsets", "sample_offsets", "sample_description_index", "sample_duration"];
      _0x3cde36.boxEqualFields = function (_0xcacd9f, _0x19a07b) {
        if (_0xcacd9f && !_0x19a07b) {
          return false;
        }
        var _0x424706;
        for (_0x424706 in _0xcacd9f) if (!(_0x3cde36.DIFF_BOXES_PROP_NAMES.indexOf(_0x424706) > -0x1 || _0xcacd9f[_0x424706] instanceof _0x3cde36.Box || _0x19a07b[_0x424706] instanceof _0x3cde36.Box || undefined === _0xcacd9f[_0x424706] || undefined === _0x19a07b[_0x424706] || 'function' == typeof _0xcacd9f[_0x424706] || "function" == typeof _0x19a07b[_0x424706] || _0xcacd9f.subBoxNames && _0xcacd9f.subBoxNames.indexOf(_0x424706.slice(0x0, 0x4)) > -0x1 || _0x19a07b.subBoxNames && _0x19a07b.subBoxNames.indexOf(_0x424706.slice(0x0, 0x4)) > -0x1 || 'data' === _0x424706 || "start" === _0x424706 || "size" === _0x424706 || "creation_time" === _0x424706 || "modification_time" === _0x424706 || _0x3cde36.DIFF_PRIMITIVE_ARRAY_PROP_NAMES.indexOf(_0x424706) > -0x1 || _0xcacd9f[_0x424706] === _0x19a07b[_0x424706])) {
          return false;
        }
        return true;
      };
      _0x3cde36.boxEqual = function (_0x48492c, _0x5641bf) {
        if (!_0x3cde36.boxEqualFields(_0x48492c, _0x5641bf)) {
          return false;
        }
        for (var _0x356738 = 0x0; _0x356738 < _0x3cde36.DIFF_BOXES_PROP_NAMES.length; _0x356738++) {
          var _0x538eae = _0x3cde36.DIFF_BOXES_PROP_NAMES[_0x356738];
          if (_0x48492c[_0x538eae] && _0x5641bf[_0x538eae] && !_0x3cde36.boxEqual(_0x48492c[_0x538eae], _0x5641bf[_0x538eae])) {
            return false;
          }
        }
        return true;
      };
      var _0x33ee52 = function () {};
      _0x33ee52.prototype.parseSample = function (_0x46c997) {
        var _0x1c9582;
        var _0x1ac54b;
        var _0x51b95e = new _0x2a61c3(_0x46c997.buffer);
        for (_0x1c9582 = []; !_0x51b95e.isEos();) {
          if ((_0x1ac54b = _0x3cde36.parseOneBox(_0x51b95e, false)).code === 0x1 && "vttc" === _0x1ac54b.box.type) {
            _0x1c9582.push(_0x1ac54b.box);
          }
        }
        return _0x1c9582;
      };
      _0x33ee52.prototype.getText = function (_0x202a4b, _0x581eb3, _0x4a6aa6) {
        function _0x43995c(_0x550122, _0x21d7a0, _0x2e054d) {
          _0x2e054d = _0x2e054d || '0';
          return (_0x550122 += '').length >= _0x21d7a0 ? _0x550122 : new Array(_0x21d7a0 - _0x550122.length + 0x1).join(_0x2e054d) + _0x550122;
        }
        function _0x3bd9a2(_0x42d8d0) {
          var _0x29ee82 = Math.floor(_0x42d8d0 / 0xe10);
          var _0x10a494 = Math.floor((_0x42d8d0 - 0xe10 * _0x29ee82) / 0x3c);
          var _0x39b1c4 = Math.floor(_0x42d8d0 - 0xe10 * _0x29ee82 - 0x3c * _0x10a494);
          var _0x58af70 = Math.floor(0x3e8 * (_0x42d8d0 - 0xe10 * _0x29ee82 - 0x3c * _0x10a494 - _0x39b1c4));
          return _0x43995c(_0x29ee82, 0x2) + ':' + _0x43995c(_0x10a494, 0x2) + ':' + _0x43995c(_0x39b1c4, 0x2) + '.' + _0x43995c(_0x58af70, 0x3);
        }
        var _0x48fb4a = this.parseSample(_0x4a6aa6);
        var _0x1f2a3d = '';
        for (var _0xafd712 = 0x0; _0xafd712 < _0x48fb4a.length; _0xafd712++) {
          var _0x51c2a3 = _0x48fb4a[_0xafd712];
          _0x1f2a3d += _0x3bd9a2(_0x202a4b) + " --> " + _0x3bd9a2(_0x581eb3) + "\r\n";
          _0x1f2a3d += _0x51c2a3.payl.text;
        }
        return _0x1f2a3d;
      };
      var _0x59e8a0 = function () {};
      _0x59e8a0.prototype.parseSample = function (_0x87ce48) {
        var _0xe345b = {
          resources: []
        };
        var _0x56f2d4;
        var _0x5420c6 = new _0x2a61c3(_0x87ce48.data.buffer);
        if (_0x87ce48.subsamples && 0x0 !== _0x87ce48.subsamples.length) {
          _0xe345b.documentString = _0x5420c6.readString(_0x87ce48.subsamples[0x0].size);
          if (_0x87ce48.subsamples.length > 0x1) {
            for (_0x56f2d4 = 0x1; _0x56f2d4 < _0x87ce48.subsamples.length; _0x56f2d4++) {
              _0xe345b.resources[_0x56f2d4] = _0x5420c6.readUint8Array(_0x87ce48.subsamples[_0x56f2d4].size);
            }
          }
        } else {
          _0xe345b.documentString = _0x5420c6.readString(_0x87ce48.data.length);
        }
        if ('undefined' != typeof DOMParser) {
          _0xe345b.document = new DOMParser().parseFromString(_0xe345b.documentString, "application/xml");
        }
        return _0xe345b;
      };
      var _0x430bc4 = function () {};
      _0x430bc4.prototype.parseSample = function (_0x572c1b) {
        return new _0x2a61c3(_0x572c1b.data.buffer).readString(_0x572c1b.data.length);
      };
      _0x430bc4.prototype.parseConfig = function (_0x181662) {
        var _0xdcd5a0 = new _0x2a61c3(_0x181662.buffer);
        _0xdcd5a0.readUint32();
        return _0xdcd5a0.readCString();
      };
      _0x4e1140.XMLSubtitlein4Parser = _0x59e8a0;
      _0x4e1140.Textin4Parser = _0x430bc4;
      var _0x290128 = function (_0x1c120b) {
        this.stream = _0x1c120b || new _0x51e96f();
        this.boxes = [];
        this.mdats = [];
        this.moofs = [];
        this.isProgressive = false;
        this.moovStartFound = false;
        this.onMoovStart = null;
        this.moovStartSent = false;
        this.onReady = null;
        this.readySent = false;
        this.onSegment = null;
        this.onSamples = null;
        this.onError = null;
        this.sampleListBuilt = false;
        this.fragmentedTracks = [];
        this.extractedTracks = [];
        this.isFragmentationInitialized = false;
        this.sampleProcessingStarted = false;
        this.nextMoofNumber = 0x0;
        this.itemListBuilt = false;
        this.onSidx = null;
        this.sidxSent = false;
      };
      _0x290128.prototype.setSegmentOptions = function (_0x5adbef, _0x2e2b1b, _0x595bff) {
        var _0x56a9e2 = this.getTrackById(_0x5adbef);
        if (_0x56a9e2) {
          var _0x3b734f = {};
          this.fragmentedTracks.push(_0x3b734f);
          _0x3b734f.id = _0x5adbef;
          _0x3b734f.user = _0x2e2b1b;
          _0x3b734f.trak = _0x56a9e2;
          _0x56a9e2.nextSample = 0x0;
          _0x3b734f.segmentStream = null;
          _0x3b734f.nb_samples = 0x3e8;
          _0x3b734f.rapAlignement = true;
          if (_0x595bff) {
            if (_0x595bff.nbSamples) {
              _0x3b734f.nb_samples = _0x595bff.nbSamples;
            }
            if (_0x595bff.rapAlignement) {
              _0x3b734f.rapAlignement = _0x595bff.rapAlignement;
            }
          }
        }
      };
      _0x290128.prototype.unsetSegmentOptions = function (_0x129901) {
        var _0x427911 = -0x1;
        for (var _0x5755b7 = 0x0; _0x5755b7 < this.fragmentedTracks.length; _0x5755b7++) {
          if (this.fragmentedTracks[_0x5755b7].id == _0x129901) {
            _0x427911 = _0x5755b7;
          }
        }
        if (_0x427911 > -0x1) {
          this.fragmentedTracks.splice(_0x427911, 0x1);
        }
      };
      _0x290128.prototype.setExtractionOptions = function (_0x5d869a, _0x3e3b7f, _0x1fa89c) {
        var _0x36d5f = this.getTrackById(_0x5d869a);
        if (_0x36d5f) {
          var _0x22575c = {};
          this.extractedTracks.push(_0x22575c);
          _0x22575c.id = _0x5d869a;
          _0x22575c.user = _0x3e3b7f;
          _0x22575c.trak = _0x36d5f;
          _0x36d5f.nextSample = 0x0;
          _0x22575c.nb_samples = 0x3e8;
          _0x22575c.samples = [];
          if (_0x1fa89c && _0x1fa89c.nbSamples) {
            _0x22575c.nb_samples = _0x1fa89c.nbSamples;
          }
        }
      };
      _0x290128.prototype.unsetExtractionOptions = function (_0x1de871) {
        var _0x1ea6f0 = -0x1;
        for (var _0x34e24e = 0x0; _0x34e24e < this.extractedTracks.length; _0x34e24e++) {
          if (this.extractedTracks[_0x34e24e].id == _0x1de871) {
            _0x1ea6f0 = _0x34e24e;
          }
        }
        if (_0x1ea6f0 > -0x1) {
          this.extractedTracks.splice(_0x1ea6f0, 0x1);
        }
      };
      _0x290128.prototype.parse = function () {
        var _0x3d8c46;
        var _0x2f11ff;
        if (!this.restoreParsePosition || this.restoreParsePosition()) {
          for (;;) {
            if (this.hasIncompleteMdat && this.hasIncompleteMdat()) {
              if (this.processIncompleteMdat()) {
                continue;
              }
              return;
            }
            if (this.saveParsePosition) {
              this.saveParsePosition();
            }
            if ((_0x3d8c46 = _0x3cde36.parseOneBox(this.stream, false)).code === 0x0) {
              if (this.processIncompleteBox) {
                if (this.processIncompleteBox(_0x3d8c46)) {
                  continue;
                }
                return;
              }
              return;
            }
            var _0x25313a;
            _0x25313a = "uuid" !== (_0x2f11ff = _0x3d8c46.box).type ? _0x2f11ff.type : _0x2f11ff.uuid;
            this.boxes.push(_0x2f11ff);
            switch (_0x25313a) {
              case "mdat":
                this.mdats.push(_0x2f11ff);
                break;
              case "moof":
                this.moofs.push(_0x2f11ff);
                break;
              case "moov":
                this.moovStartFound = true;
                if (0x0 === this.mdats.length) {
                  this.isProgressive = true;
                }
              default:
                if (undefined !== this[_0x25313a]) {
                  _0x3949d1.warn('ISOFile', "Duplicate Box of type: " + _0x25313a + ", overriding previous occurrence");
                }
                this[_0x25313a] = _0x2f11ff;
            }
            if (this.updateUsedBytes) {
              this.updateUsedBytes(_0x2f11ff, _0x3d8c46);
            }
          }
        }
      };
      _0x290128.prototype.checkBuffer = function (_0x3d9159) {
        if (null == _0x3d9159) {
          throw "Buffer must be defined and non empty";
        }
        if (undefined === _0x3d9159.fileStart) {
          throw "Buffer must have a fileStart property";
        }
        return 0x0 === _0x3d9159.byteLength ? (_0x3949d1.warn("ISOFile", "Ignoring empty buffer (fileStart: " + _0x3d9159.fileStart + ')'), this.stream.logBufferLevel(), false) : (_0x3949d1.info("ISOFile", "Processing buffer (fileStart: " + _0x3d9159.fileStart + ')'), _0x3d9159.usedBytes = 0x0, this.stream.insertBuffer(_0x3d9159), this.stream.logBufferLevel(), !!this.stream.initialized() || (_0x3949d1.warn('ISOFile', "Not ready to start parsing"), false));
      };
      _0x290128.prototype.appendBuffer = function (_0x3e3a6b, _0xfdcff7) {
        var _0x482ae1;
        if (this.checkBuffer(_0x3e3a6b)) {
          this.parse();
          if (this.moovStartFound && !this.moovStartSent) {
            this.moovStartSent = true;
            if (this.onMoovStart) {
              this.onMoovStart();
            }
          }
          if (this.moov) {
            if (!this.sampleListBuilt) {
              this.buildSampleLists();
              this.sampleListBuilt = true;
            }
            this.updateSampleLists();
            if (this.onReady && !this.readySent) {
              this.readySent = true;
              this.onReady(this.getInfo());
            }
            this.processSamples(_0xfdcff7);
            if (this.nextSeekPosition) {
              _0x482ae1 = this.nextSeekPosition;
              this.nextSeekPosition = undefined;
            } else {
              _0x482ae1 = this.nextParsePosition;
            }
            if (this.stream.getEndFilePositionAfter) {
              _0x482ae1 = this.stream.getEndFilePositionAfter(_0x482ae1);
            }
          } else {
            _0x482ae1 = this.nextParsePosition ? this.nextParsePosition : 0x0;
          }
          if (this.sidx && this.onSidx && !this.sidxSent) {
            this.onSidx(this.sidx);
            this.sidxSent = true;
          }
          if (this.meta) {
            if (this.flattenItemInfo && !this.itemListBuilt) {
              this.flattenItemInfo();
              this.itemListBuilt = true;
            }
            if (this.processItems) {
              this.processItems(this.onItem);
            }
          }
          if (this.stream.cleanBuffers) {
            _0x3949d1.info("ISOFile", "Done processing buffer (fileStart: " + _0x3e3a6b.fileStart + ") - next buffer to fetch should have a fileStart position of " + _0x482ae1);
            this.stream.logBufferLevel();
            this.stream.cleanBuffers();
            this.stream.logBufferLevel(true);
            _0x3949d1.info('ISOFile', "Sample data size in memory: " + this.getAllocatedSampleDataSize());
          }
          return _0x482ae1;
        }
      };
      _0x290128.prototype.getInfo = function () {
        var _0x33353d;
        var _0x4e67f3;
        var _0x285b92;
        var _0x573ba4;
        var _0x76029e;
        var _0xa88c0b;
        var _0x14aeff = {};
        var _0x340c47 = new Date("1904-01-01T00:00:00Z").getTime();
        if (this.moov) {
          _0x14aeff.hasMoov = true;
          _0x14aeff.duration = this.moov.mvhd.duration;
          _0x14aeff.timescale = this.moov.mvhd.timescale;
          _0x14aeff.isFragmented = null != this.moov.mvex;
          if (_0x14aeff.isFragmented && this.moov.mvex.mehd) {
            _0x14aeff.fragment_duration = this.moov.mvex.mehd.fragment_duration;
          }
          _0x14aeff.isProgressive = this.isProgressive;
          _0x14aeff.hasIOD = null != this.moov.iods;
          _0x14aeff.brands = [];
          _0x14aeff.brands.push(this.ftyp.major_brand);
          _0x14aeff.brands = _0x14aeff.brands.concat(this.ftyp.compatible_brands);
          _0x14aeff.created = new Date(_0x340c47 + 0x3e8 * this.moov.mvhd.creation_time);
          _0x14aeff.modified = new Date(_0x340c47 + 0x3e8 * this.moov.mvhd.modification_time);
          _0x14aeff.tracks = [];
          _0x14aeff.audioTracks = [];
          _0x14aeff.videoTracks = [];
          _0x14aeff.subtitleTracks = [];
          _0x14aeff.metadataTracks = [];
          _0x14aeff.hintTracks = [];
          _0x14aeff.otherTracks = [];
          for (_0x33353d = 0x0; _0x33353d < this.moov.traks.length; _0x33353d++) {
            _0xa88c0b = (_0x285b92 = this.moov.traks[_0x33353d]).mdia.minf.stbl.stsd.entries[0x0];
            _0x573ba4 = {};
            _0x14aeff.tracks.push(_0x573ba4);
            _0x573ba4.id = _0x285b92.tkhd.track_id;
            _0x573ba4.name = _0x285b92.mdia.hdlr.name;
            _0x573ba4.references = [];
            if (_0x285b92.tref) {
              for (_0x4e67f3 = 0x0; _0x4e67f3 < _0x285b92.tref.boxes.length; _0x4e67f3++) {
                _0x76029e = {};
                _0x573ba4.references.push(_0x76029e);
                _0x76029e.type = _0x285b92.tref.boxes[_0x4e67f3].type;
                _0x76029e.track_ids = _0x285b92.tref.boxes[_0x4e67f3].track_ids;
              }
            }
            var _0x310ca9 = {
              "schemeURI": '',
              "value": ''
            };
            if (_0x285b92.edts) {
              _0x573ba4.edits = _0x285b92.edts.elst.entries;
            }
            _0x573ba4.created = new Date(_0x340c47 + 0x3e8 * _0x285b92.tkhd.creation_time);
            _0x573ba4.modified = new Date(_0x340c47 + 0x3e8 * _0x285b92.tkhd.modification_time);
            _0x573ba4.movie_duration = _0x285b92.tkhd.duration;
            _0x573ba4.movie_timescale = _0x14aeff.timescale;
            _0x573ba4.layer = _0x285b92.tkhd.layer;
            _0x573ba4.alternate_group = _0x285b92.tkhd.alternate_group;
            _0x573ba4.volume = _0x285b92.tkhd.volume;
            _0x573ba4.matrix = _0x285b92.tkhd.matrix;
            _0x573ba4.track_width = _0x285b92.tkhd.width / 0x10000;
            _0x573ba4.track_height = _0x285b92.tkhd.height / 0x10000;
            _0x573ba4.timescale = _0x285b92.mdia.mdhd.timescale;
            _0x573ba4.cts_shift = _0x285b92.mdia.minf.stbl.cslg;
            _0x573ba4.duration = _0x285b92.mdia.mdhd.duration;
            _0x573ba4.samples_duration = _0x285b92.samples_duration;
            _0x573ba4.codec = _0xa88c0b.getCodec();
            _0x573ba4.kind = _0x285b92.udta && _0x285b92.udta.kinds.length ? _0x285b92.udta.kinds[0x0] : _0x310ca9;
            _0x573ba4.language = _0x285b92.mdia.elng ? _0x285b92.mdia.elng.extended_language : _0x285b92.mdia.mdhd.languageString;
            _0x573ba4.nb_samples = _0x285b92.samples.length;
            _0x573ba4.size = _0x285b92.samples_size;
            _0x573ba4.bitrate = 0x8 * _0x573ba4.size * _0x573ba4.timescale / _0x573ba4.samples_duration;
            if (_0xa88c0b.isAudio()) {
              _0x573ba4.type = "audio";
              _0x14aeff.audioTracks.push(_0x573ba4);
              _0x573ba4.audio = {};
              _0x573ba4.audio.sample_rate = _0xa88c0b.getSampleRate();
              _0x573ba4.audio.channel_count = _0xa88c0b.getChannelCount();
              _0x573ba4.audio.sample_size = _0xa88c0b.getSampleSize();
            } else if (_0xa88c0b.isVideo()) {
              _0x573ba4.type = "video";
              _0x14aeff.videoTracks.push(_0x573ba4);
              _0x573ba4.video = {};
              _0x573ba4.video.width = _0xa88c0b.getWidth();
              _0x573ba4.video.height = _0xa88c0b.getHeight();
            } else if (_0xa88c0b.isSubtitle()) {
              _0x573ba4.type = "subtitles";
              _0x14aeff.subtitleTracks.push(_0x573ba4);
            } else if (_0xa88c0b.isHint()) {
              _0x573ba4.type = "metadata";
              _0x14aeff.hintTracks.push(_0x573ba4);
            } else if (_0xa88c0b.isMetadata()) {
              _0x573ba4.type = "metadata";
              _0x14aeff.metadataTracks.push(_0x573ba4);
            } else {
              _0x573ba4.type = "metadata";
              _0x14aeff.otherTracks.push(_0x573ba4);
            }
          }
        } else {
          _0x14aeff.hasMoov = false;
        }
        _0x14aeff.mime = '';
        if (_0x14aeff.hasMoov && _0x14aeff.tracks) {
          if (_0x14aeff.videoTracks && _0x14aeff.videoTracks.length > 0x0) {
            _0x14aeff.mime += "video/mp4; codecs=\"";
          } else if (_0x14aeff.audioTracks && _0x14aeff.audioTracks.length > 0x0) {
            _0x14aeff.mime += "audio/mp4; codecs=\"";
          } else {
            _0x14aeff.mime += "application/mp4; codecs=\"";
          }
          for (_0x33353d = 0x0; _0x33353d < _0x14aeff.tracks.length; _0x33353d++) {
            if (0x0 !== _0x33353d) {
              _0x14aeff.mime += ',';
            }
            _0x14aeff.mime += _0x14aeff.tracks[_0x33353d].codec;
          }
          _0x14aeff.mime += "\"; profiles=\"";
          _0x14aeff.mime += this.ftyp.compatible_brands.join();
          _0x14aeff.mime += "\"";
        }
        return _0x14aeff;
      };
      _0x290128.prototype.processSamples = function (_0x237d7e) {
        var _0x182e8d;
        var _0x5ec338;
        if (this.sampleProcessingStarted) {
          if (this.isFragmentationInitialized && null !== this.onSegment) {
            for (_0x182e8d = 0x0; _0x182e8d < this.fragmentedTracks.length; _0x182e8d++) {
              var _0x336bec = this.fragmentedTracks[_0x182e8d];
              for (_0x5ec338 = _0x336bec.trak; _0x5ec338.nextSample < _0x5ec338.samples.length && this.sampleProcessingStarted;) {
                _0x3949d1.debug("ISOFile", "Creating media fragment on track #" + _0x336bec.id + " for sample " + _0x5ec338.nextSample);
                var _0x4c1e8c = this.createFragment(_0x336bec.id, _0x5ec338.nextSample, _0x336bec.segmentStream);
                if (!_0x4c1e8c) {
                  break;
                }
                _0x336bec.segmentStream = _0x4c1e8c;
                _0x5ec338.nextSample++;
                if ((_0x5ec338.nextSample % _0x336bec.nb_samples == 0x0 || _0x237d7e || _0x5ec338.nextSample >= _0x5ec338.samples.length) && (_0x3949d1.info('ISOFile', "Sending fragmented data on track #" + _0x336bec.id + " for samples [" + Math.max(0x0, _0x5ec338.nextSample - _0x336bec.nb_samples) + ',' + (_0x5ec338.nextSample - 0x1) + ']'), _0x3949d1.info("ISOFile", "Sample data size in memory: " + this.getAllocatedSampleDataSize()), this.onSegment && this.onSegment(_0x336bec.id, _0x336bec.user, _0x336bec.segmentStream.buffer, _0x5ec338.nextSample, _0x237d7e || _0x5ec338.nextSample >= _0x5ec338.samples.length), _0x336bec.segmentStream = null, _0x336bec !== this.fragmentedTracks[_0x182e8d])) {
                  break;
                }
              }
            }
          }
          if (null !== this.onSamples) {
            for (_0x182e8d = 0x0; _0x182e8d < this.extractedTracks.length; _0x182e8d++) {
              var _0x42ccee = this.extractedTracks[_0x182e8d];
              for (_0x5ec338 = _0x42ccee.trak; _0x5ec338.nextSample < _0x5ec338.samples.length && this.sampleProcessingStarted;) {
                _0x3949d1.debug("ISOFile", "Exporting on track #" + _0x42ccee.id + " sample #" + _0x5ec338.nextSample);
                var _0x453668 = this.getSample(_0x5ec338, _0x5ec338.nextSample);
                if (!_0x453668) {
                  break;
                }
                _0x5ec338.nextSample++;
                _0x42ccee.samples.push(_0x453668);
                if ((_0x5ec338.nextSample % _0x42ccee.nb_samples == 0x0 || _0x5ec338.nextSample >= _0x5ec338.samples.length) && (_0x3949d1.debug('ISOFile', "Sending samples on track #" + _0x42ccee.id + " for sample " + _0x5ec338.nextSample), this.onSamples && this.onSamples(_0x42ccee.id, _0x42ccee.user, _0x42ccee.samples), _0x42ccee.samples = [], _0x42ccee !== this.extractedTracks[_0x182e8d])) {
                  break;
                }
              }
            }
          }
        }
      };
      _0x290128.prototype.getBox = function (_0x447f0) {
        var _0x3bbfdf = this.getBoxes(_0x447f0, true);
        return _0x3bbfdf.length ? _0x3bbfdf[0x0] : null;
      };
      _0x290128.prototype.getBoxes = function (_0x5d5aea, _0x30aae3) {
        var _0x250a8b = [];
        _0x290128._sweep.call(this, _0x5d5aea, _0x250a8b, _0x30aae3);
        return _0x250a8b;
      };
      _0x290128._sweep = function (_0x3594e5, _0x1a653c, _0x2e81be) {
        if (this.type && this.type == _0x3594e5) {
          _0x1a653c.push(this);
        }
        for (var _0x4a9488 in this.boxes) {
          if (_0x1a653c.length && _0x2e81be) {
            return;
          }
          _0x290128._sweep.call(this.boxes[_0x4a9488], _0x3594e5, _0x1a653c, _0x2e81be);
        }
      };
      _0x290128.prototype.getTrackSamplesInfo = function (_0x15a10e) {
        var _0x150a89 = this.getTrackById(_0x15a10e);
        return _0x150a89 ? _0x150a89.samples : undefined;
      };
      _0x290128.prototype.getTrackSample = function (_0x47a4bd, _0x8a3e58) {
        var _0xb541be = this.getTrackById(_0x47a4bd);
        return this.getSample(_0xb541be, _0x8a3e58);
      };
      _0x290128.prototype.releaseUsedSamples = function (_0x1ed73e, _0x403725) {
        var _0x146c6a = 0x0;
        var _0x4c2e86 = this.getTrackById(_0x1ed73e);
        if (!_0x4c2e86.lastValidSample) {
          _0x4c2e86.lastValidSample = 0x0;
        }
        for (var _0x20869d = _0x4c2e86.lastValidSample; _0x20869d < _0x403725; _0x20869d++) {
          _0x146c6a += this.releaseSample(_0x4c2e86, _0x20869d);
        }
        _0x3949d1.info("ISOFile", "Track #" + _0x1ed73e + " released samples up to " + _0x403725 + " (released size: " + _0x146c6a + ", remaining: " + this.samplesDataSize + ')');
        _0x4c2e86.lastValidSample = _0x403725;
      };
      _0x290128.prototype.start = function () {
        this.sampleProcessingStarted = true;
        this.processSamples(false);
      };
      _0x290128.prototype.stop = function () {
        this.sampleProcessingStarted = false;
      };
      _0x290128.prototype.flush = function () {
        _0x3949d1.info("ISOFile", "Flushing remaining samples");
        this.updateSampleLists();
        this.processSamples(true);
        this.stream.cleanBuffers();
        this.stream.logBufferLevel(true);
      };
      _0x290128.prototype.seekTrack = function (_0x5702a1, _0x2f992f, _0x317081) {
        var _0x63edca;
        var _0x518770;
        var _0x11d516;
        var _0x8d1044;
        var _0x48edb7 = 0x0;
        var _0x4a8cc2 = 0x0;
        var _0x276f23 = {
          offset: 0x0,
          "time": 0x0
        };
        if (0x0 === _0x317081.samples.length) {
          _0x3949d1.info('ISOFile', "No sample in track, cannot seek! Using time " + _0x3949d1.getDurationString(0x0, 0x1) + " and offset: 0");
          return _0x276f23;
        }
        for (_0x63edca = 0x0; _0x63edca < _0x317081.samples.length; _0x63edca++) {
          _0x518770 = _0x317081.samples[_0x63edca];
          if (0x0 === _0x63edca) {
            _0x4a8cc2 = 0x0;
            _0x8d1044 = _0x518770.timescale;
          } else {
            if (_0x518770.cts > _0x5702a1 * _0x518770.timescale) {
              _0x4a8cc2 = _0x63edca - 0x1;
              break;
            }
          }
          if (_0x2f992f && _0x518770.is_sync) {
            _0x48edb7 = _0x63edca;
          }
        }
        if (_0x2f992f) {
          _0x4a8cc2 = _0x48edb7;
        }
        _0x5702a1 = _0x317081.samples[_0x4a8cc2].cts;
        for (_0x317081.nextSample = _0x4a8cc2; _0x317081.samples[_0x4a8cc2].alreadyRead === _0x317081.samples[_0x4a8cc2].size && _0x317081.samples[_0x4a8cc2 + 0x1];) {
          _0x4a8cc2++;
        }
        _0x11d516 = _0x317081.samples[_0x4a8cc2].offset + _0x317081.samples[_0x4a8cc2].alreadyRead;
        _0x3949d1.info("ISOFile", "Seeking to " + (_0x2f992f ? "RAP" : '') + " sample #" + _0x317081.nextSample + " on track " + _0x317081.tkhd.track_id + ", time " + _0x3949d1.getDurationString(_0x5702a1, _0x8d1044) + " and offset: " + _0x11d516);
        return {
          'offset': _0x11d516,
          'time': _0x5702a1 / _0x8d1044
        };
      };
      _0x290128.prototype.seek = function (_0x567201, _0x20b8b5) {
        var _0x48e961 = {
          offset: Infinity,
          "time": Infinity
        };
        var _0x41cd44;
        var _0x41d2c0;
        var _0x237d9c;
        var _0x572ab6 = this.moov;
        var _0x434475 = _0x48e961;
        if (this.moov) {
          for (_0x237d9c = 0x0; _0x237d9c < _0x572ab6.traks.length; _0x237d9c++) {
            _0x41cd44 = _0x572ab6.traks[_0x237d9c];
            if ((_0x41d2c0 = this.seekTrack(_0x567201, _0x20b8b5, _0x41cd44)).offset < _0x434475.offset) {
              _0x434475.offset = _0x41d2c0.offset;
            }
            if (_0x41d2c0.time < _0x434475.time) {
              _0x434475.time = _0x41d2c0.time;
            }
          }
          var _0x5b4a07 = {
            "offset": this.nextParsePosition,
            "time": 0x0
          };
          _0x3949d1.info("ISOFile", "Seeking at time " + _0x3949d1.getDurationString(_0x434475.time, 0x1) + " needs a buffer with a fileStart position of " + _0x434475.offset);
          if (_0x434475.offset === Infinity) {
            _0x434475 = _0x5b4a07;
          } else {
            _0x434475.offset = this.stream.getEndFilePositionAfter(_0x434475.offset);
          }
          _0x3949d1.info("ISOFile", "Adjusted seek position (after checking data already in buffer): " + _0x434475.offset);
          return _0x434475;
        }
        throw "Cannot seek: moov not received!";
      };
      _0x290128.prototype.equal = function (_0x365ff5) {
        for (var _0x14f272 = 0x0; _0x14f272 < this.boxes.length && _0x14f272 < _0x365ff5.boxes.length;) {
          var _0x5e8829 = this.boxes[_0x14f272];
          var _0x21e423 = _0x365ff5.boxes[_0x14f272];
          if (!_0x3cde36.boxEqual(_0x5e8829, _0x21e423)) {
            return false;
          }
          _0x14f272++;
        }
        return true;
      };
      _0x4e1140.ISOFile = _0x290128;
      _0x290128.prototype.lastBoxStartPosition = 0x0;
      _0x290128.prototype.parsingMdat = null;
      _0x290128.prototype.nextParsePosition = 0x0;
      _0x290128.prototype.discardMdatData = false;
      _0x290128.prototype.processIncompleteBox = function (_0x365d01) {
        var _0x19b76b;
        return "mdat" === _0x365d01.type ? (_0x19b76b = new _0x3cde36[_0x365d01.type + "Box"](_0x365d01.size), this.parsingMdat = _0x19b76b, this.boxes.push(_0x19b76b), this.mdats.push(_0x19b76b), _0x19b76b.start = _0x365d01.start, _0x19b76b.hdr_size = _0x365d01.hdr_size, this.stream.addUsedBytes(_0x19b76b.hdr_size), this.lastBoxStartPosition = _0x19b76b.start + _0x19b76b.size, this.stream.seek(_0x19b76b.start + _0x19b76b.size, false, this.discardMdatData) ? (this.parsingMdat = null, true) : (this.moovStartFound ? this.nextParsePosition = this.stream.findEndContiguousBuf() : this.nextParsePosition = _0x19b76b.start + _0x19b76b.size, false)) : ("moov" === _0x365d01.type && (this.moovStartFound = true, 0x0 === this.mdats.length && (this.isProgressive = true)), this.stream.mergeNextBuffer && this.stream.mergeNextBuffer() ? (this.nextParsePosition = this.stream.getEndPosition(), true) : (_0x365d01.type ? this.moovStartFound ? this.nextParsePosition = this.stream.getEndPosition() : this.nextParsePosition = this.stream.getPosition() + _0x365d01.size : this.nextParsePosition = this.stream.getEndPosition(), false));
      };
      _0x290128.prototype.hasIncompleteMdat = function () {
        return null !== this.parsingMdat;
      };
      _0x290128.prototype.processIncompleteMdat = function () {
        var _0x1b5214;
        _0x1b5214 = this.parsingMdat;
        return this.stream.seek(_0x1b5214.start + _0x1b5214.size, false, this.discardMdatData) ? (_0x3949d1.debug("ISOFile", "Found 'mdat' end in buffered data"), this.parsingMdat = null, true) : (this.nextParsePosition = this.stream.findEndContiguousBuf(), false);
      };
      _0x290128.prototype.restoreParsePosition = function () {
        return this.stream.seek(this.lastBoxStartPosition, true, this.discardMdatData);
      };
      _0x290128.prototype.saveParsePosition = function () {
        this.lastBoxStartPosition = this.stream.getPosition();
      };
      _0x290128.prototype.updateUsedBytes = function (_0xf85349, _0x4d2120) {
        if (this.stream.addUsedBytes) {
          if ('mdat' === _0xf85349.type) {
            this.stream.addUsedBytes(_0xf85349.hdr_size);
            if (this.discardMdatData) {
              this.stream.addUsedBytes(_0xf85349.size - _0xf85349.hdr_size);
            }
          } else {
            this.stream.addUsedBytes(_0xf85349.size);
          }
        }
      };
      _0x290128.prototype.add = _0x3cde36.Box.prototype.add;
      _0x290128.prototype.addBox = _0x3cde36.Box.prototype.addBox;
      _0x290128.prototype.init = function (_0x45efb5) {
        var _0x35ec0d = _0x45efb5 || {};
        this.add("ftyp").set("major_brand", _0x35ec0d.brands && _0x35ec0d.brands[0x0] || "iso4").set("minor_version", 0x0).set("compatible_brands", _0x35ec0d.brands || ['iso4']);
        var _0x36f15a = this.add("moov");
        _0x36f15a.add('mvhd').set("timescale", _0x35ec0d.timescale || 0x258).set("rate", _0x35ec0d.rate || 0x10000).set("creation_time", 0x0).set("modification_time", 0x0).set("duration", _0x35ec0d.duration || 0x0).set("volume", _0x35ec0d.width ? 0x0 : 0x100).set("matrix", [0x10000, 0x0, 0x0, 0x0, 0x10000, 0x0, 0x0, 0x0, 0x40000000]).set("next_track_id", 0x1);
        _0x36f15a.add("mvex");
        return this;
      };
      _0x290128.prototype.addTrack = function (_0x506918) {
        if (!this.moov) {
          this.init(_0x506918);
        }
        var _0x3a5fab = _0x506918 || {};
        _0x3a5fab.width = _0x3a5fab.width || 0x140;
        _0x3a5fab.height = _0x3a5fab.height || 0x140;
        _0x3a5fab.id = _0x3a5fab.id || this.moov.mvhd.next_track_id;
        _0x3a5fab.type = _0x3a5fab.type || "avc1";
        var _0x42af66 = this.moov.add("trak");
        this.moov.mvhd.next_track_id = _0x3a5fab.id + 0x1;
        _0x42af66.add('tkhd').set("flags", _0x3cde36.TKHD_FLAG_ENABLED | _0x3cde36.TKHD_FLAG_IN_MOVIE | _0x3cde36.TKHD_FLAG_IN_PREVIEW).set("creation_time", 0x0).set("modification_time", 0x0).set("track_id", _0x3a5fab.id).set('duration', _0x3a5fab.duration || 0x0).set('layer', _0x3a5fab.layer || 0x0).set("alternate_group", 0x0).set("volume", 0x1).set("matrix", [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0]).set('width', _0x3a5fab.width << 0x10).set("height", _0x3a5fab.height << 0x10);
        var _0x5ef433 = _0x42af66.add('mdia');
        _0x5ef433.add("mdhd").set("creation_time", 0x0).set("modification_time", 0x0).set('timescale', _0x3a5fab.timescale || 0x1).set("duration", _0x3a5fab.media_duration || 0x0).set("language", _0x3a5fab.language || "und");
        _0x5ef433.add("hdlr").set("handler", _0x3a5fab.hdlr || "vide").set("name", _0x3a5fab.name || "Track created with MP4Box.js");
        _0x5ef433.add("elng").set("extended_language", _0x3a5fab.language || "fr-FR");
        var _0x14ca39 = _0x5ef433.add("minf");
        if (undefined !== _0x3cde36[_0x3a5fab.type + "SampleEntry"]) {
          var _0x227380 = new _0x3cde36[_0x3a5fab.type + "SampleEntry"]();
          _0x227380.data_reference_index = 0x1;
          var _0x1a32a7 = '';
          for (var _0x4b5275 in _0x3cde36.sampleEntryCodes) {
            var _0x111b9e = _0x3cde36.sampleEntryCodes[_0x4b5275];
            for (var _0x5f2855 = 0x0; _0x5f2855 < _0x111b9e.length; _0x5f2855++) {
              if (_0x111b9e.indexOf(_0x3a5fab.type) > -0x1) {
                _0x1a32a7 = _0x4b5275;
                break;
              }
            }
          }
          switch (_0x1a32a7) {
            case "Visual":
              _0x14ca39.add("vmhd").set("graphicsmode", 0x0).set("opcolor", [0x0, 0x0, 0x0]);
              _0x227380.set("width", _0x3a5fab.width).set('height', _0x3a5fab.height).set("horizresolution", 4718592).set("vertresolution", 4718592).set("frame_count", 0x1).set("compressorname", _0x3a5fab.type + " Compressor").set('depth', 0x18);
              if (_0x3a5fab.avcDecoderConfigRecord) {
                var _0x3e1a62 = new _0x3cde36.avcCBox();
                var _0x1310ca = new _0x2a61c3(_0x3a5fab.avcDecoderConfigRecord);
                _0x3e1a62.parse(_0x1310ca);
                _0x227380.addBox(_0x3e1a62);
              }
              break;
            case 'Audio':
              _0x14ca39.add("smhd").set("balance", _0x3a5fab.balance || 0x0);
              _0x227380.set("channel_count", _0x3a5fab.channel_count || 0x2).set("samplesize", _0x3a5fab.samplesize || 0x10).set('samplerate', _0x3a5fab.samplerate || 0x10000);
              break;
            case 'Hint':
              _0x14ca39.add("hmhd");
              break;
            case "Subtitle":
              _0x14ca39.add("sthd");
              if ("stpp" === _0x3a5fab.type) {
                _0x227380.set('namespace', _0x3a5fab.namespace || "nonamespace").set("schema_location", _0x3a5fab.schema_location || '').set("auxiliary_mime_types", _0x3a5fab.auxiliary_mime_types || '');
              }
              break;
            default:
              _0x14ca39.add("nmhd");
          }
          if (_0x3a5fab.description) {
            _0x227380.addBox(_0x3a5fab.description);
          }
          if (_0x3a5fab.description_boxes) {
            _0x3a5fab.description_boxes.forEach(function (_0x50d77e) {
              _0x227380.addBox(_0x50d77e);
            });
          }
          _0x14ca39.add("dinf").add("dref").addEntry(new _0x3cde36["url Box"]().set("flags", 0x1));
          var _0x1aa997 = _0x14ca39.add("stbl");
          _0x1aa997.add("stsd").addEntry(_0x227380);
          _0x1aa997.add("stts").set("sample_counts", []).set("sample_deltas", []);
          _0x1aa997.add("stsc").set("first_chunk", []).set("samples_per_chunk", []).set("sample_description_index", []);
          _0x1aa997.add('stco').set("chunk_offsets", []);
          _0x1aa997.add("stsz").set("sample_sizes", []);
          this.moov.mvex.add("trex").set('track_id', _0x3a5fab.id).set("default_sample_description_index", _0x3a5fab.default_sample_description_index || 0x1).set("default_sample_duration", _0x3a5fab.default_sample_duration || 0x0).set("default_sample_size", _0x3a5fab.default_sample_size || 0x0).set("default_sample_flags", _0x3a5fab.default_sample_flags || 0x0);
          this.buildTrakSampleLists(_0x42af66);
          return _0x3a5fab.id;
        }
      };
      _0x3cde36.Box.prototype.computeSize = function (_0x2e5434) {
        var _0x4c118a = _0x2e5434 || new _0x5a360b();
        _0x4c118a.endianness = _0x5a360b.BIG_ENDIAN;
        this.write(_0x4c118a);
      };
      _0x290128.prototype.addSample = function (_0x51d78d, _0x3a67df, _0x1291c1) {
        var _0x24d9bf = _0x1291c1 || {};
        var _0x11fe84 = {};
        var _0x1b4b88 = this.getTrackById(_0x51d78d);
        if (null !== _0x1b4b88) {
          _0x11fe84.number = _0x1b4b88.samples.length;
          _0x11fe84.track_id = _0x1b4b88.tkhd.track_id;
          _0x11fe84.timescale = _0x1b4b88.mdia.mdhd.timescale;
          _0x11fe84.description_index = _0x24d9bf.sample_description_index ? _0x24d9bf.sample_description_index - 0x1 : 0x0;
          _0x11fe84.description = _0x1b4b88.mdia.minf.stbl.stsd.entries[_0x11fe84.description_index];
          _0x11fe84.data = _0x3a67df;
          _0x11fe84.size = _0x3a67df.byteLength;
          _0x11fe84.alreadyRead = _0x11fe84.size;
          _0x11fe84.duration = _0x24d9bf.duration || 0x1;
          _0x11fe84.cts = _0x24d9bf.cts || 0x0;
          _0x11fe84.dts = _0x24d9bf.dts || 0x0;
          _0x11fe84.is_sync = _0x24d9bf.is_sync || false;
          _0x11fe84.is_leading = _0x24d9bf.is_leading || 0x0;
          _0x11fe84.depends_on = _0x24d9bf.depends_on || 0x0;
          _0x11fe84.is_depended_on = _0x24d9bf.is_depended_on || 0x0;
          _0x11fe84.has_redundancy = _0x24d9bf.has_redundancy || 0x0;
          _0x11fe84.degradation_priority = _0x24d9bf.degradation_priority || 0x0;
          _0x11fe84.offset = 0x0;
          _0x11fe84.subsamples = _0x24d9bf.subsamples;
          _0x1b4b88.samples.push(_0x11fe84);
          _0x1b4b88.samples_size += _0x11fe84.size;
          _0x1b4b88.samples_duration += _0x11fe84.duration;
          if (!_0x1b4b88.first_dts) {
            _0x1b4b88.first_dts = _0x24d9bf.dts;
          }
          this.processSamples();
          var _0x185807 = this.createSingleSampleMoof(_0x11fe84);
          this.addBox(_0x185807);
          _0x185807.computeSize();
          _0x185807.trafs[0x0].truns[0x0].data_offset = _0x185807.size + 0x8;
          this.add("mdat").data = new Uint8Array(_0x3a67df);
          return _0x11fe84;
        }
      };
      _0x290128.prototype.createSingleSampleMoof = function (_0x406f8e) {
        var _0xe9142e;
        _0xe9142e = _0x406f8e.is_sync ? 33554432 : 0x10000;
        var _0x81f7ed = new _0x3cde36.moofBox();
        _0x81f7ed.add("mfhd").set("sequence_number", this.nextMoofNumber);
        this.nextMoofNumber++;
        var _0x5948da = _0x81f7ed.add('traf');
        var _0x2423a9 = this.getTrackById(_0x406f8e.track_id);
        _0x5948da.add("tfhd").set('track_id', _0x406f8e.track_id).set("flags", _0x3cde36.TFHD_FLAG_DEFAULT_BASE_IS_MOOF);
        _0x5948da.add('tfdt').set("baseMediaDecodeTime", _0x406f8e.dts - (_0x2423a9.first_dts || 0x0));
        _0x5948da.add("trun").set("flags", _0x3cde36.TRUN_FLAGS_DATA_OFFSET | _0x3cde36.TRUN_FLAGS_DURATION | _0x3cde36.TRUN_FLAGS_SIZE | _0x3cde36.TRUN_FLAGS_FLAGS | _0x3cde36.TRUN_FLAGS_CTS_OFFSET).set("data_offset", 0x0).set("first_sample_flags", 0x0).set("sample_count", 0x1).set("sample_duration", [_0x406f8e.duration]).set("sample_size", [_0x406f8e.size]).set("sample_flags", [_0xe9142e]).set("sample_composition_time_offset", [_0x406f8e.cts - _0x406f8e.dts]);
        return _0x81f7ed;
      };
      _0x290128.prototype.lastMoofIndex = 0x0;
      _0x290128.prototype.samplesDataSize = 0x0;
      _0x290128.prototype.resetTables = function () {
        var _0x8c8c15;
        var _0x3747db;
        var _0x586635;
        var _0x55f383;
        var _0x320bb8;
        var _0xa3b6dc;
        this.initial_duration = this.moov.mvhd.duration;
        this.moov.mvhd.duration = 0x0;
        for (_0x8c8c15 = 0x0; _0x8c8c15 < this.moov.traks.length; _0x8c8c15++) {
          (_0x3747db = this.moov.traks[_0x8c8c15]).tkhd.duration = 0x0;
          _0x3747db.mdia.mdhd.duration = 0x0;
          (_0x3747db.mdia.minf.stbl.stco || _0x3747db.mdia.minf.stbl.co64).chunk_offsets = [];
          (_0x586635 = _0x3747db.mdia.minf.stbl.stsc).first_chunk = [];
          _0x586635.samples_per_chunk = [];
          _0x586635.sample_description_index = [];
          (_0x3747db.mdia.minf.stbl.stsz || _0x3747db.mdia.minf.stbl.stz2).sample_sizes = [];
          (_0x55f383 = _0x3747db.mdia.minf.stbl.stts).sample_counts = [];
          _0x55f383.sample_deltas = [];
          if (_0x320bb8 = _0x3747db.mdia.minf.stbl.ctts) {
            _0x320bb8.sample_counts = [];
            _0x320bb8.sample_offsets = [];
          }
          _0xa3b6dc = _0x3747db.mdia.minf.stbl.stss;
          var _0x3c2daf = _0x3747db.mdia.minf.stbl.boxes.indexOf(_0xa3b6dc);
          if (-0x1 != _0x3c2daf) {
            _0x3747db.mdia.minf.stbl.boxes[_0x3c2daf] = null;
          }
        }
      };
      _0x290128.initSampleGroups = function (_0x32f6f9, _0x1ecc9a, _0x2fba7d, _0xdc4f95, _0x596bf7) {
        var _0x322030;
        var _0x403735;
        var _0x2ed6c;
        var _0x41f075;
        function _0x3c451b(_0x387d55, _0x2c34aa, _0x22d654) {
          this.grouping_type = _0x387d55;
          this.grouping_type_parameter = _0x2c34aa;
          this.sbgp = _0x22d654;
          this.last_sample_in_run = -0x1;
          this.entry_index = -0x1;
        }
        if (_0x1ecc9a) {
          _0x1ecc9a.sample_groups_info = [];
        }
        if (!_0x32f6f9.sample_groups_info) {
          _0x32f6f9.sample_groups_info = [];
        }
        for (_0x403735 = 0x0; _0x403735 < _0x2fba7d.length; _0x403735++) {
          _0x41f075 = _0x2fba7d[_0x403735].grouping_type + '/' + _0x2fba7d[_0x403735].grouping_type_parameter;
          _0x2ed6c = new _0x3c451b(_0x2fba7d[_0x403735].grouping_type, _0x2fba7d[_0x403735].grouping_type_parameter, _0x2fba7d[_0x403735]);
          if (_0x1ecc9a) {
            _0x1ecc9a.sample_groups_info[_0x41f075] = _0x2ed6c;
          }
          if (!_0x32f6f9.sample_groups_info[_0x41f075]) {
            _0x32f6f9.sample_groups_info[_0x41f075] = _0x2ed6c;
          }
          for (_0x322030 = 0x0; _0x322030 < _0xdc4f95.length; _0x322030++) {
            if (_0xdc4f95[_0x322030].grouping_type === _0x2fba7d[_0x403735].grouping_type) {
              _0x2ed6c.description = _0xdc4f95[_0x322030];
              _0x2ed6c.description.used = true;
            }
          }
          if (_0x596bf7) {
            for (_0x322030 = 0x0; _0x322030 < _0x596bf7.length; _0x322030++) {
              if (_0x596bf7[_0x322030].grouping_type === _0x2fba7d[_0x403735].grouping_type) {
                _0x2ed6c.fragment_description = _0x596bf7[_0x322030];
                _0x2ed6c.fragment_description.used = true;
                _0x2ed6c.is_fragment = true;
              }
            }
          }
        }
        if (_0x1ecc9a) {
          if (_0x596bf7) {
            for (_0x403735 = 0x0; _0x403735 < _0x596bf7.length; _0x403735++) {
              if (!_0x596bf7[_0x403735].used && _0x596bf7[_0x403735].version >= 0x2) {
                _0x41f075 = _0x596bf7[_0x403735].grouping_type + '/0';
                (_0x2ed6c = new _0x3c451b(_0x596bf7[_0x403735].grouping_type, 0x0)).is_fragment = true;
                if (!_0x1ecc9a.sample_groups_info[_0x41f075]) {
                  _0x1ecc9a.sample_groups_info[_0x41f075] = _0x2ed6c;
                }
              }
            }
          }
        } else {
          for (_0x403735 = 0x0; _0x403735 < _0xdc4f95.length; _0x403735++) {
            if (!_0xdc4f95[_0x403735].used && _0xdc4f95[_0x403735].version >= 0x2) {
              _0x41f075 = _0xdc4f95[_0x403735].grouping_type + '/0';
              _0x2ed6c = new _0x3c451b(_0xdc4f95[_0x403735].grouping_type, 0x0);
              if (!_0x32f6f9.sample_groups_info[_0x41f075]) {
                _0x32f6f9.sample_groups_info[_0x41f075] = _0x2ed6c;
              }
            }
          }
        }
      };
      _0x290128.setSampleGroupProperties = function (_0x80e936, _0x473d83, _0x3cb077, _0x25e44b) {
        var _0x24c5ad;
        var _0x3e0344;
        _0x473d83.sample_groups = [];
        for (_0x24c5ad in _0x25e44b) {
          var _0x43b59d;
          _0x473d83.sample_groups[_0x24c5ad] = {};
          _0x473d83.sample_groups[_0x24c5ad].grouping_type = _0x25e44b[_0x24c5ad].grouping_type;
          _0x473d83.sample_groups[_0x24c5ad].grouping_type_parameter = _0x25e44b[_0x24c5ad].grouping_type_parameter;
          if (_0x3cb077 >= _0x25e44b[_0x24c5ad].last_sample_in_run) {
            if (_0x25e44b[_0x24c5ad].last_sample_in_run < 0x0) {
              _0x25e44b[_0x24c5ad].last_sample_in_run = 0x0;
            }
            _0x25e44b[_0x24c5ad].entry_index++;
            if (_0x25e44b[_0x24c5ad].entry_index <= _0x25e44b[_0x24c5ad].sbgp.entries.length - 0x1) {
              _0x25e44b[_0x24c5ad].last_sample_in_run += _0x25e44b[_0x24c5ad].sbgp.entries[_0x25e44b[_0x24c5ad].entry_index].sample_count;
            }
          }
          if (_0x25e44b[_0x24c5ad].entry_index <= _0x25e44b[_0x24c5ad].sbgp.entries.length - 0x1) {
            _0x473d83.sample_groups[_0x24c5ad].group_description_index = _0x25e44b[_0x24c5ad].sbgp.entries[_0x25e44b[_0x24c5ad].entry_index].group_description_index;
          } else {
            _0x473d83.sample_groups[_0x24c5ad].group_description_index = -0x1;
          }
          if (0x0 !== _0x473d83.sample_groups[_0x24c5ad].group_description_index) {
            _0x43b59d = _0x25e44b[_0x24c5ad].fragment_description ? _0x25e44b[_0x24c5ad].fragment_description : _0x25e44b[_0x24c5ad].description;
            if (_0x473d83.sample_groups[_0x24c5ad].group_description_index > 0x0) {
              _0x3e0344 = _0x473d83.sample_groups[_0x24c5ad].group_description_index > 0xffff ? (_0x473d83.sample_groups[_0x24c5ad].group_description_index >> 0x10) - 0x1 : _0x473d83.sample_groups[_0x24c5ad].group_description_index - 0x1;
              if (_0x43b59d && _0x3e0344 >= 0x0) {
                _0x473d83.sample_groups[_0x24c5ad].description = _0x43b59d.entries[_0x3e0344];
              }
            } else if (_0x43b59d && _0x43b59d.version >= 0x2 && _0x43b59d.default_group_description_index > 0x0) {
              _0x473d83.sample_groups[_0x24c5ad].description = _0x43b59d.entries[_0x43b59d.default_group_description_index - 0x1];
            }
          }
        }
      };
      _0x290128.process_sdtp = function (_0x171d6e, _0x3a1432, _0x235145) {
        if (_0x3a1432) {
          if (_0x171d6e) {
            _0x3a1432.is_leading = _0x171d6e.is_leading[_0x235145];
            _0x3a1432.depends_on = _0x171d6e.sample_depends_on[_0x235145];
            _0x3a1432.is_depended_on = _0x171d6e.sample_is_depended_on[_0x235145];
            _0x3a1432.has_redundancy = _0x171d6e.sample_has_redundancy[_0x235145];
          } else {
            _0x3a1432.is_leading = 0x0;
            _0x3a1432.depends_on = 0x0;
            _0x3a1432.is_depended_on = 0x0;
            _0x3a1432.has_redundancy = 0x0;
          }
        }
      };
      _0x290128.prototype.buildSampleLists = function () {
        var _0x31bbe2;
        var _0x412f2c;
        for (_0x31bbe2 = 0x0; _0x31bbe2 < this.moov.traks.length; _0x31bbe2++) {
          _0x412f2c = this.moov.traks[_0x31bbe2];
          this.buildTrakSampleLists(_0x412f2c);
        }
      };
      _0x290128.prototype.buildTrakSampleLists = function (_0x53d916) {
        var _0x43bd30;
        var _0x24a0e6;
        var _0x1db938;
        var _0x2ff347;
        var _0x338f0d;
        var _0x2aec3f;
        var _0x407820;
        var _0x330386;
        var _0x4f7190;
        var _0x7c23ae;
        var _0x4772e9;
        var _0x507595;
        var _0x23803a;
        var _0x5e731a;
        var _0x5b4a62;
        var _0x2816da;
        var _0x2797d2;
        var _0x11b613;
        var _0x1c3fe9;
        var _0xcfcd38;
        var _0x1fd5c5;
        var _0x2a5f64;
        var _0x3d4b55;
        var _0x43ca3e;
        _0x53d916.samples = [];
        _0x53d916.samples_duration = 0x0;
        _0x53d916.samples_size = 0x0;
        _0x24a0e6 = _0x53d916.mdia.minf.stbl.stco || _0x53d916.mdia.minf.stbl.co64;
        _0x1db938 = _0x53d916.mdia.minf.stbl.stsc;
        _0x2ff347 = _0x53d916.mdia.minf.stbl.stsz || _0x53d916.mdia.minf.stbl.stz2;
        _0x338f0d = _0x53d916.mdia.minf.stbl.stts;
        _0x2aec3f = _0x53d916.mdia.minf.stbl.ctts;
        _0x407820 = _0x53d916.mdia.minf.stbl.stss;
        _0x330386 = _0x53d916.mdia.minf.stbl.stsd;
        _0x4f7190 = _0x53d916.mdia.minf.stbl.subs;
        _0x507595 = _0x53d916.mdia.minf.stbl.stdp;
        _0x7c23ae = _0x53d916.mdia.minf.stbl.sbgps;
        _0x4772e9 = _0x53d916.mdia.minf.stbl.sgpds;
        _0x11b613 = -0x1;
        _0x1c3fe9 = -0x1;
        _0xcfcd38 = -0x1;
        _0x1fd5c5 = -0x1;
        _0x2a5f64 = 0x0;
        _0x3d4b55 = 0x0;
        _0x43ca3e = 0x0;
        _0x290128.initSampleGroups(_0x53d916, null, _0x7c23ae, _0x4772e9);
        if (undefined !== _0x2ff347) {
          for (_0x43bd30 = 0x0; _0x43bd30 < _0x2ff347.sample_sizes.length; _0x43bd30++) {
            var _0x385a40 = {
              number: _0x43bd30,
              "track_id": _0x53d916.tkhd.track_id,
              "timescale": _0x53d916.mdia.mdhd.timescale,
              alreadyRead: 0x0
            };
            _0x53d916.samples[_0x43bd30] = _0x385a40;
            _0x385a40.size = _0x2ff347.sample_sizes[_0x43bd30];
            _0x53d916.samples_size += _0x385a40.size;
            if (0x0 === _0x43bd30) {
              _0x5e731a = 0x1;
              _0x23803a = 0x0;
              _0x385a40.chunk_index = _0x5e731a;
              _0x385a40.chunk_run_index = _0x23803a;
              _0x2797d2 = _0x1db938.samples_per_chunk[_0x23803a];
              _0x2816da = 0x0;
              _0x5b4a62 = _0x23803a + 0x1 < _0x1db938.first_chunk.length ? _0x1db938.first_chunk[_0x23803a + 0x1] - 0x1 : Infinity;
            } else if (_0x43bd30 < _0x2797d2) {
              _0x385a40.chunk_index = _0x5e731a;
              _0x385a40.chunk_run_index = _0x23803a;
            } else {
              _0x5e731a++;
              _0x385a40.chunk_index = _0x5e731a;
              _0x2816da = 0x0;
              if (!(_0x5e731a <= _0x5b4a62)) {
                _0x5b4a62 = 0x1 + ++_0x23803a < _0x1db938.first_chunk.length ? _0x1db938.first_chunk[_0x23803a + 0x1] - 0x1 : Infinity;
              }
              _0x385a40.chunk_run_index = _0x23803a;
              _0x2797d2 += _0x1db938.samples_per_chunk[_0x23803a];
            }
            _0x385a40.description_index = _0x1db938.sample_description_index[_0x385a40.chunk_run_index] - 0x1;
            _0x385a40.description = _0x330386.entries[_0x385a40.description_index];
            _0x385a40.offset = _0x24a0e6.chunk_offsets[_0x385a40.chunk_index - 0x1] + _0x2816da;
            _0x2816da += _0x385a40.size;
            if (_0x43bd30 > _0x11b613) {
              _0x1c3fe9++;
              if (_0x11b613 < 0x0) {
                _0x11b613 = 0x0;
              }
              _0x11b613 += _0x338f0d.sample_counts[_0x1c3fe9];
            }
            if (_0x43bd30 > 0x0) {
              _0x53d916.samples[_0x43bd30 - 0x1].duration = _0x338f0d.sample_deltas[_0x1c3fe9];
              _0x53d916.samples_duration += _0x53d916.samples[_0x43bd30 - 0x1].duration;
              _0x385a40.dts = _0x53d916.samples[_0x43bd30 - 0x1].dts + _0x53d916.samples[_0x43bd30 - 0x1].duration;
            } else {
              _0x385a40.dts = 0x0;
            }
            if (_0x2aec3f) {
              if (_0x43bd30 >= _0xcfcd38) {
                _0x1fd5c5++;
                if (_0xcfcd38 < 0x0) {
                  _0xcfcd38 = 0x0;
                }
                _0xcfcd38 += _0x2aec3f.sample_counts[_0x1fd5c5];
              }
              _0x385a40.cts = _0x53d916.samples[_0x43bd30].dts + _0x2aec3f.sample_offsets[_0x1fd5c5];
            } else {
              _0x385a40.cts = _0x385a40.dts;
            }
            if (_0x407820) {
              if (_0x43bd30 == _0x407820.sample_numbers[_0x2a5f64] - 0x1) {
                _0x385a40.is_sync = true;
                _0x2a5f64++;
              } else {
                _0x385a40.is_sync = false;
                _0x385a40.degradation_priority = 0x0;
              }
              if (_0x4f7190 && _0x4f7190.entries[_0x3d4b55].sample_delta + _0x43ca3e == _0x43bd30 + 0x1) {
                _0x385a40.subsamples = _0x4f7190.entries[_0x3d4b55].subsamples;
                _0x43ca3e += _0x4f7190.entries[_0x3d4b55].sample_delta;
                _0x3d4b55++;
              }
            } else {
              _0x385a40.is_sync = true;
            }
            _0x290128.process_sdtp(_0x53d916.mdia.minf.stbl.sdtp, _0x385a40, _0x385a40.number);
            _0x385a40.degradation_priority = _0x507595 ? _0x507595.priority[_0x43bd30] : 0x0;
            if (_0x4f7190 && _0x4f7190.entries[_0x3d4b55].sample_delta + _0x43ca3e == _0x43bd30) {
              _0x385a40.subsamples = _0x4f7190.entries[_0x3d4b55].subsamples;
              _0x43ca3e += _0x4f7190.entries[_0x3d4b55].sample_delta;
            }
            if (_0x7c23ae.length > 0x0 || _0x4772e9.length > 0x0) {
              _0x290128.setSampleGroupProperties(_0x53d916, _0x385a40, _0x43bd30, _0x53d916.sample_groups_info);
            }
          }
          if (_0x43bd30 > 0x0) {
            _0x53d916.samples[_0x43bd30 - 0x1].duration = Math.max(_0x53d916.mdia.mdhd.duration - _0x53d916.samples[_0x43bd30 - 0x1].dts, 0x0);
            _0x53d916.samples_duration += _0x53d916.samples[_0x43bd30 - 0x1].duration;
          }
        }
      };
      _0x290128.prototype.updateSampleLists = function () {
        var _0x498116;
        var _0x594405;
        var _0x52a7c6;
        var _0x311d67;
        var _0x22c855;
        var _0x98ba19;
        var _0x1d96ed;
        var _0x253b8c;
        var _0x518549;
        var _0x46d025;
        var _0x12af46;
        var _0x126f46;
        var _0x26e23e;
        var _0x3813c7;
        var _0x5989d9;
        if (undefined !== this.moov) {
          for (; this.lastMoofIndex < this.moofs.length;) {
            _0x518549 = this.moofs[this.lastMoofIndex];
            this.lastMoofIndex++;
            if ("moof" == _0x518549.type) {
              _0x46d025 = _0x518549;
              for (_0x498116 = 0x0; _0x498116 < _0x46d025.trafs.length; _0x498116++) {
                _0x12af46 = _0x46d025.trafs[_0x498116];
                _0x126f46 = this.getTrackById(_0x12af46.tfhd.track_id);
                _0x26e23e = this.getTrexById(_0x12af46.tfhd.track_id);
                _0x311d67 = _0x12af46.tfhd.flags & _0x3cde36.TFHD_FLAG_SAMPLE_DESC ? _0x12af46.tfhd.default_sample_description_index : _0x26e23e ? _0x26e23e.default_sample_description_index : 0x1;
                _0x22c855 = _0x12af46.tfhd.flags & _0x3cde36.TFHD_FLAG_SAMPLE_DUR ? _0x12af46.tfhd.default_sample_duration : _0x26e23e ? _0x26e23e.default_sample_duration : 0x0;
                _0x98ba19 = _0x12af46.tfhd.flags & _0x3cde36.TFHD_FLAG_SAMPLE_SIZE ? _0x12af46.tfhd.default_sample_size : _0x26e23e ? _0x26e23e.default_sample_size : 0x0;
                _0x1d96ed = _0x12af46.tfhd.flags & _0x3cde36.TFHD_FLAG_SAMPLE_FLAGS ? _0x12af46.tfhd.default_sample_flags : _0x26e23e ? _0x26e23e.default_sample_flags : 0x0;
                _0x12af46.sample_number = 0x0;
                if (_0x12af46.sbgps.length > 0x0) {
                  _0x290128.initSampleGroups(_0x126f46, _0x12af46, _0x12af46.sbgps, _0x126f46.mdia.minf.stbl.sgpds, _0x12af46.sgpds);
                }
                for (_0x594405 = 0x0; _0x594405 < _0x12af46.truns.length; _0x594405++) {
                  var _0x4fbad4 = _0x12af46.truns[_0x594405];
                  for (_0x52a7c6 = 0x0; _0x52a7c6 < _0x4fbad4.sample_count; _0x52a7c6++) {
                    (_0x3813c7 = {}).moof_number = this.lastMoofIndex;
                    _0x3813c7.number_in_traf = _0x12af46.sample_number;
                    _0x12af46.sample_number++;
                    _0x3813c7.number = _0x126f46.samples.length;
                    _0x12af46.first_sample_index = _0x126f46.samples.length;
                    _0x126f46.samples.push(_0x3813c7);
                    _0x3813c7.track_id = _0x126f46.tkhd.track_id;
                    _0x3813c7.timescale = _0x126f46.mdia.mdhd.timescale;
                    _0x3813c7.description_index = _0x311d67 - 0x1;
                    _0x3813c7.description = _0x126f46.mdia.minf.stbl.stsd.entries[_0x3813c7.description_index];
                    _0x3813c7.size = _0x98ba19;
                    if (_0x4fbad4.flags & _0x3cde36.TRUN_FLAGS_SIZE) {
                      _0x3813c7.size = _0x4fbad4.sample_size[_0x52a7c6];
                    }
                    _0x126f46.samples_size += _0x3813c7.size;
                    _0x3813c7.duration = _0x22c855;
                    if (_0x4fbad4.flags & _0x3cde36.TRUN_FLAGS_DURATION) {
                      _0x3813c7.duration = _0x4fbad4.sample_duration[_0x52a7c6];
                    }
                    _0x126f46.samples_duration += _0x3813c7.duration;
                    if (_0x126f46.first_traf_merged || _0x52a7c6 > 0x0) {
                      _0x3813c7.dts = _0x126f46.samples[_0x126f46.samples.length - 0x2].dts + _0x126f46.samples[_0x126f46.samples.length - 0x2].duration;
                    } else {
                      if (_0x12af46.tfdt) {
                        _0x3813c7.dts = _0x12af46.tfdt.baseMediaDecodeTime;
                      } else {
                        _0x3813c7.dts = 0x0;
                      }
                      _0x126f46.first_traf_merged = true;
                    }
                    _0x3813c7.cts = _0x3813c7.dts;
                    if (_0x4fbad4.flags & _0x3cde36.TRUN_FLAGS_CTS_OFFSET) {
                      _0x3813c7.cts = _0x3813c7.dts + _0x4fbad4.sample_composition_time_offset[_0x52a7c6];
                    }
                    _0x5989d9 = _0x1d96ed;
                    if (_0x4fbad4.flags & _0x3cde36.TRUN_FLAGS_FLAGS) {
                      _0x5989d9 = _0x4fbad4.sample_flags[_0x52a7c6];
                    } else if (0x0 === _0x52a7c6 && _0x4fbad4.flags & _0x3cde36.TRUN_FLAGS_FIRST_FLAG) {
                      _0x5989d9 = _0x4fbad4.first_sample_flags;
                    }
                    _0x3813c7.is_sync = !(_0x5989d9 >> 0x10 & 0x1);
                    _0x3813c7.is_leading = _0x5989d9 >> 0x1a & 0x3;
                    _0x3813c7.depends_on = _0x5989d9 >> 0x18 & 0x3;
                    _0x3813c7.is_depended_on = _0x5989d9 >> 0x16 & 0x3;
                    _0x3813c7.has_redundancy = _0x5989d9 >> 0x14 & 0x3;
                    _0x3813c7.degradation_priority = 0xffff & _0x5989d9;
                    var _0x1e68de;
                    var _0xce0d35 = !!(_0x12af46.tfhd.flags & _0x3cde36.TFHD_FLAG_BASE_DATA_OFFSET);
                    var _0x3ec614 = !!(_0x12af46.tfhd.flags & _0x3cde36.TFHD_FLAG_DEFAULT_BASE_IS_MOOF);
                    var _0x521953 = !!(_0x4fbad4.flags & _0x3cde36.TRUN_FLAGS_DATA_OFFSET);
                    _0x1e68de = _0xce0d35 ? _0x12af46.tfhd.base_data_offset : _0x3ec614 || 0x0 === _0x594405 ? _0x46d025.start : _0x253b8c;
                    _0x3813c7.offset = 0x0 === _0x594405 && 0x0 === _0x52a7c6 ? _0x521953 ? _0x1e68de + _0x4fbad4.data_offset : _0x1e68de : _0x253b8c;
                    _0x253b8c = _0x3813c7.offset + _0x3813c7.size;
                    if (_0x12af46.sbgps.length > 0x0 || _0x12af46.sgpds.length > 0x0 || _0x126f46.mdia.minf.stbl.sbgps.length > 0x0 || _0x126f46.mdia.minf.stbl.sgpds.length > 0x0) {
                      _0x290128.setSampleGroupProperties(_0x126f46, _0x3813c7, _0x3813c7.number_in_traf, _0x12af46.sample_groups_info);
                    }
                  }
                }
                if (_0x12af46.subs) {
                  _0x126f46.has_fragment_subsamples = true;
                  var _0x2501a5 = _0x12af46.first_sample_index;
                  for (_0x594405 = 0x0; _0x594405 < _0x12af46.subs.entries.length; _0x594405++) {
                    _0x2501a5 += _0x12af46.subs.entries[_0x594405].sample_delta;
                    (_0x3813c7 = _0x126f46.samples[_0x2501a5 - 0x1]).subsamples = _0x12af46.subs.entries[_0x594405].subsamples;
                  }
                }
              }
            }
          }
        }
      };
      _0x290128.prototype.getSample = function (_0x3a990b, _0x3b12b9) {
        var _0x43ac8d;
        var _0x442ea8 = _0x3a990b.samples[_0x3b12b9];
        if (!this.moov) {
          return null;
        }
        if (_0x442ea8.data) {
          if (_0x442ea8.alreadyRead == _0x442ea8.size) {
            return _0x442ea8;
          }
        } else {
          _0x442ea8.data = new Uint8Array(_0x442ea8.size);
          _0x442ea8.alreadyRead = 0x0;
          this.samplesDataSize += _0x442ea8.size;
          _0x3949d1.debug("ISOFile", "Allocating sample #" + _0x3b12b9 + " on track #" + _0x3a990b.tkhd.track_id + " of size " + _0x442ea8.size + " (total: " + this.samplesDataSize + ')');
        }
        for (;;) {
          var _0x3705aa = this.stream.findPosition(true, _0x442ea8.offset + _0x442ea8.alreadyRead, false);
          if (!(_0x3705aa > -0x1)) {
            return null;
          }
          var _0x4d76a2 = (_0x43ac8d = this.stream.buffers[_0x3705aa]).byteLength - (_0x442ea8.offset + _0x442ea8.alreadyRead - _0x43ac8d.fileStart);
          if (_0x442ea8.size - _0x442ea8.alreadyRead <= _0x4d76a2) {
            _0x3949d1.debug("ISOFile", "Getting sample #" + _0x3b12b9 + " data (alreadyRead: " + _0x442ea8.alreadyRead + " offset: " + (_0x442ea8.offset + _0x442ea8.alreadyRead - _0x43ac8d.fileStart) + " read size: " + (_0x442ea8.size - _0x442ea8.alreadyRead) + " full size: " + _0x442ea8.size + ')');
            _0x5a360b.memcpy(_0x442ea8.data.buffer, _0x442ea8.alreadyRead, _0x43ac8d, _0x442ea8.offset + _0x442ea8.alreadyRead - _0x43ac8d.fileStart, _0x442ea8.size - _0x442ea8.alreadyRead);
            _0x43ac8d.usedBytes += _0x442ea8.size - _0x442ea8.alreadyRead;
            this.stream.logBufferLevel();
            _0x442ea8.alreadyRead = _0x442ea8.size;
            return _0x442ea8;
          }
          if (0x0 === _0x4d76a2) {
            return null;
          }
          _0x3949d1.debug("ISOFile", "Getting sample #" + _0x3b12b9 + " partial data (alreadyRead: " + _0x442ea8.alreadyRead + " offset: " + (_0x442ea8.offset + _0x442ea8.alreadyRead - _0x43ac8d.fileStart) + " read size: " + _0x4d76a2 + " full size: " + _0x442ea8.size + ')');
          _0x5a360b.memcpy(_0x442ea8.data.buffer, _0x442ea8.alreadyRead, _0x43ac8d, _0x442ea8.offset + _0x442ea8.alreadyRead - _0x43ac8d.fileStart, _0x4d76a2);
          _0x442ea8.alreadyRead += _0x4d76a2;
          _0x43ac8d.usedBytes += _0x4d76a2;
          this.stream.logBufferLevel();
        }
      };
      _0x290128.prototype.releaseSample = function (_0x4ed2c6, _0x3f7b8b) {
        var _0x50fb0c = _0x4ed2c6.samples[_0x3f7b8b];
        return _0x50fb0c.data ? (this.samplesDataSize -= _0x50fb0c.size, _0x50fb0c.data = null, _0x50fb0c.alreadyRead = 0x0, _0x50fb0c.size) : 0x0;
      };
      _0x290128.prototype.getAllocatedSampleDataSize = function () {
        return this.samplesDataSize;
      };
      _0x290128.prototype.getCodecs = function () {
        var _0x271e6c;
        var _0xc37f1b = '';
        for (_0x271e6c = 0x0; _0x271e6c < this.moov.traks.length; _0x271e6c++) {
          if (_0x271e6c > 0x0) {
            _0xc37f1b += ',';
          }
          _0xc37f1b += this.moov.traks[_0x271e6c].mdia.minf.stbl.stsd.entries[0x0].getCodec();
        }
        return _0xc37f1b;
      };
      _0x290128.prototype.getTrexById = function (_0x5ac312) {
        var _0x52eb3e;
        if (!this.moov || !this.moov.mvex) {
          return null;
        }
        for (_0x52eb3e = 0x0; _0x52eb3e < this.moov.mvex.trexs.length; _0x52eb3e++) {
          var _0x3d67bc = this.moov.mvex.trexs[_0x52eb3e];
          if (_0x3d67bc.track_id == _0x5ac312) {
            return _0x3d67bc;
          }
        }
        return null;
      };
      _0x290128.prototype.getTrackById = function (_0x164119) {
        if (undefined === this.moov) {
          return null;
        }
        for (var _0x23d126 = 0x0; _0x23d126 < this.moov.traks.length; _0x23d126++) {
          var _0x472693 = this.moov.traks[_0x23d126];
          if (_0x472693.tkhd.track_id == _0x164119) {
            return _0x472693;
          }
        }
        return null;
      };
      _0x290128.prototype.items = [];
      _0x290128.prototype.itemsDataSize = 0x0;
      _0x290128.prototype.flattenItemInfo = function () {
        var _0x15d763;
        var _0x2a69eb;
        var _0x504473;
        var _0x431f7f = this.items;
        var _0x415846 = this.meta;
        if (null != _0x415846 && undefined !== _0x415846.hdlr && undefined !== _0x415846.iinf) {
          for (_0x15d763 = 0x0; _0x15d763 < _0x415846.iinf.item_infos.length; _0x15d763++) {
            (_0x504473 = {}).id = _0x415846.iinf.item_infos[_0x15d763].item_ID;
            _0x431f7f[_0x504473.id] = _0x504473;
            _0x504473.ref_to = [];
            _0x504473.name = _0x415846.iinf.item_infos[_0x15d763].item_name;
            if (_0x415846.iinf.item_infos[_0x15d763].protection_index > 0x0) {
              _0x504473.protection = _0x415846.ipro.protections[_0x415846.iinf.item_infos[_0x15d763].protection_index - 0x1];
            }
            if (_0x415846.iinf.item_infos[_0x15d763].item_type) {
              _0x504473.type = _0x415846.iinf.item_infos[_0x15d763].item_type;
            } else {
              _0x504473.type = "mime";
            }
            _0x504473.content_type = _0x415846.iinf.item_infos[_0x15d763].content_type;
            _0x504473.content_encoding = _0x415846.iinf.item_infos[_0x15d763].content_encoding;
          }
          if (_0x415846.iloc) {
            for (_0x15d763 = 0x0; _0x15d763 < _0x415846.iloc.items.length; _0x15d763++) {
              var _0x2763e2 = _0x415846.iloc.items[_0x15d763];
              _0x504473 = _0x431f7f[_0x2763e2.item_ID];
              if (0x0 !== _0x2763e2.data_reference_index) {
                _0x3949d1.warn("Item storage with reference to other files: not supported");
                _0x504473.source = _0x415846.dinf.boxes[_0x2763e2.data_reference_index - 0x1];
              }
              switch (_0x2763e2.construction_method) {
                case 0x0:
                  break;
                case 0x1:
                case 0x2:
                  _0x3949d1.warn("Item storage with construction_method : not supported");
              }
              _0x504473.extents = [];
              _0x504473.size = 0x0;
              for (_0x2a69eb = 0x0; _0x2a69eb < _0x2763e2.extents.length; _0x2a69eb++) {
                _0x504473.extents[_0x2a69eb] = {};
                _0x504473.extents[_0x2a69eb].offset = _0x2763e2.extents[_0x2a69eb].extent_offset + _0x2763e2.base_offset;
                _0x504473.extents[_0x2a69eb].length = _0x2763e2.extents[_0x2a69eb].extent_length;
                _0x504473.extents[_0x2a69eb].alreadyRead = 0x0;
                _0x504473.size += _0x504473.extents[_0x2a69eb].length;
              }
            }
          }
          if (_0x415846.pitm) {
            _0x431f7f[_0x415846.pitm.item_id].primary = true;
          }
          if (_0x415846.iref) {
            for (_0x15d763 = 0x0; _0x15d763 < _0x415846.iref.references.length; _0x15d763++) {
              var _0x26bf40 = _0x415846.iref.references[_0x15d763];
              for (_0x2a69eb = 0x0; _0x2a69eb < _0x26bf40.references.length; _0x2a69eb++) {
                _0x431f7f[_0x26bf40.from_item_ID].ref_to.push({
                  'type': _0x26bf40.type,
                  'id': _0x26bf40.references[_0x2a69eb]
                });
              }
            }
          }
          if (_0x415846.iprp) {
            for (var _0x3fdc88 = 0x0; _0x3fdc88 < _0x415846.iprp.ipmas.length; _0x3fdc88++) {
              var _0x39da1c = _0x415846.iprp.ipmas[_0x3fdc88];
              for (_0x15d763 = 0x0; _0x15d763 < _0x39da1c.associations.length; _0x15d763++) {
                var _0x37c1b5 = _0x39da1c.associations[_0x15d763];
                if (undefined === (_0x504473 = _0x431f7f[_0x37c1b5.id]).properties) {
                  _0x504473.properties = {};
                  _0x504473.properties.boxes = [];
                }
                for (_0x2a69eb = 0x0; _0x2a69eb < _0x37c1b5.props.length; _0x2a69eb++) {
                  var _0x4379b2 = _0x37c1b5.props[_0x2a69eb];
                  if (_0x4379b2.property_index > 0x0 && _0x4379b2.property_index - 0x1 < _0x415846.iprp.ipco.boxes.length) {
                    var _0x3cf729 = _0x415846.iprp.ipco.boxes[_0x4379b2.property_index - 0x1];
                    _0x504473.properties[_0x3cf729.type] = _0x3cf729;
                    _0x504473.properties.boxes.push(_0x3cf729);
                  }
                }
              }
            }
          }
        }
      };
      _0x290128.prototype.getItem = function (_0x2ae475) {
        var _0x1dc663;
        var _0x587c8e;
        if (!this.meta) {
          return null;
        }
        if (!(_0x587c8e = this.items[_0x2ae475]).data && _0x587c8e.size) {
          _0x587c8e.data = new Uint8Array(_0x587c8e.size);
          _0x587c8e.alreadyRead = 0x0;
          this.itemsDataSize += _0x587c8e.size;
          _0x3949d1.debug("ISOFile", "Allocating item #" + _0x2ae475 + " of size " + _0x587c8e.size + " (total: " + this.itemsDataSize + ')');
        } else {
          if (_0x587c8e.alreadyRead === _0x587c8e.size) {
            return _0x587c8e;
          }
        }
        for (var _0x5c39d7 = 0x0; _0x5c39d7 < _0x587c8e.extents.length; _0x5c39d7++) {
          var _0x3ed1d4 = _0x587c8e.extents[_0x5c39d7];
          if (_0x3ed1d4.alreadyRead !== _0x3ed1d4.length) {
            var _0x14b46d = this.stream.findPosition(true, _0x3ed1d4.offset + _0x3ed1d4.alreadyRead, false);
            if (!(_0x14b46d > -0x1)) {
              return null;
            }
            var _0x36b418 = (_0x1dc663 = this.stream.buffers[_0x14b46d]).byteLength - (_0x3ed1d4.offset + _0x3ed1d4.alreadyRead - _0x1dc663.fileStart);
            if (!(_0x3ed1d4.length - _0x3ed1d4.alreadyRead <= _0x36b418)) {
              _0x3949d1.debug("ISOFile", "Getting item #" + _0x2ae475 + " extent #" + _0x5c39d7 + " partial data (alreadyRead: " + _0x3ed1d4.alreadyRead + " offset: " + (_0x3ed1d4.offset + _0x3ed1d4.alreadyRead - _0x1dc663.fileStart) + " read size: " + _0x36b418 + " full extent size: " + _0x3ed1d4.length + " full item size: " + _0x587c8e.size + ')');
              _0x5a360b.memcpy(_0x587c8e.data.buffer, _0x587c8e.alreadyRead, _0x1dc663, _0x3ed1d4.offset + _0x3ed1d4.alreadyRead - _0x1dc663.fileStart, _0x36b418);
              _0x3ed1d4.alreadyRead += _0x36b418;
              _0x587c8e.alreadyRead += _0x36b418;
              _0x1dc663.usedBytes += _0x36b418;
              this.stream.logBufferLevel();
              return null;
            }
            _0x3949d1.debug("ISOFile", "Getting item #" + _0x2ae475 + " extent #" + _0x5c39d7 + " data (alreadyRead: " + _0x3ed1d4.alreadyRead + " offset: " + (_0x3ed1d4.offset + _0x3ed1d4.alreadyRead - _0x1dc663.fileStart) + " read size: " + (_0x3ed1d4.length - _0x3ed1d4.alreadyRead) + " full extent size: " + _0x3ed1d4.length + " full item size: " + _0x587c8e.size + ')');
            _0x5a360b.memcpy(_0x587c8e.data.buffer, _0x587c8e.alreadyRead, _0x1dc663, _0x3ed1d4.offset + _0x3ed1d4.alreadyRead - _0x1dc663.fileStart, _0x3ed1d4.length - _0x3ed1d4.alreadyRead);
            _0x1dc663.usedBytes += _0x3ed1d4.length - _0x3ed1d4.alreadyRead;
            this.stream.logBufferLevel();
            _0x587c8e.alreadyRead += _0x3ed1d4.length - _0x3ed1d4.alreadyRead;
            _0x3ed1d4.alreadyRead = _0x3ed1d4.length;
          }
        }
        return _0x587c8e.alreadyRead === _0x587c8e.size ? _0x587c8e : null;
      };
      _0x290128.prototype.releaseItem = function (_0x20eda2) {
        var _0x3cd6b2 = this.items[_0x20eda2];
        if (_0x3cd6b2.data) {
          this.itemsDataSize -= _0x3cd6b2.size;
          _0x3cd6b2.data = null;
          _0x3cd6b2.alreadyRead = 0x0;
          for (var _0x1e1a98 = 0x0; _0x1e1a98 < _0x3cd6b2.extents.length; _0x1e1a98++) {
            _0x3cd6b2.extents[_0x1e1a98].alreadyRead = 0x0;
          }
          return _0x3cd6b2.size;
        }
        return 0x0;
      };
      _0x290128.prototype.processItems = function (_0x2ea084) {
        for (var _0x2fce7e in this.items) {
          var _0x33f671 = this.items[_0x2fce7e];
          this.getItem(_0x33f671.id);
          if (_0x2ea084 && !_0x33f671.sent) {
            _0x2ea084(_0x33f671);
            _0x33f671.sent = true;
            _0x33f671.data = null;
          }
        }
      };
      _0x290128.prototype.hasItem = function (_0xe37c4) {
        for (var _0x16e83e in this.items) {
          var _0xab5c2c = this.items[_0x16e83e];
          if (_0xab5c2c.name === _0xe37c4) {
            return _0xab5c2c.id;
          }
        }
        return -0x1;
      };
      _0x290128.prototype.getMetaHandler = function () {
        return this.meta ? this.meta.hdlr.handler : null;
      };
      _0x290128.prototype.getPrimaryItem = function () {
        return this.meta && this.meta.pitm ? this.getItem(this.meta.pitm.item_id) : null;
      };
      _0x290128.prototype.itemToFragmentedTrackFile = function (_0x358648) {
        var _0x52a5c1;
        var _0x537fc0 = _0x358648 || {};
        if (null == (_0x52a5c1 = _0x537fc0.itemId ? this.getItem(_0x537fc0.itemId) : this.getPrimaryItem())) {
          return null;
        }
        var _0x26f24a = new _0x290128();
        _0x26f24a.discardMdatData = false;
        var _0x32d7c3 = {
          "type": _0x52a5c1.type,
          description_boxes: _0x52a5c1.properties.boxes
        };
        if (_0x52a5c1.properties.ispe) {
          _0x32d7c3.width = _0x52a5c1.properties.ispe.image_width;
          _0x32d7c3.height = _0x52a5c1.properties.ispe.image_height;
        }
        var _0x15d00c = _0x26f24a.addTrack(_0x32d7c3);
        return _0x15d00c ? (_0x26f24a.addSample(_0x15d00c, _0x52a5c1.data), _0x26f24a) : null;
      };
      _0x290128.prototype.write = function (_0x37aa32) {
        for (var _0xca6e50 = 0x0; _0xca6e50 < this.boxes.length; _0xca6e50++) {
          this.boxes[_0xca6e50].write(_0x37aa32);
        }
      };
      _0x290128.prototype.createFragment = function (_0x4bfd48, _0x4c6c62, _0x564020) {
        var _0x8a2d10 = this.getTrackById(_0x4bfd48);
        var _0x3ac1f9 = this.getSample(_0x8a2d10, _0x4c6c62);
        if (null == _0x3ac1f9) {
          _0x3ac1f9 = _0x8a2d10.samples[_0x4c6c62];
          if (this.nextSeekPosition) {
            this.nextSeekPosition = Math.min(_0x3ac1f9.offset + _0x3ac1f9.alreadyRead, this.nextSeekPosition);
          } else {
            this.nextSeekPosition = _0x8a2d10.samples[_0x4c6c62].offset + _0x3ac1f9.alreadyRead;
          }
          return null;
        }
        var _0x5052d3 = _0x564020 || new _0x5a360b();
        _0x5052d3.endianness = _0x5a360b.BIG_ENDIAN;
        var _0x41177c = this.createSingleSampleMoof(_0x3ac1f9);
        _0x41177c.write(_0x5052d3);
        _0x41177c.trafs[0x0].truns[0x0].data_offset = _0x41177c.size + 0x8;
        _0x3949d1.debug("MP4Box", "Adjusting data_offset with new value " + _0x41177c.trafs[0x0].truns[0x0].data_offset);
        _0x5052d3.adjustUint32(_0x41177c.trafs[0x0].truns[0x0].data_offset_position, _0x41177c.trafs[0x0].truns[0x0].data_offset);
        var _0x41e79a = new _0x3cde36.mdatBox();
        _0x41e79a.data = _0x3ac1f9.data;
        _0x41e79a.write(_0x5052d3);
        return _0x5052d3;
      };
      _0x290128.writeInitializationSegment = function (_0xc853e0, _0xb10480, _0x16d13f, _0x327eac) {
        var _0x12f683;
        _0x3949d1.debug("ISOFile", "Generating initialization segment");
        var _0x366ea6 = new _0x5a360b();
        _0x366ea6.endianness = _0x5a360b.BIG_ENDIAN;
        _0xc853e0.write(_0x366ea6);
        var _0x3096ff = _0xb10480.add("mvex");
        if (_0x16d13f) {
          _0x3096ff.add('mehd').set("fragment_duration", _0x16d13f);
        }
        for (_0x12f683 = 0x0; _0x12f683 < _0xb10480.traks.length; _0x12f683++) {
          _0x3096ff.add('trex').set('track_id', _0xb10480.traks[_0x12f683].tkhd.track_id).set("default_sample_description_index", 0x1).set("default_sample_duration", _0x327eac).set("default_sample_size", 0x0).set("default_sample_flags", 0x10000);
        }
        _0xb10480.write(_0x366ea6);
        return _0x366ea6.buffer;
      };
      _0x290128.prototype.save = function (_0x131f07) {
        var _0x5826b8 = new _0x5a360b();
        _0x5826b8.endianness = _0x5a360b.BIG_ENDIAN;
        this.write(_0x5826b8);
        _0x5826b8.save(_0x131f07);
      };
      _0x290128.prototype.getBuffer = function () {
        var _0x3e48fa = new _0x5a360b();
        _0x3e48fa.endianness = _0x5a360b.BIG_ENDIAN;
        this.write(_0x3e48fa);
        return _0x3e48fa.buffer;
      };
      _0x290128.prototype.initializeSegmentation = function () {
        var _0x2f0d8d;
        var _0x259b4a;
        var _0x8cf52f;
        var _0x2672ea;
        if (null === this.onSegment) {
          _0x3949d1.warn('MP4Box', "No segmentation callback set!");
        }
        if (!this.isFragmentationInitialized) {
          this.isFragmentationInitialized = true;
          this.nextMoofNumber = 0x0;
          this.resetTables();
        }
        _0x259b4a = [];
        for (_0x2f0d8d = 0x0; _0x2f0d8d < this.fragmentedTracks.length; _0x2f0d8d++) {
          var _0x9d984e = new _0x3cde36.moovBox();
          _0x9d984e.mvhd = this.moov.mvhd;
          _0x9d984e.boxes.push(_0x9d984e.mvhd);
          _0x8cf52f = this.getTrackById(this.fragmentedTracks[_0x2f0d8d].id);
          _0x9d984e.boxes.push(_0x8cf52f);
          _0x9d984e.traks.push(_0x8cf52f);
          (_0x2672ea = {}).id = _0x8cf52f.tkhd.track_id;
          _0x2672ea.user = this.fragmentedTracks[_0x2f0d8d].user;
          _0x2672ea.buffer = _0x290128.writeInitializationSegment(this.ftyp, _0x9d984e, this.moov.mvex && this.moov.mvex.mehd ? this.moov.mvex.mehd.fragment_duration : undefined, this.moov.traks[_0x2f0d8d].samples.length > 0x0 ? this.moov.traks[_0x2f0d8d].samples[0x0].duration : 0x0);
          _0x259b4a.push(_0x2672ea);
        }
        return _0x259b4a;
      };
      _0x3cde36.Box.prototype.printHeader = function (_0x2c20e8) {
        this.size += 0x8;
        if (this.size > _0x45f206) {
          this.size += 0x8;
        }
        if ("uuid" === this.type) {
          this.size += 0x10;
        }
        _0x2c20e8.log(_0x2c20e8.indent + 'size:' + this.size);
        _0x2c20e8.log(_0x2c20e8.indent + "type:" + this.type);
      };
      _0x3cde36.FullBox.prototype.printHeader = function (_0x4488e7) {
        this.size += 0x4;
        _0x3cde36.Box.prototype.printHeader.call(this, _0x4488e7);
        _0x4488e7.log(_0x4488e7.indent + "version:" + this.version);
        _0x4488e7.log(_0x4488e7.indent + "flags:" + this.flags);
      };
      _0x3cde36.Box.prototype.print = function (_0x439acd) {
        this.printHeader(_0x439acd);
      };
      _0x3cde36.ContainerBox.prototype.print = function (_0x1f712a) {
        this.printHeader(_0x1f712a);
        for (var _0x2a1021 = 0x0; _0x2a1021 < this.boxes.length; _0x2a1021++) {
          if (this.boxes[_0x2a1021]) {
            var _0x3ee34e = _0x1f712a.indent;
            _0x1f712a.indent += " ";
            this.boxes[_0x2a1021].print(_0x1f712a);
            _0x1f712a.indent = _0x3ee34e;
          }
        }
      };
      _0x290128.prototype.print = function (_0x309208) {
        _0x309208.indent = '';
        for (var _0x4b8184 = 0x0; _0x4b8184 < this.boxes.length; _0x4b8184++) {
          if (this.boxes[_0x4b8184]) {
            this.boxes[_0x4b8184].print(_0x309208);
          }
        }
      };
      _0x3cde36.mvhdBox.prototype.print = function (_0x2c30f7) {
        _0x3cde36.FullBox.prototype.printHeader.call(this, _0x2c30f7);
        _0x2c30f7.log(_0x2c30f7.indent + "creation_time: " + this.creation_time);
        _0x2c30f7.log(_0x2c30f7.indent + "modification_time: " + this.modification_time);
        _0x2c30f7.log(_0x2c30f7.indent + "timescale: " + this.timescale);
        _0x2c30f7.log(_0x2c30f7.indent + "duration: " + this.duration);
        _0x2c30f7.log(_0x2c30f7.indent + "rate: " + this.rate);
        _0x2c30f7.log(_0x2c30f7.indent + "volume: " + (this.volume >> 0x8));
        _0x2c30f7.log(_0x2c30f7.indent + "matrix: " + this.matrix.join(", "));
        _0x2c30f7.log(_0x2c30f7.indent + "next_track_id: " + this.next_track_id);
      };
      _0x3cde36.tkhdBox.prototype.print = function (_0x749e98) {
        _0x3cde36.FullBox.prototype.printHeader.call(this, _0x749e98);
        _0x749e98.log(_0x749e98.indent + "creation_time: " + this.creation_time);
        _0x749e98.log(_0x749e98.indent + "modification_time: " + this.modification_time);
        _0x749e98.log(_0x749e98.indent + "track_id: " + this.track_id);
        _0x749e98.log(_0x749e98.indent + "duration: " + this.duration);
        _0x749e98.log(_0x749e98.indent + "volume: " + (this.volume >> 0x8));
        _0x749e98.log(_0x749e98.indent + "matrix: " + this.matrix.join(", "));
        _0x749e98.log(_0x749e98.indent + "layer: " + this.layer);
        _0x749e98.log(_0x749e98.indent + "alternate_group: " + this.alternate_group);
        _0x749e98.log(_0x749e98.indent + "width: " + this.width);
        _0x749e98.log(_0x749e98.indent + "height: " + this.height);
      };
      var _0x2100a5 = function (_0x4fc337, _0x3b4df0) {
        var _0x600b9 = undefined === _0x4fc337 || _0x4fc337;
        var _0x124edd = new _0x290128(_0x3b4df0);
        _0x124edd.discardMdatData = !_0x600b9;
        return _0x124edd;
      };
      _0x4e1140.createFile = _0x2100a5;
    },
    0x19b9: _0x17ee3c => {
      function _0x2ed550(_0x2c5a29, _0x489a66, _0x20c5f2, _0xe2f4af) {
        var _0xb8230e = _0x489a66 >= 1.5 * _0x20c5f2;
        return Math.round(_0x2c5a29 / _0x20c5f2) + " " + _0xe2f4af + (_0xb8230e ? 's' : '');
      }
      _0x17ee3c.exports = function (_0x409bfb, _0x29fa00) {
        _0x29fa00 = _0x29fa00 || {};
        var _0x2b6d28;
        var _0x16bcb4;
        var _0x783ea8 = typeof _0x409bfb;
        if ('string' === _0x783ea8 && _0x409bfb.length > 0x0) {
          return function (_0x2a1445) {
            if (!((_0x2a1445 = String(_0x2a1445)).length > 0x64)) {
              var _0x451f70 = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(_0x2a1445);
              if (_0x451f70) {
                var _0x39c2c6 = parseFloat(_0x451f70[0x1]);
                switch ((_0x451f70[0x2] || 'ms').toLowerCase()) {
                  case "years":
                  case "year":
                  case "yrs":
                  case 'yr':
                  case 'y':
                    return 0x758fac300 * _0x39c2c6;
                  case "weeks":
                  case "week":
                  case 'w':
                    return _0x39c2c6 * 604800000;
                  case 'days':
                  case "day":
                  case 'd':
                    return _0x39c2c6 * 86400000;
                  case "hours":
                  case "hour":
                  case "hrs":
                  case 'hr':
                  case 'h':
                    return _0x39c2c6 * 3600000;
                  case 'minutes':
                  case "minute":
                  case 'mins':
                  case "min":
                  case 'm':
                    return _0x39c2c6 * 60000;
                  case "seconds":
                  case 'second':
                  case "secs":
                  case "sec":
                  case 's':
                    return _0x39c2c6 * 0x3e8;
                  case "milliseconds":
                  case "millisecond":
                  case "msecs":
                  case "msec":
                  case 'ms':
                    return _0x39c2c6;
                  default:
                    return;
                }
              }
            }
          }(_0x409bfb);
        }
        if ("number" === _0x783ea8 && isFinite(_0x409bfb)) {
          return _0x29fa00.long ? (_0x2b6d28 = _0x409bfb, (_0x16bcb4 = Math.abs(_0x2b6d28)) >= 86400000 ? _0x2ed550(_0x2b6d28, _0x16bcb4, 86400000, "day") : _0x16bcb4 >= 3600000 ? _0x2ed550(_0x2b6d28, _0x16bcb4, 3600000, 'hour') : _0x16bcb4 >= 60000 ? _0x2ed550(_0x2b6d28, _0x16bcb4, 60000, "minute") : _0x16bcb4 >= 0x3e8 ? _0x2ed550(_0x2b6d28, _0x16bcb4, 0x3e8, "second") : _0x2b6d28 + " ms") : function (_0x3cdbda) {
            var _0x3ecd40 = Math.abs(_0x3cdbda);
            return _0x3ecd40 >= 86400000 ? Math.round(_0x3cdbda / 86400000) + 'd' : _0x3ecd40 >= 3600000 ? Math.round(_0x3cdbda / 3600000) + 'h' : _0x3ecd40 >= 60000 ? Math.round(_0x3cdbda / 60000) + 'm' : _0x3ecd40 >= 0x3e8 ? Math.round(_0x3cdbda / 0x3e8) + 's' : _0x3cdbda + 'ms';
          }(_0x409bfb);
        }
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(_0x409bfb));
      };
    },
    0x15e6: _0x2ac1b2 => {
      var _0x3d4a39;
      var _0x3b1875;
      var _0x24383e = _0x2ac1b2.exports = {};
      function _0x38de28() {
        throw new Error("setTimeout has not been defined");
      }
      function _0x11373b() {
        throw new Error("clearTimeout has not been defined");
      }
      function _0x1a304c(_0x302527) {
        if (_0x3d4a39 === setTimeout) {
          return setTimeout(_0x302527, 0x0);
        }
        if ((_0x3d4a39 === _0x38de28 || !_0x3d4a39) && setTimeout) {
          _0x3d4a39 = setTimeout;
          return setTimeout(_0x302527, 0x0);
        }
        try {
          return _0x3d4a39(_0x302527, 0x0);
        } catch (_0x553b38) {
          try {
            return _0x3d4a39.call(null, _0x302527, 0x0);
          } catch (_0x4912a6) {
            return _0x3d4a39.call(this, _0x302527, 0x0);
          }
        }
      }
      !function () {
        try {
          _0x3d4a39 = "function" == typeof setTimeout ? setTimeout : _0x38de28;
        } catch (_0x4f5eb2) {
          _0x3d4a39 = _0x38de28;
        }
        try {
          _0x3b1875 = "function" == typeof clearTimeout ? clearTimeout : _0x11373b;
        } catch (_0x3e893c) {
          _0x3b1875 = _0x11373b;
        }
      }();
      var _0x22df73;
      var _0xbed659 = [];
      var _0x9d19f = false;
      var _0x1aa9b6 = -0x1;
      function _0x5de662() {
        if (_0x9d19f && _0x22df73) {
          _0x9d19f = false;
          if (_0x22df73.length) {
            _0xbed659 = _0x22df73.concat(_0xbed659);
          } else {
            _0x1aa9b6 = -0x1;
          }
          if (_0xbed659.length) {
            _0x86029();
          }
        }
      }
      function _0x86029() {
        if (!_0x9d19f) {
          var _0x19d3d6 = _0x1a304c(_0x5de662);
          _0x9d19f = true;
          for (var _0xdaeb33 = _0xbed659.length; _0xdaeb33;) {
            _0x22df73 = _0xbed659;
            for (_0xbed659 = []; ++_0x1aa9b6 < _0xdaeb33;) {
              if (_0x22df73) {
                _0x22df73[_0x1aa9b6].run();
              }
            }
            _0x1aa9b6 = -0x1;
            _0xdaeb33 = _0xbed659.length;
          }
          _0x22df73 = null;
          _0x9d19f = false;
          (function (_0x36cbd2) {
            if (_0x3b1875 === clearTimeout) {
              return clearTimeout(_0x36cbd2);
            }
            if ((_0x3b1875 === _0x11373b || !_0x3b1875) && clearTimeout) {
              _0x3b1875 = clearTimeout;
              return clearTimeout(_0x36cbd2);
            }
            try {
              return _0x3b1875(_0x36cbd2);
            } catch (_0x3a4f86) {
              try {
                return _0x3b1875.call(null, _0x36cbd2);
              } catch (_0x5ab9eb) {
                return _0x3b1875.call(this, _0x36cbd2);
              }
            }
          })(_0x19d3d6);
        }
      }
      function _0xa66e36(_0x3ca986, _0x408cd9) {
        this.fun = _0x3ca986;
        this.array = _0x408cd9;
      }
      function _0x50e4cf() {}
      _0x24383e.nextTick = function (_0x11aa9c) {
        var _0x23414e = new Array(arguments.length - 0x1);
        if (arguments.length > 0x1) {
          for (var _0x124452 = 0x1; _0x124452 < arguments.length; _0x124452++) {
            _0x23414e[_0x124452 - 0x1] = arguments[_0x124452];
          }
        }
        _0xbed659.push(new _0xa66e36(_0x11aa9c, _0x23414e));
        if (!(0x1 !== _0xbed659.length || _0x9d19f)) {
          _0x1a304c(_0x86029);
        }
      };
      _0xa66e36.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      _0x24383e.title = "browser";
      _0x24383e.browser = true;
      _0x24383e.env = {};
      _0x24383e.argv = [];
      _0x24383e.version = '';
      _0x24383e.versions = {};
      _0x24383e.on = _0x50e4cf;
      _0x24383e.addListener = _0x50e4cf;
      _0x24383e.once = _0x50e4cf;
      _0x24383e.off = _0x50e4cf;
      _0x24383e.removeListener = _0x50e4cf;
      _0x24383e.removeAllListeners = _0x50e4cf;
      _0x24383e.emit = _0x50e4cf;
      _0x24383e.prependListener = _0x50e4cf;
      _0x24383e.prependOnceListener = _0x50e4cf;
      _0x24383e.listeners = function (_0x33c1c6) {
        return [];
      };
      _0x24383e.binding = function (_0x440187) {
        throw new Error("process.binding is not supported");
      };
      _0x24383e.cwd = function () {
        return '/';
      };
      _0x24383e.chdir = function (_0x13b9d6) {
        throw new Error("process.chdir is not supported");
      };
      _0x24383e.umask = function () {
        return 0x0;
      };
    },
    0x257c: (_0x433b84, _0x36b31f, _0x3b511d) => {
      let _0x18eacd;
      _0x433b84.exports = "function" == typeof queueMicrotask ? queueMicrotask.bind('undefined' != typeof window ? window : _0x3b511d.g) : _0x5e410f => (_0x18eacd || (_0x18eacd = Promise.resolve())).then(_0x5e410f)["catch"](_0x236b7c => setTimeout(() => {
        throw _0x236b7c;
      }, 0x0));
    },
    0x16c0: (_0x433c42, _0x595c53, _0xd4a7db) => {
      'use strict';

      _0x433c42.exports = _0xd4a7db(0xccc);
    },
    0x769: (_0x5f707b, _0x1673d7, _0x78c778) => {
      'use strict';

      var _0x32ec56;
      var _0x218554;
      var _0x5a0467;
      var _0x28c78 = _0x78c778(0x5ac);
      function _0x507109() {
        _0x5a0467 = false;
      }
      function _0x16c682(_0x2637a5) {
        if (_0x2637a5) {
          if (_0x2637a5 !== _0x32ec56) {
            if (_0x2637a5.length !== "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-".length) {
              throw new Error("Custom alphabet for shortid must be " + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-".length + " unique characters. You submitted " + _0x2637a5.length + " characters: " + _0x2637a5);
            }
            var _0x2e054f = _0x2637a5.split('').filter(function (_0x375522, _0x1fc297, _0x3b963d) {
              return _0x1fc297 !== _0x3b963d.lastIndexOf(_0x375522);
            });
            if (_0x2e054f.length) {
              throw new Error("Custom alphabet for shortid must be " + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-".length + " unique characters. These characters were not unique: " + _0x2e054f.join(", "));
            }
            _0x32ec56 = _0x2637a5;
            _0x507109();
          }
        } else if (_0x32ec56 !== "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-") {
          _0x32ec56 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
          _0x507109();
        }
      }
      function _0x23e9c8() {
        return _0x5a0467 || (_0x5a0467 = function () {
          if (!_0x32ec56) {
            _0x16c682("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-");
          }
          var _0x420884;
          var _0x25beb8 = _0x32ec56.split('');
          var _0x4944bc = [];
          for (var _0x261436 = _0x28c78.nextValue(); _0x25beb8.length > 0x0;) {
            _0x261436 = _0x28c78.nextValue();
            _0x420884 = Math.floor(_0x261436 * _0x25beb8.length);
            _0x4944bc.push(_0x25beb8.splice(_0x420884, 0x1)[0x0]);
          }
          return _0x4944bc.join('');
        }());
      }
      _0x5f707b.exports = {
        'get': function () {
          return _0x32ec56 || "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
        },
        'characters': function (_0x1e67ce) {
          _0x16c682(_0x1e67ce);
          return _0x32ec56;
        },
        'seed': function (_0x189a0f) {
          _0x28c78.seed(_0x189a0f);
          if (_0x218554 !== _0x189a0f) {
            _0x507109();
            _0x218554 = _0x189a0f;
          }
        },
        'lookup': function (_0x39841e) {
          return _0x23e9c8()[_0x39841e];
        },
        'shuffled': _0x23e9c8
      };
    },
    0x1ac4: (_0x233e0a, _0x46fc9d, _0x265c91) => {
      'use strict';

      var _0x563feb;
      var _0x169b16;
      var _0x54e239 = _0x265c91(0x1641);
      _0x265c91(0x769);
      _0x233e0a.exports = function (_0x480ca8) {
        var _0x197934 = '';
        var _0x4bc6b6 = Math.floor(0.001 * (Date.now() - 0x16d05594f0e));
        if (_0x4bc6b6 === _0x169b16) {
          _0x563feb++;
        } else {
          _0x563feb = 0x0;
          _0x169b16 = _0x4bc6b6;
        }
        _0x197934 += _0x54e239(0x7);
        _0x197934 += _0x54e239(_0x480ca8);
        if (_0x563feb > 0x0) {
          _0x197934 += _0x54e239(_0x563feb);
        }
        return _0x197934 + _0x54e239(_0x4bc6b6);
      };
    },
    0x1641: (_0x5cff73, _0x5545c2, _0x2baa82) => {
      'use strict';

      var _0x40c6ef = _0x2baa82(0x769);
      var _0x109504 = _0x2baa82(0xa63);
      var _0x260bcb = _0x2baa82(0x10e9).NM;
      _0x5cff73.exports = function (_0x3bacb7) {
        var _0x5fb79c;
        var _0x1b9938 = 0x0;
        for (var _0x3df634 = ''; !_0x5fb79c;) {
          _0x3df634 += _0x260bcb(_0x40c6ef.get(), 0x1, _0x109504)();
          _0x5fb79c = _0x3bacb7 < Math.pow(0x10, _0x1b9938 + 0x1);
          _0x1b9938++;
        }
        return _0x3df634;
      };
    },
    0xccc: (_0x51e0b7, _0x51114c, _0x5481fd) => {
      'use strict';

      var _0x1ecb8a = _0x5481fd(0x769);
      var _0xe56699 = _0x5481fd(0x1ac4);
      var _0x298c7c = _0x5481fd(0x22c9);
      var _0x5e0b86 = _0x5481fd(0x10a7) || 0x0;
      function _0x58120c() {
        return _0xe56699(_0x5e0b86);
      }
      _0x51e0b7.exports = _0x58120c;
      _0x51e0b7.exports.generate = _0x58120c;
      _0x51e0b7.exports.seed = function (_0x4baa99) {
        _0x1ecb8a.seed(_0x4baa99);
        return _0x51e0b7.exports;
      };
      _0x51e0b7.exports.worker = function (_0x4b016) {
        _0x5e0b86 = _0x4b016;
        return _0x51e0b7.exports;
      };
      _0x51e0b7.exports.characters = function (_0x48ef76) {
        if (undefined !== _0x48ef76) {
          _0x1ecb8a.characters(_0x48ef76);
        }
        return _0x1ecb8a.shuffled();
      };
      _0x51e0b7.exports.isValid = _0x298c7c;
    },
    0x22c9: (_0x4be115, _0x55b18e, _0x555a31) => {
      'use strict';

      var _0x1191ea = _0x555a31(0x769);
      _0x4be115.exports = function (_0x2dd7f6) {
        return !(!_0x2dd7f6 || "string" != typeof _0x2dd7f6 || _0x2dd7f6.length < 0x6 || new RegExp('[^' + _0x1191ea.get().replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&") + ']').test(_0x2dd7f6));
      };
    },
    0xa63: _0x187270 => {
      'use strict';

      var _0x29535e;
      var _0x3b0278 = "object" == typeof window && (window.crypto || window.msCrypto);
      _0x29535e = _0x3b0278 && _0x3b0278.getRandomValues ? function (_0x71235a) {
        return _0x3b0278.getRandomValues(new Uint8Array(_0x71235a));
      } : function (_0x507586) {
        var _0x5d59cd = [];
        for (var _0x48d403 = 0x0; _0x48d403 < _0x507586; _0x48d403++) {
          _0x5d59cd.push(Math.floor(0x100 * Math.random()));
        }
        return _0x5d59cd;
      };
      _0x187270.exports = _0x29535e;
    },
    0x5ac: _0x39a6f4 => {
      'use strict';

      var _0x551561 = 0x1;
      _0x39a6f4.exports = {
        'nextValue': function () {
          return (_0x551561 = (0x2455 * _0x551561 + 0xc091) % 0x38f40) / 0x38f40;
        },
        'seed': function (_0xf405e) {
          _0x551561 = _0xf405e;
        }
      };
    },
    0x10a7: _0x5ac161 => {
      'use strict';

      _0x5ac161.exports = 0x0;
    },
    0x40b: _0x1a955c => {
      _0x1a955c.exports = function (_0x418f19) {
        const _0x295dcc = +Date.now();
        const _0x184bf5 = 0xa * (_0x418f19 || 0x5);
        const _0x3155b0 = [0x0];
        let _0x1d9404 = 0x1;
        let _0x5bb08e = ((+Date.now() - _0x295dcc) / 0x64 & 0xffff) - 0x1 & 0xffff;
        return function (_0x575a8a) {
          const _0x30e165 = (+Date.now() - _0x295dcc) / 0x64 & 0xffff;
          let _0x257fe8 = _0x30e165 - _0x5bb08e & 0xffff;
          if (_0x257fe8 > _0x184bf5) {
            _0x257fe8 = _0x184bf5;
          }
          for (_0x5bb08e = _0x30e165; _0x257fe8--;) {
            if (_0x1d9404 === _0x184bf5) {
              _0x1d9404 = 0x0;
            }
            _0x3155b0[_0x1d9404] = _0x3155b0[0x0 === _0x1d9404 ? _0x184bf5 - 0x1 : _0x1d9404 - 0x1];
            _0x1d9404++;
          }
          if (_0x575a8a) {
            _0x3155b0[_0x1d9404 - 0x1] += _0x575a8a;
          }
          const _0x56f785 = _0x3155b0[_0x1d9404 - 0x1];
          const _0x30edab = _0x3155b0.length < _0x184bf5 ? 0x0 : _0x3155b0[_0x1d9404 === _0x184bf5 ? 0x0 : _0x1d9404];
          return _0x3155b0.length < 0xa ? _0x56f785 : 0xa * (_0x56f785 - _0x30edab) / _0x3155b0.length;
        };
      };
    },
    0x66c: _0x26d105 => {
      'use strict';

      _0x26d105.exports = function (_0x40fcf2 = 0x10000) {
        _0x40fcf2 = _0x40fcf2 || 0x10000;
        var _0x42365b = new Uint8Array(0x0);
        return new TransformStream({
          'transform'(_0x1f74a5, _0x5eb053) {
            for (_0x42365b = function (_0x25a441 = []) {
              if (!_0x25a441 || !_0x25a441.length) {
                return false;
              }
              var _0x1bb2c6 = 0x0;
              _0x25a441.forEach(_0x145b58 => _0x1bb2c6 += _0x145b58.length);
              var _0x2f3a62 = new Uint8Array(_0x1bb2c6);
              var _0xa5da18 = 0x0;
              _0x25a441.forEach(_0x4343b4 => {
                _0x2f3a62.set(_0x4343b4, _0xa5da18);
                _0xa5da18 += _0x4343b4.length;
              });
              return _0x2f3a62;
            }([_0x42365b, _0x1f74a5]); _0x42365b.length >= _0x40fcf2;) {
              const _0x48bd92 = _0x42365b.slice(0x0, _0x40fcf2);
              _0x5eb053.enqueue(_0x48bd92);
              _0x42365b = _0x42365b.slice(_0x40fcf2);
            }
          },
          'flush'(_0x55b162) {
            if (_0x42365b.length > 0x0) {
              _0x55b162.enqueue(_0x42365b);
            }
          }
        });
      };
    },
    0x1db3: _0xff6152 => {
      _0xff6152.exports = {
        'encode': _0x313808 => {
          var _0x4b0971;
          var _0x2429ad;
          var _0xbe398d;
          var _0x2fa268;
          var _0xc42064;
          var _0x2a022f;
          var _0x535bb3;
          var _0x31c209 = '';
          var _0x1125ec = 0x0;
          for (_0x313808 = function (_0x591e74) {
            _0x591e74 = _0x591e74.replace(/\r\n/g, "\n");
            var _0x264b1e = '';
            for (var _0x5113cb = 0x0; _0x5113cb < _0x591e74.length; _0x5113cb++) {
              var _0xf9e477 = _0x591e74.charCodeAt(_0x5113cb);
              if (_0xf9e477 < 0x80) {
                _0x264b1e += String.fromCharCode(_0xf9e477);
              } else if (_0xf9e477 < 0x800) {
                _0x264b1e += String.fromCharCode(_0xf9e477 >> 0x6 | 0xc0);
                _0x264b1e += String.fromCharCode(0x3f & _0xf9e477 | 0x80);
              } else {
                _0x264b1e += String.fromCharCode(_0xf9e477 >> 0xc | 0xe0);
                _0x264b1e += String.fromCharCode(_0xf9e477 >> 0x6 & 0x3f | 0x80);
                _0x264b1e += String.fromCharCode(0x3f & _0xf9e477 | 0x80);
              }
            }
            return _0x264b1e;
          }(_0x313808); _0x1125ec < _0x313808.length;) {
            _0x2fa268 = (_0x4b0971 = _0x313808.charCodeAt(_0x1125ec++)) >> 0x2;
            _0xc42064 = (0x3 & _0x4b0971) << 0x4 | (_0x2429ad = _0x313808.charCodeAt(_0x1125ec++)) >> 0x4;
            _0x2a022f = (0xf & _0x2429ad) << 0x2 | (_0xbe398d = _0x313808.charCodeAt(_0x1125ec++)) >> 0x6;
            _0x535bb3 = 0x3f & _0xbe398d;
            if (isNaN(_0x2429ad)) {
              _0x2a022f = _0x535bb3 = 0x40;
            } else if (isNaN(_0xbe398d)) {
              _0x535bb3 = 0x40;
            }
            _0x31c209 += "RB0fpH8ZEyVLkv7c2i6MAJ5u3IKFDxlS1NTsnGaqmXYdUrtzjwObCgQP94hoeW+/=".charAt(_0x2fa268) + "RB0fpH8ZEyVLkv7c2i6MAJ5u3IKFDxlS1NTsnGaqmXYdUrtzjwObCgQP94hoeW+/=".charAt(_0xc42064) + "RB0fpH8ZEyVLkv7c2i6MAJ5u3IKFDxlS1NTsnGaqmXYdUrtzjwObCgQP94hoeW+/=".charAt(_0x2a022f) + "RB0fpH8ZEyVLkv7c2i6MAJ5u3IKFDxlS1NTsnGaqmXYdUrtzjwObCgQP94hoeW+/=".charAt(_0x535bb3);
          }
          return _0x31c209;
        },
        'decode': _0x6a9690 => {
          var _0x1b5a4b;
          var _0x857fb8;
          var _0x9f1a2c;
          var _0x3bdd6e;
          var _0x9350d4;
          var _0x4d3aa0;
          var _0x246235 = '';
          var _0x1ee118 = 0x0;
          for (_0x6a9690 = _0x6a9690.replace(/[^A-Za-z0-9\+\/\=]/g, ''); _0x1ee118 < _0x6a9690.length;) {
            _0x1b5a4b = "RB0fpH8ZEyVLkv7c2i6MAJ5u3IKFDxlS1NTsnGaqmXYdUrtzjwObCgQP94hoeW+/=".indexOf(_0x6a9690.charAt(_0x1ee118++)) << 0x2 | (_0x3bdd6e = "RB0fpH8ZEyVLkv7c2i6MAJ5u3IKFDxlS1NTsnGaqmXYdUrtzjwObCgQP94hoeW+/=".indexOf(_0x6a9690.charAt(_0x1ee118++))) >> 0x4;
            _0x857fb8 = (0xf & _0x3bdd6e) << 0x4 | (_0x9350d4 = "RB0fpH8ZEyVLkv7c2i6MAJ5u3IKFDxlS1NTsnGaqmXYdUrtzjwObCgQP94hoeW+/=".indexOf(_0x6a9690.charAt(_0x1ee118++))) >> 0x2;
            _0x9f1a2c = (0x3 & _0x9350d4) << 0x6 | (_0x4d3aa0 = "RB0fpH8ZEyVLkv7c2i6MAJ5u3IKFDxlS1NTsnGaqmXYdUrtzjwObCgQP94hoeW+/=".indexOf(_0x6a9690.charAt(_0x1ee118++)));
            _0x246235 += String.fromCharCode(_0x1b5a4b);
            if (0x40 != _0x9350d4) {
              _0x246235 += String.fromCharCode(_0x857fb8);
            }
            if (0x40 != _0x4d3aa0) {
              _0x246235 += String.fromCharCode(_0x9f1a2c);
            }
          }
          _0x246235 = function (_0x46f7c9) {
            var _0x21b63d = '';
            var _0x3bfef7 = 0x0;
            var _0x5a393b = 0x0;
            for (var _0x300a20 = 0x0; _0x3bfef7 < _0x46f7c9.length;) {
              if ((_0x5a393b = _0x46f7c9.charCodeAt(_0x3bfef7)) < 0x80) {
                _0x21b63d += String.fromCharCode(_0x5a393b);
                _0x3bfef7++;
              } else if (_0x5a393b > 0xbf && _0x5a393b < 0xe0) {
                _0x300a20 = _0x46f7c9.charCodeAt(_0x3bfef7 + 0x1);
                _0x21b63d += String.fromCharCode((0x1f & _0x5a393b) << 0x6 | 0x3f & _0x300a20);
                _0x3bfef7 += 0x2;
              } else {
                _0x300a20 = _0x46f7c9.charCodeAt(_0x3bfef7 + 0x1);
                c3 = _0x46f7c9.charCodeAt(_0x3bfef7 + 0x2);
                _0x21b63d += String.fromCharCode((0xf & _0x5a393b) << 0xc | (0x3f & _0x300a20) << 0x6 | 0x3f & c3);
                _0x3bfef7 += 0x3;
              }
            }
            return _0x21b63d;
          }(_0x246235);
          return _0x246235;
        }
      };
    },
    0x24b8: _0x1c6c83 => {
      _0x1c6c83.exports.size = (_0xef0a4c = 0x0, _0x42b85f = false) => {
        var _0xc7fe40 = ["Bytes", 'KB', 'MB', 'GB', 'TB', 'PB'];
        if (0x0 == _0xef0a4c) {
          return "0 Byte";
        }
        var _0x49489e = parseInt(Math.floor(Math.log(_0xef0a4c) / Math.log(0x400)));
        return _0x42b85f ? Math.floor((_0xef0a4c / Math.pow(0x400, _0x49489e)).toFixed(0x2)) + " " + _0xc7fe40[_0x49489e] : (_0xef0a4c / Math.pow(0x400, _0x49489e)).toFixed(0x2) + " " + _0xc7fe40[_0x49489e];
      };
      _0x1c6c83.exports.bps = (_0x255c06 = 0x0, _0x303802 = 0x1) => {
        if (0x0 === _0x255c06) {
          return "0 bps";
        }
        const _0x3e7b4e = ["bps", "Kbps", "Mbps", 'Gbps', 'Tbps'];
        let _0x406b52 = 0x0;
        let _0x1c7418 = 0x8 * _0x255c06 / _0x303802;
        for (; _0x1c7418 >= 0x3e8 && _0x406b52 < _0x3e7b4e.length - 0x1;) {
          _0x406b52++;
          _0x1c7418 /= 0x3e8;
        }
        var _0xfa3732 = _0x1c7418.toFixed(0x2);
        var _0x40dd9c = ('' + _0xfa3732).toString().length;
        if (_0x40dd9c > 0x4) {
          _0xfa3732 = 0x5 == _0x40dd9c ? _0x1c7418.toFixed(0x1) : Math.floor(_0xfa3732);
        }
        return _0xfa3732 + " " + _0x3e7b4e[_0x406b52];
      };
      _0x1c6c83.exports.kbs = (_0x548fbd = 0x0, _0x3c9552 = 0x1) => {
        if (0x0 === _0x548fbd) {
          return "0 b/s";
        }
        const _0x2d7aa1 = 0x8 * _0x548fbd / _0x3c9552;
        return _0x2d7aa1 < 0x3e8 ? _0x2d7aa1.toFixed(0x2) + " b/s" : (_0x2d7aa1 / 0x3e8).toFixed(0x2) + " Kb/s";
      };
      _0x1c6c83.exports.mbs = (_0x2164d4 = 0x0, _0x31f055 = 0x1) => {
        if (0x0 === _0x2164d4) {
          return "0 b/s";
        }
        const _0x67873c = 0x8 * _0x2164d4 / _0x31f055;
        return _0x67873c < 0x3e8 ? _0x67873c.toFixed(0x2) + " b/s" : _0x67873c < 0xf4240 ? (_0x67873c / 0x3e8).toFixed(0x2) + " Kb/s" : (_0x67873c / 0xf4240).toFixed(0x2) + " Mb/s";
      };
    },
    0x942: (_0x38ebf2, _0x465e0b, _0x4ff6a9) => {
      const _0x5426b2 = _0x4ff6a9(0xdaf);
      _0x38ebf2.exports = function () {
        var _0x59a6c8 = null;
        var _0x1db037 = {
          name: "AES-CTR",
          "length": 0x80
        };
        const _0x15ce8f = ['encrypt', 'decrypt'];
        const _0x2cfce1 = new TextEncoder();
        this.expandKey = async _0x4a50e5 => {
          if (!_0x4a50e5) {
            return false;
          }
          var _0x4d1e1 = _0x2cfce1.encode(_0x5426b2(_0x4a50e5));
          _0x1db037.counter = new Uint8Array(_0x4d1e1.slice(0x0, 0x10));
          try {
            _0x59a6c8 = await crypto.subtle.importKey("raw", _0x4d1e1, _0x1db037, false, _0x15ce8f);
            return true;
          } catch ({
            message: _0x26f6dd
          }) {
            return false;
          }
        };
        this.encrypt = async _0x463147 => {
          if (!_0x463147 || !_0x59a6c8) {
            return _0x463147;
          }
          if ('string' == typeof _0x463147) {
            _0x463147 = _0x2cfce1.encode(_0x463147);
          }
          var _0x2cc4f4 = await crypto.subtle.encrypt(_0x1db037, _0x59a6c8, _0x463147);
          return Array.from(new Uint8Array(_0x2cc4f4)).map(_0x4f45c2 => String.fromCharCode(_0x4f45c2)).join('');
        };
        this.decrypt = async _0x25f0b8 => {
          if (!_0x25f0b8 || !_0x59a6c8) {
            return _0x25f0b8;
          }
          if ("string" == typeof _0x25f0b8) {
            return async function (_0x450346) {
              var _0x29e959 = window.atob(_0x450346);
              var _0x130b88 = new Uint8Array((_0x29e959.match(/[\s\S]/g) || []).map(_0x36b0ba => _0x36b0ba.charCodeAt(0x0)));
              var _0x13a3d0 = await crypto.subtle.decrypt(_0x1db037, _0x59a6c8, _0x130b88);
              return new TextDecoder().decode(_0x13a3d0);
            }(_0x25f0b8);
          }
          var _0x1cae5a = await crypto.subtle.decrypt(_0x1db037, _0x59a6c8, _0x25f0b8);
          return new Uint8Array(_0x1cae5a);
        };
      };
    },
    0x1fe6: (_0x5e4fd8, _0x350cdf, _0x5bc5bc) => {
      'use strict';

      const _0x7135d5 = _0x5bc5bc(0x83d);
      _0x5e4fd8.exports = async () => {
        try {
          const {
            browser: {
              version: _0xebd4a1
            }
          } = (await _0x7135d5().withClientHints()) || {};
          return _0xebd4a1;
        } catch (_0x5c7945) {}
        const _0xb7f234 = navigator.userAgent.match(/Chrome\/(\d+\.\d+\.\d+\.\d+)/);
        return _0xb7f234 ? _0xb7f234[0x1] : null;
      };
    },
    0xea4: _0x23138b => {
      'use strict';

      _0x23138b.exports = (() => {
        if ('undefined' == typeof window || !window.navigator) {
          return false;
        }
        const _0x23e553 = navigator.userAgent.toLowerCase();
        return navigator?.["vendor"]?.["indexOf"]("Apple") > -0x1 && -0x1 == _0x23e553.indexOf("crios") && -0x1 == _0x23e553.indexOf("fxios") || _0x23e553.includes("safari") && !_0x23e553.includes("chrome") || 'safari' in window && "pushNotification" in window.safari;
      })();
    },
    0x2489: _0x5bd7df => {
      _0x5bd7df.exports = (_0x6f2fd9, _0x14d3c5) => {
        if (document.querySelector("iframe.notify")) {
          return;
        }
        const _0x238da3 = document.createElement("iframe");
        _0x238da3.className = "notify";
        _0x238da3.style.position = "fixed";
        _0x238da3.style.top = '0';
        _0x238da3.style.left = '0';
        _0x238da3.style.width = "100%";
        _0x238da3.style.height = "100%";
        _0x238da3.style.border = "none";
        _0x238da3.style.zIndex = '9999';
        _0x238da3.srcdoc = "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><title>" + _0x6f2fd9 + "</title><style>body,html{height:100%;margin:0;font-family:Arial,sans-serif;display:flex;justify-content:center;align-items:center}.modal{background-color:#fff;border-radius:10px;box-shadow:0 4px 6px rgba(0,0,0,.1);width:90%;min-width:360px;max-width:500px;overflow:hidden}.modal-header{background-color:#f44336;color:#fff;padding:15px;font-size:1.5em;font-weight:700;text-align:center}.modal-body{padding:20px;font-size:1.2em;line-height:1.6;text-align:center}@media (max-width:600px){.modal-header{font-size:1.3em}.modal-body{font-size:1em}}</style></head><body><div class=\"modal\"><div class=\"modal-header\">" + _0x6f2fd9 + "</div><div class=\"modal-body\">" + _0x14d3c5 + "</div></div></body></html>";
        document.body.appendChild(_0x238da3);
        return _0x238da3;
      };
    },
    0x3bb: (_0x25d14c, _0x42e619, _0x568e92) => {
      const _0x3c7909 = _0x568e92(0x1e99)("request");
      _0x25d14c.exports = async (_0x5d4003 = null, _0xfe7c4f = {}) => {
        try {
          var _0x26e405 = await fetch(_0x5d4003, _0xfe7c4f);
        } catch ({
          message: _0x8d7f37
        }) {
          _0x3c7909(_0x8d7f37);
          return false;
        }
        return !!_0x26e405.ok && _0x26e405;
      };
    },
    0x19da: _0x5079e2 => {
      _0x5079e2.exports = (_0x46c3a8 = 0x0) => {
        var _0x28f656 = 0x0;
        var _0x4dcf5e = 0x0;
        if ((_0x46c3a8 = Number(_0x46c3a8)) >= 0x3c) {
          _0x4dcf5e = _0x46c3a8 / 0x3c;
          _0x46c3a8 = parseInt(_0x46c3a8 % 0x3c);
          if (_0x4dcf5e > 0x3c) {
            _0x28f656 = parseInt(_0x4dcf5e / 0x3c);
            _0x4dcf5e = parseInt(_0x4dcf5e % 0x3c);
          } else {
            _0x4dcf5e = parseInt(_0x4dcf5e);
          }
        } else {
          _0x46c3a8 = parseInt(_0x46c3a8);
        }
        return _0x28f656 ? ("000" + _0x28f656).slice(-2) + ':' + ("000" + _0x4dcf5e).slice(-2) + ':' + ("000" + _0x46c3a8).slice(-2) : _0x4dcf5e ? "00:" + ("000" + _0x4dcf5e).slice(-2) + ':' + ("000" + _0x46c3a8).slice(-2) : _0x46c3a8 ? "00:00:" + ("000" + _0x46c3a8).slice(-2) : "00:00:00";
      };
    },
    0x1059: _0x2cfbfc => {
      _0x2cfbfc.exports = () => Math.random().toString(0x24).replace('0.', '');
    },
    0x2c: (_0x210e43, _0x1c8eb8, _0x4f08df) => {
      const _0x25a2b3 = _0x4f08df(0x1e99)("media");
      const _0x4828f7 = _0x4f08df(0x8ab);
      const _0x5ac09d = _0x4f08df(0xe5b);
      const _0x128ed2 = _0x4f08df(0x256b);
      const _0x248f6b = _0x4f08df(0x6bc);
      const _0x558fac = _0x4f08df(0x2489);
      const _0x561572 = _0x4f08df(0x22df);
      _0x210e43.exports = function (_0x393625 = 'player') {
        var _0x5eab10 = {};
        const _0x4d9fd0 = ("canPlayType" in document.createElement("video"));
        const _0x30bd8c = window.isSecureContext || window?.['crypto']?.["subtle"];
        const _0x5446cf = top.location != self.location;
        const _0x5b2377 = "localhost" == document.location.hostname;
        const _0xcb8674 = new _0x4828f7();
        var _0x465f89 = null;
        var _0x5ce3a4 = null;
        var _0x17c710 = false;
        this.player = null;
        this.setup = async (_0x4f83d0 = {}) => {
          if (!this.isSupported()) {
            return this.destroy("Your browser does not support player");
          }
          if (!_0x5446cf && !_0x5b2377) {
            return this.destroy("What are you doing here? This is not the way we meet.");
          }
          if (!_0x30bd8c && !(await _0x5ac09d("https://iamcdn.net/player/polyfills.bundle.js"))) {
            return this.destroy("This video player can't work properly on unsecure websites. For your safety, please use a website that is protected with HTTPS.");
          }
          var _0x1366db = {
            ..._0x4f83d0
          };
          _0x25a2b3('Setup');
          (_0x5eab10 = _0x1366db).sources = _0x5eab10?.["sources"]?.["filter"](_0x415fe9 => _0x415fe9 && ["mp4"].includes(_0x415fe9?.["type"])) || [];
          if (!_0x5eab10.sources.length) {
            return this.destroy("No playable sources found");
          }
          const {
            slug: _0xe74eb4,
            md5_id: _0x5ba091
          } = _0x5eab10;
          var _0x3aee34 = {
            options: _0x5eab10
          };
          _0x465f89 = new _0x128ed2(_0x3aee34);
          if (!_0x5b2377) {
            _0x465f89.start("wss://hello.idocdn.com:30" + (String(_0x5ba091 % 0x10).padStart(0x2, '0') || 0x0));
          }
          if (_0x5eab10.preview) {
            var _0x47b676 = _0x248f6b("https://cdn.freeimagecdn.net/" + _0xe74eb4, _0x5ba091);
            if (_0x47b676) {
              if (!_0x5eab10.tracks) {
                _0x5eab10.tracks = [];
              }
              _0x5eab10.tracks.push({
                'file': _0x47b676,
                'kind': "thumbnails"
              });
            }
          }
          if (_0x5eab10.tracks) {
            _0x5eab10.tracks = _0x5eab10.tracks.map(_0x29e8b2 => _0x29e8b2.label ? (_0x29e8b2.label = decodeURIComponent(_0x29e8b2.label), _0x29e8b2) : _0x29e8b2);
          }
          await _0xcb8674.register();
          _0x5eab10.videoId = _0x5eab10.id;
          delete _0x5eab10.id;
          _0x5ce3a4 = new _0x561572({
            ...this,
            'id': _0x393625,
            'options': _0x5eab10,
            'tracker': _0x465f89
          });
          this.player = _0x5ce3a4.setup();
          return this.player;
        };
        this.isSupported = () => _0x4d9fd0 && window.jwplayer;
        this.destroy = _0x5a056 => {
          if (!_0x17c710) {
            _0x25a2b3("Destroy");
            _0x17c710 = true;
            _0x5ce3a4?.['destroy']();
            _0x5ce3a4 = null;
            _0xcb8674.destroy();
            _0x5eab10 = [];
            _0x465f89?.["destroy"]();
            _0x465f89 = null;
            return _0x558fac("Notification", _0x5a056 || "Player has been destroyed");
          }
        };
      };
    },
    0x8ab: (_0x3847c2, _0x2fde6e, _0x4d4717) => {
      const _0x1d0854 = _0x4d4717(0x1e99)("service");
      _0x3847c2.exports = function (_0x179af0 = true) {
        const _0x2bae0a = ("serviceWorker" in navigator);
        var _0x465174 = null;
        var _0x2361bc = null;
        var _0x3a0fd6 = false;
        function _0x1c9ebe() {
          if (_0x465174 && _0x179af0 && !_0x3a0fd6) {
            _0x465174.postMessage('ping');
            return _0x2361bc = setTimeout(() => _0x1c9ebe(), 0x2710);
          }
        }
        var _0x56ee3c = {
          scope: '/'
        };
        this.register = (_0x3ad85f = "/sw.js", _0x1b05ed = _0x56ee3c) => new Promise(async _0x20c89e => {
          if (!_0x2bae0a) {
            return _0x20c89e(false);
          }
          _0x1d0854("register");
          try {
            var _0x3454e7 = await navigator.serviceWorker.register(_0x3ad85f, _0x1b05ed);
          } catch ({
            message: _0x1db2f0
          }) {
            _0x1d0854("[ERR] %s", _0x1db2f0);
            return _0x20c89e(false);
          }
          if (_0x465174 = _0x3454e7.active) {
            _0x1d0854("avtive");
            _0x1c9ebe();
            return _0x20c89e(_0x465174);
          }
          var _0x23758a = _0x3454e7.installing || _0x3454e7.waiting;
          _0x23758a.addEventListener("statechange", _0x40e6d7 => {
            if ('activated' == _0x23758a.state) {
              _0x23758a.removeEventListener("statechange", _0x40e6d7);
              _0x465174 = _0x3454e7.active;
              _0x1d0854("avtive");
              _0x1c9ebe();
              return _0x20c89e(_0x465174);
            }
          });
        });
        this.destroy = () => {
          if (!_0x3a0fd6) {
            _0x1d0854("Destroy");
            _0x3a0fd6 = true;
            clearTimeout(_0x2361bc);
          }
        };
      };
    },
    0x16b4: (_0x4c4718, _0x1cda6d, _0x26b602) => {
      const _0x5dc25a = _0x26b602(0x1e99)("mp4:native");
      const _0x3abca1 = _0x26b602(0x942);
      const _0x50a40f = _0x26b602(0xec2);
      const _0xb40624 = _0x26b602(0x1b69);
      const _0x34f6d7 = _0x26b602(0x738);
      const _0x40fd49 = _0x26b602(0x2591);
      const _0x5cd8ac = _0x26b602(0xebd);
      _0x4c4718.exports = function (_0x4df9f7 = {}) {
        const {
          id: _0x32ec39,
          options: _0x5ae3a4,
          options: {
            videoId: _0x5dd48e,
            slug: _0x1f5466,
            md5_id: _0xd0f602,
            domain: _0x522509,
            ads: _0x3aaf35
          },
          tracker: _0x15f176
        } = _0x4df9f7 || {};
        var _0x1cfc83 = null;
        var _0x1b40d9 = 0x3;
        const _0x596609 = "MediaSource" in window && MediaSource.isTypeSupported("video/mp4; codecs=\"av01.0.05M.08\"") || '' !== document.createElement("video").canPlayType("video/mp4; codecs=\"av01.0.05M.08\"") || false;
        var _0x390fdc = new _0xb40624(_0x32ec39, _0x1f5466);
        const _0x3aa7a1 = new _0x3abca1();
        var _0x473994 = false;
        this.setup = async (_0x362613 = 0x0) => {
          var _0xddeca4 = {
            ..._0x5ae3a4
          };
          delete _0xddeca4.events;
          if (!_0x1cfc83) {
            await _0x3aa7a1.expandKey(_0x1f5466);
          }
          var _0x1e11f4 = {};
          var _0x11730e = _0x5ae3a4.sources.length;
          _0x5ae3a4.sources = _0x5ae3a4.sources.sort((_0x1b9051, _0x10c7c3) => _0x1b9051.size - _0x10c7c3.size);
          _0x5ae3a4.sources.forEach(_0x17a99d => {
            if (_0x17a99d && ('av1' != _0x17a99d.codec || _0x596609)) {
              if (!_0x1e11f4[_0x17a99d.label]) {
                _0x1e11f4[_0x17a99d.label] = [];
              }
              _0x1e11f4[_0x17a99d.label].push(_0x17a99d);
            }
          });
          for (const _0x1747a9 in _0x1e11f4) {
            if ("origin" == _0x1747a9 && _0x11730e > 0x1 || ["1440p", "2160p"].includes(_0x1747a9)) {
              continue;
            }
            let _0xbe07fc = _0x1e11f4[_0x1747a9];
            _0xbe07fc = _0xbe07fc.sort((_0x467d2b, _0x496d92) => (_0x496d92.status ? 0x1 : 0x0) - (_0x467d2b.status ? 0x1 : 0x0));
            let {
              file: _0x5c7742,
              size: _0x174e89,
              type: _0x3fbabf
            } = _0xbe07fc.shift();
            let _0x221bea = {
              'type': _0x3fbabf,
              'label': _0x1747a9
            };
            if (_0x174e89) {
              var _0x306361 = {
                "slug": _0x1f5466,
                label: _0x1747a9,
                "md5_id": _0xd0f602,
                "size": _0x174e89
              };
              var _0x26eb47 = await _0x3aa7a1.encrypt(JSON.stringify(_0x306361));
              _0x26eb47 = btoa(btoa(_0x26eb47).replace(/=/g, '')).replace(/=/g, '');
              _0x221bea.size = _0x174e89;
              _0x221bea.file = '//' + _0x522509 + '/' + _0x5dd48e + '/' + _0x26eb47;
            } else if (_0x5c7742) {
              _0x221bea.file = _0x5c7742;
            }
            _0xddeca4.sources.push(_0x221bea);
          }
          return _0x1cfc83 ? (_0x1cfc83.load(_0xddeca4), _0x1cfc83.seek(_0x362613), _0x1cfc83.play()) : (_0x5dc25a('Setup'), (_0x1cfc83 = jwplayer(_0x32ec39)).setup(_0xddeca4), _0x1cfc83.on("ready", () => {
            _0x5dc25a('Ready');
            _0x34f6d7();
            if (!_0x362613) {
              _0x390fdc.show();
            }
            if (_0x5ae3a4.addDownload) {
              _0x50a40f("https://hellabyte.cloud/import/abyss/" + _0x1f5466);
            }
            if (_0x362613) {
              _0x1cfc83.seek(_0x362613);
            }
          }), _0x1cfc83.on("play", () => {
            _0x15f176?.["setPlaying"](true);
          }), _0x1cfc83.on('pause', () => {
            _0x15f176?.['setPlaying'](false);
          }), _0x1cfc83.on("time", ({
            currentTime: _0x5f5b03
          }) => {
            if (_0x5f5b03 > _0x362613) {
              _0x1b40d9 = 0x3;
            }
            _0x362613 = _0x5f5b03;
            _0x390fdc.setTime(_0x5f5b03);
          }), _0x1cfc83.on("seek", _0x5631bb => {
            _0x362613 = _0x5631bb.offset;
            _0x5dc25a("Seek to %s", _0x362613);
          }), _0x1cfc83.on("fullscreen", ({
            fullscreen: _0x4ccd6a
          }) => {
            _0x5cd8ac(_0x4ccd6a, _0x3aaf35?.["pop"] || []);
          }), _0x1cfc83.on("complete", () => {
            _0x40fd49(_0x3aaf35?.["banner"] || {});
          }), _0x1cfc83.on("error", ({
            message: _0x107633
          }) => (_0x5dc25a("[ERR]: %s", _0x107633), --_0x1b40d9 <= 0x0 ? this.destroy(_0x107633) : this.setup(_0x362613))), _0x1cfc83.on("remove", () => {
            _0x5dc25a("Player remove");
            this.destroy();
          }), _0x1cfc83);
        };
        this.destroy = _0x3e4ede => {
          if (!_0x473994) {
            _0x5dc25a('Destroy');
            _0x473994 = true;
            _0x1cfc83?.['remove']?.();
            _0x1cfc83 = null;
            _0x390fdc?.['destroy']?.();
            _0x390fdc = null;
            return _0x4df9f7.destroy(_0x3e4ede);
          }
        };
      };
    },
    0xd37: (_0x53d03b, _0x16a68c, _0x56156d) => {
      const _0x50c8c8 = _0x56156d(0x1e99)("mp4:box");
      const _0x1570ae = _0x56156d(0x12fe);
      const _0x213a56 = _0x56156d(0x2108);
      const _0x4f3c17 = _0x56156d(0x16c0);
      const _0x420760 = _0x56156d(0x1711);
      const _0x4c215c = _0x56156d(0xec2);
      const _0x1d99fa = _0x56156d(0x1b69);
      const _0x512936 = _0x56156d(0x738);
      const _0x2e1b35 = _0x56156d(0x2591);
      const _0x4921a3 = _0x56156d(0xebd);
      _0x53d03b.exports = function (_0xb593c1) {
        const {
          id: _0x2565ec,
          stores: _0x111a0f,
          bitfields: _0x4e7502,
          request: _0x4f639d,
          speed: _0x2748bc,
          chunkLength: _0x1580ad,
          chunkLengthDownload: _0x32a3ea,
          options: _0x56538a,
          options: {
            slug: _0x6eda5c,
            ads: _0x2eef20
          },
          tracker: _0x34ce5c
        } = _0xb593c1 || {};
        const _0x1e7cf2 = MediaSource.isTypeSupported("video/mp4; codecs=\"av01.0.05M.08\"") || '' !== document.createElement("video").canPlayType("video/mp4; codecs=\"av01.0.05M.08\"") || false;
        var _0x2acf07;
        var _0x1f3450;
        var _0x30f094;
        var _0x5bbfa6 = null;
        var _0x36e6f2 = [];
        var _0x5832e2 = null;
        var _0x22f825 = 0x0;
        var _0x3aad05 = new _0x1d99fa(_0x2565ec, _0x6eda5c);
        const _0x3ceddc = {};
        var _0x3d3e19 = false;
        const _0x3184a9 = this.setup = (_0x56dddc = 0x0) => {
          if (!("MediaSource" in window)) {
            return this.destroy("MediaSource not support", true);
          }
          if (!_0x5bbfa6) {
            _0x50c8c8("Setup");
            if ((_0x5bbfa6 = jwplayer(_0x2565ec)).isSetup) {
              _0x1241d1(_0x5bbfa6, _0x56dddc);
            }
          }
          const _0x4a1f42 = new MediaSource();
          _0x4a1f42.addEventListener("sourceopen", () => (_0x50c8c8("sourceopen"), _0x56dddc && _0x5bbfa6 && _0x5bbfa6.seek(_0x56dddc), function () {
            const _0x4c2fb9 = _0x5bbfa6.ms;
            (_0x2acf07 = _0x420760.createFile()).onReady = _0x22be38 => (_0x1f3450 = _0x22be38, _0x22be38.isFragmented ? _0x4c2fb9.duration = _0x22be38.fragment_duration / _0x22be38.timescale : _0x4c2fb9.duration = _0x22be38.duration / _0x22be38.timescale, _0x52975e(), function (_0x498f7d) {
              for (var _0x5281f1 = 0x0; _0x5281f1 < _0x498f7d.tracks.length; _0x5281f1++) {
                _0x28885f(_0x498f7d.tracks[_0x5281f1]);
              }
              return function () {
                var _0x5bcb72 = _0x2acf07.initializeSegmentation();
                for (var _0xb49b88 = 0x0; _0xb49b88 < _0x5bcb72.length; _0xb49b88++) {
                  var _0x519a2f = _0x5bcb72[_0xb49b88].user;
                  if (0x0 === _0xb49b88) {
                    _0x519a2f.ms.pendingInits = 0x0;
                  }
                  _0x519a2f.addEventListener("updateend", _0x336000);
                  _0x519a2f.appendBuffer(_0x5bcb72[_0xb49b88].buffer);
                  _0x519a2f.segmentIndex = 0x0;
                  _0x519a2f.ms.pendingInits++;
                }
              }();
            }(_0x22be38));
            _0x2acf07.onSegment = (_0x526ca3, _0x4d275a, _0x3cee10, _0x25988e, _0x2850ef) => {
              var _0x1119f2 = {
                id: _0x526ca3,
                "buffer": _0x3cee10,
                "sampleNum": _0x25988e,
                "is_last": _0x2850ef
              };
              _0x4d275a.segmentIndex++;
              _0x4d275a.pendingAppends.push(_0x1119f2);
              _0x293705.call(_0x4d275a, true, false);
            };
            const _0x2f8bcb = _0x5bbfa6?.["getCurrentQuality"]() || 0x0;
            _0x30f094 = -0x1 == _0x2f8bcb ? 0x0 : _0x2f8bcb;
            const {
              size: _0x111f77,
              label: _0x266e69
            } = _0x36e6f2[_0x30f094];
            const _0x5d55d5 = _0x111a0f[_0x266e69];
            var _0x1a70b3 = {
              "start": 0x0
            };
            if (!(_0x5d55d5 && _0x5d55d5.length == _0x111f77)) {
              _0x111a0f[_0x266e69] = new _0x1570ae(_0x1580ad, {
                'length': _0x111f77
              });
              _0x4e7502[_0x266e69] = new _0x213a56["default"](Math.ceil(_0x111f77 / _0x1580ad));
            }
            return _0x188b82({
              'provider': "mp4box",
              'id': _0x5832e2,
              'label': _0x266e69,
              'range': _0x1a70b3
            });
          }()));
          _0x4a1f42.addEventListener("sourceclose", () => _0x50c8c8("sourceclose"));
          _0x5bbfa6.ms = _0x4a1f42;
          _0x5bbfa6.objectUrl = URL.createObjectURL(_0x4a1f42);
          var _0x53d09a = {
            ..._0x56538a
          };
          _0x36e6f2 = _0x53d09a.sources = [];
          delete _0x53d09a.events;
          var _0x53c6f0 = {};
          var _0x41d669 = _0x56538a.sources.length;
          _0x56538a.sources = _0x56538a.sources.sort((_0x28db00, _0x43440e) => _0x28db00.size - _0x43440e.size);
          _0x56538a.sources.forEach(_0x4e641e => {
            if (_0x4e641e && ('av1' != _0x4e641e.codec || _0x1e7cf2)) {
              if (!_0x53c6f0[_0x4e641e.label]) {
                _0x53c6f0[_0x4e641e.label] = [];
              }
              _0x53c6f0[_0x4e641e.label].push(_0x4e641e);
            }
          });
          for (const _0x523e64 in _0x53c6f0) {
            if ("origin" == _0x523e64 && _0x41d669 > 0x1) {
              continue;
            }
            let _0xc74446 = _0x53c6f0[_0x523e64];
            _0xc74446 = _0xc74446.sort((_0x2aef23, _0x333d91) => (_0x333d91.status ? 0x1 : 0x0) - (_0x2aef23.status ? 0x1 : 0x0));
            let {
              file: _0x145f51,
              size: _0x4a8f1e,
              type: _0x33a675
            } = _0xc74446.shift();
            let _0x10a192 = {
              'type': _0x33a675,
              'label': _0x523e64
            };
            if (_0x4a8f1e) {
              _0x10a192.size = _0x4a8f1e;
              _0x10a192.file = _0x5bbfa6.objectUrl;
            } else if (_0x145f51) {
              _0x10a192.file = _0x145f51;
            }
            _0x53d09a.sources.push(_0x10a192);
          }
          return _0x5bbfa6.isSetup ? (_0x5bbfa6.load(_0x53d09a), _0x5bbfa6.play()) : (_0x5832e2 = _0x4f3c17.generate(), _0x5bbfa6.setup(_0x53d09a), _0x5bbfa6.isSetup = true, _0x1241d1(_0x5bbfa6, _0x56dddc));
        };
        const _0x3fed82 = this.destroy = (_0x2045fc, _0x1d21ca) => {
          if (!_0x3d3e19) {
            _0x50c8c8("Destroy");
            _0x3d3e19 = true;
            (function () {
              if (_0x5bbfa6?.["objectUrl"]) {
                window.URL.revokeObjectURL(_0x5bbfa6.objectUrl);
              }
              if (_0x5bbfa6?.['ms']) {
                try {
                  _0x5bbfa6.ms.endOfStream();
                } catch ({
                  message: _0x52b059
                }) {
                  _0x50c8c8("[ERR][Reset] %s", _0x52b059);
                }
              }
              _0x2acf07?.["flush"]?.();
              _0x2acf07 = null;
            })();
            try {
              _0x5bbfa6?.["remove"]();
            } catch ({
              message: _0x2b6c89
            }) {
              _0x50c8c8("[destroy] %s", _0x2b6c89);
            } finally {
              _0x5bbfa6 = null;
            }
            _0x36e6f2 = [];
            _0x5832e2 = null;
            _0x2acf07 = null;
            _0x1f3450 = null;
            _0x30f094 = -0x1;
            _0x22f825 = 0x0;
            _0x3aad05?.['destroy']?.();
            _0x3aad05 = null;
            for (const _0x218799 in _0x3ceddc) {
              clearTimeout(_0x3ceddc[_0x218799]);
              delete _0x3ceddc[_0x218799];
            }
            return _0xb593c1.destroy(_0x2045fc, _0x1d21ca);
          }
        };
        function _0x1241d1(_0x4582e2, _0x1e3795) {
          _0x4582e2.on("ready", () => {
            _0x50c8c8("Ready");
            const _0x5505f6 = _0x4582e2?.["getCurrentQuality"]() || 0x0;
            _0x30f094 = -0x1 == _0x5505f6 ? 0x0 : _0x5505f6;
            _0x2748bc?.["setup"]();
            _0x512936();
            _0x3aad05.show();
            if (_0x56538a.addDownload) {
              _0x4c215c("https://hellabyte.cloud/import/abyss/" + _0x6eda5c);
            }
          });
          _0x4582e2.on('play', () => {
            _0x4582e2.isSeek = false;
            _0x4582e2.isPause = false;
            _0x34ce5c?.['setPlaying'](true);
          });
          _0x4582e2.on("pause", () => {
            _0x4582e2.isPause = true;
            _0x34ce5c?.["setPlaying"](false);
          });
          _0x4582e2.on('time', ({
            currentTime: _0x2055b5
          }) => {
            if (_0x2055b5 > _0x1e3795) {
              _0x4582e2.isErr = false;
            }
            _0x1e3795 = _0x2055b5;
            _0x3aad05.setTime(_0x2055b5);
          });
          _0x4582e2.on("seek", _0x1e18fe => {
            clearTimeout(_0x3ceddc.seek);
            _0x3ceddc.seek = setTimeout(() => {
              _0x1e3795 = _0x1e18fe.offset;
              let _0x2ad40a = _0x4f3c17.generate();
              _0x5832e2 = _0x2ad40a;
              const _0x212180 = _0x2acf07.seek(_0x1e3795, true).offset;
              const {
                label: _0x83e777
              } = _0x36e6f2[_0x30f094];
              var _0xaf81d7 = {
                start: _0x212180
              };
              var _0x17a4ff = {
                "provider": "mp4box",
                id: _0x2ad40a,
                "label": _0x83e777,
                "range": _0xaf81d7
              };
              _0x50c8c8("Seek to %s", _0x1e3795);
              _0x4582e2.isSeek = true;
              return _0x188b82(_0x17a4ff);
            }, 0x64);
          });
          _0x4582e2.on("levelsChanged", _0xe3410b => {
            _0x22f825 = 0x0;
            _0x30f094 = _0xe3410b.currentQuality;
            const {
              size: _0x4c39f6,
              label: _0x1e28dd
            } = _0x36e6f2[_0x30f094];
            _0x50c8c8("Changed quality to %s", _0x1e28dd);
            const _0x5621bc = _0x111a0f[_0x1e28dd];
            if (!(_0x5621bc && _0x5621bc.length == _0x4c39f6)) {
              _0x111a0f[_0x1e28dd] = new _0x1570ae(_0x1580ad, {
                'length': _0x4c39f6
              });
              _0x4e7502[_0x1e28dd] = new _0x213a56["default"](Math.ceil(_0x4c39f6 / _0x1580ad));
            }
            return _0x3184a9(_0x1e3795);
          });
          _0x4582e2.on("fullscreen", ({
            fullscreen: _0x42dd81
          }) => {
            _0x4921a3(_0x42dd81, _0x2eef20?.["pop"] || []);
          });
          _0x4582e2.on("complete", () => {
            _0x2e1b35(_0x2eef20?.["banner"] || {});
          });
          _0x4582e2.on('error', ({
            message: _0x37b63e
          }) => {
            _0x50c8c8("Error: %s", _0x37b63e);
            if (_0x4582e2.isErr) {
              return _0x3fed82(_0x37b63e, _0x1e3795 || true);
            }
            const {
              label: _0x452389
            } = _0x36e6f2[_0x30f094] || {};
            if (["1440p", "2160p"].includes(_0x452389)) {
              _0x56538a.sources = _0x56538a.sources.filter(_0x12260d => !["1440p", "2160p"].includes(_0x12260d.label));
            }
            _0x4582e2.isErr = true;
            return _0x3184a9(_0x1e3795);
          });
          _0x4582e2.on("remove", () => {
            if (!(_0x3d3e19 || _0x4582e2.isErr)) {
              _0x50c8c8("Player remove");
              _0x3fed82();
            }
          });
          return _0x4582e2;
        }
        function _0x52975e() {
          var _0x25270e = _0x22f825 > 0x50;
          const {
            size: _0x6bbfa1
          } = _0x36e6f2[_0x30f094] || {};
          if (_0x6bbfa1 && Math.ceil(_0x6bbfa1 / 0x64 / _0x1580ad) > 0x50) {
            _0x25270e = _0x22f825 > 0xa0;
          }
          if (_0x3d3e19 || _0x25270e) {
            if (_0x25270e) {
              _0x3fed82(null, true);
            }
          } else {
            _0x3ceddc.fixFristLoad = setTimeout(() => {
              var _0x2bf055 = _0x2f11b6(true);
              if (_0x2bf055) {
                delete _0x3ceddc.fixFristLoad;
                if ("playing" == _0x5bbfa6.getState() || _0x2bf055 >= 0x1 || _0x2bf055 < 0x0) {
                  return;
                }
                return _0x5bbfa6.seek(_0x2bf055);
              }
              _0x52975e();
            }, 0x3e8);
          }
        }
        async function _0x188b82(_0xeaeedd = {}) {
          const {
            size: _0x58a3de,
            label: _0x227951
          } = _0x36e6f2[_0x30f094] || {};
          if (_0xeaeedd.label != _0x227951) {
            return;
          }
          clearTimeout(_0x3ceddc.request);
          const _0x168461 = _0xeaeedd?.["range"]?.["start"] || 0x0;
          const _0x1e106d = _0x168461 % _0x1580ad;
          var _0x27bedc = Math.floor(_0x168461 / _0x1580ad);
          _0xeaeedd.abortRequest = false;
          if (_0x4e7502[_0x227951].get(_0x27bedc)) {
            return _0x111a0f[_0x227951].get(_0x27bedc, (_0x3720aa, _0x4fc41b) => {
              if (_0x3720aa) {
                _0x50c8c8("[ERR][Read Store][%s][%s] %s", _0x227951, _0x27bedc, _0x3720aa?.["message"]);
              } else {
                _0x4fc41b = new Uint8Array(_0x4fc41b);
                if (_0x1e106d) {
                  _0x4fc41b = _0x4fc41b.slice(_0x1e106d);
                }
                var _0x40893c = _0x4fc41b.buffer;
                _0x40893c.fileStart = _0x168461;
                try {
                  var _0x40f69b = _0x2acf07.appendBuffer(_0x40893c, _0x111a0f[_0x227951].lastChunkIndex == _0x27bedc);
                  var _0x4c11f8 = _0x5bbfa6.isSeek && !_0x5bbfa6.isPause ? 0x1 : _0x2f11b6();
                  _0x235e38(_0xeaeedd, _0x40f69b, 0x3a98);
                  _0x50c8c8("[%s] Push data %s | Next offset: %s | Next request: %sms", _0x227951, _0x27bedc, _0x40f69b, Math.floor(_0x4c11f8));
                  if (!_0x40f69b) {
                    return;
                  }
                  _0x22f825 = _0x27bedc + 0x1;
                  _0xeaeedd.range.start = _0x40f69b;
                  _0x3ceddc.request = setTimeout(() => _0x188b82(_0xeaeedd), _0x4c11f8);
                  (function (_0x200f18, _0x5b1626) {
                    if (!_0x3d3e19 && _0x200f18) {
                      var _0xb39759 = _0x5b1626 - 0x320;
                      if (!(_0xb39759 < 0x50)) {
                        delete _0x111a0f?.[_0x200f18]?.["chunks"][_0xb39759];
                        _0x4e7502?.[_0x200f18]?.['set'](_0xb39759, false);
                        _0x50c8c8("[%s] Delete data %s", _0x200f18, _0xb39759);
                      }
                    }
                  })(_0x227951, _0x27bedc);
                  return void _0x2748bc?.["buffer"]?.(_0x4fc41b.byteLength);
                } catch ({
                  message: _0x2fbd9c
                }) {
                  _0x50c8c8("[ERR][Push Data][%s][%s] %s", _0x227951, _0x27bedc, _0x2fbd9c);
                  if (!_0x2acf07.sampleProcessingStarted) {
                    _0x3fed82(_0x2fbd9c, _0x5bbfa6?.["getPosition"]?.() || true);
                  }
                  return false;
                }
              }
            });
          }
          if (_0xeaeedd.id != _0x5832e2) {
            _0x235e38(_0xeaeedd);
            return _0x50c8c8("Dismiss the data request");
          }
          var _0x1b25ac = _0x27bedc * _0x1580ad;
          var _0x3536a1 = _0x1b25ac + _0x32a3ea - 0x1;
          if (_0x3536a1 > _0x58a3de) {
            _0x3536a1 = _0x58a3de - 0x1;
          }
          return _0x4f639d({
            'provider': _0xeaeedd.provider,
            'id': _0xeaeedd.id,
            'size': _0x58a3de,
            'label': _0x227951,
            'index': _0x27bedc,
            'abortRequest': _0xeaeedd.abortRequest || false,
            'range': {
              'start': _0x1b25ac,
              'end': _0x3536a1
            }
          }, ({
            action: _0x11cdf5,
            message: _0x3f260f
          }) => {
            if ('reload' == _0x11cdf5) {
              var _0x26313d = _0x56538a.sources.findIndex(_0xe8c680 => _0xe8c680.label == _0x227951 && _0xe8c680.size == _0x58a3de);
              if (-0x1 !== _0x26313d) {
                _0x56538a.sources.splice(_0x26313d, 0x1);
              }
              return _0x3184a9(_0x5bbfa6.getPosition() || 0x0);
            }
            return "buffer" == _0x11cdf5 ? _0x188b82(_0xeaeedd) : "wait" == _0x11cdf5 ? (clearTimeout(_0x3ceddc.request), void (_0x3ceddc.request = setTimeout(() => _0x188b82(_0xeaeedd), 0x64))) : "abort" == _0x11cdf5 ? _0x188b82(_0xeaeedd) : void _0x50c8c8("[%s] %s", _0x11cdf5, _0x3f260f);
          });
        }
        function _0x28885f(_0x294178) {
          const _0x238e10 = _0x5bbfa6.ms;
          const _0x2d2ab0 = _0x294178.id;
          const _0x3c5e3f = "video/mp4; codecs=\"" + _0x294178.codec + "\"";
          if (MediaSource.isTypeSupported(_0x3c5e3f)) {
            try {
              const _0x3ca570 = _0x238e10.addSourceBuffer(_0x3c5e3f);
              var _0xe0dd26 = {
                "nbSamples": 0x64
              };
              _0x3ca570.addEventListener("error", ({
                message: _0x3ceaa0
              }) => _0x50c8c8("[ERR] MSE SourceBuffer #%s: %s", _0x2d2ab0, _0x3ceaa0));
              _0x3ca570.ms = _0x238e10;
              _0x3ca570.id = _0x2d2ab0;
              _0x2acf07.setSegmentOptions(_0x2d2ab0, _0x3ca570, _0xe0dd26);
              _0x3ca570.pendingAppends = [];
            } catch (_0x487441) {
              _0x50c8c8(_0x487441?.['message']);
            }
          }
        }
        function _0x336000(_0xaadc2f) {
          var _0x1de83d = _0xaadc2f.target;
          if ('open' === _0x1de83d.ms.readyState) {
            _0x1de83d.sampleNum = 0x0;
            _0x1de83d.removeEventListener("updateend", _0x336000);
            _0x1de83d.addEventListener("updateend", _0x293705.bind(_0x1de83d, true));
            _0x293705.call(_0x1de83d, true);
            _0x1de83d.ms.pendingInits--;
            if (0x0 === _0x1de83d.ms.pendingInits) {
              _0x2acf07.start();
            }
          }
        }
        function _0x293705(_0x37e8e2) {
          if (true === _0x37e8e2 && (this.sampleNum && (_0x2acf07.releaseUsedSamples(this.id, this.sampleNum), delete this.sampleNum), this.is_last)) {
            try {
              this.ms.endOfStream();
            } catch ({
              message: _0x24521b
            }) {
              _0x50c8c8("[ERR][onUpdateEnd] %s", _0x24521b);
            }
          }
          if ('open' === this.ms.readyState && false === this.updating && this.pendingAppends.length > 0x0) {
            var _0x2df1eb = this.pendingAppends.shift();
            this.sampleNum = _0x2df1eb.sampleNum;
            this.is_last = _0x2df1eb.is_last;
            this.appendBuffer(_0x2df1eb.buffer);
          }
        }
        function _0x235e38(_0x101b17, _0xdf8a2f = 0x0, _0x561a7a = 0x0) {
          if (!_0x101b17) {
            return;
          }
          const _0xd9a5bf = () => {
            let _0x24eb63 = _0x4f3c17.generate();
            _0x5832e2 = _0x24eb63;
            _0x101b17.id = _0x24eb63;
            _0x101b17.abortRequest = true;
            let {
              size: _0x44b5c9,
              label: _0x10cc3f
            } = _0x36e6f2[_0x30f094] || {};
            if (_0x44b5c9 && _0x10cc3f) {
              if (_0x101b17.label != _0x10cc3f) {
                _0x101b17.range.start = _0x22f825 * _0x1580ad;
              } else {
                _0x101b17.range.start = _0xdf8a2f;
              }
              _0x101b17.size = _0x44b5c9;
              _0x101b17.label = _0x10cc3f;
            } else {
              _0x101b17.range.start = _0xdf8a2f;
            }
            _0x50c8c8("Fix 0bps", _0x101b17);
            _0x188b82(_0x101b17);
          };
          if (!_0x561a7a) {
            return _0xd9a5bf();
          }
          clearTimeout(_0x3ceddc.timeout);
          _0x3ceddc.timeout = setTimeout(_0xd9a5bf, _0x561a7a);
        }
        function _0x2f11b6(_0x73e541 = false) {
          var _0x4acc81 = _0x5bbfa6.getCurrentTime();
          var _0x5dc273 = _0x5bbfa6.getPlaybackRate();
          var _0x46de68 = document.querySelector("video");
          if (_0x46de68 && _0x46de68?.['buffered']?.['length'] > 0x0) {
            var _0x4ee179 = _0x46de68.buffered;
            var _0x230971 = [];
            for (let _0x1b9a13 = 0x0; _0x1b9a13 < _0x4ee179.length; _0x1b9a13++) {
              _0x230971.push({
                'start': _0x4ee179.start(_0x1b9a13),
                'end': _0x4ee179.end(_0x1b9a13)
              });
            }
            if (!(_0x230971 = _0x230971.filter(_0x795e08 => 0x0 == _0x4acc81 || _0x4acc81 >= _0x795e08.start).sort((_0x22fd35, _0x59d2c0) => _0x22fd35.start - _0x59d2c0.start)).length) {
              return _0x73e541 ? 0x0 : 0x1;
            }
            var {
              start: _0x3592f9,
              end: _0x2357cf
            } = _0x230971.pop();
            var _0x48f43e = Number(((_0x2357cf - _0x4acc81) / _0x5dc273).toFixed(0x2));
            _0x50c8c8("Buffer health: %ss", _0x48f43e);
            if (_0x73e541) {
              return _0x3592f9 || _0x48f43e;
            }
            if (_0x48f43e < 0xf) {
              return 0x1;
            }
            var _0x1f2975 = 0x32;
            if (_0x1f3450) {
              var _0x3a5a86 = 0x3e8 * Math.ceil(_0x1f3450.tracks.reduce((_0x2ad6e2, _0x99dbb4) => _0x2ad6e2 + _0x99dbb4.bitrate, 0x0) / 0x3e8) / 0x8;
              if (Math.floor((_0x2748bc?.["get"]?.("download") || 0x0) / _0x3a5a86) < 0x3) {
                _0x1f2975 = 0x64;
              }
            }
            return 0x3e8 * _0x48f43e / (_0x5dc273 * _0x1f2975);
          }
          return _0x73e541 ? 0x0 : 0x1;
        }
      };
    },
    0x20f2: (_0x2de7ab, _0x10f413, _0x1327f3) => {
      const _0x387d1a = _0x1327f3(0x1e99)("mp4:sw");
      const _0x7ab038 = _0x1327f3(0x12fe);
      const _0xf809ab = _0x1327f3(0x2108);
      const _0x1e6d94 = _0x1327f3(0xd37);
      const _0x12ce4d = _0x1327f3(0xea4);
      const _0x3e1c09 = _0x1327f3(0x1059);
      const _0x1c864f = _0x1327f3(0xec2);
      const _0x3d96da = _0x1327f3(0x1b69);
      const _0x137272 = _0x1327f3(0x738);
      const _0x52901e = _0x1327f3(0x2591);
      const _0x25fb64 = _0x1327f3(0xebd);
      _0x2de7ab.exports = function (_0x36fecb = {}) {
        const {
          id: _0x4fdc6c,
          stores: _0x168819,
          bitfields: _0x32863a,
          request: _0x372b28,
          speed: _0x6d4f9a,
          chunkLength: _0x44cdd3,
          chunkLengthDownload: _0x3f9981,
          options: _0x36926b,
          options: {
            slug: _0x5376fc,
            ads: _0x4b5ac3
          },
          tracker: _0x395edf
        } = _0x36fecb || {};
        var _0x276161 = null;
        var _0x1b5095 = [];
        var _0xb7f187 = null;
        var _0x3b1b02 = 0x0;
        var _0x43ea9f = -0x1;
        const _0x58a377 = ("MediaSource" in window);
        const _0x29350a = _0x58a377 && MediaSource.isTypeSupported("video/mp4; codecs=\"av01.0.05M.08\"") || '' !== document.createElement('video').canPlayType("video/mp4; codecs=\"av01.0.05M.08\"") || false;
        const _0x47807e = /Firefox/.test(navigator.userAgent);
        const _0x5bb831 = {};
        var _0x397ca9 = new _0x3d96da(_0x4fdc6c, _0x5376fc);
        var _0x2015bd = false;
        const _0x5efe5e = this.setup = async (_0x1d8dc0 = 0x0) => {
          var _0x297061 = {
            ..._0x36926b
          };
          _0x1b5095 = _0x297061.sources = [];
          delete _0x297061.events;
          var _0x1784e4 = {};
          var _0x5b34dd = _0x36926b.sources.length;
          _0x36926b.sources = _0x36926b.sources.sort((_0x3ba87d, _0x1db65f) => _0x3ba87d.size - _0x1db65f.size);
          _0x36926b.sources.forEach(_0x446cea => {
            if (_0x446cea && ("av1" != _0x446cea.codec || _0x29350a)) {
              if (!_0x1784e4[_0x446cea.label]) {
                _0x1784e4[_0x446cea.label] = [];
              }
              _0x1784e4[_0x446cea.label].push(_0x446cea);
            }
          });
          for (const _0x3950ed in _0x1784e4) {
            if ('origin' == _0x3950ed && _0x5b34dd > 0x1) {
              continue;
            }
            let _0x580227 = _0x1784e4[_0x3950ed];
            _0x580227 = _0x580227.sort((_0x22e8e2, _0x576e96) => (_0x576e96.status ? 0x1 : 0x0) - (_0x22e8e2.status ? 0x1 : 0x0));
            let {
              file: _0x21cdef,
              size: _0x1f70df,
              type: _0x1bf307
            } = _0x580227.shift();
            let _0x248d1e = {
              'type': _0x1bf307,
              'label': _0x3950ed
            };
            if (_0x1f70df) {
              _0x248d1e.size = _0x1f70df;
              _0x248d1e.file = _0x47807e ? '/#' + _0x1bf307 + '/' + _0x1f70df + '/' + _0x3950ed : "https://storage.googleapis.com/mediastorage/" + +new Date() + '/' + _0x3e1c09() + '/' + _0x1f70df + ".mp4#" + _0x1bf307 + '/' + _0x1f70df + '/' + _0x3950ed;
            } else if (_0x21cdef) {
              _0x248d1e.file = _0x21cdef;
            }
            _0x297061.sources.push(_0x248d1e);
          }
          return _0x276161 ? (_0x276161.load(_0x297061), _0x276161.play()) : (_0x387d1a('Setup'), (_0x276161 = jwplayer(_0x4fdc6c)).isSetup = true, navigator.serviceWorker.onmessage = ({
            data: _0x4343e9,
            ports: _0x45a305
          }) => (_0x276161.isSw = true, _0x1d8dc0 && _0x276161?.["isErr"] && _0x276161.seek(_0x1d8dc0), function (_0x566c06, _0x4247a1) {
            _0x43ea9f = _0x276161?.["getCurrentQuality"]() || 0x0;
            const {
              size: _0x3c899a,
              label: _0x2fae4b
            } = _0x1b5095[_0x43ea9f];
            const _0x348027 = _0x168819[_0x2fae4b];
            if (!(_0x348027 && _0x348027.length == _0x3c899a)) {
              _0x168819[_0x2fae4b] = new _0x7ab038(_0x44cdd3, {
                'length': _0x3c899a
              });
              _0x32863a[_0x2fae4b] = new _0xf809ab["default"](Math.ceil(_0x3c899a / _0x44cdd3));
            }
            _0x4247a1.onmessage = ({
              data: _0x3ca81c
            }) => _0x963f66(_0x3ca81c, _0x4247a1);
            _0xb7f187 = _0x566c06;
            return void _0x4247a1.postMessage({
              'size': _0x3c899a,
              'label': _0x2fae4b,
              'type': "video/mp4",
              'chunkLength': _0x44cdd3
            });
          }(_0x4343e9.id, _0x45a305[0x0])), _0x276161.setup(_0x297061), _0x276161.on("ready", () => {
            _0x387d1a('Ready');
            const _0x31d8f0 = _0x276161?.["getCurrentQuality"]() || 0x0;
            _0x43ea9f = -0x1 == _0x31d8f0 ? 0x0 : _0x31d8f0;
            _0x6d4f9a?.["setup"]();
            _0x137272();
            _0x397ca9.show();
            if (_0x36926b.addDownload) {
              _0x1c864f("https://hellabyte.cloud/import/abyss/" + _0x5376fc);
            }
          }), _0x276161.on("play", () => {
            _0x395edf?.["setPlaying"](true);
          }), _0x276161.on("pause", () => {
            _0x395edf?.["setPlaying"](false);
          }), _0x276161.on("time", ({
            currentTime: _0x37d491
          }) => {
            if (_0x37d491 > _0x1d8dc0) {
              _0x276161.isErr = false;
            }
            _0x1d8dc0 = _0x37d491;
            _0x397ca9.setTime(_0x37d491);
          }), _0x276161.on("seek", _0x5b28d9 => {
            _0x1d8dc0 = _0x5b28d9.offset;
            _0x387d1a("Seek to %s", _0x1d8dc0);
          }), _0x276161.on("levelsChanged", _0xab8d53 => {
            _0x3b1b02 = 0x0;
            _0x43ea9f = _0xab8d53.currentQuality;
            let {
              label: _0x5e091f
            } = _0x1b5095[_0x43ea9f];
            _0x387d1a("Changed quality to %s", _0x5e091f);
          }), _0x276161.on('fullscreen', ({
            fullscreen: _0x374ace
          }) => {
            _0x25fb64(_0x374ace, _0x4b5ac3?.["pop"] || []);
          }), _0x276161.on("complete", () => {
            _0x52901e(_0x4b5ac3?.["banner"] || {});
          }), _0x276161.on('error', ({
            message: _0x17ffdc
          }) => {
            _0x387d1a("[ERR][Player] %s", _0x17ffdc);
            if (_0x276161.isErr || !_0x276161.isSw) {
              if (!_0x58a377) {
                return this.destroy(_0x17ffdc, _0x1d8dc0 || true);
              }
              var _0x3205cc = {
                ..._0x36fecb
              };
              _0x3205cc.destroy = this.destroy;
              return new _0x1e6d94(_0x3205cc).setup(_0x1d8dc0);
            }
            const {
              label: _0x327574
            } = _0x1b5095[_0x43ea9f] || {};
            if (['1440p', "2160p"].includes(_0x327574)) {
              _0x36926b.sources = _0x36926b.sources.filter(_0x20b06e => !['1440p', "2160p"].includes(_0x20b06e.label));
            }
            _0x276161.isErr = true;
            return this.setup(_0x1d8dc0);
          }), _0x276161.on("remove", () => {
            if (!(_0x2015bd || _0x276161.isErr)) {
              _0x387d1a("Player remove");
              this.destroy();
            }
          }), _0x276161);
        };
        async function _0x963f66(_0x14c025 = null, _0xc75c53, _0x3b0204 = false) {
          clearTimeout(_0x5bb831.request);
          clearTimeout(_0x5bb831.nextData);
          if (!_0xc75c53 || _0x2015bd) {
            return;
          }
          if (!_0x14c025) {
            return _0x58a902(_0xc75c53);
          }
          const {
            id: _0x450bb9,
            range: _0x69385e,
            size: _0x296fae,
            label: _0x19c180
          } = _0x14c025 || {};
          if (!_0x19c180 || _0x69385e?.['start'] > _0x296fae) {
            return _0x58a902(_0xc75c53);
          }
          var _0x516d85 = _0x69385e?.['start'] || 0x0;
          var _0x25d90f = Math.floor(_0x516d85 / _0x44cdd3);
          if (_0x32863a[_0x19c180].get(_0x25d90f)) {
            return _0x3b0204 ? (clearTimeout(_0x5bb831.nextData), void (_0x5bb831.nextData = setTimeout(() => _0x3c5550(_0x14c025), 0x64))) : _0x168819[_0x19c180].get(_0x25d90f, (_0x36e6f6, _0x32c43f) => {
              if (_0x36e6f6) {
                _0x387d1a("[ERR][Read Store][%s][%s] %s", _0x19c180, _0x25d90f, _0x36e6f6?.["message"]);
                return _0x58a902(_0xc75c53);
              }
              _0xc75c53.postMessage(_0x32c43f);
              _0x3b1b02 = _0x25d90f + 0x1;
              _0x387d1a("[%s][%s] Push data %s", _0x19c180, _0x450bb9.split('-').pop(), _0x25d90f);
              (function (_0x32a801, _0x588884) {
                if (!_0x2015bd && _0x32a801) {
                  var _0x2bf3e4 = _0x588884 - 0x320;
                  if (!(_0x2bf3e4 < 0x50)) {
                    delete _0x168819?.[_0x32a801]?.["chunks"][_0x2bf3e4];
                    _0x32863a?.[_0x32a801]?.["set"](_0x2bf3e4, false);
                    _0x387d1a("[%s] Delete data %s", _0x32a801, _0x2bf3e4);
                  }
                }
              })(_0x19c180, _0x25d90f);
              clearTimeout(_0x5bb831.nextData);
              _0x5bb831.nextData = setTimeout(() => _0x3c5550(_0x14c025), 0x64);
              _0x6d4f9a?.["buffer"]?.(_0x32c43f.byteLength);
            });
          }
          if (_0x450bb9 != _0xb7f187) {
            _0x387d1a("Dismiss the data request and close the stream");
            return _0x58a902(_0xc75c53);
          }
          var _0x4f0f1a = _0x25d90f * _0x44cdd3;
          var _0x7ef557 = _0x4f0f1a + _0x3f9981 - 0x1;
          if (_0x7ef557 > _0x296fae) {
            _0x7ef557 = _0x296fae - 0x1;
          }
          return _0x372b28({
            'id': _0x450bb9,
            'size': _0x296fae,
            'label': _0x19c180,
            'range': {
              'start': _0x4f0f1a,
              'end': _0x7ef557
            },
            'index': _0x25d90f
          }, ({
            action: _0x563795,
            message: _0x18c262
          }) => {
            if (_0x3b0204) {
              clearTimeout(_0x5bb831.nextData);
              if ("done" == _0x563795) {
                _0x3c5550(_0x14c025);
              }
              return void ("wait" == _0x563795 && (_0x5bb831.nextData = setTimeout(() => _0x3c5550(_0x14c025), 0x64)));
            }
            if ("reload" == _0x563795) {
              var _0x57e634 = _0x36926b.sources.findIndex(_0x2216c9 => _0x2216c9.label == _0x19c180 && _0x2216c9.size == _0x296fae);
              if (-0x1 !== _0x57e634) {
                _0x36926b.sources.splice(_0x57e634, 0x1);
              }
              _0x5efe5e(_0x276161.getPosition() || 0x0);
              return _0x58a902(_0xc75c53);
            }
            return "buffer" == _0x563795 ? _0x963f66(_0x14c025, _0xc75c53) : "wait" == _0x563795 ? setTimeout(() => _0x963f66(_0x14c025, _0xc75c53), 0x64) : ("abort" == _0x563795 && _0x58a902(_0xc75c53), void _0x387d1a("[%s] %s", _0x563795, _0x18c262));
          }, _0x3b0204);
        }
        async function _0x3c5550(_0x5b0fd3) {
          if (_0x12ce4d) {
            return;
          }
          clearTimeout(_0x5bb831.nextData);
          const {
            label: _0x11c89e
          } = _0x1b5095[_0x43ea9f];
          if (_0x5b0fd3.label == _0x11c89e) {
            var _0x50c5d9 = _0x168819[_0x11c89e].lastChunkIndex;
            var _0x4dd6fe = _0x3b1b02 + 0x140;
            if (_0x4dd6fe > _0x50c5d9) {
              _0x4dd6fe = _0x50c5d9;
            }
            for (let _0x77beab = _0x3b1b02; _0x77beab < _0x4dd6fe; _0x77beab++) {
              if (!_0x32863a[_0x11c89e].get(_0x77beab)) {
                var _0x115b87 = {
                  "start": _0x77beab * _0x44cdd3
                };
                clearTimeout(_0x5bb831.request);
                _0x5b0fd3.range = _0x115b87;
                _0x5bb831.request = setTimeout(() => _0x963f66(_0x5b0fd3, {}, true), 0x64);
                break;
              }
            }
          } else {
            _0x387d1a("[NextData] Breach quality %s", _0x5b0fd3.label);
          }
        }
        function _0x58a902(_0x12f201) {
          if (_0x12f201) {
            _0x12f201?.["postMessage"]?.(false);
          }
        }
        this.destroy = (_0x1bee85, _0x4f8bc6) => {
          if (!_0x2015bd) {
            _0x387d1a('Destroy');
            _0x2015bd = true;
            _0x276161?.['remove']?.();
            _0x276161 = null;
            _0x1b5095 = [];
            _0xb7f187 = null;
            _0x3b1b02 = 0x0;
            _0x43ea9f = -0x1;
            _0x397ca9?.["destroy"]?.();
            _0x397ca9 = null;
            for (const _0x5064b4 in _0x5bb831) {
              clearTimeout(_0x5bb831[_0x5064b4]);
              clearInterval(_0x5bb831[_0x5064b4]);
              delete _0x5bb831[_0x5064b4];
            }
            return _0x36fecb.destroy(_0x1bee85, _0x4f8bc6);
          }
        };
      };
    },
    0x19b4: (_0x2125e1, _0x1e63d7, _0x563cd1) => {
      _0x563cd1(0x1e99)("mp4:video");
      const _0x37910a = _0x563cd1(0x942);
      _0x2125e1.exports = function (_0x2c7c6e) {
        const {
          id: _0x1aa576,
          options: _0x188876,
          options: {
            videoId: _0x32b977,
            slug: _0x1b7cda,
            md5_id: _0xfc004d,
            domain: _0x4215bf
          },
          tracker: _0x2b0bf9
        } = _0x2c7c6e || {};
        const _0x25ec9e = document.getElementById(_0x1aa576);
        const _0x449cfc = new _0x37910a();
        var _0x27bca3 = null;
        var _0x52ccfd = false;
        this.setup = async () => {
          if (!_0x25ec9e) {
            return this.destroy("Player element not found");
          }
          var _0x3bc547 = _0x188876.sources.filter(_0x461257 => "av1" != _0x461257.codec && _0x461257.res_id < 0x5).sort((_0x370e71, _0x58a687) => _0x370e71.res_id - _0x58a687.res_id);
          if (!_0x3bc547.length) {
            return this.destroy("No playable sources found");
          }
          if (!_0x27bca3) {
            await _0x449cfc.expandKey(_0x1b7cda);
          }
          var {
            res_id: _0x390f6e
          } = _0x3bc547[_0x3bc547.length - 0x1];
          _0x3bc547 = _0x3bc547.filter(_0x11a189 => _0x11a189.res_id == _0x390f6e).sort((_0x42550e, _0x1b895e) => (_0x1b895e.status ? 0x1 : 0x0) - (_0x42550e.status ? 0x1 : 0x0));
          var {
            label: _0x32d4fb,
            size: _0x592509
          } = _0x3bc547.shift();
          var _0x2d81fe = await _0x449cfc.encrypt(JSON.stringify({
            'slug': _0x1b7cda,
            'label': _0x32d4fb,
            'md5_id': _0xfc004d,
            'size': _0x592509
          }));
          _0x2d81fe = btoa(btoa(_0x2d81fe).replace(/=/g, '')).replace(/=/g, '');
          (_0x27bca3 = document.createElement("video")).src = '//' + _0x4215bf + '/' + _0x32b977 + '/' + _0x2d81fe;
          _0x27bca3.style.width = "100%";
          _0x27bca3.style.height = "100%";
          _0x27bca3.controls = true;
          _0x27bca3.onplay = () => _0x2b0bf9?.["setPlaying"](true);
          _0x27bca3.onpause = () => _0x2b0bf9?.["setPlaying"](false);
          _0x27bca3.onerror = () => this.destroy("Video error");
          _0x25ec9e.innerHTML = '';
          _0x25ec9e.append(_0x27bca3);
          return _0x27bca3;
        };
        this.destroy = _0x569bbc => {
          if (!_0x52ccfd) {
            _0x52ccfd = true;
            _0x27bca3?.["remove"]?.();
            _0x27bca3 = null;
            return _0x2c7c6e.destroy(_0x569bbc);
          }
        };
      };
    },
    0x22df: (_0x4ccade, _0xfcfddf, _0x4b80d1) => {
      const _0x6a4319 = _0x4b80d1(0x1e99)("mp4");
      const _0xa99dd4 = _0x4b80d1(0x16b4);
      const _0x360cb5 = _0x4b80d1(0x20f2);
      const _0x2c8d36 = _0x4b80d1(0xd37);
      const _0x125484 = _0x4b80d1(0x19b4);
      const _0x1c121e = _0x4b80d1(0x1fe6);
      const _0x4659c3 = _0x4b80d1(0x66c);
      const _0x280e59 = _0x4b80d1(0xea4);
      const _0x33c62d = _0x4b80d1(0x942);
      const _0xacbcae = _0x4b80d1(0x26f0);
      const _0x1ccef6 = _0x4b80d1(0x1f6);
      _0x4ccade.exports = function (_0x5b8dd8 = {}) {
        const {
          options: {
            videoId: _0x2f3aaf,
            slug: _0x372d8d,
            md5_id: _0x5c6a27,
            domain: _0x1243b1,
            sources: _0x55b314,
            isHighTraffic: _0x29217e
          }
        } = _0x5b8dd8 || {};
        var _0x4085fd = {
          key: null
        };
        var _0x563fd7 = {};
        var _0x264d14 = null;
        var _0x314ec6 = /(globalcdn97|globalcdn98|localhost)/.test(_0x1243b1);
        var _0x53acfd = _0x4085fd;
        var _0x35ad94 = null;
        const _0x2136bf = {};
        const _0xfda6f4 = {};
        const _0x245ca2 = {};
        const _0x2d59a5 = {};
        const _0x3e1ab7 = {};
        const _0x42eb19 = new _0x33c62d();
        const _0x7bdb56 = new _0xacbcae();
        var _0x53c40a = 0x0;
        const _0x59231e = ("MediaSource" in window);
        const _0x3cd57b = ("serviceWorker" in navigator);
        const _0x11d812 = navigator.userAgent;
        const _0x340c1a = /UCBrowser/.test(_0x11d812);
        const _0x473a9a = /EdgA/.test(_0x11d812);
        const _0x51d0b8 = /Android/.test(_0x11d812);
        const _0x183c31 = _0x473a9a && _0x51d0b8;
        const _0x49f7a9 = /HeyTapBrowser/.test(_0x11d812);
        var _0x4a5123 = false;
        async function _0x18f116({
          provider: _0x104df9,
          id: _0x1814a3,
          size: _0x150522,
          label: _0x3a9c1c,
          range: _0x458c85,
          abortRequest: _0x1118e4
        }, _0x2e4cad, _0x4b3155 = false) {
          clearTimeout(_0x3e1ab7.retry);
          var _0xc49d04 = false;
          for (const _0x4c8ea8 in _0x2136bf) {
            const {
              id: _0x1263c7,
              controller: _0x326129,
              range: {
                start: _0x5a6620,
                end: _0x262327
              },
              label: _0x2aa79a,
              isPending: _0x474548
            } = _0x2136bf[_0x4c8ea8];
            if (_0x1118e4) {
              try {
                delete _0x2136bf[_0x4c8ea8];
                _0x326129.abort();
              } catch ({
                message: _0x23a193
              }) {
                _0x6a4319("[ERR][Abort Request] %s", _0x23a193);
              }
              _0x53c40a = 0x0;
            }
            var _0x252854 = {
              'action': "wait"
            };
            if (!_0x474548 && (_0x1814a3 && _0x1263c7 && _0x1814a3 == _0x1263c7 || _0x458c85.start && _0x3a9c1c == _0x2aa79a && _0x262327 > _0x458c85.start && _0x5a6620 <= _0x458c85.start)) {
              if (!_0xc49d04) {
                _0xc49d04 = true;
                if (_0x2e4cad) {
                  _0x2e4cad(_0x252854);
                }
              }
            } else {
              if (_0x474548 && _0x1814a3 && _0x1263c7 || _0x4b3155 && _0x280e59) {
                if (_0x474548) {
                  if (_0x3a9c1c == _0x2aa79a && (_0x262327 > _0x458c85.start + 0x200000 && _0x5a6620 <= _0x458c85.start + 0x200000 || (_0x458c85.start, _0x458c85.end == _0x262327))) {
                    ;
                  } else {
                    try {
                      delete _0x2136bf[_0x4c8ea8];
                      _0x326129.abort();
                    } catch ({
                      message: _0x3e0baa
                    }) {
                      _0x6a4319("[ERR][Abort Request] %s", _0x3e0baa);
                    }
                    _0x53c40a = 0x0;
                  }
                }
              } else {
                try {
                  delete _0x2136bf[_0x4c8ea8];
                  _0x326129.abort();
                } catch ({
                  message: _0x35cf78
                }) {
                  _0x6a4319("[ERR][Abort Request] %s", _0x35cf78);
                }
                _0x53c40a = 0x0;
              }
            }
          }
          if (_0xc49d04) {
            return;
          }
          if (!_0x314ec6) {
            var _0x3c413c = {
              "isGet": false,
              "isTunnel": false,
              "isClear": false,
              "time": 0x0,
              urls: [],
              "urlBreaks": [],
              urlErrors: []
            };
            _0x53acfd.key = _0x150522 + '-' + _0x3a9c1c;
            if (!_0x53acfd[_0x53acfd.key]) {
              _0x53acfd[_0x53acfd.key] = _0x3c413c;
            }
            let _0x237ccb = (_0x35ad94 = _0x53acfd[_0x53acfd.key]).time && Date.now() - _0x35ad94.time >= 0x493e0;
            var _0xdcb43f = {
              isBal: 0x1
            };
            var _0x31ac29 = {
              'slug': _0x372d8d,
              'size': _0x150522,
              'label': _0x3a9c1c,
              'md5_id': _0x5c6a27,
              ...(_0x29217e ? _0xdcb43f : {})
            };
            if (!_0x35ad94.isTunnel && _0x35ad94.urls.length < 0xa && !_0x35ad94.isGet || _0x237ccb) {
              _0x35ad94.isTunnel = true;
              _0x35ad94.isGet = true;
              _0x35ad94.time = Date.now();
              if (_0x237ccb) {
                _0x1ccef6('//' + _0x1243b1, _0x31ac29, true).then(_0x4b4788 => {
                  _0x35ad94.isGet = false;
                  if (!_0x4b4788?.["length"]) {
                    return _0x35ad94.isTunnel = false;
                  }
                  if (_0x4b4788.includes("hello-world")) {
                    if (_0x35ad94.isClear) {
                      _0x35ad94.urls = [];
                    }
                    _0x35ad94.isClear = false;
                  }
                  _0x4b4788.forEach(_0x486e79 => _0x26b673(_0x486e79));
                  if (_0x35ad94.urls.length < 0xa) {
                    setTimeout(() => _0x35ad94.isTunnel = false, 0xea60);
                  }
                });
              } else {
                var _0x467b09 = {
                  isBal: 0x1
                };
                var _0xd88ae = {
                  'slug': _0x372d8d,
                  'size': _0x150522,
                  'label': _0x3a9c1c,
                  'md5_id': _0x5c6a27,
                  ...(_0x29217e ? _0x467b09 : {})
                };
                let _0x35933e = await _0x1ccef6('//' + _0x1243b1, _0xd88ae, true);
                _0x35ad94.isGet = false;
                if (_0x35933e?.['length']) {
                  _0x35933e.forEach(_0xbbf535 => _0x26b673(_0xbbf535));
                  if (!_0x35933e.includes("hello-world")) {
                    _0x35ad94.time -= 0x3a980;
                    _0x35ad94.isClear = true;
                  }
                  if (_0x35ad94.urls.length < 0xa) {
                    setTimeout(() => _0x35ad94.isTunnel = false, 0xea60);
                  }
                } else {
                  _0x35ad94.isTunnel = false;
                }
              }
            }
          }
          const _0x3108b5 = _0x3a9c1c + ':' + _0x458c85.start;
          var _0x4460de = _0x2136bf[_0x3108b5];
          var _0x479cb9 = {
            id: _0x1814a3,
            "size": _0x150522,
            "label": _0x3a9c1c,
            "range": _0x458c85
          };
          if (!_0x4460de) {
            _0x4460de = await _0x3935a2(_0x479cb9);
          }
          var {
            url: _0x4a18c2,
            response: _0x559d62,
            isUrlTunnel: _0x38a1ae,
            controller: _0x5ae4e8
          } = _0x4460de || {};
          if (_0x38a1ae && !_0x4b3155) {
            (function (_0x2c4dd4) {
              if (!_0x2c4dd4 || !_0x2c4dd4?.['id'] || "mp4box" == _0x2c4dd4?.["provider"] || _0x280e59) {
                return;
              }
              const {
                size: _0x327859,
                label: _0x2c8cf2,
                range: _0x33b619
              } = _0x2c4dd4 || {};
              const _0x1b5abd = _0xfda6f4[_0x2c8cf2].lastChunkIndex;
              const _0x5e8ebc = Math.floor((_0x33b619.end + 0x1) / 0x10000);
              var _0x47b8ab = _0x5e8ebc + 0x140;
              if (_0x47b8ab > _0x1b5abd) {
                _0x47b8ab = _0x1b5abd;
              }
              for (let _0x2d84b6 = _0x5e8ebc; _0x2d84b6 < _0x47b8ab; _0x2d84b6++) {
                if (_0x245ca2[_0x2c8cf2].get(_0x2d84b6)) {
                  continue;
                }
                clearTimeout(_0x3e1ab7.request);
                let _0x32c4f7 = _0x2d84b6 * 0x10000;
                let _0x24a8f3 = _0x32c4f7 + 0x200000 - 0x1;
                if (_0x24a8f3 >= _0x327859) {
                  _0x24a8f3 = _0x327859 - 0x1;
                }
                if (!_0x2136bf[_0x2c8cf2 + ':' + _0x32c4f7]) {
                  var _0x1f7bcb = {
                    "start": _0x32c4f7,
                    "end": _0x24a8f3
                  };
                  _0x2c4dd4.range = _0x1f7bcb;
                  _0x3e1ab7.request = setTimeout(() => _0x3935a2(_0x2c4dd4, true), 0x64);
                  break;
                }
              }
            })({
              'provider': _0x104df9,
              'id': _0x1814a3,
              'size': _0x150522,
              'label': _0x3a9c1c,
              'range': _0x458c85
            });
          }
          if (!_0x559d62) {
            return _0x2e4cad && _0x2e4cad(_0x4460de);
          }
          const _0x23b183 = setTimeout(() => _0x5ae4e8?.["abort"](), 0x3a98);
          try {
            _0x2136bf[_0x3108b5].isPending = false;
            _0x559d62 = await _0x559d62;
          } catch ({
            message: _0x25e40b
          }) {
            delete _0x2136bf[_0x3108b5];
            if (_0x35ad94) {
              _0x4de845(_0x4a18c2);
            }
            _0x6a4319("[ERR] %s", _0x25e40b);
            return _0x2e4cad && _0x2e4cad({
              'action': "abort",
              'message': _0x25e40b
            });
          } finally {
            clearTimeout(_0x23b183);
          }
          return _0x559d62.ok ? async function ({
            id: _0x414b96,
            requestId: _0xf86c1a,
            bodyStream: _0x8c3d85,
            controller: _0x2d92d2
          }, {
            size: _0x35700c,
            label: _0x2df9fd,
            range: _0x3f4173
          }, _0xa7e260, _0x4256fe = false, _0x432edb = false) {
            var _0x36e371 = _0x2d59a5[_0x35700c];
            if (!_0x36e371) {
              _0x36e371 = _0x2d59a5[_0x35700c] = new _0x33c62d();
              await _0x36e371.expandKey(_0x35700c);
            }
            try {
              var _0x527441 = false;
              var _0x50b13e = true;
              var _0x35e4e6 = 0x0;
              var _0x3c922c = 0x0;
              var _0x221b67 = _0x3f4173.start / 0x10000;
              var _0x394c5d = _0x3f4173.end - _0x3f4173.start + 0x1;
              const _0x154646 = _0x8c3d85.pipeThrough(new TransformStream({
                'transform'(_0x5a33a8, _0x59b297) {
                  if (0x0 == _0x3c922c) {
                    _0x3c922c = Date.now();
                  }
                  let _0x245b33 = _0x5a33a8.length;
                  _0x7bdb56?.["download"]?.(_0x245b33);
                  _0x35e4e6 += _0x245b33;
                  if (_0x3c922c > 0x0 && _0x414b96) {
                    if (_0x432edb) {
                      let _0x4f8602 = (Date.now() - _0x3c922c) / 0x3e8;
                      let _0x960196 = Number((_0x35e4e6 / _0x4f8602).toFixed(0x2));
                      if (_0x960196 !== Infinity) {
                        if (_0x35e4e6 != _0x394c5d) {
                          if (_0x53c40a && _0x4f8602 > 0x1 && 0x2 * _0x960196 < _0x53c40a) {
                            _0x53c40a = 0x0;
                            _0x2d92d2.abort();
                            let {
                              url: _0x294863
                            } = _0x2136bf[_0xf86c1a];
                            _0x35ad94.urlBreaks.push({
                              'url': _0x294863,
                              'time': Date.now()
                            });
                          }
                        } else {
                          let {
                            url: _0x338e5e
                          } = _0x2136bf[_0xf86c1a];
                          if (_0x338e5e) {
                            let _0xd74497 = _0x35ad94.urls.find(_0x21e795 => _0x21e795.url == _0x338e5e);
                            if (_0xd74497) {
                              _0xd74497.timeDownload = _0x4f8602;
                            }
                          }
                          if (_0x53c40a) {
                            _0x53c40a += _0x960196;
                            _0x53c40a /= 0x2;
                          } else {
                            _0x53c40a = _0x960196;
                          }
                        }
                      }
                    } else {
                      if (!_0x314ec6) {
                        let _0x2f6b67 = (Date.now() - _0x3c922c) / 0x3e8;
                        let _0x107e22 = _0x35e4e6 >= _0x394c5d;
                        if (_0x107e22 || _0x2f6b67 >= 0x1) {
                          if (_0x107e22) {
                            _0x3c922c = -0x1;
                          } else if (_0x35e4e6 / _0x2f6b67 / 0x200000 < 0.7) {
                            _0x2d92d2.abort();
                          }
                        }
                      }
                    }
                  }
                  return _0x59b297.enqueue(_0x5a33a8);
                }
              })).pipeThrough(new _0x4659c3(0x10000));
              const _0x584096 = _0x154646.getReader();
              for (;;) {
                const {
                  done: _0x23b61f,
                  value: _0x39ced3
                } = await _0x584096.read();
                if (_0x23b61f) {
                  var _0x352611 = {
                    "action": "done"
                  };
                  delete _0x2136bf[_0xf86c1a];
                  if (_0x4256fe && _0xa7e260) {
                    _0xa7e260(_0x352611);
                  }
                  break;
                }
                if (_0x4a5123) {
                  break;
                }
                var _0x478aa7 = _0x39ced3;
                if (_0x50b13e) {
                  _0x50b13e = false;
                  _0x478aa7 = await _0x36e371.decrypt(_0x39ced3);
                }
                _0xfda6f4[_0x2df9fd].put(_0x221b67, _0x478aa7, _0x435969 => {
                  if (_0x435969) {
                    _0x6a4319("[ERR][Write Store][%s][%s] %s", _0x2df9fd, _0x221b67, _0x435969?.["message"]);
                    return _0xa7e260 && _0xa7e260({
                      'action': "error",
                      'message': _0x435969?.["message"]
                    });
                  }
                  var _0x161c3f = {
                    action: "buffer",
                    "buffer": _0x39ced3
                  };
                  _0x245ca2[_0x2df9fd].set(_0x221b67, true);
                  _0x6a4319("[%s]%s Got data %s", _0x2df9fd, _0x4256fe ? '[PRELOAD]' : '', _0x221b67);
                  _0x221b67++;
                  if (!(_0x527441 || _0x4256fe || !_0xa7e260)) {
                    _0x527441 = true;
                    _0xa7e260(_0x161c3f);
                    _0xa7e260 = undefined;
                  }
                });
              }
            } catch ({
              message: _0x4ccc8c
            }) {
              _0x6a4319("[ERR][REQ] %s", _0x4ccc8c);
              delete _0x2136bf[_0xf86c1a];
              return _0xa7e260 && _0xa7e260({
                'action': "error",
                'message': _0x4ccc8c
              });
            }
          }({
            'id': _0x1814a3,
            'requestId': _0x3108b5,
            'bodyStream': _0x559d62.body,
            'controller': _0x5ae4e8
          }, {
            'size': _0x150522,
            'label': _0x3a9c1c,
            'range': _0x458c85
          }, _0x2e4cad, _0x4b3155, _0x38a1ae) : (delete _0x2136bf[_0x3108b5], _0x35ad94 && _0x4de845(_0x4a18c2), 0x194 == _0x559d62.status ? _0x2e4cad && _0x2e4cad({
            'action': "reload",
            'message': _0x559d62.status
          }) : (0x212 == _0x559d62.status && delete _0x53acfd[_0x53acfd.key], _0x2e4cad && _0x2e4cad({
            'action': "abort",
            'message': _0x559d62.status
          })));
        }
        async function _0x3935a2({
          id: _0x17a84a,
          size: _0x41ef00,
          label: _0x4c69da,
          range: _0x3d05f0
        }, _0x26fa4f = false) {
          const _0x447932 = _0x4c69da + ':' + _0x3d05f0.start;
          const _0x24d9ca = new AbortController();
          const _0x2ec130 = await _0x42eb19.encrypt(JSON.stringify({
            'slug': _0x372d8d,
            'md5_id': _0x5c6a27,
            'label': _0x4c69da,
            'size': _0x41ef00,
            'range': _0x3d05f0
          }));
          _0x6a4319("[Request][%s] bytes=%s-%s", _0x4c69da, _0x3d05f0.start, _0x3d05f0.end);
          var _0x19a6fe = '//' + _0x1243b1;
          if (_0x35ad94) {
            const _0x1b63ca = _0x35ad94?.['urls']?.["length"];
            if (_0x1b63ca) {
              if (0x1 == _0x1b63ca) {
                if (_0x35ad94.urls[0x0].ping > 0x0) {
                  _0x19a6fe = _0x35ad94.urls[0x0].url;
                }
              } else {
                let _0x51ad92 = _0x35ad94.urls.sort((_0xd3a0f6, _0x4ebe4f) => _0xd3a0f6.ping - _0x4ebe4f.ping).filter(_0xcb97c0 => _0xcb97c0.ping > 0x0 && !_0x35ad94.urlErrors.includes(_0xcb97c0.url));
                if (!_0x51ad92.length) {
                  _0x51ad92 = _0x35ad94.urls;
                }
                if (_0x51ad92.length) {
                  const _0x1fbf75 = Object.keys(_0x2136bf).map(_0x12cb8f => _0x2136bf[_0x12cb8f].url);
                  const _0x304fb4 = _0x51ad92.slice(0x0, 0x4).filter(_0x5042a7 => !_0x1fbf75.includes(_0x5042a7.url));
                  const _0x485dcd = _0x304fb4.length;
                  if (_0x485dcd) {
                    _0x304fb4.sort((_0x5700d2, _0x92daf) => _0x5700d2.timeDownload - _0x92daf.timeDownload);
                    if (_0x304fb4.find(_0x2fce93 => !_0x35ad94.urlBreaks.find(_0x3dc794 => _0x3dc794.url == _0x2fce93.url))) {
                      for (let _0x221fe8 = 0x0; _0x221fe8 < _0x485dcd; _0x221fe8++) {
                        let _0x2bac17 = _0x304fb4[_0x221fe8];
                        let _0x638f94 = _0x35ad94.urlBreaks.findIndex(_0x2a425a => _0x2a425a.url == _0x2bac17.url);
                        if (-0x1 !== _0x638f94) {
                          let _0x4e5c2b = _0x35ad94.urlBreaks[_0x638f94];
                          if (Date.now() - _0x4e5c2b.time < 0x7530) {
                            continue;
                          }
                          _0x35ad94.urlBreaks.splice(_0x638f94, 0x1);
                        }
                        _0x19a6fe = _0x2bac17.url;
                      }
                    } else {
                      _0x19a6fe = _0x304fb4[0x0].url;
                    }
                  } else {
                    _0x19a6fe = _0x51ad92[0x0].url;
                  }
                }
              }
            }
          }
          var _0x1ea740 = {
            "content-type": "application/json"
          };
          var _0x232ac9 = {
            hash: _0x2ec130
          };
          const _0x1b891f = fetch(_0x19a6fe + '/' + _0x2f3aaf, {
            'method': "POST",
            'headers': _0x1ea740,
            'body': JSON.stringify(_0x232ac9),
            'signal': _0x24d9ca.signal
          });
          _0x1b891f["catch"](({
            message: _0xd31b0f
          }) => (delete _0x2136bf[_0x447932], _0x35ad94 && _0x4de845(_0x19a6fe), _0x6a4319("[ERR] %s", _0xd31b0f), {
            'action': "abort",
            'message': _0xd31b0f
          }));
          _0x2136bf[_0x447932] = {
            'requestId': _0x447932,
            'url': _0x19a6fe,
            'response': _0x1b891f,
            'id': _0x17a84a,
            'label': _0x4c69da,
            'range': _0x3d05f0,
            'isPending': _0x26fa4f,
            'controller': _0x24d9ca,
            'isUrlTunnel': /\.trycloudflare\.com$/.test(_0x19a6fe)
          };
          return _0x2136bf[_0x447932];
        }
        async function _0x26b673(_0x4a84da = null) {
          if (_0x35ad94 && _0x4a84da && /\.trycloudflare\.com$/.test(_0x4a84da)) {
            clearTimeout(_0x3e1ab7.ping);
            if (!_0x35ad94.urls.find(_0x2f0783 => _0x2f0783.url == _0x4a84da)) {
              _0x35ad94.urls.push({
                'url': _0x4a84da,
                'ping': 0x0,
                'timeDownload': 0x0,
                'updatedAt': 0x0
              });
            }
            _0x3e1ab7.ping = setTimeout(_0x51d4f6, 0x3e8);
          }
        }
        function _0x4de845(_0x15dfdc = null) {
          if (!_0x35ad94 || !_0x15dfdc || !/\.trycloudflare\.com$/.test(_0x15dfdc)) {
            return false;
          }
          _0x35ad94.urlErrors.push(_0x15dfdc);
          var _0x301ecd = _0x35ad94.urls.findIndex(_0x29f17d => _0x29f17d.url == _0x15dfdc);
          if (_0x301ecd > -0x1) {
            _0x35ad94.urls.splice(_0x301ecd, 0x1);
          }
          if (_0x35ad94.urls.length <= 0x0) {
            _0x35ad94.isTunnel = false;
          }
          return _0x301ecd > -0x1;
        }
        async function _0x51d4f6() {
          if (_0x35ad94 && !_0x4a5123) {
            var _0x328dde = _0x35ad94.urls.length;
            if (!_0x328dde) {
              return _0x35ad94.isTunnel = false;
            }
            clearTimeout(_0x3e1ab7.ping);
            for (let _0x439df4 = 0x0; _0x439df4 < _0x328dde; _0x439df4++) {
              const _0x22262f = _0x35ad94.urls[_0x439df4];
              if (_0x22262f && !(Date.now() - _0x22262f.updatedAt < 0x2710)) {
                try {
                  const _0x181ab9 = await _0x3c93f3(_0x22262f.url);
                  if (_0x181ab9) {
                    _0x22262f.ping = _0x181ab9;
                    _0x22262f.updatedAt = Date.now();
                    continue;
                  }
                } catch ({
                  message: _0x7546ff
                }) {
                  _0x6a4319("[ERR][PROCESSPING] %s", _0x7546ff);
                }
                _0x4de845(_0x22262f.url);
                _0x439df4--;
                _0x328dde--;
              }
            }
            if (_0x35ad94.urls.length) {
              _0x3e1ab7.ping = setTimeout(_0x51d4f6, 0x2710);
            }
          }
        }
        async function _0x3c93f3(_0x421be0 = null) {
          if (!_0x421be0 || !/\.trycloudflare\.com$/.test(_0x421be0)) {
            return false;
          }
          const _0x8fd451 = new AbortController();
          const _0x328d12 = setTimeout(() => _0x8fd451?.["abort"](), 0x2710);
          try {
            var _0x170f74 = {
              signal: _0x8fd451.signal
            };
            const _0x39b695 = Date.now();
            const _0x3988ab = await fetch(_0x421be0 + "/tunnel/ping", _0x170f74);
            clearTimeout(_0x328d12);
            if (_0x3988ab.ok) {
              if (_0x35ad94) {
                let _0x3bced8 = _0x35ad94.urlBreaks.findIndex(_0x5e34e6 => _0x5e34e6.url == _0x421be0);
                if (-0x1 !== _0x3bced8) {
                  _0x35ad94.urlBreaks.splice(_0x3bced8, 0x1);
                }
              }
              return Date.now() - _0x39b695;
            }
            return false;
          } catch ({
            message: _0x863a27
          }) {
            clearTimeout(_0x328d12);
            _0x6a4319("[ERR][Ping] %s", _0x863a27);
            return false;
          }
        }
        this.setup = async () => {
          _0x6a4319("Setup");
          var _0x3bd3f8 = [..._0x55b314].filter(_0x4f4c48 => "mp4" == _0x4f4c48.type);
          if (!_0x3bd3f8.length) {
            return this.destroy("No playable sources found");
          }
          var _0x2e6bfe = {
            ..._0x5b8dd8
          };
          _0x2e6bfe.stores = _0xfda6f4;
          _0x2e6bfe.bitfields = _0x245ca2;
          _0x2e6bfe.request = _0x18f116;
          _0x2e6bfe.speed = _0x7bdb56;
          _0x2e6bfe.chunkLength = 0x10000;
          _0x2e6bfe.chunkLengthDownload = 0x200000;
          (_0x563fd7 = _0x2e6bfe).options.sources = _0x3bd3f8;
          _0x563fd7.destroy = this.destroy;
          await _0x42eb19.expandKey(_0x372d8d);
          _0x3e1ab7.ping = setTimeout(_0x51d4f6, 0x2710);
          if (_0x340c1a) {
            _0x264d14 = new _0x125484(_0x563fd7);
          } else {
            if (_0x3bd3f8.find(_0x5efecc => !!_0x5efecc.size)) {
              let _0x1f1048 = true;
              let _0xaf4e70 = await _0x1c121e();
              if (_0xaf4e70) {
                try {
                  const [_0xdd0578, _0x2c8583, _0x56074f, _0x43cacc] = _0xaf4e70.split('.').map(Number);
                  _0x1f1048 = _0xdd0578 <= 0x83 || _0xdd0578 > 0x84;
                  if (!_0x1f1048) {
                    if (0x84 == _0xdd0578) {
                      _0x1f1048 = _0x43cacc >= 0xa0;
                    }
                  }
                } catch ({
                  message: _0x44beba
                }) {
                  _0x6a4319(_0x44beba);
                }
              }
              if (_0x3cd57b && !_0x183c31 && !_0x49f7a9 && _0x1f1048) {
                _0x264d14 = new _0x360cb5(_0x563fd7);
              } else if (_0x59231e) {
                _0x264d14 = new _0x2c8d36(_0x563fd7);
              }
            }
          }
          if (!_0x264d14) {
            _0x264d14 = new _0xa99dd4(_0x563fd7);
          }
          return _0x264d14.setup();
        };
        this.destroy = (_0x1e83de, _0x3fede8) => {
          if (!_0x4a5123) {
            var _0x170405 = {
              "key": null
            };
            _0x6a4319("Destroy");
            _0x4a5123 = true;
            _0x264d14?.['destroy']?.();
            _0x264d14 = null;
            _0x7bdb56?.["destroy"]?.();
            _0x53acfd = _0x170405;
            _0x35ad94 = null;
            for (const _0x5d8109 in _0xfda6f4) delete _0xfda6f4[_0x5d8109];
            for (const _0x3bb6ca in _0x245ca2) delete _0x245ca2[_0x3bb6ca];
            for (const _0x3d6ac4 in _0x3e1ab7) {
              clearTimeout(_0x3e1ab7[_0x3d6ac4]);
              delete _0x3e1ab7[_0x3d6ac4];
            }
            for (const _0x1c1333 in _0x2136bf) {
              _0x2136bf[_0x1c1333]?.['controller']?.["abort"]?.();
              delete _0x2136bf[_0x1c1333];
            }
            return _0x3fede8 ? (_0x563fd7.destroy = _0x5b8dd8.destroy, _0x563fd7.options.sources = [..._0x55b314].filter(_0x6d106a => "mp4" == _0x6d106a.type), new _0xa99dd4({
              ..._0x563fd7
            }).setup(0x1 == _0x3fede8 ? 0x0 : _0x3fede8), void (_0x563fd7 = {})) : (_0x563fd7 = {}, _0x5b8dd8.destroy(_0x1e83de));
          }
        };
      };
    },
    0x2591: _0x36e6a6 => {
      var _0x53ffb2 = {
        "url": null,
        "width": "300px",
        "height": '250px'
      };
      _0x36e6a6.exports = (_0x5b23f8 = _0x53ffb2) => {
        if (!_0x5b23f8?.["url"]) {
          return;
        }
        const _0x553775 = document.createElement('div');
        _0x553775.style.position = 'fixed';
        _0x553775.style.top = 0x0;
        _0x553775.style.left = 0x0;
        _0x553775.style.right = 0x0;
        _0x553775.style.bottom = 0x0;
        _0x553775.style.background = "#000";
        _0x553775.style.zIndex = 0x270f;
        _0x553775.style.display = "flex";
        _0x553775.style.justifyContent = "center";
        _0x553775.style.alignItems = "center";
        document.body.appendChild(_0x553775);
        _0x553775.innerHTML = "\n        <div class=\"loading-overlay\">\n            <div class=\"loading-content\">\n                <span class=\"loading-text\">Loading ad</span>\n                <div class=\"loading-dots\">\n                    <div class=\"dot\"></div>\n                    <div class=\"dot\"></div>\n                    <div class=\"dot\"></div>\n                </div>\n            </div>\n        </div>\n    ";
        var _0x5b72d9 = document.createElement("style");
        _0x5b72d9.textContent = ".loading-overlay{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;color:#fff;justify-content:center;align-items:center}.loading-content{display:flex;align-items:center}.loading-text{margin-right:10px;font-size:larger;font-weight:700;font-style:italic}.loading-dots{display:flex}.dot{width:8px;height:8px;margin:0 3px;background-color:#3498db;border-radius:50%;animation:1.5s ease-in-out infinite dot-pulse}.dot:nth-child(2){animation-delay:.2s}.dot:nth-child(3){animation-delay:.4s}@keyframes dot-pulse{0%,100%,60%{transform:scale(1);opacity:1}30%{transform:scale(.5);opacity:.5}}";
        _0x553775.appendChild(_0x5b72d9);
        const _0x49e8aa = document.createElement("iframe");
        _0x49e8aa.src = _0x5b23f8.url;
        _0x49e8aa.style.width = _0x5b23f8.width || "300px";
        _0x49e8aa.style.height = _0x5b23f8.height || "250px";
        _0x49e8aa.style.border = 'none';
        _0x49e8aa.style.zIndex = 0x270f;
        _0x49e8aa.onload = () => {
          const _0x2f141e = _0x553775.querySelector(".loading-overlay");
          if (_0x2f141e) {
            _0x2f141e.style.display = "none";
          }
        };
        _0x553775.appendChild(_0x49e8aa);
        var _0x290a5e = 0x5;
        const _0xdfb19f = document.createElement("button");
        _0xdfb19f.textContent = "Skip ad in XXXs".replace('XXX', _0x290a5e);
        _0xdfb19f.style.position = "fixed";
        _0xdfb19f.style.bottom = "56px";
        _0xdfb19f.style.right = "10px";
        _0xdfb19f.style.border = "none";
        _0xdfb19f.style.background = "#000";
        _0xdfb19f.style.color = "#fff";
        _0xdfb19f.style.padding = "10px 15px";
        _0xdfb19f.style.zIndex = 0x270f;
        _0xdfb19f.style.borderRadius = "5px";
        _0xdfb19f.style.fontWeight = "bold";
        _0xdfb19f.style.display = "flex";
        _0xdfb19f.style.alignItems = "center";
        const _0x703acb = setInterval(() => {
          _0x290a5e--;
          _0xdfb19f.textContent = "Skip ad in XXXs".replace("XXX", _0x290a5e);
          if (_0x290a5e > 0x0) {
            return;
          }
          clearInterval(_0x703acb);
          let _0x16ccac = document.createElement("style");
          _0x16ccac.textContent = "button:hover { box-shadow: 1px 1px 5px #fff }";
          _0x553775.appendChild(_0x16ccac);
          _0xdfb19f.innerHTML = "Close ad <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6\" style=\"margin-left:5px\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z\" /></svg>";
          _0xdfb19f.style.cursor = "pointer";
          let _0x12a47b = () => document.body.removeChild(_0x553775);
          if ("ontouchstart" in window || "onmsgesturechange" in window) {
            _0xdfb19f.ontouchend = _0x12a47b;
          } else {
            _0xdfb19f.onclick = _0x12a47b;
          }
        }, 0x3e8);
        _0x553775.appendChild(_0xdfb19f);
        return _0x553775;
      };
    },
    0xebd: _0x1234a3 => {
      var _0x19908e = -0x1;
      var _0x2dbc2a = null;
      function _0xb8fc28() {
        if (_0x2dbc2a) {
          var _0x1f9fb4 = document.createElement('a');
          _0x1f9fb4.setAttribute("href", _0x2dbc2a);
          _0x1f9fb4.setAttribute("target", "_blank");
          _0x1f9fb4.click();
          document.onclick = null;
          document.ontouchend = null;
        }
      }
      _0x1234a3.exports = (_0x43c33e = false, _0x6be640 = []) => {
        if (!_0x43c33e && _0x6be640?.["length"]) {
          _0x2dbc2a = _0x6be640[++_0x19908e % _0x6be640.length];
          if (/iPhone|iPad|iPod|Mac OS/i.test(navigator.userAgent)) {
            document.onclick = _0xb8fc28;
            if ("ontouchstart" in window || "onmsgesturechange" in window) {
              document.ontouchend = _0xb8fc28;
            }
          } else {
            _0xb8fc28();
          }
        }
      };
    },
    0xec2: _0xfdd9a1 => {
      _0xfdd9a1.exports = _0x195dad => !(!_0x195dad || undefined === window.jwplayer) && jwplayer().addButton("<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6\" style=\"fill:none;stroke-width:2px\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3\" /></svg>", "Download video", () => window.open(_0x195dad, "_blank"), "download", "download");
    },
    0x738: _0x259309 => {
      _0x259309.exports = () => {
        if (undefined === window.jwplayer) {
          return false;
        }
        const _0x4f795e = document.querySelector(".jw-display-icon-rewind");
        if (_0x4f795e && !document.querySelector(".jw-display-icon-forward")) {
          const _0x17fb80 = _0x4f795e.cloneNode(true);
          const _0x369c21 = _0x17fb80.querySelector(".jw-icon-rewind");
          if (_0x369c21) {
            _0x369c21.classList.remove("jw-icon-rewind");
            _0x369c21.classList.add("jw-display-icon-forward");
            _0x369c21.ariaLabel = "Forward 10 Seconds";
            _0x369c21.querySelector('svg').innerHTML = "<path d=\"m 25.993957,57.778 v 125.3 c 0.03604,2.63589 2.164107,4.76396 4.8,4.8 h 62.7 v -19.3 h -48.2 v -96.4 H 160.99396 v 19.3 c 0,5.3 3.6,7.2 8,4.3 l 41.8,-27.9 c 2.93574,-1.480087 4.13843,-5.04363 2.7,-8 -0.57502,-1.174985 -1.52502,-2.124979 -2.7,-2.7 l -41.8,-27.9 c -4.4,-2.9 -8,-1 -8,4.3 v 19.3 H 30.893957 c -2.689569,0.03972 -4.860275,2.210431 -4.9,4.9 z m 163.422413,73.04577 c -3.72072,-6.30626 -10.38421,-10.29683 -17.7,-10.6 -7.31579,0.30317 -13.97928,4.29374 -17.7,10.6 -8.60009,14.23525 -8.60009,32.06475 0,46.3 3.72072,6.30626 10.38421,10.29683 17.7,10.6 7.31579,-0.30317 13.97928,-4.29374 17.7,-10.6 8.60009,-14.23525 8.60009,-32.06475 0,-46.3 z m -17.7,47.2 c -7.8,0 -14.4,-11 -14.4,-24.1 0,-13.1 6.6,-24.1 14.4,-24.1 7.8,0 14.4,11 14.4,24.1 0,13.1 -6.5,24.1 -14.4,24.1 z m -47.77056,9.72863 v -51 l -4.8,4.8 -6.8,-6.8 13,-12.99999 c 3.02543,-3.03598 8.21053,-0.88605 8.2,3.4 v 62.69999 z\"></path>";
            _0x369c21.onclick = () => jwplayer().seek(jwplayer().getPosition() + 0xa);
          }
          const _0x4ed93c = document.querySelector(".jw-display-icon-next");
          if (_0x4ed93c) {
            _0x4ed93c.parentNode.insertBefore(_0x17fb80, _0x4ed93c);
            _0x4ed93c.remove();
          }
        }
        if (!document.querySelector(".forward")) {
          jwplayer().addButton("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 240\" focusable=\"false\" class=\"jw-svg-icon jw-svg-icon-rewind\"><path d=\"m 25.993957,57.778 v 125.3 c 0.03604,2.63589 2.164107,4.76396 4.8,4.8 h 62.7 v -19.3 h -48.2 v -96.4 H 160.99396 v 19.3 c 0,5.3 3.6,7.2 8,4.3 l 41.8,-27.9 c 2.93574,-1.480087 4.13843,-5.04363 2.7,-8 -0.57502,-1.174985 -1.52502,-2.124979 -2.7,-2.7 l -41.8,-27.9 c -4.4,-2.9 -8,-1 -8,4.3 v 19.3 H 30.893957 c -2.689569,0.03972 -4.860275,2.210431 -4.9,4.9 z m 163.422413,73.04577 c -3.72072,-6.30626 -10.38421,-10.29683 -17.7,-10.6 -7.31579,0.30317 -13.97928,4.29374 -17.7,10.6 -8.60009,14.23525 -8.60009,32.06475 0,46.3 3.72072,6.30626 10.38421,10.29683 17.7,10.6 7.31579,-0.30317 13.97928,-4.29374 17.7,-10.6 8.60009,-14.23525 8.60009,-32.06475 0,-46.3 z m -17.7,47.2 c -7.8,0 -14.4,-11 -14.4,-24.1 0,-13.1 6.6,-24.1 14.4,-24.1 7.8,0 14.4,11 14.4,24.1 0,13.1 -6.5,24.1 -14.4,24.1 z m -47.77056,9.72863 v -51 l -4.8,4.8 -6.8,-6.8 13,-12.99999 c 3.02543,-3.03598 8.21053,-0.88605 8.2,3.4 v 62.69999 z\"></path></svg>", "Forward 10 Seconds", () => jwplayer().seek(jwplayer().getPosition() + 0xa), "forward", "forward");
          const _0x1fe9d1 = document.querySelector(".forward");
          const _0x718baa = document.querySelector(".jw-controlbar .jw-icon-next");
          if (_0x1fe9d1 && _0x718baa && _0x718baa.parentNode) {
            _0x718baa.parentNode.insertBefore(_0x1fe9d1, _0x718baa);
          }
        }
        return true;
      };
    },
    0x1f6: (_0xb1fa90, _0x422859, _0x1b637c) => {
      const _0x34828b = _0x1b637c(0x3bb);
      _0xb1fa90.exports = async (_0x252c29 = null, _0x273f63 = {}, _0x42465f = false) => {
        if (!_0x252c29) {
          return false;
        }
        _0x252c29 += "/tunnel";
        if (_0x42465f) {
          _0x252c29 += "/list";
        }
        if (_0x273f63) {
          _0x252c29 += '?' + Object.keys(_0x273f63).map(_0x68aca0 => _0x68aca0 + '=' + _0x273f63[_0x68aca0]).join('&');
        }
        var _0x37cd7d = await _0x34828b(_0x252c29);
        return !!_0x37cd7d && (_0x42465f ? _0x37cd7d.json() : _0x37cd7d.text());
      };
    },
    0xe5b: (_0x28fc4e, _0x8a2c11, _0x1997d6) => {
      const _0xdfe9c1 = _0x1997d6(0x1e99)("load-script");
      _0x28fc4e.exports = (_0x9b3a7 = null) => new Promise(_0x4f29fc => {
        if (!_0x9b3a7) {
          return _0x4f29fc(false);
        }
        var _0x5e97b1 = document.createElement("script");
        _0x5e97b1.src = _0x9b3a7;
        _0x5e97b1.onload = () => {
          _0xdfe9c1("Script loaded and executed");
          _0x4f29fc(true);
        };
        _0x5e97b1.onerror = () => {
          _0xdfe9c1("Error loading script");
          _0x4f29fc(false);
        };
        return document.head.appendChild(_0x5e97b1);
      });
    },
    0x6bc: _0xc76c51 => {
      function _0x316ab1(_0x14cc46) {
        var _0xbd00ce = 0x0;
        var _0x9eb1f0 = 0x0;
        if ((_0x14cc46 = Number(_0x14cc46)) >= 0x3c) {
          _0x9eb1f0 = _0x14cc46 / 0x3c;
          _0x14cc46 = parseInt(_0x14cc46 % 0x3c);
          if (_0x9eb1f0 > 0x3c) {
            _0xbd00ce = parseInt(_0x9eb1f0 / 0x3c);
            _0x9eb1f0 = parseInt(_0x9eb1f0 % 0x3c);
          } else {
            _0x9eb1f0 = parseInt(_0x9eb1f0);
          }
        } else {
          _0x14cc46 = parseInt(_0x14cc46);
        }
        if (_0xbd00ce) {
          if (0x1 == _0xbd00ce.toString().length) {
            _0xbd00ce = '0' + _0xbd00ce;
          }
        } else {
          _0xbd00ce = '00';
        }
        if (_0x9eb1f0) {
          if (0x1 == _0x9eb1f0.toString().length) {
            _0x9eb1f0 = '0' + _0x9eb1f0;
          }
        } else {
          _0x9eb1f0 = '00';
        }
        if (0x1 == _0x14cc46.toString().length) {
          _0x14cc46 = '0' + _0x14cc46;
        }
        return _0xbd00ce + ':' + _0x9eb1f0 + ':' + _0x14cc46 + ":000";
      }
      _0xc76c51.exports = (_0x2eceda = null, _0x35c1c2 = null) => {
        if (!_0x2eceda || !_0x35c1c2) {
          return false;
        }
        var _0x576927 = 0x0;
        var _0x29fdea = 0x0;
        var _0x251dd1 = 0x0;
        var _0x46852f = 0x0;
        var _0x334232 = 0xa;
        var _0x520f48 = Math.ceil(0x708);
        var _0x96c634 = "WEBVTT\n\n";
        for (let _0x4aa362 = 0x1; _0x4aa362 < _0x520f48; _0x4aa362++) {
          _0x96c634 += _0x4aa362 + "\n";
          _0x96c634 += _0x316ab1(_0x46852f) + " --> " + _0x316ab1(_0x334232) + "\n";
          _0x96c634 += _0x2eceda.replace("XXX", (_0x35c1c2 % 0xa).toString().padStart(0x3, '0')) + '/' + _0x251dd1 + ".jpg#xywh=" + _0x576927 + ',' + _0x29fdea + ",178,100\n";
          _0x46852f += 0xa;
          _0x334232 += 0xa;
          _0x576927 += 0xb2;
          if (_0x4aa362 % 0x6 == 0x0) {
            _0x29fdea += 0x64;
            _0x576927 = 0x0;
          }
          if (_0x4aa362 % 0x1e == 0x0) {
            _0x576927 = 0x0;
            _0x29fdea = 0x0;
            _0x251dd1++;
          }
          if (_0x4aa362 != _0x520f48) {
            _0x96c634 += "\n";
          }
        }
        var _0x390651 = {
          "type": "text/vtt"
        };
        return URL.createObjectURL(new Blob([_0x96c634], _0x390651));
      };
    },
    0x1b69: (_0x15265a, _0x4953c6, _0x2f5ec0) => {
      const _0x1648c6 = _0x2f5ec0(0x1e99)("resuming-playback");
      const _0x428e70 = _0x2f5ec0(0x19da);
      _0x15265a.exports = function (_0x21d461, _0x769bf1) {
        const _0x11d5a1 = document.createElement("style");
        _0x11d5a1.textContent = "\n            .jwp-popup {\n                z-index: 9999;\n                background-color: rgba(0, 0, 0, 0.8);\n                color: #fff;\n                border-radius: 8px;\n                padding: 20px;\n                text-align: center;\n                position: fixed;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%);\n                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);\n                max-width: 360px;\n                width: 90%;\n                box-sizing: border-box;\n                display: none;\n                box-shadow: 1px 1px 5px #ffffff94;\n            }\n            \n            .jwp-popup .popup-header {\n                font-size: 1.5em;\n                margin-bottom: 15px;\n                font-weight: bold;\n            }\n            \n            .jwp-popup .popup-body {\n                margin-bottom: 20px;\n            }\n\n            .jwp-popup .popup-footer {\n                display: flex;\n                flex-wrap: wrap; /* Cho phép các nút chuyển dòng nếu cần */\n                justify-content: center;\n                gap: 10px;\n            }\n            \n            .jwp-popup button {\n                background-color: #4CAF50;\n                color: white;\n                padding: 10px 20px;\n                border: none;\n                border-radius: 4px;\n                cursor: pointer;\n                font-size: 1em;\n            }\n            \n            .jwp-popup button:hover {\n                background-color: #3e8e41;\n            }\n            \n            .jwp-popup button.jwp-popup-cancel {\n                background-color: #f44336;\n            }\n            \n            .jwp-popup button.jwp-popup-cancel:hover {\n                background-color: #c62828;\n            }\n            \n            @media (max-width: 360px) {\n                .jwp-popup {\n                    display: none; /* Ẩn popup khi màn hình nhỏ hơn 360px */\n                }\n            }\n            \n            /* Responsive Design cho các thiết bị lớn hơn */\n            @media (min-width: 361px) {\n                .jwp-popup {\n                    display: block; /* Hiển thị popup khi màn hình lớn hơn 360px */\n                }\n            }\n        ";
        document.head.appendChild(_0x11d5a1);
        var _0x16b183 = null;
        var _0x172d5f = null;
        var _0x101b7b = null;
        var _0x41d87f = false;
        this.show = () => {
          if ("undefined" == typeof jwplayer || !_0x21d461 || !_0x769bf1 || _0x41d87f) {
            return;
          }
          var _0x309a81 = function () {
            if (_0x769bf1) {
              try {
                return Number(localStorage.getItem("time_" + _0x769bf1) || 0x0);
              } catch ({
                message: _0xda87a9
              }) {
                return void _0x1648c6(_0xda87a9);
              }
            }
          }();
          if (!Number.isFinite(_0x309a81) || Math.floor(_0x309a81) <= 0x0) {
            return;
          }
          (_0x16b183 = document.createElement('div')).className = "jwp-popup";
          _0x16b183.innerHTML = "\n                <div class=\"popup-header\">Continue watching</div>\n                <div class=\"popup-body\">\n                    <p>You have watched up to <u>" + _0x428e70(_0x309a81) + "</u>. Do you want to continue watching?</p>\n                </div>\n                <div class=\"popup-footer\">\n                    <button class=\"jwp-popup-continue\">Continue</button>\n                    <button class=\"jwp-popup-cancel\">Cancel (<span>10s</span>)</button>\n                </div>\n            ";
          const _0x583455 = jwplayer(_0x21d461);
          (_0x172d5f = _0x583455.getContainer()).appendChild(_0x16b183);
          var _0x1dc15e = 0xa;
          _0x101b7b = setInterval(() => {
            _0x1dc15e--;
            var _0x3c0a17 = document.querySelector(".jwp-popup-cancel span");
            if (!_0x3c0a17 || _0x1dc15e <= 0x0) {
              clearInterval(_0x101b7b);
              return _0x172d5f.removeChild(_0x16b183);
            }
            _0x3c0a17.innerHTML = _0x1dc15e + 's';
          }, 0x3e8);
          _0x16b183.querySelector(".jwp-popup-continue").addEventListener("click", () => {
            clearInterval(_0x101b7b);
            _0x172d5f.removeChild(_0x16b183);
            _0x583455.seek(_0x309a81);
            _0x583455.play();
          });
          _0x16b183.querySelector(".jwp-popup-cancel").addEventListener("click", () => {
            clearInterval(_0x101b7b);
            _0x172d5f.removeChild(_0x16b183);
            _0x583455.play();
          });
        };
        this.setTime = _0x45e585 => {
          if (Number.isFinite(_0x45e585) && !(_0x45e585 <= 0x0) && _0x21d461 && _0x769bf1 && !_0x41d87f) {
            try {
              localStorage.setItem("time_" + _0x769bf1, _0x45e585);
              return true;
            } catch ({
              message: _0x5363b5
            }) {
              return void _0x1648c6(_0x5363b5);
            }
          }
        };
        this.destroy = () => {
          if (!_0x41d87f) {
            _0x1648c6("Destroy");
            _0x41d87f = true;
            clearInterval(_0x101b7b);
            _0x101b7b = null;
            document.head.removeChild(_0x11d5a1);
            if (_0x16b183 && _0x172d5f) {
              try {
                _0x172d5f.removeChild(_0x16b183);
              } catch ({
                message: _0x51c45f
              }) {
                _0x1648c6("[ERR] %s", _0x51c45f);
              }
              _0x16b183 = null;
              _0x172d5f = null;
            }
            return true;
          }
        };
      };
    },
    0x26f0: (_0x1ba52b, _0x70ab16, _0x3c8bdc) => {
      const _0x5cede3 = _0x3c8bdc(0x40b);
      const _0x1928de = _0x3c8bdc(0x24b8);
      _0x1ba52b.exports = function () {
        var _0x5cc926 = null;
        var _0x334a4e = null;
        var _0x2284c3 = false;
        var _0x388437 = false;
        var _0x4b5333 = 0x0;
        var _0x1e01e1 = 0x0;
        const _0x19d111 = ['download', 'buffer'];
        const _0x735a75 = {};
        var _0x1a337f = false;
        const _0x1d1b4e = document.createElement('style');
        _0x1d1b4e.textContent = "\n            .jw-icon-display[aria-label=\"Loading\"] .player-buffer-speed {\n                display: block !important;\n            }\n            .player-buffer-speed {\n                display:none;\n                position:absolute;\n                color:#fff;\n                font-size: 12px;\n                text-shadow: 1px 1px #4f4f4fb3;\n                font-weight:bold;\n                z-index:9999;\n                animation: colorChange 5s linear infinite;\n            }\n            .player-download-speed {\n                display:flex;\n                align-items:center;\n                margin-left: 5px;\n            }\n            .player-download-speed svg {\n                width: 18px;\n                animation: colorChange 5s linear infinite;\n            }\n            .player-download-speed span {\n                font-size: 0.75em;\n            }\n            @keyframes colorChange {\n                0% { color: red; }\n                33% { color: green; }\n                66% { color: blue; }\n                100% { color: red; }\n            }\n        ";
        document.head.appendChild(_0x1d1b4e);
        this.setup = (_0x584265 = _0x19d111) => {
          if (!_0x1a337f) {
            _0x584265.forEach(_0x2931a6 => function (_0xd3e303) {
              if (_0x19d111.includes(_0xd3e303)) {
                if ('download' == _0xd3e303) {
                  if (_0x2284c3) {
                    return true;
                  }
                  if ((_0x59f966 = document.querySelector(".jw-reset .jw-spacer")) && !document.querySelector(".player-download-speed")) {
                    var _0x9c87f0 = "\n                        <div class=\"jw-reset player-download-speed\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"size-6\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z\"></path></svg>\n                            <span></span>\n                        </div>\n                    ";
                    _0x59f966.insertAdjacentHTML("beforebegin", _0x9c87f0);
                  }
                  _0x334a4e = new _0x5cede3();
                  return _0x2284c3 = true;
                }
                if (_0x388437) {
                  return true;
                }
                var _0x59f966;
                if (_0x59f966 = document.querySelector(".jw-icon-display")) {
                  if (!document.querySelector(".player-buffer-speed")) {
                    _0x9c87f0 = "<div class=\"jw-reset player-buffer-speed\"><span></span></div>";
                    _0x59f966.insertAdjacentHTML("beforeend", _0x9c87f0);
                  }
                  _0x5cc926 = new _0x5cede3();
                  return _0x388437 = true;
                }
              }
            }(_0x2931a6));
            return true;
          }
        };
        this.download = (_0x14d4d8 = 0x0) => {
          clearInterval(_0x735a75.downloadSpeed);
          if (!_0x2284c3 || !Number.isInteger(_0x14d4d8) || _0x1a337f) {
            return;
          }
          const _0x1814da = document.querySelector(".player-download-speed span");
          return _0x1814da ? (_0x4b5333 = _0x334a4e(_0x14d4d8), _0x1814da.innerText = _0x1928de.kbs(_0x4b5333), _0x735a75.downloadSpeed = setInterval(() => {
            _0x4b5333 = _0x334a4e(0x0);
            _0x1814da.innerText = _0x1928de.kbs(_0x4b5333);
            if (!_0x4b5333) {
              clearInterval(_0x735a75.downloadSpeed);
            }
          }, 0x3e8), _0x4b5333) : undefined;
        };
        this.buffer = (_0x41ce10 = 0x0) => {
          clearInterval(_0x735a75.bufferSpeed);
          if (!_0x388437 || !Number.isInteger(_0x41ce10) || _0x1a337f) {
            return;
          }
          const _0x3b48e3 = document.querySelector(".player-buffer-speed span");
          return _0x3b48e3 ? (_0x1e01e1 = _0x5cc926(_0x41ce10), _0x3b48e3.innerText = _0x1928de.bps(_0x1e01e1), _0x735a75.downloadSpeed = setInterval(() => {
            var _0x40178d = _0x5cc926(0x0);
            _0x3b48e3.innerText = _0x1928de.bps(_0x40178d);
            if (!_0x40178d) {
              clearInterval(_0x735a75.bufferSpeed);
            }
          }, 0x3e8), _0x1e01e1) : undefined;
        };
        this.get = _0x1d13bd => _0x19d111.includes(_0x1d13bd) ? "download" == _0x1d13bd ? _0x4b5333 : _0x1e01e1 : 0x0;
        this.destroy = () => {
          if (!_0x1a337f) {
            _0x1a337f = true;
            _0x5cc926 = _0x334a4e = () => {};
            _0x388437 = _0x2284c3 = false;
            document.head.removeChild(_0x1d1b4e);
            for (const _0x4f4920 in _0x735a75) {
              clearInterval(_0x735a75[_0x4f4920]);
              delete _0x735a75[_0x4f4920];
            }
          }
        };
      };
    },
    0x256b: (_0x13d32c, _0x402fad, _0x11175d) => {
      const _0x4099f0 = _0x11175d(0x1e99)('tracker');
      _0x13d32c.exports = function (_0x13f889 = {}) {
        const {
          options: {
            slug: _0x199b30,
            md5_id: _0xd47322,
            user_id: _0x3b3439
          }
        } = _0x13f889 || {};
        const _0x11d054 = !!window.WebSocket;
        var _0x2a8f2d = null;
        var _0x4e464b = false;
        var _0x194abc = null;
        var _0x552da5 = false;
        this.start = (_0x5ef2e7 = null) => {
          if (_0x5ef2e7 && _0x11d054 && !_0x552da5) {
            (_0x2a8f2d = new WebSocket(_0x5ef2e7, [])).binaryType = "arraybuffer";
            _0x2a8f2d.onopen = () => {
              _0x4099f0("Connect open");
              _0x2a8f2d.send(JSON.stringify(this.getInfo()));
              _0x194abc = setInterval(() => _0x2a8f2d.send(JSON.stringify(this.getInfo())), 0x2710);
            };
            _0x2a8f2d.onmessage = _0x131c8e => {};
            _0x2a8f2d.onclose = () => {
              _0x4099f0("Close connect");
              clearInterval(_0x194abc);
              if (!_0x552da5) {
                setTimeout(() => this.start(_0x5ef2e7), 0xbb8);
              }
            };
            _0x2a8f2d.onerror = ({
              type: _0x24988f
            }) => {
              clearInterval(_0x194abc);
              _0x4099f0(_0x24988f);
            };
            return _0x2a8f2d;
          }
        };
        this.setPlaying = _0x41d6e4 => {
          _0x4e464b = !!_0x41d6e4;
        };
        this.getInfo = () => ({
          'action': "info",
          'slug': _0x199b30,
          'md5_id': _0xd47322,
          'user_id': _0x3b3439,
          'isPlaying': _0x4e464b
        });
        this.destroy = () => {
          if (!_0x552da5) {
            _0x552da5 = true;
            clearInterval(_0x194abc);
            _0x2a8f2d?.['close']();
            _0x2a8f2d = null;
          }
        };
      };
    },
    0xa10: (_0xddcec9, _0x406e32, _0x17ba0c) => {
      const _0x42e70d = _0x17ba0c(0x1db3);
      const _0x30c2eb = window.atob;
      _0xddcec9.exports = () => {
        window.atob = new Proxy(_0x30c2eb, {
          'apply'(_0x1dc6ef, _0x47b0a5, _0x3835af) {
            var _0x1cfb2d = _0x3835af[0x0];
            return /_$/.test(_0x1cfb2d) ? _0x42e70d.decode(_0x1cfb2d.replace(/_/g, '')) : _0x1dc6ef.apply(_0x47b0a5, _0x3835af);
          }
        });
      };
    },
    0x83d: function (_0x2c3060, _0x3f0571, _0x153300) {
      var _0x3062a7;
      !function (_0x33b3b6, _0x42f584) {
        'use strict';

        var _0x2aa1d9 = {
          ME: "4.90",
          "NT 3.11": "NT3.51",
          "NT 4.0": "NT4.0",
          "2000": "NT 5.0",
          XP: ["NT 5.1", "NT 5.2"],
          "Vista": "NT 6.0",
          '7': "NT 6.1",
          '8': "NT 6.2",
          "8.1": "NT 6.3",
          '10': ["NT 6.4", "NT 10.0"],
          RT: 'ARM'
        };
        var _0x2ca00c = {
          tablet: ["p10001l", "w7001"],
          '*': "mobile"
        };
        var _0x5125f1 = {
          init: {},
          "isIgnore": {},
          isIgnoreRgx: {},
          "toString": {}
        };
        var _0x3388ee = ["brands", "fullVersionList", "mobile", "model", "platform", "platformVersion", "architecture", "formFactors", 'bitness'];
        var _0x296f32 = typeof _0x33b3b6 !== "undefined";
        var _0x53d980 = _0x296f32 && _0x33b3b6.navigator ? _0x33b3b6.navigator : _0x42f584;
        var _0x173b3b = _0x53d980 && _0x53d980.userAgentData ? _0x53d980.userAgentData : _0x42f584;
        var _0x27f82d = function (_0x49fa77) {
          var _0x546b7b = {};
          for (var _0x5ad657 = 0x0; _0x5ad657 < _0x49fa77.length; _0x5ad657++) {
            _0x546b7b[_0x49fa77[_0x5ad657].toUpperCase()] = _0x49fa77[_0x5ad657];
          }
          return _0x546b7b;
        };
        var _0x1bb087 = function (_0x157ba7, _0x158ba7) {
          if (typeof _0x157ba7 === "object" && _0x157ba7.length > 0x0) {
            for (var _0x4b8a56 in _0x157ba7) if ((typeof _0x157ba7[_0x4b8a56] === "string" ? _0x157ba7[_0x4b8a56].toLowerCase() : _0x157ba7[_0x4b8a56]) == (typeof _0x158ba7 === "string" ? _0x158ba7.toLowerCase() : _0x158ba7)) {
              return true;
            }
            return false;
          }
          return !!(typeof _0x157ba7 === "string") && -0x1 !== (typeof _0x158ba7 === "string" ? _0x158ba7.toLowerCase() : _0x158ba7).indexOf(typeof _0x157ba7 === "string" ? _0x157ba7.toLowerCase() : _0x157ba7);
        };
        var _0x4a1891 = function (_0x2e9635, _0x12517d) {
          for (var _0x31b52a in _0x2e9635) return /^(browser|cpu|device|engine|os)$/.test(_0x31b52a) || !!_0x12517d && _0x4a1891(_0x2e9635[_0x31b52a]);
        };
        var _0x5eb62d = function (_0x3dc55f) {
          if (!_0x3dc55f) {
            return _0x42f584;
          }
          var _0x339a6d = [];
          var _0x4f3fb0 = (typeof _0x3dc55f === "string" ? _0x3dc55f.replace(/\\?\"/g, '') : _0x3dc55f).split(',');
          for (var _0x370ee9 = 0x0; _0x370ee9 < _0x4f3fb0.length; _0x370ee9++) {
            if (_0x4f3fb0[_0x370ee9].indexOf(';') > -0x1) {
              var _0x5aec97 = _0x26fe6c(_0x4f3fb0[_0x370ee9]).split(";v=");
              var _0x56df45 = {
                "brand": _0x5aec97[0x0],
                version: _0x5aec97[0x1]
              };
              _0x339a6d[_0x370ee9] = _0x56df45;
            } else {
              _0x339a6d[_0x370ee9] = _0x26fe6c(_0x4f3fb0[_0x370ee9]);
            }
          }
          return _0x339a6d;
        };
        var _0x36ebcb = function (_0x1150d3) {
          return typeof _0x1150d3 === "string" ? _0x1150d3.toLowerCase() : _0x1150d3;
        };
        var _0x34b401 = function (_0x7dbea5) {
          for (var _0xc5226a in _0x7dbea5) {
            var _0x340f4e = _0x7dbea5[_0xc5226a];
            if (typeof _0x340f4e == "object" && 0x2 == _0x340f4e.length) {
              this[_0x340f4e[0x0]] = _0x340f4e[0x1];
            } else {
              this[_0x340f4e] = _0x42f584;
            }
          }
          return this;
        };
        var _0x26fe6c = function (_0x1103cb, _0xa964) {
          if (typeof _0x1103cb === "string") {
            _0x1103cb = typeof _0x1103cb === "string" ? _0x1103cb.replace(/^\s\s*/, '') : _0x1103cb;
            return typeof _0xa964 === "undefined" ? _0x1103cb : _0x1103cb.substring(0x0, 0x1f4);
          }
        };
        var _0x44821f = function (_0x43c55d, _0x36ba92) {
          if (_0x43c55d && _0x36ba92) {
            var _0x1d8bef;
            var _0x39effa;
            var _0x2738ee;
            var _0x29878c;
            var _0x1f2790;
            var _0x5c00db;
            for (var _0x9a3ad2 = 0x0; _0x9a3ad2 < _0x36ba92.length && !_0x1f2790;) {
              var _0x514fc0 = _0x36ba92[_0x9a3ad2];
              var _0x3a1718 = _0x36ba92[_0x9a3ad2 + 0x1];
              for (_0x1d8bef = _0x39effa = 0x0; _0x1d8bef < _0x514fc0.length && !_0x1f2790 && _0x514fc0[_0x1d8bef];) {
                if (_0x1f2790 = _0x514fc0[_0x1d8bef++].exec(_0x43c55d)) {
                  for (_0x2738ee = 0x0; _0x2738ee < _0x3a1718.length; _0x2738ee++) {
                    _0x5c00db = _0x1f2790[++_0x39effa];
                    if (typeof (_0x29878c = _0x3a1718[_0x2738ee]) === "object" && _0x29878c.length > 0x0) {
                      if (0x2 === _0x29878c.length) {
                        if (typeof _0x29878c[0x1] == "function") {
                          this[_0x29878c[0x0]] = _0x29878c[0x1].call(this, _0x5c00db);
                        } else {
                          this[_0x29878c[0x0]] = _0x29878c[0x1];
                        }
                      } else if (0x3 === _0x29878c.length) {
                        if (typeof _0x29878c[0x1] !== "function" || _0x29878c[0x1].exec && _0x29878c[0x1].test) {
                          this[_0x29878c[0x0]] = _0x5c00db ? _0x5c00db.replace(_0x29878c[0x1], _0x29878c[0x2]) : _0x42f584;
                        } else {
                          this[_0x29878c[0x0]] = _0x5c00db ? _0x29878c[0x1].call(this, _0x5c00db, _0x29878c[0x2]) : _0x42f584;
                        }
                      } else if (0x4 === _0x29878c.length) {
                        this[_0x29878c[0x0]] = _0x5c00db ? _0x29878c[0x3].call(this, _0x5c00db.replace(_0x29878c[0x1], _0x29878c[0x2])) : _0x42f584;
                      }
                    } else {
                      this[_0x29878c] = _0x5c00db || _0x42f584;
                    }
                  }
                }
              }
              _0x9a3ad2 += 0x2;
            }
          }
        };
        var _0x5a4d3b = function (_0x8ca9e5, _0x14f117) {
          for (var _0x40c214 in _0x14f117) if (typeof _0x14f117[_0x40c214] === "object" && _0x14f117[_0x40c214].length > 0x0) {
            for (var _0x4f8a63 = 0x0; _0x4f8a63 < _0x14f117[_0x40c214].length; _0x4f8a63++) {
              if (_0x1bb087(_0x14f117[_0x40c214][_0x4f8a63], _0x8ca9e5)) {
                return '?' === _0x40c214 ? _0x42f584 : _0x40c214;
              }
            }
          } else {
            if (_0x1bb087(_0x14f117[_0x40c214], _0x8ca9e5)) {
              return '?' === _0x40c214 ? _0x42f584 : _0x40c214;
            }
          }
          return _0x14f117.hasOwnProperty('*') ? _0x14f117['*'] : _0x8ca9e5;
        };
        var _0x3def49 = {
          'embedded': 'Automotive',
          'mobile': 'Mobile',
          'tablet': ['Tablet', "EInk"],
          'smarttv': 'TV',
          'wearable': 'Watch',
          'xr': ['VR', 'XR'],
          '?': ["Desktop", "Unknown"],
          '*': _0x42f584
        };
        var _0x3e34c8 = {
          'browser': [[/\b(?:crmo|crios)\/([\w\.]+)/i], ["version", ["name", "Mobile Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], ["version", ["name", 'Edge']], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], ["name", "version"], [/opios[\/ ]+([\w\.]+)/i], ["version", ["name", "Opera Mini"]], [/\bop(?:rg)?x\/([\w\.]+)/i], ["version", ["name", "Opera GX"]], [/\bopr\/([\w\.]+)/i], ["version", ["name", "Opera"]], [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i], ["version", ["name", "Baidu"]], [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i], ["version", ["name", "Maxthon"]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i, /(heytap|ovi|115)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], ["name", "version"], [/quark(?:pc)?\/([-\w\.]+)/i], ["version", ["name", "Quark"]], [/\bddg\/([\w\.]+)/i], ["version", ["name", "DuckDuckGo"]], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], ["version", ["name", 'UCBrowser']], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i], ["version", ["name", "WeChat"]], [/konqueror\/([\w\.]+)/i], ["version", ["name", "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], ["version", ["name", 'IE']], [/ya(?:search)?browser\/([\w\.]+)/i], ["version", ["name", 'Yandex']], [/slbrowser\/([\w\.]+)/i], ["version", ["name", "Smart Lenovo Browser"]], [/(avast|avg)\/([\w\.]+)/i], [["name", /(.+)/, "$1 Secure Browser"], "version"], [/\bfocus\/([\w\.]+)/i], ["version", ["name", "Firefox Focus"]], [/\bopt\/([\w\.]+)/i], ["version", ["name", "Opera Touch"]], [/coc_coc\w+\/([\w\.]+)/i], ["version", ["name", "Coc Coc"]], [/dolfin\/([\w\.]+)/i], ["version", ["name", 'Dolphin']], [/coast\/([\w\.]+)/i], ["version", ["name", "Opera Coast"]], [/miuibrowser\/([\w\.]+)/i], ["version", ["name", "MIUI Browser"]], [/fxios\/([\w\.-]+)/i], ["version", ["name", "Mobile Firefox"]], [/\bqihoobrowser\/?([\w\.]*)/i], ["version", ["name", '360']], [/\b(qq)\/([\w\.]+)/i], [["name", /(.+)/, '$1Browser'], "version"], [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i], [["name", /(.+)/, "$1 Browser"], "version"], [/samsungbrowser\/([\w\.]+)/i], ["version", ["name", "Samsung Internet"]], [/metasr[\/ ]?([\d\.]+)/i], ["version", ["name", "Sogou Explorer"]], [/(sogou)mo\w+\/([\d\.]+)/i], [["name", "Sogou Mobile"], "version"], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i], ["name", "version"], [/(lbbrowser|rekonq)/i], ["name"], [/ome\/([\w\.]+) \w* ?(iron) saf/i, /ome\/([\w\.]+).+qihu (360)[es]e/i], ["version", "name"], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [["name", "Facebook"], "version", ["type", "inapp"]], [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(instagram|snapchat)[\/ ]([-\w\.]+)/i], ["name", "version", ["type", "inapp"]], [/\bgsa\/([\w\.]+) .*safari\//i], ["version", ["name", "GSA"], ["type", "inapp"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], ["version", ["name", 'TikTok'], ["type", "inapp"]], [/\[(linkedin)app\]/i], ["name", ["type", "inapp"]], [/(chromium)[\/ ]([-\w\.]+)/i], ["name", "version"], [/headlesschrome(?:\/([\w\.]+)| )/i], ["version", ["name", "Chrome Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [["name", "Chrome WebView"], "version"], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], ["version", ["name", "Android Browser"]], [/chrome\/([\w\.]+) mobile/i], ["version", ["name", "Mobile Chrome"]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], ["name", "version"], [/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i], ["version", ["name", "Mobile Safari"]], [/iphone .*mobile(?:\/\w+ | ?)safari/i], [["name", "Mobile Safari"]], [/version\/([\w\.\,]+) .*(safari)/i], ["version", "name"], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], ["name", ["version", '1']], [/(webkit|khtml)\/([\w\.]+)/i], ["name", "version"], [/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i], [["name", "Mobile Firefox"], "version"], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [["name", "Netscape"], "version"], [/(wolvic|librewolf)\/([\w\.]+)/i], ["name", "version"], [/mobile vr; rv:([\w\.]+)\).+firefox/i], ["version", ["name", "Firefox Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /\b(links) \(([\w\.]+)/i], ["name", ["version", /_/g, '.']], [/(cobalt)\/([\w\.]+)/i], ["name", ["version", /[^\d\.]+./, '']]],
          'cpu': [[/\b(?:(amd|x|x86[-_]?|wow|win)64)\b/i], [["architecture", 'amd64']], [/(ia32(?=;))/i, /((?:i[346]|x)86)[;\)]/i], [["architecture", "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [["architecture", 'arm64']], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [["architecture", "armhf"]], [/windows (ce|mobile); ppc;/i], [["architecture", "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [["architecture", /ower/, '', _0x36ebcb]], [/(sun4\w)[;\)]/i], [["architecture", "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [["architecture", _0x36ebcb]]],
          'device': [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], ["model", ["vendor", "Samsung"], ["type", "tablet"]], [/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]((?!sm-[lr])[-\w]+)/i, /sec-(sgh\w+)/i], ["model", ["vendor", "Samsung"], ["type", "mobile"]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], ["model", ["vendor", 'Apple'], ["type", "mobile"]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], ["model", ["vendor", 'Apple'], ["type", "tablet"]], [/(macintosh);/i], ["model", ["vendor", 'Apple']], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], ["model", ["vendor", "Sharp"], ["type", "mobile"]], [/(?:honor)([-\w ]+)[;\)]/i], ["model", ["vendor", "Honor"], ["type", "mobile"]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], ["model", ["vendor", "Huawei"], ["type", "tablet"]], [/(?:huawei)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], ["model", ["vendor", "Huawei"], ["type", "mobile"]], [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i], [["model", /_/g, " "], ["vendor", 'Xiaomi'], ["type", "mobile"]], [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [["model", /_/g, " "], ["vendor", 'Xiaomi'], ["type", "tablet"]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], ["model", ["vendor", "OPPO"], ["type", "mobile"]], [/\b(opd2\d{3}a?) bui/i], ["model", ["vendor", 'OPPO'], ["type", "tablet"]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], ["model", ["vendor", "Vivo"], ["type", "mobile"]], [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], ["model", ["vendor", "Realme"], ["type", "mobile"]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], ["model", ["vendor", 'Motorola'], ["type", "mobile"]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], ["model", ["vendor", 'Motorola'], ["type", "tablet"]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], ["model", ["vendor", 'LG'], ["type", "tablet"]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], ["model", ["vendor", 'LG'], ["type", "mobile"]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], ["model", ["vendor", "Lenovo"], ["type", "tablet"]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [["model", /_/g, " "], ["vendor", "Nokia"], ["type", "mobile"]], [/(pixel c)\b/i], ["model", ["vendor", "Google"], ["type", "tablet"]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], ["model", ["vendor", "Google"], ["type", "mobile"]], [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], ["model", ["vendor", "Sony"], ["type", "mobile"]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [["model", "Xperia Tablet"], ["vendor", "Sony"], ["type", "tablet"]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], ["model", ["vendor", "OnePlus"], ["type", "mobile"]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], ["model", ["vendor", "Amazon"], ["type", "tablet"]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [["model", /(.+)/g, "Fire Phone $1"], ["vendor", "Amazon"], ["type", "mobile"]], [/(playbook);[-\w\),; ]+(rim)/i], ["model", "vendor", ["type", "tablet"]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], ["model", ["vendor", "BlackBerry"], ["type", "mobile"]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], ["model", ["vendor", "ASUS"], ["type", "tablet"]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], ["model", ["vendor", "ASUS"], ["type", "mobile"]], [/(nexus 9)/i], ["model", ["vendor", "HTC"], ["type", "tablet"]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], ["vendor", ["model", /_/g, " "], ["type", "mobile"]], [/tcl (xess p17aa)/i, /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i], ["model", ["vendor", 'TCL'], ["type", "tablet"]], [/droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i], ["model", ["vendor", "TCL"], ["type", "mobile"]], [/(itel) ((\w+))/i], [["vendor", _0x36ebcb], "model", ["type", _0x5a4d3b, _0x2ca00c]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], ["model", ["vendor", "Acer"], ["type", "tablet"]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], ["model", ["vendor", 'Meizu'], ["type", "mobile"]], [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], ["model", ["vendor", 'Ulefone'], ["type", "mobile"]], [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i], ["model", ["vendor", "Energizer"], ["type", "mobile"]], [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i], ["model", ["vendor", "Cat"], ["type", "mobile"]], [/((?:new )?andromax[\w- ]+)(?: bui|\))/i], ["model", ["vendor", "Smartfren"], ["type", "mobile"]], [/droid.+; (a(?:015|06[35]|142p?))/i], ["model", ["vendor", "Nothing"], ["type", "mobile"]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i, /; (imo) ((?!tab)[\w ]+?)(?: bui|\))/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], ["vendor", "model", ["type", "mobile"]], [/(imo) (tab \w+)/i, /(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i], ["vendor", "model", ["type", "tablet"]], [/(surface duo)/i], ["model", ["vendor", 'Microsoft'], ["type", "tablet"]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], ["model", ["vendor", 'Fairphone'], ["type", "mobile"]], [/(shield[\w ]+) b/i], ["model", ["vendor", 'Nvidia'], ["type", "tablet"]], [/(sprint) (\w+)/i], ["vendor", "model", ["type", "mobile"]], [/(kin\.[onetw]{3})/i], [["model", /\./g, " "], ["vendor", 'Microsoft'], ["type", "mobile"]], [/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], ["model", ["vendor", "Zebra"], ["type", "tablet"]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], ["model", ["vendor", "Zebra"], ["type", "mobile"]], [/smart-tv.+(samsung)/i], ["vendor", ["type", 'smarttv']], [/hbbtv.+maple;(\d+)/i], [["model", /^/, "SmartTV"], ["vendor", "Samsung"], ["type", 'smarttv']], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [["vendor", 'LG'], ["type", 'smarttv']], [/(apple) ?tv/i], ["vendor", ["model", "Apple TV"], ["type", 'smarttv']], [/crkey.*devicetype\/chromecast/i], [["model", "Chromecast Third Generation"], ["vendor", "Google"], ["type", 'smarttv']], [/crkey.*devicetype\/([^/]*)/i], [["model", /^/, "Chromecast "], ["vendor", "Google"], ["type", 'smarttv']], [/fuchsia.*crkey/i], [["model", "Chromecast Nest Hub"], ["vendor", "Google"], ["type", 'smarttv']], [/crkey/i], [["model", 'Chromecast'], ["vendor", "Google"], ["type", 'smarttv']], [/droid.+aft(\w+)( bui|\))/i], ["model", ["vendor", "Amazon"], ["type", 'smarttv']], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], ["model", ["vendor", "Sharp"], ["type", 'smarttv']], [/(bravia[\w ]+)( bui|\))/i], ["model", ["vendor", "Sony"], ["type", 'smarttv']], [/(mitv-\w{5}) bui/i], ["model", ["vendor", 'Xiaomi'], ["type", 'smarttv']], [/Hbbtv.*(technisat) (.*);/i], ["vendor", "model", ["type", 'smarttv']], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [["vendor", _0x26fe6c], ["model", _0x26fe6c], ["type", 'smarttv']], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [["type", 'smarttv']], [/(ouya)/i, /(nintendo) (\w+)/i], ["vendor", "model", ["type", "console"]], [/droid.+; (shield) bui/i], ["model", ["vendor", 'Nvidia'], ["type", "console"]], [/(playstation \w+)/i], ["model", ["vendor", "Sony"], ["type", "console"]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], ["model", ["vendor", 'Microsoft'], ["type", "console"]], [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i], ["model", ["vendor", "Samsung"], ["type", 'wearable']], [/((pebble))app/i], ["vendor", "model", ["type", 'wearable']], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], ["model", ["vendor", 'Apple'], ["type", 'wearable']], [/droid.+; (wt63?0{2,3})\)/i], ["model", ["vendor", "Zebra"], ["type", 'wearable']], [/droid.+; (glass) \d/i], ["model", ["vendor", "Google"], ["type", 'xr']], [/(pico) (4|neo3(?: link|pro)?)/i], ["vendor", "model", ["type", 'xr']], [/; (quest( \d| pro)?)/i], ["model", ["vendor", "Facebook"], ["type", 'xr']], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], ["vendor", ["type", 'embedded']], [/(aeobc)\b/i], ["model", ["vendor", "Amazon"], ["type", 'embedded']], [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i], ["model", ["type", "mobile"]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], ["model", ["type", "tablet"]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [["type", "tablet"]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [["type", "mobile"]], [/(android[-\w\. ]{0,9});.+buil/i], ["model", ["vendor", 'Generic']]],
          'engine': [[/windows.+ edge\/([\w\.]+)/i], ["version", ["name", "EdgeHTML"]], [/(arkweb)\/([\w\.]+)/i], ["name", "version"], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], ["version", ["name", 'Blink']], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], ["name", "version"], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], ["version", "name"]],
          'os': [[/microsoft (windows) (vista|xp)/i], ["name", "version"], [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i], ["name", ["version", _0x5a4d3b, _0x2aa1d9]], [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [["version", _0x5a4d3b, _0x2aa1d9], ["name", "Windows"]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i], [["version", /_/g, '.'], ["name", "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [["name", 'macOS'], ["version", /_/g, '.']], [/android ([\d\.]+).*crkey/i], ["version", ["name", "Chromecast Android"]], [/fuchsia.*crkey\/([\d\.]+)/i], ["version", ["name", "Chromecast Fuchsia"]], [/crkey\/([\d\.]+).*devicetype\/smartspeaker/i], ["version", ["name", "Chromecast SmartSpeaker"]], [/linux.*crkey\/([\d\.]+)/i], ["version", ["name", "Chromecast Linux"]], [/crkey\/([\d\.]+)/i], ["version", ["name", 'Chromecast']], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], ["version", "name"], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish|openharmony)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], ["name", "version"], [/\(bb(10);/i], ["version", ["name", "BlackBerry"]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], ["version", ["name", "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], ["version", ["name", "Firefox OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], ["version", ["name", 'webOS']], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], ["version", ["name", "watchOS"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [["name", "Chrome OS"], "version"], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) (\w+)/i, /(xbox); +xbox ([^\);]+)/i, /(pico) .+os([\w\.]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], ["name", "version"], [/(sunos) ?([\w\.\d]*)/i], [["name", "Solaris"], "version"], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], ["name", "version"]]
        };
        _0x34b401.call(_0x5125f1.init, [["browser", ["name", "version", "major", "type"]], ['cpu', ["architecture"]], ["device", ["type", "model", "vendor"]], ["engine", ["name", "version"]], ['os', ["name", "version"]]]);
        _0x34b401.call(_0x5125f1.isIgnore, [["browser", ["version", "major"]], ["engine", ["version"]], ['os', ["version"]]]);
        _0x34b401.call(_0x5125f1.isIgnoreRgx, [["browser", / ?browser$/i], ['os', / ?os$/i]]);
        _0x34b401.call(_0x5125f1.toString, [["browser", ["name", "version"]], ['cpu', ["architecture"]], ["device", ["vendor", "model"]], ["engine", ["name", "version"]], ['os', ["name", "version"]]]);
        var _0x135f20 = function (_0x3a45f8, _0xdd54a9) {
          var _0x3e7f2e = _0x5125f1.init[_0xdd54a9];
          var _0x1301cf = _0x5125f1.isIgnore[_0xdd54a9] || 0x0;
          var _0x46d6ef = _0x5125f1.isIgnoreRgx[_0xdd54a9] || 0x0;
          var _0x2f2fe7 = _0x5125f1.toString[_0xdd54a9] || 0x0;
          function _0x4ede7e() {
            _0x34b401.call(this, _0x3e7f2e);
          }
          _0x4ede7e.prototype.getItem = function () {
            return _0x3a45f8;
          };
          _0x4ede7e.prototype.withClientHints = function () {
            return _0x173b3b ? _0x173b3b.getHighEntropyValues(_0x3388ee).then(function (_0x46151c) {
              return _0x3a45f8.setCH(new _0x2252ab(_0x46151c, false)).parseCH().get();
            }) : _0x3a45f8.parseCH().get();
          };
          _0x4ede7e.prototype.withFeatureCheck = function () {
            return _0x3a45f8.detectFeature().get();
          };
          if (_0xdd54a9 != 'result') {
            _0x4ede7e.prototype.is = function (_0x3ead31) {
              var _0x344577 = false;
              for (var _0x3f5e3b in this) if (this.hasOwnProperty(_0x3f5e3b) && !_0x1bb087(_0x1301cf, _0x3f5e3b) && (typeof (_0x46d6ef ? typeof this[_0x3f5e3b] === "string" ? this[_0x3f5e3b].replace(_0x46d6ef, '') : this[_0x3f5e3b] : this[_0x3f5e3b]) === "string" ? (_0x46d6ef ? typeof this[_0x3f5e3b] === "string" ? this[_0x3f5e3b].replace(_0x46d6ef, '') : this[_0x3f5e3b] : this[_0x3f5e3b]).toLowerCase() : _0x46d6ef ? typeof this[_0x3f5e3b] === "string" ? this[_0x3f5e3b].replace(_0x46d6ef, '') : this[_0x3f5e3b] : this[_0x3f5e3b]) == (typeof (_0x46d6ef ? typeof _0x3ead31 === "string" ? _0x3ead31.replace(_0x46d6ef, '') : _0x3ead31 : _0x3ead31) === "string" ? (_0x46d6ef ? typeof _0x3ead31 === "string" ? _0x3ead31.replace(_0x46d6ef, '') : _0x3ead31 : _0x3ead31).toLowerCase() : _0x46d6ef ? typeof _0x3ead31 === "string" ? _0x3ead31.replace(_0x46d6ef, '') : _0x3ead31 : _0x3ead31)) {
                _0x344577 = true;
                if (_0x3ead31 != "undefined") {
                  break;
                }
              } else {
                if (_0x3ead31 == "undefined" && _0x344577) {
                  _0x344577 = !_0x344577;
                  break;
                }
              }
              return _0x344577;
            };
            _0x4ede7e.prototype.toString = function () {
              var _0x1a3793 = '';
              for (var _0x40e30b in _0x2f2fe7) if (typeof this[_0x2f2fe7[_0x40e30b]] !== "undefined") {
                _0x1a3793 += (_0x1a3793 ? " " : '') + this[_0x2f2fe7[_0x40e30b]];
              }
              return _0x1a3793 || "undefined";
            };
          }
          if (!_0x173b3b) {
            _0x4ede7e.prototype.then = function (_0x3075a7) {
              var _0x1ba860 = this;
              var _0x4beff5 = function () {
                for (var _0x4dadc7 in _0x1ba860) if (_0x1ba860.hasOwnProperty(_0x4dadc7)) {
                  this[_0x4dadc7] = _0x1ba860[_0x4dadc7];
                }
              };
              var _0x537b0d = {
                is: _0x4ede7e.prototype.is,
                "toString": _0x4ede7e.prototype.toString
              };
              _0x4beff5.prototype = _0x537b0d;
              var _0x138acd = new _0x4beff5();
              _0x3075a7(_0x138acd);
              return _0x138acd;
            };
          }
          return new _0x4ede7e();
        };
        function _0x2252ab(_0x4e6b0f, _0x20bf77) {
          _0x4e6b0f = _0x4e6b0f || {};
          _0x34b401.call(this, _0x3388ee);
          if (_0x20bf77) {
            _0x34b401.call(this, [["brands", _0x5eb62d(_0x4e6b0f["sec-ch-ua"])], ["fullVersionList", _0x5eb62d(_0x4e6b0f["sec-ch-ua-full-version-list"])], ["mobile", /\?1/.test(_0x4e6b0f["sec-ch-ua-mobile"])], ["model", typeof _0x4e6b0f["sec-ch-ua-model"] === "string" ? _0x4e6b0f["sec-ch-ua-model"].replace(/\\?\"/g, '') : _0x4e6b0f["sec-ch-ua-model"]], ["platform", typeof _0x4e6b0f["sec-ch-ua-platform"] === "string" ? _0x4e6b0f["sec-ch-ua-platform"].replace(/\\?\"/g, '') : _0x4e6b0f["sec-ch-ua-platform"]], ["platformVersion", typeof _0x4e6b0f["sec-ch-ua-platform-version"] === "string" ? _0x4e6b0f["sec-ch-ua-platform-version"].replace(/\\?\"/g, '') : _0x4e6b0f["sec-ch-ua-platform-version"]], ["architecture", typeof _0x4e6b0f["sec-ch-ua-arch"] === "string" ? _0x4e6b0f["sec-ch-ua-arch"].replace(/\\?\"/g, '') : _0x4e6b0f["sec-ch-ua-arch"]], ["formFactors", _0x5eb62d(_0x4e6b0f["sec-ch-ua-form-factors"])], ['bitness', typeof _0x4e6b0f["sec-ch-ua-bitness"] === "string" ? _0x4e6b0f["sec-ch-ua-bitness"].replace(/\\?\"/g, '') : _0x4e6b0f["sec-ch-ua-bitness"]]]);
          } else {
            for (var _0x1d4778 in _0x4e6b0f) if (this.hasOwnProperty(_0x1d4778) && typeof _0x4e6b0f[_0x1d4778] !== "undefined") {
              this[_0x1d4778] = _0x4e6b0f[_0x1d4778];
            }
          }
        }
        function _0x5d062f(_0x38ac92, _0x133ce9, _0x3f3800, _0x2d078a) {
          this.get = function (_0x2dc5df) {
            return _0x2dc5df ? this.data.hasOwnProperty(_0x2dc5df) ? this.data[_0x2dc5df] : _0x42f584 : this.data;
          };
          this.set = function (_0x467329, _0x2735c8) {
            this.data[_0x467329] = _0x2735c8;
            return this;
          };
          this.setCH = function (_0x17faf3) {
            this.uaCH = _0x17faf3;
            return this;
          };
          this.detectFeature = function () {
            if (_0x53d980 && _0x53d980.userAgent == this.ua) {
              switch (this.itemType) {
                case "browser":
                  if (_0x53d980.brave && typeof _0x53d980.brave.isBrave == "function") {
                    this.set("name", 'Brave');
                  }
                  break;
                case "device":
                  if (!this.get("type") && _0x173b3b && _0x173b3b.mobile) {
                    this.set("type", "mobile");
                  }
                  if ("Macintosh" == this.get("model") && _0x53d980 && typeof _0x53d980.standalone !== "undefined" && _0x53d980.maxTouchPoints && _0x53d980.maxTouchPoints > 0x2) {
                    this.set("model", "iPad").set("type", "tablet");
                  }
                  break;
                case 'os':
                  if (!this.get("name") && _0x173b3b && _0x173b3b.platform) {
                    this.set("name", _0x173b3b.platform);
                  }
                  break;
                case 'result':
                  var _0x4e3475 = this.data;
                  this.set("browser", _0x4e3475[_0x316722].getItem().detectFeature().get()).set('cpu', _0x4e3475[_0x316722].getItem().detectFeature().get()).set("device", _0x4e3475[_0x316722].getItem().detectFeature().get()).set("engine", _0x4e3475[_0x316722].getItem().detectFeature().get()).set('os', _0x4e3475[_0x316722].getItem().detectFeature().get());
              }
            }
            return this;
          };
          this.parseUA = function () {
            if (this.itemType != 'result') {
              _0x44821f.call(this.data, this.ua, this.rgxMap);
            }
            if (this.itemType == "browser") {
              this.set("major", typeof this.get("version") === "string" ? (typeof this.get("version") === "string" ? this.get("version").replace(/[^\d\.]/g, '') : this.get("version")).split('.')[0x0] : _0x42f584);
            }
            return this;
          };
          this.parseCH = function () {
            var _0x26b5bf = this.uaCH;
            var _0x17878f = this.rgxMap;
            switch (this.itemType) {
              case "browser":
                var _0x397755;
                var _0x14c4af = _0x26b5bf.fullVersionList || _0x26b5bf.brands;
                if (_0x14c4af) {
                  for (var _0x46af6a in _0x14c4af) {
                    var _0x498fd1 = typeof (_0x14c4af[_0x46af6a].brand || _0x14c4af[_0x46af6a]) === "string" ? (_0x14c4af[_0x46af6a].brand || _0x14c4af[_0x46af6a]).replace(/(Google|Microsoft) /, '') : _0x14c4af[_0x46af6a].brand || _0x14c4af[_0x46af6a];
                    var _0x1aab7d = _0x14c4af[_0x46af6a].version;
                    if (!(/not.a.brand/i.test(_0x498fd1) || _0x397755 && (!/chrom/i.test(_0x397755) || /chromi/i.test(_0x498fd1)))) {
                      this.set("name", _0x498fd1).set("version", _0x1aab7d).set("major", typeof _0x1aab7d === "string" ? (typeof _0x1aab7d === "string" ? _0x1aab7d.replace(/[^\d\.]/g, '') : _0x1aab7d).split('.')[0x0] : _0x42f584);
                      _0x397755 = _0x498fd1;
                    }
                  }
                }
                break;
              case 'cpu':
                var _0x4da141 = _0x26b5bf.architecture;
                if (_0x4da141) {
                  if (_0x4da141 && '64' == _0x26b5bf.bitness) {
                    _0x4da141 += '64';
                  }
                  _0x44821f.call(this.data, _0x4da141 + ';', _0x17878f);
                }
                break;
              case "device":
                if (_0x26b5bf.mobile) {
                  this.set("type", "mobile");
                }
                if (_0x26b5bf.model) {
                  this.set("model", _0x26b5bf.model);
                }
                if ("Xbox" == _0x26b5bf.model) {
                  this.set("type", "console").set("vendor", 'Microsoft');
                }
                if (_0x26b5bf.formFactors) {
                  var _0x504d48;
                  if ("string" != typeof _0x26b5bf.formFactors) {
                    for (var _0x553791 = 0x0; !_0x504d48 && _0x553791 < _0x26b5bf.formFactors.length;) {
                      _0x504d48 = _0x5a4d3b(_0x26b5bf.formFactors[_0x553791++], _0x3def49);
                    }
                  } else {
                    _0x504d48 = _0x5a4d3b(_0x26b5bf.formFactors, _0x3def49);
                  }
                  this.set("type", _0x504d48);
                }
                break;
              case 'os':
                var _0x51a641 = _0x26b5bf.platform;
                if (_0x51a641) {
                  var _0x106ba8 = _0x26b5bf.platformVersion;
                  if (_0x51a641 == "Windows") {
                    _0x106ba8 = parseInt(typeof _0x106ba8 === "string" ? (typeof _0x106ba8 === "string" ? _0x106ba8.replace(/[^\d\.]/g, '') : _0x106ba8).split('.')[0x0] : _0x42f584, 0xa) >= 0xd ? '11' : '10';
                  }
                  this.set("name", _0x51a641).set("version", _0x106ba8);
                }
                if (this.get("name") == "Windows" && "Xbox" == _0x26b5bf.model) {
                  this.set("name", "Xbox").set("version", _0x42f584);
                }
                break;
              case 'result':
                var _0x59a90f = this.data;
                this.set("browser", _0x59a90f[_0x40f139].getItem().setCH(_0x26b5bf).parseCH().get()).set('cpu', _0x59a90f[_0x40f139].getItem().setCH(_0x26b5bf).parseCH().get()).set("device", _0x59a90f[_0x40f139].getItem().setCH(_0x26b5bf).parseCH().get()).set("engine", _0x59a90f[_0x40f139].getItem().setCH(_0x26b5bf).parseCH().get()).set('os', _0x59a90f[_0x40f139].getItem().setCH(_0x26b5bf).parseCH().get());
            }
            return this;
          };
          _0x34b401.call(this, [["itemType", _0x38ac92], ['ua', _0x133ce9], ["uaCH", _0x2d078a], ["rgxMap", _0x3f3800], ["data", _0x135f20(this, _0x38ac92)]]);
          return this;
        }
        function _0x363465(_0x4ae1c6, _0xc2b2d7, _0x141003) {
          if (typeof _0x4ae1c6 === "object") {
            if (_0x4a1891(_0x4ae1c6, true)) {
              if (typeof _0xc2b2d7 === "object") {
                _0x141003 = _0xc2b2d7;
              }
              _0xc2b2d7 = _0x4ae1c6;
            } else {
              _0x141003 = _0x4ae1c6;
              _0xc2b2d7 = _0x42f584;
            }
            _0x4ae1c6 = _0x42f584;
          } else if (!(typeof _0x4ae1c6 !== "string" || _0x4a1891(_0xc2b2d7, true))) {
            _0x141003 = _0xc2b2d7;
            _0xc2b2d7 = _0x42f584;
          }
          if (_0x141003 && typeof _0x141003.append === "function") {
            var _0x44b645 = {};
            _0x141003.forEach(function (_0x60a154, _0x460db7) {
              _0x44b645[_0x460db7] = _0x60a154;
            });
            _0x141003 = _0x44b645;
          }
          if (!(this instanceof _0x363465)) {
            return new _0x363465(_0x4ae1c6, _0xc2b2d7, _0x141003).getResult();
          }
          var _0x5480a8 = typeof _0x4ae1c6 === "string" ? _0x4ae1c6 : _0x141003 && _0x141003["user-agent"] ? _0x141003["user-agent"] : _0x53d980 && _0x53d980.userAgent ? _0x53d980.userAgent : '';
          var _0x261065 = new _0x2252ab(_0x141003, true);
          var _0x547243 = _0xc2b2d7 ? function (_0x447080, _0x754f1) {
            var _0xc1707b = {};
            var _0x5d4791 = _0x754f1;
            if (!_0x4a1891(_0x754f1)) {
              _0x5d4791 = {};
              for (var _0xb2d17b in _0x754f1) for (var _0x231ddb in _0x754f1[_0xb2d17b]) _0x5d4791[_0x231ddb] = _0x754f1[_0xb2d17b][_0x231ddb].concat(_0x5d4791[_0x231ddb] ? _0x5d4791[_0x231ddb] : []);
            }
            for (var _0x4febc7 in _0x447080) _0xc1707b[_0x4febc7] = _0x5d4791[_0x4febc7] && _0x5d4791[_0x4febc7].length % 0x2 == 0x0 ? _0x5d4791[_0x4febc7].concat(_0x447080[_0x4febc7]) : _0x447080[_0x4febc7];
            return _0xc1707b;
          }(_0x3e34c8, _0xc2b2d7) : _0x3e34c8;
          var _0x124aca = function (_0x27c72d) {
            return _0x27c72d == 'result' ? function () {
              return new _0x5d062f(_0x27c72d, _0x5480a8, _0x547243, _0x261065).set('ua', _0x5480a8).set("browser", this.getBrowser()).set('cpu', this.getCPU()).set("device", this.getDevice()).set("engine", this.getEngine()).set('os', this.getOS()).get();
            } : function () {
              return new _0x5d062f(_0x27c72d, _0x5480a8, _0x547243[_0x27c72d], _0x261065).parseUA().get();
            };
          };
          _0x34b401.call(this, [["getBrowser", _0x124aca("browser")], ["getCPU", _0x124aca('cpu')], ["getDevice", _0x124aca("device")], ['getEngine', _0x124aca("engine")], ['getOS', _0x124aca('os')], ["getResult", _0x124aca('result')], ["getUA", function () {
            return _0x5480a8;
          }], ["setUA", function (_0x47e2c1) {
            if (typeof _0x47e2c1 === "string") {
              _0x5480a8 = _0x47e2c1.length > 0x1f4 ? _0x26fe6c(_0x47e2c1, 0x1f4) : _0x47e2c1;
            }
            return this;
          }]]).setUA(_0x5480a8);
          return this;
        }
        _0x363465.VERSION = "2.0.0";
        _0x363465.BROWSER = _0x27f82d(["name", "version", "major", "type"]);
        _0x363465.CPU = _0x27f82d(["architecture"]);
        _0x363465.DEVICE = _0x27f82d(["model", "vendor", "type", "console", "mobile", 'smarttv', "tablet", 'wearable', 'embedded']);
        _0x363465.ENGINE = _0x363465.OS = _0x27f82d(["name", "version"]);
        if (typeof _0x3f0571 !== "undefined") {
          if (true && _0x2c3060.exports) {
            _0x3f0571 = _0x2c3060.exports = _0x363465;
          }
          _0x3f0571.UAParser = _0x363465;
        } else if (true && _0x153300.amdO) {
          if (!((_0x3062a7 = function () {
            return _0x363465;
          }.call(_0x3f0571, _0x153300, _0x3f0571, _0x2c3060)) === _0x42f584)) {
            _0x2c3060.exports = _0x3062a7;
          }
        } else if (_0x296f32) {
          _0x33b3b6.UAParser = _0x363465;
        }
        var _0x4e9d40 = _0x296f32 && (_0x33b3b6.jQuery || _0x33b3b6.Zepto);
        if (_0x4e9d40 && !_0x4e9d40.ua) {
          var _0x15db1f = new _0x363465();
          _0x4e9d40.ua = _0x15db1f.getResult();
          _0x4e9d40.ua.get = function () {
            return _0x15db1f.getUA();
          };
          _0x4e9d40.ua.set = function (_0x38c5d5) {
            _0x15db1f.setUA(_0x38c5d5);
            var _0x407905 = _0x15db1f.getResult();
            for (var _0x5f1171 in _0x407905) _0x4e9d40.ua[_0x5f1171] = _0x407905[_0x5f1171];
          };
        }
      }("object" == typeof window ? window : this);
    },
    0x10e9: (_0x5e23ca, _0x33fffc, _0x1b5aef) => {
      'use strict';

      var _0x3155d1 = {
        NM: () => _0x131f32
      };
      _0x1b5aef.d(_0x33fffc, _0x3155d1);
      let _0x131f32 = (_0x24a0ec, _0x403ad3, _0x183951) => {
        let _0x5d6bff = (0x2 << Math.log(_0x24a0ec.length - 0x1) / Math.LN2) - 0x1;
        let _0x301338 = -~(1.6 * _0x5d6bff * _0x403ad3 / _0x24a0ec.length);
        return (_0x3b8de6 = _0x403ad3) => {
          let _0x3ffa63 = '';
          for (;;) {
            let _0x36d36e = _0x183951(_0x301338);
            let _0x591f1f = 0x0 | _0x301338;
            for (; _0x591f1f--;) {
              _0x3ffa63 += _0x24a0ec[_0x36d36e[_0x591f1f] & _0x5d6bff] || '';
              if (_0x3ffa63.length === _0x3b8de6) {
                return _0x3ffa63;
              }
            }
          }
        };
      };
    }
  };
  var _0x207fa5 = {};
  function _0x1533b1(_0x36d33f) {
    var _0x2ef0f5 = _0x207fa5[_0x36d33f];
    if (undefined !== _0x2ef0f5) {
      return _0x2ef0f5.exports;
    }
    var _0x3a2e17 = {
      exports: {}
    };
    var _0xf77046 = _0x207fa5[_0x36d33f] = _0x3a2e17;
    _0x4fc850[_0x36d33f].call(_0xf77046.exports, _0xf77046, _0xf77046.exports, _0x1533b1);
    return _0xf77046.exports;
  }
  _0x1533b1.amdO = {};
  _0x1533b1.d = (_0x527694, _0x397491) => {
    for (var _0x1677d8 in _0x397491) if (_0x1533b1.o(_0x397491, _0x1677d8) && !_0x1533b1.o(_0x527694, _0x1677d8)) {
      Object.defineProperty(_0x527694, _0x1677d8, {
        'enumerable': true,
        'get': _0x397491[_0x1677d8]
      });
    }
  };
  _0x1533b1.g = function () {
    if ("object" == typeof globalThis) {
      return globalThis;
    }
    try {
      return this || new Function("return this")();
    } catch (_0x222a74) {
      if ("object" == typeof window) {
        return window;
      }
    }
  }();
  _0x1533b1.o = (_0x1d9a7f, _0x2b9dd9) => Object.prototype.hasOwnProperty.call(_0x1d9a7f, _0x2b9dd9);
  const _0x5a5ad4 = _0x1533b1(0x2c);
  const _0x204c97 = _0x1533b1(0x8ab);
  _0x1533b1(0xa10)();
  window.SoTrym = _0x6f53af => new _0x5a5ad4(_0x6f53af);
  new _0x204c97(false).register();
})();
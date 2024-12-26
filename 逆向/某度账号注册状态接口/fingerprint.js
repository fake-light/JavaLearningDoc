function hex_md5(e) {
    return binl2hex(core_md5(str2binl(e), e.length * chrsz))
}
function b64_md5(e) {
    return binl2b64(core_md5(str2binl(e), e.length * chrsz))
}
function str_md5(e) {
    return binl2str(core_md5(str2binl(e), e.length * chrsz))
}
function hex_hmac_md5(e, t) {
    return binl2hex(core_hmac_md5(e, t))
}
function b64_hmac_md5(e, t) {
    return binl2b64(core_hmac_md5(e, t))
}
function str_hmac_md5(e, t) {
    return binl2str(core_hmac_md5(e, t))
}
function md5_vm_test() {
    return "900150983cd24fb0d6963f7d28e17f72" == hex_md5("abc")
}
function core_md5(e, t) {
    e[t >> 5] |= 128 << t % 32,
    e[(t + 64 >>> 9 << 4) + 14] = t;
    for (var r = 1732584193, n = -271733879, i = -1732584194, o = 271733878, a = 0; a < e.length; a += 16) {
        var c = r
          , s = n
          , u = i
          , f = o;
        r = md5_ff(r, n, i, o, e[a + 0], 7, -680876936),
        o = md5_ff(o, r, n, i, e[a + 1], 12, -389564586),
        i = md5_ff(i, o, r, n, e[a + 2], 17, 606105819),
        n = md5_ff(n, i, o, r, e[a + 3], 22, -1044525330),
        r = md5_ff(r, n, i, o, e[a + 4], 7, -176418897),
        o = md5_ff(o, r, n, i, e[a + 5], 12, 1200080426),
        i = md5_ff(i, o, r, n, e[a + 6], 17, -1473231341),
        n = md5_ff(n, i, o, r, e[a + 7], 22, -45705983),
        r = md5_ff(r, n, i, o, e[a + 8], 7, 1770035416),
        o = md5_ff(o, r, n, i, e[a + 9], 12, -1958414417),
        i = md5_ff(i, o, r, n, e[a + 10], 17, -42063),
        n = md5_ff(n, i, o, r, e[a + 11], 22, -1990404162),
        r = md5_ff(r, n, i, o, e[a + 12], 7, 1804603682),
        o = md5_ff(o, r, n, i, e[a + 13], 12, -40341101),
        i = md5_ff(i, o, r, n, e[a + 14], 17, -1502002290),
        n = md5_ff(n, i, o, r, e[a + 15], 22, 1236535329),
        r = md5_gg(r, n, i, o, e[a + 1], 5, -165796510),
        o = md5_gg(o, r, n, i, e[a + 6], 9, -1069501632),
        i = md5_gg(i, o, r, n, e[a + 11], 14, 643717713),
        n = md5_gg(n, i, o, r, e[a + 0], 20, -373897302),
        r = md5_gg(r, n, i, o, e[a + 5], 5, -701558691),
        o = md5_gg(o, r, n, i, e[a + 10], 9, 38016083),
        i = md5_gg(i, o, r, n, e[a + 15], 14, -660478335),
        n = md5_gg(n, i, o, r, e[a + 4], 20, -405537848),
        r = md5_gg(r, n, i, o, e[a + 9], 5, 568446438),
        o = md5_gg(o, r, n, i, e[a + 14], 9, -1019803690),
        i = md5_gg(i, o, r, n, e[a + 3], 14, -187363961),
        n = md5_gg(n, i, o, r, e[a + 8], 20, 1163531501),
        r = md5_gg(r, n, i, o, e[a + 13], 5, -1444681467),
        o = md5_gg(o, r, n, i, e[a + 2], 9, -51403784),
        i = md5_gg(i, o, r, n, e[a + 7], 14, 1735328473),
        n = md5_gg(n, i, o, r, e[a + 12], 20, -1926607734),
        r = md5_hh(r, n, i, o, e[a + 5], 4, -378558),
        o = md5_hh(o, r, n, i, e[a + 8], 11, -2022574463),
        i = md5_hh(i, o, r, n, e[a + 11], 16, 1839030562),
        n = md5_hh(n, i, o, r, e[a + 14], 23, -35309556),
        r = md5_hh(r, n, i, o, e[a + 1], 4, -1530992060),
        o = md5_hh(o, r, n, i, e[a + 4], 11, 1272893353),
        i = md5_hh(i, o, r, n, e[a + 7], 16, -155497632),
        n = md5_hh(n, i, o, r, e[a + 10], 23, -1094730640),
        r = md5_hh(r, n, i, o, e[a + 13], 4, 681279174),
        o = md5_hh(o, r, n, i, e[a + 0], 11, -358537222),
        i = md5_hh(i, o, r, n, e[a + 3], 16, -722521979),
        n = md5_hh(n, i, o, r, e[a + 6], 23, 76029189),
        r = md5_hh(r, n, i, o, e[a + 9], 4, -640364487),
        o = md5_hh(o, r, n, i, e[a + 12], 11, -421815835),
        i = md5_hh(i, o, r, n, e[a + 15], 16, 530742520),
        n = md5_hh(n, i, o, r, e[a + 2], 23, -995338651),
        r = md5_ii(r, n, i, o, e[a + 0], 6, -198630844),
        o = md5_ii(o, r, n, i, e[a + 7], 10, 1126891415),
        i = md5_ii(i, o, r, n, e[a + 14], 15, -1416354905),
        n = md5_ii(n, i, o, r, e[a + 5], 21, -57434055),
        r = md5_ii(r, n, i, o, e[a + 12], 6, 1700485571),
        o = md5_ii(o, r, n, i, e[a + 3], 10, -1894986606),
        i = md5_ii(i, o, r, n, e[a + 10], 15, -1051523),
        n = md5_ii(n, i, o, r, e[a + 1], 21, -2054922799),
        r = md5_ii(r, n, i, o, e[a + 8], 6, 1873313359),
        o = md5_ii(o, r, n, i, e[a + 15], 10, -30611744),
        i = md5_ii(i, o, r, n, e[a + 6], 15, -1560198380),
        n = md5_ii(n, i, o, r, e[a + 13], 21, 1309151649),
        r = md5_ii(r, n, i, o, e[a + 4], 6, -145523070),
        o = md5_ii(o, r, n, i, e[a + 11], 10, -1120210379),
        i = md5_ii(i, o, r, n, e[a + 2], 15, 718787259),
        n = md5_ii(n, i, o, r, e[a + 9], 21, -343485551),
        r = safe_add(r, c),
        n = safe_add(n, s),
        i = safe_add(i, u),
        o = safe_add(o, f)
    }
    return Array(r, n, i, o)
}
function md5_cmn(e, t, r, n, i, o) {
    return safe_add(bit_rol(safe_add(safe_add(t, e), safe_add(n, o)), i), r)
}
function md5_ff(e, t, r, n, i, o, a) {
    return md5_cmn(t & r | ~t & n, e, t, i, o, a)
}
function md5_gg(e, t, r, n, i, o, a) {
    return md5_cmn(t & n | r & ~n, e, t, i, o, a)
}
function md5_hh(e, t, r, n, i, o, a) {
    return md5_cmn(t ^ r ^ n, e, t, i, o, a)
}
function md5_ii(e, t, r, n, i, o, a) {
    return md5_cmn(r ^ (t | ~n), e, t, i, o, a)
}
function core_hmac_md5(e, t) {
    var r = str2binl(e);
    r.length > 16 && (r = core_md5(r, e.length * chrsz));
    for (var n = Array(16), i = Array(16), o = 0; 16 > o; o++)
        n[o] = 909522486 ^ r[o],
        i[o] = 1549556828 ^ r[o];
    var a = core_md5(n.concat(str2binl(t)), 512 + t.length * chrsz);
    return core_md5(i.concat(a), 640)
}
function safe_add(e, t) {
    var r = (65535 & e) + (65535 & t)
      , n = (e >> 16) + (t >> 16) + (r >> 16);
    return n << 16 | 65535 & r
}
function bit_rol(e, t) {
    return e << t | e >>> 32 - t
}
function str2binl(e) {
    for (var t = Array(), r = (1 << chrsz) - 1, n = 0; n < e.length * chrsz; n += chrsz)
        t[n >> 5] |= (e.charCodeAt(n / chrsz) & r) << n % 32;
    return t
}
function binl2str(e) {
    for (var t = "", r = (1 << chrsz) - 1, n = 0; n < 32 * e.length; n += chrsz)
        t += String.fromCharCode(e[n >> 5] >>> n % 32 & r);
    return t
}
function binl2hex(e) {
    for (var t = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", r = "", n = 0; n < 4 * e.length; n++)
        r += t.charAt(e[n >> 2] >> n % 4 * 8 + 4 & 15) + t.charAt(e[n >> 2] >> n % 4 * 8 & 15);
    return r
}
function binl2b64(e) {
    for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", r = "", n = 0; n < 4 * e.length; n += 3)
        for (var i = (e[n >> 2] >> 8 * (n % 4) & 255) << 16 | (e[n + 1 >> 2] >> 8 * ((n + 1) % 4) & 255) << 8 | e[n + 2 >> 2] >> 8 * ((n + 2) % 4) & 255, o = 0; 4 > o; o++)
            r += 8 * n + 6 * o > 32 * e.length ? b64pad : t.charAt(i >> 6 * (3 - o) & 63);
    return r
}
var Pass = "undefined" == typeof window.Pass ? {} : window.Pass;
(function() {
    var e = null
      , t = null
      , r = void 0;
    !function(t, n) {
        "object" == typeof r ? module.exports = r = n() : "function" == typeof e && e.amd ? e([], n) : t.CryptoJS = n()
    }(this, function() {
        var e = e || function(e, t) {
            var r = Object.create || function() {
                function e() {}
                return function(t) {
                    var r;
                    return e.prototype = t,
                    r = new e,
                    e.prototype = null,
                    r
                }
            }()
              , n = {}
              , i = n.lib = {}
              , o = i.Base = function() {
                return {
                    extend: function(e) {
                        var t = r(this);
                        return e && t.mixIn(e),
                        t.hasOwnProperty("init") && this.init !== t.init || (t.init = function() {
                            t.$super.init.apply(this, arguments)
                        }
                        ),
                        t.init.prototype = t,
                        t.$super = this,
                        t
                    },
                    create: function() {
                        var e = this.extend();
                        return e.init.apply(e, arguments),
                        e
                    },
                    init: function() {},
                    mixIn: function(e) {
                        for (var t in e)
                            e.hasOwnProperty(t) && (this[t] = e[t]);
                        e.hasOwnProperty("toString") && (this.toString = e.toString)
                    },
                    clone: function() {
                        return this.init.prototype.extend(this)
                    }
                }
            }()
              , a = i.WordArray = o.extend({
                init: function(e, r) {
                    e = this.words = e || [],
                    this.sigBytes = r != t ? r : 4 * e.length
                },
                toString: function(e) {
                    return (e || s).stringify(this)
                },
                concat: function(e) {
                    var t = this.words
                      , r = e.words
                      , n = this.sigBytes
                      , i = e.sigBytes;
                    if (this.clamp(),
                    n % 4)
                        for (var o = 0; i > o; o++) {
                            var a = r[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                            t[n + o >>> 2] |= a << 24 - (n + o) % 4 * 8
                        }
                    else
                        for (var o = 0; i > o; o += 4)
                            t[n + o >>> 2] = r[o >>> 2];
                    return this.sigBytes += i,
                    this
                },
                clamp: function() {
                    var t = this.words
                      , r = this.sigBytes;
                    t[r >>> 2] &= 4294967295 << 32 - r % 4 * 8,
                    t.length = e.ceil(r / 4)
                },
                clone: function() {
                    var e = o.clone.call(this);
                    return e.words = this.words.slice(0),
                    e
                },
                random: function(t) {
                    for (var r, n = [], i = function(t) {
                        var t = t
                          , r = 987654321
                          , n = 4294967295;
                        return function() {
                            r = 36969 * (65535 & r) + (r >> 16) & n,
                            t = 18e3 * (65535 & t) + (t >> 16) & n;
                            var i = (r << 16) + t & n;
                            return i /= 4294967296,
                            i += .5,
                            i * (e.random() > .5 ? 1 : -1)
                        }
                    }, o = 0; t > o; o += 4) {
                        var c = i(4294967296 * (r || e.random()));
                        r = 987654071 * c(),
                        n.push(4294967296 * c() | 0)
                    }
                    return new a.init(n,t)
                }
            })
              , c = n.enc = {}
              , s = c.Hex = {
                stringify: function(e) {
                    for (var t = e.words, r = e.sigBytes, n = [], i = 0; r > i; i++) {
                        var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        n.push((o >>> 4).toString(16)),
                        n.push((15 & o).toString(16))
                    }
                    return n.join("")
                },
                parse: function(e) {
                    for (var t = e.length, r = [], n = 0; t > n; n += 2)
                        r[n >>> 3] |= parseInt(e.substr(n, 2), 16) << 24 - n % 8 * 4;
                    return new a.init(r,t / 2)
                }
            }
              , u = c.Latin1 = {
                stringify: function(e) {
                    for (var t = e.words, r = e.sigBytes, n = [], i = 0; r > i; i++) {
                        var o = t[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        n.push(String.fromCharCode(o))
                    }
                    return n.join("")
                },
                parse: function(e) {
                    for (var t = e.length, r = [], n = 0; t > n; n++)
                        r[n >>> 2] |= (255 & e.charCodeAt(n)) << 24 - n % 4 * 8;
                    return new a.init(r,t)
                }
            }
              , f = c.Utf8 = {
                stringify: function(e) {
                    try {
                        return decodeURIComponent(escape(u.stringify(e)))
                    } catch (e) {
                        throw new Error("Malformed UTF-8 data")
                    }
                },
                parse: function(e) {
                    return u.parse(unescape(encodeURIComponent(e)))
                }
            }
              , d = i.BufferedBlockAlgorithm = o.extend({
                reset: function() {
                    this._data = new a.init,
                    this._nDataBytes = 0
                },
                _append: function(e) {
                    "string" == typeof e && (e = f.parse(e)),
                    this._data.concat(e),
                    this._nDataBytes += e.sigBytes
                },
                _process: function(t) {
                    var r = this._data
                      , n = r.words
                      , i = r.sigBytes
                      , o = this.blockSize
                      , c = 4 * o
                      , s = i / c;
                    s = t ? e.ceil(s) : e.max((0 | s) - this._minBufferSize, 0);
                    var u = s * o
                      , f = e.min(4 * u, i);
                    if (u) {
                        for (var d = 0; u > d; d += o)
                            this._doProcessBlock(n, d);
                        var l = n.splice(0, u);
                        r.sigBytes -= f
                    }
                    return new a.init(l,f)
                },
                clone: function() {
                    var e = o.clone.call(this);
                    return e._data = this._data.clone(),
                    e
                },
                _minBufferSize: 0
            })
              , l = (i.Hasher = d.extend({
                cfg: o.extend(),
                init: function(e) {
                    this.cfg = this.cfg.extend(e),
                    this.reset()
                },
                reset: function() {
                    d.reset.call(this),
                    this._doReset()
                },
                update: function(e) {
                    return this._append(e),
                    this._process(),
                    this
                },
                finalize: function(e) {
                    e && this._append(e);
                    var t = this._doFinalize();
                    return t
                },
                blockSize: 16,
                _createHelper: function(e) {
                    return function(t, r) {
                        return new e.init(r).finalize(t)
                    }
                },
                _createHmacHelper: function(e) {
                    return function(t, r) {
                        return new l.HMAC.init(e,r).finalize(t)
                    }
                }
            }),
            n.algo = {});
            return n
        }(Math);
        return e
    }),
    !function(n, i) {
        "object" == typeof r ? module.exports = r = i(t("./core.min"), t("./sha1.min"), t("./hmac.min")) : "function" == typeof e && e.amd ? e(["./core.min", "./sha1.min", "./hmac.min"], i) : i(n.CryptoJS)
    }(this, function(e) {
        return function() {
            var t = e
              , r = t.lib
              , n = r.Base
              , i = r.WordArray
              , o = t.algo
              , a = o.MD5
              , c = o.EvpKDF = n.extend({
                cfg: n.extend({
                    keySize: 4,
                    hasher: a,
                    iterations: 1
                }),
                init: function(e) {
                    this.cfg = this.cfg.extend(e)
                },
                compute: function(e, t) {
                    for (var r = this.cfg, n = r.hasher.create(), o = i.create(), a = o.words, c = r.keySize, s = r.iterations; a.length < c; ) {
                        u && n.update(u);
                        var u = n.update(e).finalize(t);
                        n.reset();
                        for (var f = 1; s > f; f++)
                            u = n.finalize(u),
                            n.reset();
                        o.concat(u)
                    }
                    return o.sigBytes = 4 * c,
                    o
                }
            });
            t.EvpKDF = function(e, t, r) {
                return c.create(r).compute(e, t)
            }
        }(),
        e.EvpKDF
    }),
    !function(n, i) {
        "object" == typeof r ? module.exports = r = i(t("./core.min")) : "function" == typeof e && e.amd ? e(["./core.min"], i) : i(n.CryptoJS)
    }(this, function(e) {
        return function() {
            function t(e, t, r) {
                for (var n = [], o = 0, a = 0; t > a; a++)
                    if (a % 4) {
                        var c = r[e.charCodeAt(a - 1)] << a % 4 * 2
                          , s = r[e.charCodeAt(a)] >>> 6 - a % 4 * 2;
                        n[o >>> 2] |= (c | s) << 24 - o % 4 * 8,
                        o++
                    }
                return i.create(n, o)
            }
            var r = e
              , n = r.lib
              , i = n.WordArray
              , o = r.enc;
            o.Base64 = {
                stringify: function(e) {
                    var t = e.words
                      , r = e.sigBytes
                      , n = this._map;
                    e.clamp();
                    for (var i = [], o = 0; r > o; o += 3)
                        for (var a = t[o >>> 2] >>> 24 - o % 4 * 8 & 255, c = t[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255, s = t[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, u = a << 16 | c << 8 | s, f = 0; 4 > f && r > o + .75 * f; f++)
                            i.push(n.charAt(u >>> 6 * (3 - f) & 63));
                    var d = n.charAt(64);
                    if (d)
                        for (; i.length % 4; )
                            i.push(d);
                    return i.join("")
                },
                parse: function(e) {
                    var r = e.length
                      , n = this._map
                      , i = this._reverseMap;
                    if (!i) {
                        i = this._reverseMap = [];
                        for (var o = 0; o < n.length; o++)
                            i[n.charCodeAt(o)] = o
                    }
                    var a = n.charAt(64);
                    if (a) {
                        var c = e.indexOf(a);
                        -1 !== c && (r = c)
                    }
                    return t(e, r, i)
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            }
        }(),
        e.enc.Base64
    }),
    !function(n, i) {
        "object" == typeof r ? module.exports = r = i(t("./core.min"), t("./evpkdf.min")) : "function" == typeof e && e.amd ? e(["./core.min", "./evpkdf.min"], i) : i(n.CryptoJS)
    }(this, function(e) {
        e.lib.Cipher || function(t) {
            var r = e
              , n = r.lib
              , i = n.Base
              , o = n.WordArray
              , a = n.BufferedBlockAlgorithm
              , c = r.enc
              , s = (c.Utf8,
            c.Base64)
              , u = r.algo
              , f = u.EvpKDF
              , d = n.Cipher = a.extend({
                cfg: i.extend(),
                createEncryptor: function(e, t) {
                    return this.create(this._ENC_XFORM_MODE, e, t)
                },
                createDecryptor: function(e, t) {
                    return this.create(this._DEC_XFORM_MODE, e, t)
                },
                init: function(e, t, r) {
                    this.cfg = this.cfg.extend(r),
                    this._xformMode = e,
                    this._key = t,
                    this.reset()
                },
                reset: function() {
                    a.reset.call(this),
                    this._doReset()
                },
                process: function(e) {
                    return this._append(e),
                    this._process()
                },
                finalize: function(e) {
                    e && this._append(e);
                    var t = this._doFinalize();
                    return t
                },
                keySize: 4,
                ivSize: 4,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                _createHelper: function() {
                    function e(e) {
                        return "string" == typeof e ? b : x
                    }
                    return function(t) {
                        return {
                            encrypt: function(r, n, i) {
                                return e(n).encrypt(t, r, n, i)
                            },
                            decrypt: function(r, n, i) {
                                return e(n).decrypt(t, r, n, i)
                            }
                        }
                    }
                }()
            })
              , l = (n.StreamCipher = d.extend({
                _doFinalize: function() {
                    var e = this._process(!0);
                    return e
                },
                blockSize: 1
            }),
            r.mode = {})
              , h = n.BlockCipherMode = i.extend({
                createEncryptor: function(e, t) {
                    return this.Encryptor.create(e, t)
                },
                createDecryptor: function(e, t) {
                    return this.Decryptor.create(e, t)
                },
                init: function(e, t) {
                    this._cipher = e,
                    this._iv = t
                }
            })
              , m = l.CBC = function() {
                function e(e, r, n) {
                    var i = this._iv;
                    if (i) {
                        var o = i;
                        this._iv = t
                    } else
                        var o = this._prevBlock;
                    for (var a = 0; n > a; a++)
                        e[r + a] ^= o[a]
                }
                var r = h.extend();
                return r.Encryptor = r.extend({
                    processBlock: function(t, r) {
                        var n = this._cipher
                          , i = n.blockSize;
                        e.call(this, t, r, i),
                        n.encryptBlock(t, r),
                        this._prevBlock = t.slice(r, r + i)
                    }
                }),
                r.Decryptor = r.extend({
                    processBlock: function(t, r) {
                        var n = this._cipher
                          , i = n.blockSize
                          , o = t.slice(r, r + i);
                        n.decryptBlock(t, r),
                        e.call(this, t, r, i),
                        this._prevBlock = o
                    }
                }),
                r
            }()
              , p = r.pad = {}
              , g = p.Pkcs7 = {
                pad: function(e, t) {
                    for (var r = 4 * t, n = r - e.sigBytes % r, i = n << 24 | n << 16 | n << 8 | n, a = [], c = 0; n > c; c += 4)
                        a.push(i);
                    var s = o.create(a, n);
                    e.concat(s)
                },
                unpad: function(e) {
                    var t = 255 & e.words[e.sigBytes - 1 >>> 2];
                    e.sigBytes -= t
                }
            }
              , v = (n.BlockCipher = d.extend({
                cfg: d.cfg.extend({
                    mode: m,
                    padding: g
                }),
                reset: function() {
                    d.reset.call(this);
                    var e = this.cfg
                      , t = e.iv
                      , r = e.mode;
                    if (this._xformMode == this._ENC_XFORM_MODE)
                        var n = r.createEncryptor;
                    else {
                        var n = r.createDecryptor;
                        this._minBufferSize = 1
                    }
                    this._mode && this._mode.__creator == n ? this._mode.init(this, t && t.words) : (this._mode = n.call(r, this, t && t.words),
                    this._mode.__creator = n)
                },
                _doProcessBlock: function(e, t) {
                    this._mode.processBlock(e, t)
                },
                _doFinalize: function() {
                    var e = this.cfg.padding;
                    if (this._xformMode == this._ENC_XFORM_MODE) {
                        e.pad(this._data, this.blockSize);
                        var t = this._process(!0)
                    } else {
                        var t = this._process(!0);
                        e.unpad(t)
                    }
                    return t
                },
                blockSize: 4
            }),
            n.CipherParams = i.extend({
                init: function(e) {
                    this.mixIn(e)
                },
                toString: function(e) {
                    return (e || this.formatter).stringify(this)
                }
            }))
              , _ = r.format = {}
              , y = _.OpenSSL = {
                stringify: function(e) {
                    var t = e.ciphertext
                      , r = e.salt;
                    if (r)
                        var n = o.create([1398893684, 1701076831]).concat(r).concat(t);
                    else
                        var n = t;
                    return n.toString(s)
                },
                parse: function(e) {
                    var t = s.parse(e)
                      , r = t.words;
                    if (1398893684 == r[0] && 1701076831 == r[1]) {
                        var n = o.create(r.slice(2, 4));
                        r.splice(0, 4),
                        t.sigBytes -= 16
                    }
                    return v.create({
                        ciphertext: t,
                        salt: n
                    })
                }
            }
              , x = n.SerializableCipher = i.extend({
                cfg: i.extend({
                    format: y
                }),
                encrypt: function(e, t, r, n) {
                    n = this.cfg.extend(n);
                    var i = e.createEncryptor(r, n)
                      , o = i.finalize(t)
                      , a = i.cfg;
                    return v.create({
                        ciphertext: o,
                        key: r,
                        iv: a.iv,
                        algorithm: e,
                        mode: a.mode,
                        padding: a.padding,
                        blockSize: e.blockSize,
                        formatter: n.format
                    })
                },
                decrypt: function(e, t, r, n) {
                    n = this.cfg.extend(n),
                    t = this._parse(t, n.format);
                    var i = e.createDecryptor(r, n).finalize(t.ciphertext);
                    return i
                },
                _parse: function(e, t) {
                    return "string" == typeof e ? t.parse(e, this) : e
                }
            })
              , S = r.kdf = {}
              , w = S.OpenSSL = {
                execute: function(e, t, r, n) {
                    n || (n = o.random(8));
                    var i = f.create({
                        keySize: t + r
                    }).compute(e, n)
                      , a = o.create(i.words.slice(t), 4 * r);
                    return i.sigBytes = 4 * t,
                    v.create({
                        key: i,
                        iv: a,
                        salt: n
                    })
                }
            }
              , b = n.PasswordBasedCipher = x.extend({
                cfg: x.cfg.extend({
                    kdf: w
                }),
                encrypt: function(e, t, r, n) {
                    n = this.cfg.extend(n);
                    var i = n.kdf.execute(r, e.keySize, e.ivSize);
                    n.iv = i.iv;
                    var o = x.encrypt.call(this, e, t, i.key, n);
                    return o.mixIn(i),
                    o
                },
                decrypt: function(e, t, r, n) {
                    n = this.cfg.extend(n),
                    t = this._parse(t, n.format);
                    var i = n.kdf.execute(r, e.keySize, e.ivSize, t.salt);
                    n.iv = i.iv;
                    var o = x.decrypt.call(this, e, t, i.key, n);
                    return o
                }
            })
        }()
    }),
    !function(n, i) {
        "object" == typeof r ? module.exports = r = i(t("./core.min")) : "function" == typeof e && e.amd ? e(["./core.min"], i) : i(n.CryptoJS)
    }(this, function(e) {
        !function() {
            var t = e
              , r = t.lib
              , n = r.Base
              , i = t.enc
              , o = i.Utf8
              , a = t.algo;
            a.HMAC = n.extend({
                init: function(e, t) {
                    e = this._hasher = new e.init,
                    "string" == typeof t && (t = o.parse(t));
                    var r = e.blockSize
                      , n = 4 * r;
                    t.sigBytes > n && (t = e.finalize(t)),
                    t.clamp();
                    for (var i = this._oKey = t.clone(), a = this._iKey = t.clone(), c = i.words, s = a.words, u = 0; r > u; u++)
                        c[u] ^= 1549556828,
                        s[u] ^= 909522486;
                    i.sigBytes = a.sigBytes = n,
                    this.reset()
                },
                reset: function() {
                    var e = this._hasher;
                    e.reset(),
                    e.update(this._iKey)
                },
                update: function(e) {
                    return this._hasher.update(e),
                    this
                },
                finalize: function(e) {
                    var t = this._hasher
                      , r = t.finalize(e);
                    t.reset();
                    var n = t.finalize(this._oKey.clone().concat(r));
                    return n
                }
            })
        }()
    }),
    !function(n, i) {
        "object" == typeof r ? module.exports = r = i(t("./core.min"), t("./cipher-core.min")) : "function" == typeof e && e.amd ? e(["./core.min", "./cipher-core.min"], i) : i(n.CryptoJS)
    }(this, function(e) {
        return e.mode.ECB = function() {
            var t = e.lib.BlockCipherMode.extend();
            return t.Encryptor = t.extend({
                processBlock: function(e, t) {
                    this._cipher.encryptBlock(e, t)
                }
            }),
            t.Decryptor = t.extend({
                processBlock: function(e, t) {
                    this._cipher.decryptBlock(e, t)
                }
            }),
            t
        }(),
        e.mode.ECB
    }),
    !function(n, i) {
        "object" == typeof r ? module.exports = r = i(t("./core.min"), t("./cipher-core.min")) : "function" == typeof e && e.amd ? e(["./core.min", "./cipher-core.min"], i) : i(n.CryptoJS)
    }(this, function(e) {
        return e.pad.Pkcs7
    }),
    !function(n, i) {
        "object" == typeof r ? module.exports = r = i(t("./core.min"), t("./enc-base64.min"), t("./md5.min"), t("./evpkdf.min"), t("./cipher-core.min")) : "function" == typeof e && e.amd ? e(["./core.min", "./enc-base64.min", "./md5.min", "./evpkdf.min", "./cipher-core.min"], i) : i(n.CryptoJS)
    }(this, function(e) {
        return function() {
            var t = e
              , r = t.lib
              , n = r.BlockCipher
              , i = t.algo
              , o = []
              , a = []
              , c = []
              , s = []
              , u = []
              , f = []
              , d = []
              , l = []
              , h = []
              , m = [];
            !function() {
                for (var e = [], t = 0; 256 > t; t++)
                    e[t] = 128 > t ? t << 1 : t << 1 ^ 283;
                for (var r = 0, n = 0, t = 0; 256 > t; t++) {
                    var i = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4;
                    i = i >>> 8 ^ 255 & i ^ 99,
                    o[r] = i,
                    a[i] = r;
                    var p = e[r]
                      , g = e[p]
                      , v = e[g]
                      , _ = 257 * e[i] ^ 16843008 * i;
                    c[r] = _ << 24 | _ >>> 8,
                    s[r] = _ << 16 | _ >>> 16,
                    u[r] = _ << 8 | _ >>> 24,
                    f[r] = _;
                    var _ = 16843009 * v ^ 65537 * g ^ 257 * p ^ 16843008 * r;
                    d[i] = _ << 24 | _ >>> 8,
                    l[i] = _ << 16 | _ >>> 16,
                    h[i] = _ << 8 | _ >>> 24,
                    m[i] = _,
                    r ? (r = p ^ e[e[e[v ^ p]]],
                    n ^= e[e[n]]) : r = n = 1
                }
            }();
            var p = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
              , g = i.AES = n.extend({
                _doReset: function() {
                    if (!this._nRounds || this._keyPriorReset !== this._key) {
                        for (var e = this._keyPriorReset = this._key, t = e.words, r = e.sigBytes / 4, n = this._nRounds = r + 6, i = 4 * (n + 1), a = this._keySchedule = [], c = 0; i > c; c++)
                            if (r > c)
                                a[c] = t[c];
                            else {
                                var s = a[c - 1];
                                c % r ? r > 6 && c % r == 4 && (s = o[s >>> 24] << 24 | o[s >>> 16 & 255] << 16 | o[s >>> 8 & 255] << 8 | o[255 & s]) : (s = s << 8 | s >>> 24,
                                s = o[s >>> 24] << 24 | o[s >>> 16 & 255] << 16 | o[s >>> 8 & 255] << 8 | o[255 & s],
                                s ^= p[c / r | 0] << 24),
                                a[c] = a[c - r] ^ s
                            }
                        for (var u = this._invKeySchedule = [], f = 0; i > f; f++) {
                            var c = i - f;
                            if (f % 4)
                                var s = a[c];
                            else
                                var s = a[c - 4];
                            u[f] = 4 > f || 4 >= c ? s : d[o[s >>> 24]] ^ l[o[s >>> 16 & 255]] ^ h[o[s >>> 8 & 255]] ^ m[o[255 & s]]
                        }
                    }
                },
                encryptBlock: function(e, t) {
                    this._doCryptBlock(e, t, this._keySchedule, c, s, u, f, o)
                },
                decryptBlock: function(e, t) {
                    var r = e[t + 1];
                    e[t + 1] = e[t + 3],
                    e[t + 3] = r,
                    this._doCryptBlock(e, t, this._invKeySchedule, d, l, h, m, a);
                    var r = e[t + 1];
                    e[t + 1] = e[t + 3],
                    e[t + 3] = r
                },
                _doCryptBlock: function(e, t, r, n, i, o, a, c) {
                    for (var s = this._nRounds, u = e[t] ^ r[0], f = e[t + 1] ^ r[1], d = e[t + 2] ^ r[2], l = e[t + 3] ^ r[3], h = 4, m = 1; s > m; m++) {
                        var p = n[u >>> 24] ^ i[f >>> 16 & 255] ^ o[d >>> 8 & 255] ^ a[255 & l] ^ r[h++]
                          , g = n[f >>> 24] ^ i[d >>> 16 & 255] ^ o[l >>> 8 & 255] ^ a[255 & u] ^ r[h++]
                          , v = n[d >>> 24] ^ i[l >>> 16 & 255] ^ o[u >>> 8 & 255] ^ a[255 & f] ^ r[h++]
                          , _ = n[l >>> 24] ^ i[u >>> 16 & 255] ^ o[f >>> 8 & 255] ^ a[255 & d] ^ r[h++];
                        u = p,
                        f = g,
                        d = v,
                        l = _
                    }
                    var p = (c[u >>> 24] << 24 | c[f >>> 16 & 255] << 16 | c[d >>> 8 & 255] << 8 | c[255 & l]) ^ r[h++]
                      , g = (c[f >>> 24] << 24 | c[d >>> 16 & 255] << 16 | c[l >>> 8 & 255] << 8 | c[255 & u]) ^ r[h++]
                      , v = (c[d >>> 24] << 24 | c[l >>> 16 & 255] << 16 | c[u >>> 8 & 255] << 8 | c[255 & f]) ^ r[h++]
                      , _ = (c[l >>> 24] << 24 | c[u >>> 16 & 255] << 16 | c[f >>> 8 & 255] << 8 | c[255 & d]) ^ r[h++];
                    e[t] = p,
                    e[t + 1] = g,
                    e[t + 2] = v,
                    e[t + 3] = _
                },
                keySize: 8
            });
            t.AES = n._createHelper(g)
        }(),
        e.AES
    }),
    !function(n, i) {
        "object" == typeof r ? module.exports = r = i(t("./core.min")) : "function" == typeof e && e.amd ? e(["./core.min"], i) : i(n.CryptoJS)
    }(this, function(e) {
        return e.enc.Utf8
    })
}
).call(Pass);
var hexcase = 0, b64pad = "", chrsz = 8, fuid;
!function(e) {
    window.passFingerPrint = e
}(function() {
    var e = function() {
        return navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage
    }
      , t = function() {
        return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : ""
    }
      , r = function() {
        var e = [window.screen.width, window.screen.height];
        return e.join(",")
    }
      , n = function() {
        if (window.screen.availWidth && window.screen.availHeight) {
            var e = [window.screen.availHeight, window.screen.availWidth];
            return e.join(",")
        }
        return ""
    }
      , i = function() {
        return "Microsoft Internet Explorer" === navigator.appName ? !0 : "Netscape" === navigator.appName && /Trident/.test(navigator.userAgent) ? !0 : !1
    }
      , o = function(e, t) {
        if (Array.prototype.forEach && e.forEach === Array.prototype.forEach)
            e.forEach(t);
        else if (e.length === +e.length)
            for (var r = 0, n = e.length; n > r; r++)
                t(e[r], r, e);
        else
            for (var i in e)
                e.hasOwnProperty(i) && t(e[i], i, e)
    }
      , a = function(e, t) {
        var r = [];
        return null == e ? r : Array.prototype.map && e.map === Array.prototype.map ? e.map(t) : (o(e, function(e, n, i) {
            r.push(t(e, n, i))
        }),
        r)
    }
      , c = function() {
        if (null == navigator.plugins)
            return "";
        for (var e = [], t = 0, r = navigator.plugins.length; r > t; t++)
            navigator.plugins[t] && e.push(navigator.plugins[t]);
        return a(e, function(e) {
            var t = a(e, function(e) {
                return [e.type, e.suffixes]
            });
            return [e.name, e.description, t]
        })
    }
      , s = function() {
        var e = [];
        if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject"in window) {
            var t = ["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"];
            e = a(t, function(e) {
                try {
                    return new window.ActiveXObject(e),
                    e
                } catch (t) {
                    return ""
                }
            })
        } else
            e.push("");
        return navigator.plugins && (e = e.concat(c())),
        e || ""
    }
      , u = function() {
        i() ? s() : c()
    }
      , f = function() {
        var e = document.createElement("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    }
      , d = function() {
        var e = document.createElement("canvas")
          , t = null;
        try {
            t = e.getContext("webgl") || e.getContext("experimental-webgl")
        } catch (r) {}
        return t || (t = null),
        t
    }
      , l = function() {
        if (!f())
            return !1;
        var e = d();
        return !!window.WebGLRenderingContext && !!e
    }
      , h = function() {
        var e = []
          , t = document.createElement("canvas");
        t.width = 2e3,
        t.height = 200,
        t.style.display = "inline";
        var r = t.getContext("2d");
        return r.rect(0, 0, 10, 10),
        r.rect(2, 2, 6, 6),
        e.push("canvas winding:" + (r.isPointInPath(5, 5, "evenodd") === !1 ? "yes" : "no")),
        r.textBaseline = "alphabetic",
        r.fillStyle = "#f60",
        r.fillRect(125, 1, 62, 20),
        r.fillStyle = "#069",
        r.font = "11pt no-real-font-123",
        r.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15),
        r.fillStyle = "rgba(102, 204, 0, 0.2)",
        r.font = "18pt Arial",
        r.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45),
        r.globalCompositeOperation = "multiply",
        r.fillStyle = "rgb(255,0,255)",
        r.beginPath(),
        r.arc(50, 50, 50, 0, 2 * Math.PI, !0),
        r.closePath(),
        r.fill(),
        r.fillStyle = "rgb(0,255,255)",
        r.beginPath(),
        r.arc(100, 50, 50, 0, 2 * Math.PI, !0),
        r.closePath(),
        r.fill(),
        r.fillStyle = "rgb(255,255,0)",
        r.beginPath(),
        r.arc(75, 100, 50, 0, 2 * Math.PI, !0),
        r.closePath(),
        r.fill(),
        r.fillStyle = "rgb(255,0,255)",
        r.arc(75, 75, 75, 0, 2 * Math.PI, !0),
        r.arc(75, 75, 25, 0, 2 * Math.PI, !0),
        r.fill("evenodd"),
        t.toDataURL && e.push("canvas fp:" + t.toDataURL()),
        e
    }
      , m = function() {
        var e, t = function(t) {
            return e.clearColor(0, 0, 0, 1),
            e.enable(e.DEPTH_TEST),
            e.depthFunc(e.LEQUAL),
            e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT),
            "[" + t[0] + ", " + t[1] + "]"
        }, r = function(e) {
            var t = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
            if (t) {
                var r = e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                return 0 === r && (r = 2),
                r
            }
            return null
        };
        if (e = d(),
        !e)
            return null;
        var n = []
          , i = "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"
          , a = "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"
          , c = e.createBuffer();
        e.bindBuffer(e.ARRAY_BUFFER, c);
        var s = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
        e.bufferData(e.ARRAY_BUFFER, s, e.STATIC_DRAW),
        c.itemSize = 3,
        c.numItems = 3;
        var u = e.createProgram()
          , f = e.createShader(e.VERTEX_SHADER);
        e.shaderSource(f, i),
        e.compileShader(f);
        var l = e.createShader(e.FRAGMENT_SHADER);
        e.shaderSource(l, a),
        e.compileShader(l),
        e.attachShader(u, f),
        e.attachShader(u, l),
        e.linkProgram(u),
        e.useProgram(u),
        u.vertexPosAttrib = e.getAttribLocation(u, "attrVertex"),
        u.offsetUniform = e.getUniformLocation(u, "uniformOffset"),
        e.enableVertexAttribArray(u.vertexPosArray),
        e.vertexAttribPointer(u.vertexPosAttrib, c.itemSize, e.FLOAT, !1, 0, 0),
        e.uniform2f(u.offsetUniform, 1, 1),
        e.drawArrays(e.TRIANGLE_STRIP, 0, c.numItems);
        try {
            n.push(e.canvas.toDataURL())
        } catch (h) {}
        n.push("extensions:" + (e.getSupportedExtensions() || []).join(";")),
        n.push("webgl aliased line width range:" + t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))),
        n.push("webgl aliased point size range:" + t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))),
        n.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)),
        n.push("webgl antialiasing:" + (e.getContextAttributes().antialias ? "yes" : "no")),
        n.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)),
        n.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)),
        n.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)),
        n.push("webgl max anisotropy:" + r(e)),
        n.push("webgl max combined texture image units:" + e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),
        n.push("webgl max cube map texture size:" + e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)),
        n.push("webgl max fragment uniform vectors:" + e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)),
        n.push("webgl max render buffer size:" + e.getParameter(e.MAX_RENDERBUFFER_SIZE)),
        n.push("webgl max texture image units:" + e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)),
        n.push("webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)),
        n.push("webgl max varying vectors:" + e.getParameter(e.MAX_VARYING_VECTORS)),
        n.push("webgl max vertex attribs:" + e.getParameter(e.MAX_VERTEX_ATTRIBS)),
        n.push("webgl max vertex texture image units:" + e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),
        n.push("webgl max vertex uniform vectors:" + e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)),
        n.push("webgl max viewport dims:" + t(e.getParameter(e.MAX_VIEWPORT_DIMS))),
        n.push("webgl red bits:" + e.getParameter(e.RED_BITS)),
        n.push("webgl renderer:" + e.getParameter(e.RENDERER)),
        n.push("webgl shading language version:" + e.getParameter(e.SHADING_LANGUAGE_VERSION)),
        n.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)),
        n.push("webgl vendor:" + e.getParameter(e.VENDOR)),
        n.push("webgl version:" + e.getParameter(e.VERSION));
        try {
            var m = e.getExtension("WEBGL_debug_renderer_info");
            m && (n.push("webgl unmasked vendor:" + e.getParameter(m.UNMASKED_VENDOR_WEBGL)),
            n.push("webgl unmasked renderer:" + e.getParameter(m.UNMASKED_RENDERER_WEBGL)))
        } catch (h) {}
        return e.getShaderPrecisionFormat ? (o(["FLOAT", "INT"], function(t) {
            o(["VERTEX", "FRAGMENT"], function(r) {
                o(["HIGH", "MEDIUM", "LOW"], function(i) {
                    o(["precision", "rangeMin", "rangeMax"], function(o) {
                        var a = e.getShaderPrecisionFormat(e[r + "_SHADER"], e[i + "_" + t])[o];
                        "precision" !== o && (o = "precision " + o);
                        var c = ["webgl ", r.toLowerCase(), " shader ", i.toLowerCase(), " ", t.toLowerCase(), " ", o, ":", a].join("");
                        n.push(c)
                    })
                })
            })
        }),
        n) : n
    }
      , p = function() {
        return f() ? window.hex_md5(h().join(",")) : ""
    }
      , g = function() {
        return l() ? window.hex_md5(m().join(",")) : ""
    }
      , v = function() {
        try {
            var e = d()
              , t = e.getExtension("WEBGL_debug_renderer_info");
            return e.getParameter(t.UNMASKED_VENDOR_WEBGL) + "~" + e.getParameter(t.UNMASKED_RENDERER_WEBGL)
        } catch (r) {
            return null
        }
    }
      , _ = function() {
        return l() ? v() : ""
    }
      , y = function() {
        var e = document.createElement("div");
        e.innerHTML = "&nbsp;",
        e.className = "adsbox";
        var t = !1;
        try {
            document.body.appendChild(e),
            t = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight,
            document.body.removeChild(e)
        } catch (r) {
            t = !1
        }
        return t
    }
      , x = function() {
        if ("undefined" != typeof navigator.languages)
            try {
                var e = navigator.languages[0].substr(0, 2);
                if (e !== navigator.language.substr(0, 2))
                    return !0
            } catch (t) {
                return !0
            }
        return !1
    }
      , S = function() {
        return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight
    }
      , w = function() {
        var e, t = navigator.userAgent.toLowerCase(), r = navigator.oscpu, n = navigator.platform.toLowerCase();
        e = t.indexOf("windows phone") >= 0 ? "Windows Phone" : t.indexOf("win") >= 0 ? "Windows" : t.indexOf("android") >= 0 ? "Android" : t.indexOf("openharmony") >= 0 || t.indexOf("harmonyos") >= 0 ? "Harmony" : t.indexOf("linux") >= 0 ? "Linux" : t.indexOf("iphone") >= 0 || t.indexOf("ipad") >= 0 ? "iOS" : t.indexOf("mac") >= 0 ? "Mac" : "Other";
        var i = "ontouchstart"in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
        if (i && "Windows Phone" !== e && "Android" !== e && "iOS" !== e && "Other" !== e)
            return !0;
        if ("undefined" != typeof r) {
            if (r = r.toLowerCase(),
            r.indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e)
                return !0;
            if (r.indexOf("linux") >= 0 && "Linux" !== e && "Android" !== e)
                return !0;
            if (r.indexOf("mac") >= 0 && "Mac" !== e && "iOS" !== e)
                return !0;
            if ((-1 === r.indexOf("win") && -1 === r.indexOf("linux") && -1 === r.indexOf("mac")) != ("Other" === e))
                return !0
        }
        return n.indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e ? !0 : (n.indexOf("linux") >= 0 || n.indexOf("android") >= 0 || n.indexOf("pike") >= 0) && "Linux" !== e && "Android" !== e ? !0 : (n.indexOf("mac") >= 0 || n.indexOf("ipad") >= 0 || n.indexOf("ipod") >= 0 || n.indexOf("iphone") >= 0) && "Mac" !== e && "iOS" !== e ? !0 : (-1 === n.indexOf("win") && -1 === n.indexOf("linux") && -1 === n.indexOf("mac")) != ("Other" === e) ? !0 : "undefined" == typeof navigator.plugins && "Windows" !== e && "Windows Phone" !== e
    }
      , b = function() {
        var e, t = navigator.userAgent.toLowerCase(), r = navigator.productSub;
        if (e = t.indexOf("firefox") >= 0 ? "Firefox" : t.indexOf("opera") >= 0 || t.indexOf("opr") >= 0 ? "Opera" : t.indexOf("chrome") >= 0 ? "Chrome" : t.indexOf("safari") >= 0 ? "Safari" : t.indexOf("trident") >= 0 ? "Internet Explorer" : "Other",
        ("Chrome" === e || "Safari" === e || "Opera" === e) && "20030107" !== r)
            return !0;
        var n = eval.toString().length;
        if (37 === n && "Safari" !== e && "Firefox" !== e && "Other" !== e)
            return !0;
        if (39 === n && "Internet Explorer" !== e && "Other" !== e)
            return !0;
        if (33 === n && "Chrome" !== e && "Opera" !== e && "Other" !== e)
            return !0;
        var i;
        try {
            throw "a"
        } catch (o) {
            try {
                o.toSource(),
                i = !0
            } catch (a) {
                i = !1
            }
        }
        return i && "Firefox" !== e && "Other" !== e
    }
      , E = function() {
        var e, t = 0;
        "undefined" != typeof navigator.maxTouchPoints ? t = navigator.maxTouchPoints : "undefined" != typeof navigator.msMaxTouchPoints && (t = navigator.msMaxTouchPoints);
        try {
            document.createEvent("TouchEvent"),
            e = !0
        } catch (r) {
            e = !1
        }
        var n = "ontouchstart"in window;
        return t + "," + e + "," + n
    }
      , C = function() {
        var e = ["monospace", "sans-serif", "serif"]
          , t = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
        t = t.filter(function(e, r) {
            return t.indexOf(e) === r
        });
        var r = "mmmmmmmmmmlli"
          , n = "72px"
          , i = document.getElementsByTagName("body")[0]
          , o = document.createElement("div")
          , a = document.createElement("div")
          , c = {}
          , s = {}
          , u = function() {
            var e = document.createElement("span");
            return e.style.position = "absolute",
            e.style.left = "-9999px",
            e.style.fontSize = n,
            e.style.fontStyle = "normal",
            e.style.fontWeight = "normal",
            e.style.letterSpacing = "normal",
            e.style.lineBreak = "auto",
            e.style.lineHeight = "normal",
            e.style.textTransform = "none",
            e.style.textAlign = "left",
            e.style.textDecoration = "none",
            e.style.textShadow = "none",
            e.style.whiteSpace = "normal",
            e.style.wordBreak = "normal",
            e.style.wordSpacing = "normal",
            e.innerHTML = r,
            e
        }
          , f = function(e, t) {
            var r = u();
            return r.style.fontFamily = "'" + e + "'," + t,
            r
        }
          , d = function() {
            for (var t = [], r = 0, n = e.length; n > r; r++) {
                var i = u();
                i.style.fontFamily = e[r],
                o.appendChild(i),
                t.push(i)
            }
            return t
        }
          , l = function() {
            for (var r = {}, n = 0, i = t.length; i > n; n++) {
                for (var o = [], c = 0, s = e.length; s > c; c++) {
                    var u = f(t[n], e[c]);
                    a.appendChild(u),
                    o.push(u)
                }
                r[t[n]] = o
            }
            return r
        }
          , h = function(t) {
            for (var r = !1, n = 0; n < e.length; n++)
                if (r = t[n].offsetWidth !== c[e[n]] || t[n].offsetHeight !== s[e[n]])
                    return r;
            return r
        }
          , m = d();
        i.appendChild(o);
        for (var p = 0, g = e.length; g > p; p++)
            c[e[p]] = m[p].offsetWidth,
            s[e[p]] = m[p].offsetHeight;
        var v = l();
        i.appendChild(a);
        for (var _ = [], y = 0, x = t.length; x > y; y++)
            h(v[t[y]]) && _.push(t[y]);
        return _ = _.length,
        i.removeChild(a),
        i.removeChild(o),
        _
    }
      , A = function() {
        var e = window.OfflineAudioContext || window.webkitOfflineAudioContext;
        if (null == e)
            return "";
        var t = new e(1,44100,44100)
          , r = t.createOscillator();
        r.type = "triangle",
        r.frequency.setValueAtTime(1e4, t.currentTime);
        var n = t.createDynamicsCompressor();
        o([["threshold", -50], ["knee", 40], ["ratio", 12], ["reduction", -20], ["attack", 0], ["release", .25]], function(e) {
            void 0 !== n[e[0]] && "function" == typeof n[e[0]].setValueAtTime && n[e[0]].setValueAtTime(e[1], t.currentTime)
        }),
        r.connect(n),
        n.connect(t.destination),
        r.start(0),
        t.startRendering();
        var i = setTimeout(function() {
            return t.oncomplete = function() {}
            ,
            t = null,
            "audioTimeout"
        }, 100);
        t.oncomplete = function(e) {
            var t = "";
            try {
                clearTimeout(i),
                t = e.renderedBuffer.getChannelData(0).slice(4500, 5e3).reduce(function(e, t) {
                    return e + Math.abs(t)
                }, 0).toString(),
                r.disconnect(),
                n.disconnect()
            } catch (o) {
                return ""
            }
            return t || ""
        }
    }
      , O = function() {
        return navigator.userAgent
    }
      , P = function() {
        return window.screen.colorDepth
    }
      , B = function() {
        return navigator.deviceMemory || ""
    }
      , R = function() {
        return (new Date).getTimezoneOffset()
    }
      , T = function() {
        return ""
    }
      , M = function() {
        return !!window.sessionStorage
    }
      , k = function() {
        return !!window.localStorage
    }
      , D = function() {
        return !!window.indexedDB
    }
      , I = function() {
        return !(!document.body || !document.body.addBehavior)
    }
      , z = function() {
        return !!window.openDatabase
    }
      , L = function() {
        return navigator.cpuClass || ""
    }
      , N = function() {
        return navigator.platform
    }
      , F = function(e) {
        try {
            return encodeURIComponent(e())
        } catch (t) {
            return ""
        }
    }
      , U = function(e) {
        var t = window.Pass
          , r = "FfdsnvsootJmvNfl"
          , n = t.CryptoJS.enc.Utf8.parse(r)
          , i = t.CryptoJS.enc.Utf8.parse(e)
          , o = t.CryptoJS.AES.encrypt(i, n, {
            mode: t.CryptoJS.mode.ECB,
            padding: t.CryptoJS.pad.Pkcs7
        });
        return o.toString()
    };
    return window.JSON || (window.JSON = {
        stringify: function(e) {
            var t, r = "";
            if (null === e)
                return String(e);
            switch (typeof e) {
            case "number":
            case "boolean":
                return String(e);
            case "string":
                return '"' + e + '"';
            case "undefined":
            case "function":
                return void 0
            }
            switch (Object.prototype.toString.call(e)) {
            case "[object Array]":
                r += "[";
                for (var n = 0, i = e.length; i > n; n++)
                    t = JSON.stringify(e[n]),
                    r += (void 0 === t ? null : t) + ",";
                return "[" !== r && (r = r.slice(0, -1)),
                r += "]";
            case "[object Date]":
                return '"' + (e.toJSON ? e.toJSON() : e.toString()) + '"';
            case "[object RegExp]":
                return "{}";
            case "[object Object]":
                r += "{";
                for (n in e)
                    e.hasOwnProperty(n) && (t = JSON.stringify(e[n]),
                    void 0 !== t && (r += '"' + n + '":' + t + ","));
                return "{" !== r && (r = r.slice(0, -1)),
                r += "}";
            case "[object String]":
                return '"' + e.toString() + '"';
            case "[object Number]":
            case "[object Boolean]":
                return e.toString()
            }
        }
    }),
    fuid || (fuid = {
        userAgent: F(O),
        canvas: F(p),
        language: F(e),
        colorDepth: F(P),
        deviceMemory: F(B),
        hardwareConcurrency: F(t),
        screenResolution: F(r),
        availableScreenResolution: F(n),
        timezoneOffset: F(R),
        timezone: F(T),
        sessionStorage: F(M),
        localStorage: F(k),
        indexedDb: F(D),
        addBehavior: F(I),
        openDatabase: F(z),
        cpuClass: F(L),
        platform: F(N),
        plugins: F(u),
        webgl: F(g),
        webglVendorAndRenderer: F(_),
        adBlock: F(y),
        hasLiedLanguages: F(x),
        hasLiedResolution: F(S),
        hasLiedOs: F(w),
        hasLiedBrowser: F(b),
        touchSupport: F(E),
        fonts: F(C),
        audio: F(A)
    }),
    {
        fuid: U(JSON.stringify(fuid))
    }
});

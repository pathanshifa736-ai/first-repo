import "./internal_customer_edit_inner.1.sha256-8e471ce186.js";
try {
    let e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "56e03d1d-8747-49a0-98f5-b6990dab1683", e._sentryDebugIdIdentifier = "sentry-dbid-56e03d1d-8747-49a0-98f5-b6990dab1683")
} catch {}
var d = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function s(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function a(e) {
    if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
    var t = e.default;
    if (typeof t == "function") {
        var n = function o() {
            var r = !1;
            try {
                r = this instanceof o
            } catch {}
            return r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.keys(e).forEach(function(o) {
        var r = Object.getOwnPropertyDescriptor(e, o);
        Object.defineProperty(n, o, r.get ? r : {
            enumerable: !0,
            get: function() {
                return e[o]
            }
        })
    }), n
}
export {
    s as a, d as c, a as g
};
//# sourceMappingURL=_commonjsHelpers.1.sha256-de4c51d13d.js.map
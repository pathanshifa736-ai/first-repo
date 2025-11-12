import "./internal_customer_edit_inner.1.sha256-8e471ce186.js";
import {
    c as b
} from "./_commonjsHelpers.1.sha256-de4c51d13d.js";
try {
    let e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "3a5c1d56-37a0-434c-bdeb-9ea3d3d18fe6", e._sentryDebugIdIdentifier = "sentry-dbid-3a5c1d56-37a0-434c-bdeb-9ea3d3d18fe6")
} catch {}
var c, v;

function I() {
    if (v) return c;
    v = 1;
    var e = typeof b == "object" && b && b.Object === Object && b;
    return c = e, c
}
var f, T;

function k() {
    if (T) return f;
    T = 1;
    var e = I(),
        r = typeof self == "object" && self && self.Object === Object && self,
        t = e || r || Function("return this")();
    return f = t, f
}
var s, _;

function m() {
    if (_) return s;
    _ = 1;
    var e = k(),
        r = e.Symbol;
    return s = r, s
}
var d, S;

function D() {
    if (S) return d;
    S = 1;
    var e = m(),
        r = Object.prototype,
        t = r.hasOwnProperty,
        i = r.toString,
        o = e ? e.toStringTag : void 0;

    function u(n) {
        var a = t.call(n, o),
            w = n[o];
        try {
            n[o] = void 0;
            var R = !0
        } catch {}
        var G = i.call(n);
        return R && (a ? n[o] = w : delete n[o]), G
    }
    return d = u, d
}
var l, O;

function L() {
    if (O) return l;
    O = 1;
    var e = Object.prototype,
        r = e.toString;

    function t(i) {
        return r.call(i)
    }
    return l = t, l
}
var g, p;

function F() {
    if (p) return g;
    p = 1;
    var e = m(),
        r = D(),
        t = L(),
        i = "[object Null]",
        o = "[object Undefined]",
        u = e ? e.toStringTag : void 0;

    function n(a) {
        return a == null ? a === void 0 ? o : i : u && u in Object(a) ? r(a) : t(a)
    }
    return g = n, g
}
var j, q;

function N() {
    if (q) return j;
    q = 1;

    function e(r) {
        return r != null && typeof r == "object"
    }
    return j = e, j
}
var y, h;

function U() {
    if (h) return y;
    h = 1;

    function e(r) {
        var t = typeof r;
        return r != null && (t == "object" || t == "function")
    }
    return y = e, y
}
export {
    N as a, k as b, U as c, m as d, I as e, F as r
};
//# sourceMappingURL=isObject.1.sha256-2b1688dbb5.js.map
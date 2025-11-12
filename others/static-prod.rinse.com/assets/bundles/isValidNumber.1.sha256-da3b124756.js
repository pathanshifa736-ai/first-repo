import {
    n as b,
    p as y,
    w as m,
    i as c,
    a as d
} from "./normalizeArguments.1.sha256-7bc6ca83b5.js";
try {
    let e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "10cfd006-cc67-4587-8f44-c0bf132f0c18", e._sentryDebugIdIdentifier = "sentry-dbid-10cfd006-cc67-4587-8f44-c0bf132f0c18")
} catch {}

function g() {
    var e = b(arguments),
        t = e.text,
        r = e.options,
        n = e.metadata;
    return y(t, r, n)
}

function j() {
    return m(g, arguments)
}

function l(e) {
    "@babel/helpers - typeof";
    return l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, l(e)
}

function _(e, t) {
    return w(e) || v(e, t) || A(e, t) || h()
}

function h() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}

function A(e, t) {
    if (e) {
        if (typeof e == "string") return p(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
        if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return p(e, t)
    }
}

function p(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n
}

function v(e, t) {
    var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (r != null) {
        var n = [],
            o = !0,
            a = !1,
            f, i;
        try {
            for (r = r.call(e); !(o = (f = r.next()).done) && (n.push(f.value), !(t && n.length === t)); o = !0);
        } catch (s) {
            a = !0, i = s
        } finally {
            try {
                !o && r.return != null && r.return()
            } finally {
                if (a) throw i
            }
        }
        return n
    }
}

function w(e) {
    if (Array.isArray(e)) return e
}

function I(e) {
    var t = Array.prototype.slice.call(e),
        r = _(t, 4),
        n = r[0],
        o = r[1],
        a = r[2],
        f = r[3],
        i, s = {},
        u;
    if (typeof n == "string") l(o) !== "object" ? (f ? (s = a, u = f) : u = a, c(n) ? i = y(n, {
        defaultCountry: o
    }, u) : i = {}) : (a ? (s = o, u = a) : u = o, c(n) ? i = y(n, void 0, u) : i = {});
    else if (S(n)) i = n, a ? (s = o, u = a) : u = o;
    else throw new TypeError("A phone number must either be a string or an object of shape { phone, [country] }.");
    return {
        input: i,
        options: s,
        metadata: u
    }
}
var S = function(t) {
    return l(t) === "object"
};

function $() {
    var e = I(arguments),
        t = e.input,
        r = e.options,
        n = e.metadata;
    return t.phone ? d(t, r, n) : !1
}

function N() {
    return m($, arguments)
}
export {
    N as i, j as p
};
//# sourceMappingURL=isValidNumber.1.sha256-da3b124756.js.map
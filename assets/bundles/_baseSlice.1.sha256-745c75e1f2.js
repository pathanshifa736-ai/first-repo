import "./internal_customer_edit_inner.1.sha256-8e471ce186.js";
try {
    let e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "abd6581f-7012-406b-afe8-78f420252735", e._sentryDebugIdIdentifier = "sentry-dbid-abd6581f-7012-406b-afe8-78f420252735")
} catch {}
var b, d;

function s() {
    if (d) return b;
    d = 1;

    function e(r, i, n) {
        var l = -1,
            f = r.length;
        i < 0 && (i = -i > f ? 0 : f + i), n = n > f ? f : n, n < 0 && (n += f), f = i > n ? 0 : n - i >>> 0, i >>>= 0;
        for (var u = Array(f); ++l < f;) u[l] = r[l + i];
        return u
    }
    return b = e, b
}
export {
    s as r
};
//# sourceMappingURL=_baseSlice.1.sha256-745c75e1f2.js.map
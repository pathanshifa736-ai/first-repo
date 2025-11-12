import "./internal_customer_edit_inner.1.sha256-8e471ce186.js";
try {
    let r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        e = new r.Error().stack;
    e && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[e] = "33698d81-d4f8-41c6-8416-26437feaf9df", r._sentryDebugIdIdentifier = "sentry-dbid-33698d81-d4f8-41c6-8416-26437feaf9df")
} catch {}
const m = (r, e) => e === 1 ? r : `${r}s`,
    p = r => {
        const e = r % 10,
            t = r % 100;
        return e === 1 && t !== 11 ? `${r}st` : e === 2 && t !== 12 ? `${r}nd` : e === 3 && t !== 13 ? `${r}rd` : `${r}th`
    },
    g = r => {
        const e = typeof r == "string" ? parseFloat(r) : r;
        return new Intl.NumberFormat("en-US", {
            style: "decimal"
        }).format(e)
    },
    b = r => r.toLowerCase().replace(/\s/g, "-"),
    w = r => r.charAt(0).toUpperCase() + r.slice(1).toLowerCase();

function u() {
    try {
        return new Intl.NumberFormat(void 0, {
            style: "currency",
            currency: "USD",
            currencyDisplay: "narrowSymbol"
        }).resolvedOptions().currencyDisplay === "narrowSymbol"
    } catch {
        return !1
    }
}

function y(r, e = 2, t) {
    if (r === "") return "";
    const n = typeof r == "string" || typeof r == "number" ? r : r.amount,
        o = typeof n == "string" ? parseFloat(n) : n,
        s = o.toString() === o.toFixed(0).toString() && !(e === 2) ? 0 : 2,
        i = typeof r == "string" || typeof r == "number" ? "USD" : r.currency,
        c = t ? .currencyDisplay ? ? (u() ? "narrowSymbol" : "symbol"),
        a = t ? .useGrouping ? ? !1;
    return new Intl.NumberFormat(t ? .locale, {
        style: "currency",
        currency: i,
        currencyDisplay: c,
        minimumFractionDigits: s,
        maximumFractionDigits: s,
        useGrouping: a
    }).format(n)
}

function D(r, e = "narrowSymbol") {
    return new Intl.NumberFormat(void 0, {
        style: "currency",
        currency: r,
        currencyDisplay: e
    }).formatToParts(0).find(t => t.type === "currency").value
}
const h = (r, e = 2, t = !0) => y(r, t ? e : 0, {
    useGrouping: !0
});
export {
    h as a, g as b, w as c, b as d, p as e, y as f, D as g, m as s
};
//# sourceMappingURL=stringUtils.1.sha256-ed30843ec8.js.map
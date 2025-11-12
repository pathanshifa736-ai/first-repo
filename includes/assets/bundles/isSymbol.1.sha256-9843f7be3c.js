import "./internal_customer_edit_inner.1.sha256-8e471ce186.js";
import {
    r as a,
    a as b
} from "./isObject.1.sha256-2b1688dbb5.js";
try {
    let e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        r = new e.Error().stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "9208958a-e949-4a89-8721-a63596748103", e._sentryDebugIdIdentifier = "sentry-dbid-9208958a-e949-4a89-8721-a63596748103")
} catch {}
var s, o;

function f() {
    if (o) return s;
    o = 1;
    var e = a(),
        r = b(),
        i = "[object Symbol]";

    function n(t) {
        return typeof t == "symbol" || r(t) && e(t) == i
    }
    return s = n, s
}
export {
    f as r
};
//# sourceMappingURL=isSymbol.1.sha256-9843f7be3c.js.map
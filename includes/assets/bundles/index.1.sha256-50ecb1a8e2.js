import {
    r as s
} from "./index.1.sha256-9e28d71f9d.js";
import "./internal_customer_edit_inner.1.sha256-8e471ce186.js";
try {
    let e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c7e71ded-14b5-4ab6-90b1-4e9956551ad5", e._sentryDebugIdIdentifier = "sentry-dbid-c7e71ded-14b5-4ab6-90b1-4e9956551ad5")
} catch {}
const d = (e, t) => {
        const n = s.useRef(!1);
        s.useEffect(() => {
            n.current ? e() : n.current = !0
        }, [...t])
    },
    f = (e = !1) => {
        const [t, n] = s.useState(e), u = s.useCallback(() => {
            n(r => !r)
        }, []);
        return [t, u]
    },
    l = () => {
        const [e, t] = s.useState(document.visibilityState === "visible");
        return s.useEffect(() => {
            const n = () => t(!0),
                u = () => t(!1),
                r = () => t(document.visibilityState === "visible");
            return window.addEventListener("focus", n), window.addEventListener("blur", u), document.addEventListener("visibilitychange", r), () => {
                window.removeEventListener("focus", n), window.removeEventListener("blur", u), document.removeEventListener("visibilitychange", r)
            }
        }, []), e
    };

function b(e) {
    const [t, n] = s.useState(e), u = s.useRef(void 0), r = s.useCallback((o, i) => {
        u.current = i, n(o)
    }, []);
    return s.useEffect(() => {
        u.current && (u.current(t), u.current = void 0)
    }, [t]), [t, r]
}
const v = () => s.useMemo(() => Math.random().toString(36).substring(2), []);

function g(e, t) {
    const n = s.useRef(!1);
    s.useEffect(() => e && !n.current ? (n.current = !0, t()) : () => {}, [e])
}
export {
    g as a, b, d as c, f as d, l as e, v as u
};
//# sourceMappingURL=index.1.sha256-50ecb1a8e2.js.map
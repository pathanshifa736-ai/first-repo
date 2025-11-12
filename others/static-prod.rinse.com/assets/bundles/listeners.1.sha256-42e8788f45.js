import {
    w as r
} from "./utils.1.sha256-3b1d7cc795.js";
import "./internal_customer_edit_inner.1.sha256-8e471ce186.js";
try {
    let e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ce7014cb-5c66-4749-b4b5-b365202afa3c", e._sentryDebugIdIdentifier = "sentry-dbid-ce7014cb-5c66-4749-b4b5-b365202afa3c")
} catch {}
const i = () => {
        Array.from(document.querySelectorAll("[data-select-service]")).forEach(e => {
            e.addEventListener("click", t => {
                const s = e.getAttribute("data-select-service");
                s && r("selectedServiceTypes", [s])
            })
        })
    },
    d = e => {
        const t = Date.now(),
            s = () => {
                const n = Date.now() - t;
                e(n)
            };
        window.addEventListener("scroll", s, {
            once: !0,
            passive: !0
        })
    };
export {
    d as a, i as s
};
//# sourceMappingURL=listeners.1.sha256-42e8788f45.js.map
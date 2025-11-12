import {
    f as n
} from "./utils.1.sha256-3b1d7cc795.js";
import "./internal_customer_edit_inner.1.sha256-8e471ce186.js";
try {
    let e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        o = new e.Error().stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "f5e25482-1d60-42a1-90d0-bb7e8a330f2e", e._sentryDebugIdIdentifier = "sentry-dbid-f5e25482-1d60-42a1-90d0-bb7e8a330f2e")
} catch {}
const s = () => {
    const e = document.querySelectorAll("[data-nav-fade-out-on-scroll]"),
        o = document.querySelectorAll("[data-nav-fade-in-on-scroll]"),
        a = () => {
            window.scrollY > 500 ? o.forEach(t => {
                getComputedStyle(t).opacity === "0" && (n(t, "in"), e.forEach(d => {
                    n(d, "out")
                }))
            }) : o.forEach(t => {
                getComputedStyle(t).opacity !== "0" && (n(t, "out"), e.forEach(d => {
                    n(d, "in")
                }))
            })
        };
    a(), window.addEventListener("scroll", a, {
        passive: !0
    })
};
export {
    s as i
};
//# sourceMappingURL=nav-right-fade-in.1.sha256-31028993c9.js.map
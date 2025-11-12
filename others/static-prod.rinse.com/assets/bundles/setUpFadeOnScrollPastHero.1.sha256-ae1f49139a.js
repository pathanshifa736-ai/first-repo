import "./moment.1.sha256-e1e16e85b3.js";
import {
    a as f,
    S as m
} from "./tracking.1.sha256-2062fe1796.js";
import {
    G as r,
    f as o
} from "./utils.1.sha256-3b1d7cc795.js";
import {
    L as s
} from "./constants.1.sha256-57eb641b06.js";
import "./internal_customer_edit_inner.1.sha256-8e471ce186.js";
try {
    let e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c8ce6a0a-8630-4149-bba0-d725c75f6178", e._sentryDebugIdIdentifier = "sentry-dbid-c8ce6a0a-8630-4149-bba0-d725c75f6178")
} catch {}
const h = () => {
        const e = document.querySelectorAll("[data-dynamic-cta-address]");
        let t = r(`${s}-address1`);
        if (t) {
            const n = r(`${s}-address2`);
            n && (t += `, ${n}`)
        }
        e.forEach(n => {
            t && (n.textContent = t)
        })
    },
    g = () => {
        document.querySelectorAll("[data-dynamic-schedule-cta-area]").forEach(t => {
            t.addEventListener("click", () => {
                const n = t.getAttribute("data-dynamic-schedule-cta-area");
                f(m.ClickedDynamicScheduleCtaArea, {
                    area: n
                })
            })
        })
    },
    A = () => {
        h(), g()
    },
    d = Array.from(document.querySelectorAll("[data-fade-in-below-hero]")),
    y = () => {
        const e = Array.from(document.querySelectorAll("[data-hamper-banner]"));
        return e ? e.some(t => {
            const {
                height: n,
                top: a
            } = t.getBoundingClientRect(), l = window.innerHeight * .75, u = -(n / 2);
            return a < l && a > u
        }) : !1
    },
    i = () => {
        const e = window.innerHeight * .75;
        window.scrollY > e && !y() ? d.forEach(a => o(a, "in", 600)) : d.forEach(a => o(a, "out", 600))
    },
    c = () => {
        requestAnimationFrame(i)
    },
    I = () => {
        i(), window.addEventListener("scroll", c, {
            passive: !0
        }), window.addEventListener("resize", c, !1)
    };
export {
    A as a, I as s
};
//# sourceMappingURL=setUpFadeOnScrollPastHero.1.sha256-ae1f49139a.js.map
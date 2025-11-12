import "./internal_customer_edit_inner.1.sha256-8e471ce186.js";
import {
    U as w
} from "./uikit.1.sha256-e1593bd88d.js";
import {
    a as l
} from "./js.cookie.1.sha256-b274c81169.js";
import {
    m as E,
    d as k,
    n as _,
    a as T,
    S as A,
    p as L,
    o as S,
    c as P,
    q as I,
    r as C,
    u as x,
    v as O,
    w as B
} from "./tracking.1.sha256-2062fe1796.js";
import {
    j as g,
    k as D,
    a as N,
    i as q,
    r as y,
    b as U
} from "./utils.1.sha256-3b1d7cc795.js";
import {
    s as M
} from "./scroll-background-color.1.sha256-6f62bdcf88.js";
import {
    i as R
} from "./sentry.1.sha256-9dbfb1cdec.js";
import {
    i as V,
    c as f
} from "./array.1.sha256-a225739a4b.js";
import {
    p as Z,
    i as j
} from "./isValidNumber.1.sha256-da3b124756.js";
import {
    a as K
} from "./exports.1.sha256-e7ea12f564.js";
import "./_commonjsHelpers.1.sha256-de4c51d13d.js";
import "./index.1.sha256-34dadb4a62.js";
import "./moment.1.sha256-e1e16e85b3.js";
import "./get.1.sha256-9817d4d81c.js";
import "./_Map.1.sha256-b42b23b721.js";
import "./isObject.1.sha256-2b1688dbb5.js";
import "./isSymbol.1.sha256-9843f7be3c.js";
import "./_MapCache.1.sha256-b4d334390b.js";
import "./_baseSlice.1.sha256-745c75e1f2.js";
import "./_baseIteratee.1.sha256-d9354401fa.js";
import "./_baseIsEqual.1.sha256-4056d7ec7a.js";
import "./_getTag.1.sha256-441c678435.js";
import "./normalizeArguments.1.sha256-7bc6ca83b5.js";
try {
    let t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "df1b0240-360b-4f24-ab1f-308782c9ef4f", t._sentryDebugIdIdentifier = "sentry-dbid-df1b0240-360b-4f24-ab1f-308782c9ef4f")
} catch {}

function p(t, e, n) {
    if (!t || !V(t.prototype)) throw new TypeError("You must provide a yup schema constructor function");
    if (typeof e != "string") throw new TypeError("A Method name must be provided");
    if (typeof n != "function") throw new TypeError("Method function must be provided");
    t.prototype[e] = n
}(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) a(o);
    new MutationObserver(o => {
        for (const s of o)
            if (s.type === "childList")
                for (const c of s.addedNodes) c.tagName === "LINK" && c.rel === "modulepreload" && a(c)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(o) {
        const s = {};
        return o.integrity && (s.integrity = o.integrity), o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
    }

    function a(o) {
        if (o.ep) return;
        o.ep = !0;
        const s = n(o);
        fetch(o.href, s)
    }
})();

function G() {
    const t = /[?&]kid=([0-9A-Z]{0,10})/.exec(window.location.href);
    if (t) {
        const a = t[1] || "";
        a && l.set("rinse_referral_code", a, {
            path: "/",
            expires: 365
        })
    }
    l.get("rinse_initial_referrer") || l.set("rinse_initial_referrer", document.referrer, {
        path: "/",
        expires: 365
    });
    const e = "initial_path";
    l.get(e) || l.set(e, document.location.pathname, {
        path: "/",
        expires: 365
    }), ["utm_promo", "utm_term", "utm_campaign", "utm_source", "utm_medium", "utm_channel", "utm_content", "gclid", "click_id", "irclickid", "ttclid"].forEach(a => {
        const o = new RegExp(`[?&]${a}=([^#&]*)`).exec(window.location.href);
        if (o) {
            const s = o[1] || "";
            s && l.set(a, decodeURIComponent(s), {
                path: "/",
                expires: 365
            })
        }
    })
}
const W = () => {
        document.body.classList.add("with-image");
        const t = document.querySelectorAll("img[data-src]");
        Array.from(t).forEach(e => {
            e.src = e.getAttribute("data-src")
        })
    },
    $ = () => {
        const t = document.getElementById("nav-offcanvas__a--locations"),
            e = document.getElementById("nav-offcanvas__subnav-list--locations"),
            n = document.getElementById("nav-offcanvas__item--locations"),
            a = document.getElementById("nav-offcanvas__icon--locations-chevron");
        e && g(e), t && t.addEventListener("click", o => {
            o.preventDefault(), n.classList.toggle("nav-offcanvas__item--active"), e.style.display === "none" ? (D(e), a.classList.remove("rinse-icon--chevron-down"), a.classList.add("rinse-icon--chevron-up")) : (g(e), a.classList.remove("rinse-icon--chevron-up"), a.classList.add("rinse-icon--chevron-down"))
        })
    };
let u, v;
const F = t => {
        Array.from(t.map(e => e.target)).forEach(e => {
            const {
                sectionId: n
            } = e.dataset;
            if (q(e)) {
                const a = [],
                    o = `section-active--${n}`;
                [...u.classList].forEach(r => {
                    r.match(/(^|\s)section-active--\S+/g) && r !== o && a.push(r)
                });
                const s = a.join(" ");
                s !== "" && (u.classList.remove(s), u.classList.add(o));
                const c = `.ribbon--${n} .ribbon__path`;
                Array.from(document.querySelectorAll(c)).forEach(r => r.classList.add("ribbon__path--animation-started"))
            }
        })
    },
    H = () => {
        const t = N(0, 10).map(n => n / 10),
            e = new IntersectionObserver(F, {
                threshold: t
            });
        Array.from(v).forEach(n => {
            e.observe(n)
        })
    },
    z = () => {
        u = document.documentElement, v = document.querySelectorAll("[data-section-id]"), H()
    },
    J = () => {
        window.analytics.ready(() => {
            (async () => await E())()
        });
        const t = () => {
            const e = i => {
                const r = i.currentTarget,
                    d = r.innerText,
                    m = r.getAttribute("href"),
                    b = {
                        type: "button",
                        text: d,
                        page_url: window.location.href,
                        destination: m
                    };
                k("Clicked Marketing CTA", b)
            };
            document.querySelectorAll("[data-segment=marketing-cta]").forEach(i => {
                i.addEventListener("click", e)
            });
            const a = i => {
                const r = i.currentTarget;
                _(r.dataset.segmentClickEventName, {
                    text: r.innerText
                })
            };
            document.querySelectorAll("[data-segment-click-event-name]").forEach(i => {
                i.addEventListener("click", a)
            });
            const s = i => {
                const r = i.currentTarget,
                    {
                        segmentCta: d,
                        segmentCtaLocation: m
                    } = r.dataset;
                T(A.ClickedCTA, {
                    cta_variation: d,
                    location_on_page: m,
                    text: r.innerText
                })
            };
            document.querySelectorAll("[data-segment-cta]").forEach(i => {
                i.addEventListener("click", s)
            })
        };
        y(() => {
            t()
        })
    },
    X = () => {
        w.util.on(".turnaround-time-tooltip-wrapper", "beforeshow", t => {
            const e = parseInt(t.currentTarget.style.top),
                n = t.currentTarget.parentNode;
            Array.from(t.currentTarget.querySelectorAll(".rinse-tooltip")).forEach(o => {
                const s = n ? n.offsetTop : 0;
                !isNaN(e) && e < s ? o.classList.add("rinse-tooltip--above") : o.classList.remove("rinse-tooltip--above")
            })
        })
    };
p(f, "letterOrPunctuation", function(e) {
    return this.test({
        name: "letterOrPunctuation",
        message: e || "Letters or punctuation only",
        test: n => /^[\p{L}\p{M}\-.,()'’"\s]*$/u.test(n)
    })
});
p(f, "phoneUS", function(e) {
    return this.test({
        name: "phoneUS",
        exclusive: !0,
        message: e || "Please provide a valid US phone number",
        test: n => {
            try {
                const a = Z(n, "US");
                return j(a)
            } catch {
                return !1
            }
        }
    })
});
p(f, "validZIP", function(e) {
    return this.test({
        name: "validZIP",
        message: e || "Please enter a valid ZIP or postal code",
        test: n => {
            const a = /^[0-9]{5}$/,
                o = /^[ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ] [0-9][ABCEGHJKLMNPRSTVWXYZ][0-9]$/;
            return a.test(n) || o.test(n)
        }
    })
});
async function Y() {
    try {
        await L(() => !!window.clarity, "Clarity", S, 500, 5e3)
    } catch (t) {
        K(t)
    }
}
R();
J();
const h = () => {
    document.body.classList.remove("preload")
};
y(() => {
    P(), M(), z(), X(), W(), $(), I(), C(), G(), x("data_analytics").then(r => {
        r && Y()
    }), window.addEventListener("load", h), setTimeout(h, 1e3);
    const t = new URLSearchParams(window.location.search);
    Array.from(t.entries()).filter(([r]) => r.startsWith("treatment_group_")).forEach(([r, d]) => {
        d && l.set(r, d)
    });
    const n = document.querySelectorAll("html, body"),
        a = !!("ontouchstart" in window || navigator.maxTouchPoints);
    Array.from(n).forEach(r => {
        a ? (r.classList.add("touch-device"), r.classList.remove("no-touch")) : (r.classList.add("no-touch"), r.classList.remove("touch-device"))
    });
    const o = document.getElementById("djDebug"),
        s = document.getElementById("djDebugToolbar"),
        c = document.getElementById("djDebugToolbarHandle");
    s && (c.removeAttribute("hidden"), s.removeAttribute("hidden"), o.removeAttribute("hidden"));
    const i = document.querySelectorAll('[data-action="logout"]');
    Array.from(i).forEach(r => {
        r.addEventListener("click", d => {
            d.preventDefault(), sessionStorage.clear(), localStorage.clear(), window.Kustomer && window.Kustomer.clear && window.Kustomer.clear(), window.location.assign("/accounts/logout/")
        })
    }), window.analytics.ready(() => {
        if (U("sendGtagEventsToPrecise")) try {
            window.gtag("config", "AW-11378402053"), window.gtag("event", "conversion", {
                send_to: "AW-11378402053/Q9kfCLn-5c8ZEIXG0rEq"
            })
        } catch {}
    }), O("view"), B("pageview")
});
//# sourceMappingURL=base_rebrand.1.sha256-405feb9080.js.map
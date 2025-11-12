import {
    a as c
} from "./js.cookie.1.sha256-b274c81169.js";
import {
    h as p
} from "./moment.1.sha256-e1e16e85b3.js";
import "./internal_customer_edit_inner.1.sha256-8e471ce186.js";
try {
    let t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "956d7bc3-1ab4-4388-9585-b0e6b98ac36b", t._sentryDebugIdIdentifier = "sentry-dbid-956d7bc3-1ab4-4388-9585-b0e6b98ac36b")
} catch {}
const L = t => window.getComputedStyle(t).display === "none",
    z = t => {
        t && (t.style.display = "")
    },
    N = t => {
        t && (t.style.display = "none")
    },
    u = t => {
        const e = t.getBoundingClientRect();
        return {
            top: e.top + document.body.scrollTop,
            left: e.left + document.body.scrollLeft
        }
    };

function V(t) {
    document.readyState !== "loading" ? t() : document.addEventListener("DOMContentLoaded", () => {
        t()
    }, {
        once: !0
    })
}
const D = (t, e, o = 400) => {
        if (e === "in" && t.dataset.originalOpacityMin === null && (t.dataset.originalOpacityMin = t.getComputedStyle().opacity), e === "out" && t.dataset.originalOpacityMax === null && (t.dataset.originalOpacityMax = t.getComputedStyle().opacity), t.style.transition = `opacity ${o}ms, visibility ${o}ms`, e === "in") t.style.opacity = t.dataset.originalOpacityMax ? t.dataset.originalOpacityMax : 1, t.style.visibility = "visible";
        else if (e === "out") {
            const n = t.dataset.originalOpacityMin ? t.dataset.originalOpacityMin : 0;
            t.style.opacity = n, n === 0 && (t.style.visibility = "hidden")
        }
    },
    j = (t, e) => {
        const o = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector;
        let n = t;
        for (; n;) {
            if (o.call(n, e)) return n;
            n = n.parentElement
        }
        return null
    },
    J = t => {
        const e = window.getComputedStyle(t),
            o = t.offsetHeight,
            n = parseFloat(e.borderTopWidth),
            r = parseFloat(e.borderBottomWidth),
            s = parseFloat(e.paddingTop),
            i = parseFloat(e.paddingBottom);
        return o - r - n - s - i
    },
    m = (t, e) => {
        const o = ["script", "noscript", "link"],
            n = [];
        return Array.from(t.children).forEach(r => {
            (!e || r !== e) && !o.includes(r.nodeName.toLowerCase()) && n.push(r)
        }), n
    },
    X = t => m(t.parentNode, t),
    g = (t, e) => {
        if (t === e) return !0;
        if (t == null || e == null || t.length !== e.length) return !1;
        for (let o = 0; o < t.length; o++)
            if (t[o] !== e[o]) return !1;
        return !0
    },
    y = (t, e = 500) => {
        t.style.transitionProperty = "height, margin, padding", t.style.transitionDuration = `${e}ms`, t.style.boxSizing = "border-box", t.style.height = `${t.offsetHeight}px`, t.offsetHeight, t.style.overflow = "hidden", t.style.height = 0, t.style.paddingTop = 0, t.style.paddingBottom = 0, t.style.marginTop = 0, t.style.marginBottom = 0, window.setTimeout(() => {
            t.style.display = "none", t.style.removeProperty("height"), t.style.removeProperty("padding-top"), t.style.removeProperty("padding-bottom"), t.style.removeProperty("margin-top"), t.style.removeProperty("margin-bottom"), t.style.removeProperty("overflow"), t.style.removeProperty("transition-duration"), t.style.removeProperty("transition-property")
        }, e)
    },
    f = (t, e = 500) => {
        t.style.removeProperty("display");
        let {
            display: o
        } = window.getComputedStyle(t);
        o === "none" && (o = "block"), t.style.display = o;
        const n = t.offsetHeight;
        t.style.overflow = "hidden", t.style.height = "0", t.style.paddingTop = "0", t.style.paddingBottom = "0", t.style.marginTop = "0", t.style.marginBottom = "0", t.offsetHeight, t.style.boxSizing = "border-box", t.style.transitionProperty = "height, margin, padding", t.style.transitionDuration = `${e}ms`, t.style.height = `${n}px`, t.style.removeProperty("padding-top"), t.style.removeProperty("padding-bottom"), t.style.removeProperty("margin-top"), t.style.removeProperty("margin-bottom"), window.setTimeout(() => {
            t.style.removeProperty("height"), t.style.removeProperty("overflow"), t.style.removeProperty("transition-duration"), t.style.removeProperty("transition-property")
        }, e)
    },
    q = (t, e = 500) => window.getComputedStyle(t).display === "none" ? f(t, e) : y(t, e),
    U = t => Array.from(document.querySelectorAll(t)),
    h = () => {
        const t = navigator.userAgent.indexOf("Chrome") > -1,
            e = navigator.userAgent.indexOf("Safari") > -1,
            o = navigator.userAgent.indexOf("Android") > -1;
        return e && !t && !o
    },
    w = () => navigator.userAgent.indexOf("Mobile") > -1,
    S = () => {
        if (!h()) return null;
        const t = navigator.userAgent.indexOf("Version");
        if (t < 0) return null;
        const o = navigator.userAgent.substring(t).split(" ")[0].split("/");
        return o.length !== 2 ? null : parseFloat(o[1])
    };

function b(t) {
    const e = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]"),
        n = new RegExp(`[\\?&]${e}=([^#&]*)`).exec(window.location.search);
    return n === null ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
}
const Q = () => window.location.hash.slice(1),
    v = t => {
        const e = {};
        return t.split("&").forEach(n => {
            const r = n.split("="),
                s = r[0],
                i = r[1];
            e[s] = i
        }), e
    },
    P = t => {
        let e = "";
        return Object.keys(t).forEach(o => {
            t[o] && (e.length > 1 && (e += "&"), e += `${o}=${t[o]}`)
        }), e
    },
    K = t => {
        if (!t) return {};
        const e = t.slice(1);
        return v(e)
    },
    Z = t => Object.keys(t).length ? `#${P(t)}` : "",
    G = t => {
        const e = t.split("/").filter(Boolean);
        return e.length === 0 ? null : `/${e[0]}`
    },
    O = (t, e = !0, o = null) => {
        o || (o = `meta[name=${t}]`);
        const n = document.querySelectorAll(o);
        if (n.length === 0) return null;
        const r = n[0].getAttribute("content");
        return r && e ? JSON.parse(r) : r
    },
    Y = t => {
        const e = document.querySelector(`script#${t}`);
        if (e) {
            const o = e.textContent;
            if (o) return JSON.parse(o)
        }
    },
    _ = () => navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/iPhone/i) ? "mobile-web" : "desktop",
    A = () => {
        const t = {};
        return ["utm_promo", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_keyword", "utm_channel", "utm_content", "gclid", "click_id", "irclickid", "ttclid"].forEach(e => {
            t[e] = b(e)
        }), t
    },
    tt = () => ({
        app_type: _(),
        page_url: window.location.href,
        landing_page_url: window.location.pathname,
        campaign_name: O("campaign_name"),
        page_title: document.title,
        referrer_url: document.referrer,
        ...A()
    }),
    et = t => c.get(t),
    a = t => {
        let e;
        try {
            e = window[t];
            const o = "__storage_test__";
            return e.setItem(o, o), e.removeItem(o), !0
        } catch (o) {
            return o instanceof DOMException && (o.code === 22 || o.code === 1014 || o.name === "QuotaExceededError" || o.name === "NS_ERROR_DOM_QUOTA_REACHED") && e && e.length !== 0
        }
    },
    ot = t => {
        if (!a("sessionStorage")) return null;
        const e = sessionStorage.getItem(t);
        if (e) try {
            return JSON.parse(e)
        } catch {
            return null
        }
        return null
    },
    E = (t, e) => {
        a("sessionStorage") && sessionStorage.setItem(t, JSON.stringify(e))
    },
    nt = t => {
        Object.entries(t).forEach(([e, o]) => {
            E(e, o)
        })
    },
    rt = t => {
        a("sessionStorage") && sessionStorage.removeItem(t)
    },
    st = t => {
        if (!a("localStorage")) return null;
        const e = localStorage.getItem(t);
        if (e) try {
            return JSON.parse(e)
        } catch {
            return null
        }
        return null
    },
    T = (t, e) => {
        a("localStorage") && localStorage.setItem(t, JSON.stringify(e))
    },
    it = t => {
        a("localStorage") && localStorage.removeItem(t)
    },
    at = (t, e) => T(t, {
        updatedAt: p().toISOString(),
        value: e
    }),
    lt = t => {
        if (!a("localStorage")) return null;
        const e = localStorage.getItem(t);
        return e ? JSON.parse(e).value : null
    },
    x = () => c.get("csrftoken"),
    ct = () => ({
        "X-Requested-With": "XMLHttpRequest"
    }),
    ut = () => ({
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRFToken": x()
    }),
    l = () => Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
    d = () => l() / 2,
    C = () => Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    dt = t => {
        const e = l(),
            o = t.getBoundingClientRect();
        return o.top < e || o.bottom > 0
    },
    pt = (t, e = 150) => {
        const n = d() + e,
            r = t.getBoundingClientRect();
        return r.top <= n && r.bottom > n
    },
    mt = t => {
        const e = d(),
            o = t.getBoundingClientRect(),
            {
                top: n
            } = o;
        return n <= e
    },
    gt = t => {
        const e = l(),
            o = t.getBoundingClientRect();
        return o.top < 0 && o.bottom > e
    },
    H = t => {
        if (t.length > 1) {
            const e = t.length > 2 ? ", and " : " and ",
                o = t.pop();
            return `${t.join(", ")}${e}${o}`
        }
        return t.join("")
    },
    yt = t => {
        let e = "";
        if (g(t, ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"])) return "Monday through Friday";
        if (t) {
            const o = t.map(n => `${n}s`);
            e = H(o)
        }
        return e
    },
    I = t => t === "" ? !1 : Number(t) >>> 0 === Number(t),
    R = t => t === "true" || t === "false",
    ft = t => I(t) ? parseInt(t) : R(t) ? JSON.parse(t) : t,
    ht = t => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t),
    wt = (t, e = 0) => {
        const o = u(t).top;
        window.scrollBy({
            top: o + e,
            behavior: "smooth"
        })
    },
    M = (t, e = 0) => {
        const o = u(t).top;
        window.scrollTo({
            top: o + e,
            behavior: "smooth"
        })
    },
    W = (t, e = 0) => {
        const o = document.getElementById(t);
        o && M(o, e)
    },
    St = (t, e = 0) => {
        C() < 960 && W(t, e)
    },
    bt = () => window.innerWidth - document.documentElement.clientWidth,
    vt = t => {
        const e = window.getComputedStyle(t, null),
            o = e.getPropertyValue("-webkit-transform") || e.getPropertyValue("-moz-transform") || e.getPropertyValue("-ms-transform") || e.getPropertyValue("-o-transform") || e.getPropertyValue("transform") || null;
        if (o && o !== "none") {
            const n = o.split("(")[1].split(")")[0].split(","),
                r = parseFloat(n[0]),
                s = parseFloat(n[1]);
            return Math.round(Math.atan2(s, r) * (180 / Math.PI))
        }
        return null
    },
    F = t => {
        const e = window.getComputedStyle(t),
            o = t.clientWidth,
            n = parseFloat(e.paddingLeft),
            r = parseFloat(e.paddingRight);
        return o - n - r
    },
    Pt = (t, e) => {
        const n = F(t);
        return Math.ceil(e.length * 8 / n)
    },
    Ot = () => {
        document.activeElement && document.activeElement.blur && typeof document.activeElement.blur == "function" && document.activeElement.blur()
    },
    _t = t => !t || t.split("@").length < 2 || !t.split("@")[1] ? null : t.split("@")[1],
    At = (t, e = "and") => {
        const {
            length: o
        } = t;
        return o === 0 ? "" : o === 1 ? t[0] : o === 2 ? `${t[0]} ${e} ${t[1]}` : `${t.slice(0,o-1).join(", ")}, ${e} ${t[o-1]}`
    },
    Et = t => {
        const e = "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",
            o = "aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnooooooooprrsssssttuuuuuuuuuwxyyzzz------",
            n = new RegExp(e.split("").join("|"), "g");
        return t.toString().toLowerCase().replace(/\s+/g, "-").replace(n, r => o.charAt(e.indexOf(r))).replace(/&/g, "-and-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
    },
    Tt = (t, e) => t === void 0 || e === void 0 ? [] : Array.from(Array(e + 1).keys()).slice(t),
    xt = t => t == null ? !0 : Array.isArray(t) ? t.length === 0 : t === "" ? !0 : typeof t == "number" ? !1 : Object.keys(t).length === 0,
    Ct = t => typeof t > "u" || t === null,
    Ht = (t, e = 250) => {
        let o = window.innerWidth,
            n = null;
        const r = () => {
                const i = window.innerWidth;
                i !== o && (o = i, t())
            },
            s = () => {
                n === null && (n = setTimeout(() => {
                    r(), clearTimeout(n), n = null
                }, e))
            };
        return window.addEventListener("resize", s), () => {
            window.removeEventListener("resize", s)
        }
    },
    It = () => S() >= 16 && !w() ? "text" : "email";
export {
    m as $, A, ht as B, E as C, U as D, l as E, Ct as F, lt as G, mt as H, et as I, _ as J, x as K, it as L, Ot as M, X as N, at as O, tt as P, gt as Q, dt as R, d as S, vt as T, bt as U, Ht as V, q as W, Pt as X, rt as Y, At as Z, wt as _, Tt as a, _t as a0, St as a1, yt as a2, u as a3, H as a4, ct as a5, Et as a6, Q as a7, Y as b, ut as c, W as d, C as e, D as f, G as g, L as h, pt as i, N as j, z as k, b as l, ot as m, nt as n, K as o, Z as p, O as q, V as r, ft as s, M as t, J as u, j as v, T as w, st as x, It as y, xt as z
};
//# sourceMappingURL=utils.1.sha256-3b1d7cc795.js.map
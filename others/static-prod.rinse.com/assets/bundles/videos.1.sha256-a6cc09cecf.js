import "./internal_customer_edit_inner.1.sha256-8e471ce186.js";
try {
    let t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "f8988e10-89e1-4bb6-9211-524da129a216", t._sentryDebugIdIdentifier = "sentry-dbid-f8988e10-89e1-4bb6-9211-524da129a216")
} catch {}
const d = t => {
        const e = t.play();
        e && e.catch(a => {
            console.error(a)
        })
    },
    n = () => {
        Array.from(document.querySelectorAll("[data-video-controls]")).forEach(e => {
            const a = e.getAttribute("data-video-controls"),
                o = document.querySelector(`[data-video="${a}"]`),
                i = e.querySelector("[data-video-control-icon]"),
                s = () => {
                    o.paused ? (o.play(), o.removeAttribute("data-is-paused-by-control"), i.classList.replace("rinse-icon--play-filled", "rinse-icon--pause-filled"), e.setAttribute("aria-label", "Pause video")) : (o.pause(), o.setAttribute("data-is-paused-by-control", "true"), i.classList.replace("rinse-icon--pause-filled", "rinse-icon--play-filled"), e.setAttribute("aria-label", "Play video"))
                };
            e.addEventListener("click", s)
        })
    };
export {
    n as i, d as s
};
//# sourceMappingURL=videos.1.sha256-a6cc09cecf.js.map
import {
    U as s
} from "./uikit.1.sha256-e1593bd88d.js";
import "./internal_customer_edit_inner.1.sha256-8e471ce186.js";
try {
    let e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        n = new e.Error().stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "068f00cb-ea2b-4453-9159-a58062982a91", e._sentryDebugIdIdentifier = "sentry-dbid-068f00cb-ea2b-4453-9159-a58062982a91")
} catch {}
var i = (e => (e.Success = "success", e.SuccessDark = "success-dark", e.Info = "info", e.Warning = "warning", e.Danger = "danger", e.Primary = "primary", e))(i || {}),
    d = (e => (e.TopCenter = "top-center", e.BottomCenter = "bottom-center", e))(d || {});
const u = (e, n, o, r) => {
        const a = o ? ? (n === "danger" ? 3e4 : 5e3),
            c = r || "top-center",
            t = ["success", "success-dark"].includes(n) ? `<span class="notification-icon rinse-icon rinse-icon--filled-check"></span>  ${e}` : e;
        s.notification({
            timeout: a,
            message: t,
            pos: c,
            status: n
        })
    },
    b = () => {
        u('There was an error processing your request.  Please try again or <a class="link--underline" href="mailto:care@rinse.com">contact us</a> for more info.', "danger")
    },
    h = () => {
        s.notification.closeAll()
    };
export {
    i as A, b as a, d as b, h, u as s
};
//# sourceMappingURL=notifications.1.sha256-c7cd21fa99.js.map
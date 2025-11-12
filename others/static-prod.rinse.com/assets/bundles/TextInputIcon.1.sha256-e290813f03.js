import {
    j as r
} from "./index.1.sha256-9e28d71f9d.js";
import {
    c as o
} from "./index.1.sha256-b28292217a.js";
import "./internal_customer_edit_inner.1.sha256-8e471ce186.js";
try {
    let e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d12a1e60-5685-4e4f-8f70-b2d4a170cb8e", e._sentryDebugIdIdentifier = "sentry-dbid-d12a1e60-5685-4e4f-8f70-b2d4a170cb8e")
} catch {}
const b = ({
    disabled: e,
    iconClickableDescription: t,
    iconName: d,
    onIconClick: n,
    useClickableColor: f = !1
}) => r.jsx("div", {
    className: o("form-new__field-icon", f && "form-new__field-icon--link-color", `rinse-icon--${d}`, n && "form-new__field-icon--clickable"),
    "aria-label": t,
    onClick: n,
    role: n ? "button" : "presentation",
    tabIndex: n && !e ? 0 : -1,
    title: t,
    onKeyDown: s => {
        s.key === "Enter" && (s.preventDefault(), n())
    }
});
export {
    b as T
};
//# sourceMappingURL=TextInputIcon.1.sha256-e290813f03.js.map
import {
    R as re,
    r as ne,
    j as n
} from "./index.1.sha256-9e28d71f9d.js";
import {
    c as o
} from "./index.1.sha256-b28292217a.js";
import {
    u as se
} from "./index.1.sha256-50ecb1a8e2.js";
import "./internal_customer_edit_inner.1.sha256-8e471ce186.js";
import {
    u as oe
} from "./useEffectOnce.1.sha256-66ee930327.js";
try {
    let e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "82e06585-73b3-4c69-a0c0-917e45068ece", e._sentryDebugIdIdentifier = "sentry-dbid-82e06585-73b3-4c69-a0c0-917e45068ece")
} catch {}
var ie = (e => (e.Input = "input", e.Textarea = "textarea", e))(ie || {});
const te = ({
        alwaysRenderValidationText: e = !1,
        ariaProps: t,
        autoComplete: y,
        autoFocus: N = !1,
        className: E,
        customHandleChange: l,
        disabled: F = !1,
        dollarSignPrefix: f = !1,
        error: d,
        errorHasIcon: D = !1,
        extraHandleChange: T,
        iconRight: c,
        id: R,
        inputType: _ = "text",
        invalid: B,
        isTouched: $,
        label: k,
        maxLength: A,
        name: m,
        narrow: u,
        onBlur: C,
        onChange: M,
        onFocus: O,
        onKeyDown: V,
        pattern: q,
        placeholder: w,
        responsive: z,
        role: G,
        rows: J,
        showErrorWithoutTouch: K = !1,
        step: L,
        tabIndex: P = 0,
        tagType: p = "input",
        testId: Q,
        validationMessage: h,
        value: a,
        withBorder: S = !1
    }, b) => {
        oe(() => {
            N && b.current ? .focus()
        });
        const [i, x] = ne.useState(!1), U = s => {
            x(!0), O ? .(s)
        }, W = s => {
            x(!1), C()
        }, X = s => {
            l ? l(s) : (M(s.target.value), T ? .(s))
        }, v = !!a || i, r = ($ || K) && B && !!d, Y = r || !!h || e, I = !!c, g = R ? ? m, Z = !!w && i && !a, j = se(), H = p, ee = _ === "number";
        return n.jsxs("div", {
            className: o("form-new__field-wrapper", E, {
                "form-new__field-wrapper--narrow": u
            }),
            children: [n.jsxs("div", {
                className: o("form-new__field-container", {
                    "form-new__field-container--active": f && i,
                    "form-new__field-container--filled": f && !!a
                }),
                children: [n.jsx(H, {
                    id: g,
                    ...t,
                    autoComplete: y,
                    className: o("form-new__field-input", {
                        "form-new__field-input--moved": v,
                        "form-new__field-input--active": i,
                        "form-new__field-input--error": r,
                        "form-new__field-input--with-border": S,
                        "form-new__field-input--with-icon": I,
                        "form-new__field-input--responsive": z,
                        "form-new__field-input--arrowless": ee,
                        "form-new__field-input--narrow": u
                    }),
                    "data-testid": Q,
                    disabled: F,
                    maxLength: A,
                    name: m,
                    onBlur: W,
                    onChange: X,
                    onFocus: U,
                    onKeyDown: V,
                    pattern: q,
                    placeholder: Z ? w : void 0,
                    role: G,
                    rows: J,
                    ref: b,
                    step: L,
                    tabIndex: P,
                    type: _,
                    value: a,
                    "aria-invalid": r,
                    "aria-errormessage": r ? j : void 0
                }), n.jsx("label", {
                    className: o("form-new__field-label", `form-new__field-label--${p}`, {
                        "form-new__field-label--moved": v,
                        "form-new__field-label--active": i,
                        "form-new__field-label--error": r
                    }),
                    htmlFor: g,
                    children: k
                }), I && c]
            }), Y && n.jsxs("div", {
                className: o("form-new__field-validation-text", {
                    "form-new__field-validation-text--error": r
                }),
                children: [r && D && n.jsx("span", {
                    className: o("form-new__field-validation-icon", "rinse-icon--x"),
                    "aria-hidden": "true"
                }), r ? n.jsx("span", {
                    id: j,
                    role: "alert",
                    children: d.message
                }) : h]
            })]
        })
    },
    _e = re.forwardRef(te);
export {
    _e as T, ie as a
};
//# sourceMappingURL=TextInput.1.sha256-ad5e048318.js.map
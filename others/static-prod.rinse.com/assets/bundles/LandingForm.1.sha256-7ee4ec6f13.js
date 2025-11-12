import {
    j as r,
    r as p
} from "./index.1.sha256-9e28d71f9d.js";
import {
    o as $
} from "./yup.1.sha256-67851e207d.js";
import {
    c as k
} from "./index.1.sha256-b28292217a.js";
import {
    u as z
} from "./index.esm.1.sha256-c7e83da665.js";
import {
    a as O
} from "./js.cookie.1.sha256-b274c81169.js";
import {
    c as Z,
    a as V
} from "./array.1.sha256-a225739a4b.js";
import {
    a as M
} from "./index.1.sha256-34dadb4a62.js";
import {
    w,
    A as U,
    c as B,
    B as R,
    C as H
} from "./utils.1.sha256-3b1d7cc795.js";
import {
    f as W,
    g as q
} from "./tracking.1.sha256-2062fe1796.js";
import "./internal_customer_edit_inner.1.sha256-8e471ce186.js";
import {
    s as G,
    A as J
} from "./notifications.1.sha256-c7cd21fa99.js";
import {
    e as K
} from "./validation.1.sha256-ec7e1bd3ee.js";
import {
    E as Q
} from "./EmailInputController.1.sha256-f18b883ad8.js";
import {
    Z as X
} from "./ZipInputController.1.sha256-987dc23549.js";
import {
    S as Y
} from "./Spinner.1.sha256-9b49f93e59.js";
try {
    let e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        a = new e.Error().stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "81e0941d-2513-4673-936d-5224caff06b4", e._sentryDebugIdIdentifier = "sentry-dbid-81e0941d-2513-4673-936d-5224caff06b4")
} catch {}
const he = e => {
        w("phoneNumber", e)
    },
    ee = e => {
        w("email", e), W(e)
    },
    te = async (e, a = null, l = !1) => {
        const o = U();
        a && (o.campaignCode = a);
        const {
            email: i,
            phoneNumber: m
        } = e, n = (await M.post("/customers/api/lead-customer/", {
            email: i,
            phoneNumber: m,
            leadAcquisitionData: o,
            setSmsOptIn: l
        }, {
            headers: B()
        })).data;
        return q(n.uid, n.email, n.phoneNumber), n
    },
    h = {
        emailAddress: K,
        zipCode: Z().matches(/^[0-9]{5}$|^$/, "Please enter a valid ZIP code.")
    },
    S = ({
        extraOnButtonClick: e,
        formAction: a,
        formActionOutOfService: l,
        id: o = "hero-input-form",
        inputType: i = "emailAddress",
        onSubmitSuccess: m,
        shouldRequireEmailValidation: d = !1,
        supportedZIPs: n
    }) => {
        const [y, A] = p.useState(!1), E = t => {
            A(!t)
        }, c = i === "emailAddress", {
            control: f,
            formState: b,
            getValues: x,
            handleSubmit: C,
            setError: I
        } = z({
            mode: "onSubmit",
            resolver: $(V().shape({
                [i]: c && d ? h[i].required("Please enter your email address") : h[i]
            }))
        }), g = async t => {
            let u = a;
            if (c) {
                const s = t.emailAddress;
                if (R(s)) {
                    ee(s);
                    try {
                        await te({
                            email: s
                        })
                    } catch (N) {
                        N.response.data.email ? I("emailAddress", {
                            type: "custom",
                            message: "Looks like you’re already a Rinse customer."
                        }) : G('Oops! Something went wrong on our end. Please try again later or contact <a href="mailto:care@rinse.com" class="link--underline">care@rinse.com</a> for assistance.', J.Danger);
                        return
                    }
                }
            } else {
                const {
                    zipCode: s
                } = t;
                s && (H("zipCode", s), O.set("zip_code", s), y && (u = l))
            }
            if (m) m();
            else if ("emailAddress" in t) {
                const s = new URL(u, window.location.origin);
                s.searchParams.set("email_address", t.emailAddress), window.location.href = s.toString()
            } else window.location.href = u
        }, L = t => {
            "emailAddress" in t && !d && g(x())
        }, j = d || b.errors.emailAddress ? .type === "custom", F = () => c ? r.jsx(Q, {
            control: f,
            defaultValue: "",
            label: "Enter email to get started",
            name: "emailAddress",
            id: `${o}-email-input`,
            responsive: !0,
            showErrorWithoutTouch: j,
            withBorder: !0,
            testId: `${o}-email-input`
        }) : r.jsx(X, {
            control: f,
            defaultValue: "",
            label: "Enter your ZIP code",
            name: "zipCode",
            onChangeServiceable: E,
            id: `${o}-zip-input`,
            responsive: !0,
            showDefaultMessage: !0,
            supportedZIPs: n,
            withBorder: !0,
            withServiceableMessage: !0
        }), {
            isSubmitted: P,
            isSubmitting: T,
            isSubmitSuccessful: _
        } = b, [v, D] = p.useState(T || P && _);
        return p.useEffect(() => {
            window.addEventListener("pageshow", t => {
                t.persisted && D(!1)
            })
        }, []), r.jsx(r.Fragment, {
            children: r.jsxs("form", {
                id: o,
                className: "landing-input-form",
                noValidate: !0,
                onSubmit: C(g, L),
                children: [F(), r.jsx("button", {
                    "aria-label": "Continue",
                    className: k("rinse-button--primary-new", "form-button--inline", "landing-input-form__button"),
                    "data-testid": `${o}-submit-button`,
                    id: `${o}-submit-button`,
                    onClick: e,
                    type: "submit",
                    children: v ? r.jsx(Y, {}) : r.jsx("span", {
                        className: "rinse-icon--arrow-right",
                        "aria-hidden": "true"
                    })
                })]
            })
        })
    },
    we = e => r.jsx(S, { ...e,
        inputType: "zipCode"
    }),
    Se = e => r.jsx(S, { ...e,
        inputType: "emailAddress"
    });
export {
    we as L, Se as a, he as b, te as c, ee as s
};
//# sourceMappingURL=LandingForm.1.sha256-7ee4ec6f13.js.map
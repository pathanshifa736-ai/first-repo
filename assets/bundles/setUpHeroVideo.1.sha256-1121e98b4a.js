import {
    j as N,
    b as T,
    k as v,
    w as P,
    N as H,
    x as _
} from "./utils.1.sha256-3b1d7cc795.js";
import "./internal_customer_edit_inner.1.sha256-8e471ce186.js";
import {
    R as w,
    r as F,
    j as n,
    a as ne
} from "./index.1.sha256-9e28d71f9d.js";
import {
    o as ae
} from "./yup.1.sha256-67851e207d.js";
import {
    c as x
} from "./index.1.sha256-b28292217a.js";
import {
    a as oe
} from "./js.cookie.1.sha256-b274c81169.js";
import {
    u as re
} from "./index.esm.1.sha256-c7e83da665.js";
import {
    a as W
} from "./array.1.sha256-a225739a4b.js";
import {
    R as se
} from "./RinseButton.1.sha256-86e976130e.js";
import {
    D as ie
} from "./index.1.sha256-b57d1a5231.js";
import {
    s as ce,
    A as ue
} from "./notifications.1.sha256-c7cd21fa99.js";
import {
    a as q,
    S as $,
    t as le,
    F as de,
    j as pe,
    A as me,
    k as he,
    l as fe
} from "./tracking.1.sha256-2062fe1796.js";
import {
    e as be,
    p as ge
} from "./validation.1.sha256-ec7e1bd3ee.js";
import {
    s as _e,
    b as ye,
    c as Se
} from "./LandingForm.1.sha256-7ee4ec6f13.js";
import {
    u as k
} from "./dataHooks.1.sha256-6696a1c838.js";
import {
    f as B,
    b as M
} from "./stringUtils.1.sha256-ed30843ec8.js";
import {
    E as Ce
} from "./EmailInputController.1.sha256-f18b883ad8.js";
import {
    P as Ee
} from "./PhoneNumberInputController.1.sha256-876dd3a1f8.js";
import {
    u as U
} from "./useEffectOnce.1.sha256-66ee930327.js";
import {
    i as Ie
} from "./videos.1.sha256-a6cc09cecf.js";
try {
    let e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8f184fc2-1931-4a29-ad50-28f5fbcd7ad9", e._sentryDebugIdIdentifier = "sentry-dbid-8f184fc2-1931-4a29-ad50-28f5fbcd7ad9")
} catch {}
const Te = 5e3,
    xe = "splash--rinse",
    Pe = () => {
        document.body.style.overflow = "hidden"
    },
    we = () => {
        document.body.style.overflow = null
    },
    ft = () => {
        const e = document.getElementById(xe);
        return e ? (Pe(), setTimeout(() => {
            N(e), we()
        }, Te), !0) : !1
    },
    Ne = "https://static-prod.rinse.com/assets/bundles/wash-fold-bag-kitchen.1.sha256-16145dce88.webp";
var je = (e => (e.Home = "home", e.Landing = "landing", e))(je || {});
const Le = ({
        email: e,
        phoneNumber: t
    }) => {
        const a = `/customers/signup/?${e?`email_address=${encodeURIComponent(e)}`:`phone_number=${encodeURIComponent(t)}`}`,
            d = document.querySelectorAll('[data-go-to-login="header"]'),
            p = document.querySelectorAll('[data-go-to-login="offcanvas"]'),
            b = document.querySelectorAll("[data-schedule-pickup-cta]");
        d.forEach(s => {
            s.innerText = "Finish Sign Up", s.href = a
        }), p.forEach(s => {
            const h = s.querySelector(".nav-offcanvas__label");
            h && (h.innerText = "Finish Sign Up"), s.href = a
        }), b.forEach(s => {
            s.href = a
        })
    },
    ke = () => {
        const e = T("lead_capture_discount_amount"),
            t = T("lead_capture_discount_percentage"),
            o = T("lead_capture_discount_applicable_per_order"),
            a = T("lead_capture_discount_order_count");
        return {
            discountAmount: e,
            discountApplicablePerOrder: o,
            discountOrderCount: a,
            discountPercentage: t
        }
    },
    G = e => {
        const {
            discountAmount: t,
            discountPercentage: o
        } = e;
        return t ? B(t, 0) : `${M(o)}%`
    },
    bt = () => {
        const e = document.querySelector("[data-email-input-wrapper]");
        N(e);
        const t = document.querySelector("[data-email-input-replacement-button]");
        v(t)
    },
    ve = "_button_c3j65_6",
    Ae = "_buttonSecondary_c3j65_10",
    Re = "_content_c3j65_14",
    De = "_filledCheckIcon_c3j65_23",
    Oe = "_form_c3j65_32",
    Fe = "_heading_c3j65_36",
    We = "_imageTopWrapper_c3j65_42",
    qe = "_mainContent_c3j65_54",
    $e = "_modal_c3j65_61",
    Ue = "_p_c3j65_65",
    Ve = "_phoneNumberDisclaimer_c3j65_72",
    He = "_subheading_c3j65_79",
    r = {
        button: ve,
        buttonSecondary: Ae,
        content: Re,
        filledCheckIcon: De,
        form: Oe,
        heading: Fe,
        imageTopWrapper: We,
        mainContent: qe,
        modal: $e,
        p: Ue,
        phoneNumberDisclaimer: Ve,
        subheading: He
    },
    Be = (e, t) => {
        const {
            discountApplicablePerOrder: o,
            discountOrderCount: a
        } = e;
        if (o && a) {
            const d = B(o, 0),
                p = M(a);
            return {
                headingText: `Get ${d} Off`,
                subheadingText: `your first ${p} orders`
            }
        }
        return {
            headingText: `Get ${t} Off`,
            subheadingText: "your first order"
        }
    },
    Me = ({
        closeModal: e,
        discountInfo: t,
        id: o,
        onLeadEntryCaptured: a,
        page: d,
        showModal: p
    }) => {
        const s = k("is_in_sms_lead_capture_treatment_group") ? "phone_number" : "email",
            h = s === "email",
            m = s === "phone_number";
        w.useEffect(() => {
            p && q($.LeadCapturePopupShown, {
                input_type: s,
                page_type: d
            })
        }, [s, d, p]);
        const y = k("lead_capture_campaign_code"),
            j = k("lead_capture_campaign_image_url"),
            c = G(t),
            {
                headingText: f,
                subheadingText: S
            } = Be(t, c),
            [u, l] = F.useState(!1),
            [g, C] = F.useState(!1),
            E = w.createRef(),
            Q = W().shape({
                email: be.required("Please enter your email address")
            }),
            z = W().shape({
                phone_number: ge.required("Please enter your phone number")
            }),
            J = h ? Q : z,
            {
                control: A,
                formState: Y,
                handleSubmit: K,
                setError: R,
                watch: D
            } = re({
                mode: "onSubmit",
                resolver: ae(J)
            }),
            X = async i => {
                i.email && _e(i.email), i.phone_number && ye(i.phone_number);
                let L = !1;
                try {
                    const I = !!i.phone_number;
                    await Se({
                        email: i.email,
                        phoneNumber: i.phone_number
                    }, y, I), L = !0, i.email && P("newLeadEmail", i.email), i.phone_number && P("newLeadPhoneNumber", i.phone_number)
                } catch (I) {
                    if (I.response.data.email) R("email", {
                        type: "custom",
                        message: "Looks like you’re already a Rinse customer."
                    }), l(!0);
                    else if (I.response.data.phoneNumber) R("phone_number", {
                        type: "custom",
                        message: "Looks like you’re already a Rinse customer."
                    }), l(!0);
                    else {
                        ce('Oops! Something went wrong on our end. Please try again later or contact <a href="mailto:care@rinse.com" class="link--underline">care@rinse.com</a> for assistance.', ue.Danger);
                        return
                    }
                }
                a ? .(), q($.LeadCapturePopupSubmitted, {
                    customer_already_exists: !L,
                    email: i.email,
                    page_type: d,
                    phone_number: i.phone_number
                }), le(de.CustomerLeadSubmitted), pe(me.EmailSignup), he(fe.LeadCapturePopupSubmitted), L && (oe.set("campaign_code", y), C(!0))
            },
            {
                isSubmitting: Z
            } = Y,
            O = D("email"),
            ee = D("phone_number"),
            te = `/customers/signup/?${O?`email_address=${encodeURIComponent(O)}`:`phone_number=${encodeURIComponent(ee)}`}`;
        return n.jsx(ie, {
            ariaLabel: `Submit your ${h?"email address":"phone number"} to claim your discount`,
            classes: {
                content: r.content,
                mediaTopWrapper: r.imageTopWrapper,
                modal: r.modal
            },
            closeModal: e,
            "data-testid": "lead-capture-modal",
            id: o,
            mediaTop: j || Ne,
            showModal: p,
            children: n.jsx("div", {
                className: r.mainContent,
                children: g ? n.jsxs(n.Fragment, {
                    children: [n.jsxs("h2", {
                        className: r.heading,
                        "data-testid": "lead-capture-popup-heading",
                        children: [n.jsx("span", {
                            className: x(r.filledCheckIcon, "rinse-icon", "rinse-icon--filled-check"),
                            "aria-hidden": "true"
                        }), "Thanks!"]
                    }), n.jsxs("p", {
                        className: r.p,
                        children: ["Your ", n.jsxs("strong", {
                            className: "span--bold",
                            children: [c, " credit"]
                        }), " will be automatically added once you finish creating your account using the same", " ", h ? "email address" : "phone number", "."]
                    }), n.jsx("a", {
                        className: x("rinse-button--primary-new", "rinse-button--primary-new--teal", r.button),
                        href: te,
                        role: "button",
                        children: "Finish creating account"
                    }), n.jsx("button", {
                        className: x("rinse-button--secondary-new", r.button, r.buttonSecondary),
                        "data-testid": "lead-capture-popup-finish-later-button",
                        onClick: e,
                        type: "button",
                        children: "I’ll finish later"
                    })]
                }) : n.jsxs(n.Fragment, {
                    children: [n.jsx("h2", {
                        className: r.heading,
                        "data-testid": "lead-capture-popup-heading",
                        children: f
                    }), n.jsx("p", {
                        className: r.subheading,
                        children: S
                    }), n.jsxs("form", {
                        className: r.form,
                        noValidate: !0,
                        onSubmit: K(X),
                        children: [h ? n.jsx(Ce, {
                            control: A,
                            defaultValue: "",
                            extraHandleChange: () => l(!1),
                            label: "Email address",
                            name: "email",
                            responsive: !0,
                            ref: E,
                            showErrorWithoutTouch: !0,
                            testId: "lead-capture-popup-input"
                        }) : n.jsx(Ee, {
                            control: A,
                            defaultValue: "",
                            extraHandleChange: () => l(!1),
                            label: "Mobile phone number",
                            name: "phone_number",
                            responsive: !0,
                            ref: E,
                            showErrorWithoutTouch: !0,
                            testId: "lead-capture-popup-input"
                        }), m && n.jsxs("p", {
                            className: r.phoneNumberDisclaimer,
                            children: ["By submitting your phone number here, you agree to receive marketing auto-sent texts from Rinse. Consent is not a condition of purchase. Text STOP or CANCEL anytime to opt out. Message & data rates may apply.", " ", n.jsx("a", {
                                href: "/terms-of-use/",
                                target: "_blank",
                                "aria-label": "Rinse Terms of use — opens in a new tab",
                                className: "link--primary signup-link",
                                children: "Terms"
                            }), " ", "and", " ", n.jsx("a", {
                                href: "/privacy/",
                                target: "_blank",
                                "aria-label": "Rinse Privacy Policy — opens in a new tab",
                                className: "link--primary signup-link",
                                children: "Privacy Policy"
                            }), "."]
                        }), u ? n.jsx(se, {
                            as: "a",
                            className: r.button,
                            href: "/accounts/login/",
                            children: "Log in"
                        }) : n.jsxs("button", {
                            className: x("rinse-button--primary-new", "rinse-button--primary-new--teal", r.button),
                            "data-testid": "lead-capture-popup-submit-button",
                            disabled: Z,
                            type: "submit",
                            children: ["Claim your ", c, " credit"]
                        })]
                    })]
                })
            })
        })
    },
    Ge = e => {
        v(e);
        const t = e.closest("li");
        t && H(t).forEach(a => {
            N(a)
        })
    },
    V = e => {
        N(e);
        const t = e.closest("li");
        t && H(t).forEach(a => {
            v(a)
        })
    },
    Qe = ({
        discountInfo: e,
        id: t,
        onLeadEntryCaptured: o,
        page: a,
        timeoutDuration: d
    }) => {
        const [p, b] = w.useState(!1), s = () => b(!0), h = () => b(!1);
        U(() => {
            setTimeout(() => {
                b(!0)
            }, d)
        });
        const m = w.useRef(null);
        U(() => {
            const c = document.querySelector("[data-lead-capture-page-hero]"),
                f = Array.from(document.querySelectorAll("[data-lead-capture-popup-trigger]")),
                S = G(e);
            return f.forEach(u => {
                u.addEventListener("click", s), u.innerText = `Get ${S} off`
            }), m.current = new IntersectionObserver(([u]) => {
                if (u.isIntersecting) f.forEach(l => V(l));
                else {
                    const l = _("email"),
                        g = _("phoneNumber");
                    _("leadCapturePopupWasClosed") && !l && !g && f.forEach(E => Ge(E))
                }
            }, {
                threshold: .5
            }), m.current.observe(c), () => {
                f.forEach(u => {
                    u.removeEventListener("click", s)
                }), m.current && (m.current.disconnect(), m.current = null)
            }
        });
        const y = () => {
                if (m.current) {
                    const c = document.querySelector("[data-lead-capture-page-hero]");
                    c && (m.current.unobserve(c), m.current.observe(c))
                }
            },
            j = () => {
                h(), P("leadCapturePopupWasClosed", !0);
                const c = _("email"),
                    f = _("phoneNumber");
                Array.from(document.querySelectorAll("[data-lead-capture-popup-trigger]")).forEach(C => {
                    c || f ? V(C) : y()
                });
                const u = _("newLeadEmail"),
                    l = _("newLeadPhoneNumber");
                let g;
                u && u === c ? g = {
                    email: u
                } : l && l === f && (g = {
                    phoneNumber: l
                }), g && (Le(g), P("willFinishSignupLater", !0))
            };
        return n.jsx(Me, {
            closeModal: j,
            discountInfo: e,
            id: t,
            onLeadEntryCaptured: o,
            page: a,
            showModal: p
        })
    },
    gt = e => {
        const t = document.getElementById("lead-capture-popup-container"),
            o = "lead-capture-popup",
            {
                leadCapturePage: a,
                leadCaptureTimeoutDuration: d,
                onLeadEntryCaptured: p
            } = e,
            b = ke();
        ne.render(n.jsx(Qe, {
            id: o,
            discountInfo: b,
            onLeadEntryCaptured: p,
            page: a,
            timeoutDuration: d
        }), t)
    },
    _t = () => {
        const e = document.querySelector("[data-hero-video]");
        new IntersectionObserver(([o]) => {
            e.paused && o.isIntersecting ? e.getAttribute("data-is-paused-by-control") || e.play().catch(a => console.warn(a)) : !e.paused && !o.isIntersecting && e.pause()
        }).observe(e), Ie()
    };
export {
    je as L, Te as a, gt as b, ft as i, bt as r, _t as s, Le as u
};
//# sourceMappingURL=setUpHeroVideo.1.sha256-1121e98b4a.js.map
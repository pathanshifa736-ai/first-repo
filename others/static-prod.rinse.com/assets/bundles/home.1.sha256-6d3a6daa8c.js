import {
    a as h,
    j as g
} from "./index.1.sha256-9e28d71f9d.js";
import {
    a as S,
    S as b,
    t as y,
    F as P,
    e as w
} from "./tracking.1.sha256-2062fe1796.js";
import {
    i as C,
    s,
    a as p,
    L as _,
    b as F,
    u as m
} from "./setUpHeroVideo.1.sha256-1121e98b4a.js";
import {
    s as D,
    a as L
} from "./listeners.1.sha256-42e8788f45.js";
import {
    i as T
} from "./nav-right-fade-in.1.sha256-31028993c9.js";
import {
    V as E
} from "./index.1.sha256-88f2742115.js";
import {
    s as U,
    a as B
} from "./setUpFadeOnScrollPastHero.1.sha256-ae1f49139a.js";
import {
    r as I,
    q as k,
    b as i,
    x as a
} from "./utils.1.sha256-3b1d7cc795.js";
import {
    i as A
} from "./index.1.sha256-ffe15f04f1.js";
import {
    s as H,
    a as V,
    b as x,
    c as N
} from "./setUpSocialProofCarousel.1.sha256-af5e913fe0.js";
import "./internal_customer_edit_inner.1.sha256-8e471ce186.js";
import "./_commonjsHelpers.1.sha256-de4c51d13d.js";
import "./js.cookie.1.sha256-b274c81169.js";
import "./index.1.sha256-34dadb4a62.js";
import "./exports.1.sha256-e7ea12f564.js";
import "./yup.1.sha256-67851e207d.js";
import "./index.esm.1.sha256-c7e83da665.js";
import "./index.1.sha256-b28292217a.js";
import "./array.1.sha256-a225739a4b.js";
import "./get.1.sha256-9817d4d81c.js";
import "./_Map.1.sha256-b42b23b721.js";
import "./isObject.1.sha256-2b1688dbb5.js";
import "./isSymbol.1.sha256-9843f7be3c.js";
import "./_MapCache.1.sha256-b4d334390b.js";
import "./_baseSlice.1.sha256-745c75e1f2.js";
import "./_baseIteratee.1.sha256-d9354401fa.js";
import "./_baseIsEqual.1.sha256-4056d7ec7a.js";
import "./_getTag.1.sha256-441c678435.js";
import "./RinseButton.1.sha256-86e976130e.js";
import "./Button.1.sha256-3b42f4a01b.js";
import "./index.1.sha256-b57d1a5231.js";
import "./styles.1.sha256-4f6d594a4d.js";
import "./index.1.sha256-50ecb1a8e2.js";
import "./notifications.1.sha256-c7cd21fa99.js";
import "./uikit.1.sha256-e1593bd88d.js";
import "./validation.1.sha256-ec7e1bd3ee.js";
import "./isValidNumber.1.sha256-da3b124756.js";
import "./normalizeArguments.1.sha256-7bc6ca83b5.js";
import "./LandingForm.1.sha256-7ee4ec6f13.js";
import "./EmailInputController.1.sha256-f18b883ad8.js";
import "./TextInput.1.sha256-ad5e048318.js";
import "./useEffectOnce.1.sha256-66ee930327.js";
import "./ZipInputController.1.sha256-987dc23549.js";
import "./Spinner.1.sha256-9b49f93e59.js";
import "./dataHooks.1.sha256-6696a1c838.js";
import "./stringUtils.1.sha256-ed30843ec8.js";
import "./PhoneNumberInputController.1.sha256-876dd3a1f8.js";
import "./TextInputIcon.1.sha256-e290813f03.js";
import "./phoneUtils.1.sha256-35a5b80deb.js";
import "./videos.1.sha256-a6cc09cecf.js";
import "./moment.1.sha256-e1e16e85b3.js";
import "./constants.1.sha256-57eb641b06.js";
import "./constants.1.sha256-15f349aeb8.js";
try {
    let e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        t = new e.Error().stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "590c8250-0510-435a-b856-2aac18752115", e._sentryDebugIdIdentifier = "sentry-dbid-590c8250-0510-435a-b856-2aac18752115")
} catch {}
I(() => {
    const e = C();
    e ? setTimeout(s, p - 2e3) : s();
    const n = !!k("customer_uid"),
        d = i("show_lead_capture_popup"),
        o = a("email"),
        r = a("phoneNumber");
    if (!o && !r && d) {
        const v = {
            leadCapturePage: _.Home,
            leadCaptureTimeoutDuration: e ? 1500 + p : 1500
        };
        F(v)
    } else a("willFinishSignupLater") && !n && (o ? m({
        email: o
    }) : r && m({
        phoneNumber: r
    }));
    D(), T(), U(), B(), L(w);
    const c = i("videoSrcWebm"),
        l = i("videoSrcMp4"),
        u = i("videoSrcVtt"),
        f = i("videoPoster");
    h.render(g.jsx(E, {
        ariaDescribedBy: "first-pickup-video-description",
        ariaLabel: "What to expect from your first pickup",
        classes: {
            playCircle: "video-play-circle--home",
            previewContainer: "video-preview-container--home",
            previewVideo: "video-preview--home",
            inactive: "video-preview--inactive--home"
        },
        poster: f,
        previewDuration: 0,
        videoSources: [{
            src: l,
            type: "video/mp4"
        }, {
            src: c,
            type: "video/webm"
        }],
        videoSrcVtt: u,
        videoTitle: "Homepage First Rinse"
    }), document.getElementById("react-video-container")), H(), V(), x(), A(), N(), i("should_see_per_bag_payg") && S(b.ExposedToPerBagPAYG), y(P.ViewedHomePage)
});
//# sourceMappingURL=home.1.sha256-6d3a6daa8c.js.map
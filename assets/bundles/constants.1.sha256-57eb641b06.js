import "./internal_customer_edit_inner.1.sha256-8e471ce186.js";
try {
    let e = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
        o = new e.Error().stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "6cb1caa0-2930-4cba-9eb5-0b206dd00128", e._sentryDebugIdIdentifier = "sentry-dbid-6cb1caa0-2930-4cba-9eb5-0b206dd00128")
} catch {}
const s = "at-home",
    t = "at-work",
    a = "signup";
var c = (e => (e.Account = "/account", e.Address = "/address", e.CorporateOffice = "/corporate-office", e.CorporatePickupLocation = "/corporate-pickup-location", e.PaymentInfo = "/payment-info", e.Root = "/", e.Schedule = "/schedule", e.Services = "/services", e.SinglePageSchedule = "/sp-schedule", e.OutOfServiceArea = "/not-yet", e.OutOfServiceAreaThanks = "/thanks", e))(c || {});
const n = ["/account", "/address", "/corporate-office", "/corporate-pickup-location", "/payment-info", "/", "/schedule", "/services", "/sp-schedule", "/not-yet", "/thanks"],
    d = {
        "/account": "Your account",
        "/address": "Your address",
        "/corporate-office": "Your workplace",
        "/corporate-pickup-location": "Your pickup location",
        "/payment-info": "Your payment method",
        "/schedule": "Your first pickup",
        "/services": "Your services",
        "/sp-schedule": "Schedule",
        "/not-yet": "Your basic information"
    };
export {
    t as C, a as L, c as S, s as a, n as b, d as r
};
//# sourceMappingURL=constants.1.sha256-57eb641b06.js.map
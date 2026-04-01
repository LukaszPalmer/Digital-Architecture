// src/lib/cookie-consent.ts
// Consent-Typen und localStorage-Helper.

export type ConsentState = {
    necessary: true;       // immer true, nicht änderbar
    analytics: boolean;
    marketing: boolean;
};

export type ConsentStatus = "undecided" | "accepted" | "declined" | "custom";

export const CONSENT_KEY = "pda_cookie_consent";
export const CONSENT_VERSION = "1";

export function saveConsent(state: ConsentState): void {
    if (typeof window === "undefined") return;
    localStorage.setItem(
        CONSENT_KEY,
        JSON.stringify({ ...state, version: CONSENT_VERSION })
    );
}

export function loadConsent(): { state: ConsentState; status: ConsentStatus } | null {
    if (typeof window === "undefined") return null;
    try {
        const raw = localStorage.getItem(CONSENT_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        if (parsed.version !== CONSENT_VERSION) return null;
        const state: ConsentState = {
            necessary: true,
            analytics: Boolean(parsed.analytics),
            marketing: Boolean(parsed.marketing),
        };
        const status: ConsentStatus =
            state.analytics && state.marketing
                ? "accepted"
                : !state.analytics && !state.marketing
                ? "declined"
                : "custom";
        return { state, status };
    } catch {
        return null;
    }
}

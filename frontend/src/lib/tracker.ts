// src/lib/tracker.ts
// Client-seitiger Tracker — sendet Events an /api/track.
// Wird nur aufgerufen wenn analytics-Consent gegeben wurde.

import { loadConsent } from "@/lib/cookie-consent";

function getSessionId(): string {
    const KEY = "pda_session_id";
    let id = sessionStorage.getItem(KEY);
    if (!id) {
        id = "anon_" + Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
        sessionStorage.setItem(KEY, id);
    }
    return id;
}

function getUTM() {
    const params = new URLSearchParams(window.location.search);
    return {
        utmSource:   params.get("utm_source")   ?? "",
        utmMedium:   params.get("utm_medium")   ?? "",
        utmCampaign: params.get("utm_campaign") ?? "",
    };
}

export async function track(event: string, target: string = "", duration: number = 0) {
    const consent = loadConsent();
    if (!consent?.state.analytics) return; // Kein Consent → kein Tracking

    const payload = {
        sessionId:   getSessionId(),
        page:        window.location.pathname,
        referrer:    document.referrer ?? "",
        language:    navigator.language ?? "",
        screenWidth: window.innerWidth,
        event,
        eventTarget: target,
        duration,
        ...getUTM(),
    };

    try {
        await fetch("/api/track", {
            method:  "POST",
            headers: { "Content-Type": "application/json" },
            body:    JSON.stringify(payload),
            keepalive: true, // funktioniert auch beim Seitenverlassen
        });
    } catch {
        // Tracking-Fehler niemals dem Nutzer zeigen
    }
}

export async function deleteSessionData() {
    const sessionId = sessionStorage.getItem("pda_session_id");
    if (!sessionId) return;
    try {
        await fetch("/api/track", {
            method:  "DELETE",
            headers: { "Content-Type": "application/json" },
            body:    JSON.stringify({ sessionId }),
        });
    } catch { /* silent */ }
}

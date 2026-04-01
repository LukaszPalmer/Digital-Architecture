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

// Erkennt ob Besucher zum ersten Mal kommt (über alle Sessions)
function checkNewVisitor(): boolean {
    try {
        const KEY = "pda_returning";
        if (localStorage.getItem(KEY)) return false;
        localStorage.setItem(KEY, "1");
        return true;
    } catch {
        return false;
    }
}

export async function track(event: string, target: string = "", duration: number = 0) {
    const consent = loadConsent();
    if (!consent?.state.analytics) return; // Kein Consent → kein Tracking

    const payload = {
        sessionId:    getSessionId(),
        page:         window.location.pathname,
        referrer:     document.referrer ?? "",
        language:     navigator.language ?? "",
        screenWidth:  window.innerWidth,
        event,
        eventTarget:  target,
        duration,
        isNewVisitor: event === "pageview" ? checkNewVisitor() : false,
        ...getUTM(),
    };

    try {
        await fetch("/api/track", {
            method:    "POST",
            headers:   { "Content-Type": "application/json" },
            body:      JSON.stringify(payload),
            keepalive: true, // funktioniert auch beim Seitenverlassen
        });
    } catch {
        // Tracking-Fehler niemals dem Nutzer zeigen
    }
}

// Scroll-Tiefe Tracking — feuert bei 25%, 50%, 75%, 100%
export function initScrollTracking(): () => void {
    const milestones = [25, 50, 75, 100];
    const reached = new Set<number>();

    function onScroll() {
        const scrolled = window.scrollY + window.innerHeight;
        const total    = document.documentElement.scrollHeight;
        const pct      = Math.round((scrolled / total) * 100);

        for (const m of milestones) {
            if (pct >= m && !reached.has(m)) {
                reached.add(m);
                track("scroll_depth", `${m}%`);
            }
        }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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

"use client";

// src/components/cookie/CookieBanner.tsx
// Client Component — Cookie Consent Banner.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import { useState, useEffect } from "react";
import { saveConsent, loadConsent, type ConsentState } from "@/lib/cookie-consent";
import { track, deleteSessionData } from "@/lib/tracker";

export function CookieBanner() {
    const [visible, setVisible] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [analytics, setAnalytics] = useState(false);
    const [marketing, setMarketing] = useState(false);

    useEffect(() => {
        const existing = loadConsent();
        if (!existing) {
            // Kurze Verzögerung damit Seite erst lädt
            const t = setTimeout(() => setVisible(true), 800);
            return () => clearTimeout(t);
        }
    }, []);

    function acceptAll() {
        apply({ necessary: true, analytics: true, marketing: true });
    }

    function declineAll() {
        apply({ necessary: true, analytics: false, marketing: false });
    }

    function saveCustom() {
        apply({ necessary: true, analytics, marketing });
    }

    function apply(state: ConsentState) {
        saveConsent(state);

        // GA4 Consent Mode v2
        if (typeof window !== "undefined" && typeof (window as Window & { gtag?: Function }).gtag === "function") {
            (window as Window & { gtag?: Function }).gtag!("consent", "update", {
                analytics_storage:  state.analytics ? "granted" : "denied",
                ad_storage:         state.marketing ? "granted" : "denied",
                ad_user_data:       state.marketing ? "granted" : "denied",
                ad_personalization: state.marketing ? "granted" : "denied",
            });
        }

        // Eigenes Tracking
        if (state.analytics) {
            // Consent-Seite tracken: welche Seite + woher der Nutzer kam → MongoDB
            track("consent_accept", window.location.pathname);
            track("pageview");
        } else {
            // Session-Daten löschen wenn abgelehnt
            deleteSessionData();
        }

        setVisible(false);
    }

    if (!visible) return null;

    return (
        <>
            {/* Backdrop — nur wenn Details offen */}
            {showDetails && (
                <div
                    className="fixed inset-0 bg-[#000000]/40 z-998 backdrop-blur-[2px]"
                    onClick={() => setShowDetails(false)}
                    aria-hidden="true"
                />
            )}

            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="cookie-banner-heading"
                className={`
                    fixed z-999 transition-all duration-500 ease-in-out
                    ${showDetails
                        ? "inset-4 md:inset-auto md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 md:w-full md:max-w-xl"
                        : "bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:w-full md:max-w-sm"
                    }
                `}
            >
                <div className="bg-[#FFFFFF] border border-[#000000] flex flex-col overflow-hidden shadow-2xl">

                    {/* ── TOP BAR ── */}
                    <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-[#000000]/10">
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-[#001F3F] animate-pulse" aria-hidden="true" />
                            <span
                                id="cookie-banner-heading"
                                className="text-[9.5px] font-mono font-black tracking-[0.4em] uppercase text-[#001F3F]"
                            >
                                Cookie Einstellungen
                            </span>
                        </div>
                        <span className="text-[9px] font-mono text-[#000000]/30 tracking-[0.2em] uppercase">
                            PDA · v1
                        </span>
                    </div>

                    {/* ── BODY ── */}
                    <div className="px-6 py-5">
                        {!showDetails ? (
                            /* ── COMPACT VIEW ── */
                            <>
                                <p className="text-[13px] text-[#000000]/70 leading-relaxed mb-5">
                                    Wir nutzen Cookies für Analyse und Optimierung.
                                    Du entscheidest, was erlaubt ist.
                                </p>
                                <button
                                    onClick={() => setShowDetails(true)}
                                    className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-[#001F3F] hover:text-[#000000] transition-colors underline underline-offset-4 mb-6 block"
                                >
                                    Details & Einstellungen
                                </button>
                                <div className="flex flex-col gap-2.5">
                                    <button
                                        onClick={acceptAll}
                                        className="w-full bg-[#001F3F] text-[#FFFFFF] py-3.5 text-[10.5px] font-black tracking-[0.3em] uppercase hover:bg-[#000000] transition-colors duration-300"
                                    >
                                        Alle akzeptieren
                                    </button>
                                    <button
                                        onClick={declineAll}
                                        className="w-full border border-[#000000]/20 text-[#000000] py-3.5 text-[10.5px] font-black tracking-[0.3em] uppercase hover:border-[#001F3F] hover:text-[#001F3F] transition-colors duration-300"
                                    >
                                        Nur notwendige
                                    </button>
                                </div>
                            </>
                        ) : (
                            /* ── DETAIL VIEW ── */
                            <>
                                <p className="text-[13px] text-[#000000]/65 leading-relaxed mb-6 border-l-2 border-[#001F3F] pl-4">
                                    Wähle individuell, welche Kategorien du erlaubst.
                                    Notwendige Cookies sind für den Betrieb der Seite
                                    erforderlich und können nicht deaktiviert werden.
                                </p>

                                {/* Cookie Categories */}
                                <div className="flex flex-col gap-0 border-t border-[#000000]/10 mb-6">
                                    {[
                                        {
                                            id: "necessary",
                                            label: "Notwendig",
                                            desc: "Login-Sessions, Formular-Sicherheit, Cookie-Einstellungen.",
                                            checked: true,
                                            locked: true,
                                        },
                                        {
                                            id: "analytics",
                                            label: "Analyse",
                                            desc: "Google Analytics 4 — Seitenaufrufe, Verweildauer, Herkunft.",
                                            checked: analytics,
                                            locked: false,
                                            onChange: () => setAnalytics(v => !v),
                                        },
                                        {
                                            id: "marketing",
                                            label: "Marketing",
                                            desc: "Personalisierte Inhalte und Kampagnen-Tracking.",
                                            checked: marketing,
                                            locked: false,
                                            onChange: () => setMarketing(v => !v),
                                        },
                                    ].map((cat) => (
                                        <div
                                            key={cat.id}
                                            className="flex items-start justify-between gap-5 py-4 border-b border-[#000000]/10"
                                        >
                                            <div>
                                                <span className="text-[11px] font-black tracking-[0.2em] uppercase text-[#000000] block mb-1">
                                                    {cat.label}
                                                    {cat.locked && (
                                                        <span className="ml-2 text-[9px] font-mono text-[#000000]/35 normal-case tracking-normal">
                                                            (immer aktiv)
                                                        </span>
                                                    )}
                                                </span>
                                                <span className="text-[11.5px] text-[#000000]/50 leading-relaxed">
                                                    {cat.desc}
                                                </span>
                                            </div>

                                            {/* Toggle */}
                                            <button
                                                role="switch"
                                                aria-checked={cat.checked}
                                                aria-label={`${cat.label} ${cat.checked ? "deaktivieren" : "aktivieren"}`}
                                                disabled={cat.locked}
                                                onClick={cat.onChange}
                                                className={`
                                                    relative shrink-0 w-10 h-5 transition-colors duration-300 mt-0.5
                                                    ${cat.checked ? "bg-[#001F3F]" : "bg-[#000000]/15"}
                                                    ${cat.locked ? "cursor-not-allowed opacity-60" : "cursor-pointer"}
                                                `}
                                            >
                                                <span
                                                    className={`
                                                        absolute top-0.5 w-4 h-4 bg-[#FFFFFF] transition-all duration-300
                                                        ${cat.checked ? "left-[calc(100%-1.125rem)]" : "left-0.5"}
                                                    `}
                                                />
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col gap-2.5">
                                    <button
                                        onClick={saveCustom}
                                        className="w-full bg-[#001F3F] text-[#FFFFFF] py-3.5 text-[10.5px] font-black tracking-[0.3em] uppercase hover:bg-[#000000] transition-colors duration-300"
                                    >
                                        Auswahl speichern
                                    </button>
                                    <div className="grid grid-cols-2 gap-2.5">
                                        <button
                                            onClick={acceptAll}
                                            className="border border-[#000000]/20 text-[#000000] py-3 text-[9.5px] font-black tracking-[0.25em] uppercase hover:border-[#001F3F] hover:text-[#001F3F] transition-colors duration-300"
                                        >
                                            Alle akzeptieren
                                        </button>
                                        <button
                                            onClick={declineAll}
                                            className="border border-[#000000]/20 text-[#000000] py-3 text-[9.5px] font-black tracking-[0.25em] uppercase hover:border-[#001F3F] hover:text-[#001F3F] transition-colors duration-300"
                                        >
                                            Alle ablehnen
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>

                    {/* ── FOOTER LINKS ── */}
                    <div className="px-6 pb-5 flex items-center gap-4">
                        <a
                            href="/datenschutz"
                            className="text-[9px] font-mono text-[#000000]/35 hover:text-[#001F3F] transition-colors tracking-[0.2em] uppercase underline underline-offset-2"
                        >
                            Datenschutz
                        </a>
                        <span className="text-[#000000]/15" aria-hidden="true">·</span>
                        <a
                            href="/impressum"
                            className="text-[9px] font-mono text-[#000000]/35 hover:text-[#001F3F] transition-colors tracking-[0.2em] uppercase underline underline-offset-2"
                        >
                            Impressum
                        </a>
                    </div>

                </div>
            </div>
        </>
    );
}

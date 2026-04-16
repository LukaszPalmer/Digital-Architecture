"use client";

// src/components/sections/ContactForm.tsx
// Client-Insel — isoliert für Focus-State-Interaktion.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// A11y: WCAG 2.1 AAA — jedes Label ist via htmlFor/id korrekt verknüpft.

import { useState, useTransition, useRef } from "react";
import { cn } from "@/lib/utils";
import { sendContactEmail } from "@/lib/actions/sendContactEmail";
import { track } from "@/lib/tracker";

type FieldId = "name" | "email" | "phone" | "message";

function ArrowRight() {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
            aria-hidden="true"
        >
            <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
    );
}

function LockIcon() {
    return (
        <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="miter"
            aria-hidden="true"
        >
            <rect x="3" y="11" width="18" height="11" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
    );
}

export function ContactForm() {
    const [focused, setFocused]     = useState<FieldId | null>(null);
    const formStartedRef            = useRef(false);
    const [callbackWanted, setCallbackWanted] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [isPending, startTransition] = useTransition();

    const labelCn = (id: FieldId) =>
        cn(
            "block text-[10px] font-mono font-bold tracking-[0.32em] uppercase mb-3 transition-colors duration-200",
            focused === id ? "text-[#001F3F]" : "text-[#000000]/70"
        );

    // Bordered, professional input boxes — keine Unterstriche.
    const inputCn = (id: FieldId) =>
        cn(
            "w-full bg-[#FFFFFF] px-4 py-3.5 text-[15px] outline-none transition-colors duration-200",
            "font-medium text-[#000000] placeholder:text-[#000000]/40",
            "border-2",
            focused === id
                ? "border-[#001F3F]"
                : "border-[#000000]/15 hover:border-[#000000]/35"
        );

    const onFocus = (id: FieldId) => () => {
        setFocused(id);
        if (!formStartedRef.current) {
            formStartedRef.current = true;
            track("form_start", "contact");
        }
    };
    const onBlur = () => setFocused(null);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        if (callbackWanted) formData.set("callback", "on");
        startTransition(async () => {
            const result = await sendContactEmail(formData);
            if (result.success) {
                track("form_submit", "contact");
                form.reset();
                setCallbackWanted(false);
                formStartedRef.current = false;
                setStatus("success");
                setTimeout(() => setStatus("idle"), 4000);
            } else {
                setStatus("error");
            }
        });
    }

    return (
        <form
            className="flex flex-col gap-8"
            aria-label="Kontaktformular Palmer Digital"
            noValidate
            onSubmit={handleSubmit}
        >
            {/* Eyebrow + Pflichtfelder-Hinweis */}
            <div className="flex items-end justify-between">
                <span className="text-[9.5px] font-mono font-bold tracking-[0.5em] text-[#000000]/65 uppercase">
                    Projektanfrage — PDA
                </span>
                <span className="text-[9px] font-mono text-[#000000]/35 tracking-[0.2em]">
                    <span className="text-[#001F3F]">*</span> Pflichtfelder
                </span>
            </div>

            {/* Row 1: Name + E-Mail */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="contact-name" className={labelCn("name")}>
                        Ihr Name{" "}
                        <span className="text-[#001F3F]" aria-hidden="true">*</span>
                    </label>
                    <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Max Mustermann"
                        className={inputCn("name")}
                        onFocus={onFocus("name")}
                        onBlur={onBlur}
                    />
                </div>
                <div>
                    <label htmlFor="contact-email" className={labelCn("email")}>
                        E-Mail-Adresse{" "}
                        <span className="text-[#001F3F]" aria-hidden="true">*</span>
                    </label>
                    <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="max@unternehmen.de"
                        className={inputCn("email")}
                        onFocus={onFocus("email")}
                        onBlur={onBlur}
                    />
                </div>
            </div>

            {/* Row 2: Telefon + Rückruf — optional */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-end">
                <div>
                    <label htmlFor="contact-phone" className={labelCn("phone")}>
                        Telefonnummer{" "}
                        <span className="text-[8px] font-mono text-[#000000]/35 tracking-[0.2em] normal-case">(optional)</span>
                    </label>
                    <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+49 123 456789"
                        className={inputCn("phone")}
                        onFocus={onFocus("phone")}
                        onBlur={onBlur}
                    />
                </div>
                <div className="pb-3.5">
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                            type="checkbox"
                            name="callback"
                            checked={callbackWanted}
                            onChange={(e) => setCallbackWanted(e.target.checked)}
                            className="sr-only"
                        />
                        <div
                            className={cn(
                                "w-5 h-5 shrink-0 border-2 transition-colors duration-200 flex items-center justify-center",
                                callbackWanted
                                    ? "bg-[#001F3F] border-[#001F3F]"
                                    : "border-[#000000]/30 group-hover:border-[#001F3F]"
                            )}
                            aria-hidden="true"
                        >
                            {callbackWanted && (
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#FFFFFF"
                                    strokeWidth="3"
                                    strokeLinecap="square"
                                    aria-hidden="true"
                                >
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                            )}
                        </div>
                        <span className="text-[11px] font-bold tracking-[0.12em] text-[#000000]/65 uppercase select-none group-hover:text-[#001F3F] transition-colors duration-200">
                            Rückruf gewünscht
                        </span>
                    </label>
                </div>
            </div>

            {/* Row 3: Nachricht — required, freier Text statt Dropdown */}
            <div>
                <label htmlFor="contact-message" className={labelCn("message")}>
                    Worum geht es?{" "}
                    <span className="text-[#001F3F]" aria-hidden="true">*</span>
                </label>
                <textarea
                    id="contact-message"
                    name="message"
                    rows={7}
                    required
                    placeholder="Beschreiben Sie frei, was Sie sich vorstellen — ein Projekt, eine Idee, eine konkrete Anforderung oder einfach nur eine erste Frage. Schreiben Sie so detailliert oder so knapp, wie Sie möchten."
                    className={cn(inputCn("message"), "resize-none leading-relaxed py-4")}
                    onFocus={onFocus("message")}
                    onBlur={onBlur}
                />
            </div>

            {/* Submit */}
            <div className="flex flex-col gap-3 pt-2">
                {status === "success" ? (
                    <div className="w-full bg-[#001F3F] px-6 py-6 flex items-center gap-5">
                        <div className="w-11 h-11 border border-[#FFFFFF]/25 flex items-center justify-center shrink-0">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="square" aria-hidden="true">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <span className="text-[11.5px] font-black tracking-[0.3em] uppercase text-[#FFFFFF]">
                                Anfrage eingegangen
                            </span>
                            <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#FFFFFF]/55">
                                Wir melden uns innerhalb von 24 Stunden
                            </span>
                        </div>
                    </div>
                ) : (
                    <button
                        type="submit"
                        disabled={isPending}
                        className="group w-full bg-[#000000] text-[#FFFFFF] py-5 text-[11.5px] font-black tracking-[0.35em] uppercase hover:bg-[#001F3F] transition-colors duration-300 min-h-15 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isPending ? "Wird gesendet …" : "Anfrage absenden"}
                        {!isPending && <ArrowRight />}
                    </button>
                )}

                {status === "error" && (
                    <p className="text-[10.5px] font-mono text-red-600 tracking-wide text-center">
                        Fehler beim Senden. Bitte versuche es erneut oder schreib direkt an kontakt@palmer-digital.de
                    </p>
                )}

                <p className="text-[10.5px] text-[#000000]/65 font-mono tracking-wide text-center leading-relaxed">
                    Kostenlos &amp; unverbindlich — Antwort innerhalb von 24h
                </p>

                {/* Verschlüsselungs-Badge */}
                <div className="flex items-center justify-center gap-2 pt-2 border-t border-[#000000]/8 text-[#000000]/35">
                    <LockIcon />
                    <span className="text-[9px] font-mono tracking-[0.22em] uppercase">
                        SSL-verschlüsselt · Daten werden nicht weitergegeben
                    </span>
                </div>
            </div>

        </form>
    );
}

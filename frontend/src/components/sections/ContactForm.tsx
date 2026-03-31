"use client";

// src/components/sections/ContactForm.tsx
// Client-Insel — isoliert für Focus-State-Interaktion.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// A11y: WCAG 2.1 AAA — jedes Label ist via htmlFor/id korrekt verknüpft.

import { useState, useTransition } from "react";
import { cn } from "@/lib/utils";
import { sendContactEmail } from "@/lib/actions/sendContactEmail";

type FieldId = "name" | "email" | "service" | "phone" | "message";

const SERVICES = [
    "Software-Entwicklung",
    "E-Commerce System",
    "Cloud-Infrastruktur",
    "UI/UX & Branding",
    "Strategie & Beratung",
    "Mehrere Leistungen",
];

function ChevronDown() {
    return (
        <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
            aria-hidden="true"
        >
            <path d="M6 9l6 6 6-6" />
        </svg>
    );
}

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
    const [focused, setFocused] = useState<FieldId | null>(null);
    const [callbackWanted, setCallbackWanted] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [isPending, startTransition] = useTransition();

    const labelCn = (id: FieldId) =>
        cn(
            "block text-[9.5px] font-mono font-bold tracking-[0.4em] uppercase mb-3 transition-colors duration-200",
            focused === id ? "text-[#001F3F]" : "text-[#000000]/70"
        );

    const inputCn = (id: FieldId) =>
        cn(
            "w-full bg-transparent py-3.5 text-[16px] outline-none transition-all duration-200 font-medium text-[#000000] placeholder:text-[#000000]/65",
            focused === id
                ? "border-b-2 border-[#001F3F]"
                : "border-b border-[#000000]/30"
        );

    const onFocus = (id: FieldId) => () => setFocused(id);
    const onBlur = () => setFocused(null);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        if (callbackWanted) formData.set("callback", "on");
        startTransition(async () => {
            const result = await sendContactEmail(formData);
            setStatus(result.success ? "success" : "error");
        });
    }

    return (
        <form
            className="flex flex-col gap-10"
            aria-label="Kontaktformular Palmer Digital Architecture"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
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

            {/* Row 2: Service — full width, required */}
            <div>
                <label htmlFor="contact-service" className={labelCn("service")}>
                    Gewünschte Leistung{" "}
                    <span className="text-[#001F3F]" aria-hidden="true">*</span>
                </label>
                <div className="relative">
                    <select
                        id="contact-service"
                        name="service"
                        defaultValue=""
                        required
                        className={cn(
                            inputCn("service"),
                            "appearance-none cursor-pointer pr-7"
                        )}
                        onFocus={onFocus("service")}
                        onBlur={onBlur}
                    >
                        <option value="" disabled>
                            Bitte wählen …
                        </option>
                        {SERVICES.map((s) => (
                            <option key={s} value={s}>
                                {s}
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-[#000000]/65">
                        <ChevronDown />
                    </div>
                </div>
            </div>

            {/* Row 3: Telefon + Rückruf — optional */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-end">
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
                                "w-4 h-4 shrink-0 border transition-colors duration-200 flex items-center justify-center",
                                callbackWanted
                                    ? "bg-[#001F3F] border-[#001F3F]"
                                    : "border-[#000000]/30 group-hover:border-[#001F3F]"
                            )}
                            aria-hidden="true"
                        >
                            {callbackWanted && (
                                <svg
                                    width="10"
                                    height="10"
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

            {/* Row 4: Nachricht — required */}
            <div>
                <label htmlFor="contact-message" className={labelCn("message")}>
                    Ihr Projektbriefing{" "}
                    <span className="text-[#001F3F]" aria-hidden="true">*</span>
                </label>
                <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Beschreiben Sie kurz Ihr Vorhaben, Ihre Ziele und einen groben Zeitplan …"
                    className={cn(inputCn("message"), "resize-none leading-relaxed")}
                    onFocus={onFocus("message")}
                    onBlur={onBlur}
                />
            </div>

            {/* Submit */}
            <div className="flex flex-col gap-3 pt-2">
                {status === "success" ? (
                    <div className="w-full bg-[#001F3F] text-[#FFFFFF] py-5 text-[11.5px] font-black tracking-[0.35em] uppercase flex items-center justify-center">
                        Anfrage eingegangen — Wir melden uns innerhalb von 24h
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

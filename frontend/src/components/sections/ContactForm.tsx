"use client";

// src/components/sections/ContactForm.tsx
// Client-Insel — isoliert für Focus-State-Interaktion.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// A11y: WCAG 2.1 AAA — jedes Label ist via htmlFor/id korrekt verknüpft.

import { useState } from "react";
import { cn } from "@/lib/utils";

type FieldId = "name" | "email" | "service" | "budget" | "message";

const SERVICES = [
    "Software-Entwicklung",
    "E-Commerce System",
    "Cloud-Infrastruktur",
    "UI/UX & Branding",
    "Strategie & Beratung",
    "Mehrere Leistungen",
];

const BUDGETS = [
    "Bis 5.000 €",
    "5.000 – 15.000 €",
    "15.000 – 30.000 €",
    "30.000 € und mehr",
    "Noch nicht definiert",
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

export function ContactForm() {
    const [focused, setFocused] = useState<FieldId | null>(null);

    const labelCn = (id: FieldId) =>
        cn(
            "block text-[9.5px] font-mono font-bold tracking-[0.4em] uppercase mb-3 transition-colors duration-200",
            focused === id ? "text-[#001F3F]" : "text-[#000000]/70"
        );

    const inputCn = (id: FieldId) =>
        cn(
            "w-full bg-transparent py-3.5 text-[15px] outline-none transition-all duration-200 font-medium text-[#000000] placeholder:text-[#000000]/65",
            focused === id
                ? "border-b-2 border-[#001F3F]"
                : "border-b border-[#000000]/30"
        );

    const onFocus = (id: FieldId) => () => setFocused(id);
    const onBlur = () => setFocused(null);

    return (
        <form
            className="flex flex-col gap-10"
            aria-label="Kontaktformular Palmer Digital Architecture"
            noValidate
        >
            {/* Eyebrow */}
            <div>
                <span className="text-[9.5px] font-mono font-bold tracking-[0.5em] text-[#000000]/65 uppercase">
                    Projektanfrage — PDA
                </span>
            </div>

            {/* Row 1: Name + E-Mail */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                    <label htmlFor="contact-name" className={labelCn("name")}>
                        Ihr Name
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
                        E-Mail-Adresse
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

            {/* Row 2: Service + Budget */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                    <label htmlFor="contact-service" className={labelCn("service")}>
                        Gewünschte Leistung
                    </label>
                    <div className="relative">
                        <select
                            id="contact-service"
                            name="service"
                            defaultValue=""
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
                <div>
                    <label htmlFor="contact-budget" className={labelCn("budget")}>
                        Projektbudget
                    </label>
                    <div className="relative">
                        <select
                            id="contact-budget"
                            name="budget"
                            defaultValue=""
                            className={cn(
                                inputCn("budget"),
                                "appearance-none cursor-pointer pr-7"
                            )}
                            onFocus={onFocus("budget")}
                            onBlur={onBlur}
                        >
                            <option value="" disabled>
                                Bitte wählen …
                            </option>
                            {BUDGETS.map((b) => (
                                <option key={b} value={b}>
                                    {b}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-[#000000]/65">
                            <ChevronDown />
                        </div>
                    </div>
                </div>
            </div>

            {/* Row 3: Nachricht */}
            <div>
                <label htmlFor="contact-message" className={labelCn("message")}>
                    Ihr Projektbriefing
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
            <div className="flex flex-col gap-4 pt-2">
                <button
                    type="submit"
                    className="group w-full bg-[#000000] text-[#FFFFFF] py-5 text-[11.5px] font-black tracking-[0.35em] uppercase hover:bg-[#001F3F] transition-colors duration-300 min-h-15 flex items-center justify-center gap-3"
                >
                    Anfrage absenden
                    <ArrowRight />
                </button>
                <p className="text-[10.5px] text-[#000000]/65 font-mono tracking-wide text-center leading-relaxed">
                    Kostenlos &amp; unverbindlich — Antwort innerhalb von 24h
                </p>
            </div>

        </form>
    );
}

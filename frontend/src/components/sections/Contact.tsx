// src/components/sections/Contact.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// Architektur: Zwei Zonen — Info-Spalte (Prozess + Trust) · Form-Spalte.

import { Suspense } from "react";
import { ContactForm } from "./ContactForm";

const PROCESS = [
    {
        step: "01",
        title: "Anfrage",
        body: "Formular ausfüllen. Wir antworten innerhalb von 24 Stunden.",
    },
    {
        step: "02",
        title: "Discovery Call",
        body: "Kostenloses 30-minütiges Erstgespräch zu Ihrem Vorhaben.",
    },
    {
        step: "03",
        title: "Angebot",
        body: "Individuelles Angebot inklusive Zeitplan innerhalb von 48h.",
    },
];

export default function Contact() {
    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className="bg-[#FFFFFF] text-[#000000] border-t border-[#000000]"
        >
            <div className="max-w-360 mx-auto grid grid-cols-1 lg:grid-cols-2">

                {/* ── LEFT: Info Column ── */}
                <div className="px-4 md:px-8 lg:px-12 py-20 md:py-32 lg:py-44 lg:border-r border-[#000000] flex flex-col gap-14">

                    {/* Header */}
                    <div>
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Projekt anfragen ]
                        </span>
                        <h2
                            id="contact-heading"
                            className="text-[clamp(2.6rem,5.5vw,4.8rem)] font-black text-[#000000] leading-[0.95] tracking-[-0.025em] uppercase mb-8"
                        >
                            Bereit für
                            <br />
                            <span className="italic font-normal text-[#001F3F]">
                                Ihr Projekt?
                            </span>
                        </h2>
                        <p className="text-[15px] md:text-[17px] text-[#000000]/70 leading-[1.75] max-w-[400px] border-l-2 border-[#001F3F] pl-6">
                            Schildern Sie uns Ihr Vorhaben. Wir evaluieren die
                            technologische Machbarkeit und melden uns innerhalb
                            von 24 Stunden.
                        </p>
                    </div>

                    {/* Process Steps */}
                    <div className="border-t border-[#000000]/15">
                        {PROCESS.map((item) => (
                            <div
                                key={item.step}
                                className="flex items-start gap-7 py-7 border-b border-[#000000]/15"
                            >
                                <span className="text-[11px] font-mono font-bold text-[#001F3F] shrink-0 mt-0.5 tracking-wider">
                                    {item.step}
                                </span>
                                <div>
                                    <p className="text-[12.5px] font-black uppercase tracking-wide text-[#000000] mb-1.5">
                                        {item.title}
                                    </p>
                                    <p className="text-[13.5px] text-[#000000]/70 leading-relaxed">
                                        {item.body}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Direct Contact */}
                    <div>
                        <span className="block text-[9px] font-mono font-bold tracking-[0.45em] text-[#000000]/65 uppercase mb-3">
                            Direkt schreiben
                        </span>
                        <a
                            href="mailto:kontakt@palmer-digital.de"
                            className="text-[16px] md:text-[18px] font-bold text-[#001F3F] hover:text-[#000000] transition-colors duration-200 underline underline-offset-4"
                            aria-label="E-Mail an Palmer Digital Architecture"
                        >
                            kontakt@palmer-digital.de
                        </a>
                    </div>
                </div>

                {/* ── RIGHT: Form Column ── */}
                <div className="px-4 md:px-8 lg:px-12 py-20 md:py-32 lg:py-44">
                    <Suspense fallback={null}>
                        <ContactForm />
                    </Suspense>
                </div>

            </div>
        </section>
    );
}

// src/components/sections/ChatbotCTA.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const AI_SPECS = [
    { label: "Response-Zeit", value: "< 200ms Streaming" },
    { label: "Verfuegbarkeit", value: "24/7 erreichbar" },
    { label: "Datenschutz", value: "DSGVO-konform" },
    { label: "Intent-Erkennung", value: "95 %+ Genauigkeit" },
];

export default function ChatbotCTA() {
    return (
        <section
            aria-labelledby="chatbot-cta-heading"
            className="bg-[#000000] text-[#FFFFFF] py-20 md:py-32 overflow-hidden relative"
        >
            {/* Ghost Watermark */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 flex items-center justify-start overflow-hidden pl-0"
            >
                <span className="text-[clamp(5rem,16vw,16rem)] font-black uppercase tracking-[-0.04em] text-[#FFFFFF] opacity-[0.03] select-none whitespace-nowrap leading-none -translate-x-8">
                    KI-ASSISTENT
                </span>
            </div>

            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                <ScrollReveal>
                    <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-16">

                        {/* LEFT: Copy */}
                        <div className="max-w-2xl">
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-8">
                                [ Jetzt Kundensupport automatisieren ]
                            </span>
                            <h2
                                id="chatbot-cta-heading"
                                className="text-[clamp(2.8rem,7vw,6rem)] font-black tracking-[-0.03em] leading-[0.88] uppercase text-[#FFFFFF] mb-10"
                            >
                                Bereit fuer
                                <br />
                                <span className="italic font-normal text-[#FFFFFF]/40">
                                    intelligenten Kundensupport?
                                </span>
                            </h2>
                            <p className="text-[15px] text-[#FFFFFF]/65 leading-relaxed max-w-lg border-l-2 border-[#FFFFFF]/20 pl-5">
                                Wir analysieren Ihre Support-Prozesse,
                                identifizieren Automatisierungspotenzial und
                                entwickeln einen KI-Assistenten, der Ihre Kunden
                                rund um die Uhr betreut — mit echtem
                                Sprachverstaendnis, Backend-Integration und
                                nahtloser Eskalation. Aus Duesseldorf, fuer
                                Unternehmen in ganz Deutschland.
                            </p>
                        </div>

                        {/* RIGHT: Actions */}
                        <div className="flex flex-col gap-4 shrink-0 min-w-72">

                            {/* Primary CTA */}
                            <Link
                                href="/contact"
                                className="arrow-hover flex items-center justify-between gap-6 bg-[#FFFFFF] text-[#000000] px-8 py-5 text-[12px] font-black tracking-[0.15em] uppercase hover:bg-[#FFFFFF]/90 transition-colors duration-300"
                            >
                                <span>Kostenlose KI-Beratung</span>
                                <span aria-hidden="true" className="arrow-icon">&rarr;</span>
                            </Link>

                            {/* Secondary */}
                            <Link
                                href="/services"
                                className="flex items-center justify-between gap-6 border border-[#FFFFFF]/20 text-[#FFFFFF] px-8 py-5 text-[12px] font-black tracking-[0.15em] uppercase hover:border-[#FFFFFF]/50 transition-colors duration-300"
                            >
                                <span>Alle Services entdecken</span>
                                <span aria-hidden="true">&rarr;</span>
                            </Link>

                            <span className="text-[10px] font-mono text-[#FFFFFF]/35 tracking-[0.25em] uppercase text-center pt-1">
                                Antwort innerhalb von 24h
                            </span>

                        </div>
                    </div>
                </ScrollReveal>

                {/* ── AI SPEC BAR ── */}
                <ScrollReveal delay={160}>
                    <div className="mt-20 md:mt-28 pt-8 border-t border-[#FFFFFF]/10 grid grid-cols-2 md:grid-cols-4 gap-6">
                        {AI_SPECS.map((item) => (
                            <div key={item.label} className="flex flex-col gap-1">
                                <span className="text-[9px] font-mono text-[#FFFFFF]/35 tracking-[0.4em] uppercase">
                                    {item.label}
                                </span>
                                <span className="text-[11px] font-black text-[#FFFFFF]/65 tracking-[0.08em] uppercase">
                                    {item.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}

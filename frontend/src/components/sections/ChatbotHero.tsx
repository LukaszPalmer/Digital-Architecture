// src/components/sections/ChatbotHero.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const METRICS = [
    { value: "< 200ms", label: "Response-Zeit" },
    { value: "24/7", label: "Verfuegbarkeit" },
    { value: "95 %+", label: "Intent-Erkennung" },
    { value: "∞", label: "Parallele Gespraeche" },
];

export default function ChatbotHero() {
    return (
        <section
            aria-labelledby="chatbot-hero-heading"
            className="bg-[#FFFFFF] text-[#000000] pt-32 md:pt-44 pb-0 overflow-hidden relative border-b border-[#000000]"
        >
            {/* Ghost Watermark */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
            >
                <span className="text-[clamp(4rem,14vw,14rem)] font-black uppercase tracking-[-0.04em] text-[#000000] opacity-[0.03] select-none whitespace-nowrap leading-none">
                    KI-CHATBOT
                </span>
            </div>

            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12 relative z-10">

                {/* ── EYEBROW ── */}
                <ScrollReveal delay={0}>
                    <div className="flex items-center gap-4 mb-10">
                        <div className="h-px w-10 bg-[#001F3F]" aria-hidden="true" />
                        <div className="bg-[#001F3F] px-3 py-1.5">
                            <span className="text-[10px] font-mono font-black tracking-[0.4em] text-[#FFFFFF] uppercase">
                                KI-Chatbot Integration // Duesseldorf
                            </span>
                        </div>
                    </div>
                </ScrollReveal>

                {/* ── HEADLINE ── */}
                <ScrollReveal delay={100}>
                    <h1
                        id="chatbot-hero-heading"
                        className="text-[clamp(3rem,8.5vw,8rem)] font-black tracking-[-0.03em] leading-[0.88] uppercase mb-12 text-[#000000]"
                    >
                        Ihr KI-Assistent.
                        <br />
                        <span className="italic font-normal text-[#001F3F]">
                            Immer erreichbar.
                        </span>
                    </h1>
                </ScrollReveal>

                {/* ── TAGLINE + BADGE ── */}
                <ScrollReveal delay={200}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-[#000000]/10 pt-10 mb-0">
                        <p className="text-[17px] md:text-[19px] leading-relaxed text-[#000000]/70 border-l-2 border-[#001F3F] pl-6 max-w-lg">
                            Intelligente Chatbots fuer Ihren Onlineshop, Ihre Webseite
                            oder Ihr Unternehmen — mit echtem Sprachverstaendnis durch
                            moderne LLMs. Wir entwickeln KI-Assistenten, die Kundenanfragen
                            verstehen, Bestellungen verfolgen und Support-Teams in
                            Duesseldorf und ganz Deutschland entlasten.
                        </p>
                        <div className="flex flex-col justify-center md:items-end gap-2">
                            <span className="text-[9.5px] font-mono font-bold tracking-[0.4em] text-[#000000]/45 uppercase">
                                Chatbot Agentur Duesseldorf
                            </span>
                            <div className="bg-[#001F3F] px-5 py-2.5 inline-block">
                                <span className="text-[12px] font-black font-mono tracking-widest uppercase text-[#FFFFFF]">
                                    LLM-POWERED // DSGVO-KONFORM
                                </span>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* ── METRIC STRIP ── */}
                <RevealGrid className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-[#000000] mt-16">
                    {METRICS.map((m) => (
                        <div
                            key={m.label}
                            className="group p-8 md:p-10 border-r border-b border-[#000000] flex flex-col gap-3 hover:bg-[#001F3F] transition-colors duration-500 cursor-crosshair"
                        >
                            <span className="text-[clamp(1.6rem,3.5vw,2.8rem)] font-black text-[#001F3F] group-hover:text-[#FFFFFF] tracking-tighter transition-colors leading-none">
                                {m.value}
                            </span>
                            <span className="text-[10px] font-mono font-bold text-[#000000]/65 group-hover:text-[#FFFFFF]/65 tracking-[0.3em] uppercase transition-colors">
                                {m.label}
                            </span>
                        </div>
                    ))}
                </RevealGrid>

            </div>
        </section>
    );
}

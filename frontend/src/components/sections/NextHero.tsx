// src/components/sections/NextHero.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// PAS-Framework: Problem-Hook im Hero — "Ist Ihre Website zu langsam?"

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const METRICS = [
    { value: "< 0.8s", label: "LCP Target" },
    { value: "0ms", label: "Total Blocking Time" },
    { value: "Grün", label: "Core Web Vitals (Field Data)" },
    { value: "RSC", label: "Server-First Architektur" },
];

export default function NextHero() {
    return (
        <section
            aria-labelledby="next-hero-heading"
            className="bg-[#FFFFFF] text-[#000000] pt-32 md:pt-44 pb-0 overflow-hidden relative border-b border-[#000000]"
        >
            {/* Ghost Watermark */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
            >
                <span className="text-[clamp(6rem,20vw,20rem)] font-black uppercase tracking-[-0.04em] text-[#000000] opacity-[0.03] select-none whitespace-nowrap leading-none">
                    NEXT
                </span>
            </div>

            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12 relative z-10">

                {/* ── EYEBROW ── */}
                <ScrollReveal delay={0}>
                    <div className="flex items-center gap-4 mb-10">
                        <div className="h-px w-10 bg-[#001F3F]" aria-hidden="true" />
                        <div className="bg-[#001F3F] px-3 py-1.5">
                            <span className="text-[10px] font-mono font-black tracking-[0.4em] text-[#FFFFFF] uppercase">
                                SRV_01 // NEXT.JS ELITE CORE
                            </span>
                        </div>
                    </div>
                </ScrollReveal>

                {/* ── HEADLINE — Problem-Hook ── */}
                <ScrollReveal delay={100}>
                    <h1
                        id="next-hero-heading"
                        className="text-[clamp(2.8rem,8vw,7.5rem)] font-black tracking-[-0.03em] leading-[0.88] uppercase mb-8 text-[#000000]"
                    >
                        Ist Ihre Website
                        <br />
                        <span className="italic font-normal text-[#001F3F]">
                            zu langsam?
                        </span>
                    </h1>
                </ScrollReveal>

                {/* ── SUBHEADLINE — Solution Teaser ── */}
                <ScrollReveal delay={150}>
                    <p className="text-[clamp(1.1rem,2.5vw,1.6rem)] font-black tracking-tight leading-tight uppercase text-[#000000]/80 mb-12 max-w-3xl">
                        Professionelle Website erstellen lassen mit Next.js —
                        blitzschnelle Ladezeiten, grüne Core Web Vitals und messbar mehr Umsatz.
                    </p>
                </ScrollReveal>

                {/* ── TAGLINE + BADGE ── */}
                <ScrollReveal delay={200}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-[#000000]/10 pt-10 mb-0">
                        <div>
                            <p className="text-[17px] md:text-[19px] leading-relaxed text-[#000000]/70 border-l-2 border-[#001F3F] pl-6 max-w-lg mb-6">
                                Jede Sekunde Ladezeit kostet Sie Kunden. Studien zeigen:
                                53&nbsp;% aller mobilen Nutzer verlassen eine Seite, die länger
                                als 3&nbsp;Sekunden lädt. Mit <strong>Next.js Webentwicklung</strong> und
                                React Server Components eliminieren wir jedes überflüssige
                                JavaScript-Byte — das Ergebnis ist kein Kompromiss,
                                sondern eine Architektur, deren Geschwindigkeit nicht nur
                                im Labor messbar ist, sondern auch dort, wo es zählt:
                                in den Core Web Vitals Ihrer echten Nutzer, sichtbar
                                im Performance-Report der Google Search Console.
                            </p>
                            <p className="text-[15px] leading-relaxed text-[#000000]/55 pl-6 max-w-lg">
                                Als spezialisierte <strong>Webagentur für Webdesign</strong> und
                                moderne Webanwendungen vereinen wir technische Exzellenz
                                mit messbarem Business-Impact — damit Ihre Investition
                                in eine professionelle Website sich vom ersten Tag an rechnet.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center md:items-end gap-2">
                            <span className="text-[9.5px] font-mono font-bold tracking-[0.4em] text-[#000000]/45 uppercase">
                                Performance Engineering Standard
                            </span>
                            <div className="bg-[#001F3F] px-5 py-2.5 inline-block">
                                <span className="text-[12px] font-black font-mono tracking-widest uppercase text-[#FFFFFF]">
                                    0ms TBT // LCP &lt; 0.8s
                                </span>
                            </div>
                            <span className="text-[9.5px] font-mono font-bold tracking-[0.3em] text-[#000000]/35 uppercase mt-3">
                                Ladezeit optimieren — messbar, garantiert
                            </span>
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

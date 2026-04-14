// src/components/sections/DesignHero.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// PAS-Framework: PROBLEM — Inkonsistentes Design & steigende Kosten.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const METRICS = [
    { value: "0ms", label: "Runtime CSS-Overhead" },
    { value: "1", label: "Source of Truth" },
    { value: "AAA", label: "WCAG Konformität" },
    { value: "<10KB", label: "CSS nach PurgeCSS" },
];

export default function DesignHero() {
    return (
        <section
            aria-labelledby="design-hero-heading"
            className="bg-[#FFFFFF] text-[#000000] pt-32 md:pt-44 pb-0 overflow-hidden relative border-b border-[#000000]"
        >
            {/* Ghost Watermark */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
            >
                <span className="text-[clamp(4rem,14vw,14rem)] font-black uppercase tracking-[-0.04em] text-[#000000] opacity-[0.03] select-none whitespace-nowrap leading-none">
                    DESIGN OPS
                </span>
            </div>

            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12 relative z-10">

                {/* ── EYEBROW ── */}
                <ScrollReveal delay={0}>
                    <div className="flex items-center gap-4 mb-10">
                        <div className="h-px w-10 bg-[#001F3F]" aria-hidden="true" />
                        <div className="bg-[#001F3F] px-3 py-1.5">
                            <span className="text-[10px] font-mono font-black tracking-[0.4em] text-[#FFFFFF] uppercase">
                                SRV_02 // DESIGN OPS SYSTEM
                            </span>
                        </div>
                    </div>
                </ScrollReveal>

                {/* ── HEADLINE (H1 — SEO Primary) ── */}
                <ScrollReveal delay={100}>
                    <h1
                        id="design-hero-heading"
                        className="text-[clamp(2.6rem,8vw,7.5rem)] font-black tracking-[-0.03em] leading-[0.88] uppercase mb-12 text-[#000000]"
                    >
                        Professionelles
                        <br />
                        Webdesign &
                        <br />
                        <span className="italic font-normal text-[#001F3F]">
                            UI/UX Design.
                        </span>
                    </h1>
                </ScrollReveal>

                {/* ── TAGLINE + BADGE ── */}
                <ScrollReveal delay={200}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-[#000000]/10 pt-10 mb-0">
                        <p className="text-[17px] md:text-[19px] leading-relaxed text-[#000000]/70 border-l-2 border-[#001F3F] pl-6 max-w-lg">
                            <strong className="text-[#000000]/90">Inkonsistentes Design und steigende Webseiten Design Kosten?</strong>{" "}
                            Ein Design System ist kein Styleguide — es ist eine Produktionsinfrastruktur.
                            Unsere Tailwind Design Ops Architektur leitet jeden Pixel aus einer einzigen
                            Wahrheitsquelle ab. Einmal definiert, überall perfekt. Für Unternehmen in
                            Düsseldorf und ganz Deutschland, die ihre Webseite designen wollen, ohne
                            bei jeder Änderung von vorne anzufangen.
                        </p>
                        <div className="flex flex-col justify-center md:items-end gap-2">
                            <span className="text-[9.5px] font-mono font-bold tracking-[0.4em] text-[#000000]/45 uppercase">
                                Webdesigner Düsseldorf
                            </span>
                            <div className="bg-[#001F3F] px-5 py-2.5 inline-block">
                                <span className="text-[12px] font-black font-mono tracking-widest uppercase text-[#FFFFFF]">
                                    TOKEN-FIRST // WCAG AAA
                                </span>
                            </div>
                            <span className="text-[9.5px] font-mono font-bold tracking-[0.3em] text-[#000000]/35 uppercase mt-1">
                                Atomic Utility-First // PurgeCSS
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

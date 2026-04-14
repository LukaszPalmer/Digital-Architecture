// src/components/sections/NextCTA.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const PERF_SPECS = [
    { label: "Framework", value: "Next.js App Router" },
    { label: "Rendering", value: "RSC + PPR + SSG" },
    { label: "LCP Target", value: "< 0.8s" },
    { label: "TBT", value: "0ms Garantiert" },
    { label: "Lighthouse", value: "100 / 100 / 100 / 100" },
    { label: "Edge-Runtime", value: "< 10ms Global" },
];

const TRUST_SIGNALS = [
    "Kostenlose Erstberatung",
    "Transparente Festpreise",
    "Lighthouse-Garantie",
    "Antwort in 24h",
];

export default function NextCTA() {
    return (
        <section
            aria-labelledby="next-cta-heading"
            className="bg-[#001F3F] text-[#FFFFFF] py-20 md:py-32 overflow-hidden relative"
        >
            {/* Ghost Watermark */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 flex items-center justify-start overflow-hidden pl-0"
            >
                <span className="text-[clamp(6rem,18vw,18rem)] font-black uppercase tracking-[-0.04em] text-[#FFFFFF] opacity-[0.03] select-none whitespace-nowrap leading-none -translate-x-8">
                    NEXT
                </span>
            </div>

            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12 relative z-10">

                {/* ── MAIN CTA BLOCK ── */}
                <ScrollReveal>
                    <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-16">

                        {/* LEFT: Copy */}
                        <div className="max-w-2xl">
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-8">
                                [ Professionelle Website erstellen lassen ]
                            </span>
                            <h2
                                id="next-cta-heading"
                                className="text-[clamp(2.8rem,7vw,6rem)] font-black tracking-[-0.03em] leading-[0.88] uppercase text-[#FFFFFF] mb-10"
                            >
                                Bereit für
                                <br />
                                <span className="italic font-normal text-[#FFFFFF]/40">
                                    Lighthouse 100?
                                </span>
                            </h2>
                            <p className="text-[17px] text-[#FFFFFF]/65 leading-relaxed max-w-lg border-l-2 border-[#FFFFFF]/20 pl-5 mb-6">
                                Ihre <strong>Website lädt zu langsam</strong>? Oder Sie wollen
                                von Anfang an alles richtig machen? Wir analysieren
                                Ihr bestehendes System, definieren die optimale
                                RSC-Architektur und liefern eine Next.js-Implementierung,
                                die jede Performance-Metrik auf das Maximum treibt.
                            </p>
                            <p className="text-[15px] text-[#FFFFFF]/50 leading-relaxed max-w-lg pl-5">
                                Als spezialisierte <strong>Webagentur für Next.js Webentwicklung</strong> garantieren
                                wir Ihnen nicht nur schnelle Ladezeiten, sondern ein
                                vollständiges Performance-System: von der Architektur
                                über die Implementierung bis zum automatisierten
                                Lighthouse-Monitoring in der CI/CD-Pipeline.
                            </p>
                        </div>

                        {/* RIGHT: Actions */}
                        <div className="flex flex-col gap-4 shrink-0 min-w-72">

                            {/* Primary CTA */}
                            <Link
                                href="/contact"
                                className="arrow-hover flex items-center justify-between gap-6 bg-[#FFFFFF] text-[#000000] px-8 py-5 text-[12px] font-black tracking-[0.15em] uppercase hover:bg-[#FFFFFF]/90 transition-colors duration-300"
                            >
                                <span>Kostenloses Erstgespräch</span>
                                <span aria-hidden="true" className="arrow-icon">→</span>
                            </Link>

                            {/* Secondary */}
                            <Link
                                href="/services"
                                className="flex items-center justify-between gap-6 border border-[#FFFFFF]/20 text-[#FFFFFF] px-8 py-5 text-[12px] font-black tracking-[0.15em] uppercase hover:border-[#FFFFFF]/50 transition-colors duration-300"
                            >
                                <span>Alle Services ansehen</span>
                                <span aria-hidden="true">→</span>
                            </Link>

                            {/* Trust Signals */}
                            <ul className="flex flex-col gap-2 pt-3" role="list">
                                {TRUST_SIGNALS.map((signal) => (
                                    <li key={signal} className="flex items-center gap-3">
                                        <div className="w-3 h-px bg-[#FFFFFF]/30 shrink-0" aria-hidden="true" />
                                        <span className="text-[10px] font-mono font-bold text-[#FFFFFF]/45 tracking-[0.2em] uppercase">
                                            {signal}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                </ScrollReveal>

                {/* ── PERF SPEC BAR ── */}
                <ScrollReveal delay={160}>
                    <div className="mt-20 md:mt-28 pt-8 border-t border-[#FFFFFF]/10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {PERF_SPECS.map((item) => (
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

                {/* ── CLOSING STATEMENT ── */}
                <ScrollReveal delay={200}>
                    <div className="mt-16 md:mt-20 text-center">
                        <p className="text-[14px] text-[#FFFFFF]/40 leading-relaxed max-w-2xl mx-auto">
                            Palmer Digital — Ihre Webagentur für Next.js Webentwicklung.
                            Professionelle Websites erstellen lassen, die nicht nur
                            gut aussehen, sondern messbar performen. Ladezeit optimieren,
                            Google-Ranking verbessern, Conversion steigern.
                        </p>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}

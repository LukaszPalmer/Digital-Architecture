// src/components/sections/NodeCTA.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// PAS-Bridge: Solution → Conversion mit Geo-SEO Duesseldorf/NRW.

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const BACKEND_SPECS = [
    { label: "Runtime", value: "Node.js 20 LTS" },
    { label: "Framework", value: "Express / Fastify" },
    { label: "Edge", value: "Vercel Edge Runtime" },
    { label: "Standort", value: "Duesseldorf // NRW" },
];

export default function NodeCTA() {
    return (
        <section
            aria-labelledby="node-cta-heading"
            className="bg-[#000000] text-[#FFFFFF] py-20 md:py-32 overflow-hidden relative"
        >
            {/* Ghost Watermark */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 flex items-center justify-start overflow-hidden pl-0"
            >
                <span className="text-[clamp(5rem,18vw,18rem)] font-black uppercase tracking-[-0.04em] text-[#FFFFFF] opacity-[0.03] select-none whitespace-nowrap leading-none -translate-x-8">
                    BACKEND
                </span>
            </div>

            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                <ScrollReveal>
                    <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-16">

                        {/* LEFT: Copy */}
                        <div className="max-w-2xl">
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-8">
                                [ Infrastruktur-Check Duesseldorf // NRW ]
                            </span>
                            <h2
                                id="node-cta-heading"
                                className="text-[clamp(2.8rem,7vw,6rem)] font-black tracking-[-0.03em] leading-[0.88] uppercase text-[#FFFFFF] mb-10"
                            >
                                Bereit fuer ein
                                <br />
                                <span className="italic font-normal text-[#FFFFFF]/40">
                                    skalierbares Backend?
                                </span>
                            </h2>
                            <p className="text-[15px] text-[#FFFFFF]/65 leading-relaxed max-w-lg border-l-2 border-[#FFFFFF]/20 pl-5 mb-6">
                                Ihr digitales Fundament soll mit dem Erfolg
                                mitwachsen — ohne Re-Designs, ohne Crashes, ohne
                                exponentielle Server-Kosten. Wir sind Ihre{" "}
                                <strong className="text-[#FFFFFF]/85">Backend-Agentur in Duesseldorf</strong>{" "}
                                fuer Hochlast-Systeme: persoenliche Beratung
                                vor Ort, deutsche Vertraege, DSGVO-konforme
                                Infrastruktur.
                            </p>
                            <p className="text-[14px] text-[#FFFFFF]/55 leading-relaxed max-w-lg pl-5">
                                Im kostenlosen Infrastruktur-Check analysieren
                                wir Ihre aktuelle Architektur, identifizieren
                                Skalierungs-Engpaesse und liefern einen
                                konkreten Migrations-Plan.
                            </p>
                        </div>

                        {/* RIGHT: Actions */}
                        <div className="flex flex-col gap-4 shrink-0 min-w-72">

                            {/* Primary CTA */}
                            <Link
                                href="/contact"
                                className="arrow-hover flex items-center justify-between gap-6 bg-[#FFFFFF] text-[#000000] px-8 py-5 text-[12px] font-black tracking-[0.15em] uppercase hover:bg-[#FFFFFF]/90 transition-colors duration-300"
                            >
                                <span>Infrastruktur-Check buchen</span>
                                <span aria-hidden="true" className="arrow-icon">→</span>
                            </Link>

                            {/* Secondary */}
                            <Link
                                href="/contact"
                                className="flex items-center justify-between gap-6 border border-[#FFFFFF]/30 text-[#FFFFFF] px-8 py-5 text-[12px] font-black tracking-[0.15em] uppercase hover:border-[#FFFFFF]/60 hover:bg-[#FFFFFF]/5 transition-colors duration-300"
                            >
                                <span>Skalierbares Backend planen</span>
                                <span aria-hidden="true">→</span>
                            </Link>

                            {/* Tertiary */}
                            <Link
                                href="/services/cloud-infrastructure"
                                className="flex items-center justify-between gap-6 border border-[#FFFFFF]/15 text-[#FFFFFF]/70 px-8 py-4 text-[11px] font-black tracking-[0.15em] uppercase hover:border-[#FFFFFF]/40 hover:text-[#FFFFFF] transition-colors duration-300"
                            >
                                <span>MongoDB Cloud Backbone</span>
                                <span aria-hidden="true">→</span>
                            </Link>

                            <span className="text-[10px] font-mono text-[#FFFFFF]/35 tracking-[0.25em] uppercase text-center pt-1">
                                Antwort innerhalb von 24h garantiert
                            </span>

                        </div>
                    </div>
                </ScrollReveal>

                {/* ── BACKEND SPEC BAR ── */}
                <ScrollReveal delay={160}>
                    <div className="mt-20 md:mt-28 pt-8 border-t border-[#FFFFFF]/10 grid grid-cols-2 md:grid-cols-4 gap-6">
                        {BACKEND_SPECS.map((item) => (
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

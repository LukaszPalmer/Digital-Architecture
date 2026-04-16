// src/components/sections/RailwayCTA.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function RailwayCTA() {
    return (
        <section
            aria-labelledby="railway-cta-heading"
            className="bg-[#001F3F] text-[#FFFFFF] py-20 md:py-32 overflow-hidden relative"
        >
            {/* Ghost Watermark */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 flex items-end justify-start overflow-hidden pl-4 pb-2"
            >
                <span className="text-[clamp(6rem,16vw,16rem)] font-black uppercase tracking-[-0.04em] text-[#FFFFFF] opacity-[0.04] select-none whitespace-nowrap leading-none">
                    DEPLOY
                </span>
            </div>

            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                <ScrollReveal>
                    <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-16">

                        {/* LEFT: Copy */}
                        <div className="max-w-2xl">
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-8">
                                [ Infrastruktur initiieren — Duesseldorf / NRW ]
                            </span>
                            <h2
                                id="railway-cta-heading"
                                className="text-[clamp(2.8rem,7vw,6rem)] font-black tracking-[-0.03em] leading-[0.88] uppercase text-[#FFFFFF] mb-10"
                            >
                                Bereit fuer
                                <br />
                                <span className="italic font-normal text-[#FFFFFF]/40">
                                    skalierbares Hosting?
                                </span>
                            </h2>
                            <p className="text-[15px] text-[#FFFFFF]/65 leading-relaxed max-w-lg border-l-2 border-[#FFFFFF]/20 pl-5">
                                Wir bauen Ihre Backend-Infrastruktur so, dass sie
                                mit Ihrem Business mitwaechst — containerisiert,
                                privat vernetzt und automatisch skaliert. Kein
                                Server-Stress, keine schlaflosen Naechte bei
                                Traffic-Peaks. Fokus auf Code, nicht auf
                                Konfiguration.
                            </p>
                        </div>

                        {/* RIGHT: Actions */}
                        <div className="flex flex-col gap-4 shrink-0 min-w-72">

                            {/* Primary CTA */}
                            <Link
                                href="/contact"
                                className="arrow-hover flex items-center justify-between gap-6 bg-[#FFFFFF] text-[#001F3F] px-8 py-5 text-[12px] font-black tracking-[0.15em] uppercase hover:bg-[#FFFFFF]/90 transition-colors duration-300"
                            >
                                <span>Infrastruktur-Audit vereinbaren</span>
                                <span aria-hidden="true" className="arrow-icon">→</span>
                            </Link>

                            {/* Secondary CTA */}
                            <Link
                                href="/contact"
                                className="flex items-center justify-between gap-6 border border-[#FFFFFF]/20 text-[#FFFFFF] px-8 py-5 text-[12px] font-black tracking-[0.15em] uppercase hover:border-[#FFFFFF]/50 transition-colors duration-300"
                            >
                                <span>Jetzt skalierbar hosten</span>
                                <span aria-hidden="true">→</span>
                            </Link>

                            {/* Tertiary: Sister Service */}
                            <Link
                                href="/vercel"
                                className="flex items-center justify-between gap-6 border border-[#FFFFFF]/20 text-[#FFFFFF] px-8 py-5 text-[12px] font-black tracking-[0.15em] uppercase hover:border-[#FFFFFF]/50 transition-colors duration-300"
                            >
                                <span>Vercel Edge Frontend</span>
                                <span aria-hidden="true">→</span>
                            </Link>

                            <span className="text-[10px] font-mono text-[#FFFFFF]/35 tracking-[0.25em] uppercase text-center pt-1">
                                Antwort innerhalb von 24h garantiert
                            </span>

                        </div>
                    </div>
                </ScrollReveal>

                {/* ── BOTTOM META BAR ── */}
                <ScrollReveal delay={160}>
                    <div className="mt-20 md:mt-28 pt-8 border-t border-[#FFFFFF]/10 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { label: "Platform", value: "Railway Cloud" },
                            { label: "Deployment Model", value: "Container-Native CI/CD" },
                            { label: "Uptime Guarantee", value: "99.99% SLA" },
                        ].map((item) => (
                            <div key={item.label} className="flex flex-col gap-1">
                                <span className="text-[9px] font-mono text-[#FFFFFF]/35 tracking-[0.4em] uppercase">
                                    {item.label}
                                </span>
                                <span className="text-[12px] font-black text-[#FFFFFF]/65 tracking-[0.1em] uppercase">
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

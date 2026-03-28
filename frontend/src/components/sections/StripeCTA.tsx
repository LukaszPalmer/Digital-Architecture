// src/components/sections/StripeCTA.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

const PAYMENT_SPECS = [
    { label: "Payment API", value: "Stripe v2024" },
    { label: "Compliance", value: "PCI DSS Level 1" },
    { label: "Währungen", value: "135+ Supported" },
    { label: "Reliability", value: "99.99% Uptime" },
];

export default function StripeCTA() {
    return (
        <section
            aria-labelledby="stripe-cta-heading"
            className="bg-[#000000] text-[#FFFFFF] py-20 md:py-32 overflow-hidden relative"
        >
            {/* Ghost Watermark */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 flex items-center justify-start overflow-hidden pl-0"
            >
                <span className="text-[clamp(5rem,16vw,16rem)] font-black uppercase tracking-[-0.04em] text-[#FFFFFF] opacity-[0.03] select-none whitespace-nowrap leading-none -translate-x-8">
                    FINTECH
                </span>
            </div>

            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                <ScrollReveal>
                    <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-16">

                        {/* LEFT: Copy */}
                        <div className="max-w-2xl">
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-8">
                                [ Payment Pipeline initiieren ]
                            </span>
                            <h2
                                id="stripe-cta-heading"
                                className="text-[clamp(2.8rem,7vw,6rem)] font-black tracking-[-0.03em] leading-[0.88] uppercase text-[#FFFFFF] mb-10"
                            >
                                Bereit für
                                <br />
                                <span className="italic font-normal text-[#FFFFFF]/40">
                                    automatisierte Zahlungen?
                                </span>
                            </h2>
                            <p className="text-[15px] text-[#FFFFFF]/65 leading-relaxed max-w-lg border-l-2 border-[#FFFFFF]/20 pl-5">
                                Wir analysieren deine bestehenden Zahlungsströme,
                                definieren die optimale Stripe-Architektur und
                                implementieren eine PCI-konforme Integration —
                                von Payment Intents bis zu automatisierten Payouts.
                            </p>
                        </div>

                        {/* RIGHT: Actions */}
                        <div className="flex flex-col gap-4 shrink-0 min-w-72">

                            {/* Primary CTA */}
                            <Link
                                href="/contact"
                                className="arrow-hover flex items-center justify-between gap-6 bg-[#FFFFFF] text-[#000000] px-8 py-5 text-[12px] font-black tracking-[0.15em] uppercase hover:bg-[#FFFFFF]/90 transition-colors duration-300"
                            >
                                <span>Payment Audit starten</span>
                                <span aria-hidden="true" className="arrow-icon">→</span>
                            </Link>

                            {/* Secondary */}
                            <Link
                                href="/services/nodejs-core"
                                className="flex items-center justify-between gap-6 border border-[#FFFFFF]/20 text-[#FFFFFF] px-8 py-5 text-[12px] font-black tracking-[0.15em] uppercase hover:border-[#FFFFFF]/50 transition-colors duration-300"
                            >
                                <span>Node.js Backend Core</span>
                                <span aria-hidden="true">→</span>
                            </Link>

                            <span className="text-[10px] font-mono text-[#FFFFFF]/35 tracking-[0.25em] uppercase text-center pt-1">
                                Antwort innerhalb von 24h garantiert
                            </span>

                        </div>
                    </div>
                </ScrollReveal>

                {/* ── PAYMENT SPEC BAR ── */}
                <ScrollReveal delay={160}>
                    <div className="mt-20 md:mt-28 pt-8 border-t border-[#FFFFFF]/10 grid grid-cols-2 md:grid-cols-4 gap-6">
                        {PAYMENT_SPECS.map((item) => (
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

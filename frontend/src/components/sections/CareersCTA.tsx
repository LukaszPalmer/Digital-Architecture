// src/components/sections/CareersCTA.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CareersCTA() {
    return (
        <section
            aria-labelledby="careers-cta-heading"
            className="bg-[#000000] text-[#FFFFFF] py-20 md:py-32 lg:py-44 overflow-hidden relative"
        >
            {/* Ghost Background Text */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 flex items-center justify-end overflow-hidden pr-4"
            >
                <span className="text-[clamp(6rem,18vw,18rem)] font-black uppercase tracking-[-0.04em] text-[#FFFFFF] opacity-[0.03] select-none whitespace-nowrap leading-none">
                    APPLY
                </span>
            </div>

            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                <ScrollReveal>
                    <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-16">

                        {/* LEFT: Copy */}
                        <div className="max-w-2xl">
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-8">
                                [ Initiativbewerbung ]
                            </span>
                            <h2
                                id="careers-cta-heading"
                                className="text-[clamp(2.8rem,7vw,6rem)] font-black tracking-[-0.03em] leading-[0.88] uppercase text-[#FFFFFF] mb-10"
                            >
                                Überzeuge uns,
                                <br />
                                <span className="italic font-normal text-[#FFFFFF]/40">
                                    eine Stelle zu schaffen.
                                </span>
                            </h2>
                            <p className="text-[15px] text-[#FFFFFF]/65 leading-relaxed max-w-lg border-l-2 border-[#FFFFFF]/20 pl-5">
                                Herausragende Profile schaffen manchmal Stellen,
                                die es vorher nicht gab. Wenn du überzeugt bist,
                                dass du unser Team besser machst — schreib uns.
                                Wir lesen jede Initiativbewerbung.
                            </p>
                        </div>

                        {/* RIGHT: Actions */}
                        <div className="flex flex-col gap-4 shrink-0 min-w-72">

                            {/* Primary: Initiativbewerbung */}
                            <a
                                href="mailto:kontakt@palmer-digital.de?subject=Initiativbewerbung"
                                className="arrow-hover flex items-center justify-between gap-6 bg-[#FFFFFF] text-[#000000] px-8 py-5 text-[12px] font-black tracking-[0.15em] uppercase hover:bg-[#001F3F] hover:text-[#FFFFFF] transition-colors duration-300 group"
                                aria-label="Initiativbewerbung per E-Mail senden"
                            >
                                <span>Initiativbewerbung senden</span>
                                <span aria-hidden="true" className="arrow-icon">→</span>
                            </a>

                            {/* Secondary: Newsletter */}
                            <a
                                href="#positions"
                                className="flex items-center justify-between gap-6 border border-[#FFFFFF]/20 text-[#FFFFFF] px-8 py-5 text-[12px] font-black tracking-[0.15em] uppercase hover:border-[#FFFFFF]/60 transition-colors duration-300"
                            >
                                <span>Career Newsletter abonnieren</span>
                                <span aria-hidden="true">↑</span>
                            </a>

                            <span className="text-[10px] font-mono text-[#FFFFFF]/35 tracking-[0.25em] uppercase text-center pt-1">
                                Antwort garantiert innerhalb von 48h
                            </span>

                        </div>
                    </div>
                </ScrollReveal>

                {/* ── BOTTOM BORDER BAR ── */}
                <ScrollReveal delay={160}>
                    <div className="mt-20 md:mt-28 pt-8 border-t border-[#FFFFFF]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <p className="text-[11px] font-mono text-[#FFFFFF]/35 tracking-[0.35em] uppercase">
                            Palmer Digital — Gebaut für Marktführer
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#001F3F]" aria-hidden="true" />
                            <span className="text-[11px] font-mono text-[#FFFFFF]/35 tracking-[0.3em] uppercase">
                                Remote-First — Global
                            </span>
                        </div>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}

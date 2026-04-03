// src/components/sections/CareersHero.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const HERO_STATS = [
    { value: "100%", label: "Remote-First" },
    { value: "BESETZT", label: "Alle Positionen" },
    { value: "48H", label: "Response-Garantie" },
    { value: "AAA", label: "Engineering Standard" },
];

export default function CareersHero() {
    return (
        <section
            aria-labelledby="careers-hero-heading"
            className="bg-[#FFFFFF] text-[#000000] pt-32 md:pt-44 pb-0 overflow-hidden relative border-b border-[#000000]"
        >
            {/* Ghost wordmark */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
            >
                <span className="text-[clamp(8rem,22vw,22rem)] font-black uppercase tracking-[-0.04em] text-[#000000] opacity-[0.03] select-none whitespace-nowrap leading-none">
                    CAREERS
                </span>
            </div>

            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12 relative z-10">

                {/* ── EYEBROW + HEADLINE ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-20">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Join Palmer Digital ]
                        </span>
                        <h1
                            id="careers-hero-heading"
                            className="text-[clamp(3.2rem,8vw,7.5rem)] font-black text-[#000000] tracking-[-0.03em] uppercase leading-[0.88] mb-10"
                        >
                            Baue die
                            <br />
                            <span className="italic font-normal text-[#001F3F]">
                                Infrastruktur
                            </span>
                            <br />
                            der Zukunft.
                        </h1>
                        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-end">
                            <p className="text-[15px] md:text-[17px] text-[#000000]/70 leading-relaxed max-w-md border-l-2 border-[#001F3F] pl-6">
                                Kein Corporate-Bullshit. Keine Agentur-Mittelmäßigkeit.
                                Nur Engineers und Designer, die digitale Systeme auf
                                dem Niveau globaler Marktführer konstruieren.
                            </p>
                            <div className="flex items-center gap-3 shrink-0">
                                <span className="w-2 h-2 bg-[#000000]" aria-hidden="true" />
                                <span className="text-[11px] font-mono font-bold tracking-[0.3em] text-[#000000]/60 uppercase">
                                    Aktuell keine offenen Stellen — Newsletter für Updates
                                </span>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* ── STAT STRIP ── */}
                <RevealGrid className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-[#000000]">
                    {HERO_STATS.map((stat) => (
                        <div
                            key={stat.label}
                            className="group p-8 md:p-10 border-r border-b border-[#000000] flex flex-col gap-3 hover:bg-[#001F3F] transition-colors duration-500 cursor-crosshair"
                        >
                            <span className="text-[clamp(1.8rem,4vw,3rem)] font-black text-[#001F3F] group-hover:text-[#FFFFFF] tracking-tighter transition-colors leading-none">
                                {stat.value}
                            </span>
                            <span className="text-[10px] font-mono font-bold text-[#000000]/65 group-hover:text-[#FFFFFF]/65 tracking-[0.3em] uppercase transition-colors">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </RevealGrid>

            </div>
        </section>
    );
}

// src/components/sections/CareersBenefits.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import { BENEFITS } from "@/lib/data/careers";
import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

export default function CareersBenefits() {
    return (
        <section
            aria-labelledby="benefits-heading"
            className="bg-[#001F3F] text-[#FFFFFF] py-20 md:py-32 lg:py-44"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/50 uppercase block mb-8">
                                [ Was wir bieten ]
                            </span>
                            <h2
                                id="benefits-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#FFFFFF] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Benefits ohne
                                <br />
                                <span className="italic font-normal text-[#FFFFFF]/55">
                                    Kompromisse.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#FFFFFF]/65 leading-relaxed max-w-sm border-l-2 border-[#FFFFFF]/25 pl-6">
                            Kein Obstkorb. Kein Kicker. Nur Dinge, die deine
                            Arbeit und dein Leben tatsächlich besser machen.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── BENEFITS GRID ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#FFFFFF]/20">
                    {BENEFITS.map((benefit) => (
                        <div
                            key={benefit.id}
                            className="group relative p-10 md:p-12 border-r border-b border-[#FFFFFF]/20 flex flex-col min-h-72 hover:bg-[#FFFFFF] transition-colors duration-500 cursor-crosshair"
                        >
                            {/* Category + ID */}
                            <div className="flex justify-between items-start mb-8">
                                <span className="text-[10px] font-mono font-bold text-[#FFFFFF]/50 group-hover:text-[#001F3F]/55 tracking-[0.3em] uppercase transition-colors">
                                    {benefit.category}
                                </span>
                                <span className="text-[13px] font-black font-mono text-[#FFFFFF]/25 group-hover:text-[#001F3F]/30 transition-colors">
                                    [{benefit.id}]
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-[clamp(1.2rem,2.2vw,1.6rem)] font-black tracking-tighter uppercase leading-tight text-[#FFFFFF] group-hover:text-[#000000] transition-colors mb-4">
                                {benefit.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[14px] leading-relaxed text-[#FFFFFF]/70 group-hover:text-[#000000]/70 transition-colors border-l-2 border-[#FFFFFF]/30 group-hover:border-[#001F3F]/30 pl-5 mt-auto">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </RevealGrid>

            </div>
        </section>
    );
}

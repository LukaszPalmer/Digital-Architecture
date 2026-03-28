// src/components/sections/CareersValues.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import { COMPANY_VALUES } from "@/lib/data/careers";
import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

export default function CareersValues() {
    return (
        <section
            aria-labelledby="values-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Engineering Culture ]
                            </span>
                            <h2
                                id="values-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Was uns
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    antreibt.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Unsere Werte sind keine HR-Poster — sie sind
                            Architekturentscheidungen, nach denen wir jeden Tag
                            handeln.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── VALUES GRID ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#000000]">
                    {COMPANY_VALUES.map((value) => (
                        <div
                            key={value.id}
                            className="group relative p-10 md:p-14 border-r border-b border-[#000000] flex flex-col min-h-72 hover:bg-[#001F3F] transition-colors duration-500 cursor-crosshair"
                        >
                            {/* ID */}
                            <span className="text-[clamp(3.5rem,7vw,6rem)] font-black text-[#001F3F]/08 group-hover:text-[#FFFFFF]/10 leading-none tracking-tighter select-none mb-6 transition-colors">
                                {value.id}
                            </span>

                            {/* Title */}
                            <h3 className="text-[clamp(1.3rem,2.5vw,1.9rem)] font-black tracking-tighter uppercase leading-tight text-[#000000] group-hover:text-[#FFFFFF] transition-colors mb-5">
                                {value.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[14px] leading-relaxed text-[#000000]/70 group-hover:text-[#FFFFFF]/80 transition-colors border-l-2 border-[#001F3F] group-hover:border-[#FFFFFF]/40 pl-5 mt-auto">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </RevealGrid>

            </div>
        </section>
    );
}

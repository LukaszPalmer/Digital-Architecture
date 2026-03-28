// src/components/sections/CareersHiringProcess.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import { HIRING_PROCESS } from "@/lib/data/careers";
import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

export default function CareersHiringProcess() {
    return (
        <section
            aria-labelledby="process-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-t border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Recruiting Protocol ]
                            </span>
                            <h2
                                id="process-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Der
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    Prozess.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Vier Schritte. Kein Black-Box-Verfahren. Transparenz
                            ist für uns kein Buzzword — sie ist das Fundament
                            unseres Recruiting-Prozesses.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── PROCESS GRID ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#000000]">
                    {HIRING_PROCESS.map((item) => (
                        <div
                            key={item.step}
                            className="group relative p-8 md:p-10 border-r border-b border-[#000000] flex flex-col min-h-100 hover:bg-[#001F3F] transition-colors duration-500 cursor-crosshair"
                        >
                            {/* Ghost Step Number */}
                            <span
                                className="absolute top-6 right-8 text-[clamp(3rem,6vw,5rem)] font-black text-[#001F3F]/08 group-hover:text-[#FFFFFF]/10 leading-none tracking-tighter select-none transition-colors"
                                aria-hidden="true"
                            >
                                {item.step}
                            </span>

                            {/* Duration Badge */}
                            <div className="inline-flex self-start mb-10">
                                <span className="bg-[#001F3F] group-hover:bg-[#FFFFFF] px-3 py-1.5 text-[9px] font-mono font-black tracking-widest text-[#FFFFFF] group-hover:text-[#001F3F] uppercase transition-colors duration-300">
                                    {item.duration}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] font-black tracking-tighter uppercase leading-tight text-[#000000] group-hover:text-[#FFFFFF] transition-colors mb-5">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[14px] leading-relaxed text-[#000000]/70 group-hover:text-[#FFFFFF]/80 transition-colors border-l-2 border-[#001F3F] group-hover:border-[#FFFFFF]/40 pl-4 mt-auto">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </RevealGrid>

            </div>
        </section>
    );
}

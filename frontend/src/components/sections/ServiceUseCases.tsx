// src/components/sections/ServiceUseCases.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import { UseCase } from "@/lib/data/services";
import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

interface ServiceUseCasesProps {
    useCases: UseCase[];
}

export default function ServiceUseCases({ useCases }: ServiceUseCasesProps) {
    return (
        <section
            aria-labelledby="usecases-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Zielgruppe ]
                            </span>
                            <h2
                                id="usecases-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Für
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    wen?
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Dieses System ist nicht für jeden. Es ist für
                            Unternehmen gebaut, die kompromisslose Exzellenz
                            als Standard setzen.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── USE CASE GRID ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-[#000000]">
                    {useCases.map((uc) => (
                        <div
                            key={uc.segment}
                            className="group border-r border-b border-[#000000] p-8 md:p-10 lg:p-12 flex flex-col hover:bg-[#001F3F] transition-colors duration-500 cursor-crosshair"
                        >
                            {/* Segment Badge */}
                            <div className="inline-flex self-start mb-8">
                                <span className="bg-[#001F3F] group-hover:bg-[#FFFFFF] px-3 py-1.5 text-[9px] font-mono font-black tracking-[0.4em] text-[#FFFFFF] group-hover:text-[#001F3F] uppercase transition-colors duration-300">
                                    {uc.segment}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-[clamp(1.2rem,2vw,1.6rem)] font-black uppercase tracking-tighter leading-tight text-[#000000] group-hover:text-[#FFFFFF] mb-5 transition-colors">
                                {uc.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[14px] leading-relaxed text-[#000000]/70 group-hover:text-[#FFFFFF]/80 transition-colors border-l-2 border-[#001F3F] group-hover:border-[#FFFFFF]/40 pl-5 mt-auto">
                                {uc.description}
                            </p>
                        </div>
                    ))}
                </RevealGrid>

            </div>
        </section>
    );
}

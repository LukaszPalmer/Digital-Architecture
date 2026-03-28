// src/components/sections/ServiceProcess.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import { ProcessStep } from "@/lib/data/services";
import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

interface ServiceProcessProps {
    steps: ProcessStep[];
}

export default function ServiceProcess({ steps }: ServiceProcessProps) {
    return (
        <section
            aria-labelledby="process-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                <div className="mb-16 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                    <div>
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Delivery Protocol ]
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
                        Vier präzise Phasen. Kein Schritt wird übersprungen —
                        jede Phase hat ein messbares Deliverable.
                    </p>
                </div>
                </ScrollReveal>

                {/* ── STEPS GRID ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#000000]">
                    {steps.map((item) => (
                        <div
                            key={item.step}
                            className="group border-r border-b border-[#000000] p-8 md:p-10 flex flex-col hover:bg-[#001F3F] transition-colors duration-500 cursor-crosshair"
                        >
                            {/* Step Number */}
                            <span className="text-[clamp(3rem,6vw,5rem)] font-black leading-none tracking-tighter text-[#001F3F]/10 group-hover:text-[#FFFFFF]/15 mb-8 block transition-colors select-none">
                                {item.step}
                            </span>

                            {/* Title */}
                            <h3 className="text-[16px] font-black uppercase tracking-tight text-[#000000] group-hover:text-[#FFFFFF] mb-4 leading-tight transition-colors">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[13.5px] leading-relaxed text-[#000000]/70 group-hover:text-[#FFFFFF]/80 transition-colors mt-auto border-l-2 border-[#001F3F] group-hover:border-[#FFFFFF]/40 pl-4">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </RevealGrid>

            </div>
        </section>
    );
}

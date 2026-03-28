// src/components/sections/ServiceStats.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import { Stat } from "@/lib/data/services";
import RevealGrid from "@/components/ui/RevealGrid";

interface ServiceStatsProps {
    stats: Stat[];
}

export default function ServiceStats({ stats }: ServiceStatsProps) {
    return (
        <section className="bg-[#FFFFFF] text-[#000000] border-b border-[#000000]">
            <div className="max-w-360 mx-auto">
                <RevealGrid className="grid grid-cols-1 md:grid-cols-3 border-l border-[#000000]">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="border-r border-b md:border-b-0 border-[#000000] px-8 md:px-14 py-12 md:py-16 hover:-translate-y-px transition-transform duration-300"
                        >
                            <div className="text-[clamp(2.8rem,6vw,5rem)] font-black tracking-tighter leading-none text-[#001F3F] mb-3">
                                {stat.value}
                            </div>
                            <div className="text-[11px] font-mono font-bold tracking-[0.35em] text-[#000000]/55 uppercase">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </RevealGrid>
            </div>
        </section>
    );
}

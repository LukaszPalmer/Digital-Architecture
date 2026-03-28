// src/components/sections/ServiceDetailHero.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";

interface ServiceDetailHeroProps {
    systemId: string;
    title: string;
    tagline: string;
    metrics: string;
}

export default function ServiceDetailHero({
    systemId,
    title,
    tagline,
    metrics,
}: ServiceDetailHeroProps) {
    return (
        <section className="bg-[#FFFFFF] text-[#000000] pt-20 pb-16 md:pt-32 md:pb-24 border-b border-[#000000]">
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* Eyebrow */}
                <ScrollReveal delay={0}>
                    <div className="flex items-center gap-4 mb-10">
                        <div className="h-px w-10 bg-[#001F3F]" />
                        <div className="bg-[#001F3F] px-3 py-1">
                            <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-[#FFFFFF] uppercase">
                                {systemId}
                            </span>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Headline */}
                <ScrollReveal delay={120}>
                    <h1 className="text-[clamp(3rem,8vw,7rem)] font-black tracking-tighter leading-[0.88] uppercase mb-12 text-[#000000]">
                        {title}
                    </h1>
                </ScrollReveal>

                {/* Bottom Row */}
                <ScrollReveal delay={240}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-[#000000]/10 pt-10">
                        <p className="text-[17px] md:text-[20px] leading-relaxed text-[#000000]/60 border-l-2 border-[#001F3F] pl-6">
                            {tagline}
                        </p>
                        <div className="flex flex-col justify-center md:items-end gap-1.5">
                            <span className="text-[9.5px] font-mono font-bold tracking-[0.4em] text-[#000000]/35 uppercase">
                                Performance Metrics
                            </span>
                            <div className="bg-[#001F3F] px-5 py-2.5 inline-block">
                                <span className="text-[13px] font-black font-mono tracking-widest uppercase text-[#FFFFFF]">
                                    {metrics}
                                </span>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}

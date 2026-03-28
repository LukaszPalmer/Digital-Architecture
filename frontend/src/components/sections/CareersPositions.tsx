// src/components/sections/CareersPositions.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import Link from "next/link";
import { JOB_POSITIONS } from "@/lib/data/careers";
import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

export default function CareersPositions() {
    return (
        <section
            id="positions"
            aria-labelledby="positions-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Offene Positionen // Q2 2026 ]
                            </span>
                            <h2
                                id="positions-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Dein nächster
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    Move.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Drei Positionen. Alle remote-first. Alle mit
                            vollständiger Ownership und direktem Impact auf
                            das Produkt.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── JOB LISTINGS ── */}
                <div className="flex flex-col border-t border-[#000000]">
                    {JOB_POSITIONS.map((job, i) => (
                        <ScrollReveal key={job.id} delay={i * 80}>
                            <article
                                aria-label={`Stellenanzeige: ${job.title}`}
                                className="group border-b border-[#000000] hover:bg-[#001F3F] transition-colors duration-500 cursor-crosshair"
                            >
                                <div className="p-8 md:p-12 lg:p-14">

                                    {/* Top Row: Department + Location + Type */}
                                    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                                        <div className="flex items-center gap-4">
                                            <span className="bg-[#001F3F] group-hover:bg-[#FFFFFF] px-3 py-1.5 text-[9px] font-mono font-black tracking-widest text-[#FFFFFF] group-hover:text-[#001F3F] uppercase transition-colors duration-300">
                                                {job.department}
                                            </span>
                                            <span className="text-[10px] font-mono font-bold text-[#000000]/55 group-hover:text-[#FFFFFF]/55 tracking-[0.3em] uppercase transition-colors">
                                                [{job.ref}]
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-6">
                                            <div className="flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 bg-[#001F3F] group-hover:bg-[#FFFFFF] shrink-0 transition-colors" aria-hidden="true" />
                                                <span className="text-[10px] font-mono font-bold text-[#000000]/65 group-hover:text-[#FFFFFF]/65 tracking-[0.25em] uppercase transition-colors">
                                                    {job.location}
                                                </span>
                                            </div>
                                            <span className="text-[10px] font-mono font-bold text-[#000000]/65 group-hover:text-[#FFFFFF]/65 tracking-[0.25em] uppercase transition-colors">
                                                {job.type}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                                        <div>
                                            <h3 className="text-[clamp(1.6rem,3.5vw,2.8rem)] font-black tracking-tighter uppercase leading-none text-[#000000] group-hover:text-[#FFFFFF] transition-colors mb-2">
                                                {job.title}
                                            </h3>
                                            <p className="text-[12px] font-mono text-[#000000]/55 group-hover:text-[#FFFFFF]/55 tracking-wide uppercase transition-colors">
                                                {job.subtitle}
                                            </p>
                                        </div>
                                        <Link
                                            href="/contact"
                                            className="arrow-hover shrink-0 flex items-center gap-4 bg-[#001F3F] group-hover:bg-[#FFFFFF] text-[#FFFFFF] group-hover:text-[#001F3F] px-8 py-4 text-[11px] font-black tracking-[0.2em] uppercase transition-colors duration-300 min-h-13"
                                        >
                                            Bewerben
                                            <span aria-hidden="true" className="arrow-icon">→</span>
                                        </Link>
                                    </div>

                                    {/* Tagline */}
                                    <p className="text-[14px] leading-relaxed text-[#000000]/70 group-hover:text-[#FFFFFF]/80 transition-colors border-l-2 border-[#001F3F] group-hover:border-[#FFFFFF]/40 pl-5 mb-8 max-w-2xl">
                                        {job.tagline}
                                    </p>

                                    {/* Stack Tags */}
                                    <div className="flex flex-wrap gap-2.5">
                                        {job.stack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-[10px] font-bold border border-[#000000]/20 group-hover:border-[#FFFFFF]/30 px-3 py-1.5 uppercase tracking-widest text-[#000000]/65 group-hover:text-[#FFFFFF]/70 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                </div>
                            </article>
                        </ScrollReveal>
                    ))}
                </div>

                {/* ── FOOTER NOTE ── */}
                <ScrollReveal delay={240}>
                    <div className="mt-10 pt-8 border-t border-[#000000]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <p className="text-[11px] font-mono text-[#000000]/65 tracking-[0.3em] uppercase">
                            Weitere Positionen folgen — Team wächst kontinuierlich
                        </p>
                        <a
                            href="mailto:jobs@palmer.digital"
                            className="text-[11px] font-mono font-bold text-[#001F3F] hover:text-[#000000] transition-colors duration-200 tracking-wide underline underline-offset-4"
                            aria-label="Initiativbewerbung an Palmer Digital Architecture"
                        >
                            Initiativbewerbung →
                        </a>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}

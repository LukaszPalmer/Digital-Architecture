// src/components/sections/Careers.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// Architektur: Header · Job-Card · Meta-Bar.

import Link from "next/link";

const TECH_STACK = ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"];

export default function Careers() {
    return (
        <section
            id="careers"
            aria-labelledby="careers-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-t border-[#000000]"
        >
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <div className="mb-16 md:mb-24">
                    <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                        [ Karriere bei PDA ]
                    </span>
                    <h2
                        id="careers-heading"
                        className="text-[clamp(2.6rem,5.5vw,4.8rem)] font-black text-[#000000] leading-[0.95] tracking-[-0.025em] uppercase mb-8"
                    >
                        Werde Teil von
                        <br />
                        <span className="italic font-normal text-[#001F3F]">
                            Palmer Digital.
                        </span>
                    </h2>
                    <p className="text-[15px] md:text-[17px] text-[#000000]/60 leading-[1.75] max-w-120 border-l-2 border-[#001F3F] pl-6">
                        Wir suchen talentierte Köpfe mit Freude an technischer
                        Präzision. Gemeinsam bauen wir digitale Infrastruktur
                        auf dem Niveau der Marktführer.
                    </p>
                </div>

                {/* ── JOB CARD ── */}
                <div className="max-w-4xl">
                    <article
                        aria-label="Stellenanzeige: Fullstack Web Developer"
                        className="border border-[#000000]/12 hover:border-[#001F3F] transition-colors duration-300"
                    >
                        {/* Card Top */}
                        <div className="flex flex-wrap justify-between items-start gap-4 p-8 md:p-12 border-b border-[#000000]/8">
                            <div className="flex flex-col gap-2">
                                <div className="bg-[#001F3F] inline-block px-3 py-1">
                                    <span className="text-[9.5px] font-mono text-[#FFFFFF] tracking-[0.3em] font-black uppercase">
                                        Offene Position
                                    </span>
                                </div>
                                <span className="text-[9.5px] font-mono text-[#000000]/35 tracking-[0.2em] uppercase">
                                    Ref: PDA-2026-DEV-01
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-[9.5px] font-mono font-bold text-[#000000]/35 tracking-[0.2em] uppercase">
                                <span className="w-1.5 h-1.5 bg-[#001F3F] shrink-0" />
                                Remote / Hybrid
                            </div>
                        </div>

                        {/* Card Body */}
                        <div className="p-8 md:p-12">
                            <h3 className="text-[clamp(1.5rem,3.5vw,2.6rem)] font-black uppercase tracking-tighter leading-none text-[#000000] mb-3">
                                Fullstack Web Developer
                            </h3>
                            <p className="text-[13.5px] text-[#000000]/45 font-mono tracking-wide uppercase mb-10">
                                (m/w/d) — Next.js / TypeScript
                            </p>

                            {/* Tech Tags */}
                            <div className="flex flex-wrap gap-2.5 mb-12">
                                {TECH_STACK.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-[10px] font-bold border border-[#000000]/15 px-3 py-1.5 uppercase tracking-widest text-[#000000]/55"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-8 border-t border-[#000000]/10">
                                <Link
                                    href="/careers/apply"
                                    className="flex-1 bg-[#000000] text-[#FFFFFF] py-5 text-[11.5px] font-black tracking-[0.3em] text-center uppercase hover:bg-[#001F3F] transition-colors duration-300 min-h-14 flex items-center justify-center"
                                >
                                    Jetzt bewerben
                                </Link>
                                <Link
                                    href="/careers/all"
                                    className="flex-1 border border-[#000000]/20 text-[#000000] py-5 text-[11.5px] font-black tracking-[0.3em] text-center uppercase hover:border-[#001F3F] hover:text-[#001F3F] transition-colors duration-300 min-h-14 flex items-center justify-center"
                                >
                                    Alle Stellenanzeigen
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>

                {/* ── META BAR ── */}
                <div className="mt-10 pt-8 border-t border-[#000000]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-[11px] font-mono text-[#000000]/40 tracking-[0.3em] uppercase">
                        Team wächst — weitere Positionen folgen
                    </p>
                    <a
                        href="mailto:kontakt@palmer-digital.de"
                        className="text-[11px] font-mono font-bold text-[#001F3F] hover:text-[#000000] transition-colors duration-200 tracking-wide underline underline-offset-4"
                        aria-label="Initiativbewerbung an Palmer Digital Architecture"
                    >
                        Initiativbewerbung →
                    </a>
                </div>

            </div>
        </section>
    );
}

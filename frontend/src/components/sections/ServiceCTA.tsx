// src/components/sections/ServiceCTA.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ServiceCTA() {
    return (
        <section className="bg-[#001F3F] text-[#FFFFFF] py-20 md:py-32">
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">
                <ScrollReveal>
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12">

                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/50 uppercase block mb-8">
                                [ Projekt initiieren ]
                            </span>
                            <h2 className="text-[clamp(2.6rem,6vw,5rem)] font-black tracking-tighter leading-[0.92] uppercase text-[#FFFFFF]">
                                Bereit für
                                <br />
                                <span className="italic font-normal text-[#FFFFFF]/55">
                                    Präzision?
                                </span>
                            </h2>
                            <p className="mt-8 text-[15px] text-[#FFFFFF]/65 leading-relaxed max-w-sm border-l-2 border-[#FFFFFF]/25 pl-5">
                                Kein unverbindliches Angebot — ein strukturierter Prozess,
                                der Ihr Vorhaben in präzise Architektur übersetzt.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 shrink-0">
                            <Link
                                href="/contact"
                                className="arrow-hover flex items-center justify-center gap-4 bg-[#FFFFFF] text-[#001F3F] px-10 py-4 text-[13px] font-black tracking-[0.15em] uppercase hover:bg-[#FFFFFF]/90 transition-colors"
                            >
                                Projekt starten
                                <span aria-hidden="true" className="arrow-icon">→</span>
                            </Link>
                            <span className="text-[10px] font-mono text-[#FFFFFF]/40 tracking-[0.25em] uppercase text-center">
                                Antwort innerhalb von 24h
                            </span>
                        </div>

                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}

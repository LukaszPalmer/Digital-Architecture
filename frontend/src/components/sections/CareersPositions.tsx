// src/components/sections/CareersPositions.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";
import { CareersNewsletterForm } from "./CareersNewsletterForm";

export default function CareersPositions() {
    return (
        <section
            id="positions"
            aria-labelledby="positions-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000] overflow-hidden relative"
        >
            {/* Ghost background text */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
            >
                <span className="text-[clamp(6rem,18vw,18rem)] font-black uppercase tracking-[-0.04em] text-[#000000] opacity-[0.025] select-none whitespace-nowrap leading-none">
                    BESETZT
                </span>
            </div>

            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12 relative z-10">

                {/* ── STATUS HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="h-px w-10 bg-[#000000]/20" />
                            <div className="flex items-center gap-2.5 border border-[#000000]/15 px-4 py-2">
                                <span className="w-1.5 h-1.5 bg-[#000000]/40" aria-hidden="true" />
                                <span className="text-[9.5px] font-mono font-bold tracking-[0.4em] text-[#000000]/50 uppercase">
                                    Status: Alle Positionen Besetzt
                                </span>
                            </div>
                        </div>

                        <h2
                            id="positions-heading"
                            className="text-[clamp(2.8rem,7vw,6.5rem)] font-black text-[#000000] tracking-[-0.03em] uppercase leading-[0.88] mb-8"
                        >
                            Derzeit keine
                            <br />
                            <span className="italic font-normal text-[#001F3F]">
                                offenen Stellen.
                            </span>
                        </h2>
                    </div>
                </ScrollReveal>

                {/* ── TWO-COLUMN LAYOUT ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-[#000000]">

                    {/* LEFT: Explanation */}
                    <ScrollReveal>
                        <div className="py-14 lg:py-16 lg:pr-16 border-b lg:border-b-0 lg:border-r border-[#000000]">
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Recruiting Status ]
                            </span>
                            <p className="text-[16px] md:text-[18px] leading-[1.7] text-[#000000]/70 mb-10 border-l-2 border-[#001F3F] pl-6">
                                Unser Team ist vollständig besetzt. Wir bauen selektiv
                                und mit höchster Sorgfalt — jede Rolle wird intern
                                tief evaluiert, bevor wir extern suchen.
                            </p>

                            <div className="flex flex-col gap-5">
                                {[
                                    {
                                        label: "Selektiver Aufbau",
                                        text: "Qualität vor Quantität. Wir erweitern das Team nur dann, wenn eine Stelle echten strategischen Mehrwert schafft.",
                                    },
                                    {
                                        label: "Transparente Kommunikation",
                                        text: "Sobald Positionen verfügbar werden, informieren wir Newsletter-Abonnenten als Erstes — vor jeder öffentlichen Ausschreibung.",
                                    },
                                    {
                                        label: "Initiativbewerbung",
                                        text: "Herausragende Profile lesen wir jederzeit. Eine Initiativbewerbung kann eine Stelle schaffen, die es vorher nicht gab.",
                                    },
                                ].map((item) => (
                                    <div key={item.label} className="flex gap-5">
                                        <div className="w-1.5 h-1.5 bg-[#001F3F] mt-1.5 shrink-0" aria-hidden="true" />
                                        <div>
                                            <span className="text-[11px] font-black tracking-[0.2em] uppercase text-[#000000] block mb-1">
                                                {item.label}
                                            </span>
                                            <span className="text-[13px] text-[#000000]/55 leading-relaxed">
                                                {item.text}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* RIGHT: Newsletter */}
                    <ScrollReveal delay={80}>
                        <div className="py-14 lg:py-16 lg:pl-16 flex flex-col justify-between gap-12">

                            {/* Newsletter Block */}
                            <div>
                                <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                    [ Career Newsletter ]
                                </span>
                                <h3 className="text-[clamp(1.5rem,3vw,2.2rem)] font-black tracking-tighter uppercase leading-tight text-[#000000] mb-3">
                                    Sei der Erste,
                                    <br />
                                    <span className="italic font-normal text-[#001F3F]">wenn Stellen frei werden.</span>
                                </h3>
                                <p className="text-[14px] text-[#000000]/55 leading-relaxed mb-8 max-w-sm">
                                    Newsletter-Abonnenten erhalten exklusiven Vorab-Zugang
                                    zu neuen Positionen — bevor wir öffentlich ausschreiben.
                                </p>

                                <CareersNewsletterForm />
                            </div>

                            {/* Initiativbewerbung */}
                            <div className="border-t border-[#000000]/10 pt-8">
                                <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-[#000000]/40 uppercase block mb-4">
                                    Oder direkt melden
                                </span>
                                <a
                                    href="mailto:kontakt@palmer-digital.de?subject=Initiativbewerbung"
                                    className="group inline-flex items-center gap-3 text-[12px] font-black tracking-[0.2em] uppercase text-[#001F3F] hover:text-[#000000] transition-colors duration-200 border-b-2 border-[#001F3F] hover:border-[#000000] pb-0.5"
                                    aria-label="Initiativbewerbung per E-Mail"
                                >
                                    Initiativbewerbung einreichen
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" aria-hidden="true">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                                <p className="text-[10px] font-mono text-[#000000]/35 tracking-[0.2em] uppercase mt-3">
                                    Antwort innerhalb von 48 Stunden garantiert
                                </p>
                            </div>

                        </div>
                    </ScrollReveal>
                </div>

            </div>
        </section>
    );
}

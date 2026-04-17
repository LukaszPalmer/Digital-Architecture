// src/components/sections/Pricing.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import Link from "next/link";

const PRINCIPLES = [
    {
        id: "01",
        title: "Scope-First",
        description:
            "Bevor wir über Investitionen sprechen, verstehen wir Ihr Vorhaben. Umfang, Komplexität und Ziele bestimmen den Rahmen — nicht umgekehrt.",
    },
    {
        id: "02",
        title: "Transparente Kalkulation",
        description:
            "Keine versteckten Kosten, kein Overhead. Sie erhalten eine klare Aufstellung: was gebaut wird, warum, und was es kostet.",
    },
    {
        id: "03",
        title: "Individuelle Architektur",
        description:
            "Jedes Projekt ist eine eigene Architekturentscheidung. Ein generisches Paket kann kein spezifisches Problem lösen — deshalb gibt es bei uns keines.",
    },
    {
        id: "04",
        title: "Langfristige Partnerschaft",
        description:
            "Wir denken in Systemen, nicht in Deliverables. Das Angebot spiegelt wider, was Sie heute brauchen und morgen skalieren können.",
    },
];

export default function Pricing() {
    return (
        <section
            id="investment"
            aria-labelledby="pricing-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-t border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-12">
                    <div>
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Investment ]
                        </span>
                        <h2
                            id="pricing-heading"
                            className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                        >
                            Kein Paket.
                            <br />
                            <span className="italic font-normal text-[#001F3F]">
                                Ihr Vorhaben.
                            </span>
                        </h2>
                    </div>
                    <div className="md:max-w-sm border-l-2 border-[#001F3F] pl-6">
                        <p className="text-[15px] text-[#000000]/60 leading-[1.75]">
                            Wir arbeiten nicht mit Fixpaketen. Jedes Projekt wird
                            individuell kalkuliert — basierend auf Ihren Zielen,
                            Ihrem Umfang und dem technischen Anspruch Ihres
                            Vorhabens.
                        </p>
                    </div>
                </div>

                {/* ── STATEMENT ── */}
                <div className="bg-[#001F3F] p-10 md:p-16 lg:p-20 mb-2 relative overflow-hidden">
                    <div
                        className="absolute top-0 right-0 text-[clamp(80px,18vw,200px)] font-black leading-none select-none pointer-events-none text-[#FFFFFF] opacity-[0.04] tracking-tighter uppercase translate-y-[-10%] translate-x-[5%]"
                        aria-hidden="true"
                    >
                        PDA
                    </div>
                    <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center gap-10 lg:gap-20">
                        <p className="text-[clamp(1.2rem,2.5vw,1.8rem)] font-black text-[#FFFFFF] leading-snug tracking-tight uppercase">
                            Jedes Kundenvorhaben ist einzigartig —<br />
                            <span className="italic font-normal text-[#FFFFFF]/55">
                                deshalb ist jedes Angebot einzigartig.
                            </span>
                        </p>
                        <Link
                            href="/contact"
                            className="shrink-0 inline-flex items-center gap-3 bg-[#FFFFFF] text-[#000000] px-10 py-5 text-[11px] font-black tracking-[0.3em] uppercase hover:bg-[#000000] hover:text-[#FFFFFF] transition-colors duration-300"
                        >
                            Anfrage stellen
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* ── PRINCIPLES GRID ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 border-l border-[#000000]/10">
                    {PRINCIPLES.map((p) => (
                        <div
                            key={p.id}
                            className="border-r border-b border-[#000000]/10 p-8 md:p-10 lg:p-12 flex flex-col gap-4"
                        >
                            <div className="flex items-center gap-4">
                                <span className="text-[10px] font-mono font-black tracking-[0.4em] text-[#001F3F] uppercase">
                                    [{p.id}]
                                </span>
                                <h3 className="text-[15px] font-black tracking-tight uppercase text-[#000000]">
                                    {p.title}
                                </h3>
                            </div>
                            <p className="text-[13.5px] leading-relaxed text-[#000000]/55 border-l-2 border-[#001F3F]/20 pl-5">
                                {p.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* ── BOTTOM NOTE ── */}
                <div className="mt-10 pt-8 border-t border-[#000000]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-[11px] font-mono text-[#000000]/40 tracking-[0.3em] uppercase">
                        Erstes Gespräch — kostenfrei & unverbindlich
                    </p>
                    <Link
                        href="/contact"
                        className="text-[11px] font-mono font-bold text-[#001F3F] hover:text-[#000000] transition-colors duration-200 tracking-wide underline underline-offset-4"
                    >
                        Jetzt Kontakt aufnehmen →
                    </Link>
                </div>

            </div>
        </section>
    );
}

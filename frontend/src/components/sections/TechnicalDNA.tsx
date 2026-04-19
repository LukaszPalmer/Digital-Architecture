// src/components/sections/TechnicalDNA.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

interface Value {
    id: string;
    category: string;
    title: string;
    intent: string;
    detail: string;
    icon: React.ReactNode;
}

const iconProps = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "square" as const,
    strokeLinejoin: "miter" as const,
    "aria-hidden": true,
};

const VALUES: Value[] = [
    {
        id: "01",
        category: "PERSÖNLICH",
        title: "Ein fester Ansprechpartner",
        intent: "Kein Ticketsystem, keine Hotline-Warteschleife — Sie erreichen uns direkt.",
        detail: "Kommunikation auf Augenhöhe",
        icon: (
            <svg {...iconProps}>
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
            </svg>
        ),
    },
    {
        id: "02",
        category: "TRANSPARENT",
        title: "Klare, faire Preise",
        intent: "Sie bekommen ein verbindliches Angebot. Keine versteckten Kosten, kein Kleingedrucktes.",
        detail: "Fixpreise oder klare Tagessätze",
        icon: (
            <svg {...iconProps}>
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        ),
    },
    {
        id: "03",
        category: "SICHER",
        title: "DSGVO & Datenschutz",
        intent: "Server in der EU, verschlüsselte Daten, saubere Rechtstexte — alles rechtssicher nach deutschem Standard.",
        detail: "Hosting 100% in Deutschland / EU",
        icon: (
            <svg {...iconProps}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
    },
    {
        id: "04",
        category: "PÜNKTLICH",
        title: "Termine, die halten",
        intent: "Sie wissen jederzeit, wo Ihr Projekt steht. Wöchentliche Updates und ein verbindlicher Liefertermin.",
        detail: "Regelmäßige Status-Berichte",
        icon: (
            <svg {...iconProps}>
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
    },
    {
        id: "05",
        category: "LANGFRISTIG",
        title: "Betreuung nach dem Launch",
        intent: "Mit dem Go-Live fängt die Zusammenarbeit erst an — Wartung, Updates und Weiterentwicklung aus einer Hand.",
        detail: "Support & Wartung inklusive",
        icon: (
            <svg {...iconProps}>
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        ),
    },
    {
        id: "06",
        category: "IHR EIGENTUM",
        title: "Alles gehört Ihnen",
        intent: "Code, Design, Zugänge, Daten — am Ende bekommen Sie alles. Keine Abhängigkeit, keine Lock-ins.",
        detail: "Vollständige Übergabe & Doku",
        icon: (
            <svg {...iconProps}>
                <rect x="3" y="11" width="18" height="11" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
        ),
    },
];

export default function TechnicalDNA() {
    return (
        <section
            aria-labelledby="dna-heading"
            className="bg-[#FFFFFF] text-[#000000] border-t border-[#000000] py-20 md:py-32 lg:py-44 relative overflow-hidden"
        >
            {/* Ghost Wordmark */}
            <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 text-[clamp(120px,20vw,260px)] font-black leading-none select-none pointer-events-none text-[#001F3F] opacity-[0.025] tracking-tighter uppercase translate-y-[20%] -translate-x-[2%]"
            >
                Warum
            </div>

            <div className="relative max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <span
                                    className="w-2 h-2 bg-[#001F3F] animate-pulse-dot shrink-0"
                                    aria-hidden="true"
                                />
                                <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase">
                                    [ Warum Palmer Digital ]
                                </span>
                            </div>
                            <h2
                                id="dna-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Unsere
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    Arbeitsweise.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/65 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Sechs Versprechen, auf die Sie sich verlassen können.
                            Transparenz, Qualität und Verantwortung — das ist unser Standard.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── VALUES GRID ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#000000]">
                    {VALUES.map((item) => (
                        <div
                            key={item.id}
                            className="group relative p-8 md:p-12 border-r border-b border-[#000000] flex flex-col justify-between min-h-100 hover:bg-[#001F3F] transition-colors duration-500 cursor-crosshair"
                        >
                            {/* TOP: Identification */}
                            <div>
                                <div className="flex justify-between items-start mb-8">
                                    <div className="flex items-center gap-2.5">
                                        <span
                                            aria-hidden="true"
                                            className="w-1.5 h-1.5 bg-[#001F3F] group-hover:bg-[#FFFFFF] transition-colors shrink-0"
                                        />
                                        <span className="text-[10px] font-mono font-bold text-[#001F3F] group-hover:text-[#FFFFFF]/55 tracking-[0.3em] uppercase transition-colors">
                                            {item.category}
                                        </span>
                                    </div>
                                    <span className="text-[13px] font-black font-mono text-[#001F3F]/30 group-hover:text-[#FFFFFF]/55 transition-colors">
                                        [{item.id}]
                                    </span>
                                </div>

                                {/* Icon */}
                                <div className="w-12 h-12 mb-6 border border-[#001F3F]/20 group-hover:border-[#FFFFFF]/40 flex items-center justify-center text-[#001F3F] group-hover:text-[#FFFFFF] transition-colors duration-300 group-hover:-translate-y-0.5">
                                    {item.icon}
                                </div>

                                <h3 className="text-[clamp(1.25rem,2.5vw,1.7rem)] font-black text-[#000000] group-hover:text-[#FFFFFF] mb-5 tracking-tighter uppercase leading-tight transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-[14px] leading-relaxed text-[#000000]/65 group-hover:text-[#FFFFFF]/80 transition-colors border-l-2 border-[#001F3F] group-hover:border-[#FFFFFF]/40 pl-4">
                                    {item.intent}
                                </p>
                            </div>

                            {/* BOTTOM: Detail Tagging */}
                            <div className="pt-8 mt-8 border-t border-[#000000]/10 group-hover:border-[#FFFFFF]/20 transition-colors">
                                <span className="text-[9px] font-mono font-bold text-[#000000]/55 group-hover:text-[#FFFFFF]/55 block mb-3 tracking-widest uppercase transition-colors">
                                    Im Detail
                                </span>
                                <p className="text-[12px] font-bold text-[#001F3F] group-hover:text-[#FFFFFF] tracking-tight transition-colors leading-relaxed flex items-center gap-2">
                                    <span
                                        aria-hidden="true"
                                        className="w-4 h-px bg-[#001F3F] group-hover:bg-[#FFFFFF] group-hover:w-6 shrink-0 transition-all duration-300"
                                    />
                                    {item.detail}
                                </p>
                            </div>

                            {/* Architectural Corner Accent */}
                            <div
                                className="absolute top-0 right-0 w-0 h-0 border-t-10 border-r-10 border-t-transparent border-r-transparent group-hover:border-t-[#FFFFFF]/30 group-hover:border-r-[#FFFFFF]/30 transition-all duration-300"
                                aria-hidden="true"
                            />
                        </div>
                    ))}
                </RevealGrid>

            </div>
        </section>
    );
}

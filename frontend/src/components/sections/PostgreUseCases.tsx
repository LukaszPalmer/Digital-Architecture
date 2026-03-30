// src/components/sections/PostgreUseCases.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const USE_CASES = [
    {
        id: "UC-01",
        sector: "FINTECH",
        title: "Banking & Payment Systems",
        description:
            "Transaktionsintegrität ist keine Option — sie ist Pflicht. PostgreSQL liefert ACID-Garantien für Zahlungsströme, Kontoabgleiche und Abrechnungssysteme, die regulatorische Anforderungen (PCI-DSS, SOX) erfüllen.",
        tags: ["ACID Transactions", "Audit Logging", "Row-Level Security"],
        metric: { value: "0", label: "Datenverlust-Toleranz" },
    },
    {
        id: "UC-02",
        sector: "E-COMMERCE",
        title: "Katalog & Bestandsverwaltung",
        description:
            "Produktkataloge mit komplexen Attributstrukturen, Lagerbestandsführung mit Transaktionssicherheit und Preishistorien als Time-Series-Daten — PostgreSQL als relationale Quelle der Wahrheit.",
        tags: ["JSONB Attributes", "Inventory Locks", "Price History"],
        metric: { value: "∞", label: "Produktvarianten" },
    },
    {
        id: "UC-03",
        sector: "SAAS",
        title: "Multi-Tenant Plattformen",
        description:
            "Row-Level Security isoliert Mandantendaten auf Datenbankebene — ohne Applikationslogik. Schema-per-Tenant oder RLS-per-Tenant je nach Isolationsanforderung und Skalierungsstrategie.",
        tags: ["Row-Level Security", "Schema Isolation", "Tenant Routing"],
        metric: { value: "1 DB", label: "N Mandanten" },
    },
    {
        id: "UC-04",
        sector: "ANALYTICS",
        title: "Business Intelligence",
        description:
            "Partitionierte Tabellen für historische Daten, materialisierte Views für vorberechnete Aggregate und Foreign Data Wrappers für externe Datenquellen — PostgreSQL als analytische Schicht ohne Data Warehouse.",
        tags: ["Table Partitioning", "Materialized Views", "FDW Integration"],
        metric: { value: "< 1s", label: "Aggregat-Queries" },
    },
];

export default function PostgreUseCases() {
    return (
        <section
            aria-labelledby="postgre-uc-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Industry Applications ]
                            </span>
                            <h2
                                id="postgre-uc-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Use Cases
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    in der Praxis.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            PostgreSQL ist die erste Wahl überall dort, wo
                            Datenintegrität, komplexe Relationen und
                            Compliance nicht verhandelbar sind.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── USE CASE GRID ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#000000]">
                    {USE_CASES.map((uc) => (
                        <div
                            key={uc.id}
                            className="group p-10 md:p-12 border-r border-b border-[#000000] flex flex-col min-h-96 hover:bg-[#001F3F] transition-colors duration-500 cursor-crosshair"
                        >
                            {/* Sector + ID */}
                            <div className="flex justify-between items-start mb-8">
                                <span className="text-[10px] font-mono font-bold text-[#001F3F] group-hover:text-[#FFFFFF]/55 tracking-[0.3em] uppercase transition-colors">
                                    {uc.sector}
                                </span>
                                <span className="text-[13px] font-black font-mono text-[#001F3F]/25 group-hover:text-[#FFFFFF]/35 transition-colors">
                                    {uc.id}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-[clamp(1.3rem,2.5vw,2rem)] font-black tracking-tighter uppercase leading-tight text-[#000000] group-hover:text-[#FFFFFF] transition-colors mb-4">
                                {uc.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[14px] leading-relaxed text-[#000000]/70 group-hover:text-[#FFFFFF]/80 transition-colors border-l-2 border-[#001F3F] group-hover:border-[#FFFFFF]/40 pl-4 mb-8">
                                {uc.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {uc.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-[9px] font-mono font-black tracking-[0.2em] uppercase px-2.5 py-1 border border-[#000000]/15 group-hover:border-[#FFFFFF]/20 text-[#000000]/55 group-hover:text-[#FFFFFF]/55 transition-colors"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Metric */}
                            <div className="mt-auto pt-6 border-t border-[#000000]/10 group-hover:border-[#FFFFFF]/15 transition-colors flex items-end gap-3">
                                <span className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-black text-[#001F3F] group-hover:text-[#FFFFFF] tracking-tighter leading-none transition-colors">
                                    {uc.metric.value}
                                </span>
                                <span className="text-[10px] font-mono font-bold text-[#000000]/50 group-hover:text-[#FFFFFF]/50 tracking-[0.2em] uppercase mb-1 transition-colors">
                                    {uc.metric.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </RevealGrid>

            </div>
        </section>
    );
}

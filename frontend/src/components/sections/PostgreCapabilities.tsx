// src/components/sections/PostgreCapabilities.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const CAPABILITIES = [
    {
        id: "PG-01",
        category: "CONCURRENCY",
        title: "MVCC Isolation",
        description:
            "Multi-Version Concurrency Control ermöglicht parallele Lese- und Schreiboperationen ohne gegenseitige Blockierung. Jede Transaktion arbeitet auf einem konsistenten Snapshot — maximaler Durchsatz bei vollständiger Datenkonsistenz.",
        specs: ["Snapshot Isolation", "No Read Locks", "Serializable Transactions"],
    },
    {
        id: "PG-02",
        category: "PERFORMANCE",
        title: "Advanced Index-Typen",
        description:
            "B-Tree, GIN, GiST, BRIN und Hash-Indizes für jeden Anwendungsfall. Partial Indexes reduzieren Speicherbedarf, Expression Indexes beschleunigen berechnete Abfragen — Index-Strategie als Kernarchitektur.",
        specs: ["B-Tree / GIN / GiST", "Partial Indexes", "Expression Indexes"],
    },
    {
        id: "PG-03",
        category: "SICHERHEIT",
        title: "Row-Level Security",
        description:
            "Feingranulare Zugriffskontrolle direkt in der Datenbankschicht. Policies definieren, welche Zeilen welcher Rolle sichtbar sind — Multi-Tenant-Systeme ohne Applikationslogik absichern.",
        specs: ["Policy-based RLS", "Role-based Access", "Multi-Tenant Ready"],
    },
    {
        id: "PG-04",
        category: "FLEXIBILITÄT",
        title: "JSON & JSONB Support",
        description:
            "Native JSON-Speicherung mit JSONB für indexierbare, binäre Darstellung. Relationale Stärke kombiniert mit dokumentenorientierter Flexibilität — ohne separaten NoSQL-Stack.",
        specs: ["JSONB Binary Storage", "JSON Operators", "JSON Path Queries"],
    },
    {
        id: "PG-05",
        category: "SUCHE",
        title: "Full-Text Search",
        description:
            "Eingebaute Volltextsuche mit tsvector und tsquery — keine externe Suchmaschine erforderlich. Ranking, Stemming und Phrasensuche direkt aus der Datenbankschicht.",
        specs: ["tsvector / tsquery", "Ranking & Stemming", "GIN-Index optimiert"],
    },
    {
        id: "PG-06",
        category: "ERWEITERBARKEIT",
        title: "Stored Procedures & Extensions",
        description:
            "PL/pgSQL, PL/Python und PL/JavaScript für komplexe Datenbanklogik. PostGIS für Geodaten, pg_cron für Scheduling, pgvector für KI-Embeddings — PostgreSQL als vollständige Plattform.",
        specs: ["PL/pgSQL Logic", "PostGIS / pgvector", "pg_cron Scheduling"],
    },
];

export default function PostgreCapabilities() {
    return (
        <section
            aria-labelledby="postgre-cap-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Database Capabilities ]
                            </span>
                            <h2
                                id="postgre-cap-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Was PostgreSQL
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    beherrscht.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Sechs Kernsysteme der PostgreSQL-Plattform, die
                            zusammen eine unerschütterliche relationale Datenschicht
                            für produktionskritische Systeme ergeben.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── CAPABILITIES GRID ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#000000]">
                    {CAPABILITIES.map((cap) => (
                        <div
                            key={cap.id}
                            className="group relative p-10 md:p-12 border-r border-b border-[#000000] flex flex-col min-h-100 hover:bg-[#001F3F] transition-colors duration-500 cursor-crosshair"
                        >
                            {/* Category + ID */}
                            <div className="flex justify-between items-start mb-8">
                                <span className="text-[10px] font-mono font-bold text-[#001F3F] group-hover:text-[#FFFFFF]/55 tracking-[0.3em] uppercase transition-colors">
                                    {cap.category}
                                </span>
                                <span className="text-[13px] font-black font-mono text-[#001F3F]/30 group-hover:text-[#FFFFFF]/40 transition-colors">
                                    {cap.id}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-[clamp(1.2rem,2.2vw,1.7rem)] font-black tracking-tighter uppercase leading-tight text-[#000000] group-hover:text-[#FFFFFF] transition-colors mb-4">
                                {cap.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[14px] leading-relaxed text-[#000000]/70 group-hover:text-[#FFFFFF]/80 transition-colors border-l-2 border-[#001F3F] group-hover:border-[#FFFFFF]/40 pl-4 mb-8">
                                {cap.description}
                            </p>

                            {/* Specs */}
                            <ul
                                className="mt-auto flex flex-col gap-2 pt-6 border-t border-[#000000]/10 group-hover:border-[#FFFFFF]/20 transition-colors"
                                role="list"
                            >
                                {cap.specs.map((spec) => (
                                    <li
                                        key={spec}
                                        className="flex items-center gap-3 text-[11px] font-black tracking-[0.12em] uppercase"
                                    >
                                        <div className="w-3 h-px bg-[#001F3F] group-hover:bg-[#FFFFFF] shrink-0 transition-colors" />
                                        <span className="text-[#000000]/65 group-hover:text-[#FFFFFF]/80 transition-colors">
                                            {spec}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </RevealGrid>

            </div>
        </section>
    );
}

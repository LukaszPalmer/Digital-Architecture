// src/components/sections/MongoCapabilities.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const CAPABILITIES = [
    {
        id: "MDB-01",
        category: "SKALIERUNG",
        title: "Horizontal Cluster Sharding",
        description:
            "Automatisierte Partitionierung großer Datensätze auf globale Shard-Knoten. Kein vertikales Skalierungslimit, lineare Performance-Steigerung bei wachsender Last.",
        specs: ["Auto-Balancing", "Shard-Key Strategy", "Zone-based Sharding"],
    },
    {
        id: "MDB-02",
        category: "PERFORMANCE",
        title: "Aggregation Pipelines",
        description:
            "Multi-Stage Datentransformation direkt in der Datenbank. Komplexe Analytics-Queries in Millisekunden — durch $lookup, $group und $facet ohne Applikationslogik.",
        specs: ["$lookup Joins", "$group & $facet", "Pipeline Optimization"],
    },
    {
        id: "MDB-03",
        category: "KONSISTENZ",
        title: "ACID Transaktionen",
        description:
            "Multi-Document ACID-Garantien für kritische Schreiboperationen. Atomare Transaktionen über Collections hinweg — Fintech-Grade Datenkonsistenz auf jedem Cluster.",
        specs: ["Multi-Doc Atomicity", "Read/Write Concerns", "Snapshot Isolation"],
    },
    {
        id: "MDB-04",
        category: "VERFÜGBARKEIT",
        title: "Replica Sets & Failover",
        description:
            "Dreifach-Replikation mit automatischem Primary-Failover unter 30 Sekunden. Kein manueller Eingriff bei Node-Ausfall — die Daten sind immer erreichbar.",
        specs: ["3-Node Replication", "Auto Primary Election", "< 30s Failover"],
    },
    {
        id: "MDB-05",
        category: "ANALYTICS",
        title: "Time-Series Collections",
        description:
            "Spezialisierte Storage-Engine für zeitbasierte Datenpunkte mit automatischer Kompression. IoT-, Metriken- und Log-Daten ohne Index-Overhead verarbeiten.",
        specs: ["Auto Compression", "Bucketing Strategy", "Columnar Storage"],
    },
    {
        id: "MDB-06",
        category: "SUCHE",
        title: "Atlas Search & Vector",
        description:
            "Volltext-Suche und Vector-Embeddings nativ in MongoDB. Kein separater Elasticsearch-Cluster notwendig — semantische Suche direkt aus der Datenschicht.",
        specs: ["Lucene-Based FTS", "Vector Index", "Fuzzy & Autocomplete"],
    },
];

export default function MongoCapabilities() {
    return (
        <section
            aria-labelledby="mongo-cap-heading"
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
                                id="mongo-cap-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Was MongoDB Atlas
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    beherrscht.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Sechs Kernsysteme der MongoDB-Plattform, die
                            zusammen eine unerschütterliche Datenschicht
                            für globalen Hochlast-Betrieb ergeben.
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

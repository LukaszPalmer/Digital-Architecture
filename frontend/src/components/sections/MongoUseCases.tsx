// src/components/sections/MongoUseCases.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const USE_CASES = [
    {
        id: "UC-01",
        segment: "FINTECH",
        title: "Transaktionale Kernsysteme",
        description:
            "Multi-Document ACID-Transaktionen für Zahlungsplattformen mit Millionen täglicher Buchungen. Atlas garantiert Konsistenz bei gleichzeitigem Hochlast-Write-Throughput.",
        metrics: ["ACID Multi-Doc", "Write Concern: Majority", "Idempotency-Safe"],
    },
    {
        id: "UC-02",
        segment: "E-COMMERCE",
        title: "Globale Produktkataloge",
        description:
            "Flexible Schemata für heterogene Produktdaten mit Atlas Search. Milliarden von SKUs mit regionalem Sharding — Latenz unter 50ms weltweit durch Zone-Routing.",
        metrics: ["Atlas Search FTS", "Zone Sharding", "< 50ms Global"],
    },
    {
        id: "UC-03",
        segment: "ANALYTICS",
        title: "Real-Time Business Intelligence",
        description:
            "Aggregation Pipelines ersetzen komplexe ETL-Prozesse. Dashboards werden direkt aus MongoDB aggregiert — kein teurer Data-Warehouse-Layer notwendig.",
        metrics: ["In-DB Aggregation", "No ETL Required", "Materialized Views"],
    },
    {
        id: "UC-04",
        segment: "IOT / TIMESERIES",
        title: "Sensordaten & Metriken",
        description:
            "Time-Series Collections mit automatischer Kompression für Millionen von Datenpunkten pro Sekunde. IoT-Infrastrukturen mit Atlas Data Tier Management.",
        metrics: ["Time-Series Storage", "Auto Compression", "Bucketing Engine"],
    },
    {
        id: "UC-05",
        segment: "CONTENT",
        title: "CMS & Media-Plattformen",
        description:
            "Flexible Dokument-Strukturen für Rich-Content mit verschachtelten Arrays und dynamischen Schemas. Change Streams für Echtzeit-Content-Delivery.",
        metrics: ["Nested Documents", "Change Streams", "GridFS Binary"],
    },
    {
        id: "UC-06",
        segment: "ENTERPRISE",
        title: "Multi-Tenant Architekturen",
        description:
            "Isolierte Datenbanken oder Collections per Tenant mit geteilter Cluster-Infrastruktur. Kostenoptimierte Mandantentrennung auf Atlas-Ebene mit feingranularer RBAC.",
        metrics: ["RBAC per Tenant", "Namespace Isolation", "Cost Optimization"],
    },
];

export default function MongoUseCases() {
    return (
        <section
            aria-labelledby="mongo-uc-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-t border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Production Use Cases ]
                            </span>
                            <h2
                                id="mongo-uc-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Wo MongoDB
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    unersetzlich ist.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Sechs Produktionsszenarien, in denen MongoDB Atlas
                            die einzige Datenbank ist, die Skalierbarkeit,
                            Flexibilität und ACID-Garantien vereint.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── USE CASE GRID ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#000000]">
                    {USE_CASES.map((uc) => (
                        <div
                            key={uc.id}
                            className="group relative p-10 md:p-12 border-r border-b border-[#000000] flex flex-col min-h-100 hover:bg-[#001F3F] transition-colors duration-500 cursor-crosshair"
                        >
                            {/* Segment Badge + ID */}
                            <div className="flex justify-between items-start mb-8">
                                <span className="bg-[#001F3F] group-hover:bg-[#FFFFFF] px-3 py-1.5 text-[9px] font-mono font-black tracking-widest text-[#FFFFFF] group-hover:text-[#001F3F] uppercase transition-colors duration-300">
                                    {uc.segment}
                                </span>
                                <span className="text-[12px] font-black font-mono text-[#001F3F]/30 group-hover:text-[#FFFFFF]/40 transition-colors">
                                    {uc.id}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-[clamp(1.1rem,2vw,1.6rem)] font-black tracking-tighter uppercase leading-tight text-[#000000] group-hover:text-[#FFFFFF] transition-colors mb-4">
                                {uc.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[14px] leading-relaxed text-[#000000]/70 group-hover:text-[#FFFFFF]/80 transition-colors border-l-2 border-[#001F3F] group-hover:border-[#FFFFFF]/40 pl-4 mb-8">
                                {uc.description}
                            </p>

                            {/* Metrics */}
                            <ul
                                className="mt-auto flex flex-col gap-2 pt-6 border-t border-[#000000]/10 group-hover:border-[#FFFFFF]/20 transition-colors"
                                role="list"
                            >
                                {uc.metrics.map((metric) => (
                                    <li
                                        key={metric}
                                        className="flex items-center gap-3 text-[11px] font-black tracking-[0.12em] uppercase"
                                    >
                                        <div className="w-3 h-px bg-[#001F3F] group-hover:bg-[#FFFFFF] shrink-0 transition-colors" />
                                        <span className="text-[#000000]/65 group-hover:text-[#FFFFFF]/80 transition-colors">
                                            {metric}
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

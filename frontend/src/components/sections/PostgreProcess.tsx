// src/components/sections/PostgreProcess.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";

const STEPS = [
    {
        number: "01",
        phase: "ANALYSE",
        title: "Schema Design & Audit",
        description:
            "Vollständige Analyse der Datenstrukturen, Beziehungen und Zugriffsmuster. Normalisierungsstrategie, Indexplanung und Constraint-Definition — bevor eine einzige Zeile geschrieben wird.",
        deliverables: ["ER-Diagramm", "Normalisierungs-Report", "Index-Strategie"],
    },
    {
        number: "02",
        phase: "AUFBAU",
        title: "Migration & Schema Setup",
        description:
            "Implementierung des Datenbankschemas mit sauberen Migrationsscripten (Flyway / Liquibase). Foreign-Key-Constraints, Check-Constraints und Default-Werte als First-Class-Bürger.",
        deliverables: ["Migrations-Scripte", "Schema-Dokumentation", "Rollback-Strategie"],
    },
    {
        number: "03",
        phase: "SICHERHEIT",
        title: "RLS & Access Control",
        description:
            "Row-Level Security Policies für Multi-Tenant-Isolation. Rollenkonzept, Grant-Struktur und Connection-String-Management — Sicherheit auf Datenbankebene, nicht nur in der Applikation.",
        deliverables: ["RLS-Policies", "Rollen-Konzept", "Security-Audit"],
    },
    {
        number: "04",
        phase: "OPTIMIERUNG",
        title: "Query Tuning & Indexing",
        description:
            "EXPLAIN ANALYZE für kritische Queries, Slow-Query-Log-Auswertung und gezieltes Indexing. Autovacuum-Konfiguration, Work-Mem-Tuning und Table-Partitionierung für maximale Performance.",
        deliverables: ["Query-Plan-Report", "Optimiertes Schema", "Performance-Baseline"],
    },
    {
        number: "05",
        phase: "BETRIEB",
        title: "Monitoring & Backup",
        description:
            "pg_stat_statements, pgBadger und Prometheus-Integration für vollständiges Observability. pgBackRest-Setup mit Point-in-Time-Recovery — Produktionsbetrieb mit definiertem RTO/RPO.",
        deliverables: ["Monitoring-Dashboard", "Backup-Strategie", "Runbook"],
    },
];

export default function PostgreProcess() {
    return (
        <section
            aria-labelledby="postgre-process-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Implementation Protocol ]
                            </span>
                            <h2
                                id="postgre-process-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Unser
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    Prozess.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Fünf Phasen von der Schema-Analyse bis zum
                            vollständig überwachten Produktionsbetrieb —
                            strukturiert, dokumentiert, wiederholbar.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── STEPS ── */}
                <div className="flex flex-col border-t border-[#000000]">
                    {STEPS.map((step, i) => (
                        <ScrollReveal key={step.number} delay={i * 80}>
                            <div className="group grid grid-cols-1 md:grid-cols-[120px_1fr_auto] gap-0 border-b border-[#000000] hover:bg-[#001F3F] transition-colors duration-500 cursor-crosshair">

                                {/* Number */}
                                <div className="p-8 md:p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#000000]/20 group-hover:border-[#FFFFFF]/15">
                                    <span className="text-[clamp(2rem,4vw,3.5rem)] font-black text-[#001F3F]/15 group-hover:text-[#FFFFFF]/15 tracking-tighter leading-none transition-colors">
                                        {step.number}
                                    </span>
                                    <span className="text-[9px] font-mono font-bold tracking-[0.4em] text-[#001F3F]/55 group-hover:text-[#FFFFFF]/40 uppercase transition-colors mt-4">
                                        {step.phase}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-8 md:p-10 flex flex-col gap-4">
                                    <h3 className="text-[clamp(1.2rem,2.5vw,1.8rem)] font-black tracking-tighter uppercase leading-tight text-[#000000] group-hover:text-[#FFFFFF] transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-[14px] leading-relaxed text-[#000000]/70 group-hover:text-[#FFFFFF]/75 transition-colors max-w-2xl border-l-2 border-[#001F3F] group-hover:border-[#FFFFFF]/30 pl-4">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Deliverables */}
                                <div className="p-8 md:p-10 border-t md:border-t-0 md:border-l border-[#000000]/20 group-hover:border-[#FFFFFF]/15 flex flex-col gap-3 min-w-48 transition-colors">
                                    <span className="text-[9px] font-mono font-bold tracking-[0.4em] text-[#000000]/40 group-hover:text-[#FFFFFF]/35 uppercase transition-colors">
                                        Deliverables
                                    </span>
                                    <ul className="flex flex-col gap-2" role="list">
                                        {step.deliverables.map((d) => (
                                            <li key={d} className="flex items-center gap-2 text-[11px] font-black tracking-[0.08em] uppercase text-[#000000]/65 group-hover:text-[#FFFFFF]/70 transition-colors">
                                                <div className="w-2 h-px bg-[#001F3F] group-hover:bg-[#FFFFFF]/50 shrink-0 transition-colors" />
                                                {d}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </ScrollReveal>
                    ))}
                </div>

            </div>
        </section>
    );
}

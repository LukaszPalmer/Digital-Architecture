// src/components/sections/PostgreArchitecture.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// Pure-CSS Diagramme: Primary-Replica-Topologie + Query-Execution-Flow.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const REPLICA_NODES = [
    {
        role: "PRIMARY",
        label: "Frankfurt",
        region: "EU-CENTRAL-1",
        ops: "READ / WRITE",
        bg: "bg-[#001F3F]",
        textColor: "text-[#FFFFFF]",
        borderColor: "border-[#001F3F]",
        roleColor: "text-[#FFFFFF]/55",
        opsColor: "text-[#FFFFFF]/70",
    },
    {
        role: "REPLICA",
        label: "Amsterdam",
        region: "EU-WEST-1",
        ops: "READ / STANDBY",
        bg: "bg-[#FFFFFF]",
        textColor: "text-[#000000]",
        borderColor: "border-[#000000]",
        roleColor: "text-[#001F3F]",
        opsColor: "text-[#000000]/65",
    },
    {
        role: "REPLICA",
        label: "Dublin",
        region: "EU-WEST-2",
        ops: "READ / STANDBY",
        bg: "bg-[#FFFFFF]",
        textColor: "text-[#000000]",
        borderColor: "border-[#000000]",
        roleColor: "text-[#001F3F]",
        opsColor: "text-[#000000]/65",
    },
];

const QUERY_STAGES = [
    { op: "PARSE", label: "Parsing", desc: "SQL parsen" },
    { op: "ANALYZE", label: "Analyse", desc: "Statistiken lesen" },
    { op: "REWRITE", label: "Rewrite", desc: "Rules anwenden" },
    { op: "PLAN", label: "Planner", desc: "Optimalen Plan wählen" },
    { op: "EXECUTE", label: "Execute", desc: "Plan ausführen" },
    { op: "RETURN", label: "Result", desc: "Ergebnis zurückgeben" },
];

const INTEGRATION_SPECS = [
    {
        id: "INT-01",
        title: "Node.js → PgBouncer → PostgreSQL",
        description:
            "Connection Pooler PgBouncer reduziert den Overhead durch persistente Datenbankverbindungen auf ein Minimum. Tausende simultane App-Verbindungen auf wenige echte DB-Connections gemappt.",
        spec: "CONNECTION POOLING",
    },
    {
        id: "INT-02",
        title: "WAL Streaming Replication",
        description:
            "Write-Ahead Log wird kontinuierlich an alle Replicas gestreamt. Asynchrones oder synchrones Replikationsmodell je nach RPO-Anforderung — Datenverlust nahe null.",
        spec: "WAL STREAMING",
    },
    {
        id: "INT-03",
        title: "pgBackRest Point-in-Time",
        description:
            "Inkrementelle Backups mit WAL-Archivierung ermöglichen Wiederherstellung auf jede Sekunde der Datenbankhistorie. RTO unter 15 Minuten für produktionskritische Systeme.",
        spec: "PITR < 15 MIN RTO",
    },
];

export default function PostgreArchitecture() {
    return (
        <section
            aria-labelledby="postgre-arch-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Cluster & Query Blueprint ]
                            </span>
                            <h2
                                id="postgre-arch-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Architektur
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    im Detail.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Primary-Replica-Topologie mit WAL Streaming sowie
                            der vollständige Query-Execution-Flow von Parse
                            bis Result — das Fundament performanter PostgreSQL-Systeme.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── REPLICA SET DIAGRAM ── */}
                <ScrollReveal delay={80}>
                    <div className="mb-16 md:mb-24">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Primary-Replica Cluster — 3 Nodes ]
                        </span>

                        <div className="border border-[#000000]">
                            {/* Header */}
                            <div className="bg-[#000000] px-6 md:px-8 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#FFFFFF]" aria-hidden="true" />
                                    <span className="text-[11px] font-black font-mono tracking-[0.25em] text-[#FFFFFF] uppercase">
                                        PostgreSQL — Streaming Replication
                                    </span>
                                </div>
                                <span className="text-[9px] font-mono text-[#FFFFFF]/40 tracking-widest uppercase">
                                    WAL Streaming Active
                                </span>
                            </div>

                            {/* Nodes */}
                            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#000000]">
                                {REPLICA_NODES.map((node, i) => (
                                    <div key={node.label} className={`${node.bg} p-6 md:p-8 flex flex-col gap-4`}>
                                        <div className="flex items-center justify-between">
                                            <span className={`text-[9px] font-mono font-black tracking-[0.4em] uppercase ${node.roleColor}`}>
                                                {node.role}
                                            </span>
                                            <span className={`text-[9px] font-mono ${node.opsColor} tracking-widest uppercase`}>
                                                NODE {String(i + 1).padStart(2, "0")}
                                            </span>
                                        </div>
                                        <div>
                                            <p className={`text-[clamp(1.1rem,2.5vw,1.6rem)] font-black tracking-tighter uppercase ${node.textColor} leading-none mb-1`}>
                                                {node.label}
                                            </p>
                                            <p className={`text-[10px] font-mono ${node.opsColor} tracking-[0.25em] uppercase`}>
                                                {node.region}
                                            </p>
                                        </div>
                                        <div className={`inline-flex self-start border ${node.borderColor} px-3 py-1.5`}>
                                            <span className={`text-[9px] font-mono font-black tracking-widest uppercase ${node.opsColor}`}>
                                                {node.ops}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="border-t border-[#000000] px-6 py-3 bg-[#FFFFFF] flex items-center justify-between">
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1 h-1 bg-[#001F3F]" aria-hidden="true" />
                                        <span className="text-[9px] font-mono text-[#001F3F] font-bold tracking-widest uppercase">
                                            WAL Replication Active
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1 h-1 bg-[#000000]/30" aria-hidden="true" />
                                        <span className="text-[9px] font-mono text-[#000000]/55 tracking-widest uppercase">
                                            Synchronous Commit: On
                                        </span>
                                    </div>
                                </div>
                                <span className="text-[9px] font-mono text-[#001F3F] font-bold tracking-widest uppercase">
                                    Failover &lt; 60s
                                </span>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* ── QUERY EXECUTION FLOW ── */}
                <ScrollReveal delay={120}>
                    <div className="mb-16 md:mb-24">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Query Execution — Stage Flow ]
                        </span>

                        <div className="border border-[#000000]">
                            <div className="bg-[#001F3F] px-6 md:px-8 py-4 flex items-center justify-between">
                                <span className="text-[11px] font-black font-mono tracking-[0.25em] text-[#FFFFFF] uppercase">
                                    SELECT * FROM ... WHERE ... ORDER BY ...
                                </span>
                                <span className="text-[9px] font-mono text-[#FFFFFF]/40 tracking-widest uppercase">
                                    Cost-Based Optimizer
                                </span>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y md:divide-y-0 divide-[#000000]">
                                {QUERY_STAGES.map((stage, i) => (
                                    <div key={stage.op} className="p-5 md:p-6 flex flex-col gap-2">
                                        <span className="text-[9px] font-mono font-black text-[#001F3F] tracking-widest uppercase">
                                            STAGE {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <span className="text-[13px] font-black font-mono text-[#000000] tracking-tight">
                                            {stage.op}
                                        </span>
                                        <span className="text-[11px] font-bold text-[#000000]/55 uppercase tracking-wide">
                                            {stage.label}
                                        </span>
                                        <span className="text-[10px] text-[#000000]/45 leading-snug">
                                            {stage.desc}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-[#000000] px-6 py-3 bg-[#FFFFFF] flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#001F3F]" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#001F3F] font-bold tracking-widest uppercase">
                                        EXPLAIN ANALYZE — Plan-Optimierung
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#000000]/30" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#000000]/55 tracking-widest uppercase">
                                        Statistics Auto-Collect (autovacuum)
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* ── INTEGRATION SPECS ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-[#000000]">
                    {INTEGRATION_SPECS.map((spec) => (
                        <div
                            key={spec.id}
                            className="group p-8 md:p-10 border-r border-b border-[#000000] flex flex-col min-h-72 hover:bg-[#001F3F] transition-colors duration-500 cursor-crosshair"
                        >
                            <span className="text-[10px] font-mono font-bold text-[#001F3F] group-hover:text-[#FFFFFF]/55 tracking-[0.3em] uppercase block mb-6 transition-colors">
                                {spec.id}
                            </span>
                            <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] font-black tracking-tighter uppercase leading-tight text-[#000000] group-hover:text-[#FFFFFF] transition-colors mb-4">
                                {spec.title}
                            </h3>
                            <p className="text-[14px] leading-relaxed text-[#000000]/70 group-hover:text-[#FFFFFF]/80 transition-colors border-l-2 border-[#001F3F] group-hover:border-[#FFFFFF]/40 pl-4 mb-6">
                                {spec.description}
                            </p>
                            <div className="mt-auto">
                                <span className="bg-[#001F3F] group-hover:bg-[#FFFFFF] px-3 py-1.5 text-[9px] font-mono font-black tracking-widest text-[#FFFFFF] group-hover:text-[#001F3F] uppercase transition-colors duration-300">
                                    {spec.spec}
                                </span>
                            </div>
                        </div>
                    ))}
                </RevealGrid>

            </div>
        </section>
    );
}

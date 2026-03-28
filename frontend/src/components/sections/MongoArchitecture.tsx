// src/components/sections/MongoArchitecture.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// Pure-CSS Diagramme: Replica-Set-Topologie + Aggregation-Pipeline-Flow.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const REPLICA_NODES = [
    {
        role: "PRIMARY",
        label: "Frankfurt",
        region: "EU-WEST-1",
        ops: "READ / WRITE",
        bg: "bg-[#001F3F]",
        textColor: "text-[#FFFFFF]",
        borderColor: "border-[#001F3F]",
        roleColor: "text-[#FFFFFF]/55",
        opsColor: "text-[#FFFFFF]/70",
    },
    {
        role: "SECONDARY",
        label: "Virginia",
        region: "US-EAST-1",
        ops: "READ / STANDBY",
        bg: "bg-[#FFFFFF]",
        textColor: "text-[#000000]",
        borderColor: "border-[#000000]",
        roleColor: "text-[#001F3F]",
        opsColor: "text-[#000000]/65",
    },
    {
        role: "SECONDARY",
        label: "Singapore",
        region: "AP-SOUTH-1",
        ops: "READ / STANDBY",
        bg: "bg-[#FFFFFF]",
        textColor: "text-[#000000]",
        borderColor: "border-[#000000]",
        roleColor: "text-[#001F3F]",
        opsColor: "text-[#000000]/65",
    },
];

const PIPELINE_STAGES = [
    { op: "$match", label: "Filter", desc: "Rohdaten filtern" },
    { op: "$lookup", label: "Join", desc: "Collections verbinden" },
    { op: "$group", label: "Aggregat", desc: "Daten gruppieren" },
    { op: "$project", label: "Projektion", desc: "Felder selektieren" },
    { op: "$sort", label: "Sortierung", desc: "Ergebnis ordnen" },
    { op: "$out", label: "Output", desc: "Ins Ziel schreiben" },
];

const INTEGRATION_SPECS = [
    {
        id: "INT-01",
        title: "Railway → MongoDB Atlas",
        description:
            "Node.js-Backend auf Railway verbindet sich via Connection Pooling mit Atlas. Mongoose ODM liefert strikt typisierte Schema-Validierung auf jeder Schicht.",
        spec: "CONNECTION POOLING",
    },
    {
        id: "INT-02",
        title: "Oplog Monitoring",
        description:
            "Der Operations-Log (Oplog) ermöglicht Echtzeit-Change-Streams — sofortige Reaktion auf Datenbankänderungen für Event-Driven Architekturen.",
        spec: "REAL-TIME CHANGESTREAMS",
    },
    {
        id: "INT-03",
        title: "Atlas Backup & Point-in-Time",
        description:
            "Kontinuierliche Cloud-Backups mit Point-in-Time-Recovery auf Minutengenauigkeit. Datenverlust von maximal einer Minute — konfigurierbares RPO.",
        spec: "RPO < 1 MINUTE",
    },
];

export default function MongoArchitecture() {
    return (
        <section
            aria-labelledby="mongo-arch-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Cluster & Pipeline Blueprint ]
                            </span>
                            <h2
                                id="mongo-arch-heading"
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
                            Zwei Kerndiagramme: Die globale Replica-Set-Topologie
                            und die Aggregation-Pipeline — das Herzstück
                            performanter MongoDB-Abfragen.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── REPLICA SET DIAGRAM ── */}
                <ScrollReveal delay={80}>
                    <div className="mb-16 md:mb-24">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Global Replica Set — 3 Nodes ]
                        </span>

                        <div className="border border-[#000000]">
                            {/* Header */}
                            <div className="bg-[#000000] px-6 md:px-8 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#FFFFFF]" aria-hidden="true" />
                                    <span className="text-[11px] font-black font-mono tracking-[0.25em] text-[#FFFFFF] uppercase">
                                        MongoDB Atlas — Replica Set (rs0)
                                    </span>
                                </div>
                                <span className="text-[9px] font-mono text-[#FFFFFF]/40 tracking-widest uppercase">
                                    Auto-Failover Active
                                </span>
                            </div>

                            {/* Nodes */}
                            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#000000]">
                                {REPLICA_NODES.map((node, i) => (
                                    <div key={node.label} className={`${node.bg} p-6 md:p-8 flex flex-col gap-4`}>
                                        {/* Role */}
                                        <div className="flex items-center justify-between">
                                            <span className={`text-[9px] font-mono font-black tracking-[0.4em] uppercase ${node.roleColor}`}>
                                                {node.role}
                                            </span>
                                            <span className={`text-[9px] font-mono ${node.opsColor} tracking-widest uppercase`}>
                                                NODE {String(i + 1).padStart(2, "0")}
                                            </span>
                                        </div>

                                        {/* Region Label */}
                                        <div>
                                            <p className={`text-[clamp(1.1rem,2.5vw,1.6rem)] font-black tracking-tighter uppercase ${node.textColor} leading-none mb-1`}>
                                                {node.label}
                                            </p>
                                            <p className={`text-[10px] font-mono ${node.opsColor} tracking-[0.25em] uppercase`}>
                                                {node.region}
                                            </p>
                                        </div>

                                        {/* Ops badge */}
                                        <div className={`inline-flex self-start border ${node.borderColor} px-3 py-1.5`}>
                                            <span className={`text-[9px] font-mono font-black tracking-widest uppercase ${node.opsColor}`}>
                                                {node.ops}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Replication indicator */}
                            <div className="border-t border-[#000000] px-6 py-3 bg-[#FFFFFF] flex items-center justify-between">
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1 h-1 bg-[#001F3F]" aria-hidden="true" />
                                        <span className="text-[9px] font-mono text-[#001F3F] font-bold tracking-widest uppercase">
                                            Oplog Replication Active
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-1 h-1 bg-[#000000]/30" aria-hidden="true" />
                                        <span className="text-[9px] font-mono text-[#000000]/55 tracking-widest uppercase">
                                            Write Concern: Majority
                                        </span>
                                    </div>
                                </div>
                                <span className="text-[9px] font-mono text-[#001F3F] font-bold tracking-widest uppercase">
                                    Failover &lt; 30s
                                </span>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* ── AGGREGATION PIPELINE DIAGRAM ── */}
                <ScrollReveal delay={120}>
                    <div className="mb-16 md:mb-24">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Aggregation Pipeline — Stage Flow ]
                        </span>

                        <div className="border border-[#000000]">
                            {/* Header */}
                            <div className="bg-[#001F3F] px-6 md:px-8 py-4 flex items-center justify-between">
                                <span className="text-[11px] font-black font-mono tracking-[0.25em] text-[#FFFFFF] uppercase">
                                    db.collection.aggregate([...stages])
                                </span>
                                <span className="text-[9px] font-mono text-[#FFFFFF]/40 tracking-widest uppercase">
                                    In-Database Processing
                                </span>
                            </div>

                            {/* Pipeline Stages */}
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y md:divide-y-0 divide-[#000000]">
                                {PIPELINE_STAGES.map((stage, i) => (
                                    <div
                                        key={stage.op}
                                        className={`p-5 md:p-6 flex flex-col gap-2 ${i % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#FFFFFF]"}`}
                                    >
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

                            {/* Footer */}
                            <div className="border-t border-[#000000] px-6 py-3 bg-[#FFFFFF] flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#001F3F]" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#001F3F] font-bold tracking-widest uppercase">
                                        CPU optimiert — kein App-Layer overhead
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#000000]/30" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#000000]/55 tracking-widest uppercase">
                                        Index-Utilization automatisch
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

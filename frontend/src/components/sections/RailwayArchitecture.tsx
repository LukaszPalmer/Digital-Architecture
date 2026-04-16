// src/components/sections/RailwayArchitecture.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// Pure-CSS Architektur-Diagramm — kein SVG, kein Image.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const STACK_LAYERS = [
    {
        layer: "LAYER 01",
        label: "CLIENT LAYER",
        nodes: ["Browser", "Mobile App", "API Client"],
        color: "bg-[#FFFFFF] border-[#000000]",
        textColor: "text-[#000000]",
        labelColor: "text-[#001F3F]",
    },
    {
        layer: "LAYER 02",
        label: "EDGE / CDN",
        nodes: ["Vercel Edge Network", "Global CDN Nodes", "Next.js App Router"],
        color: "bg-[#001F3F]",
        textColor: "text-[#FFFFFF]",
        labelColor: "text-[#FFFFFF]/55",
    },
    {
        layer: "LAYER 03",
        label: "RAILWAY CLOUD",
        nodes: ["Node.js API Service", "Worker Processes", "Cron Jobs"],
        color: "bg-[#000000]",
        textColor: "text-[#FFFFFF]",
        labelColor: "text-[#FFFFFF]/55",
    },
    {
        layer: "LAYER 04",
        label: "DATA BACKBONE",
        nodes: ["MongoDB Atlas", "Cluster Sharding", "Aggregation Pipelines"],
        color: "bg-[#FFFFFF] border-[#000000]",
        textColor: "text-[#000000]",
        labelColor: "text-[#001F3F]",
    },
];

const INTEGRATION_SPECS = [
    {
        id: "INT-01",
        title: "Vercel → Railway",
        description:
            "Next.js Server Actions und API-Routes proxieren auf Railway-Backend-Services ueber sichere, private Endpunkte — kein oeffentlicher Traffic zwischen Frontend und Backend.",
        spec: "PRIVATE NETWORK TUNNEL",
    },
    {
        id: "INT-02",
        title: "Railway → MongoDB",
        description:
            "Backend-Services verbinden sich mit MongoDB Atlas via Connection Pooling fuer minimale Latenz und maximale Transaktions-Throughput. EU-Region fuer DSGVO-Compliance.",
        spec: "CONNECTION POOLING",
    },
    {
        id: "INT-03",
        title: "CI/CD Pipeline",
        description:
            "Jeder Git-Merge loest einen automatisierten Build aus. Tests, Health-Checks und Zero-Downtime-Rollout sind Teil des Pipeline-Standards — kein Deploy ohne validierte Liveness-Probe.",
        spec: "ZERO-DOWNTIME DEPLOY",
    },
];

export default function RailwayArchitecture() {
    return (
        <section
            aria-labelledby="architecture-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Stack Integration Blueprint ]
                            </span>
                            <h2
                                id="architecture-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Architektur
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    im Kontext.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Railway ist nicht isoliert — es ist das Rueckgrat
                            zwischen Vercel-Edge-Delivery und MongoDB-Datenschicht.
                            Jeder Layer hat eine definierte Rolle in einer
                            skalierbaren Multi-Service-Topologie.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── STACK DIAGRAM ── */}
                <ScrollReveal delay={100}>
                    <div className="mb-16 md:mb-24">
                        <div className="grid grid-cols-1 gap-0 border border-[#000000]">
                            {STACK_LAYERS.map((layer, index) => (
                                <div key={layer.layer} className="relative">
                                    {/* Layer Row */}
                                    <div
                                        className={`${layer.color} ${index !== 0 ? "border-t border-[#000000]" : ""} p-6 md:p-8`}
                                    >
                                        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">

                                            {/* Layer ID */}
                                            <div className="shrink-0 w-32">
                                                <span className={`text-[9px] font-mono font-black tracking-[0.4em] uppercase ${layer.labelColor} block mb-1`}>
                                                    {layer.layer}
                                                </span>
                                                <span className={`text-[11px] font-black tracking-[0.15em] uppercase ${layer.textColor}`}>
                                                    {layer.label}
                                                </span>
                                            </div>

                                            {/* Divider */}
                                            <div
                                                className={`hidden md:block w-px h-10 shrink-0 ${layer.color === "bg-[#001F3F]" || layer.color === "bg-[#000000]" ? "bg-[#FFFFFF]/20" : "bg-[#000000]/15"}`}
                                                aria-hidden="true"
                                            />

                                            {/* Nodes */}
                                            <div className="flex flex-wrap gap-3">
                                                {layer.nodes.map((node) => (
                                                    <div
                                                        key={node}
                                                        className={`px-4 py-2 border text-[11px] font-black tracking-[0.12em] uppercase ${
                                                            layer.color === "bg-[#001F3F]" || layer.color === "bg-[#000000]"
                                                                ? "border-[#FFFFFF]/25 text-[#FFFFFF]/80"
                                                                : "border-[#000000]/20 text-[#000000]/70"
                                                        }`}
                                                    >
                                                        {node}
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Arrow indicator */}
                                            {index < STACK_LAYERS.length - 1 && (
                                                <div
                                                    className={`absolute left-1/2 -bottom-3.5 z-10 text-[10px] font-mono font-black ${layer.color === "bg-[#FFFFFF] border-[#000000]" && index === 0 ? "text-[#001F3F]" : "text-[#FFFFFF]"} hidden md:block`}
                                                    aria-hidden="true"
                                                >
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Connector Arrow between layers */}
                                    {index < STACK_LAYERS.length - 1 && (
                                        <div
                                            className="flex items-center justify-center py-2 bg-[#FFFFFF] border-x border-[#000000]"
                                            aria-hidden="true"
                                        >
                                            <div className="flex flex-col items-center gap-0.5">
                                                <div className="w-px h-4 bg-[#001F3F]/40" />
                                                <span className="text-[8px] font-mono text-[#001F3F]/40 tracking-widest uppercase">↓</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
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
                            {/* ID */}
                            <span className="text-[10px] font-mono font-bold text-[#001F3F] group-hover:text-[#FFFFFF]/55 tracking-[0.3em] uppercase block mb-6 transition-colors">
                                {spec.id}
                            </span>

                            {/* Title */}
                            <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] font-black tracking-tighter uppercase leading-tight text-[#000000] group-hover:text-[#FFFFFF] transition-colors mb-4">
                                {spec.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[14px] leading-relaxed text-[#000000]/70 group-hover:text-[#FFFFFF]/80 transition-colors border-l-2 border-[#001F3F] group-hover:border-[#FFFFFF]/40 pl-4 mb-6">
                                {spec.description}
                            </p>

                            {/* Spec Badge */}
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

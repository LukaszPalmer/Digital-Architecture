// src/components/sections/NodeArchitecture.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// Pure-CSS Diagramme: Request Pipeline + Microservice Architecture.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const REQUEST_PIPELINE = [
    {
        layer: "LOAD BALANCER",
        desc: "Railway Proxy / Nginx",
        note: "SSL Termination",
        bg: "bg-[#001F3F]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/65",
    },
    {
        layer: "MIDDLEWARE",
        desc: "Auth, Rate Limit, Helmet",
        note: "Request Validation",
        bg: "bg-[#FFFFFF]",
        textColor: "text-[#000000]",
        subColor: "text-[#000000]/55",
    },
    {
        layer: "ROUTER",
        desc: "Express / Fastify Routes",
        note: "OpenAPI Validated",
        bg: "bg-[#000000]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/55",
    },
    {
        layer: "CONTROLLER",
        desc: "Business Logic Layer",
        note: "TypeScript Strict",
        bg: "bg-[#001F3F]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/65",
    },
    {
        layer: "SERVICE",
        desc: "Domain Operations",
        note: "Testable Units",
        bg: "bg-[#FFFFFF]",
        textColor: "text-[#000000]",
        subColor: "text-[#000000]/55",
    },
    {
        layer: "DATA",
        desc: "MongoDB + Redis Cache",
        note: "Connection Pool",
        bg: "bg-[#000000]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/55",
    },
];

const SERVICES = [
    {
        name: "AUTH SERVICE",
        port: ":3001",
        desc: "JWT, Refresh Tokens, RBAC",
        bg: "bg-[#001F3F]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/65",
    },
    {
        name: "CORE API",
        port: ":3000",
        desc: "Business Logic, REST + GraphQL",
        bg: "bg-[#FFFFFF]",
        textColor: "text-[#000000]",
        subColor: "text-[#000000]/55",
    },
    {
        name: "WORKER",
        port: "BullMQ",
        desc: "Background Jobs, Email, Webhooks",
        bg: "bg-[#000000]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/55",
    },
    {
        name: "MEDIA SERVICE",
        port: ":3002",
        desc: "Upload, Sharp, S3 Storage",
        bg: "bg-[#001F3F]",
        textColor: "text-[#FFFFFF]",
        subColor: "text-[#FFFFFF]/65",
    },
];

const INTEGRATION_SPECS = [
    {
        id: "NOD-INT-01",
        title: "MongoDB Integration",
        description:
            "Mongoose ODM mit strikten Schema-Definitionen und TypeScript-Typen. Connection-Pooling mit `maxPoolSize: 10` auf Railway-Backend — keine Verbindungserschöpfung unter Last.",
        spec: "CONNECTION POOLING",
    },
    {
        id: "NOD-INT-02",
        title: "Redis Cache Layer",
        description:
            "Redis für Session-Storage, API-Response-Caching und BullMQ-Job-Queue-Backend. Cache-Invalidierung via Publish/Subscribe-Muster — konsistente Daten über alle Service-Instanzen.",
        spec: "DISTRIBUTED CACHE",
    },
    {
        id: "NOD-INT-03",
        title: "Observability Stack",
        description:
            "Structured Logging via Pino, Error-Tracking via Sentry, Health-Check-Endpoints für Railway-Monitoring. P99-Latenz und Error-Rate werden als Prometheus-Metriken exportiert.",
        spec: "FULL OBSERVABILITY",
    },
];

export default function NodeArchitecture() {
    return (
        <section
            aria-labelledby="node-arch-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Request Pipeline & Service Blueprint ]
                            </span>
                            <h2
                                id="node-arch-heading"
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
                            Der vollständige Request-Pipeline von Load
                            Balancer bis MongoDB — und die
                            Microservice-Topologie für skalierbare Backends.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── REQUEST PIPELINE DIAGRAM ── */}
                <ScrollReveal delay={80}>
                    <div className="mb-16 md:mb-24">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Request Pipeline — 6 Layer Stack ]
                        </span>
                        <div className="border border-[#000000]">
                            <div className="bg-[#000000] px-6 md:px-8 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-[#FFFFFF]" aria-hidden="true" />
                                    <span className="text-[11px] font-black font-mono tracking-[0.25em] text-[#FFFFFF] uppercase">
                                        Node.js Request Architecture
                                    </span>
                                </div>
                                <span className="text-[9px] font-mono text-[#FFFFFF]/40 tracking-widest uppercase">
                                    &lt; 5ms P99 Target
                                </span>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y lg:divide-y-0 divide-[#000000]">
                                {REQUEST_PIPELINE.map((stage, i) => (
                                    <div key={stage.layer} className={`${stage.bg} p-5 md:p-6 flex flex-col gap-2`}>
                                        <span className={`text-[9px] font-mono font-black tracking-[0.3em] uppercase ${stage.subColor}`}>
                                            L{String(i + 1).padStart(2, "0")}
                                        </span>
                                        <p className={`text-[11px] font-black tracking-tight uppercase leading-tight ${stage.textColor}`}>
                                            {stage.layer}
                                        </p>
                                        <p className={`text-[10px] leading-snug ${stage.subColor}`}>
                                            {stage.desc}
                                        </p>
                                        <p className={`text-[9px] font-mono ${stage.subColor} tracking-wide`}>
                                            {stage.note}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-[#000000] px-6 py-3 bg-[#FFFFFF] flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#001F3F]" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#001F3F] font-bold tracking-widest uppercase">
                                        Jede Layer ist unit-testbar
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#000000]/30" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#000000]/55 tracking-widest uppercase">
                                        Dependency Injection für Testbarkeit
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* ── MICROSERVICE TOPOLOGY ── */}
                <ScrollReveal delay={120}>
                    <div className="mb-16 md:mb-24">
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ Microservice Topology — Service Mesh ]
                        </span>
                        <div className="border border-[#000000]">
                            <div className="bg-[#001F3F] px-6 md:px-8 py-4 flex items-center justify-between">
                                <span className="text-[11px] font-black font-mono tracking-[0.25em] text-[#FFFFFF] uppercase">
                                    Service Architecture — Railway Deployment
                                </span>
                                <span className="text-[9px] font-mono text-[#FFFFFF]/40 tracking-widest uppercase">
                                    Independent Deployable
                                </span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#000000]">
                                {SERVICES.map((svc) => (
                                    <div key={svc.name} className={`${svc.bg} p-7 md:p-8 flex flex-col gap-3`}>
                                        <div className="flex items-center justify-between">
                                            <span className={`text-[clamp(0.75rem,1.5vw,1rem)] font-black tracking-tighter uppercase ${svc.textColor}`}>
                                                {svc.name}
                                            </span>
                                            <code className={`text-[10px] font-mono ${svc.subColor} tracking-wide`}>
                                                {svc.port}
                                            </code>
                                        </div>
                                        <p className={`text-[12px] leading-snug ${svc.subColor}`}>
                                            {svc.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            <div className="border-t border-[#000000] px-6 py-3 bg-[#FFFFFF] flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#001F3F]" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#001F3F] font-bold tracking-widest uppercase">
                                        Redis Pub/Sub für Inter-Service Events
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1 h-1 bg-[#000000]/30" aria-hidden="true" />
                                    <span className="text-[9px] font-mono text-[#000000]/55 tracking-widest uppercase">
                                        Shared MongoDB Atlas Cluster
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

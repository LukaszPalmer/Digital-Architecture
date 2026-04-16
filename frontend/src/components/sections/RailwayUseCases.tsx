// src/components/sections/RailwayUseCases.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const USE_CASES = [
    {
        id: "UC-01",
        segment: "API-FIRST",
        title: "Node.js Microservice APIs",
        description:
            "REST- und GraphQL-APIs fuer Web- und Mobile-Backends, die unter Hochlast stabil bleiben. Railway isoliert jeden Service, skaliert horizontal bei Last und garantiert Zero-Downtime-Releases ueber Health-Check-basiertes Rollout.",
        metrics: ["< 10ms Latenz intern", "Auto-Scale bei Last", "Private Endpoints"],
    },
    {
        id: "UC-02",
        segment: "FULLSTACK",
        title: "Vercel + Railway Stack",
        description:
            "Next.js-Frontend auf Vercel Edge, Node.js- oder Python-Backend auf Railway — verbunden ueber private Netzwerktunnel. Der Standard-Stack fuer Hochperformanz-Anwendungen mit globaler Auslieferung und skalierbarer Business-Logik.",
        metrics: ["Private Network Routing", "Shared Secrets", "Unified CI/CD"],
    },
    {
        id: "UC-03",
        segment: "BACKGROUND JOBS",
        title: "Worker & Cron Infrastruktur",
        description:
            "Asynchrone Verarbeitung, E-Mail-Queues, Image-Processing, Scheduled Reports und Python-Scripts laufen auf isolierten Railway-Workern — ohne den Hauptservice zu belasten oder bei einem Fehler mitzureissen.",
        metrics: ["Queue-Isolation", "Cron-Scheduling", "Failure Resilience"],
    },
    {
        id: "UC-04",
        segment: "REALTIME",
        title: "WebSocket-Server",
        description:
            "Echtzeit-Kommunikation fuer Live-Dashboards, Chat-Systeme, Kollaborations-Tools und Multiplayer-Features auf dedizierten Railway-Services mit persistenter TCP-Verbindung und horizontalem Sticky-Session-Routing.",
        metrics: ["Persistent Connections", "Horizontal Scaling", "Low Latency"],
    },
    {
        id: "UC-05",
        segment: "FINTECH",
        title: "Stripe & Payment Webhooks",
        description:
            "Dedizierter Webhook-Empfaenger fuer Stripe-, PayPal- oder Klarna-Events auf Railway. Idempotente Verarbeitung, Retry-Logic und sofortige Antwortzeiten — PCI-DSS-konform durch isolierte Umgebung ohne Kartendaten-Speicherung.",
        metrics: ["0ms Webhook Lag", "Idempotenz-Garantie", "PCI-DSS Compliant"],
    },
    {
        id: "UC-06",
        segment: "DATA PIPELINE",
        title: "ETL & Aggregation Services",
        description:
            "Batch-Prozesse fuer Datentransformation, Python-Analytics und MongoDB-Aggregation-Pipelines laufen auf Railway ohne das produktive System zu beeintraechtigen. Ideal fuer BI-Datenaufbereitung und KI-Trainings-Pipelines.",
        metrics: ["Isolated Execution", "MongoDB Direct Connect", "Scheduled Runs"],
    },
];

export default function RailwayUseCases() {
    return (
        <section
            aria-labelledby="usecases-heading"
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
                                id="usecases-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Wo Railway
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    entscheidet.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Sechs reale Einsatzszenarien — Railway als Rueckgrat
                            fuer jede Art von Backend-Anforderung, vom ersten
                            Startup-Prototyp bis zur etablierten Multi-Service-
                            Produktion.
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
                            {/* Segment Badge */}
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

// src/components/sections/NodeUseCases.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const USE_CASES = [
    {
        id: "UC-01",
        segment: "SAAS",
        title: "SaaS Backend API",
        description:
            "Multi-Tenant REST API mit Namespace-Isolation, Subscription-Metering und Rate-Limiting per Tenant. Skaliert von 10 auf 100.000 Kunden ohne Architektur-Änderungen — durch horizontales Scaling auf Railway.",
        metrics: ["Multi-Tenant", "Subscription Meter", "Horizontal Scale"],
    },
    {
        id: "UC-02",
        segment: "E-COMMERCE",
        title: "Platform Backend",
        description:
            "Produktkatalog-API mit Elasticsearch-Integration, Order-Management mit Stripe-Webhooks und Inventory-Service mit pessimistischem Locking für race-condition-freie Bestandsoperationen.",
        metrics: ["Order Mgmt", "Stripe Webhooks", "Inventory Lock"],
    },
    {
        id: "UC-03",
        segment: "REALTIME",
        title: "Live Collaboration Apps",
        description:
            "WebSocket-Server für Echtzeit-Kollaboration: simultane Bearbeitungen, Presence-Tracking und Live-Cursors. Redis Pub/Sub synchronisiert den State über mehrere Server-Instanzen hinweg.",
        metrics: ["WebSocket Scale", "Redis Sync", "Presence System"],
    },
    {
        id: "UC-04",
        segment: "MEDIA",
        title: "File Processing Pipeline",
        description:
            "Asynchrone Dateiverarbeitung via BullMQ: Upload-Empfang, Image-Optimierung mit Sharp, Video-Transcoding und S3-Upload in einer resilienten Queue-Pipeline mit automatischem Retry.",
        metrics: ["Async Processing", "BullMQ Pipeline", "Auto Retry"],
    },
    {
        id: "UC-05",
        segment: "FINTECH",
        title: "Payment Backend",
        description:
            "Stripe-Backend-Integration mit idempotenten Payment-Intent-Endpoints, Webhook-Handler mit Signatur-Verifikation und doppelter Buchführung in MongoDB-Transaktionen.",
        metrics: ["Idempotent API", "Webhook Handler", "ACID Transactions"],
    },
    {
        id: "UC-06",
        segment: "PLATFORM",
        title: "Multi-Tenant SaaS",
        description:
            "Zentrales Backend für Plattform mit API-Gateway-Pattern. Jeder Microservice hat eigene Auth-Validation, gemeinsamen Redis-Cache und MongoDB-Atlas-Cluster mit Collection-Level-Isolation.",
        metrics: ["API Gateway", "Service Mesh", "Collection Isolation"],
    },
];

export default function NodeUseCases() {
    return (
        <section
            aria-labelledby="node-uc-heading"
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
                                id="node-uc-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Wo Node.js
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    dominiert.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Sechs Produktionsszenarien, in denen Node.js-
                            Backends mit präziser Architektur eine
                            unlösbare Skalierungsherausforderung lösen.
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
                            <div className="flex justify-between items-start mb-8">
                                <span className="bg-[#001F3F] group-hover:bg-[#FFFFFF] px-3 py-1.5 text-[9px] font-mono font-black tracking-widest text-[#FFFFFF] group-hover:text-[#001F3F] uppercase transition-colors duration-300">
                                    {uc.segment}
                                </span>
                                <span className="text-[12px] font-black font-mono text-[#001F3F]/30 group-hover:text-[#FFFFFF]/40 transition-colors">
                                    {uc.id}
                                </span>
                            </div>
                            <h3 className="text-[clamp(1.1rem,2vw,1.6rem)] font-black tracking-tighter uppercase leading-tight text-[#000000] group-hover:text-[#FFFFFF] transition-colors mb-4">
                                {uc.title}
                            </h3>
                            <p className="text-[14px] leading-relaxed text-[#000000]/70 group-hover:text-[#FFFFFF]/80 transition-colors border-l-2 border-[#001F3F] group-hover:border-[#FFFFFF]/40 pl-4 mb-8">
                                {uc.description}
                            </p>
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

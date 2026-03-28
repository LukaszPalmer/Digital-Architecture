// src/components/sections/NextCapabilities.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const CAPABILITIES = [
    {
        id: "NXT-01",
        category: "ROUTING",
        title: "App Router Architecture",
        description:
            "Nested Layouts, Parallel Routes und Intercepting Routes als Fundament. Jede Route ist ein eigenständiges RSC-Subtree — optimale Code-Splitting-Granularität ohne Konfiguration.",
        specs: ["Nested Layouts", "Parallel Routes", "Route Groups"],
    },
    {
        id: "NXT-02",
        category: "RENDERING",
        title: "React Server Components",
        description:
            "Daten werden auf dem Server gefetcht und als serialisiertes HTML gestreamt. Zero Client-Bundle-Overhead — keine Hydration-Kosten für statische Inhalte, maximale INP-Performance.",
        specs: ["Zero Client Bundle", "Streaming HTML", "Suspense Boundaries"],
    },
    {
        id: "NXT-03",
        category: "PERFORMANCE",
        title: "Partial Pre-Rendering",
        description:
            "Statische Shell wird sofort aus dem CDN ausgeliefert — dynamische Inseln werden parallel gestreamt. LCP unter 0.8s durch sofortigen First Byte bei gleichzeitiger Dynamik.",
        specs: ["Static Shell CDN", "Dynamic Streaming", "< 0.8s LCP"],
    },
    {
        id: "NXT-04",
        category: "DATA",
        title: "Server Actions",
        description:
            "Formulare und Mutationen direkt in Server Functions — kein API-Layer, keine Round-Trips. Optimistische UI-Updates mit `useOptimistic` für sofortiges User-Feedback.",
        specs: ["No API Layer", "Optimistic UI", "Progressive Enhancement"],
    },
    {
        id: "NXT-05",
        category: "EDGE",
        title: "Edge Middleware",
        description:
            "Auth-Checks, Rate-Limiting und I18n-Routing auf Vercel Edge — vor dem Server, global verteilt. Latenz unter 10ms durch geografische Nähe zum User.",
        specs: ["Auth at Edge", "Rate Limiting", "I18n Routing"],
    },
    {
        id: "NXT-06",
        category: "API",
        title: "Route Handlers",
        description:
            "Typsichere REST-Endpoints direkt in der App-Router-Struktur. OpenAPI-kompatible Response-Schemas, automatisches Caching mit `next/cache` und granulare Revalidierung.",
        specs: ["Type-Safe REST", "Auto Caching", "On-Demand ISR"],
    },
];

export default function NextCapabilities() {
    return (
        <section
            aria-labelledby="next-cap-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-b border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Framework Capabilities ]
                            </span>
                            <h2
                                id="next-cap-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Was Next.js 15
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    beherrscht.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Sechs Engineering-Disziplinen, die zusammen eine
                            unerschütterliche Grundlage für jedes digitale
                            Produkt auf Marktführer-Niveau bilden.
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

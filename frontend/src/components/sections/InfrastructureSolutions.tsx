// src/components/sections/InfrastructureSolutions.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import { CoreSystem } from "@/types/infrastructure";
import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const SYSTEMS: CoreSystem[] = [
    {
        id: "01",
        title: "High-Velocity Frontend",
        tagline: "Die schnellste Interface-Infrastruktur der Welt.",
        category: "NEXT.JS 15 / REACT 19",
        metrics: "LCP < 0.8s | SEO 100",
        imageUrl: "/infra/nextjs-blueprint.jpg",
        capabilities: [
            "Partial Prerendering (PPR)",
            "React Server Components (RSC)",
            "Strict Type-Safety Architecture",
        ],
    },
    {
        id: "02",
        title: "Distributed Data-Backbone",
        tagline: "Skalierbarkeit ohne Single-Point-of-Failure.",
        category: "MONGODB ATLAS / NODE.JS",
        metrics: "99.99% UPTIME | GLOBAL SHARDING",
        imageUrl: "/media/Cluster.png",
        capabilities: [
            "Global Sharding Strategy",
            "Atomic Transaction Logic",
            "Railway Cloud Orchestration",
        ],
    },
    {
        id: "03",
        title: "Fintech Revenue Logic",
        tagline: "Automatisierte Zahlungsströme für Global Player.",
        category: "STRIPE / CUSTOM FLOWS",
        metrics: "PCI-DSS LEVEL 1 | 0MS WEBHOOK LAG",
        imageUrl: "/infra/stripe-flow.jpg",
        capabilities: [
            "Custom Checkout Architectures",
            "Automated Reconciliation",
            "Idempotency Protection",
        ],
    },
    {
        id: "04",
        title: "System Design Governance",
        tagline: "Marken-Identität als auditierbarer Code.",
        category: "TAILWIND / ATOMIC UI",
        metrics: "BUILD-SIZE < 50KB | WCAG AAA",
        imageUrl: "/infra/design-system.jpg",
        capabilities: [
            "Architectural Minimalism",
            "0px Border-Radius Dogma",
            "Design-to-Code Pipeline",
        ],
    },
];

export default function InfrastructureSolutions() {
    return (
        <section
            id="solutions"
            aria-labelledby="infra-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-t border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ Core Pillars // System Solutions ]
                            </span>
                            <h2
                                id="infra-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Konstruierte
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    Architekturen.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/65 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Vier Kernsysteme. Jedes für Hochlast und globale
                            Skalierbarkeit konstruiert — kein Kompromiss, keine
                            Standard-Lösungen.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── SYSTEMS GRID ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#000000]">
                    {SYSTEMS.map((system) => (
                        <div
                            key={system.id}
                            className="group relative p-8 lg:p-12 border-r border-b border-[#000000] flex flex-col min-h-100 transition-colors duration-500 hover:bg-[#001F3F] cursor-crosshair"
                        >
                            {/* ID + Category */}
                            <div className="flex justify-between items-start mb-10">
                                <span className="text-[10px] font-mono font-bold text-[#001F3F] group-hover:text-[#FFFFFF]/55 tracking-[0.3em] uppercase transition-colors">
                                    {system.category}
                                </span>
                                <span className="text-[13px] font-black font-mono text-[#001F3F]/30 group-hover:text-[#FFFFFF]/55 transition-colors">
                                    [{system.id}]
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-[clamp(1.4rem,2.8vw,2rem)] font-black tracking-tighter uppercase leading-tight text-[#000000] group-hover:text-[#FFFFFF] transition-colors mb-5">
                                {system.title}
                            </h3>

                            {/* Tagline */}
                            <p className="text-[14px] leading-relaxed text-[#000000]/65 group-hover:text-[#FFFFFF]/80 transition-colors border-l-2 border-[#001F3F] group-hover:border-[#FFFFFF]/40 pl-5 mb-8">
                                {system.tagline}
                            </p>

                            {/* Metrics Badge */}
                            <div className="inline-flex self-start mb-10">
                                <span className="bg-[#001F3F] group-hover:bg-[#FFFFFF] px-4 py-2 text-[9.5px] font-mono font-black tracking-widest text-[#FFFFFF] group-hover:text-[#001F3F] uppercase transition-colors duration-300">
                                    {system.metrics}
                                </span>
                            </div>

                            {/* Capabilities */}
                            <ul
                                className="mt-auto flex flex-col gap-2.5 pt-8 border-t border-[#000000]/10 group-hover:border-[#FFFFFF]/20 transition-colors"
                                role="list"
                            >
                                {system.capabilities.map((cap) => (
                                    <li
                                        key={cap}
                                        className="flex items-center gap-3 text-[11px] font-black tracking-[0.15em] uppercase"
                                    >
                                        <div className="w-3 h-px bg-[#001F3F] group-hover:bg-[#FFFFFF] shrink-0 transition-colors" />
                                        <span className="text-[#000000]/65 group-hover:text-[#FFFFFF]/85 transition-colors">
                                            {cap}
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

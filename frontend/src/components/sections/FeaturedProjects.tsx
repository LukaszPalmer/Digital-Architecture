// src/components/sections/FeaturedProjects.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import Image from "next/image";
import { SolutionAsset } from "@/types/project";

const ASSETS: SolutionAsset[] = [
    {
        id: "01",
        title: "NEXT.JS ELITE CORE",
        category: "Frontend Architecture",
        metrics: "LCP < 0.8s | TBT 0ms",
        imageUrl: "/infra/nextjs-blueprint.jpg",
        specs: ["React 19 Server Components", "Partial Prerendering", "Edge-Runtime Optimization"],
    },
    {
        id: "02",
        title: "CLOUD BACKBONE",
        category: "Infrastructure / Database",
        metrics: "99.99% Uptime | Global Sharding",
        imageUrl: "/media/Cluster.png",
        specs: ["MongoDB Atlas Cluster", "Railway Orchestration", "Auto-Scaling Nodes"],
    },
    {
        id: "03",
        title: "FINTECH PIPELINES",
        category: "Payment Engineering",
        metrics: "PCI-DSS Compliant | Real-time Webhooks",
        imageUrl: "/infra/stripe-flow.jpg",
        specs: ["Stripe Custom Flow", "Idempotency Logic", "Automated Reconciliation"],
    },
    {
        id: "04",
        title: "DESIGN OPS SYSTEM",
        category: "UI/UX Governance",
        metrics: "Atomic Design | WCAG AAA",
        imageUrl: "/infra/design-system.jpg",
        specs: ["0px Border-Radius Dogma", "Tailwind Logic", "Component Governance"],
    },
];

export default function FeaturedProjects() {
    return (
        <section
            id="solutions"
            aria-labelledby="projects-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-t border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-10">
                    <div>
                        <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                            [ System Portfolio ]
                        </span>
                        <h2
                            id="projects-heading"
                            className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                        >
                            Konstruierte
                            <br />
                            <span className="italic font-normal text-[#001F3F]">
                                Infrastrukturen.
                            </span>
                        </h2>
                    </div>
                    <p className="text-[15px] text-[#000000]/55 leading-[1.75] max-w-xs border-l-2 border-[#001F3F] pl-6">
                        Keine Webseiten. Blaupausen digitaler Marktführerschaft — jedes Asset ein Beweis für technologische Präzision.
                    </p>
                </div>

                {/* ── SOLUTION GRID ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#000000]/10">
                    {ASSETS.map((asset) => (
                        <div
                            key={asset.id}
                            className="group relative border-r border-b border-[#000000]/10 p-8 lg:p-12 overflow-hidden transition-colors duration-300 hover:bg-[#001F3F]"
                        >
                            {/* Ghost ID */}
                            <span
                                className="absolute -right-3 -bottom-3 text-[120px] font-black text-[#000000]/4 group-hover:text-[#FFFFFF]/6 transition-colors leading-none select-none"
                                aria-hidden="true"
                            >
                                {asset.id}
                            </span>

                            {/* Visual Area */}
                            <div className="relative w-full aspect-video mb-10 overflow-hidden bg-[#000000]/4 group-hover:bg-[#000000]/20 border border-[#000000]/8 group-hover:border-[#FFFFFF]/10 transition-colors duration-300">

                                {asset.id === "02" ? (
                                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                                        <Image
                                            src={asset.imageUrl}
                                            alt={asset.title}
                                            fill
                                            priority
                                            unoptimized
                                            className="object-cover opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-[#000000]/20 group-hover:text-[#FFFFFF]/20 uppercase transition-colors">
                                            {asset.category}
                                        </span>
                                    </div>
                                )}

                                {/* Metrics Badge */}
                                <div className="absolute bottom-0 right-0 bg-[#001F3F] group-hover:bg-[#FFFFFF] px-4 py-2 text-[10px] font-bold font-mono tracking-widest text-[#FFFFFF] group-hover:text-[#001F3F] uppercase transition-colors duration-300">
                                    {asset.metrics}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 space-y-6">
                                <div>
                                    <span className="text-[10.5px] font-mono uppercase tracking-[0.3em] text-[#000000]/40 group-hover:text-[#FFFFFF]/45 transition-colors block mb-2">
                                        {asset.category}
                                    </span>
                                    <h3 className="text-[clamp(1.3rem,3vw,2rem)] font-black tracking-tighter uppercase leading-none text-[#000000] group-hover:text-[#FFFFFF] transition-colors">
                                        {asset.title}
                                    </h3>
                                </div>

                                <ul
                                    className="grid grid-cols-1 gap-2.5 pt-6 border-t border-[#000000]/10 group-hover:border-[#FFFFFF]/15 transition-colors"
                                    role="list"
                                >
                                    {asset.specs.map((spec) => (
                                        <li
                                            key={spec}
                                            className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-widest text-[#000000]/55 group-hover:text-[#FFFFFF]/75 transition-colors"
                                        >
                                            <div className="w-1.5 h-1.5 bg-[#001F3F] group-hover:bg-[#FFFFFF] shrink-0 transition-colors" />
                                            {spec}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

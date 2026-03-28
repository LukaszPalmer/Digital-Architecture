// src/components/sections/NextUseCases.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

const USE_CASES = [
    {
        id: "UC-01",
        segment: "E-COMMERCE",
        title: "High-Conversion Shops",
        description:
            "PPR für sofortigen LCP, RSC für SEO-optimierte Produktseiten, Server Actions für Cart-Mutations. Checkout-Flow als Client-Island — maximale Conversion durch minimale Ladezeit.",
        metrics: ["PPR + RSC", "SEO-Optimiert", "< 0.8s LCP"],
    },
    {
        id: "UC-02",
        segment: "CORPORATE",
        title: "Flagship Websites",
        description:
            "SSG für statische Marketing-Seiten mit On-Demand ISR — Content-Updates in Sekunden ohne Rebuild. Multi-Language via Edge Middleware, vollständige SEO-Kontrolle durch Metadata API.",
        metrics: ["SSG + ISR", "Edge I18n", "99.99% Uptime"],
    },
    {
        id: "UC-03",
        segment: "SAAS",
        title: "Dashboard Applikationen",
        description:
            "Authentifizierte RSC-Dashboards mit parallelem Datenfetching. Streaming-UI mit Suspense für sofortiges Feedback, Server Actions für Einstellungs-Mutationen ohne API-Layer.",
        metrics: ["Auth RSC", "Parallel Fetch", "Streaming UI"],
    },
    {
        id: "UC-04",
        segment: "PLATFORM",
        title: "Multi-Tenant Plattformen",
        description:
            "Tenant-Isolation via Edge Middleware auf Subdomain- oder Pfad-Basis. Per-Tenant-Caching mit granularen Revalidierungstags — eine Codebase für unbegrenzte Mandanten.",
        metrics: ["Edge Tenancy", "Tag Revalidation", "One Codebase"],
    },
    {
        id: "UC-05",
        segment: "DOCS",
        title: "Dokumentations-Systeme",
        description:
            "MDX-Rendering via RSC — kein Client-Bundle für statische Docs. Volltext-Suche mit eingebetteter Search-API, automatische Sitemap und strukturierte Daten für optimales SEO.",
        metrics: ["MDX RSC", "Built-in Search", "Auto Sitemap"],
    },
    {
        id: "UC-06",
        segment: "MEDIA",
        title: "Content Plattformen",
        description:
            "Dynamische OG-Image-Generierung via `next/og`, On-Demand ISR für neue Artikel, Image-Optimierung mit `next/image` — Performance-Budget auch bei Media-Heavy-Content eingehalten.",
        metrics: ["Dynamic OG", "On-Demand ISR", "Auto Image Opt"],
    },
];

export default function NextUseCases() {
    return (
        <section
            aria-labelledby="next-uc-heading"
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
                                id="next-uc-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Wo Next.js 15
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    dominiert.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Sechs Produktionsszenarien, in denen die
                            RSC-Architektur einen messbaren Vorsprung
                            gegenüber jedem anderen Stack liefert.
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
                            {/* Segment Badge + ID */}
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

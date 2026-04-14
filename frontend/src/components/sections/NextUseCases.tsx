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
            "Partial Pre-Rendering für sofortigen LCP, React Server Components für SEO-optimierte Produktseiten, Server Actions für Cart-Mutations. Checkout-Flow als Client-Island — maximale Conversion durch minimale Ladezeit.",
        businessCase:
            "Für Online-Shops ist Ladezeit direkt mit Umsatz verknüpft. Eine Sekunde schneller bedeutet bis zu 7 % mehr Conversion. Wenn Sie einen professionellen E-Commerce-Shop erstellen lassen, ist Next.js die technologische Grundlage, die den Unterschied macht.",
        metrics: ["PPR + RSC", "SEO-Optimiert", "< 0.8s LCP", "+7 % Conversion"],
    },
    {
        id: "UC-02",
        segment: "CORPORATE",
        title: "Flagship Websites",
        description:
            "Static Site Generation für Marketing-Seiten mit On-Demand ISR — Content-Updates in Sekunden ohne Rebuild. Multi-Language via Edge Middleware, vollständige SEO-Kontrolle durch Metadata API.",
        businessCase:
            "Corporate Websites repräsentieren Ihr Unternehmen. Wenn die Website zu langsam lädt, leidet nicht nur das Google-Ranking, sondern auch die Markenwahrnehmung. Mit Next.js erstellen wir professionelle Websites, die in unter einer Sekunde laden — auf jedem Gerät, weltweit.",
        metrics: ["SSG + ISR", "Edge I18n", "99.99 % Uptime", "Global CDN"],
    },
    {
        id: "UC-03",
        segment: "SAAS",
        title: "Dashboard Applikationen",
        description:
            "Authentifizierte RSC-Dashboards mit parallelem Datenfetching. Streaming-UI mit Suspense für sofortiges Feedback, Server Actions für Einstellungs-Mutationen ohne API-Layer.",
        businessCase:
            "SaaS-Kunden erwarten reaktionsschnelle Dashboards. Jede Verzögerung bei der Datenladung frustriert Nutzer und erhöht die Churn-Rate. Unsere moderne Webanwendung-Architektur mit React Server Components liefert Daten parallel und streamt UI-Elemente progressiv.",
        metrics: ["Auth RSC", "Parallel Fetch", "Streaming UI", "Zero API"],
    },
    {
        id: "UC-04",
        segment: "PLATFORM",
        title: "Multi-Tenant Plattformen",
        description:
            "Tenant-Isolation via Edge Middleware auf Subdomain- oder Pfad-Basis. Per-Tenant-Caching mit granularen Revalidierungstags — eine Codebase für unbegrenzte Mandanten.",
        businessCase:
            "Für Plattform-Betreiber sind die Kosten pro Tenant entscheidend. Mit Next.js und Edge-Runtime skaliert Ihre Plattform auf tausende Mandanten, ohne dass die Infrastrukturkosten linear steigen. Das senkt die Kosten für Ihre professionelle Plattform erheblich.",
        metrics: ["Edge Tenancy", "Tag Revalidation", "One Codebase", "∞ Tenants"],
    },
    {
        id: "UC-05",
        segment: "DOCS",
        title: "Dokumentations-Systeme",
        description:
            "MDX-Rendering via RSC — kein Client-Bundle für statische Docs. Volltext-Suche mit eingebetteter Search-API, automatische Sitemap und strukturierte Daten für optimales SEO.",
        businessCase:
            "Technische Dokumentation muss sofort laden und perfekt indexiert sein. Static Site Generation macht jede Seite sofort verfügbar, Incremental Static Regeneration hält sie aktuell. Die Ladezeit zu optimieren ist hier keine Kür, sondern Pflicht.",
        metrics: ["MDX RSC", "Built-in Search", "Auto Sitemap", "0 KB JS"],
    },
    {
        id: "UC-06",
        segment: "MEDIA",
        title: "Content Plattformen",
        description:
            "Dynamische OG-Image-Generierung, On-Demand ISR für neue Artikel, Image-Optimierung mit next/image — Performance-Budget auch bei media-lastigem Content eingehalten.",
        businessCase:
            "Medien-Plattformen leben von Reichweite. Wenn die Seite zu langsam lädt, verlieren Sie nicht nur Leser, sondern auch Werbeeinnahmen. Next.js Webentwicklung mit automatischer Bild-Optimierung und Edge-Delivery garantiert schnelle Ladezeiten auch bei bild- und videolastigem Content.",
        metrics: ["Dynamic OG", "On-Demand ISR", "Auto Image Opt", "Edge CDN"],
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
                                [ Production Use Cases — Branchen &amp; Szenarien ]
                            </span>
                            <h2
                                id="next-uc-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Wo Next.js
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    den Unterschied macht.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/70 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Sechs Produktionsszenarien, in denen die
                            Server-First-Architektur einen messbaren Vorsprung
                            gegenüber jedem anderen Stack liefert — egal ob
                            Sie einen Shop, eine Corporate-Website oder eine
                            komplexe Plattform erstellen lassen.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── USE CASE GRID ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#000000]">
                    {USE_CASES.map((uc) => (
                        <div
                            key={uc.id}
                            className="group relative p-10 md:p-12 border-r border-b border-[#000000] flex flex-col min-h-120 hover:bg-[#001F3F] transition-colors duration-500 cursor-crosshair"
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
                            <p className="text-[14px] leading-relaxed text-[#000000]/70 group-hover:text-[#FFFFFF]/80 transition-colors border-l-2 border-[#001F3F] group-hover:border-[#FFFFFF]/40 pl-4 mb-4">
                                {uc.description}
                            </p>

                            {/* Business Case */}
                            <p className="text-[13px] leading-relaxed text-[#000000]/55 group-hover:text-[#FFFFFF]/60 transition-colors pl-4 mb-8">
                                {uc.businessCase}
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
                                        <div className="w-3 h-px bg-[#001F3F] group-hover:bg-[#FFFFFF] shrink-0 transition-colors" aria-hidden="true" />
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

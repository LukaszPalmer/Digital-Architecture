// app/portfolio/page.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Portfolio — Webentwicklung Referenzen & Projekte",
    description:
        "Referenzprojekte von Palmer Digital: Next.js E-Commerce Architekturen, globale Cloud-Infrastrukturen, Stripe Payment Pipelines und Enterprise Design Systems — vollständig engineert, produktionsbereit, mit messbaren Ergebnissen.",
    keywords: [
        "Webentwicklung Portfolio",
        "Referenzprojekte Webentwicklung",
        "Next.js Projekte",
        "Webentwicklung Referenzen Deutschland",
        "E-Commerce Projekte",
        "Cloud-Infrastruktur Projekte",
        "Software-Entwicklung Portfolio",
        "Webdesign Referenzen",
        "Fullstack Projekte",
        "Agentur Portfolio",
    ],
    alternates: { canonical: "https://palmer-digital.de/portfolio" },
    openGraph: {
        title: "Portfolio — Referenzprojekte | Palmer Digital",
        description:
            "Echte Projekte, echte Architekturen — Next.js, Cloud, Stripe und Design Systems in Produktion.",
        url: "https://palmer-digital.de/portfolio",
    },
};

const PROJECTS = [
    {
        id: "001",
        category: "Frontend Architecture",
        title: "Next.js Elite Core",
        client: "E-Commerce Scale-up",
        year: "2025",
        description:
            "Vollständige Neuarchitektur einer bestehenden E-Commerce-Plattform auf Next.js 15 mit Partial Prerendering und React 19 Compiler. Kein Theme, kein Template — ein von Grund auf handkonstruiertes Monorepo mit eigenem Atomic Design-System (0px border-radius, exklusives Farbsystem) und automatisierter CI/CD-Pipeline.",
        metrics: [
            { value: "< 0.8s", label: "LCP" },
            { value: "0ms", label: "TBT" },
            { value: "100", label: "Lighthouse Score" },
        ],
        stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Vercel Edge"],
        specs: [
            "App Router mit vollständiger RSC-First Architektur",
            "Partial Prerendering auf allen Kern-Routen",
            "Atomic Design-System mit 120+ Komponenten",
            "CI/CD mit automatisierten Performance-Budgets",
        ],
    },
    {
        id: "002",
        category: "Cloud Infrastructure",
        title: "Global Cloud Backbone",
        client: "FinTech Startup",
        year: "2025",
        description:
            "Aufbau einer globalen Datenbankinfrastruktur mit MongoDB Atlas Multi-Region Sharding für eine Payment-Platform mit internationalem Nutzerkreis. ACID-konform, zero-downtime deployable — vollständig dokumentiert und auditierbar. Das gesamte Infrastructure-as-Code Repository ist reproduzierbar und versioniert.",
        metrics: [
            { value: "99.99%", label: "SLA Uptime" },
            { value: "6", label: "Globale Regionen" },
            { value: "< 12ms", label: "Latenz P99" },
        ],
        stack: ["MongoDB Atlas", "Railway", "Node.js", "Docker", "Terraform"],
        specs: [
            "Multi-Region Cluster mit automatischem Failover",
            "Oplog-Monitoring für Echtzeit-Replikation",
            "Point-in-Time Recovery (PITR) Backup",
            "DSGVO-konformes Datenschutz-Layer (EU-Region)",
        ],
    },
    {
        id: "003",
        category: "Payment Engineering",
        title: "Fintech Payment Pipelines",
        client: "Multi-Vendor Marketplace",
        year: "2024",
        description:
            "Deep Integration von Stripe Connect für eine Multi-Vendor Marketplace-Platform mit hunderten von Händlern. Vollautomatische Steuerlogik nach EU-Vorschriften, Echtzeit-Webhook-Verarbeitung mit Idempotency-Garantien und SCA-Compliance für den europäischen Markt. Das System verarbeitet täglich tausende Transaktionen fehlerfrei.",
        metrics: [
            { value: "100%", label: "PCI-DSS Compliant" },
            { value: "< 200ms", label: "Webhook P95" },
            { value: "0", label: "Datenverluste" },
        ],
        stack: ["Stripe Connect", "Next.js", "PostgreSQL", "Redis", "Resend"],
        specs: [
            "Custom Connect Flows mit vollständigem Händler-Onboarding",
            "Idempotency Keys für ausfallsichere Verarbeitung",
            "Automatisierte EU-Steuerberechnung (OSS-Verfahren)",
            "Real-time Payment Analytics Dashboard",
        ],
    },
    {
        id: "004",
        category: "Design System",
        title: "Enterprise Design Ops",
        client: "Enterprise SaaS Platform",
        year: "2024",
        description:
            "Aufbau eines vollständigen Atomic Design-Systems für eine Enterprise SaaS-Platform mit 12 Produktteams. Konsistenz durch Token-Pipelines, nicht durch Konventionen. Figma-Tokens werden automatisiert in CSS-Variablen transformiert und in Storybook dokumentiert — jede Komponente mit Interaction Tests abgesichert.",
        metrics: [
            { value: "240+", label: "Komponenten" },
            { value: "WCAG AAA", label: "Accessibility" },
            { value: "< 2h", label: "Team-Onboarding" },
        ],
        stack: ["Storybook", "Figma Tokens", "TypeScript", "Tailwind CSS", "Radix UI"],
        specs: [
            "Atomic Design — Atoms bis vollständige Page-Templates",
            "Automatisierte Figma-Token → CSS-Variable Pipeline",
            "WCAG AAA Tests in CI/CD integriert",
            "Storybook mit Interaction Testing und Visual Diffs",
        ],
    },
];

const MONOREPO_ADVANTAGES = [
    {
        title: "Atomic Commits",
        body: "Jede Änderung — Frontend, Backend, Datenbankschema, CI/CD — in einem einzigen, vollständig getesteten Commit. Kein Versions-Drift zwischen Paketen.",
    },
    {
        title: "Shared TypeScript Types",
        body: "Ein Typsystem für alle Schichten. API-Contracts werden zur Compile-Time validiert. Kein Laufzeitfehler durch Typ-Inkonsistenzen zwischen Frontend und Backend.",
    },
    {
        title: "Unified CI/CD Pipeline",
        body: "Eine Pipeline für alles. Deployment erfolgt nur wenn alle Layer — Frontend, API, Datenbank-Migrations, Tests — grün sind. Kein partielles Deployment.",
    },
    {
        title: "Reproduzierbare Umgebungen",
        body: "Jeder Entwickler, jede Staging-Umgebung, jedes Production-Deployment läuft identisch. Docker + deterministische Lockfiles eliminieren 'works on my machine'.",
    },
];

function ArrowRight() {
    return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
    );
}

export default function PortfolioPage() {
    return (
        <main>

            {/* ── HERO ── */}
            <section className="bg-[#FFFFFF] border-b border-[#000000] py-20 md:py-32 lg:py-44">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-end gap-16">
                        <div>
                            <span className="block text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase mb-8">
                                [ Portfolio — Real Engineered Work ]
                            </span>
                            <h1 className="text-[clamp(2.8rem,6vw,5.5rem)] font-black text-[#000000] leading-[0.96] tracking-[-0.025em] uppercase mb-10">
                                Keine Templates.
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    Echte Ingenieursarbeit.
                                </span>
                            </h1>
                            <p className="text-[16px] md:text-[18px] text-[#000000]/60 leading-[1.75] max-w-[520px] border-l-2 border-[#001F3F] pl-6">
                                Jedes Projekt ist ein vollständig engineertes Monorepo — mit
                                messbaren Performance-Metriken, echten Architekturen und Code,
                                der täglich in Produktion läuft.
                            </p>
                        </div>

                        {/* Anti-Template Banner */}
                        <div className="bg-[#001F3F] p-6 lg:self-end lg:pb-3">
                            <p className="text-[9px] font-mono font-black tracking-[0.4em] text-[#FFFFFF]/40 uppercase mb-4">
                                Was wir NICHT machen
                            </p>
                            {["Wordpress", "Page Builder", "Templates", "Copy-Paste Code", "Low-Code Tools"].map((item) => (
                                <div key={item} className="flex items-center gap-2.5 py-2 border-b border-[#FFFFFF]/8 last:border-0">
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="square" opacity="0.3" aria-hidden="true">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                    <span className="text-[11px] font-bold tracking-[0.1em] text-[#FFFFFF]/50 uppercase">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PROJECT LIST ── */}
            <section className="bg-[#FFFFFF] py-20 md:py-32 lg:py-44 border-b border-[#000000]">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
                    <div className="border-t border-[#000000]">
                        {PROJECTS.map((project) => (
                            <article
                                key={project.id}
                                className="border-b border-[#000000]/15 py-14 md:py-20"
                            >
                                {/* Header Row */}
                                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 mb-10 items-start">
                                    <div>
                                        <div className="flex flex-wrap items-center gap-4 mb-5">
                                            <span className="text-[10px] font-mono text-[#001F3F] tracking-[0.4em] font-black">
                                                {project.id}
                                            </span>
                                            <span className="text-[9.5px] font-mono font-bold tracking-[0.3em] text-[#000000]/35 uppercase">
                                                {project.category}
                                            </span>
                                            <span className="text-[9.5px] font-mono text-[#000000]/20 tracking-wide ml-auto">
                                                {project.year}
                                            </span>
                                        </div>
                                        <h2 className="text-[clamp(1.8rem,3.5vw,3.2rem)] font-black uppercase tracking-tighter text-[#000000] leading-none mb-3">
                                            {project.title}
                                        </h2>
                                        <p className="text-[9.5px] font-mono font-bold tracking-[0.3em] text-[#000000]/30 uppercase">
                                            {project.client}
                                        </p>
                                    </div>

                                    {/* Metrics */}
                                    <div className="flex lg:flex-col gap-8 lg:gap-5 lg:items-end lg:pt-12">
                                        {project.metrics.map((m) => (
                                            <div key={m.label} className="lg:text-right">
                                                <p className="text-[clamp(1.3rem,2.2vw,2rem)] font-black text-[#000000] tracking-tight leading-none">
                                                    {m.value}
                                                </p>
                                                <p className="text-[9px] font-mono font-bold tracking-[0.3em] text-[#000000]/30 uppercase mt-1">
                                                    {m.label}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-[15px] text-[#000000]/65 leading-[1.75] max-w-[700px] border-l-2 border-[#001F3F]/30 pl-6 mb-10">
                                    {project.description}
                                </p>

                                {/* Stack + Specs */}
                                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-16">
                                    {/* Stack */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.stack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-[10px] font-bold border border-[#000000]/15 px-3 py-1.5 uppercase tracking-widest text-[#000000]/55"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    {/* Specs */}
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3" role="list">
                                        {project.specs.map((spec) => (
                                            <li key={spec} className="flex items-start gap-3 text-[12.5px] text-[#000000]/60 font-bold tracking-tight leading-snug">
                                                <div className="w-3 h-px bg-[#001F3F] mt-2 shrink-0" />
                                                {spec}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── MONOREPO PHILOSOPHY ── */}
            <section className="bg-[#001F3F] text-[#FFFFFF] py-20 md:py-32 lg:py-44">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-start">
                        <div>
                            <span className="block text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase mb-8">
                                [ Architektur-Philosophie ]
                            </span>
                            <h2 className="text-[clamp(2rem,4vw,3.8rem)] font-black text-[#FFFFFF] uppercase tracking-[-0.025em] leading-[0.95] mb-10">
                                Warum
                                <br />
                                <span className="italic font-normal">Monorepos?</span>
                            </h2>
                            <p className="text-[15px] text-[#FFFFFF]/65 leading-[1.75] border-l-2 border-[#FFFFFF]/25 pl-6">
                                Alle unsere Projekte entstehen als vollständige Monorepos — eine
                                einzige Source of Truth für Frontend, Backend, Datenbankschemas
                                und CI/CD-Pipelines. Keine Tool-Grenzen, keine
                                Versionskonflikte, vollständige Reproduzierbarkeit.
                            </p>
                        </div>

                        <div className="space-y-0 border-t border-[#FFFFFF]/10">
                            {MONOREPO_ADVANTAGES.map((item, i) => (
                                <div key={item.title} className="border-b border-[#FFFFFF]/10 py-8">
                                    <div className="flex items-start gap-5">
                                        <span className="text-[10px] font-mono font-black text-[#FFFFFF]/20 tracking-wider shrink-0 mt-0.5">
                                            0{i + 1}
                                        </span>
                                        <div>
                                            <h3 className="text-[12px] font-black uppercase tracking-[0.2em] text-[#FFFFFF] mb-2.5">
                                                {item.title}
                                            </h3>
                                            <p className="text-[13.5px] text-[#FFFFFF]/60 leading-relaxed">
                                                {item.body}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="bg-[#FFFFFF] py-20 md:py-32 border-t border-[#000000]">
                <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-12">
                        <div>
                            <h2 className="text-[clamp(2rem,4vw,3.8rem)] font-black text-[#000000] uppercase tracking-[-0.025em] leading-none mb-6">
                                Ihr Projekt als
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    nächstes Meisterwerk?
                                </span>
                            </h2>
                            <p className="text-[15px] text-[#000000]/55 max-w-[420px] leading-relaxed">
                                Wir bauen keine Websites. Wir bauen digitale Infrastruktur,
                                die Ihr Unternehmen in die nächste Liga bringt.
                            </p>
                        </div>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-3 bg-[#001F3F] text-[#FFFFFF] px-10 py-5 text-[11.5px] font-black tracking-[0.3em] uppercase hover:bg-[#000000] transition-colors duration-300 whitespace-nowrap"
                        >
                            Projekt anfragen
                            <ArrowRight />
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}

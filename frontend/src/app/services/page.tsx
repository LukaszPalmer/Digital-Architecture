// src/app/services/page.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Alle Leistungen — Palmer Digital Architecture",
    description:
        "Vollständige Übersicht aller digitalen Dienstleistungen: Next.js Engineering, Cloud-Infrastruktur, UI/UX Design, KI-Assistenten, Echtzeitsysteme und mehr.",
};

const ENGINEERING_SERVICES = [
    {
        id: "01",
        label: "FRONTEND",
        title: "Next.js Elite Core",
        description: "Server-First Applikations-Architektur auf Next.js — RSC, PPR, Server Actions und 0ms TBT. Lighthouse 100 ist der Standard.",
        href: "/services/nextjs-elite-core",
        iconPath: "/media/Next.js.svg",
        invertOnHover: true,
    },
    {
        id: "02",
        label: "DESIGN SYSTEM",
        title: "Tailwind Design Ops",
        description: "Atomic CSS Design Frameworks — skalierbare Token-Systeme, konsistente Komponenten und Zero-Runtime Overhead.",
        href: "/services/design-ops-system",
        iconPath: "/media/Tailwind CSS.svg",
        invertOnHover: false,
    },
    {
        id: "03",
        label: "PAYMENTS",
        title: "Stripe Fintech Pipelines",
        description: "Automatisierte Zahlungsströme, Subscription-Modelle und Webhook-Architekturen für skalierbare Commerce-Systeme.",
        href: "/services/fintech-pipelines",
        iconPath: "/media/Stripe-Blurple.svg",
        invertOnHover: false,
    },
    {
        id: "04",
        label: "ENTERPRISE UI",
        title: "Material UI Logic",
        description: "Enterprise Dashboard Komponenten — komplex, performant und vollständig typisiert für datenintensive Interfaces.",
        href: "/services/material-ui",
        iconPath: "/media/MaterialUI.svg",
        invertOnHover: false,
    },
    {
        id: "05",
        label: "INTERFACE",
        title: "UX/UI Design",
        description: "Minimalist Interface Construction — Figma-Systeme, die direkt in Code überführbar sind. Präzision als Designprinzip.",
        href: "/services/ux-ui-design",
        iconPath: "/media/Figma.svg",
        invertOnHover: false,
    },
    {
        id: "06",
        label: "BACKEND",
        title: "Node.js Core",
        description: "Skalierbare Backend-Infrastruktur — API-Architekturen, Middleware-Systeme und Event-Driven Services unter globalem Traffic.",
        href: "/services/nodejs-core",
        iconPath: "/media/Node.js.svg",
        invertOnHover: true,
    },
    {
        id: "07",
        label: "REAL-TIME",
        title: "Socket.IO Real-Time",
        description: "Echtzeit-Kommunikationssysteme — bidirektionale WebSocket-Verbindungen für Live-Dashboards, Chats und kollaborative Tools.",
        href: "/services/socketio-realtime",
        iconPath: "/media/Socket.IO.svg",
        invertOnHover: false,
    },
    {
        id: "08",
        label: "KI / AUTOMATION",
        title: "Chatbot & KI-Assistent",
        description: "Intelligente Konversations-Interfaces mit LLM-Integration — kontextbasierte Assistenten für Support, Onboarding und Vertrieb.",
        href: "/services/chatbot-assistant",
        iconPath: "/media/Chatbot.svg",
        invertOnHover: false,
    },
];

const INFRASTRUCTURE_SERVICES = [
    {
        id: "01",
        label: "DATABASE",
        title: "MongoDB Cloud Backbone",
        description: "Globale Atlas Cluster-Architektur mit automatisiertem Sharding, ACID-konformen Transaktionen und 99.99% Uptime SLA.",
        href: "/services/cloud-infrastructure",
        iconPath: "/media/MongoDB.svg",
        invertOnHover: false,
    },
    {
        id: "02",
        label: "DEPLOYMENT",
        title: "Vercel Edge",
        description: "Global High-Speed Deployment über Edge Network — ISR, Middleware und automatisierte Preview-Deployments für jede Umgebung.",
        href: "/vercel",
        iconPath: "/media/Vercel.svg",
        invertOnHover: true,
    },
    {
        id: "03",
        label: "HOSTING",
        title: "Railway Cloud",
        description: "Scalable Microservice Hosting — containerisierte Services mit automatischem Scaling, Secrets-Management und Zero-Downtime Deploys.",
        href: "/railway",
        iconPath: "/media/Railway.svg",
        invertOnHover: true,
    },
    {
        id: "04",
        label: "DATABASE",
        title: "PostgreSQL Core",
        description: "ACID-konforme relationale Datenbankarchitektur — MVCC, Row-Level Security, Advanced Indexing und Point-in-Time-Recovery.",
        href: "/services/postgresql",
        iconPath: "/media/PostgreSQL.svg",
        invertOnHover: false,
    },
    {
        id: "05",
        label: "ANALYTICS",
        title: "Google Analytics",
        description: "Data-Driven Analytics Architektur — Event-Tracking, Conversion-Funnels und Custom Dashboards für fundierte Geschäftsentscheidungen.",
        href: "/services/google-analytics",
        iconPath: "/media/GoogleAnalytics.svg",
        invertOnHover: false,
    },
    {
        id: "06",
        label: "SEO",
        title: "Google Indexierung",
        description: "Technische SEO & Search Visibility — strukturierte Daten, Core Web Vitals Optimierung und programmatische Indexierungssteuerung.",
        href: "/services/google-indexing",
        iconPath: "/media/GoogleSearch.svg",
        invertOnHover: false,
    },
];

function ArrowRight() {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
            aria-hidden="true"
        >
            <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
    );
}

export default function ServicesOverviewPage() {
    return (
        <main className="bg-[#FFFFFF] min-h-screen">

            {/* ── HERO ── */}
            <section className="bg-[#001F3F] pt-40 pb-24 md:pt-52 md:pb-32 border-b border-[#FFFFFF]/10 relative overflow-hidden">
                {/* Ghost Wordmark */}
                <div
                    className="absolute top-0 right-0 text-[clamp(100px,22vw,280px)] font-black leading-none select-none pointer-events-none text-[#FFFFFF] opacity-[0.03] tracking-tighter uppercase translate-y-[-10%] translate-x-[8%]"
                    aria-hidden="true"
                >
                    SRV
                </div>

                <div className="relative max-w-360 mx-auto px-4 md:px-8 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-end gap-12 lg:gap-24">
                        <div>
                            <span className="block text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/35 uppercase mb-8">
                                [ Leistungsübersicht ]
                            </span>
                            <h1 className="text-[clamp(3rem,7vw,6rem)] font-black text-[#FFFFFF] leading-[0.92] tracking-[-0.025em] uppercase">
                                Alle
                                <br />
                                <span className="italic font-normal text-[#FFFFFF]/55">
                                    Leistungen.
                                </span>
                            </h1>
                            <p className="mt-8 text-[15px] text-[#FFFFFF]/55 leading-relaxed max-w-lg border-l-2 border-[#FFFFFF]/20 pl-6">
                                Engineering, Infrastruktur, Design — vollständig integriert. Jede Leistung ist eine Architekturentscheidung, keine Feature-Liste.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-10 lg:gap-14 pb-1">
                            <div>
                                <span className="block text-[clamp(2.5rem,5vw,4rem)] font-black text-[#FFFFFF] leading-none tracking-tighter">
                                    14
                                </span>
                                <span className="block text-[10px] font-mono tracking-[0.35em] text-[#FFFFFF]/35 uppercase mt-1">
                                    Leistungen
                                </span>
                            </div>
                            <div>
                                <span className="block text-[clamp(2.5rem,5vw,4rem)] font-black text-[#FFFFFF] leading-none tracking-tighter">
                                    2
                                </span>
                                <span className="block text-[10px] font-mono tracking-[0.35em] text-[#FFFFFF]/35 uppercase mt-1">
                                    Bereiche
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ENGINEERING & DEVELOPMENT ── */}
            <section aria-labelledby="engineering-heading" className="py-20 md:py-32 lg:py-44 border-b border-[#000000]">
                <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                    {/* Section Header */}
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase block mb-8">
                                [ 01 — Engineering & Development ]
                            </span>
                            <h2
                                id="engineering-heading"
                                className="text-[clamp(2.2rem,5vw,4.2rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Frontend &
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    Backend.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[14px] text-[#000000]/60 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Von der Applikationsarchitektur bis zur Zahlungslogik — vollständig typisiert, server-first und produktionsbereit.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#000000]">
                        {ENGINEERING_SERVICES.map((service) => (
                            <Link
                                key={service.id}
                                href={service.href}
                                className="group relative p-8 md:p-10 border-r border-b border-[#000000] flex flex-col min-h-72 hover:bg-[#001F3F] transition-colors duration-500 cursor-crosshair"
                            >
                                {/* Category + ID */}
                                <div className="flex items-start justify-between mb-6">
                                    <span className="text-[9px] font-mono font-bold tracking-[0.4em] text-[#001F3F]/60 group-hover:text-[#FFFFFF]/40 uppercase transition-colors">
                                        {service.label}
                                    </span>
                                    <span className="text-[11px] font-black font-mono text-[#000000]/15 group-hover:text-[#FFFFFF]/15 transition-colors">
                                        [{service.id}]
                                    </span>
                                </div>

                                {/* Icon */}
                                <div className="w-10 h-10 mb-5 bg-[#000000]/5 group-hover:bg-[#FFFFFF]/10 flex items-center justify-center p-2 transition-colors duration-300">
                                    <Image
                                        src={service.iconPath}
                                        alt={`${service.title} Icon`}
                                        width={26}
                                        height={26}
                                        className={`object-contain transition-all duration-300 ${service.invertOnHover ? "group-hover:invert" : ""}`}
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-[clamp(0.95rem,1.8vw,1.2rem)] font-black tracking-tight uppercase leading-tight text-[#000000] group-hover:text-[#FFFFFF] transition-colors mb-3">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[12.5px] leading-relaxed text-[#000000]/55 group-hover:text-[#FFFFFF]/65 transition-colors mt-auto">
                                    {service.description}
                                </p>

                                {/* Arrow */}
                                <div className="mt-5 flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#001F3F]/40 group-hover:text-[#FFFFFF]/50 transition-colors">
                                    Details
                                    <ArrowRight />
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </section>

            {/* ── INFRASTRUKTUR ── */}
            <section aria-labelledby="infra-heading" className="bg-[#001F3F] py-20 md:py-32 lg:py-44 border-b border-[#FFFFFF]/10">
                <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                    {/* Section Header */}
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/35 uppercase block mb-8">
                                [ 02 — Infrastruktur & Cloud ]
                            </span>
                            <h2
                                id="infra-heading"
                                className="text-[clamp(2.2rem,5vw,4.2rem)] font-black text-[#FFFFFF] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Cloud &
                                <br />
                                <span className="italic font-normal text-[#FFFFFF]/50">
                                    Infrastruktur.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[14px] text-[#FFFFFF]/50 leading-relaxed max-w-sm border-l-2 border-[#FFFFFF]/20 pl-6">
                            Datenbanken, Deployments und Analytics — die technische Grundlage für Systeme, die unter Last nicht brechen.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#FFFFFF]/20">
                        {INFRASTRUCTURE_SERVICES.map((service) => (
                            <Link
                                key={service.id}
                                href={service.href}
                                className="group relative p-10 md:p-12 border-r border-b border-[#FFFFFF]/20 flex flex-col min-h-72 hover:bg-[#FFFFFF] transition-colors duration-500 cursor-crosshair"
                            >
                                {/* Category + ID */}
                                <div className="flex items-start justify-between mb-6">
                                    <span className="text-[9px] font-mono font-bold tracking-[0.4em] text-[#FFFFFF]/40 group-hover:text-[#001F3F]/50 uppercase transition-colors">
                                        {service.label}
                                    </span>
                                    <span className="text-[11px] font-black font-mono text-[#FFFFFF]/15 group-hover:text-[#001F3F]/15 transition-colors">
                                        [{service.id}]
                                    </span>
                                </div>

                                {/* Icon */}
                                <div className="w-10 h-10 mb-5 bg-[#FFFFFF]/10 group-hover:bg-[#001F3F]/10 flex items-center justify-center p-2 transition-colors duration-300">
                                    <Image
                                        src={service.iconPath}
                                        alt={`${service.title} Icon`}
                                        width={26}
                                        height={26}
                                        className={`object-contain transition-all duration-300 ${service.invertOnHover ? "invert group-hover:invert-0" : ""}`}
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-[clamp(0.95rem,1.8vw,1.25rem)] font-black tracking-tight uppercase leading-tight text-[#FFFFFF] group-hover:text-[#000000] transition-colors mb-3">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[12.5px] leading-relaxed text-[#FFFFFF]/55 group-hover:text-[#000000]/60 transition-colors mt-auto">
                                    {service.description}
                                </p>

                                {/* Arrow */}
                                <div className="mt-5 flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#FFFFFF]/35 group-hover:text-[#001F3F]/50 transition-colors">
                                    Details
                                    <ArrowRight />
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-20 md:py-32 bg-[#FFFFFF]">
                <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">
                    <div className="border border-[#000000] p-12 md:p-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
                        <div>
                            <span className="block text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase mb-5">
                                [ Projekt starten ]
                            </span>
                            <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-black text-[#000000] tracking-tight uppercase leading-tight">
                                Bereit für
                                <br />
                                <span className="italic font-normal text-[#001F3F]">Elite-Niveau?</span>
                            </h2>
                            <p className="mt-4 text-[14px] text-[#000000]/55 leading-relaxed max-w-sm">
                                Beschreib dein Vorhaben — wir melden uns innerhalb von 24 Stunden mit einer ersten Einschätzung.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 shrink-0">
                            <Link
                                href="/#contact"
                                className="inline-flex items-center gap-3 bg-[#001F3F] text-[#FFFFFF] px-10 py-5 text-[11px] font-black tracking-[0.3em] uppercase hover:bg-[#000000] transition-colors duration-300"
                            >
                                Anfrage stellen
                                <ArrowRight />
                            </Link>
                            <Link
                                href="/careers"
                                className="inline-flex items-center gap-3 border border-[#000000]/20 text-[#000000]/55 px-10 py-5 text-[11px] font-bold tracking-[0.3em] uppercase hover:border-[#001F3F] hover:text-[#001F3F] transition-colors duration-300"
                            >
                                Karriere ansehen
                                <ArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}

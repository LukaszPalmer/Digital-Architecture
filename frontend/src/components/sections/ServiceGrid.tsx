// src/components/sections/ServiceGrid.tsx
// Server Component — RSC-First, 0 TBT. Tooltip ist isolierte Client-Insel.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import Link from "next/link";
import { Tooltip } from "@/components/ui/Tooltip";
import ScrollReveal from "@/components/ui/ScrollReveal";
import RevealGrid from "@/components/ui/RevealGrid";

interface ServiceCard {
    id: string;
    label: string;
    title: string;
    description: string;
    points: string[];
    href: string;
    tooltip: { term: string; explanation: string; benefit: string };
}

const SERVICES: ServiceCard[] = [
    {
        id: "01",
        label: "WEBSEITEN & WEBAPPS",
        title: "Schnelle Webseiten, die überzeugen",
        description:
            "Moderne Auftritte, die in unter einer Sekunde laden — von der Unternehmensseite bis zur komplexen Webanwendung.",
        points: ["Bei Google ganz vorne", "Sofort geladen", "Auf jedem Gerät perfekt"],
        href: "/services/nextjs-elite-core",
        tooltip: {
            term: "Ladezeit unter 1 Sekunde",
            explanation:
                "Wir bauen Ihre Seite so, dass sie innerhalb einer Sekunde komplett sichtbar ist — auch auf dem Handy.",
            benefit: "Mehr Besucher bleiben, mehr Anfragen, mehr Umsatz.",
        },
    },
    {
        id: "02",
        label: "ONLINE-SHOPS",
        title: "E-Commerce, der verkauft",
        description:
            "Online-Shops mit Stripe, Rechnungsautomatik und Abo-Modellen — alles DSGVO-konform und buchhalterisch sauber.",
        points: ["Sichere Zahlungen", "Automatische Rechnungen", "Abo-Verwaltung"],
        href: "/services/fintech-pipelines",
        tooltip: {
            term: "Zahlungsabwicklung",
            explanation:
                "Ihre Kunden bezahlen mit Karte, PayPal oder Klarna — die Rechnung landet automatisch in Ihrer Buchhaltung.",
            benefit: "Kein manueller Aufwand, null Fehler bei der Abrechnung.",
        },
    },
    {
        id: "03",
        label: "KI & ASSISTENTEN",
        title: "Chatbots, die weiterhelfen",
        description:
            "KI-gestützte Assistenten, die Ihre Kunden rund um die Uhr beantworten — Support, Beratung und Onboarding automatisiert.",
        points: ["24/7 erreichbar", "Antwortet in Ihrem Stil", "Entlastet Ihr Team"],
        href: "/services/chatbot-assistant",
        tooltip: {
            term: "KI-Assistent",
            explanation:
                "Ein intelligenter Chatbot, der die typischen Kundenfragen selbstständig beantwortet und nur bei komplexen Fällen an Sie übergibt.",
            benefit: "Bis zu 70% weniger Supportaufwand für Ihr Team.",
        },
    },
    {
        id: "04",
        label: "CLOUD & HOSTING",
        title: "Infrastruktur ohne Ausfälle",
        description:
            "Sichere Cloud-Lösungen mit automatischen Backups, europäischen Servern und 99,99% Verfügbarkeit — rund um die Uhr überwacht.",
        points: ["Server in der EU", "Tägliche Backups", "Automatisches Skalieren"],
        href: "/services/cloud-infrastructure",
        tooltip: {
            term: "99,99% Verfügbarkeit",
            explanation:
                "Ihre Webseite ist praktisch immer online — weniger als 53 Minuten Ausfall pro Jahr, rund um die Uhr überwacht.",
            benefit: "Keine entgangenen Umsätze durch Ausfallzeiten.",
        },
    },
    {
        id: "05",
        label: "DESIGN & UX",
        title: "Interfaces, die man gerne nutzt",
        description:
            "Klares, modernes Design, das Ihre Marke stärkt und Ihre Besucher durch die Seite führt — vom ersten Klick bis zur Anfrage.",
        points: ["Markenstarkes Design", "Intuitive Bedienung", "Mehr Conversions"],
        href: "/services/ux-ui-design",
        tooltip: {
            term: "Conversion-Design",
            explanation:
                "Jedes Element ist so platziert, dass Besucher den Weg zur Kontaktaufnahme oder zum Kauf leicht finden.",
            benefit: "Deutlich mehr Anfragen bei gleich vielen Besuchern.",
        },
    },
    {
        id: "06",
        label: "SEO & ANALYTICS",
        title: "Bei Google gefunden werden",
        description:
            "Technische SEO, strukturierte Daten und verständliche Analytics-Dashboards — damit Sie sehen, was funktioniert.",
        points: ["Top-Platzierungen", "Klare Dashboards", "Messbarer Erfolg"],
        href: "/services/google-indexing",
        tooltip: {
            term: "Technische SEO",
            explanation:
                "Wir sorgen dafür, dass Google Ihre Seite versteht, schnell lädt und zu den richtigen Suchbegriffen anzeigt.",
            benefit: "Neue Kunden finden Sie — ohne Werbebudget.",
        },
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

export default function ServiceGrid() {
    return (
        <section
            aria-labelledby="services-heading"
            className="bg-[#FFFFFF] text-[#000000] py-20 md:py-32 lg:py-44 border-t border-[#000000]"
        >
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">

                {/* ── HEADER ── */}
                <ScrollReveal>
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <span
                                    className="w-2 h-2 bg-[#001F3F] animate-pulse-dot shrink-0"
                                    aria-hidden="true"
                                />
                                <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#001F3F] uppercase">
                                    [ Was wir für Sie bauen ]
                                </span>
                            </div>
                            <h2
                                id="services-heading"
                                className="text-[clamp(2.6rem,6vw,5rem)] font-black text-[#000000] tracking-[-0.025em] uppercase leading-[0.92]"
                            >
                                Digitale Lösungen
                                <br />
                                <span className="italic font-normal text-[#001F3F]">
                                    von A bis Z.
                                </span>
                            </h2>
                        </div>
                        <p className="text-[15px] text-[#000000]/65 leading-relaxed max-w-sm border-l-2 border-[#001F3F] pl-6">
                            Keine Baukasten-Lösungen. Jedes Projekt wird individuell für Sie
                            entwickelt — von der ersten Idee bis zum Go-Live und darüber hinaus.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ── SERVICE GRID ── */}
                <RevealGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#000000]">
                    {SERVICES.map((service) => (
                        <Link
                            key={service.id}
                            href={service.href}
                            className="group relative p-10 md:p-12 border-r border-b border-[#000000] flex flex-col min-h-130 transition-colors duration-300 hover:bg-[#001F3F] cursor-crosshair"
                        >
                            {/* Large ghost ID */}
                            <span
                                aria-hidden="true"
                                className="absolute top-6 right-8 text-[70px] md:text-[90px] font-black leading-none text-[#001F3F]/5 group-hover:text-[#FFFFFF]/8 tracking-tighter select-none transition-colors duration-300"
                            >
                                {service.id}
                            </span>

                            {/* Label row with pulse dot */}
                            <div className="flex items-center gap-2.5 mb-10 relative">
                                <span
                                    aria-hidden="true"
                                    className="w-1.5 h-1.5 bg-[#001F3F] group-hover:bg-[#FFFFFF] transition-colors shrink-0"
                                />
                                <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#001F3F] group-hover:text-[#FFFFFF]/55 transition-colors uppercase">
                                    {service.label}
                                </span>
                            </div>

                            {/* Title with Tooltip */}
                            <h3 className="text-[clamp(1.3rem,2.5vw,1.8rem)] font-black mb-6 leading-tight transition-colors uppercase tracking-tighter text-[#000000] group-hover:text-[#FFFFFF] relative">
                                <Tooltip
                                    term={service.tooltip.term}
                                    explanation={service.tooltip.explanation}
                                    benefit={service.tooltip.benefit}
                                >
                                    {service.title}
                                </Tooltip>
                            </h3>

                            {/* Description */}
                            <p className="text-[14px] leading-relaxed text-[#000000]/65 group-hover:text-[#FFFFFF]/80 transition-colors border-l-2 border-[#001F3F] group-hover:border-[#FFFFFF]/40 pl-5 mb-10 relative">
                                {service.description}
                            </p>

                            {/* Benefit Points */}
                            <div className="mt-auto pt-8 border-t border-[#000000]/10 group-hover:border-[#FFFFFF]/20 transition-colors">
                                <ul className="space-y-3" role="list">
                                    {service.points.map((point) => (
                                        <li
                                            key={point}
                                            className="flex items-center gap-3 text-[11px] font-black tracking-[0.15em] uppercase"
                                        >
                                            <div className="w-3 h-px bg-[#001F3F] group-hover:bg-[#FFFFFF] group-hover:w-5 shrink-0 transition-all duration-300" />
                                            <span className="text-[#000000]/65 group-hover:text-[#FFFFFF]/85 transition-colors">
                                                {point}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Bottom CTA arrow */}
                                <div className="mt-8 flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] uppercase text-[#001F3F]/50 group-hover:text-[#FFFFFF] transition-colors">
                                    <span>Mehr erfahren</span>
                                    <span className="inline-block group-hover:translate-x-1.5 transition-transform duration-300">
                                        <ArrowRight />
                                    </span>
                                </div>
                            </div>

                            {/* Corner accent */}
                            <div
                                aria-hidden="true"
                                className="absolute top-0 left-0 w-0 h-0 border-t-0 border-l-0 group-hover:border-t-[10px] group-hover:border-l-[10px] border-t-[#FFFFFF]/60 border-l-[#FFFFFF]/60 transition-all duration-300"
                            />
                        </Link>
                    ))}
                </RevealGrid>

                {/* ── FOOTER CTA LINE ── */}
                <ScrollReveal delay={200}>
                    <div className="mt-16 md:mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-10 border-t border-[#000000]/15">
                        <p className="text-[13px] text-[#000000]/55 leading-relaxed max-w-lg">
                            Nicht sicher, was Sie genau brauchen?
                            <br />
                            <span className="text-[#000000]/80 font-medium">
                                Wir beraten Sie unverbindlich und finden die passende Lösung.
                            </span>
                        </p>
                        <Link
                            href="/services"
                            className="group inline-flex items-center gap-3 text-[11px] font-black tracking-[0.25em] uppercase text-[#001F3F] border-b-2 border-[#001F3F] pb-1.5 hover:text-[#000000] hover:border-[#000000] transition-colors"
                        >
                            Alle Leistungen ansehen
                            <span className="inline-block group-hover:translate-x-1.5 transition-transform duration-300">
                                <ArrowRight />
                            </span>
                        </Link>
                    </div>
                </ScrollReveal>

            </div>
        </section>
    );
}

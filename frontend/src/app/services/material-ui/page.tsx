// src/app/services/material-ui/page.tsx
// Static route — takes precedence over [slug]/page.tsx.
// RSC-First, 0 TBT. Design-Dogma: #001F3F / #FFFFFF / #000000, 0px border-radius.

import { Metadata } from "next";
import DashHero from "@/components/sections/DashHero";
import DashProblem from "@/components/sections/DashProblem";
import DashCapabilities from "@/components/sections/DashCapabilities";
import DashArchitecture from "@/components/sections/DashArchitecture";
import DashCodeExamples from "@/components/sections/DashCodeExamples";
import DashProcess from "@/components/sections/DashProcess";
import DashUseCases from "@/components/sections/DashUseCases";
import DashFAQ from "@/components/sections/DashFAQ";
import DashCTA from "@/components/sections/DashCTA";
import { FAQ_ITEMS } from "@/components/sections/DashFAQ";

/* ── SEO METADATA ── */
export const metadata: Metadata = {
    title: "Enterprise Dashboard Entwicklung Düsseldorf — Material UI & React Architektur",
    description:
        "Enterprise Dashboard Entwicklung mit Material UI Logic in Düsseldorf: Performante Datentabellen, Analytics-Dashboards, RBAC und Echtzeit-Visualisierungen. Zielt auf eine Optimierung der Arbeitsprozesse und langfristige Skalierbarkeit der Benutzeroberfläche ab.",
    keywords: [
        "Enterprise Dashboard Entwicklung",
        "Material UI Entwickler",
        "Dashboard Entwicklung Düsseldorf",
        "React Dashboard Architektur",
        "Enterprise Software Design",
        "Material UI Expertise",
        "Admin Panel Entwicklung",
        "Datenvisualisierung Enterprise",
        "Analytics Dashboard React",
        "RBAC Dashboard System",
        "Business Intelligence Dashboard",
        "MUI DataGrid Pro",
        "Dashboard Performance Optimierung",
        "UI Architektur Enterprise",
        "React Entwickler Deutschland",
        "Material UI Custom Theme",
        "Dashboard Komponenten",
        "Enterprise UI Düsseldorf",
    ],
    alternates: { canonical: "https://palmer-digital.de/services/material-ui" },
    openGraph: {
        title: "Enterprise Dashboard Entwicklung Düsseldorf | Material UI Logic — Palmer Digital",
        description:
            "Material UI Dashboards mit Enterprise-Architektur: Performante Datentabellen, RBAC, Echtzeit-Visualisierungen und Custom Theme Engine. Dashboard-Entwicklung für Unternehmen in Düsseldorf und Deutschland.",
        url: "https://palmer-digital.de/services/material-ui",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Enterprise Dashboard Entwicklung | Material UI Logic — Düsseldorf",
        description:
            "Performante Enterprise-Dashboards mit Material UI: DataGrid Pro, RBAC, Echtzeit-Daten und Custom Theme Engine für Unternehmen.",
    },
};

/* ── JSON-LD STRUCTURED DATA ── */
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Palmer Digital — Material UI Logic: Enterprise Dashboard Entwicklung",
    description:
        "Enterprise Dashboard Entwicklung mit Material UI in Düsseldorf. Performante Datentabellen, Analytics-Dashboards, RBAC-Systeme und Echtzeit-Visualisierungen — konzipiert für eine langfristige Skalierbarkeit der Benutzeroberfläche.",
    url: "https://palmer-digital.de/services/material-ui",
    provider: {
        "@type": "Organization",
        name: "Palmer Digital",
        url: "https://palmer-digital.de",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Düsseldorf",
            addressRegion: "Nordrhein-Westfalen",
            addressCountry: "DE",
        },
    },
    serviceType: "Enterprise Dashboard Entwicklung",
    areaServed: [
        {
            "@type": "City",
            name: "Düsseldorf",
        },
        {
            "@type": "Country",
            name: "Deutschland",
        },
    ],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Material UI Enterprise Dashboard Services",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Enterprise Dashboard Entwicklung mit Material UI",
                    description:
                        "Hochperformante Dashboard-Systeme mit MUI DataGrid Pro, React Query, RBAC und Echtzeit-Datenvisualisierung. Zielt auf eine Optimierung der Arbeitsprozesse in Unternehmen ab.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Custom MUI Theme Engineering & UI-Architektur",
                    description:
                        "Brand-Token-System mit vollständigen Component-Overrides. Das Material-Look wird durch Ihre Unternehmensidentität ersetzt — konzipiert für langfristige Skalierbarkeit.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Dashboard Performance Optimierung & Migration",
                    description:
                        "Analyse und Optimierung bestehender Dashboard-Systeme. DOM-Reduktion, Server-Side Rendering und selektive Hydrierung für maximale Enterprise-Performance.",
                },
            },
        ],
    },
    specialty: [
        "Enterprise Dashboard Entwicklung",
        "Material UI Architektur",
        "Enterprise Software Design",
        "Dashboard Performance Optimierung",
        "RBAC UI-Systeme",
        "React Dashboard Komponenten",
        "Custom MUI Theme Engineering",
        "Datenvisualisierung Enterprise",
        "UI Architektur Düsseldorf",
    ],
    knowsAbout: [
        "Material UI",
        "MUI DataGrid Pro",
        "React Query",
        "RBAC Systems",
        "WebSocket Real-Time",
        "React Server Components",
        "Enterprise Dashboard Design",
        "Custom Theme Provider",
        "Virtual Scrolling",
        "TypeScript",
        "Recharts",
        "Zod Schema Validation",
    ],
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
        },
    })),
};

export default function MaterialUIPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <main className="bg-[#FFFFFF] min-h-screen">
                <article>
                    <DashHero />
                    <DashProblem />
                    <DashCapabilities />
                    <DashArchitecture />
                    <DashCodeExamples />
                    <DashProcess />
                    <DashUseCases />
                    <DashFAQ />
                    <DashCTA />
                </article>
            </main>
        </>
    );
}

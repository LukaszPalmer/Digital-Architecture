// src/app/services/nextjs-elite-core/page.tsx
// Static route — takes precedence over [slug]/page.tsx.
// RSC-First, 0 TBT. Design-Dogma: #001F3F / #FFFFFF / #000000, 0px border-radius.

import { Metadata } from "next";
import NextHero from "@/components/sections/NextHero";
import NextProblem from "@/components/sections/NextProblem";
import NextCapabilities from "@/components/sections/NextCapabilities";
import NextArchitecture from "@/components/sections/NextArchitecture";
import NextProcess from "@/components/sections/NextProcess";
import NextUseCases from "@/components/sections/NextUseCases";
import NextFAQ from "@/components/sections/NextFAQ";
import NextCTA from "@/components/sections/NextCTA";

/* ── SEO METADATA ── */
export const metadata: Metadata = {
    title: "Professionelle Website erstellen lassen | Next.js Webentwicklung",
    description:
        "Professionelle Website erstellen lassen mit Next.js — Ladezeit optimieren, Lighthouse 100 und messbar mehr Umsatz. Ihre Webagentur für moderne Webentwicklung.",
    keywords: [
        "Professionelle Website erstellen lassen",
        "Next.js Webentwicklung",
        "Website zu langsam",
        "Ladezeit optimieren",
        "Website lädt zu langsam",
        "Kosten professionelle Website",
        "Webagentur Webdesign",
        "Moderne Webanwendung programmieren",
        "Next.js Agentur Deutschland",
        "React Server Components",
        "Next.js App Router",
        "Performance Optimierung Website",
        "Lighthouse 100",
        "Server Side Rendering",
        "Static Site Generation",
        "Edge-Runtime",
        "Incremental Static Regeneration",
    ],
    alternates: { canonical: "https://palmer-digital.de/services/nextjs-elite-core" },
    openGraph: {
        title: "Professionelle Website erstellen lassen — Next.js Elite Core | Palmer Digital",
        description:
            "Ihre Website lädt zu langsam? Wir optimieren Ladezeiten mit Next.js — Server Components, Edge-Runtime und Lighthouse 100 als Standard.",
        url: "https://palmer-digital.de/services/nextjs-elite-core",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Professionelle Website erstellen lassen | Next.js Elite Core",
        description:
            "Ladezeit optimieren mit Next.js — Server-First Architektur für maximale Performance und messbar mehr Umsatz.",
    },
};

/* ── JSON-LD STRUCTURED DATA ── */
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Palmer Digital — Next.js Elite Core",
    description:
        "Professionelle Website erstellen lassen mit Next.js. Wir sind Ihre Webagentur für moderne Webanwendungen — Ladezeit optimieren, Lighthouse 100 und messbar mehr Umsatz durch Server-First Architektur.",
    url: "https://palmer-digital.de/services/nextjs-elite-core",
    provider: {
        "@type": "Organization",
        name: "Palmer Digital",
        url: "https://palmer-digital.de",
        address: {
            "@type": "PostalAddress",
            addressCountry: "DE",
        },
    },
    serviceType: "Webentwicklung",
    areaServed: {
        "@type": "Country",
        name: "Deutschland",
    },
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Next.js Webentwicklung Services",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Next.js Elite Core — Professionelle Website erstellen lassen",
                    description:
                        "Moderne Webanwendung programmieren mit Next.js App Router, React Server Components und Edge-Runtime. Ladezeit optimieren auf Lighthouse 100.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Performance Optimierung & Ladezeit-Audit",
                    description:
                        "Website zu langsam? Wir analysieren Core Web Vitals und optimieren LCP, TBT und CLS für maximale Conversion.",
                },
            },
        ],
    },
    specialty: [
        "Next.js Webentwicklung",
        "Webagentur",
        "Professionelle Website erstellen lassen",
        "Ladezeit optimieren",
        "Moderne Webanwendung programmieren",
        "React Server Components",
        "Static Site Generation",
        "Edge-Runtime",
        "Incremental Static Regeneration",
        "Webdesign",
    ],
    knowsAbout: [
        "Next.js",
        "React Server Components",
        "App Router",
        "Partial Pre-Rendering",
        "Edge Middleware",
        "Static Site Generation",
        "Incremental Static Regeneration",
        "Core Web Vitals",
        "Lighthouse Optimierung",
        "TypeScript",
    ],
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Was kostet es, eine professionelle Website erstellen zu lassen?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Die Kosten für eine professionelle Website mit Next.js beginnen bei individuellen Projektanforderungen. Eine statische Corporate-Website liegt in einem anderen Bereich als eine komplexe Webanwendung mit Datenbank-Anbindung. Wir erstellen ein transparentes Angebot nach einem kostenlosen Erstgespräch.",
            },
        },
        {
            "@type": "Question",
            name: "Warum ist meine Website zu langsam und wie kann ich die Ladezeit optimieren?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Häufige Ursachen für langsame Websites sind zu viel Client-side JavaScript, nicht optimierte Bilder, fehlende Server-Side Rendering und schlechtes Caching. Mit Next.js und React Server Components reduzieren wir das JavaScript-Bundle um bis zu 90% und optimieren LCP auf unter 0,8 Sekunden.",
            },
        },
        {
            "@type": "Question",
            name: "Was ist der Vorteil von Next.js gegenüber WordPress oder anderen CMS?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Next.js liefert durch Static Site Generation, Server Components und Edge-Runtime deutlich schnellere Ladezeiten als WordPress. Während WordPress-Seiten bei jedem Aufruf PHP-Code ausführen müssen, liefert Next.js vorgerenderte HTML-Seiten direkt vom CDN — das bedeutet Ladezeiten unter einer Sekunde.",
            },
        },
        {
            "@type": "Question",
            name: "Was bedeutet Lighthouse Score 100 und warum ist das wichtig?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Der Google Lighthouse Score bewertet Performance, Barrierefreiheit, Best Practices und SEO einer Website auf einer Skala von 0 bis 100. Ein Score von 100/100/100/100 bedeutet perfekte Werte in allen Kategorien — das verbessert Ihr Google-Ranking, die User Experience und damit direkt Ihre Conversion-Rate.",
            },
        },
        {
            "@type": "Question",
            name: "Wie lange dauert es, eine moderne Webanwendung programmieren zu lassen?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Eine professionelle Next.js-Website kann je nach Umfang in 2 bis 8 Wochen fertiggestellt werden. Der Prozess umfasst Performance-Audit, Architektur-Design, Implementierung mit React Server Components und eine abschließende Lighthouse-Verifikation mit garantierten Scores.",
            },
        },
    ],
};

export default function NextjsEliteCorePage() {
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
                    <NextHero />
                    <NextProblem />
                    <NextCapabilities />
                    <NextArchitecture />
                    <NextProcess />
                    <NextUseCases />
                    <NextFAQ />
                    <NextCTA />
                </article>
            </main>
        </>
    );
}

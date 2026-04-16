// src/app/vercel/page.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: #001F3F / #FFFFFF / #000000, 0px border-radius.
// SEO: Geo-SEO Duesseldorf/NRW, ProfessionalService + FAQPage JSON-LD.
// Topic: Vercel Edge — Global High-Speed Deployment (StoryBrand PAS + Bridge).

import type { Metadata } from "next";
import VercelHero from "@/components/sections/VercelHero";
import VercelProblem from "@/components/sections/VercelProblem";
import VercelCapabilities from "@/components/sections/VercelCapabilities";
import VercelArchitecture from "@/components/sections/VercelArchitecture";
import VercelCodeExamples from "@/components/sections/VercelCodeExamples";
import VercelProcess from "@/components/sections/VercelProcess";
import VercelUseCases from "@/components/sections/VercelUseCases";
import VercelFAQ from "@/components/sections/VercelFAQ";
import VercelCTA from "@/components/sections/VercelCTA";

/* ── SEO METADATA ── */
export const metadata: Metadata = {
    title: "Vercel Edge — Global High-Speed Deployment | Vercel Agentur Duesseldorf",
    description:
        "Vercel Edge Deployment aus Duesseldorf — globale Ladezeiten unter einer Sekunde, TTFB unter 10ms und Lighthouse 100 als Standard. Edge Runtime statt Node.js Cold Starts, Middleware-Personalisierung, geografisches Routing und Partial Prerendering fuer Onlineshops, SaaS und internationale Marken. Schluss mit weissen Seiten, Server-Standort-Problemen und Core-Web-Vitals-Strafen. Web-Performance-Agentur fuer Unternehmen in NRW.",
    keywords: [
        // Laien & Business-Fokus (Problem-Loesung)
        "webseite extrem langsam im ausland",
        "ladezeit verbessern fuer google",
        "onlineshop geschwindigkeit optimieren",
        "weisse seite beim laden verhindern",
        "webseite weltweit schnell machen",
        "warum ist meine seite in den usa langsam",
        "google ranking verbessern ladezeit",
        "webseite fuer internationale kunden optimieren",
        "server-standort probleme loesen",
        "hosting fuer globale reichweite",
        // Nutzen- & Performance-Fokus
        "blitzschnelle webseiten loesungen",
        "core web vitals optimieren lassen",
        "time to first byte senken",
        "ladezeiten unter 1 sekunde",
        "globale verfuegbarkeit ohne verzoegerung",
        "conversion rate steigern durch speed",
        "hochverfuegbare infrastruktur duesseldorf",
        "maximale performance fuer webanwendungen",
        // Experten & Tech-Fokus
        "Vercel Edge Runtime vs Node.js",
        "Middleware Optimierung Next.js",
        "Static Site Generation vs Edge Rendering",
        "Global Content Delivery Network",
        "Edge Caching Strategien",
        "Serverless Functions an der Edge",
        "Dynamic Content at the Edge",
        "Cold Start Eliminierung",
        "Partial Prerendering Next.js 15",
        "Vercel Speed Insights Core Web Vitals",
        // Regionaler Bezug
        "Vercel Experten Duesseldorf",
        "Web-Performance Agentur NRW",
        "Cloud-Infrastruktur Beratung Duesseldorf",
        "High-Speed Webentwicklung Duesseldorf",
    ],
    alternates: { canonical: "https://palmer-digital.de/vercel" },
    openGraph: {
        title: "Vercel Edge — Global High-Speed Deployment | Duesseldorf",
        description:
            "Globales Edge-Deployment fuer Next.js aus Duesseldorf — Ladezeiten unter 1s, TTFB unter 10ms und Lighthouse 100. Edge Runtime, Middleware-Personalisierung und geografisches Routing fuer Onlineshops, SaaS und internationale Marken in NRW.",
        url: "https://palmer-digital.de/vercel",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Vercel Edge — Global High-Speed Deployment | Duesseldorf",
        description:
            "Schluss mit langsamen Seiten im Ausland. Edge Deployment, Middleware-Personalisierung und Lighthouse 100 fuer global skalierende Unternehmen aus Duesseldorf/NRW.",
    },
};

/* ── JSON-LD STRUCTURED DATA — ProfessionalService ── */
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Palmer Digital — Vercel Edge: Global High-Speed Deployment",
    description:
        "Cloud Infrastructure Deployment und Global Speed Optimization aus Duesseldorf. Wir designen, deployen und betreiben Vercel-Edge-Infrastrukturen fuer Next.js-Anwendungen, Onlineshops und SaaS-Plattformen. Edge Runtime, geografisches Routing, Middleware-Personalisierung, Partial Prerendering, Immutable Deployments und Real-User-Monitoring der Core Web Vitals — fuer Unternehmen in Duesseldorf, NRW und ganz Deutschland.",
    url: "https://palmer-digital.de/vercel",
    provider: {
        "@type": "Organization",
        name: "Palmer Digital",
        url: "https://palmer-digital.de",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Duesseldorf",
            addressRegion: "Nordrhein-Westfalen",
            addressCountry: "DE",
        },
    },
    serviceType: "Cloud Infrastructure Deployment & Global Speed Optimization",
    areaServed: [
        { "@type": "City", name: "Duesseldorf" },
        { "@type": "State", name: "Nordrhein-Westfalen" },
        { "@type": "Country", name: "Deutschland" },
        { "@type": "AdministrativeArea", name: "Europaeische Union" },
        { "@type": "AdministrativeArea", name: "Global" },
    ],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Vercel Edge & Web-Performance Leistungen",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Vercel Edge Deployment & Infrastruktur-Setup",
                    description:
                        "Komplettes Vercel-Projekt-Setup mit Custom Domains, Zero-Config TLS, Environment-Variablen und CI/CD via Git-Integration. Edge Runtime aktiviert, Cold Starts eliminiert, globale Auslieferung ueber 300+ Edge-Nodes.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Core Web Vitals Optimization & TTFB Reduktion",
                    description:
                        "Lighthouse-Audit, LCP/INP/CLS-Optimierung und TTFB-Reduktion auf unter 10ms durch Edge Caching und Partial Prerendering. Messbare Verbesserungen aus Real-User-Monitoring ueber Vercel Speed Insights.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Edge Middleware & Geo-Routing",
                    description:
                        "Next.js Middleware fuer geografisches Routing, Locale-Detection, A/B-Tests und Edge-Auth. Personalisierung passiert vor dem ersten Byte — kein Flicker, kein Layout-Shift, keine Origin-Last.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Global CDN & Edge Caching Strategie",
                    description:
                        "Cache-Header-Konfiguration, ISR-Revalidation, stale-while-revalidate und Regional Edge Caching. Jeder Request landet im physisch naechstgelegenen Rechenzentrum, egal ob Nutzer aus Duesseldorf, New York oder Tokio zugreift.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Partial Prerendering & Streaming UI",
                    description:
                        "Statische Shell sofort vom Edge, dynamische Slots streamen asynchron nach. Ein einziger Request ohne Waterfalls — Next.js 15 Partial Prerendering fuer Conversion-kritische Onlineshops und SaaS-Dashboards.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Vercel-Beratung & Performance-Audit Duesseldorf",
                    description:
                        "Architektur-Reviews, Rendering-Strategie-Design und Performance-Budgets. Persoenlich vor Ort in Duesseldorf oder remote fuer Unternehmen in ganz NRW.",
                },
            },
        ],
    },
    specialty: [
        "Vercel Edge Network Deployment",
        "Next.js 15 Partial Prerendering",
        "Edge Runtime vs Node.js Runtime",
        "Edge Middleware & Geo-Routing",
        "Core Web Vitals Optimization",
        "Time to First Byte Reduktion",
        "Global CDN & Edge Caching",
        "Cold Start Eliminierung",
        "Vercel Agentur Duesseldorf",
        "Web-Performance Agentur NRW",
        "High-Speed Webentwicklung Duesseldorf",
    ],
    knowsAbout: [
        "Vercel Edge Network",
        "Vercel Edge Functions",
        "Vercel Edge Runtime (V8 Isolates)",
        "Vercel Speed Insights",
        "Next.js 15 App Router",
        "React Server Components",
        "Partial Prerendering (PPR)",
        "Incremental Static Regeneration (ISR)",
        "Edge Middleware",
        "Geo-based Routing",
        "Locale Detection Middleware",
        "Cache-Control & stale-while-revalidate",
        "Core Web Vitals (LCP, INP, CLS)",
        "Real User Monitoring",
        "DDoS Protection & WAF",
        "Zero-Config TLS",
        "Immutable Deployments",
        "Preview Environments",
        "Anycast Routing",
        "HTTP/3 & QUIC",
    ],
};

/* ── JSON-LD STRUCTURED DATA — FAQPage ── */
const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Warum ist meine Webseite trotz gutem Hosting im Ausland langsam?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Weil klassisches Hosting einen einzigen Serverstandort nutzt — typisch Frankfurt, Amsterdam oder Dublin. Ein Nutzer aus New York muss fuer jeden Seitenaufruf ueber den Atlantik: ~90ms Latenz allein fuer den ersten TCP-Handshake, nochmal ~90ms fuer das erste Byte. Vor dem ersten Pixel sind bereits 300–500ms verloren. Vercel Edge loest das physikalisch: Ueber 300 Edge-Nodes weltweit beantworten die Anfrage im physisch naechstgelegenen Rechenzentrum. TTFB in New York, Tokio oder Sydney sinkt auf unter 50ms.",
            },
        },
        {
            "@type": "Question",
            name: "Was ist der Unterschied zwischen einem CDN und Vercel Edge?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ein klassisches CDN (Cloudflare, Akamai, Fastly) cached statische Assets — Bilder, CSS, JS-Bundles — am Edge. Dynamische HTML-Antworten und API-Calls muessen weiterhin zum Origin-Server. Vercel Edge geht einen Schritt weiter: Auch dynamische Funktionen (Auth, Personalisierung, A/B-Tests, Geo-Routing) laufen als Edge Functions direkt am naechstgelegenen Node — in V8 Isolates ohne Cold Start. Kombiniert mit Partial Prerendering wird sogar HTML teils statisch vom Edge geliefert und teils gestreamt. Ergebnis: CDN-Geschwindigkeit fuer dynamische Inhalte.",
            },
        },
        {
            "@type": "Question",
            name: "Wie viel Umsatz verliere ich durch 1 Sekunde zusaetzliche Ladezeit?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Belastbare Studien von Google, Amazon und Akamai zeigen konsistent: Jede zusaetzliche Sekunde Ladezeit senkt die Conversion Rate um 7–20 %. Amazon hat 100ms zusaetzliche Latenz mit 1 % Umsatzverlust korreliert. Walmart sah pro 1s-Verbesserung +2 % Conversion. Bei einem Onlineshop mit 500.000 EUR Jahresumsatz und 3 Sekunden Ladezeit bedeutet eine Reduktion auf unter 1 Sekunde realistisch +30.000 bis +60.000 EUR zusaetzlichen Umsatz — jedes Jahr. Speed ist kein Nice-to-have, sondern ein direkter Umsatz-Hebel.",
            },
        },
        {
            "@type": "Question",
            name: "Was ist der Unterschied zwischen Vercel Edge Runtime und Node.js Runtime?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Die Node.js Runtime ist eine vollwertige V8-Instanz mit allen Node-APIs — startet typisch in 200–1000ms (Cold Start), ideal fuer Datenbank-Driver oder CPU-intensive Tasks. Die Edge Runtime laeuft in V8 Isolates auf Basis der Web Standards (fetch, Request, Response, Web Crypto) — startet in unter 1ms ohne Cold Start, dafuer eingeschraenktes API-Set. Fuer Middleware, Auth-Checks, Geo-Routing und schnelle API-Antworten ist die Edge Runtime immer die bessere Wahl. Fuer PDF-Generierung, Mongoose-Queries oder fs-Zugriffe bleibt Node.js die Wahl — beide lassen sich in einer Next.js-App mischen.",
            },
        },
        {
            "@type": "Question",
            name: "Kann ich meine bestehende Webseite ohne Downtime zu Vercel migrieren?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ja. Wir migrieren in vier Phasen ohne Produktionsstop: Erstens Rendering-Strategie-Audit und Identifikation statischer, hybrider und dynamischer Routen. Zweitens Parallel-Deployment auf einer Preview-Domain (z.B. staging.ihre-domain.de) — die Produktion bleibt unberuehrt. Drittens Lasttest mit k6 oder Artillery gegen das Preview-Environment, Validierung der Core Web Vitals aus Real-User-Monitoring. Viertens DNS-Cutover via CNAME-Swap mit Zero-Downtime — Vercel uebernimmt automatisch TLS-Provisionierung. Kunden in Duesseldorf und NRW erhalten auf Wunsch Vor-Ort-Betreuung waehrend des Cutovers.",
            },
        },
    ],
};

export default function VercelEdgeDeploymentPage() {
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
                    <VercelHero />
                    <VercelProblem />
                    <VercelCapabilities />
                    <VercelArchitecture />
                    <VercelCodeExamples />
                    <VercelProcess />
                    <VercelUseCases />
                    <VercelFAQ />
                    <VercelCTA />
                </article>
            </main>
        </>
    );
}

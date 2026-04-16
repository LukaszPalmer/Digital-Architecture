// src/app/services/nodejs-core/page.tsx
// Static route — takes precedence over [slug]/page.tsx.
// RSC-First, 0 TBT. Design-Dogma: #001F3F / #FFFFFF / #000000, 0px border-radius.
// SEO: Geo-SEO Duesseldorf/NRW, ProfessionalService + FAQPage JSON-LD.

import { Metadata } from "next";
import NodeHero from "@/components/sections/NodeHero";
import NodeProblem from "@/components/sections/NodeProblem";
import NodeCapabilities from "@/components/sections/NodeCapabilities";
import NodeArchitecture from "@/components/sections/NodeArchitecture";
import NodeCodeExamples from "@/components/sections/NodeCodeExamples";
import NodeProcess from "@/components/sections/NodeProcess";
import NodeUseCases from "@/components/sections/NodeUseCases";
import NodeFAQ from "@/components/sections/NodeFAQ";
import NodeCTA from "@/components/sections/NodeCTA";

/* ── SEO METADATA ── */
export const metadata: Metadata = {
    title: "Node.js Core & Skalierbare Backend Infrastruktur | Backend Agentur Duesseldorf",
    description:
        "Hochleistungs-Backend mit Node.js aus Duesseldorf — skalierbare Infrastruktur fuer Onlineshops, SaaS und Marktplaetze. Event-Loop-Optimierung, Microservices, Vercel Edge Functions, Redis-Caching, Connection Pooling. Schluss mit Server-Crashes bei Traffic-Spitzen. Backend-Entwicklung fuer Hochlast-Systeme in NRW.",
    keywords: [
        "webseite stuerzt ab bei vielen besuchern",
        "schnelle serverloesung fuer onlineshop",
        "backend entwickeln lassen",
        "stabile infrastruktur fuer apps",
        "warum ist meine webseite langsam server",
        "hochleistungssysteme fuer unternehmen",
        "webanwendung skalieren",
        "externe entwickler fuer backend systeme",
        "viele nutzer gleichzeitig verarbeiten",
        "datenbank-performance verbessern",
        "ausfallsicheres hosting und backend",
        "ladezeit reduzieren durch node.js",
        "echtzeit-datenverarbeitung vorteile",
        "kosteneffiziente server-architektur",
        "hohe verfuegbarkeit garantieren",
        "backend-wartung und optimierung",
        "sichere datenspeicherung loesungen",
        "skalierbarkeit im e-commerce",
        "Node.js Event Loop Optimierung",
        "Microservices Architektur vs Monolith",
        "Non-blocking I/O Vorteile",
        "REST vs GraphQL API Entwicklung",
        "Redis Caching Strategien",
        "Horizontal Scaling mit Docker und Kubernetes",
        "Serverless Functions Vercel Edge",
        "PostgreSQL und MongoDB Skalierung",
        "Node.js Agentur Duesseldorf",
        "Backend Entwickler NRW",
        "Software-Architekt Duesseldorf",
        "Infrastruktur-Beratung Duesseldorf",
    ],
    alternates: { canonical: "https://palmer-digital.de/services/nodejs-core" },
    openGraph: {
        title: "Node.js Core & Skalierbare Backend Infrastruktur | Backend Agentur Duesseldorf",
        description:
            "Backends, die mit dem Erfolg mitwachsen — Event-Loop-Optimierung, Microservices, Vercel Edge Functions und Redis-Caching. Hochleistungs-Backend-Entwicklung aus Duesseldorf fuer Hochlast-Systeme.",
        url: "https://palmer-digital.de/services/nodejs-core",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Node.js Core & Skalierbare Backend Infrastruktur | Duesseldorf",
        description:
            "Schluss mit Server-Crashes bei Traffic-Spitzen — Node.js, Microservices, Edge Functions und Redis-Caching aus Duesseldorf. Backend-Infrastruktur fuer Hochlast-Systeme.",
    },
};

/* ── JSON-LD STRUCTURED DATA — ProfessionalService ── */
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Palmer Digital — Node.js Core & Skalierbare Backend Infrastruktur",
    description:
        "Backend-Entwicklung und Infrastruktur-Architektur aus Duesseldorf. Wir bauen Node.js-Backends, die unter Last stabil bleiben — Event-Loop-optimiert, Microservices-faehig, Edge-deployed. Skalierbare Server-Architektur fuer Onlineshops, SaaS-Plattformen und Marktplaetze in NRW.",
    url: "https://palmer-digital.de/services/nodejs-core",
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
    serviceType: "Backend Development & Infrastructure Architecture",
    areaServed: [
        { "@type": "City", name: "Duesseldorf" },
        { "@type": "State", name: "Nordrhein-Westfalen" },
        { "@type": "Country", name: "Deutschland" },
    ],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Backend & Infrastruktur Loesungen",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Skalierbare Node.js Backend-Entwicklung",
                    description:
                        "Hochleistungs-Backends fuer Onlineshops, SaaS und Marktplaetze. Non-blocking I/O, Event-Loop-Optimierung und horizontales Scaling — Backends, die bei Marketing-Kampagnen und Sales-Events nicht wegbrechen.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Microservice Architektur & Domain-Driven Design",
                    description:
                        "Service-Boundaries nach DDD, eigenstaendig deploybare Microservices und Inter-Service-Communication via Redis Pub/Sub. Skalierung ohne Re-Design — von Start-up bis Enterprise.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Vercel Edge Functions & Sub-50ms Latency",
                    description:
                        "Globale Auslieferung ueber Vercel Edge Network — Backend-Logik laeuft naeher beim Nutzer, TTFB-Werte unter 50ms weltweit. Cold-Start-Optimierung fuer Serverless-Workloads.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Redis Caching & Datenbank-Performance",
                    description:
                        "Connection Pooling, Read-Replicas und Redis-basiertes Response-Caching. Datenbank-Flaschenhaelse werden architektonisch eliminiert, nicht ueberdeckt.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Infrastruktur-Beratung & Backend-Audit Duesseldorf",
                    description:
                        "Architektur-Reviews, Performance-Audits und Skalierungsstrategien. Persoenlich, vor Ort in Duesseldorf oder remote in ganz NRW.",
                },
            },
        ],
    },
    specialty: [
        "Node.js Backend-Entwicklung",
        "Skalierbare Server-Architektur",
        "Microservices vs Monolith",
        "Event Loop Optimierung",
        "Non-blocking I/O",
        "Vercel Edge Functions",
        "Redis Caching Strategien",
        "Horizontal Scaling Docker Kubernetes",
        "PostgreSQL und MongoDB Skalierung",
        "Backend Agentur Duesseldorf",
        "Backend Entwickler NRW",
        "Infrastruktur-Beratung Duesseldorf",
    ],
    knowsAbout: [
        "Node.js 20 LTS",
        "Express.js",
        "Fastify",
        "TypeScript Strict Mode",
        "Event Loop & libuv",
        "Worker Threads",
        "Cluster Module",
        "Vercel Edge Runtime",
        "Connection Pooling",
        "Read-Replica Strategien",
        "Redis Pub/Sub",
        "BullMQ Queues",
        "Domain-Driven Design",
        "OpenAPI / Swagger",
        "REST vs GraphQL",
        "Docker & docker-compose",
        "Kubernetes Horizontal Scaling",
        "OWASP API Security",
        "Pino Structured Logging",
        "DSGVO-konforme Datenverarbeitung",
    ],
};

/* ── JSON-LD STRUCTURED DATA — FAQPage ── */
const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Warum sollte ich Node.js statt PHP fuer mein Backend einsetzen?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Klassische Sprachen wie PHP arbeiten synchron — pro Request ein Prozess, der wartet, bis die Datenbank antwortet. Node.js nutzt einen Event Loop mit non-blocking I/O: Ein einzelner Prozess kann tausende parallele Verbindungen verwalten, weil er waehrend des Wartens auf die Datenbank schon den naechsten Request annimmt. Das Ergebnis: weniger Server-Ressourcen, niedrigere Latenz und deutlich bessere Skalierbarkeit bei gleichzeitigen Nutzern. Fuer Echtzeit-Apps, APIs und Hochlast-Systeme ist das der Standard im Jahr 2026.",
            },
        },
        {
            "@type": "Question",
            name: "Wie skaliere ich meine App auf 1 Million Nutzer ohne Re-Design?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Skalierbarkeit ist kein Feature, das man nachtraeglich einbaut — sie ist eine Architekturentscheidung. Wir bauen von Beginn an Microservices mit klaren Domain-Boundaries (DDD), zustandslose API-Server fuer horizontales Scaling und Redis-basierte Session-/Cache-Layer fuer geteilten State. Datenbanken bekommen Read-Replicas und Connection Pooling. Die einzelnen Services skalieren unabhaengig auf Docker/Kubernetes oder Vercel Edge — von 1.000 auf 1.000.000 Nutzer ohne Code-Rewrite, nur durch Hinzufuegen weiterer Instanzen.",
            },
        },
        {
            "@type": "Question",
            name: "Was kostet eine skalierbare Backend-Infrastruktur in Duesseldorf?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ein produktionsreifes Backend-Setup beginnt typischerweise im niedrigen fuenfstelligen Bereich — abhaengig von Komplexitaet (Single-Service vs. Microservice-Mesh), Integrationen (Stripe, S3, Auth-Provider) und SLA-Anforderungen. Wichtiger als der Preis ist die TCO: Eine ineffiziente Architektur kostet jeden Monat unnoetige Server-Ressourcen, jeden Sales-Event Reputation und bei Crashes echten Umsatz. Wir arbeiten in fixen Sprints mit transparenten Kostenkennzahlen — keine open-end Stundenkonten. Anfrage und kostenfreier Architektur-Check fuer Unternehmen aus Duesseldorf, NRW und ganz Deutschland.",
            },
        },
        {
            "@type": "Question",
            name: "Was bringen Vercel Edge Functions fuer mein Backend?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Vercel Edge Functions laufen in 30+ Regionen weltweit — Backend-Logik wird also dort ausgefuehrt, wo der Nutzer sitzt, nicht in einem zentralen Frankfurt-Rechenzentrum. Das druckt die Time-to-First-Byte (TTFB) auf unter 50ms global, eliminiert Cold Starts (gegenueber klassischen Serverless-Funktionen) und verbessert Core Web Vitals — was wiederum direkt das Google-Ranking beeinflusst. Wir kombinieren Edge fuer latenzkritische Operationen mit klassischem Node.js auf Railway fuer komplexe, datenbanknahe Workloads.",
            },
        },
        {
            "@type": "Question",
            name: "Wie sorgt ihr dafuer, dass mein Backend bei Marketing-Kampagnen nicht zusammenbricht?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Drei Engineering-Disziplinen: Erstens Load-Tests mit Artillery/k6 vor jedem Launch — wir simulieren das doppelte des erwarteten Traffics. Zweitens Auto-Scaling auf Container-Ebene (Docker/Kubernetes oder Railway) plus CDN-Caching fuer statische Inhalte. Drittens Worker Threads fuer CPU-intensive Aufgaben (Bildverarbeitung, Reports), damit der Event Loop nie blockiert. Plus durchgehende Observability via Pino Logging, Sentry Error-Tracking und Prometheus-Metriken — Alerting bei Error-Rate >0.1 % oder P99 >10 ms, also bevor der Nutzer es merkt.",
            },
        },
    ],
};

export default function NodejsCorePage() {
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
                    <NodeHero />
                    <NodeProblem />
                    <NodeCapabilities />
                    <NodeArchitecture />
                    <NodeCodeExamples />
                    <NodeProcess />
                    <NodeUseCases />
                    <NodeFAQ />
                    <NodeCTA />
                </article>
            </main>
        </>
    );
}

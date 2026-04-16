// src/app/services/cloud-infrastructure/page.tsx
// Static route — takes precedence over [slug]/page.tsx.
// RSC-First, 0 TBT. Design-Dogma: #001F3F / #FFFFFF / #000000, 0px border-radius.
// SEO: Geo-SEO Duesseldorf/NRW, ProfessionalService + FAQPage JSON-LD.
// Topic: MongoDB Cloud Backbone — Data Pipeline & Cluster Ops.

import type { Metadata } from "next";
import MongoHero from "@/components/sections/MongoHero";
import MongoProblem from "@/components/sections/MongoProblem";
import MongoCapabilities from "@/components/sections/MongoCapabilities";
import MongoArchitecture from "@/components/sections/MongoArchitecture";
import MongoCodeExamples from "@/components/sections/MongoCodeExamples";
import MongoProcess from "@/components/sections/MongoProcess";
import MongoUseCases from "@/components/sections/MongoUseCases";
import MongoFAQ from "@/components/sections/MongoFAQ";
import MongoCTA from "@/components/sections/MongoCTA";

/* ── SEO METADATA ── */
export const metadata: Metadata = {
    title: "MongoDB Cloud Backbone — Data Pipeline & Cluster Ops | MongoDB Agentur Duesseldorf",
    description:
        "MongoDB Atlas Cluster, Data Pipelines und Zero-Downtime Migration aus Duesseldorf — ausfallsichere Cloud-Datenbank fuer Onlineshops, SaaS und Marktplaetze. Sharding, Aggregation Framework, Connection Pooling fuer Vercel, DSGVO-konforme EU-Cluster, Atlas Search und Cluster-Ops. Schluss mit Daten-Chaos, Zombie-Connections und vergessenen Backups. MongoDB-Beratung fuer Unternehmen in NRW.",
    keywords: [
        // Laien & Business-Fokus
        "datenbank sicher machen onlineshop",
        "kundendaten sicher speichern cloud",
        "webseite daten laden sehr langsam",
        "datenverlust verhindern shop",
        "cloud datenbank einrichten lassen",
        "hilfe bei datenbank problemen",
        "automatische backups fuer webseiten",
        "skalierbare datenspeicherung app",
        "wie schuetze ich meine kundendaten",
        "datenbank umzug service",
        // Nutzen- & Performance-Fokus
        "ausfallsichere cloud datenbank",
        "echtzeit datenverarbeitung vorteile",
        "schnelle datenabfragen optimieren",
        "datenbank kosten senken",
        "globale datenverfuegbarkeit",
        "performance-schuebe durch mongodb atlas",
        "datenschutz-konforme cloud loesungen",
        "unternehmensdaten zentralisieren",
        // Experten & Tech-Fokus
        "MongoDB Atlas Cluster Optimization",
        "Data Pipeline ETL Workflow",
        "Aggregation Framework Best Practices",
        "Sharding und Replication Strategies",
        "Change Streams fuer Echtzeit-Apps",
        "Indexing Strategien zur Latenz-Senkung",
        "Schema Design Patterns Document Model",
        "Database-as-a-Service DBaaS",
        "MongoDB Connection Pooling Vercel",
        "Atlas Search und Vector Index",
        "Zero-Downtime Migration MongoDB",
        "MongoDB Data Governance DSGVO",
        // Regionaler Bezug
        "MongoDB Experten Duesseldorf",
        "Cloud Datenbank Agentur NRW",
        "Daten-Infrastruktur Beratung Duesseldorf",
        "Managed Database Services Duesseldorf",
    ],
    alternates: { canonical: "https://palmer-digital.de/services/cloud-infrastructure" },
    openGraph: {
        title: "MongoDB Cloud Backbone — Data Pipeline & Cluster Ops | Duesseldorf",
        description:
            "Kugelsicheres MongoDB Atlas Backbone fuer Onlineshops und SaaS — Sharding, Aggregation Framework, DSGVO-EU-Cluster, Connection Pooling fuer Vercel und Zero-Downtime Migration. Daten-Infrastruktur aus Duesseldorf fuer Unternehmen in NRW.",
        url: "https://palmer-digital.de/services/cloud-infrastructure",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "MongoDB Cloud Backbone — Data Pipeline & Cluster Ops | Duesseldorf",
        description:
            "Schluss mit Daten-Chaos und vergessenen Backups — MongoDB Atlas, Data Pipelines und DSGVO-konforme EU-Cluster aus Duesseldorf. Sharding, Aggregation, Connection Pooling und Zero-Downtime Migration.",
    },
};

/* ── JSON-LD STRUCTURED DATA — ProfessionalService ── */
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Palmer Digital — MongoDB Cloud Backbone: Data Pipeline & Cluster Ops",
    description:
        "Cloud Database Management und Data Pipeline Engineering aus Duesseldorf. Wir designen, migrieren und betreiben MongoDB-Atlas-Cluster fuer Onlineshops, SaaS-Plattformen und datenintensive Anwendungen. Sharding, Aggregation Framework, Atlas Search, Connection Pooling fuer Vercel/Next.js, DSGVO-konforme EU-Cluster und Zero-Downtime Migration — fuer Unternehmen in Duesseldorf, NRW und ganz Deutschland.",
    url: "https://palmer-digital.de/services/cloud-infrastructure",
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
    serviceType: "Cloud Database Management & Data Pipeline Engineering",
    areaServed: [
        { "@type": "City", name: "Duesseldorf" },
        { "@type": "State", name: "Nordrhein-Westfalen" },
        { "@type": "Country", name: "Deutschland" },
        { "@type": "AdministrativeArea", name: "Europaeische Union" },
    ],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "MongoDB & Daten-Infrastruktur Leistungen",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "MongoDB Atlas Cluster-Design & Optimization",
                    description:
                        "Globale Replica-Sets, Sharding-Strategien und Zone-based Routing fuer weltweite Latenz unter 50ms. Shard-Key-Auswahl und Index-Strategie so gewaehlt, dass Cluster linear mit dem Geschaeft skalieren.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Data Pipeline & ETL Engineering",
                    description:
                        "Aggregation-Pipelines, Change-Streams und Oplog-basierte ETL-Workflows. Echtzeit-Dashboards, BI-Views und datengetriebene Features ohne separates Data Warehouse.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Zero-Downtime Migration zu MongoDB Atlas",
                    description:
                        "Schema-Audit, kontinuierliche Replikation via mongomirror/mongosync, Lasttest mit Artillery/k6 und Cutover in einem einzigen Maintenance-Window. Validierter Rollback-Plan inklusive.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Cluster-Ops: Monitoring, Backup, Data Governance",
                    description:
                        "24/7-Monitoring via Atlas Alerting, kontinuierliche Backups mit Point-in-Time-Recovery, Audit-Logs, RBAC und Client-Side Field-Level Encryption. DSGVO-konformes Setup mit AVV und EU-Hosting.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Atlas Search, Vector & Realtime Integration",
                    description:
                        "Volltext-Suche und Vector-Embeddings nativ in MongoDB. Semantische Produktsuche, RAG-Pipelines und Change-Streams fuer Live-Updates — ohne separaten Elasticsearch-Cluster.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "MongoDB-Beratung & Data-Backbone-Audit Duesseldorf",
                    description:
                        "Architektur-Reviews, Slow-Query-Analysen und Skalierungsstrategien. Persoenlich vor Ort in Duesseldorf oder remote fuer Unternehmen in ganz NRW.",
                },
            },
        ],
    },
    specialty: [
        "MongoDB Atlas Cluster Design",
        "Sharding und Replication Strategien",
        "Aggregation Framework Optimization",
        "Atlas Search und Vector Index",
        "Zero-Downtime Migration",
        "Data Pipeline Engineering",
        "Connection Pooling Vercel Next.js",
        "DSGVO-konforme Cloud-Datenbank",
        "MongoDB Agentur Duesseldorf",
        "Cloud Datenbank Agentur NRW",
        "Managed Database Services Duesseldorf",
    ],
    knowsAbout: [
        "MongoDB 7 / 8",
        "MongoDB Atlas",
        "Replica Sets & Sharded Clusters",
        "Aggregation Pipeline",
        "$lookup / $group / $facet / $out",
        "Schema Design Patterns",
        "$jsonSchema Validation",
        "Change Streams",
        "Atlas Search (Lucene)",
        "Atlas Vector Search",
        "Connection Pooling (Serverless)",
        "mongomirror & mongosync",
        "Point-in-Time Recovery",
        "Client-Side Field-Level Encryption",
        "Role-Based Access Control",
        "Audit Logs & SOC 2 / ISO 27001",
        "Vercel Edge Runtime",
        "Next.js Route Handlers",
        "Railway Node.js Backend",
        "DSGVO / AVV / EU-Hosting",
    ],
};

/* ── JSON-LD STRUCTURED DATA — FAQPage ── */
const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Ist eine Cloud-Datenbank sicher vor Hackern?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ja, sofern die Architektur stimmt. MongoDB Atlas laeuft hinter VPC-Isolation, IP-Whitelist und mTLS. Daten sind at-Rest (AES-256) und in-Transit (TLS 1.3) verschluesselt. Wir aktivieren Client-Side Field-Level Encryption fuer sensible Daten wie Zahlungsinformationen, richten Role-Based Access Control feingranular ein und integrieren Audit-Logs fuer forensische Analysen. Atlas ist SOC 2 Typ II-, ISO 27001- und HIPAA-zertifiziert — sicherer als die meisten On-Premise-Datenbanken.",
            },
        },
        {
            "@type": "Question",
            name: "Was ist der Unterschied zwischen SQL und MongoDB?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "SQL-Datenbanken speichern Daten in starren Tabellen mit festen Spalten — jede Schema-Aenderung erfordert Migrationen mit Downtime. MongoDB speichert Daten als flexible Dokumente aehnlich JSON: Neue Felder, Produktkategorien oder Geschaeftsanforderungen werden ohne Schema-Migration ergaenzt. Seit Version 4.0 bietet MongoDB vollstaendige Multi-Document ACID-Transaktionen — die fruehere NoSQL-Schwaeche ist geloest. MongoDB eignet sich, wenn Daten organisch wachsen und flexibel bleiben muessen; SQL wenn starre Relationen und komplexe JOINs dominieren.",
            },
        },
        {
            "@type": "Question",
            name: "Warum wird meine Datenbank mit der Zeit immer langsamer?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Drei Haupt-Ursachen: Erstens fehlende oder ineffiziente Indexes — ohne Compound- und Partial-Indexes werden Abfragen zu Full Collection Scans. Zweitens ungebaendigtes Datenwachstum ohne Archivierung oder Time-Series-Collections, wodurch Hot- und Cold-Data konkurrieren. Drittens unoptimierte Aggregation Pipelines, die Millionen Dokumente in Memory laden, statt $match frueh einzusetzen. Mit dem Atlas Performance Advisor identifizieren wir die Top-10-Latenz-Treiber und eliminieren sie systematisch — typisch 60–90 % Latenz-Reduktion ohne Hardware-Upgrade.",
            },
        },
        {
            "@type": "Question",
            name: "Koennen meine Kundendaten DSGVO-konform in der Cloud liegen?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ja. MongoDB Atlas bietet dedizierte Cluster in Frankfurt (AWS eu-central-1), Dublin (AWS eu-west-1) und Paris (GCP europe-west9). Wir konfigurieren Multi-Region-Replikation ausschliesslich innerhalb der EU, schliessen den Auftragsverarbeitungsvertrag nach Art. 28 DSGVO und dokumentieren die Verarbeitungstaetigkeiten. Daten verlassen niemals die EU, Backups werden EU-intern repliziert und Atlas-Zugriffslogs erfuellen die Nachweispflichten aus Art. 30. Fuer hoechste Anforderungen stehen Sovereign-Cloud-Optionen wie Ionos oder STACKIT zur Verfuegung.",
            },
        },
        {
            "@type": "Question",
            name: "Wie laeuft eine Zero-Downtime Migration zu MongoDB Atlas ab?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "In vier Phasen ohne Produktionsstop: Erstens Schema-Audit und Index-Strategie via Atlas Performance Advisor. Zweitens Setup des Ziel-Clusters mit kontinuierlicher Replikation ueber mongomirror oder mongosync — das Altsystem bleibt Primary. Drittens Lasttest mit Artillery/k6 auf Staging: Wir simulieren das Doppelte des erwarteten Produktionstraffics. Viertens Cutover in einem einzigen Maintenance-Window (typisch 15–30 Minuten) mit vorbereitetem Rollback-Plan. Kunden in Duesseldorf und NRW erhalten auf Wunsch Vor-Ort-Betreuung waehrend der Migration.",
            },
        },
    ],
};

export default function MongoDBCloudBackbonePage() {
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
                    <MongoHero />
                    <MongoProblem />
                    <MongoCapabilities />
                    <MongoArchitecture />
                    <MongoCodeExamples />
                    <MongoProcess />
                    <MongoUseCases />
                    <MongoFAQ />
                    <MongoCTA />
                </article>
            </main>
        </>
    );
}

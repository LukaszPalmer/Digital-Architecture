// src/app/services/postgresql/page.tsx
// Static route — takes precedence over [slug]/page.tsx.
// RSC-First, 0 TBT. Design-Dogma: #001F3F / #FFFFFF / #000000, 0px border-radius.
// SEO: Geo-SEO Duesseldorf/NRW, ProfessionalService + FAQPage JSON-LD.
// Topic: PostgreSQL Core — Relationale Datenbankarchitektur (StoryBrand PAS + Bridge).

import type { Metadata } from "next";
import PostgreHero from "@/components/sections/PostgreHero";
import PostgreProblem from "@/components/sections/PostgreProblem";
import PostgreCapabilities from "@/components/sections/PostgreCapabilities";
import PostgreArchitecture from "@/components/sections/PostgreArchitecture";
import PostgreCodeExamples from "@/components/sections/PostgreCodeExamples";
import PostgreProcess from "@/components/sections/PostgreProcess";
import PostgreUseCases from "@/components/sections/PostgreUseCases";
import PostgreFAQ from "@/components/sections/PostgreFAQ";
import PostgreCTA from "@/components/sections/PostgreCTA";

/* ── SEO METADATA ── */
export const metadata: Metadata = {
    title: "PostgreSQL Core — Relationale Datenbankarchitektur | Datenbank-Experte Duesseldorf",
    description:
        "PostgreSQL Datenbankarchitektur aus Duesseldorf — ACID-konforme relationale Datenbanken, Performance Tuning, Row-Level Security und Point-in-Time-Recovery fuer produktionskritische Systeme. Intelligentes SQL-Indexing (B-Tree, GIN), JSONB fuer flexible Datenstrukturen, PgBouncer Connection Pooling und Stored Procedures. Schluss mit Excel-Chaos, doppelten Datensaetzen und langsamen Abfragen. SQL-Datenbank-Entwickler und Datenbank-Architekt fuer Unternehmen in Duesseldorf, NRW und ganz Deutschland.",
    keywords: [
        // Laien & Business-Fokus (Problem-Loesung)
        "excel tabelle zu gross fuer kundenverwaltung",
        "datenchaos im unternehmen loesen",
        "sichere datenbank fuer onlineshop",
        "kundendaten strukturiert speichern",
        "datenbank beratung fuer kleine unternehmen",
        "sql datenbank erstellen lassen",
        "warum ist meine datenbanksuche so langsam",
        "doppelte datensaetze verhindern",
        "verknuepfte daten richtig verwalten",
        "datenbank umzug von excel zu sql",
        // Nutzen- & Performance-Fokus
        "ausfallsichere kundendatenbank",
        "schnelle berichte und analysen",
        "maximale datensicherheit garantiert",
        "saubere datenstruktur vorteile",
        "performante datenbankabfragen",
        "langlebige software-architektur",
        "skalierbare sql loesungen nrw",
        "fehlerfreie datenverarbeitung",
        // Experten & Tech-Fokus
        "PostgreSQL Performance Tuning",
        "Relationale Datenbank Normalisierung",
        "ACID Compliance Vorteile",
        "SQL Indexing Strategien B-Tree GIN",
        "JSONB in PostgreSQL nutzen",
        "PostgreSQL vs MySQL Entscheidungshilfe",
        "Stored Procedures Trigger Entwicklung",
        "PgBouncer Connection Pooling",
        // Regionaler Bezug
        "PostgreSQL Experte Duesseldorf",
        "SQL Datenbank Entwickler NRW",
        "Datenbank-Architekt Duesseldorf",
        "IT-Beratung fuer Datenstrukturen Duesseldorf",
    ],
    alternates: { canonical: "https://palmer-digital.de/services/postgresql" },
    openGraph: {
        title: "PostgreSQL Core — Relationale Datenbankarchitektur | Duesseldorf",
        description:
            "ACID-konforme PostgreSQL Architektur aus Duesseldorf — Row-Level Security, Advanced Indexing (B-Tree, GIN, GiST), JSONB, PgBouncer Pooling und Point-in-Time-Recovery fuer produktionskritische Systeme. Datenbank-Beratung und Entwicklung fuer Unternehmen in NRW.",
        url: "https://palmer-digital.de/services/postgresql",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "PostgreSQL Core — Relationale Datenbankarchitektur | Duesseldorf",
        description:
            "Schluss mit Excel-Chaos und langsamen Abfragen. ACID-konforme Datenbankarchitektur, intelligentes Indexing und Row-Level Security fuer Unternehmen in Duesseldorf/NRW.",
    },
};

/* ── JSON-LD STRUCTURED DATA — ProfessionalService ── */
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Palmer Digital — PostgreSQL Core: Relationale Datenbankarchitektur & Consulting",
    description:
        "PostgreSQL Datenbankarchitektur & Consulting aus Duesseldorf. Wir designen, migrieren und optimieren relationale Datenbanken fuer produktionskritische Systeme: ACID-konforme Transaktionen, Row-Level Security, Advanced Indexing (B-Tree, GIN, GiST, BRIN), JSONB fuer flexible Datenstrukturen, PgBouncer Connection Pooling, Stored Procedures, WAL Streaming Replication und Point-in-Time-Recovery. Migration von Excel, MySQL, MongoDB und Oracle zu PostgreSQL. Datenbank-Beratung und Schema-Audits fuer Startups, KMU und Enterprises in Duesseldorf, NRW und ganz Deutschland. DSGVO-konform, RBAC-gesichert, performant.",
    url: "https://palmer-digital.de/services/postgresql",
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
    serviceType: "PostgreSQL Database Architecture & Consulting",
    areaServed: [
        { "@type": "City", name: "Duesseldorf" },
        { "@type": "State", name: "Nordrhein-Westfalen" },
        { "@type": "Country", name: "Deutschland" },
        { "@type": "AdministrativeArea", name: "Europaeische Union" },
    ],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "PostgreSQL Datenbankarchitektur & Consulting Leistungen",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Schema-Design & Normalisierung",
                    description:
                        "Vollstaendige Analyse der Datenstrukturen, ER-Modellierung und Normalisierungsstrategie. Foreign-Key-Constraints, Check-Constraints und Expression Indexes — bevor eine einzige Zeile Code geschrieben wird. Saubere Datenstruktur als Fundament fuer langlebige Software-Architektur.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Performance Tuning & Indexing-Strategie",
                    description:
                        "EXPLAIN ANALYZE fuer kritische Queries, Slow-Query-Log-Auswertung und gezieltes Indexing mit B-Tree, GIN, GiST und BRIN. Autovacuum-Konfiguration, Work-Mem-Tuning und Table-Partitionierung. Datenbankabfragen von Sekunden auf Millisekunden beschleunigen.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Row-Level Security & RBAC",
                    description:
                        "Feingranulare Zugriffskontrolle direkt in der Datenbankschicht. Rollen-basiertes Berechtigungskonzept (RBAC) mit Row-Level Security Policies fuer Multi-Tenant-Isolation. DSGVO-konforme Datentrennung auf Datenbankebene, nicht nur in der Applikation.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Datenbank-Migration (Excel, MySQL, MongoDB zu PostgreSQL)",
                    description:
                        "Schema-Audit, Datenbereinigung, Testmigration, Lasttest und Live-Cutover mit Zero-Downtime-Strategie. Migration von Excel, MySQL, MariaDB, MongoDB, MS SQL Server und Oracle. Inklusive Rollback-Option und Vor-Ort-Betreuung in Duesseldorf und NRW.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Backup, Recovery & Hochverfuegbarkeit",
                    description:
                        "pgBackRest mit WAL-Archivierung fuer Point-in-Time-Recovery (RTO < 15 Min). Primary-Replica-Topologie mit WAL Streaming Replication fuer horizontale Lese-Skalierung und automatisches Failover. 99.9% Uptime-SLA fuer produktionskritische Systeme.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Datenbank-Beratung & Architektur-Review Duesseldorf",
                    description:
                        "Datenstruktur-Audits, Schema-Reviews, PostgreSQL-vs-MySQL-Entscheidungshilfe und Compliance-Beratung (DSGVO, RBAC). Persoenlich vor Ort in Duesseldorf oder remote fuer Unternehmen in ganz NRW und Deutschland.",
                },
            },
        ],
    },
    specialty: [
        "PostgreSQL Datenbankarchitektur",
        "Relationale Datenbank Normalisierung",
        "SQL Performance Tuning",
        "ACID-konforme Transaktionen",
        "Row-Level Security & RBAC",
        "JSONB & Dokumentenspeicherung",
        "PgBouncer Connection Pooling",
        "WAL Streaming Replication",
        "Point-in-Time-Recovery",
        "Datenbank-Migration",
        "PostgreSQL Experte Duesseldorf",
        "SQL Datenbank Entwickler NRW",
        "Datenbank-Architekt Duesseldorf",
    ],
    knowsAbout: [
        "PostgreSQL 16",
        "ACID Compliance",
        "MVCC Concurrency Control",
        "B-Tree Index",
        "GIN Index",
        "GiST Index",
        "BRIN Index",
        "JSONB Binary Storage",
        "JSON Path Queries",
        "Full-Text Search (tsvector/tsquery)",
        "Row-Level Security",
        "Stored Procedures (PL/pgSQL)",
        "Trigger Development",
        "Foreign Keys & Constraints",
        "Table Partitioning",
        "Materialized Views",
        "Foreign Data Wrappers",
        "PgBouncer Connection Pooling",
        "pgBackRest Backup & Recovery",
        "WAL Streaming Replication",
        "Primary-Replica Cluster",
        "EXPLAIN ANALYZE Optimization",
        "PostGIS Geodaten",
        "pgvector KI-Embeddings",
        "pg_cron Scheduling",
        "pg_stat_statements Monitoring",
        "Prometheus & Grafana Integration",
        "DSGVO & Datenschutz Compliance",
    ],
};

/* ── JSON-LD STRUCTURED DATA — FAQPage ── */
const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Wann ist PostgreSQL besser als Excel fuer meine Kundenverwaltung?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Sobald mehr als ein Mitarbeiter gleichzeitig auf die Daten zugreifen muss, sobald Sie mehr als ein paar tausend Datensaetze verwalten oder sobald Beziehungen zwischen Daten entstehen (Kunde hat Bestellungen, Bestellung hat Positionen). Excel kennt keine referenzielle Integritaet, keine parallelen Schreibzugriffe und keine Zugriffskontrolle. PostgreSQL loesung: Ein normalisiertes Schema mit Foreign Keys stellt sicher, dass keine verwaisten Datensaetze entstehen. Row-Level Security kontrolliert, wer was sehen darf. Und MVCC (Multi-Version Concurrency Control) ermoeglicht hunderte gleichzeitige Zugriffe ohne Datenverlust. Fuer Unternehmen in Duesseldorf und NRW begleiten wir die Migration von Excel zu PostgreSQL — inklusive Datenbereinigung, Schemadesign und Schulung.",
            },
        },
        {
            "@type": "Question",
            name: "Wie sicher sind meine Daten bei einem Stromausfall oder Systemabsturz?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "PostgreSQL garantiert ACID-Konformitaet — Atomicity, Consistency, Isolation, Durability. Das bedeutet konkret: Wenn Sie eine Bestellung aufgeben und das System waehrend der Verarbeitung abstuerzt, ist entweder die komplette Bestellung gespeichert (Zahlung, Lagerbestandsaenderung, Bestaetigungs-E-Mail-Trigger) oder nichts davon. Es gibt keine halben Buchungen, keine inkonsistenten Zustaende, keine verlorenen Transaktionen. Zusaetzlich schreibt PostgreSQL jede Aenderung zuerst in das Write-Ahead-Log (WAL), bevor sie auf die Festplatte geschrieben wird. Bei einem Crash wird das WAL beim Neustart abgespielt und die Datenbank auf den letzten konsistenten Zustand gebracht — automatisch, ohne manuellen Eingriff. Mit pgBackRest und WAL-Archivierung bieten wir Point-in-Time-Recovery: Wiederherstellung auf jede Sekunde der letzten 30 Tage.",
            },
        },
        {
            "@type": "Question",
            name: "Was ist der Unterschied zwischen SQL (PostgreSQL) und NoSQL (MongoDB)?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "SQL-Datenbanken wie PostgreSQL speichern Daten in Tabellen mit festen Spalten und erzwingen Beziehungen ueber Foreign Keys — ideal fuer Daten mit klaren Strukturen und Abhaengigkeiten (Kunden, Bestellungen, Finanzdaten). NoSQL-Datenbanken wie MongoDB speichern flexible JSON-Dokumente ohne festes Schema — ideal fuer schnell wechselnde Datenstrukturen oder Prototypen. Der Clou: PostgreSQL kann beides. Mit JSONB speichern und indexieren Sie unstrukturierte Daten genau so schnell wie MongoDB, behalten aber gleichzeitig die volle Transaktionssicherheit und relationale Verknuepfungen. Fuer 90 % aller Anwendungsfaelle — vom Onlineshop ueber SaaS-Plattformen bis zu Fintech-Systemen — ist PostgreSQL die bessere Wahl, weil Sie keinen zweiten Datenbankstack betreiben muessen.",
            },
        },
        {
            "@type": "Question",
            name: "Wie macht PostgreSQL meine Datenbankabfragen schneller?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Drei Mechanismen: Erstens intelligente Indizes — ein B-Tree-Index auf einer Spalte mit 10 Millionen Zeilen reduziert die Suchzeit von einem Full-Table-Scan (Sekunden) auf einen Index-Lookup (unter 1 Millisekunde). Zweitens der Cost-Based Optimizer — PostgreSQL analysiert automatisch Tabellenstatistiken und waehlt fuer jede Abfrage den schnellsten Ausfuehrungsplan (Nested Loop, Hash Join, Merge Join). Drittens spezialisierte Index-Typen: GIN-Indizes fuer Volltextsuche und JSONB, GiST fuer Geodaten, BRIN fuer zeitserienbasierte Daten. Zusaetzlich setzen wir PgBouncer als Connection Pooler ein, um den Overhead durch Datenbankverbindungen zu eliminieren.",
            },
        },
        {
            "@type": "Question",
            name: "Koennen Sie unsere bestehende Datenbank zu PostgreSQL migrieren?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ja — wir migrieren von Excel, MySQL, MariaDB, MongoDB, Microsoft SQL Server und Oracle zu PostgreSQL. Der Prozess laeuft in fuenf Phasen ohne Produktionsunterbrechung: Erstens Schema-Audit und Datenanalyse. Zweitens Schema-Design mit Normalisierung, Indexstrategie und Constraint-Definition. Drittens Testmigration auf einem Staging-System mit vollstaendiger Datenvalidierung. Viertens Lasttests und Performance-Vergleich gegen das Altsystem. Fuenftens Live-Cutover mit Zero-Downtime-Strategie und Rollback-Option innerhalb von 60 Sekunden. Kunden in Duesseldorf und NRW erhalten auf Wunsch persoenliche Vor-Ort-Betreuung waehrend der gesamten Migration.",
            },
        },
    ],
};

export default function PostgreSQLPage() {
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
                    <PostgreHero />
                    <PostgreProblem />
                    <PostgreCapabilities />
                    <PostgreArchitecture />
                    <PostgreCodeExamples />
                    <PostgreProcess />
                    <PostgreUseCases />
                    <PostgreFAQ />
                    <PostgreCTA />
                </article>
            </main>
        </>
    );
}

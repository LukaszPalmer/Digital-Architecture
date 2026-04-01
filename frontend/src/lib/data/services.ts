export interface Capability {
    id: string;
    title: string;
    description: string;
}

export interface Stat {
    value: string;
    label: string;
}

export interface ProcessStep {
    step: string;
    title: string;
    description: string;
}

export interface UseCase {
    segment: string;
    title: string;
    description: string;
}

export interface ServiceDetailData {
    slug: string;
    systemId: string;
    title: string;
    tagline: string;
    metrics: string;
    stats: Stat[];
    capabilities: Capability[];
    process: ProcessStep[];
    useCases: UseCase[];
}

export const servicesData: ServiceDetailData[] = [
    {
        slug: "nextjs-elite-core",
        systemId: "SYS_01_CORE",
        title: "Next.js Elite Core",
        tagline:
            "Die schnellste Interface-Infrastruktur der Welt, gebaut für Marktführer.",
        metrics: "LCP < 0.8s // TBT 0ms",
        stats: [
            { value: "< 0.8s", label: "Largest Contentful Paint" },
            { value: "0ms", label: "Total Blocking Time" },
            { value: "100", label: "Lighthouse Score" },
        ],
        capabilities: [
            {
                id: "FE-01",
                title: "Partial Prerendering",
                description:
                    "Dynamische Interaktionen gepaart mit statischer Edge-Delivery in Millisekunden.",
            },
            {
                id: "FE-02",
                title: "React Server Components",
                description:
                    "Zero-Bundle-Size Architektur. Logik wird auf dem Server ausgeführt, nicht im Client.",
            },
            {
                id: "FE-03",
                title: "Strict Type-Safety",
                description:
                    "Kompromisslose End-to-End Typensicherheit für fehlerfreie Deployments.",
            },
            {
                id: "FE-04",
                title: "Edge Runtime Optimization",
                description:
                    "Code-Execution in global verteilten Rechenzentren, nah am User.",
            },
        ],
        process: [
            { step: "01", title: "Technical Discovery", description: "Analyse der bestehenden Architektur und Definition messbarer Performance-Ziele für LCP, TBT und CLS." },
            { step: "02", title: "Architecture Blueprint", description: "Maßgeschneiderter Next.js 15 Plan — RSC-First, Partial Prerendering und Edge Runtime Strategie." },
            { step: "03", title: "Implementation", description: "Entwicklung in 2-Wochen-Sprints mit täglichen Vercel-Deployments und kontinuierlichem Performance-Monitoring." },
            { step: "04", title: "Performance Audit", description: "Core Web Vitals Optimierung und Lighthouse-Verifizierung bis Score 100 erreicht und dokumentiert ist." },
        ],
        useCases: [
            { segment: "E-COMMERCE", title: "Conversion-optimierte Shops", description: "Für Shops, die LCP-Verbesserungen direkt in messbare Umsatz-Steigerungen übersetzen wollen." },
            { segment: "SAAS", title: "Enterprise Dashboards", description: "Für SaaS-Produkte mit komplexen Datenlayern, globaler Nutzerbasis und Echtzeit-Anforderungen." },
            { segment: "CORPORATE", title: "Marketing Flagships", description: "Für Marken, die technologische Führerschaft durch ihre Website nach außen demonstrieren müssen." },
        ],
    },
    {
        slug: "cloud-infrastructure",
        systemId: "SYS_02_CLOUD",
        title: "Cloud Infrastructure",
        tagline: "High-Availability Clusters für unbegrenzte Skalierbarkeit.",
        metrics: "99.99% UPTIME // GLOBAL SHARDING",
        stats: [
            { value: "99.99%", label: "Uptime SLA" },
            { value: "< 50ms", label: "Globale Latenz" },
            { value: "∞", label: "Skalierbarkeit" },
        ],
        capabilities: [
            {
                id: "DB-01",
                title: "Multi-Region Sharding",
                description:
                    "Datenbank-Partitionierung über globale Knotenpunkte zur Latenzminimierung.",
            },
            {
                id: "DB-02",
                title: "Oplog-Monitoring",
                description:
                    "Echtzeit-Überwachung der Operations-Logs für atomare Transaktionen.",
            },
            {
                id: "DB-03",
                title: "Railway Orchestration",
                description:
                    "Automatisierte CI/CD Pipelines ohne manuellen DevOps-Overhead.",
            },
            {
                id: "DB-04",
                title: "ACID Compliance",
                description:
                    "Strikte Garantie von Konsistenz und Dauerhaftigkeit für Schreiboperationen.",
            },
        ],
        process: [
            { step: "01", title: "Infrastructure Audit", description: "Analyse der bestehenden Datenbank-Architektur und Identifikation kritischer Bottlenecks." },
            { step: "02", title: "Cluster Design", description: "Konzeption der MongoDB Atlas Multi-Region Topologie mit optimierter Shard-Key Strategie." },
            { step: "03", title: "Zero-Downtime Migration", description: "Parallelbetrieb alter und neuer Infrastruktur mit automatisiertem Rollback bei Anomalien." },
            { step: "04", title: "Monitoring Setup", description: "Konfiguration von Oplog-Monitoring, Alerting-Schwellwerten und automatisiertem Failover." },
        ],
        useCases: [
            { segment: "FINTECH", title: "Transaktionale Systeme", description: "Für Plattformen mit Millionen täglicher Schreiboperationen und strikten ACID-Anforderungen." },
            { segment: "E-COMMERCE", title: "Globale Produktdaten", description: "Für internationale Shops mit regionalen Datenbanken und lokalem Caching für minimale Latenz." },
            { segment: "ENTERPRISE", title: "Business Intelligence", description: "Für Unternehmen mit komplexen Aggregation-Pipelines und Analytics-Dashboards in Echtzeit." },
        ],
    },
    {
        slug: "fintech-pipelines",
        systemId: "SYS_03_FINANCE",
        title: "Fintech Pipelines",
        tagline: "Automatisierte Zahlungsströme für Global Player.",
        metrics: "PCI-DSS LEVEL 1 // 0MS LAG",
        stats: [
            { value: "L1", label: "PCI-DSS Compliance" },
            { value: "0ms", label: "Webhook Latenz" },
            { value: "100%", label: "Idempotenz-Garantie" },
        ],
        capabilities: [
            {
                id: "PAY-01",
                title: "Stripe Custom Flow",
                description:
                    "Deep Integration von Zahlungsströmen fernab von Standard-Checkouts.",
            },
            {
                id: "PAY-02",
                title: "Idempotency Logic",
                description:
                    "Schutz vor doppelten Abbuchungen bei Netzwerkabbrüchen durch Token-Validierung.",
            },
            {
                id: "PAY-03",
                title: "Real-time Webhooks",
                description:
                    "Echtzeit-Signale von Zahlungsanbietern für sofortige Systemreaktionen.",
            },
            {
                id: "PAY-04",
                title: "Automated Reconciliation",
                description:
                    "Vollautomatische buchhalterische Prozesse ohne manuellen Aufwand.",
            },
        ],
        process: [
            { step: "01", title: "Flow Mapping", description: "Vollständige Dokumentation aller Zahlungsströme und Identifikation von Compliance-Risikopunkten." },
            { step: "02", title: "Stripe Integration", description: "Implementierung der Custom Flows mit lückenlosen Idempotency Keys und strukturiertem Error-Handling." },
            { step: "03", title: "Webhook Architecture", description: "Aufbau der Event-Driven Architektur für sofortige, zuverlässige Systemreaktionen auf Payment-Events." },
            { step: "04", title: "PCI-DSS Audit", description: "Compliance-Prüfung und Sicherheitsvalidierung vor Go-Live — kein Release ohne Zertifizierung." },
        ],
        useCases: [
            { segment: "MARKETPLACE", title: "Plattform-Payments", description: "Für Marketplaces mit Stripe Connect und komplexen Split-Payment Logiken zwischen Vendoren." },
            { segment: "SUBSCRIPTION", title: "Recurring Revenue", description: "Für SaaS-Produkte mit Trial-to-Paid Flows, Dunning-Management und automatisierter Rechnungsstellung." },
            { segment: "ENTERPRISE", title: "B2B Invoicing", description: "Für Unternehmen mit automatisierter Rechnungsstellung, Steuerlogik und ERP-Integration." },
        ],
    },
    {
        slug: "design-ops-system",
        systemId: "SYS_04_GOVERNANCE",
        title: "Design Ops System",
        tagline: "Marken-Identität als auditierbarer Code.",
        metrics: "ATOMIC DESIGN // WCAG AAA",
        stats: [
            { value: "< 50kb", label: "Build-Size" },
            { value: "AAA", label: "WCAG Standard" },
            { value: "0px", label: "Border-Radius Dogma" },
        ],
        capabilities: [
            {
                id: "UI-01",
                title: "0px Border-Radius Dogma",
                description:
                    "Kompromisslose, architektonische Ästhetik für maximale Autorität.",
            },
            {
                id: "UI-02",
                title: "Component Governance",
                description:
                    "Zentrale Steuerung aller UI-Elemente für skalierbare Markenführung.",
            },
            {
                id: "UI-03",
                title: "WCAG AAA Compliance",
                description:
                    "Höchste Barrierefreiheit-Standards für globale Marktführer.",
            },
            {
                id: "UI-04",
                title: "Tailwind Logic",
                description:
                    "Utility-First CSS Architektur für minimale Build-Sizes (< 50kb).",
            },
        ],
        process: [
            { step: "01", title: "Brand Audit", description: "Analyse bestehender Assets und Definition des Design-Token Systems als Single-Source-of-Truth." },
            { step: "02", title: "Component Library", description: "Aufbau der atomaren Komponenten-Bibliothek simultan in Figma und Code." },
            { step: "03", title: "Governance Setup", description: "Einrichtung der Versionierungs-, Review- und Freigabeprozesse für alle UI-Änderungen." },
            { step: "04", title: "Developer Handoff", description: "Vollständig annotiertes Figma mit Tokens, States, Breakpoints und Interaction-Specifications." },
        ],
        useCases: [
            { segment: "SCALE-UP", title: "Wachsende Produktteams", description: "Für Teams, die von 5 auf 50+ Designer skalieren, ohne Design-Inkonsistenz zu riskieren." },
            { segment: "ENTERPRISE", title: "Konzern-Websites", description: "Für Unternehmen mit 10+ Web-Properties, die konsistent und markentreu erscheinen müssen." },
            { segment: "PRODUCT", title: "SaaS Interface Systems", description: "Für Produkte, deren UI-Komplexität eine systematische Governance als Fundament erfordert." },
        ],
    },
    {
        slug: "material-ui",
        systemId: "SYS_05_UI",
        title: "Material UI Logic",
        tagline: "Enterprise-grade Dashboard Komponenten — MUI als architektonische Präzisionswaffe.",
        metrics: "0ms RENDER-BLOCKING // WCAG AAA",
        stats: [
            { value: "0ms", label: "Render-Blocking Time" },
            { value: "AAA", label: "WCAG Compliance" },
            { value: "100%", label: "Brand-Konformität" },
        ],
        capabilities: [
            {
                id: "MUI-01",
                title: "Custom Theme Architecture",
                description:
                    "Kompromisslose Brand-Identity in jedem MUI-Element via ThemeProvider — kein Default bleibt unkontrolliert.",
            },
            {
                id: "MUI-02",
                title: "Enterprise Data Grids",
                description:
                    "Hochperformante Datentabellen mit Virtualisierung für Millionen-Zeilen-Datensätze ohne Performance-Verlust.",
            },
            {
                id: "MUI-03",
                title: "Headless Component Logic",
                description:
                    "MUI-Logikschicht entkoppelt von der Darstellung — maximale Flexibilität, null Lock-in.",
            },
            {
                id: "MUI-04",
                title: "Atomic Override System",
                description:
                    "Strukturierte sx-prop und styled() Hierarchie für skalierbare, auditierbare UI-Systeme.",
            },
        ],
        process: [
            { step: "01", title: "Theme Audit", description: "Analyse der bestehenden MUI-Konfiguration und Identifikation aller Brand-Abweichungen." },
            { step: "02", title: "Custom ThemeProvider", description: "Entwicklung des vollständigen ThemeProvider mit präzisen Design-Tokens nach Brand-Dogma." },
            { step: "03", title: "Component Override", description: "Systematische sx-prop und styled() Implementierung für alle MUI-Elemente ohne Ausnahme." },
            { step: "04", title: "Performance Check", description: "Bundle-Size Audit, Tree-Shaking Konfiguration und Final-Review vor Übergabe." },
        ],
        useCases: [
            { segment: "ENTERPRISE", title: "Admin Dashboards", description: "Für interne Tools und Backoffice-Systeme mit hoher Daten-Dichte und komplexen Formularen." },
            { segment: "B2B SAAS", title: "Komplexe Produktoberflächen", description: "Für SaaS-Produkte mit DataGrids, Charts und mehrstufigen Workflow-Interfaces." },
            { segment: "STARTUP", title: "Premium MVPs", description: "Für Teams, die MUI als Entwicklungsbeschleuniger nutzen und trotzdem Elite-Niveau erreichen wollen." },
        ],
    },
    {
        slug: "ux-ui-design",
        systemId: "SYS_06_DESIGN",
        title: "UX/UI Design",
        tagline: "Design als Code — Marken-Identität konstruiert mit systemischer Präzision.",
        metrics: "0px BORDER-RADIUS // FIGMA → CODE",
        stats: [
            { value: "0px", label: "Border-Radius Dogma" },
            { value: "AAA", label: "WCAG Standard" },
            { value: "100%", label: "Design-to-Code Accuracy" },
        ],
        capabilities: [
            {
                id: "UX-01",
                title: "Figma Component Libraries",
                description:
                    "Strukturierte Design-Systeme als Single-Source-of-Truth — jede Komponente versioniert und auditierbar.",
            },
            {
                id: "UX-02",
                title: "Interaction Architecture",
                description:
                    "Micro-Animationen und State-Transitions nach UX-Prinzipien — kein Pixel bewegt sich ohne Absicht.",
            },
            {
                id: "UX-03",
                title: "Information Architecture",
                description:
                    "Klare Navigationshierarchien und mentale Modelle — Nutzer verstehen das System in Sekunden.",
            },
            {
                id: "UX-04",
                title: "WCAG AAA Compliance",
                description:
                    "Barrierefreiheit als architektonische Entscheidung — nicht als Nachgedanke, sondern als Qualitätsmerkmal.",
            },
        ],
        process: [
            { step: "01", title: "Discovery & Research", description: "User Research, Wettbewerbsanalyse und Definition messbarer UX-Erfolgskriterien." },
            { step: "02", title: "Information Architecture", description: "Sitemap, User Flows und Wireframes als strukturelles Fundament vor jedem Pixel." },
            { step: "03", title: "Visual Design", description: "High-Fidelity Figma Prototypen nach PDA Design-Dogma — kompromisslos und systemisch." },
            { step: "04", title: "Developer Handoff", description: "Vollständig annotiertes Figma mit Design-Tokens, Responsive States und Interaction-Specs." },
        ],
        useCases: [
            { segment: "STARTUP", title: "Product Launch", description: "Für Produkte, die von Tag 1 professionell wirken und Vertrauen bei ersten Nutzern aufbauen müssen." },
            { segment: "REBRAND", title: "Corporate Redesign", description: "Für Unternehmen, die ihr digitales Erscheinungsbild auf Elite-Niveau transformieren wollen." },
            { segment: "PRODUCT", title: "Feature-Redesign", description: "Für etablierte Produkte mit Legacy-UI, die modernisiert werden muss ohne den Nutzerfluss zu brechen." },
        ],
    },
    {
        slug: "nodejs-core",
        systemId: "SYS_07_BACKEND",
        title: "Node.js Core",
        tagline: "Skalierbare Backend-Infrastruktur für Hochlast-Anforderungen ohne Kompromisse.",
        metrics: "99.99% UPTIME // < 10MS API LATENZ",
        stats: [
            { value: "99.99%", label: "Uptime SLA" },
            { value: "< 10ms", label: "API Latenz" },
            { value: "∞", label: "Concurrent Connections" },
        ],
        capabilities: [
            {
                id: "NODE-01",
                title: "Express / Fastify APIs",
                description:
                    "Hochoptimierte REST und GraphQL APIs mit strukturierter Middleware-Architektur für Enterprise-Anforderungen.",
            },
            {
                id: "NODE-02",
                title: "Event-Loop Optimization",
                description:
                    "Non-blocking I/O Architektur für maximale Concurrent-Connections — kein Thread blockiert, kein Request wartet.",
            },
            {
                id: "NODE-03",
                title: "WebSocket Infrastructure",
                description:
                    "Echtzeit-Kommunikationsschicht für Live-Dashboards, Notifications und kollaborative Systeme.",
            },
            {
                id: "NODE-04",
                title: "Railway CI/CD Pipelines",
                description:
                    "Automatisierte Deployment-Pipelines mit Zero-Downtime Releases und rollback-gesicherter Infrastruktur.",
            },
        ],
        process: [
            { step: "01", title: "API Architecture", description: "Definition der Endpunkte, Datenmodelle, Middleware-Strategie und Authentifizierungsschicht." },
            { step: "02", title: "Core Implementation", description: "Entwicklung der Express/Fastify API mit Rate-Limiting, Validierung und strukturiertem Error-Handling." },
            { step: "03", title: "Database Integration", description: "MongoDB Atlas Anbindung mit optimierten Aggregation-Pipelines und Connection-Pooling." },
            { step: "04", title: "CI/CD Deployment", description: "Railway Pipeline mit Health-Checks, Zero-Downtime Releases und automatisiertem Rollback." },
        ],
        useCases: [
            { segment: "API-FIRST", title: "Microservice APIs", description: "Für Plattformen, die skalierbare REST oder GraphQL APIs als zentralen Infrastruktur-Kern benötigen." },
            { segment: "REALTIME", title: "Live-Systeme", description: "Für Anwendungen mit WebSocket-basierter Echtzeit-Kommunikation und hoher Concurrent-Last." },
            { segment: "ENTERPRISE", title: "Backend Integration", description: "Für Unternehmen, die bestehende Systeme via Node.js-Middleware-Schicht verbinden und modernisieren." },
        ],
    },
    {
        slug: "socketio-realtime",
        systemId: "SYS_08_REALTIME",
        title: "Socket.IO Real-Time",
        tagline: "Echtzeit-Kommunikationsarchitektur für skalierbare Web-Applikationen — Events in Millisekunden, global zuverlässig.",
        metrics: "< 1MS LATENCY // 1M+ CONCURRENT",
        stats: [
            { value: "< 1ms", label: "Event-Latenz" },
            { value: "1M+", label: "Concurrent Connections" },
            { value: "99.99%", label: "Delivery Guarantee" },
        ],
        capabilities: [
            {
                id: "RT-01",
                title: "WebSocket Architecture",
                description: "Persistente bidirektionale Verbindungen über Socket.IO mit automatischem Long-Polling Fallback für maximale Kompatibilität.",
            },
            {
                id: "RT-02",
                title: "Room & Namespace Management",
                description: "Strukturierte Echtzeit-Kanäle für isolierte Kommunikationsräume — skalierbar von 10 auf 10.000 simultane Nutzer.",
            },
            {
                id: "RT-03",
                title: "Event Broadcasting",
                description: "Selektive und globale Event-Verteilung mit garantierter Zustellungsreihenfolge und Idempotenz-Protokoll.",
            },
            {
                id: "RT-04",
                title: "Reconnection & State Sync",
                description: "Automatische Wiederverbindungslogik mit State-Recovery — kein Datenverlust bei Netzwerkunterbrechungen.",
            },
        ],
        process: [
            { step: "01", title: "Architecture Design", description: "Analyse der Echtzeit-Anforderungen und Definition der Event-Taxonomie, Room-Struktur und Skalierungsstrategie." },
            { step: "02", title: "Server Integration", description: "Node.js Socket.IO Server-Setup mit Redis Adapter für horizontale Skalierung über mehrere Instanzen." },
            { step: "03", title: "Client Implementation", description: "Frontend-Integration mit optimiertem Event-Handling, State-Management und Connection-Lifecycle-Kontrolle." },
            { step: "04", title: "Load Testing", description: "Lasttests mit simulierten Concurrent-Connections zur Verifikation der Latenz-SLAs und Reconnection-Stabilität." },
        ],
        useCases: [
            { segment: "LIVE PLATFORMS", title: "Echtzeit-Dashboards", description: "Für Analytics-Plattformen und Operations-Systeme mit Live-Datenupdates und Multi-User-Synchronisation." },
            { segment: "COLLABORATION", title: "Kollaborative Applikationen", description: "Für Tools mit gleichzeitiger Bearbeitung durch mehrere Nutzer — Dokumente, Whiteboards, Projektmanagement." },
            { segment: "TRADING/GAMING", title: "Low-Latency Systeme", description: "Für Anwendungen, bei denen jede Millisekunde zählt — Handelssysteme, Echtzeit-Auktionen, Multiplayer-Logik." },
        ],
    },
    {
        slug: "chatbot-assistant",
        systemId: "SYS_09_AI",
        title: "Chatbot & KI-Assistent",
        tagline: "Intelligente Konversations-Interfaces — von FAQ-Automation bis zur tiefen Enterprise KI-Integration.",
        metrics: "< 200MS RESPONSE // 24/7 AVAILABILITY",
        stats: [
            { value: "< 200ms", label: "Response-Zeit" },
            { value: "24/7", label: "Verfügbarkeit" },
            { value: "95%+", label: "Intent-Erkennungsrate" },
        ],
        capabilities: [
            {
                id: "AI-01",
                title: "LLM API Integration",
                description: "Anbindung führender Sprachmodelle (OpenAI, Anthropic, Mistral) via strukturierter Prompt-Architektur und Context-Management.",
            },
            {
                id: "AI-02",
                title: "Multi-Turn Conversations",
                description: "Session-basiertes Gesprächsgedächtnis für kohärente, kontextbewusste Dialoge ohne Informationsverlust über mehrere Nachrichten.",
            },
            {
                id: "AI-03",
                title: "CRM & Backend Integration",
                description: "Nahtlose Anbindung an bestehende Systeme — Bestellstatus, Kundendaten, Support-Tickets direkt im Chat-Interface abrufbar.",
            },
            {
                id: "AI-04",
                title: "Escalation & Handoff Logic",
                description: "Intelligente Eskalationsregeln für den Übergang vom Bot zum menschlichen Agenten — mit vollem Gesprächskontext-Transfer.",
            },
        ],
        process: [
            { step: "01", title: "Use Case Analysis", description: "Definition der Bot-Personas, Conversation Flows und Integrationspunkte mit bestehenden Systemen." },
            { step: "02", title: "Conversation Design", description: "Strukturierung der Dialog-Trees, Intent-Mapping und Fallback-Strategien für robuste Nutzererfahrungen." },
            { step: "03", title: "AI Integration", description: "LLM-Anbindung mit optimierter Prompt-Architektur, Rate-Limiting und Cost-Management für Production-Betrieb." },
            { step: "04", title: "Training & Optimization", description: "Analyse der Chat-Logs, Intent-Kalibrierung und kontinuierliche Performance-Verbesserung nach Go-Live." },
        ],
        useCases: [
            { segment: "CUSTOMER SERVICE", title: "Support-Automation", description: "Für Unternehmen mit hohem Support-Volumen — FAQ-Beantwortung, Ticket-Erstellung und Statusabfragen automatisiert." },
            { segment: "E-COMMERCE", title: "Sales & Bestellassistenz", description: "Für Shops mit komplexem Produktkatalog — Produktberatung, Bestellverfolgung und Retouren-Management im Chat." },
            { segment: "ENTERPRISE", title: "Interne Knowledge Bots", description: "Für Unternehmen mit großem internen Wissensbestand — HR-FAQs, IT-Helpdesk und Onboarding-Assistenten." },
        ],
    },
    {
        slug: "google-analytics",
        systemId: "SYS_10_ANALYTICS",
        title: "Google Analytics",
        tagline: "Daten-getriebene Entscheidungen durch präzise GA4-Implementierung, Custom Reporting und vollständige Tracking-Architektur.",
        metrics: "GA4 // GTM // 100% DATA ACCURACY",
        stats: [
            { value: "100%", label: "Tracking-Genauigkeit" },
            { value: "GA4", label: "Analytics Standard" },
            { value: "< 24h", label: "Implementierungszeit" },
        ],
        capabilities: [
            {
                id: "AN-01",
                title: "GA4 Implementation",
                description: "Vollständige Google Analytics 4 Konfiguration mit Event-Taxonomie, User-Properties und Conversion-Tracking nach Measurement-Plan.",
            },
            {
                id: "AN-02",
                title: "Google Tag Manager Architecture",
                description: "Strukturierte GTM Container-Architektur für skalierbare Tag-Verwaltung ohne Code-Deployments bei jeder Tracking-Änderung.",
            },
            {
                id: "AN-03",
                title: "Conversion Tracking",
                description: "Präzises E-Commerce und Conversion-Tracking — Funnels, Micro-Conversions und Revenue-Attribution für datenbasierte Budgetentscheidungen.",
            },
            {
                id: "AN-04",
                title: "Looker Studio Dashboards",
                description: "Custom Reporting-Dashboards in Google Looker Studio — automatisierte Berichte für Stakeholder, täglich aktuell und brandkonform.",
            },
        ],
        process: [
            { step: "01", title: "Analytics Audit", description: "Bestandsaufnahme bestehender Tracking-Implementierung und Identifikation von Datenlücken und Fehlkonfigurationen." },
            { step: "02", title: "Measurement Plan", description: "Definition aller zu trackenden Events, Conversions und KPIs — dokumentiert als Single-Source-of-Truth vor Implementierungsbeginn." },
            { step: "03", title: "GTM & GA4 Setup", description: "Implementierung des vollständigen Tag-Stacks inklusive Enhanced E-Commerce, Custom Dimensions und Server-Side Tagging." },
            { step: "04", title: "Reporting & Validierung", description: "QA-Testing aller Events, Dashboard-Aufbau und Übergabe mit Dokumentation für eigenständige Nutzung." },
        ],
        useCases: [
            { segment: "E-COMMERCE", title: "Revenue-Tracking", description: "Für Online-Shops mit komplexen Funnels — vollständige Transaktionsdaten, Abbruch-Analyse und Kanal-Attribution." },
            { segment: "MARKETING", title: "Campaign Analytics", description: "Für Marketing-Teams, die Kanal-Performance, UTM-Tracking und Budget-ROI präzise messen und optimieren wollen." },
            { segment: "ENTERPRISE", title: "Multi-Property Reporting", description: "Für Unternehmen mit mehreren Web-Properties — konsolidierte Dashboards und standardisierte Tracking-Governance." },
        ],
    },
    {
        slug: "google-indexing",
        systemId: "SYS_11_SEO",
        title: "Google Indexierung",
        tagline: "Technische SEO-Architektur für maximale Sichtbarkeit — strukturiert, messbar und nachhaltig indexierbar.",
        metrics: "CORE WEB VITALS // SCHEMA.ORG // GSC",
        stats: [
            { value: "100", label: "Core Web Vitals Score" },
            { value: "100%", label: "Indexierungsrate" },
            { value: "< 24h", label: "Indexierungs-Latenz" },
        ],
        capabilities: [
            {
                id: "SEO-01",
                title: "Technical SEO Audit",
                description: "Vollständige Analyse von Crawlability, Indexierbarkeit, Duplicate-Content und technischen SEO-Fehlern via Search Console und Screaming Frog.",
            },
            {
                id: "SEO-02",
                title: "Sitemap & Robots Architecture",
                description: "Strukturierte XML-Sitemap-Architektur mit Priority-Steuerung und robots.txt-Konfiguration für präzise Crawl-Budget-Allokation.",
            },
            {
                id: "SEO-03",
                title: "Structured Data & Schema.org",
                description: "JSON-LD Markup für Rich Results — Organization, Product, Article, FAQ und LocalBusiness für maximale SERP-Präsenz.",
            },
            {
                id: "SEO-04",
                title: "Google Search Console Setup",
                description: "GSC-Konfiguration, Property-Verifikation, Indexierungs-Monitoring und Instant Indexing API für sofortige Crawl-Anfragen bei Content-Updates.",
            },
        ],
        process: [
            { step: "01", title: "SEO Audit", description: "Technische Analyse des gesamten Web-Auftritts — Crawl-Fehler, Indexierungs-Probleme, Core Web Vitals und Structured Data Gaps." },
            { step: "02", title: "Architektur-Optimierung", description: "URL-Struktur, interne Verlinkung, Canonical-Tags und Hreflang für internationale Projekte — fundament vor Content." },
            { step: "03", title: "Structured Data Implementation", description: "JSON-LD Markup für alle relevanten Seitentypen mit Validierung via Google Rich Results Test und Search Console." },
            { step: "04", title: "Monitoring & Reporting", description: "GSC-Dashboard, Ranking-Tracking und monatliche SEO-Reports mit Fortschrittsmessung gegen definierte KPIs." },
        ],
        useCases: [
            { segment: "E-COMMERCE", title: "Produkt-Sichtbarkeit", description: "Für Shops mit tausenden Produktseiten — strukturierte Indexierungsstrategie, Product-Schema und Merchant Center Integration." },
            { segment: "CORPORATE", title: "Lokale & nationale Präsenz", description: "Für Unternehmen, die in regionalen oder nationalen Suchergebnissen systematisch sichtbar werden wollen." },
            { segment: "CONTENT", title: "News & Blog-Indexierung", description: "Für Content-Publisher mit regelmäßigen Veröffentlichungen — Instant Indexing, News-Sitemap und AMP-Integration." },
        ],
    },
];

export function getServiceBySlug(slug: string) {
    return servicesData.find((service) => service.slug === slug);
}

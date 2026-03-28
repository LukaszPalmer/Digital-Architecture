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
];

export function getServiceBySlug(slug: string) {
    return servicesData.find((service) => service.slug === slug);
}

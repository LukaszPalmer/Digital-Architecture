// src/app/railway/page.tsx
// Server Component — RSC-First, 0 TBT.
// Design-Dogma: #001F3F / #FFFFFF / #000000, 0px border-radius.
// SEO: Geo-SEO Duesseldorf/NRW, ProfessionalService + FAQPage JSON-LD.
// Topic: Railway Cloud — Scalable Microservice Hosting (StoryBrand PAS + Bridge).

import type { Metadata } from "next";
import RailwayHero from "@/components/sections/RailwayHero";
import RailwayProblem from "@/components/sections/RailwayProblem";
import RailwayCapabilities from "@/components/sections/RailwayCapabilities";
import RailwayArchitecture from "@/components/sections/RailwayArchitecture";
import RailwayCodeExamples from "@/components/sections/RailwayCodeExamples";
import RailwayProcess from "@/components/sections/RailwayProcess";
import RailwayUseCases from "@/components/sections/RailwayUseCases";
import RailwayFAQ from "@/components/sections/RailwayFAQ";
import RailwayCTA from "@/components/sections/RailwayCTA";

/* ── SEO METADATA ── */
export const metadata: Metadata = {
    title: "Railway Cloud — Scalable Microservice Hosting | Cloud-Hosting Agentur Duesseldorf",
    description:
        "Railway Cloud Hosting aus Duesseldorf — skalierbare Microservice-Infrastruktur, Docker-Container-Orchestrierung und Zero-Downtime-Deployments fuer Node.js, Python und Go Backends. Automatisches Horizontal-Scaling bei Traffic-Peaks, Private Networking zwischen Services, Git-native CI/CD und 99.99% Uptime-SLA. Schluss mit 502-Gateway-Errors, manueller Server-Wartung und naechtlichen Traffic-Abstuerzen. Cloud-Infrastruktur-Agentur fuer Startups, Scale-ups und etablierte Unternehmen in NRW.",
    keywords: [
        // Laien & Business-Fokus (Problem-Loesung)
        "komplexe app hosten lassen",
        "server fuer webanwendung mieten",
        "automatische skalierung webseite",
        "server stuerzt bei vielen nutzern ab",
        "hintergrundprozesse fuer apps einrichten",
        "python script online ausfuehren",
        "backend fuer mobile apps hosten",
        "infrastruktur fuer startups aufbauen",
        "webseite auf mehrere server verteilen",
        "managed hosting fuer entwickler",
        // Nutzen- & Performance-Fokus
        "ausfallsicheres app-hosting",
        "server-kosten optimieren durch autoscaling",
        "schnelles deployment fuer software",
        "hochverfuegbare microservices",
        "zero-downtime updates",
        "cloud infrastruktur ohne wartungsaufwand",
        "maximale flexibilitaet beim hosting",
        "sicherheit fuer unternehmens-apps",
        // Experten & Tech-Fokus
        "Railway.app Deployment Workflow",
        "Microservices Architektur Patterns",
        "Docker Container Orchestrierung",
        "Infrastructure as Code",
        "CI/CD Pipelines fuer Backends",
        "Multi-Service Umgebungen",
        "Environment Variable Management",
        "Vertical Horizontal Scaling",
        "Nixpacks Buildpack Deployment",
        "Private Service Mesh Railway",
        // Regionaler Bezug
        "Cloud-Hosting Experten Duesseldorf",
        "Microservice Beratung NRW",
        "Software-Infrastruktur Agentur Duesseldorf",
        "Railway Cloud Spezialisten NRW",
    ],
    alternates: { canonical: "https://palmer-digital.de/railway" },
    openGraph: {
        title: "Railway Cloud — Scalable Microservice Hosting | Duesseldorf",
        description:
            "Skalierbare Microservice-Infrastruktur aus Duesseldorf — Docker-Orchestrierung, Auto-Scaling, Private Networking und 99.99% Uptime fuer Node.js-, Python- und Go-Backends. CI/CD ab dem ersten Git-Push, keine manuelle Server-Wartung fuer Startups und Unternehmen in NRW.",
        url: "https://palmer-digital.de/railway",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Railway Cloud — Scalable Microservice Hosting | Duesseldorf",
        description:
            "Schluss mit 502-Errors und Traffic-Abstuerzen. Container-Orchestrierung, Auto-Scaling und Zero-Downtime-Deployments fuer mitwachsende Backends aus Duesseldorf/NRW.",
    },
};

/* ── JSON-LD STRUCTURED DATA — ProfessionalService ── */
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Palmer Digital — Railway Cloud: Scalable Microservice Hosting",
    description:
        "Cloud Infrastructure & Microservice Hosting aus Duesseldorf. Wir designen, deployen und betreiben Railway-basierte Backend-Infrastrukturen fuer Node.js-, Python- und Go-Services, Worker-Prozesse, Cron-Jobs und WebSocket-Server. Docker-Container-Orchestrierung, Auto-Scaling, Private Networking, Infrastructure as Code, Health-Check-basierte Zero-Downtime-Deployments und 24/7 Monitoring — fuer Startups, Scale-ups und etablierte Unternehmen in Duesseldorf, NRW und ganz Deutschland. EU-Region fuer DSGVO-konforme Datenhaltung verfuegbar.",
    url: "https://palmer-digital.de/railway",
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
    serviceType: "Cloud Infrastructure & Microservice Hosting",
    areaServed: [
        { "@type": "City", name: "Duesseldorf" },
        { "@type": "State", name: "Nordrhein-Westfalen" },
        { "@type": "Country", name: "Deutschland" },
        { "@type": "AdministrativeArea", name: "Europaeische Union" },
    ],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Railway Cloud & Microservice Hosting Leistungen",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Railway Projekt-Setup & Microservice-Architektur",
                    description:
                        "Komplettes Railway-Setup mit Multi-Service-Projekt, Environment-Strategie (Staging/Production), Git-Integration und Branch-Deployments. Definition der Service-Topologie: API, Worker, Cron, Datenbank — sauber isoliert und privat vernetzt.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Docker & Nixpacks Container-Orchestrierung",
                    description:
                        "Produktionsreife Dockerfiles oder Nixpacks-Buildpacks fuer Node.js, Python, Go, Rust oder Deno. Multi-Stage-Builds, Image-Groessen unter 150 MB, non-root User und reproduzierbare Builds. Einmal gebaut, laeuft es ueberall — vom Laptop bis zur Production.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Auto-Scaling & Traffic-Peak-Management",
                    description:
                        "Horizontal Scaling auf Basis von CPU-, Memory- und Request-Metriken. Services skalieren automatisch bei TV-Auftritten, Sale-Events oder viralen Spikes — und skalieren wieder herunter, um Kosten zu sparen. Keine schlaflosen Naechte bei Traffic-Peaks.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Zero-Downtime CI/CD & Health Checks",
                    description:
                        "Git-native CI/CD mit Health-Check-basiertem Rollout, Blue-Green-Deploys und Instant-Rollback. Jeder Merge auf main triggert Tests, Container-Build und einen Production-Release ohne einen einzigen 502-Error fuer Endnutzer.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Private Networking & Service Mesh",
                    description:
                        "Interne Kommunikation zwischen API, Worker, Datenbank und Cache laeuft ueber Railways Private Network — nie ueber das oeffentliche Internet. Submillisekunden-Latenz, kein zusaetzlicher Egress-Traffic und reduzierte Angriffsflaeche.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Infrastructure-Beratung & Migration Duesseldorf",
                    description:
                        "Architektur-Reviews, Monolith-zu-Microservice-Migration, Kostenoptimierung und Compliance-Beratung (EU-Region, DSGVO). Persoenlich vor Ort in Duesseldorf oder remote fuer Unternehmen in ganz NRW.",
                },
            },
        ],
    },
    specialty: [
        "Railway Cloud Deployment",
        "Microservice Architecture",
        "Docker Container Orchestrierung",
        "Infrastructure as Code",
        "CI/CD Pipeline Engineering",
        "Auto-Scaling & Load-Management",
        "Zero-Downtime Deployments",
        "Private Service Networking",
        "Cloud-Hosting Agentur Duesseldorf",
        "Microservice Beratung NRW",
        "Railway Cloud Spezialisten NRW",
    ],
    knowsAbout: [
        "Railway.app Platform",
        "Railway Private Networking",
        "Railway Volumes & Persistent Storage",
        "Nixpacks Buildpacks",
        "Docker & OCI Images",
        "Multi-Stage Docker Builds",
        "Node.js Production Deployment",
        "Python & FastAPI Hosting",
        "Go Microservices",
        "WebSocket Server Hosting",
        "Cron Job Scheduling",
        "Worker Queue Processing",
        "Horizontal & Vertical Scaling",
        "Health Checks & Liveness Probes",
        "Environment Variable Management",
        "Infrastructure as Code",
        "Blue-Green Deployments",
        "Zero-Downtime Releases",
        "PostgreSQL & Redis on Railway",
        "MongoDB Atlas Integration",
        "DSGVO & EU-Region Compliance",
    ],
};

/* ── JSON-LD STRUCTURED DATA — FAQPage ── */
const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Was ist der Vorteil von Railway gegenueber herkoemmlichen Servern?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ein klassischer Root- oder vServer ist ein statisches Rechteck: feste CPU, feste RAM, feste Disk — und die komplette Wartung (Security-Patches, Kernel-Updates, TLS-Renewal, Backup-Strategie) liegt bei Ihnen. Wenn Traffic spitzt, stuerzt er ab. Railway ist containerisiert und elastisch: Jeder Service laeuft in einem isolierten Docker-Container, skaliert horizontal bei Last und wird zentral gepatcht. Ein Git-Push ersetzt SSH-Deployment-Scripte, ein Health-Check ersetzt manuelles Neustarten und ein Dashboard ersetzt tail -f /var/log/syslog. Ergebnis: Sie schreiben Code, Railway betreibt die Infrastruktur.",
            },
        },
        {
            "@type": "Question",
            name: "Wie sicher sind meine Daten in der Railway Cloud?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Railway bietet mehrere Sicherheitsebenen: Container-Isolation ueber Firecracker-MicroVMs, verschluesseltes Private Networking zwischen Services (kein Traffic ueber das oeffentliche Internet), automatische TLS-Zertifikate fuer alle Public Endpoints, Secret-Management fuer Environment-Variablen (verschluesselt at-rest und nie im Build-Log sichtbar) und regelmaessige Security-Audits. Fuer DSGVO-Compliance kann die EU-Region (Frankfurt/Amsterdam) gewaehlt werden — Ihre Daten verlassen den europaeischen Rechtsraum nicht. Backups, Point-in-Time-Recovery fuer Datenbanken und Volume-Snapshots sind integriert.",
            },
        },
        {
            "@type": "Question",
            name: "Ab wann brauche ich eine Microservice-Architektur?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Die ehrliche Antwort: spaeter als das Internet behauptet. Ein gut strukturierter Monolith traegt die meisten Startups bis weit jenseits von 10.000 aktiven Nutzern. Der Wechsel zu Microservices lohnt sich, wenn mindestens eines dieser Kriterien zutrifft: (1) Mehrere Teams deployen unabhaengig und blockieren sich gegenseitig, (2) einzelne Bereiche Ihrer App haben fundamental unterschiedliche Skalierungs-Profile (z.B. CPU-heavy Video-Encoding vs. IO-heavy API), (3) Teile der Logik brauchen andere Sprachen oder Libraries, (4) ein Bug in einem Feature darf niemals die gesamte App reissen. Railway macht beide Welten moeglich — Monolith heute, Microservice morgen, ohne Infrastruktur-Wechsel.",
            },
        },
        {
            "@type": "Question",
            name: "Wie verhindert Railway 502-Gateway-Errors und Downtime?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Durch drei Mechanismen: Erstens Health-Check-basiertes Rollout — ein neuer Container geht erst dann live, wenn sein /healthz-Endpoint 200 OK antwortet; scheitert er, bleibt die alte Version aktiv. Zweitens Blue-Green-Deployments — die alte Version laeuft weiter, bis die neue nachweislich gesund ist, dann wird atomic umgeschaltet. Drittens Auto-Restart-Policies — crasht ein Container, startet Railway ihn sofort neu und routet Traffic auf gesunde Replicas. Zusaetzlich: Horizontal Scaling sorgt dafuer, dass ein einzelner Ausfall nie den gesamten Service lahmlegt, sondern nur einen von n Replicas betrifft. Echte 99.99% Uptime sind so erreichbar.",
            },
        },
        {
            "@type": "Question",
            name: "Kann ich meine bestehende Node.js- oder Python-App ohne Refactoring auf Railway migrieren?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ja, in den meisten Faellen. Wir migrieren in vier Phasen ohne Produktions-Unterbrechung: Erstens Build-System-Analyse (Dockerfile oder Nixpacks-Autodetect), Environment-Variable-Audit und Service-Topologie-Design. Zweitens Staging-Deployment auf Railway mit identischer Konfiguration wie Production — inklusive Datenbank-Replikation fuer realistische Tests. Drittens Lasttest mit k6 oder Artillery, Validierung der Health-Checks und Auto-Scaling-Verhalten. Viertens DNS-Cutover mit Zero-Downtime und einer Rollback-Option innerhalb von 30 Sekunden. Typische Migrations-Dauer fuer eine Standard-Node.js-API: drei bis fuenf Arbeitstage. Kunden in Duesseldorf und NRW erhalten auf Wunsch Vor-Ort-Betreuung.",
            },
        },
    ],
};

export default function RailwayCloudHostingPage() {
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
                    <RailwayHero />
                    <RailwayProblem />
                    <RailwayCapabilities />
                    <RailwayArchitecture />
                    <RailwayCodeExamples />
                    <RailwayProcess />
                    <RailwayUseCases />
                    <RailwayFAQ />
                    <RailwayCTA />
                </article>
            </main>
        </>
    );
}

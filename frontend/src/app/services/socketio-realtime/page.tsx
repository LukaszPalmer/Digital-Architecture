// src/app/services/socketio-realtime/page.tsx
// Static route — takes precedence over [slug]/page.tsx.
// RSC-First, 0 TBT. Design-Dogma: #001F3F / #FFFFFF / #000000, 0px border-radius.

import { Metadata } from "next";
import RealtimeHero from "@/components/sections/RealtimeHero";
import RealtimeProblem from "@/components/sections/RealtimeProblem";
import RealtimeCapabilities from "@/components/sections/RealtimeCapabilities";
import RealtimeArchitecture from "@/components/sections/RealtimeArchitecture";
import RealtimeCodeExamples from "@/components/sections/RealtimeCodeExamples";
import RealtimeProcess from "@/components/sections/RealtimeProcess";
import RealtimeUseCases from "@/components/sections/RealtimeUseCases";
import RealtimeFAQ from "@/components/sections/RealtimeFAQ";
import RealtimeCTA from "@/components/sections/RealtimeCTA";

/* ── SEO METADATA ── */
export const metadata: Metadata = {
    title: "Socket.IO & Echtzeit-Kommunikation | Chat-System & WebSocket Agentur Duesseldorf",
    description:
        "Professionelle Socket.IO & WebSocket-Entwicklung aus Duesseldorf — Echtzeit-Chat fuer Marktplaetze, Live-Benachrichtigungen, Nutzer-zu-Nutzer Messaging und skalierbare Echtzeit-Systeme mit Node.js. Ihre Agentur fuer Echtzeit-Kommunikation in NRW.",
    keywords: [
        "chat funktion fuer webseite",
        "nachrichten zwischen nutzern ermoeglichen",
        "marktplatz chat system software",
        "wie bei ebay kleinanzeigen nachrichten schreiben",
        "verkaeufer kontaktieren funktion programmieren",
        "interaktive plattform erstellen",
        "user-to-user messaging loesung",
        "kunden-kommunikation plattform",
        "echtzeit benachrichtigungen webseite",
        "live-update ohne neuladen",
        "push nachrichten browser shop",
        "nutzerbindung durch echtzeit kommunikation",
        "daten-synchronisierung in echtzeit",
        "low-latency messaging",
        "sicherer chat fuer plattformen",
        "conversion rate steigern durch live-interaktion",
        "Socket.io Agentur",
        "WebSocket Integration Next.js",
        "Node.js Real-time Backend",
        "skalierbare chat infrastruktur",
        "bidirektionale datenuebertragung",
        "event-gesteuerte kommunikationssysteme",
        "messaging API integration",
        "WebSocket vs Long-Polling vorteile",
        "Echtzeit-Systeme Entwicklung Duesseldorf",
        "Softwareagentur fuer Chat-Loesungen NRW",
        "Webentwickler Socket.io Duesseldorf",
        "Digitalagentur fuer Marktplatz-Funktionen",
    ],
    alternates: { canonical: "https://palmer-digital.de/services/socketio-realtime" },
    openGraph: {
        title: "Socket.IO & Echtzeit-Kommunikation | Chat & WebSocket Agentur Duesseldorf",
        description:
            "Echtzeit-Chat, Live-Benachrichtigungen und WebSocket-Systeme — professionell entwickelt mit Socket.IO und Node.js. Ihre Agentur fuer skalierbare Echtzeit-Kommunikation aus Duesseldorf.",
        url: "https://palmer-digital.de/services/socketio-realtime",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Socket.IO & Echtzeit-Kommunikation | WebSocket Agentur Duesseldorf",
        description:
            "Chat-Systeme wie bei eBay Kleinanzeigen, Live-Updates und bidirektionale Echtzeit-Kommunikation — entwickelt mit Socket.IO und Node.js in Duesseldorf.",
    },
};

/* ── JSON-LD STRUCTURED DATA ── */
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Palmer Digital — Socket.IO & Echtzeit-Kommunikation",
    description:
        "Professionelle Entwicklung von Echtzeit-Kommunikationssystemen aus Duesseldorf. Wir bauen Chat-Funktionen fuer Marktplaetze, Live-Benachrichtigungen fuer Webseiten und skalierbare WebSocket-Infrastrukturen mit Socket.IO und Node.js — bidirektional, low-latency und DSGVO-konform.",
    url: "https://palmer-digital.de/services/socketio-realtime",
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
    serviceType: "Echtzeit-Kommunikation & WebSocket-Entwicklung",
    areaServed: [
        {
            "@type": "City",
            name: "Duesseldorf",
        },
        {
            "@type": "State",
            name: "Nordrhein-Westfalen",
        },
        {
            "@type": "Country",
            name: "Deutschland",
        },
    ],
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Echtzeit-Kommunikation & Socket.IO Loesungen",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Marktplatz-Chat & Nutzer-zu-Nutzer Messaging",
                    description:
                        "Chat-Systeme wie bei eBay Kleinanzeigen — Verkaeufer kontaktieren, Nachrichten zwischen Nutzern ermoeglichen, Echtzeit-Benachrichtigungen und sichere Kommunikation fuer Ihre Plattform.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Live-Updates & Push-Benachrichtigungen",
                    description:
                        "Echtzeit-Benachrichtigungen fuer Webseiten und Onlineshops — Live-Updates ohne Neuladen, Push-Nachrichten im Browser und Daten-Synchronisierung in Echtzeit fuer maximale Nutzerbindung.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Skalierbare WebSocket-Infrastruktur",
                    description:
                        "Enterprise-grade Socket.IO Architektur mit Redis-Adapter fuer horizontale Skalierung, automatischem Long-Polling Fallback und Reconnection-Logik — konzipiert fuer 1M+ gleichzeitige Verbindungen.",
                },
            },
        ],
    },
    specialty: [
        "Chat-Funktion fuer Webseite",
        "Marktplatz Chat System",
        "Nachrichten zwischen Nutzern",
        "Echtzeit-Benachrichtigungen",
        "Live-Update ohne Neuladen",
        "Socket.IO Agentur",
        "WebSocket Integration",
        "Low-Latency Messaging",
        "Skalierbare Chat-Infrastruktur",
        "Echtzeit-Systeme Duesseldorf",
        "Softwareagentur Chat-Loesungen NRW",
    ],
    knowsAbout: [
        "Socket.IO",
        "WebSocket Protocol (RFC 6455)",
        "Server-Sent Events (SSE)",
        "Long-Polling",
        "Node.js Real-time Backend",
        "Redis Pub/Sub Adapter",
        "MessagePack Binary Protocol",
        "Room & Namespace Management",
        "Presence Detection",
        "Horizontal Scaling",
        "Event-Driven Architecture",
        "Bidirektionale Datenuebertragung",
    ],
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Was ist der Unterschied zwischen WebSockets, Long-Polling und Server-Sent Events?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "WebSockets bieten eine persistente, bidirektionale Verbindung — ideal fuer Chats und Live-Interaktionen, bei denen beide Seiten jederzeit Daten senden. Long-Polling simuliert Echtzeit durch wiederholte HTTP-Anfragen und ist ein zuverlaessiger Fallback, aber ressourcenintensiver. Server-Sent Events (SSE) sind unidirektional vom Server zum Client — ideal fuer Live-Feeds und Benachrichtigungen, aber nicht fuer Chats. Socket.IO nutzt WebSockets als Primaerprotokoll und faellt automatisch auf Long-Polling zurueck, wenn WebSockets blockiert werden.",
            },
        },
        {
            "@type": "Question",
            name: "Wie sicher sind WebSockets fuer Zahlungsdaten und sensible Kommunikation?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "WebSocket-Verbindungen laufen ueber WSS (WebSocket Secure) — das ist die verschluesselte Variante, vergleichbar mit HTTPS. In Kombination mit Token-basierter Authentifizierung (JWT), serverseitiger Validierung und DSGVO-konformer Datenverarbeitung auf europaeischen Servern sind WebSocket-basierte Systeme fuer sensible Kommunikation geeignet. Zahlungsdaten selbst sollten nie ueber WebSockets uebertragen werden — dafuer nutzen wir dedizierte PCI-DSS-konforme Zahlungs-APIs wie Stripe.",
            },
        },
        {
            "@type": "Question",
            name: "Kann ich eine Chat-Funktion wie bei eBay Kleinanzeigen fuer meinen Marktplatz bauen lassen?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ja. Wir entwickeln Nutzer-zu-Nutzer Messaging-Systeme mit allen Funktionen, die Sie von eBay Kleinanzeigen kennen: Verkaeufer kontaktieren, Nachrichtenverlauf, Echtzeit-Benachrichtigungen, Online-Status und Lesebestaetigungen. Die Architektur basiert auf Socket.IO mit Room-Management — jede Konversation ist ein isolierter Kommunikationskanal, skalierbar von 10 auf 100.000+ gleichzeitige Nutzer.",
            },
        },
        {
            "@type": "Question",
            name: "Wie viele gleichzeitige Nutzer kann ein Socket.IO-System verarbeiten?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Mit horizontaler Skalierung ueber den Redis-Adapter kann ein Socket.IO-System problemlos 1 Million+ gleichzeitige Verbindungen verarbeiten. Pro Node.js-Instanz sind je nach Server-Ressourcen 10.000–50.000 Connections realistisch. Durch Load-Balancing ueber mehrere Instanzen skaliert das System linear. Wir setzen auf Binary-Protokolle wie MessagePack, um die Bandbreite um bis zu 60% zu reduzieren.",
            },
        },
        {
            "@type": "Question",
            name: "Warum sollte ich mein Echtzeit-System in Duesseldorf entwickeln lassen?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Als Socket.IO Agentur in Duesseldorf kombinieren wir tiefe technische Expertise in Echtzeit-Systemen mit Naehe zu Ihrem Unternehmen. Persoenliche Beratung, DSGVO-Expertise, Verstaendnis des deutschen Marktes und kurze Kommunikationswege — wir entwickeln keine Standard-Loesungen, sondern massgeschneiderte Echtzeit-Infrastrukturen fuer Marktplaetze, Plattformen und Enterprise-Anwendungen in NRW und ganz Deutschland.",
            },
        },
    ],
};

export default function SocketIoRealtimePage() {
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
                    <RealtimeHero />
                    <RealtimeProblem />
                    <RealtimeCapabilities />
                    <RealtimeArchitecture />
                    <RealtimeCodeExamples />
                    <RealtimeProcess />
                    <RealtimeUseCases />
                    <RealtimeFAQ />
                    <RealtimeCTA />
                </article>
            </main>
        </>
    );
}

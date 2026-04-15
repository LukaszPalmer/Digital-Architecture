// src/app/services/chatbot-assistant/page.tsx
// Static route — takes precedence over [slug]/page.tsx.
// RSC-First, 0 TBT. Design-Dogma: #001F3F / #FFFFFF / #000000, 0px border-radius.

import { Metadata } from "next";
import ChatbotHero from "@/components/sections/ChatbotHero";
import ChatbotProblem from "@/components/sections/ChatbotProblem";
import ChatbotCapabilities from "@/components/sections/ChatbotCapabilities";
import ChatbotArchitecture from "@/components/sections/ChatbotArchitecture";
import ChatbotCodeExamples from "@/components/sections/ChatbotCodeExamples";
import ChatbotProcess from "@/components/sections/ChatbotProcess";
import ChatbotUseCases from "@/components/sections/ChatbotUseCases";
import ChatbotFAQ from "@/components/sections/ChatbotFAQ";
import ChatbotCTA from "@/components/sections/ChatbotCTA";

/* ── SEO METADATA ── */
export const metadata: Metadata = {
    title: "KI-Chatbot & Assistent | Chatbot fuer Webseite & Onlineshop | Duesseldorf",
    description:
        "Professionelle KI-Chatbot-Entwicklung fuer Ihren Onlineshop und Ihre Webseite — Kundensupport automatisieren, KI-Assistent erstellen, intelligente Konversations-Interfaces mit LLM-Integration. Ihre Chatbot-Agentur aus Duesseldorf.",
    keywords: [
        "chatbot onlineshop",
        "ki chatbot onlineshop",
        "chatbot fuer webseite",
        "chatbot fuer unternehmen",
        "chatbot fuer onlineshop",
        "ki assistent erstellen",
        "ki assistent fuer webseite",
        "ki assistent webseite",
        "Kundensupport automatisieren",
        "kundenservice automatisieren",
        "kundensupport auslagern",
        "Chatbot Agentur Duesseldorf",
        "KI-Chatbot Integration",
        "Conversational AI",
        "LLM Integration",
        "Chatbot Entwicklung",
        "Webdesign Duesseldorf",
        "KI-Assistent Webseite",
    ],
    alternates: { canonical: "https://palmer-digital.de/services/chatbot-assistant" },
    openGraph: {
        title: "KI-Chatbot & Assistent fuer Onlineshop & Webseite | Palmer Digital Duesseldorf",
        description:
            "Intelligente Chatbots mit echtem Sprachverstaendnis — Kundensupport automatisieren, KI-Assistent erstellen, 24/7 Erreichbarkeit fuer Ihr Unternehmen. Chatbot-Agentur aus Duesseldorf.",
        url: "https://palmer-digital.de/services/chatbot-assistant",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "KI-Chatbot & Assistent | Chatbot Agentur Duesseldorf",
        description:
            "KI-Chatbot fuer Onlineshop und Webseite — Kundensupport automatisieren mit LLM-Integration und intelligenter Konversationsfuehrung.",
    },
};

/* ── JSON-LD STRUCTURED DATA ── */
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Palmer Digital — KI-Chatbot & Intelligente Konversations-Interfaces",
    description:
        "Professionelle KI-Chatbot-Entwicklung und intelligente Konversations-Interfaces aus Duesseldorf. Wir entwickeln KI-Assistenten fuer Onlineshops, Webseiten und Unternehmen — mit LLM-Integration, Edge Streaming, CRM-Anbindung und DSGVO-konformer Datenverarbeitung. Ihre Chatbot-Agentur fuer automatisierten Kundensupport.",
    url: "https://palmer-digital.de/services/chatbot-assistant",
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
    serviceType: "KI-Chatbot-Entwicklung & Conversational AI",
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
        name: "KI-Chatbot & Assistent Loesungen",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "KI-Chatbot fuer Onlineshops",
                    description:
                        "Intelligenter Chatbot fuer Ihren Onlineshop mit Produktberatung, Bestellverfolgung und Retouren-Management. Konzipiert fuer eine intelligente Nutzerfuehrung, die Besucher gezielt zum Kauf fuehrt.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "KI-Assistent fuer Webseiten & Unternehmen",
                    description:
                        "KI-Assistent erstellen fuer Ihre Webseite — FAQ-Automation, Lead-Qualifizierung, Terminbuchung und Support-Ticket-Erstellung. Zielt auf eine Entlastung Ihres Support-Teams ab.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Kundensupport-Automatisierung & Kundenservice automatisieren",
                    description:
                        "Kundensupport automatisieren mit KI-gestuetzter Konversationsfuehrung, CRM-Integration und intelligenter Eskalationslogik. DSGVO-konforme Verarbeitung auf europaeischen Servern.",
                },
            },
        ],
    },
    specialty: [
        "Chatbot fuer Onlineshop",
        "KI-Chatbot Onlineshop",
        "Chatbot fuer Webseite",
        "Chatbot fuer Unternehmen",
        "KI-Assistent erstellen",
        "KI-Assistent fuer Webseite",
        "Kundensupport automatisieren",
        "Kundenservice automatisieren",
        "Kundensupport auslagern",
        "Chatbot Agentur Duesseldorf",
        "Conversational AI",
        "LLM-Integration",
    ],
    knowsAbout: [
        "Large Language Models (LLM)",
        "OpenAI GPT Integration",
        "Anthropic Claude Integration",
        "Prompt Engineering",
        "Edge Runtime Streaming",
        "Multi-Turn Conversations",
        "Intent-Erkennung",
        "CRM-Integration",
        "DSGVO-konforme KI-Verarbeitung",
        "Conversational UX Design",
    ],
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Was kostet ein KI-Chatbot fuer meinen Onlineshop?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Die Kosten haengen vom Umfang ab: Ein einfacher FAQ-Bot ist guenstiger als ein vollintegrierter KI-Assistent mit CRM-Anbindung und Multi-Channel-Deployment. Nach einem kostenlosen Erstgespraech erstellen wir ein transparentes Angebot — basierend auf Ihren Anforderungen und dem gewuenschten Funktionsumfang.",
            },
        },
        {
            "@type": "Question",
            name: "Wie lange dauert es, einen KI-Assistenten zu erstellen?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Von der Use-Case-Analyse bis zum Go-Live rechnen wir mit etwa 15 Arbeitstagen. Einfache FAQ-Chatbots koennen schneller live gehen, komplexere Integrationen mit CRM- und ERP-Anbindung benoetigen entsprechend mehr Zeit. Nach dem Launch optimieren wir den Bot kontinuierlich anhand der Chat-Logs.",
            },
        },
        {
            "@type": "Question",
            name: "Kann der Chatbot meinen Kundensupport wirklich automatisieren?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ja — zielt auf eine deutliche Entlastung Ihres Support-Teams ab. Typische Aufgaben wie FAQ-Beantwortung, Bestellstatus-Abfragen, Terminbuchungen und Lead-Qualifizierung laufen vollautomatisch. Bei komplexen Anliegen uebergibt der Bot den Gespraechskontext nahtlos an einen menschlichen Agenten.",
            },
        },
        {
            "@type": "Question",
            name: "Ist der KI-Chatbot DSGVO-konform?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ja. Alle Daten werden auf europaeischen Servern verarbeitet und verschluesselt gespeichert. Personenbezogene Daten koennen jederzeit geloescht werden. Wir koennen den Chatbot so konfigurieren, dass keine personenbezogenen Daten an Drittanbieter-LLMs uebermittelt werden — durch Self-Hosted-Modelle oder anonymisierte Anfragen.",
            },
        },
        {
            "@type": "Question",
            name: "Funktioniert der Chatbot auch auf meiner bestehenden Webseite?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ja. Unser KI-Assistent fuer Webseiten laesst sich in jede bestehende Website integrieren — egal ob WordPress, Shopify, Next.js oder eine individuelle Loesung. Die Integration erfolgt ueber ein leichtgewichtiges Script-Tag oder eine API-Anbindung, ohne Ihre bestehende Seite zu verlangsamen.",
            },
        },
        {
            "@type": "Question",
            name: "Warum sollte ich meinen KI-Chatbot in Duesseldorf entwickeln lassen?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Als Chatbot-Agentur in Duesseldorf kennen wir den lokalen Markt und die Anforderungen deutscher Unternehmen. Persoenliche Beratung vor Ort, deutsche Sprachmodelle, DSGVO-Expertise und schnelle Kommunikation sind fuer uns selbstverstaendlich. Wir entwickeln keine generischen Bots, sondern massgeschneiderte KI-Assistenten fuer Ihr Unternehmen.",
            },
        },
    ],
};

export default function ChatbotAssistantPage() {
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
                    <ChatbotHero />
                    <ChatbotProblem />
                    <ChatbotCapabilities />
                    <ChatbotArchitecture />
                    <ChatbotCodeExamples />
                    <ChatbotProcess />
                    <ChatbotUseCases />
                    <ChatbotFAQ />
                    <ChatbotCTA />
                </article>
            </main>
        </>
    );
}

// src/app/services/fintech-pipelines/page.tsx
// Static route — takes precedence over [slug]/page.tsx.
// RSC-First, 0 TBT. Design-Dogma: #001F3F / #FFFFFF / #000000, 0px border-radius.

import { Metadata } from "next";
import StripeHero from "@/components/sections/StripeHero";
import StripeProblem from "@/components/sections/StripeProblem";
import StripeCapabilities from "@/components/sections/StripeCapabilities";
import StripeArchitecture from "@/components/sections/StripeArchitecture";
import StripeCodeExamples from "@/components/sections/StripeCodeExamples";
import StripeProcess from "@/components/sections/StripeProcess";
import StripeUseCases from "@/components/sections/StripeUseCases";
import StripeFAQ from "@/components/sections/StripeFAQ";
import StripeCTA from "@/components/sections/StripeCTA";

/* ── SEO METADATA ── */
export const metadata: Metadata = {
    title: "E-Commerce Zahlungen & Stripe Integration | Onlineshop Zahlungsanbieter Düsseldorf",
    description:
        "Professionelle E-Commerce Zahlungen für Ihren Onlineshop — alle Zahlungsarten, Zahlung auf Rechnung, Stripe Integration und automatisierte Zahlungsströme. Ihr Zahlungsanbieter-Experte aus Düsseldorf für sichere Zahlungsmöglichkeiten im Onlineshop.",
    keywords: [
        "ecommerce Zahlungen",
        "e commerce zahlungsarten",
        "e-commerce zahlungsmöglichkeiten",
        "onlineshop Zahlungsanbieter",
        "onlineshop zahlungsarten",
        "onlineshop zahlung auf rechnung",
        "onlineshop erstellen",
        "Stripe Integration Düsseldorf",
        "Stripe Entwickler Deutschland",
        "E-Commerce Zahlungssystem",
        "Online Bezahlsystem",
        "Stripe Connect",
        "Payment Integration",
        "Subscription Zahlungen",
        "Zahlungsabwicklung Onlineshop",
        "Stripe API Entwicklung",
        "Webdesign Düsseldorf",
        "Onlineshop erstellen lassen",
        "professionelles Webdesign",
        "Stripe Payment Lösungen",
    ],
    alternates: { canonical: "https://palmer-digital.de/services/fintech-pipelines" },
    openGraph: {
        title: "E-Commerce Zahlungen & Stripe Payment Lösungen | Palmer Digital Düsseldorf",
        description:
            "Onlineshop Zahlungsarten, Zahlung auf Rechnung, automatisierte Zahlungsströme — professionelles Webdesign mit Stripe aus Düsseldorf.",
        url: "https://palmer-digital.de/services/fintech-pipelines",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "E-Commerce Zahlungen & Stripe Integration | Düsseldorf",
        description:
            "Alle Zahlungsmöglichkeiten für Ihren Onlineshop — Stripe Fintech Pipelines für sichere, automatisierte Zahlungsabwicklung.",
    },
};

/* ── JSON-LD STRUCTURED DATA ── */
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Palmer Digital — Stripe Fintech Pipelines & E-Commerce Zahlungen",
    description:
        "Professionelle Stripe Integration und E-Commerce Zahlungslösungen aus Düsseldorf. Wir richten alle Zahlungsarten für Ihren Onlineshop ein — von Kreditkarte über Zahlung auf Rechnung bis zu automatisierten Subscription-Zahlungen. Ihr Zahlungsanbieter-Experte für sichere, DSGVO-konforme Zahlungsabwicklung.",
    url: "https://palmer-digital.de/services/fintech-pipelines",
    provider: {
        "@type": "Organization",
        name: "Palmer Digital",
        url: "https://palmer-digital.de",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Düsseldorf",
            addressRegion: "Nordrhein-Westfalen",
            addressCountry: "DE",
        },
    },
    serviceType: "E-Commerce Zahlungsintegration",
    areaServed: [
        {
            "@type": "City",
            name: "Düsseldorf",
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
        name: "Stripe & E-Commerce Zahlungslösungen",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Stripe Payment Integration für Onlineshops",
                    description:
                        "Einrichtung aller E-Commerce Zahlungsarten — Kreditkarte, SEPA, Klarna, Zahlung auf Rechnung. Optimiert für eine reibungslose Zahlungsabwicklung und weniger Kaufabbrüche.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Automatisierte Zahlungsströme & Subscription Billing",
                    description:
                        "Wiederkehrende Zahlungen, automatische Rechnungsstellung und Dunning-Management. Zielt auf eine Reduzierung der Warenkorb-Abbrüche ab.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Onlineshop erstellen mit Stripe Checkout",
                    description:
                        "Professionelles Webdesign mit integriertem Stripe Checkout — alle Zahlungsmöglichkeiten in einer Oberfläche für maximale Conversion.",
                },
            },
        ],
    },
    specialty: [
        "E-Commerce Zahlungen",
        "Onlineshop Zahlungsanbieter",
        "Stripe Integration",
        "Onlineshop Zahlungsarten",
        "Zahlung auf Rechnung",
        "Onlineshop erstellen",
        "Professionelles Webdesign Düsseldorf",
        "Stripe Payment Lösungen",
        "Automatisierte Zahlungsströme",
        "Fintech-Beratung",
    ],
    knowsAbout: [
        "Stripe Payment Intents",
        "Stripe Connect",
        "Stripe Subscriptions",
        "Webhook-Architektur",
        "PCI DSS Compliance",
        "SEPA-Lastschrift",
        "Klarna Integration",
        "3D Secure 2.0",
        "E-Commerce Checkout Optimierung",
        "DSGVO-konforme Zahlungsverarbeitung",
    ],
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Welche Zahlungsarten braucht mein Onlineshop?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ein moderner Onlineshop sollte mindestens Kreditkarte (Visa, Mastercard), SEPA-Lastschrift, PayPal und Klarna (Zahlung auf Rechnung) anbieten. Mit Stripe lassen sich über 20 Zahlungsarten in einer einzigen Oberfläche integrieren — so decken Sie die Wünsche von über 95 % Ihrer Kunden ab, ohne mehrere Zahlungsanbieter verwalten zu müssen.",
            },
        },
        {
            "@type": "Question",
            name: "Was kostet eine professionelle Stripe Integration für meinen Onlineshop?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Die Kosten hängen vom Umfang ab: Eine einfache Checkout-Integration ist günstiger als ein komplettes Subscription-System mit automatischer Rechnungsstellung. Stripe selbst berechnet 1,5 % + 0,25 EUR pro erfolgreicher Kartenzahlung in Europa. Wir erstellen nach einem kostenlosen Erstgespräch ein transparentes Angebot für die Entwicklung.",
            },
        },
        {
            "@type": "Question",
            name: "Kann ich in meinem Onlineshop Zahlung auf Rechnung anbieten?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ja. Über Stripe können Sie Klarna und andere Rechnungskauf-Anbieter direkt integrieren. Ihre Kunden kaufen auf Rechnung und zahlen erst nach Erhalt der Ware. Sie als Händler erhalten das Geld sofort von Klarna — das Zahlungsrisiko übernimmt der Anbieter.",
            },
        },
        {
            "@type": "Question",
            name: "Wie sicher sind Online-Zahlungen mit Stripe?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Stripe ist PCI DSS Level 1 zertifiziert — das ist der höchste Sicherheitsstandard der Zahlungsindustrie. Kreditkartendaten werden nie auf Ihrem Server gespeichert, sondern direkt von Stripe verarbeitet. Zusätzlich schützt 3D Secure 2.0 vor Betrug, und Stripe Radar erkennt verdächtige Transaktionen automatisch mit Machine Learning.",
            },
        },
        {
            "@type": "Question",
            name: "Warum sollte ich meinen Onlineshop in Düsseldorf erstellen lassen?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Als Webdesign-Agentur in Düsseldorf kennen wir den lokalen Markt und die Anforderungen deutscher Onlineshop-Betreiber — von DSGVO-Compliance über deutsche Zahlungsvorlieben (Rechnung, SEPA) bis hin zu rechtssicherer Rechnungsstellung. Persönliche Beratung vor Ort und schnelle Kommunikation sind inklusive.",
            },
        },
        {
            "@type": "Question",
            name: "Was passiert, wenn eine Zahlung in meinem Onlineshop fehlschlägt?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Unsere Stripe Integration beinhaltet automatisches Fehlerhandling: Bei fehlgeschlagenen Zahlungen wird der Kunde sofort informiert und kann es erneut versuchen. Bei Subscription-Zahlungen startet ein automatischer Dunning-Prozess — Stripe versucht die Zahlung mehrfach und benachrichtigt den Kunden per E-Mail.",
            },
        },
    ],
};

export default function FintechPipelinesPage() {
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
                    <StripeHero />
                    <StripeProblem />
                    <StripeCapabilities />
                    <StripeArchitecture />
                    <StripeCodeExamples />
                    <StripeProcess />
                    <StripeUseCases />
                    <StripeFAQ />
                    <StripeCTA />
                </article>
            </main>
        </>
    );
}

// src/app/services/fintech-pipelines/page.tsx
// Static route — takes precedence over [slug]/page.tsx.
// RSC-First, 0 TBT. Design-Dogma: #001F3F / #FFFFFF / #000000, 0px border-radius.

import { Metadata } from "next";
import StripeHero from "@/components/sections/StripeHero";
import StripeCapabilities from "@/components/sections/StripeCapabilities";
import StripeArchitecture from "@/components/sections/StripeArchitecture";
import StripeProcess from "@/components/sections/StripeProcess";
import StripeUseCases from "@/components/sections/StripeUseCases";
import StripeCTA from "@/components/sections/StripeCTA";

export const metadata: Metadata = {
    title: "Stripe Integration & E-Commerce Zahlungssysteme",
    description:
        "Professionelle Stripe Integration für Onlineshops und SaaS-Produkte: Payment Intents, Subscriptions, Stripe Connect und automatisierte Webhooks. E-Commerce Zahlungssysteme für Unternehmen in Deutschland — DSGVO-konform und PCI-DSS zertifiziert.",
    keywords: [
        "Stripe Integration",
        "Stripe Entwickler Deutschland",
        "E-Commerce Zahlungssystem",
        "Online Bezahlsystem",
        "Stripe Connect",
        "Payment Integration",
        "Subscription System",
        "E-Commerce Entwicklung",
        "Zahlungsabwicklung",
        "Stripe API Entwicklung",
    ],
    alternates: { canonical: "https://palmer-digital.de/services/fintech-pipelines" },
    openGraph: {
        title: "Stripe Integration & Zahlungssysteme | Palmer Digital",
        description:
            "Payment Intents, Subscriptions, Stripe Connect — automatisierte Zahlungsinfrastruktur für Onlineshops und SaaS.",
        url: "https://palmer-digital.de/services/fintech-pipelines",
    },
};

export default function FintechPipelinesPage() {
    return (
        <main className="bg-[#FFFFFF] min-h-screen">
            <StripeHero />
            <StripeCapabilities />
            <StripeArchitecture />
            <StripeProcess />
            <StripeUseCases />
            <StripeCTA />
        </main>
    );
}

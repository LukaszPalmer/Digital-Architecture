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
    title: "Stripe Fintech Pipelines | Palmer Digital",
    description:
        "Automatisierte Zahlungsinfrastruktur auf Stripe-Basis — Payment Intents, Subscriptions, Webhooks und Stripe Connect für Fintech-Grade Zahlungsströme.",
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

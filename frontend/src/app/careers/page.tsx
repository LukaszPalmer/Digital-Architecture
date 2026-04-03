// src/app/careers/page.tsx
// Server Component — RSC-First, 0 TBT.

import type { Metadata } from "next";
import CareersHero from "@/components/sections/CareersHero";
import CareersValues from "@/components/sections/CareersValues";
import CareersPositions from "@/components/sections/CareersPositions";
import CareersBenefits from "@/components/sections/CareersBenefits";
import CareersHiringProcess from "@/components/sections/CareersHiringProcess";
import CareersCTA from "@/components/sections/CareersCTA";

export const metadata: Metadata = {
    title: "Careers — Palmer Digital",
    description:
        "Werde Teil von Palmer Digital. Wir suchen Engineers und Designer, die digitale Infrastruktur auf dem Niveau der Marktführer konstruieren.",
};

export default function CareersPage() {
    return (
        <main className="bg-[#FFFFFF] min-h-screen">
            <CareersHero />
            <CareersValues />
            <CareersPositions />
            <CareersBenefits />
            <CareersHiringProcess />
            <CareersCTA />
        </main>
    );
}

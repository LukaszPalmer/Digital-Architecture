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
    title: "Jobs & Karriere — Webentwickler & Designer gesucht",
    description:
        "Offene Stellen bei Palmer Digital: Wir suchen Fullstack-Entwickler, Next.js Engineers und UX/UI Designer. Remote-Jobs in der Webentwicklung — bewirb dich jetzt und werde Teil eines Engineering-Teams auf Elite-Niveau.",
    keywords: [
        "Jobs Webentwicklung",
        "Next.js Entwickler Jobs",
        "Remote Jobs Entwickler",
        "Fullstack Developer Jobs Deutschland",
        "Frontend Entwickler Job",
        "TypeScript Jobs",
        "UX Designer Jobs",
        "Software Engineer Jobs",
        "Remote Entwickler Job",
        "IT Jobs Deutschland",
    ],
    alternates: { canonical: "https://palmer-digital.de/careers" },
    openGraph: {
        title: "Jobs & Karriere | Palmer Digital",
        description:
            "Fullstack-Entwickler, Next.js Engineers und Designer gesucht. Remote-First, Engineering auf Elite-Niveau.",
        url: "https://palmer-digital.de/careers",
    },
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

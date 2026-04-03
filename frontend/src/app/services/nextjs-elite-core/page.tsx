// src/app/services/nextjs-elite-core/page.tsx
// Static route — takes precedence over [slug]/page.tsx.
// RSC-First, 0 TBT. Design-Dogma: #001F3F / #FFFFFF / #000000, 0px border-radius.

import { Metadata } from "next";
import NextHero from "@/components/sections/NextHero";
import NextCapabilities from "@/components/sections/NextCapabilities";
import NextArchitecture from "@/components/sections/NextArchitecture";
import NextProcess from "@/components/sections/NextProcess";
import NextUseCases from "@/components/sections/NextUseCases";
import NextCTA from "@/components/sections/NextCTA";

export const metadata: Metadata = {
    title: "Next.js Elite Core | Palmer Digital",
    description:
        "Server-First Applikations-Architektur auf Next.js 15 — RSC, PPR, Server Actions und 0ms TBT. Lighthouse 100 ist der Standard, nicht das Ziel.",
};

export default function NextjsEliteCorePage() {
    return (
        <main className="bg-[#FFFFFF] min-h-screen">
            <NextHero />
            <NextCapabilities />
            <NextArchitecture />
            <NextProcess />
            <NextUseCases />
            <NextCTA />
        </main>
    );
}

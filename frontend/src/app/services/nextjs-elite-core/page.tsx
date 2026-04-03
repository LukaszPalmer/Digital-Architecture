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
    title: "Next.js Entwicklung — Server-First Webanwendungen",
    description:
        "Professionelle Next.js Entwicklung für Unternehmen in Deutschland. Server Components, App Router, Partial Prerendering und 0ms TBT. Wir entwickeln skalierbare Next.js Applikationen, die in Produktion performen — Lighthouse 100 als Standard.",
    keywords: [
        "Next.js Entwicklung",
        "Next.js Agentur Deutschland",
        "React Server Components",
        "Next.js App Router",
        "Next.js 15 Entwickler",
        "TypeScript Webentwicklung",
        "Performance Optimierung Website",
        "Lighthouse 100",
        "Server Side Rendering",
        "Next.js Freelancer",
    ],
    alternates: { canonical: "https://palmer-digital.de/services/nextjs-elite-core" },
    openGraph: {
        title: "Next.js Entwicklung | Palmer Digital",
        description:
            "Server-First Webanwendungen mit Next.js 15 — RSC, App Router, 0ms TBT und Lighthouse 100 als Standard.",
        url: "https://palmer-digital.de/services/nextjs-elite-core",
    },
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

// src/app/vercel/page.tsx
// Server Component — RSC-First, 0 TBT.

import type { Metadata } from "next";
import VercelHero from "@/components/sections/VercelHero";
import VercelCapabilities from "@/components/sections/VercelCapabilities";
import VercelArchitecture from "@/components/sections/VercelArchitecture";
import VercelProcess from "@/components/sections/VercelProcess";
import VercelUseCases from "@/components/sections/VercelUseCases";
import VercelCTA from "@/components/sections/VercelCTA";

export const metadata: Metadata = {
    title: "Vercel Deployment & Hosting — Next.js Edge Infrastruktur",
    description:
        "Professionelles Vercel Deployment für Next.js Anwendungen: globales Edge Network, LCP unter 0.8s, Partial Prerendering und Zero-Config TLS. High-Speed Hosting für performante Webanwendungen.",
    keywords: [
        "Vercel Deployment",
        "Next.js Hosting",
        "Edge Deployment",
        "Vercel CDN",
        "Next.js Vercel",
        "Web-Hosting professionell",
        "Edge Computing",
        "CDN Deutschland",
        "Vercel Entwickler",
        "Next.js Deployment",
    ],
    alternates: { canonical: "https://palmer-digital.de/vercel" },
    openGraph: {
        title: "Vercel Edge Deployment | Palmer Digital",
        description:
            "Globales Edge Network für Next.js — LCP unter 0.8s, Partial Prerendering, Zero-Config TLS.",
        url: "https://palmer-digital.de/vercel",
    },
};

export default function VercelPage() {
    return (
        <main className="bg-[#FFFFFF] min-h-screen">
            <VercelHero />
            <VercelCapabilities />
            <VercelArchitecture />
            <VercelProcess />
            <VercelUseCases />
            <VercelCTA />
        </main>
    );
}

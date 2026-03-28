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
    title: "Vercel Edge Infrastructure — Palmer Digital Architecture",
    description:
        "Global High-Speed Deployment auf der Vercel Edge. LCP unter 0.8s, Partial Prerendering, Zero-Config TLS und weltweite CDN-Präsenz für Next.js 15 Applikationen.",
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

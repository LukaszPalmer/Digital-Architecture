// src/app/railway/page.tsx
// Server Component — RSC-First, 0 TBT.

import type { Metadata } from "next";
import RailwayHero from "@/components/sections/RailwayHero";
import RailwayCapabilities from "@/components/sections/RailwayCapabilities";
import RailwayArchitecture from "@/components/sections/RailwayArchitecture";
import RailwayProcess from "@/components/sections/RailwayProcess";
import RailwayUseCases from "@/components/sections/RailwayUseCases";
import RailwayCTA from "@/components/sections/RailwayCTA";

export const metadata: Metadata = {
    title: "Railway Cloud Infrastructure — Palmer Digital Architecture",
    description:
        "Zero-Config Microservice Orchestration auf Railway. Automatisierte CI/CD-Pipelines, isolierte Service-Umgebungen und 99.99% Uptime für Enterprise-Backends.",
};

export default function RailwayPage() {
    return (
        <main className="bg-[#FFFFFF] min-h-screen">
            <RailwayHero />
            <RailwayCapabilities />
            <RailwayArchitecture />
            <RailwayProcess />
            <RailwayUseCases />
            <RailwayCTA />
        </main>
    );
}

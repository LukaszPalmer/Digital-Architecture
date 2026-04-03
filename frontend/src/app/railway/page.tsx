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
    title: "Railway Cloud Hosting — Microservices & Node.js Deployment",
    description:
        "Professionelles Railway Cloud Hosting für Node.js und Microservices: automatisierte CI/CD-Pipelines, isolierte Service-Umgebungen und 99.99% Uptime für Backend-Systeme. Containerisiertes Deployment für Unternehmen.",
    keywords: [
        "Railway Cloud",
        "Microservices Hosting",
        "Node.js Hosting",
        "Container Deployment",
        "CI/CD Pipeline",
        "Cloud-Hosting Deutschland",
        "Backend Hosting",
        "Railway Entwickler",
        "Microservice Architektur",
        "DevOps",
    ],
    alternates: { canonical: "https://palmer-digital.de/railway" },
    openGraph: {
        title: "Railway Cloud Hosting | Palmer Digital",
        description:
            "Automatisierte CI/CD-Pipelines, isolierte Service-Umgebungen und 99.99% Uptime für Node.js und Microservices.",
        url: "https://palmer-digital.de/railway",
    },
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

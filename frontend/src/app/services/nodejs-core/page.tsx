// src/app/services/nodejs-core/page.tsx
// Static route — takes precedence over [slug]/page.tsx.
// RSC-First, 0 TBT. Design-Dogma: #001F3F / #FFFFFF / #000000, 0px border-radius.

import { Metadata } from "next";
import NodeHero from "@/components/sections/NodeHero";
import NodeCapabilities from "@/components/sections/NodeCapabilities";
import NodeArchitecture from "@/components/sections/NodeArchitecture";
import NodeProcess from "@/components/sections/NodeProcess";
import NodeUseCases from "@/components/sections/NodeUseCases";
import NodeCTA from "@/components/sections/NodeCTA";

export const metadata: Metadata = {
    title: "Node.js Entwicklung — Backend & REST API Entwicklung",
    description:
        "Professionelle Node.js Backend-Entwicklung für Unternehmen: REST APIs, GraphQL, Microservices, Authentication und Background-Jobs. Backend-Entwicklung für skalierbare und produktionskritische Systeme in Deutschland.",
    keywords: [
        "Node.js Entwicklung",
        "Node.js Entwickler Deutschland",
        "REST API Entwicklung",
        "Backend-Entwicklung",
        "GraphQL API",
        "Microservices Entwicklung",
        "Node.js Backend",
        "API Entwicklung",
        "Express.js",
        "Backend-Architektur",
    ],
    alternates: { canonical: "https://palmer-digital.de/services/nodejs-core" },
    openGraph: {
        title: "Node.js Backend-Entwicklung | Palmer Digital",
        description:
            "REST APIs, GraphQL, Microservices und Authentication — skalierbare Node.js Backend-Infrastruktur für produktionskritische Systeme.",
        url: "https://palmer-digital.de/services/nodejs-core",
    },
};

export default function NodejsCorePage() {
    return (
        <main className="bg-[#FFFFFF] min-h-screen">
            <NodeHero />
            <NodeCapabilities />
            <NodeArchitecture />
            <NodeProcess />
            <NodeUseCases />
            <NodeCTA />
        </main>
    );
}

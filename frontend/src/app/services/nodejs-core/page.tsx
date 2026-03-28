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
    title: "Node.js Core | Palmer Digital Architecture",
    description:
        "Skalierbare Backend-Infrastruktur auf Node.js-Basis — REST APIs, GraphQL, Microservices, Authentication und Background-Jobs für produktionskritische Systeme.",
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

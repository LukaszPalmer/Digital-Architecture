// src/app/services/cloud-infrastructure/page.tsx
// Statische Route — überschreibt [slug]/page.tsx für diesen Pfad.
// Server Component — RSC-First, 0 TBT.

import type { Metadata } from "next";
import MongoHero from "@/components/sections/MongoHero";
import MongoCapabilities from "@/components/sections/MongoCapabilities";
import MongoArchitecture from "@/components/sections/MongoArchitecture";
import MongoProcess from "@/components/sections/MongoProcess";
import MongoUseCases from "@/components/sections/MongoUseCases";
import MongoCTA from "@/components/sections/MongoCTA";

export const metadata: Metadata = {
    title: "MongoDB Cloud Backbone — Palmer Digital",
    description:
        "Globale MongoDB Atlas Cluster-Architektur mit automatisiertem Sharding, ACID-konformen Transaktionen und 99.99% Uptime SLA. Die Datenschicht für Marktführer.",
};

export default function MongoDBPage() {
    return (
        <main className="bg-[#FFFFFF] min-h-screen">
            <MongoHero />
            <MongoCapabilities />
            <MongoArchitecture />
            <MongoProcess />
            <MongoUseCases />
            <MongoCTA />
        </main>
    );
}

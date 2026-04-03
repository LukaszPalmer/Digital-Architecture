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
    title: "MongoDB Entwicklung & Cloud-Datenbankarchitektur",
    description:
        "Professionelle MongoDB Atlas Entwicklung: globale Cluster-Architektur, automatisiertes Sharding, ACID-Transaktionen und 99.99% Uptime SLA. Datenbankentwicklung für skalierbare Webanwendungen in Deutschland und Europa.",
    keywords: [
        "MongoDB Entwicklung",
        "MongoDB Atlas",
        "Cloud-Datenbankarchitektur",
        "NoSQL Datenbank Entwickler",
        "MongoDB Entwickler Deutschland",
        "Datenbankarchitektur",
        "Cloud-Infrastruktur",
        "MongoDB Sharding",
        "skalierbare Datenbank",
        "Datenbankentwicklung",
    ],
    alternates: { canonical: "https://palmer-digital.de/services/cloud-infrastructure" },
    openGraph: {
        title: "MongoDB Cloud-Datenbankarchitektur | Palmer Digital",
        description:
            "Globale MongoDB Atlas Cluster mit 99.99% Uptime SLA — skalierbar, ACID-konform, produktionsbereit.",
        url: "https://palmer-digital.de/services/cloud-infrastructure",
    },
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

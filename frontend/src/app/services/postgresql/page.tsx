// src/app/services/postgresql/page.tsx
// Static route — takes precedence over [slug]/page.tsx.
// RSC-First, 0 TBT. Design-Dogma: #001F3F / #FFFFFF / #000000, 0px border-radius.

import { Metadata } from "next";
import PostgreHero from "@/components/sections/PostgreHero";
import PostgreCapabilities from "@/components/sections/PostgreCapabilities";
import PostgreArchitecture from "@/components/sections/PostgreArchitecture";
import PostgreProcess from "@/components/sections/PostgreProcess";
import PostgreUseCases from "@/components/sections/PostgreUseCases";
import PostgreCTA from "@/components/sections/PostgreCTA";

export const metadata: Metadata = {
    title: "PostgreSQL Entwicklung — Relationale Datenbankarchitektur",
    description:
        "Professionelle PostgreSQL Entwicklung für Unternehmen: ACID-konforme Datenbankarchitektur, Row-Level Security, Advanced Indexing und Point-in-Time-Recovery. SQL-Datenbankentwicklung für produktionskritische Systeme.",
    keywords: [
        "PostgreSQL Entwicklung",
        "PostgreSQL Entwickler Deutschland",
        "relationale Datenbank",
        "SQL Datenbankentwicklung",
        "PostgreSQL Architektur",
        "Datenbankentwicklung",
        "ACID Datenbank",
        "PostgreSQL Optimierung",
        "Datenbankdesign",
        "Backend-Entwicklung",
    ],
    alternates: { canonical: "https://palmer-digital.de/services/postgresql" },
    openGraph: {
        title: "PostgreSQL Datenbankentwicklung | Palmer Digital",
        description:
            "ACID-konforme PostgreSQL Architektur — Row-Level Security, Advanced Indexing und Point-in-Time-Recovery für produktionskritische Systeme.",
        url: "https://palmer-digital.de/services/postgresql",
    },
};

export default function PostgreSQLPage() {
    return (
        <main className="bg-[#FFFFFF] min-h-screen">
            <PostgreHero />
            <PostgreCapabilities />
            <PostgreArchitecture />
            <PostgreProcess />
            <PostgreUseCases />
            <PostgreCTA />
        </main>
    );
}

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
    title: "PostgreSQL Core — Palmer Digital",
    description:
        "ACID-konforme relationale Datenbankarchitektur auf PostgreSQL-Basis — MVCC, Row-Level Security, Advanced Indexing und Point-in-Time-Recovery für produktionskritische Systeme.",
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

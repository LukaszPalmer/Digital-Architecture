// src/app/services/design-ops-system/page.tsx
// Static route — takes precedence over [slug]/page.tsx.
// RSC-First, 0 TBT. Design-Dogma: #001F3F / #FFFFFF / #000000, 0px border-radius.

import { Metadata } from "next";
import DesignHero from "@/components/sections/DesignHero";
import DesignCapabilities from "@/components/sections/DesignCapabilities";
import DesignArchitecture from "@/components/sections/DesignArchitecture";
import DesignProcess from "@/components/sections/DesignProcess";
import DesignUseCases from "@/components/sections/DesignUseCases";
import DesignCTA from "@/components/sections/DesignCTA";

export const metadata: Metadata = {
    title: "Tailwind Design Ops | Palmer Digital",
    description:
        "Atomic CSS Design Systems auf Tailwind-Basis — Token-Architektur, Komponentenbibliotheken und WCAG AAA-konforme Interface-Systeme für skalierbare Produkte.",
};

export default function DesignOpsPage() {
    return (
        <main className="bg-[#FFFFFF] min-h-screen">
            <DesignHero />
            <DesignCapabilities />
            <DesignArchitecture />
            <DesignProcess />
            <DesignUseCases />
            <DesignCTA />
        </main>
    );
}

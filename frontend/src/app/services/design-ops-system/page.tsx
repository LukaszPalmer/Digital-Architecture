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
    title: "Design System Entwicklung — Tailwind CSS & Atomic Design",
    description:
        "Professionelle Design System Entwicklung mit Tailwind CSS: Token-Architektur, Komponentenbibliotheken und WCAG AAA-konforme Interface-Systeme für skalierbare digitale Produkte in Deutschland.",
    keywords: [
        "Design System Entwicklung",
        "Tailwind CSS Agentur",
        "Atomic Design System",
        "Komponentenbibliothek",
        "WCAG AAA",
        "CSS Design System",
        "Frontend Design System",
        "UI Komponentenbibliothek",
        "Tailwind CSS Entwickler",
        "Webdesign System",
    ],
    alternates: { canonical: "https://palmer-digital.de/services/design-ops-system" },
    openGraph: {
        title: "Design System Entwicklung | Palmer Digital",
        description:
            "Tailwind CSS Design Systems — Token-Architektur, Komponentenbibliotheken und WCAG AAA-konforme Interfaces für skalierbare Produkte.",
        url: "https://palmer-digital.de/services/design-ops-system",
    },
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

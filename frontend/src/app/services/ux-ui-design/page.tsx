// src/app/services/ux-ui-design/page.tsx
// Static route — takes precedence over [slug]/page.tsx.
// RSC-First, 0 TBT. Design-Dogma: #001F3F / #FFFFFF / #000000, 0px border-radius.

import { Metadata } from "next";
import UXHero from "@/components/sections/UXHero";
import UXCapabilities from "@/components/sections/UXCapabilities";
import UXArchitecture from "@/components/sections/UXArchitecture";
import UXProcess from "@/components/sections/UXProcess";
import UXUseCases from "@/components/sections/UXUseCases";
import UXCTA from "@/components/sections/UXCTA";

export const metadata: Metadata = {
    title: "UX/UI Design & Webdesign — Professionelles Interface Design",
    description:
        "Professionelles UX/UI Design für Unternehmen in Deutschland: Informationsarchitektur, Figma-Prototyping, Developer-Handoff und WCAG AAA-konformes Webdesign. Datengetriebenes Interface Design für digitale Produkte.",
    keywords: [
        "UX Design Deutschland",
        "UI Design Agentur",
        "Webdesign professionell",
        "Figma Design",
        "Interface Design",
        "UX/UI Designer Deutschland",
        "Webdesign Agentur",
        "User Experience Design",
        "Prototyping",
        "WCAG Accessibility",
    ],
    alternates: { canonical: "https://palmer-digital.de/services/ux-ui-design" },
    openGraph: {
        title: "UX/UI Design & Webdesign | Palmer Digital",
        description:
            "Professionelles Interface Design — von der Informationsarchitektur bis zum Developer-Handoff. WCAG AAA, datengetrieben.",
        url: "https://palmer-digital.de/services/ux-ui-design",
    },
};

export default function UXUIDesignPage() {
    return (
        <main className="bg-[#FFFFFF] min-h-screen">
            <UXHero />
            <UXCapabilities />
            <UXArchitecture />
            <UXProcess />
            <UXUseCases />
            <UXCTA />
        </main>
    );
}

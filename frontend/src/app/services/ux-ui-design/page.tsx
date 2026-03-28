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
    title: "UX/UI Design | Palmer Digital Architecture",
    description:
        "Minimalist Interface Construction — von der Informationsarchitektur über Prototyping bis zum Developer-Handoff. WCAG AAA, datengetriebenes UX-Design.",
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

// src/app/services/material-ui/page.tsx
// Static route — takes precedence over [slug]/page.tsx.
// RSC-First, 0 TBT. Design-Dogma: #001F3F / #FFFFFF / #000000, 0px border-radius.

import { Metadata } from "next";
import DashHero from "@/components/sections/DashHero";
import DashCapabilities from "@/components/sections/DashCapabilities";
import DashArchitecture from "@/components/sections/DashArchitecture";
import DashProcess from "@/components/sections/DashProcess";
import DashUseCases from "@/components/sections/DashUseCases";
import DashCTA from "@/components/sections/DashCTA";

export const metadata: Metadata = {
    title: "Material UI Logic | Palmer Digital",
    description:
        "Enterprise Dashboard-Systeme auf MUI-Basis — Datentabellen, Analytics, RBAC und Echtzeit-Visualisierungen für kritische Geschäftsprozesse.",
};

export default function MaterialUIPage() {
    return (
        <main className="bg-[#FFFFFF] min-h-screen">
            <DashHero />
            <DashCapabilities />
            <DashArchitecture />
            <DashProcess />
            <DashUseCases />
            <DashCTA />
        </main>
    );
}

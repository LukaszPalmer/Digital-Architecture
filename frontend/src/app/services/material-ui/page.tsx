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
    title: "Enterprise Dashboard Entwicklung — Material UI & React",
    description:
        "Professionelle Enterprise Dashboard Entwicklung mit Material UI und React: Datentabellen, Analytics-Dashboards, RBAC und Echtzeit-Visualisierungen für kritische Geschäftsprozesse. Dashboard-Entwicklung für Unternehmen in Deutschland.",
    keywords: [
        "Dashboard Entwicklung",
        "Enterprise Dashboard",
        "Material UI Entwickler",
        "React Dashboard",
        "Admin Panel Entwicklung",
        "Datenvisualisierung",
        "Analytics Dashboard",
        "RBAC Dashboard",
        "Business Intelligence Dashboard",
        "React Entwickler Deutschland",
    ],
    alternates: { canonical: "https://palmer-digital.de/services/material-ui" },
    openGraph: {
        title: "Enterprise Dashboard Entwicklung | Palmer Digital",
        description:
            "Material UI Dashboards — Datentabellen, Analytics, RBAC und Echtzeit-Visualisierungen für kritische Geschäftsprozesse.",
        url: "https://palmer-digital.de/services/material-ui",
    },
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

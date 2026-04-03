import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";

export const metadata: Metadata = {
    title: "Palmer Digital | Webentwicklung & Digitale Systeme für Unternehmen",
    description:
        "Wir entwickeln hochperformante Webanwendungen, Onlineshops und digitale Infrastruktur für wachsende Unternehmen in Deutschland. Next.js, TypeScript, Cloud — production-ready.",
    keywords: [
        "Webentwicklung Deutschland",
        "Next.js Entwicklung",
        "Software Agentur Deutschland",
        "Webdesign professionell",
        "E-Commerce Entwicklung",
        "React Agentur",
        "Full-Stack Entwickler",
        "TypeScript Agentur",
        "Webagentur",
        "digitale Transformation",
    ],
    alternates: { canonical: "https://palmer-digital.de" },
    openGraph: {
        title: "Palmer Digital | Webentwicklung & Digitale Systeme",
        description:
            "Hochperformante Webanwendungen und digitale Infrastruktur für Unternehmen. Next.js, TypeScript, MongoDB — produktionsbereit und skalierbar.",
        url: "https://palmer-digital.de",
    },
};
import ServiceGrid from "@/components/sections/ServiceGrid";
import Process from "@/components/sections/Process"; // Neu integriert
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import TechnicalDNA from "@/components/sections/TechnicalDNA";
import Pricing from "@/components/sections/Pricing";
import BlogTeaser from "@/components/sections/BlogTeaser";
import Careers from "@/components/sections/Careers";
import Contact from "@/components/sections/Contact";

export default function Home() {
    return (
        <div className="flex flex-col w-full">
            <Hero />
            <ServiceGrid />
            <Process /> {/* Strategische Platzierung nach den Services */}
            <FeaturedProjects />
            <TechnicalDNA />
            <Pricing />
            <BlogTeaser />
            <Careers />
            <Contact />
        </div>
    );
}
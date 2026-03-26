import Hero from "@/components/sections/Hero";
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
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { servicesData, getServiceBySlug } from "@/lib/data/services";
import ServiceDetailHero from "@/components/sections/ServiceDetailHero";
import ServiceStats from "@/components/sections/ServiceStats";
import ServiceProcess from "@/components/sections/ServiceProcess";
import ServiceCapabilities from "@/components/sections/ServiceCapabilities";
import ServiceUseCases from "@/components/sections/ServiceUseCases";
import ServiceCTA from "@/components/sections/ServiceCTA";

// 1. DYNAMIC STATIC GENERATION (SSG)
export async function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

// 2. DYNAMIC METADATA (SEO) - Next.js 15 Async Fix
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    // NEXT.JS 15 DOGMA: params muss via await aufgelöst werden
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        return { title: "System Not Found | Palmer Digital" };
    }

    return {
        title: `${service.title} | Palmer Digital`,
        description: service.tagline,
    };
}

// 3. PAGE TEMPLATE - Next.js 15 Async Fix
export default async function ServiceDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    // NEXT.JS 15 DOGMA: params muss via await aufgelöst werden
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        notFound(); 
    }

    return (
        <main className="bg-[#FFFFFF] min-h-screen">
            <ServiceDetailHero
                systemId={service.systemId}
                title={service.title}
                tagline={service.tagline}
                metrics={service.metrics}
            />
            <ServiceStats stats={service.stats} />
            <ServiceProcess steps={service.process} />
            <ServiceCapabilities
                title="Infrastructure Protocols"
                capabilities={service.capabilities}
            />
            <ServiceUseCases useCases={service.useCases} />
            <ServiceCTA />
        </main>
    );
}
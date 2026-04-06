import { MetadataRoute } from "next";

const BASE_URL = "https://palmer-digital.de";

const staticRoutes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/portfolio", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/strategy", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/careers", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/impressum", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/datenschutz", priority: 0.3, changeFrequency: "yearly" as const },
];

const serviceRoutes = [
    "/services/nextjs-elite-core",
    "/services/cloud-infrastructure",
    "/services/postgresql",
    "/services/design-ops-system",
    "/services/fintech-pipelines",
    "/services/material-ui",
    "/services/ux-ui-design",
    "/services/nodejs-core",
];

const blogSlugs = [
    "nextjs-performance-optimierung",
    "cloud-infrastruktur-best-practices",
    "typescript-enterprise-patterns",
    "postgresql-skalierung",
    "ux-design-prinzipien",
    "react-server-components",
];

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    const staticEntries = staticRoutes.map(({ path, priority, changeFrequency }) => ({
        url: `${BASE_URL}${path}`,
        lastModified: now,
        changeFrequency,
        priority,
    }));

    const serviceEntries = serviceRoutes.map((path) => ({
        url: `${BASE_URL}${path}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    const blogEntries = blogSlugs.map((slug) => ({
        url: `${BASE_URL}/blog/${slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [...staticEntries, ...serviceEntries, ...blogEntries];
}

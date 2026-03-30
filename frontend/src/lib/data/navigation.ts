import { NavLink } from "@/types/navigation";

export const NAV_LINKS: NavLink[] = [
    {
        label: "SERVICES",
        subLinks: [
            {
                label: "Next.js Elite Core",
                href: "/services/nextjs-elite-core",
                description: "Server-First Applikations-Architektur",
                iconPath: "/media/Next.js.svg",
            },
            {
                label: "Tailwind Design Ops",
                href: "/services/design-ops-system",
                description: "Atomic CSS Design Frameworks",
                iconPath: "/media/Tailwind CSS.svg",
            },
            {
                label: "Stripe Fintech Pipelines",
                href: "/services/fintech-pipelines",
                description: "Automatisierte Zahlungsströme",
                iconPath: "/media/Stripe-Blurple.svg",
            },
            {
                label: "Material UI Logic",
                href: "/services/material-ui",
                description: "Enterprise Dashboard Komponenten",
                iconPath: "/media/MaterialUI.svg",
            },
            {
                label: "UX/UI Design",
                href: "/services/ux-ui-design",
                description: "Minimalist Interface Construction",
                iconPath: "/media/Figma.svg",
            },
            {
                label: "Node.js Core",
                href: "/services/nodejs-core",
                description: "Skalierbare Backend Infrastruktur",
                iconPath: "/media/Node.js.svg",
            },
        ],
    },
    {
        label: "INFRASTRUKTUR",
        subLinks: [
            {
                label: "MongoDB Cloud Backbone",
                href: "/services/cloud-infrastructure",
                description: "Data Pipeline & Cluster Ops",
                iconPath: "/media/MongoDB.svg",
            },
            {
                label: "Vercel Edge",
                href: "/vercel",
                description: "Global High-Speed Deployment",
                iconPath: "/media/Vercel.svg",
            },
            {
                label: "Railway Cloud",
                href: "/railway",
                description: "Scalable Microservice Hosting",
                iconPath: "/media/Railway.svg",
            },
            {
                label: "PostgreSQL Core",
                href: "/services/postgresql",
                description: "Relationale Datenbankarchitektur",
                iconPath: "/media/PostgreSQL.svg",
            },
        ],
    },
    { label: "CAREERS", href: "/careers" },
];

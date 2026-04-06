import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { SiteLayout } from "@/components/layout/SiteLayout";

const GA_ID = "G-01TCGPSE78";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap",
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "Palmer Digital | Webentwicklung, Next.js & Cloud-Infrastruktur",
        template: "%s | Palmer Digital",
    },
    description:
        "Palmer Digital entwickelt hochperformante Webanwendungen, Cloud-Infrastrukturen und digitale Systeme für Unternehmen in Deutschland und Europa. Spezialisiert auf Next.js, TypeScript, MongoDB und skalierbare Backend-Architekturen.",
    keywords: [
        "Webentwicklung",
        "Next.js Agentur",
        "TypeScript Entwicklung",
        "Cloud-Infrastruktur",
        "Software-Entwicklung Deutschland",
        "Full-Stack Entwicklung",
        "React Entwicklung",
        "Node.js Backend",
        "MongoDB Atlas",
        "Webdesign Agentur",
        "UI UX Design",
        "Palmer Digital",
    ],
    authors: [{ name: "Palmer Digital", url: "https://palmer-digital.de" }],
    creator: "Palmer Digital",
    metadataBase: new URL("https://palmer-digital.de"),
    openGraph: {
        type: "website",
        locale: "de_DE",
        siteName: "Palmer Digital",
        title: "Palmer Digital | Webentwicklung, Next.js & Cloud-Infrastruktur",
        description:
            "Hochperformante Webanwendungen, Cloud-Infrastrukturen und digitale Systeme für Unternehmen in Deutschland und Europa.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Palmer Digital | Webentwicklung & Cloud-Infrastruktur",
        description:
            "Hochperformante Webanwendungen und digitale Systeme. Next.js, TypeScript, MongoDB — produktionsbereit.",
        creator: "@palmerdigital",
    },
    verification: {
        google: "nXru6wHTDorZxbA5lW3vJIoRIhINT0HWZFYYSbB8gh4",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
        },
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export const viewport: Viewport = {
    themeColor: "#001F3F",
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="de"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <head>
                {/* GA4 Consent Mode v2 — inline avoided to prevent React hydration warning */}
                <Script
                    id="ga4-consent-init"
                    strategy="beforeInteractive"
                    src="/scripts/ga-consent-init.js"
                />
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                    strategy="afterInteractive"
                />
            </head>
            <body className="min-h-screen flex flex-col bg-white text-black selection:bg-[#001F3F] selection:text-white">
                <SiteLayout>
                    {children}
                </SiteLayout>
            </body>
        </html>
    );
}

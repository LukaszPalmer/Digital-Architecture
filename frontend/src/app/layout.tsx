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
        default: "Palmer Digital | Engineering Digital Leaders",
        template: "%s | Palmer Digital",
    },
    description:
        "High-End Webapp-Entwicklung & Digitale Architektur für Marktführer.",
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

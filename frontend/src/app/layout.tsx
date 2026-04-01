import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CookieBanner } from "@/components/cookie/CookieBanner";
import { TrackingProvider } from "@/components/providers/TrackingProvider";

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
        default: "Palmer Digital Architecture | Engineering Digital Leaders",
        template: "%s | Palmer Digital Architecture",
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
                {/* GA4 Consent Mode v2 — Default: alles denied bis Nutzer zustimmt */}
                <Script id="ga4-consent-init" strategy="beforeInteractive">{`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('consent', 'default', {
                        analytics_storage: 'denied',
                        ad_storage: 'denied',
                        ad_user_data: 'denied',
                        ad_personalization: 'denied',
                        wait_for_update: 500
                    });
                    gtag('js', new Date());
                    gtag('config', '${GA_ID}', { anonymize_ip: true });
                `}</Script>
                {/* GA4 Script */}
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                    strategy="afterInteractive"
                />
            </head>
            {/* 'flex-col min-h-screen' sorgt dafür, dass der Footer am Boden bleibt */}
            <body className="min-h-screen flex flex-col bg-white text-black selection:bg-[#001F3F] selection:text-white">
                {/* Globales Navigations-Asset */}
                <Navbar />

                {/* Main Content Area: 
                   'flex-grow' füllt den Raum zwischen Nav und Footer.
                   Padding-Top korrespondiert exakt mit der Navbar-Höhe.
                */}
                <main
                    id="main-content"
                    className="flex-grow pt-[70px] md:pt-[90px]"
                >
                    {children}
                </main>

                {/* Globales Footer-Asset */}
                <Footer />

                {/* Cookie Consent Banner */}
                <CookieBanner />

                {/* Pageview Tracker — fires on every SPA navigation */}
                <TrackingProvider />
            </body>
        </html>
    );
}

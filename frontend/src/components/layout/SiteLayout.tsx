"use client";

// Renders Navbar/Footer/CookieBanner/Tracker only on public pages.
// Admin routes (/admin/*) get none of these — they have their own layout.

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { CookieBanner }    from "@/components/cookie/CookieBanner";
import { TrackingProvider } from "@/components/providers/TrackingProvider";

export function SiteLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdmin  = pathname.startsWith("/admin");

    if (isAdmin) return <>{children}</>;

    return (
        <>
            <Navbar />
            <main id="main-content" className="flex-grow pt-[70px] md:pt-[90px]">
                {children}
            </main>
            <Footer />
            <FloatingActions />
            <CookieBanner />
            <TrackingProvider />
        </>
    );
}

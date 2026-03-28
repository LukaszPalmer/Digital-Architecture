"use client";

/**
 * NavScrollShell — isolierte Client-Interaktions-Insel
 * Einzige Verantwortung: Scroll-State → border/shadow auf dem <nav>-Element.
 * Alles andere bleibt Server-gerendert (RSC-First-Dogma).
 */

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NavScrollShellProps {
    children: React.ReactNode;
}

export function NavScrollShell({ children }: NavScrollShellProps) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            role="navigation"
            aria-label="Hauptnavigation Palmer Digital Architecture"
            className={cn(
                "fixed top-0 left-0 w-full z-50 h-[70px] md:h-[90px] transition-all duration-300",
                scrolled
                    ? "bg-[#FFFFFF]/96 backdrop-blur-md border-b border-[#000000]/8 shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
                    : "bg-[#FFFFFF] border-b border-[#000000]"
            )}
        >
            {children}
        </nav>
    );
}

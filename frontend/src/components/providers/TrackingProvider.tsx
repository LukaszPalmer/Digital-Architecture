"use client";

// src/components/providers/TrackingProvider.tsx
// Feuert pageview + pageleave + scroll_depth + cta_click auf jeder Seite.

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { track, initScrollTracking } from "@/lib/tracker";

export function TrackingProvider() {
    const pathname  = usePathname();
    const startTime = useRef<number>(Date.now());

    // Pageview + Verweildauer
    useEffect(() => {
        track("pageview");
        startTime.current = Date.now();

        return () => {
            const duration = Math.round((Date.now() - startTime.current) / 1000);
            if (duration > 2) {
                track("pageleave", pathname, duration);
            }
        };
    }, [pathname]);

    // Scroll-Tiefe tracking (wird bei jedem Seitenwechsel neu initialisiert)
    useEffect(() => {
        return initScrollTracking();
    }, [pathname]);

    // Globales CTA-Click-Tracking via data-track-cta Attribut
    // So bleiben Server Components unberührt — einfach data-track-cta="name" hinzufügen
    useEffect(() => {
        function handleClick(e: MouseEvent) {
            const el = (e.target as HTMLElement).closest("[data-track-cta]") as HTMLElement | null;
            if (el) {
                track("cta_click", el.getAttribute("data-track-cta") ?? "unknown");
            }
        }
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    return null;
}

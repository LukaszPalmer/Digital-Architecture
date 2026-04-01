"use client";

// src/components/providers/TrackingProvider.tsx
// Fires a pageview track event on every SPA navigation.
// tracker.ts guards the call — only runs when analytics consent is given.

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { track } from "@/lib/tracker";

export function TrackingProvider() {
    const pathname  = usePathname();
    const startTime = useRef<number>(Date.now());

    useEffect(() => {
        // Track pageview for this route
        track("pageview");
        startTime.current = Date.now();

        return () => {
            // Track time spent on the page when navigating away
            const duration = Math.round((Date.now() - startTime.current) / 1000);
            if (duration > 2) {
                track("pageleave", pathname, duration);
            }
        };
    }, [pathname]);

    return null;
}

"use client";

// src/components/ui/ScrollReveal.tsx
// Client-Insel — isoliert für Intersection-Observer Logik.
// Wrapper für einzelne Elemente (Section-Header, CTAs).

import { useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number; // ms — für gestaffelte Reveals
}

export default function ScrollReveal({
    children,
    className,
    delay = 0,
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Check prefers-reduced-motion
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            el.classList.add("in-view");
            return;
        }

        el.classList.add("reveal-block");

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => el.classList.add("in-view"), delay);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [delay]);

    return (
        <div ref={ref} className={cn(className)}>
            {children}
        </div>
    );
}

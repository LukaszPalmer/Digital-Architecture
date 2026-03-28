"use client";

// src/components/ui/RevealGrid.tsx
// Client-Insel — Intersection Observer für gestaffelte Grid-Animationen.
// Wraps das Grid-div und animiert direct children mit Stagger-Effekt.

import { useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealGridProps {
    children: ReactNode;
    className?: string;
    stagger?: number; // ms zwischen jedem Item
}

export default function RevealGrid({
    children,
    className,
    stagger = 90,
}: RevealGridProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const items = Array.from(el.children) as HTMLElement[];

        // Respect prefers-reduced-motion
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        // Add base reveal class (makes items invisible until in-view)
        items.forEach((item) => item.classList.add("reveal-item"));

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    items.forEach((item, i) => {
                        setTimeout(
                            () => item.classList.add("in-view"),
                            i * stagger
                        );
                    });
                    observer.unobserve(el);
                }
            },
            { threshold: 0.05, rootMargin: "0px 0px -30px 0px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [stagger]);

    return (
        <div ref={ref} className={cn(className)}>
            {children}
        </div>
    );
}

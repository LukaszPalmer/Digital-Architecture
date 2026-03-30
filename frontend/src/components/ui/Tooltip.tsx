"use client";

// src/components/ui/Tooltip.tsx
// Client-Insel — isoliert für Hover-State + Mobile-Click.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// Trigger: Dotted underline + Info-Icon — signalisiert Interaktivität auf allen Screens.
// Mobile: onClick-Toggle. Desktop: onMouseEnter/Leave.

import { ReactNode, useState, useEffect, useRef } from "react";

interface TooltipProps {
    children: ReactNode;
    term: string;
    explanation: string;
    benefit: string;
}

function InfoIcon() {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="8" r="1.2" fill="currentColor" strokeWidth="0" />
            <line x1="12" y1="12" x2="12" y2="17" strokeWidth="2.5" />
        </svg>
    );
}

export function Tooltip({ children, term, explanation, benefit }: TooltipProps) {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Klick außerhalb schließt Tooltip auf Mobile
    useEffect(() => {
        if (!isVisible) return;
        const onClickOutside = (e: MouseEvent | TouchEvent) => {
            if (!containerRef.current?.contains(e.target as Node)) {
                setIsVisible(false);
            }
        };
        document.addEventListener("mousedown", onClickOutside);
        document.addEventListener("touchstart", onClickOutside);
        return () => {
            document.removeEventListener("mousedown", onClickOutside);
            document.removeEventListener("touchstart", onClickOutside);
        };
    }, [isVisible]);

    return (
        <div
            ref={containerRef}
            className="relative inline-block"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {/* Trigger — border-current passt sich automatisch zur Textfarbe an */}
            <span
                className="border-b border-dotted border-current/50 hover:border-current transition-colors duration-150 cursor-help inline-flex items-center gap-1.5 select-none"
                onClick={() => setIsVisible((v) => !v)}
                role="button"
                tabIndex={0}
                aria-expanded={isVisible}
                aria-label={`${term} — Erklärung anzeigen`}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setIsVisible((v) => !v);
                    }
                }}
            >
                <span>{children}</span>

                {/* Info-Icon — immer sichtbar, signalisiert Interaktivität */}
                <span
                    className="shrink-0 inline-flex items-center justify-center border border-current/35 text-current/45 hover:text-current/80 hover:border-current/70 transition-colors duration-150"
                    style={{ width: "0.65em", height: "0.65em", minWidth: "14px", minHeight: "14px" }}
                    aria-hidden="true"
                >
                    <InfoIcon />
                </span>
            </span>

            {isVisible && (
                <div
                    className="absolute z-999 bottom-full left-0 mb-4 w-80 bg-[#FFFFFF] text-[#000000] shadow-[0_20px_60px_rgba(0,0,0,0.25)] border-l-4 border-[#001F3F] animate-fade-up origin-bottom-left"
                    role="tooltip"
                >
                    {/* Header */}
                    <div className="flex items-center gap-2 px-5 pt-5 pb-3 border-b border-[#000000]/15">
                        <div className="w-1.5 h-1.5 bg-[#001F3F] shrink-0" />
                        <p className="text-[9.5px] font-mono tracking-[0.3em] text-[#001F3F] uppercase font-black">
                            {term}
                        </p>
                    </div>

                    {/* Explanation — voller Kontrast */}
                    <div className="px-5 py-5">
                        <p className="text-[13.5px] leading-relaxed font-medium text-[#000000]">
                            {explanation}
                        </p>
                    </div>

                    {/* Benefit — verbesserte Lesbarkeit */}
                    <div className="px-5 py-4 border-t border-[#000000]/10 bg-[#001F3F]">
                        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#FFFFFF]/70 mb-2">
                            Strategic Benefit
                        </p>
                        <p className="text-[12.5px] font-black uppercase leading-snug text-[#FFFFFF]">
                            {benefit}
                        </p>
                    </div>

                    {/* Triangle connector */}
                    <div className="absolute top-full left-5 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-[#FFFFFF]" />
                </div>
            )}
        </div>
    );
}

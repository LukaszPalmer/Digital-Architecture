"use client";

// src/components/ui/Tooltip.tsx
// Client-Insel — isoliert für Hover-State.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.
// Trigger verwendet border-current → adaptiert sich zu jedem Text-Kontext (hell/dunkel).

import { ReactNode, useState } from "react";

interface TooltipProps {
    children: ReactNode;
    term: string;
    explanation: string;
    benefit: string;
}

export function Tooltip({ children, term, explanation, benefit }: TooltipProps) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {/* Trigger — border-current passt sich automatisch zur Textfarbe an */}
            <span className="border-b border-dotted border-current/40 hover:border-current/80 transition-colors duration-150 cursor-help">
                {children}
            </span>

            {isVisible && (
                <div className="absolute z-999 bottom-full left-0 mb-4 w-80 bg-[#FFFFFF] text-[#000000] shadow-[0_20px_60px_rgba(0,0,0,0.18)] border-l-4 border-[#001F3F] animate-fade-up origin-bottom-left">

                    {/* Header */}
                    <div className="flex items-center gap-2 px-5 pt-5 pb-3 border-b border-[#000000]/10">
                        <div className="w-1.5 h-1.5 bg-[#001F3F] shrink-0" />
                        <p className="text-[9.5px] font-mono tracking-[0.3em] text-[#001F3F] uppercase font-black">
                            {term}
                        </p>
                    </div>

                    {/* Explanation */}
                    <div className="px-5 py-4">
                        <p className="text-[13px] leading-relaxed font-medium text-[#000000]/80">
                            {explanation}
                        </p>
                    </div>

                    {/* Benefit */}
                    <div className="px-5 py-4 border-t border-[#000000]/10 bg-[#001F3F]">
                        <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[#FFFFFF]/50 mb-1">
                            Strategic Benefit
                        </p>
                        <p className="text-[12px] font-black uppercase leading-tight text-[#FFFFFF]">
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

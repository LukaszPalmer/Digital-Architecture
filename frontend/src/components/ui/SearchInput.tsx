"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function SearchInput() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [query, setQuery] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    // Tastatur-Shortcut: CMD+K / CTRL+K (Desktop) + ESC zum Schließen
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setIsExpanded(true);
                setTimeout(() => inputRef.current?.focus(), 100);
            }
            if (e.key === "Escape") {
                setIsExpanded(false);
                setQuery("");
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const handleClose = () => {
        setIsExpanded(false);
        setQuery("");
    };

    return (
        <div className="relative flex items-center justify-end">
            <div
                className={cn(
                    "flex items-center border-[#000000] transition-all duration-500 ease-in-out bg-[#FFFFFF]",
                    isExpanded
                        ? "w-[240px] md:w-[320px] border-b px-2 py-1"
                        : "w-[40px] border-b-0"
                )}
            >
                {/* Search Icon Button */}
                <button
                    onClick={() => {
                        setIsExpanded(!isExpanded);
                        if (!isExpanded)
                            setTimeout(() => inputRef.current?.focus(), 100);
                    }}
                    className="shrink-0 p-2 hover:text-[#001F3F] transition-colors"
                    aria-label={isExpanded ? "Suche aktiv" : "Suche starten"}
                    aria-expanded={isExpanded}
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                        aria-hidden="true"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                </button>

                {/* Input Field */}
                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="SYSTEM-SUCHE..."
                    className={cn(
                        "w-full bg-transparent text-[12px] font-bold tracking-widest text-[#000000] outline-none placeholder:text-[#000000]/30 transition-opacity duration-300",
                        isExpanded
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                    )}
                />

                {/* X-Button — Mobile + Tablet (unter lg / 1024px) */}
                {isExpanded && (
                    <button
                        onClick={handleClose}
                        aria-label="Suche schließen"
                        className="lg:hidden shrink-0 min-w-11 min-h-11 flex items-center justify-center text-[#000000]/55 hover:text-[#001F3F] transition-colors"
                    >
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="square"
                            strokeLinejoin="miter"
                            aria-hidden="true"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                )}

                {/* ESC-Hint — nur Desktop (ab lg / 1024px) */}
                {isExpanded && (
                    <span className="hidden lg:block shrink-0 text-[10px] text-[#000000]/40 font-mono ml-2">
                        ESC
                    </span>
                )}
            </div>
        </div>
    );
}

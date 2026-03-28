"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/data/navigation";

// ── Search Index ────────────────────────────────────────────────────────────

interface SearchItem {
    label: string;
    href: string;
    description: string;
    category: string;
    iconPath?: string;
}

const SEARCH_INDEX: SearchItem[] = NAV_LINKS.flatMap((link) =>
    link.subLinks
        ? link.subLinks.map((sub) => ({
              label: sub.label,
              href: sub.href,
              description: sub.description,
              category: link.label,
              iconPath: sub.iconPath,
          }))
        : []
);

function getResults(query: string): SearchItem[] {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return SEARCH_INDEX.filter(
        (item) =>
            item.label.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q) ||
            item.category.toLowerCase().includes(q)
    );
}

// ── Component ────────────────────────────────────────────────────────────────

export default function SearchInput() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [query, setQuery] = useState("");
    const [activeIndex, setActiveIndex] = useState(-1);
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const results = getResults(query);
    const showResults = isExpanded && query.trim().length > 0;

    // Group results by category while preserving flat indices
    const grouped = results.reduce<{ category: string; items: Array<SearchItem & { idx: number }> }[]>(
        (acc, item, idx) => {
            const group = acc.find((g) => g.category === item.category);
            if (group) {
                group.items.push({ ...item, idx });
            } else {
                acc.push({ category: item.category, items: [{ ...item, idx }] });
            }
            return acc;
        },
        []
    );

    const handleClose = useCallback(() => {
        setIsExpanded(false);
        setQuery("");
        setActiveIndex(-1);
    }, []);

    const navigate = useCallback(
        (href: string) => {
            router.push(href);
            handleClose();
        },
        [router, handleClose]
    );

    // CMD+K / CTRL+K öffnen — ESC schließen
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setIsExpanded(true);
                setTimeout(() => inputRef.current?.focus(), 100);
            }
            if (e.key === "Escape") handleClose();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleClose]);

    // Klick außerhalb schließt die Suche
    useEffect(() => {
        if (!isExpanded) return;
        const onClickOutside = (e: MouseEvent) => {
            if (!containerRef.current?.contains(e.target as Node)) handleClose();
        };
        document.addEventListener("mousedown", onClickOutside);
        return () => document.removeEventListener("mousedown", onClickOutside);
    }, [isExpanded, handleClose]);

    // Tastatur-Navigation in der Ergebnisliste
    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!showResults || results.length === 0) return;
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setActiveIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActiveIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
        } else if (e.key === "Enter" && activeIndex >= 0) {
            e.preventDefault();
            navigate(results[activeIndex].href);
        }
    };

    return (
        <div ref={containerRef} className="relative flex items-center justify-end">

            {/* ── Input-Leiste ── */}
            <div
                className={cn(
                    "flex items-center border-[#000000] transition-all duration-500 ease-in-out bg-[#FFFFFF]",
                    isExpanded
                        ? "w-[240px] md:w-[320px] border-b px-2 py-1"
                        : "w-[40px] border-b-0"
                )}
            >
                {/* Lupe */}
                <button
                    onClick={() => {
                        setIsExpanded(!isExpanded);
                        if (!isExpanded) setTimeout(() => inputRef.current?.focus(), 100);
                    }}
                    className="shrink-0 p-2 hover:text-[#001F3F] transition-colors"
                    aria-label={isExpanded ? "Suche aktiv" : "Suche starten"}
                    aria-expanded={isExpanded}
                    aria-controls="search-results"
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

                {/* Eingabefeld */}
                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setActiveIndex(-1);
                    }}
                    onKeyDown={handleInputKeyDown}
                    placeholder="SYSTEM-SUCHE..."
                    role="combobox"
                    aria-autocomplete="list"
                    aria-expanded={showResults}
                    aria-controls="search-results"
                    aria-activedescendant={activeIndex >= 0 ? `search-item-${activeIndex}` : undefined}
                    className={cn(
                        "w-full bg-transparent text-[12px] font-bold tracking-widest text-[#000000] outline-none placeholder:text-[#000000]/30 transition-opacity duration-300",
                        isExpanded ? "opacity-100" : "opacity-0 pointer-events-none"
                    )}
                />

                {/* X-Button — Mobile + Tablet */}
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

                {/* ESC-Hint — nur Desktop */}
                {isExpanded && (
                    <span className="hidden lg:block shrink-0 text-[10px] text-[#000000]/40 font-mono ml-2">
                        ESC
                    </span>
                )}
            </div>

            {/* ── Ergebnis-Dropdown ── */}
            {showResults && (
                <div
                    id="search-results"
                    role="listbox"
                    aria-label="Suchergebnisse"
                    className="absolute top-[calc(100%+6px)] right-0 w-[280px] md:w-[320px] bg-[#FFFFFF] border border-[#000000]/10 shadow-[0_8px_32px_rgba(0,0,0,0.08)] z-50"
                >
                    {results.length === 0 ? (
                        <div className="px-4 py-4 text-[10px] font-mono tracking-[0.25em] text-[#000000]/35 uppercase">
                            KEINE ERGEBNISSE
                        </div>
                    ) : (
                        <>
                            {grouped.map(({ category, items }) => (
                                <div key={category}>
                                    {/* Kategorie-Header */}
                                    <div className="px-4 pt-3 pb-1.5 text-[9px] font-bold tracking-[0.3em] text-[#001F3F]/50 uppercase border-b border-[#000000]/6">
                                        {category}
                                    </div>

                                    {/* Ergebnis-Einträge */}
                                    {items.map(({ idx, label, href, description, iconPath }) => {
                                        const isActive = idx === activeIndex;
                                        return (
                                            <button
                                                key={href}
                                                id={`search-item-${idx}`}
                                                role="option"
                                                aria-selected={isActive}
                                                onClick={() => navigate(href)}
                                                onMouseEnter={() => setActiveIndex(idx)}
                                                className={cn(
                                                    "w-full text-left flex items-start gap-3 px-4 py-3 transition-colors duration-100 border-b border-[#000000]/5 last:border-0",
                                                    isActive
                                                        ? "bg-[#001F3F]"
                                                        : "hover:bg-[#001F3F]/[0.04]"
                                                )}
                                            >
                                                {iconPath && (
                                                    // eslint-disable-next-line @next/next/no-img-element
                                                    <img
                                                        src={iconPath}
                                                        alt=""
                                                        width={16}
                                                        height={16}
                                                        className={cn(
                                                            "shrink-0 mt-0.5 object-contain",
                                                            isActive && "invert"
                                                        )}
                                                    />
                                                )}
                                                <div className="min-w-0">
                                                    <div
                                                        className={cn(
                                                            "text-[11px] font-bold tracking-[0.05em] leading-tight truncate",
                                                            isActive ? "text-[#FFFFFF]" : "text-[#000000]"
                                                        )}
                                                    >
                                                        {label}
                                                    </div>
                                                    <div
                                                        className={cn(
                                                            "text-[10px] tracking-wide mt-0.5 truncate",
                                                            isActive ? "text-[#FFFFFF]/65" : "text-[#000000]/40"
                                                        )}
                                                    >
                                                        {description}
                                                    </div>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            ))}

                            {/* Footer-Hints */}
                            <div className="px-4 py-2 border-t border-[#000000]/6 flex items-center gap-4">
                                <span className="text-[9px] font-mono tracking-widest text-[#000000]/25">
                                    ↑↓ NAVIGIEREN
                                </span>
                                <span className="text-[9px] font-mono tracking-widest text-[#000000]/25">
                                    ↵ ÖFFNEN
                                </span>
                                <span className="text-[9px] font-mono tracking-widest text-[#000000]/25">
                                    ESC SCHLIESSEN
                                </span>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

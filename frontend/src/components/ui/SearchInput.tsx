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

// ── Shared Results Renderer ──────────────────────────────────────────────────

interface ResultsProps {
    grouped: { category: string; items: Array<SearchItem & { idx: number }> }[];
    results: SearchItem[];
    activeIndex: number;
    onHover: (idx: number) => void;
    onNavigate: (href: string) => void;
    idPrefix?: string;
}

function ResultsList({ grouped, results, activeIndex, onHover, onNavigate, idPrefix = "search-item" }: ResultsProps) {
    if (results.length === 0) {
        return (
            <div className="px-4 py-4 text-[10px] font-mono tracking-[0.25em] text-[#000000]/35 uppercase">
                KEINE ERGEBNISSE
            </div>
        );
    }
    return (
        <>
            {grouped.map(({ category, items }) => (
                <div key={category}>
                    <div className="px-4 pt-3 pb-1.5 text-[9px] font-bold tracking-[0.3em] text-[#001F3F]/50 uppercase border-b border-[#000000]/6">
                        {category}
                    </div>
                    {items.map(({ idx, label, href, description, iconPath }) => {
                        const isActive = idx === activeIndex;
                        return (
                            <button
                                key={href}
                                id={`${idPrefix}-${idx}`}
                                role="option"
                                aria-selected={isActive}
                                onClick={() => onNavigate(href)}
                                onMouseEnter={() => onHover(idx)}
                                className={cn(
                                    "w-full text-left flex items-start gap-3 px-4 py-3 transition-colors duration-100 border-b border-[#000000]/5 last:border-0",
                                    isActive ? "bg-[#001F3F]" : "hover:bg-[#001F3F]/[0.04]"
                                )}
                            >
                                {iconPath && (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={iconPath}
                                        alt=""
                                        width={16}
                                        height={16}
                                        className={cn("shrink-0 mt-0.5 object-contain", isActive && "invert")}
                                    />
                                )}
                                <div className="min-w-0">
                                    <div className={cn("text-[11px] font-bold tracking-[0.05em] leading-tight truncate", isActive ? "text-[#FFFFFF]" : "text-[#000000]")}>
                                        {label}
                                    </div>
                                    <div className={cn("text-[10px] tracking-wide mt-0.5 truncate", isActive ? "text-[#FFFFFF]/65" : "text-[#000000]/40")}>
                                        {description}
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            ))}
            <div className="px-4 py-2 border-t border-[#000000]/6 flex items-center gap-4">
                <span className="text-[9px] font-mono tracking-widest text-[#000000]/25">↑↓ NAVIGIEREN</span>
                <span className="text-[9px] font-mono tracking-widest text-[#000000]/25">↵ ÖFFNEN</span>
                <span className="text-[9px] font-mono tracking-widest text-[#000000]/25">ESC SCHLIESSEN</span>
            </div>
        </>
    );
}

// ── Component ────────────────────────────────────────────────────────────────

export default function SearchInput() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [query, setQuery] = useState("");
    const [activeIndex, setActiveIndex] = useState(-1);
    const inputRef = useRef<HTMLInputElement>(null);
    const mobileInputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const results = getResults(query);
    const showResults = isExpanded && query.trim().length > 0;

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

    const handleToggle = () => {
        const next = !isExpanded;
        setIsExpanded(next);
        if (next) {
            setTimeout(() => {
                if (window.innerWidth >= 1024) {
                    inputRef.current?.focus();
                } else {
                    mobileInputRef.current?.focus();
                }
            }, 100);
        }
    };

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

    // Tastatur-Navigation
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

    const SearchIcon = () => (
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
    );

    const CloseIcon = () => (
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
    );

    return (
        <div ref={containerRef} className="relative flex items-center justify-end">

            {/* ── Desktop: aufklappende Input-Leiste ── */}
            <div
                className={cn(
                    "hidden lg:flex items-center border-[#000000] transition-all duration-500 ease-in-out bg-[#FFFFFF]",
                    isExpanded
                        ? "w-[320px] border-b px-2 py-1"
                        : "w-[40px] border-b-0"
                )}
            >
                {/* Lupe */}
                <button
                    onClick={handleToggle}
                    className="shrink-0 p-2 hover:text-[#001F3F] transition-colors"
                    aria-label={isExpanded ? "Suche aktiv" : "Suche starten"}
                    aria-expanded={isExpanded}
                    aria-controls="search-results"
                >
                    <SearchIcon />
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

                {/* ESC-Hint */}
                {isExpanded && (
                    <span className="shrink-0 text-[10px] text-[#000000]/40 font-mono ml-2">
                        ESC
                    </span>
                )}
            </div>

            {/* ── Mobile: nur Icon-Button ── */}
            <button
                onClick={handleToggle}
                className="lg:hidden shrink-0 p-2 hover:text-[#001F3F] transition-colors"
                aria-label={isExpanded ? "Suche schließen" : "Suche öffnen"}
                aria-expanded={isExpanded}
            >
                {isExpanded ? <CloseIcon /> : <SearchIcon />}
            </button>

            {/* ── Mobile Dropdown ── */}
            {isExpanded && (
                <div className="lg:hidden absolute top-[calc(100%+8px)] right-[-44px] w-[calc(100vw-2rem)] max-w-[340px] bg-[#FFFFFF] border border-[#000000]/10 shadow-[0_8px_32px_rgba(0,0,0,0.10)] z-50">
                    {/* Input-Zeile */}
                    <div className="flex items-center border-b border-[#000000] px-2 py-1">
                        <span className="shrink-0 p-2 text-[#000000]/40" aria-hidden="true">
                            <SearchIcon />
                        </span>
                        <input
                            ref={mobileInputRef}
                            type="text"
                            value={query}
                            onChange={(e) => {
                                setQuery(e.target.value);
                                setActiveIndex(-1);
                            }}
                            onKeyDown={handleInputKeyDown}
                            placeholder="SYSTEM-SUCHE..."
                            autoComplete="off"
                            className="w-full bg-transparent text-[16px] font-bold tracking-widest text-[#000000] outline-none placeholder:text-[#000000]/30"
                        />
                        <button
                            onClick={handleClose}
                            aria-label="Suche schließen"
                            className="shrink-0 min-w-11 min-h-11 flex items-center justify-center text-[#000000]/55 hover:text-[#001F3F] transition-colors"
                        >
                            <CloseIcon />
                        </button>
                    </div>

                    {/* Mobile Ergebnisse */}
                    {showResults && (
                        <div role="listbox" aria-label="Suchergebnisse">
                            <ResultsList
                                grouped={grouped}
                                results={results}
                                activeIndex={activeIndex}
                                onHover={setActiveIndex}
                                onNavigate={navigate}
                                idPrefix="search-item-mobile"
                            />
                        </div>
                    )}
                </div>
            )}

            {/* ── Desktop Ergebnis-Dropdown ── */}
            {showResults && (
                <div
                    id="search-results"
                    role="listbox"
                    aria-label="Suchergebnisse"
                    className="hidden lg:block absolute top-[calc(100%+6px)] right-0 w-[320px] bg-[#FFFFFF] border border-[#000000]/10 shadow-[0_8px_32px_rgba(0,0,0,0.08)] z-50"
                >
                    <ResultsList
                        grouped={grouped}
                        results={results}
                        activeIndex={activeIndex}
                        onHover={setActiveIndex}
                        onNavigate={navigate}
                    />
                </div>
            )}
        </div>
    );
}

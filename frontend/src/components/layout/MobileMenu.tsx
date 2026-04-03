"use client";

// src/components/layout/MobileMenu.tsx
// Client-Insel — Full-Screen Mobile Navigation Overlay.
// Accordion-Navigation: Sections collapsed by default, expand on tap.
// Fix: Hamburger-X (z-60) ist der einzige Close-Trigger — kein doppeltes X.

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavLink } from "@/types/navigation";
import { cn } from "@/lib/utils";

export function MobileMenu({ links }: { links: NavLink[] }) {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

    const close = useCallback(() => {
        setIsOpen(false);
        setExpandedSections(new Set());
    }, []);

    const toggleSection = useCallback((label: string) => {
        setExpandedSections((prev) => {
            const next = new Set(prev);
            if (next.has(label)) {
                next.delete(label);
            } else {
                next.add(label);
            }
            return next;
        });
    }, []);

    // Body-Scroll sperren wenn Menü offen
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    // ESC-Key zum Schließen
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) close();
        };
        document.addEventListener("keydown", handleKey);
        return () => document.removeEventListener("keydown", handleKey);
    }, [isOpen, close]);

    return (
        <>
            {/* ── Hamburger / X Toggle ──
                z-60 stellt sicher, dass der Button über dem Overlay (z-50) bleibt.
                Dieser Button ist der EINZIGE Close-Trigger — kein redundantes X im Overlay. */}
            <button
                onClick={() => setIsOpen((v) => !v)}
                aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
                aria-expanded={isOpen}
                aria-controls="mobile-nav"
                className="relative z-60 w-11 h-11 flex items-center justify-center"
            >
                {/*
                    Wrapper: w-5 (20px) × h-3.5 (14px).
                    Alle 3 Linien absolut positioniert → präzise Rotations-Achse.
                    Linie 1: top-0  →  top-1/2 (= 7px) + rotate-45
                    Linie 2: zentriert → opacity-0
                    Linie 3: top-3.25 (= 13px)  →  top-1/2 (= 7px) + rotate-[-45deg]
                    -translate-y-1/2 zentriert die 1px-Linie auf exakt 7px.
                */}
                <span aria-hidden="true" className="relative block w-5 h-3.5">
                    {/* Linie 1 — oben → / */}
                    <span className={cn(
                        "absolute left-0 w-full h-px bg-[#001F3F] origin-center transition-all duration-300",
                        isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                    )} />
                    {/* Linie 2 — Mitte → verschwindet */}
                    <span className={cn(
                        "absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-[#001F3F] transition-all duration-300",
                        isOpen ? "opacity-0 scale-x-0" : "opacity-100"
                    )} />
                    {/* Linie 3 — unten → \ */}
                    <span className={cn(
                        "absolute left-0 w-full h-px bg-[#001F3F] origin-center transition-all duration-300",
                        isOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-3.25"
                    )} />
                </span>
            </button>

            {/* ── Full-Screen Overlay ── */}
            <div
                id="mobile-nav"
                role="dialog"
                aria-modal="true"
                aria-label="Mobile Navigation"
                className={cn(
                    "fixed inset-0 bg-[#FFFFFF] z-50 flex flex-col transition-transform duration-500 ease-in-out",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                {/* ── Header: Logo only — kein redundantes X-Button ── */}
                <div className="flex items-center px-6 h-17.5 border-b border-[#000000]/8 shrink-0">
                    <Link
                        href="/"
                        onClick={close}
                        aria-label="Palmer Digital — Startseite"
                        className="group"
                    >
                        <Image
                            src="/media/palmer-digital-logo.png"
                            alt="Palmer Digital Architecture"
                            width={160}
                            height={40}
                            className="h-7 w-auto object-contain transition-opacity duration-200 group-hover:opacity-75"
                        />
                    </Link>
                </div>

                {/* ── Scrollable Nav ── */}
                <nav
                    className="flex-1 overflow-y-auto"
                    aria-label="Mobile Navigation Links"
                >
                    {links.map((link) => (
                        <div key={link.label} className="border-b border-[#000000]/8">
                            {link.subLinks ? (
                                /* ── Accordion Section ── */
                                <div>
                                    {/* Accordion Trigger */}
                                    <button
                                        onClick={() => toggleSection(link.label)}
                                        aria-expanded={expandedSections.has(link.label)}
                                        className="w-full flex items-center justify-between px-6 py-5 min-h-14 text-left"
                                    >
                                        <span className="text-[11px] font-black tracking-[0.4em] text-[#001F3F] uppercase">
                                            {link.label}
                                        </span>
                                        {/* Chevron — rotiert wenn expanded */}
                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#001F3F"
                                            strokeWidth="2.5"
                                            strokeLinecap="square"
                                            aria-hidden="true"
                                            className={cn(
                                                "shrink-0 transition-transform duration-300",
                                                expandedSections.has(link.label) && "rotate-180"
                                            )}
                                        >
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </button>

                                    {/* Accordion Content — max-height transition */}
                                    <div
                                        className={cn(
                                            "overflow-hidden transition-all duration-300 ease-in-out",
                                            expandedSections.has(link.label)
                                                ? "max-h-175 opacity-100"
                                                : "max-h-0 opacity-0"
                                        )}
                                    >
                                        <div className="flex flex-col divide-y divide-[#000000]/6 px-6 pb-3">
                                            {link.subLinks.map((sub) => (
                                                <Link
                                                    key={sub.href}
                                                    href={sub.href}
                                                    onClick={close}
                                                    className="group flex items-center justify-between py-4 min-h-11 gap-4"
                                                >
                                                    <div className="flex flex-col gap-0.5">
                                                        <span className="text-[15px] font-bold tracking-tight text-[#001F3F] group-hover:text-[#000000] uppercase transition-colors duration-200 leading-snug">
                                                            {sub.label}
                                                        </span>
                                                        <span className="text-[11px] text-[#000000]/55 leading-snug">
                                                            {sub.description}
                                                        </span>
                                                    </div>
                                                    <svg
                                                        width="12"
                                                        height="12"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        aria-hidden="true"
                                                        className="text-[#001F3F]/30 group-hover:text-[#001F3F] group-hover:translate-x-0.5 transition-all duration-200 shrink-0"
                                                    >
                                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                                    </svg>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                /* ── Direct Top-Level Link ── */
                                <Link
                                    href={link.href!}
                                    onClick={close}
                                    className="flex items-center px-6 py-5 text-[22px] font-black text-[#001F3F] hover:text-[#000000] uppercase tracking-tight transition-colors duration-200 min-h-14"
                                >
                                    {link.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                {/* ── Bottom CTA Bar ── */}
                <div className="px-6 py-5 border-t border-[#000000]/8 shrink-0">
                    <Link
                        href="/contact"
                        onClick={close}
                        className="flex items-center justify-center gap-2.5 bg-[#001F3F] text-[#FFFFFF] w-full py-4 text-[12px] font-bold tracking-[0.22em] uppercase hover:bg-[#000000] transition-colors duration-200 min-h-13"
                    >
                        PROJEKT STARTEN
                        <svg
                            width="11"
                            height="11"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            aria-hidden="true"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </>
    );
}

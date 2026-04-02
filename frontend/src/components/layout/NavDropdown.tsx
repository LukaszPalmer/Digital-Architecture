"use client";

// src/components/layout/NavDropdown.tsx
// Client-Insel — isoliert für Hover-State des Mega-Menüs.

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavLink } from "@/types/navigation";
import { cn } from "@/lib/utils";

const LIGHT_ON_HOVER_KEYWORDS = ["next", "node", "vercel", "railway"];

function needsInvertOnHover(label: string): boolean {
    const l = label.toLowerCase();
    return LIGHT_ON_HOVER_KEYWORDS.some((kw) => l.includes(kw));
}

export function NavDropdown({ link }: { link: NavLink }) {
    const [isOpen, setIsOpen] = useState(false);

    if (!link.subLinks) return null;

    const gridCols =
        link.subLinks.length <= 3
            ? "grid-cols-1"
            : link.subLinks.length <= 4
            ? "grid-cols-2"
            : "grid-cols-3";

    return (
        <div
            className="h-full flex items-center relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            {/* ── Trigger ── */}
            <button
                aria-expanded={isOpen}
                aria-haspopup="true"
                className="flex items-center gap-1.5 text-[#001F3F] text-[12px] font-bold tracking-[0.2em] uppercase h-full outline-none hover:text-[#000000] transition-colors duration-200"
            >
                {link.label}
                <svg
                    width="9"
                    height="9"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="square"
                    aria-hidden="true"
                    className={cn(
                        "transition-transform duration-250",
                        isOpen && "rotate-180"
                    )}
                >
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </button>

            {/* ── Mega Menu Panel ── */}
            {isOpen && (
                <div
                    role="menu"
                    aria-label={`${link.label} Navigation`}
                    className="animate-dropdown absolute top-17.5 md:top-22.5 left-1/2 -translate-x-1/2 w-[min(860px,92vw)] bg-[#FFFFFF] border border-[#000000]/10 shadow-[0_8px_48px_rgba(0,0,0,0.10)] z-100"
                >
                    <div className="grid grid-cols-[240px_1fr]">

                        {/* LEFT: Kontext-Panel — Navy */}
                        <div className="bg-[#001F3F] p-8 flex flex-col justify-between min-h-65">
                            <div>
                                <span className="block text-[9px] font-mono tracking-[0.45em] text-[#FFFFFF]/35 uppercase mb-3">
                                    Bereich
                                </span>
                                <h3 className="text-[22px] font-black text-[#FFFFFF] tracking-tight uppercase leading-none">
                                    {link.label}
                                </h3>
                                <p className="mt-5 text-[11.5px] text-[#FFFFFF]/50 leading-relaxed border-l-2 border-[#FFFFFF]/20 pl-3.5">
                                    Skalierbare digitale Architektur nach PDA-Elite-Standard.
                                </p>
                            </div>

                            <Link
                                href="/services"
                                role="menuitem"
                                className="mt-6 flex items-center gap-2 text-[10.5px] font-bold tracking-[0.22em] text-[#FFFFFF]/45 hover:text-[#FFFFFF] transition-colors duration-200 uppercase w-fit"
                            >
                                Alle Services
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        {/* RIGHT: Asset-Grid */}
                        <div className={`p-5 grid ${gridCols} gap-0.5 content-start`}>
                            {link.subLinks.map((sub) => (
                                <Link
                                    key={sub.href}
                                    href={sub.href}
                                    role="menuitem"
                                    className="group/item flex items-start gap-4 p-4 hover:bg-[#001F3F] transition-colors duration-250"
                                >
                                    {/* Icon Container — 0px border-radius */}
                                    <div className="w-10 h-10 shrink-0 bg-[#000000]/5 group-hover/item:bg-[#FFFFFF]/12 flex items-center justify-center p-2 transition-colors duration-250">
                                        {sub.iconPath && (
                                            <Image
                                                src={sub.iconPath}
                                                alt={`${sub.label} Icon`}
                                                width={26}
                                                height={26}
                                                className={cn(
                                                    "object-contain transition-all duration-250",
                                                    needsInvertOnHover(sub.label) &&
                                                        "group-hover/item:invert"
                                                )}
                                            />
                                        )}
                                    </div>

                                    {/* Label + Description */}
                                    <div className="min-w-0">
                                        <span className="block text-[11.5px] font-bold tracking-[0.06em] text-[#001F3F] group-hover/item:text-[#FFFFFF] uppercase transition-colors duration-250 leading-none mb-1">
                                            {sub.label}
                                        </span>
                                        <span className="block text-[10.5px] text-[#000000]/45 group-hover/item:text-[#FFFFFF]/60 leading-snug transition-colors duration-250">
                                            {sub.description}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}

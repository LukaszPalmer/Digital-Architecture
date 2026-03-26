"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NavLink } from "@/types/navigation";
import { cn } from "@/lib/utils";

export function MobileMenu({ links }: { links: NavLink[] }) {
    const [isOpen, setIsOpen] = useState(false);

    // Verhindert Scrollen bei offenem Menü
    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "unset";
    }, [isOpen]);

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex flex-col gap-1.5 p-2 z-[60] relative"
                aria-label="Menü öffnen"
            >
                <span
                    className={cn(
                        "w-6 h-[2px] bg-[#001F3F] transition-all",
                        isOpen && "rotate-45 translate-y-2"
                    )}
                />
                <span
                    className={cn(
                        "w-6 h-[2px] bg-[#001F3F] transition-all",
                        isOpen && "opacity-0"
                    )}
                />
                <span
                    className={cn(
                        "w-6 h-[2px] bg-[#001F3F] transition-all",
                        isOpen && "-rotate-45 -translate-y-2"
                    )}
                />
            </button>

            <div
                className={cn(
                    "fixed inset-0 bg-[#FFFFFF] z-50 flex flex-col pt-32 px-6 transition-transform duration-500 ease-in-out",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col gap-y-8">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-[#001F3F] text-[32px] font-bold tracking-tighter border-b border-[#001F3F]/10 pb-4"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="bg-[#001F3F] text-[#FFFFFF] w-full py-5 text-center font-bold tracking-[0.1em] mt-4"
                    >
                        PROJEKT STARTEN
                    </Link>
                </div>
            </div>
        </>
    );
}

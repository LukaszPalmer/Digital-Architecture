"use client";

/**
 * LogoLink — Client Insel rein für das Header-Logo.
 *
 * Verantwortung:
 *   • Klick auf das Logo führt IMMER auf "/" und scrollt nach ganz oben.
 *   • Befindet sich der User bereits auf "/", verhindert Default-Navigation
 *     (Next.js Link würde nichts tun) und scrollt smooth zurück nach oben.
 *   • Respektiert prefers-reduced-motion → instant statt smooth.
 *
 * Keine Style-Logik hier — Markup/Klassen kommen vom aufrufenden Server-Component
 * (Navbar), damit RSC-First-Dogma erhalten bleibt.
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, type MouseEvent, type ReactNode } from "react";

interface LogoLinkProps {
    children: ReactNode;
    className?: string;
    ariaLabel?: string;
}

export function LogoLink({
    children,
    className,
    ariaLabel = "Palmer Digital — Startseite",
}: LogoLinkProps) {
    const pathname = usePathname();

    const handleClick = useCallback(
        (event: MouseEvent<HTMLAnchorElement>) => {
            // Modifier-Keys (Cmd/Ctrl/Shift/neuer Tab) → Browser-Default
            if (
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey ||
                event.button !== 0
            ) {
                return;
            }

            // Bereits auf der Startseite? → Default verhindern + smooth nach oben
            if (pathname === "/") {
                event.preventDefault();
                const reduceMotion = window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches;
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: reduceMotion ? "auto" : "smooth",
                });
            }
            // Sonst: Next.js Link übernimmt + scrollt von sich aus nach oben.
        },
        [pathname]
    );

    return (
        <Link
            href="/"
            onClick={handleClick}
            className={className}
            aria-label={ariaLabel}
        >
            {children}
        </Link>
    );
}

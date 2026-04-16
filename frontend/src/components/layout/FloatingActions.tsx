"use client";

/**
 * FloatingActions — schwebendes Aktions-Dock unten rechts.
 *
 * Enthält zwei Module:
 *   1) Envelope  → /contact (immer sichtbar)
 *   2) ScrollTop → smooth nach oben (sichtbar ab scrollY > THRESHOLD)
 *
 * Design-Dogma:
 *   • Ausschließlich #001F3F / #FFFFFF / #000000.
 *   • 0px border-radius — brutalistisches Blueprint-Quadrat.
 *   • Subtile Scroll-Progress-Indikation auf dem ScrollTop-Button.
 *
 * Performance:
 *   • Passive Scroll-Listener mit rAF-Coalescing → kein Layout-Thrash.
 *   • Visibility wird per CSS (opacity/translate) gesteuert, nicht per
 *     conditional Mount → kein Layout-Reflow beim Ein-/Ausblenden.
 *
 * A11y:
 *   • Beide Buttons mit aria-label + Tooltip.
 *   • Respektiert prefers-reduced-motion (kein Smooth-Scroll).
 *   • Auf /contact wird das Envelope-Modul ausgeblendet, da redundant.
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const SCROLL_REVEAL_THRESHOLD = 360; // px nach scrollY → ScrollTop sichtbar

export function FloatingActions() {
    const pathname = usePathname();
    const [revealed, setRevealed] = useState(false);
    const [progress, setProgress] = useState(0); // 0..1
    const rafRef = useRef<number | null>(null);

    // Scroll-Tracking — gedrosselt via rAF
    useEffect(() => {
        const update = () => {
            const scrollTop =
                window.scrollY || document.documentElement.scrollTop;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            const ratio = docHeight > 0 ? scrollTop / docHeight : 0;
            setProgress(Math.min(Math.max(ratio, 0), 1));
            setRevealed(scrollTop > SCROLL_REVEAL_THRESHOLD);
            rafRef.current = null;
        };

        const onScroll = () => {
            if (rafRef.current !== null) return;
            rafRef.current = requestAnimationFrame(update);
        };

        // Initial sync (z.B. bei Hash-Links / Reload mitten auf Seite)
        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    const handleScrollTop = useCallback(() => {
        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: reduceMotion ? "auto" : "smooth",
        });
    }, []);

    // /admin wird bereits im SiteLayout ausgeblendet — hier nur zusätzlich
    // /contact: Envelope-Button wird ausgeblendet (Self-Link wäre verwirrend).
    const isContactPage = pathname === "/contact";

    return (
        <div
            aria-label="Schnellzugriff"
            className={cn(
                "fixed z-40 right-4 md:right-6 bottom-4 md:bottom-6",
                "flex flex-col gap-2.5",
                // Safe-Area für Geräte mit Notch / Home-Indicator
                "pb-[env(safe-area-inset-bottom)] pr-[env(safe-area-inset-right)]"
            )}
        >
            {/* ── ENVELOPE → /contact ── */}
            {!isContactPage && (
                <FloatingButton
                    as="link"
                    href="/contact"
                    label="Direkt zum Kontaktformular"
                    tooltip="Kontakt"
                >
                    <EnvelopeIcon />
                </FloatingButton>
            )}

            {/* ── SCROLL TOP ── */}
            <FloatingButton
                as="button"
                onClick={handleScrollTop}
                label="Zurück zum Seitenanfang scrollen"
                tooltip="Nach oben"
                hidden={!revealed}
                progress={progress}
            >
                <ArrowUpIcon />
            </FloatingButton>
        </div>
    );
}

/* ────────────────────────────────────────────────────────────
 * Sub-Component: Single FAB-Button
 * Render-Variante via `as` (link | button) — vermeidet Type-Tricks.
 * ──────────────────────────────────────────────────────────── */

type BaseProps = {
    label: string;
    tooltip: string;
    children: React.ReactNode;
    hidden?: boolean;
    progress?: number;
};

type ButtonVariant = BaseProps & {
    as: "button";
    onClick: () => void;
};

type LinkVariant = BaseProps & {
    as: "link";
    href: string;
};

function FloatingButton(props: ButtonVariant | LinkVariant) {
    const { label, tooltip, children, hidden, progress } = props;

    const visualClasses = cn(
        // Layout
        "group relative inline-flex items-center justify-center",
        "h-12 w-12 md:h-14 md:w-14",
        "shrink-0 select-none",
        // Brand: Navy Solid
        "bg-[#001F3F] text-[#FFFFFF]",
        "border border-[#001F3F]",
        // 0px radius — brutalist blueprint
        "rounded-none",
        // Shadow
        "shadow-[0_8px_24px_rgba(0,31,63,0.18)]",
        // Hover/Focus → Inverse
        "transition-[background-color,color,transform,box-shadow,opacity] duration-200 ease-out",
        "hover:bg-[#FFFFFF] hover:text-[#001F3F]",
        "hover:shadow-[0_10px_28px_rgba(0,31,63,0.28)]",
        "active:translate-y-[1px]",
        // Focus ring — eckig, hochkontrastig
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "focus-visible:ring-[#001F3F] focus-visible:ring-offset-[#FFFFFF]",
        // Visibility-Toggle ohne Reflow
        "transform-gpu",
        hidden
            ? "opacity-0 translate-y-2 pointer-events-none"
            : "opacity-100 translate-y-0"
    );

    const inner = (
        <>
            {/* Blueprint-Ecken — animieren beim Hover */}
            <CornerTicks />

            {/* Optionaler Scroll-Progress-Balken (nur ScrollTop) */}
            {typeof progress === "number" && (
                <span
                    aria-hidden="true"
                    className="absolute left-0 bottom-0 h-[2px] bg-[#FFFFFF] group-hover:bg-[#001F3F] transition-colors duration-200"
                    style={{ width: `${Math.round(progress * 100)}%` }}
                />
            )}

            {/* Icon */}
            <span className="relative z-10 flex items-center justify-center">
                {children}
            </span>

            {/* Tooltip */}
            <span
                aria-hidden="true"
                className={cn(
                    "pointer-events-none absolute right-[calc(100%+10px)] top-1/2 -translate-y-1/2",
                    "whitespace-nowrap",
                    "bg-[#001F3F] text-[#FFFFFF]",
                    "text-[10px] font-mono font-bold tracking-[0.2em] uppercase",
                    "px-2.5 py-1.5",
                    "border border-[#001F3F]",
                    "opacity-0 translate-x-1",
                    "group-hover:opacity-100 group-hover:translate-x-0",
                    "group-focus-visible:opacity-100 group-focus-visible:translate-x-0",
                    "transition-[opacity,transform] duration-200 ease-out"
                )}
            >
                {tooltip}
            </span>
        </>
    );

    if (props.as === "link") {
        return (
            <Link
                href={props.href}
                aria-label={label}
                className={visualClasses}
            >
                {inner}
            </Link>
        );
    }

    return (
        <button
            type="button"
            onClick={props.onClick}
            aria-label={label}
            aria-hidden={hidden ? "true" : undefined}
            tabIndex={hidden ? -1 : 0}
            className={visualClasses}
        >
            {inner}
        </button>
    );
}

/* ────────────────────────────────────────────────────────────
 * Decorative: Blueprint-Ecken (4 Ticks)
 * Erscheinen beim Hover/Focus → erinnern an technische Zeichnung.
 * ──────────────────────────────────────────────────────────── */
function CornerTicks() {
    const base =
        "absolute h-2 w-2 border-[#FFFFFF] group-hover:border-[#001F3F] transition-colors duration-200";
    return (
        <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-1 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200"
        >
            <span className={cn(base, "left-0 top-0 border-l border-t")} />
            <span className={cn(base, "right-0 top-0 border-r border-t")} />
            <span className={cn(base, "left-0 bottom-0 border-l border-b")} />
            <span className={cn(base, "right-0 bottom-0 border-r border-b")} />
        </span>
    );
}

/* ────────────────────────────────────────────────────────────
 * Icons — inline SVG, currentColor → erbt Text-Farbe
 * ──────────────────────────────────────────────────────────── */
function ArrowUpIcon() {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="square"
            strokeLinejoin="miter"
            aria-hidden="true"
        >
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
        </svg>
    );
}

function EnvelopeIcon() {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="miter"
            aria-hidden="true"
        >
            <rect x="3" y="5" width="18" height="14" />
            <path d="M3 6l9 7 9-7" />
        </svg>
    );
}

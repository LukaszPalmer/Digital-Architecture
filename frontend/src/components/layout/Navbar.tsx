// src/components/layout/Navbar.tsx
// Server Component — keine Client-Logik hier.
// Scroll-State wird in NavScrollShell (Client-Insel) isoliert.

import Link from "next/link";
import { MobileMenu } from "./MobileMenu";
import { NavDropdown } from "./NavDropdown";
import { NavScrollShell } from "./NavScrollShell";
import SearchInput from "@/components/ui/SearchInput";
import StatusBadge from "@/components/ui/StatusBadge";
import { NAV_LINKS } from "@/lib/data/navigation";

export default function Navbar() {
    return (
        <NavScrollShell>
            <div className="max-w-360 mx-auto h-full flex items-center justify-between px-4 md:px-8 lg:px-12">

                {/* ── LOGO ── */}
                <Link
                    href="/"
                    className="group shrink-0"
                    aria-label="Palmer Digital — Startseite"
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/media/logo.png"
                        alt="Palmer Digital"
                        className="h-8 lg:h-10 xl:h-12 w-auto transition-opacity duration-200 group-hover:opacity-75"
                    />
                </Link>

                {/* ── DESKTOP NAV ── */}
                <div className="hidden lg:flex items-center h-full gap-x-6 xl:gap-x-10">

                    {/* Nav Links + Dropdowns */}
                    <div className="flex items-center gap-x-6 xl:gap-x-10 h-full pr-6 xl:pr-10 border-r border-[#000000]/8">
                        {NAV_LINKS.map((link) =>
                            link.subLinks ? (
                                <NavDropdown key={link.label} link={link} />
                            ) : (
                                <Link
                                    key={link.label}
                                    href={link.href!}
                                    className="text-[#001F3F] text-[12px] font-bold tracking-[0.2em] hover:text-[#000000] transition-colors duration-200 uppercase h-full flex items-center"
                                >
                                    {link.label}
                                </Link>
                            )
                        )}
                    </div>

                    {/* Status Badge — nur auf XL sichtbar */}
                    <div className="hidden xl:flex items-center">
                        <StatusBadge status="PDA_STATUS" availability="AVAILABLE Q2" />
                    </div>

                    {/* Search + CTA */}
                    <div className="flex items-center gap-x-4 xl:gap-x-6">
                        <SearchInput />
                        <Link
                            href="/#contact"
                            className="flex items-center gap-2 bg-[#001F3F] text-[#FFFFFF] px-6 py-2.5 text-[11.5px] font-bold tracking-[0.2em] uppercase hover:bg-[#000000] transition-colors duration-200"
                        >
                            Anfrage
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* ── MOBILE / TABLET RIGHT ── */}
                <div className="lg:hidden flex items-center gap-3">
                    <div className="hidden md:block">
                        <StatusBadge status="CAPACITY" availability="Q2_READY" className="scale-[0.8] origin-right" />
                    </div>
                    <SearchInput />
                    <MobileMenu links={NAV_LINKS} />
                </div>

            </div>
        </NavScrollShell>
    );
}

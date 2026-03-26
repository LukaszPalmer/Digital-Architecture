import Link from "next/link";
import { NavLink } from "@/types/navigation";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

const NAV_LINKS: NavLink[] = [
    { label: "INFRASTRUKTUR", href: "/infrastructure" },
    { label: "SERVICES", href: "/engineering" },
    { label: "CARRER", href: "/portfolio" },
    { label: "BLOG", href: "/strategy" },
];

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#FFFFFF] border-b border-[#000000] h-[70px] md:h-[90px]">
            <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-4 md:px-8 lg:px-12">
                {/* LOGO: PALMER DIGITAL ARCHITECTURE */}
                <Link
                    href="/"
                    className="text-[#001F3F] font-bold text-[18px] md:text-[22px] tracking-tighter leading-none"
                >
                    PALMER
                    <span className="block text-[10px] tracking-[0.2em] font-light">
                        DIGITAL ARCHITECTURE
                    </span>
                </Link>

                {/* DESKTOP NAVIGATION */}
                <div className="hidden lg:flex items-center gap-x-12">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-[#001F3F] text-[13px] font-medium tracking-[0.1em] hover:text-[#000000] transition-colors duration-300 relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#001F3F] transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="bg-[#001F3F] text-[#FFFFFF] px-8 py-3 text-[13px] font-bold tracking-[0.1em] hover:bg-[#000000] transition-all duration-300"
                    >
                        JETZT ANFRAGEN
                    </Link>
                </div>

                {/* MOBILE INTERACTION ISLAND */}
                <div className="lg:hidden">
                    <MobileMenu links={NAV_LINKS} />
                </div>
            </div>
        </nav>
    );
}

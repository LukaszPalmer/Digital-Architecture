"use client";

// src/components/sections/BlogFilterBar.tsx
// Client-Insel — URL-basiertes Category-Filter für den Blog.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import { useRouter, useSearchParams } from "next/navigation";

const CATEGORIES = [
    "ALL",
    "ARCHITECTURE",
    "DATABASE",
    "FINTECH",
    "DESIGN",
    "INFRASTRUCTURE",
    "ENGINEERING",
];

export default function BlogFilterBar() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const active = searchParams.get("category")?.toUpperCase() ?? "ALL";

    function handleFilter(category: string) {
        if (category === "ALL") {
            router.push("/blog");
        } else {
            router.push(`/blog?category=${category}`);
        }
    }

    return (
        <div
            className="flex flex-wrap border-b border-[#000000]"
            role="tablist"
            aria-label="Blog nach Kategorie filtern"
        >
            {CATEGORIES.map((cat) => {
                const isActive = cat === active;
                return (
                    <button
                        key={cat}
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => handleFilter(cat)}
                        className={[
                            "px-5 py-3.5 text-[10px] font-mono font-black tracking-[0.35em] uppercase transition-colors duration-200 border-r border-[#000000] last:border-r-0",
                            isActive
                                ? "bg-[#001F3F] text-[#FFFFFF]"
                                : "bg-transparent text-[#000000]/55 hover:bg-[#000000]/5 hover:text-[#001F3F]",
                        ].join(" ")}
                    >
                        {cat}
                    </button>
                );
            })}
        </div>
    );
}

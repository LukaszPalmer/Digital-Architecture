// src/app/blog/page.tsx
// Server Component — RSC-First, 0 TBT.
// Engineering Ledger — Blog-Übersicht mit URL-basiertem Category-Filter.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { getStrapiBlogPosts } from "@/lib/strapi";
import { getBlogPostsByCategory, blogPosts as staticPosts } from "@/lib/data/blog";
import BlogFilterBar from "@/components/sections/BlogFilterBar";
import { BlogPost } from "@/types/blog";

export const metadata: Metadata = {
    title: "Engineering Ledger | Blog",
    description:
        "Technische Einblicke, Architektur-Briefings und Engineering-Perspektiven von Palmer Digital.",
};

// Next.js 15 Dogma: searchParams als Promise
export default async function BlogPage({
    searchParams,
}: {
    searchParams: Promise<{ category?: string }>;
}) {
    const { category } = await searchParams;
    const strapiPosts = await getStrapiBlogPosts();

    // Strapi-Posts mappen und mit statischen Posts zusammenführen.
    // Strapi hat Priorität: statische Posts mit gleichem Slug werden überschrieben.
    const mappedStrapi: BlogPost[] = strapiPosts.map((p: Record<string, unknown>) => ({
        id: String(p.id),
        slug: p.slug as string,
        logNumber: (p.logNumber as string) ?? "",
        title: p.title as string,
        category: p.category as string,
        date: p.date as string,
        readTime: (p.readTime as string) ?? "",
        excerpt: p.excerpt as string,
        author: { name: (p.authorName as string) ?? "Palmer Digital", role: (p.authorRole as string) ?? "" },
        tags: (p.tags as string[]) ?? [],
        relatedSlugs: (p.relatedSlugs as string[]) ?? [],
        content: [],
    }));
    const strapiSlugs = new Set(mappedStrapi.map(p => p.slug));
    const allPosts: BlogPost[] = [
        ...mappedStrapi,
        ...staticPosts.filter(p => !strapiSlugs.has(p.slug)),
    ];

    const activeCategory = category?.toUpperCase() ?? "ALL";
    const posts = activeCategory === "ALL"
        ? allPosts
        : allPosts.filter(p => p.category.toUpperCase() === activeCategory);

    return (
        <div className="bg-[#FFFFFF] min-h-screen">

            {/* ── HERO ── */}
            <section className="border-b border-[#000000] pt-16 pb-16 md:pt-24 md:pb-20">
                <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-end gap-12 lg:gap-24">

                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px w-10 bg-[#001F3F]" />
                                <div className="bg-[#001F3F] px-3 py-1">
                                    <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-[#FFFFFF] uppercase">
                                        Technical Insights
                                    </span>
                                </div>
                            </div>
                            <h1 className="text-[clamp(3rem,9vw,8rem)] font-black tracking-tighter leading-[0.88] uppercase text-[#000000]">
                                Engineering
                                <br />
                                <span className="italic font-normal text-[#001F3F]">Ledger</span>
                            </h1>
                        </div>

                        <div className="flex flex-col gap-3 pb-2">
                            <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-[#000000]/40 uppercase">
                                Archiv
                            </span>
                            <div className="bg-[#001F3F] px-5 py-2.5 inline-block">
                                <span className="text-[13px] font-black font-mono tracking-widest uppercase text-[#FFFFFF]">
                                    {allPosts.length} Logs publiziert
                                </span>
                            </div>
                        </div>

                    </div>

                    {/* Subline */}
                    <div className="mt-12 pt-10 border-t border-[#000000]/10 max-w-2xl">
                        <p className="text-[16px] md:text-[18px] leading-relaxed text-[#000000]/60 border-l-2 border-[#001F3F] pl-6">
                            Architektur-Briefings, technische Deep-Dives und Engineering-Perspektiven
                            aus der Praxis digitaler Hochleistungssysteme.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── FILTER BAR ── */}
            <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12">
                <Suspense
                    fallback={
                        <div className="h-12.5 border-b border-[#000000] bg-[#000000]/5 animate-pulse" />
                    }
                >
                    <BlogFilterBar />
                </Suspense>
            </div>

            {/* ── POSTS GRID ── */}
            <section className="max-w-360 mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-24">

                {/* Count Label */}
                <div className="flex items-center gap-4 mb-12">
                    <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-[#000000]/35 uppercase">
                        {posts.length === allPosts.length
                            ? `Alle ${posts.length} Logs`
                            : `${posts.length} Log${posts.length !== 1 ? "s" : ""} in ${activeCategory}`}
                    </span>
                    <div className="flex-1 h-px bg-[#000000]/10" />
                </div>

                {posts.length === 0 ? (
                    <div className="border border-[#000000]/20 p-16 text-center">
                        <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-[#000000]/35 uppercase">
                            Keine Logs in dieser Kategorie
                        </span>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[#000000]">
                        {posts.map((post, index) => (
                            <BlogCard key={post.id} post={post} index={index} />
                        ))}
                    </div>
                )}
            </section>

            {/* ── BOTTOM CTA ── */}
            <section className="border-t border-[#000000] bg-[#001F3F]">
                <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-24">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                        <div>
                            <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#FFFFFF]/40 uppercase block mb-4">
                                [ Projektanfrage ]
                            </span>
                            <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-tighter leading-[0.92] uppercase text-[#FFFFFF]">
                                Genug gelesen. <br />
                                <span className="italic font-normal text-[#FFFFFF]/55">
                                    Zeit zu bauen.
                                </span>
                            </h2>
                        </div>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-4 bg-[#FFFFFF] text-[#001F3F] px-8 py-4 text-[11px] font-black tracking-[0.3em] uppercase hover:bg-[#FFFFFF]/90 transition-colors shrink-0"
                        >
                            Projekt starten
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}

// ── BLOG CARD (Server Component) ──
function BlogCard({ post, index }: { post: BlogPost; index: number }) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group relative flex flex-col justify-between p-8 md:p-10 min-h-105 border-r border-b border-[#000000] transition-all duration-500 overflow-hidden"
        >
            {/* HOVER REVEAL: Rising Navy Block */}
            <div className="absolute bottom-0 left-0 w-full h-0 bg-[#001F3F] group-hover:h-full transition-all duration-500 ease-in-out z-0" />

            {/* GHOST INDEX */}
            <span
                className="absolute -right-3 -bottom-3 text-[110px] font-bold text-[#000000]/3 group-hover:text-[#FFFFFF]/5 transition-all duration-500 z-10 select-none leading-none"
                aria-hidden="true"
            >
                {String(index + 1).padStart(2, "0")}
            </span>

            {/* CONTENT TOP */}
            <div className="relative z-20">
                <div className="flex justify-between items-start mb-10">
                    <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-mono font-black text-[#001F3F] group-hover:text-[#FFFFFF] tracking-[0.3em] transition-colors">
                            {post.logNumber}
                        </span>
                        <span className="text-[9px] font-mono text-[#000000]/40 group-hover:text-[#FFFFFF]/50 tracking-widest uppercase transition-colors">
                            {post.category}
                        </span>
                    </div>
                    <div className="w-8 h-8 border border-[#000000] group-hover:border-[#FFFFFF] flex items-center justify-center transition-colors">
                        <div className="w-1.5 h-1.5 bg-[#001F3F] group-hover:bg-[#FFFFFF] animate-pulse" />
                    </div>
                </div>

                <h2 className="text-[20px] lg:text-[24px] font-bold text-[#000000] group-hover:text-[#FFFFFF] tracking-tighter leading-[1.1] uppercase transition-colors mb-4">
                    {post.title}
                </h2>

                <p className="text-[13px] text-[#000000]/55 group-hover:text-[#FFFFFF]/60 leading-relaxed transition-colors line-clamp-2">
                    {post.excerpt}
                </p>
            </div>

            {/* CONTENT BOTTOM */}
            <div className="relative z-20 pt-8 border-t border-[#000000]/10 group-hover:border-[#FFFFFF]/20 flex justify-between items-end transition-colors">
                <div className="flex flex-col gap-0.5">
                    <span className="text-[12px] font-bold text-[#000000] group-hover:text-[#FFFFFF] transition-colors">
                        {post.date}
                    </span>
                    <span className="text-[10px] font-mono text-[#001F3F] group-hover:text-[#FFFFFF]/70 tracking-[0.2em] uppercase transition-colors">
                        {post.readTime}
                    </span>
                </div>
                <span className="text-[11px] font-bold text-[#001F3F] group-hover:text-[#FFFFFF] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 uppercase tracking-widest">
                    Read Log _
                </span>
            </div>
        </Link>
    );
}

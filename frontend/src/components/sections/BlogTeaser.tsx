// src/components/sections/BlogTeaser.tsx
// Server Component — RSC-First, 0 TBT.
// Zeigt die 3 neuesten Blog-Posts als Teaser auf der Homepage.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import Link from "next/link";
import { blogPosts } from "@/lib/data/blog";
import { getStrapiBlogPosts } from "@/lib/strapi";
import { BlogPost } from "@/types/blog";

export default async function BlogTeaser() {
    const strapiPosts = await getStrapiBlogPosts();
    const PREVIEW_POSTS: BlogPost[] = strapiPosts.length > 0
        ? strapiPosts.slice(0, 3).map((p: Record<string, unknown>) => ({
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
        }))
        : blogPosts.slice(0, 3);
    return (
        <section className="bg-[#FFFFFF] py-20 md:py-32 lg:py-44 border-t border-[#000000] overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">

                {/* HEADER */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-[#001F3F] text-[12px] font-bold tracking-[0.5em] uppercase block mb-6">
                            [ Technical Insights ]
                        </span>
                        <h2 className="text-[#000000] text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tighter uppercase leading-[0.85] italic">
                            Engineering <br /> Ledger
                        </h2>
                    </div>
                    <Link
                        href="/blog"
                        className="group flex items-center gap-4 text-[13px] font-bold tracking-[0.2em] uppercase transition-all pb-1 border-b-2 border-[#001F3F]"
                    >
                        <span>Archive öffnen</span>
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            className="group-hover:translate-x-1 transition-transform"
                            aria-hidden="true"
                        >
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                        </svg>
                    </Link>
                </div>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[#000000]">
                    {PREVIEW_POSTS.map((post: BlogPost, index: number) => (
                        <BlogTeaserCard key={post.id} post={post} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
}

function BlogTeaserCard({ post, index }: { post: BlogPost; index: number }) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className="group relative flex flex-col justify-between p-8 md:p-12 min-h-[450px] border-r border-b border-[#000000] transition-all duration-500 overflow-hidden"
        >
            {/* HOVER REVEAL LAYER */}
            <div className="absolute bottom-0 left-0 w-full h-0 bg-[#001F3F] group-hover:h-full transition-all duration-500 ease-in-out z-0" />

            {/* GHOST INDEX */}
            <span
                className="absolute -right-4 -bottom-4 text-[120px] font-bold text-[#000000]/[0.03] group-hover:text-[#FFFFFF]/5 transition-all duration-500 z-10 select-none"
                aria-hidden="true"
            >
                0{index + 1}
            </span>

            {/* CONTENT TOP */}
            <div className="relative z-20">
                <div className="flex justify-between items-start mb-12">
                    <div className="flex flex-col">
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

                <h3 className="text-[24px] lg:text-[30px] font-bold text-[#000000] group-hover:text-[#FFFFFF] tracking-tighter leading-[1.1] uppercase transition-colors">
                    {post.title}
                </h3>
            </div>

            {/* CONTENT BOTTOM */}
            <div className="relative z-20 pt-12 border-t border-[#000000]/10 group-hover:border-[#FFFFFF]/20 flex justify-between items-end">
                <div className="flex flex-col">
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

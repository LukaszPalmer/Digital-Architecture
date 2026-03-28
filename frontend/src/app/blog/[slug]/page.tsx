// src/app/blog/[slug]/page.tsx
// Server Component — RSC-First, 0 TBT.
// Blog-Artikel-Detail mit vollständigem Content-Rendering.
// Design-Dogma: AUSSCHLIESSLICH #001F3F / #FFFFFF / #000000, 0px border-radius.

import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { blogPosts, getBlogPost, getRelatedPosts } from "@/lib/data/blog";
import { ContentBlock, BlogPost } from "@/types/blog";

// 1. STATIC GENERATION
export async function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

// 2. DYNAMIC METADATA — Next.js 15 Dogma: params als Promise
export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) {
        return { title: "Log Not Found | Palmer Digital Architecture" };
    }

    return {
        title: `${post.logNumber}: ${post.title}`,
        description: post.excerpt,
    };
}

// 3. PAGE — Next.js 15 Dogma: params als Promise
export default async function BlogArticlePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) notFound();

    const related = getRelatedPosts(post.relatedSlugs);

    return (
        <article className="bg-[#FFFFFF] min-h-screen">

            {/* ── ARTIKEL HERO ── */}
            <ArticleHero post={post} />

            {/* ── ARTIKEL CONTENT ── */}
            <section className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-0 border-b border-[#000000]">

                    {/* CONTENT COLUMN */}
                    <div className="border-r border-[#000000] py-16 md:py-24 pr-0 lg:pr-16">
                        <ContentRenderer blocks={post.content} />
                    </div>

                    {/* SIDEBAR */}
                    <ArticleSidebar post={post} />
                </div>
            </section>

            {/* ── RELATED LOGS ── */}
            {related.length > 0 && (
                <RelatedLogs posts={related} />
            )}

            {/* ── BACK NAVIGATION ── */}
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-12 md:py-16 border-t border-[#000000]/10">
                <Link
                    href="/blog"
                    className="group inline-flex items-center gap-3 text-[11px] font-mono font-bold tracking-[0.35em] uppercase text-[#000000]/55 hover:text-[#001F3F] transition-colors"
                >
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="group-hover:-translate-x-1 transition-transform"
                        aria-hidden="true"
                    >
                        <path d="M19 12H5M5 12L12 5M5 12L12 19" />
                    </svg>
                    Zurück zum Engineering Ledger
                </Link>
            </div>

        </article>
    );
}

// ── ARTICLE HERO ──
function ArticleHero({ post }: { post: BlogPost }) {
    return (
        <header className="border-b border-[#000000] pt-12 pb-16 md:pt-20 md:pb-24">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">

                {/* Eyebrow */}
                <div className="flex items-center gap-4 mb-10">
                    <div className="h-px w-10 bg-[#001F3F]" />
                    <div className="bg-[#001F3F] px-3 py-1">
                        <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-[#FFFFFF] uppercase">
                            {post.logNumber}
                        </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-[#000000]/40 uppercase">
                        {post.category}
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-[clamp(2rem,6vw,5.5rem)] font-black tracking-tighter leading-[0.9] uppercase text-[#000000] max-w-5xl mb-12">
                    {post.title}
                </h1>

                {/* Meta row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-[#000000]/10 pt-10">
                    <p className="text-[17px] md:text-[19px] leading-relaxed text-[#000000]/60 border-l-2 border-[#001F3F] pl-6">
                        {post.excerpt}
                    </p>

                    <div className="flex flex-col md:items-end justify-center gap-4">
                        <div className="flex items-center gap-8">
                            <div className="flex flex-col gap-1">
                                <span className="text-[9px] font-mono tracking-[0.35em] text-[#000000]/35 uppercase">
                                    Publiziert
                                </span>
                                <span className="text-[13px] font-bold text-[#000000]">
                                    {post.date}
                                </span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-[9px] font-mono tracking-[0.35em] text-[#000000]/35 uppercase">
                                    Lesezeit
                                </span>
                                <span className="text-[13px] font-bold text-[#000000]">
                                    {post.readTime}
                                </span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-[9px] font-mono tracking-[0.35em] text-[#000000]/35 uppercase">
                                    Autor
                                </span>
                                <span className="text-[13px] font-bold text-[#000000]">
                                    {post.author.name}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    );
}

// ── ARTICLE SIDEBAR ──
function ArticleSidebar({ post }: { post: BlogPost }) {
    return (
        <aside className="py-16 md:py-24 pl-0 lg:pl-10">
            <div className="sticky top-32 flex flex-col gap-10">

                {/* Category badge */}
                <div>
                    <div className="bg-[#001F3F] inline-block px-2.5 py-1 mb-4">
                        <span className="text-[9px] font-mono font-black tracking-[0.4em] text-[#FFFFFF] uppercase">
                            Kategorie
                        </span>
                    </div>
                    <p className="text-[13px] font-bold uppercase tracking-wide text-[#000000]">
                        {post.category}
                    </p>
                </div>

                {/* Tags */}
                <div>
                    <div className="bg-[#001F3F] inline-block px-2.5 py-1 mb-4">
                        <span className="text-[9px] font-mono font-black tracking-[0.4em] text-[#FFFFFF] uppercase">
                            Tags
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-[#000000]/55 border border-[#000000]/20 px-2.5 py-1"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Author */}
                <div>
                    <div className="bg-[#001F3F] inline-block px-2.5 py-1 mb-4">
                        <span className="text-[9px] font-mono font-black tracking-[0.4em] text-[#FFFFFF] uppercase">
                            Autor
                        </span>
                    </div>
                    <p className="text-[13px] font-bold text-[#000000] mb-0.5">
                        {post.author.name}
                    </p>
                    <p className="text-[11px] font-mono text-[#000000]/45 tracking-[0.15em] uppercase">
                        {post.author.role}
                    </p>
                </div>

                {/* CTA */}
                <div className="border-t border-[#000000]/10 pt-8">
                    <p className="text-[12px] text-[#000000]/55 leading-relaxed mb-5">
                        Bereit, diese Technologien in Ihrem Projekt einzusetzen?
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 bg-[#001F3F] text-[#FFFFFF] px-5 py-3 text-[10px] font-black tracking-[0.3em] uppercase hover:bg-[#000000] transition-colors w-full justify-center"
                    >
                        Projekt starten
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                        </svg>
                    </Link>
                </div>

            </div>
        </aside>
    );
}

// ── CONTENT RENDERER ──
function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
    return (
        <div className="flex flex-col gap-8">
            {blocks.map((block, i) => {
                switch (block.type) {
                    case "paragraph":
                        return (
                            <p
                                key={i}
                                className="text-[16px] md:text-[17px] leading-[1.8] text-[#000000]/75 font-normal"
                            >
                                {block.text}
                            </p>
                        );

                    case "heading":
                        if (block.level === 2) {
                            return (
                                <h2
                                    key={i}
                                    className="text-[22px] md:text-[28px] font-black tracking-tighter leading-[1.1] uppercase text-[#000000] mt-6 pt-8 border-t border-[#000000]/10 first:border-t-0 first:pt-0 first:mt-0"
                                >
                                    {block.text}
                                </h2>
                            );
                        }
                        return (
                            <h3
                                key={i}
                                className="text-[18px] md:text-[22px] font-bold tracking-tighter leading-[1.15] uppercase text-[#000000] mt-4"
                            >
                                {block.text}
                            </h3>
                        );

                    case "code":
                        return (
                            <div key={i} className="flex flex-col gap-0">
                                {block.caption && (
                                    <div className="bg-[#001F3F] px-4 py-2">
                                        <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#FFFFFF]/70 uppercase">
                                            {block.caption}
                                        </span>
                                    </div>
                                )}
                                <div className="bg-[#000000] overflow-x-auto">
                                    <pre className="p-6 md:p-8 overflow-x-auto">
                                        <code className="text-[12px] md:text-[13px] font-mono leading-[1.75] text-[#FFFFFF]/85 whitespace-pre">
                                            {block.code}
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        );

                    case "callout":
                        const calloutStyles = {
                            info: {
                                border: "border-l-4 border-[#001F3F]",
                                bg: "bg-[#001F3F]/5",
                                label: "INFO",
                                labelColor: "text-[#001F3F]",
                            },
                            warning: {
                                border: "border-l-4 border-[#000000]",
                                bg: "bg-[#000000]/5",
                                label: "ACHTUNG",
                                labelColor: "text-[#000000]",
                            },
                            tip: {
                                border: "border-l-4 border-[#001F3F]",
                                bg: "bg-[#001F3F]/[0.03]",
                                label: "TIP",
                                labelColor: "text-[#001F3F]",
                            },
                        }[block.variant];

                        return (
                            <div
                                key={i}
                                className={`${calloutStyles.border} ${calloutStyles.bg} px-6 py-5`}
                            >
                                <span
                                    className={`text-[9px] font-mono font-black tracking-[0.4em] uppercase ${calloutStyles.labelColor} block mb-2`}
                                >
                                    {calloutStyles.label}
                                </span>
                                <p className="text-[14px] md:text-[15px] leading-[1.75] text-[#000000]/70">
                                    {block.text}
                                </p>
                            </div>
                        );

                    case "list":
                        return (
                            <ul key={i} className="flex flex-col gap-3 pl-0">
                                {block.items.map((item, j) => (
                                    <li
                                        key={j}
                                        className="flex items-start gap-4 text-[15px] leading-[1.7] text-[#000000]/70"
                                    >
                                        <span
                                            className="mt-[7px] w-1.5 h-1.5 bg-[#001F3F] shrink-0"
                                            aria-hidden="true"
                                        />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        );

                    default:
                        return null;
                }
            })}
        </div>
    );
}

// ── RELATED LOGS ──
function RelatedLogs({ posts }: { posts: BlogPost[] }) {
    return (
        <section className="border-t border-[#000000] bg-[#000000]/[0.02]">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 py-16 md:py-24">

                <div className="flex items-center gap-4 mb-12">
                    <div className="h-px w-8 bg-[#001F3F]" />
                    <span className="text-[10px] font-mono font-bold tracking-[0.5em] text-[#000000]/45 uppercase">
                        Related Logs
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-[#000000]">
                    {posts.map((post, index) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.slug}`}
                            className="group relative flex flex-col justify-between p-8 md:p-10 min-h-[280px] border-r border-b border-[#000000] overflow-hidden transition-all duration-500"
                        >
                            <div className="absolute bottom-0 left-0 w-full h-0 bg-[#001F3F] group-hover:h-full transition-all duration-500 ease-in-out z-0" />

                            <span
                                className="absolute -right-3 -bottom-3 text-[90px] font-bold text-[#000000]/[0.03] group-hover:text-[#FFFFFF]/5 transition-all duration-500 z-10 select-none leading-none"
                                aria-hidden="true"
                            >
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <div className="relative z-20">
                                <div className="flex flex-col gap-1 mb-6">
                                    <span className="text-[10px] font-mono font-black text-[#001F3F] group-hover:text-[#FFFFFF] tracking-[0.3em] transition-colors">
                                        {post.logNumber}
                                    </span>
                                    <span className="text-[9px] font-mono text-[#000000]/40 group-hover:text-[#FFFFFF]/50 tracking-widest uppercase transition-colors">
                                        {post.category}
                                    </span>
                                </div>
                                <h3 className="text-[18px] font-bold text-[#000000] group-hover:text-[#FFFFFF] tracking-tighter leading-[1.15] uppercase transition-colors">
                                    {post.title}
                                </h3>
                            </div>

                            <div className="relative z-20 flex justify-between items-end pt-6 border-t border-[#000000]/10 group-hover:border-[#FFFFFF]/20 transition-colors">
                                <span className="text-[12px] font-bold text-[#000000] group-hover:text-[#FFFFFF] transition-colors">
                                    {post.date}
                                </span>
                                <span className="text-[11px] font-bold text-[#001F3F] group-hover:text-[#FFFFFF] opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 uppercase tracking-widest">
                                    Read Log _
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}

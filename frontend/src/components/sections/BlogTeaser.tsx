import Link from "next/link";

const POSTS = [
    {
        id: "1",
        title: "Next.js 15 & React 19: The New Infrastructure Standard",
        date: "Mär 2026",
        time: "5 min",
    },
    {
        id: "2",
        title: "Why MongoDB Atlas is the Core for Scale-ups",
        date: "Feb 2026",
        time: "8 min",
    },
    {
        id: "3",
        title: "Stripe Custom Flows vs. Out-of-the-Box",
        date: "Jan 2026",
        time: "6 min",
    },
];

export default function BlogTeaser() {
    return (
        <section className="bg-[#FFFFFF] py-20 md:py-32 border-t border-[#000000]">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <span className="text-[#001F3F] text-[12px] font-bold tracking-[0.4em] uppercase block mb-4">
                            [ Engineering Log ]
                        </span>
                        <h2 className="text-[#000000] text-[clamp(1.5rem,4vw,3rem)] font-bold tracking-tighter uppercase leading-none">
                            Technical Insights
                        </h2>
                    </div>
                    <Link
                        href="/blog"
                        className="hidden md:block text-[12px] font-bold border-b border-[#001F3F] pb-1 tracking-widest hover:text-[#001F3F]/60 transition-colors"
                    >
                        ALLE ARTIKEL
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {POSTS.map((post) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.id}`}
                            className="group border-t border-[#000000] pt-8"
                        >
                            <div className="flex justify-between text-[11px] font-mono text-[#001F3F]/50 mb-6">
                                <span>{post.date}</span>
                                <span>{post.time} READ</span>
                            </div>
                            <h3 className="text-[20px] font-bold leading-tight group-hover:underline underline-offset-8 transition-all">
                                {post.title}
                            </h3>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

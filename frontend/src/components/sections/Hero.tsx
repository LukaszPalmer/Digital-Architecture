import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-[calc(100dvh-70px)] md:min-h-[calc(100dvh-90px)] flex items-center bg-[#FFFFFF] overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 w-full z-10">
                <div className="max-w-4xl">
                    <span className="inline-block text-[#001F3F] text-[12px] md:text-[14px] font-bold tracking-[0.4em] uppercase mb-6">
                        [ High-Performance Infrastructure ]
                    </span>

                    <h1 className="text-[#001F3F] text-[clamp(2.5rem,8vw,6.5rem)] font-bold tracking-tighter leading-[0.9] mb-8 uppercase">
                        Constructing <br />
                        <span className="text-[#000000]">Digital Assets.</span>
                    </h1>

                    <p className="text-[16px] md:text-[20px] text-[#000000]/70 max-w-2xl leading-relaxed mb-12 border-l-2 border-[#001F3F] pl-6">
                        Wir bauen keine Webseiten. Wir konstruieren
                        hochperformante digitale Infrastruktur für Marktführer.
                        Kompromisslose Exzellenz in jedem Frame.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="/portfolio"
                            className="bg-[#001F3F] text-[#FFFFFF] px-10 py-5 text-[14px] font-bold tracking-[0.1em] hover:bg-[#000000] transition-all duration-300 text-center"
                        >
                            PROJEKTE EINSEHEN
                        </Link>
                        <Link
                            href="/strategy"
                            className="border border-[#001F3F] text-[#001F3F] px-10 py-5 text-[14px] font-bold tracking-[0.1em] hover:bg-[#001F3F] hover:text-[#FFFFFF] transition-all duration-300 text-center"
                        >
                            UNSERE METHODIK
                        </Link>
                    </div>
                </div>
            </div>

            {/* Architectural Grid Background */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />
        </section>
    );
}

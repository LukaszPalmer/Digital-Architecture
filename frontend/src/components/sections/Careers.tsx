export default function Careers() {
    return (
        <section className="bg-[#001F3F] text-[#FFFFFF] py-24 md:py-40">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 text-center">
                <span className="text-[#FFFFFF]/40 text-[12px] font-bold tracking-[0.5em] uppercase block mb-8">
                    [ Talent Curation ]
                </span>
                <h2 className="text-[clamp(2rem,6vw,5rem)] font-bold tracking-tighter uppercase leading-[0.8] mb-12">
                    Wir bauen Elite-Teams <br /> für Elite-Projekte.
                </h2>
                <div className="max-w-xl mx-auto border border-[#FFFFFF]/20 p-8 md:p-12 hover:border-[#FFFFFF] transition-colors cursor-pointer group">
                    <p className="text-[14px] uppercase tracking-[0.2em] mb-4 text-[#FFFFFF]/60">
                        Offene Positionen
                    </p>
                    <h3 className="text-[24px] font-bold mb-8">
                        Senior Fullstack Architect (Next.js/TS)
                    </h3>
                    <button className="bg-[#FFFFFF] text-[#001F3F] px-12 py-5 font-bold tracking-[0.2em] uppercase group-hover:bg-[#000000] group-hover:text-[#FFFFFF] transition-all">
                        JETZT BEWERBEN
                    </button>
                </div>
            </div>
        </section>
    );
}

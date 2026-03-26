import { ContactForm } from "./ContactForm";

export default function Contact() {
    return (
        <section
            id="contact"
            className="bg-[#000000] text-[#FFFFFF] py-20 md:py-32 lg:py-44 px-4 md:px-8"
        >
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
                <div>
                    <span className="text-[#FFFFFF]/50 text-[12px] font-bold tracking-[0.4em] uppercase block mb-6">
                        [ Request Architecture ]
                    </span>
                    <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-tighter leading-none uppercase mb-8 italic">
                        Bereit für die <br /> Skalierung?
                    </h2>
                    <p className="text-[#FFFFFF]/70 text-[18px] leading-relaxed max-w-md mb-12">
                        Hinterlassen Sie die Details Ihres Vorhabens. Wir
                        evaluieren die technologische Machbarkeit und melden uns
                        innerhalb von 24h.
                    </p>
                    <div className="space-y-4 font-mono text-[14px]">
                        <p className="text-[#FFFFFF]/40 underline italic">
                            hq@palmer-architecture.com
                        </p>
                    </div>
                </div>
                <div className="bg-[#FFFFFF] p-8 md:p-12 border-0">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}

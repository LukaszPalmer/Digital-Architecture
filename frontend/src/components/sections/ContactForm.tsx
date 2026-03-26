"use client";

export function ContactForm() {
    return (
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#001F3F]">
                    Vollständiger Name
                </label>
                <input
                    type="text"
                    className="w-full bg-transparent border-b border-[#001F3F]/20 p-3 text-[#000000] focus:border-[#001F3F] outline-none transition-colors"
                    placeholder="Vorname Nachname"
                />
            </div>
            <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#001F3F]">
                    Unternehmens-E-Mail
                </label>
                <input
                    type="email"
                    className="w-full bg-transparent border-b border-[#001F3F]/20 p-3 text-[#000000] focus:border-[#001F3F] outline-none transition-colors"
                    placeholder="name@company.com"
                />
            </div>
            <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-[#001F3F]">
                    Vorhaben / Stack
                </label>
                <textarea
                    rows={4}
                    className="w-full bg-transparent border-b border-[#001F3F]/20 p-3 text-[#000000] focus:border-[#001F3F] outline-none transition-colors resize-none"
                    placeholder="Beschreiben Sie kurz Ihr Projekt..."
                />
            </div>
            <button className="w-full bg-[#001F3F] text-[#FFFFFF] py-5 font-bold tracking-[0.2em] uppercase hover:bg-[#000000] transition-all">
                ANFRAGE SENDEN
            </button>
        </form>
    );
}

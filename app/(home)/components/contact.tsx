export default function ContactComponent({ email, location, numberWhatsapp, numberWaFormated }: PropsContactComponent) {


    return (
        <div className="max-w-4xl mx-auto">

            <div className="relative overflow-hidden bg-accent-gradient text-white rounded-3xl px-8 py-14 sm:px-14 sm:py-16 text-center shadow-xl/30 dark:bg-linear-to-r dark:from-[#22D3EE] dark:to-[#818CF8]">
                <div className="absolute inset-0 opacity-[0.1] bg-stripe-overlay"></div>

                <div className="relative flex flex-col items-center">
                    <h2 className="font-sans font-semibold text-3xl sm:text-4xl tracking-tight max-w-xl mb-4">
                        Ada proyek yang ingin didiskusikan?
                    </h2>
                    <p className="text-white/70 text-[15px] leading-relaxed max-w-md mb-9">
                        Ceritakan kebutuhan Anda — sistem baru, migrasi, atau infrastruktur yang
                        perlu dirapikan.
                    </p>

                    <a href={`mailto:${email}`}
                        className="group inline-flex items-center gap-2 bg-white text-navy font-sans font-semibold text-sm
                  rounded-lg px-6 py-3.5 transition-all duration-300 hover:bg-indigo hover:text-white dark:bg-black/40 dark:text-gray-100">
                        Kirim Email
                        <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Contact */}
            <div className="grid sm:grid-cols-3 gap-4 mt-6">

                <a href={`mailto:${email}`}
                    className="group flex items-center gap-3.5 bg-white border border-line rounded-xl px-4 py-4
                transition-all duration-300 hover:-translate-y-1 hover:border-indigo hover:shadow-[0_12px_28px_-16px_rgb(20_28_58/0.35)] shadow-xl dark:bg-[#1A1A1A] dark:border-[#2A2A2A] ">
                    <span className="shrink-0 w-9 h-9 rounded-lg bg-indigo-soft text-indigo flex items-center justify-center dark:bg-[#22d3ee1a] dark:text-[#22D3EE]">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M4 6H20V18H4V6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M4 7L12 13L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    <div className="flex flex-col leading-tight">
                        <span className="font-sans text-[11px] text-muted">Email</span>
                        <span className="font-sans font-semibold text-sm break-all lg:break-keep">{email}</span>
                    </div>
                </a>

                <a href={`https://wa.me/${numberWhatsapp}`} target="_blank"
                    className="group flex items-center gap-3.5 bg-white border border-line rounded-xl px-4 py-4
                transition-all duration-300 hover:-translate-y-1 hover:border-indigo hover:shadow-[0_12px_28px_-16px_rgb(20_28_58/0.35)] shadow-xl dark:bg-[#1A1A1A] dark:border-[#2A2A2A]">
                    <span className="shrink-0 w-9 h-9 rounded-lg bg-indigo-soft text-indigo flex items-center justify-center dark:bg-[#22d3ee1a] dark:text-[#22D3EE]">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M3 21L4.5 16.5C3.55 14.9 3 13.05 3 11C3 5.5 7.5 1 13 1S23 5.5 23 11S18.5 21 13 21C11.05 21 9.15 20.5 7.5 19.5L3 21Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" transform="translate(-1,0) scale(0.9)" /></svg>
                    </span>
                    <div className="flex flex-col leading-tight">
                        <span className="font-sans text-[11px] text-muted">WhatsApp</span>
                        <span className="font-sans font-semibold text-sm">{numberWaFormated}</span>
                    </div>
                </a>

                <div className="flex items-center gap-3.5 bg-white border border-line rounded-xl px-4 py-4 shadow-xl dark:bg-[#1A1A1A] dark:border-[#2A2A2A]">
                    <span className="shrink-0 w-9 h-9 rounded-lg bg-indigo-soft text-indigo flex items-center justify-center dark:bg-[#22d3ee1a] dark:text-[#22D3EE]">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M12 21C12 21 20 15 20 9.5C20 5.36 16.64 2 12.5 2C8.36 2 5 5.36 5 9.5C5 15 12 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><circle cx="12.5" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="2" /></svg>
                    </span>
                    <div className="flex flex-col leading-tight">
                        <span className="font-sans text-[11px] text-muted">Lokasi</span>
                        <span className="font-sans font-semibold text-sm">{location}</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
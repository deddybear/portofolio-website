export default function FooterComponent({ email, location, year, numberWhatsapp, numberWaFormated }: PropsFootbarComponent) {

    return (
        <div>
            <footer className="relative overflow-hidden bg-linear-to-r from-[#00B4DB] to-indigo text-white dark:bg-linear-to-r dark:from-[#22D3EE] dark:to-[#818CF8]">
                <div className="absolute inset-0 opacity-[0.08] bg-stripe-overlay"></div>

                <div className="relative max-w-5xl mx-auto px-6 pt-16 pb-8">

                    <div className="grid grid-cols-2 sm:grid-cols-12 gap-y-10 gap-x-6 pb-12 border-b border-white/10">

                        {/* Brand */}
                        <div className="col-span-2 sm:col-span-5">
                            <span className="font-display font-bold text-lg tracking-tight">
                                Dedi Suharman
                            </span>
                            <p className="text-white text-sm font-semibold leading-relaxed mt-3 max-w-xs">
                                Fullstack developer — membangun sistem dari ujung ke ujung, frontend,
                                backend, sampai dengan infrastruktur server.
                            </p>

                            <div className="flex items-center gap-2.5 mt-5">
                                <a href="https://github.com/deddybear?tab=repositories" aria-label="GitHub"
                                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center
                      transition-colors duration-300 hover:bg-indigo hover:border-indigo">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.25C2 16.78 4.87 20.6 8.84 21.95C9.34 22.04 9.5 21.72 9.5 21.44C9.5 21.19 9.49 20.35 9.49 19.46C7 19.97 6.35 18.85 6.15 18.27C6.04 17.97 5.55 17.03 5.12 16.78C4.77 16.58 4.27 16.07 5.11 16.06C5.9 16.05 6.47 16.81 6.66 17.13C7.56 18.7 9.02 18.25 9.6 17.98C9.69 17.3 9.95 16.84 10.24 16.58C7.98 16.32 5.62 15.42 5.62 11.52C5.62 10.41 6.01 9.49 6.68 8.78C6.58 8.52 6.23 7.47 6.78 6.06C6.78 6.06 7.65 5.78 9.5 7.06C10.28 6.83 11.11 6.72 11.94 6.72C12.77 6.72 13.6 6.83 14.38 7.06C16.23 5.77 17.1 6.06 17.1 6.06C17.65 7.47 17.3 8.52 17.2 8.78C17.87 9.49 18.26 10.4 18.26 11.52C18.26 15.43 15.89 16.32 13.63 16.58C14 16.9 14.32 17.52 14.32 18.48C14.32 19.85 14.31 20.99 14.31 21.44C14.31 21.72 14.47 22.05 14.97 21.95C18.94 20.6 21.81 16.78 21.81 12.25C21.81 6.58 17.33 2 12 2Z" /></svg>
                                </a>
                                <a href="https://www.linkedin.com/in/dedi-suharman" aria-label="LinkedIn"
                                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center
                      transition-colors duration-300 hover:bg-indigo hover:border-indigo">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5C6.94 6.1 6.06 7 4.97 7C3.88 7 3 6.1 3 5C3 3.9 3.88 3 4.97 3C6.06 3 6.94 3.9 6.94 5ZM7 8.48H3V21H7V8.48ZM13.32 8.48H9.34V21H13.28V14.43C13.28 10.77 18.05 10.44 18.05 14.43V21H22V13.07C22 6.9 14.94 7.13 13.28 10.16L13.32 8.48Z" /></svg>
                                </a>
                                <a href="#" aria-label="Instagram"
                                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center
                      transition-colors duration-300 hover:bg-indigo hover:border-indigo">
                                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
                                </a>
                            </div>
                        </div>

                        {/* Navigasi */}
                        <div className="col-span-1 sm:col-span-3">
                            <span className="font-mono text-[11px] uppercase tracking-wide text-white/80 font-semibold block mb-4">
                                Navigasi
                            </span>
                            <ul className="flex flex-col gap-2.5 text-base text-white font-sans">
                                <li><a href="#home" className="transition-colors hover:text-white">Home</a></li>
                                <li><a href="#about" className="transition-colors hover:text-white">About</a></li>
                                <li><a href="#portfolio" className="transition-colors hover:text-white">Portfolio</a></li>
                                <li><a href="#stack" className="transition-colors hover:text-white">Technology</a></li>
                                <li><a href="#contact" className="transition-colors hover:text-white">Contact</a></li>
                            </ul>
                        </div>

                        {/* Kontak */}
                        <div className="col-span-1 sm:col-span-4">
                            <span className="font-mono text-[11px] uppercase tracking-wide text-white/80 block mb-4">
                                Kontak
                            </span>
                            <ul className="flex flex-col gap-2.5 text-white font-base">
                                <li>
                                    <a href={`mailto:${email}`} className="transition-colors hover:text-white">
                                        {email}
                                    </a>
                                </li>
                                <li>
                                    <a href={`https://wa.me/${numberWhatsapp}`} className="transition-colors hover:text-white">
                                        {numberWaFormated}
                                    </a>
                                </li>
                                <li>{location}</li>
                            </ul>
                        </div>

                    </div>

                    {/* Bottom bar */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
                        <span className="font-mono text-[11px] text-white/60">
                            {`© ${year} Dedi Suharman. Seluruh hak cipta dilindungi.`}
                        </span>
                        <div className="flex items-center gap-5 font-mono text-[11px] text-white/70">
                            <a href="#" className="transition-colors hover:text-white">Kebijakan Privasi</a>
                            <a href="#" className="transition-colors hover:text-white">Syarat & Ketentuan</a>
                        </div>
                    </div>

                </div>
            </footer>

        </div>
    );

}
export default function AboutComponent({ yearCount, completedProjectCount, techDomainCount }: PropsAboutComponent) {

    return (
        <div>
            {/* tittle section start */}
            <h1 className="font-sans font-bold text-5xl tracking-wide text-center sm:tracking-widest sm:text-left lg:text-6xl">
                About Me
            </h1>
            {/* tittle section end */}


            {/* deskripsi section start */}
            <p className="text-justify text-gray-600 mt-10 tracking-wide lg:w-xl lg:mt-15 lg:mb-15 dark:text-gray-400">
                Saya seorang pengembang full-stack yang membangun aplikasi web yang responsif dan skalabel,
                mulai dari antarmuka pengguna hingga logika server. Fokus saya adalah menciptakan pengalaman
                pengguna yang intuitif dan solusi yang andal, sambil terus belajar dan beradaptasi dengan
                teknologi terbaru di bidang pengembangan perangkat lunak.
            </p>
            {/* deskripsi section end */}

            {/* Card Experience Start */}
            <div className="grid grid-cols-1 gap-10 items-start lg:grid-cols-12 lg:gap-14 ">

                <div className="lg:col-span-5 mt-10 shadow-2xl rounded-2xl bg-linear-to-br from-[#00B4DB] to-[#5B86E5] dark:bg-linear-to-r dark:from-[#22D3EE] dark:to-[#818CF8]">
                    <div className="relative rounded-2xl text-white p-6 overflow-hidden lg:mt-0">
                        <div className="relative flex flex-col gap-5">
                            <div className="flex items-baseline gap-2">
                                <span className="font-display font-bold text-4xl">{yearCount}</span>
                                <span className="font-sans text-xs text-white/60 leading-snug">
                                    Years Experience
                                </span>
                            </div>
                            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/15">
                                <div>
                                    <span className="font-display font-bold text-2xl block">{completedProjectCount}+</span>
                                    <span className="font-sans text-[11px] text-white/60">Project Completed</span>
                                </div>
                                <div>
                                    <span className="font-display font-bold text-2xl block">{techDomainCount}+</span>
                                    <span className="font-sans text-[11px] text-white/60">Technology domain</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-7 flex flex-col gap-8">
                    <div className="grid sm:grid-cols-2 gap-6 lg:gap-4">
                        <div className="flex flex-col gap-2 shadow-lg border border-line rounded-xl p-5
                      transition-all duration-300 hover:-translate-y-1 hover:border-indigo hover:shadow-[0_12px_28px_-16px_rgb(20_28_58/0.35)] dark:bg-[#1A1A1A] dark:border-0">
                            <span className="w-8 h-8 rounded-lg bg-indigo-soft text-indigo flex items-center justify-center dark:bg-[#22d3ee1a] dark:text-[#22D3EE]">
                                {/* <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M8 9L4 12L8 15M16 9L20 12L16 15M13 5L11 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> */}
                                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="m18 16 4-4-4-4" />
                                    <path d="m6 8-4 4 4 4" />
                                    <path d="m14.5 4-5 16" />
                                </svg>
                            </span>
                            <span className="font-display font-semibold text-sm">Full-stack Development</span>
                            <span className="text-muted text-[13px] leading-relaxed">
                                Membangun aplikasi web end-to-end dengan teknologi modern seperti Rust, PHP, Golang,
                                Node.js, React.JS Next.JS dan Flutter. Berpengalaman dalam merancang arsitektur sistem yang
                                scalable dan maintainable, dari prototipe hingga produksi.
                            </span>
                        </div>

                        <div className="flex flex-col gap-2 shadow-lg border border-line  rounded-xl p-5
                      transition-all duration-300 hover:-translate-y-1 hover:border-indigo hover:shadow-[0_12px_28px_-16px_rgb(20_28_58/0.35)] dark:bg-[#1A1A1A] dark:border-0">
                            <span className="w-8 h-8 rounded-lg bg-indigo-soft text-indigo flex items-center justify-center dark:bg-[#22d3ee1a] dark:text-[#22D3EE]">
                                {/* <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M4 6H20M4 12H20M4 18H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg> */}
                                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                                    <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                                    <line x1="6" x2="6.01" y1="6" y2="6" />
                                    <line x1="6" x2="6.01" y1="18" y2="18" />
                                </svg>
                            </span>
                            <span className="font-display font-semibold text-sm">Self-hosted Infrastructure</span>
                            <span className="text-muted text-[13px] leading-relaxed">
                                Mengelola dan meng-deploy infrastruktur berbasis server mandiri menggunakan Docker,
                                Proxmox, dan Linux. Berpengalaman mengonfigurasi layanan seperti Nginx, PostgreSQL,
                                Redis, dan CI/CD pipeline untuk kebutuhan hosting yang aman dan efisien.
                            </span>
                        </div>

                        <div className="flex flex-col gap-2 shadow-lg border border-line rounded-xl p-5
                      transition-all duration-300 hover:-translate-y-1 hover:border-indigo hover:shadow-[0_12px_28px_-16px_rgb(20_28_58/0.35)] dark:bg-[#1A1A1A] dark:border-0">
                            <span className="w-8 h-8 rounded-lg bg-indigo-soft text-indigo flex items-center justify-center dark:bg-[#22d3ee1a] dark:text-[#22D3EE]">
                                {/* <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M12 12L20 7.5M12 12V21M12 12L4 7.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg> */}
                                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                                    <path d="m3.3 7 8.7 5 8.7-5" />
                                    <path d="M12 22V12" />
                                </svg>
                            </span>
                            <span className="font-display font-semibold text-sm">Realtime Systems</span>
                            <span className="text-muted text-[13px] leading-relaxed">
                                Mengembangkan sistem yang merespons secara real-time menggunakan WebSocket,
                                Server-Sent Events, dan teknologi streaming lainnya. Fokus pada latency rendah
                                dan konsistensi data untuk aplikasi seperti chat, notifikasi, dan monitoring.
                            </span>
                        </div>

                        <div className="flex flex-col gap-2 shadow-lg border border-line rounded-xl p-5
                      transition-all duration-300 hover:-translate-y-1 hover:border-indigo hover:shadow-[0_12px_28px_-16px_rgb(20_28_58/0.35)] dark:bg-[#1A1A1A] dark:border-0">
                            <span className="w-8 h-8 rounded-lg bg-indigo-soft text-indigo flex items-center justify-center dark:bg-[#22d3ee1a] dark:text-[#22D3EE]">
                                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                                    <path d="M3 3v5h5" />
                                    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
                                    <path d="M16 16h5v5" />
                                </svg>
                                {/* <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" /><path d="M19.4 15A1.65 1.65 0 0021 12.5V11.5A1.65 1.65 0 0019.4 9L18.9 8.1A1.65 1.65 0 0018.9 6.2L19 6C19.5 5.5 19.5 4.7 19 4.2L18.8 4C18.3 3.5 17.5 3.5 17 4L16.9 4.1A1.65 1.65 0 0015 4.1L14.9 3.6A1.65 1.65 0 0013 3H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg> */}
                            </span>
                            <span className="font-display font-semibold text-sm">Ops & Maintenance</span>
                            <span className="text-muted text-[13px] leading-relaxed">
                                Memastikan aplikasi berjalan optimal di produksi melalui monitoring, logging,
                                dan maintenance rutin. Mengelola performa, keamanan, dan availability sistem
                                serta menangani troubleshooting dan scaling secara proaktif.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Card Experience End */}
        </div>
    )
}
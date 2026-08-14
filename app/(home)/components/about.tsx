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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur est animi ab vel neque necessitatibus. At libero accusantium nobis consectetur ?
                Ad praesentium cumque deleniti magni ullam corporis, eos facilis fuga?
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
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M8 9L4 12L8 15M16 9L20 12L16 15M13 5L11 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </span>
                            <span className="font-display font-semibold text-sm">Full-stack Development</span>
                            <span className="text-muted text-[13px] leading-relaxed">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, consectetur ad! Doloribus laudantium beatae rem reiciendis sapiente sunt deleniti quos, repellat quasi libero labore animi illo! Ducimus obcaecati voluptate temporibus?
                            </span>
                        </div>

                        <div className="flex flex-col gap-2 shadow-lg border border-line  rounded-xl p-5
                      transition-all duration-300 hover:-translate-y-1 hover:border-indigo hover:shadow-[0_12px_28px_-16px_rgb(20_28_58/0.35)] dark:bg-[#1A1A1A] dark:border-0">
                            <span className="w-8 h-8 rounded-lg bg-indigo-soft text-indigo flex items-center justify-center dark:bg-[#22d3ee1a] dark:text-[#22D3EE]">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M4 6H20M4 12H20M4 18H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </span>
                            <span className="font-display font-semibold text-sm">Self-hosted Infrastructure</span>
                            <span className="text-muted text-[13px] leading-relaxed">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius magni impedit, vel optio excepturi aperiam iure corrupti tenetur, delectus ullam iusto odio quaerat est officiis nemo blanditiis dolores sunt necessitatibus!
                            </span>
                        </div>

                        <div className="flex flex-col gap-2 shadow-lg border border-line rounded-xl p-5
                      transition-all duration-300 hover:-translate-y-1 hover:border-indigo hover:shadow-[0_12px_28px_-16px_rgb(20_28_58/0.35)] dark:bg-[#1A1A1A] dark:border-0">
                            <span className="w-8 h-8 rounded-lg bg-indigo-soft text-indigo flex items-center justify-center dark:bg-[#22d3ee1a] dark:text-[#22D3EE]">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M12 12L20 7.5M12 12V21M12 12L4 7.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>
                            </span>
                            <span className="font-display font-semibold text-sm">Realtime Systems</span>
                            <span className="text-muted text-[13px] leading-relaxed">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero hic soluta nostrum ducimus qui quidem eveniet, et sint expedita eius. Optio eos ex modi voluptates nobis dolore deleniti non rem..
                            </span>
                        </div>

                        <div className="flex flex-col gap-2 shadow-lg border border-line rounded-xl p-5
                      transition-all duration-300 hover:-translate-y-1 hover:border-indigo hover:shadow-[0_12px_28px_-16px_rgb(20_28_58/0.35)] dark:bg-[#1A1A1A] dark:border-0">
                            <span className="w-8 h-8 rounded-lg bg-indigo-soft text-indigo flex items-center justify-center dark:bg-[#22d3ee1a] dark:text-[#22D3EE]">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" /><path d="M19.4 15A1.65 1.65 0 0021 12.5V11.5A1.65 1.65 0 0019.4 9L18.9 8.1A1.65 1.65 0 0018.9 6.2L19 6C19.5 5.5 19.5 4.7 19 4.2L18.8 4C18.3 3.5 17.5 3.5 17 4L16.9 4.1A1.65 1.65 0 0015 4.1L14.9 3.6A1.65 1.65 0 0013 3H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                            </span>
                            <span className="font-display font-semibold text-sm">Ops & Maintenance</span>
                            <span className="text-muted text-[13px] leading-relaxed">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error at, praesentium eligendi quam, itaque incidunt culpa ut, accusamus quidem ipsam laboriosam expedita placeat nostrum rerum quibusdam eius? Quasi, ratione alias?
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Card Experience End */}
        </div>
    )
}
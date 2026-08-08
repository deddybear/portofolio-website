export default function PortofolioSection() {

    // component ini harus nembak api untuk get data card 
    // sementara kita pakai data dummy

    const dataDummy: CardPortfolio[] = [
        {
            typeProject: "Web App",
            location: "Indonesia",
            year: "2022",
            nameProject: "Test"
        },
        {
            typeProject: "Web App",
            location: "Indonesia",
            year: "2022",
            nameProject: "Test"
        },
        {
            typeProject: "Web App",
            location: "Indonesia",
            year: "2022",
            nameProject: "Test"
        },
        {
            typeProject: "Web App",
            location: "Indonesia",
            year: "2022",
            nameProject: "Test"
        },
        {
            typeProject: "Web App",
            location: "Indonesia",
            year: "2022",
            nameProject: "Test"
        },
        {
            typeProject: "Web App",
            location: "Indonesia",
            year: "2022",
            nameProject: "Test"
        }
    ]

    return (
        <div>
            {/* tittle section start */}
            <h1 className="font-sans text-center font-bold text-6xl tracking-wide sm:tracking-widest">Portfolio</h1>
            {/* tittle section end */}

            {/* description section start */}
            <p className="text-center mx-auto text-gray-600 mt-10 tracking-wide lg:w-5xl lg:mt-15 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab,
                ex cum natus nisi non recusandae repellat dignissimos doloremque
                dolorem delectus nemo atque quasi perspiciatis soluta, voluptas, at sapiente voluptatem corrupti!
            </p>
            {/* description section end */}

            {/* list card projects start */}

            <div id="collection-projects" className="mt-15 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-18">
                {
                    dataDummy.map((data, index) => (
                        <a key={index} href="#" className="group flex flex-col bg-white border border-line rounded-2xl shadow-xl overflow-hidden
                          transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-18px_rgb(20_28_58/0.35)]">
                            <div className="relative aspect-[1/0.82] bg-linear-to-br from-[#00B4DB] to-[#5B86E5] overflow-hidden">
                                <div className="absolute inset-0 opacity-40 bg-[repeating-linear-gradient(115deg,rgb(255_255_255/0.15)_0_2px,transparent_2px_26px)]"></div>
                                <span className="absolute top-3.5 left-3.5 font-mono text-[11px] tracking-wide text-white bg-black/25 border border-white/35 rounded-full px-2.5 py-1 backdrop-blur-sm">
                                    {data.typeProject}
                                </span>
                                <span className="absolute bottom-3.5 right-4 font-display font-bold text-[13px] text-white/75">
                                    {`0${index + 1}`}
                                </span>
                            </div>
                            <div className="flex flex-col gap-3 p-5 flex-1">
                                <div className="flex items-start justify-between gap-3">
                                    <span className="font-display font-semibold text-lg leading-snug tracking-tight">
                                        {data.nameProject}
                                    </span>
                                    <span className="shrink-0 w-7.5 h-7.5 rounded-full border border-line flex items-center justify-center
                         transition-colors duration-300 group-hover:bg-indigo group-hover:border-indigo">
                                        <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-45" viewBox="0 0 24 24" fill="none">
                                            <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" className="text-ink group-hover:text-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                                <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs text-muted mt-auto pt-2 border-t border-dashed border-line">
                                    <span className="text-indigo">Web Apps</span><span className="text-line">·</span>
                                    <span>{data.year}</span><span className="text-line">·</span>
                                    <span>{data.location}</span>
                                </div>
                            </div>
                        </a>
                ))}
            </div>
            {/* list card projects end */}
        </div>
    )
}
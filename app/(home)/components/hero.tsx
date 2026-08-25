import Image from "next/image";

export default function HeroComponent() {

    return (
        <div>
            {/* Introduction Self Start */}
            <div className="mb-10">
                <div className="lg:flex">
                    <div className="w-full self-center px-2 text-center lg:text-justify">
                        <h1 className="font-sans font-extrabold text-3xl tracking-wide mb-2 lg:mb-3 lg:text-6xl sm:tracking-widest">Hello, I&apos;am Dedi,</h1>
                        <h1 className="font-sans font-bold text-2xl tracking-wide mb-8 lg:mb-17 lg:text-5xl sm:tracking-wider bg-linear-to-r bg-clip-text text-transparent from-[#00B4DB] to-[#5B86E5] dark:bg-linear-to-r dark:from-[#22D3EE] dark:to-[#818CF8">Fullstack Developer</h1>
                        {/* for mobile start */}
                        <p className="font-sans block font-normal text-base text-gray-600 tracking-wide mb-2 lg:max-w-2xl lg:mb-3 lg:text-1xl sm:hidden dark:text-gray-400">
                            Saya seorang Fullstack Developer yang bersemangat mengembangkan aplikasi berbasis web maupun mobile secara responsif dan skalabel, serta menciptakan pengalaman pengguna yang optimal.
                        </p>
                        {/* for mobile end */}

                        {/* for desktop start*/}
                        <p className="font-sans block font-normal text-base text-gray-600 tracking-wide mb-2 lg:max-w-2xl lg:mb-3 lg:text-1xl max-sm:hidden dark:text-gray-400">
                            Saya seorang Fullstack Developer yang bersemangat mengembangkan aplikasi berbasis web maupun mobile yang responsif dan skalabel, serta menciptakan pengalaman pengguna yang optimal. Saya selalu mengikuti tren terbaru dalam pengembangan web dan memastikan kode yang saya tulis bersih, efisien, dan mudah dipelihara.
                        </p>
                        {/* for desktop end*/}
                    </div>

                    <div className="font-sans mt-15 mb-5 lg:mt-25 lg:hidden sm:block">
                        <div className="px-2 text-center lg:text-left">
                            <div className="container">
                                <a target="_blank" href="https://drive.google.com/file/d/1_jK-udc1LTgWEwbF9CpZ4yEmeQ-FxiXP/view" className="shadow-md bg-linear-to-r from-[#00B4DB] to-[#5B86E5] text-white font-bold py-3 px-4 rounded dark:bg-linear-to-r dark:from-[#22D3EE] dark:to-[#818CF8]">Download Resume </a>
                            </div>
                        </div>
                    </div>

                    <div className="font-sans lg:flex lg:w-1/2">
                        <div className="relative">
                            <div className="relative flex items-center justify-center">
                                {/* Main soft blue background */}
                                <div className="absolute -inset-10 -z-10 rounded-[45%] bg-linear-to-br from-blue-100 via-blue-50 to-transparent blur-2xl rotate-12deg dark:from-blue-900/30 dark:via-blue-950/20 dark:to-transparent" />

                                {/* Large blue glow */}
                                <div className="absolute right-0 top-1/2 -z-10 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-300/20 blur-3xl" />

                                {/* Decorative dots */}
                                <div className="absolute right-0 top-8 -z-10 h-32 w-32 opacity-50 bg-[radial-gradient(circle,#60a5fa_2px,transparent_2px)] bg-size-[16px_16px]" />

                                {/* Floating code card - left */}
                                <div className="absolute left-0 top-10 z-20 flex h-10 w-10 flex-col items-center justify-center rounded-md bg-white shadow-lg sm:h-24 sm:w-20 sm:rounded-2xl dark:bg-[#22d3ee1a]">
                                    <span className="font-bold text-blue-500 sm:text-3xl dark:text-[#22D3EE]">
                                        &lt;/&gt;
                                    </span>

                                    <div className="mt-3 h-2 w-12 hidden rounded-full bg-gray-100 sm:block" />
                                    <div className="mt-2 h-2 w-9 hidden rounded-full bg-gray-100 sm:block" />
                                </div>

                                {/* Floating code card - right */}
                                <div className="absolute right-0 top-1/3 z-20 flex h-10 w-10 flex-col items-center justify-center rounded-md bg-white shadow-lg sm:h-24 sm:w-20 sm:rounded-2xl dark:bg-[#22d3ee1a]">
                                    <span className="font-bold text-blue-500 sm:text-3xl dark:text-[#22D3EE]">
                                        {"{...}"}
                                    </span>

                                    <div className="mt-3 h-2 w-12 hidden rounded-full bg-gray-100 sm:block" />
                                    <div className="mt-2 h-2 w-9 hidden rounded-full bg-gray-100 sm:block" />
                                </div>
                                {/* Background decoration */}
                                <div className="absolute inset-10 rounded-full bg-blue-200/40 blur-3xl" />
                                {/* Laptop image */}
                                <Image unoptimized src="/images/laptop-picture-compress.png" alt="Developer workspace" width={700} height={600} priority className="relative z-10 w-full max-w-175 object-contain drop-shadow-2xl" />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            {/* Introduction Self End */}

            {/* Button Download Resume Start */}
            <div className="font-sans mt-15 mb-5 lg:mt-25 hidden lg:block">
                <div className="px-2 text-center lg:text-left">
                    <div className="container">
                        <a target="_blank" href="https://drive.google.com/file/d/1_jK-udc1LTgWEwbF9CpZ4yEmeQ-FxiXP/view" className="shadow-md bg-linear-to-r from-[#00B4DB] to-[#5B86E5] text-white font-bold py-3 px-4 rounded dark:bg-linear-to-r dark:from-[#22D3EE] dark:to-[#818CF8]">Download Resume </a>
                    </div>
                </div>
            </div>
        </div>
    )
}   
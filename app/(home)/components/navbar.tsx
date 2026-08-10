'use client'

export default function NavbarComponent() {

    return (
        <nav className="relative after:pointer-events-none after:absolute">
            <div className="relative flex items-center justify-between px-1 lg:px-0">
                {/* Mobile Menu Button Start */}
                <div className="absolute inset-y-0 right-2 flex items-center sm:hidden">
                    <button type="button" className="relative inline-flex items-center justify-center">
                        <span className="absolute inset-0.5"></span>
                        <span className="sr-only">Main Menu</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6 in-aria-expanded:hidden">
                            <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6 not-in-aria-expanded:hidden">
                            <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
                {/* Mobile Menu Button End */}

                {/* Logo Webiste Start */}
                <div className="sm:items-stretch sm:justify-start px-2">
                    <a href="#" className="flex flex-row items-center gap-3 py-6 font-bold">
                        <span className="relative flex shrink-0 w-10 h-10 rounded-xl bg-accent-gradient  items-center justify-center overflow-hidden">
                            <svg width="24" height="24" viewBox="0 0 64 64">
                                <text x="14" y="41" fontFamily="'JetBrains Mono', monospace" fontWeight="700" fontSize="25" fill="#FFFFFF">ds<tspan fill="#141C3A">.</tspan></text>
                            </svg>
                        </span>
                        <div className="hidden sm:flex flex-col leading-tight">
                            <span className="font-sans font-bold text-sm">Dedi <span className="bg-linear-to-r bg-clip-text text-transparent from-[#00B4DB] to-[#5B86E5]">Suharman</span></span>
                            <span className="font-mono text-[10px] text-muted tracking-wide">FULLSTACK DEVELOPER</span>
                        </div>
                    </a>
                </div>
                {/* Logo Webiste End */}

                {/* Item Navbar Start */}
                <div className="hidden sm:block">
                    <div className="flex space-x-4">
                        <a href="#home" className="px-3 py-2 text-sm font-medium hover:bg-linear-to-r hover:bg-clip-text hover:text-transparent hover:from-[#00B4DB] hover:to-[#5B86E5]">Home</a>
                        <a href="#about" className="px-3 py-2 text-sm font-medium hover:bg-linear-to-r hover:bg-clip-text hover:text-transparent hover:from-[#00B4DB] hover:to-[#5B86E5]">About</a>
                        <a href="#portfolio" className="px-3 py-2 text-sm font-medium hover:bg-linear-to-r hover:bg-clip-text hover:text-transparent hover:from-[#00B4DB] hover:to-[#5B86E5]">Portfolio</a>
                        <a href="#stack" className="px-3 py-2 text-sm font-medium hover:bg-linear-to-r hover:bg-clip-text hover:text-transparent hover:from-[#00B4DB] hover:to-[#5B86E5]">Technology</a>
                        <a href="#contact" className="px-3 py-2 text-sm font-medium hover:bg-linear-to-r hover:bg-clip-text hover:text-transparent hover:from-[#00B4DB] hover:to-[#5B86E5]">Contact</a>
                    </div>
                </div>
                {/* Item Navbar End */}
            </div>
        </nav>


    );
}
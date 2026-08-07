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
                <div className="flex flex-1 items-center sm:items-stretch sm:justify-start px-2">
                    <a href="#" className="block py-6 font-bold">Ini Logo</a>
                </div>
                {/* Logo Webiste End */}

                {/* Item Navbar Start */}
                <div className="hidden sm:block">
                    <div className="flex space-x-4">
                        <a href="#home" className="px-3 py-2 text-sm font-medium">Home</a>
                        <a href="#about" className="px-3 py-2 text-sm font-medium">About</a>
                        <a href="#projects" className="px-3 py-2 text-sm font-medium">Portfolio</a>
                        <a href="#Stack" className="px-3 py-2 text-sm font-medium">Stack</a>
                    </div>
                </div>
                {/* Item Navbar End */}
            </div>
        </nav>


    );
}
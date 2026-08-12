'use client'

import { useState } from "react";
import { ThemeSwitcher } from "./theme-switcher";

export default function NavbarComponent() {

    const listMenu: NavbarMenu[] = [
        {
            href: "#home",
            label: "Home"
        },
        {
            href: "#about",
            label: "About"
        },
        {
            href: "#portfolio",
            label: "Portfolio"
        },
        {
            href: "#technology",
            label: "Technology"
        },
        {
            href: "#contact",
            label: "Contact"
        }
    ];

    const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);


    return (
        <nav className="relative after:pointer-events-none after:absolute">

            <div className="relative flex items-center justify-between px-1 lg:px-0">

                {/* Logo Webiste Start */}
                <div className="sm:items-stretch sm:justify-start px-2">
                    <a href="#" className="flex flex-row items-center gap-3 py-6 font-bold">
                        <span className="relative flex shrink-0 w-10 h-10 rounded-xl bg-accent-gradient  items-center justify-center overflow-hidden">
                            <svg width="26" height="26" viewBox="0 0 64 64">
                                <text x="32" y="40" textAnchor="middle" fontFamily="'JetBrains Mono', monospace"
                                    fontWeight="700" fontSize="19" fill="#FFFFFF" letterSpacing="-0.5">&lt;D/&gt;</text>
                            </svg>

                        </span>
                        <div className="hidden sm:flex flex-col leading-tight">
                            <span className="font-sans font-bold text-sm">Dedi <span className="bg-linear-to-r bg-clip-text text-transparent from-[#00B4DB] to-[#5B86E5]">Suharman</span></span>
                            <span className="font-mono text-[10px] text-muted tracking-wide">FULLSTACK DEVELOPER</span>
                        </div>
                    </a>
                </div>
                {/* Logo Webiste End */}

                {/* Mobile Menu Button Start */}
                <div className="absolute inset-y-0 right-2 flex items-center sm:hidden">
                    <button type="button"
                        aria-label={isMenuMobileOpen ? 'Tutup menu' : 'Buka menu'}
                        aria-expanded={isMenuMobileOpen}
                        onClick={() => setIsMenuMobileOpen((prev) => !prev)}
                        className="relative inline-flex items-center justify-center w-10 h-10 rounded-xl border border-line transition-colors duration-300">
                        <svg width="20" height="20" viewBox="0 0 20 20">
                            <line
                                x1="3" y1="6" x2="17" y2="6"
                                stroke="#101323" strokeWidth="1.8" strokeLinecap="round"
                                className="transition-all duration-300 origin-center"
                                style={{ transform: isMenuMobileOpen ? 'translateY(4px) rotate(45deg)' : 'none' }}
                            />
                            <line
                                x1="3" y1="10" x2="17" y2="10"
                                stroke="#101323" strokeWidth="1.8" strokeLinecap="round"
                                className="transition-opacity duration-300"
                                style={{ opacity: isMenuMobileOpen ? 0 : 1 }}
                            />
                            <line
                                x1="3" y1="14" x2="17" y2="14"
                                stroke="#101323" strokeWidth="1.8" strokeLinecap="round"
                                className="transition-all duration-300 origin-center"
                                style={{ transform: isMenuMobileOpen ? 'translateY(-4px) rotate(-45deg)' : 'none' }}
                            />
                        </svg>
                    </button>
                </div>
                {/* Mobile Menu Button End */}

                {/* Item Navbar Start */}
                <div className="hidden sm:block">
                    <div className="flex space-x-4">
                        {
                            listMenu.map((dataMenu, index) => (
                                <a key={index} href={dataMenu.href} className="px-3 py-2 text-sm font-medium hover:bg-linear-to-r hover:bg-clip-text hover:text-transparent hover:from-[#00B4DB] hover:to-[#5B86E5]">{dataMenu.label}</a>
                            ))
                        }
                        {/* Dark Mode */}
                        <ThemeSwitcher />
                    </div>
                </div>
                {/* Item Navbar End */}
            </div>
            {/* List Menu Mobile Start */}
            <div
                className="sm:hidden grid transition-[grid-template-rows] w-full duration-300 ease-out "
                style={{ gridTemplateRows: isMenuMobileOpen ? '1fr' : '0fr' }}
            >
                <div className="overflow-hidden">
                    <div className="flex flex-col px-4 py-4 gap-1">
                        {
                            listMenu.map((dataMenu, index) => (
                                <a
                                    key={index}
                                    onClick={() => setIsMenuMobileOpen(false)}
                                    href={dataMenu.href}
                                    className="font-sans font-medium text-base px-3 py-3 rounded-lg
                           transition-colors hover:bg-indigo/10"
                                >{dataMenu.label}</a>
                            ))
                        }
                    </div>
                </div>

            </div>
            {/* List Menu Mobile End */}
        </nav>


    );
}
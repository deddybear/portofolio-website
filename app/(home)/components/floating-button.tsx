'use client'

import { useEffect, useRef } from "react";

export default function FloatingButton() {
    const buttonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const buttonFloatingShow = window.scrollY > 400;

            buttonRef.current?.classList.toggle('opacity-0', !buttonFloatingShow);
            buttonRef.current?.classList.toggle('translate-y-3', !buttonFloatingShow);
            buttonRef.current?.classList.toggle('pointer-events-none', !buttonFloatingShow);
        };

        window.addEventListener('scroll', handleScroll);

        // jalankan sekali di awal, jaga-jaga posisi scroll sudah > 400 saat mount
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    return (
        <div id="floating-button" className="group fixed bottom-6 right-6 z-50 flex items-center
                              opacity-0 translate-y-3 pointer-events-none
                              transition-all duration-300" ref={buttonRef}>

            {/* Label muncul saat hover (desktop) */}
            <span className="absolute right-full mr-3 whitespace-nowrap
                 bg-navy text-white text-xs font-mono px-3 py-2 rounded-lg
                 opacity-0 translate-x-2 pointer-events-none
                 transition-all duration-300
                 group-hover:opacity-100 group-hover:translate-x-0">
                Go Top Page
            </span>

            <a href="#home"
                className="relative w-14 h-14 rounded-full bg-accent-gradient text-white
              shadow-lg shadow-indigo/30 flex items-center justify-center
              transition-transform duration-300 hover:scale-110">

                {/* Ring ping di belakang */}
                <span className="fab-ping absolute inset-0 rounded-full bg-accent-gradient"></span>

                <svg className="relative w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            </a>
        </div>
    )
}
"use client";

import { useTheme } from "next-themes";

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();


    const isDark = theme === "dark";

    return (
        <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="
        flex h-10 w-10 items-center justify-center
        rounded-full
        bg-gray-100
        text-gray-700
        transition-all
        duration-300
        hover:bg-gray-200
        dark:bg-gray-800
        dark:text-gray-200
        dark:hover:bg-gray-700
      "
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            {isDark ? (
                // ☀️ SUN
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                </svg>
            ) : (
                // 🌙 MOON
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M20.985 12.486A9 9 0 1 1 11.514 3.015 7 7 0 0 0 20.985 12.486Z" />
                </svg>
            )}
        </button>
    );
}
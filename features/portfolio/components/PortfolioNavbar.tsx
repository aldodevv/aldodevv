"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PortfolioNavbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 pointer-events-none">
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`pointer-events-auto flex items-center justify-between gap-6 px-5 py-2.5 max-w-4xl w-full border border-[#eaeaea] rounded-full transition-all duration-300 ${
                    isScrolled
                        ? "bg-[#ffffff]/90 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
                        : "bg-[#ffffff]/70 backdrop-blur-sm"
                }`}
            >
                {/* Brand / Name */}
                <Link
                    href="/"
                    className="flex items-center gap-2 text-sm font-mono font-medium text-[#111111] hover:opacity-80 transition-opacity"
                >
                    <span className="w-2 h-2 rounded-full bg-[#111111]" />
                    <span>aldodevv</span>
                </Link>

                {/* Navigation Links */}
                <ul className="hidden md:flex items-center gap-6 text-xs font-medium tracking-wide uppercase text-[#787774]">
                    {[
                        { label: "Profile", id: "Hero", path: "/" },
                        { label: "About", id: "PortfolioAbout", path: "/about" },
                        { label: "Stack", id: "TechStack", path: "/tech-stack" },
                        { label: "Experience", id: "WorkExperience", path: "/experience" },
                    ].map((item) => (
                        <li key={item.label}>
                            <Link
                                href={item.path}
                                onClick={(e) => {
                                    const el = document.getElementById(item.id);
                                    if (el) {
                                        e.preventDefault();
                                        el.scrollIntoView({ behavior: "smooth" });
                                    }
                                }}
                                className="hover:text-[#111111] transition-colors py-1 inline-block"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right Side: Status Tag & Social Links */}
                <div className="flex items-center gap-3">
                    <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono tag-pastel-green">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#346538] animate-pulse" />
                        <span>Available</span>
                    </div>

                    <div className="flex items-center gap-2 text-[#787774]">
                        <a
                            href="https://github.com/aldodevv"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-md hover:text-[#111111] hover:bg-[#f7f6f3] transition-all"
                            aria-label="GitHub Profile"
                        >
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                            </svg>
                        </a>
                        <a
                            href="https://linkedin.com/in/aldodevv"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-md hover:text-[#111111] hover:bg-[#f7f6f3] transition-all"
                            aria-label="LinkedIn Profile"
                        >
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect x="2" y="9" width="4" height="12" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>
                    </div>
                </div>
            </motion.nav>
        </header>
    );
}

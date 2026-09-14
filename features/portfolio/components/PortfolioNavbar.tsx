"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

type NavTheme = "dark-full" | "light-pill" | "dark-pill" | "transparent";

export default function PortfolioNavbar() {
    const [theme, setTheme] = useState<NavTheme>("transparent");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            const sections = document.querySelectorAll<HTMLElement>("[data-nav-theme]");
            let currentTheme: NavTheme = "transparent";

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) {
                    currentTheme = section.getAttribute("data-nav-theme") as NavTheme;
                }
            });

            setTheme(currentTheme);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const getNavbarStyles = () => {
        switch (theme) {
            case "dark-full":
                return "bg-[#ffd54f] text-black w-full rounded-none border-b-4 border-black top-0 mt-0 shadow-sm";
            case "light-pill":
                return "bg-white text-black w-[95%] md:w-[80%] max-w-5xl mx-auto rounded-none shadow-[6px_6px_0px_0px_#000000] border-4 border-black top-4 mt-0";
            case "dark-pill":
                return "bg-[#b088f9] text-black w-[95%] md:w-[80%] max-w-5xl mx-auto rounded-none shadow-[6px_6px_0px_0px_#000000] border-4 border-black top-4 mt-0";
            case "transparent":
            default:
                return isScrolled
                    ? "bg-white text-black w-full rounded-none border-b-4 border-black top-0 mt-0 shadow-sm"
                    : "bg-transparent text-black w-full rounded-none border-b-4 border-transparent top-0 mt-0";
        }
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <motion.nav
                layout
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "pointer-events-auto flex items-center justify-between px-6 md:px-10 py-4 overflow-hidden transition-colors duration-500 font-sans",
                    getNavbarStyles()
                )}
            >
                <motion.div
                    layout="position"
                    className="font-black text-2xl tracking-tight flex items-center gap-2 font-sans text-black"
                >
                    {/* Neo-Brutalist Triangle Logo */}
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                        className="transition-colors duration-500 text-black fill-[#ffd54f]"
                    >
                        <path d="M12 4L4 20h16L12 4z" />
                    </svg>
                    ALDODEVV
                </motion.div>

                <motion.ul
                    layout="position"
                    className="hidden md:flex items-center gap-8 text-lg font-black font-sans"
                >
                    <AnimatePresence mode="popLayout">
                        {[
                            { label: "Me", id: "Hero", path: "/" },
                            { label: "About", id: "PortfolioAbout", path: "/about" },
                            { label: "Tech Stack", id: "TechStack", path: "/tech-stack" },
                            { label: "Experience", id: "WorkExperience", path: "/experience" },
                        ].map((item, i) => {
                            const isHero = theme === "transparent" && !isScrolled;

                            return (
                                <motion.li
                                    key={item.label}
                                    layout
                                    initial={isHero ? false : { opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: isHero ? 0 : i * 0.1,
                                        ease: "easeOut"
                                    }}
                                    className="list-none"
                                >
                                    <Link
                                        href={item.path}
                                        onClick={(e) => {
                                            const element = document.getElementById(item.id);
                                            if (element) {
                                                e.preventDefault();
                                                element.scrollIntoView({ behavior: "smooth" });
                                            }
                                        }}
                                        className="cursor-pointer text-black hover:text-[#ff5e5e] uppercase transition-all duration-350 relative group flex items-center gap-1 font-sans font-black"
                                    >
                                        <span className="opacity-0 group-hover:opacity-100 text-[#ff5e5e] transition-opacity font-sans text-xs">►</span>
                                        <span>{item.label}</span>
                                    </Link>
                                </motion.li>
                            );
                        })}
                    </AnimatePresence>
                </motion.ul>

                <motion.div layout="position" className="flex items-center gap-4 md:gap-5 text-black">
                    <a href="https://github.com/aldodevv" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff5e5e] hover:scale-110 transition-all duration-300">
                        <Github className="w-5 h-5 stroke-[2.5]" />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a href="https://linkedin.com/in/aldodevv" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff5e5e] hover:scale-110 transition-all duration-300">
                        <Linkedin className="w-5 h-5 stroke-[2.5]" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href="https://instagram.com/aldodevv" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff5e5e] hover:scale-110 transition-all duration-300">
                        <Instagram className="w-5 h-5 stroke-[2.5]" />
                        <span className="sr-only">Instagram</span>
                    </a>
                </motion.div>
            </motion.nav>
        </div>
    );
}

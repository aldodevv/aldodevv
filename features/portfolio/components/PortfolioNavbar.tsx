"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Instagram } from "lucide-react";

type NavTheme = "dark-full" | "light-pill" | "dark-pill" | "transparent";

export default function PortfolioNavbar() {
    const [theme, setTheme] = useState<NavTheme>("transparent");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if scrolled passing first section
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
                return "bg-black text-white w-full rounded-none border-b-4 border-primary top-0 mt-0";
            case "light-pill":
                return "bg-white text-black w-[95%] md:w-[80%] max-w-5xl mx-auto rounded-none shadow-[6px_6px_0px_0px_#4502FF] border-4 border-black top-4 mt-0";
            case "dark-pill":
                return "bg-black text-white w-[95%] md:w-[80%] max-w-5xl mx-auto rounded-none shadow-[6px_6px_0px_0px_#FFDA14] border-4 border-primary top-4 mt-0";
            case "transparent":
            default:
                return isScrolled
                    ? "bg-black text-white w-full rounded-none border-b-4 border-secondary top-0 mt-0"
                    : "bg-transparent text-white w-full rounded-none border-b-4 border-transparent top-0 mt-0";
        }
    };

    const getLogoColor = () => {
        if (theme === "light-pill") return "text-black";
        return "text-secondary";
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
                    className={cn("font-bold text-2xl tracking-widest flex items-center gap-2 font-sans", getLogoColor())}
                >
                    {/* Mock Logo */}
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-colors duration-500 text-secondary"
                    >
                        <path d="M12 4L4 20h16L12 4z" />
                    </svg>
                    ALDODEVV
                </motion.div>

                <motion.ul
                    layout="position"
                    className="hidden md:flex items-center gap-8 text-2xl font-normal font-sans"
                >
                    <AnimatePresence mode="popLayout">
                        {[
                            { label: "Me", id: "Hero" },
                            { label: "About", id: "PortfolioAbout" },
                            { label: "Tech Stack", id: "TechStack" },
                            { label: "Experience", id: "WorkExperience" },
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
                                    onClick={() => {
                                        const element = document.getElementById(item.id);
                                        if (element) {
                                            element.scrollIntoView({ behavior: "smooth" });
                                        }
                                    }}
                                    className={cn(
                                        "cursor-pointer hover:text-secondary uppercase transition-all duration-300 relative group flex items-center gap-1 font-sans",
                                        theme === "light-pill" ? "text-black hover:text-primary" : "text-white"
                                    )}
                                >
                                    <span className="opacity-0 group-hover:opacity-100 text-secondary transition-opacity font-sans text-xl">►</span>
                                    <span>{item.label}</span>
                                </motion.li>
                            );
                        })}
                    </AnimatePresence>
                </motion.ul>

                <motion.div layout="position" className={cn("flex items-center gap-4 md:gap-5", getLogoColor())}>
                    <a href="https://github.com/aldodevv" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all duration-300">
                        <Github className="w-6 h-6" />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a href="https://linkedin.com/in/aldodevv" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all duration-300">
                        <Linkedin className="w-6 h-6" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href="https://instagram.com/aldodevv" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-all duration-300">
                        <Instagram className="w-6 h-6" />
                        <span className="sr-only">Instagram</span>
                    </a>
                </motion.div>
            </motion.nav>
        </div>
    );
}

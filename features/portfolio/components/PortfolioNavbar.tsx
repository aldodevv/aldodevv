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
                return "bg-neutral-950 text-white w-full rounded-none border-b border-white/10 top-0 mt-0";
            case "light-pill":
                return "bg-white/90 backdrop-blur-md text-neutral-900 w-[90%] md:w-[70%] max-w-4xl mx-auto rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-neutral-200 top-6 mt-0";
            case "dark-pill":
                return "bg-neutral-900/90 backdrop-blur-md text-white w-[90%] md:w-[70%] max-w-4xl mx-auto rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.4)] border border-neutral-700 top-6 mt-0";
            case "transparent":
            default:
                return isScrolled
                    ? "bg-white/80 backdrop-blur-md text-neutral-900 w-full rounded-none border-b border-neutral-200 top-0 mt-0"
                    : "bg-transparent text-white w-full rounded-none border-b border-transparent top-0 mt-0";
        }
    };

    const getLogoColor = () => {
        if (theme === "transparent" && !isScrolled) return "text-white";
        if (theme === "dark-full" || theme === "dark-pill") return "text-white";
        return "text-black";
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <motion.nav
                layout
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "pointer-events-auto flex items-center justify-between px-6 md:px-10 py-4 overflow-hidden transition-colors duration-500",
                    getNavbarStyles()
                )}
            >
                <motion.div
                    layout="position"
                    className={cn("font-bold text-sm tracking-tighter flex items-center gap-2", getLogoColor())}
                >
                    {/* Mock Logo */}
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-colors duration-500"
                    >
                        <path d="M12 4L4 20h16L12 4z" />
                    </svg>
                    ALDODEVV
                </motion.div>

                <motion.ul
                    layout="position"
                    className="hidden md:flex items-center gap-8 text-sm font-medium"
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
                                    initial={isHero ? false : { opacity: 0, y: 10, filter: "blur(4px)" }}
                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
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
                                        "cursor-pointer hover:opacity-70 transition-all duration-300 relative group",
                                        getLogoColor() // match logo text color behavior
                                    )}
                                >
                                    {item.label}
                                    <span className="ml-1 text-[10px] inline-block align-middle transition-transform duration-300 group-hover:rotate-180">▼</span>

                                    {/* Hover underline effect only active on scrolled sections */}
                                    {!isHero && (
                                        <motion.div
                                            className="absolute -bottom-1 left-0 right-0 h-[2px] bg-current origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                                        />
                                    )}
                                </motion.li>
                            );
                        })}
                    </AnimatePresence>
                </motion.ul>

                <motion.div layout="position" className={cn("flex items-center gap-4 md:gap-5", getLogoColor())}>
                    <a href="https://github.com/aldodevv" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 hover:scale-110 transition-all duration-300">
                        <Github className="w-5 h-5" />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a href="https://linkedin.com/in/aldodevv" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 hover:scale-110 transition-all duration-300">
                        <Linkedin className="w-5 h-5" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href="https://instagram.com/aldodevv" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 hover:scale-110 transition-all duration-300">
                        <Instagram className="w-5 h-5" />
                        <span className="sr-only">Instagram</span>
                    </a>
                </motion.div>
            </motion.nav>
        </div>
    );
}

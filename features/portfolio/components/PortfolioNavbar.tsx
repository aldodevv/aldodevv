"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function PortfolioNavbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("Hero");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);

            const sections = ["Hero", "PortfolioAbout", "TechStack", "WorkExperience"];
            for (const id of sections) {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { label: "Home", id: "Hero" },
        { label: "About", id: "PortfolioAbout" },
        { label: "Stack", id: "TechStack" },
        { label: "Experience", id: "WorkExperience" },
    ];

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none">
            <motion.nav
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                className={`pointer-events-auto flex items-center justify-between gap-4 md:gap-8 px-5 md:px-7 py-3 md:py-3.5 rounded-full transition-all duration-300 ${
                    isScrolled
                        ? "bg-[#fefefc]/90 backdrop-blur-md border border-[var(--color-rule)] shadow-[0_8px_24px_-6px_rgba(20,20,30,0.12)]"
                        : "bg-[#fefefc] border border-[var(--color-rule)] shadow-[0_4px_16px_-4px_rgba(20,20,30,0.08)]"
                }`}
            >
                {/* Brand Logo with Authentic User Logo */}
                <button
                    onClick={() => scrollTo("Hero")}
                    className="flex items-center gap-2.5 group text-left cursor-pointer"
                >
                    <div className="w-8 h-8 rounded-full bg-[var(--color-paper-2)] flex items-center justify-center border border-[var(--color-rule)] overflow-hidden p-1 shadow-xs group-hover:scale-105 transition-transform duration-200">
                        <Image
                            src="/assets/logo.png"
                            alt="aldodevv"
                            width={24}
                            height={24}
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <span className="font-semibold text-base md:text-lg text-[var(--color-ink)] tracking-tight">
                        aldodevv
                    </span>
                </button>

                {/* Navigation Pills */}
                <ul className="flex items-center gap-1 md:gap-2">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <li key={item.id}>
                                <button
                                    onClick={() => scrollTo(item.id)}
                                    className={`relative px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                                        isActive
                                            ? "text-[var(--color-ink)] bg-[var(--color-accent)] shadow-[0_2px_0_0_var(--color-accent-deep)]"
                                            : "text-[var(--color-muted)] hover:text-[var(--color-ink)] hover:bg-[var(--color-paper-2)]"
                                    }`}
                                >
                                    {item.label}
                                </button>
                            </li>
                        );
                    })}
                </ul>

                {/* Social Links as tactile mini-pills */}
                <div className="hidden sm:flex items-center gap-2 border-l border-[var(--color-rule)] pl-3">
                    <a
                        href="https://github.com/aldodevv"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="w-8 h-8 rounded-full bg-[var(--color-card)] hover:bg-[var(--color-paper-2)] border border-[var(--color-rule)] flex items-center justify-center text-[var(--color-ink)] hover:translate-y-[-1px] transition-all"
                    >
                        <Github className="w-4 h-4" />
                    </a>
                    <a
                        href="https://linkedin.com/in/aldodevv"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="w-8 h-8 rounded-full bg-[var(--color-card)] hover:bg-[var(--color-paper-2)] border border-[var(--color-rule)] flex items-center justify-center text-[var(--color-accent-2)] hover:translate-y-[-1px] transition-all"
                    >
                        <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                        href="https://instagram.com/aldodevv"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                        className="w-8 h-8 rounded-full bg-[var(--color-card)] hover:bg-[var(--color-paper-2)] border border-[var(--color-rule)] flex items-center justify-center text-[var(--color-accent-3)] hover:translate-y-[-1px] transition-all"
                    >
                        <Instagram className="w-4 h-4" />
                    </a>
                </div>
            </motion.nav>
        </header>
    );
}

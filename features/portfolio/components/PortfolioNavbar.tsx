"use client";

import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Terminal } from "lucide-react";
import Link from "next/link";

export default function PortfolioNavbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("Hero");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const sections = ["Hero", "PortfolioAbout", "TechStack", "WorkExperience"];
            for (const sectionId of sections) {
                const el = document.getElementById(sectionId);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
            <div className="w-full border-b border-[#262626] bg-[#0a0a0a]/90 backdrop-blur-md pointer-events-auto transition-colors duration-200">
                <div className="max-w-7xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between font-mono text-xs tracking-wider">
                    {/* Brand / System Identity */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="#Hero"
                            className="flex items-center gap-2 text-[#eaeaea] font-bold hover:text-[#ff2a2a] transition-colors"
                        >
                            <Terminal className="w-4 h-4 text-[#ff2a2a]" />
                            <span className="uppercase tracking-widest">[ ALDO // SYS.ENG ]</span>
                        </Link>
                        <div className="hidden sm:flex items-center gap-2 px-2 py-0.5 border border-[#262626] bg-[#121212] text-[#888888]">
                            <span className="w-1.5 h-1.5 bg-[#4af626] animate-pulse" />
                            <span className="text-[10px] text-[#4af626]">SYS.NOMINAL</span>
                        </div>
                    </div>

                    {/* Navigation Subsystems */}
                    <nav className="hidden md:flex items-center gap-1 border-x border-[#262626] px-2 h-full">
                        {[
                            { id: "Hero", label: "[ 00 // ROOT ]" },
                            { id: "PortfolioAbout", label: "[ 01 // DOSSIER ]" },
                            { id: "TechStack", label: "[ 02 // MATRIX ]" },
                            { id: "WorkExperience", label: "[ 03 // LOGS ]" },
                        ].map((item) => {
                            const isActive = activeSection === item.id;
                            return (
                                <Link
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className={`px-3 py-1.5 transition-colors uppercase ${
                                        isActive
                                            ? "bg-[#eaeaea] text-[#0a0a0a] font-bold"
                                            : "text-[#888888] hover:text-[#eaeaea] hover:bg-[#1a1a1a]"
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Action Telemetry & Socials */}
                    <div className="flex items-center gap-2">
                        <a
                            href="https://github.com/aldodevv"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Telemetry"
                            className="w-8 h-8 flex items-center justify-center border border-[#262626] bg-[#121212] text-[#888888] hover:text-[#eaeaea] hover:border-[#eaeaea] hover:bg-[#1a1a1a] transition-colors"
                        >
                            <Github className="w-3.5 h-3.5" />
                        </a>
                        <a
                            href="https://linkedin.com/in/akhmad-aldo"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Telemetry"
                            className="w-8 h-8 flex items-center justify-center border border-[#262626] bg-[#121212] text-[#888888] hover:text-[#eaeaea] hover:border-[#eaeaea] hover:bg-[#1a1a1a] transition-colors"
                        >
                            <Linkedin className="w-3.5 h-3.5" />
                        </a>
                        <a
                            href="mailto:akhmadaldo3@gmail.com"
                            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#ff2a2a] bg-[#ff2a2a]/10 text-[#ff2a2a] hover:bg-[#ff2a2a] hover:text-[#0a0a0a] font-bold text-[11px] transition-colors uppercase"
                        >
                            <Mail className="w-3 h-3" />
                            <span>TRANSMIT</span>
                        </a>
                    </div>
                </div>
            </div>
            {/* Top edge sub-indicator */}
            <div className="w-full bg-[#121212] border-b border-[#1f1f1f] h-5 hidden lg:flex items-center justify-between px-8 text-[9px] text-[#555555] font-mono select-none">
                <span>SECURITY_LEVEL: DECLASSIFIED // CLEARANCE: LV-4</span>
                <span>TIME_REF: UTC+7 // PROTOCOL: HTTP/3</span>
                <span>BUILD: 2026.09-REV2</span>
            </div>
        </header>
    );
}

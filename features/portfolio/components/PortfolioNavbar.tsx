"use client";

import React, { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Terminal, Compass, FileText } from "lucide-react";
import Link from "next/link";
import { useTacticalWorld, WindowId } from "../context/TacticalWorldContext";

export default function PortfolioNavbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("Hero");
    const { mode, toggleMode, openWindow, setMode } = useTacticalWorld();

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

    const handleNavClick = (sectionId: string, windowId?: WindowId) => {
        if (mode === "map" && windowId) {
            openWindow(windowId);
        } else {
            if (mode === "map") {
                setMode("dossier");
            }
            const el = document.getElementById(sectionId);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
            <div className="w-full border-b border-[#262626] bg-[#0a0a0a]/90 backdrop-blur-md pointer-events-auto transition-colors duration-200">
                <div className="max-w-7xl mx-auto px-4 md:px-8 h-14 flex items-center justify-between font-mono text-xs tracking-wider">
                    {/* Brand / System Identity */}
                    <div className="flex items-center gap-3 sm:gap-4">
                        <button
                            type="button"
                            onClick={() => {
                                if (mode === "map") {
                                    openWindow("about");
                                } else {
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                                }
                            }}
                            className="flex items-center gap-2 text-[#eaeaea] font-bold hover:text-[#ff2a2a] transition-colors text-left"
                        >
                            <Terminal className="w-4 h-4 text-[#ff2a2a]" />
                            <span className="uppercase tracking-widest">[ ALDO // SYS.ENG ]</span>
                        </button>
                        <div className="hidden sm:flex items-center gap-2 px-2 py-0.5 border border-[#262626] bg-[#121212] text-[#888888]">
                            <span className="w-1.5 h-1.5 bg-[#4af626] animate-pulse" />
                            <span className="text-[10px] text-[#4af626]">
                                {mode === "map" ? "MAP.ONLINE" : "DOCS.ONLINE"}
                            </span>
                        </div>
                    </div>

                    {/* Navigation Subsystems */}
                    <nav className="hidden lg:flex items-center gap-1 border-x border-[#262626] px-2 h-full">
                        {[
                            { id: "Hero", windowId: "about" as WindowId, label: "[ 00 // ROOT ]" },
                            { id: "PortfolioAbout", windowId: "about" as WindowId, label: "[ 01 // DOSSIER ]" },
                            { id: "TechStack", windowId: "skills" as WindowId, label: "[ 02 // MATRIX ]" },
                            { id: "WorkExperience", windowId: "experience" as WindowId, label: "[ 03 // LOGS ]" },
                        ].map((item) => {
                            const isActive = mode === "dossier" && activeSection === item.id;
                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => handleNavClick(item.id, item.windowId)}
                                    className={`px-3 py-1.5 transition-colors uppercase cursor-pointer ${
                                        isActive
                                            ? "bg-[#eaeaea] text-[#0a0a0a] font-bold"
                                            : "text-[#888888] hover:text-[#eaeaea] hover:bg-[#1a1a1a]"
                                    }`}
                                >
                                    {item.label}
                                </button>
                            );
                        })}
                    </nav>

                    {/* Action Telemetry & Mode Toggle */}
                    <div className="flex items-center gap-2">
                        {/* Interactive Mode Toggle Button */}
                        <button
                            type="button"
                            onClick={toggleMode}
                            className={`px-2.5 py-1.5 border font-mono text-[11px] font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                                mode === "map"
                                    ? "border-[#4af626] bg-[#4af626]/10 text-[#4af626] hover:bg-[#4af626] hover:text-black"
                                    : "border-[#ff2a2a] bg-[#ff2a2a]/10 text-[#ff2a2a] hover:bg-[#ff2a2a] hover:text-black"
                            }`}
                            title="Toggle Mode"
                        >
                            {mode === "map" ? (
                                <>
                                    <FileText className="w-3.5 h-3.5" />
                                    <span className="hidden sm:inline">DOCS VIEW</span>
                                    <span className="sm:hidden">DOCS</span>
                                </>
                            ) : (
                                <>
                                    <Compass className="w-3.5 h-3.5" />
                                    <span className="hidden sm:inline">MAP WORLD</span>
                                    <span className="sm:hidden">MAP</span>
                                </>
                            )}
                        </button>

                        {/* Terminal Button */}
                        <button
                            type="button"
                            onClick={() => openWindow("terminal")}
                            className="w-8 h-8 flex items-center justify-center border border-[#262626] bg-[#121212] text-[#888888] hover:text-[#39ff14] hover:border-[#39ff14] hover:bg-[#1a1a1a] transition-colors"
                            title="Launch Interactive Terminal"
                        >
                            <Terminal className="w-3.5 h-3.5" />
                        </button>

                        {/* Social Links */}
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
                        <button
                            type="button"
                            onClick={() => openWindow("contact")}
                            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#ff2a2a] bg-[#ff2a2a]/10 text-[#ff2a2a] hover:bg-[#ff2a2a] hover:text-[#0a0a0a] font-bold text-[11px] transition-colors uppercase"
                        >
                            <Mail className="w-3 h-3" />
                            <span>TRANSMIT</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Top edge sub-indicator */}
            <div className="w-full bg-[#121212] border-b border-[#1f1f1f] h-5 hidden lg:flex items-center justify-between px-8 text-[9px] text-[#555555] font-mono select-none">
                <span>SECURITY_LEVEL: DECLASSIFIED // CLEARANCE: LV-4</span>
                <span>
                    MODE: {mode === "map" ? "TACTICAL EXPLORATION WORLD" : "STANDALONE DOSSIER DOCUMENT"}
                </span>
                <span>BUILD: 2026.09-GAMIFIED-REV</span>
            </div>
        </header>
    );
}

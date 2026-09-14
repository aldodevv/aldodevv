"use client";

import React, { useState } from "react";
import { ArrowRight, Terminal, ShieldAlert, Cpu, HardDrive, Activity, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
    const [systemActive, setSystemActive] = useState(true);

    return (
        <section
            id="Hero"
            className="relative w-full min-h-screen pt-24 pb-16 px-4 md:px-8 flex flex-col justify-between border-b border-[#262626] bg-[#0a0a0a]"
        >
            <div className="max-w-7xl w-full mx-auto flex flex-col gap-10">
                {/* 1. Header Telemetry Bar */}
                <div className="w-full border border-[#262626] bg-[#121212] p-3 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono tracking-wider text-[#888888]">
                    <div className="flex items-center gap-3">
                        <span className="text-[#ff2a2a] font-bold">[ SPEC // 2026-SYS ]</span>
                        <span className="hidden sm:inline text-[#444444]">|</span>
                        <span>REG: ID-ALDO-001</span>
                        <span className="hidden sm:inline text-[#444444]">|</span>
                        <span className="text-[#eaeaea]">CLASS: UNRESTRICTED</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 bg-[#4af626]" />
                            <span className="text-[#4af626]">GRID: SYNCHRONIZED</span>
                        </div>
                        <span className="text-[#555555]">COORD: 06°12'S 106°50'E</span>
                    </div>
                </div>

                {/* 2. Monolithic Macro-Typography Header */}
                <div className="flex flex-col gap-4 border-l-2 border-[#ff2a2a] pl-4 md:pl-8">
                    <div className="text-xs md:text-sm font-mono tracking-[0.2em] text-[#ff2a2a] uppercase flex items-center gap-2">
                        <span>/// PRIMARY DIRECTIVE: SYSTEMS ARCHITECTURE & DEVELOPMENT</span>
                    </div>
                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-sans tracking-[-0.05em] uppercase text-[#eaeaea] leading-[0.88] select-none">
                        AKHMAD<br />
                        <span className="text-[#888888] hover:text-[#eaeaea] transition-colors">ALDO</span>
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 mt-2">
                        <span className="bg-[#1a1a1a] border border-[#333333] px-3 py-1 font-mono text-xs uppercase tracking-wider text-[#eaeaea]">
                            [ MOBILE & FULLSTACK ENGINEER ]
                        </span>
                        <span className="text-[#888888] font-mono text-xs tracking-widest uppercase">
                            FLUTTER // REACT NATIVE // KOTLIN // SWIFT // NEXT.JS
                        </span>
                    </div>
                </div>

                {/* 3. Compartmentalized Telemetry Grid (Mathematical 1px Borders) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-[#262626] border border-[#262626]">
                    {/* Mission Briefing */}
                    <div className="md:col-span-7 bg-[#121212] p-6 md:p-8 flex flex-col justify-between gap-6">
                        <div className="flex items-center justify-between border-b border-[#222222] pb-3 text-xs font-mono text-[#888888]">
                            <span>[ 01 // OPERATIONAL BRIEF ]</span>
                            <span className="text-[#ff2a2a]">SYS.STMT</span>
                        </div>
                        <p className="text-base md:text-lg font-mono text-[#cccccc] leading-relaxed">
                            Specializing in the design and deployment of high-throughput mobile applications, resilient backend microservices, and performance-critical web architectures. Dedicated to clean abstractions, robust security models, and deterministic execution.
                        </p>
                        <div className="flex flex-wrap gap-3 pt-2">
                            <Link
                                href="#PortfolioAbout"
                                className="industrial-btn industrial-btn-hazard flex items-center gap-2 font-bold"
                            >
                                <span>INSPECT DOSSIER</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                            <Link
                                href="#TechStack"
                                className="industrial-btn flex items-center gap-2"
                            >
                                <span>SUBSYSTEM SPECS</span>
                            </Link>
                            <a
                                href="https://github.com/aldodevv"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="industrial-btn flex items-center gap-2 text-[#888888]"
                            >
                                <span>REPOSITORY</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>

                    {/* Telemetry Readouts */}
                    <div className="md:col-span-5 bg-[#0e0e0e] p-6 md:p-8 flex flex-col justify-between gap-6">
                        <div className="flex items-center justify-between border-b border-[#222222] pb-3 text-xs font-mono text-[#888888]">
                            <span>[ 02 // TELEMETRY PARAMETERS ]</span>
                            <span className="text-[#4af626]">LIVE_MONITOR</span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 font-mono">
                            <div className="border border-[#222222] bg-[#141414] p-3">
                                <div className="text-[10px] text-[#666666] uppercase mb-1">EXP_TIMELINE</div>
                                <div className="text-2xl font-bold text-[#eaeaea]">05+ YRS</div>
                                <div className="text-[9px] text-[#888888] mt-1">ENGINEERING DEPTH</div>
                            </div>
                            <div className="border border-[#222222] bg-[#141414] p-3">
                                <div className="text-[10px] text-[#666666] uppercase mb-1">PROD_DEPLOYMENTS</div>
                                <div className="text-2xl font-bold text-[#eaeaea]">30+</div>
                                <div className="text-[9px] text-[#888888] mt-1">CROSS-PLATFORM</div>
                            </div>
                            <div className="border border-[#222222] bg-[#141414] p-3">
                                <div className="text-[10px] text-[#666666] uppercase mb-1">SECURITY_RATING</div>
                                <div className="text-2xl font-bold text-[#4af626]">HARDENED</div>
                                <div className="text-[9px] text-[#888888] mt-1">ROOT/SSL DEFENSE</div>
                            </div>
                            <div className="border border-[#222222] bg-[#141414] p-3">
                                <div className="text-[10px] text-[#666666] uppercase mb-1">AVAILABILITY</div>
                                <div className="text-2xl font-bold text-[#ff2a2a]">ACTIVE</div>
                                <div className="text-[9px] text-[#888888] mt-1">CONTRACT / FULLTIME</div>
                            </div>
                        </div>

                        {/* Barcode Strip */}
                        <div className="border-t border-[#222222] pt-4 flex flex-col gap-1 font-mono text-[9px] text-[#555555]">
                            <div className="h-6 w-full flex items-stretch gap-[2px] opacity-70">
                                {[4,2,6,1,3,5,2,4,7,1,3,2,6,4,2,5,3,1,4,6,2,3,5,1,4,2,6,3,5,1,4,2,7,1,3,4,2,6].map((w, i) => (
                                    <div key={i} className="bg-[#eaeaea]" style={{ width: `${w}px` }} />
                                ))}
                            </div>
                            <div className="flex justify-between tracking-widest text-[#666666]">
                                <span>BARCODE // 89472-ALDO-2026</span>
                                <span>CHK: OK</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Marquee Operational Tape */}
            <div className="w-full mt-10 border-t border-b border-[#262626] bg-[#121212] py-2 overflow-hidden flex items-center select-none font-mono text-xs tracking-widest text-[#888888]">
                <div className="flex gap-8 whitespace-nowrap animate-marquee">
                    <span className="text-[#ff2a2a]">/// HAZARD LEVEL: CONTROLLED</span>
                    <span>[ DEPLOYMENT PROTOCOL: ACTIVE ]</span>
                    <span>KERNEL: NEXTJS-TURBOPACK</span>
                    <span>ARCH: CLIENT-FIRST / EDGE READY</span>
                    <span className="text-[#4af626]">[ STATUS: ALL SUBSYSTEMS NOMINAL ]</span>
                    <span>LOCATION: JAKARTA / REMOTE</span>
                    <span className="text-[#ff2a2a]">/// HAZARD LEVEL: CONTROLLED</span>
                    <span>[ DEPLOYMENT PROTOCOL: ACTIVE ]</span>
                    <span>KERNEL: NEXTJS-TURBOPACK</span>
                    <span>ARCH: CLIENT-FIRST / EDGE READY</span>
                    <span className="text-[#4af626]">[ STATUS: ALL SUBSYSTEMS NOMINAL ]</span>
                </div>
            </div>
        </section>
    );
}
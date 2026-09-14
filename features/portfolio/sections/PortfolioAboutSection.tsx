"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, GraduationCap, Download, CheckCircle2, FileText, CornerDownRight } from "lucide-react";
import Link from "next/link";

export default function PortfolioAboutSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const aboutIntro =
        "Software Engineer with specialized experience in architecting robust cross-platform mobile systems and distributed web backends.";

    const aboutDetail =
        "Focused on high-performance architectures, strict state management, and hardened network security. Track record covers end-to-end execution from bare-metal API adapters and native SDK bridges to responsive, micro-animated user interfaces.";

    return (
        <section
            id="PortfolioAbout"
            ref={sectionRef}
            className="relative w-full bg-[#0a0a0a] text-[#eaeaea] py-24 px-4 md:px-8 border-b border-[#262626]"
        >
            <div className="max-w-7xl w-full mx-auto flex flex-col gap-12">
                {/* Section Telemetry Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#262626] pb-6">
                    <div>
                        <div className="text-xs font-mono text-[#ff2a2a] tracking-widest uppercase mb-1">
                            [ CLASSIFICATION // PERSONNEL ARCHIVE ]
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black font-sans tracking-tight uppercase text-[#eaeaea]">
                            DOSSIER // <span className="text-[#888888]">ALDO_SARI</span>
                        </h2>
                    </div>

                    <div className="flex items-center gap-3 font-mono text-xs text-[#888888]">
                        <div className="flex items-center gap-1.5 border border-[#262626] bg-[#121212] px-3 py-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#ff2a2a]" />
                            <span>STATION: DEPOK, ID [06°24'S 106°49'E]</span>
                        </div>
                        <div className="border border-[#ff2a2a] bg-[#ff2a2a]/10 text-[#ff2a2a] px-3 py-1.5 font-bold uppercase">
                            CLEARANCE: OK
                        </div>
                    </div>
                </div>

                {/* Main Dossier Grid (1px dividing lines) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-[#262626] border border-[#262626]">
                    {/* Left Column: Technical ID Photo & Identity Frame */}
                    <div className="md:col-span-4 bg-[#121212] p-6 flex flex-col justify-between gap-6">
                        <div>
                            <div className="flex items-center justify-between border-b border-[#222222] pb-2 font-mono text-[10px] text-[#888888] uppercase mb-4">
                                <span>[ PHOTO_ID // RECORD 091 ]</span>
                                <span className="text-[#4af626]">VERIFIED</span>
                            </div>

                            <div className="relative w-full aspect-[4/5] border border-[#333333] bg-[#0c0c0c] overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                                    alt="Akhmad Aldo Dossier Subject"
                                    className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                                />
                                <div className="absolute inset-0 pointer-events-none crt-scanlines opacity-50" />
                                
                                {/* Corner Reticles */}
                                <div className="absolute top-2 left-2 text-[10px] font-mono text-[#ff2a2a] leading-none">+</div>
                                <div className="absolute top-2 right-2 text-[10px] font-mono text-[#ff2a2a] leading-none">+</div>
                                <div className="absolute bottom-2 left-2 text-[10px] font-mono text-[#ff2a2a] leading-none">+</div>
                                <div className="absolute bottom-2 right-2 text-[10px] font-mono text-[#ff2a2a] leading-none">+</div>

                                <div className="absolute bottom-2 left-3 bg-[#0a0a0a]/90 border border-[#333333] px-2 py-0.5 font-mono text-[9px] text-[#eaeaea] uppercase">
                                    REF: SUBJECT_ALDO
                                </div>
                            </div>
                        </div>

                        {/* ID Verification Details */}
                        <div className="border border-[#222222] bg-[#0a0a0a] p-4 font-mono text-xs flex flex-col gap-2">
                            <div className="flex justify-between text-[#888888]">
                                <span>CODENAME:</span>
                                <span className="text-[#eaeaea]">ALDODEVV</span>
                            </div>
                            <div className="flex justify-between text-[#888888]">
                                <span>DESIGNATION:</span>
                                <span className="text-[#ff2a2a]">SYS.DEV</span>
                            </div>
                            <div className="flex justify-between text-[#888888]">
                                <span>AUTHENTICITY:</span>
                                <span className="text-[#4af626]">CONFIRMED</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Specification & Biographical Record */}
                    <div className="md:col-span-8 bg-[#0f0f0f] p-6 md:p-8 flex flex-col justify-between gap-8">
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center justify-between border-b border-[#222222] pb-2 font-mono text-[10px] text-[#888888] uppercase">
                                <span>[ DOSSIER SPECIFICATIONS // SHEET 01 ]</span>
                                <span>STATUS: ACTIVE_DUTY</span>
                            </div>

                            <div className="border-l-2 border-[#ff2a2a] pl-4 py-1">
                                <p className="text-xl md:text-2xl font-bold font-mono text-[#eaeaea] leading-snug">
                                    &quot;{aboutIntro}&quot;
                                </p>
                            </div>

                            <p className="text-sm md:text-base font-mono text-[#aaaaaa] leading-relaxed">
                                {aboutDetail}
                            </p>

                            {/* Telemetry Parameter Table */}
                            <div className="border border-[#222222] bg-[#141414] divide-y divide-[#222222] font-mono text-xs">
                                <div className="grid grid-cols-3 p-3 text-[#888888]">
                                    <span className="col-span-1 text-[#666666]">ACADEMIC CREDENTIAL</span>
                                    <span className="col-span-2 text-[#eaeaea] font-bold">
                                        Univ. Bina Sarana Informatika — Computer Science (Graduate)
                                    </span>
                                </div>
                                <div className="grid grid-cols-3 p-3 text-[#888888]">
                                    <span className="col-span-1 text-[#666666]">PRIMARY STACK</span>
                                    <span className="col-span-2 text-[#eaeaea]">
                                        Flutter, React Native, Next.js, Kotlin, Swift, Python, Go
                                    </span>
                                </div>
                                <div className="grid grid-cols-3 p-3 text-[#888888]">
                                    <span className="col-span-1 text-[#666666]">SYSTEM SPECIALTY</span>
                                    <span className="col-span-2 text-[#eaeaea]">
                                        Mobile Security, Offline Sync, Real-time Protocols, Micro-interactions
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Action / Document Export */}
                        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#222222]">
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="industrial-btn industrial-btn-hazard flex items-center gap-2 font-bold"
                            >
                                <Download className="w-4 h-4" />
                                <span>DOWNLOAD_DOSSIER.PDF</span>
                            </a>
                            <Link
                                href="#WorkExperience"
                                className="industrial-btn flex items-center gap-2 text-[#888888]"
                            >
                                <span>VIEW MISSION LOGS</span>
                                <CornerDownRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
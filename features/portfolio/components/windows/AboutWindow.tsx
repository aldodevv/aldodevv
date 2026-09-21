"use client";

import React from "react";
import { TacticalWindow } from "./TacticalWindow";
import { GraduationCap, Download, CheckCircle2 } from "lucide-react";

export const AboutWindow: React.FC = () => {
    return (
        <TacticalWindow
            id="about"
            title="PERSONNEL DOSSIER // AKHMAD ALDO"
            code="HQ // DOSSIER"
            defaultPosition={{ x: 20, y: 15 }}
            defaultWidth="w-[94vw] sm:w-[680px] md:w-[760px]"
        >
            <div className="flex flex-col gap-6">
                {/* ID Header Card */}
                <div className="flex flex-col sm:flex-row gap-5 p-4 bg-[#141414] border border-[#2a2a2a]">
                    <div className="relative w-28 h-36 flex-shrink-0 border border-[#333333] bg-[#0c0c0c] overflow-hidden self-center sm:self-start">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop"
                            alt="Akhmad Aldo"
                            className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                        />
                        <div className="absolute top-1 left-1 text-[8px] font-mono text-[#ff2a2a] leading-none">+</div>
                        <div className="absolute top-1 right-1 text-[8px] font-mono text-[#ff2a2a] leading-none">+</div>
                    </div>

                    <div className="flex-1 flex flex-col justify-between gap-3 font-mono">
                        <div>
                            <div className="flex items-center gap-2 text-xs text-[#888888]">
                                <span>REG NO: ID-ALDO-001</span>
                                <span className="text-[#333333]">|</span>
                                <span className="text-[#4af626] font-bold">STATUS: ACTIVE FIELD</span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-black font-sans text-[#eaeaea] tracking-tight uppercase mt-1">
                                Akhmad Aldo
                            </h3>
                            <p className="text-xs text-[#ff2a2a] uppercase tracking-wider font-semibold">
                                Senior Mobile & Fullstack Systems Engineer
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-[10px] text-[#aaaaaa] border-t border-[#262626] pt-2">
                            <div>
                                <span className="text-[#666666] block">DEPLOYMENT:</span>
                                <span>Bank Rakyat Indonesia (BRI)</span>
                            </div>
                            <div>
                                <span className="text-[#666666] block">LOCATION COORD:</span>
                                <span>Depok, ID [06&deg;24&apos;S 106&deg;49&apos;E]</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Briefing Narrative */}
                <div className="flex flex-col gap-3 font-mono text-xs leading-relaxed text-[#cccccc] bg-[#121212] p-4 border border-[#222222]">
                    <div className="text-[10px] tracking-widest text-[#ff2a2a] uppercase font-bold">
                        {"// OPERATIONAL SUMMARY"}
                    </div>
                    <p>
                        Software Engineer with specialized experience in architecting robust cross-platform mobile systems and distributed web backends.
                    </p>
                    <p className="text-[#888888]">
                        Proven track record delivering mission-critical corporate banking apps (QLola by BRI, QLola IB Token), high-scale media platforms (IDN Media), and headless social commerce engines. Hardened emphasis on clean architecture, native bridge optimization, and tamper-resistant security.
                    </p>
                </div>

                {/* Metric Telemetry */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <div className="border border-[#262626] bg-[#141414] p-3 text-center">
                        <span className="block font-sans text-2xl font-black text-[#4af626]">5+</span>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-[#777777]">Years In Ops</span>
                    </div>
                    <div className="border border-[#262626] bg-[#141414] p-3 text-center">
                        <span className="block font-sans text-2xl font-black text-[#eaeaea]">10M+</span>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-[#777777]">Users Reached</span>
                    </div>
                    <div className="border border-[#262626] bg-[#141414] p-3 text-center">
                        <span className="block font-sans text-2xl font-black text-[#00f0ff]">99.9%</span>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-[#777777]">SLA Uptime</span>
                    </div>
                    <div className="border border-[#262626] bg-[#141414] p-3 text-center">
                        <span className="block font-sans text-2xl font-black text-[#ff2a2a]">0</span>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-[#777777]">Critical Leaks</span>
                    </div>
                </div>

                {/* Core Directives Checklist */}
                <div className="border border-[#262626] bg-[#111111] p-4">
                    <div className="font-mono text-[10px] text-[#ff2a2a] tracking-widest uppercase font-bold mb-3">
                        [ FIELD COMPETENCIES & DIRECTIVES ]
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#bbbbbb]">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#4af626] flex-shrink-0" />
                            <span>Enterprise Banking Grade Security (SSL/Root/Obfuscation)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#4af626] flex-shrink-0" />
                            <span>High-Performance Flutter & React Native Engines</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#4af626] flex-shrink-0" />
                            <span>Native Android (Kotlin) & iOS (Swift) Bridge Plugins</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#4af626] flex-shrink-0" />
                            <span>Distributed Microservices & Serverless Next.js Backends</span>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#222222]">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-[#666666]">
                        <GraduationCap className="w-4 h-4 text-[#ff2a2a]" />
                        <span>B.Comp.Sc // Gunadarma University</span>
                    </div>

                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff2a2a] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#ff4444] transition-colors"
                    >
                        <Download className="w-3.5 h-3.5" />
                        <span>Export Dossier (CV)</span>
                    </a>
                </div>
            </div>
        </TacticalWindow>
    );
};

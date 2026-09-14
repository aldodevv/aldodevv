"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("akhmadaldo12@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section
            id="Hero"
            className="relative w-full pt-36 pb-24 md:pt-44 md:pb-32 px-6 flex flex-col items-center justify-center overflow-hidden"
        >
            <div className="max-w-5xl w-full mx-auto flex flex-col gap-12">
                
                {/* Meta Row: Availability & Location */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-wrap items-center justify-between gap-4 border-b border-[#eaeaea] pb-5 font-mono text-xs text-[#787774]"
                >
                    <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono tag-pastel-green">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#346538]" />
                            <span>Available for new projects</span>
                        </span>
                        <span className="hidden sm:inline text-[#d0d0ce]">/</span>
                        <span className="hidden sm:inline">Depok, Indonesia (UTC+7)</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span>v2026.03</span>
                        <span className="text-[#d0d0ce]">|</span>
                        <span>Mobile & Web Engineer</span>
                    </div>
                </motion.div>

                {/* Main Headline & Lead Paragraph */}
                <div className="flex flex-col gap-6 max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#111111] leading-[1.05] font-normal"
                    >
                        Building resilient mobile architectures & refined web software.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg md:text-xl text-[#787774] leading-relaxed max-w-3xl font-sans"
                    >
                        I am <span className="text-[#111111] font-medium">Akhmad Aldo (Aldo)</span>, a software engineer specialized in cross-platform mobile systems and responsive web platforms. Crafting secure, high-concurrency solutions for enterprise banking like Bank Rakyat Indonesia (QLola) and modern software teams.
                    </motion.p>
                </div>

                {/* Call-to-Action Group */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-wrap items-center gap-3 pt-2"
                >
                    <Link
                        href="#WorkExperience"
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("WorkExperience")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="btn-primary-minimal px-5 py-2.5 text-xs font-mono uppercase tracking-wider inline-flex items-center gap-2"
                    >
                        <span>View Work Experience</span>
                        <span className="text-[#999999]">↓</span>
                    </Link>

                    <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="btn-secondary-minimal px-4 py-2.5 text-xs font-mono text-[#111111] inline-flex items-center gap-2"
                    >
                        <span>{copied ? "Email Copied!" : "akhmadaldo12@gmail.com"}</span>
                        <kbd className="kbd-shortcut text-[10px]">C</kbd>
                    </button>

                    <a
                        href="https://github.com/aldodevv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary-minimal px-4 py-2.5 text-xs font-mono text-[#787774] hover:text-[#111111] inline-flex items-center gap-1.5"
                    >
                        <span>GitHub</span>
                        <span className="text-[10px]">↗</span>
                    </a>
                </motion.div>

                {/* Faux-OS Window Chrome Showcase Card */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="minimal-card overflow-hidden mt-4"
                >
                    {/* Window Titlebar */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-[#eaeaea] bg-[#ffffff]">
                        <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#eaeaea] border border-[#d8d8d8]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#eaeaea] border border-[#d8d8d8]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#eaeaea] border border-[#d8d8d8]" />
                        </div>
                        <div className="font-mono text-xs text-[#787774]">
                            overview.config.ts
                        </div>
                        <div className="w-10" />
                    </div>

                    {/* Window Content: Asymmetric Bento Grid Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#eaeaea] bg-white">
                        
                        {/* Cell 1: Mobile Engineering */}
                        <div className="p-6 md:p-8 flex flex-col justify-between gap-4">
                            <div className="flex items-center justify-between">
                                <span className="font-mono text-xs uppercase tracking-wider text-[#787774]">01 / Mobile</span>
                                <span className="tag-pastel-blue px-2 py-0.5 rounded-full text-[10px] font-mono font-medium uppercase tracking-wider">
                                    Core
                                </span>
                            </div>
                            <div>
                                <h3 className="font-sans font-medium text-base text-[#111111] mb-1">
                                    Cross-Platform & Native
                                </h3>
                                <p className="text-xs text-[#787774] leading-relaxed">
                                    Production systems built with Flutter, React Native, Kotlin, and Swift. Specialized in enterprise banking integration.
                                </p>
                            </div>
                            <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[11px] text-[#787774]">
                                <span className="bg-[#f7f6f3] px-2 py-0.5 rounded">Flutter</span>
                                <span className="bg-[#f7f6f3] px-2 py-0.5 rounded">React Native</span>
                                <span className="bg-[#f7f6f3] px-2 py-0.5 rounded">iOS/Android</span>
                            </div>
                        </div>

                        {/* Cell 2: Production Scale */}
                        <div className="p-6 md:p-8 flex flex-col justify-between gap-4">
                            <div className="flex items-center justify-between">
                                <span className="font-mono text-xs uppercase tracking-wider text-[#787774]">02 / Scale</span>
                                <span className="tag-pastel-green px-2 py-0.5 rounded-full text-[10px] font-mono font-medium uppercase tracking-wider">
                                    Enterprise
                                </span>
                            </div>
                            <div>
                                <h3 className="font-sans font-medium text-base text-[#111111] mb-1">
                                    Bank Rakyat Indonesia
                                </h3>
                                <p className="text-xs text-[#787774] leading-relaxed">
                                    Direct contributor to QLola Mobile and QLola IB Token, supporting multi-tier corporate transaction authorization.
                                </p>
                            </div>
                            <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[11px] text-[#787774]">
                                <span className="bg-[#f7f6f3] px-2 py-0.5 rounded">Security Hardening</span>
                                <span className="bg-[#f7f6f3] px-2 py-0.5 rounded">Biometric Auth</span>
                            </div>
                        </div>

                        {/* Cell 3: Modern Web Stack */}
                        <div className="p-6 md:p-8 flex flex-col justify-between gap-4">
                            <div className="flex items-center justify-between">
                                <span className="font-mono text-xs uppercase tracking-wider text-[#787774]">03 / Web</span>
                                <span className="tag-pastel-yellow px-2 py-0.5 rounded-full text-[10px] font-mono font-medium uppercase tracking-wider">
                                    Fullstack
                                </span>
                            </div>
                            <div>
                                <h3 className="font-sans font-medium text-base text-[#111111] mb-1">
                                    Next.js & Cloud Engines
                                </h3>
                                <p className="text-xs text-[#787774] leading-relaxed">
                                    Fast static & dynamic web rendering, strict TypeScript schemas, and Go/Node microservice backends.
                                </p>
                            </div>
                            <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[11px] text-[#787774]">
                                <span className="bg-[#f7f6f3] px-2 py-0.5 rounded">Next.js 16</span>
                                <span className="bg-[#f7f6f3] px-2 py-0.5 rounded">TypeScript</span>
                                <span className="bg-[#f7f6f3] px-2 py-0.5 rounded">Go</span>
                            </div>
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}
"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function PortfolioAboutSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            id="PortfolioAbout"
            ref={sectionRef}
            className="relative w-full py-24 md:py-32 px-6 flex flex-col items-center justify-center border-t border-[#eaeaea]"
        >
            <div className="max-w-5xl w-full mx-auto flex flex-col gap-12">
                
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#eaeaea] pb-6"
                >
                    <div className="flex flex-col gap-2">
                        <span className="font-mono text-xs text-[#787774] uppercase tracking-widest">
                            01 / Profile & Background
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#111111] font-normal tracking-tight">
                            Engineering with durability and intent.
                        </h2>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs text-[#787774]">
                        <span className="w-2 h-2 rounded-full bg-[#111111]" />
                        <span>Based in Depok, Indonesia</span>
                    </div>
                </motion.div>

                {/* Asymmetric Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    
                    {/* Primary Bio Card (Col span 7) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="md:col-span-7 minimal-card p-8 md:p-10 flex flex-col justify-between gap-8"
                    >
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center justify-between">
                                <span className="tag-pastel-blue px-3 py-1 rounded-full text-xs font-mono tracking-wide uppercase font-medium">
                                    Software Engineer
                                </span>
                                <span className="font-mono text-xs text-[#787774]">Since 2021</span>
                            </div>

                            <p className="font-serif text-2xl md:text-3xl text-[#111111] leading-snug font-normal">
                                &ldquo;Focusing on architectural integrity, secure transaction flows, and software that remains maintainable as systems scale.&rdquo;
                            </p>

                            <div className="space-y-4 text-sm md:text-base text-[#787774] leading-relaxed font-sans">
                                <p>
                                    I am <strong className="text-[#111111] font-medium">Akhmad Aldo Sari</strong>. My engineering work spans cross-platform mobile development and fullstack web platforms. I partner with enterprise teams to implement mission-critical user interfaces and backend integrations.
                                </p>
                                <p>
                                    At Bank Rakyat Indonesia, I contributed directly to the core development of <strong className="text-[#111111] font-medium">QLola Mobile</strong> and <strong className="text-[#111111] font-medium">QLola IB Token</strong>, handling corporate banking authorizations, biometrics, hardware tokens, and zero-compromise security compliance.
                                </p>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-[#eaeaea] flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#787774]">
                            <div className="flex items-center gap-2">
                                <span className="text-[#111111]">Primary Focus:</span>
                                <span>Mobile Architecture, Web Standards, Enterprise Sec</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Secondary Column: Portrait & Details (Col span 5) */}
                    <div className="md:col-span-5 flex flex-col gap-6">
                        
                        {/* Portrait Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="minimal-card overflow-hidden p-3 bg-white"
                        >
                            <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-[#eaeaea] bg-[#f7f6f3]">
                                <img
                                    src="/assets/me.png"
                                    alt="Akhmad Aldo"
                                    className="w-full h-full object-cover object-top filter grayscale contrast-105"
                                />
                                <div className="absolute bottom-2.5 left-2.5 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded border border-[#eaeaea] text-[11px] font-mono text-[#111111]">
                                    Akhmad Aldo Sari
                                </div>
                            </div>
                        </motion.div>

                        {/* Education & Academic Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                            className="minimal-card p-6 flex items-center gap-4 bg-white"
                        >
                            <div className="w-11 h-11 rounded-lg bg-[#f7f6f3] border border-[#eaeaea] flex items-center justify-center shrink-0 text-[#111111]">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[11px] font-mono uppercase tracking-wider text-[#787774]">
                                    Education
                                </span>
                                <h3 className="text-sm font-medium text-[#111111]">
                                    Universitas Bina Sarana Informatika
                                </h3>
                                <p className="text-xs text-[#787774] font-mono mt-0.5">
                                    Bachelor of Computer Science
                                </p>
                            </div>
                        </motion.div>

                        {/* Dossier Download Action */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <a
                                href="mailto:akhmadaldo12@gmail.com?subject=Contact%20from%20Portfolio"
                                className="btn-secondary-minimal w-full py-3 px-4 flex items-center justify-between text-xs font-mono"
                            >
                                <span className="font-medium text-[#111111]">Request Detailed Dossier</span>
                                <span className="text-[#787774]">akhmadaldo12@gmail.com ↗</span>
                            </a>
                        </motion.div>

                    </div>

                </div>

            </div>
        </section>
    );
}
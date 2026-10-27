"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, GraduationCap, Code2, Sparkles, HeartHandshake } from "lucide-react";
import Image from "next/image";

export default function PortfolioAboutSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

    return (
        <section
            id="PortfolioAbout"
            ref={sectionRef}
            className="relative w-full py-24 px-4 md:px-8 max-w-6xl mx-auto"
        >
            <div className="flex flex-col gap-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[var(--color-rule)] pb-6"
                >
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-2)]">
                            01 / Perspective
                        </span>
                        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-ink)] mt-1">
                            About my <mark className="mark-pear">craft & journey</mark>
                        </h2>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-muted)]">
                        <MapPin className="w-4 h-4 text-[var(--color-accent-3)]" />
                        <span>Depok, West Java, Indonesia</span>
                    </div>
                </motion.div>

                {/* Content Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Photo snapshot on tactile card stock */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
                        animate={isInView ? { opacity: 1, scale: 1, rotate: -1.5 } : {}}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
                        className="md:col-span-5 flex flex-col"
                    >
                        <div className="hum-card p-4 sm:p-5 relative group">
                            {/* Decorative paper tape on top of the card */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-[var(--color-accent)]/80 rounded-sm border border-[var(--color-accent-deep)]/40 shadow-xs rotate-[-2deg] pointer-events-none" />

                            <div className="w-full aspect-[4/5] relative rounded-[18px] overflow-hidden bg-[var(--color-paper-2)] border border-[var(--color-rule)]">
                                <Image
                                    src="/assets/me.png"
                                    alt="Akhmad Aldo"
                                    fill
                                    className="object-cover object-center group-hover:scale-102 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, 400px"
                                />
                            </div>

                            <div className="mt-4 flex items-center justify-between text-xs text-[var(--color-muted)] font-medium">
                                <span>Akhmad Aldo (Aldo)</span>
                                <span className="inline-flex items-center gap-1 font-semibold text-[var(--color-ink)]">
                                    <Sparkles className="w-3.5 h-3.5 text-[var(--color-accent)] fill-[var(--color-accent)]" />
                                    Software Engineer
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Bio Narrative and Values */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-7 flex flex-col gap-6"
                    >
                        <div className="hum-card p-6 md:p-8 flex flex-col gap-5">
                            <h3 className="text-2xl font-semibold text-[var(--color-ink)] tracking-tight">
                                Building human-centered systems with engineering rigor.
                            </h3>
                            <p className="text-base md:text-lg text-[var(--color-muted)] leading-relaxed font-normal">
                                I love turning complex enterprise workflows and design concepts into fast, fluid, and dependable applications. My daily work revolves around production Flutter architectures, React Native ecosystems, and full-stack Next.js platforms.
                            </p>
                            <p className="text-base md:text-lg text-[var(--color-muted)] leading-relaxed font-normal">
                                At Bank Rakyat Indonesia, I contribute to <span className="font-semibold text-[var(--color-ink)]">QLola Mobile</span>, ensuring millions of enterprise corporate transactions operate with zero-compromise security, instant reactivity, and seamless usability.
                            </p>
                        </div>

                        {/* Interactive Detail Pills / Mini Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="hum-card hum-card-hover p-5 flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/20 text-[var(--color-ink)] flex items-center justify-center shrink-0 border border-[var(--color-accent-deep)]/30">
                                    <GraduationCap className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs font-semibold uppercase text-[var(--color-muted)] tracking-wider">
                                        Education
                                    </div>
                                    <div className="text-base font-semibold text-[var(--color-ink)] mt-0.5">
                                        Universitas Bina Sarana Informatika
                                    </div>
                                    <div className="text-xs text-[var(--color-muted)] mt-1">
                                        Information Technology
                                    </div>
                                </div>
                            </div>

                            <div className="hum-card hum-card-hover p-5 flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-[var(--color-mint)]/30 text-[var(--color-mint-deep)] flex items-center justify-center shrink-0 border border-[var(--color-mint-deep)]/30">
                                    <Code2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-xs font-semibold uppercase text-[var(--color-muted)] tracking-wider">
                                        Core Philosophy
                                    </div>
                                    <div className="text-base font-semibold text-[var(--color-ink)] mt-0.5">
                                        Speed, Reliability &amp; Delight
                                    </div>
                                    <div className="text-xs text-[var(--color-muted)] mt-1">
                                        No unnecessary abstractions.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
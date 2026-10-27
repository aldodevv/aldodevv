"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Smartphone, Globe, Briefcase, MapPin } from "lucide-react";

export default function HeroSection() {
    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="Hero"
            className="relative min-h-[92vh] w-full flex flex-col justify-center items-center pt-28 pb-16 px-4 md:px-8 max-w-6xl mx-auto overflow-hidden"
        >
            {/* Top status card-stock pill */}
            <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-card)] border border-[var(--color-rule)] shadow-[0_2px_8px_-2px_rgba(20,20,30,0.06)] text-xs md:text-sm font-semibold text-[var(--color-ink)] mb-8"
            >
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-mint)] border border-[var(--color-mint-deep)]" />
                <span>Available for high-impact mobile & web craft</span>
            </motion.div>

            {/* Main Hero Headline in Chillax */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-center max-w-4xl mx-auto mb-8"
            >
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-semibold tracking-[-0.03em] leading-[1.06] text-[var(--color-ink)]">
                    Crafting <mark className="mark-pear">fluid mobile & web</mark> products that feel real.
                </h1>
                <p className="mt-6 text-lg sm:text-xl md:text-2xl text-[var(--color-muted)] max-w-2xl mx-auto font-normal leading-relaxed">
                    I&apos;m <span className="text-[var(--color-ink)] font-semibold">Akhmad Aldo</span>, a software engineer specializing in cross-platform mobile apps, native architecture, and modern full-stack web experiences.
                </p>
            </motion.div>

            {/* Tactile Card-Stock Call to Actions */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
                className="flex flex-wrap items-center justify-center gap-4 mb-16"
            >
                <button
                    onClick={() => scrollToSection("WorkExperience")}
                    className="btn-hum-primary cursor-pointer"
                >
                    <Briefcase className="w-4 h-4" />
                    <span>Explore Experience</span>
                </button>
                <button
                    onClick={() => scrollToSection("TechStack")}
                    className="btn-hum-secondary cursor-pointer"
                >
                    <Smartphone className="w-4 h-4" />
                    <span>View Craft & Stack</span>
                </button>
            </motion.div>

            {/* Workbench Highlights (Settled Hero Cut-Paper Cards) */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full max-w-4xl"
            >
                {/* Card 1: Enterprise Focus */}
                <div className="hum-card hum-card-hover p-6 flex flex-col justify-between relative overflow-hidden group">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider">Enterprise Scale</span>
                        <div className="w-8 h-8 rounded-full bg-[var(--color-paper-2)] flex items-center justify-center text-[var(--color-accent-2)]">
                            <Smartphone className="w-4 h-4" />
                        </div>
                    </div>
                    <div>
                        <div className="text-2xl font-semibold text-[var(--color-ink)] tracking-tight mb-1">
                            QLola Mobile BRI
                        </div>
                        <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                            Architecting secure high-traffic corporate banking solutions with Flutter.
                        </p>
                    </div>
                </div>

                {/* Card 2: Stack breadth */}
                <div className="hum-card hum-card-hover p-6 flex flex-col justify-between relative overflow-hidden group">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider">Ecosystem</span>
                        <div className="w-8 h-8 rounded-full bg-[var(--color-paper-2)] flex items-center justify-center text-[var(--color-mint-deep)]">
                            <Globe className="w-4 h-4" />
                        </div>
                    </div>
                    <div>
                        <div className="text-2xl font-semibold text-[var(--color-ink)] tracking-tight mb-1">
                            Mobile + Web
                        </div>
                        <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                            Flutter, React Native, Kotlin, Swift, Next.js, and TypeScript.
                        </p>
                    </div>
                </div>

                {/* Card 3: Location & Roots */}
                <div className="hum-card hum-card-hover p-6 flex flex-col justify-between relative overflow-hidden group">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider">Base</span>
                        <div className="w-8 h-8 rounded-full bg-[var(--color-paper-2)] flex items-center justify-center text-[var(--color-accent-3)]">
                            <MapPin className="w-4 h-4" />
                        </div>
                    </div>
                    <div>
                        <div className="text-2xl font-semibold text-[var(--color-ink)] tracking-tight mb-1">
                            Depok, Indonesia
                        </div>
                        <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                            Collaborating with world-class product teams remotely and on-site.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Scroll down indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-12 flex flex-col items-center gap-1 text-[var(--color-muted)] text-xs font-semibold cursor-pointer"
                onClick={() => scrollToSection("PortfolioAbout")}
            >
                <span>Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown className="w-4 h-4" />
                </motion.div>
            </motion.div>
        </section>
    );
}
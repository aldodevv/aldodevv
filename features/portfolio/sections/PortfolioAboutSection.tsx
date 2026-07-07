"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { MapPin, GraduationCap, ArrowUpRight } from "lucide-react";
import RetroScrambleText from "@/features/portfolio/components/RetroScrambleText";

export default function PortfolioAboutSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const aboutIntro =
        "Hello! I am Akhmad Aldo Sari, a passionate Software Engineer. My journey involves creating intuitive, high-performance solutions for enterprise clients and fast-growing startups.";

    const aboutDetail =
        "With a strong foundation in software development, I specialize in building robust cross-platform mobile and web applications. I am dedicated to continuous learning, pushing technical boundaries, and crafting seamless user experiences.";

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section
            id="PortfolioAbout"
            ref={sectionRef}
            data-nav-theme="light-pill"
            className="relative w-full bg-transparent text-white py-32 px-4 md:px-10 flex flex-col items-center justify-center overflow-hidden border-t-4 border-white"
        >
            {/* Visual grid lines overlay */}
            <div className="absolute inset-0 bg-retro-grid-fine pointer-events-none opacity-40 z-1" />

            <div className="max-w-7xl w-full mx-auto relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex flex-col gap-12"
                >
                    {/* Retro Menu Header */}
                    <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b-4 border-white pb-6 font-sans">
                        <h2 className="text-5xl md:text-6xl font-bold tracking-widest uppercase text-white">
                            <RetroScrambleText text="CHARACTER_BIO" /> <span className="text-secondary">[01]</span>
                        </h2>
                        <div className="flex items-center gap-2 text-xl font-bold uppercase tracking-widest text-secondary font-sans">
                            <MapPin className="w-5 h-5" />
                            Depok, Indonesia
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                        {/* Left Column: Avatar Frame */}
                        <div className="md:col-span-5 flex flex-col gap-8 px-6 md:px-0">
                            <motion.div
                                variants={itemVariants}
                                className="w-full aspect-[4/5] relative overflow-hidden border-4 border-white bg-[#fa520f] shadow-[6px_6px_0px_#fa520f] group/avatar"
                            >
                                <div className="absolute inset-0 w-full h-full bg-zinc-950 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/avatar:-translate-x-3">
                                    <motion.img
                                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                                        alt="Akhmad Aldo Sari"
                                        className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-300 group-hover/avatar:grayscale-0 group-hover/avatar:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-primary/10 transition-colors duration-500 group-hover/avatar:bg-transparent" />
                                    <div className="absolute bottom-2 left-2 bg-black border border-white px-2 py-1 text-xs font-mono text-white tracking-widest uppercase opacity-85 z-10">
                                        AVATAR_RENDER.PNG
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Console Details */}
                        <div className="md:col-span-7 flex flex-col justify-between gap-8">
                            <motion.div variants={itemVariants} className="flex flex-col gap-6">
                                <div className="border-4 border-white bg-[#fa520f] shadow-[6px_6px_0px_#fa520f] overflow-hidden group/bio">
                                    <div className="p-6 bg-zinc-950 font-mono text-base leading-relaxed text-zinc-300 flex flex-col gap-4 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/bio:-translate-x-3 w-full h-full">
                                        <p className="text-lg md:text-xl font-bold text-secondary font-mono tracking-wider">
                                            &quot;{aboutIntro}&quot;
                                        </p>
                                        <p className="text-sm md:text-base text-zinc-400 font-mono">
                                            {aboutDetail}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="flex flex-col gap-6">
                                <h3 className="text-2xl font-bold uppercase tracking-widest text-secondary border-b-2 border-white/20 pb-2 font-sans">
                                    ACADEMIC_STATS
                                </h3>
                                <div className="border-4 border-white bg-[#ffb83e] shadow-[6px_6px_0px_#ffb83e] overflow-hidden group/stats cursor-pointer">
                                    <div className="flex items-center gap-6 p-4 bg-zinc-950 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/stats:-translate-x-3 w-full h-full">
                                        <div className="w-16 h-16 bg-primary border-2 border-white text-white flex items-center justify-center shrink-0">
                                            <GraduationCap className="w-8 h-8 text-secondary" />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <h4 className="text-2xl font-bold tracking-wider text-white uppercase font-sans">
                                                Univ. Bina Sarana Informatika
                                            </h4>
                                            <p className="text-secondary font-mono text-sm uppercase tracking-widest">
                                                DEPT: Computer Science (GRADUATE)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="pt-4 border-t-2 border-white/20">
                                <button className="font-sans text-xl font-bold tracking-widest bg-secondary text-black px-8 py-3 border-4 border-white hover:bg-white hover:text-black cursor-pointer shadow-[6px_6px_0px_#fa520f] active:translate-x-1.5 active:translate-y-1.5 active:shadow-none transition-all flex items-center gap-2">
                                    DOWNLOAD_DOSSIER.PDF
                                    <ArrowUpRight className="w-6 h-6" />
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { MapPin, GraduationCap, ArrowUpRight } from "lucide-react";
import RetroTypewriterText from "@/features/portfolio/components/RetroTypewriterText";

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
            className="relative w-full bg-transparent text-black py-32 px-4 md:px-10 flex flex-col items-center justify-center overflow-hidden border-t-4 border-black"
        >
            {/* Visual grid lines overlay */}
            <div className="absolute inset-0 bg-retro-grid-fine pointer-events-none opacity-20 z-1" />

            <div className="max-w-7xl w-full mx-auto relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex flex-col gap-12"
                >
                    {/* Neo-Brutalist Title Header */}
                    <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b-4 border-black pb-6 font-sans">
                        <h2 className="text-5xl md:text-6xl font-black tracking-tight uppercase text-black leading-none">
                            <RetroTypewriterText text="CHARACTER_BIO" /> <span className="text-[#ff5e5e]">[01]</span>
                        </h2>
                        <div className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-black font-sans border-2 border-black bg-[#ffd54f] px-3 py-1.5 shadow-sm">
                            <MapPin className="w-4 h-4" />
                            Depok, Indonesia
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                        {/* Left Column: Avatar Frame */}
                        <div className="md:col-span-5 flex flex-col gap-8 px-6 md:px-0">
                            <motion.div
                                variants={itemVariants}
                                className="w-full aspect-[4/5] relative overflow-hidden border-4 border-black bg-[#ff5e5e] shadow-[8px_8px_0px_#000000] group/avatar"
                            >
                                <div className="absolute inset-0 w-full h-full bg-white border-2 border-black transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/avatar:translate-x-3 group-hover/avatar:-translate-y-3">
                                    <motion.img
                                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                                        alt="Akhmad Aldo"
                                        className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-300 group-hover/avatar:grayscale-0 group-hover/avatar:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-[#ff5e5e]/10 transition-colors duration-500 group-hover/avatar:bg-transparent" />
                                    <div className="absolute bottom-3 left-3 bg-[#3cd070] border-2 border-black px-2 py-1 text-xs font-mono text-black font-black tracking-widest uppercase z-10 shadow-sm">
                                        AVATAR_RENDER.PNG
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column: Console Details */}
                        <div className="md:col-span-7 flex flex-col justify-between gap-8">
                            {/* Bio Card (OS Window Style) */}
                            <motion.div variants={itemVariants} className="flex flex-col gap-6">
                                <div className="border-4 border-black bg-[#b088f9] shadow-[8px_8px_0px_#000000] overflow-hidden group/bio">
                                    <div className="bg-white border-2 border-black overflow-hidden flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/bio:translate-x-3 group-hover/bio:translate-y-3 w-full h-full">
                                        {/* Header Bar */}
                                        <div className="bg-[#b088f9] border-b-2 border-black px-4 py-2.5 flex items-center justify-between shrink-0 font-black font-sans uppercase tracking-widest text-xs text-black select-none">
                                            <div className="flex gap-1.5">
                                                <span className="w-3 h-3 rounded-full bg-[#ff5e5e] border border-black" />
                                                <span className="w-3 h-3 rounded-full bg-[#ffd54f] border border-black" />
                                                <span className="w-3 h-3 rounded-full bg-[#3cd070] border border-black" />
                                            </div>
                                            <span>BIO_DETAILS </span>
                                            <span className="font-mono font-black">✕</span>
                                        </div>
                                        {/* Body */}
                                        <div className="p-6 font-mono text-base leading-relaxed text-black bg-white flex flex-col gap-4 flex-grow">
                                            <p className="text-xl font-black text-[#ff5e5e] font-sans tracking-tight uppercase leading-snug">
                                                &quot;{aboutIntro}&quot;
                                            </p>
                                            <p className="text-sm md:text-base text-black/80 font-mono">
                                                {aboutDetail}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Academic Card (OS Window Style) */}
                            <motion.div variants={itemVariants} className="flex flex-col gap-6">
                                <div className="border-4 border-black bg-[#ffd54f] shadow-[8px_8px_0px_#000000] overflow-hidden group/stats cursor-pointer">
                                    <div className="bg-white border-2 border-black overflow-hidden flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/stats:translate-x-1.5 group-hover/stats:translate-y-1.5 w-full h-full">
                                        {/* Header Bar */}
                                        <div className="bg-[#ffd54f] border-b-2 border-black px-4 py-2.5 flex items-center justify-between shrink-0 font-black font-sans uppercase tracking-widest text-xs text-black select-none">
                                            <div className="flex gap-1.5">
                                                <span className="w-3 h-3 rounded-full bg-[#ff5e5e] border border-black" />
                                                <span className="w-3 h-3 rounded-full bg-[#b088f9] border border-black" />
                                                <span className="w-3 h-3 rounded-full bg-[#3cd070] border border-black" />
                                            </div>
                                            <span>ACADEMIC_STATS </span>
                                            <span className="font-mono font-black">✕</span>
                                        </div>
                                        {/* Body */}
                                        <div className="flex items-center gap-6 p-6 bg-white flex-grow">
                                            <div className="w-16 h-16 bg-[#ff5e5e] border-2 border-black text-white flex items-center justify-center shrink-0 shadow-sm">
                                                <GraduationCap className="w-8 h-8 text-[#ffd54f]" />
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <h4 className="text-2xl font-black tracking-tight text-black uppercase font-sans leading-none">
                                                    Univ. Bina Sarana Informatika
                                                </h4>
                                                <p className="text-[#ff5e5e] font-mono text-sm uppercase tracking-widest font-black mt-1.5">
                                                    DEPT: Computer Science (GRADUATE)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Download Button */}
                            <motion.div variants={itemVariants} className="pt-4">
                                <button className="font-sans text-lg font-black tracking-widest bg-[#3cd070] text-black px-8 py-4 border-4 border-black hover:bg-black hover:text-white cursor-pointer shadow-[6px_6px_0px_#000000] active:translate-x-1.5 active:translate-y-1.5 active:shadow-none transition-all flex items-center gap-2 uppercase">
                                    DOWNLOAD_DOSSIER.PDF
                                    <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { MapPin, Code2, GraduationCap, Laptop, ArrowUpRight } from "lucide-react";

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
            className="relative w-full bg-white text-black py-32 px-4 md:px-10 flex flex-col items-center justify-center overflow-hidden"
        >
            <div className="max-w-7xl w-full mx-auto relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex flex-col gap-8"
                >
                    {/* Minimalist Header */}
                    <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b-2 border-black pb-8">
                        <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase">
                            About <span className="font-serif italic font-light">Me</span>
                        </h2>
                        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
                            <MapPin className="w-4 h-4" />
                            Depok, Indonesia
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        {/* Left Column: Image & Quick Stats */}
                        <div className="md:col-span-5 flex flex-col gap-8 px-6 md:px-0">
                            <motion.div
                                variants={itemVariants}
                                className="w-full aspect-4/5 relative overflow-hidden bg-neutral-100 group"
                            >
                                <motion.img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                                    alt="Akhmad Aldo Sari"
                                    className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent" />
                            </motion.div>
                        </div>

                        {/* Right Column: Bio & Education */}
                        <div className="md:col-span-7 flex flex-col justify-between gap-8">
                            <motion.div variants={itemVariants} className="flex flex-col gap-8 mt-2 lg:mt-0">
                                <p className="text-xl md:text-2xl lg:text-3xl font-light leading-tight text-black text-justify tracking-tight">
                                    &quot;{aboutIntro}&quot;
                                </p>
                                <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl font-medium">
                                    {aboutDetail}
                                </p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="flex flex-col gap-6">
                                <h3 className="text-xl font-bold uppercase tracking-widest border-b border-neutral-200 pb-4">Education</h3>
                                <div className="flex items-start gap-6 group cursor-pointer">
                                    <div className="w-16 h-16 bg-black text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <GraduationCap className="w-8 h-8" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <h4 className="text-2xl font-bold group-hover:underline decoration-2 underline-offset-4">Universitas Bina Sarana Informatika</h4>
                                        <p className="text-neutral-500 uppercase tracking-widest text-sm mt-1">Computer Science</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div variants={itemVariants} className="pt-4 lg:pt-8 border-t border-neutral-200">
                                <button className="group flex items-center gap-4 bg-black text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors w-fit">
                                    Download CV
                                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
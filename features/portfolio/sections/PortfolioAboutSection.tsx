"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { MapPin, Code2, Sparkles, Coffee } from "lucide-react";

export default function PortfolioAboutSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const aboutText =
        "A passionate and dedicated Mobile Developer with a knack for creating sleek and functional mobile applications and currently learn about web development. I am originally from Lamongan, Indonesia, and I hold a degree in Computer Science from University of Brawijaya. My educational background has provided me with a strong foundation in software development and fueled my passion for technology. With experience in both Android and Flutter, I specialize in building cross-platform solutions that deliver seamless user experiences. I love diving into new technologies and am constantly exploring the latest trends in mobile development. From tackling complex technical challenges to crafting intuitive user interfaces, I am committed to pushing the boundaries of what's possible. One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite.";

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
        hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <section
            id="PortfolioAbout"
            ref={sectionRef}
            data-nav-theme="light-pill"
            className="relative w-full bg-neutral-100 text-black py-32 px-4 md:px-10 flex flex-col items-center justify-center overflow-hidden"
        >
            <div className="max-w-6xl w-full mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-12 gap-6"
                >
                    {/* Main Headline */}
                    <motion.div variants={itemVariants} className="md:col-span-12 mb-8">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
                            About <span className="text-neutral-400 font-serif italic">Me.</span>
                        </h2>
                    </motion.div>

                    {/* Photo Card */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-5 h-[400px] md:h-auto min-h-[500px] relative rounded-[2.5rem] overflow-hidden group shadow-xl"
                    >
                        <motion.img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                            alt="Profile"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 backdrop-blur-md bg-white/10 p-4 rounded-2xl border border-white/20 text-white">
                            <MapPin className="w-5 h-5 text-white/80" />
                            <div>
                                <p className="font-semibold text-sm">Lamongan, Indonesia</p>
                                <p className="text-xs text-white/70">Based Location</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Context - Right Column Flex */}
                    <div className="md:col-span-7 flex flex-col gap-6">
                        {/* Main Description Card */}
                        <motion.div
                            variants={itemVariants}
                            className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl flex-1 flex flex-col justify-between group hover:shadow-2xl transition-shadow duration-300"
                        >
                            <Sparkles className="w-8 h-8 text-neutral-300 mb-6 group-hover:text-black transition-colors duration-300" />
                            <p className="text-base md:text-lg text-neutral-600 font-light leading-relaxed">
                                {aboutText}
                            </p>
                            <div className="mt-8 flex justify-end">
                                <button className="px-8 py-3 bg-black text-white rounded-full font-medium shadow-lg hover:scale-105 active:scale-95 transition-all duration-300">
                                    View CV
                                </button>
                            </div>
                        </motion.div>

                        {/* Bottom Row Stats */}
                        <div className="grid grid-cols-2 gap-6 h-48">
                            <motion.div
                                variants={itemVariants}
                                className="bg-neutral-900 text-white p-6 rounded-4xl shadow-xl flex flex-col justify-between group hover:bg-black transition-colors duration-300"
                            >
                                <Code2 className="w-6 h-6 text-neutral-400 group-hover:text-white transition-colors duration-300" />
                                <div>
                                    <h4 className="text-3xl font-bold mb-1">3+</h4>
                                    <p className="text-sm text-neutral-400">Years Exp</p>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="bg-white border border-neutral-200 p-6 rounded-4xl shadow-xl flex flex-col justify-between group hover:border-black/20 transition-colors duration-300"
                            >
                                <Coffee className="w-6 h-6 text-neutral-400 group-hover:text-black transition-colors duration-300" />
                                <div>
                                    <h4 className="text-3xl font-bold mb-1">∞</h4>
                                    <p className="text-sm text-neutral-500">Cups of Coffee</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
"use client";

import React from "react";
import { motion } from "framer-motion";
import { techStack } from "../constants/techStack";
import RetroTypewriterText from "@/features/portfolio/components/RetroTypewriterText";

export default function TechStackSection() {
    return (
        <section
            id="TechStack"
            data-nav-theme="dark-pill"
            className="relative min-h-screen w-full flex flex-col items-center justify-center bg-transparent text-black py-32 px-4 border-t-4 border-black"
        >
            {/* Visual grid lines overlay */}
            <div className="absolute inset-0 bg-retro-grid-fine pointer-events-none opacity-20 z-1" />

            <div className="max-w-6xl w-full text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-black tracking-tight mb-8 uppercase text-black font-sans animate-none"
                >
                    <RetroTypewriterText text="ABILITY_LIST " />
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg md:text-xl text-black/75 max-w-2xl mx-auto mb-20 leading-relaxed font-mono font-medium"
                >
                    Here are the languages, frameworks, and software tools I actively use to bring applications to life. Select item for stats.
                </motion.p>

                <div className="flex flex-col gap-20">
                    {techStack.map((category, catIdx) => (
                        <div key={category.title} className="flex flex-col items-center md:items-start w-full font-sans">
                            <motion.h3
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-xl md:text-2xl font-black mb-8 text-black border-2 border-black bg-white px-4 py-2 shadow-sm font-sans uppercase tracking-widest inline-flex"
                            >
                                ★ {category.title.replace(/\s+/g, "_")}
                            </motion.h3>

                            <div className="flex flex-wrap gap-6 justify-center md:justify-start w-full">
                                {category.items.map((item, idx) => {
                                    const catColors = [
                                        "#ff5e5e", // Salmon Red
                                        "#ffd54f", // Canary Yellow
                                        "#b088f9", // Lilac Purple
                                    ];
                                    const catColor = catColors[catIdx % catColors.length];
                                    return (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.03 * (idx % 10), duration: 0.4 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="relative overflow-hidden border-4 border-black w-28 h-28 md:w-32 md:h-32 rounded-none group cursor-pointer transition-all duration-300"
                                            style={{
                                                backgroundColor: catColor,
                                                boxShadow: "4px 4px 0px #000000"
                                            }}
                                        >
                                            <div className={`flex flex-col items-center justify-center bg-white p-4 w-full h-full border-2 border-black transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] 
                                                            ${idx % 3 === 0
                                                    ? "group-hover:-translate-x-1.5 group-hover:-translate-y-1.5"
                                                    : idx % 3 === 1
                                                        ? "group-hover:translate-x-1.5 group-hover:-translate-y-1.5"
                                                        : "group-hover:translate-x-1.5 group-hover:translate-y-1.5"}`}>
                                                <div className="w-10 h-10 md:w-12 md:h-12 mb-3 bg-[#f7f6f0] border-2 border-black p-2 flex items-center justify-center transition-colors duration-300">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-full h-full object-contain"
                                                        onError={(e) => {
                                                            e.currentTarget.src = "https://api.iconify.design/lucide/code-2.svg?color=%23000000";
                                                        }}
                                                    />
                                                </div>
                                                <span className="text-xs md:text-sm font-black text-black text-center tracking-tight font-mono uppercase">
                                                    {item.name.replace(/\s+/g, "")}
                                                </span>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

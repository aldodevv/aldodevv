"use client";

import React from "react";
import { motion } from "framer-motion";
import { techStack } from "../constants/techStack";

export default function TechStackSection() {
    return (
        <section
            id="TechStack"
            data-nav-theme="dark-pill"
            className="relative min-h-screen w-full flex flex-col items-center justify-center bg-zinc-900 text-white py-32 px-4"
        >
            <div className="max-w-6xl w-full text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
                >
                    Tech Stack.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-neutral-400 max-w-2xl mx-auto mb-20 leading-relaxed"
                >
                    Here are the languages, frameworks, and software tools I actively use to bring applications to life.
                </motion.p>

                <div className="flex flex-col gap-16">
                    {techStack.map((category, catIdx) => (
                        <div key={category.title} className="flex flex-col items-center md:items-start w-full">
                            <motion.h3
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-2xl md:text-3xl font-bold mb-8 text-neutral-300"
                            >
                                {category.title}
                            </motion.h3>

                            <div className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start w-full">
                                {category.items.map((item, idx) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.05 * (idx % 10), duration: 0.5 }}
                                        whileHover={{ y: -5, scale: 1.05 }}
                                        className="group flex flex-col items-center justify-center bg-white/5 border border-white/10 p-4 md:p-6 rounded-4xl hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 w-28 h-28 md:w-32 md:h-32"
                                    >
                                        <div className="w-10 h-10 md:w-12 md:h-12 mb-3 rounded-full overflow-hidden flex items-center justify-center bg-white/5 group-hover:bg-white/20 transition-colors duration-300 p-2">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-contain filter drop-shadow-md"
                                                onError={(e) => {
                                                    // Fallback if image fails to load
                                                    e.currentTarget.src = "https://api.iconify.design/lucide/code-2.svg?color=%23ffffff";
                                                }}
                                            />
                                        </div>
                                        <span className="text-xs md:text-sm font-medium text-neutral-400 group-hover:text-white transition-colors duration-300 text-center">
                                            {item.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

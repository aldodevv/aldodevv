"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { techStack } from "../constants/techStack";

export default function TechStackSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            id="TechStack"
            ref={sectionRef}
            className="relative w-full py-24 md:py-32 px-6 flex flex-col items-center justify-center border-t border-[#eaeaea]"
        >
            <div className="max-w-5xl w-full mx-auto flex flex-col gap-14">
                
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#eaeaea] pb-6"
                >
                    <div className="flex flex-col gap-2">
                        <span className="font-mono text-xs text-[#787774] uppercase tracking-widest">
                            02 / Technical Capabilities
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#111111] font-normal tracking-tight">
                            Languages, frameworks, and tooling.
                        </h2>
                    </div>

                    <p className="font-sans text-xs md:text-sm text-[#787774] max-w-sm">
                        Curated toolchains utilized in building enterprise financial applications, APIs, and modern frontends.
                    </p>
                </motion.div>

                {/* Categorized Tech Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {techStack.map((category, catIdx) => {
                        const pastelBadges = [
                            "tag-pastel-blue",
                            "tag-pastel-green",
                            "tag-pastel-yellow",
                            "tag-pastel-red",
                        ];
                        const badgeClass = pastelBadges[catIdx % pastelBadges.length];

                        return (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 18 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.1 * catIdx,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                className="minimal-card p-6 md:p-8 flex flex-col justify-between gap-6"
                            >
                                {/* Category Header */}
                                <div className="flex items-center justify-between border-b border-[#eaeaea] pb-4">
                                    <h3 className="font-sans font-medium text-base text-[#111111]">
                                        {category.title}
                                    </h3>
                                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium uppercase ${badgeClass}`}>
                                        {category.items.length} Technologies
                                    </span>
                                </div>

                                {/* Tech Items Grid */}
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {category.items.map((item) => (
                                        <div
                                            key={item.name}
                                            className="flex items-center gap-2.5 p-2.5 rounded-lg border border-[#eaeaea] bg-[#ffffff] hover:bg-[#fbfbfa] hover:border-[#dcdcdc] transition-all duration-150 group"
                                        >
                                            <div className="w-6 h-6 shrink-0 flex items-center justify-center">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-5 h-5 object-contain filter group-hover:contrast-125 transition-all"
                                                    onError={(e) => {
                                                        e.currentTarget.style.display = "none";
                                                    }}
                                                />
                                            </div>
                                            <span className="text-xs font-sans text-[#111111] group-hover:text-black truncate font-normal">
                                                {item.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

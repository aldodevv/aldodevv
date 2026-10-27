"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { techStack } from "../constants/techStack";
import Image from "next/image";

export default function TechStackSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

    const categories = ["All", ...techStack.map((c) => c.title)];
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredItems =
        selectedCategory === "All"
            ? techStack.flatMap((c) => c.items.map((item) => ({ ...item, category: c.title })))
            : techStack
                  .find((c) => c.title === selectedCategory)
                  ?.items.map((item) => ({ ...item, category: selectedCategory })) || [];

    // Deduplicate items if any item appears under multiple lists
    const uniqueItems = Array.from(
        new Map(filteredItems.map((item) => [item.name, item])).values()
    );

    return (
        <section
            id="TechStack"
            ref={sectionRef}
            className="relative w-full py-24 px-4 md:px-8 max-w-6xl mx-auto"
        >
            <div className="flex flex-col gap-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[var(--color-rule)] pb-6"
                >
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-mint-deep)]">
                            02 / Tooling &amp; Stack
                        </span>
                        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-ink)] mt-1">
                            Languages, <mark className="mark-mint">frameworks &amp; craft</mark>
                        </h2>
                    </div>
                    <p className="text-sm text-[var(--color-muted)] max-w-sm">
                        Curated set of technologies I use to build scalable, battle-tested apps.
                    </p>
                </motion.div>

                {/* Filter Pills with Framer Motion spring layout */}
                <div className="flex flex-wrap gap-2.5 items-center">
                    {categories.map((category) => {
                        const isSelected = selectedCategory === category;
                        return (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`relative px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                                    isSelected
                                        ? "text-[var(--color-ink)] bg-[var(--color-accent)] shadow-[0_2px_0_0_var(--color-accent-deep)]"
                                        : "text-[var(--color-muted)] bg-[var(--color-card)] hover:text-[var(--color-ink)] hover:bg-[var(--color-paper-2)] border border-[var(--color-rule)]"
                                }`}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>

                {/* Tech Cards Grid with smooth layout animation */}
                <motion.div
                    layout
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4"
                >
                    <AnimatePresence mode="popLayout">
                        {uniqueItems.map((item, idx) => (
                            <motion.div
                                key={item.name}
                                layout
                                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                transition={{
                                    duration: 0.35,
                                    delay: Math.min(idx * 0.025, 0.3),
                                    ease: [0.34, 1.56, 0.64, 1],
                                }}
                                whileHover={{ y: -3, transition: { duration: 0.15 } }}
                                className="hum-card p-4 flex flex-col items-center justify-center text-center gap-3 cursor-default group"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-[var(--color-paper-2)] p-2.5 flex items-center justify-center border border-[var(--color-rule)] group-hover:scale-105 group-hover:bg-[var(--color-accent)]/15 transition-all duration-200">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-contain"
                                        loading="lazy"
                                    />
                                </div>
                                <span className="text-xs sm:text-sm font-semibold text-[var(--color-ink)] tracking-tight">
                                    {item.name}
                                </span>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}

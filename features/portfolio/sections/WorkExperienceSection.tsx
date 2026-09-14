"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { workExperiences } from "../constants/workExperience";

export default function WorkExperienceSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            id="WorkExperience"
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
                            03 / Selected Work & Experience
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#111111] font-normal tracking-tight">
                            Enterprise platforms and production software.
                        </h2>
                    </div>

                    <p className="font-sans text-xs md:text-sm text-[#787774] max-w-sm">
                        Direct contributions to high-security banking infrastructures, cross-platform apps, and corporate tooling.
                    </p>
                </motion.div>

                {/* Experience Cards */}
                <div className="flex flex-col gap-8">
                    {workExperiences.map((exp, index) => {
                        const pastelBadges = [
                            "tag-pastel-green",
                            "tag-pastel-blue",
                            "tag-pastel-yellow",
                        ];
                        const badgeClass = pastelBadges[index % pastelBadges.length];

                        return (
                            <motion.article
                                key={exp.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                className="minimal-card p-6 md:p-10 flex flex-col gap-8"
                            >
                                {/* Header Row */}
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-[#eaeaea] pb-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-[#f7f6f3] border border-[#eaeaea] p-2 flex items-center justify-center shrink-0">
                                            <img
                                                src={exp.icon}
                                                alt={exp.title}
                                                className="w-full h-full object-contain rounded-md"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = "none";
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2.5 flex-wrap">
                                                <h3 className="font-sans font-medium text-xl md:text-2xl text-[#111111] tracking-tight">
                                                    {exp.title}
                                                </h3>
                                                <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium ${badgeClass}`}>
                                                    {exp.period}
                                                </span>
                                            </div>
                                            <p className="text-xs font-mono text-[#787774] mt-1">
                                                Bank Rakyat Indonesia (Enterprise Client)
                                            </p>
                                        </div>
                                    </div>

                                    {exp.link && (
                                        <a
                                            href={exp.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-secondary-minimal px-3 py-1.5 text-xs font-mono inline-flex items-center gap-1.5 self-start shrink-0"
                                        >
                                            <span>Open Store</span>
                                            <span className="text-[10px]">↗</span>
                                        </a>
                                    )}
                                </div>

                                {/* Main Description & Visual Split */}
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                    {/* Text Description */}
                                    <div className="lg:col-span-7 flex flex-col gap-4">
                                        <div className="space-y-3 text-sm md:text-base text-[#787774] leading-relaxed font-sans">
                                            {exp.description.split("\n").map((line, idx) => (
                                                <p key={idx}>{line}</p>
                                            ))}
                                        </div>

                                        {/* Tech Stack Chips */}
                                        <div className="pt-4 flex flex-wrap items-center gap-2">
                                            {exp.techStack.map((tech) => (
                                                <div
                                                    key={tech.name}
                                                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-[#eaeaea] bg-[#fbfbfa] text-xs font-mono text-[#111111]"
                                                >
                                                    <img
                                                        src={tech.icon}
                                                        alt={tech.name}
                                                        className="w-3.5 h-3.5 object-contain"
                                                    />
                                                    <span>{tech.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Production Screenshot Frame */}
                                    {exp.image && (
                                        <div className="lg:col-span-5 rounded-lg border border-[#eaeaea] overflow-hidden bg-[#f7f6f3] p-2">
                                            <div className="overflow-hidden rounded border border-[#eaeaea]">
                                                <img
                                                    src={exp.image}
                                                    alt={`${exp.title} preview`}
                                                    className="w-full h-auto object-cover filter contrast-105"
                                                    onError={(e) => {
                                                        e.currentTarget.parentElement?.parentElement?.remove();
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.article>
                        );
                    })}
                </div>

                {/* Footer Colophon */}
                <div className="pt-12 border-t border-[#eaeaea] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#787774]">
                    <div>
                        © {new Date().getFullYear()} Akhmad Aldo. All rights reserved.
                    </div>
                    <div className="flex items-center gap-4">
                        <span>Depok, Indonesia</span>
                        <span className="text-[#d0d0ce]">/</span>
                        <a href="mailto:akhmadaldo12@gmail.com" className="hover:text-[#111111] transition-colors">
                            akhmadaldo12@gmail.com
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}

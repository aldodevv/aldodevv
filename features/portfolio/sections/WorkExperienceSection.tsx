"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Calendar, Building2 } from "lucide-react";
import { workExperiences } from "../constants/workExperience";

export default function WorkExperienceSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

    return (
        <section
            id="WorkExperience"
            ref={sectionRef}
            className="relative w-full py-24 px-4 md:px-8 max-w-6xl mx-auto"
        >
            <div className="flex flex-col gap-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[var(--color-rule)] pb-6"
                >
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-3)]">
                            03 / Journey &amp; Milestones
                        </span>
                        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-ink)] mt-1">
                            Work <mark className="mark-coral">experience &amp; impact</mark>
                        </h2>
                    </div>
                    <p className="text-sm text-[var(--color-muted)] max-w-sm">
                        Products delivered to enterprise clients and millions of daily users.
                    </p>
                </motion.div>

                {/* Timeline Cards Container */}
                <div className="flex flex-col gap-8 relative">
                    {workExperiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="hum-card hum-card-hover p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start group"
                        >
                            {/* App / Project Icon & Visual Thumbnail */}
                            <div className="w-full md:w-56 shrink-0 flex flex-col gap-3">
                                <div className="w-full aspect-video md:aspect-[4/3] rounded-[18px] overflow-hidden bg-[var(--color-paper-2)] border border-[var(--color-rule)] relative shadow-xs">
                                    <img
                                        src={exp.image}
                                        alt={exp.title}
                                        className="w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                </div>
                            </div>

                            {/* Content Details */}
                            <div className="flex-1 flex flex-col justify-between w-full h-full gap-4">
                                <div>
                                    {/* Period & Header Pills */}
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--color-paper-2)] text-[var(--color-ink)] border border-[var(--color-rule)]">
                                            <Calendar className="w-3.5 h-3.5 text-[var(--color-muted)]" />
                                            {exp.period}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <div className="flex items-center gap-3 mt-1">
                                        {exp.icon && (
                                            <img
                                                src={exp.icon}
                                                alt=""
                                                className="w-8 h-8 rounded-lg object-contain border border-[var(--color-rule)] bg-white p-0.5"
                                            />
                                        )}
                                        <h3 className="text-xl md:text-2xl font-semibold text-[var(--color-ink)] tracking-tight">
                                            {exp.title}
                                        </h3>
                                    </div>

                                    {/* Description */}
                                    <p className="mt-3 text-sm md:text-base text-[var(--color-muted)] leading-relaxed font-normal">
                                        {exp.description}
                                    </p>
                                </div>

                                {/* Tech Pills & Link */}
                                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[var(--color-rule)]/60">
                                    <div className="flex flex-wrap items-center gap-2">
                                        {exp.techStack.map((tech) => (
                                            <span
                                                key={tech.name}
                                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[var(--color-paper-2)] text-[var(--color-ink)] border border-[var(--color-rule)]/80"
                                            >
                                                {tech.icon && (
                                                    <img
                                                        src={tech.icon}
                                                        alt=""
                                                        className="w-3.5 h-3.5 object-contain"
                                                    />
                                                )}
                                                <span>{tech.name}</span>
                                            </span>
                                        ))}
                                    </div>

                                    {exp.link && (
                                        <a
                                            href={exp.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn-hum-secondary !min-h-[40px] !py-1 !px-4 !text-xs font-semibold"
                                        >
                                            <span>Visit Platform</span>
                                            <ExternalLink className="w-3.5 h-3.5 text-[var(--color-accent-2)]" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { workExperiences } from "../constants/workExperience";

export default function WorkExperienceSection() {
    return (
        <section
            data-nav-theme="dark-full"
            className="relative min-h-screen w-full flex flex-col items-center bg-black text-white py-32 px-4 md:px-10 border-t border-white/10 overflow-hidden"
        >
            <div className="max-w-5xl w-full flex flex-col">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-14 text-center"
                >
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                        Work <span className="text-neutral-500 font-serif italic">Experience.</span>
                    </h2>
                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                        A timeline of my professional journey, building scalable platforms, modern websites, and cross-platform mobile experiences.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-8 relative">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

                    {workExperiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative flex flex-col md:flex-row gap-4 md:gap-6 items-start group"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-4 md:left-6 w-2.5 h-2.5 bg-white rounded-full -translate-x-[4.5px] mt-5 hidden md:block ring-4 ring-black group-hover:scale-150 group-hover:bg-neutral-300 transition-all duration-300" />

                            {/* Content Card */}
                            <div className="flex-1 bg-white/5 border border-white/10 rounded-3xl p-4 md:p-6 flex flex-col md:flex-row gap-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-xl ml-0 md:ml-12">

                                {/* App/Company Image */}
                                <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden p-2 group-hover:scale-105 transition-transform duration-500">
                                    <img
                                        src={exp.image}
                                        alt={exp.title}
                                        className="w-full h-full object-contain filter drop-shadow-md rounded-xl"
                                        onError={(e) => {
                                            e.currentTarget.src = "https://api.iconify.design/lucide/briefcase.svg?color=%23ffffff";
                                        }}
                                    />
                                </div>

                                {/* Texts & Tech Stack */}
                                <div className="flex flex-col flex-1 mt-2 md:mt-0">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-1">
                                        <h3 className="text-xl md:text-2xl font-bold">{exp.title}</h3>
                                        <a
                                            href={exp.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors px-3 py-1.5 bg-white/5 rounded-full w-fit"
                                        >
                                            View Project <ExternalLink className="w-3.5 h-3.5" />
                                        </a>
                                    </div>
                                    <span className="text-xs font-medium text-neutral-500 mb-2 tracking-wider uppercase">
                                        {exp.period}
                                    </span>

                                    <p className="text-sm text-neutral-400 leading-relaxed mb-4 font-light">
                                        {exp.description}
                                    </p>

                                    <div className="flex flex-wrap items-center gap-2 mt-auto">
                                        {exp.techStack.map((tech) => (
                                            <div
                                                key={tech.name}
                                                className="flex items-center gap-1.5 px-2.5 py-1 bg-black/50 border border-white/10 rounded-full text-[10px] sm:text-xs font-medium text-neutral-300"
                                                title={tech.name}
                                            >
                                                <img
                                                    src={tech.icon}
                                                    alt={tech.name}
                                                    className="w-3.5 h-3.5 object-contain"
                                                />
                                                {tech.name}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { workExperiences } from "../constants/workExperience";

export default function WorkExperienceSection() {
    return (
        <section
            id="WorkExperience"
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
                        Work&nbsp;Experience.
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
                            <div className="absolute left-4 md:left-6 mt-8 hidden md:flex items-center justify-center -translate-x-[5.5px] z-10 w-3 h-3">
                                <div className="w-full h-full bg-neutral-700 rounded-full ring-4 ring-black group-hover:bg-white group-hover:scale-125 transition-all duration-500" />
                                <div className="absolute w-10 h-10 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            </div>

                            {/* Content Card */}
                            <div className="relative flex-1 group/card ml-0 md:ml-12 overflow-hidden rounded-4xl border border-white/10 shadow-2xl transition-all duration-500 hover:border-white/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] bg-white/5 backdrop-blur-xl">

                                {/* Desktop Background Image (Diagonal Half) */}
                                <div
                                    className="absolute top-0 right-0 bottom-0 w-full md:w-[60%] z-0 overflow-hidden hidden md:block"
                                    style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
                                >
                                    <div className="absolute inset-0 bg-linear-to-r from-neutral-950 via-neutral-950/20 to-transparent z-10 
                                                    group-hover/card:from-neutral-950/80 group-hover/card:via-transparent transition-all duration-700" />
                                    <img
                                        src={exp.image}
                                        alt=""
                                        className="w-full h-full object-cover opacity-50 group-hover/card:opacity-100 group-hover/card:scale-105 transition-all duration-700"
                                        onError={(e) => {
                                            e.currentTarget.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop";
                                        }}
                                    />
                                </div>

                                {/* Mobile Background */}
                                <div className="absolute inset-0 z-0 overflow-hidden md:hidden">
                                    <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/20 z-10 transition-all duration-700 group-hover/card:via-neutral-950/50" />
                                    <img
                                        src={exp.image}
                                        alt=""
                                        className="w-full h-full object-cover opacity-40 group-hover/card:opacity-80 group-hover/card:scale-105 transition-all duration-700"
                                    />
                                </div>

                                {/* Content Layer */}
                                <div className="relative z-10 h-full p-6 lg:p-8 flex flex-col md:flex-row gap-6">

                                    {/* App/Company Image Box */}
                                    <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3 shadow-xl group-hover/card:scale-110 group-hover/card:-rotate-3 group-hover/card:bg-white/10 transition-all duration-500 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                                        <img
                                            src={exp.icon}
                                            alt={exp.title}
                                            className="w-full h-full object-contain filter drop-shadow-lg z-10"
                                            onError={(e) => {
                                                e.currentTarget.src = "https://api.iconify.design/lucide/briefcase.svg?color=%23ffffff";
                                            }}
                                        />
                                    </div>

                                    {/* Texts & Tech Stack */}
                                    <div className="flex flex-col flex-1 z-10">
                                        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-3 md:gap-4 mb-4">
                                            <div>
                                                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover/card:text-transparent group-hover/card:bg-clip-text group-hover/card:bg-linear-to-r group-hover/card:from-white group-hover/card:to-neutral-300 transition-all duration-300 max-w-lg">
                                                    {exp.title}
                                                </h3>
                                                <div className="inline-flex mt-2 items-center">
                                                    <span className="text-xs font-semibold text-neutral-300 bg-white/10 px-3 py-1.5 rounded-full tracking-wider uppercase border border-white/10 shadow-inner backdrop-blur-md">
                                                        {exp.period}
                                                    </span>
                                                </div>
                                            </div>
                                            <a
                                                href={exp.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center gap-2 text-sm text-neutral-200 hover:text-white transition-all duration-300 px-5 py-2.5 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full w-fit group/btn border border-white/10 hover:border-white/30 shadow-lg shrink-0 mt-2 lg:mt-0 relative overflow-hidden"
                                            >
                                                <span className="relative z-10 flex items-center gap-2">
                                                    Visit <ExternalLink className="w-4 h-4 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform duration-300" />
                                                </span>
                                            </a>
                                        </div>

                                        <div className="text-sm md:text-base text-neutral-300 leading-relaxed mt-1 mb-6 font-light space-y-3 max-w-xl group-hover/card:text-white transition-colors duration-500">
                                            {exp.description.split('\n').map((paragraph, idx) => (
                                                <p key={idx}>{paragraph}</p>
                                            ))}
                                        </div>

                                        <div className="flex flex-wrap items-center gap-2.5 mt-auto pt-4 border-t border-white/10">
                                            {exp.techStack.map((tech) => (
                                                <div
                                                    key={tech.name}
                                                    className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 hover:border-white/30 rounded-xl text-xs font-medium text-neutral-300 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] cursor-default backdrop-blur-md"
                                                    title={tech.name}
                                                >
                                                    <img
                                                        src={tech.icon}
                                                        alt={tech.name}
                                                        className="w-4 h-4 object-contain opacity-80 group-hover/card:opacity-100 transition-opacity duration-500"
                                                    />
                                                    {tech.name}
                                                </div>
                                            ))}
                                        </div>
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

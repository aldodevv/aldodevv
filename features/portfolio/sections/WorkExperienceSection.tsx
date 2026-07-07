"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { workExperiences } from "../constants/workExperience";
import RetroScrambleText from "@/features/portfolio/components/RetroScrambleText";

const hoverColors = [
    "#fa520f", // Mistral Orange
    "#ffb83e", // Mistral Yellow
    "#3b82f6", // Mistral Blue
    "#10b981", // Emerald Green
    "#ec4899", // Pink
    "#f43f5e", // Rose Red
    "#8b5cf6"  // Purple
];

export default function WorkExperienceSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });
    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section
            id="WorkExperience"
            data-nav-theme="dark-full"
            className="relative min-h-screen w-full flex flex-col items-center bg-transparent text-white py-32 px-4 md:px-10 border-t-4 border-white overflow-hidden"
        >
            {/* Visual grid lines overlay */}
            <div className="absolute inset-0 bg-retro-grid-fine pointer-events-none opacity-40 z-1" />

            <div className="max-w-5xl w-full flex flex-col relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center font-sans"
                >
                    <h2 className="text-5xl md:text-7xl font-bold tracking-widest mb-8 uppercase text-white">
                        <RetroScrambleText text="QUEST_LOG.EXE" />
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-mono">
                        A history of my professional journey, building scalable platforms, modern websites, and cross-platform mobile experiences.
                    </p>
                </motion.div>

                <div ref={containerRef} className="flex flex-col gap-10 relative">
                    {/* Vertical Timeline Line (Dashed Base) */}
                    <div className="absolute left-4 md:left-6 top-0 bottom-0 w-1 bg-white/10 border-l-2 border-dashed border-white/5 hidden md:block" />
                    
                    {/* Active Scrolling Line (Dynamic draw based on scroll progress!) */}
                    <motion.div 
                        style={{ scaleY, originY: 0 }} 
                        className="absolute left-4 md:left-6 top-0 bottom-0 w-1 bg-secondary hidden md:block" 
                    />

                    {workExperiences.map((exp, index) => {
                        const hoverColor = hoverColors[index % hoverColors.length];
                        return (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative flex flex-col md:flex-row gap-4 md:gap-6 items-start group"
                            >
                                {/* Timeline Square Dot */}
                                <div className="absolute left-4 md:left-6 mt-8 hidden md:flex items-center justify-center -translate-x-[6.5px] z-10 w-4 h-4 bg-zinc-950 border-2 border-white group-hover:bg-secondary group-hover:scale-125 transition-all duration-300">
                                    <div className="w-1.5 h-1.5 bg-zinc-600 group-hover:bg-black transition-colors" />
                                </div>

                                {/* Content Card (Outer Wrapper) */}
                                <div 
                                    className="relative flex-1 group/card ml-0 md:ml-12 overflow-hidden rounded-none border-4 border-white transition-all duration-300"
                                    style={{ 
                                        backgroundColor: hoverColor,
                                        boxShadow: `6px 6px 0px ${hoverColor}`
                                    }}
                                >
                                    {/* Inner Container that shifts */}
                                    <div className="relative w-full h-full bg-zinc-950/95 backdrop-blur-xl transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/card:-translate-x-4">

                                        {/* CRT overlay lines for card */}
                                        <div className="absolute inset-0 bg-retro-grid-fine pointer-events-none opacity-20 z-10" />

                                        {/* Desktop Background Image (Diagonal Half) */}
                                        <div
                                            className="absolute top-0 right-0 bottom-0 w-full md:w-[55%] z-0 overflow-hidden hidden md:block"
                                            style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
                                        >
                                            <div className="absolute inset-0 bg-zinc-950 via-zinc-950/60 to-transparent z-10 
                                                            group-hover/card:via-zinc-950/30 transition-all duration-500" />
                                            <img
                                                src={exp.image}
                                                alt=""
                                                className="w-full h-full object-cover opacity-35 group-hover/card:opacity-75 group-hover/card:scale-105 transition-all duration-500"
                                                onError={(e) => {
                                                    e.currentTarget.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop";
                                                }}
                                            />
                                        </div>

                                        {/* Mobile Background */}
                                        <div className="absolute inset-0 z-0 overflow-hidden md:hidden">
                                            <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/20 z-10 transition-all duration-500" />
                                            <img
                                                src={exp.image}
                                                alt=""
                                                className="w-full h-full object-cover opacity-25 group-hover/card:opacity-50 group-hover/card:scale-105 transition-all duration-500"
                                            />
                                        </div>

                                {/* Content Layer */}
                                <div className="relative z-10 h-full p-6 lg:p-8 flex flex-col md:flex-row gap-6">

                                    {/* App/Company Image Box */}
                                    <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-none bg-zinc-900 border-2 border-white flex items-center justify-center p-3 shadow-[2px_2px_0px_#ffffff] group-hover/card:scale-105 group-hover/card:bg-zinc-800 transition-all duration-300 relative overflow-hidden">
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
                                                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover/card:text-secondary transition-all duration-300 max-w-lg uppercase font-sans tracking-wide">
                                                    {exp.title}
                                                </h3>
                                                <div className="inline-flex mt-2 items-center">
                                                    <span className="text-xs font-bold text-secondary bg-primary/20 px-3 py-1 border border-primary tracking-widest uppercase font-mono">
                                                        {exp.period}
                                                    </span>
                                                </div>
                                            </div>
                                            <a
                                                href={exp.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center gap-2 text-sm text-white bg-zinc-900 hover:bg-secondary hover:text-black transition-all duration-300 px-5 py-2 rounded-none group/btn border-2 border-white shadow-[2px_2px_0px_#ffffff] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 shrink-0 mt-2 lg:mt-0 relative overflow-hidden font-mono"
                                            >
                                                <span className="relative z-10 flex items-center gap-2">
                                                    VISIT <ExternalLink className="w-4 h-4" />
                                                </span>
                                            </a>
                                        </div>

                                        <div className="text-sm md:text-base text-zinc-300 leading-relaxed mt-1 mb-6 font-mono space-y-3 max-w-xl group-hover/card:text-white transition-colors duration-300">
                                            {exp.description.split('\n').map((paragraph, idx) => (
                                                <p key={idx}>✓ {paragraph}</p>
                                            ))}
                                        </div>

                                        <div className="flex flex-wrap items-center gap-3.5 mt-auto pt-4 border-t-2 border-white/10">
                                            {exp.techStack.map((tech) => (
                                                <div
                                                    key={tech.name}
                                                    className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border-2 border-white/60 rounded-none text-xs font-bold text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-800 hover:border-white shadow-[2px_2px_0px_#fa520f] cursor-default font-mono"
                                                    title={tech.name}
                                                >
                                                    <img
                                                        src={tech.icon}
                                                        alt={tech.name}
                                                        className="w-4 h-4 object-contain opacity-80"
                                                    />
                                                    {tech.name.toUpperCase()}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
                </div>
            </div>
        </section>
    );
}

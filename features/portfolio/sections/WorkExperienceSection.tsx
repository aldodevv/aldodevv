"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { workExperiences } from "../constants/workExperience";
import RetroTypewriterText from "@/features/portfolio/components/RetroTypewriterText";

const hoverColors = [
    "#ff5e5e", // Salmon Red
    "#ffd54f", // Canary Yellow
    "#b088f9", // Lilac Purple
    "#3cd070", // Lime Green
    "#3fc1e8", // Sky Blue
    "#ff8a5c", // Pastel Orange
];

export default function WorkExperienceSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section
            id="WorkExperience"
            data-nav-theme="dark-full"
            className="relative min-h-screen w-full flex flex-col items-center bg-transparent text-black py-32 px-4 md:px-10 border-t-4 border-black overflow-hidden"
        >
            {/* Visual grid lines overlay */}
            <div className="absolute inset-0 bg-retro-grid-fine pointer-events-none opacity-20 z-1" />

            <div className="max-w-5xl w-full flex flex-col relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center font-sans"
                >
                    <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8 uppercase text-black">
                        <RetroTypewriterText text="QUEST_LOG " />
                    </h2>
                    <p className="text-lg md:text-xl text-black/75 max-w-2xl mx-auto leading-relaxed font-mono font-medium">
                        A history of my professional journey, building scalable platforms, modern websites, and cross-platform mobile experiences.
                    </p>
                </motion.div>

                <div ref={containerRef} className="flex flex-col gap-10 relative">
                    {/* Vertical Timeline Line (Dashed Base) */}
                    <div className="absolute left-4 md:left-6 top-0 bottom-0 w-1 bg-black/15 border-l-2 border-dashed border-black/10 hidden md:block" />

                    {/* Active Scrolling Line (Dynamic draw based on scroll progress!) */}
                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute left-4 md:left-6 top-0 bottom-0 w-1.5 bg-black hidden md:block"
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
                                <div className="absolute left-4 md:left-6 mt-[26px] hidden md:flex items-center justify-center -translate-x-[5.5px] z-10 w-4 h-4 bg-white border-2 border-black group-hover:bg-[#ffd54f] group-hover:scale-125 transition-all duration-300">
                                    <div className="w-1.5 h-1.5 bg-black" />
                                </div>

                                {/* Content Card (Outer Wrapper) */}
                                <div
                                    className="relative flex-1 group/card ml-0 md:ml-12 overflow-hidden border-4 border-black transition-all duration-300"
                                    style={{
                                        backgroundColor: hoverColor,
                                        boxShadow: "6px 6px 0px #000000"
                                    }}
                                >
                                    {/* Inner Container that shifts */}
                                    <div
                                        style={{
                                            transform: `translate3d(0, 0, 0)`,
                                        }}
                                        className="relative w-full h-full bg-white border-2 border-black overflow-hidden flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] 
                                                    group-hover/card:-translate-x-3 group-hover/card:-translate-y-3"
                                    >
                                        {/* OS Window header */}
                                        <div
                                            className="border-b-2 border-black px-4 py-2 flex items-center justify-between shrink-0 font-black font-sans uppercase tracking-widest text-xs select-none"
                                            style={{ backgroundColor: hoverColor }}
                                        >
                                            <div className="flex gap-1.5">
                                                <span className="w-2.5 h-2.5 rounded-full bg-white border border-black" />
                                                <span className="w-2.5 h-2.5 rounded-full bg-white border border-black" />
                                                <span className="w-2.5 h-2.5 rounded-full bg-white border border-black" />
                                            </div>
                                            <span className="text-black font-black">{exp.title.replace(/\s+/g, "_").toUpperCase()}</span>
                                            <span className="font-mono text-black font-black">✕</span>
                                        </div>

                                        {/* Background Image (Faded Diagonal) */}
                                        <div
                                            className="absolute top-0 right-0 bottom-0 w-full md:w-[50%] z-0 overflow-hidden hidden md:block"
                                            style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
                                        >
                                            <div className="absolute inset-0 bg-white via-white/80 to-transparent z-10" />
                                            <img
                                                src={exp.image}
                                                alt=""
                                                className="w-full h-full object-cover opacity-[0.08] group-hover/card:opacity-[0.15] group-hover/card:scale-105 transition-all duration-500"
                                                onError={(e) => {
                                                    e.currentTarget.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop";
                                                }}
                                            />
                                        </div>

                                        {/* Mobile Background Image (Faded) */}
                                        <div className="absolute inset-0 z-0 overflow-hidden md:hidden">
                                            <div className="absolute inset-0 bg-linear-to-t from-white via-white/95 to-white/40 z-10 transition-all duration-500" />
                                            <img
                                                src={exp.image}
                                                alt=""
                                                className="w-full h-full object-cover opacity-[0.05] group-hover/card:opacity-[0.1] group-hover/card:scale-105 transition-all duration-500"
                                            />
                                        </div>

                                        {/* Content Layer */}
                                        <div className="relative z-10 h-full p-6 lg:p-8 flex flex-col md:flex-row gap-6 text-black">

                                            {/* App/Company Image Box */}
                                            <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 rounded-none bg-white border-2 border-black flex items-center justify-center p-3 shadow-[3px_3px_0px_#000000] group-hover/card:scale-105 transition-all duration-300 relative overflow-hidden">
                                                <img
                                                    src={exp.icon}
                                                    alt={exp.title}
                                                    className="w-full h-full object-contain z-10"
                                                    onError={(e) => {
                                                        e.currentTarget.src = "https://api.iconify.design/lucide/briefcase.svg?color=%23000000";
                                                    }}
                                                />
                                            </div>

                                            {/* Texts & Tech Stack */}
                                            <div className="flex flex-col flex-1 z-10">
                                                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-3 md:gap-4 mb-4">
                                                    <div>
                                                        <h3 className="text-2xl md:text-3xl font-black text-black transition-all duration-300 max-w-lg uppercase font-sans tracking-tight">
                                                            {exp.title}
                                                        </h3>
                                                        <div className="inline-flex mt-2 items-center">
                                                            <span className="text-xs font-black text-black bg-[#ffd54f] px-3 py-1 border-2 border-black tracking-widest uppercase font-mono shadow-sm">
                                                                {exp.period}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href={exp.link}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="inline-flex items-center gap-2 text-sm text-black bg-[#3fc1e8] hover:bg-[#ff5e5e] transition-all duration-300 px-5 py-2.5 border-2 border-black shadow-[3px_3px_0px_#000000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 shrink-0 mt-2 lg:mt-0 relative overflow-hidden font-mono font-black"
                                                    >
                                                        <span className="relative z-10 flex items-center gap-2">
                                                            VISIT <ExternalLink className="w-4 h-4 stroke-[2.5]" />
                                                        </span>
                                                    </a>
                                                </div>

                                                <div className="text-sm md:text-base text-black/80 font-medium leading-relaxed mt-1 mb-6 font-mono space-y-3 max-w-xl transition-colors duration-300">
                                                    {exp.description.split('\n').map((paragraph, idx) => (
                                                        <p key={idx}>✓ {paragraph}</p>
                                                    ))}
                                                </div>

                                                <div className="flex flex-wrap items-center gap-3.5 mt-auto pt-4 border-t-2 border-black/15">
                                                    {exp.techStack.map((tech) => (
                                                        <div
                                                            key={tech.name}
                                                            className="flex items-center gap-2 px-3 py-1.5 bg-[#f7f6f0] border-2 border-black text-xs font-black text-black transition-all duration-300 hover:-translate-y-0.5 shadow-[2px_2px_0px_#000000] cursor-default font-mono"
                                                            title={tech.name}
                                                        >
                                                            <img
                                                                src={tech.icon}
                                                                alt={tech.name}
                                                                className="w-4 h-4 object-contain opacity-90"
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

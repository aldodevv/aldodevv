"use client";

import React, { useRef } from "react";
import { workExperiences } from "../constants/workExperience";
import { ExternalLink, Calendar, MapPin, CheckCircle } from "lucide-react";

export default function WorkExperienceSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section
            id="WorkExperience"
            ref={containerRef}
            className="relative w-full bg-[#0a0a0a] text-[#eaeaea] py-24 px-4 md:px-8 border-b border-[#262626]"
        >
            <div className="max-w-6xl w-full mx-auto flex flex-col gap-12">
                {/* Section Telemetry Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#262626] pb-6">
                    <div>
                        <div className="text-xs font-mono text-[#ff2a2a] tracking-widest uppercase mb-1">
                            [ CHRONOLOGICAL SERVICE RECORD // AUDIT LOG ]
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black font-sans tracking-tight uppercase text-[#eaeaea]">
                            DEPLOYMENT // <span className="text-[#888888]">HISTORY</span>
                        </h2>
                    </div>
                    <div className="flex items-center gap-3 font-mono text-xs text-[#888888]">
                        <span className="border border-[#262626] bg-[#121212] px-3 py-1.5">
                            RECORDS: {workExperiences.length} MISSIONS
                        </span>
                        <span className="border border-[#4af626] text-[#4af626] bg-[#4af626]/10 px-3 py-1.5 font-bold">
                            AUDIT: PASSED
                        </span>
                    </div>
                </div>

                {/* Vertical Deployment Stream */}
                <div className="relative border-l border-[#262626] pl-6 md:pl-10 flex flex-col gap-10">
                    {workExperiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className="relative flex flex-col gap-3 group"
                        >
                            {/* Chronology Reticle Anchor on Left Line */}
                            <div className="absolute -left-[31px] md:-left-[47px] top-4 w-4 h-4 bg-[#0a0a0a] border border-[#ff2a2a] flex items-center justify-center">
                                <div className="w-1.5 h-1.5 bg-[#ff2a2a]" />
                            </div>

                            {/* Mission Record Box */}
                            <div className="border border-[#262626] bg-[#121212] p-6 md:p-8 hover:border-[#444444] transition-colors relative">
                                {/* Header Bar of the Record */}
                                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#222222] pb-4 mb-5 font-mono text-xs">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[#ff2a2a] font-bold">
                                            [ LOG-0{index + 1} ]
                                        </span>
                                        <span className="text-[#888888] uppercase">
                                            MISSION: {exp.title}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[#888888]">
                                        <Calendar className="w-3.5 h-3.5 text-[#ff2a2a]" />
                                        <span className="text-[#eaeaea] font-bold uppercase">{exp.period}</span>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row gap-6">
                                    {/* Icon / Unit Insignia */}
                                    <div className="w-16 h-16 p-2 bg-[#0a0a0a] border border-[#262626] shrink-0 flex items-center justify-center">
                                        <img
                                            src={exp.icon}
                                            alt={exp.title}
                                            className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                                            onError={(e) => {
                                                e.currentTarget.src =
                                                    "https://api.iconify.design/lucide/briefcase.svg?color=%23ffffff";
                                            }}
                                        />
                                    </div>

                                    {/* Mission Details */}
                                    <div className="flex flex-col gap-4 flex-grow">
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold font-sans tracking-tight text-[#eaeaea] uppercase">
                                                {exp.title}
                                            </h3>
                                            <div className="text-xs font-mono text-[#ff2a2a] tracking-wider mt-1 uppercase">
                                                STATUS // VERIFIED PRODUCTION RELEASE
                                            </div>
                                        </div>

                                        <p className="text-sm font-mono text-[#aaaaaa] leading-relaxed">
                                            {exp.description}
                                        </p>

                                        {/* Technology Badges */}
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {exp.techStack.map((tech) => (
                                                <span
                                                    key={tech.name}
                                                    className="px-2 py-0.5 border border-[#262626] bg-[#0a0a0a] font-mono text-[10px] text-[#888888] uppercase tracking-wider"
                                                >
                                                    {tech.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* External Transmission Link if available */}
                                {exp.link && (
                                    <div className="mt-6 pt-4 border-t border-[#222222] flex justify-end">
                                        <a
                                            href={exp.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="industrial-btn flex items-center gap-1.5 text-xs text-[#ff2a2a] border-[#ff2a2a]/40 hover:border-[#ff2a2a]"
                                        >
                                            <span>VERIFY TRANSMISSION</span>
                                            <ExternalLink className="w-3.5 h-3.5" />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

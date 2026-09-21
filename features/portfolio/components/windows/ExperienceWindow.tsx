"use client";

import React from "react";
import { TacticalWindow } from "./TacticalWindow";
import { workExperiences } from "../../constants/workExperience";
import { Calendar, Briefcase } from "lucide-react";

export const ExperienceWindow: React.FC = () => {
    return (
        <TacticalWindow
            id="experience"
            title="CHRONOLOGY // OPERATIONAL CAMPAIGNS"
            code="OPS // TIMELINE"
            defaultPosition={{ x: 50, y: 25 }}
            defaultWidth="w-[94vw] sm:w-[680px] md:w-[760px]"
        >
            <div className="flex flex-col gap-6">
                {/* Header overview */}
                <div className="flex items-center justify-between p-3 bg-[#141414] border border-[#2a2a2a] text-xs font-mono">
                    <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-[#ffb703]" />
                        <span className="text-[#ffb703] font-bold">CAREER MISSION LOG</span>
                    </div>
                    <span className="text-[10px] text-[#888888]">CHRONOLOGICAL SORT {"//"} 2021 &mdash; PRESENT</span>
                </div>

                {/* Timeline list */}
                <div className="relative pl-6 border-l-2 border-[#2a2a2a] flex flex-col gap-6 max-h-[420px] overflow-y-auto pr-2">
                    {workExperiences.map((exp, idx) => (
                        <div key={exp.id} className="relative flex flex-col gap-2 group">
                            {/* Dot on timeline line */}
                            <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-[#0a0a0a] border-2 border-[#ffb703] group-hover:bg-[#ffb703] transition-colors" />

                            <div className="flex flex-wrap items-center justify-between gap-2">
                                <div className="flex items-center gap-2">
                                    <span className="font-mono text-[10px] text-[#ffb703] font-bold">
                                        [0{idx + 1} {"//"} CAMPAIGN]
                                    </span>
                                    <h4 className="font-sans font-bold text-base text-[#eaeaea] group-hover:text-[#ffb703] transition-colors">
                                        {exp.title}
                                    </h4>
                                </div>
                                <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#888888] bg-[#121212] px-2 py-0.5 border border-[#222222]">
                                    <Calendar className="w-3 h-3 text-[#ffb703]" />
                                    <span>{exp.period}</span>
                                </div>
                            </div>

                            <p className="font-mono text-xs text-[#aaaaaa] leading-relaxed">
                                {exp.description}
                            </p>

                            <div className="flex flex-wrap items-center gap-1.5 pt-1">
                                {exp.techStack.map((tech) => (
                                    <span
                                        key={tech.name}
                                        className="font-mono text-[9px] px-2 py-0.5 bg-[#141414] border border-[#262626] text-[#888888]"
                                    >
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </TacticalWindow>
    );
};

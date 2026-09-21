"use client";

import React, { useState } from "react";
import { TacticalWindow } from "./TacticalWindow";
import { workExperiences } from "../../constants/workExperience";
import { ExternalLink } from "lucide-react";

export const ProjectsWindow: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState(workExperiences[0]);

    return (
        <TacticalWindow
            id="projects"
            title="SYSTEMS ARMORY // DELIVERABLES ARCHIVE"
            code="ARMORY // SYS"
            defaultPosition={{ x: 60, y: 30 }}
            defaultWidth="w-[96vw] sm:w-[780px] md:w-[860px]"
        >
            <div className="flex flex-col gap-6">
                {/* Intro Status */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 bg-[#141414] border border-[#2a2a2a] text-xs font-mono">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#ff2a2a] animate-pulse" />
                        <span className="text-[#ff2a2a] font-bold">TOTAL SYSTEMS DEPLOYED: {workExperiences.length}</span>
                    </div>
                    <div className="text-[10px] text-[#888888]">
                        SECTOR: BANKING, SOCIAL COMMERCE & HIGH-SCALE APPS
                    </div>
                </div>

                {/* Master - Detail Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    {/* Left: Project Selector List */}
                    <div className="md:col-span-5 flex flex-col gap-2 max-h-[380px] overflow-y-auto pr-1">
                        {workExperiences.map((proj) => {
                            const isSelected = selectedProject.id === proj.id;
                            return (
                                <button
                                    key={proj.id}
                                    type="button"
                                    onClick={() => setSelectedProject(proj)}
                                    className={`w-full text-left p-3 border transition-all flex flex-col gap-1.5 ${
                                        isSelected
                                            ? "bg-[#1f1f1f] border-[#ff2a2a] text-[#ffffff]"
                                            : "bg-[#111111] border-[#222222] text-[#aaaaaa] hover:border-[#444444] hover:bg-[#161616]"
                                    }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="font-mono text-[10px] text-[#ff2a2a] font-bold">
                                            [{proj.id.toUpperCase()}]
                                        </span>
                                        <span className="font-mono text-[9px] text-[#666666]">{proj.period}</span>
                                    </div>
                                    <h4 className="font-sans font-bold text-sm tracking-tight text-[#eaeaea] truncate">
                                        {proj.title}
                                    </h4>
                                    <div className="flex flex-wrap gap-1 mt-1">
                                        {proj.techStack.slice(0, 3).map((t) => (
                                            <span
                                                key={t.name}
                                                className="text-[9px] font-mono px-1.5 py-0.5 bg-[#0a0a0a] border border-[#2a2a2a] text-[#888888]"
                                            >
                                                {t.name}
                                            </span>
                                        ))}
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right: Selected Project Inspection Panel */}
                    <div className="md:col-span-7 bg-[#121212] border border-[#262626] p-4 flex flex-col justify-between gap-4">
                        <div className="flex flex-col gap-3">
                            {/* Project Header */}
                            <div className="flex items-center justify-between border-b border-[#222222] pb-3">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={selectedProject.icon}
                                        alt={selectedProject.title}
                                        className="w-10 h-10 object-contain rounded border border-[#333333] bg-[#0c0c0c] p-1"
                                    />
                                    <div>
                                        <h3 className="font-sans font-black text-lg text-[#eaeaea] leading-tight">
                                            {selectedProject.title}
                                        </h3>
                                        <span className="font-mono text-[10px] text-[#4af626] tracking-wider">
                                            OPERATIONAL STAGE // {selectedProject.period}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Project Visual Preview */}
                            <div className="relative w-full h-44 border border-[#333333] bg-[#0a0a0a] overflow-hidden group">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-2 left-2 text-[9px] font-mono text-[#ff2a2a] bg-[#0a0a0a]/90 px-2 py-0.5 border border-[#ff2a2a]/40">
                                    LIVE DEPLOYMENT ARTIFACT
                                </div>
                            </div>

                            {/* Narrative */}
                            <p className="font-mono text-xs text-[#cccccc] leading-relaxed">
                                {selectedProject.description}
                            </p>

                            {/* Full Tech Stack */}
                            <div className="flex flex-col gap-1.5">
                                <span className="font-mono text-[10px] text-[#777777] uppercase tracking-wider">
                                    COMPILED STACK ARSENAL:
                                </span>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.techStack.map((tech) => (
                                        <div
                                            key={tech.name}
                                            className="flex items-center gap-1.5 px-2 py-1 bg-[#181818] border border-[#2d2d2d] text-[11px] font-mono text-[#eaeaea]"
                                        >
                                            <img src={tech.icon} alt="" className="w-3.5 h-3.5 object-contain" />
                                            <span>{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Action Link */}
                        <div className="pt-3 border-t border-[#222222] flex items-center justify-between">
                            <span className="font-mono text-[10px] text-[#666666]">
                                STATUS: VERIFIED PRODUCTION
                            </span>
                            <a
                                href={selectedProject.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#ff2a2a] hover:bg-[#ff4444] text-black font-mono text-xs font-bold uppercase tracking-wider transition-colors"
                            >
                                <span>Inspect Live App</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </TacticalWindow>
    );
};

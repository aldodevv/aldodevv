"use client";

import React, { useState } from "react";
import { TacticalWindow } from "./TacticalWindow";
import { techStack } from "../../constants/techStack";
import { Search, Zap } from "lucide-react";

export const SkillsWindow: React.FC = () => {
    const [activeTab, setActiveTab] = useState<number>(0);
    const [searchQuery, setSearchQuery] = useState<string>("");

    const currentCategory = techStack[activeTab];

    const filteredItems = currentCategory.items.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <TacticalWindow
            id="skills"
            title="R&D ARSENAL // TECHNICAL SPECIFICATIONS"
            code="LAB // TECH"
            defaultPosition={{ x: 40, y: 40 }}
            defaultWidth="w-[94vw] sm:w-[680px] md:w-[740px]"
        >
            <div className="flex flex-col gap-5">
                {/* Header telemetry */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 bg-[#141414] border border-[#2a2a2a]">
                    <div className="flex items-center gap-2 text-xs font-mono">
                        <Zap className="w-4 h-4 text-[#00f0ff]" />
                        <span className="text-[#00f0ff] font-bold">CROSS-PLATFORM WEAPONRY</span>
                        <span className="text-[#555555]">{"//"}</span>
                        <span className="text-[#888888]">SPECIALIZED MOBILE &amp; WEB</span>
                    </div>

                    {/* Filter search */}
                    <div className="relative w-full sm:w-48">
                        <input
                            type="text"
                            placeholder="SEARCH STACK..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-[#0c0c0c] border border-[#333333] px-2.5 py-1 text-[11px] font-mono text-[#eaeaea] focus:border-[#00f0ff] outline-none uppercase placeholder:text-[#555555]"
                        />
                        <Search className="w-3.5 h-3.5 text-[#555555] absolute right-2 top-2 pointer-events-none" />
                    </div>
                </div>

                {/* Category Navigation Tabs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 border-b border-[#262626] pb-2">
                    {techStack.map((cat, idx) => {
                        const isActive = activeTab === idx;
                        return (
                            <button
                                key={cat.title}
                                type="button"
                                onClick={() => {
                                    setActiveTab(idx);
                                    setSearchQuery("");
                                }}
                                className={`px-3 py-2 text-left border text-[11px] font-mono tracking-wider uppercase transition-colors flex items-center justify-between ${
                                    isActive
                                        ? "bg-[#1f1f1f] border-[#00f0ff] text-[#00f0ff] font-bold"
                                        : "bg-[#111111] border-[#222222] text-[#888888] hover:border-[#444444] hover:text-[#cccccc]"
                                }`}
                            >
                                <span className="truncate">{cat.title}</span>
                                <span className="text-[9px] opacity-60">({cat.items.length})</span>
                            </button>
                        );
                    })}
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 max-h-[340px] overflow-y-auto pr-1">
                    {filteredItems.map((tech) => (
                        <div
                            key={tech.name}
                            className="flex items-center gap-2.5 p-2.5 bg-[#121212] border border-[#262626] hover:border-[#00f0ff] transition-all group"
                        >
                            <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center bg-[#1a1a1a] border border-[#333333] p-1">
                                <img
                                    src={tech.image}
                                    alt={tech.name}
                                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all"
                                />
                            </div>
                            <span className="font-mono text-xs text-[#cccccc] group-hover:text-[#eaeaea] truncate font-medium">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                    {filteredItems.length === 0 && (
                        <div className="col-span-full py-8 text-center text-xs font-mono text-[#666666]">
                            NO PROTOCOLS FOUND FOR QUERY // REVISE PARAMETERS
                        </div>
                    )}
                </div>

                {/* Key architectural highlights */}
                <div className="p-3 bg-[#0d0d0d] border border-[#222222] text-[11px] font-mono text-[#777777] flex items-center justify-between">
                    <span>DOMAINS: NATIVE BRIDGING (JNI/CGO) · CLEAN ARCHITECTURE (BLOC/RIVERPOD/REDUX)</span>
                    <span className="text-[#00f0ff]">LEVEL: SENIOR</span>
                </div>
            </div>
        </TacticalWindow>
    );
};

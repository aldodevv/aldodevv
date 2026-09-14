"use client";

import React, { useState } from "react";
import { techStack } from "../constants/techStack";
import { Cpu, Terminal, Layers } from "lucide-react";

export default function TechStackSection() {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    return (
        <section
            id="TechStack"
            className="relative w-full bg-[#0a0a0a] text-[#eaeaea] py-24 px-4 md:px-8 border-b border-[#262626]"
        >
            <div className="max-w-7xl w-full mx-auto flex flex-col gap-12">
                {/* Section Telemetry Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#262626] pb-6">
                    <div>
                        <div className="text-xs font-mono text-[#ff2a2a] tracking-widest uppercase mb-1">
                            [ SUBSYSTEM SPECIFICATIONS // HARDWARE & SOFTWARE ]
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black font-sans tracking-tight uppercase text-[#eaeaea]">
                            CAPABILITY // <span className="text-[#888888]">MATRIX</span>
                        </h2>
                    </div>
                    <div className="flex items-center gap-3 font-mono text-xs text-[#888888]">
                        <span className="border border-[#262626] bg-[#121212] px-3 py-1.5">
                            PARADIGM: DETERMINISTIC
                        </span>
                        <span className="border border-[#ff2a2a] text-[#ff2a2a] bg-[#ff2a2a]/10 px-3 py-1.5 font-bold">
                            32 ACTIVE MODULES
                        </span>
                    </div>
                </div>

                {/* Subsystem Racks */}
                <div className="flex flex-col gap-10">
                    {techStack.map((category, catIdx) => (
                        <div key={category.title} className="flex flex-col gap-3">
                            {/* Rack Header */}
                            <div className="flex items-center justify-between border-b border-[#222222] pb-2 font-mono text-xs">
                                <div className="flex items-center gap-2">
                                    <span className="text-[#ff2a2a] font-bold">
                                        [ RACK-0{catIdx + 1} ]
                                    </span>
                                    <span className="text-[#eaeaea] font-bold uppercase tracking-wider">
                                        {category.title}
                                    </span>
                                </div>
                                <span className="text-[10px] text-[#666666] uppercase">
                                    COUNT: {category.items.length} MODULES
                                </span>
                            </div>

                            {/* 1px Grid Determinism Rack */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-px bg-[#262626] border border-[#262626]">
                                {category.items.map((item, idx) => (
                                    <div
                                        key={item.name}
                                        className="bg-[#121212] p-4 flex flex-col justify-between gap-4 group hover:bg-[#1c1c1c] transition-colors cursor-pointer relative"
                                    >
                                        <div className="flex items-center justify-between font-mono text-[9px] text-[#555555]">
                                            <span className="group-hover:text-[#ff2a2a] transition-colors">
                                                MOD-{idx < 9 ? `0${idx + 1}` : idx + 1}
                                            </span>
                                            <span>+</span>
                                        </div>

                                        <div className="w-8 h-8 p-1 bg-[#0a0a0a] border border-[#262626] group-hover:border-[#ff2a2a] flex items-center justify-center transition-colors">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                                                onError={(e) => {
                                                    e.currentTarget.src =
                                                        "https://api.iconify.design/lucide/code-2.svg?color=%23ffffff";
                                                }}
                                            />
                                        </div>

                                        <div>
                                            <div className="font-mono text-xs font-bold text-[#eaeaea] uppercase tracking-wider truncate">
                                                {item.name}
                                            </div>
                                            <div className="font-mono text-[9px] text-[#666666] tracking-tighter uppercase mt-0.5">
                                                ACTIVE
                                            </div>
                                        </div>

                                        {/* Hover Indicator Bar */}
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-transparent group-hover:bg-[#ff2a2a] transition-colors" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SECTORS, useTacticalWorld, WindowId } from "../../context/TacticalWorldContext";
import {
    RotateCcw,
    Terminal,
    Shield,
    Cpu,
    Briefcase,
    Mail,
    User,
} from "lucide-react";

export const TacticalWorldMap: React.FC = () => {
    const {
        camera,
        activeSector,
        focusSector,
        resetCamera,
        openWindow,
    } = useTacticalWorld();

    const [radarAngle, setRadarAngle] = useState(0);
    const [currentTime, setCurrentTime] = useState("");

    // Live telemetry clock
    useEffect(() => {
        const updateClock = () => {
            const d = new Date();
            setCurrentTime(
                d.toLocaleTimeString("en-US", {
                    hour12: false,
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                })
            );
        };
        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    // Radar rotation animation loop
    useEffect(() => {
        let frame: number;
        const animate = () => {
            setRadarAngle((prev) => (prev + 0.4) % 360);
            frame = requestAnimationFrame(animate);
        };
        frame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame);
    }, []);

    const getSectorIcon = (id: WindowId) => {
        switch (id) {
            case "about":
                return <User className="w-5 h-5 text-[#4af626]" />;
            case "projects":
                return <Shield className="w-5 h-5 text-[#ff2a2a]" />;
            case "skills":
                return <Cpu className="w-5 h-5 text-[#00f0ff]" />;
            case "experience":
                return <Briefcase className="w-5 h-5 text-[#ffb703]" />;
            case "contact":
                return <Mail className="w-5 h-5 text-[#b5179e]" />;
            case "terminal":
                return <Terminal className="w-5 h-5 text-[#39ff14]" />;
        }
    };

    return (
        <div className="relative w-full h-[100dvh] overflow-hidden bg-[#07090e] select-none">
            {/* 1. Animated Camera & Map Canvas Layer */}
            <motion.div
                className="absolute inset-0 w-full h-full origin-center flex items-center justify-center cursor-crosshair"
                animate={{
                    x: `${camera.x}%`,
                    y: `${camera.y}%`,
                    scale: camera.zoom,
                }}
                transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 18,
                    mass: 0.9,
                }}
            >
                {/* Tactical Blueprint Grid */}
                <div
                    className="absolute inset-[-50%] w-[200%] h-[200%] pointer-events-none opacity-35"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(74, 246, 38, 0.08) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(74, 246, 38, 0.08) 1px, transparent 1px),
                            linear-gradient(to right, rgba(255, 42, 42, 0.04) 5px, transparent 5px),
                            linear-gradient(to bottom, rgba(255, 42, 42, 0.04) 5px, transparent 5px)
                        `,
                        backgroundSize: "60px 60px, 60px 60px, 300px 300px, 300px 300px",
                    }}
                />

                {/* Radar Sweep Arc Beam */}
                <div
                    className="absolute w-[900px] h-[900px] rounded-full pointer-events-none opacity-25"
                    style={{
                        background: `conic-gradient(from ${radarAngle}deg at 50% 50%, rgba(74, 246, 38, 0.4) 0deg, rgba(74, 246, 38, 0.0) 65deg, transparent 90deg)`,
                    }}
                />

                {/* Radar Concentric Distance Rings */}
                <div className="absolute w-[350px] h-[350px] rounded-full border border-[#4af626]/20 pointer-events-none" />
                <div className="absolute w-[650px] h-[650px] rounded-full border border-[#4af626]/15 pointer-events-none" />
                <div className="absolute w-[950px] h-[950px] rounded-full border border-[#4af626]/10 pointer-events-none" />

                {/* Axis Crosshairs */}
                <div className="absolute w-full h-px bg-[#4af626]/15 pointer-events-none" />
                <div className="absolute h-full w-px bg-[#4af626]/15 pointer-events-none" />

                {/* Map Center HQ Hub Marker */}
                <div className="absolute flex flex-col items-center justify-center pointer-events-none z-0">
                    <div className="w-16 h-16 border border-[#4af626]/40 flex items-center justify-center rotate-45">
                        <div className="w-6 h-6 border border-[#ff2a2a]/60 flex items-center justify-center" />
                    </div>
                    <span className="font-mono text-[9px] tracking-widest text-[#4af626]/60 mt-4 uppercase">
                        BASE // ALDO_TACTICAL_HQ
                    </span>
                </div>

                {/* Interactive Sector Nodes (POIs) */}
                <div className="relative w-full max-w-6xl h-[80vh]">
                    {SECTORS.map((sector) => {
                        const isFocused = activeSector === sector.id;

                        return (
                            <div
                                key={sector.id}
                                style={{
                                    left: `${sector.x}%`,
                                    top: `${sector.y}%`,
                                }}
                                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
                            >
                                {/* Pulsing Beacon Ring */}
                                <div
                                    className={`absolute -inset-4 rounded-full border opacity-40 group-hover:opacity-100 transition-opacity pointer-events-none ${
                                        isFocused ? "animate-ping opacity-75" : ""
                                    }`}
                                    style={{ borderColor: sector.color }}
                                />

                                {/* Interactive Node Box */}
                                <button
                                    type="button"
                                    onClick={() => focusSector(sector.id)}
                                    className={`relative flex flex-col items-center justify-center p-3 border transition-all duration-200 cursor-pointer ${
                                        isFocused
                                            ? "bg-[#161616] scale-110 shadow-[0_0_30px_rgba(74,246,38,0.3)]"
                                            : "bg-[#0d1017]/90 hover:bg-[#151922] hover:scale-105"
                                    }`}
                                    style={{
                                        borderColor: sector.color,
                                    }}
                                >
                                    {/* Corner Reticle Marks */}
                                    <span
                                        className="absolute -top-1 -left-1 text-[8px] font-mono leading-none"
                                        style={{ color: sector.color }}
                                    >
                                        +
                                    </span>
                                    <span
                                        className="absolute -top-1 -right-1 text-[8px] font-mono leading-none"
                                        style={{ color: sector.color }}
                                    >
                                        +
                                    </span>
                                    <span
                                        className="absolute -bottom-1 -left-1 text-[8px] font-mono leading-none"
                                        style={{ color: sector.color }}
                                    >
                                        +
                                    </span>
                                    <span
                                        className="absolute -bottom-1 -right-1 text-[8px] font-mono leading-none"
                                        style={{ color: sector.color }}
                                    >
                                        +
                                    </span>

                                    {/* Icon & Code */}
                                    <div className="flex items-center gap-2 mb-1.5">
                                        {getSectorIcon(sector.id)}
                                        <span
                                            className="font-mono text-[9px] font-bold tracking-widest uppercase"
                                            style={{ color: sector.color }}
                                        >
                                            {sector.sectorCode}
                                        </span>
                                    </div>

                                    {/* Sector Title */}
                                    <span className="font-sans font-black text-xs sm:text-sm tracking-tight uppercase text-[#eaeaea] whitespace-nowrap">
                                        {sector.title}
                                    </span>

                                    {/* Subtitle Telemetry */}
                                    <span className="font-mono text-[9px] text-[#777777] uppercase tracking-wider hidden sm:block whitespace-nowrap">
                                        {sector.subtitle}
                                    </span>

                                    {/* Telemetry Tooltip on Hover */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 p-2 bg-[#0c0c0c] border border-[#333333] shadow-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-150 z-30 text-left">
                                        <div className="font-mono text-[9px] text-[#ff2a2a] uppercase font-bold mb-1">
                                            [ DIRECTIVE DATA ]
                                        </div>
                                        <p className="font-mono text-[10px] text-[#aaaaaa] leading-relaxed">
                                            {sector.description}
                                        </p>
                                        <div className="mt-1.5 pt-1 border-t border-[#222222] font-mono text-[8px] text-[#4af626] uppercase flex items-center justify-between">
                                            <span>ACTION: CLICK TO INFILTRATE</span>
                                            <span>[ ENTER ]</span>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        );
                    })}
                </div>
            </motion.div>

            {/* 2. Top Telemetry Status HUD */}
            <div className="absolute top-16 left-4 right-4 z-10 pointer-events-none flex items-center justify-between">
                {/* Left Telemetry */}
                <div className="flex flex-col gap-1 pointer-events-auto bg-[#0d1017]/85 border border-[#262626] p-2.5 font-mono text-[11px] backdrop-blur-sm">
                    <div className="flex items-center gap-2 text-[#4af626]">
                        <span className="w-2 h-2 bg-[#4af626] animate-pulse" />
                        <span className="font-bold">TACTICAL RADAR {"//"} ACTIVE</span>
                    </div>
                    <div className="text-[10px] text-[#888888]">
                        SECTORS DETECTED: {SECTORS.length} {"//"} GRID: 100x100
                    </div>
                    <div className="text-[9px] text-[#555555]">
                        COORD: 06&deg;24&apos;S 106&deg;49&apos;E &middot; LOCAL TIME: {currentTime}
                    </div>
                </div>

                {/* Right Camera Controls */}
                <div className="flex items-center gap-1.5 pointer-events-auto bg-[#0d1017]/85 border border-[#262626] p-1.5 backdrop-blur-sm">
                    <button
                        type="button"
                        onClick={resetCamera}
                        className="px-2.5 py-1.5 border border-[#333333] hover:border-[#4af626] bg-[#141414] hover:bg-[#1a1a1a] text-[#aaaaaa] hover:text-[#4af626] font-mono text-xs flex items-center gap-1.5 transition-colors"
                        title="Reset Radar Camera"
                    >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">RESET RADAR</span>
                    </button>
                    <button
                        type="button"
                        onClick={() => openWindow("terminal")}
                        className="px-2.5 py-1.5 border border-[#333333] hover:border-[#39ff14] bg-[#141414] hover:bg-[#1a1a1a] text-[#aaaaaa] hover:text-[#39ff14] font-mono text-xs flex items-center gap-1.5 transition-colors"
                        title="Open CLI Terminal"
                    >
                        <Terminal className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">CLI SHELL</span>
                    </button>
                </div>
            </div>

            {/* 3. Bottom Central Interaction Hint */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                <div className="bg-[#0c0e14]/90 border border-[#333333] px-4 py-1.5 font-mono text-[10px] sm:text-xs text-[#888888] tracking-wider uppercase backdrop-blur-sm flex items-center gap-3">
                    <span className="text-[#ff2a2a] animate-pulse">●</span>
                    <span>CLICK ANY SECTOR NODE TO OPEN ITS DOSSIER WINDOW</span>
                    <span className="hidden md:inline text-[#444444]">|</span>
                    <span className="hidden md:inline text-[#4af626]">DRAG WINDOWS FREELY</span>
                </div>
            </div>
        </div>
    );
};

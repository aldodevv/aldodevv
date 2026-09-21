"use client";

import React, { useState } from "react";
import { SECTORS, useTacticalWorld, WindowId } from "../../context/TacticalWorldContext";
import {
    Terminal,
    Volume2,
    VolumeX,
    FileText,
    Compass,
    User,
    Shield,
    Cpu,
    Briefcase,
    Mail,
    Grid,
    ChevronUp,
} from "lucide-react";
import { retroSound } from "../../utils/soundEffects";

export const TacticalDock: React.FC = () => {
    const {
        mode,
        toggleMode,
        openWindows,
        minimizedWindows,
        activeWindow,
        openWindow,
        focusWindow,
        minimizeWindow,
        soundMuted,
        toggleSound,
    } = useTacticalWorld();

    const [startMenuOpen, setStartMenuOpen] = useState(false);

    const getSectorIcon = (id: WindowId) => {
        switch (id) {
            case "about":
                return <User className="w-3.5 h-3.5 text-[#4af626]" />;
            case "projects":
                return <Shield className="w-3.5 h-3.5 text-[#ff2a2a]" />;
            case "skills":
                return <Cpu className="w-3.5 h-3.5 text-[#00f0ff]" />;
            case "experience":
                return <Briefcase className="w-3.5 h-3.5 text-[#ffb703]" />;
            case "contact":
                return <Mail className="w-3.5 h-3.5 text-[#b5179e]" />;
            case "terminal":
                return <Terminal className="w-3.5 h-3.5 text-[#39ff14]" />;
        }
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 pointer-events-auto">
            {/* Start Menu Popover */}
            {startMenuOpen && (
                <div className="absolute bottom-12 left-2 sm:left-4 w-72 bg-[#0c0c0c] border border-[#ff2a2a] p-3 shadow-2xl flex flex-col gap-2 font-mono text-xs z-50">
                    <div className="flex items-center justify-between border-b border-[#222222] pb-2 text-[10px] text-[#ff2a2a] uppercase font-bold">
                        <span>[ TACTICAL DIRECTORY ]</span>
                        <span>v2.6</span>
                    </div>

                    <div className="flex flex-col gap-1">
                        {SECTORS.map((sector) => (
                            <button
                                key={sector.id}
                                type="button"
                                onClick={() => {
                                    openWindow(sector.id);
                                    setStartMenuOpen(false);
                                }}
                                className="flex items-center justify-between p-2 hover:bg-[#1a1a1a] border border-transparent hover:border-[#333333] transition-colors text-left text-[#cccccc] hover:text-[#eaeaea]"
                            >
                                <div className="flex items-center gap-2">
                                    {getSectorIcon(sector.id)}
                                    <span className="font-bold">{sector.title}</span>
                                </div>
                                <span className="text-[9px] text-[#777777]">{sector.sectorCode}</span>
                            </button>
                        ))}
                    </div>

                    <div className="pt-2 border-t border-[#222222] flex items-center justify-between text-[9px] text-[#666666]">
                        <span>OPERATOR: ALDO</span>
                        <button
                            type="button"
                            onClick={() => setStartMenuOpen(false)}
                            className="text-[#ff2a2a] hover:underline"
                        >
                            [DISMISS]
                        </button>
                    </div>
                </div>
            )}

            {/* Dock Bar */}
            <div className="w-full h-12 bg-[#0a0c10]/95 border-t border-[#262626] backdrop-blur-md px-3 sm:px-6 flex items-center justify-between font-mono text-xs">
                {/* Left: Start / Launch Button */}
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={() => {
                            setStartMenuOpen(!startMenuOpen);
                            retroSound.playClick();
                        }}
                        className={`px-3 py-1.5 border transition-colors flex items-center gap-2 uppercase font-bold text-[11px] ${
                            startMenuOpen
                                ? "bg-[#ff2a2a] text-black border-[#ff2a2a]"
                                : "bg-[#141414] hover:bg-[#202020] text-[#eaeaea] border-[#333333] hover:border-[#eaeaea]"
                        }`}
                    >
                        <Grid className="w-3.5 h-3.5" />
                        <span>FACILITIES</span>
                        <ChevronUp
                            className={`w-3 h-3 transition-transform ${startMenuOpen ? "rotate-180" : ""}`}
                        />
                    </button>

                    {/* Active Windows Taskbar List */}
                    <div className="hidden md:flex items-center gap-1.5 overflow-x-auto max-w-xl pl-2 border-l border-[#262626]">
                        {SECTORS.map((sector) => {
                            const isOpen = openWindows[sector.id];
                            const isMin = minimizedWindows[sector.id];
                            const isActive = activeWindow === sector.id && !isMin;

                            if (!isOpen) return null;

                            return (
                                <button
                                    key={sector.id}
                                    type="button"
                                    onClick={() => {
                                        if (isMin) {
                                            minimizeWindow(sector.id);
                                            focusWindow(sector.id);
                                        } else if (isActive) {
                                            minimizeWindow(sector.id);
                                        } else {
                                            focusWindow(sector.id);
                                        }
                                    }}
                                    className={`px-2.5 py-1 border text-[10px] flex items-center gap-1.5 transition-all uppercase ${
                                        isActive
                                            ? "bg-[#1f1f1f] border-[#4af626] text-[#4af626] font-bold"
                                            : isMin
                                            ? "bg-[#0f0f0f] border-[#222222] text-[#666666] opacity-70"
                                            : "bg-[#121212] border-[#333333] text-[#aaaaaa] hover:border-[#555555]"
                                    }`}
                                >
                                    <span
                                        className={`w-1.5 h-1.5 ${
                                            isActive
                                                ? "bg-[#4af626]"
                                                : isMin
                                                ? "bg-[#666666]"
                                                : "bg-[#aaaaaa]"
                                        }`}
                                    />
                                    <span className="truncate max-w-[100px]">{sector.title}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Right: Quick Action Controls */}
                <div className="flex items-center gap-2">
                    {/* Audio Toggle */}
                    <button
                        type="button"
                        onClick={toggleSound}
                        className={`w-8 h-8 flex items-center justify-center border transition-colors ${
                            soundMuted
                                ? "border-[#ff2a2a]/40 bg-[#ff2a2a]/10 text-[#ff2a2a]"
                                : "border-[#333333] hover:border-[#4af626] bg-[#141414] text-[#4af626]"
                        }`}
                        title={soundMuted ? "Unmute Tactical SFX" : "Mute SFX"}
                    >
                        {soundMuted ? (
                            <VolumeX className="w-3.5 h-3.5" />
                        ) : (
                            <Volume2 className="w-3.5 h-3.5" />
                        )}
                    </button>

                    {/* Mode Switcher Toggle */}
                    <button
                        type="button"
                        onClick={toggleMode}
                        className="px-3 py-1.5 border border-[#ff2a2a] bg-[#ff2a2a]/15 hover:bg-[#ff2a2a] text-[#ff2a2a] hover:text-black font-mono text-[11px] font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
                        title="Toggle between Interactive Map and Standard Document view"
                    >
                        {mode === "map" ? (
                            <>
                                <FileText className="w-3.5 h-3.5" />
                                <span className="hidden sm:inline">VIEW DOSSIER DOCS</span>
                                <span className="sm:hidden">DOSSIER</span>
                            </>
                        ) : (
                            <>
                                <Compass className="w-3.5 h-3.5" />
                                <span className="hidden sm:inline">ENTER MAP WORLD</span>
                                <span className="sm:hidden">MAP</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

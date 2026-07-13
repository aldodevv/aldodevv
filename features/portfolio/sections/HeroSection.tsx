"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    
    // Track scroll progress of the 200vh container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Desktop Scroll Animations (progress 0 to 0.45 represents the pinning transition phase)
    const leftWidth = useTransform(scrollYProgress, [0, 0.45], ["70%", "0%"]);
    const leftOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
    const leftX = useTransform(scrollYProgress, [0, 0.45], ["0%", "-20%"]);
    
    const rightWidth = useTransform(scrollYProgress, [0, 0.45], ["30%", "100%"]);
    
    // Scale and adjust max-width of the intro paragraph as the panel expands
    const textScale = useTransform(scrollYProgress, [0, 0.45], [1, 1.25]);
    const textMaxW = useTransform(scrollYProgress, [0, 0.45], ["400px", "820px"]);
    
    // Icons fade in and translate up slightly later in the transition
    const iconsOpacity = useTransform(scrollYProgress, [0.15, 0.45], [0, 1]);
    const iconsY = useTransform(scrollYProgress, [0.15, 0.45], [20, 0]);
    
    // Bottom controls fade out early in the scroll
    const bottomOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const bottomY = useTransform(scrollYProgress, [0, 0.3], [0, 40]);

    // Neo-Brutalist Grid Colors
    const pixelColors = [
        // Row 1
        "#ff5e5e", "#ffd54f", "#b088f9", "#3cd070", "#3fc1e8", "#ff8a5c", "#ff5e5e", "#ffd54f", "#b088f9", "#3cd070", "#3fc1e8", "#ff8a5c",
        // Row 2
        "#ffd54f", "#ff5e5e", "#3cd070", "#b088f9", "#ff8a5c", "#3fc1e8", "#ffd54f", "#ff5e5e", "#3cd070", "#b088f9", "#ff8a5c", "#3fc1e8",
        // Row 3
        "#b088f9", "#3cd070", "#ff5e5e", "#ff8a5c", "#3fc1e8", "#ffd54f", "#b088f9", "#3cd070", "#ff5e5e", "#ff8a5c", "#3fc1e8", "#ffd54f",
        // Row 4
        "#3cd070", "#b088f9", "#ff8a5c", "#3fc1e8", "#ffd54f", "#ff5e5e", "#3cd070", "#b088f9", "#ff8a5c", "#3fc1e8", "#ffd54f", "#ff5e5e"
    ];

    const renderCellDecoration = (i: number) => {
        switch (i) {
            case 4: return <span className="font-mono text-black font-black text-sm select-none">+</span>;
            case 10: return <span className="font-mono text-black font-black text-sm select-none">○</span>;
            case 15: return <span className="font-mono text-black font-black text-sm select-none">✕</span>;
            case 23: return <span className="font-mono text-black font-black text-sm select-none">★</span>;
            case 29: return <span className="font-mono text-black font-black text-sm select-none">▲</span>;
            case 37: return <span className="font-mono text-black font-black text-sm select-none">■</span>;
            case 43: return <span className="font-mono text-black font-black text-sm select-none">●</span>;
            default: return null;
        }
    };

    return (
        <section
            id="Hero"
            ref={containerRef}
            className="relative w-full lg:h-[200vh] h-auto bg-[#f7f6f0] font-sans select-none selection:bg-[#ffd54f] selection:text-black"
        >
            {/* Sticky viewport container (keeps contents pinned during transition) */}
            <div className="relative lg:sticky lg:top-0 lg:h-screen w-full overflow-visible lg:overflow-hidden">
                
                {/* Global Scrolling Ticker (Brutalist Marquee at Bottom) */}
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#3cd070] border-t-4 border-black flex items-center overflow-hidden z-30">
                    <div className="flex gap-8 whitespace-nowrap animate-marquee font-black uppercase tracking-widest text-xs text-black select-none">
                        <span>★ WEB DEVELOPER ★ MOBILE DEVELOPER ★ BACKEND ENGINEER ★ SECURITY OPTIMIZER ★ OPEN-SOURCE ENTHUSIAST ★ DESIGN SYSTEMS ★</span>
                        <span>★ WEB DEVELOPER ★ MOBILE DEVELOPER ★ BACKEND ENGINEER ★ SECURITY OPTIMIZER ★ OPEN-SOURCE ENTHUSIAST ★ DESIGN SYSTEMS ★</span>
                    </div>
                </div>

                {/* 1. DESKTOP INTERACTIVE SCROLLYTELLING CONTAINER */}
                <div className="hidden lg:flex h-full w-full relative pt-20 pb-10">
                    
                    {/* Left Column (Headline + Colored Grid) */}
                    <motion.div
                        style={{ width: leftWidth, opacity: leftOpacity, x: leftX }}
                        className="w-[70%] h-full bg-[#ffd54f] flex flex-col justify-between border-r-4 border-black shrink-0 origin-left neo-grid-dots"
                    >
                        {/* Top Area: Logo HUD & Speech-Bubble Main Headline */}
                        <div className="flex-grow flex flex-col justify-between p-16 pt-8 pb-6">
                            <div className="flex items-center">
                                <span className="text-black font-mono text-xs tracking-widest font-black border-2 border-black bg-white px-3 py-1 shadow-sm uppercase">
                                    [ USER: ALDODEVV_SYS ]
                                </span>
                            </div>

                            {/* Neo-Brutalist Speech-Bubble Headline Box */}
                            <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_#ff5e5e] relative max-w-xl self-start">
                                <div className="absolute -top-4 -left-4 bg-[#ff5e5e] text-white text-[10px] font-mono font-black uppercase tracking-widest px-2 py-0.5 border-2 border-black shadow-sm">
                                    SYSTEM_LOG:
                                </div>
                                <h1 className="text-6xl xl:text-7xl font-black tracking-tight text-black font-sans leading-none uppercase select-none">
                                    FRONTIER CODE.
                                    <br />
                                    IN YOUR HANDS.
                                </h1>
                            </div>
                        </div>

                        {/* Bottom Area: Interactive Colored Grid */}
                        <div className="h-[38vh] bg-[#ff5e5e] border-t-4 border-black relative overflow-hidden shrink-0">
                            <div className="grid grid-cols-12 grid-rows-4 h-full w-full">
                                {pixelColors.map((color, i) => (
                                    <div
                                        key={i}
                                        className="border-r border-b border-black/35 flex items-center justify-center transition-all duration-300 hover:scale-115 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[3px_3px_0px_#000000] hover:z-20 cursor-pointer"
                                        style={{ backgroundColor: color }}
                                    >
                                        {renderCellDecoration(i)}
                                    </div>
                                ))}
                            </div>

                            {/* Pixel Cat Graphic (Mistral Easter Egg) */}
                            <div className="absolute bottom-6 right-6 z-10 w-12 h-12 bg-white border-2 border-black p-1 shadow-[3px_3px_0px_#000000]">
                                <svg viewBox="0 0 18 18" fill="none" className="w-full h-full text-black">
                                    <rect x="3" y="12" width="12" height="4" fill="currentColor" />
                                    <rect x="4" y="6" width="10" height="6" fill="currentColor" />
                                    <rect x="5" y="4" width="2" height="2" fill="currentColor" />
                                    <rect x="11" y="4" width="2" height="2" fill="currentColor" />
                                    <rect x="6" y="7" width="2" height="2" fill="#ffd54f" />
                                    <rect x="10" y="7" width="2" height="2" fill="#ffd54f" />
                                    <rect x="8.5" y="9" width="1" height="1" fill="#ff5e5e" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>
 
                    {/* Right Column (Intro text, Icons, MP3 BGM Widget, expanding to full screen) */}
                    <motion.div
                        style={{ width: rightWidth }}
                        className="w-[30%] h-full bg-[#fefcf0] text-black flex flex-col justify-between p-16 pt-8 pb-14 shrink-0 relative overflow-hidden"
                    >
                        {/* Top Area: Minimizable Window Tabs */}
                        <motion.div
                            style={{ opacity: iconsOpacity, y: iconsY }}
                            className="flex justify-center gap-6 mb-4 mt-6 opacity-0 lg:opacity-0"
                        >
                            {/* Briefcase Tab */}
                            <div className="bg-white border-4 border-black p-2 flex items-center gap-2 shadow-[4px_4px_0px_#000000] hover:-translate-y-1 transition-transform cursor-pointer">
                                <div className="w-8 h-8 bg-[#ff5e5e] border-2 border-black flex items-center justify-center">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-4 h-4 text-black">
                                        <rect x="2" y="7" width="20" height="14" />
                                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                    </svg>
                                </div>
                                <span className="font-mono text-xs font-black uppercase">WORK.TXT</span>
                            </div>

                            {/* Bot Tab */}
                            <div className="bg-white border-4 border-black p-2 flex items-center gap-2 shadow-[4px_4px_0px_#000000] hover:-translate-y-1 transition-transform cursor-pointer">
                                <div className="w-8 h-8 bg-[#ffd54f] border-2 border-black flex items-center justify-center">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-4 h-4 text-black">
                                        <rect x="3" y="11" width="18" height="10" />
                                        <circle cx="12" cy="5" r="2" />
                                        <path d="M12 7v4" />
                                    </svg>
                                </div>
                                <span className="font-mono text-xs font-black uppercase">AI_BOT.EXE</span>
                            </div>

                            {/* Globe Tab */}
                            <div className="bg-white border-4 border-black p-2 flex items-center gap-2 shadow-[4px_4px_0px_#000000] hover:-translate-y-1 transition-transform cursor-pointer">
                                <div className="w-8 h-8 bg-[#3fc1e8] border-2 border-black flex items-center justify-center">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-4 h-4 text-black">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10" />
                                        <path d="M2 12h20" />
                                    </svg>
                                </div>
                                <span className="font-mono text-xs font-black uppercase">WEB_SYS.CFG</span>
                            </div>
                        </motion.div>

                        {/* Middle: Expanding Core Desktop Alert Window */}
                        <div className="flex-1 flex flex-col justify-center items-center">
                            <motion.div
                                style={{ scale: textScale, maxWidth: textMaxW }}
                                className="border-4 border-black bg-[#b088f9] shadow-[8px_8px_0px_#000000] overflow-hidden group/alert select-none w-full max-w-[400px] origin-center cursor-pointer"
                            >
                                <div className="bg-white border-2 border-black overflow-hidden flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover/alert:translate-x-1 group-hover/alert:translate-y-1">
                                    {/* OS Window header */}
                                    <div className="bg-[#b088f9] border-b-2 border-black px-4 py-2 flex items-center justify-between shrink-0 font-black font-sans uppercase tracking-widest text-[10px] text-black">
                                        <div className="flex gap-1.5">
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5e5e] border border-black" />
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#ffd54f] border border-black" />
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#3cd070] border border-black" />
                                        </div>
                                        <span>MISSION_STATEMENT </span>
                                        <span className="font-mono font-black text-xs">✕</span>
                                    </div>
                                    <div className="p-8 bg-white text-center">
                                        <p className="text-xl xl:text-2xl font-black font-sans text-black leading-tight uppercase tracking-tight">
                                            I help organizations build high-performance web and mobile systems to solve their most complex technical challenges.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Bottom: Scrolling Helpers & Playable BGM Cassette Widget (Fades out early) */}
                        <motion.div
                            style={{ opacity: bottomOpacity, y: bottomY }}
                            className="w-full flex flex-col items-center gap-6"
                        >
                            {/* Fading Scroll Down Button */}
                            <div className="flex flex-col gap-1 items-center justify-center text-black">
                                <span className="font-mono text-[9px] font-black uppercase tracking-wider animate-pulse">
                                    [ SCROLL_TO_DESCEND ]
                                </span>
                                <div className="w-8 h-8 rounded-full border-2 border-black bg-white flex items-center justify-center shadow-[2px_2px_0px_#000000] animate-bounce">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" className="w-4 h-4">
                                        <path d="M12 5v14M19 12l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>

                            {/* Retro Cassette/MP3 Player BGM HUD */}
                            <div className="bg-white border-4 border-black p-4 w-full max-w-[340px] shadow-[6px_6px_0px_#000000] flex flex-col gap-3 group/tape select-none">
                                <div className="flex items-center justify-between border-b-2 border-black pb-1.5 font-mono text-[9px] font-black text-black">
                                    <span>SYSTEM_PLAYER.DLL</span>
                                    <span className="bg-red-500 text-white px-1">LIVE</span>
                                </div>
                                
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex flex-col text-left font-mono">
                                        <span className="text-[9px] font-black text-[#ff5e5e] uppercase">▶ BGM LOADED</span>
                                        <span className="text-[11px] font-bold text-black truncate max-w-[150px]">PORTFOLIO_THEME.WAV</span>
                                    </div>
                                    
                                    {/* Visualizer bars */}
                                    <div className="flex items-end gap-[3px] h-6 bg-black/5 p-1 border border-black/20 rounded-sm">
                                        <div className={`w-1 bg-[#ff5e5e] ${isPlaying ? "animate-soundwave h-5" : "h-1"}`} style={{ animationDelay: "0ms" }} />
                                        <div className={`w-1 bg-[#ffd54f] ${isPlaying ? "animate-soundwave h-5" : "h-2"}`} style={{ animationDelay: "150ms" }} />
                                        <div className={`w-1 bg-[#3cd070] ${isPlaying ? "animate-soundwave h-5" : "h-1.5"}`} style={{ animationDelay: "300ms" }} />
                                        <div className={`w-1 bg-[#3fc1e8] ${isPlaying ? "animate-soundwave h-5" : "h-2.5"}`} style={{ animationDelay: "75ms" }} />
                                    </div>
                                </div>

                                <div className="w-full h-1.5 bg-black/10 border border-black relative">
                                    <motion.div 
                                        className="absolute top-0 bottom-0 left-0 bg-[#ffd54f]"
                                        animate={isPlaying ? { width: ["0%", "100%"] } : { width: "40%" }}
                                        transition={isPlaying ? { repeat: Infinity, duration: 8, ease: "linear" } : { duration: 0.3 }}
                                    />
                                </div>

                                <button 
                                    onClick={() => setIsPlaying(!isPlaying)}
                                    className="w-full py-1.5 bg-[#3cd070] hover:bg-[#ff5e5e] border-2 border-black text-black font-black font-sans uppercase tracking-widest text-[10px] flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
                                >
                                    {isPlaying ? (
                                        <>
                                            <span className="inline-block w-2.5 h-2.5 bg-black" />
                                            STOP BGM
                                        </>
                                    ) : (
                                        <>
                                            <Play className="w-2.5 h-2.5 fill-black" />
                                            PLAY BGM
                                        </>
                                    )}
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* 2. MOBILE RESPONSIVE STATIC STACKED CONTAINER */}
                <div className="lg:hidden flex flex-col w-full bg-[#f7f6f0] pt-20 pb-14">
                    {/* Top Panel (Yellow, Headline) */}
                    <div className="bg-[#ffd54f] p-6 pt-8 border-b-4 border-black flex flex-col justify-between shrink-0 neo-grid-dots">
                        <div className="text-black font-mono text-[9px] uppercase tracking-widest font-black mb-4">
                            [ STATUS: ALDODEVV_MOBILE_SYS ]
                        </div>
                        
                        {/* Mobile speech bubble headline */}
                        <div className="bg-white border-4 border-black p-5 shadow-[5px_5px_0px_#ff5e5e] relative">
                            <h1 className="text-3xl font-black tracking-tight text-black font-sans leading-none uppercase">
                                FRONTIER CODE.
                                <br />
                                IN YOUR HANDS.
                            </h1>
                        </div>
                    </div>

                    {/* Middle Panel (Colored Grid) */}
                    <div className="h-[20vh] bg-[#ff5e5e] border-b-4 border-black relative overflow-hidden shrink-0">
                        <div className="grid grid-cols-12 grid-rows-4 h-full w-full">
                            {pixelColors.map((color, i) => (
                                <div
                                    key={i}
                                    className="border-r border-b border-black/20"
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>
                        <div className="absolute bottom-4 right-4 z-10 w-10 h-10 bg-white border-2 border-black p-1 shadow-[2px_2px_0px_#000000]">
                            <svg viewBox="0 0 18 18" fill="none" className="w-full h-full text-black">
                                <rect x="3" y="12" width="12" height="4" fill="currentColor" />
                                <rect x="4" y="6" width="10" height="6" fill="currentColor" />
                                <rect x="5" y="4" width="2" height="2" fill="currentColor" />
                                <rect x="11" y="4" width="2" height="2" fill="currentColor" />
                                <rect x="6" y="7" width="2" height="2" fill="#ffd54f" />
                                <rect x="10" y="7" width="2" height="2" fill="#ffd54f" />
                            </svg>
                        </div>
                    </div>

                    {/* Bottom Content Area */}
                    <div className="flex-1 flex flex-col justify-between p-6 gap-6 bg-[#fefcf0]">
                        {/* Tabs */}
                        <div className="flex justify-center gap-2 mt-1">
                            <div className="bg-white border-2 border-black px-2 py-1 flex items-center gap-1.5 shadow-[2px_2px_0px_#000000]">
                                <span className="w-2.5 h-2.5 bg-[#ff5e5e] border border-black inline-block" />
                                <span className="font-mono text-[9px] font-black uppercase">WORK</span>
                            </div>
                            <div className="bg-white border-2 border-black px-2 py-1 flex items-center gap-1.5 shadow-[2px_2px_0px_#000000]">
                                <span className="w-2.5 h-2.5 bg-[#ffd54f] border border-black inline-block" />
                                <span className="font-mono text-[9px] font-black uppercase">AI_BOT</span>
                            </div>
                            <div className="bg-white border-2 border-black px-2 py-1 flex items-center gap-1.5 shadow-[2px_2px_0px_#000000]">
                                <span className="w-2.5 h-2.5 bg-[#3fc1e8] border border-black inline-block" />
                                <span className="font-mono text-[9px] font-black uppercase">SYS.CFG</span>
                            </div>
                        </div>

                        {/* Statement Container Box */}
                        <div className="border-4 border-black bg-white p-6 shadow-[5px_5px_0px_#b088f9]">
                            <p className="text-lg font-black font-sans text-black leading-tight text-center uppercase tracking-tight">
                                I help organizations build high-performance web and mobile systems to solve their most complex technical challenges.
                            </p>
                        </div>

                        {/* BGM Card */}
                        <div className="bg-white border-4 border-black p-3 w-full max-w-[270px] shadow-[4px_4px_0px_#000000] flex flex-col gap-2 mx-auto mb-4 select-none">
                            <div className="flex items-center justify-between border-b-2 border-black pb-1 font-mono text-[8px] font-black">
                                <span>SYS_PLAY.DLL</span>
                                <span className="bg-red-500 text-white px-1">LIVE</span>
                            </div>
                            
                            <div className="flex items-center justify-between gap-3">
                                <div className="flex flex-col text-left font-mono">
                                    <span className="text-[8px] font-black text-[#ff5e5e] uppercase">▶ BGM</span>
                                    <span className="text-[10px] font-bold text-black truncate max-w-[110px]">PORTFOLIO_THEME.WAV</span>
                                </div>
                                
                                <div className="flex items-end gap-[2px] h-4 bg-black/5 p-0.5 border border-black/10">
                                    <div className={`w-0.5 bg-[#ff5e5e] ${isPlaying ? "animate-soundwave h-3.5" : "h-1"}`} style={{ animationDelay: "0ms" }} />
                                    <div className={`w-0.5 bg-[#ffd54f] ${isPlaying ? "animate-soundwave h-3.5" : "h-2"}`} style={{ animationDelay: "150ms" }} />
                                    <div className={`w-0.5 bg-[#3cd070] ${isPlaying ? "animate-soundwave h-3.5" : "h-1.5"}`} style={{ animationDelay: "300ms" }} />
                                </div>
                            </div>

                            <button 
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="w-full py-1 bg-[#3cd070] hover:bg-[#ff5e5e] border-2 border-black text-black font-black font-sans uppercase tracking-widest text-[9px] flex items-center justify-center gap-1 shadow-[1.5px_1.5px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-colors cursor-pointer"
                            >
                                {isPlaying ? "STOP BGM" : "PLAY BGM"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
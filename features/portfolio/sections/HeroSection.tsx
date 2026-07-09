"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    
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
    const textScale = useTransform(scrollYProgress, [0, 0.45], [1, 1.35]);
    const textMaxW = useTransform(scrollYProgress, [0, 0.45], ["320px", "880px"]);
    
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

    return (
        <section
            id="Hero"
            ref={containerRef}
            className="relative w-full h-[200vh] bg-[#f7f6f0] font-sans select-none selection:bg-[#ffd54f] selection:text-black"
        >
            {/* Sticky viewport container (keeps contents pinned during transition) */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                
                {/* 1. DESKTOP INTERACTIVE SCROLLYTELLING CONTAINER */}
                <div className="hidden lg:flex h-full w-full relative">
                    
                    {/* Left Column (Headline + Colored Grid) */}
                    <motion.div
                        style={{ width: leftWidth, opacity: leftOpacity, x: leftX }}
                        className="h-full bg-[#ffd54f] flex flex-col justify-between border-r-4 border-black shrink-0 origin-left"
                    >
                        {/* Top Area: Logo HUD & Main Headline */}
                        <div className="h-[55vh] flex flex-col justify-between p-16">
                            <div className="flex items-center">
                                <span className="text-black font-mono text-xs tracking-widest font-black border-2 border-black bg-white px-3 py-1 shadow-sm uppercase">
                                    [ USER: ALDODEVV_SYS ]
                                </span>
                            </div>
                            <h1 className="text-7xl font-black tracking-tight text-black font-sans leading-none uppercase select-none">
                                FRONTIER CODE.
                                <br />
                                IN YOUR HANDS.
                            </h1>
                        </div>

                        {/* Bottom Area: Colored Geometric Block Grid */}
                        <div className="h-[45vh] bg-[#ff5e5e] border-t-4 border-black relative overflow-hidden">
                            <div className="grid grid-cols-12 grid-rows-4 h-full w-full">
                                {pixelColors.map((color, i) => (
                                    <div
                                        key={i}
                                        className="border-r border-b border-black/30"
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>

                            {/* Pixel Cat Graphic (Mistral Easter Egg) */}
                            <div className="absolute bottom-6 right-6 z-10 w-12 h-12 bg-white border-2 border-black p-1 shadow-sm">
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

                    {/* Right Column (Intro text, Icons, News, expanding to full screen) */}
                    <motion.div
                        style={{ width: rightWidth }}
                        className="h-full bg-[#fefcf0] text-black flex flex-col justify-between p-16 shrink-0 relative overflow-hidden"
                    >
                        {/* Top: Retro Pixel Icons (Fades/slides in as panel expands) */}
                        <motion.div
                            style={{ opacity: iconsOpacity, y: iconsY }}
                            className="flex justify-center gap-8 mb-4 mt-8"
                        >
                            {/* Folder/Briefcase Icon */}
                            <div className="w-16 h-16 bg-[#ff5e5e] border-4 border-black flex items-center justify-center text-white shadow-[4px_4px_0px_#000000]">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-8 h-8 text-black">
                                    <rect x="2" y="7" width="20" height="14" rx="0" ry="0" />
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                </svg>
                            </div>
                            {/* Bot Icon */}
                            <div className="w-16 h-16 bg-[#ffd54f] border-4 border-black flex items-center justify-center text-black shadow-[4px_4px_0px_#000000]">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-8 h-8">
                                    <rect x="3" y="11" width="18" height="10" rx="0" />
                                    <circle cx="12" cy="5" r="2" />
                                    <path d="M12 7v4" />
                                    <line x1="8" y1="16" x2="8" y2="16.01" />
                                    <line x1="16" y1="16" x2="16" y2="16.01" />
                                </svg>
                            </div>
                            {/* Globe Icon */}
                            <div className="w-16 h-16 bg-[#3fc1e8] border-4 border-black flex items-center justify-center text-white shadow-[4px_4px_0px_#000000]">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-8 h-8 text-black">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                    <path d="M2 12h20" />
                                </svg>
                            </div>
                        </motion.div>

                        {/* Middle: Expanding Core Headline Statement */}
                        <div className="flex-1 flex flex-col justify-center items-center">
                            <motion.p
                                style={{ scale: textScale, maxWidth: textMaxW }}
                                className="text-3xl font-black font-sans text-black leading-tight text-center uppercase tracking-tight origin-center"
                            >
                                I help organizations build high-performance web and mobile systems to solve their most complex technical challenges.
                            </motion.p>
                        </div>

                        {/* Bottom: Scrolling Helpers & Playable Dossier HUD Card (Fades out early) */}
                        <motion.div
                            style={{ opacity: bottomOpacity, y: bottomY }}
                            className="w-full flex flex-col items-center gap-6"
                        >
                            {/* Fading Scroll Down Arrows */}
                            <div className="flex flex-col gap-1 items-center justify-center text-black animate-bounce">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" className="w-5 h-5">
                                    <path d="M12 5v14M19 12l-7 7-7-7" />
                                </svg>
                            </div>

                            {/* Sega-style Sound Test/Loaded dossier HUD card */}
                            <div className="bg-white border-4 border-black p-4 w-full max-w-[300px] shadow-[4px_4px_0px_#000000] flex items-center justify-between">
                                <div className="flex flex-col text-left font-mono">
                                    <span className="text-[10px] font-black text-[#ff5e5e] uppercase">▶ BGM LOADED</span>
                                    <span className="text-xs font-bold text-black truncate max-w-[160px]">PORTFOLIO_THEME.WAV</span>
                                </div>
                                <button className="w-10 h-10 bg-[#3cd070] border-2 border-black text-white flex items-center justify-center shadow-[2px_2px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none hover:bg-[#ff5e5e] transition-colors">
                                    <Play className="w-4 h-4 fill-current ml-0.5 text-black" />
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* 2. MOBILE RESPONSIVE STATIC STACKED CONTAINER */}
                <div className="lg:hidden flex flex-col h-full w-full bg-[#f7f6f0] overflow-y-auto">
                    {/* Top Panel (Yellow, Headline) */}
                    <div className="bg-[#ffd54f] p-6 pt-12 border-b-4 border-black flex flex-col justify-between shrink-0">
                        <div className="text-black font-mono text-[10px] uppercase tracking-widest font-black mb-6">
                            [ STATUS: ALDODEVV_MOBILE_SYS ]
                        </div>
                        <h1 className="text-4xl font-black tracking-tight text-black font-sans leading-none uppercase">
                            FRONTIER CODE.
                            <br />
                            IN YOUR HANDS.
                        </h1>
                    </div>

                    {/* Middle Panel (Colored Grid) */}
                    <div className="h-[25vh] bg-[#ff5e5e] border-b-4 border-black relative overflow-hidden shrink-0">
                        <div className="grid grid-cols-12 grid-rows-4 h-full w-full">
                            {pixelColors.map((color, i) => (
                                <div
                                    key={i}
                                    className="border-r border-b border-black/20"
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>
                        <div className="absolute bottom-4 right-4 z-10 w-10 h-10 bg-white border-2 border-black p-1 shadow-sm">
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
                    <div className="flex-1 flex flex-col justify-between p-6 gap-8 bg-[#fefcf0]">
                        {/* Icons */}
                        <div className="flex justify-center gap-4 mt-2">
                            <div className="w-12 h-12 bg-[#ff5e5e] border-2 border-black flex items-center justify-center text-white shadow-[2px_2px_0px_#000000]">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6 text-black">
                                    <rect x="2" y="7" width="20" height="14" rx="0" ry="0" />
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                </svg>
                            </div>
                            <div className="w-12 h-12 bg-[#ffd54f] border-2 border-black flex items-center justify-center text-black shadow-[2px_2px_0px_#000000]">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
                                    <rect x="3" y="11" width="18" height="10" rx="0" />
                                    <circle cx="12" cy="5" r="2" />
                                    <path d="M12 7v4" />
                                </svg>
                            </div>
                            <div className="w-12 h-12 bg-[#3fc1e8] border-2 border-black flex items-center justify-center text-black shadow-[2px_2px_0px_#000000]">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10" />
                                </svg>
                            </div>
                        </div>

                        {/* Statement */}
                        <p className="text-2xl font-black font-sans text-black leading-tight text-center uppercase tracking-tight px-2">
                            I help organizations build high-performance web and mobile systems to solve their most complex technical challenges.
                        </p>

                        {/* BGM Card */}
                        <div className="bg-white border-2 border-black p-3 w-full max-w-[270px] shadow-[3px_3px_0px_#000000] flex items-center justify-between mx-auto mb-4">
                            <div className="flex flex-col text-left font-mono">
                                <span className="text-[9px] font-black text-[#ff5e5e] uppercase">▶ BGM LOADED</span>
                                <span className="text-[11px] font-bold text-black truncate max-w-[140px]">PORTFOLIO_THEME.WAV</span>
                            </div>
                            <button className="w-8 h-8 bg-[#3cd070] border border-black text-white flex items-center justify-center shadow-[1.5px_1.5px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none hover:bg-[#ff5e5e] transition-colors">
                                <Play className="w-3 h-3 fill-current ml-0.5 text-black" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
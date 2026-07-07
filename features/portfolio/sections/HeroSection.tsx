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
    const textScale = useTransform(scrollYProgress, [0, 0.45], [1, 1.45]);
    const textMaxW = useTransform(scrollYProgress, [0, 0.45], ["290px", "850px"]);
    
    // Pixel icons fade in and translate up slightly later in the transition
    const iconsOpacity = useTransform(scrollYProgress, [0.15, 0.45], [0, 1]);
    const iconsY = useTransform(scrollYProgress, [0.15, 0.45], [20, 0]);
    
    // Bottom controls (arrows, sound test) fade out early in the scroll
    const bottomOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
    const bottomY = useTransform(scrollYProgress, [0, 0.3], [0, 40]);

    // Grid pixel colors matching Mistral.ai's signature homepage pixel blocks
    const pixelColors = [
        // Row 1
        "#FFAF01", "#FFAF01", "#FFAF01", "#FF8204", "#FF8204", "#FA500F", "#FA500F", "#E61300", "#E61300", "#C4001D", "#C4001D", "#C4001D",
        // Row 2
        "#FFAF01", "#FF8204", "#FF8204", "#FA500F", "#FA500F", "#E61300", "#E61300", "#C4001D", "#C4001D", "#C4001D", "#990012", "#990012",
        // Row 3
        "#FF8204", "#FA500F", "#FA500F", "#E61300", "#E61300", "#C4001D", "#C4001D", "#990012", "#990012", "#66000c", "#66000c", "#66000c",
        // Row 4
        "#FA500F", "#E61300", "#E61300", "#C4001D", "#C4001D", "#990012", "#990012", "#66000c", "#66000c", "#330006", "#330006", "#330006",
    ];

    return (
        <section
            id="Hero"
            ref={containerRef}
            className="relative w-full h-[200vh] bg-zinc-950 font-sans select-none selection:bg-secondary selection:text-black"
        >
            {/* Sticky viewport container (keeps contents pinned during transition) */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                
                {/* 1. DESKTOP INTERACTIVE SCROLLYTELLING CONTAINER */}
                <div className="hidden lg:flex h-full w-full relative">
                    
                    {/* Left Column (Headline + Pixel Grid) */}
                    <motion.div
                        style={{ width: leftWidth, opacity: leftOpacity, x: leftX }}
                        className="h-full bg-white flex flex-col justify-between border-r border-zinc-200 shrink-0 origin-left"
                    >
                        {/* Top Area: Logo HUD & Main Headline */}
                        <div className="h-[55vh] flex flex-col justify-between p-16">
                            <div className="flex items-center gap-2 text-zinc-900 font-mono text-sm tracking-widest font-bold">
                                <span>[ 1P_STATUS: ALDODEVV ]</span>
                            </div>
                            <h1 className="text-7xl font-bold tracking-tight text-zinc-950 font-sans leading-none uppercase">
                                FRONTIER CODE.
                                <br />
                                IN YOUR HANDS.
                            </h1>
                        </div>

                        {/* Bottom Area: Mistral Sunset Pixel Grid */}
                        <div className="h-[45vh] bg-[#fa520f] border-t-4 border-zinc-950 relative overflow-hidden">
                            <div className="grid grid-cols-12 grid-rows-4 h-full w-full">
                                {pixelColors.map((color, i) => (
                                    <div
                                        key={i}
                                        className="border-r border-b border-zinc-950/20"
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>

                            {/* Pixel Cat Graphic (Mistral Easter Egg) */}
                            <div className="absolute bottom-6 right-6 z-10 w-12 h-12">
                                <svg viewBox="0 0 18 18" fill="none" className="w-full h-full text-black">
                                    <rect x="3" y="12" width="12" height="4" fill="currentColor" />
                                    <rect x="4" y="6" width="10" height="6" fill="currentColor" />
                                    <rect x="5" y="4" width="2" height="2" fill="currentColor" />
                                    <rect x="11" y="4" width="2" height="2" fill="currentColor" />
                                    <rect x="6" y="7" width="2" height="2" fill="#ffb83e" />
                                    <rect x="10" y="7" width="2" height="2" fill="#ffb83e" />
                                    <rect x="8.5" y="9" width="1" height="1" fill="#ffaf01" />
                                </svg>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column (Intro text, Icons, News, expanding to full screen) */}
                    <motion.div
                        style={{ width: rightWidth }}
                        className="h-full bg-[#f5f4f0] text-zinc-900 flex flex-col justify-between p-16 shrink-0 relative overflow-hidden"
                    >
                        {/* Top: Retro Pixel Icons (Fades/slides in as panel expands) */}
                        <motion.div
                            style={{ opacity: iconsOpacity, y: iconsY }}
                            className="flex justify-center gap-8 mb-4 mt-8"
                        >
                            {/* Folder/Briefcase Icon */}
                            <div className="w-16 h-16 bg-[#fa520f] border-4 border-zinc-950 flex items-center justify-center text-white shadow-[4px_4px_0px_#000000]">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-8 h-8">
                                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                </svg>
                            </div>
                            {/* Bot Icon */}
                            <div className="w-16 h-16 bg-[#ffb83e] border-4 border-zinc-950 flex items-center justify-center text-zinc-950 shadow-[4px_4px_0px_#000000]">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-8 h-8">
                                    <rect x="3" y="11" width="18" height="10" rx="2" />
                                    <circle cx="12" cy="5" r="2" />
                                    <path d="M12 7v4" />
                                    <line x1="8" y1="16" x2="8" y2="16.01" />
                                    <line x1="16" y1="16" x2="16" y2="16.01" />
                                </svg>
                            </div>
                            {/* Globe Icon */}
                            <div className="w-16 h-16 bg-blue-500 border-4 border-zinc-950 flex items-center justify-center text-white shadow-[4px_4px_0px_#000000]">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-8 h-8">
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
                                className="text-2xl font-bold font-sans text-zinc-900 leading-snug text-center uppercase origin-center"
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
                            <div className="flex flex-col gap-1 items-center justify-center text-zinc-500 animate-bounce">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-5 h-5">
                                    <path d="M12 5v14M19 12l-7 7-7-7" />
                                </svg>
                            </div>

                            {/* Sega-style Sound Test/Loaded dossier HUD card */}
                            <div className="bg-[#f5f4f0] border-4 border-zinc-950 p-4 w-full max-w-[290px] shadow-[4px_4px_0px_#000000] flex items-center justify-between">
                                <div className="flex flex-col text-left font-mono">
                                    <span className="text-[10px] font-bold text-[#fa520f] uppercase">▶ BGM LOADED</span>
                                    <span className="text-xs font-bold text-zinc-900 truncate max-w-[155px]">PORTFOLIO_THEME.WAV</span>
                                </div>
                                <button className="w-9 h-9 bg-[#fa520f] border-2 border-zinc-950 text-white flex items-center justify-center shadow-[2px_2px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none hover:bg-zinc-900 transition-colors">
                                    <Play className="w-4 h-4 fill-current ml-0.5" />
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* 2. MOBILE RESPONSIVE STATIC STACKED CONTAINER */}
                <div className="lg:hidden flex flex-col h-full w-full bg-[#f5f4f0] overflow-y-auto">
                    {/* Top Panel (White, Headline) */}
                    <div className="bg-white p-6 pt-12 border-b-4 border-zinc-950 flex flex-col justify-between shrink-0">
                        <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest font-bold mb-6">
                            [ STATUS: ALDODEVV_MOBILE_SYS ]
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-950 font-sans leading-none uppercase">
                            FRONTIER CODE.
                            <br />
                            IN YOUR HANDS.
                        </h1>
                    </div>

                    {/* Middle Panel (Orange Pixel Grid) */}
                    <div className="h-[25vh] bg-[#fa520f] border-b-4 border-zinc-950 relative overflow-hidden shrink-0">
                        <div className="grid grid-cols-12 grid-rows-4 h-full w-full">
                            {pixelColors.map((color, i) => (
                                <div
                                    key={i}
                                    className="border-r border-b border-zinc-950/20"
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>
                        <div className="absolute bottom-4 right-4 z-10 w-9 h-9">
                            <svg viewBox="0 0 18 18" fill="none" className="w-full h-full text-black">
                                <rect x="3" y="12" width="12" height="4" fill="currentColor" />
                                <rect x="4" y="6" width="10" height="6" fill="currentColor" />
                                <rect x="5" y="4" width="2" height="2" fill="currentColor" />
                                <rect x="11" y="4" width="2" height="2" fill="currentColor" />
                                <rect x="6" y="7" width="2" height="2" fill="#ffb83e" />
                                <rect x="10" y="7" width="2" height="2" fill="#ffb83e" />
                            </svg>
                        </div>
                    </div>

                    {/* Bottom Content Area */}
                    <div className="flex-1 flex flex-col justify-between p-6 gap-8">
                        {/* Icons */}
                        <div className="flex justify-center gap-4 mt-2">
                            <div className="w-12 h-12 bg-[#fa520f] border-2 border-zinc-950 flex items-center justify-center text-white shadow-[2px_2px_0px_#000000]">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
                                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                </svg>
                            </div>
                            <div className="w-12 h-12 bg-[#ffb83e] border-2 border-zinc-950 flex items-center justify-center text-zinc-950 shadow-[2px_2px_0px_#000000]">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
                                    <rect x="3" y="11" width="18" height="10" rx="2" />
                                    <circle cx="12" cy="5" r="2" />
                                    <path d="M12 7v4" />
                                </svg>
                            </div>
                            <div className="w-12 h-12 bg-blue-500 border-2 border-zinc-950 flex items-center justify-center text-white shadow-[2px_2px_0px_#000000]">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10" />
                                </svg>
                            </div>
                        </div>

                        {/* Statement */}
                        <p className="text-xl font-bold font-sans text-zinc-900 leading-snug text-center uppercase px-2">
                            I help organizations build high-performance web and mobile systems to solve their most complex technical challenges.
                        </p>

                        {/* BGM Card */}
                        <div className="bg-white border-2 border-zinc-950 p-3 w-full max-w-[260px] shadow-[3px_3px_0px_#000000] flex items-center justify-between mx-auto mb-4">
                            <div className="flex flex-col text-left font-mono">
                                <span className="text-[9px] font-bold text-[#fa520f] uppercase">▶ BGM LOADED</span>
                                <span className="text-[11px] font-bold text-zinc-900 truncate max-w-[140px]">PORTFOLIO_THEME.WAV</span>
                            </div>
                            <button className="w-8 h-8 bg-[#fa520f] border border-zinc-950 text-white flex items-center justify-center shadow-[1.5px_1.5px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none hover:bg-zinc-900 transition-colors">
                                <Play className="w-3 h-3 fill-current ml-0.5" />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
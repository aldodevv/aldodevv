"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import me from "@/public/assets/me.png";
import {
    Instagram,
    Facebook,
    Twitter,
    Rewind,
    Play,
    FastForward,
    Search,
    ChevronLeft,
    ChevronRight
} from "lucide-react";

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const textTranslateX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

    return (
        <section
            id="Hero"
            ref={containerRef}
            className="relative min-h-screen w-full bg-[#1b0a2f] overflow-hidden flex items-center justify-center font-sans selection:bg-yellow-400 selection:text-black py-16"
        >


            {/* Huge Scrolling Text (Behind Everything) */}
            <div className="absolute top-1/2 -translate-y-[45%] left-0 w-[200vw] h-[300px] z-0 pointer-events-none hidden md:flex mix-blend-overlay overflow-hidden">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="flex whitespace-nowrap opacity-20"
                >
                    <h1 className="text-[10rem] md:text-[15rem] lg:text-[20rem] font-black text-white px-8 drop-shadow-2xl leading-[0.8] tracking-tighter">
                        MOBILE DEVELOPER
                    </h1>
                    <h1 className="text-[10rem] md:text-[15rem] lg:text-[20rem] font-black text-white px-8 drop-shadow-2xl leading-[0.8] tracking-tighter">
                        MOBILE DEVELOPER
                    </h1>
                </motion.div>
            </div>

            {/* Subject Photo (OVERLAPPING AND BEHIND TEXT LAYER) */}
            <motion.div
                style={{ y: imageY }}
                className="absolute bottom-0 right-0 md:right-[-5%] lg:right-[5%] h-[80vh] md:h-[95vh] w-full md:w-[60%] lg:w-[50%] z-20 pointer-events-none flex justify-center lg:justify-end items-end"
            >
                <div className="relative w-full h-[120%]">
                    <Image
                        src={me}
                        alt="Akhmad Aldo Sari"
                        fill
                        className="object-contain object-bottom drop-shadow-[-20px_0_40px_rgba(0,0,0,0.5)]"
                        priority
                    />
                </div>
            </motion.div>

            {/* Glass Card Container OVER the photo */}
            <div className="relative z-30 w-[95%] md:w-[85%] max-w-[1400px] h-full min-h-[85vh] md:min-h-[700px] rounded-[-] md:rounded-3xl bg-white/10 backdrop-blur-xl md:backdrop-blur-sm overflow-hidden flex shadow-[0_0_50px_rgba(0,0,0,0.5)] border-0 md:border md:border-white/20">

                {/* Horizontal Divider Line inside Glass (Left side for intro) */}
                <div className="absolute top-0 bottom-0 left-[40%] w-px bg-white/20 hidden lg:block border-l border-white/10" />

                {/* Left Side Content (Intro & Details) */}
                <div className="w-full lg:w-[40%] h-full flex flex-col justify-between p-8 md:p-12 lg:p-16 z-40 bg-white/5 md:bg-transparent">

                    {/* Top Left: Logo / Dots */}
                    <div className="grid grid-cols-3 gap-[4px] opacity-70 w-max mb-12">
                        {[...Array(9)].map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 bg-white rounded-full" />
                        ))}
                    </div>

                    {/* Middle Left: Main Typography */}
                    <div className="flex flex-col mb-12">
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white tracking-tight drop-shadow-lg uppercase">
                            Akhmad Aldo Sari.
                        </h1>


                        <p className="text-white/80 text-sm md:text-base font-light leading-relaxed mb-8 max-w-[90%] md:max-w-md drop-shadow-md pb-8 border-b border-white/20">
                            Berbalut warna ungu kreativitas, dia menari menjalani kehidupan dengan keanggunan seorang software engineer — Aldo, sebuah simfoni inovasi dalam setiap baris kode yang direalisasikannya.
                        </p>

                        {/* OS & Download */}
                        <div className="flex items-center gap-6 text-white/90">
                            {/* Apple SVG */}
                            <svg viewBox="0 0 384 512" fill="currentColor" className="w-6 h-6 hover:text-white transition-colors cursor-pointer"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
                            {/* Android SVG */}
                            <svg viewBox="0 0 448 512" fill="currentColor" className="w-6 h-6 hover:text-white transition-colors cursor-pointer"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" /></svg>

                            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] bg-white text-black px-6 py-2 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_20px_rgba(250,204,21,0.6)] hover:bg-yellow-400 cursor-pointer transition-all ml-4">
                                DOWNLOAD
                            </span>
                        </div>
                    </div>

                    {/* Bottom Left: Socials */}
                    <div className="flex gap-6 text-white mt-auto">
                        <div className="p-3 border border-white/30 rounded-full hover:bg-white hover:text-[#8124d2] cursor-pointer transition-all">
                            <Instagram className="w-5 h-5" />
                        </div>
                        <div className="p-3 border border-white/30 rounded-full hover:bg-white hover:text-[#8124d2] cursor-pointer transition-all">
                            <Facebook className="w-5 h-5" />
                        </div>
                        <div className="p-3 border border-white/30 rounded-full hover:bg-white hover:text-[#8124d2] cursor-pointer transition-all">
                            <Twitter className="w-5 h-5" />
                        </div>
                    </div>
                </div>

                {/* Right Side Info Overlays (Absolute Overlaying Photo) */}
                <div className="absolute left-[40%] pl-12 lg:pl-16 top-8 md:top-12 lg:top-16 items-center gap-4 z-40 hidden lg:flex">
                    <div className="w-10 h-10 bg-[#E60023] rounded-full flex items-center justify-center text-white font-serif font-black italic shadow-lg cursor-pointer hover:scale-110 transition-transform z-10">
                        P
                    </div>
                    <div className="flex flex-col text-white opacity-90">
                        <span className="text-[10px] tracking-widest text-white/70">Design by :</span>
                        <span className="text-xs tracking-[0.2em] font-bold">@ALDODEV</span>
                    </div>
                </div>

                <div className="absolute right-8 md:right-12 lg:right-16 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-40 hidden lg:flex">
                    <div className="flex flex-col gap-3">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className={`w-2 h-2 rounded-full border border-white transition-colors duration-300 ${i === 4 ? 'bg-white' : 'bg-transparent'}`} />
                        ))}
                    </div>
                    <ChevronRight className="w-8 h-8 text-white/50 cursor-pointer hover:text-white transition-colors mt-4" />
                </div>

                {/* Search / Line */}
                <div className="absolute right-8 md:right-12 lg:right-16 top-8 md:top-12 lg:top-16 pt-0 flex flex-col items-center gap-6 z-40">
                    <Search className="w-6 h-6 text-white opacity-80 cursor-pointer hover:text-yellow-400 transition-colors hidden lg:block" />
                    <div className="w-px h-16 bg-white/30 hidden lg:block" />
                </div>

                {/* Bottom Right Player Area */}
                <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-[#8124d2]/30 lg:bg-white/10 backdrop-blur-3xl border border-white/10 lg:border-white/20 p-4 md:px-6 rounded-3xl flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-12 z-40 w-[90%] md:w-auto shadow-2xl mx-auto md:mx-0 max-w-[400px]">

                    <div className="flex flex-col text-white text-center md:text-left drop-shadow-md w-full md:w-auto">
                        <span className="text-[10px] tracking-[0.3em] opacity-70 mb-1 uppercase">Playing Now</span>
                        <span className="text-xs md:text-sm font-bold tracking-[0.2em] mb-1 whitespace-nowrap">AKHMAD ALDO</span>
                        <span className="text-[10px] tracking-widest opacity-60">01. CREATIVE PORTFOLIO</span>
                    </div>

                    <div className="flex items-center gap-6 text-white pb-1">
                        <Rewind className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 hover:text-yellow-400 transition-all" />
                        <div className="w-12 h-12 border border-white/50 rounded-full flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#8124d2] transition-all bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                            <Play className="w-5 h-5 fill-current ml-1" />
                        </div>
                        <FastForward className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 hover:text-yellow-400 transition-all" />
                    </div>
                </div>

            </div>

        </section>
    );
}
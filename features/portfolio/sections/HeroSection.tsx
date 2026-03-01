"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import me from "@/public/assets/me.png"

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Parallax effect for the background moving text
    const textX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <section
            ref={containerRef}
            data-nav-theme="transparent"
            className="relative h-screen min-h-[700px] w-full bg-linear-to-br from-[#8124d2] via-[#4629a4] to-[#250335] text-white overflow-hidden flex flex-col justify-end items-center"
        >
            {/* Background Texture/Gradient Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />

            {/* Geometric Shapes */}
            {/* Top Left Dots */}
            <div className="absolute left-8 md:left-16 top-2.5/3 -translate-y-1/2 grid grid-cols-4 gap-3 opacity-30">
                {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/50" />
                ))}
            </div>

            {/* Empty Circles */}
            <div className="absolute right-[30%] top-[25%] w-6 h-6 rounded-full border border-white/40" />
            <div className="absolute left-[30%] bottom-[15%] w-6 h-6 rounded-full border border-white/40" />

            {/* Wavy Line (Top Right) */}
            <svg className="absolute right-10 md:right-20 top-20 w-32 h-10 opacity-70" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 10C12.5 10 12.5 2 25 2C37.5 2 37.5 18 50 18C62.5 18 62.5 2 75 2C87.5 2 87.5 18 100 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>

            {/* Diamonds (Bottom Right) */}
            <div className="absolute right-12 md:right-24 bottom-[30%] flex flex-col gap-4 opacity-70">
                <div className="w-2.5 h-2.5 bg-transparent border border-white rotate-45" />
                <div className="w-2.5 h-2.5 bg-yellow-400 rotate-45" />
                <div className="w-2.5 h-2.5 bg-yellow-400 rotate-45" />
                <div className="w-2.5 h-2.5 bg-yellow-400 rotate-45" />
            </div>

            {/* Top Left Text */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute left-8 md:left-20 top-32 z-20"
            >
                <p className="text-xl md:text-2xl font-light mb-1">Hi, I'm</p>
                <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
                    Akhmad Aldo Sari
                </h1>
            </motion.div>

            {/* Bottom Right Description */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute right-8 md:right-20 bottom-20 z-20 max-w-xs text-right"
            >
                <p className="text-sm md:text-base font-medium leading-relaxed opacity-90">
                    Expert in web and mobile development, specializing in creating responsive,
                    user-friendly applications with a focus on performance and scalability.
                </p>
            </motion.div>

            {/* Huge Scrolling Background Text */}
            <div className="absolute top-1/2 -translate-y-[60%] w-full overflow-hidden flex whitespace-nowrap z-0 pointer-events-none opacity-90 mix-blend-overlay">
                <motion.div
                    style={{ x: textX }}
                    className="flex text-[12rem] md:text-[18rem] font-black tracking-tighter text-white"
                >
                    <span className="mr-8">MOBILE DEVELOPER</span>
                    <span className="mr-8">MOBILE DEVELOPER</span>
                    <span className="mr-8">MOBILE DEVELOPER</span>
                </motion.div>
            </div>

            {/* Center Human Cutout Image */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="relative z-10 h-[75%] md:h-[85%] w-full max-w-3xl flex items-end justify-center pointer-events-none"
            >
                <Image
                    src={me}
                    alt="Akhmad Aldo Sari"
                    fill
                    priority
                    className="object-contain object-bottom drop-shadow-2xl brightness-110 translate-y-10 md:translate-y-16"
                    style={{
                        WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,1) 35%, rgba(0,0,0,1) 100%)",
                        maskImage: "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,1) 35%, rgba(0,0,0,1) 100%)"
                    }}
                />
            </motion.div>
        </section>
    );
}
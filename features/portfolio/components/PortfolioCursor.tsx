"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function PortfolioCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [coords, setCoords] = useState({ x: 0, y: 0 });

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 28, stiffness: 400, mass: 0.2 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleMouseMove = (e: MouseEvent) => {
            if (!isVisible) setIsVisible(true);
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            setCoords({ x: e.clientX, y: e.clientY });

            // Check if hovering interactive element
            const target = e.target as HTMLElement | null;
            if (target?.closest("a, button, [role='button'], input, select, textarea")) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        document.documentElement.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [isVisible, mouseX, mouseY]);

    if (!isVisible) return null;

    return (
        <div className="hidden lg:block pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
            {/* Center Crosshair Target */}
            <motion.div
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                className="absolute flex items-center justify-center pointer-events-none"
            >
                {/* Crosshair 90-degree square reticle */}
                <div
                    className={`relative transition-all duration-150 ${
                        isHovered
                            ? "w-8 h-8 border border-[#ff2a2a] bg-[#ff2a2a]/10"
                            : "w-5 h-5 border border-[#eaeaea]/40"
                    }`}
                >
                    {/* Reticle tick marks */}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-[#ff2a2a]" />
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-[#ff2a2a]" />
                    <div className="absolute top-1/2 -left-1 -translate-y-1/2 h-0.5 w-1 bg-[#ff2a2a]" />
                    <div className="absolute top-1/2 -right-1 -translate-y-1/2 h-0.5 w-1 bg-[#ff2a2a]" />
                    {/* Center dot */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-[#ff2a2a]" />
                </div>

                {/* Telemetry coordinate readout label */}
                <div className="absolute top-4 left-4 whitespace-nowrap bg-[#0a0a0a]/90 border border-[#262626] px-1 py-0.5 font-mono text-[9px] text-[#888888] select-none tracking-tighter">
                    <span className="text-[#ff2a2a]">TGT</span> {coords.x},{coords.y}
                </div>
            </motion.div>
        </div>
    );
}

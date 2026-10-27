"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function PortfolioCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth physics springs
    const springFast = { damping: 28, stiffness: 350, mass: 0.4 };
    const dotX = useSpring(mouseX, springFast);
    const dotY = useSpring(mouseY, springFast);

    const springSlow = { damping: 22, stiffness: 120, mass: 0.7 };
    const ringX = useSpring(mouseX, springSlow);
    const ringY = useSpring(mouseY, springSlow);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleMouseMove = (e: MouseEvent) => {
            if (!isVisible) setIsVisible(true);
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            // Detect if hovering over clickable element
            const target = e.target as HTMLElement | null;
            const isClickable = target?.closest("button, a, input, [role='button']");
            setIsHovered(!!isClickable);
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
        <div className="hidden lg:block pointer-events-none">
            {/* Outer soft trailing ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-[var(--color-accent-deep)] transform -translate-x-1/2 -translate-y-1/2"
                style={{
                    x: ringX,
                    y: ringY,
                }}
                animate={{
                    width: isHovered ? 44 : 26,
                    height: isHovered ? 44 : 26,
                    backgroundColor: isHovered ? "rgba(250, 228, 56, 0.22)" : "rgba(250, 228, 56, 0.08)",
                }}
                transition={{ duration: 0.25, ease: "easeOut" }}
            />
            {/* Inner fast indicator dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[var(--color-ink)] transform -translate-x-1/2 -translate-y-1/2"
                style={{
                    x: dotX,
                    y: dotY,
                }}
                animate={{
                    width: isHovered ? 8 : 6,
                    height: isHovered ? 8 : 6,
                }}
                transition={{ duration: 0.15, ease: "easeOut" }}
            />
        </div>
    );
}

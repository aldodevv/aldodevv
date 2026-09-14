"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function PortfolioCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isPointer, setIsPointer] = useState(false);

    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    const springFast = { damping: 28, stiffness: 400, mass: 0.2 };
    const dotX = useSpring(mouseX, springFast);
    const dotY = useSpring(mouseY, springFast);

    const springSlow = { damping: 24, stiffness: 180, mass: 0.5 };
    const ringX = useSpring(mouseX, springSlow);
    const ringY = useSpring(mouseY, springSlow);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleMouseMove = (e: MouseEvent) => {
            if (!isVisible) setIsVisible(true);

            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            const target = e.target as HTMLElement | null;
            if (target) {
                const interactive = target.closest("a, button, input, [role='button'], .cursor-pointer");
                setIsPointer(!!interactive);
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
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden hidden md:block">
            {/* Center precision dot */}
            <motion.div
                style={{
                    x: dotX,
                    y: dotY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                className="w-1.5 h-1.5 bg-[#111111] rounded-full"
            />

            {/* Subtle outer tracking ring */}
            <motion.div
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    width: isPointer ? 32 : 20,
                    height: isPointer ? 32 : 20,
                    borderColor: isPointer ? "rgba(17, 17, 17, 0.35)" : "rgba(17, 17, 17, 0.15)",
                    backgroundColor: isPointer ? "rgba(17, 17, 17, 0.03)" : "transparent",
                }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="rounded-full border border-[#111111]/20"
            />
        </div>
    );
}

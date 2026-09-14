"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

type CursorTheme = "transparent" | "light-pill" | "dark-pill" | "dark-full" | "default";

export default function PortfolioCursor() {
    const [theme, setTheme] = useState<CursorTheme>("default");
    const [isVisible, setIsVisible] = useState(false);

    // Raw mouse coordinates
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // FAST spring for the center dot (instant feel)
    const springFast = { damping: 25, stiffness: 300, mass: 0.5 };
    const dotX = useSpring(mouseX, springFast);
    const dotY = useSpring(mouseY, springFast);

    // SLOW spring for the outer trailing circle (lag dragging feel)
    const springSlow = { damping: 22, stiffness: 45, mass: 0.65 };
    const ringX = useSpring(mouseX, springSlow);
    const ringY = useSpring(mouseY, springSlow);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleMouseMove = (e: MouseEvent) => {
            if (!isVisible) setIsVisible(true);

            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            // Detect current section data-nav-theme
            const element = document.elementFromPoint(e.clientX, e.clientY);
            const section = element?.closest("[data-nav-theme]");

            if (section) {
                setTheme(section.getAttribute("data-nav-theme") as CursorTheme);
            } else {
                setTheme("default");
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

    // Variants for trailing ring (Neo-Brutalist colored circles with black borders)
    const ringVariants = {
        default: {
            width: 24,
            height: 24,
            backgroundColor: "rgba(255, 94, 94, 0.4)", // Salmon pink
            border: "2px solid #000000",
            borderRadius: "9999px",
            mixBlendMode: "normal" as const,
            backdropFilter: "blur(0px)",
        },
        transparent: {
            width: 32,
            height: 32,
            backgroundColor: "rgba(255, 213, 79, 0.5)", // Yellow
            border: "2px solid #000000",
            borderRadius: "9999px",
            mixBlendMode: "normal" as const,
            backdropFilter: "blur(0px)",
        },
        "light-pill": {
            width: 30,
            height: 30,
            backgroundColor: "rgba(176, 136, 249, 0.4)", // Lilac
            border: "2px solid #000000",
            borderRadius: "9999px",
            mixBlendMode: "normal" as const,
            backdropFilter: "blur(0px)",
        },
        "dark-pill": {
            width: 36,
            height: 36,
            backgroundColor: "rgba(60, 208, 112, 0.5)", // Lime Green
            border: "2px dashed #000000",
            borderRadius: "9999px",
            mixBlendMode: "normal" as const,
            backdropFilter: "blur(0px)",
        },
        "dark-full": {
            width: 28,
            height: 28,
            backgroundColor: "rgba(63, 193, 232, 0.5)", // Sky Blue
            border: "2px solid #000000",
            borderRadius: "9999px",
            mixBlendMode: "normal" as const,
            backdropFilter: "blur(0px)",
        },
    };

    const dotVariants = {
        default: {
            width: 6,
            height: 6,
            backgroundColor: "#000000",
            borderRadius: "9999px",
        },
        transparent: {
            width: 8,
            height: 8,
            backgroundColor: "#000000",
            borderRadius: "9999px",
        },
        "light-pill": {
            width: 6,
            height: 6,
            backgroundColor: "#000000",
            borderRadius: "9999px",
        },
        "dark-pill": {
            width: 6,
            height: 6,
            backgroundColor: "#000000",
            borderRadius: "9999px",
        },
        "dark-full": {
            width: 6,
            height: 6,
            backgroundColor: "#000000",
            borderRadius: "9999px",
        },
    };

    return (
        <>
            {/* Outer delayed trailing circle */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
                style={{
                    x: ringX,
                    y: ringY,
                }}
                initial="default"
                animate={theme}
                variants={ringVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
            />
            {/* Inner fast pointer dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2"
                style={{
                    x: dotX,
                    y: dotY,
                }}
                initial="default"
                animate={theme}
                variants={dotVariants}
                transition={{ duration: 0.3, ease: "easeOut" }}
            />
            {/* Global style to hide default cursor over screen */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @media (pointer: fine) {
          body {
            /* Optional: uncomment to hide regular OS cursor */
            /* cursor: none; */ 
          }
        }
      `}} />
        </>
    );
}

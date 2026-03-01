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

    // SLOW spring for the outer particle (~500ms delay feel)
    // Lower stiffness and higher mass creates a beautiful dragging delay
    const springSlow = { damping: 20, stiffness: 35, mass: 0.6 };
    const ringX = useSpring(mouseX, springSlow);
    const ringY = useSpring(mouseY, springSlow);

    useEffect(() => {
        // Only run on client
        if (typeof window === "undefined") return;

        const handleMouseMove = (e: MouseEvent) => {
            if (!isVisible) setIsVisible(true);

            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            // Detect which section the mouse is currently hovering over
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

    // Variants for the delayed trailing particle
    const ringVariants = {
        default: {
            width: 40,
            height: 40,
            backgroundColor: "rgba(255, 255, 255, 0)",
            border: "2px solid rgba(255, 255, 255, 0.4)",
            mixBlendMode: "normal" as const,
            backdropFilter: "blur(0px)",
        },
        transparent: {
            width: 70,
            height: 70,
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255,255,255,0.2)",
            mixBlendMode: "difference" as const,
            backdropFilter: "blur(2px)",
        },
        "light-pill": {
            width: 50,
            height: 50,
            backgroundColor: "rgba(0, 0, 0, 0)",
            border: "2px solid rgba(0, 0, 0, 0.3)",
            mixBlendMode: "normal" as const,
            backdropFilter: "blur(0px)",
        },
        "dark-pill": {
            width: 90,
            height: 90,
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            border: "1px dashed rgba(255, 255, 255, 0.5)",
            mixBlendMode: "normal" as const,
            backdropFilter: "blur(4px)",
        },
        "dark-full": {
            width: 120,
            height: 120,
            backgroundColor: "rgba(255, 255, 255, 1)",
            border: "0px solid rgba(255, 255, 255, 0)",
            mixBlendMode: "difference" as const,
            backdropFilter: "blur(0px)",
        },
    };

    const dotVariants = {
        default: {
            width: 8,
            height: 8,
            backgroundColor: "rgba(255, 255, 255, 1)",
        },
        transparent: {
            width: 12,
            height: 12,
            backgroundColor: "rgba(255, 255, 255, 1)",
        },
        "light-pill": {
            width: 10,
            height: 10,
            backgroundColor: "rgba(0, 0, 0, 1)",
        },
        "dark-pill": {
            width: 8,
            height: 8,
            backgroundColor: "rgba(255, 255, 255, 1)",
        },
        "dark-full": {
            width: 0,
            height: 0, // Hide the inner dot when the giant mask is active
            backgroundColor: "rgba(255, 255, 255, 0)",
        },
    };

    return (
        <>
            {/* Outer delayed particle */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
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
                className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transform -translate-x-1/2 -translate-y-1/2"
                style={{
                    x: dotX,
                    y: dotY,
                }}
                initial="default"
                animate={theme}
                variants={dotVariants}
                transition={{ duration: 0.3, ease: "easeOut" }}
            />
            {/* Global style to hide default cursor over interactive elements using the custom cursor */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @media (pointer: fine) {
          body {
            /* Optional: To hide original cursor everywhere uncomment the next line */
            /* cursor: none; */ 
          }
        }
      `}} />
        </>
    );
}

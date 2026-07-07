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

    // Variants for the delayed trailing particle (arcade style squares)
    const ringVariants = {
        default: {
            width: 24,
            height: 24,
            backgroundColor: "rgba(255, 184, 62, 0.05)",
            border: "2px solid #ffb83e",
            mixBlendMode: "normal" as const,
            backdropFilter: "blur(0px)",
            borderRadius: "0px",
        },
        transparent: {
            width: 32,
            height: 32,
            backgroundColor: "rgba(250, 82, 15, 0.1)",
            border: "2px solid #fa520f",
            mixBlendMode: "normal" as const,
            backdropFilter: "blur(1px)",
            borderRadius: "0px",
        },
        "light-pill": {
            width: 30,
            height: 30,
            backgroundColor: "rgba(0, 0, 0, 0)",
            border: "2px solid #ffb83e",
            mixBlendMode: "normal" as const,
            backdropFilter: "blur(0px)",
            borderRadius: "0px",
        },
        "dark-pill": {
            width: 40,
            height: 40,
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            border: "2px dashed #fa520f",
            mixBlendMode: "normal" as const,
            backdropFilter: "blur(2px)",
            borderRadius: "0px",
        },
        "dark-full": {
            width: 24,
            height: 24,
            backgroundColor: "#ffb83e",
            border: "2px solid #ffffff",
            mixBlendMode: "difference" as const,
            backdropFilter: "blur(0px)",
            borderRadius: "0px",
        },
    };

    const dotVariants = {
        default: {
            width: 6,
            height: 6,
            backgroundColor: "#ffb83e",
            borderRadius: "0px",
        },
        transparent: {
            width: 8,
            height: 8,
            backgroundColor: "#fa520f",
            borderRadius: "0px",
        },
        "light-pill": {
            width: 6,
            height: 6,
            backgroundColor: "#ffb83e",
            borderRadius: "0px",
        },
        "dark-pill": {
            width: 6,
            height: 6,
            backgroundColor: "#fa520f",
            borderRadius: "0px",
        },
        "dark-full": {
            width: 0,
            height: 0,
            backgroundColor: "rgba(255, 255, 255, 0)",
            borderRadius: "0px",
        },
    };

    return (
        <>
            {/* Outer delayed particle */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-none flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
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
                className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-none transform -translate-x-1/2 -translate-y-1/2"
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

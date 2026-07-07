"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface RetroScrambleTextProps {
    text: string;
    className?: string;
    delay?: number;
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*()_+-=[]{}|;':\",./<>?";

export default function RetroScrambleText({ text, className = "", delay = 0 }: RetroScrambleTextProps) {
    const [displayText, setDisplayText] = useState("");
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const isRunning = useRef(false);

    useEffect(() => {
        if (!isInView || isRunning.current) return;

        isRunning.current = true;
        let iteration = 0;
        let interval: NodeJS.Timeout;

        const startScramble = () => {
            interval = setInterval(() => {
                setDisplayText(() => {
                    return text
                        .split("")
                        .map((char, index) => {
                            if (char === " ") return " ";
                            
                            // If index is less than the current iteration threshold, show correct char
                            if (index < iteration) {
                                return text[index];
                            }
                            
                            // Otherwise, show a random scramble char
                            return chars[Math.floor(Math.random() * chars.length)];
                        })
                        .join("");
                });

                if (iteration >= text.length) {
                    clearInterval(interval);
                }

                iteration += 1/3; // Controls speed of resolution (larger = faster)
            }, 30);
        };

        const timeout = setTimeout(startScramble, delay * 1000);

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [isInView, text, delay]);

    return (
        <span ref={ref} className={className}>
            {displayText || text}
        </span>
    );
}

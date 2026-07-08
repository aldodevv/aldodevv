"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface RetroTypewriterTextProps {
    text: string;
    className?: string;
    delay?: number;
    speed?: number; // millisecond delay per character
}

export default function RetroTypewriterText({ 
    text, 
    className = "", 
    delay = 0,
    speed = 40
}: RetroTypewriterTextProps) {
    const [displayText, setDisplayText] = useState("");
    const [showCursor, setShowCursor] = useState(true);
    const [isDone, setIsDone] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const isRunning = useRef(false);

    useEffect(() => {
        if (!isInView || isRunning.current) return;

        isRunning.current = true;
        let charIndex = 0;
        let timer: NodeJS.Timeout;

        const startTyping = () => {
            timer = setInterval(() => {
                charIndex++;
                setDisplayText(text.slice(0, charIndex));

                if (charIndex >= text.length) {
                    clearInterval(timer);
                    setIsDone(true);
                }
            }, speed);
        };

        const startTimeout = setTimeout(startTyping, delay * 1000);

        return () => {
            clearTimeout(startTimeout);
            clearInterval(timer);
        };
    }, [isInView, text, delay, speed]);

    // Blinking cursor logic
    useEffect(() => {
        if (isDone) {
            // Keep blinking cursor for a while or let it stay
            const cursorInterval = setInterval(() => {
                setShowCursor(prev => !prev);
            }, 530);
            return () => clearInterval(cursorInterval);
        } else {
            // Constant display while typing
            setShowCursor(true);
        }
    }, [isDone]);

    return (
        <span ref={ref} className={className}>
            {displayText}
            <span 
                className={`inline-block ml-1 font-bold text-secondary transition-opacity duration-150 ${
                    showCursor ? "opacity-100" : "opacity-0"
                }`}
            >
                _
            </span>
        </span>
    );
}

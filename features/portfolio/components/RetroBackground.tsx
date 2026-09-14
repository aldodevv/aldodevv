"use client";

import React from "react";

export default function RetroBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#fbfbfa]">
            {/* Subtle architectural hairline grid */}
            <div 
                className="absolute inset-0 opacity-40"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: "48px 48px",
                }}
            />

            {/* Quiet ambient radial warm glow for depth */}
            <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full opacity-60 pointer-events-none blur-3xl"
                style={{
                    background: "radial-gradient(circle, rgba(240, 238, 230, 0.7) 0%, rgba(251, 251, 250, 0) 70%)"
                }}
            />

            {/* Subtle bottom vignette line */}
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#fbfbfa] to-transparent" />
        </div>
    );
}

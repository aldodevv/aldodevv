"use client";

import React, { useEffect, useRef } from "react";

export default function RetroBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        let mouseX = 0;
        let mouseY = 0;
        let targetMouseX = 0;
        let targetMouseY = 0;

        // Cut-paper organic floating chips/shapes in Hum palette
        // Hum palette: cream, pear, mint, soft blue, and kraft
        const shapes = [
            { x: 0.12, y: 0.18, r: 48, rot: 0.2, color: "rgba(250, 228, 56, 0.18)", speed: 0.0008, type: "pill", w: 90, h: 42 },
            { x: 0.85, y: 0.25, r: 64, rot: -0.15, color: "rgba(110, 231, 183, 0.22)", speed: 0.0006, type: "circle", w: 70, h: 70 },
            { x: 0.78, y: 0.65, r: 52, rot: 0.35, color: "rgba(37, 99, 235, 0.08)", speed: 0.0007, type: "pill", w: 110, h: 48 },
            { x: 0.08, y: 0.75, r: 70, rot: -0.25, color: "rgba(250, 228, 56, 0.14)", speed: 0.0005, type: "card", w: 80, h: 80 },
            { x: 0.52, y: 0.88, r: 40, rot: 0.1, color: "rgba(248, 113, 113, 0.10)", speed: 0.0009, type: "pill", w: 85, h: 36 },
        ];

        const handleResize = () => {
            if (!canvas) return;
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e: MouseEvent) => {
            targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
            targetMouseY = (e.clientY / window.innerHeight) * 2 - 1;
        };

        window.addEventListener("resize", handleResize, { passive: true });
        window.addEventListener("mousemove", handleMouseMove, { passive: true });

        const lerp = (start: number, end: number, amt: number) => {
            return (1 - amt) * start + amt * end;
        };

        let time = 0;

        const render = () => {
            time += 0.015;
            mouseX = lerp(mouseX, targetMouseX, 0.05);
            mouseY = lerp(mouseY, targetMouseY, 0.05);

            // Clean background with Hum paper base
            ctx.clearRect(0, 0, width, height);

            // Top-left illumination subtle radial wash
            const lightGrad = ctx.createRadialGradient(
                width * 0.15 + mouseX * 40,
                height * 0.1 + mouseY * 30,
                20,
                width * 0.2,
                height * 0.2,
                Math.max(width, height) * 0.85
            );
            lightGrad.addColorStop(0, "rgba(255, 255, 255, 0.45)");
            lightGrad.addColorStop(0.5, "rgba(251, 248, 237, 0.2)");
            lightGrad.addColorStop(1, "rgba(240, 236, 222, 0)");
            ctx.fillStyle = lightGrad;
            ctx.fillRect(0, 0, width, height);

            // Render floating soft paper cutouts with top-left soft drop shadow
            shapes.forEach((s, idx) => {
                const floatY = Math.sin(time + idx * 1.5) * 14;
                const floatX = Math.cos(time * 0.8 + idx) * 8;
                const currentX = s.x * width + floatX + mouseX * (15 + idx * 6);
                const currentY = s.y * height + floatY + mouseY * (12 + idx * 5);
                const currentRot = s.rot + Math.sin(time * 0.5 + idx) * 0.05;

                ctx.save();
                ctx.translate(currentX, currentY);
                ctx.rotate(currentRot);

                // Top-left light source shadow (falls down-right)
                ctx.shadowColor = "rgba(32, 20, 10, 0.05)";
                ctx.shadowBlur = 18;
                ctx.shadowOffsetX = 6;
                ctx.shadowOffsetY = 10;

                ctx.fillStyle = s.color;
                
                if (s.type === "pill") {
                    ctx.beginPath();
                    ctx.roundRect(-s.w / 2, -s.h / 2, s.w, s.h, s.h / 2);
                    ctx.fill();
                } else if (s.type === "card") {
                    ctx.beginPath();
                    ctx.roundRect(-s.w / 2, -s.h / 2, s.w, s.h, 18);
                    ctx.fill();
                } else {
                    ctx.beginPath();
                    ctx.arc(0, 0, s.r / 2, 0, Math.PI * 2);
                    ctx.fill();
                }

                ctx.restore();
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-screen h-screen -z-10 pointer-events-none"
            style={{ display: "block" }}
        />
    );
}

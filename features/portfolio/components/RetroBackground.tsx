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

        // Scroll tracking variables
        let lastScrollY = window.scrollY;
        let targetSpeed = 2; // Default drifting speed
        let speed = 2;       // Lerped speed
        let scrollDelta = 0;
        let tiltOffset = 0;  // Tilts horizon on scroll

        // Mouse interaction variables
        let mouseX = 0;      // Lerped X position (-1 to 1)
        let mouseY = 0;      // Lerped Y position (-1 to 1)
        let targetMouseX = 0;
        let targetMouseY = 0;
        
        // Interactive spark particles spawned by mouse movement
        const sparkParticles: { 
            x: number; 
            y: number; 
            vx: number; 
            vy: number; 
            life: number; 
            maxLife: number; 
            color: string; 
            size: number; 
        }[] = [];

        // --- 3D Floating Shape Setup (Mistral.ai style, SEGA themed) ---
        // Octahedron (8 triangular faces, 6 vertices)
        const vertices = [
            { x: 0, y: 1.2, z: 0 },
            { x: 1, y: 0, z: 1 },
            { x: -1, y: 0, z: 1 },
            { x: -1, y: 0, z: -1 },
            { x: 1, y: 0, z: -1 },
            { x: 0, y: -1.2, z: 0 }
        ];

        const edges = [
            [0, 1], [0, 2], [0, 3], [0, 4], // Top pyramid edges
            [5, 1], [5, 2], [5, 3], [5, 4], // Bottom pyramid edges
            [1, 2], [2, 3], [3, 4], [4, 1]  // Middle ring edges
        ];

        let angleX = 0;
        let angleY = 0;

        // Coordinates of shape center (lerped for smooth movement)
        let shapeX = width * 0.75;
        let shapeY = height * 0.35;
        let targetShapeX = width * 0.75;
        let targetShapeY = height * 0.35;
        let shapeScale = 1.0;
        let targetShapeScale = 1.0;

        const handleResize = () => {
            if (!canvas) return;
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            handleScroll();
        };

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            scrollDelta = Math.abs(currentScrollY - lastScrollY);
            lastScrollY = currentScrollY;

            // Increase speed based on how fast the user is scrolling
            targetSpeed = 2 + Math.min(scrollDelta * 0.5, 30);
            
            // Horizon tilt based on scroll direction
            const direction = currentScrollY > lastScrollY ? 1 : -1;
            tiltOffset = direction * Math.min(scrollDelta * 0.4, 25);

            // Map scroll progress to screen position (Mistral style)
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = maxScroll > 0 ? currentScrollY / maxScroll : 0;

            if (scrollPercent < 0.15) {
                // Section 1 (Hero): Right side, aligned with text
                targetShapeX = width * 0.78;
                targetShapeY = height * 0.38;
                targetShapeScale = 1.0;
            } else if (scrollPercent < 0.45) {
                // Section 2 (About): Left side, opposite to bio card
                targetShapeX = width * 0.22;
                targetShapeY = height * 0.5;
                targetShapeScale = 1.25;
            } else if (scrollPercent < 0.75) {
                // Section 3 (Tech Stack): Top right, floating high
                targetShapeX = width * 0.8;
                targetShapeY = height * 0.3;
                targetShapeScale = 0.95;
            } else {
                // Section 4 (Work Experience): Center top, guiding the eye down
                targetShapeX = width * 0.5;
                targetShapeY = height * 0.22;
                targetShapeScale = 1.15;
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
            targetMouseY = (e.clientY / window.innerHeight) * 2 - 1;
            
            // Spawn spark particles on cursor move
            const colors = ["#fa520f", "#ffb83e", "#fff8e0", "#3b82f6"];
            if (Math.random() < 0.65) {
                sparkParticles.push({
                    x: e.clientX,
                    y: e.clientY,
                    vx: (Math.random() - 0.5) * 1.8,
                    vy: (Math.random() - 0.5) * 1.8 - 0.8, // floats up
                    life: 1,
                    maxLife: 30 + Math.random() * 25,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    size: Math.random() * 2 + 1,
                });
            }
        };

        window.addEventListener("resize", handleResize, { passive: true });
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("mousemove", handleMouseMove, { passive: true });

        // Trigger initial calculation
        handleScroll();

        // --- Stars Setup ---
        const numStars = 60;
        const stars: { x: number; y: number; z: number; size: number }[] = [];
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * width - width / 2,
                y: Math.random() * (height * 0.6) - (height * 0.3), // mostly top half
                z: Math.random() * width,
                size: Math.random() * 1.5 + 0.5,
            });
        }

        // --- Grid Setup ---
        let gridOffset = 0;
        const gridSpacing = 45; // Spacing of grid lines
        const vanishingPointY = height * 0.45; // Horizon height

        // Lerp helper
        const lerp = (start: number, end: number, amt: number) => {
            return (1 - amt) * start + amt * end;
        };

        // --- Render Loop ---
        const render = () => {
            // Lerp mouse variables
            mouseX = lerp(mouseX, targetMouseX, 0.08);
            mouseY = lerp(mouseY, targetMouseY, 0.08);

            // Shifting vanishing points based on mouse coordinates (Camera 3D Parallax!)
            const vanishingPointX = width / 2 + mouseX * 50;
            const vanishingPointY = height * 0.45 + mouseY * 25;

            // Lerp speed back to drift speed (2)
            speed = lerp(speed, targetSpeed, 0.08);
            targetSpeed = lerp(targetSpeed, 2, 0.05);
            tiltOffset = lerp(tiltOffset, 0, 0.05);
            const horizonY = vanishingPointY + tiltOffset;

            // Lerp floating 3D shape position & scale
            shapeX = lerp(shapeX, targetShapeX, 0.04);
            shapeY = lerp(shapeY, targetShapeY, 0.04);
            shapeScale = lerp(shapeScale, targetShapeScale, 0.04);

            // Clean background
            ctx.fillStyle = "#08080a";
            ctx.fillRect(0, 0, width, height);

            // --- Draw Ambient Sunset Glow (Mistral.ai style) ---
            const glowGradient = ctx.createRadialGradient(
                vanishingPointX, horizonY, 10,
                vanishingPointX, horizonY, Math.max(width, height) * 0.5
            );
            glowGradient.addColorStop(0, "rgba(250, 82, 15, 0.16)"); // Glowing Mistral Orange
            glowGradient.addColorStop(0.4, "rgba(255, 184, 62, 0.05)"); // Soft Sunshine Yellow
            glowGradient.addColorStop(1, "rgba(8, 8, 10, 0)"); // Fade into background
            ctx.fillStyle = glowGradient;
            ctx.fillRect(0, 0, width, height);

            // --- 1. Draw Starfield ---
            for (let i = 0; i < numStars; i++) {
                const star = stars[i];
                
                // Move star closer (decrease Z)
                star.z -= speed * 1.5;
                if (star.z <= 0) {
                    star.z = width;
                    star.x = Math.random() * width - width / 2;
                    star.y = Math.random() * (height * 0.6) - (height * 0.3);
                }

                // Project to 2D
                const k = 120 / star.z;
                const px = star.x * k + vanishingPointX; // project with camera parallax shift!
                const py = star.y * k + vanishingPointY;

                if (px >= 0 && px <= width && py >= 0 && py <= height * 0.6) {
                    const alpha = Math.min(1, (1 - star.z / width) * 1.2);
                    
                    // Warp effect: stretch stars into lines when moving fast
                    if (speed > 4) {
                        ctx.strokeStyle = `rgba(255, 248, 224, ${alpha * 0.7})`;
                        ctx.lineWidth = star.size;
                        ctx.beginPath();
                        ctx.moveTo(px, py);
                        // Stretch direction is away from the center vanishing point
                        const stretch = 1 + (speed * 0.04);
                        ctx.lineTo(
                            (px - vanishingPointX) * stretch + vanishingPointX, 
                            (py - vanishingPointY) * stretch + vanishingPointY
                        );
                        ctx.stroke();
                    } else {
                        ctx.fillStyle = `rgba(255, 248, 224, ${alpha})`;
                        ctx.fillRect(px, py, star.size, star.size);
                    }
                }
            }

            // --- 2. Draw 3D Perspective Grid (Tron/Sega Style) ---
            gridOffset += speed * 0.8;
            if (gridOffset >= gridSpacing) {
                gridOffset = 0;
            }

            const gridStartHeight = height - horizonY;

            ctx.strokeStyle = "#fa520f"; // Primary Mistral Orange
            ctx.lineWidth = 2;

            // Draw horizontal lines (converging depth)
            const numHorizontalLines = 15;
            for (let i = 0; i < numHorizontalLines; i++) {
                // Exponential spacing for 3D perspective feel
                const progress = (i * gridSpacing + gridOffset) / (numHorizontalLines * gridSpacing);
                const ratio = Math.pow(progress, 2.5); // Curves spacing closer to horizon
                
                const lineY = horizonY + ratio * gridStartHeight;

                if (lineY >= horizonY && lineY <= height) {
                    ctx.strokeStyle = `rgba(250, 82, 15, ${ratio * 0.8})`; // fade out closer to horizon
                    ctx.beginPath();
                    ctx.moveTo(0, lineY);
                    ctx.lineTo(width, lineY);
                    ctx.stroke();
                }
            }

            // Draw vertical perspective lines (converging at vanishing point)
            const numVerticalLines = 24;

            for (let i = 0; i <= numVerticalLines; i++) {
                const fraction = i / numVerticalLines;
                const bottomX = fraction * width * 2 - width / 2; // Spread lines wider at the bottom

                // Fade intensity based on distance from center
                const distFromCenter = Math.abs(fraction - 0.5) * 2;
                ctx.strokeStyle = `rgba(250, 82, 15, ${0.7 - distFromCenter * 0.3})`;

                ctx.beginPath();
                ctx.moveTo(vanishingPointX, horizonY);
                ctx.lineTo(bottomX, height);
                ctx.stroke();
            }

            // --- 3. Draw Interactive Mouse Spark Trail ---
            for (let i = sparkParticles.length - 1; i >= 0; i--) {
                const p = sparkParticles[i];
                p.x += p.vx;
                p.y += p.vy;
                p.vy -= 0.02; // Spark floats upward
                p.life -= 1 / p.maxLife;
                
                if (p.life <= 0) {
                    sparkParticles.splice(i, 1);
                    continue;
                }

                ctx.fillStyle = p.color;
                ctx.shadowColor = p.color;
                ctx.shadowBlur = 6;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.shadowBlur = 0; // reset

            // --- 4. Draw 3D Floating Shape (Mistral.ai style) ---
            // Rotate the shape, influenced slightly by scroll speed
            angleX += 0.006 + speed * 0.0008;
            angleY += 0.010 + speed * 0.0012;

            // Apply camera parallax displacement to shape coordinates
            const finalShapeX = shapeX + mouseX * 40;
            const finalShapeY = shapeY + mouseY * 25;

            // Rotate and project 3D vertices
            const projectedVertices = vertices.map((v) => {
                // Rotate around X axis
                const rx1 = v.x;
                const ry1 = v.y * Math.cos(angleX) - v.z * Math.sin(angleX);
                const rz1 = v.y * Math.sin(angleX) + v.z * Math.cos(angleX);

                // Rotate around Y axis
                const rx2 = rx1 * Math.cos(angleY) + rz1 * Math.sin(angleY);
                const ry2 = ry1;
                const rz2 = -rx1 * Math.sin(angleY) + rz1 * Math.cos(angleY);

                // Perspective projection constants
                const distance = 3.8;
                const sizeMultiplier = 130 * shapeScale;
                const screenX = finalShapeX + (rx2 * sizeMultiplier) / (distance + rz2);
                const screenY = finalShapeY + (ry2 * sizeMultiplier) / (distance + rz2);

                return { x: screenX, y: screenY };
            });

            // Draw 3D edges (triangular wireframe)
            ctx.strokeStyle = "#fa520f"; // Mistral Orange neon accent
            ctx.lineWidth = 2.5;
            ctx.shadowColor = "#fa520f";
            ctx.shadowBlur = 12;

            edges.forEach(([p1, p2]) => {
                ctx.beginPath();
                ctx.moveTo(projectedVertices[p1].x, projectedVertices[p1].y);
                ctx.lineTo(projectedVertices[p2].x, projectedVertices[p2].y);
                ctx.stroke();
            });

            // Draw 3D vertex points (squares for 8-bit style)
            ctx.fillStyle = "#fff8e0"; // Mistral Cream vertices
            ctx.shadowColor = "#fff8e0";
            ctx.shadowBlur = 6;
            projectedVertices.forEach((p) => {
                ctx.fillRect(p.x - 3.5, p.y - 3.5, 7, 7);
            });

            // Reset shadows
            ctx.shadowBlur = 0;

            // --- 5. Draw Sunset Stripe Horizon Line ---
            const horizonGradient = ctx.createLinearGradient(0, 0, width, 0);
            horizonGradient.addColorStop(0, "#cc3a05");      // Deep Red/Orange
            horizonGradient.addColorStop(0.33, "#fa520f");   // Mistral Orange
            horizonGradient.addColorStop(0.66, "#ffb83e");   // Sunshine Yellow
            horizonGradient.addColorStop(1, "#fff8e0");      // Cream

            ctx.strokeStyle = horizonGradient;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(0, horizonY);
            ctx.lineTo(width, horizonY);
            ctx.stroke();

            // Horizon neon glow
            ctx.shadowColor = "#fa520f";
            ctx.shadowBlur = 10;
            ctx.strokeStyle = "rgba(250, 82, 15, 0.4)";
            ctx.lineWidth = 1;
            ctx.stroke();
            
            // Reset shadows for next frame (important for canvas performance)
            ctx.shadowBlur = 0;

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
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

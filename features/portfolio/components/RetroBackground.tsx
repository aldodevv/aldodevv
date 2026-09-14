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
        
        // Interactive spark particles spawned by mouse movement (Neo-Brutalist colored dots)
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

        // --- 3D Floating Shape Setup (Neo-Brutalist wireframe with vertex beads) ---
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

            // Map scroll progress to screen position
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = maxScroll > 0 ? currentScrollY / maxScroll : 0;

            if (scrollPercent < 0.15) {
                targetShapeX = width * 0.78;
                targetShapeY = height * 0.38;
                targetShapeScale = 1.0;
            } else if (scrollPercent < 0.45) {
                targetShapeX = width * 0.22;
                targetShapeY = height * 0.5;
                targetShapeScale = 1.25;
            } else if (scrollPercent < 0.75) {
                targetShapeX = width * 0.8;
                targetShapeY = height * 0.3;
                targetShapeScale = 0.95;
            } else {
                targetShapeX = width * 0.5;
                targetShapeY = height * 0.22;
                targetShapeScale = 1.15;
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
            targetMouseY = (e.clientY / window.innerHeight) * 2 - 1;
            
            // Spawn spark shapes on cursor move (Neo-Brutalist circles)
            const colors = ["#ff5e5e", "#ffd54f", "#b088f9", "#3cd070", "#3fc1e8", "#ff8a5c"];
            if (Math.random() < 0.5) {
                sparkParticles.push({
                    x: e.clientX,
                    y: e.clientY,
                    vx: (Math.random() - 0.5) * 2.0,
                    vy: (Math.random() - 0.5) * 1.5 - 1.2, // floats up
                    life: 1,
                    maxLife: 35 + Math.random() * 20,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    size: Math.random() * 4 + 3, // slightly larger for visibility
                });
            }
        };

        window.addEventListener("resize", handleResize, { passive: true });
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("mousemove", handleMouseMove, { passive: true });

        // Trigger initial calculation
        handleScroll();

        // --- Stars Setup (Floating Crosses and Squares in Neo-Brutalist style) ---
        const numStars = 50;
        const stars: { x: number; y: number; z: number; size: number; isCross: boolean }[] = [];
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * width - width / 2,
                y: Math.random() * (height * 0.6) - (height * 0.3), // mostly top half
                z: Math.random() * width,
                size: Math.random() * 1.8 + 0.8,
                isCross: Math.random() > 0.5
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

            // Clean background (Warm Neo-Brutalist Eggshell)
            ctx.fillStyle = "#f7f6f0";
            ctx.fillRect(0, 0, width, height);

            // --- Draw Ambient Radial Glow (Soft Neo-Brutalist tints) ---
            const glowGradient = ctx.createRadialGradient(
                vanishingPointX, horizonY, 10,
                vanishingPointX, horizonY, Math.max(width, height) * 0.5
            );
            glowGradient.addColorStop(0, "rgba(255, 94, 94, 0.08)"); // Soft salmon pink glow
            glowGradient.addColorStop(0.4, "rgba(255, 213, 79, 0.04)"); // Soft yellow glow
            glowGradient.addColorStop(1, "rgba(247, 246, 240, 0)"); // Fade into background
            ctx.fillStyle = glowGradient;
            ctx.fillRect(0, 0, width, height);

            // --- 1. Draw Starfield (Floating crosses and dots in solid black/dark grey) ---
            for (let i = 0; i < numStars; i++) {
                const star = stars[i];
                
                // Move star closer
                star.z -= speed * 1.5;
                if (star.z <= 0) {
                    star.z = width;
                    star.x = Math.random() * width - width / 2;
                    star.y = Math.random() * (height * 0.6) - (height * 0.3);
                }

                // Project to 2D
                const k = 120 / star.z;
                const px = star.x * k + vanishingPointX; 
                const py = star.y * k + vanishingPointY;

                if (px >= 0 && px <= width && py >= 0 && py <= height * 0.6) {
                    const alpha = Math.min(1, (1 - star.z / width) * 1.2) * 0.5; // faint dark markers
                    
                    ctx.strokeStyle = `rgba(0, 0, 0, ${alpha})`;
                    ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
                    ctx.lineWidth = 1.5;

                    if (star.isCross) {
                        // Draw tiny '+' cross
                        ctx.beginPath();
                        ctx.moveTo(px - 4, py);
                        ctx.lineTo(px + 4, py);
                        ctx.moveTo(px, py - 4);
                        ctx.lineTo(px, py + 4);
                        ctx.stroke();
                    } else {
                        // Draw small solid square
                        ctx.fillRect(px - 2, py - 2, 4, 4);
                    }
                }
            }

            // --- 2. Draw 3D Perspective Grid (High contrast black lines) ---
            gridOffset += speed * 0.8;
            if (gridOffset >= gridSpacing) {
                gridOffset = 0;
            }

            const gridStartHeight = height - horizonY;

            // Draw horizontal lines (converging depth)
            const numHorizontalLines = 15;
            for (let i = 0; i < numHorizontalLines; i++) {
                const progress = (i * gridSpacing + gridOffset) / (numHorizontalLines * gridSpacing);
                const ratio = Math.pow(progress, 2.5); 
                
                const lineY = horizonY + ratio * gridStartHeight;

                if (lineY >= horizonY && lineY <= height) {
                    ctx.strokeStyle = `rgba(0, 0, 0, ${ratio * 0.15})`; // thin black lines fading out
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.moveTo(0, lineY);
                    ctx.lineTo(width, lineY);
                    ctx.stroke();
                }
            }

            // Draw vertical perspective lines
            const numVerticalLines = 24;
            for (let i = 0; i <= numVerticalLines; i++) {
                const fraction = i / numVerticalLines;
                const bottomX = fraction * width * 2 - width / 2;

                const distFromCenter = Math.abs(fraction - 0.5) * 2;
                ctx.strokeStyle = `rgba(0, 0, 0, ${0.12 - distFromCenter * 0.04})`;
                ctx.lineWidth = 1.5;

                ctx.beginPath();
                ctx.moveTo(vanishingPointX, horizonY);
                ctx.lineTo(bottomX, height);
                ctx.stroke();
            }

            // --- 3. Draw Interactive Mouse Spark Trail (Sticker circles with black outlines) ---
            for (let i = sparkParticles.length - 1; i >= 0; i--) {
                const p = sparkParticles[i];
                p.x += p.vx;
                p.y += p.vy;
                p.vy -= 0.015; // Particle floats upward
                p.life -= 1 / p.maxLife;
                
                if (p.life <= 0) {
                    sparkParticles.splice(i, 1);
                    continue;
                }

                const currentSize = p.size * p.life * 1.5;

                // Fill color
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
                ctx.fill();

                // Thick solid black outline (Neo-Brutalist sticker style)
                ctx.strokeStyle = "#000000";
                ctx.lineWidth = 1.8;
                ctx.stroke();
            }

            // --- 4. Draw 3D Floating Shape (Thick solid black outlines, colorful vertex beads) ---
            angleX += 0.006 + speed * 0.0008;
            angleY += 0.010 + speed * 0.0012;

            // Apply camera parallax displacement
            const finalShapeX = shapeX + mouseX * 40;
            const finalShapeY = shapeY + mouseY * 25;

            // Rotate and project 3D vertices
            const projectedVertices = vertices.map((v) => {
                const rx1 = v.x;
                const ry1 = v.y * Math.cos(angleX) - v.z * Math.sin(angleX);
                const rz1 = v.y * Math.sin(angleX) + v.z * Math.cos(angleX);

                const rx2 = rx1 * Math.cos(angleY) + rz1 * Math.sin(angleY);
                const ry2 = ry1;
                const rz2 = -rx1 * Math.sin(angleY) + rz1 * Math.cos(angleY);

                const distance = 3.8;
                const sizeMultiplier = 130 * shapeScale;
                const screenX = finalShapeX + (rx2 * sizeMultiplier) / (distance + rz2);
                const screenY = finalShapeY + (ry2 * sizeMultiplier) / (distance + rz2);

                return { x: screenX, y: screenY };
            });

            // Draw 3D edges (thick solid black outline)
            ctx.strokeStyle = "#000000"; 
            ctx.lineWidth = 3.5;
            ctx.shadowBlur = 0; // No glow in Neo-Brutalism!

            edges.forEach(([p1, p2]) => {
                ctx.beginPath();
                ctx.moveTo(projectedVertices[p1].x, projectedVertices[p1].y);
                ctx.lineTo(projectedVertices[p2].x, projectedVertices[p2].y);
                ctx.stroke();
            });

            // Draw 3D vertex points as colorful beads with black outlines
            const vertexColors = ["#ff5e5e", "#ffd54f", "#3cd070", "#b088f9", "#3fc1e8", "#ff8a5c"];
            projectedVertices.forEach((p, idx) => {
                ctx.fillStyle = vertexColors[idx % vertexColors.length];
                ctx.beginPath();
                ctx.arc(p.x, p.y, 7.5, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = "#000000";
                ctx.lineWidth = 2.2;
                ctx.stroke();
            });

            // --- 5. Draw Horizon Line (Thick black line separating sky & ground) ---
            ctx.strokeStyle = "#000000";
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(0, horizonY);
            ctx.lineTo(width, horizonY);
            ctx.stroke();

            // Accent stripe underneath the horizon (pink & yellow combo stripe)
            ctx.strokeStyle = "#ffd54f"; // yellow accent stripe
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(0, horizonY + 3);
            ctx.lineTo(width, horizonY + 3);
            ctx.stroke();

            ctx.strokeStyle = "#ff5e5e"; // red/salmon accent stripe
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(0, horizonY + 5);
            ctx.lineTo(width, horizonY + 5);
            ctx.stroke();

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

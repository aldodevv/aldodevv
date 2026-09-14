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

        // Interaction state
        let mouseX = width / 2;
        let mouseY = height / 2;
        let radarAngle = 0;
        let tick = 0;

        // Telemetry pulses from click / move
        const pulses: { x: number; y: number; radius: number; maxRadius: number; opacity: number; color: string }[] = [];

        // 3D Telemetry Gimbal / Wireframe Radar Octahedron
        const vertices = [
            { x: 0, y: 1.4, z: 0 },
            { x: 1.1, y: 0, z: 1.1 },
            { x: -1.1, y: 0, z: 1.1 },
            { x: -1.1, y: 0, z: -1.1 },
            { x: 1.1, y: 0, z: -1.1 },
            { x: 0, y: -1.4, z: 0 },
        ];

        const edges = [
            [0, 1], [0, 2], [0, 3], [0, 4],
            [5, 1], [5, 2], [5, 3], [5, 4],
            [1, 2], [2, 3], [3, 4], [4, 1],
        ];

        let angleX = 0.2;
        let angleY = 0.4;

        const handleResize = () => {
            if (!canvas) return;
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            if (Math.random() < 0.1) {
                pulses.push({
                    x: mouseX,
                    y: mouseY,
                    radius: 4,
                    maxRadius: 40 + Math.random() * 30,
                    opacity: 0.6,
                    color: Math.random() < 0.2 ? "#ff2a2a" : "#eaeaea",
                });
            }
        };

        const handleClick = (e: MouseEvent) => {
            pulses.push({
                x: e.clientX,
                y: e.clientY,
                radius: 4,
                maxRadius: 80,
                opacity: 0.8,
                color: "#ff2a2a",
            });
        };

        window.addEventListener("resize", handleResize, { passive: true });
        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        window.addEventListener("click", handleClick, { passive: true });

        const render = () => {
            tick++;
            radarAngle += 0.012;
            angleX += 0.005;
            angleY += 0.008;

            ctx.clearRect(0, 0, width, height);

            // 1. Draw Grid Crosshair Reticles
            ctx.strokeStyle = "rgba(255, 255, 255, 0.035)";
            ctx.lineWidth = 1;

            const gridSize = 120;
            const xOffset = (width % gridSize) / 2;
            const yOffset = (height % gridSize) / 2;

            for (let x = xOffset; x < width; x += gridSize) {
                for (let y = yOffset; y < height; y += gridSize) {
                    ctx.beginPath();
                    // Small + crosshairs at intersections
                    ctx.moveTo(x - 4, y);
                    ctx.lineTo(x + 4, y);
                    ctx.moveTo(x, y - 4);
                    ctx.lineTo(x, y + 4);
                    ctx.stroke();
                }
            }

            // 2. Draw Target Reticle Radar Center (Right aligned on desktop for architectural depth)
            const radarCenterX = width > 1024 ? width * 0.75 : width * 0.5;
            const radarCenterY = height * 0.45;
            const radarRadius = Math.min(width, height) * 0.28;

            // Concentric radar rings
            ctx.strokeStyle = "rgba(255, 255, 255, 0.06)";
            ctx.beginPath();
            ctx.arc(radarCenterX, radarCenterY, radarRadius, 0, Math.PI * 2);
            ctx.arc(radarCenterX, radarCenterY, radarRadius * 0.66, 0, Math.PI * 2);
            ctx.arc(radarCenterX, radarCenterY, radarRadius * 0.33, 0, Math.PI * 2);
            ctx.stroke();

            // Radar Axis Lines
            ctx.beginPath();
            ctx.moveTo(radarCenterX - radarRadius - 20, radarCenterY);
            ctx.lineTo(radarCenterX + radarRadius + 20, radarCenterY);
            ctx.moveTo(radarCenterX, radarCenterY - radarRadius - 20);
            ctx.lineTo(radarCenterX, radarCenterY + radarRadius + 20);
            ctx.stroke();

            // Rotating sweep beam
            const sweepX = radarCenterX + Math.cos(radarAngle) * radarRadius;
            const sweepY = radarCenterY + Math.sin(radarAngle) * radarRadius;
            const sweepGrad = ctx.createLinearGradient(radarCenterX, radarCenterY, sweepX, sweepY);
            sweepGrad.addColorStop(0, "rgba(255, 42, 42, 0.2)");
            sweepGrad.addColorStop(1, "rgba(255, 42, 42, 0)");

            ctx.strokeStyle = sweepGrad;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(radarCenterX, radarCenterY);
            ctx.lineTo(sweepX, sweepY);
            ctx.stroke();
            ctx.lineWidth = 1;

            // 3. Render 3D Telemetry Gimbal (Grounded at radarCenter)
            const projectedVertices = vertices.map((v) => {
                // Rotation around X
                const cosX = Math.cos(angleX);
                const sinX = Math.sin(angleX);
                const y1 = v.y * cosX - v.z * sinX;
                const z1 = v.y * sinX + v.z * cosX;

                // Rotation around Y
                const cosY = Math.cos(angleY);
                const sinY = Math.sin(angleY);
                const x2 = v.x * cosY + z1 * sinY;
                const z2 = -v.x * sinY + z1 * cosY;

                const distance = 4.2;
                const scaleFactor = 160;
                const screenX = radarCenterX + (x2 * scaleFactor) / (distance + z2);
                const screenY = radarCenterY + (y1 * scaleFactor) / (distance + z2);

                return { x: screenX, y: screenY, z: z2 };
            });

            // Draw Wireframe Edges
            ctx.strokeStyle = "rgba(234, 234, 234, 0.16)";
            edges.forEach(([start, end]) => {
                const p1 = projectedVertices[start];
                const p2 = projectedVertices[end];
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            });

            // Draw Vertices with Hazard Markers
            projectedVertices.forEach((p, idx) => {
                ctx.fillStyle = idx === 0 || idx === 5 ? "#ff2a2a" : "#eaeaea";
                ctx.fillRect(p.x - 2, p.y - 2, 4, 4);
            });

            // 4. Draw Telemetry Pulses (Sonar Pings)
            for (let i = pulses.length - 1; i >= 0; i--) {
                const pulse = pulses[i];
                pulse.radius += 1.2;
                pulse.opacity -= 0.02;

                if (pulse.opacity <= 0 || pulse.radius >= pulse.maxRadius) {
                    pulses.splice(i, 1);
                    continue;
                }

                ctx.strokeStyle = pulse.color;
                ctx.globalAlpha = pulse.opacity;
                ctx.strokeRect(
                    pulse.x - pulse.radius,
                    pulse.y - pulse.radius,
                    pulse.radius * 2,
                    pulse.radius * 2
                );
            }
            ctx.globalAlpha = 1.0;

            // 5. Draw Static Edge Telemetry Readouts (Corner Data Blocks)
            ctx.font = "10px monospace";
            ctx.fillStyle = "rgba(255, 255, 255, 0.25)";

            // Top-left coordinates
            ctx.fillText("[ TELEMETRY // RADAR ACTIVE ]", 24, 84);
            ctx.fillText(`SYS.TICK: ${tick.toString().padStart(6, "0")} // LAT: -06.2088 LON: 106.8456`, 24, 98);

            // Bottom-right cursor tracker
            const cursorText = `CRS_POS: [X:${Math.round(mouseX).toString().padStart(4, "0")} Y:${Math.round(mouseY).toString().padStart(4, "0")}] // STATUS: OPERATIONAL`;
            ctx.fillText(cursorText, width - 360, height - 20);

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("click", handleClick);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none -z-10 bg-[#0a0a0a]"
        />
    );
}

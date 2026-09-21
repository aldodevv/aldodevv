"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import PortfolioNavbar from "./components/PortfolioNavbar";
import PortfolioCursor from "./components/PortfolioCursor";
import RetroBackground from "./components/RetroBackground";
import HeroSection from "./sections/HeroSection";
import PortfolioAboutSection from "./sections/PortfolioAboutSection";
import TechStackSection from "./sections/TechStackSection";
import WorkExperienceSection from "./sections/WorkExperienceSection";
import { TacticalWorldProvider, useTacticalWorld } from "./context/TacticalWorldContext";
import { TacticalWorldMap } from "./components/world/TacticalWorldMap";
import { TacticalWindowsOverlay } from "./components/world/TacticalWindowsOverlay";
import { TacticalDock } from "./components/world/TacticalDock";

function PortfolioContent() {
    const { mode } = useTacticalWorld();

    return (
        <div className="relative w-full min-h-screen bg-[#07090e] text-[#eaeaea] overflow-x-hidden">
            <PortfolioCursor />
            <PortfolioNavbar />

            {/* Tactical Floating OS Windows Overlay (Available in both modes) */}
            <TacticalWindowsOverlay />

            {/* Bottom HUD Dock */}
            <TacticalDock />

            {/* Viewport Modes */}
            <AnimatePresence mode="wait">
                {mode === "map" ? (
                    <motion.div
                        key="map-mode"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-[100dvh] overflow-hidden"
                    >
                        <TacticalWorldMap />
                    </motion.div>
                ) : (
                    <motion.div
                        key="dossier-mode"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="w-full relative"
                    >
                        <RetroBackground />
                        <main className="w-full relative z-10 bg-transparent pb-16">
                            <HeroSection />
                            <PortfolioAboutSection />
                            <TechStackSection />
                            <WorkExperienceSection />
                        </main>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function PortfolioView() {
    return (
        <TacticalWorldProvider>
            <PortfolioContent />
        </TacticalWorldProvider>
    );
}

"use client";

import React from "react";
import PortfolioNavbar from "./components/PortfolioNavbar";
import PortfolioCursor from "./components/PortfolioCursor";
import RetroBackground from "./components/RetroBackground";
import HeroSection from "./sections/HeroSection";
import PortfolioAboutSection from "./sections/PortfolioAboutSection";
import TechStackSection from "./sections/TechStackSection";
import WorkExperienceSection from "./sections/WorkExperienceSection";

export default function PortfolioView() {
    return (
        <>
            <PortfolioCursor />
            <PortfolioNavbar />
            <RetroBackground />

            <main className="w-full relative z-10 bg-transparent">
                <HeroSection />
                <PortfolioAboutSection />
                <TechStackSection />
                <WorkExperienceSection />
            </main>
        </>
    );
}

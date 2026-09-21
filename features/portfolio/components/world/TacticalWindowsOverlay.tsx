"use client";

import React from "react";
import { AboutWindow } from "../windows/AboutWindow";
import { ProjectsWindow } from "../windows/ProjectsWindow";
import { SkillsWindow } from "../windows/SkillsWindow";
import { ExperienceWindow } from "../windows/ExperienceWindow";
import { ContactWindow } from "../windows/ContactWindow";
import { TerminalWindow } from "../windows/TerminalWindow";

export const TacticalWindowsOverlay: React.FC = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-30 flex items-center justify-center">
            <div className="relative w-full h-full pointer-events-auto">
                <AboutWindow />
                <ProjectsWindow />
                <SkillsWindow />
                <ExperienceWindow />
                <ContactWindow />
                <TerminalWindow />
            </div>
        </div>
    );
};

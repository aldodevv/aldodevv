"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { retroSound } from "../utils/soundEffects";

export type PortfolioMode = "map" | "dossier";

export type WindowId = "about" | "projects" | "skills" | "experience" | "contact" | "terminal";

export interface SectorCoord {
    id: WindowId;
    sectorCode: string;
    title: string;
    subtitle: string;
    x: number; // percentage in map 0-100
    y: number; // percentage in map 0-100
    color: string;
    description: string;
}

export const SECTORS: SectorCoord[] = [
    {
        id: "about",
        sectorCode: "SEC // 01",
        title: "COMMAND HQ",
        subtitle: "BIOGRAPHY & SYSTEM SPECS",
        x: 24,
        y: 36,
        color: "#4af626",
        description: "Primary core node. Identity, capabilities, and system specifications.",
    },
    {
        id: "projects",
        sectorCode: "SEC // 02",
        title: "ARMORY & SYSTEMS",
        subtitle: "DEPLOYED ENTERPRISE APPS",
        x: 72,
        y: 28,
        color: "#ff2a2a",
        description: "Mobile & Web weaponized deliverables (QLola, Spriicommerce, IDN).",
    },
    {
        id: "skills",
        sectorCode: "SEC // 03",
        title: "R&D POWER LAB",
        subtitle: "ARSENAL & TECH STACK",
        x: 35,
        y: 72,
        color: "#00f0ff",
        description: "Cross-platform matrix (Flutter, React Native, Swift, Kotlin, Next.js, Go).",
    },
    {
        id: "experience",
        sectorCode: "SEC // 04",
        title: "OPS CHRONOLOGY",
        subtitle: "CAREER MISSIONS LOG",
        x: 68,
        y: 74,
        color: "#ffb703",
        description: "Historical deployment telemetry & enterprise bank engineering stints.",
    },
    {
        id: "contact",
        sectorCode: "SEC // 05",
        title: "COMMS RELAY",
        subtitle: "DIRECT DISPATCH LINK",
        x: 84,
        y: 52,
        color: "#b5179e",
        description: "Encrypted frequency to initiate contact or dispatch collaboration.",
    },
    {
        id: "terminal",
        sectorCode: "SEC // 06",
        title: "MAINFRAME CLI",
        subtitle: "INTERACTIVE ROOT TERMINAL",
        x: 15,
        y: 65,
        color: "#39ff14",
        description: "Direct shell access into portofolio.exe system parameters.",
    },
];

interface TacticalWorldContextType {
    mode: PortfolioMode;
    setMode: (mode: PortfolioMode) => void;
    toggleMode: () => void;
    openWindows: Record<WindowId, boolean>;
    minimizedWindows: Record<WindowId, boolean>;
    maximizedWindows: Record<WindowId, boolean>;
    activeWindow: WindowId | null;
    windowZIndices: Record<WindowId, number>;
    soundMuted: boolean;
    toggleSound: () => void;
    activeSector: WindowId | null;
    camera: { x: number; y: number; zoom: number };
    openWindow: (id: WindowId) => void;
    closeWindow: (id: WindowId) => void;
    minimizeWindow: (id: WindowId) => void;
    maximizeWindow: (id: WindowId) => void;
    focusWindow: (id: WindowId) => void;
    focusSector: (id: WindowId) => void;
    resetCamera: () => void;
}

const defaultContext: TacticalWorldContextType = {
    mode: "dossier",
    setMode: () => {},
    toggleMode: () => {},
    openWindows: { about: false, projects: false, skills: false, experience: false, contact: false, terminal: false },
    minimizedWindows: { about: false, projects: false, skills: false, experience: false, contact: false, terminal: false },
    maximizedWindows: { about: false, projects: false, skills: false, experience: false, contact: false, terminal: false },
    activeWindow: null,
    windowZIndices: { about: 10, projects: 10, skills: 10, experience: 10, contact: 10, terminal: 10 },
    soundMuted: false,
    toggleSound: () => {},
    activeSector: null,
    camera: { x: 0, y: 0, zoom: 1 },
    openWindow: () => {},
    closeWindow: () => {},
    minimizeWindow: () => {},
    maximizeWindow: () => {},
    focusWindow: () => {},
    focusSector: () => {},
    resetCamera: () => {},
};

const TacticalWorldContext = createContext<TacticalWorldContextType>(defaultContext);

export const TacticalWorldProvider: React.FC<{ children: React.ReactNode; defaultMode?: PortfolioMode }> = ({
    children,
    defaultMode = "map",
}) => {
    const [mode, setModeState] = useState<PortfolioMode>(defaultMode);
    const [soundMuted, setSoundMuted] = useState<boolean>(false);
    const [activeSector, setActiveSector] = useState<WindowId | null>(null);
    const [camera, setCamera] = useState<{ x: number; y: number; zoom: number }>({
        x: 0,
        y: 0,
        zoom: 1,
    });

    const [openWindows, setOpenWindows] = useState<Record<WindowId, boolean>>({
        about: false,
        projects: false,
        skills: false,
        experience: false,
        contact: false,
        terminal: false,
    });

    const [minimizedWindows, setMinimizedWindows] = useState<Record<WindowId, boolean>>({
        about: false,
        projects: false,
        skills: false,
        experience: false,
        contact: false,
        terminal: false,
    });

    const [maximizedWindows, setMaximizedWindows] = useState<Record<WindowId, boolean>>({
        about: false,
        projects: false,
        skills: false,
        experience: false,
        contact: false,
        terminal: false,
    });

    const [activeWindow, setActiveWindow] = useState<WindowId | null>(null);
    const [windowZIndices, setWindowZIndices] = useState<Record<WindowId, number>>({
        about: 10,
        projects: 10,
        skills: 10,
        experience: 10,
        contact: 10,
        terminal: 10,
    });

    // Auto-detect mobile screen on mount to default to dossier mode
    useEffect(() => {
        if (typeof window === "undefined") return;
        const checkViewport = () => {
            if (window.innerWidth < 1024) {
                setModeState((prev) => (prev === "map" ? "dossier" : prev));
            }
        };
        const raf = requestAnimationFrame(checkViewport);
        return () => cancelAnimationFrame(raf);
    }, []);

    const toggleSound = useCallback(() => {
        setSoundMuted((prev) => {
            const next = !prev;
            retroSound.setMuted(next);
            if (!next) retroSound.playClick();
            return next;
        });
    }, []);

    const setMode = useCallback((newMode: PortfolioMode) => {
        setModeState(newMode);
        retroSound.playClick();
    }, []);

    const toggleMode = useCallback(() => {
        setModeState((prev) => {
            const next = prev === "map" ? "dossier" : "map";
            retroSound.playClick();
            return next;
        });
    }, []);

    const focusWindow = useCallback((id: WindowId) => {
        setActiveWindow(id);
        setWindowZIndices((prev) => {
            const maxZ = Math.max(...Object.values(prev), 10);
            return {
                ...prev,
                [id]: maxZ + 1,
            };
        });
        retroSound.playClick();
    }, []);

    const openWindow = useCallback((id: WindowId) => {
        setOpenWindows((prev) => ({ ...prev, [id]: true }));
        setMinimizedWindows((prev) => ({ ...prev, [id]: false }));
        setActiveWindow(id);
        setWindowZIndices((prev) => {
            const maxZ = Math.max(...Object.values(prev), 10);
            return {
                ...prev,
                [id]: maxZ + 2,
            };
        });
        retroSound.playWindowOpen();
    }, []);

    const closeWindow = useCallback((id: WindowId) => {
        setOpenWindows((prev) => ({ ...prev, [id]: false }));
        setMinimizedWindows((prev) => ({ ...prev, [id]: false }));
        setMaximizedWindows((prev) => ({ ...prev, [id]: false }));
        setActiveWindow((prev) => (prev === id ? null : prev));
        retroSound.playWindowClose();
    }, []);

    const minimizeWindow = useCallback((id: WindowId) => {
        setMinimizedWindows((prev) => ({ ...prev, [id]: !prev[id] }));
        retroSound.playClick();
    }, []);

    const maximizeWindow = useCallback((id: WindowId) => {
        setMaximizedWindows((prev) => ({ ...prev, [id]: !prev[id] }));
        retroSound.playClick();
    }, []);

    const focusSector = useCallback((id: WindowId) => {
        const sector = SECTORS.find((s) => s.id === id);
        if (!sector) return;

        setActiveSector(id);
        const targetX = (50 - sector.x) * 0.8;
        const targetY = (50 - sector.y) * 0.8;
        setCamera({ x: targetX, y: targetY, zoom: 1.25 });
        retroSound.playRadarPing();

        openWindow(id);
    }, [openWindow]);

    const resetCamera = useCallback(() => {
        setActiveSector(null);
        setCamera({ x: 0, y: 0, zoom: 1 });
        retroSound.playClick();
    }, []);

    return (
        <TacticalWorldContext.Provider
            value={{
                mode,
                setMode,
                toggleMode,
                openWindows,
                minimizedWindows,
                maximizedWindows,
                activeWindow,
                windowZIndices,
                soundMuted,
                toggleSound,
                activeSector,
                camera,
                openWindow,
                closeWindow,
                minimizeWindow,
                maximizeWindow,
                focusWindow,
                focusSector,
                resetCamera,
            }}
        >
            {children}
        </TacticalWorldContext.Provider>
    );
};

export const useTacticalWorld = () => {
    return useContext(TacticalWorldContext);
};

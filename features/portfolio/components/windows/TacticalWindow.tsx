"use client";

import React from "react";
import { motion, AnimatePresence, useDragControls } from "framer-motion";
import { Minus, Square, X, Move } from "lucide-react";
import { WindowId, useTacticalWorld } from "../../context/TacticalWorldContext";

interface TacticalWindowProps {
    id: WindowId;
    title: string;
    code: string;
    children: React.ReactNode;
    defaultPosition?: { x: number; y: number };
    defaultWidth?: string;
    defaultHeight?: string;
}

export const TacticalWindow: React.FC<TacticalWindowProps> = ({
    id,
    title,
    code,
    children,
    defaultPosition = { x: 0, y: 0 },
    defaultWidth = "w-[92vw] sm:w-[620px] md:w-[720px]",
    defaultHeight = "max-h-[80vh]",
}) => {
    const {
        openWindows,
        minimizedWindows,
        maximizedWindows,
        activeWindow,
        windowZIndices,
        closeWindow,
        minimizeWindow,
        maximizeWindow,
        focusWindow,
    } = useTacticalWorld();

    const dragControls = useDragControls();

    const isOpen = openWindows[id];
    const isMinimized = minimizedWindows[id];
    const isMaximized = maximizedWindows[id];
    const isActive = activeWindow === id;
    const zIndex = windowZIndices[id] || 10;

    if (!isOpen || isMinimized) return null;

    return (
        <AnimatePresence>
            <motion.div
                drag={!isMaximized}
                dragControls={dragControls}
                dragListener={false}
                dragMomentum={false}
                dragElastic={0.05}
                initial={{ opacity: 0, scale: 0.94, y: defaultPosition.y + 20, x: defaultPosition.x }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    x: isMaximized ? 0 : defaultPosition.x,
                    y: isMaximized ? 0 : defaultPosition.y,
                }}
                exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.15 } }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                onPointerDown={() => focusWindow(id)}
                style={{ zIndex }}
                className={`fixed ${
                    isMaximized
                        ? "inset-2 md:inset-6 w-auto h-auto"
                        : `${defaultWidth} ${defaultHeight}`
                } flex flex-col bg-[#0f0f0f] border ${
                    isActive ? "border-[#4af626] shadow-[0_0_25px_rgba(74,246,38,0.15)]" : "border-[#333333]"
                } select-none shadow-2xl transition-colors duration-150`}
            >
                {/* 1. Industrial Window Titlebar */}
                <div
                    onPointerDown={(e) => {
                        dragControls.start(e);
                        focusWindow(id);
                    }}
                    className={`flex items-center justify-between px-3 py-2 border-b ${
                        isActive ? "bg-[#181818] border-[#4af626]" : "bg-[#141414] border-[#333333]"
                    } cursor-grab active:cursor-grabbing`}
                >
                    <div className="flex items-center gap-2.5">
                        <span
                            className={`w-2 h-2 ${
                                isActive ? "bg-[#4af626] shadow-[0_0_8px_#4af626]" : "bg-[#555555]"
                            }`}
                        />
                        <span className="font-mono text-[10px] tracking-wider text-[#ff2a2a] font-bold">
                            [{code}]
                        </span>
                        <span className="font-mono text-[11px] tracking-widest uppercase text-[#eaeaea] font-semibold truncate max-w-[200px] sm:max-w-none">
                            {title}
                        </span>
                    </div>

                    <div className="flex items-center gap-1.5 ml-2">
                        <span className="hidden sm:inline-flex items-center gap-1 text-[9px] font-mono text-[#666666] mr-2">
                            <Move className="w-3 h-3 text-[#555555]" />
                            DRAG
                        </span>
                        {/* Minimize */}
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                minimizeWindow(id);
                            }}
                            className="w-6 h-6 border border-[#333333] hover:border-[#eaeaea] bg-[#1a1a1a] hover:bg-[#262626] flex items-center justify-center text-[#aaaaaa] hover:text-[#eaeaea] transition-colors"
                            title="Minimize to Dock"
                        >
                            <Minus className="w-3 h-3" />
                        </button>
                        {/* Maximize */}
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                maximizeWindow(id);
                            }}
                            className="w-6 h-6 border border-[#333333] hover:border-[#eaeaea] bg-[#1a1a1a] hover:bg-[#262626] flex items-center justify-center text-[#aaaaaa] hover:text-[#eaeaea] transition-colors"
                            title="Maximize"
                        >
                            <Square className="w-2.5 h-2.5" />
                        </button>
                        {/* Close */}
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                closeWindow(id);
                            }}
                            className="w-6 h-6 border border-[#333333] hover:border-[#ff2a2a] bg-[#1a1a1a] hover:bg-[#ff2a2a]/20 flex items-center justify-center text-[#aaaaaa] hover:text-[#ff2a2a] transition-colors"
                            title="Close Window"
                        >
                            <X className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>

                {/* 2. Sub-header Telemetry Status Bar */}
                <div className="flex items-center justify-between px-3 py-1 bg-[#121212] border-b border-[#222222] text-[9px] font-mono text-[#777777]">
                    <div className="flex items-center gap-2">
                        <span>SYS.STATE: OK</span>
                        <span>{"//"}</span>
                        <span className="text-[#4af626]">BUFFER: SYNCED</span>
                    </div>
                    <div>
                        <span>Z-INDEX: {zIndex}</span>
                    </div>
                </div>

                {/* 3. Window Content Viewport */}
                <div className="flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-6 text-sm text-[#eaeaea] font-sans selection:bg-[#ff2a2a] selection:text-white">
                    {children}
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

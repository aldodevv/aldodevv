"use client";

import React, { useState, useRef, useEffect } from "react";
import { TacticalWindow } from "./TacticalWindow";
import { useTacticalWorld } from "../../context/TacticalWorldContext";
import { retroSound } from "../../utils/soundEffects";

interface TerminalLine {
    id: string;
    type: "input" | "output" | "system" | "error" | "matrix";
    text: string;
}

export const TerminalWindow: React.FC = () => {
    const { openWindow, toggleMode, closeWindow } = useTacticalWorld();
    const [history, setHistory] = useState<TerminalLine[]>([
        {
            id: "1",
            type: "system",
            text: "SYS_CORE v2.6.4 [TACTICAL-KERNEL-X86_64] INITIALIZED",
        },
        {
            id: "2",
            type: "system",
            text: "AUTHENTICATED AS: GUEST_ANALYST // CLEARANCE: UNRESTRICTED",
        },
        {
            id: "3",
            type: "output",
            text: "Type 'help' to inspect command directory, or 'projects' to review production systems.",
        },
    ]);

    const [inputVal, setInputVal] = useState("");
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState<number>(-1);
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [history]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        retroSound.playTerminalBeep();

        if (e.key === "Enter") {
            const trimmed = inputVal.trim();
            if (!trimmed) return;

            // Add input line
            const userLine: TerminalLine = {
                id: Date.now().toString(),
                type: "input",
                text: `aldodevv@tactical:~$ ${trimmed}`,
            };

            setCommandHistory((prev) => [...prev, trimmed]);
            setHistoryIndex(-1);
            setInputVal("");

            // Process command
            const cmd = trimmed.toLowerCase();
            let responses: TerminalLine[] = [];

            switch (cmd) {
                case "help":
                    responses = [
                        {
                            id: (Date.now() + 1).toString(),
                            type: "output",
                            text: "AVAILABLE COMMANDS IN TACTICAL DIRECTORY:\n  help        - Display command protocols\n  bio / about - Inspect personnel dossier (opens About)\n  projects    - Review deployed banking & mobile systems\n  skills      - Query cross-platform tech matrix\n  exp         - View operational career timeline\n  contact     - Transmit encrypted communication\n  mode        - Switch between Map & Dossier viewport\n  matrix      - Trigger phosphor matrix stream\n  sudo        - Request root privileges\n  clear       - Purge terminal buffer\n  exit        - Terminate shell session",
                        },
                    ];
                    break;

                case "bio":
                case "about":
                    openWindow("about");
                    responses = [
                        {
                            id: (Date.now() + 1).toString(),
                            type: "output",
                            text: "[EXEC] OPENING DOSSIER // Akhmad Aldo - Senior Mobile & Fullstack Engineer at Bank Rakyat Indonesia.",
                        },
                    ];
                    break;

                case "projects":
                case "apps":
                    openWindow("projects");
                    responses = [
                        {
                            id: (Date.now() + 1).toString(),
                            type: "output",
                            text: "[EXEC] OPENING ARMORY // Systems: QLola IB Token, QLola Mobile BRI, Spriicommerce, IDN Media.",
                        },
                    ];
                    break;

                case "skills":
                case "stack":
                    openWindow("skills");
                    responses = [
                        {
                            id: (Date.now() + 1).toString(),
                            type: "output",
                            text: "[EXEC] OPENING LAB // Primary Arsenal: Flutter, React Native, Kotlin, Swift, Next.js, Go, TypeScript.",
                        },
                    ];
                    break;

                case "exp":
                case "experience":
                    openWindow("experience");
                    responses = [
                        {
                            id: (Date.now() + 1).toString(),
                            type: "output",
                            text: "[EXEC] OPENING OPS LOG // Timeline: BRI (2023-Present) · Simajji (2022-2023) · IDN Media (2021-2022).",
                        },
                    ];
                    break;

                case "contact":
                    openWindow("contact");
                    responses = [
                        {
                            id: (Date.now() + 1).toString(),
                            type: "output",
                            text: "[EXEC] OPENING COMMS // Transmit to akhmadaldo3@gmail.com or github.com/aldodevv.",
                        },
                    ];
                    break;

                case "mode":
                    toggleMode();
                    responses = [
                        {
                            id: (Date.now() + 1).toString(),
                            type: "system",
                            text: "[SYSTEM] VIEWPORT MODE TOGGLED // (MAP <---> DOSSIER)",
                        },
                    ];
                    break;

                case "sudo":
                    responses = [
                        {
                            id: (Date.now() + 1).toString(),
                            type: "error",
                            text: "ACCESS VIOLATION: User is not in sudoers file. Incident reported to Aldo.",
                        },
                    ];
                    break;

                case "matrix":
                    responses = [
                        {
                            id: (Date.now() + 1).toString(),
                            type: "matrix",
                            text: "01000001 01001100 01000100 01001111 // SYSTEM OVERCLOCK SYNCHRONIZED // REALITY MATRIX ENGAGED",
                        },
                    ];
                    break;

                case "clear":
                    setHistory([]);
                    return;

                case "exit":
                    closeWindow("terminal");
                    return;

                default:
                    responses = [
                        {
                            id: (Date.now() + 1).toString(),
                            type: "error",
                            text: `bash: command not recognized: '${trimmed}'. Type 'help' for directory.`,
                        },
                    ];
                    break;
            }

            setHistory((prev) => [...prev, userLine, ...responses]);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (commandHistory.length > 0) {
                const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
                setHistoryIndex(nextIndex);
                setInputVal(commandHistory[nextIndex]);
            }
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            if (historyIndex !== -1) {
                const nextIndex = historyIndex + 1;
                if (nextIndex < commandHistory.length) {
                    setHistoryIndex(nextIndex);
                    setInputVal(commandHistory[nextIndex]);
                } else {
                    setHistoryIndex(-1);
                    setInputVal("");
                }
            }
        }
    };

    return (
        <TacticalWindow
            id="terminal"
            title="SYS_MAINFRAME // CLI SHELL"
            code="MAINFRAME // CLI"
            defaultPosition={{ x: 25, y: 50 }}
            defaultWidth="w-[94vw] sm:w-[680px] md:w-[740px]"
            defaultHeight="h-[440px]"
        >
            <div
                className="flex flex-col h-full font-mono text-xs cursor-text"
                onClick={() => inputRef.current?.focus()}
            >
                {/* Output log */}
                <div className="flex-1 overflow-y-auto flex flex-col gap-1.5 pr-1">
                    {history.map((line) => {
                        let color = "text-[#cccccc]";
                        if (line.type === "system") color = "text-[#ff2a2a] font-bold";
                        if (line.type === "error") color = "text-[#ff4444]";
                        if (line.type === "matrix") color = "text-[#39ff14] font-bold";
                        if (line.type === "input") color = "text-[#4af626]";

                        return (
                            <div key={line.id} className={`whitespace-pre-wrap leading-relaxed ${color}`}>
                                {line.text}
                            </div>
                        );
                    })}
                    <div ref={bottomRef} />
                </div>

                {/* Input prompt */}
                <div className="flex items-center gap-2 pt-2 border-t border-[#222222] mt-2">
                    <span className="text-[#4af626] font-bold select-none">
                        aldodevv@tactical:~$
                    </span>
                    <input
                        ref={inputRef}
                        type="text"
                        autoFocus
                        value={inputVal}
                        onChange={(e) => setInputVal(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 bg-transparent border-none outline-none text-[#eaeaea] font-mono text-xs caret-[#4af626]"
                    />
                </div>
            </div>
        </TacticalWindow>
    );
};

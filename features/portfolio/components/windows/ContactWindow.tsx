"use client";

import React, { useState } from "react";
import { TacticalWindow } from "./TacticalWindow";
import { Mail, Github, Linkedin, Send, Radio, CheckCircle2 } from "lucide-react";
import { retroSound } from "../../utils/soundEffects";

export const ContactWindow: React.FC = () => {
    const [senderEmail, setSenderEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [payload, setPayload] = useState("");
    const [isTransmitting, setIsTransmitting] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const handleTransmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!senderEmail || !payload) return;

        setIsTransmitting(true);
        retroSound.playRadarPing();

        // Simulate secure dispatch or open mailto
        setTimeout(() => {
            setIsTransmitting(false);
            setIsSent(true);
            retroSound.playWindowOpen();

            // Prepare mailto fallback
            const mailtoUrl = `mailto:akhmadaldo3@gmail.com?subject=${encodeURIComponent(
                subject || "Collaboration Signal"
            )}&body=${encodeURIComponent(`From: ${senderEmail}\n\n${payload}`)}`;
            window.open(mailtoUrl, "_blank");
        }, 900);
    };

    return (
        <TacticalWindow
            id="contact"
            title="COMMS DISPATCH // TRANSMISSION RELAY"
            code="COMMS // RELAY"
            defaultPosition={{ x: 30, y: 35 }}
            defaultWidth="w-[94vw] sm:w-[640px] md:w-[700px]"
        >
            <div className="flex flex-col gap-6">
                {/* Comms status bar */}
                <div className="flex items-center justify-between p-3 bg-[#141414] border border-[#2a2a2a] text-xs font-mono">
                    <div className="flex items-center gap-2">
                        <Radio className="w-4 h-4 text-[#b5179e] animate-pulse" />
                        <span className="text-[#b5179e] font-bold">CARRIER FREQUENCY: 142.85 MHz</span>
                    </div>
                    <span className="text-[10px] text-[#4af626]">CIPHER: AES-256-GCM READY</span>
                </div>

                {/* Direct coordinates cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <a
                        href="mailto:akhmadaldo3@gmail.com"
                        className="p-3 bg-[#121212] border border-[#262626] hover:border-[#b5179e] transition-colors flex flex-col gap-1 text-left"
                    >
                        <div className="flex items-center gap-2 text-xs font-mono text-[#b5179e]">
                            <Mail className="w-3.5 h-3.5" />
                            <span className="font-bold">EMAIL</span>
                        </div>
                        <span className="font-mono text-[11px] text-[#cccccc] truncate">
                            akhmadaldo3@gmail.com
                        </span>
                    </a>

                    <a
                        href="https://github.com/aldodevv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-[#121212] border border-[#262626] hover:border-[#b5179e] transition-colors flex flex-col gap-1 text-left"
                    >
                        <div className="flex items-center gap-2 text-xs font-mono text-[#b5179e]">
                            <Github className="w-3.5 h-3.5" />
                            <span className="font-bold">GITHUB</span>
                        </div>
                        <span className="font-mono text-[11px] text-[#cccccc] truncate">
                            github.com/aldodevv
                        </span>
                    </a>

                    <a
                        href="https://linkedin.com/in/akhmad-aldo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-[#121212] border border-[#262626] hover:border-[#b5179e] transition-colors flex flex-col gap-1 text-left"
                    >
                        <div className="flex items-center gap-2 text-xs font-mono text-[#b5179e]">
                            <Linkedin className="w-3.5 h-3.5" />
                            <span className="font-bold">LINKEDIN</span>
                        </div>
                        <span className="font-mono text-[11px] text-[#cccccc] truncate">
                            in/akhmad-aldo
                        </span>
                    </a>
                </div>

                {/* Dispatch Form */}
                <form onSubmit={handleTransmit} className="flex flex-col gap-3.5 bg-[#111111] p-4 border border-[#222222]">
                    <div className="font-mono text-[10px] text-[#b5179e] font-bold tracking-widest uppercase">
                        [ DIRECT ENCRYPTED DISPATCH ]
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="flex flex-col gap-1">
                            <label className="font-mono text-[10px] text-[#888888] uppercase">
                                CALLSIGN / EMAIL FREQUENCY *
                            </label>
                            <input
                                type="email"
                                required
                                value={senderEmail}
                                onChange={(e) => setSenderEmail(e.target.value)}
                                placeholder="commander@enterprise.org"
                                className="w-full bg-[#0a0a0a] border border-[#333333] px-3 py-1.5 font-mono text-xs text-[#eaeaea] focus:border-[#b5179e] outline-none"
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="font-mono text-[10px] text-[#888888] uppercase">
                                DIRECTIVE / SUBJECT
                            </label>
                            <input
                                type="text"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                placeholder="MOBILE ARCHITECTURE CONSULTATION"
                                className="w-full bg-[#0a0a0a] border border-[#333333] px-3 py-1.5 font-mono text-xs text-[#eaeaea] focus:border-[#b5179e] outline-none uppercase"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="font-mono text-[10px] text-[#888888] uppercase">
                            TRANSMISSION PAYLOAD *
                        </label>
                        <textarea
                            required
                            rows={4}
                            value={payload}
                            onChange={(e) => setPayload(e.target.value)}
                            placeholder="TRANSMIT YOUR PROJECT SPECIFICATIONS, SCOPE, OR COLLABORATION DIRECTIVE..."
                            className="w-full bg-[#0a0a0a] border border-[#333333] p-3 font-mono text-xs text-[#eaeaea] focus:border-[#b5179e] outline-none resize-none leading-relaxed"
                        />
                    </div>

                    <div className="flex items-center justify-between pt-1">
                        {isSent ? (
                            <div className="flex items-center gap-1.5 text-xs font-mono text-[#4af626]">
                                <CheckCircle2 className="w-4 h-4" />
                                <span>PACKET DISPATCHED // OPENING COMM BUFFER</span>
                            </div>
                        ) : (
                            <span className="text-[10px] font-mono text-[#666666]">
                                PROTOCOL: SECURE RFC 5322
                            </span>
                        )}

                        <button
                            type="submit"
                            disabled={isTransmitting}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#b5179e] hover:bg-[#d61ebc] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors disabled:opacity-50"
                        >
                            <Send className="w-3.5 h-3.5" />
                            <span>{isTransmitting ? "TRANSMITTING..." : "FIRE TRANSMISSION"}</span>
                        </button>
                    </div>
                </form>
            </div>
        </TacticalWindow>
    );
};

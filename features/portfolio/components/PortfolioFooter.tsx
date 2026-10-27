"use client";

import React from "react";
import { Github, Linkedin, Instagram, ArrowUp, Heart } from "lucide-react";

export default function PortfolioFooter() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="w-full border-t border-[var(--color-rule)] bg-[var(--color-paper-2)]/50 py-16 px-4 md:px-8 mt-16">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Left branding & copyright */}
                <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
                    <div className="text-xl font-semibold tracking-tight text-[var(--color-ink)]">
                        Akhmad Aldo
                    </div>
                    <p className="text-xs text-[var(--color-muted)] max-w-sm">
                        Designed with Hallmark Hum &bull; Handcrafted paper aesthetic &bull; Built with Next.js, React &amp; Tailwind CSS.
                    </p>
                </div>

                {/* Center social links */}
                <div className="flex items-center gap-3">
                    <a
                        href="https://github.com/aldodevv"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-hum-secondary !min-h-[44px] !p-3 !rounded-full"
                        aria-label="GitHub"
                    >
                        <Github className="w-4 h-4" />
                    </a>
                    <a
                        href="https://linkedin.com/in/aldodevv"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-hum-secondary !min-h-[44px] !p-3 !rounded-full text-[var(--color-accent-2)]"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                        href="https://instagram.com/aldodevv"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-hum-secondary !min-h-[44px] !p-3 !rounded-full text-[var(--color-accent-3)]"
                        aria-label="Instagram"
                    >
                        <Instagram className="w-4 h-4" />
                    </a>
                </div>

                {/* Back to top button */}
                <button
                    onClick={scrollToTop}
                    className="btn-hum-secondary !min-h-[44px] !py-2 !px-4 text-xs font-semibold cursor-pointer"
                >
                    <span>Back to top</span>
                    <ArrowUp className="w-3.5 h-3.5" />
                </button>
            </div>
        </footer>
    );
}

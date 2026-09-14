import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Akhmad Aldo | Software Engineer",
  description: "Learn more about Akhmad Aldo (Aldo), his background in software engineering, education, and banking architecture.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-10">
      {/* Navigation Breadcrumb / Back Link */}
      <div className="flex items-center justify-between border-b border-[#eaeaea] pb-5">
        <Link 
          href="/"
          className="btn-secondary-minimal px-3.5 py-1.5 text-xs font-mono inline-flex items-center gap-2 text-[#787774] hover:text-[#111111]"
        >
          <span>←</span>
          <span>Back to Overview</span>
        </Link>
        <div className="font-mono text-xs text-[#787774]">
          about.profile.tsx
        </div>
      </div>

      {/* Main Faux-OS Window Container */}
      <div className="minimal-card overflow-hidden">
        {/* Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#eaeaea] bg-white">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#eaeaea] border border-[#d8d8d8]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#eaeaea] border border-[#d8d8d8]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#eaeaea] border border-[#d8d8d8]" />
          </div>
          <span className="font-mono text-xs text-[#787774]">
            character_bio.md
          </span>
          <div className="w-8" />
        </div>

        {/* Content Body */}
        <div className="p-8 md:p-12 flex flex-col md:flex-row gap-10 bg-white">
          {/* Left Column: Portrait & Quick Stats */}
          <div className="w-full md:w-5/12 shrink-0 flex flex-col gap-6">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-[#eaeaea] bg-[#f7f6f3]">
              <img
                src="/assets/me.png"
                alt="Akhmad Aldo"
                className="w-full h-full object-cover object-top filter grayscale contrast-105"
              />
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded border border-[#eaeaea] text-[11px] font-mono text-[#111111]">
                Depok, Indonesia
              </div>
            </div>

            {/* Quick Metrics Bento Card */}
            <div className="rounded-xl border border-[#eaeaea] bg-[#fbfbfa] p-5 font-mono text-xs text-[#787774] space-y-2.5">
              <div className="text-[11px] font-medium uppercase tracking-wider text-[#111111] border-b border-[#eaeaea] pb-2">
                Engineering Metrics
              </div>
              <div className="flex justify-between">
                <span>Domain:</span>
                <span className="text-[#111111]">Mobile & Fullstack Web</span>
              </div>
              <div className="flex justify-between">
                <span>Enterprise:</span>
                <span className="text-[#111111]">Bank Rakyat Indonesia</span>
              </div>
              <div className="flex justify-between">
                <span>Core Stack:</span>
                <span className="text-[#111111]">Flutter, React Native, Next.js</span>
              </div>
              <div className="flex justify-between items-center pt-1 border-t border-[#eaeaea]">
                <span>Status:</span>
                <span className="tag-pastel-green px-2 py-0.5 rounded-full text-[10px] font-medium">
                  Available for Hire
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative */}
          <div className="flex-1 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2 font-mono text-xs text-[#787774]">
                <span className="tag-pastel-blue px-2.5 py-0.5 rounded-full text-[10px] uppercase font-medium">
                  Biography
                </span>
                <span>/</span>
                <span>Akhmad Aldo Sari</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl text-[#111111] font-normal tracking-tight leading-tight">
                Architecting dependable digital products with clean engineering discipline.
              </h1>

              <div className="space-y-4 text-sm md:text-base text-[#787774] leading-relaxed font-sans">
                <p>
                  I am a Software Engineer based in Depok, Indonesia. My work centers on crafting production-ready mobile architectures and high-performance web applications, balancing clean interface ergonomics with resilient systems engineering.
                </p>
                <p>
                  At Bank Rakyat Indonesia, I contributed directly to the core development of corporate mobile solutions, including <strong className="text-[#111111] font-medium">QLola Mobile</strong> and <strong className="text-[#111111] font-medium">QLola IB Token</strong>. This work required strict compliance with financial security standards, biometric cryptographic authentication, and zero-downtime offline functionality.
                </p>
                <p>
                  My engineering ethos prioritizes maintainable state machines, predictable cross-platform bridges (Kotlin, Swift, Dart), and type-safe web systems powered by Next.js and TypeScript.
                </p>
              </div>
            </div>

            {/* Academic Credentials Card */}
            <div className="rounded-xl border border-[#eaeaea] p-5 flex items-center gap-4 bg-[#fbfbfa]">
              <div className="w-10 h-10 rounded-lg bg-white border border-[#eaeaea] flex items-center justify-center shrink-0 text-[#111111]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#787774]">
                  Academic Foundation
                </span>
                <h3 className="text-sm font-medium text-[#111111]">
                  Universitas Bina Sarana Informatika
                </h3>
                <p className="text-xs text-[#787774] font-mono">
                  Bachelor of Computer Science (Graduate)
                </p>
              </div>
            </div>

            {/* Direct Contact CTA */}
            <div className="pt-2">
              <a
                href="mailto:akhmadaldo12@gmail.com"
                className="btn-primary-minimal px-5 py-2.5 text-xs font-mono uppercase tracking-wider inline-flex items-center gap-2"
              >
                <span>Get in Touch</span>
                <span>→</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

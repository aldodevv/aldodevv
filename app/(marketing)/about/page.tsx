import Link from "next/link";
import { ArrowLeft, User, MapPin, Award, BookOpen, Download, Terminal } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personnel Dossier | Akhmad Aldo",
  description: "Declassified personnel dossier of Akhmad Aldo (Aldo). Systems engineering background, education, and security credentials.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-8 text-[#eaeaea] font-mono">
      {/* Return to Terminal Button */}
      <Link 
        href="/"
        className="self-start industrial-btn industrial-btn-hazard flex items-center gap-2"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>RETURN TO TERMINAL</span>
      </Link>

      {/* Main Dossier Container */}
      <div className="border border-[#262626] bg-[#121212] overflow-hidden">
        {/* Header Telemetry Bar */}
        <div className="bg-[#0a0a0a] border-b border-[#262626] px-4 py-3 flex items-center justify-between text-xs tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#ff2a2a]" />
            <span className="text-[#eaeaea] font-bold">[ ARCHIVE // DOSSIER-DETAILED-RECORD ]</span>
          </div>
          <span className="text-[#666666]">CLEARANCE: LV-4</span>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-10 flex flex-col md:flex-row gap-10">
          {/* Left Column: ID Frame & Quick Telemetry */}
          <div className="w-full md:w-1/3 shrink-0 flex flex-col gap-6">
            <div className="w-full aspect-[4/5] relative border border-[#333333] bg-[#0c0c0c] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                alt="Akhmad Aldo"
                className="w-full h-full object-cover grayscale contrast-125"
              />
              <div className="absolute inset-0 pointer-events-none crt-scanlines opacity-40" />
              <div className="absolute bottom-2 left-2 bg-[#0a0a0a]/90 border border-[#333333] px-2 py-0.5 text-[9px] text-[#eaeaea]">
                ID: ALDO-DEV-001
              </div>
            </div>
            
            {/* Telemetry Metrics Table */}
            <div className="border border-[#262626] bg-[#0c0c0c] p-4 text-xs divide-y divide-[#1f1f1f]">
              <div className="flex justify-between py-1 text-[#888888]">
                <span>NAME:</span>
                <span className="text-[#eaeaea] font-bold">AKHMAD ALDO</span>
              </div>
              <div className="flex justify-between py-1 text-[#888888]">
                <span>DESIGNATION:</span>
                <span className="text-[#ff2a2a] font-bold">SYS.ENGINEER</span>
              </div>
              <div className="flex justify-between py-1 text-[#888888]">
                <span>LOCATION:</span>
                <span className="text-[#eaeaea]">DEPOK, ID</span>
              </div>
              <div className="flex justify-between py-1 text-[#888888]">
                <span>STATUS:</span>
                <span className="text-[#4af626] font-bold">ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Biographical Breakdown */}
          <div className="flex-1 flex flex-col gap-8">
            <div>
              <div className="inline-block bg-[#ff2a2a]/10 border border-[#ff2a2a] text-[#ff2a2a] uppercase text-[10px] px-2 py-0.5 font-bold mb-3 tracking-widest">
                [ EXECUTIVE SUMMARY ]
              </div>
              <h1 className="text-3xl md:text-4xl font-black font-sans uppercase tracking-tight text-[#eaeaea] mb-4">
                Systems Architecture & Mobile Engineering
              </h1>
              <p className="text-sm md:text-base leading-relaxed text-[#aaaaaa]">
                Engineering software systems that bridge high-scale distributed infrastructures with fluid, native mobile interfaces. Committed to deterministic state management, low-latency execution, and resilient security standards across all deployed applications.
              </p>
            </div>

            {/* Academic Credentials Section */}
            <div className="border border-[#262626] bg-[#0c0c0c] p-6 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs text-[#ff2a2a] uppercase tracking-wider font-bold">
                <BookOpen className="w-4 h-4" />
                <span>ACADEMIC BACKGROUND</span>
              </div>
              <div>
                <h2 className="text-xl font-bold font-sans text-[#eaeaea] uppercase">
                  Univ. Bina Sarana Informatika
                </h2>
                <div className="text-xs text-[#888888] uppercase mt-1">
                  Computer Science (Graduate) // Focus on Systems & Algorithms
                </div>
              </div>
            </div>

            {/* Engineering Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-[#262626] bg-[#0c0c0c] p-4">
                <div className="text-xs font-bold text-[#ff2a2a] mb-1">[ 01 // PRECISION ]</div>
                <p className="text-xs text-[#888888] leading-relaxed">
                  Strict type safety, zero compile-time warnings, and deterministic asynchronous data flows.
                </p>
              </div>
              <div className="border border-[#262626] bg-[#0c0c0c] p-4">
                <div className="text-xs font-bold text-[#ff2a2a] mb-1">[ 02 // DEFENSE ]</div>
                <p className="text-xs text-[#888888] leading-relaxed">
                  Jailbreak/root detection, cryptographic offline key storage, and end-to-end SSL pinning.
                </p>
              </div>
            </div>

            {/* Download Action */}
            <div className="pt-2">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="industrial-btn industrial-btn-hazard flex items-center gap-2 font-bold self-start"
              >
                <Download className="w-4 h-4" />
                <span>EXPORT_RECORD.PDF</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

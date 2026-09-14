import Link from "next/link";
import { ArrowLeft, Cpu, Code2, Layers, CheckCircle2, ShieldAlert } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subsystem Capabilities | Akhmad Aldo",
  description: "Technical capability matrix, tooling specifications, and stack telemetry of Akhmad Aldo (Aldo).",
};

const skills = [
  { name: "Flutter", cat: "Mobile Development", level: "EXPERT // PRODUCTION", desc: "Multi-platform client architectures with BLoC, Clean Architecture, custom platform channels, and pixel-precise shaders." },
  { name: "React Native", cat: "Mobile Development", level: "EXPERT // PRODUCTION", desc: "Enterprise mobile apps with TypeScript, turbo modules, react-navigation, performance optimization, and bridge tuning." },
  { name: "Next.js & React", cat: "Web Platforms", level: "ADVANCED // PRODUCTION", desc: "High-performance SSR/SSG web architectures, Turbopack, server actions, and deterministic data fetching." },
  { name: "Kotlin & Swift", cat: "Native Mobile Bridge", level: "INTERMEDIATE", desc: "Native platform implementations, background daemons, secure hardware enclave bindings, and biometric security." },
  { name: "Go & Node.js", cat: "Distributed Backends", level: "ADVANCED", desc: "High-throughput APIs, concurrent worker pools, low-latency WebSockets, and persistent state storage." },
];

export default function TechStackPage() {
  return (
    <div className="flex flex-col gap-8 text-[#eaeaea] font-mono">
      {/* Return Button */}
      <Link 
        href="/"
        className="self-start industrial-btn industrial-btn-hazard flex items-center gap-2"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>RETURN TO TERMINAL</span>
      </Link>

      {/* Main Container */}
      <div className="border border-[#262626] bg-[#121212] overflow-hidden">
        {/* Header Telemetry Bar */}
        <div className="bg-[#0a0a0a] border-b border-[#262626] px-4 py-3 flex items-center justify-between text-xs tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#ff2a2a]" />
            <span className="text-[#eaeaea] font-bold">[ MATRIX // SUBSYSTEM-SPECS ]</span>
          </div>
          <span className="text-[#4af626]">SYSTEMS: OPERATIONAL</span>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10 flex flex-col gap-8">
          <div>
            <div className="inline-block bg-[#ff2a2a]/10 border border-[#ff2a2a] text-[#ff2a2a] uppercase text-[10px] px-2 py-0.5 font-bold mb-3 tracking-widest">
              [ ARCHITECTURAL CAPABILITIES ]
            </div>
            <h1 className="text-3xl md:text-4xl font-black font-sans uppercase tracking-tight text-[#eaeaea]">
              Technical Subsystem Matrix
            </h1>
            <p className="text-sm text-[#aaaaaa] mt-2 leading-relaxed">
              Exhaustive index of core engineering languages, system frameworks, and production-tested toolchains.
            </p>
          </div>

          {/* Grid of Subsystem Modules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#262626] border border-[#262626]">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className="bg-[#0c0c0c] p-6 flex flex-col justify-between gap-4 hover:bg-[#141414] transition-colors"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between text-[10px] text-[#666666]">
                    <span>MOD-0{index + 1} // {skill.cat.toUpperCase()}</span>
                    <span className="text-[#ff2a2a] font-bold">{skill.level}</span>
                  </div>
                  <h2 className="text-xl font-bold font-sans text-[#eaeaea] uppercase">
                    {skill.name}
                  </h2>
                  <p className="text-xs text-[#aaaaaa] leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#1a1a1a] flex items-center justify-between text-[9px] text-[#555555]">
                  <span>READINESS: FULL</span>
                  <span>TEST_SUITE: 100%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

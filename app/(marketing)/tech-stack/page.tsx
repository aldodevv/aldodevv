import Link from "next/link";
import { ArrowLeft, Cpu, Code2, Layers, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Stack | Akhmad Aldo",
  description: "Technical capability matrix, tooling specifications, and stack specifications of Akhmad Aldo (Aldo).",
};

const skills = [
  { name: "Flutter", cat: "Mobile Development", level: "EXPERT // PRODUCTION", color: "#fa520f", desc: "Multi-platform client architectures with BLoC, Clean Architecture, custom platform channels, and pixel-precise shaders." },
  { name: "React Native", cat: "Mobile Development", level: "EXPERT // PRODUCTION", color: "#ffb83e", desc: "Enterprise mobile apps with TypeScript, turbo modules, react-navigation, performance optimization, and bridge tuning." },
  { name: "Next.js & React", cat: "Web Platforms", level: "ADVANCED // PRODUCTION", color: "#fa520f", desc: "High-performance SSR/SSG web architectures, Turbopack, server actions, and deterministic data fetching." },
  { name: "Kotlin & Swift", cat: "Native Mobile Bridge", level: "INTERMEDIATE", color: "#ffb83e", desc: "Native platform implementations, background daemons, secure hardware enclave bindings, and biometric security." },
  { name: "Go & Node.js", cat: "Distributed Backends", level: "ADVANCED", color: "#3b82f6", desc: "High-throughput APIs, concurrent worker pools, low-latency WebSockets, and persistent state storage." },
];

export default function TechStackPage() {
  return (
    <div className="flex flex-col gap-8 text-white font-sans">
      {/* Return Button */}
      <Link 
        href="/"
        className="self-start flex items-center gap-2 px-5 py-2.5 bg-[#fa520f] hover:bg-[#ffb83e] hover:text-black border-4 border-white text-white font-bold uppercase tracking-widest text-lg shadow-[4px_4px_0px_#ffffff] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>BACK TO HOME</span>
      </Link>

      {/* Main Container */}
      <div className="border-4 border-white bg-[#08080a] shadow-[8px_8px_0px_#fa520f] overflow-hidden">
        {/* Header Bar */}
        <div className="bg-[#fa520f] text-white px-5 py-3 flex items-center justify-between font-mono tracking-widest text-xs uppercase border-b-4 border-white">
          <div className="flex gap-2">
            <span className="w-3.5 h-3.5 bg-white border border-black inline-block" />
            <span className="w-3.5 h-3.5 bg-[#ffb83e] border border-black inline-block" />
            <span className="w-3.5 h-3.5 bg-black border border-white inline-block" />
          </div>
          <span className="font-bold tracking-wider">[ ABILITY_MATRIX_DETAILED.EXE ]</span>
          <Link href="/" className="hover:text-black transition-colors font-bold">✕</Link>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10 flex flex-col gap-8">
          <div>
            <div className="inline-block bg-[#fa520f] text-white uppercase text-base px-3 py-0.5 border-2 border-white mb-3 tracking-widest font-sans">
              CAPABILITIES
            </div>
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-2">
              Technical Skill Matrix
            </h1>
            <p className="text-sm md:text-base font-mono text-zinc-300">
              Languages, engineering frameworks, and production-tested toolchains for building robust systems.
            </p>
          </div>

          {/* Grid of Subsystem Modules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div 
                key={skill.name}
                className="border-4 border-white bg-black p-6 flex flex-col justify-between gap-4 shadow-[5px_5px_0px_#fa520f] transition-transform hover:-translate-y-1"
                style={{
                  boxShadow: `5px 5px 0px 0px ${skill.color}`
                }}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 border-b-2 border-white/20 pb-3 mb-3">
                    <span className="text-2xl font-bold uppercase text-white font-sans tracking-wide">
                      {skill.name}
                    </span>
                    <span 
                      className="text-[11px] font-mono font-bold uppercase px-2 py-0.5 border border-white/30"
                      style={{ color: skill.color }}
                    >
                      {skill.level}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-[#ffb83e] uppercase tracking-wider mb-2">
                    CATEGORY: {skill.cat}
                  </div>
                  <p className="text-xs md:text-sm font-mono text-zinc-300 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

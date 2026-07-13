import Link from "next/link";
import { ArrowLeft, Cpu, Code2, Layers, CheckCircle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Stack & Skills | Akhmad Aldo",
  description: "Explore the technologies and tools Akhmad Aldo (Aldo) uses to develop fast web and mobile applications.",
};

const skills = [
  { name: "Flutter", cat: "Mobile Development", level: "Expert", desc: "Crafting multi-platform mobile architectures with clean code (BLoC, clean architecture) and high performance." },
  { name: "React Native", cat: "Mobile Development", level: "Expert", desc: "Developing cross-platform applications using modern TypeScript hooks, Fast Image, and native bridges." },
  { name: "Next.js & React", cat: "Web Development", level: "Advanced", desc: "Building highly-optimized SSR/SSG sites, server components, and responsive Neo-Brutalist frontends." },
  { name: "Kotlin & Swift", cat: "Native Mobile", level: "Intermediate", desc: "Implementing native extensions, SDK integrations, and background services for Android/iOS." },
  { name: "Go & Node.js", cat: "Backend & Systems", level: "Advanced", desc: "Developing RESTful APIs, WebSockets, background job workers, and database optimization." },
];

export default function TechStackPage() {
  return (
    <div className="flex flex-col gap-8 text-black">
      {/* Back Button */}
      <Link 
        href="/"
        className="self-start flex items-center gap-2 px-4 py-2 bg-[#ffd54f] hover:bg-[#ff5e5e] border-4 border-black text-black font-black font-sans uppercase tracking-widest text-xs shadow-[4px_4px_0px_#000000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        Back To Dashboard
      </Link>

      {/* Main OS Window Card */}
      <div className="border-4 border-black bg-[#b088f9] shadow-[10px_10px_0px_#000000] overflow-hidden">
        {/* Header Bar */}
        <div className="bg-black text-white px-4 py-3 flex items-center justify-between font-black font-mono tracking-widest text-xs uppercase">
          <div className="flex gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-[#ff5e5e] border-2 border-black" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#ffd54f] border-2 border-black" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#3cd070] border-2 border-black" />
          </div>
          <span>TECH_STACK_SPEC.EXE</span>
          <Link href="/" className="hover:text-[#ff5e5e] transition-colors">✕</Link>
        </div>

        {/* Content */}
        <div className="p-8 bg-white border-t-4 border-black flex flex-col gap-8">
          <div>
            <div className="inline-block bg-[#3fc1e8] text-black font-black uppercase text-xs px-2.5 py-1 border-2 border-black shadow-sm mb-3">
              SYSTEM CAPABILITIES
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tight mb-4">
              Tech Stack & Engineering Skills
            </h2>
            <p className="text-base font-medium leading-relaxed text-black/85">
              I leverage a diverse set of modern frameworks and languages to build high-performance, secure, and maintainable systems. My focus is on writing predictable code that adheres to industry-standard patterns.
            </p>
          </div>

          {/* Grid of Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="border-4 border-black p-6 bg-[#f7f6f0] shadow-[5px_5px_0px_#000000] flex flex-col justify-between gap-4"
              >
                <div>
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <span className="font-mono text-[10px] font-black uppercase bg-[#ffd54f] border-2 border-black px-2 py-0.5 shadow-sm text-black">
                      {skill.cat}
                    </span>
                    <span className="font-mono text-[10px] font-black uppercase bg-[#3cd070] border-2 border-black px-2 py-0.5 shadow-sm text-black">
                      {skill.level}
                    </span>
                  </div>
                  <h3 className="text-xl font-black uppercase leading-tight flex items-center gap-2 mb-2">
                    <Code2 className="w-5 h-5 text-black" />
                    {skill.name}
                  </h3>
                  <p className="text-sm font-medium text-black/80">
                    {skill.desc}
                  </p>
                </div>
                
                <div className="border-t-2 border-black/10 pt-3 flex items-center gap-1.5 font-mono text-[10px] font-bold text-black/60">
                  <CheckCircle className="w-3.5 h-3.5 text-[#3cd070]" />
                  <span>PRODUCTION READY</span>
                </div>
              </div>
            ))}
          </div>

          {/* System Specs Footer Panel */}
          <div className="border-4 border-black bg-[#ff5e5e] p-6 text-black shadow-[4px_4px_0px_#000000]">
            <div className="flex items-center gap-3 mb-2">
              <Cpu className="w-6 h-6 text-black border-2 border-black p-0.5 bg-white" />
              <h3 className="font-black text-lg uppercase">Core Architecture Principles</h3>
            </div>
            <ul className="list-disc pl-5 font-mono text-xs font-bold flex flex-col gap-1.5">
              <li>STRICT SEPARATION OF CONCERNS (CLEAN ARCHITECTURE / SOLID)</li>
              <li>COMPREHENSIVE UNIT AND INTEGRATION TESTING PATTERNS</li>
              <li>REAL-TIME PERFORMANCE MONITORING AND CRASHLYTICS INTEGRATION</li>
              <li>SECURE SECRETS STORAGE AND API LAYER ENCRYPTION</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

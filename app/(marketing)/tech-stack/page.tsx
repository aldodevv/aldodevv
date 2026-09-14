import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Stack & Engineering Capabilities | Akhmad Aldo",
  description: "Explore the technologies, languages, and tools Akhmad Aldo uses to engineer robust mobile and web applications.",
};

const skills = [
  {
    name: "Flutter & Dart",
    cat: "Cross-Platform Mobile",
    level: "Core Production",
    badgeClass: "tag-pastel-blue",
    desc: "Designing scalable mobile architectures using BLoC pattern, clean architecture, automated testing, and native platform channels."
  },
  {
    name: "React Native & TypeScript",
    cat: "Cross-Platform Mobile",
    level: "Core Production",
    badgeClass: "tag-pastel-blue",
    desc: "Developing performant mobile applications using modern hooks, strict TypeScript interfaces, memory caching, and native bridging."
  },
  {
    name: "Kotlin & Swift",
    cat: "Native Mobile Foundations",
    level: "Platform Integration",
    badgeClass: "tag-pastel-green",
    desc: "Building native extensions, platform-specific biometric integrations, secure enclave token storage, and background processing."
  },
  {
    name: "Next.js & React 19",
    cat: "Modern Web Systems",
    level: "Fullstack Architecture",
    badgeClass: "tag-pastel-yellow",
    desc: "Crafting optimized server-side rendered applications, high-performance web applications, Tailwind v4 systems, and API routes."
  },
  {
    name: "Go & Node.js",
    cat: "Backend Services",
    level: "Service Infrastructure",
    badgeClass: "tag-pastel-red",
    desc: "Developing concurrent microservices, RESTful and WebSocket APIs, authentication pipelines, and transactional database queries."
  },
  {
    name: "Security & Cryptography",
    cat: "Enterprise Systems",
    level: "Financial Compliance",
    badgeClass: "tag-pastel-green",
    desc: "Implementing hardware token generators, root and jailbreak detection, SSL pinning, and tamper protection for banking applications."
  },
];

export default function TechStackPage() {
  return (
    <div className="flex flex-col gap-10">
      {/* Navigation Breadcrumb */}
      <div className="flex items-center justify-between border-b border-[#eaeaea] pb-5">
        <Link 
          href="/"
          className="btn-secondary-minimal px-3.5 py-1.5 text-xs font-mono inline-flex items-center gap-2 text-[#787774] hover:text-[#111111]"
        >
          <span>←</span>
          <span>Back to Overview</span>
        </Link>
        <div className="font-mono text-xs text-[#787774]">
          tech_capabilities.md
        </div>
      </div>

      {/* Page Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 font-mono text-xs text-[#787774]">
          <span className="tag-pastel-yellow px-2.5 py-0.5 rounded-full text-[10px] uppercase font-medium">
            02 / Capabilities
          </span>
          <span>/</span>
          <span>Toolchain & Frameworks</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111111] font-normal tracking-tight">
          Production toolchains and architectural specializations.
        </h1>
        <p className="text-sm md:text-base text-[#787774] max-w-2xl leading-relaxed">
          Technologies selected for predictable performance, strong typing, and enterprise reliability across web, iOS, and Android ecosystems.
        </p>
      </div>

      {/* Bento Grid of Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <div 
            key={skill.name}
            className="minimal-card p-6 md:p-8 flex flex-col justify-between gap-6"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium uppercase ${skill.badgeClass}`}>
                  {skill.cat}
                </span>
                <span className="font-mono text-xs text-[#787774]">
                  {skill.level}
                </span>
              </div>
              <h2 className="font-sans font-medium text-xl text-[#111111] tracking-tight">
                {skill.name}
              </h2>
              <p className="text-xs md:text-sm text-[#787774] leading-relaxed">
                {skill.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-[#eaeaea] flex items-center justify-between font-mono text-xs text-[#787774]">
              <span>Production Verified</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

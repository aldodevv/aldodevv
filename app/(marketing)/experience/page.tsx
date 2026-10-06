import Link from "next/link";
import { ArrowLeft, Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Akhmad Aldo",
  description: "Chronological professional work experience and deployment history of Akhmad Aldo (Aldo).",
};

const experiences = [
  {
    role: "Mobile Developer & Squad Lead",
    company: "Bank Rakyat Indonesia (BRI)",
    period: "2023 - PRESENT",
    accent: "#fa520f",
    bullets: [
      "Led engineering and stabilization of QLola Mobile, BRI's corporate internet banking application with Flutter.",
      "Integrated QLola IB Token, an offline cryptographic OTP generator communicating via native platform channels.",
      "Engineered rigorous application security policies: root/jailbreak detection, screenshot prevention, and biometric verification.",
      "Orchestrated continuous automated delivery pipelines and enterprise distribution architectures."
    ]
  },
  {
    role: "Fullstack Mobile Developer",
    company: "Freelance & Agency Projects",
    period: "2020 - 2023",
    accent: "#ffb83e",
    bullets: [
      "Architected production-grade cross-platform mobile systems using React Native, Kotlin, and Swift.",
      "Engineered high-concurrency API caching layers, reducing server overhead and accelerating client response times.",
      "Delivered real-time telemetry dashboards and enterprise platforms with Next.js and modern component patterns."
    ]
  }
];

export default function ExperiencePage() {
  return (
    <div className="flex flex-col gap-8 text-white font-sans">
      {/* Back Button */}
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
          <span className="font-bold tracking-wider">[ QUEST_LOG_DETAILED.EXE ]</span>
          <Link href="/" className="hover:text-black transition-colors font-bold">✕</Link>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10 flex flex-col gap-8">
          <div>
            <div className="inline-block bg-[#fa520f] text-white uppercase text-base px-3 py-0.5 border-2 border-white mb-3 tracking-widest font-sans">
              WORK HISTORY
            </div>
            <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-2">
              Professional Experience
            </h1>
            <p className="text-sm md:text-base font-mono text-zinc-300">
              Chronological track record of building, scaling, and maintaining mission-critical mobile and web systems.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {experiences.map((exp, idx) => (
              <div
                key={exp.company}
                className="border-4 border-white bg-black p-6 md:p-8 flex flex-col gap-4 relative shadow-[6px_6px_0px_#fa520f]"
                style={{
                  boxShadow: `6px 6px 0px 0px ${exp.accent}`
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b-2 border-white/20 pb-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold uppercase text-white font-sans">
                      {exp.role}
                    </h2>
                    <span 
                      className="font-mono text-sm uppercase tracking-wider font-bold"
                      style={{ color: exp.accent }}
                    >
                      ★ {exp.company}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs bg-[#111115] border border-white/30 px-3 py-1.5 self-start md:self-auto text-zinc-300">
                    <Calendar className="w-4 h-4 text-[#ffb83e]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="flex flex-col gap-3 font-mono text-xs md:text-sm text-zinc-300 pt-2">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="text-[#fa520f] font-bold mt-0.5">►</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

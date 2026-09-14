import Link from "next/link";
import { ArrowLeft, Briefcase, Calendar, ShieldCheck } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Records & Experience | Akhmad Aldo",
  description: "Chronological deployment log and mission history of Akhmad Aldo (Aldo).",
};

const experiences = [
  {
    role: "Mobile Developer & Squad Lead",
    company: "Bank Rakyat Indonesia (BRI)",
    period: "2022 - PRESENT",
    bullets: [
      "Led engineering and stabilization of QLola Mobile, BRI's corporate internet banking application with Flutter.",
      "Integrated QLola IB Token, an offline cryptographic OTP generator communicating via native platform channels.",
      "Engineered rigorous application security policies: root/jailbreak detection, screenshot prevention, and biometric verification.",
      "Orchestrated continuous automated delivery pipelines and enterprise distribution architectures."
    ]
  },
  {
    role: "Fullstack Mobile Developer",
    company: "Freelance / Software Agency",
    period: "2020 - 2022",
    bullets: [
      "Architected production-grade cross-platform mobile systems using React Native, Kotlin, and Swift.",
      "Engineered high-concurrency API caching layers, reducing server overhead and accelerating client response times.",
      "Delivered real-time telemetry dashboards with Next.js, WebSockets, and modern data-binding patterns."
    ]
  }
];

export default function ExperiencePage() {
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

      {/* Main Ledger Card */}
      <div className="border border-[#262626] bg-[#121212] overflow-hidden">
        {/* Header Telemetry Bar */}
        <div className="bg-[#0a0a0a] border-b border-[#262626] px-4 py-3 flex items-center justify-between text-xs tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#ff2a2a]" />
            <span className="text-[#eaeaea] font-bold">[ AUDIT // DEPLOYMENT-LEDGER ]</span>
          </div>
          <span className="text-[#4af626]">STATUS: VERIFIED</span>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10 flex flex-col gap-8">
          <div>
            <div className="inline-block bg-[#ff2a2a]/10 border border-[#ff2a2a] text-[#ff2a2a] uppercase text-[10px] px-2 py-0.5 font-bold mb-3 tracking-widest">
              [ CHRONOLOGICAL MISSIONS ]
            </div>
            <h1 className="text-3xl md:text-4xl font-black font-sans uppercase tracking-tight text-[#eaeaea]">
              Operational Service Record
            </h1>
            <p className="text-sm text-[#aaaaaa] mt-2 leading-relaxed">
              Comprehensive audit log of commercial engagements, architecture leadership, and mission deployments.
            </p>
          </div>

          {/* Missions List */}
          <div className="flex flex-col gap-8">
            {experiences.map((exp, index) => (
              <div 
                key={exp.company}
                className="border border-[#262626] bg-[#0c0c0c] p-6 md:p-8 flex flex-col gap-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1f1f1f] pb-4">
                  <div>
                    <div className="text-[10px] text-[#ff2a2a] uppercase tracking-wider mb-1">
                      [ MISSION-0{index + 1} ]
                    </div>
                    <h2 className="text-2xl font-bold font-sans text-[#eaeaea] uppercase">
                      {exp.role}
                    </h2>
                    <div className="text-sm text-[#888888] uppercase mt-0.5">
                      ORG: {exp.company}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 border border-[#262626] bg-[#141414] px-3 py-1.5 text-xs text-[#eaeaea]">
                    <Calendar className="w-3.5 h-3.5 text-[#ff2a2a]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="text-xs text-[#666666] uppercase tracking-wider">
                    OPERATIONAL DIRECTIVES EXECUTED:
                  </div>
                  <ul className="flex flex-col gap-2.5 text-xs md:text-sm text-[#aaaaaa]">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-[#ff2a2a] mt-0.5 select-none font-bold">›</span>
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

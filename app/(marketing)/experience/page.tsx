import Link from "next/link";
import { ArrowLeft, Briefcase, Calendar, Award } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Experience | Akhmad Aldo",
  description: "Explore the professional timeline, engineering roles, and project achievements of Akhmad Aldo (Aldo).",
};

const experiences = [
  {
    role: "Mobile Developer & Squad Lead",
    company: "Bank Rakyat Indonesia (BRI)",
    period: "2022 - Present",
    color: "#ff5e5e",
    bullets: [
      "Led the development and optimization of QLola Mobile, BRI's corporate internet banking application, using Flutter.",
      "Successfully integrated QLola IB Token, an offline secure OTP generator using native cryptographic layers.",
      "Implemented security policies, root detection, jailbreak checks, and screenshot prevention mechanisms.",
      "Coordinated app distribution, CI/CD pipelines, and app store deployment procedures."
    ]
  },
  {
    role: "Fullstack Mobile Developer",
    company: "Freelance / Software Agency",
    period: "2020 - 2022",
    color: "#3cd070",
    bullets: [
      "Built multiple production-grade mobile apps using React Native, Kotlin, and Swift.",
      "Optimized API response caching layers, reducing server loads and database overhead.",
      "Developed web companion dashboards with Next.js and Tailwind CSS."
    ]
  }
];

export default function ExperiencePage() {
  return (
    <div className="flex flex-col gap-8 text-black">
      {/* Back Button */}
      <Link 
        href="/"
        className="self-start flex items-center gap-2 px-4 py-2 bg-[#3cd070] hover:bg-[#ffd54f] border-4 border-black text-black font-black font-sans uppercase tracking-widest text-xs shadow-[4px_4px_0px_#000000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        Back To Dashboard
      </Link>

      {/* Main OS Window Card */}
      <div className="border-4 border-black bg-[#3cd070] shadow-[10px_10px_0px_#000000] overflow-hidden">
        {/* Header Bar */}
        <div className="bg-black text-white px-4 py-3 flex items-center justify-between font-black font-mono tracking-widest text-xs uppercase">
          <div className="flex gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-[#ff5e5e] border-2 border-black" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#ffd54f] border-2 border-black" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#3cd070] border-2 border-black" />
          </div>
          <span>EXPERIENCE_LEDGER.EXE</span>
          <Link href="/" className="hover:text-[#ff5e5e] transition-colors">✕</Link>
        </div>

        {/* Content */}
        <div className="p-8 bg-white border-t-4 border-black flex flex-col gap-8">
          <div>
            <div className="inline-block bg-[#ffd54f] text-black font-black uppercase text-xs px-2.5 py-1 border-2 border-black shadow-sm mb-3">
              CAREER TIMELINE
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tight mb-4">
              Professional Work History
            </h2>
            <p className="text-base font-medium leading-relaxed text-black/85">
              A timeline of my professional career, detailing key engineering roles, architectural achievements, and team leadership.
            </p>
          </div>

          {/* Timeline list */}
          <div className="flex flex-col gap-8 relative pl-6 border-l-4 border-black">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex flex-col gap-3">
                {/* Bullet node on timeline */}
                <div 
                  className="absolute -left-[38px] top-1.5 w-6 h-6 rounded-full border-4 border-black shadow-[2px_2px_0px_#000000]"
                  style={{ backgroundColor: exp.color }}
                />

                {/* Company & Role header block */}
                <div className="border-4 border-black p-4 bg-[#f7f6f0] shadow-[4px_4px_0px_#000000] flex flex-col md:flex-row justify-between md:items-center gap-2">
                  <div>
                    <h3 className="font-black text-xl uppercase leading-tight">{exp.role}</h3>
                    <span className="font-mono text-xs font-bold text-black/60 flex items-center gap-1 mt-1">
                      <Briefcase className="w-3.5 h-3.5" />
                      {exp.company}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-black uppercase px-2.5 py-1 border-2 border-black bg-white shadow-sm flex items-center gap-1.5 self-start md:self-auto">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                </div>

                {/* Detailed description bullets */}
                <div className="bg-white border-2 border-black p-4 shadow-[2px_2px_0px_#000000] flex flex-col gap-2">
                  {exp.bullets.map((bullet, bulletIdx) => (
                    <div key={bulletIdx} className="flex gap-2.5 items-start text-sm font-medium text-black/85">
                      <Award className="w-4 h-4 shrink-0 text-black mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

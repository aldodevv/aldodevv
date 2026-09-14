import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Experience & Career History | Akhmad Aldo",
  description: "Explore the professional timeline, engineering roles, and enterprise contributions of Akhmad Aldo (Aldo).",
};

const experiences = [
  {
    role: "Mobile Developer & Squad Lead",
    company: "Bank Rakyat Indonesia (BRI)",
    period: "2022 - Present",
    badgeClass: "tag-pastel-green",
    bullets: [
      "Led the development, release cycles, and performance optimization of QLola Mobile, BRI's corporate internet banking application, using Flutter.",
      "Integrated QLola IB Token, an offline secure OTP generation module utilizing native platform cryptographic layers.",
      "Engineered comprehensive mobile security policies: root/jailbreak detection, SSL certificate pinning, screenshot prevention, and memory tamper resistance.",
      "Coordinated enterprise CI/CD deployment pipelines, automated artifact packaging, and Play Store / App Store compliance."
    ]
  },
  {
    role: "Fullstack Mobile & Web Developer",
    company: "Software Engineering Agency / Contract",
    period: "2020 - 2022",
    badgeClass: "tag-pastel-blue",
    bullets: [
      "Built multi-platform consumer and business applications using React Native, Kotlin, Swift, and TypeScript.",
      "Optimized API response caching and offline synchronization layers, cutting network overhead and latency.",
      "Architected companion web dashboards with Next.js, implementing clean component systems and responsive data tables."
    ]
  }
];

export default function ExperiencePage() {
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
          career_history.md
        </div>
      </div>

      {/* Page Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 font-mono text-xs text-[#787774]">
          <span className="tag-pastel-green px-2.5 py-0.5 rounded-full text-[10px] uppercase font-medium">
            03 / Career History
          </span>
          <span>/</span>
          <span>Professional Experience</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#111111] font-normal tracking-tight">
          Enterprise roles, projects, and architecture leadership.
        </h1>
        <p className="text-sm md:text-base text-[#787774] max-w-2xl leading-relaxed">
          Detailed chronology of software engineering positions, key responsibilities, and system impact.
        </p>
      </div>

      {/* Experience Ledger Cards */}
      <div className="flex flex-col gap-8">
        {experiences.map((exp) => (
          <article 
            key={exp.role}
            className="minimal-card p-6 md:p-10 flex flex-col gap-6"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-[#eaeaea] pb-5">
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h2 className="font-sans font-medium text-xl md:text-2xl text-[#111111] tracking-tight">
                    {exp.role}
                  </h2>
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium ${exp.badgeClass}`}>
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm font-mono text-[#787774] mt-1">
                  {exp.company}
                </p>
              </div>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-3 font-sans text-sm md:text-base text-[#787774] leading-relaxed">
              {exp.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#111111] mt-1 text-xs select-none">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

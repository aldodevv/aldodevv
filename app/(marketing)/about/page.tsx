import Link from "next/link";
import { ArrowLeft, User, MapPin, Award, BookOpen, Download } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Akhmad Aldo | Mobile & Web Developer",
  description: "Learn more about Akhmad Aldo (Aldo), his background in software engineering, education, and credentials.",
};

export default function AboutPage() {
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

      {/* Main Arcade Card */}
      <div className="border-4 border-white bg-[#08080a] shadow-[8px_8px_0px_#fa520f] overflow-hidden">
        {/* Header Bar */}
        <div className="bg-[#fa520f] text-white px-5 py-3 flex items-center justify-between font-mono tracking-widest text-xs uppercase border-b-4 border-white">
          <div className="flex gap-2">
            <span className="w-3.5 h-3.5 bg-white border border-black inline-block" />
            <span className="w-3.5 h-3.5 bg-[#ffb83e] border border-black inline-block" />
            <span className="w-3.5 h-3.5 bg-black border border-white inline-block" />
          </div>
          <span className="font-bold tracking-wider">[ CHARACTER_BIO_DETAILED.EXE ]</span>
          <Link href="/" className="hover:text-black transition-colors font-bold">✕</Link>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10 flex flex-col md:flex-row gap-10">
          {/* Avatar side */}
          <div className="w-full md:w-1/3 shrink-0 flex flex-col gap-6">
            <div className="w-full aspect-[4/5] relative border-4 border-white bg-[#fa520f] shadow-[6px_6px_0px_#fa520f] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                alt="Akhmad Aldo"
                className="w-full h-full object-cover grayscale contrast-125"
              />
              <div className="absolute bottom-2 left-2 bg-black border border-white px-2 py-0.5 text-[10px] font-mono text-white tracking-widest uppercase">
                AVATAR_RENDER.PNG
              </div>
            </div>
            
            {/* Quick Stats Block */}
            <div className="border-4 border-white bg-black p-4 shadow-[4px_4px_0px_#ffb83e] font-mono text-xs text-white">
              <div className="font-bold border-b-2 border-white/40 pb-1 mb-2 uppercase text-[#ffb83e]">
                ★ SYS_METRICS.LOG
              </div>
              <div className="flex justify-between py-1 border-b border-white/10">
                <span className="text-zinc-400">NAME:</span>
                <span className="font-bold text-white">AKHMAD ALDO</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/10">
                <span className="text-zinc-400">ROLE:</span>
                <span className="font-bold text-[#fa520f]">MOBILE & WEB DEV</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/10">
                <span className="text-zinc-400">LOCATION:</span>
                <span className="font-bold text-white">DEPOK, ID</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-zinc-400">STATUS:</span>
                <span className="font-bold text-[#ffb83e]">AVAILABLE // ONLINE</span>
              </div>
            </div>
          </div>

          {/* Details side */}
          <div className="flex-1 flex flex-col gap-6">
            <div>
              <div className="inline-block bg-[#fa520f] text-white font-sans uppercase text-base px-3 py-0.5 border-2 border-white shadow-sm mb-3 tracking-widest">
                BIOGRAPHY
              </div>
              <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4">
                Akhmad Aldo (Aldo)
              </h1>
              <p className="text-sm md:text-base font-mono leading-relaxed text-zinc-300 mb-4">
                I am an expert Mobile and Web Developer based in Depok, West Java, Indonesia. With years of experience in creating production-grade software architectures, I specialize in delivering robust systems that balance cutting-edge user interfaces with strict engineering practices.
              </p>
              <p className="text-sm md:text-base font-mono leading-relaxed text-zinc-300">
                My technical philosophy centers on optimization, clean state management, and strict security compliance. Whether architecting banking applications with complex cryptography or crafting fluid micro-interactions with WebGL and React, I guarantee high-speed, reliable delivery.
              </p>
            </div>

            <div className="border-t-4 border-white/20 pt-6">
              <div className="inline-block bg-[#ffb83e] text-black font-sans uppercase text-base px-3 py-0.5 border-2 border-white shadow-sm mb-3 tracking-widest font-bold">
                EDUCATION
              </div>
              <div className="flex gap-4 items-start bg-black p-5 border-4 border-white shadow-[4px_4px_0px_#ffb83e]">
                <BookOpen className="w-10 h-10 shrink-0 text-[#ffb83e] border-2 border-white p-1.5 bg-black" />
                <div>
                  <h2 className="font-bold text-2xl uppercase leading-tight text-white">
                    Universitas Bina Sarana Informatika
                  </h2>
                  <span className="font-mono text-xs text-[#fa520f] font-bold block mb-1 uppercase tracking-wider">
                    DEPOK, INDONESIA // COMPUTER SCIENCE (GRADUATE)
                  </span>
                  <p className="text-sm font-mono text-zinc-300">
                    Focused on Computer Science and Information Systems. Built a strong foundational knowledge in algorithm complexity, database modeling, and software patterns.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t-4 border-white/20 pt-6">
              <div className="inline-block bg-[#fa520f] text-white font-sans uppercase text-base px-3 py-0.5 border-2 border-white shadow-sm mb-3 tracking-widest">
                CORE VALUES
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-black border-2 border-white p-4 flex gap-3 items-center shadow-[3px_3px_0px_#fa520f]">
                  <Award className="w-6 h-6 text-[#fa520f] shrink-0" />
                  <span className="text-lg font-bold uppercase tracking-wider">PERFORMANCE DRIVEN</span>
                </div>
                <div className="bg-black border-2 border-white p-4 flex gap-3 items-center shadow-[3px_3px_0px_#ffb83e]">
                  <User className="w-6 h-6 text-[#ffb83e] shrink-0" />
                  <span className="text-lg font-bold uppercase tracking-wider">CLEAN CODE PATTERNS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

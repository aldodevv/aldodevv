import Link from "next/link";
import { ArrowLeft, User, MapPin, Award, BookOpen } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Akhmad Aldo | Mobile & Web Developer",
  description: "Learn more about Akhmad Aldo (Aldo), his background in software engineering, education, and credentials.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-8 text-black">
      {/* Back Button */}
      <Link 
        href="/"
        className="self-start flex items-center gap-2 px-4 py-2 bg-[#ff5e5e] hover:bg-[#ffd54f] border-4 border-black text-black font-black font-sans uppercase tracking-widest text-xs shadow-[4px_4px_0px_#000000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        Back To Dashboard
      </Link>

      {/* Main OS Window Card */}
      <div className="border-4 border-black bg-[#ffd54f] shadow-[10px_10px_0px_#000000] overflow-hidden">
        {/* Header Bar */}
        <div className="bg-black text-white px-4 py-3 flex items-center justify-between font-black font-mono tracking-widest text-xs uppercase">
          <div className="flex gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-[#ff5e5e] border-2 border-black" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#ffd54f] border-2 border-black" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#3cd070] border-2 border-black" />
          </div>
          <span>CHARACTER_BIO_DETAILED.EXE</span>
          <Link href="/" className="hover:text-[#ff5e5e] transition-colors">✕</Link>
        </div>

        {/* Content */}
        <div className="p-8 bg-white border-t-4 border-black flex flex-col md:flex-row gap-8">
          {/* Avatar side */}
          <div className="w-full md:w-1/3 shrink-0 flex flex-col gap-6">
            <div className="w-full aspect-[4/5] relative border-4 border-black bg-[#b088f9] shadow-[6px_6px_0px_#000000] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                alt="Akhmad Aldo"
                className="absolute inset-0 w-full h-full object-cover grayscale"
              />
            </div>
            
            {/* Quick Stats Block */}
            <div className="border-4 border-black bg-[#3fc1e8] p-4 shadow-[4px_4px_0px_#000000] font-mono text-xs text-black">
              <div className="font-black border-b-2 border-black pb-1 mb-2 uppercase">SYS_METRICS.LOG</div>
              <div className="flex justify-between py-0.5"><span>NAME:</span><span className="font-black">AKHMAD ALDO</span></div>
              <div className="flex justify-between py-0.5"><span>CLASS:</span><span className="font-black">DEVELOPER</span></div>
              <div className="flex justify-between py-0.5"><span>LOC:</span><span className="font-black">DEPOK, ID</span></div>
              <div className="flex justify-between py-0.5"><span>STATUS:</span><span className="font-black text-[#3cd070]">ACTIVE</span></div>
            </div>
          </div>

          {/* Details side */}
          <div className="flex-1 flex flex-col gap-6 font-sans">
            <div>
              <div className="inline-block bg-[#3cd070] text-black font-black uppercase text-xs px-2.5 py-1 border-2 border-black shadow-sm mb-3">
                BIOGRAPHY
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tight mb-4">
                Akhmad Aldo (Aldo)
              </h2>
              <p className="text-base font-medium leading-relaxed text-black/85 mb-4">
                I am an expert Mobile and Web Developer based in Depok, West Java, Indonesia. With years of experience in creating production-grade software architectures, I specialize in delivering robust systems that balance cutting-edge user interfaces with strict engineering practices.
              </p>
              <p className="text-base font-medium leading-relaxed text-black/85">
                My technical philosophy centers on optimization, clean state management, and strict security compliance. Whether architecting banking applications with complex cryptography or crafting fluid micro-interactions with WebGL and React, I guarantee high-speed, reliable delivery.
              </p>
            </div>

            <div className="border-t-4 border-black pt-6">
              <div className="inline-block bg-[#b088f9] text-black font-black uppercase text-xs px-2.5 py-1 border-2 border-black shadow-sm mb-3">
                EDUCATION
              </div>
              <div className="flex gap-4 items-start bg-[#f7f6f0] p-4 border-4 border-black shadow-[4px_4px_0px_#000000]">
                <BookOpen className="w-8 h-8 shrink-0 text-black border-2 border-black p-1 bg-white" />
                <div>
                  <h3 className="font-black text-lg uppercase leading-tight">Universitas Bina Sarana Informatika</h3>
                  <span className="font-mono text-xs text-black/70 font-bold block mb-1">DEPOK, INDONESIA</span>
                  <p className="text-sm font-medium">
                    Focused on Computer Science and Information Systems. Built a strong foundational knowledge in algorithm complexity, database modeling, and software patterns.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t-4 border-black pt-6">
              <div className="inline-block bg-[#ff5e5e] text-white font-black uppercase text-xs px-2.5 py-1 border-2 border-black shadow-sm mb-3">
                CORE VALUE
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border-2 border-black p-3 flex gap-2.5">
                  <Award className="w-5 h-5 text-[#ff5e5e] shrink-0" />
                  <span className="text-sm font-black uppercase">PERFORMANCE DRIVEN</span>
                </div>
                <div className="bg-white border-2 border-black p-3 flex gap-2.5">
                  <User className="w-5 h-5 text-[#3cd070] shrink-0" />
                  <span className="text-sm font-black uppercase">CLEAN CODE PATTERNS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

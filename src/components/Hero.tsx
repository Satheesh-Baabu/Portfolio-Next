"use client";

import { ArrowRight, Download, Eye, Terminal } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side Info */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs text-blue-300 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.availabilityBadge}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {personalInfo.heroHeadline}
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-blue-400 leading-snug">
                {personalInfo.heroSubheadline}
              </p>
            </div>

            {/* Short Paragraph Summary */}
            <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
              {personalInfo.heroSummary}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-sm rounded-lg transition-all shadow-md shadow-blue-600/20"
              >
                <Eye className="w-4 h-4" />
                <span>View My Work</span>
              </a>

              <a
                href={personalInfo.resumePdfPath}
                target="_blank"
                rel="noopener noreferrer"
                download="Satheesh-Baabu-Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0B1628] hover:bg-[#0F1F35] border border-[#1E293B] hover:border-blue-500/40 text-slate-200 font-semibold text-sm rounded-lg transition-all"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-300 hover:text-blue-400 transition-colors ml-1"
              >
                <span>Let&apos;s Connect</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Location Tag */}
            <div className="pt-2 flex items-center gap-4 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                Location: {personalInfo.location}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                {personalInfo.experienceYears}
              </span>
            </div>

          </div>

          {/* Right Side Visual Developer Window */}
          <div className="lg:col-span-5">
            <div className="bg-[#0B1628] border border-[#1E293B] rounded-xl shadow-2xl overflow-hidden">
              
              {/* Window Bar Header */}
              <div className="px-4 py-3 bg-[#07111F] border-b border-[#1E293B] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    developer-profile.ts
                  </span>
                </div>
                <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800/40">
                  TypeScript
                </div>
              </div>

              {/* Code Snippet Content */}
              <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed text-slate-300 space-y-2 overflow-x-auto">
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-yellow-300">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">name</span>:{" "}
                  <span className="text-emerald-300">&quot;Satheesh Baabu M&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">role</span>:{" "}
                  <span className="text-emerald-300">&quot;Full Stack Developer&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">experience</span>:{" "}
                  <span className="text-emerald-300">&quot;1+ Year Industry&quot;</span>,
                </div>
                <div className="pl-4">
                  <span className="text-blue-400">coreStack</span>: [
                </div>
                <div className="pl-8 text-slate-400">
                  <span className="text-sky-300">&quot;Next.js&quot;</span>,{" "}
                  <span className="text-sky-300">&quot;TypeScript&quot;</span>,{" "}
                  <span className="text-sky-300">&quot;React&quot;</span>,
                </div>
                <div className="pl-8 text-slate-400">
                  <span className="text-sky-300">&quot;Node.js&quot;</span>,{" "}
                  <span className="text-sky-300">&quot;MongoDB&quot;</span>,{" "}
                  <span className="text-sky-300">&quot;Tailwind&quot;</span>
                </div>
                <div className="pl-4">],</div>
                <div className="pl-4">
                  <span className="text-blue-400">status</span>:{" "}
                  <span className="text-emerald-300">&quot;Ready for Production Opportunities&quot;</span>
                </div>
                <div>&#125;;</div>

                {/* Tech Pills Footer */}
                <div className="pt-4 border-t border-[#1E293B] mt-4 flex flex-wrap gap-1.5 font-sans">
                  {["Next.js", "TypeScript", "React", "Node.js", "MongoDB"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded bg-[#0F1F35] border border-[#1E293B] text-[11px] font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

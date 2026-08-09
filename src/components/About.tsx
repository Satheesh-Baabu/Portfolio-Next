import { CheckCircle2, Building2, Layers, Cpu } from "lucide-react";
import { aboutMeContent } from "@/data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#07111F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-950/60 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
            <span>01. ABOUT ME</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Background &amp; Focus
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Paragraph & Focus Areas */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {aboutMeContent.intro}
            </p>

            {/* Core Engineering Focus Areas */}
            <div className="pt-2">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-400" />
                Key Engineering Priorities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {aboutMeContent.focusAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-lg bg-[#0B1628] border border-[#1E293B]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="text-sm font-medium text-slate-200">{area}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Side: Industry Domains Card */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-xl bg-[#0B1628] border border-[#1E293B] space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-blue-600/10 border border-blue-500/30 text-blue-400">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Industry Experience</h3>
                  <p className="text-xs text-slate-400">Production web applications across domains</p>
                </div>
              </div>

              <div className="space-y-3">
                {aboutMeContent.domains.map((domain, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-lg bg-[#0F1F35] border border-[#1E293B]"
                  >
                    <span className="text-sm font-semibold text-slate-200">{domain}</span>
                    <span className="text-xs font-mono text-blue-400 px-2 py-0.5 rounded bg-blue-950 border border-blue-800/40">
                      Domain
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-lg bg-blue-950/40 border border-blue-500/20 flex items-start gap-3">
                <Cpu className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-300 leading-relaxed">
                  Specialized in full-stack JavaScript/TypeScript workflows, RESTful API architecture, Headless WordPress integration, and cloud deployments on Vercel and AWS EC2.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

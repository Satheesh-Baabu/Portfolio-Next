import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";
import { experienceData } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#07111F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-950/60 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
            <span>03. PROFESSIONAL EXPERIENCE</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Industry Experience
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Proven track record of building, deploying, and maintaining production applications.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[#1E293B] pl-6 md:pl-8 ml-3 md:ml-4 space-y-12">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-[#07111F] group-hover:scale-125 transition-transform"></div>

              {/* Content Box */}
              <div className="p-6 rounded-xl bg-[#0B1628] border border-[#1E293B] space-y-4">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1E293B] pb-4">
                  <div>
                    <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider block mb-1">
                      Professional Role
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-300 mt-0.5">
                      <Briefcase className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 space-y-1">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0F1F35] border border-[#1E293B] text-blue-300">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Responsibilities List */}
                <div className="space-y-2.5 pt-1">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Key Contributions &amp; Responsibilities:
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-4 border-t border-[#1E293B] flex flex-wrap gap-2">
                  {exp.techUsed.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-[#0F1F35] text-xs font-mono text-slate-300 border border-[#1E293B]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

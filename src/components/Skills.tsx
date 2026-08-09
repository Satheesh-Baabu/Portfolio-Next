import { skillCategories } from "@/data/portfolioData";
import { Code, Database, Server, Wrench, Cpu } from "lucide-react";

export default function Skills() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Code className="w-4 h-4 text-blue-400" />;
      case 1:
        return <Server className="w-4 h-4 text-blue-400" />;
      case 2:
        return <Database className="w-4 h-4 text-blue-400" />;
      case 3:
        return <Wrench className="w-4 h-4 text-blue-400" />;
      default:
        return <Cpu className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#0B1628]/40 border-y border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-950/60 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
            <span>02. SKILLS &amp; TECHNOLOGIES</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Technical Stack
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-xl">
            Core technologies, frameworks, and deployment tools I utilize for full-stack software development.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className="p-5 rounded-xl bg-[#0B1628] border border-[#1E293B] hover:border-blue-500/30 transition-colors flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center gap-2.5 pb-3 border-b border-[#1E293B]">
                  {getCategoryIcon(idx)}
                  <h3 className="text-base font-bold text-white tracking-tight">{cat.title}</h3>
                </div>

                {/* Skill Chips */}
                <div className="pt-4 flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-md bg-[#0F1F35] border border-[#1E293B] text-xs font-semibold text-slate-200 hover:text-white hover:border-blue-500/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* <div className="text-[11px] font-mono text-slate-500 pt-2 border-t border-[#1E293B]/60 flex items-center justify-between">
                <span>{cat.skills.length} competencies</span>
                <span>Verified</span>
              </div> */}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

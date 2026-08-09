import { Sparkles, Code2, Rocket, GraduationCap } from "lucide-react";
import { whyWorkWithMePoints } from "@/data/portfolioData";

export default function WhyWorkWithMe() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 1:
        return <Rocket className="w-5 h-5 text-blue-400" />;
      case 2:
        return <Sparkles className="w-5 h-5 text-blue-400" />;
      default:
        return <GraduationCap className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section className="py-20 bg-[#0B1628]/40 border-y border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-950/60 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
            <span>06. VALUE PROPOSITION</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Why Work With Me
          </h2>
        </div>

        {/* 4 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyWorkWithMePoints.map((point, idx) => (
            <div
              key={point.title}
              className="p-5 rounded-xl bg-[#0B1628] border border-[#1E293B] flex items-start gap-4"
            >
              <div className="p-2.5 rounded-lg bg-blue-600/10 border border-blue-500/30 shrink-0">
                {getIcon(idx)}
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-white tracking-tight">
                  {point.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

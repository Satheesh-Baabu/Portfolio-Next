import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import { educationInfo } from "@/data/portfolioData";

export default function Education() {
  return (
    <section className="py-20 bg-[#07111F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-950/60 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
            <span>07. EDUCATION</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Academic Foundation
          </h2>
        </div>

        <div className="max-w-3xl">
          <div className="p-6 rounded-xl bg-[#0B1628] border border-[#1E293B] space-y-5">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1E293B] pb-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-blue-600/10 border border-blue-500/30 text-blue-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {educationInfo.degree}
                  </h3>
                  <p className="text-sm font-medium text-slate-300">
                    {educationInfo.institution}
                  </p>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    {educationInfo.location}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 gap-1">
                <span className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#0F1F35] border border-[#1E293B] text-blue-300">
                  <Calendar className="w-3.5 h-3.5" />
                  {educationInfo.period}
                </span>
                <span className="font-bold text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/40">
                  {educationInfo.grade}
                </span>
              </div>
            </div>

            {/* Special Academic Mention */}
            {educationInfo.specialMention && (
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-blue-950/30 border border-blue-500/20 text-xs text-slate-200">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-mono text-amber-300 font-semibold">
                  Academic Achievement:
                </span>
                <span>{educationInfo.specialMention}</span>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}

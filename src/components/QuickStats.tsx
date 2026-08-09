import { quickStats } from "@/data/portfolioData";

export default function QuickStats() {
  return (
    <section className="py-8 bg-[#0B1628]/60 border-y border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {quickStats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center p-3">
              <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                <span className="text-blue-400">{stat.value}</span>
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

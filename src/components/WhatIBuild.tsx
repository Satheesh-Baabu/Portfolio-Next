import { Layout, Server, ShoppingCart, Globe } from "lucide-react";
import { whatIBuildHighlights } from "@/data/portfolioData";

export default function WhatIBuild() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return <Layout className="w-6 h-6 text-blue-400" />;
      case "Server":
        return <Server className="w-6 h-6 text-blue-400" />;
      case "ShoppingCart":
        return <ShoppingCart className="w-6 h-6 text-blue-400" />;
      case "Globe":
        return <Globe className="w-6 h-6 text-blue-400" />;
      default:
        return <Layout className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section className="py-20 bg-[#07111F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-950/60 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
            <span>05. TECHNICAL HIGHLIGHTS</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            What I Build
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Core functional domains and specialized technical capabilities.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatIBuildHighlights.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl bg-[#0B1628] border border-[#1E293B] hover:border-blue-500/40 transition-colors space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="p-3 w-fit rounded-lg bg-blue-600/10 border border-blue-500/30">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="pt-3 border-t border-[#1E293B] text-[11px] font-mono text-slate-500">
                <span>Production Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

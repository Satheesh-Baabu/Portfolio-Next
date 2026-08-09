"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Check, Sparkles, Layers, ShieldCheck, Info } from "lucide-react";
import { projectsData, ProjectItem } from "@/data/portfolioData";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const featuredPersonalProject = projectsData.find((p) => p.id === "neststay");
  const professionalProjects = projectsData.filter((p) => p.type === "Professional Project");

  return (
    <section id="projects" className="py-20 bg-[#0B1628]/40 border-y border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-950/60 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
            <span>04. FEATURED PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production &amp; Showcase Applications
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Highlighting real-world web solutions, full-stack rental platforms, logistics applications, e-commerce systems, and healthcare web portals.
          </p>
        </div>

        {/* 1. FEATURED PERSONAL PROJECT (NestStay - Visually Largest Hero Showcase) */}
        {featuredPersonalProject && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                Featured Personal Project
              </span>
            </div>

            <div className="group rounded-2xl bg-[#0B1628] border-2 border-blue-500/40 hover:border-blue-500 transition-all duration-300 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              {/* Image Preview Side */}
              <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden bg-[#07111F]">
                <Image
                  src={featuredPersonalProject.image}
                  alt={featuredPersonalProject.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-blue-600/90 text-white text-xs font-bold tracking-wide shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {featuredPersonalProject.badgeText}
                  </span>
                </div>
              </div>

              {/* Text Info Side */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
                    <Layers className="w-3.5 h-3.5 text-blue-400" />
                    <span>Full-Stack SaaS Architecture</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                    {featuredPersonalProject.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mt-3">
                    {featuredPersonalProject.description}
                  </p>

                  {/* Key Features Grid */}
                  <div className="mt-5 space-y-2">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Core Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-1.5 text-xs text-slate-300">
                      {featuredPersonalProject.features.slice(0, 6).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="mt-5 pt-4 border-t border-[#1E293B] flex flex-wrap gap-1.5">
                    {featuredPersonalProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded bg-[#0F1F35] border border-[#1E293B] text-xs font-mono text-blue-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(featuredPersonalProject)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-lg transition-colors shadow-sm"
                  >
                    <span>View Architecture Details</span>
                    <Info className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* 2. PROFESSIONAL PROJECTS HEADER */}
        <div className="pt-6 mb-8 border-t border-[#1E293B]">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
              Professional Production Projects
            </span>
          </div>
          <h3 className="text-xl font-bold text-white">Client &amp; Industry Client Deployments</h3>
        </div>

        {/* Grid of Professional Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionalProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl bg-[#0B1628] border border-[#1E293B] hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-48 w-full bg-[#07111F] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#07111F]/90 border border-emerald-500/40 text-emerald-400 text-[11px] font-mono font-semibold">
                      {project.badgeText}
                    </span>
                  </div>
                  {project.role && (
                    <div className="absolute bottom-3 right-3">
                      <span className="px-2 py-0.5 rounded bg-blue-950/80 text-blue-300 text-[10px] font-mono border border-blue-800/40">
                        {project.role}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5 space-y-4">
                  <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                    {project.title}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-1">
                    {project.features.slice(0, 3).map((f, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>
                        <span className="truncate">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="pt-3 border-t border-[#1E293B] flex flex-wrap gap-1">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-[#0F1F35] text-[11px] font-mono text-slate-300 border border-[#1E293B]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 pt-0 flex items-center justify-between gap-3">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 font-semibold text-xs rounded-lg transition-colors"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#0F1F35] hover:bg-[#172A46] text-slate-300 font-semibold text-xs rounded-lg transition-colors border border-[#1E293B]"
                  >
                    <span>View Specifications</span>
                    <Info className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Detailed Modal for Project View */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-[#0B1628] border border-[#1E293B] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative">
              
              <div className="flex items-start justify-between border-b border-[#1E293B] pb-4">
                <div>
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block mb-1">
                    {selectedProject.type}
                  </span>
                  <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="p-1 text-slate-400 hover:text-white rounded-md bg-[#0F1F35] border border-[#1E293B]"
                >
                  ✕
                </button>
              </div>

              <div className="relative h-64 w-full rounded-xl overflow-hidden bg-[#07111F]">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover object-top"
                />
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedProject.description}
              </p>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  All Key Features:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {selectedProject.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded bg-[#0F1F35] border border-[#1E293B]">
                      <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded bg-[#0F1F35] text-xs font-mono text-blue-300 border border-[#1E293B]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#1E293B] flex justify-end gap-3">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-lg transition-colors"
                  >
                    <span>Visit Live Application</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 bg-[#0F1F35] hover:bg-[#172A46] text-slate-300 font-semibold text-xs rounded-lg transition-colors border border-[#1E293B]"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

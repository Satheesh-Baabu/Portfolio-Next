"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Check,
  Sparkles,
  Layers,
  ShieldCheck,
  Info,
  ChevronDown,
  ChevronUp,
  Code,
} from "lucide-react";
import { projectsData, ProjectItem } from "@/data/portfolioData";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );
  const [showSecondaryProjects, setShowSecondaryProjects] = useState(false);

  const professionalProjects = projectsData.filter(
    (project) => !project.isSecondary,
  );

  // Projects that are collapsed under "Show More"
  const secondaryProjects = projectsData.filter((p) => p.isSecondary);

  return (
    <section
      id="projects"
      className="py-20 bg-[#0B1628]/40 border-y border-[#1E293B]"
    >
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
            Highlighting real-world web solutions, full-stack rental platforms,
            logistics applications, e-commerce systems, MERN web apps, and
            healthcare portals.
          </p>
        </div>

        {/* 2. PROFESSIONAL PROJECTS HEADER */}
        {/* <div className="pt-6 mb-8 border-t border-[#1E293B]">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
              Professional Production Projects
            </span>
          </div>
          <h3 className="text-xl font-bold text-white">Client &amp; Industry Deployments</h3>
        </div> */}

        {/* Grid of Professional Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {professionalProjects.map((project) => (
            <RenderProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* 4. SHOW MORE TOGGLE FOR SECONDARY PROJECTS */}
        {secondaryProjects.length > 0 && (
          <div className="mt-12 text-center">
            {!showSecondaryProjects ? (
              <button
                type="button"
                onClick={() => setShowSecondaryProjects(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B1628] hover:bg-[#0F1F35] border border-[#1E293B] hover:border-blue-500/40 text-slate-200 hover:text-white font-semibold text-xs rounded-xl transition-all shadow-md"
              >
                <span>Show More Projects ({secondaryProjects.length})</span>
                <ChevronDown className="w-4 h-4 text-blue-400" />
              </button>
            ) : (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="pt-6 border-t border-[#1E293B] text-left">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block mb-1">
                    Utility &amp; Learning Projects
                  </span>
                  <h3 className="text-xl font-bold text-white mb-6">
                    Additional Web Tools
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {secondaryProjects.map((project) => (
                      <RenderProjectCard
                        key={project.id}
                        project={project}
                        onSelect={(p) => setSelectedProject(p)}
                      />
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowSecondaryProjects(false)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0B1628] hover:bg-[#0F1F35] border border-[#1E293B] text-slate-300 text-xs font-semibold rounded-xl transition-colors"
                >
                  <span>Show Less</span>
                  <ChevronUp className="w-4 h-4 text-blue-400" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Detailed Modal for Project View */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-[#0B1628] border border-[#1E293B] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative">
              <div className="flex items-start justify-between border-b border-[#1E293B] pb-4">
                <div>
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block mb-1">
                    {selectedProject.type}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
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
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2 rounded bg-[#0F1F35] border border-[#1E293B]"
                    >
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
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-[#0F1F35] text-xs font-mono text-blue-300 border border-[#1E293B]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#1E293B] flex flex-wrap justify-end gap-3">
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
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#07111F] hover:bg-[#0F1F35] border border-[#1E293B] hover:border-blue-500/40 text-slate-200 text-xs font-semibold rounded-lg transition-colors"
                  >
                    <svg
                      className="w-3.5 h-3.5 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>GitHub Code</span>
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

function RenderProjectCard({
  project,
  onSelect,
}: {
  project: ProjectItem;
  onSelect: (p: ProjectItem) => void;
}) {
  return (
    <div className="group rounded-xl bg-[#0B1628] border border-[#1E293B] hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden">
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
            <span className="px-2.5 py-0.5 rounded-full bg-[#07111F]/90 border border-blue-500/40 text-blue-400 text-[11px] font-mono font-semibold">
              {project.badgeText || project.type}
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
              <div
                key={idx}
                className="flex items-center gap-1.5 text-[11px] text-slate-400"
              >
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
      <div className="p-5 pt-0 flex items-center justify-between gap-2.5">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 font-semibold text-xs rounded-lg transition-colors"
          >
            <span>Live Demo</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center p-2 bg-[#0F1F35] hover:bg-[#172A46] text-slate-300 hover:text-white border border-[#1E293B] text-xs rounded-lg transition-colors"
            title="View Source Code on GitHub"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        )}

        <button
          type="button"
          onClick={() => onSelect(project)}
          className="p-2 bg-[#0F1F35] hover:bg-[#172A46] text-slate-300 hover:text-white border border-[#1E293B] text-xs rounded-lg transition-colors"
          title="View Details"
        >
          <Info className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

import { personalInfo } from "@/data/portfolioData";
import { Code2, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#07111F] border-t border-[#1E293B] py-10 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <span className="text-sm font-bold text-white block">
                {personalInfo.name}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {personalInfo.professionalTitle}
              </span>
            </div>
          </div>

          {/* Right links */}
          <div className="flex items-center gap-5 text-xs font-mono">
            <a
              href={personalInfo.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-blue-400 transition-colors flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-[#1E293B]/60 text-center text-xs text-slate-500 font-mono">
          &copy; {currentYear} {personalInfo.name}. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

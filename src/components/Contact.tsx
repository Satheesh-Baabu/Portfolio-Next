"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, Send, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#0B1628]/60 border-t border-[#1E293B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-950/60 border border-blue-500/20 text-xs font-mono text-blue-400">
            <span>08. GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            I&apos;m currently open to opportunities where I can contribute as a Frontend or Full Stack Developer and continue growing with a strong engineering team.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-[#0B1628] border border-[#1E293B] rounded-2xl p-6 sm:p-8 space-y-8 shadow-xl">
          
          {/* Contact Details List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Email Card */}
            <div className="p-4 rounded-xl bg-[#0F1F35] border border-[#1E293B] flex flex-col justify-between space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-600/10 border border-blue-500/30 text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Email Address</span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-semibold text-white hover:text-blue-400 transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-[#1E293B]">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex-1 text-center py-1.5 px-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-md transition-colors inline-flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Email Me</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 bg-[#07111F] hover:bg-blue-950 border border-[#1E293B] text-slate-300 hover:text-blue-300 text-xs rounded-md transition-colors flex items-center justify-center"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Phone & Location Card */}
            <div className="p-4 rounded-xl bg-[#0F1F35] border border-[#1E293B] flex flex-col justify-between space-y-3">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-600/10 border border-blue-500/30 text-blue-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Phone</span>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-600/10 border border-blue-500/30 text-blue-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Location</span>
                    <span className="text-sm font-semibold text-white">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#1E293B] text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Open to Remote &amp; On-Site Roles</span>
              </div>
            </div>

          </div>

          {/* Social Profiles & Quick Mail Action */}
          <div className="pt-4 border-t border-[#1E293B] flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs font-mono text-slate-400">Direct Professional Links:</span>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#07111F] hover:bg-[#0F1F35] border border-[#1E293B] hover:border-blue-500/40 text-xs font-semibold text-slate-200 hover:text-blue-400 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4 fill-blue-400" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Send Direct Email</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

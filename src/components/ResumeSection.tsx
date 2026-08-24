"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Download,
  GraduationCap,
  Briefcase,
  Sparkles,
  Github,
  Linkedin,
  ExternalLink,
  Eye,
  CheckCircle2,
  FolderGit2,
  Award,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { QRCodeSVG } from "./ui/QRCodeSVG";

export const ResumeSection: React.FC = () => {
  const [showPdfEmbed, setShowPdfEmbed] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const pdfUrl = `${basePath}/Placement_Resume.pdf`;

  return (
    <section id="resume" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Placement Resume & Credentials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Official Resume & <span className="text-gradient-accent">Recruiter Gateway</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed"
          >
            Download the verified placement resume, preview the document live, or scan the QR code to connect.
          </motion.p>
        </div>

        {/* Resume Card Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 max-w-4xl mx-auto space-y-8 bg-gradient-to-b from-slate-900/90 to-slate-950 shadow-2xl"
        >
          {/* Top Bar with Actions */}
          <div className="flex flex-wrap items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-lg">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{PORTFOLIO_DATA.personal.name}</h3>
                  <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    <CheckCircle2 className="w-3 h-3" /> Verified PDF
                  </span>
                </div>
                <p className="text-xs text-cyan-400 font-mono mt-1">
                  B.E Computer Science & Engineering • CGPA 8.96 • SIMATS Saveetha University
                </p>
              </div>
            </div>

            {/* Resume Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setShowPdfEmbed(!showPdfEmbed)}
                className="px-4 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-medium text-xs border border-slate-700 transition-all flex items-center gap-1.5"
              >
                <Eye className="w-4 h-4 text-cyan-400" />
                <span>{showPdfEmbed ? "Hide Live PDF" : "Preview PDF"}</span>
              </button>

              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-medium text-xs border border-slate-700 transition-all flex items-center gap-1.5"
              >
                <ExternalLink className="w-4 h-4 text-blue-400" />
                <span>Open in Tab</span>
              </a>

              <a
                href={pdfUrl}
                download="DINNEPATI_SINDHU_PRASAD_Resume.pdf"
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-white font-bold text-xs shadow-lg shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Live Embedded PDF Preview Drawer (Toggled) */}
          {showPdfEmbed && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-950 p-2"
            >
              <div className="flex items-center justify-between px-3 py-2 text-xs text-slate-400 border-b border-slate-800 mb-2">
                <span className="font-mono text-cyan-400">📄 Placement_Resume.pdf Preview</span>
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center gap-1 text-cyan-400"
                >
                  <span>Full Screen</span> <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <iframe
                src={`${pdfUrl}#toolbar=0`}
                className="w-full h-[650px] rounded-xl border border-slate-800 bg-slate-900"
                title="Placement Resume PDF Preview"
              />
            </motion.div>
          )}

          {/* Quick Resume Sections Snapshot */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Education & Academic Record */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-cyan-400 font-mono">
                <GraduationCap className="w-4 h-4" />
                <span>EDUCATION HIGHLIGHTS</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2 hover:border-cyan-500/30 transition-all">
                <div className="flex justify-between items-start text-xs">
                  <span className="font-bold text-white">Bachelor of Engineering (B.E) – CSE</span>
                  <span className="font-mono text-cyan-400 font-bold">8.96 CGPA</span>
                </div>
                <div className="text-[11px] text-slate-300">SIMATS Engineering (Saveetha University)</div>
                <div className="text-[10px] text-slate-500 font-mono">2023 - 2027 • Chennai, India</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1 hover:border-cyan-500/30 transition-all">
                <div className="flex justify-between items-start text-xs">
                  <span className="font-bold text-white">Intermediate (Class XII) – MPC</span>
                  <span className="font-mono text-cyan-400 font-bold">90.1%</span>
                </div>
                <div className="text-[11px] text-slate-300">SR Jr College, Tirupati</div>
                <div className="text-[10px] text-slate-500 font-mono">2023</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1 hover:border-cyan-500/30 transition-all">
                <div className="flex justify-between items-start text-xs">
                  <span className="font-bold text-white">Secondary School (Class X)</span>
                  <span className="font-mono text-cyan-400 font-bold">98.6%</span>
                </div>
                <div className="text-[11px] text-slate-300">Vasishta High School, TSundupalli</div>
                <div className="text-[10px] text-slate-500 font-mono">2021</div>
              </div>
            </div>

            {/* Internships & Key Projects */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-blue-400 font-mono">
                <Briefcase className="w-4 h-4" />
                <span>INTERNSHIPS & EXPERIENCE</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1 hover:border-blue-500/30 transition-all">
                <div className="flex justify-between items-start text-xs">
                  <span className="font-bold text-white">Cloud Computing Intern</span>
                  <span className="text-[10px] text-slate-400 font-mono">Nov 2025 – Jan 2026</span>
                </div>
                <div className="text-[11px] text-cyan-400">Corizo EduTech Private Limited</div>
                <div className="text-[11px] text-slate-400 leading-relaxed">
                  • AWS Lex Chatbot: Intent-driven automated conversational workflows.<br />
                  • AWS S3 & IAM: IAM-based access control & secure cloud storage.
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1 hover:border-blue-500/30 transition-all">
                <div className="flex justify-between items-start text-xs">
                  <span className="font-bold text-white">AI Intern</span>
                  <span className="text-[10px] text-slate-400 font-mono">Aug 2025 – Nov 2025</span>
                </div>
                <div className="text-[11px] text-cyan-400">Corizo EduTech Private Limited</div>
                <div className="text-[11px] text-slate-400 leading-relaxed">
                  • Cardiac Attack Prediction: Supervised ML classification model.<br />
                  • Spotify Data Analytics: Python audio trends & behavioral insights.
                </div>
              </div>

              {/* Projects Summary */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1.5 hover:border-emerald-500/30 transition-all">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 font-mono">
                  <FolderGit2 className="w-3.5 h-3.5" />
                  <span>FEATURED PROJECTS IN RESUME</span>
                </div>
                <div className="text-[11px] text-slate-300 leading-relaxed space-y-1">
                  <div><strong>1. IAN Detection Studio:</strong> 3D NIfTI medical segmentation platform (PyTorch + MONAI + FastAPI + Android).</div>
                  <div><strong>2. AI-Based Fire Detection:</strong> Real-time YOLO + OpenCV detection with Flask dashboard.</div>
                  <div><strong>3. Sentiment Analysis Web App:</strong> NLP text classification with NLTK + Flask.</div>
                </div>
              </div>
            </div>

          </div>

          {/* Social Profiles Grid */}
          <div className="pt-4 space-y-3">
            <span className="text-xs font-mono uppercase text-slate-400 font-semibold block">
              Professional Profiles & Code Repositories:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={PORTFOLIO_DATA.personal.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold text-white">GitHub</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-blue-500/40 flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-bold text-white">LinkedIn</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 transition-colors" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/40 flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-extrabold text-amber-400 font-mono">LC</span>
                  <span className="text-xs font-bold text-white">LeetCode</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Dynamic Scannable QR Code & Recruiter Portal */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-5">
              <div className="p-1 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-500 shadow-lg shadow-cyan-500/20">
                <QRCodeSVG
                  size={105}
                  url={PORTFOLIO_DATA.personal.socialLinks.github}
                  darkColor="#090d16"
                  lightColor="#ffffff"
                />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-bold text-white">Scan for GitHub & Open Source</span>
                </div>
                <div className="text-xs text-cyan-400 font-mono">github.com/prasad1271</div>
                <p className="text-[11px] text-slate-400 max-w-sm leading-normal">
                  Point your phone camera at this verified QR code to open developer profile, PDD medical vision repository, and projects instantly.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Verified Candidate • CGPA 8.96 • SIMATS CSE</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};



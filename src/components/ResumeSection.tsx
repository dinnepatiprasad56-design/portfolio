"use client";

import React from "react";
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
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { QRCodeSVG } from "./ui/QRCodeSVG";

export const ResumeSection: React.FC = () => {
  const handleDownload = () => {
    // Generate a printable HTML resume window if standard file isn't uploaded
    const resumeWindow = window.open("", "_blank");
    if (resumeWindow) {
      resumeWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>${PORTFOLIO_DATA.personal.name} - Resume</title>
          <style>
            body { font-family: sans-serif; margin: 40px; color: #1e293b; line-height: 1.5; }
            h1 { color: #0f172a; margin-bottom: 4px; }
            .subtitle { color: #2563eb; font-weight: bold; font-size: 14px; margin-bottom: 16px; }
            .section-title { font-size: 16px; font-weight: bold; border-bottom: 2px solid #2563eb; padding-bottom: 4px; margin-top: 24px; color: #0f172a; }
            ul { margin-top: 8px; padding-left: 20px; }
            li { margin-bottom: 4px; }
            .contact-info { font-size: 12px; color: #64748b; margin-bottom: 20px; }
          </style>
        </head>
        <body>
          <h1>${PORTFOLIO_DATA.personal.name}</h1>
          <div class="subtitle">Software Engineer | Android Developer | AI & Cloud Specialist</div>
          <div class="contact-info">
            Chennai, India | +91 7285931308 | dinnipatiprasad@gmail.com | LinkedIn: linkedin.com/in/siddhu1234567890 | GitHub: github.com/prasad1271 | LeetCode: leetcode.com/u/D_Sidhu_prasad/
          </div>
          <div class="section-title">PROFILE & VALUE PROPOSITION</div>
          <p>${PORTFOLIO_DATA.personal.bio}</p>
          <div class="section-title">EDUCATION</div>
          <p><strong>Bachelor of Engineering (B.E) - CSE</strong> (2023-2027) - SIMATS Engineering (Saveetha University), Chennai - CGPA: 8.96</p>
          <p><strong>Intermediate (Class XII)</strong> (2023) - SR Jr College, Tirupati - 90.1%</p>
          <p><strong>Secondary School (Class X)</strong> (2021) - Vasishta High School, TSundupalli - 98.6%</p>
          <div class="section-title">TECHNICAL SKILLS</div>
          <p>Python, Java, Kotlin, Jetpack Compose, C++, SQL, FastAPI, PyTorch U-Net, MONAI, OpenCV, AWS Lex, AWS S3, Docker, Git</p>
          <div class="section-title">FLAGSHIP HERO PROJECT</div>
          <p><strong>PDD: Research-Grade 3D Medical Segmentation Platform</strong></p>
          <ul>
            <li>Kotlin Android App + FastAPI PyTorch U-Net segmentation microservice.</li>
            <li>Deterministic SHA-256 data lineage reports (report.json), Dice 0.89 score, 2.05s Cloud Run GPU latency.</li>
          </ul>
          <div class="section-title">EXPERIENCE</div>
          <p><strong>Cloud Computing Intern</strong> - Corizo EduTech (Nov 2025 - Jan 2026)</p>
          <ul>
            <li>AWS Lex Chatbot (Major Project): Autonomous conversational agent.</li>
            <li>AWS S3 Cloud Storage & IAM (Minor Project): Secure cloud access control.</li>
          </ul>
          <p><strong>Artificial Intelligence Intern</strong> - Corizo EduTech (Aug 2025 - Nov 2025)</p>
          <ul>
            <li>Cardiac Attack Prediction (Major Project): ML classification model with 94.2% accuracy.</li>
            <li>Spotify Project (Minor Project): Audio feature trends visualization.</li>
          </ul>
          <script>window.print();</script>
        </body>
        </html>
      `);
      resumeWindow.document.close();
    }
  };

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
            <span>Curriculum Vitae & Credentials</span>
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
            Download official resume and connect via digital developer profiles & portfolio QR integration.
          </motion.p>
        </div>

        {/* Resume Card Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 max-w-4xl mx-auto space-y-8 bg-gradient-to-b from-slate-900/90 to-slate-950"
        >
          {/* Top Bar with Download */}
          <div className="flex flex-wrap items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-lg">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{PORTFOLIO_DATA.personal.name}</h3>
                <p className="text-xs text-cyan-400 font-mono mt-0.5">
                  B.E Computer Science • CGPA 8.96 • SIMATS Engineering
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleDownload}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </button>
            </div>
          </div>

          {/* Quick Resume Sections Snapshot */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Education & Academic Record */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-cyan-400 font-mono">
                <GraduationCap className="w-4 h-4" />
                <span>EDUCATION HIGHLIGHTS</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="flex justify-between items-start text-xs">
                  <span className="font-bold text-white">B.E Computer Science</span>
                  <span className="font-mono text-cyan-400">8.96 CGPA</span>
                </div>
                <div className="text-[11px] text-slate-400">SIMATS Engineering (Saveetha University)</div>
                <div className="text-[10px] text-slate-500 font-mono">2023 - 2027 • Chennai</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1">
                <div className="flex justify-between items-start text-xs">
                  <span className="font-bold text-white">Class XII (Intermediate)</span>
                  <span className="font-mono text-cyan-400">90.1%</span>
                </div>
                <div className="text-[11px] text-slate-400">SR Jr College, Tirupati</div>
              </div>
            </div>

            {/* Internships & Credential Links */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-blue-400 font-mono">
                <Briefcase className="w-4 h-4" />
                <span>INTERNSHIPS & DEPLOYMENTS</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1">
                <div className="text-xs font-bold text-white">Cloud Computing Intern</div>
                <div className="text-[11px] text-cyan-400">Corizo EduTech (Nov 2025 - Jan 2026)</div>
                <div className="text-[10px] text-slate-400">AWS Lex Chatbot & S3 Storage IAM Policies</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1">
                <div className="text-xs font-bold text-white">AI Intern</div>
                <div className="text-[11px] text-cyan-400">Corizo EduTech (Aug 2025 - Nov 2025)</div>
                <div className="text-[10px] text-slate-400">Cardiac Attack ML Prediction & Spotify Analytics</div>
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

          {/* QR Code & Scan Section */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <QRCodeSVG size={100} url={PORTFOLIO_DATA.personal.socialLinks.github} />
              <div>
                <div className="text-sm font-bold text-white">Scan for Digital Portfolio</div>
                <div className="text-xs text-cyan-400 font-mono mt-0.5">github.com/prasad1271</div>
                <p className="text-[11px] text-slate-400 mt-1 max-w-xs leading-normal">
                  QR Code links directly to live interactive portfolio & open-source PDD repository.
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


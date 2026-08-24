"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  FileText,
  Github,
  ExternalLink,
  Brain,
  Layers,
  Cpu,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ProjectGraphic } from "./ui/ProjectGraphic";
import { CaseStudyModal } from "./CaseStudyModal";

export const FeaturedProjectSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const project = PORTFOLIO_DATA.featuredProject;

  return (
    <section id="featured-project" className="py-24 relative overflow-hidden bg-slate-950/80">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-10 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag & Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Hero Project</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Medical AI & 3D Neural <span className="text-gradient-primary">Segmentation System</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed"
          >
            Autonomous deep learning pipeline designed to map the 3D Inferior Alveolar Nerve from CBCT dental volumes to prevent surgical paresthesia.
          </motion.p>
        </div>

        {/* Featured Card Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-6 sm:p-10 rounded-3xl border border-blue-500/30 bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-900/90 shadow-2xl relative overflow-hidden group"
        >
          {/* Subtle top badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold font-mono bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20">
                {project.badge}
              </span>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">
                • MONAI Framework • Cloud Run • Android SDK
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-emerald-400 font-mono">Production Ready</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Graphic Representation */}
            <div className="lg:col-span-6">
              <div className="relative group/graphic rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <ProjectGraphic id={project.id} className="w-full h-full min-h-[320px]" />
                
                {/* Floating Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-950/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-medium">3D CBCT Volumetric Neural Mesh</span>
                  <span className="text-cyan-400 font-bold font-mono">Dice: 91.4%</span>
                </div>
              </div>
            </div>

            {/* Description & Interactive Actions */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-semibold text-cyan-400/90 mt-2 font-mono">
                  {project.tagline}
                </p>
                <p className="text-slate-300 text-sm leading-relaxed mt-4">
                  {project.description}
                </p>
              </div>

              {/* Technologies Badges */}
              <div className="space-y-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 block">
                  Technologies Deployed
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-900 text-slate-300 border border-white/10 hover:border-cyan-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-xs shadow-xl shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Interactive Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs border border-slate-700 hover:border-blue-500/50 transition-all flex items-center gap-2"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub</span>
                </a>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs border border-slate-700 hover:border-cyan-500/50 transition-all flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4 text-blue-400" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Case Study Full Interactive Modal */}
      <CaseStudyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

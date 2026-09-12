"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Smartphone,
  Lock,
  HardDrive,
  Cloud,
  Server,
  Layers,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Github,
  ExternalLink,
  ShieldAlert,
  Cpu,
  Activity,
  Zap,
  Maximize2,
  X,
  FileCode,
  Check,
  ChevronRight,
  Award,
} from "lucide-react";
import { getAssetPath } from "@/utils/paths";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import Image from "next/image";

export const PDDHeroCaseStudy: React.FC = () => {
  const project = PORTFOLIO_DATA.featuredProject;
  const caseStudy = project.caseStudy;

  const [activeTab, setActiveTab] = useState<
    "overview" | "screenshots" | "architecture" | "pipeline" | "challenges"
  >("overview");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState<number>(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Smartphone":
        return <Smartphone className="w-5 h-5" />;
      case "Lock":
        return <Lock className="w-5 h-5" />;
      case "HardDrive":
        return <HardDrive className="w-5 h-5" />;
      case "Cloud":
        return <Cloud className="w-5 h-5" />;
      case "Server":
        return <Server className="w-5 h-5" />;
      case "Brain":
        return <Brain className="w-5 h-5" />;
      case "Layers":
        return <Layers className="w-5 h-5" />;
      case "Activity":
        return <Activity className="w-5 h-5" />;
      case "Zap":
        return <Zap className="w-5 h-5" />;
      default:
        return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="pdd-hero-case-study" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Flagship Hero Header Badge */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-cyan-500/40 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-6 shadow-xl shadow-cyan-500/10"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>{project.badge}</span>
            <Sparkles className="w-4 h-4 text-amber-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight"
          >
            {project.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-slate-300 text-base sm:text-xl font-mono text-cyan-400 font-medium max-w-3xl mx-auto leading-relaxed"
          >
            {project.tagline}
          </motion.p>
        </div>

        {/* Measurable Outcomes Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {caseStudy.measurableOutcomes.map((outcome, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all bg-slate-900/60 flex flex-col justify-between group"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 group-hover:scale-110 transition-transform">
                  {getIcon(outcome.icon)}
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                  {outcome.title}
                </h4>
              </div>
              <p className="text-[11px] sm:text-xs text-slate-400 leading-normal mt-1">
                {outcome.detail}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Main PDD Interactive Container */}
        <div className="glass-panel rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-slate-900/95 via-slate-950 to-slate-900/95 shadow-2xl overflow-hidden">
          
          {/* Navigation Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/90 px-6 overflow-x-auto">
            <div className="flex gap-2">
              {[
                { id: "overview", label: "Clinical Problem & Solution" },
                { id: "screenshots", label: "Real Screenshots (11)" },
                { id: "architecture", label: "System Architecture" },
                { id: "pipeline", label: "PyTorch U-Net AI Pipeline" },
                { id: "challenges", label: "Challenges & Lessons Learned" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 px-4 text-xs font-bold border-b-2 transition-all whitespace-nowrap flex items-center gap-2 ${
                    activeTab === tab.id
                      ? "border-cyan-400 text-cyan-400 bg-cyan-500/10"
                      : "border-transparent text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3 py-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700 flex items-center gap-2 transition-all"
              >
                <Github className="w-3.5 h-3.5 text-cyan-400" />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>

          {/* Section Body */}
          <div className="p-6 sm:p-10 space-y-10">
            
            {/* TAB 1: OVERVIEW */}
            {activeTab === "overview" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
                {/* Hero Feature Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/30">
                      <Brain className="w-3.5 h-3.5" />
                      <span>Research-Grade Medical Computer Vision</span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-snug">
                      {caseStudy.subtitle}
                    </h3>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {caseStudy.overview}
                    </p>

                    {/* Validated Metrics Row */}
                    <div className="grid grid-cols-3 gap-4 pt-2">
                      {caseStudy.results.map((res, i) => (
                        <div key={i} className="glass-panel p-4 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 text-center">
                          <div className="text-2xl sm:text-3xl font-black text-cyan-400">{res.value}</div>
                          <div className="text-xs font-bold text-white mt-1">{res.metric}</div>
                          <div className="text-[10px] text-slate-400 mt-0.5">{res.detail}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Showcase Media */}
                  <div className="lg:col-span-5 relative group">
                    <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl">
                      <Image
                        src={getAssetPath(project.image)}
                        alt="PDD 3D Nerve Segmentation Result"
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold text-white">3D Mandibular Mesh Reconstruction</div>
                          <div className="text-[10px] text-cyan-400 font-mono">Dice Score: 0.89 • Latency: 2.05s</div>
                        </div>
                        <button
                          onClick={() => setSelectedImage(getAssetPath(project.image))}
                          className="p-2 rounded-lg bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/40 transition-colors"
                        >
                          <Maximize2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Problem vs Motivation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="glass-panel p-7 rounded-2xl border border-rose-500/30 bg-rose-500/5 space-y-3">
                    <div className="flex items-center gap-2.5 text-rose-400 font-bold text-base">
                      <ShieldAlert className="w-5 h-5" />
                      <span>Clinical Problem Statement</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {caseStudy.problemStatement}
                    </p>
                  </div>

                  <div className="glass-panel p-7 rounded-2xl border border-cyan-500/30 bg-cyan-500/5 space-y-3">
                    <div className="flex items-center gap-2.5 text-cyan-400 font-bold text-base">
                      <Sparkles className="w-5 h-5" />
                      <span>Engineering Motivation & Lineage</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {caseStudy.motivation}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Grid */}
                <div className="space-y-4">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-cyan-400" />
                    <span>Technology Stack Specification</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {caseStudy.techStack.map((stack, i) => (
                      <div key={i} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
                        <span className="text-xs font-bold text-cyan-400 font-mono uppercase block border-b border-slate-800 pb-2">
                          {stack.category}
                        </span>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {stack.items.map((item) => (
                            <span key={item} className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-950 text-slate-300 border border-white/5">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: SCREENSHOTS */}
            {activeTab === "screenshots" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white">Full Application Screenshots & Mockups</h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Click any screenshot to view full resolution with technical annotations.
                  </p>
                </div>

                {/* Main Featured Screenshot Previewer */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 relative group">
                    <div className="relative rounded-2xl overflow-hidden border border-cyan-500/40 shadow-2xl bg-slate-950">
                      <Image
                        src={getAssetPath(caseStudy.screenshots[activeScreenshotIdx].image)}
                        alt={caseStudy.screenshots[activeScreenshotIdx].title}
                        width={900}
                        height={600}
                        className="w-full h-auto max-h-[500px] object-contain mx-auto"
                      />
                      <button
                        onClick={() => setSelectedImage(getAssetPath(caseStudy.screenshots[activeScreenshotIdx].image))}
                        className="absolute top-4 right-4 p-3 rounded-full bg-slate-950/80 text-cyan-400 hover:text-white border border-cyan-500/30 transition-all hover:scale-110"
                        title="View Full Resolution"
                      >
                        <Maximize2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-4 space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 inline-block">
                        {caseStudy.screenshots[activeScreenshotIdx].category}
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono">
                        {activeScreenshotIdx + 1} of {caseStudy.screenshots.length}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-white">
                      {caseStudy.screenshots[activeScreenshotIdx].title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed p-4 rounded-xl bg-slate-900 border border-slate-800">
                      {caseStudy.screenshots[activeScreenshotIdx].caption}
                    </p>

                    {caseStudy.screenshots[activeScreenshotIdx].driveUrl && (
                      <a
                        href={caseStudy.screenshots[activeScreenshotIdx].driveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 hover:text-cyan-300 text-xs font-semibold border border-cyan-500/30 transition-all hover:scale-105"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>View in Google Drive</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Thumbnail Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {caseStudy.screenshots.map((s, idx) => (
                    <button
                      key={s.id}
                      onClick={() => setActiveScreenshotIdx(idx)}
                      className={`relative rounded-xl overflow-hidden border transition-all text-left group ${
                        activeScreenshotIdx === idx
                          ? "border-cyan-400 ring-2 ring-cyan-400/40 scale-105"
                          : "border-slate-800 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={getAssetPath(s.image)}
                        alt={s.title}
                        width={200}
                        height={140}
                        className="w-full h-20 object-cover"
                      />
                      <div className="p-2 bg-slate-950/90 text-[10px] font-bold text-slate-300 truncate">
                        {s.title}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* TAB 3: ARCHITECTURE */}
            {activeTab === "architecture" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white">System Architecture & Service Flow</h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Android Client App ── Firebase Auth ── Firebase Storage ── Cloud Run ── FastAPI Backend ── PyTorch U-Net ── Data Lineage ── Firestore Realtime ── Android Results
                  </p>
                </div>

                {/* Architecture Node Visual Diagram Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {caseStudy.architectureDiagram.nodes.map((node, i) => (
                    <div
                      key={node.id}
                      className="glass-panel p-6 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-slate-900 to-slate-950 space-y-3 relative group hover:border-cyan-400/60 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <span className="w-8 h-8 rounded-xl bg-cyan-500/10 text-cyan-400 font-mono font-bold text-xs flex items-center justify-center border border-cyan-500/30">
                          {node.id}
                        </span>
                        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                          {node.tech}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-slate-900 text-cyan-400 border border-slate-800">
                          {getIcon(node.icon)}
                        </div>
                        <h4 className="text-base font-bold text-white">{node.label}</h4>
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed">
                        {node.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Workflow Sequence */}
                <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4 bg-slate-950/60">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    <span>8-Stage Automated Execution Workflow</span>
                  </h4>
                  <div className="space-y-3">
                    {caseStudy.workflow.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                        <span className="w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-400 font-mono font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5 border border-cyan-500/20">
                          {idx + 1}
                        </span>
                        <span className="leading-relaxed mt-0.5">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 4: AI PIPELINE */}
            {activeTab === "pipeline" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white">6-Stage PyTorch U-Net Medical AI Pipeline</h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Deterministic 3D Volumetric Segmentation & Data Lineage Generation
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {caseStudy.aiPipeline.map((stage) => (
                    <div
                      key={stage.step}
                      className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all flex flex-col justify-between space-y-4"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-400 text-xs font-mono font-bold border border-cyan-500/30">
                            Stage {stage.step}
                          </span>
                          <Cpu className="w-4 h-4 text-slate-500" />
                        </div>
                        <h4 className="text-lg font-bold text-white">{stage.title}</h4>
                        <p className="text-xs font-semibold text-slate-300 mt-1">{stage.description}</p>
                      </div>

                      <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 leading-relaxed">
                        {stage.details}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* TAB 5: CHALLENGES */}
            {activeTab === "challenges" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white">Engineering Challenges & Technical Lessons Learned</h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Overcoming memory overhead, transient network failures, and deterministic reproducibility limits.
                  </p>
                </div>

                {/* Challenges & Solutions */}
                <div className="space-y-5">
                  {caseStudy.challenges.map((item, idx) => (
                    <div key={idx} className="glass-panel p-7 rounded-2xl border border-white/10 space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="px-3 py-1 rounded bg-rose-500/20 text-rose-400 text-xs font-bold uppercase font-mono">
                          Challenge {idx + 1}
                        </span>
                        <p className="text-sm sm:text-base font-semibold text-slate-200">{item.problem}</p>
                      </div>
                      <div className="pl-4 border-l-2 border-cyan-400 text-xs sm:text-sm text-cyan-300">
                        <span className="font-bold uppercase font-mono text-[10px] block text-cyan-400 mb-1">
                          Solution Implemented:
                        </span>
                        {item.solution}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Lessons Learned */}
                <div className="glass-panel p-7 rounded-2xl border border-cyan-500/30 bg-cyan-500/5 space-y-4">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                    <Award className="w-4 h-4 text-cyan-400" />
                    <span>Key Lessons Learned in Production Medical AI</span>
                  </h4>
                  <ul className="space-y-3">
                    {caseStudy.lessonsLearned.map((lesson, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Future Roadmap */}
                <div className="glass-panel p-7 rounded-2xl border border-blue-500/30 bg-blue-500/5 space-y-4">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    <span>Future Clinical Roadmap</span>
                  </h4>
                  <ul className="space-y-2">
                    {caseStudy.futureScope.map((scope, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-slate-300">
                        <ChevronRight className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span>{scope}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}

          </div>

          {/* Card Footer */}
          <div className="px-8 py-5 border-t border-slate-800 bg-slate-950 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-slate-300 font-mono">
                Production-Tested Platform • SHA-256 Verified Lineage
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>Explore Code on GitHub</span>
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-slate-950/90 backdrop-blur-2xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-6xl max-h-[90vh] bg-slate-900 border border-cyan-500/40 rounded-3xl overflow-hidden shadow-2xl p-4 z-10"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-slate-950/80 text-slate-400 hover:text-white border border-slate-800 transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>
              <Image
                src={selectedImage}
                alt="Enlarged PDD Screenshot"
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
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
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ProjectGraphic } from "./ui/ProjectGraphic";

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ isOpen, onClose }) => {
  const caseStudy = PORTFOLIO_DATA.featuredProject.caseStudy;
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "pipeline" | "challenges">("overview");

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10 my-auto"
        >
          {/* Top Header Bar */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-slate-950/80">
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                <Brain className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  Detailed Case Study: 3D IAN AI Segmentation
                </h3>
                <p className="text-xs text-cyan-400 font-mono">
                  MONAI • Cloud Run • FastAPI • Android
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Navigation Tabs */}
          <div className="flex border-b border-slate-800 bg-slate-950/40 px-6 gap-2 overflow-x-auto">
            {[
              { id: "overview", label: "Overview & Impact" },
              { id: "architecture", label: "Architecture Diagram" },
              { id: "pipeline", label: "AI Pipeline (6 Steps)" },
              { id: "challenges", label: "Challenges & Results" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3 px-4 text-xs font-semibold border-b-2 transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-cyan-400 text-cyan-400 bg-cyan-500/5"
                    : "border-transparent text-slate-400 hover:text-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Modal Body Scroll Area */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
            
            {/* TAB 1: OVERVIEW */}
            {activeTab === "overview" && (
              <div className="space-y-8">
                {/* Hero Visual Banner */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6 space-y-4">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 inline-block">
                      Maxillofacial Dental AI Research
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                      {caseStudy.title}
                    </h2>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {caseStudy.overview}
                    </p>
                  </div>
                  <div className="md:col-span-6">
                    <ProjectGraphic id="inferior-alveolar-nerve-3d" />
                  </div>
                </div>

                {/* Problem vs Motivation Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="glass-panel p-6 rounded-2xl border border-rose-500/20 bg-rose-500/5 space-y-3">
                    <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
                      <ShieldAlert className="w-4 h-4" />
                      <span>Problem Statement</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {caseStudy.problemStatement}
                    </p>
                  </div>

                  <div className="glass-panel p-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 space-y-3">
                    <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                      <Sparkles className="w-4 h-4" />
                      <span>Project Motivation</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {caseStudy.motivation}
                    </p>
                  </div>
                </div>

                {/* Quantitative Results Highlights */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                    Validated Performance Metrics
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {caseStudy.results.map((res, i) => (
                      <div key={i} className="glass-panel p-4 rounded-xl border border-white/10 text-center">
                        <div className="text-2xl font-black text-cyan-400">{res.value}</div>
                        <div className="text-xs font-semibold text-white mt-1">{res.metric}</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">{res.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: ARCHITECTURE DIAGRAM */}
            {activeTab === "architecture" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">System Architecture & Service Flow</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Android Client → Firebase Cloud Services → Cloud Run Containerized MONAI Engine
                  </p>
                </div>

                {/* Visual Architecture Flow Cards */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {caseStudy.architectureDiagram.nodes.slice(0, 4).map((node, i) => (
                      <div key={node.id} className="glass-panel p-4 rounded-xl border border-blue-500/30 bg-blue-500/5 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                              {node.id}
                            </span>
                            <span className="text-[10px] text-blue-400 font-mono uppercase">Node</span>
                          </div>
                          <h4 className="text-sm font-bold text-white">{node.label}</h4>
                          <p className="text-[11px] text-slate-400 mt-1">{node.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex items-center justify-center py-2">
                    <div className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono flex items-center gap-2">
                      <span>Serverless Async Processing Pipeline</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {caseStudy.architectureDiagram.nodes.slice(4, 8).map((node, i) => (
                      <div key={node.id} className="glass-panel p-4 rounded-xl border border-cyan-500/30 bg-cyan-500/5 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="w-6 h-6 rounded-full bg-cyan-500 text-slate-950 text-xs font-bold flex items-center justify-center">
                              {node.id}
                            </span>
                            <span className="text-[10px] text-cyan-400 font-mono uppercase">Node</span>
                          </div>
                          <h4 className="text-sm font-bold text-white">{node.label}</h4>
                          <p className="text-[11px] text-slate-400 mt-1">{node.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Workflow steps */}
                <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                    Execution Workflow
                  </h4>
                  <ul className="space-y-2">
                    {caseStudy.workflow.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* TAB 3: AI PIPELINE */}
            {activeTab === "pipeline" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">6-Stage Medical AI Segmentation Pipeline</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    End-to-End MONAI 3D Deep Neural Processing
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {caseStudy.aiPipeline.map((stage) => (
                    <div key={stage.step} className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 text-xs font-mono font-bold border border-cyan-500/20">
                            Stage {stage.step}
                          </span>
                          <Cpu className="w-4 h-4 text-slate-500" />
                        </div>
                        <h4 className="text-base font-bold text-white">{stage.title}</h4>
                        <p className="text-xs font-medium text-slate-300 mt-1">{stage.description}</p>
                        <p className="text-[11px] text-slate-400 mt-2 pt-2 border-t border-slate-800">
                          {stage.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: CHALLENGES & RESULTS */}
            {activeTab === "challenges" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white">Engineering Challenges & Solutions</h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Overcoming 3D CBCT volume memory limits & anatomical variations
                  </p>
                </div>

                <div className="space-y-4">
                  {caseStudy.challenges.map((item, idx) => (
                    <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="px-2.5 py-1 rounded bg-rose-500/20 text-rose-400 text-xs font-bold uppercase font-mono">
                          Challenge {idx + 1}
                        </span>
                        <p className="text-sm font-semibold text-slate-200">{item.problem}</p>
                      </div>
                      <div className="pl-4 border-l-2 border-cyan-400 text-xs sm:text-sm text-cyan-300">
                        <span className="font-bold uppercase font-mono text-[10px] block text-cyan-400 mb-1">
                          Solution Applied:
                        </span>
                        {item.solution}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Future Scope */}
                <div className="glass-panel p-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 space-y-3">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                    Future Roadmap & Clinical Enhancements
                  </h4>
                  <ul className="space-y-2">
                    {caseStudy.futureScope.map((scope, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Sparkles className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{scope}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

          </div>

          {/* Footer Bar */}
          <div className="px-6 py-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between">
            <a
              href={PORTFOLIO_DATA.featuredProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white"
            >
              <Github className="w-4 h-4 text-cyan-400" />
              <span>View Source Code on GitHub</span>
            </a>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-xs shadow-lg"
            >
              Close Case Study
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

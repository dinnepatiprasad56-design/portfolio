"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Cloud,
  Brain,
  GraduationCap,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>("corizo-cloud-intern");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950/80">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Internship Experience & <span className="text-gradient-primary">Industry Achievements</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed"
          >
            Practical engineering experience delivering machine learning models, cloud automation services, and secure software applications.
          </motion.p>
        </div>

        {/* Animated Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Central Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-500 to-slate-800 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {PORTFOLIO_DATA.experience.map((exp, index) => {
              const isEven = index % 2 === 0;
              const isExpanded = expandedId === exp.id;
              const Icon = exp.id.includes("cloud") ? Cloud : Brain;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-lg shadow-cyan-500/30 flex items-center justify-center z-10 mb-4 sm:mb-0">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>

                  {/* Experience Card */}
                  <div className={`w-full sm:w-[calc(50%-2.5rem)] ${isEven ? "sm:pr-0" : "sm:pl-0"}`}>
                    <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 shadow-xl space-y-4">
                      
                      {/* Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          {exp.type}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <p className="text-sm font-medium text-cyan-400 mt-0.5">{exp.company}</p>
                        <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          {exp.location}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Expand Toggle */}
                      <button
                        onClick={() => toggleExpand(exp.id)}
                        className="w-full flex items-center justify-between pt-3 border-t border-slate-800 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span>{isExpanded ? "Hide Details" : "View Key Deliverables & Projects"}</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>

                      {/* Expandable Content */}
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-4 pt-2"
                        >
                          <div className="space-y-2">
                            <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block">
                              Key Highlights:
                            </span>
                            {exp.highlights.map((h, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                                <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                                <span>{h}</span>
                              </div>
                            ))}
                          </div>

                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {exp.skills.map((s) => (
                              <span
                                key={s}
                                className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-slate-900 text-slate-400 border border-slate-800"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Education Highlight Cards Below */}
        <div className="mt-20 pt-16 border-t border-slate-800/80">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
              <GraduationCap className="w-6 h-6 text-cyan-400" />
              <span>Academic Background</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono font-bold border border-cyan-500/20">
                      {edu.scoreType}: {edu.score}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">{edu.period}</span>
                  </div>
                  <h4 className="text-base font-bold text-white leading-tight">{edu.degree}</h4>
                  <p className="text-xs text-cyan-400 font-semibold mt-1">{edu.institution}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{edu.location}</p>
                </div>

                <ul className="mt-4 pt-4 border-t border-slate-800 space-y-1.5">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="text-[11px] text-slate-300 flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1 flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

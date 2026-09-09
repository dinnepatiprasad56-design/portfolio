"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Server,
  Cloud,
  BrainCircuit,
  Terminal,
  Layers,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { PORTFOLIO_DATA, SkillCategory } from "@/data/portfolioData";

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...PORTFOLIO_DATA.skills.map((s) => s.category)];

  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case "Programming":
        return Code2;
      case "Android & Mobile":
        return Smartphone;
      case "Backend Engineering":
        return Server;
      case "Cloud Infrastructure":
        return Cloud;
      case "AI & Medical Vision":
        return BrainCircuit;
      case "Dev Tools & OS":
        return Terminal;
      default:
        return Layers;
    }
  };

  const filteredSkillCategories =
    selectedCategory === "All"
      ? PORTFOLIO_DATA.skills
      : PORTFOLIO_DATA.skills.filter((s) => s.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background Accent Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Core Tech Stack & <span className="text-gradient-accent">Specialized Expertise</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed"
          >
            Full-stack engineering proficiency spanning high-performance mobile clients, serverless cloud backends, and state-of-the-art medical AI architectures.
          </motion.p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25 scale-105"
                    : "glass-panel text-slate-400 hover:text-white hover:bg-slate-900 border-white/5"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkillCategories.map((group, groupIdx) => {
            const CategoryIcon = getCategoryIcon(group.category);
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: groupIdx * 0.08 }}
                className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600/30 to-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{group.category}</h3>
                      <p className="text-xs text-slate-400 font-mono">
                        {group.skills.length} Core Technologies
                      </p>
                    </div>
                  </div>

                  {/* Skills List - Interactive Technology Data-Flow */}
                  <div className="space-y-3 sm:space-y-3.5">
                    {group.skills.map((skill, skillIdx) => {
                      const duration = (3.2 + ((groupIdx * 3 + skillIdx) % 4) * 0.35).toFixed(2);
                      const delay = (((groupIdx * 0.4 + skillIdx * 0.65)) % 2.5).toFixed(2);

                      return (
                        <div
                          key={skill.name}
                          className="group flex items-center justify-between gap-3 sm:gap-4 py-1 transition-colors cursor-default"
                        >
                          {/* Technology Name & Leading Indicator */}
                          <div className="flex items-center gap-2 min-w-[130px] sm:min-w-[165px] shrink-0">
                            {skill.highlighted ? (
                              <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:text-cyan-300" />
                            ) : (
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-700 transition-colors duration-300 group-hover:bg-cyan-400/70 shrink-0" />
                            )}
                            <span className="text-xs sm:text-sm font-medium text-slate-300 transition-colors duration-300 group-hover:text-white">
                              {skill.name}
                            </span>
                          </div>

                          {/* Decorative Technology Motion Line */}
                          <div className="relative flex-1 flex items-center h-4 min-w-[60px]">
                            {/* Base Track */}
                            <div className="tech-signal-line">
                              {/* Traveling Soft Cyan Scanning Shimmer */}
                              <div
                                className="tech-signal-shimmer"
                                style={{
                                  animationDelay: `${delay}s`,
                                  animationDuration: `${duration}s`,
                                }}
                              />
                            </div>

                            {/* Moving Cyan Glowing Particle */}
                            <div
                              className="tech-signal-particle"
                              style={{
                                animationDelay: `${delay}s`,
                                animationDuration: `${duration}s`,
                              }}
                            >
                              <span className="tech-signal-dot" />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Production Ready</span>
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

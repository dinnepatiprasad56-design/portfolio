"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FolderGit2, Github, ExternalLink, Sparkles, Filter } from "lucide-react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import { ProjectGraphic } from "./ui/ProjectGraphic";

export const OtherProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "AI / ML", "Cloud", "Security", "Web"];

  const filteredProjects =
    selectedCategory === "All"
      ? PORTFOLIO_DATA.otherProjects
      : PORTFOLIO_DATA.otherProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Engineering Showcase</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Innovative Projects & <span className="text-gradient-accent">Software Solutions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed"
          >
            Explore real-world software applications built across computer vision, cloud computing, machine learning, and cybersecurity.
          </motion.p>
        </div>

        {/* Filter Buttons */}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass-panel rounded-3xl border border-white/10 overflow-hidden hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Graphic Header */}
                <div className="relative overflow-hidden">
                  <ProjectGraphic id={project.id} className="w-full" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-cyan-400 text-[10px] font-mono font-bold">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metrics Pills if available */}
                  {project.metrics && (
                    <div className="flex items-center gap-3 pt-2">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/5 text-[11px]">
                          <span className="text-slate-400 font-mono">{m.label}: </span>
                          <span className="text-cyan-400 font-bold">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-slate-900 text-slate-400 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="p-6 pt-0 border-t border-slate-800/60 mt-4 flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>View Repository</span>
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
                  aria-label="External Link"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

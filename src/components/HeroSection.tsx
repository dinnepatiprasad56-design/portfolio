"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Download,
  FolderGit2,
  Github,
  Linkedin,
  ArrowDown,
  Sparkles,
  Award,
  GraduationCap,
  Brain,
  Code,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const HeroSection: React.FC = () => {
  const roles = PORTFOLIO_DATA.personal.roles;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  const scrollTo = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Animated Gradient Mesh */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      
      {/* Background Floating Glass Orbs */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/15 rounded-full filter blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{
          y: [0, 25, 0],
          x: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/15 rounded-full filter blur-[100px] pointer-events-none"
      />

      {/* Grid Pattern Layer */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="flex flex-col items-center text-center">
          
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 mb-8 shadow-lg shadow-cyan-500/10"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide uppercase">
              B.E CSE • CGPA 8.96 • Open for Opportunities
            </span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
          </motion.div>

          {/* Main Name Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl"
          >
            <span className="block text-slate-300 text-lg sm:text-2xl font-mono font-medium mb-2 text-cyan-400">
              Hello, I am
            </span>
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              {PORTFOLIO_DATA.personal.name}
            </span>
          </motion.h1>

          {/* Dynamic Typing Roles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-16 sm:h-20 flex items-center justify-center mt-4"
          >
            <div className="text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 flex items-center font-mono">
              <span>{displayedText}</span>
              <span className="w-1 h-8 sm:h-10 bg-cyan-400 ml-1 animate-pulse" />
            </div>
          </motion.div>

          {/* Subtitle / Value Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 text-lg sm:text-2xl text-cyan-300 font-semibold max-w-3xl leading-relaxed bg-slate-900/60 p-4 rounded-2xl border border-cyan-500/20 shadow-lg"
          >
            &ldquo;{PORTFOLIO_DATA.personal.subtitle}&rdquo;
          </motion.p>

          {/* Call To Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollTo("pdd-hero-case-study")}
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 text-white font-bold text-sm shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2.5"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Explore PDD Hero Case Study ⭐</span>
            </button>

            <a
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("resume");
              }}
              className="px-7 py-3.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700 hover:border-cyan-500/50 shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2.5"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download Resume</span>
            </a>

            <div className="flex items-center gap-2 ml-2">
              <a
                href={PORTFOLIO_DATA.personal.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 hover:border-blue-500/50 transition-all hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-blue-400 border border-slate-800 hover:border-blue-500/50 transition-all hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={PORTFOLIO_DATA.personal.socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-amber-400 border border-slate-800 hover:border-amber-500/50 transition-all hover:scale-110 font-bold text-xs flex items-center justify-center w-11 h-11"
                aria-label="LeetCode Profile"
              >
                <span>LC</span>
              </a>
            </div>
          </motion.div>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-4xl"
          >
            {PORTFOLIO_DATA.personal.quickStats.map((stat, index) => (
              <div
                key={index}
                className="glass-panel p-4 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all group"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-200 mt-1">{stat.label}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{stat.detail}</div>
              </div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-14 cursor-pointer"
            onClick={() => scrollTo("about")}
          >
            <div className="p-2 rounded-full border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors">
              <ArrowDown className="w-5 h-5" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

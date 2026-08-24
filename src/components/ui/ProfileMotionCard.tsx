"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { Sparkles, Brain, Award, ShieldCheck, Mail, Github, Linkedin, Phone } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface ProfileMotionCardProps {
  className?: string;
  showContactButtons?: boolean;
}

export const ProfileMotionCard: React.FC<ProfileMotionCardProps> = ({
  className = "",
  showContactButtons = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt animation hooks
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), {
    stiffness: 300,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), {
    stiffness: 300,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <div className={`relative perspective-1000 ${className}`}>
      {/* Background Animated Neon Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 -left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"
      />

      {/* 3D Motion Card Container */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/40 bg-gradient-to-b from-slate-900/95 via-slate-950 to-slate-900/95 shadow-2xl relative overflow-hidden group"
      >
        {/* Holographic Glowing Border Animation */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-600 to-teal-300 opacity-30 blur-md rounded-3xl pointer-events-none group-hover:opacity-70 transition-opacity"
        />

        {/* Top Header Badge */}
        <div className="relative z-10 flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400"></span>
            </span>
            <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider uppercase">
              DINNEPATI SINDHU PRASAD
            </span>
          </div>

          <div className="px-3 py-1 rounded-full text-[10px] font-bold font-mono bg-blue-500/10 text-blue-400 border border-blue-500/30">
            B.E CSE • 8.96 CGPA
          </div>
        </div>

        {/* Photo Container with Motion Mask */}
        <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-2xl bg-slate-950 group/photo">
          
          {/* Main Portrait Photo */}
          <div className="relative w-full h-[360px] sm:h-[420px] overflow-hidden">
            <Image
              src="/images/profile.jpg"
              alt="Dinnepati Sindhu Prasad - Software Engineer & AI Specialist"
              fill
              quality={95}
              priority
              className="object-cover object-center group-hover/photo:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Futuristic Tech Grid & Shimmer Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-85" />
            
            {/* Animated Laser Scanning Line */}
            <motion.div
              animate={{
                top: ["0%", "100%", "0%"],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70 pointer-events-none shadow-[0_0_15px_#06b6d4]"
            />
          </div>

          {/* Floating Interactive Badge Overlays */}


          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-16 right-4 p-2.5 rounded-xl bg-slate-950/90 backdrop-blur-md border border-blue-500/30 text-xs font-semibold text-white shadow-lg flex items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Placement Ready Candidate</span>
          </motion.div>

          {/* Photo Bottom Caption */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-slate-950/90 backdrop-blur-md border-t border-white/10 flex items-center justify-between">
            <div>
              <h4 className="text-sm font-bold text-white leading-tight">
                DINNEPATI SINDHU PRASAD
              </h4>
              <p className="text-[11px] text-cyan-400 font-mono mt-0.5">
                Software Engineer • Android & Cloud Specialist
              </p>
            </div>
            <Sparkles className="w-4 h-4 text-amber-400" />
          </div>
        </div>

        {/* Quick Contact & Action Buttons */}
        {showContactButtons && (
          <div className="relative z-10 pt-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xs shadow-lg shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Send Direct Email</span>
              </a>

              <a
                href="https://wa.me/917285931308"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-xs border border-slate-700 hover:border-cyan-500/40 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call / WhatsApp (+91 7285931308)</span>
              </a>
            </div>

            {/* Social Icons Strip */}
            <div className="flex items-center justify-center gap-3 pt-2">
              <a
                href={PORTFOLIO_DATA.personal.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 hover:border-blue-500/40 transition-all flex items-center gap-2 text-xs font-mono"
              >
                <Github className="w-4 h-4 text-cyan-400" />
                <span>GitHub</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-blue-400 border border-slate-800 hover:border-blue-500/40 transition-all flex items-center gap-2 text-xs font-mono"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  Brain,
  Smartphone,
  Cloud,
  Stethoscope,
  MapPin,
  Mail,
  Phone,
  Code2,
  CheckCircle2,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const AboutSection: React.FC = () => {
  const cards = [
    {
      icon: GraduationCap,
      title: "Computer Science Student",
      subtitle: "SIMATS Engineering (2023-2027)",
      description: "Saveetha University, Chennai",
      badge: "B.E Degree",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
    },
    {
      icon: Award,
      title: "CGPA 8.93",
      subtitle: "Top Tier Academic Record",
      description: "Consistent Excellence & Core CS Mastery",
      badge: "Distinction",
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-500/30",
    },
    {
      icon: Brain,
      title: "Artificial Intelligence",
      subtitle: "Deep Learning & Vision",
      description: "MONAI, PyTorch, YOLO & NLP",
      badge: "AI Specialist",
      color: "from-purple-500/20 to-indigo-500/20",
      borderColor: "border-purple-500/30",
    },
    {
      icon: Smartphone,
      title: "Android Development",
      subtitle: "Native Mobile Engineering",
      description: "Kotlin, Jetpack Compose, Flutter",
      badge: "Mobile Dev",
      color: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/30",
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      subtitle: "AWS & Serverless Microservices",
      description: "AWS Lex, S3, IAM, GCP Cloud Run",
      badge: "Cloud Infra",
      color: "from-amber-500/20 to-orange-500/20",
      borderColor: "border-amber-500/30",
    },
    {
      icon: Stethoscope,
      title: "Medical Imaging",
      subtitle: "Healthcare AI Innovation",
      description: "3D CBCT Mesh Segmentation",
      badge: "Research AI",
      color: "from-rose-500/20 to-pink-500/20",
      borderColor: "border-rose-500/30",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>About Me</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Engineering Intelligence with <span className="text-gradient-primary">Precision & Scale</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed"
          >
            Passionate Software Engineer dedicated to solving high-impact problems across Medical Artificial Intelligence, Native Android Development, and Cloud Systems.
          </motion.p>
        </div>

        {/* Profile + Biography Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Avatar Graphic Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-md">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 opacity-30 group-hover:opacity-75 blur-xl transition-all duration-500" />
              
              <div className="relative glass-panel rounded-3xl p-6 border border-white/10 overflow-hidden bg-slate-900/90 shadow-2xl">
                {/* SVG Avatar Graphic */}
                <div className="relative w-full h-80 rounded-2xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-6 border border-slate-800">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 p-1 shadow-xl shadow-cyan-500/20 mb-4">
                    <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-lg sm:text-xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                      DINNEPATI
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-wide">
                    DINNEPATI SINDHU PRASAD
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono mt-1">
                    Software & Cloud Engineer
                  </p>

                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      B.E CSE 2027
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      CGPA 8.93
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      Chennai, India
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    SIMATS Engineering
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                    dinnipatiprasad@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Profile Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <span>Professional Profile</span>
                <span className="h-px flex-1 bg-gradient-to-r from-blue-500/40 to-transparent" />
              </h3>

              <p className="text-slate-300 text-base leading-relaxed">
                {PORTFOLIO_DATA.personal.bio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Medical 3D Neural Segmentation (MONAI)",
                  "Native Android Apps (Kotlin / Compose)",
                  "Serverless Cloud Deployments (AWS / GCP)",
                  "Real-time Computer Vision (YOLO / OpenCV)",
                  "Robust Backend Systems (FastAPI / Flask)",
                  "Strong Foundations in DSA & OOP",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`glass-panel p-6 rounded-2xl border ${card.borderColor} bg-gradient-to-br ${card.color} hover:scale-[1.02] transition-all duration-300 group`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-white/10 shadow-lg text-cyan-400 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-semibold font-mono px-2.5 py-1 rounded-full bg-slate-900/80 text-slate-300 border border-white/10">
                    {card.badge}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {card.title}
                </h4>
                <p className="text-xs font-medium text-cyan-400/90 mt-1">{card.subtitle}</p>
                <p className="text-xs text-slate-400 mt-2">{card.description}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  FolderGit2,
  Award,
  Calendar,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Filter,
  Linkedin,
  Github,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export interface TimelineMilestone {
  id: string;
  category: "Education" | "Internships" | "Projects" | "Certifications";
  title: string;
  subtitle: string;
  date: string;
  location?: string;
  description: string;
  badge?: string;
  highlights: string[];
  skills: string[];
  link?: string;
}

export const TimelineSection: React.FC = () => {
  const [filter, setFilter] = useState<
    "All" | "Education" | "Internships" | "Projects" | "Certifications"
  >("All");

  // Construct unified timeline events array
  const milestones: TimelineMilestone[] = [
    // Education
    {
      id: "edu-simats",
      category: "Education",
      title: "B.E – Computer Science and Engineering",
      subtitle: "SIMATS Engineering (Saveetha University)",
      date: "2023 – 2027",
      location: "Chennai, India",
      description: "Academic standout maintaining an 8.93 / 10 CGPA distinction, specializing in Artificial Intelligence, Mobile Engineering, and Cloud Systems.",
      badge: "8.93 CGPA",
      highlights: [
        "Specialized in AI & ML, Mobile Computing, Data Structures & Algorithms, and Cloud Infrastructure.",
        "Engineered PDD_APP: Flagship 3D Medical Neural Mesh Segmentation platform.",
      ],
      skills: ["Python", "Java", "Kotlin", "FastAPI", "MONAI", "PyTorch", "Cloud Run"],
    },
    {
      id: "edu-inter",
      category: "Education",
      title: "Intermediate (Class XII) – MPC Stream",
      subtitle: "SR Jr College",
      date: "2021 – 2023",
      location: "Tirupati, India",
      description: "Achieved 90.1% aggregate distinction with core focus on Mathematics, Physics, and Analytical Logic.",
      badge: "90.1%",
      highlights: ["Distinction in Mathematics, Physics, and Chemistry."],
      skills: ["Mathematics", "Physics", "Algorithmic Logic"],
    },
    {
      id: "edu-ssc",
      category: "Education",
      title: "Secondary School Certificate (Class X)",
      subtitle: "Vasishta High School",
      date: "2020 – 2021",
      location: "TSundupalli, India",
      description: "Graduated with 98.6% academic distinction, school topper in Science and Mathematics.",
      badge: "98.6%",
      highlights: ["School topper with distinction in Science and Mathematics."],
      skills: ["Mathematics", "Science"],
    },

    // Internships
    {
      id: "intern-corizo-cloud",
      category: "Internships",
      title: "Cloud Computing Intern",
      subtitle: "Corizo EduTech Private Limited",
      date: "Nov 2025 – Jan 2026",
      location: "Remote / India",
      description: "Engineered scalable cloud services and automated conversational interfaces on AWS cloud infrastructure.",
      badge: "Cloud Internship",
      highlights: [
        "AWS Lex V2 Chatbot (Major Project): Engineered serverless hotel booking assistant with Python 3.11 Lambda fulfillment and dynamic pricing.",
        "Amazon S3 Static Hosting (Minor Project): Configured serverless web hosting with custom bucket policies, 11 9's durability, and CloudFront OAC analysis.",
      ],
      skills: ["Amazon Lex V2", "AWS Lambda", "Amazon S3", "Python 3.11", "IAM Policies", "CloudWatch"],
    },
    {
      id: "intern-corizo-ai",
      category: "Internships",
      title: "Artificial Intelligence Intern",
      subtitle: "Corizo EduTech Private Limited",
      date: "Aug 2025 – Nov 2025",
      location: "Remote / India",
      description: "Developed machine learning classification pipelines for predictive healthcare assessment and audio data mining.",
      badge: "AI Internship",
      highlights: [
        "Cardiac Attack Prediction (Major Project): Engineered triple-model ML inference (FastAPI + React 19) achieving 0.959 ROC-AUC and 92.9% sensitivity.",
        "Spotify Listening Intelligence (Minor Project): Analyzed 114k+ tracks with Russell Mood Model, hypothesis tests, and Streamlit dashboard.",
      ],
      skills: ["Python", "FastAPI", "React 19", "Scikit-Learn", "XGBoost", "Docker"],
    },

    // Projects
    {
      id: "proj-pdd",
      category: "Projects",
      title: "PDD: Research-Grade 3D Medical Segmentation",
      subtitle: "Flagship Clinical AI & Cloud Mobile System",
      date: "2025 – 2026",
      description: "3D PyTorch U-Net segmentation platform mapping Inferior Alveolar Nerve from CBCT scans with deterministic report.json lineage.",
      badge: "⭐⭐⭐ Flagship Hero",
      highlights: [
        "0.89 Dice Score & 2.05s Cloud Run inference latency.",
        "FirebaseAuthInterceptor JWT token injection & realtime Firestore sync.",
      ],
      skills: ["Kotlin", "FastAPI", "PyTorch", "MONAI", "Cloud Run", "Firebase Auth"],
      link: "https://github.com/dinnepatiprasad56-design/IAN_DETECTION_STUDIO",
    },
    {
      id: "proj-fire",
      category: "Projects",
      title: "AI-Based Real-Time Fire Detection System",
      subtitle: "FireGuard AI Telemetry Dashboard",
      date: "2025",
      description: "Autonomous hazard detection system with custom YOLOv8 model, live browser webcam inference, and automated Telegram Bot & Gmail SMTP alerting.",
      badge: "30+ FPS",
      highlights: [
        "Sub-30ms YOLOv8 real-time inference (30+ FPS) with 81.9% detection confidence.",
        "Instant multi-channel emergency alerting via Telegram Bot API and Gmail SMTP with snapshot logging.",
        "Built reactive glassmorphic telemetry dashboard using React, Vite, Tailwind CSS, Flask, and SQLite.",
      ],
      skills: ["YOLOv8", "OpenCV", "Python", "Flask", "React", "Tailwind CSS", "Telegram API", "SQLite"],
      link: "https://github.com/prasad1271/AI-Based-Real-Time-Fire-Detection-System/tree/main/fire-detection-system",
    },
    {
      id: "proj-sentiment",
      category: "Projects",
      title: "NLP Sentiment Analysis Web Application",
      subtitle: "End-to-End NLP Sentiment Classification & Opinion Mining",
      date: "2025",
      description: "Production-ready natural language processing platform that classifies text into Positive, Neutral, and Negative sentiments with 97.78% accuracy.",
      badge: "97.78% Accuracy",
      highlights: [
        "97.78% test accuracy & 97.78% Macro F1 with Laplace-smoothed Multinomial Naive Bayes.",
        "Negation-preserving preprocessing & sublinear TF-IDF unigrams/bigrams.",
        "Interactive dark dashboard with SVG confidence gauges and Flask REST API.",
      ],
      skills: ["Python 3.11", "Flask", "Scikit-Learn", "NLTK", "TF-IDF", "Naive Bayes", "Pytest"],
      link: "https://github.com/prasad1271/NLP-Sentiment-Analysis-Web-Application",
    },
    {
      id: "proj-spotify",
      category: "Projects",
      title: "Spotify Listening Intelligence & Data Visualization",
      subtitle: "Big Data Music Intelligence & Interactive Streamlit Analytics",
      date: "2025 – 2026",
      description: "End-to-end music listening intelligence platform analyzing 114,000+ Spotify tracks across 114 musical genres and 31,000+ artists.",
      badge: "114k+ Tracks",
      highlights: [
        "Forensic data cleaning on 114,000+ tracks with Russell 2D Circumplex Mood Model.",
        "Statistical hypothesis tests (Welch's t-test t=15.26, Kruskal-Wallis H=769.15).",
        "Interactive dark-themed Streamlit dashboard with 16 dual-engine visualizations.",
      ],
      skills: ["Python 3.11", "Streamlit", "Plotly", "Pandas", "Scikit-Learn", "Matplotlib", "Seaborn"],
      link: "https://github.com/prasad1271/Spotify-Listening-Intelligence-Data-Visualization",
    },

    // Certifications
    {
      id: "cert-oracle-sql",
      category: "Certifications",
      title: "Oracle Database SQL Certified Specialist",
      subtitle: "Oracle Corporation",
      date: "Dec 2024",
      description: "Certified expertise in relational database design, complex SQL query optimization, and data modeling.",
      badge: "Oracle Certified",
      highlights: ["Relational Databases, SQL Queries, Data Modeling, Query Optimization."],
      skills: ["SQL", "Relational Databases", "Data Modeling"],
      link: "https://www.linkedin.com/posts/siddhu1234567890_oracle-database-sql-specialist-share-7269940623363731457-DTgC/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEw4Ro4BP2K8PxYwC449x43atuoZMcP-xV8",
    },
    {
      id: "cert-oracle-java",
      category: "Certifications",
      title: "Java Programming Certification",
      subtitle: "Oracle Academy",
      date: "Dec 2024",
      description: "Professional certification covering Java Object-Oriented Programming, memory management, and data structures.",
      badge: "Oracle Academy",
      highlights: ["Java OOP, Data Structures, Exception Handling, JVM."],
      skills: ["Java", "OOP", "JVM Memory"],
      link: "https://www.linkedin.com/posts/siddhu1234567890_badge-learning-growth-share-7277950083554287616-iqw6/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEw4Ro4BP2K8PxYwC449x43atuoZMcP-xV8",
    },
    {
      id: "cert-cisco",
      category: "Certifications",
      title: "Introduction to Cybersecurity",
      subtitle: "Cisco Networking Academy",
      date: "Oct 2025",
      description: "Credential in network security principles, threat mitigation, encryption protocols, and security operations.",
      badge: "Cisco Verified",
      highlights: ["Network Security, Threat Assessment, Cryptography, Protocols."],
      skills: ["Cybersecurity", "Network Security", "Cryptography"],
      link: "https://www.linkedin.com/posts/siddhu1234567890_introduction-to-cybersecurity-was-issued-share-7382087277092470784--Pxv/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEw4Ro4BP2K8PxYwC449x43atuoZMcP-xV8",
    },
    {
      id: "cert-forage",
      category: "Certifications",
      title: "Tata Cybersecurity Analyst Simulation",
      subtitle: "Forage",
      date: "Dec 2024",
      description: "Industry simulation focusing on vulnerability assessment, identity management, and security operation centers.",
      badge: "Tata Forage",
      highlights: ["Vulnerability Assessment, Identity Access Management, Incident Response."],
      skills: ["Security Operations", "Vulnerability Management"],
      link: "https://www.linkedin.com/posts/siddhu1234567890_forage-certificate-ugcPost-7275048984631480320-Mfm7/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEw4Ro4BP2K8PxYwC449x43atuoZMcP-xV8",
    },
    {
      id: "cert-hackerrank",
      category: "Certifications",
      title: "Java (Basic) Certificate",
      subtitle: "HackerRank",
      date: "Mar 2026",
      description: "Validated proficiency in Java programming logic, algorithm implementation, and class structures.",
      badge: "HackerRank",
      highlights: ["Java Syntax, Control Structures, Object-Oriented Logic."],
      skills: ["Java", "Algorithms"],
      link: "https://www.linkedin.com/posts/siddhu1234567890_java-programming-hackerrank-share-7439233050015657984-oSVB/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEw4Ro4BP2K8PxYwC449x43atuoZMcP-xV8",
    },
    {
      id: "cert-corizo",
      category: "Certifications",
      title: "AI & Cloud Computing Specialist",
      subtitle: "Corizo EduTech",
      date: "Jan 2026",
      description: "Comprehensive certification covering machine learning pipelines, AWS Lex & S3 cloud services, and microservices.",
      badge: "Corizo Certified",
      highlights: ["Machine Learning, AWS Cloud Services, AWS Lex, Flask Pipelines."],
      skills: ["AWS Lex", "AWS S3", "Machine Learning", "Flask"],
      link: "https://www.linkedin.com/posts/siddhu1234567890_artificialintelligence-training-iitbombay-activity-7378670930656493568-Janv?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEw4Ro4BP2K8PxYwC449x43atuoZMcP-xV8",
    },
  ];

  const filteredMilestones =
    filter === "All"
      ? milestones
      : milestones.filter((m) => m.category === filter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Education":
        return <GraduationCap className="w-5 h-5 text-cyan-400" />;
      case "Internships":
        return <Briefcase className="w-5 h-5 text-blue-400" />;
      case "Projects":
        return <FolderGit2 className="w-5 h-5 text-teal-300" />;
      case "Certifications":
        return <Award className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="timeline" className="py-24 relative overflow-hidden bg-slate-950/90">
      {/* Background Accent Mesh */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Interactive Visual Timeline</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Education, Internships & <span className="text-gradient-primary">Key Milestones</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed"
          >
            A chronological timeline of academic excellence, industry internships, major projects, and credentials.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {(["All", "Education", "Internships", "Projects", "Certifications"] as const).map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 ${
                  filter === cat
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25 scale-105"
                    : "bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800"
                }`}
              >
                {cat === "All" && <Filter className="w-3.5 h-3.5" />}
                {cat === "Education" && <GraduationCap className="w-3.5 h-3.5" />}
                {cat === "Internships" && <Briefcase className="w-3.5 h-3.5" />}
                {cat === "Projects" && <FolderGit2 className="w-3.5 h-3.5" />}
                {cat === "Certifications" && <Award className="w-3.5 h-3.5" />}
                <span>{cat}</span>
              </button>
            )
          )}
        </div>

        {/* Central Vertical Timeline */}
        <div className="max-w-5xl mx-auto relative">
          
          {/* Vertical Guide Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-500 to-slate-800 -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            <AnimatePresence mode="popLayout">
              {filteredMilestones.map((m, index) => {
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={m.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className={`relative flex flex-col sm:flex-row items-center ${
                      isEven ? "sm:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Node Circle */}
                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-lg shadow-cyan-500/30 flex items-center justify-center z-10 mb-4 sm:mb-0">
                      {getCategoryIcon(m.category)}
                    </div>

                    {/* Card Container */}
                    <div className={`w-full sm:w-[calc(50%-2.5rem)] ${isEven ? "sm:pr-0" : "sm:pl-0"}`}>
                      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-xl space-y-4 bg-slate-900/80 group">
                        
                        {/* Top Header */}
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="px-3 py-1 rounded-full text-[10px] font-bold font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 uppercase tracking-wide">
                            {m.category}
                          </span>
                          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                            <span>{m.date}</span>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between gap-2">
                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                              {m.title}
                            </h3>
                            {m.badge && (
                              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold font-mono bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex-shrink-0">
                                {m.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-sm font-semibold text-cyan-400 mt-1">
                            {m.subtitle}
                          </p>
                          {m.location && (
                            <p className="text-xs text-slate-400 mt-0.5">{m.location}</p>
                          )}
                        </div>

                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {m.description}
                        </p>

                        {/* Bullet Highlights */}
                        {m.highlights.length > 0 && (
                          <div className="space-y-1.5 pt-2 border-t border-slate-800">
                            {m.highlights.map((h, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                                <span>{h}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Tech/Skills Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {m.skills.map((s) => (
                            <span
                              key={s}
                              className="px-2.5 py-1 rounded-md text-[10px] font-mono font-medium bg-slate-950 text-slate-400 border border-slate-800"
                            >
                              {s}
                            </span>
                          ))}
                        </div>

                        {/* Action Link Footer */}
                        {m.link && (
                          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                            {m.link.includes("github.com") ? (
                              <a
                                href={m.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                              >
                                <Github className="w-3.5 h-3.5 text-slate-300 group-hover/link:text-white group-hover/link:scale-110 transition-transform" />
                                <span>View GitHub Repository</span>
                                <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                              </a>
                            ) : (
                              <a
                                href={m.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                              >
                                <Linkedin className="w-3.5 h-3.5 text-[#0A66C2] group-hover/link:scale-110 transition-transform" />
                                <span>View LinkedIn Post</span>
                                <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                              </a>
                            )}
                          </div>
                        )}

                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

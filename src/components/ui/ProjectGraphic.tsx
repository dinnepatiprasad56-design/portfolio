"use client";

import React from "react";

interface ProjectGraphicProps {
  id: string;
  className?: string;
}

export const ProjectGraphic: React.FC<ProjectGraphicProps> = ({ id, className = "" }) => {
  switch (id) {
    case "inferior-alveolar-nerve-3d":
      return (
        <div className={`relative w-full h-full min-h-[260px] bg-slate-950 rounded-xl overflow-hidden flex items-center justify-center p-6 border border-blue-500/20 ${className}`}>
          {/* Subtle Grid overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
          
          <svg className="w-full h-full max-h-[220px]" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="nerveGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#2563eb" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Mandible 3D outline shape */}
            <path d="M 60 170 Q 90 60 200 60 Q 310 60 340 170 C 350 200 320 210 200 210 C 80 210 50 200 60 170 Z" 
                  fill="rgba(30, 41, 59, 0.4)" stroke="rgba(148, 163, 184, 0.25)" strokeWidth="2" strokeDasharray="4 4" />

            {/* CBCT Slices representation */}
            <rect x="80" y="80" width="240" height="100" rx="10" fill="rgba(15, 23, 42, 0.7)" stroke="#2563eb" strokeWidth="1" opacity="0.6" />
            <rect x="100" y="70" width="200" height="120" rx="12" fill="none" stroke="#06b6d4" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />

            {/* Inferior Alveolar Canal Neural Path */}
            <path d="M 85 150 C 130 180, 180 185, 200 185 C 220 185, 270 180, 315 150 M 120 145 C 130 110, 130 100, 130 95 M 270 145 C 270 110, 270 100, 270 95" 
                  stroke="url(#nerveGlow)" strokeWidth="5" strokeLinecap="round" filter="url(#glow)" />

            {/* 3D Voxel Points */}
            <circle cx="130" cy="95" r="4" fill="#38bdf8" />
            <circle cx="270" cy="95" r="4" fill="#38bdf8" />
            <circle cx="200" cy="185" r="6" fill="#06b6d4" />
            
            {/* Risk Assessment Indicator */}
            <g transform="translate(145, 100)">
              <rect width="110" height="32" rx="16" fill="rgba(9, 9, 11, 0.85)" stroke="#06b6d4" strokeWidth="1.5" />
              <circle cx="16" cy="16" r="5" fill="#22c55e" />
              <text x="30" y="20" fill="#f8fafc" fontSize="11" fontWeight="600" fontFamily="Inter">Safe Margin</text>
            </g>

            <text x="200" y="40" textAnchor="middle" fill="#38bdf8" fontSize="12" letterSpacing="1.5" fontWeight="700">MONAI 3D NEURAL MESH</text>
          </svg>
        </div>
      );

    case "ai-fire-detection":
      return (
        <div className={`relative w-full h-full min-h-[220px] bg-slate-950 rounded-xl overflow-hidden flex items-center justify-center p-6 border border-amber-500/20 ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
          <svg className="w-full h-full max-h-[180px]" viewBox="0 0 360 200" fill="none">
            <rect x="30" y="20" width="300" height="160" rx="12" fill="#0f172a" stroke="#1e293b" strokeWidth="2" />
            {/* Camera feed header */}
            <circle cx="48" cy="36" r="3" fill="#22c55e" />
            <text x="56" y="39" fill="#94a3b8" fontSize="8.5" fontWeight="600" fontFamily="Inter, sans-serif">CAMERA FEED</text>
            <rect x="266" y="27" width="52" height="16" rx="4" fill="#1e293b" stroke="#334155" />
            <text x="292" y="38" textAnchor="middle" fill="#38bdf8" fontSize="8" fontWeight="bold" fontFamily="monospace">YOLOv8</text>

            {/* YOLO Bounding Box */}
            <rect x="120" y="50" width="120" height="102" rx="4" fill="rgba(245, 158, 11, 0.1)" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 2" />
            <rect x="120" y="30" width="95" height="20" rx="4" fill="#f59e0b" />
            <text x="126" y="44" fill="#09090b" fontSize="10" fontWeight="bold">FIRE 81.9%</text>

            {/* Flame Icon visual */}
            <path d="M 180 65 C 180 65, 205 105, 205 125 C 205 140, 193 150, 180 150 C 167 150, 155 140, 155 125 C 155 105, 180 65, 180 65 Z" fill="url(#fireGradient)" />
            <path d="M 180 95 C 180 95, 193 115, 193 127 C 193 135, 187 142, 180 142 C 173 142, 167 135, 167 127 C 167 115, 180 95, 180 95 Z" fill="#fef08a" />

            {/* Status Footer */}
            <rect x="42" y="156" width="76" height="16" rx="4" fill="rgba(239, 68, 68, 0.2)" stroke="rgba(239, 68, 68, 0.5)" />
            <circle cx="50" cy="164" r="2.5" fill="#ef4444" />
            <text x="56" y="167" fill="#f87171" fontSize="7" fontWeight="bold" fontFamily="monospace">FIRE DETECTED</text>
            <text x="318" y="167" textAnchor="end" fill="#64748b" fontSize="8" fontFamily="monospace">30+ FPS • &lt;30ms</text>

            <defs>
              <linearGradient id="fireGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );

    case "cardiac-attack-prediction":
      return (
        <div className={`relative w-full h-full min-h-[220px] bg-slate-950 rounded-xl overflow-hidden flex items-center justify-center p-6 border border-rose-500/20 ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
          <svg className="w-full h-full max-h-[180px]" viewBox="0 0 360 200" fill="none">
            <rect x="30" y="20" width="300" height="160" rx="12" fill="#0f172a" stroke="#1e293b" strokeWidth="2" />
            {/* Pulse ECG Line */}
            <path d="M 40 100 L 100 100 L 115 60 L 130 145 L 145 30 L 160 120 L 175 90 L 190 100 L 320 100" stroke="#f43f5e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="145" cy="30" r="5" fill="#f43f5e" />
            <text x="210" y="60" fill="#f8fafc" fontSize="12" fontWeight="700">Risk Matrix</text>
            <text x="210" y="80" fill="#94a3b8" fontSize="10">Accuracy: 94.2%</text>
            <rect x="210" y="95" width="90" height="24" rx="6" fill="rgba(244, 63, 94, 0.2)" stroke="#f43f5e" />
            <text x="220" y="111" fill="#f43f5e" fontSize="10" fontWeight="bold">ML Classifier</text>
          </svg>
        </div>
      );

    case "aws-lex-s3-cloud":
      return (
        <div className={`relative w-full h-full min-h-[220px] bg-slate-950 rounded-xl overflow-hidden flex items-center justify-center p-6 border border-cyan-500/20 ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
          <svg className="w-full h-full max-h-[180px]" viewBox="0 0 360 200" fill="none">
            <rect x="30" y="20" width="300" height="160" rx="12" fill="#0f172a" stroke="#1e293b" strokeWidth="2" />
            {/* Cloud Icon */}
            <path d="M 110 110 C 100 110 90 100 90 90 C 90 80 100 70 110 70 C 115 60 130 50 145 55 C 155 45 175 45 185 55 C 195 50 210 60 210 70 C 220 70 230 80 230 90 C 230 100 220 110 210 110 Z" fill="rgba(6, 182, 212, 0.2)" stroke="#06b6d4" strokeWidth="2" />
            {/* Chatbot Bubble */}
            <rect x="200" y="110" width="110" height="45" rx="10" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
            <text x="212" y="130" fill="#38bdf8" fontSize="10" fontWeight="bold">AWS Lex Bot</text>
            <text x="212" y="144" fill="#94a3b8" fontSize="9">IAM Secure S3</text>
          </svg>
        </div>
      );

    case "secure-otp-auth":
      return (
        <div className={`relative w-full h-full min-h-[220px] bg-slate-950 rounded-xl overflow-hidden flex items-center justify-center p-6 border border-emerald-500/20 ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
          <svg className="w-full h-full max-h-[180px]" viewBox="0 0 360 200" fill="none">
            <rect x="30" y="20" width="300" height="160" rx="12" fill="#0f172a" stroke="#1e293b" strokeWidth="2" />
            {/* Lock graphic */}
            <rect x="150" y="90" width="60" height="50" rx="6" fill="#10b981" />
            <path d="M 160 90 L 160 70 C 160 55 200 55 200 70 L 200 90" stroke="#10b981" strokeWidth="3" fill="none" />
            <circle cx="180" cy="110" r="4" fill="#09090b" />
            <path d="M 180 114 L 180 125" stroke="#09090b" strokeWidth="2" />
            {/* Digits OTP */}
            <text x="60" y="115" fill="#34d399" fontSize="18" fontFamily="monospace" letterSpacing="4">849-201</text>
          </svg>
        </div>
      );

    case "sentiment-analysis-app":
      return (
        <div className={`relative w-full h-full min-h-[220px] bg-slate-950 rounded-xl overflow-hidden flex items-center justify-center p-6 border border-indigo-500/20 ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
          <svg className="w-full h-full max-h-[180px]" viewBox="0 0 360 200" fill="none">
            <rect x="30" y="20" width="300" height="160" rx="12" fill="#0f172a" stroke="#1e293b" strokeWidth="2" />
            {/* Sentiment Meter */}
            <path d="M 90 140 A 70 70 0 0 1 270 140" fill="none" stroke="#334155" strokeWidth="12" strokeLinecap="round" />
            <path d="M 90 140 A 70 70 0 0 1 240 90" fill="none" stroke="#6366f1" strokeWidth="12" strokeLinecap="round" />
            <polygon points="180,140 220,95 185,135" fill="#818cf8" />
            <text x="180" y="170" textAnchor="middle" fill="#818cf8" fontSize="12" fontWeight="bold">POSITIVE (91.8%)</text>
          </svg>
        </div>
      );

    default:
      return (
        <div className={`relative w-full h-full min-h-[220px] bg-slate-950 rounded-xl overflow-hidden flex items-center justify-center p-6 border border-blue-500/20 ${className}`}>
          <svg className="w-full h-full max-h-[180px]" viewBox="0 0 360 200" fill="none">
            <rect x="30" y="20" width="300" height="160" rx="12" fill="#0f172a" stroke="#1e293b" strokeWidth="2" />
            <circle cx="180" cy="90" r="30" fill="rgba(37, 99, 235, 0.2)" stroke="#2563eb" strokeWidth="2" />
            <path d="M 170 90 L 190 90 M 180 80 L 180 100" stroke="#38bdf8" strokeWidth="2" />
            <text x="180" y="150" textAnchor="middle" fill="#94a3b8" fontSize="12">Interactive Project Data</text>
          </svg>
        </div>
      );
  }
};

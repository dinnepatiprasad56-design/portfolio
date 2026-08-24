"use client";

import React from "react";
import { Database, ShieldCheck, Award, FileCode, Server, Cloud } from "lucide-react";

interface CertificateGraphicProps {
  id: string;
  title: string;
  issuer: string;
}

export const CertificateGraphic: React.FC<CertificateGraphicProps> = ({ id, title, issuer }) => {
  const getIcon = () => {
    switch (id) {
      case "oracle-sql":
        return <Database className="w-10 h-10 text-blue-400" />;
      case "oracle-java":
        return <FileCode className="w-10 h-10 text-amber-400" />;
      case "cisco-cybersecurity":
        return <ShieldCheck className="w-10 h-10 text-cyan-400" />;
      case "forage-tata-cyber":
        return <Server className="w-10 h-10 text-emerald-400" />;
      case "hackerrank-java":
        return <Award className="w-10 h-10 text-green-400" />;
      case "corizo-ai-cloud":
        return <Cloud className="w-10 h-10 text-purple-400" />;
      default:
        return <Award className="w-10 h-10 text-blue-400" />;
    }
  };

  const getGradient = () => {
    switch (id) {
      case "oracle-sql":
        return "from-blue-600/20 via-indigo-600/10 to-slate-900";
      case "oracle-java":
        return "from-amber-600/20 via-orange-600/10 to-slate-900";
      case "cisco-cybersecurity":
        return "from-cyan-600/20 via-blue-600/10 to-slate-900";
      case "forage-tata-cyber":
        return "from-emerald-600/20 via-teal-600/10 to-slate-900";
      case "hackerrank-java":
        return "from-green-600/20 via-emerald-600/10 to-slate-900";
      case "corizo-ai-cloud":
        return "from-purple-600/20 via-indigo-600/10 to-slate-900";
      default:
        return "from-blue-600/20 to-slate-900";
    }
  };

  return (
    <div className={`relative w-full h-44 rounded-xl bg-gradient-to-br ${getGradient()} p-5 flex flex-col justify-between border border-slate-800 group-hover:border-blue-500/40 transition-all duration-300 overflow-hidden`}>
      {/* Decorative seal watermark */}
      <div className="absolute -right-4 -bottom-4 w-28 h-28 rounded-full border border-white/5 bg-white/5 flex items-center justify-center opacity-30 group-hover:scale-110 transition-transform duration-500">
        <Award className="w-16 h-16 text-slate-400" />
      </div>

      <div className="flex items-center justify-between z-10">
        <div className="p-2.5 rounded-lg bg-slate-900/80 border border-white/10 shadow-lg">
          {getIcon()}
        </div>
        <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-900/90 text-slate-400 border border-slate-800">
          Verified Certificate
        </span>
      </div>

      <div className="z-10 mt-2">
        <h4 className="text-sm font-semibold text-slate-100 line-clamp-2 leading-tight group-hover:text-blue-400 transition-colors">
          {title}
        </h4>
        <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          {issuer}
        </p>
      </div>
    </div>
  );
};

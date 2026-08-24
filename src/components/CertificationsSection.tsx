"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ExternalLink, ShieldCheck, CheckCircle2, X } from "lucide-react";
import { PORTFOLIO_DATA, CertificationItem } from "@/data/portfolioData";
import { CertificateGraphic } from "./ui/CertificateGraphic";

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Professional Certifications & <span className="text-gradient-accent">Accreditation</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed"
          >
            Industry recognized qualifications from Oracle, Cisco, HackerRank, Forage, and Corizo in Databases, Java, Cybersecurity, and Artificial Intelligence.
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              onClick={() => setSelectedCert(cert)}
              className="glass-panel rounded-3xl border border-white/10 p-5 cursor-pointer hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group hover:scale-[1.02]"
            >
              <div className="space-y-4">
                {/* Visual Header Graphic */}
                <CertificateGraphic id={cert.id} title={cert.title} issuer={cert.issuer} />

                {/* Details */}
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-mono">{cert.date}</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-900 text-cyan-400 border border-slate-800 text-[10px] font-mono">
                      {cert.category}
                    </span>
                  </div>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                <span>View Certificate Details</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Certification Details Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 z-10 shadow-2xl space-y-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold uppercase">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Credential</span>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1 rounded-full bg-slate-800 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-white">{selectedCert.title}</h3>
                <p className="text-sm text-cyan-400 font-semibold">{selectedCert.issuer}</p>
                <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
                  <span>Issued: {selectedCert.date}</span>
                  {selectedCert.credentialId && (
                    <span>ID: {selectedCert.credentialId}</span>
                  )}
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-800">
                <span className="text-xs font-mono text-slate-400 font-semibold uppercase block">
                  Demonstrated Competencies:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {selectedCert.skills.map((s) => (
                    <div key={s} className="flex items-center gap-1.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center gap-3">
                <a
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Verify Credential Online</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

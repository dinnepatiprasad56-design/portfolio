"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  MapPin,
  Phone,
  MessageSquare,
  Sparkles,
  Copy,
  Check,
  ExternalLink,
  RotateCcw,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ProfileMotionCard } from "./ui/ProfileMotionCard";

export const ContactSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"form" | "card">("form");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, type: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2500);
    }
  };

  const getGmailUrl = (name: string, email: string, subject: string, message: string) => {
    const su = encodeURIComponent(subject || `Portfolio Inquiry from ${name || "Visitor"}`);
    const body = encodeURIComponent(
      `Hi Sindhu Prasad,\n\n${message}\n\n---\nSender Details:\nName: ${name}\nEmail: ${email}`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${PORTFOLIO_DATA.personal.email}&su=${su}&body=${body}`;
  };

  const getMailtoUrl = (name: string, email: string, subject: string, message: string) => {
    const su = encodeURIComponent(subject || `Portfolio Inquiry from ${name || "Visitor"}`);
    const body = encodeURIComponent(
      `Hi Sindhu Prasad,\n\n${message}\n\n---\nSender Details:\nName: ${name}\nEmail: ${email}`
    );
    return `mailto:${PORTFOLIO_DATA.personal.email}?subject=${su}&body=${body}`;
  };

  const getWhatsAppUrl = (name: string, email: string, subject: string, message: string) => {
    const text = encodeURIComponent(
      `Hi Sindhu Prasad, my name is ${name || "a visitor"} (${email || "N/A"}).\n\nSubject: ${
        subject || "Portfolio Inquiry"
      }\n\nMessage:\n${message}`
    );
    return `https://api.whatsapp.com/send?phone=917285931308&text=${text}`;
  };

  const handleDispatch = (method: "gmail" | "mailto" | "whatsapp") => {
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      alert("Please fill in your Name, Email, and Message before dispatching.");
      return;
    }

    let url = "";
    if (method === "gmail") {
      url = getGmailUrl(formState.name, formState.email, formState.subject, formState.message);
    } else if (method === "whatsapp") {
      url = getWhatsAppUrl(formState.name, formState.email, formState.subject, formState.message);
    } else {
      url = getMailtoUrl(formState.name, formState.email, formState.subject, formState.message);
    }

    window.open(url, "_blank", "noopener,noreferrer");

    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#2563eb", "#06b6d4", "#38bdf8"],
      });
    } catch {
      // fallback
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/90">
      {/* Radial Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect With Me</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            How to Connect With Me & <span className="text-gradient-primary">Get In Touch</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 text-base sm:text-lg leading-relaxed"
          >
            Reach out directly for software engineering roles, campus placements, AI research collaborations, or technical queries. Active daily on Email, WhatsApp, and LinkedIn with prompt responses.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Communication Channels Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 bg-slate-900/80 shadow-xl">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>Direct Channels</span>
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </h3>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
                  ● Available
                </span>
              </div>

              <div className="space-y-4">
                {/* Email Channel */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-all space-y-3 group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 group-hover:scale-105 transition-transform">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Direct Email</div>
                        <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors break-all">
                          {PORTFOLIO_DATA.personal.email}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <a
                      href={PORTFOLIO_DATA.personal.socialLinks.gmail || `https://mail.google.com/mail/?view=cm&fs=1&to=${PORTFOLIO_DATA.personal.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md shadow-cyan-500/10"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open Gmail</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <button
                      onClick={() => copyToClipboard(PORTFOLIO_DATA.personal.email, "email")}
                      className="py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 font-semibold text-xs transition-all flex items-center gap-1.5"
                      title="Copy Email Address"
                    >
                      {copiedType === "email" ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* WhatsApp & Call Channel */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-all space-y-3 group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-emerald-600/20 text-emerald-400 group-hover:scale-105 transition-transform">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Call / WhatsApp</div>
                        <div className="text-sm font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                          +91 7285931308
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <a
                      href="https://api.whatsapp.com/send?phone=917285931308&text=Hi%20Sindhu%20Prasad,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/20"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <button
                      onClick={() => copyToClipboard("+917285931308", "phone")}
                      className="py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 font-semibold text-xs transition-all flex items-center gap-1.5"
                      title="Copy Phone Number"
                    >
                      {copiedType === "phone" ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* LinkedIn Direct Channel */}
                <a
                  href={PORTFOLIO_DATA.personal.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900/60 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 group-hover:scale-105 transition-transform">
                      <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">LinkedIn Network</div>
                      <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                        linkedin.com/in/siddhu1234567890
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* GitHub Direct Channel */}
                <a
                  href={PORTFOLIO_DATA.personal.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/60 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800 text-slate-200 group-hover:scale-105 transition-transform">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">GitHub Profile</div>
                      <div className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        github.com/prasad1271
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/40 border border-slate-800/80">
                  <div className="p-2.5 rounded-xl bg-purple-600/20 text-purple-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Current Location</div>
                    <div className="text-sm font-semibold text-slate-200">
                      {PORTFOLIO_DATA.personal.location} (Open to Relocation & Remote)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Message Dispatcher & Motion Card Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            {/* View Switcher Tabs */}
            <div className="flex items-center justify-between p-1.5 rounded-2xl bg-slate-900 border border-slate-800">
              <button
                onClick={() => setActiveTab("form")}
                className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  activeTab === "form"
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Send Direct Message</span>
              </button>

              <button
                onClick={() => setActiveTab("card")}
                className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  activeTab === "card"
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>3D Developer Profile Card</span>
              </button>
            </div>

            {activeTab === "card" ? (
              /* 3D Motion Image Component */
              <ProfileMotionCard showContactButtons={true} />
            ) : (
              /* Direct Message Form */
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 bg-slate-900/90 shadow-2xl">
                {!submitted ? (
                  <>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <span>Draft & Send Message</span>
                        <Sparkles className="w-4 h-4 text-cyan-400" />
                      </h3>
                      <p className="text-xs text-slate-400">
                        Fill out your message details and choose your preferred dispatch method (Gmail Web, WhatsApp, or Default Mail App).
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                            Your Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            placeholder="e.g. Alex Johnson (Recruiter / Lead)"
                            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                            Your Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            placeholder="e.g. alex@company.com"
                            className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                          Subject / Topic
                        </label>
                        <input
                          type="text"
                          value={formState.subject}
                          onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                          placeholder="e.g. Software Engineer Opportunity / Project Inquiry"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1.5 font-semibold">
                          Message Details *
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          placeholder="Write your message here..."
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                        />
                      </div>

                      {/* Dispatch Action Buttons */}
                      <div className="pt-2 space-y-3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {/* Primary 1-Click Gmail Action */}
                          <button
                            type="button"
                            onClick={() => handleDispatch("gmail")}
                            className="py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 hover:from-blue-500 hover:to-cyan-300 text-white font-bold text-xs shadow-xl shadow-cyan-500/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
                          >
                            <Mail className="w-4 h-4" />
                            <span>Send via Gmail (Web)</span>
                            <ExternalLink className="w-3 h-3" />
                          </button>

                          {/* 1-Click WhatsApp Action */}
                          <button
                            type="button"
                            onClick={() => handleDispatch("whatsapp")}
                            className="py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-xl shadow-emerald-600/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
                          >
                            <Phone className="w-4 h-4" />
                            <span>Send via WhatsApp</span>
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between gap-3 pt-1">
                          <button
                            type="button"
                            onClick={() => handleDispatch("mailto")}
                            className="text-xs text-slate-400 hover:text-cyan-400 font-semibold transition-colors flex items-center gap-1.5"
                          >
                            <Send className="w-3 h-3" />
                            <span>Send via default mail app (mailto)</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              const draft = `Subject: ${formState.subject || "Portfolio Inquiry"}\nFrom: ${formState.name} (${formState.email})\nTo: ${PORTFOLIO_DATA.personal.email}\n\n${formState.message}`;
                              copyToClipboard(draft, "draft");
                            }}
                            className="text-xs text-slate-400 hover:text-white font-mono transition-colors flex items-center gap-1.5"
                          >
                            {copiedType === "draft" ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-400" />
                                <span className="text-emerald-400">Message Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>Copy Message Text</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  /* Success Confirmation Screen */
                  <div className="py-8 text-center space-y-6">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/20">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white">Message Prepared & Dispatched!</h3>
                      <p className="text-sm text-slate-300 max-w-md mx-auto">
                        Your message was generated for Sindhu Prasad (<span className="text-cyan-400 font-mono">{PORTFOLIO_DATA.personal.email}</span>). If your window did not pop up, click a direct channel below:
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                      <a
                        href={getGmailUrl(formState.name, formState.email, formState.subject, formState.message)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-2 transition-colors shadow-lg"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Open in Gmail</span>
                      </a>

                      <a
                        href={getWhatsAppUrl(formState.name, formState.email, formState.subject, formState.message)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 transition-colors shadow-lg"
                      >
                        <Phone className="w-4 h-4" />
                        <span>Open in WhatsApp</span>
                      </a>

                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormState({ name: "", email: "", subject: "", message: "" });
                        }}
                        className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-bold text-xs flex items-center gap-2 transition-colors"
                      >
                        <RotateCcw className="w-4 h-4" />
                        <span>Draft Another Message</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

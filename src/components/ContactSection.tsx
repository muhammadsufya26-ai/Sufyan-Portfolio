"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Instagram,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
  Terminal,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { soundEffects } from "./AudioController";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Frontend Engineering",
    message: "",
  });

  const email = "whotfsufii@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    soundEffects.playClick();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundEffects.playAntiGravityBlip(880);
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative cyber-bg border-b border-zinc-900 overflow-hidden">
      {/* Ambient Purple/Violet and Cyan Glowing Atmospheric Depth */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 pb-6 border-b border-zinc-900 gap-4 sm:gap-6">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-[11px] sm:text-xs tracking-wider uppercase mb-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
              <span>// 04. TRANSMISSION TERMINAL</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-tight">
              LET’S BUILD SOMETHING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400">
                UNCOMPROMISING.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-zinc-400 font-sans text-xs sm:text-sm leading-relaxed">
            Whether you need a high-performance web application, custom AI interface, or editorial visual identity—my communication channels are open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
          {/* Left Column: Direct Links & Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-4 sm:p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 space-y-6 shadow-xl">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                  DIRECT CHANNELS
                </span>
                <h3 className="text-xl font-bold text-white">
                  Fastest Way to Connect
                </h3>
              </div>

              {/* Email Pill with Copy */}
              <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-cyan-950/50 border border-cyan-800/50 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] font-mono text-zinc-500 uppercase">
                      EMAIL ADDRESS
                    </div>
                    <div className="text-xs sm:text-sm font-mono text-zinc-200 truncate">
                      {email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="p-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors shrink-0"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Social Channels List */}
              <div className="space-y-3">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/muhammad-sufyan-0b8243378"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundEffects.playClick()}
                  className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-900 hover:border-blue-700/60 hover:bg-zinc-900/70 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-950/40 border border-blue-800/40 flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-white group-hover:text-blue-300 transition-colors">
                        LinkedIn Profile
                      </div>
                      <div className="text-[11px] text-zinc-500 font-mono">
                        Muhammad Sufyan // Professional Network
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/muhammadsufya26-ai"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundEffects.playClick()}
                  className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-900 hover:border-zinc-700 hover:bg-zinc-900/70 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 group-hover:text-cyan-400 transition-colors">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-white group-hover:text-cyan-300 transition-colors">
                        GitHub Profile
                      </div>
                      <div className="text-[11px] text-zinc-500 font-mono">
                        @muhammadsufya26-ai // Code & Repositories
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                {/* Instagram @sufii.raw */}
                <a
                  href="https://instagram.com/sufii.raw"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundEffects.playClick()}
                  className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-900 hover:border-purple-800/60 hover:bg-zinc-900/70 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-purple-950/40 border border-purple-800/40 flex items-center justify-center text-purple-400 group-hover:text-purple-300 transition-colors">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-white group-hover:text-purple-300 transition-colors">
                        @sufii.raw
                      </div>
                      <div className="text-[11px] text-zinc-500 font-mono">
                        Editorial Posters, Automotive Art & Visuals
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>

              {/* Availability Note */}
              <div className="p-3.5 px-4 rounded-full bg-emerald-950/20 border border-emerald-900/40 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <div className="text-xs text-emerald-300 font-mono">
                  Currently open for select freelance contracts & full-time engineering opportunities.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Cyberpunk Transmission Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-zinc-950/90 border border-zinc-800 p-4 sm:p-6 md:p-8 shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-zinc-800 font-mono text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span className="text-zinc-200 font-bold">DISPATCH_TERMINAL.EXE</span>
                </div>
                <span className="text-zinc-500">ENCRYPTION: 256-BIT TLS</span>
              </div>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold font-mono text-white">
                    TRANSMISSION DISPATCHED
                  </h3>
                  <p className="text-sm text-zinc-400 max-w-sm mx-auto font-sans">
                    Thank you. Your message has been received by Sufii. I will respond to your transmission within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-cyan-300 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all"
                  >
                    Send another dispatch
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono text-zinc-400 uppercase tracking-wide">
                        Your Identity / Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-white font-sans text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-zinc-600"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono text-zinc-400 uppercase tracking-wide">
                        Return Coordinates (Email)
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-white font-sans text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-zinc-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-zinc-400 uppercase tracking-wide">
                      Mission Scope / Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-white font-sans text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    >
                      <option value="Frontend Engineering">Next.js / Frontend Web Application</option>
                      <option value="AI Integration">Groq / AI Interface & Streaming UX</option>
                      <option value="Poster Design & Branding">Editorial Typography & Poster Art (@sufii.raw)</option>
                      <option value="Design System & Assets">CreativeVibeAssets / Design System Kit</option>
                      <option value="Full-time Role">Engineering / Design Leadership Role</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-zinc-400 uppercase tracking-wide">
                      Transmission Payload (Message)
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Outline your project scope, timeline, and vision..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-white font-sans text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder:text-zinc-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Transmit Message // Dispatch</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

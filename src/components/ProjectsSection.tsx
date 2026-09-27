"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Zap,
  Sparkles,
  Layers,
  Cpu,
  ArrowUpRight,
  Volume2,
  FileCheck,
  ShoppingBag,
} from "lucide-react";
import { soundEffects } from "./AudioController";

interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
  glowColor: string;
  githubUrl?: string;
  liveUrl?: string;
  demoType: "resume" | "audio-motion" | "storefront";
}

const PROJECTS: Project[] = [
  {
    id: "ats-resume-tailor",
    title: "ATS Resume Tailor",
    tagline: "Sub-second AI resume-to-job optimization powered by Groq LPUs.",
    description:
      "A high-speed intelligent resume scoring and tailoring platform. Parses PDF resumes, compares semantic embeddings against targeted job descriptions, and rewrites bullet points with measurable impact metrics under 400ms using Groq's low-latency inference.",
    category: "AI ENGINEERING // NEXT.JS",
    tags: ["Next.js App Router", "Groq API", "Llama 3 70B", "TypeScript", "Tailwind CSS", "PDF Parsing"],
    metrics: [
      { label: "Inference Latency", value: "< 380ms" },
      { label: "ATS Match Accuracy", value: "98.4%" },
      { label: "Keyword Hit Rate", value: "+45%" },
    ],
    accentColor: "#f97316",
    glowColor: "rgba(249, 115, 22, 0.3)",
    githubUrl: "https://github.com/muhammadsufya26-ai",
    liveUrl: "https://github.com/muhammadsufya26-ai",
    demoType: "resume",
  },
  {
    id: "interactive-storybook",
    title: "Motion & Audio Web Universe",
    tagline: "Fluid gestural storytelling with Framer Motion and Web Audio synthesizer.",
    description:
      "An experimental playground exploring spatial motion design, reactive kinetic typography, and synthesized ambient soundscapes. Features custom multi-touch gesture hooks, spring-damped canvas elements, and zero-dependency Web Audio synthesizers.",
    category: "INTERACTIVE // CREATIVE DEV",
    tags: ["Framer Motion", "Web Audio API", "React 18", "Canvas Shaders", "TypeScript", "Tailwind"],
    metrics: [
      { label: "Frame Rate", value: "60 FPS" },
      { label: "Audio Latency", value: "< 8ms" },
      { label: "Bundle Size", value: "14.2 KB" },
    ],
    accentColor: "#00f0ff",
    glowColor: "rgba(0, 240, 255, 0.3)",
    githubUrl: "https://github.com/muhammadsufya26-ai",
    liveUrl: "https://github.com/muhammadsufya26-ai",
    demoType: "audio-motion",
  },
  {
    id: "creative-vibe-assets",
    title: "CreativeVibeAssets Ecosystem",
    tagline: "High-conversion digital storefront & asset marketplace for graphic artists.",
    description:
      "Full-stack digital goods platform delivering premium streetwear poster packs, brutalist typography fonts, raw textures, and vector kits. Engineered for frictionless instant downloads, secure checkout, and dynamic responsive asset previews.",
    category: "ECOMMERCE // VISUAL DESIGN",
    tags: ["Next.js", "Stripe API", "Cloudflare R2", "Tailwind CSS", "Photoshop Assets", "Design System"],
    metrics: [
      { label: "Asset Downloads", value: "12,000+" },
      { label: "Checkout Speed", value: "1.2s" },
      { label: "Customer Rating", value: "4.95 / 5" },
    ],
    accentColor: "#e879f9",
    glowColor: "rgba(232, 121, 249, 0.3)",
    githubUrl: "https://github.com/muhammadsufya26-ai",
    liveUrl: "https://instagram.com/sufii.raw",
    demoType: "storefront",
  },
];

export default function ProjectsSection() {
  const [resumeSimScore, setResumeSimScore] = useState<number>(72);
  const [analyzingResume, setAnalyzingResume] = useState<boolean>(false);
  const [interactiveSoundStep, setInteractiveSoundStep] = useState<number>(0);

  const simulateATS = () => {
    soundEffects.playClick();
    setAnalyzingResume(true);
    setTimeout(() => {
      setResumeSimScore(96);
      setAnalyzingResume(false);
      soundEffects.playAntiGravityBlip(800);
    }, 600);
  };

  const triggerMotionSoundTest = (step: number) => {
    setInteractiveSoundStep(step);
    soundEffects.playAntiGravityBlip(350 + step * 120);
  };

  return (
    <section id="projects" className="py-24 relative cyber-bg border-b border-zinc-900 overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-orange-500/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-zinc-900 gap-6">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_#00f0ff]" />
              <span>// 02. FEATURED CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
              ENGINEERED TO <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-cyan-400 to-purple-400">
                PERFORM & INSPIRE.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-zinc-400 font-sans text-sm leading-relaxed">
            A curated showcase of production applications, high-throughput AI tools, and creative digital infrastructure built with strict engineering principles.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="space-y-12">
          {PROJECTS.map((project, index) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-zinc-700 hover:shadow-[0_0_40px_rgba(0,0,0,0.8)] transition-all p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden group"
              >
                {/* Glow accent */}
                <div
                  className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{ backgroundColor: project.accentColor }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Column: Metadata & Narrative (7 cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                    <div>
                      {/* Category & Index */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-mono text-xs text-zinc-400 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800">
                          PROJ_0{index + 1}
                        </span>
                        <span
                          className="font-mono text-xs font-semibold tracking-wider uppercase"
                          style={{ color: project.accentColor }}
                        >
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>

                      {/* Tagline */}
                      <p className="text-sm sm:text-base font-mono text-zinc-300 mt-2">
                        {project.tagline}
                      </p>

                      {/* Full description */}
                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mt-4">
                        {project.description}
                      </p>
                    </div>

                    {/* Metrics Row */}
                    <div className="grid grid-cols-3 gap-3 pt-2">
                      {project.metrics.map((metric, mIdx) => (
                        <div
                          key={mIdx}
                          className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-900"
                        >
                          <div className="text-lg sm:text-xl font-bold font-mono text-white">
                            {metric.value}
                          </div>
                          <div className="text-[10px] sm:text-xs text-zinc-500 font-sans">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800/80 text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Sleek Rounded Capsule Action Links */}
                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-zinc-900">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => soundEffects.playClick()}
                          className="px-5 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white transition-all flex items-center gap-2"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>Source Code</span>
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => soundEffects.playClick()}
                          className="px-5 py-2.5 rounded-full bg-zinc-100 hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(0,240,255,0.5)] text-black text-xs font-mono font-bold tracking-wider uppercase transition-all flex items-center gap-2 group/btn"
                        >
                          <span>Live Demo / Details</span>
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Live Interactive Sandbox / Demo (5 cols) */}
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl border border-zinc-800/90 bg-zinc-950 p-5 shadow-2xl relative">
                      {/* Top Bar Decal */}
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800/80 font-mono text-[10px] text-zinc-500">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                          <span className="ml-2 text-zinc-400">interactive_sandbox.tsx</span>
                        </div>
                        <span className="text-zinc-600">STATE: LIVE</span>
                      </div>

                      {/* Interactive Demo Content per Project */}
                      {project.demoType === "resume" && (
                        <div className="space-y-4">
                          <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-xs font-mono">
                            <div className="flex items-center justify-between text-zinc-400 mb-2">
                              <span>TARGET ROLE:</span>
                              <span className="text-cyan-400">Sr. Frontend Engineer</span>
                            </div>
                            <div className="flex items-center justify-between text-zinc-400">
                              <span>INFERENCE ENGINE:</span>
                              <span className="text-orange-400">Groq Llama-3-70B LPU</span>
                            </div>
                          </div>

                          <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 flex items-center justify-between">
                            <div>
                              <div className="text-[11px] font-mono text-zinc-400">ATS MATCH SCORE</div>
                              <div className="text-3xl font-black font-mono text-white flex items-baseline gap-1 mt-0.5">
                                {resumeSimScore}
                                <span className="text-sm text-zinc-500">/ 100</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <span
                                className={`text-xs font-mono px-3 py-1 rounded-full border ${
                                  resumeSimScore > 85
                                    ? "bg-emerald-950/60 text-emerald-400 border-emerald-800 shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                                    : "bg-yellow-950/60 text-yellow-400 border-yellow-800"
                                }`}
                              >
                                {resumeSimScore > 85 ? "TOP 1% QUALIFIED" : "KEYWORD GAPS DETECTED"}
                              </span>
                            </div>
                          </div>

                          <button
                            onClick={simulateATS}
                            disabled={analyzingResume}
                            className="w-full py-3 rounded-full bg-orange-500 hover:bg-orange-400 text-black font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] flex items-center justify-center gap-2"
                          >
                            {analyzingResume ? (
                              <>
                                <Zap className="w-3.5 h-3.5 animate-spin" />
                                <span>Running Groq LPU Tailoring...</span>
                              </>
                            ) : (
                              <>
                                <Cpu className="w-3.5 h-3.5" />
                                <span>Test Groq AI Optimization</span>
                              </>
                            )}
                          </button>
                        </div>
                      )}

                      {project.demoType === "audio-motion" && (
                        <div className="space-y-4">
                          <div className="text-xs text-zinc-400 font-mono">
                            SPATIAL SYNTHESIZER NODES (CLICK TO TRIGGER AUDIO):
                          </div>

                          <div className="grid grid-cols-4 gap-2">
                            {[1, 2, 3, 4].map((step) => (
                              <motion.button
                                key={step}
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => triggerMotionSoundTest(step)}
                                className={`p-4 rounded-xl border flex flex-col items-center justify-center gap-2 transition-all ${
                                  interactiveSoundStep === step
                                    ? "bg-cyan-950/60 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.4)] text-cyan-300"
                                    : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white"
                                }`}
                              >
                                <Volume2 className="w-4 h-4 text-cyan-400" />
                                <span className="font-mono text-xs font-bold">NODE {step}</span>
                              </motion.button>
                            ))}
                          </div>

                          <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-[11px] font-mono text-zinc-400 flex items-center justify-between">
                            <span>SAMPLE FREQ: {350 + interactiveSoundStep * 120} Hz</span>
                            <span className="text-cyan-400">WEB_AUDIO // SINE WAVE</span>
                          </div>
                        </div>
                      )}

                      {project.demoType === "storefront" && (
                        <div className="space-y-4">
                          <div className="p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs font-mono flex items-center justify-between">
                            <span className="text-zinc-400">CREATIVEVIBEASSETS</span>
                            <span className="text-purple-400 font-bold">STOREFRONT LIVE</span>
                          </div>

                          <div className="grid grid-cols-2 gap-2 text-left">
                            <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
                              <span className="text-[10px] font-mono text-zinc-500 uppercase block">
                                TOP SELLER
                              </span>
                              <span className="text-xs font-bold text-white font-mono block mt-1">
                                Tokyo Drift Poster Kit
                              </span>
                              <span className="text-xs text-purple-400 font-mono">40+ PSD & Vector</span>
                            </div>

                            <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/80">
                              <span className="text-[10px] font-mono text-zinc-500 uppercase block">
                                NEW DROP
                              </span>
                              <span className="text-xs font-bold text-white font-mono block mt-1">
                                Cyberpunk Acid Typography
                              </span>
                              <span className="text-xs text-cyan-400 font-mono">OTF / TTF / WOFF</span>
                            </div>
                          </div>

                          <a
                            href="https://instagram.com/sufii.raw"
                            target="_blank"
                            rel="noreferrer"
                            onClick={() => soundEffects.playClick()}
                            className="w-full py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                          >
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>Browse CreativeVibeAssets</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

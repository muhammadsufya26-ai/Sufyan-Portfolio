"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  CheckCircle2,
  Activity,
  Compass,
} from "lucide-react";
import { soundEffects } from "./AudioController";

const DEV_HIGHLIGHTS = [
  {
    title: "Component Modularity & Clean Architecture",
    description: "Architecting resilient, type-safe Next.js & React ecosystems with scalable folder structures and reusable headless primitives.",
  },
  {
    title: "High Performance & Edge Optimization",
    description: "Obsessed with Core Web Vitals, sub-second LCP, zero layout shifts, dynamic imports, and instant edge rendering.",
  },
  {
    title: "AI Integration & Fast LLM Pipelines",
    description: "Seamlessly wiring ultra-fast inference with Groq LPU, OpenAI, and Gemini APIs with streaming UX and real-time state.",
  },
  {
    title: "Motion & Micro-Interactions",
    description: "Elevating web experiences using Framer Motion physics, scroll-driven choreography, and canvas-level interactivity.",
  },
];

const DESIGN_HIGHLIGHTS = [
  {
    title: "Editorial Typography & Brutalist Layouts",
    description: "Crafting bold typographic hierarchies influenced by Japanese typography, Swiss modernist grids, and cyberpunk subcultures.",
  },
  {
    title: "Automotive & Streetwear Poster Aesthetics",
    description: "Creating textured, visceral poster art with custom halftone patterns, distressed vector elements, and raw editorial balance (@sufii.raw).",
  },
  {
    title: "Brand Identity Systems & Visual Universes",
    description: "Developing complete digital brand guidelines, high-contrast dark modes, vector iconography, and signature asset bundles.",
  },
  {
    title: "Digital Assets Ecosystem (CreativeVibeAssets)",
    description: "Designing commercial digital assets, design presets, mockups, and typography packs for digital creators and brands.",
  },
];

const STATS = [
  { label: "Lighthouse Performance Target", value: "99+", suffix: "%", icon: Zap },
  { label: "Bespoke Art & Graphic Assets", value: "150+", suffix: " Kits", icon: Palette },
  { label: "Code Architecture Strictness", value: "Strict", suffix: " TS", icon: Terminal },
  { label: "Interactive Motion Delight", value: "60", suffix: " FPS", icon: Activity },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative cyber-bg border-b border-zinc-900 overflow-hidden">
      {/* Ambient Depth and Glowing Gradients */}
      <div className="absolute top-1/2 -left-20 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-zinc-900 gap-6">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_#00f0ff]" />
              <span>// 01. PHILOSOPHY & DUAL FOCUS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
              Where Engineering Meets <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                Editorial Visual Artistry.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-zinc-400 font-sans text-sm leading-relaxed">
            I don’t treat engineering and design as separate disciplines. The best digital products are born when rigorous frontend systems are wrapped in distinctive, visceral visual identity.
          </p>
        </div>

        {/* Dual Focus Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Column 1: Frontend Development */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-zinc-950/70 border border-zinc-800/80 p-6 sm:p-8 relative overflow-hidden group hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(0,240,255,0.12)] transition-all shadow-xl"
          >
            {/* Header / Accent */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-zinc-900">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest block">
                    Discipline 01
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Frontend Engineering
                  </h3>
                </div>
              </div>
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800">
                SYSTEMS ARCHITECT
              </span>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              Transforming complex logic and high-volume data into lightning-fast, reactive user interfaces. Focused on maintainable codebases, strict type-safety, and seamless developer experience.
            </p>

            {/* Feature List */}
            <div className="space-y-4">
              {DEV_HIGHLIGHTS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-900 hover:border-zinc-800 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-100 font-mono tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Tech Pills */}
            <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-wrap gap-2">
              {["Next.js App Router", "TypeScript", "Tailwind CSS", "React Server Components", "REST & GraphQL", "State Machines"].map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-mono px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Visual Design & Branding */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl bg-zinc-950/70 border border-zinc-800/80 p-6 sm:p-8 relative overflow-hidden group hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.12)] transition-all shadow-xl"
          >
            {/* Header / Accent */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-zinc-900">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-purple-950/40 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all">
                  <Palette className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-xs text-purple-400 uppercase tracking-widest block">
                    Discipline 02
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Visual Design & Identity
                  </h3>
                </div>
              </div>
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-zinc-900 text-purple-300 border border-zinc-800">
                CREATIVE DIRECTION
              </span>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              Operating under the creative label <span className="text-purple-300 font-mono font-medium">@sufii.raw</span> and founding <span className="text-cyan-300 font-mono font-medium">CreativeVibeAssets</span>. Blending raw brutalist edge, automotive passion, and modern editorial styling.
            </p>

            {/* Feature List */}
            <div className="space-y-4">
              {DESIGN_HIGHLIGHTS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-900 hover:border-zinc-800 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-100 font-mono tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Tech Pills */}
            <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-wrap gap-2">
              {["Adobe Photoshop", "Illustrator", "CreativeVibeAssets", "Print & Poster Typography", "Streetwear Graphics", "Color Grading"].map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-mono px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats & Capability Matrix */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-zinc-950/60 border border-zinc-900 hover:border-zinc-800 transition-all flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className="w-5 h-5 text-cyan-400" />
                  <span className="text-[10px] font-mono text-zinc-600">SPEC_{i + 1}</span>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-white font-mono tracking-tight">
                    {stat.value}
                    <span className="text-cyan-400 text-lg">{stat.suffix}</span>
                  </div>
                  <div className="text-xs font-sans text-zinc-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

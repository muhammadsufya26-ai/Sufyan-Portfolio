"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  Sparkles,
  ArrowDown,
  Terminal,
  Code2,
  Palette,
  Cpu,
  Layers,
  Zap,
  RotateCcw,
} from "lucide-react";
import { soundEffects } from "./AudioController";

interface TechPill {
  id: string;
  name: string;
  category: "dev" | "design" | "ai" | "core";
  color: string;
  borderColor: string;
  glowColor: string;
  icon: React.ElementType;
  initialX: number;
  initialY: number;
  floatDuration: number;
  floatDelay: number;
  rotRange: number;
}

const TECH_PILLS: TechPill[] = [
  {
    id: "react",
    name: "React.js",
    category: "dev",
    color: "#00f0ff",
    borderColor: "rgba(0, 240, 255, 0.4)",
    glowColor: "rgba(0, 240, 255, 0.25)",
    icon: Code2,
    initialX: -140,
    initialY: -70,
    floatDuration: 7,
    floatDelay: 0,
    rotRange: 6,
  },
  {
    id: "nextjs",
    name: "Next.js 14/15",
    category: "dev",
    color: "#ffffff",
    borderColor: "rgba(255, 255, 255, 0.5)",
    glowColor: "rgba(255, 255, 255, 0.25)",
    icon: Layers,
    initialX: 160,
    initialY: -80,
    floatDuration: 6.2,
    floatDelay: 0.8,
    rotRange: -5,
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "dev",
    color: "#60a5fa",
    borderColor: "rgba(96, 165, 250, 0.5)",
    glowColor: "rgba(96, 165, 250, 0.25)",
    icon: Terminal,
    initialX: -240,
    initialY: 40,
    floatDuration: 8.4,
    floatDelay: 1.2,
    rotRange: 8,
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "dev",
    color: "#38bdf8",
    borderColor: "rgba(56, 189, 248, 0.5)",
    glowColor: "rgba(56, 189, 248, 0.25)",
    icon: Zap,
    initialX: 230,
    initialY: 50,
    floatDuration: 7.8,
    floatDelay: 0.4,
    rotRange: -7,
  },
  {
    id: "groq",
    name: "Groq API // LPU",
    category: "ai",
    color: "#f97316",
    borderColor: "rgba(249, 115, 22, 0.6)",
    glowColor: "rgba(249, 115, 22, 0.3)",
    icon: Cpu,
    initialX: -150,
    initialY: 130,
    floatDuration: 6.8,
    floatDelay: 1.6,
    rotRange: -4,
  },
  {
    id: "photoshop",
    name: "Photoshop & Raw",
    category: "design",
    color: "#38bdf8",
    borderColor: "rgba(56, 189, 248, 0.6)",
    glowColor: "rgba(56, 189, 248, 0.25)",
    icon: Palette,
    initialX: 110,
    initialY: 130,
    floatDuration: 7.2,
    floatDelay: 1.0,
    rotRange: 6,
  },
  {
    id: "framer",
    name: "Framer Motion",
    category: "dev",
    color: "#e879f9",
    borderColor: "rgba(232, 121, 249, 0.5)",
    glowColor: "rgba(232, 121, 249, 0.25)",
    icon: Sparkles,
    initialX: 0,
    initialY: -130,
    floatDuration: 8.0,
    floatDelay: 0.2,
    rotRange: 5,
  },
];

export default function AntiGravityHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pulseKey, setPulseKey] = useState(0);

  // Mouse position tracker for proximity magnetic deflection
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const triggerAntiGravityBurst = () => {
    soundEffects.playAntiGravityBlip(920);
    setPulseKey((prev) => prev + 1);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[95vh] pt-28 pb-16 flex flex-col items-center justify-center overflow-hidden cyber-bg border-b border-zinc-900"
    >
      {/* Background Ambient Glows & Purple/Violet Atmospheric Depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-purple-600/12 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Cyber Grid Lines / Tech Decals */}
      <div className="absolute top-8 left-8 text-[10px] font-mono text-zinc-600 hidden md:block">
        LOC: 31.5204° N, 74.3587° E // SYS_STABLE
      </div>
      <div className="absolute top-8 right-8 text-[10px] font-mono text-zinc-600 hidden md:flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        ANTI_GRAVITY_ENGINE: ACTIVE
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-20 w-full">
        {/* Editorial Sub-badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-400 mb-6 shadow-lg"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
          <span className="tracking-wider text-zinc-300">
            PORTFOLIO 2026 // VISUAL DESIGNER & FRONTEND ARCHITECT
          </span>
        </motion.div>

        {/* Original Large Editorial Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-2 mb-6"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase select-none">
            MUHAMMAD <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-600">SUFYAN</span>
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 font-mono text-sm sm:text-base md:text-xl text-cyan-400">
            <span className="text-zinc-500">[</span>
            <span className="text-white font-semibold">ALIAS: SUFII</span>
            <span className="text-zinc-600">//</span>
            <span className="text-cyan-400">FRONTEND DEVELOPER</span>
            <span className="text-zinc-600">&</span>
            <span className="text-zinc-300">VISUAL DESIGNER</span>
            <span className="text-zinc-500">]</span>
          </div>
        </motion.div>

        {/* Punchy Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-400 font-sans leading-relaxed mb-10"
        >
          Synthesizing high-performance React architectures with bold editorial & cyberpunk aesthetics.
          From fast AI pipelines to bespoke streetwear & automotive graphic systems.
        </motion.p>

        {/* Anti-Gravity Interaction Zone Banner */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-cyan-500/50" />
          <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-500 tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Anti-Gravity Cluster (Grab & Toss)</span>
            <button
              onClick={triggerAntiGravityBurst}
              title="Disrupt Gravity Field"
              className="ml-2 px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-cyan-400 hover:text-cyan-300 text-zinc-400 transition-colors flex items-center gap-1 text-[10px]"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Zero-G Shockwave</span>
            </button>
          </div>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-cyan-500/50" />
        </div>

        {/* Anti-Gravity Floating Field */}
        <div className="relative h-64 sm:h-72 md:h-80 w-full max-w-4xl mx-auto flex items-center justify-center my-4 border border-zinc-900/60 rounded-2xl bg-zinc-950/40 backdrop-blur-[2px]">
          {/* Subtle Grid crosshairs inside field */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-full h-[1px] bg-zinc-900/40" />
            <div className="h-full w-[1px] bg-zinc-900/40" />
          </div>

          <div className="absolute text-[9px] font-mono text-zinc-700 top-2 left-3 pointer-events-none">
            FIELD: ZERO_RESISTANCE // DRAG_FRICTION: 0.15
          </div>
          <div className="absolute text-[9px] font-mono text-zinc-700 bottom-2 right-3 pointer-events-none">
            DRAG_MODE: ACTIVE // COLLISION: REPELLING
          </div>

          {/* Floating interactive pills with full organic motion and drag physics */}
          {TECH_PILLS.map((pill, idx) => {
            const Icon = pill.icon;
            return (
              <motion.div
                key={`${pill.id}-${pulseKey}`}
                drag
                dragConstraints={containerRef}
                dragElastic={0.25}
                dragTransition={{ bounceStiffness: 260, bounceDamping: 18 }}
                whileHover={{
                  scale: 1.12,
                  zIndex: 40,
                  cursor: "grab",
                }}
                whileDrag={{
                  scale: 1.22,
                  zIndex: 50,
                  cursor: "grabbing",
                  boxShadow: `0 0 30px ${pill.glowColor}`,
                }}
                onDragStart={() => {
                  soundEffects.playAntiGravityBlip(400 + idx * 70);
                }}
                onDragEnd={() => {
                  soundEffects.playAntiGravityBlip(700 + idx * 50);
                }}
                onMouseEnter={() => {
                  soundEffects.playHover();
                }}
                initial={{
                  x: pill.initialX,
                  y: pill.initialY,
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  x: [
                    pill.initialX,
                    pill.initialX + (idx % 2 === 0 ? 12 : -12),
                    pill.initialX,
                  ],
                  y: [
                    pill.initialY,
                    pill.initialY + (idx % 2 === 0 ? -18 : 16),
                    pill.initialY,
                  ],
                  rotate: [
                    pill.rotRange,
                    -pill.rotRange,
                    pill.rotRange,
                  ],
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    duration: pill.floatDuration,
                    ease: "easeInOut",
                    delay: pill.floatDelay,
                  },
                  y: {
                    repeat: Infinity,
                    duration: pill.floatDuration * 1.15,
                    ease: "easeInOut",
                    delay: pill.floatDelay,
                  },
                  rotate: {
                    repeat: Infinity,
                    duration: pill.floatDuration * 1.3,
                    ease: "easeInOut",
                    delay: pill.floatDelay,
                  },
                  opacity: { duration: 0.6, delay: 0.2 + idx * 0.08 },
                  scale: { duration: 0.6, delay: 0.2 + idx * 0.08 },
                }}
                className="absolute select-none cursor-grab active:cursor-grabbing px-4 py-2 rounded-full backdrop-blur-md bg-zinc-900/90 border shadow-lg flex items-center gap-2 group transition-shadow"
                style={{
                  borderColor: pill.borderColor,
                  boxShadow: `0 8px 24px -6px rgba(0,0,0,0.8), 0 0 16px -4px ${pill.glowColor}`,
                }}
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: pill.color,
                    boxShadow: `0 0 8px ${pill.color}`,
                  }}
                />
                <Icon
                  className="w-3.5 h-3.5 transition-transform group-hover:rotate-12"
                  style={{ color: pill.color }}
                />
                <span className="font-mono text-xs font-semibold text-zinc-100 tracking-wide">
                  {pill.name}
                </span>
                <span className="text-[10px] text-zinc-500 font-mono hidden sm:inline">
                  [{pill.category.toUpperCase()}]
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Sleek Rounded Capsule Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          <a
            href="#projects"
            onClick={() => soundEffects.playClick()}
            className="px-6 py-3 rounded-full bg-zinc-100 text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] transition-all flex items-center gap-2 group"
          >
            <span>Explore Engineering Work</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#gallery"
            onClick={() => soundEffects.playClick()}
            className="px-6 py-3 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300 font-mono font-medium text-xs uppercase tracking-wider hover:border-purple-500/50 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all flex items-center gap-2"
          >
            <Palette className="w-3.5 h-3.5 text-purple-400" />
            <span>Visual Arts Gallery (@sufii.raw)</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
          Scroll Down
        </span>
        <div className="w-4 h-7 rounded-full border border-zinc-700 flex justify-center p-1">
          <div className="w-1 h-1.5 bg-cyan-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

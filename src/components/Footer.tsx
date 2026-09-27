"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Terminal, Instagram, Github, Mail, Linkedin, ShieldCheck } from "lucide-react";
import { soundEffects } from "./AudioController";

export default function Footer() {
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZoneName: "short",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    soundEffects.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] border-t border-zinc-900 py-12 relative overflow-hidden">
      {/* Subtle Ambient Violet/Cyan Atmosphere */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[200px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-8 sm:pb-10 border-b border-zinc-900 text-xs font-mono">
          {/* Identity */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-bold text-sm tracking-wider">
              <span className="w-2 h-2 bg-cyan-400 rounded-full" />
              <span>MUHAMMAD SUFYAN</span>
            </div>
            <p className="text-zinc-500 font-sans text-xs leading-relaxed">
              Frontend Developer & Visual Designer bridging clean code architecture, editorial typography, and automotive/streetwear poster aesthetics.
            </p>
          </div>

          {/* Core Links */}
          <div className="space-y-2">
            <span className="text-zinc-400 font-semibold tracking-wider uppercase block">
              // INDEX NAVIGATION
            </span>
            <ul className="space-y-1.5 text-zinc-500">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  01. About & Dual Focus
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">
                  02. Featured Projects
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-cyan-400 transition-colors">
                  03. Design Gallery (@sufii.raw)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  04. Contact & Dispatch
                </a>
              </li>
            </ul>
          </div>

          {/* Social Presence */}
          <div className="space-y-2">
            <span className="text-zinc-400 font-semibold tracking-wider uppercase block">
              // NETWORK PROFILES
            </span>
            <ul className="space-y-1.5 text-zinc-500">
              <li>
                <a
                  href="https://www.linkedin.com/in/muhammad-sufyan-0b8243378"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  <span>LinkedIn: Muhammad Sufyan</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/muhammadsufya26-ai"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub: @muhammadsufya26-ai</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/sufii.raw"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-purple-400 transition-colors flex items-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5 text-purple-400" />
                  <span>Instagram: @sufii.raw</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:whotfsufii@gmail.com"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>whotfsufii@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Local System Telemetry */}
          <div className="space-y-2">
            <span className="text-zinc-400 font-semibold tracking-wider uppercase block">
              // TELEMETRY & CLOCK
            </span>
            <div className="p-3 rounded bg-zinc-950 border border-zinc-900 space-y-1">
              <div className="text-zinc-500 text-[10px]">LOCAL TIME:</div>
              <div className="text-cyan-400 text-sm font-bold tracking-wider">
                {timeString || "00:00:00 UTC"}
              </div>
              <div className="text-[10px] text-zinc-600">
                GALLERY: 9 ARCHIVES ACTIVE // 0 ZERO-G GLITCH
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-600">
          <div>
            © {new Date().getFullYear()} MUHAMMAD SUFYAN (SUFII). ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-zinc-500 hidden md:inline">
              STACK: NEXT.JS 14 // TAILWIND // FRAMER MOTION // TS
            </span>
            <button
              onClick={scrollToTop}
              className="px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all flex items-center gap-1.5 text-[11px] font-mono"
              title="Return to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Volume2,
  VolumeX,
  Menu,
  X,
  ArrowUpRight,
  Terminal,
  Github,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import { soundEffects } from "./AudioController";

const NAV_ITEMS = [
  { label: "About", href: "#about", index: "01" },
  { label: "Work", href: "#projects", index: "02" },
  { label: "Gallery", href: "#gallery", index: "03" },
  { label: "Contact", href: "#contact", index: "04" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundActive, setSoundActive] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSound = () => {
    const next = soundEffects.toggleSound();
    setSoundActive(next);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/85 backdrop-blur-md border-b border-zinc-800/80 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo / Identity */}
          <a
            href="#"
            onClick={() => soundEffects.playClick()}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center font-mono text-cyan-400 group-hover:border-cyan-400/80 group-hover:shadow-[0_0_12px_rgba(0,240,255,0.4)] transition-all">
              <Terminal className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs tracking-wider text-zinc-400 uppercase">
                Muhammad Sufyan
              </span>
              <span className="font-bold text-sm tracking-tight text-white flex items-center gap-1.5">
                SUFII<span className="text-cyan-400 font-mono text-xs">.DEV</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onMouseEnter={() => soundEffects.playHover()}
                onClick={() => soundEffects.playClick()}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono text-zinc-400 hover:text-cyan-300 hover:bg-zinc-900/60 transition-all flex items-center gap-1.5 border border-transparent hover:border-zinc-800"
              >
                <span className="text-[10px] text-zinc-600 font-normal">
                  {item.index}
                </span>
                <span className="tracking-wide uppercase font-medium">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          {/* Status & Utility Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Live Status Badge */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-[11px] font-mono text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              <span className="text-zinc-300">OPEN FOR PROJECTS</span>
            </div>

            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              aria-label="Toggle Cyber Sound Effects"
              title={soundActive ? "Mute Cyber FX" : "Enable Cyber FX"}
              className="p-2 rounded-full bg-zinc-900/70 border border-zinc-800 hover:border-cyan-500/50 hover:text-cyan-400 text-zinc-400 transition-all"
            >
              {soundActive ? (
                <Volume2 className="w-4 h-4 text-cyan-400" />
              ) : (
                <VolumeX className="w-4 h-4 text-zinc-500" />
              )}
            </button>

            {/* Contact CTA */}
            <a
              href="#contact"
              onClick={() => soundEffects.playClick()}
              className="relative group overflow-hidden px-4 py-1.5 rounded-full bg-cyan-400 text-black font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] flex items-center gap-1"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleSound}
              className="p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400"
              aria-label="Toggle sound"
            >
              {soundActive ? (
                <Volume2 className="w-4 h-4 text-cyan-400" />
              ) : (
                <VolumeX className="w-4 h-4 text-zinc-500" />
              )}
            </button>

            <button
              onClick={() => {
                soundEffects.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-cyan-400"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-zinc-800 p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 pb-3 border-b border-zinc-800/80">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs text-zinc-400 tracking-wider">
                  STATUS: AVAILABLE FOR FREELANCE & ROLES
                </span>
              </div>

              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    soundEffects.playClick();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-between py-2 text-zinc-300 hover:text-cyan-400 border-b border-zinc-900 font-mono text-sm tracking-wide"
                >
                  <span className="font-sans font-semibold text-lg">{item.label}</span>
                  <span className="text-zinc-600 text-xs">[{item.index}]</span>
                </a>
              ))}

              <div className="pt-2 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 bg-cyan-400 text-black font-mono font-bold text-xs uppercase tracking-wider rounded-full shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                >
                  Initiate Transmission (Contact)
                </a>

                {/* Social links row */}
                <div className="flex items-center justify-center gap-3 pt-2">
                  <a
                    href="https://github.com/muhammadsufya26-ai"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://instagram.com/sufii.raw"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-purple-400"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/muhammad-sufyan-0b8243378"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-blue-400"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:whotfsufii@gmail.com"
                    className="p-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-cyan-400"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Palette,
  ExternalLink,
  Instagram,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ZoomIn,
} from "lucide-react";
import { soundEffects } from "./AudioController";
import type { DesignFolder } from "@/lib/designs";

interface DesignGalleryProps {
  initialFolders?: DesignFolder[];
}

export default function DesignGallery({ initialFolders = [] }: DesignGalleryProps) {
  const [folders, setFolders] = useState<DesignFolder[]>(initialFolders);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeFolder, setActiveFolder] = useState<DesignFolder | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Sync with initialFolders if provided or updated
  useEffect(() => {
    if (initialFolders.length > 0) {
      setFolders(initialFolders);
    }
  }, [initialFolders]);

  // Always fetch latest folders from API on mount to guarantee real-time file reflection
  useEffect(() => {
    fetch("/api/designs", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (data?.folders && Array.isArray(data.folders)) {
          setFolders(data.folders);
        }
      })
      .catch((err) => console.error("Failed to load design folders:", err));
  }, []);

  // Extract unique categories
  const categories = React.useMemo(() => {
    const set = new Set<string>();
    folders.forEach((f) => set.add(f.category));
    return ["All", ...Array.from(set)];
  }, [folders]);

  const filteredFolders =
    selectedCategory === "All"
      ? folders
      : folders.filter((f) => f.category === selectedCategory);

  // Modal open/close handlers
  const openFolderModal = (folder: DesignFolder) => {
    soundEffects.playClick();
    setActiveFolder(folder);
    setCurrentImageIndex(0);
  };

  const closeFolderModal = useCallback(() => {
    soundEffects.playClick();
    setActiveFolder(null);
  }, []);

  const nextImage = useCallback(() => {
    if (!activeFolder) return;
    soundEffects.playClick();
    setCurrentImageIndex((prev) => (prev + 1) % activeFolder.images.length);
  }, [activeFolder]);

  const prevImage = useCallback(() => {
    if (!activeFolder) return;
    soundEffects.playClick();
    setCurrentImageIndex((prev) =>
      prev === 0 ? activeFolder.images.length - 1 : prev - 1
    );
  }, [activeFolder]);

  // Keyboard controls: ESC to close, ArrowLeft / ArrowRight to navigate
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeFolder) return;

      if (e.key === "Escape") {
        closeFolderModal();
      } else if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeFolder, closeFolderModal, nextImage, prevImage]);

  return (
    <section id="gallery" className="py-24 relative cyber-bg border-b border-zinc-900 overflow-hidden">
      {/* Ambient Purple/Violet Glowing Atmospheric Depth */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-zinc-900 gap-6">
          <div>
            <div className="flex items-center gap-2 text-purple-400 font-mono text-xs tracking-wider uppercase mb-2">
              <span className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse shadow-[0_0_8px_#c084fc]" />
              <span>// 03. VISUAL ARCHIVE & EDITORIAL ART</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
              DESIGN GALLERY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                CURATED BY @SUFII.RAW
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2">
            <a
              href="https://instagram.com/sufii.raw"
              target="_blank"
              rel="noreferrer"
              onClick={() => soundEffects.playClick()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900/90 border border-zinc-800 hover:border-purple-400 text-xs font-mono text-purple-300 hover:text-white transition-all group shadow-lg"
            >
              <Instagram className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
              <span>Follow @sufii.raw on Instagram</span>
              <ExternalLink className="w-3 h-3 text-zinc-500" />
            </a>
            <span className="text-[11px] font-mono text-zinc-500">
              {folders.reduce((acc, f) => acc + (f.images?.length || 0), 0)} TOTAL ARTWORKS LOADED FROM ARCHIVE
            </span>
          </div>
        </div>

        {/* Category Filter Pills - Sleek Rounded Capsules */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                soundEffects.playHover();
                setSelectedCategory(category);
              }}
              className={`px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all border ${
                selectedCategory === category
                  ? "bg-white text-black border-white font-bold shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                  : "bg-zinc-950 text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dynamic Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFolders.map((folder, index) => (
            <motion.div
              key={folder.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              onClick={() => openFolderModal(folder)}
              className="group cursor-pointer rounded-2xl bg-zinc-950/80 border border-zinc-800/80 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all overflow-hidden flex flex-col justify-between shadow-xl relative"
            >
              {/* Poster Visual Container */}
              <div className="relative aspect-[3/4] p-5 bg-gradient-to-b from-zinc-900/60 to-black flex flex-col justify-between overflow-hidden border-b border-zinc-900 group-hover:border-zinc-700">
                {/* Real Cover Image */}
                {folder.coverImage && (
                  <div className="absolute inset-0 z-0">
                    <img
                      src={folder.coverImage}
                      alt={folder.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center brightness-[0.75] contrast-[1.1] group-hover:brightness-[0.90] group-hover:scale-105 transition-all duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70 pointer-events-none" />
                  </div>
                )}

                {/* Noise grain texture effect */}
                <div className="absolute inset-0 opacity-25 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Top Poster Meta */}
                <div className="relative z-10 flex items-start justify-between font-mono text-[10px] text-zinc-300">
                  <div className="flex flex-col">
                    <span className="font-bold tracking-widest text-cyan-400 px-2 py-0.5 rounded-full bg-black/60 border border-cyan-500/40 backdrop-blur-sm">
                      {folder.category}
                    </span>
                    <span className="text-zinc-400 mt-1 font-semibold text-[9px] drop-shadow">
                      RAW_EDITION // 2026
                    </span>
                  </div>
                  <span className="text-right text-xs text-white/90 font-medium px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-sm">
                    {folder.headlineJP}
                  </span>
                </div>

                {/* Center Poster Graphical Typography */}
                <div className="relative z-10 text-center space-y-1.5 my-auto py-6">
                  <div className="text-2xl sm:text-3xl font-black uppercase tracking-tighter leading-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] break-words">
                    {folder.title.split("//")[0]}
                  </div>
                  {folder.title.split("//")[1] && (
                    <div className="font-mono text-[10px] tracking-widest uppercase font-semibold text-cyan-300 drop-shadow">
                      {folder.title.split("//")[1]}
                    </div>
                  )}
                  <p className="text-[10px] font-mono text-zinc-300 max-w-[240px] mx-auto opacity-90 drop-shadow line-clamp-2">
                    {folder.quote}
                  </p>
                </div>

                {/* Bottom Poster Barcode & Technical Marks */}
                <div className="relative z-10 flex items-end justify-between font-mono text-[9px] text-zinc-300 border-t border-white/20 pt-2.5 backdrop-blur-[2px]">
                  <div className="flex flex-col">
                    <span className="text-white font-bold drop-shadow">@SUFII.RAW</span>
                    <span className="text-cyan-300 font-semibold">{folder.images.length} ARTWORKS</span>
                  </div>
                  {/* Stylized Barcode */}
                  <div className="flex items-center gap-[2px] h-4 opacity-80">
                    <div className="w-[1px] h-full bg-white" />
                    <div className="w-[3px] h-full bg-white" />
                    <div className="w-[1px] h-full bg-white" />
                    <div className="w-[2px] h-full bg-white" />
                    <div className="w-[1px] h-full bg-white" />
                    <div className="w-[4px] h-full bg-white" />
                    <div className="w-[2px] h-full bg-white" />
                  </div>
                </div>

                {/* Hover Quick Action Indicator */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 backdrop-blur-[3px] transition-opacity flex items-center justify-center gap-2 text-white font-mono text-xs font-semibold z-20">
                  <ZoomIn className="w-4 h-4 text-cyan-400" />
                  <span>Open Collection ({folder.images.length})</span>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="p-4 bg-zinc-950 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white font-mono group-hover:text-cyan-400 transition-colors">
                    {folder.title}
                  </h4>
                  <p className="text-[11px] text-zinc-500 font-sans mt-0.5 line-clamp-1">
                    {folder.details}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-cyan-400 group-hover:border-cyan-400/60 transition-all shrink-0 ml-2">
                  <Eye className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* In-Site Interactive Modal / Lightbox */}
        <AnimatePresence>
          {activeFolder && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6"
              onClick={closeFolderModal}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 15 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-5xl max-h-[94vh] rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col shadow-2xl relative overflow-hidden"
              >
                {/* Modal Top Bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/50 text-cyan-400">
                      {activeFolder.category}
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-white uppercase tracking-tight">
                        {activeFolder.title}
                      </h3>
                      <div className="text-[11px] font-mono text-zinc-500">
                        {activeFolder.headlineJP} // ARCHIVE ID: {activeFolder.id}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-zinc-400 mr-2 hidden sm:inline">
                      [ESC to close]
                    </span>
                    <button
                      onClick={closeFolderModal}
                      className="p-2.5 rounded-full bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-600 transition-colors"
                      title="Close modal (Esc)"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Modal Main Viewport: Large Active Image with Prev/Next Controls */}
                <div className="relative flex-1 min-h-[300px] sm:min-h-[420px] max-h-[58vh] bg-black flex items-center justify-center p-4 overflow-hidden select-none">
                  {/* Active Image */}
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeFolder.images[currentImageIndex]}
                      src={activeFolder.images[currentImageIndex]}
                      alt={`${activeFolder.title} - ${currentImageIndex + 1}`}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="max-h-[55vh] sm:max-h-[58vh] w-full object-contain rounded shadow-2xl"
                    />
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  {activeFolder.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        aria-label="Previous Image"
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 border border-zinc-700/80 text-white hover:text-cyan-400 hover:border-cyan-400 transition-all backdrop-blur-md shadow-lg"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        aria-label="Next Image"
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/70 border border-zinc-700/80 text-white hover:text-cyan-400 hover:border-cyan-400 transition-all backdrop-blur-md shadow-lg"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}

                  {/* Image Counter Badge */}
                  <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/80 border border-zinc-800 backdrop-blur-md font-mono text-xs text-zinc-300">
                    <span className="text-cyan-400 font-bold">
                      {String(currentImageIndex + 1).padStart(2, "0")}
                    </span>{" "}
                    / {String(activeFolder.images.length).padStart(2, "0")}
                  </div>

                  {/* Fullscreen Link */}
                  <a
                    href={activeFolder.images[currentImageIndex]}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute bottom-4 right-4 p-2 rounded-full bg-black/80 border border-zinc-800 text-zinc-400 hover:text-white backdrop-blur-md transition-colors flex items-center gap-1.5 text-xs font-mono"
                    title="View full resolution in new tab"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Full Res</span>
                  </a>
                </div>

                {/* Modal Bottom: Thumbnails & Specs */}
                <div className="p-4 sm:p-5 bg-zinc-950 border-t border-zinc-900 flex flex-col gap-3 overflow-y-auto max-h-[30vh]">
                  {/* Thumbnails strip */}
                  {activeFolder.images.length > 1 && (
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
                      {activeFolder.images.map((img, idx) => (
                        <button
                          key={img}
                          onClick={() => {
                            soundEffects.playClick();
                            setCurrentImageIndex(idx);
                          }}
                          className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                            currentImageIndex === idx
                              ? "border-cyan-400 shadow-[0_0_12px_rgba(0,240,255,0.5)] scale-105"
                              : "border-zinc-800 opacity-60 hover:opacity-100 hover:border-zinc-600"
                          }`}
                        >
                          <img
                            src={img}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Bottom Meta Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-zinc-900 font-mono text-xs text-zinc-400">
                    <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                      {activeFolder.details}
                    </p>

                    <div className="flex items-center gap-3 shrink-0">
                      <a
                        href="https://instagram.com/sufii.raw"
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold uppercase transition-all flex items-center gap-1.5 shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                      >
                        <Instagram className="w-3.5 h-3.5" />
                        <span>@sufii.raw</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

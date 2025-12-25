"use client";

import React, { useState, useEffect, useRef } from 'react';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS } from '@/lib/constants';
import { Github, ExternalLink, ArrowLeft, X, Maximize2, Cpu, Terminal, Box, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

export default function ProjectPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const params = useParams() as { id: string };
  const project = PROJECTS.find((p) => p.id === params.id);

  // Scroll Progress for that "Leaky" loading bar feel
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!project) return notFound();

  const heroImage = project.images[0];
  const galleryImages = project.images.slice(1);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-zinc-400 font-mono selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* 1. SYSTEM LOADING BAR */}
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-blue-600 z-[70] origin-left" style={{ scaleX }} />

      {/* 2. LEAKY NAV */}
      <nav className="fixed top-0 w-full z-[60] border-b border-white/5 bg-[#050505]/90 backdrop-blur-md px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] tracking-widest">
          <Link href="/#work" className="flex items-center gap-2 hover:text-white transition-colors group">
            <span className="text-zinc-700">{"<"}</span> [ ROOT_DIR ]
          </Link>
          <div className="flex items-center gap-6">
            <span className="hidden md:inline text-zinc-800 tracking-tighter">SYS/LOG/PRJ_{project.id.toUpperCase()}</span>
            <div className="flex gap-4">
               <a href={project.github} target="_blank" className="text-zinc-500 hover:text-white uppercase">{"{"} GitHub {"}"}</a>
               <a href={project.link} target="_blank" className="text-blue-500 hover:text-blue-400 uppercase">{"{"} Live {"}"}</a>
            </div>
          </div>
        </div>
      </nav>

      {/* 3. HERO SECTION */}
      <section className="relative pt-12 w-full aspect-video md:aspect-21/9 md:h-auto h-[50vh] border-b border-white/5 overflow-hidden">
        <Image 
          src={heroImage} 
          alt="Hero" 
          fill 
          className="object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60" />
        <div className="absolute bottom-12 left-6 md:left-12 space-y-4">
            <div className="flex items-center gap-3">
                <span className="text-[10px] text-blue-500 border border-blue-500/20 px-2 py-0.5 bg-blue-500/5 uppercase font-bold tracking-widest">
                    {project.status}
                </span>
                <span className="text-[10px] text-zinc-800 uppercase tracking-widest">Build_{project.year}</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-9xl font-bold tracking-tighter text-white uppercase leading-none">
                {project.title}
            </h1>
        </div>
      </section>

      {/* 4. CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        
        {/* NARRATIVE SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-8 space-y-16">
            <div className="space-y-6">
                <div className="flex items-center gap-2">
                    <Terminal className="w-3 h-3 text-blue-500" />
                    <span className="text-[10px] uppercase text-zinc-600 tracking-[0.4em]">01 // Project_Manifest</span>
                </div>
                <p className="text-2xl md:text-4xl font-bold text-white tracking-tight leading-[1.1]">
                    {project.overview}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-zinc-900 pt-12">
                <div className="space-y-4">
                    <span className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">{"[ CHALLENGE ]"}</span>
                    <p className="text-sm leading-relaxed text-zinc-500">{project.problemStatement}</p>
                </div>
                <div className="space-y-4">
                    <span className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">{"[ SOLUTION ]"}</span>
                    <p className="text-sm leading-relaxed text-zinc-500">{project.solutionApproach}</p>
                </div>
            </div>
          </div>

          <aside className="lg:col-span-4 p-6 bg-[#080808] border border-zinc-900 rounded-sm space-y-8">
            <h4 className="text-[10px] text-zinc-600 uppercase tracking-widest flex items-center gap-2">
                <Cpu className="w-3 h-3" /> Stack_Log
            </h4>
            <div className="space-y-4">
                {Object.entries(project.tech).map(([category, skills]) => (
                    <div key={category}>
                        <p className="text-[8px] text-zinc-800 uppercase mb-2">_{category}</p>
                        <div className="flex flex-wrap gap-2">
                            {skills.map(s => <span key={s} className="text-[11px] text-zinc-400 bg-zinc-900 border border-white/5 px-2 py-1">{s}</span>)}
                        </div>
                    </div>
                ))}
            </div>
          </aside>
        </div>

        {/* 5. INTERACTIVE CAROUSEL SECTION */}
        <section className="space-y-8">
            <div className="flex justify-between items-end">
                <div className="space-y-2">
                    <span className="text-[10px] uppercase text-zinc-600 tracking-[0.4em]">02 // Interface_Logs</span>
                    <h3 className="text-2xl font-bold text-white uppercase tracking-tighter">Asset_Visualizer</h3>
                </div>
                <div className="flex gap-2">
                    <button onClick={() => scrollCarousel('left')} className="p-2 cursor-pointer border border-zinc-800 hover:bg-zinc-900 transition-colors">
                        <ChevronLeft className="w-4 h-4 text-zinc-400" />
                    </button>
                    <button onClick={() => scrollCarousel('right')} className="p-2 cursor-pointer border border-zinc-800 hover:bg-zinc-900 transition-colors">
                        <ChevronRight className="w-4 h-4 text-zinc-400" />
                    </button>
                </div>
            </div>

            <div 
                ref={carouselRef}
                className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8 -mx-6 px-6 cursor-grab active:cursor-grabbing"
            >
                {galleryImages.map((img, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -5 }}
                        onClick={() => setSelectedImage(img)}
                        className="relative min-w-[300px] md:min-w-[600px] aspect-video bg-zinc-900 border border-zinc-800 snap-center overflow-hidden shrink-0 group"
                    >
                        <div className="absolute top-2 left-2 z-10 text-[8px] text-zinc-500 uppercase tracking-tighter bg-black/40 px-1">
                            LOG_ID: {project.id}_{i}
                        </div>
                        <Image 
                            src={img} 
                            alt={`Slide ${i}`} 
                            fill 
                            className="object-cover opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" 
                        />
                        <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Maximize2 className="w-6 h-6 text-white" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* OUTCOMES LOG */}
        <section className="border-t border-zinc-900 pt-24 pb-12">
            <div className="space-y-12">
                <div className="flex items-center gap-2">
                    <Box className="w-3 h-3 text-blue-500" />
                    <span className="text-[10px] uppercase text-zinc-600 tracking-[0.4em]">03 // Deployment_Outcomes</span>
                </div>
                <ul className="space-y-8">
                    {project.outcomes.map((outcome, i) => (
                        <li key={i} className="flex gap-6 items-start group">
                            <span className="text-blue-600 font-bold text-lg mt-1 group-hover:translate-x-1 transition-transform">↳</span>
                            <p className="text-xl md:text-3xl text-zinc-300 font-bold tracking-tighter italic">
                                {outcome}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>

      </div>

      {/* LIGHTBOX MODAL (REMAIN UNCHANGED) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-2xl p-4 flex items-center justify-center cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <div className="absolute top-8 right-8 text-[10px] text-zinc-500 tracking-widest uppercase">[ CLOSE_VIEW ]</div>
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} className="relative w-full max-w-6xl aspect-video" onClick={(e) => e.stopPropagation()}>
              <Image src={selectedImage} alt="Fullscreen" fill className="object-contain" priority />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="py-24 border-t border-zinc-900 text-center">
         <Link href="/#work" className="text-[10px] text-zinc-800 hover:text-blue-500 transition-all uppercase tracking-[1em]">
            [ RE_INITIALIZE_MANIFEST ]
         </Link>
      </footer>
    </main>
  );
}
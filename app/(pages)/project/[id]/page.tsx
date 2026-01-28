"use client";

import React, { useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS } from '@/lib/constants';
import { Github, Terminal, Cpu, Box, Activity, ChevronLeft, Globe, ChevronRight, X, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectPage() {
  const params = useParams() as { id: string };
  const project = PROJECTS.find((p) => p.id === params.id);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showPreview, setShowPreview] = useState(false);

  if (!project) return notFound();

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % project.images.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + project.images.length) % project.images.length);

  return (
    <motion.main 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className="min-h-screen bg-white dark:bg-[#050505] text-zinc-600 dark:text-zinc-400 font-mono pt-24 md:pt-32 px-3"
    >
      <div className="max-w-4xl mx-auto space-y-20">
        
        {/* HEADER BLOCK (As refined previously) */}
        <section className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <Link href="/project" className="text-[10px] text-zinc-600 dark:text-zinc-600 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2 transition-colors">
                <ChevronLeft size={12} /> [ RETURN_TO_REGISTRY ]
              </Link>
              <h1 className="text-3xl md:text-7xl font-black text-black dark:text-white tracking-tighter uppercase leading-none">
                {project.title}
              </h1>
            </div>
            <div className="flex gap-3">
              <a href={project.github} className="px-4 py-2 border border-zinc-400 dark:border-zinc-900 bg-gray-100 dark:bg-zinc-950 text-black dark:text-white text-[10px] font-black uppercase hover:border-zinc-600 dark:hover:border-white transition-all">
                <Github size={14} className="inline mr-2" /> Source
              </a>
              <a href={project.link} className="px-4 py-2 border border-blue-600 dark:border-blue-900 bg-blue-100 dark:bg-blue-900/10 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white transition-all">
                <Globe size={14} className="inline mr-2" /> Live
              </a>
            </div>
          </div>
        </section>

        {/* --- SYSTEM ASSET VISUALIZER (The Carousel) --- */}
        <section className="space-y-4">
          <div className="flex justify-between items-center text-[10px] font-black text-zinc-600 dark:text-zinc-700 uppercase">
            <span className="flex items-center gap-2">
              <Activity size={12} /> Asset_Frame_0{activeIndex + 1} // Total_{project.images.length}
            </span>
            <div className="flex gap-2">
              <button onClick={prevSlide} className="cursor-pointer p-2 border border-zinc-400 dark:border-zinc-900 hover:bg-gray-200 dark:hover:bg-zinc-900"><ChevronLeft size={14}/></button>
              <button onClick={nextSlide} className="cursor-pointer p-2 border border-zinc-400 dark:border-zinc-900 hover:bg-gray-200 dark:hover:bg-zinc-900"><ChevronRight size={14}/></button>
            </div>
          </div>

          {/* Main Stage */}
          <div 
            className="relative aspect-video border border-zinc-400 dark:border-zinc-900 bg-gray-100 dark:bg-zinc-950 p-2 group cursor-pointer"
            onClick={() => setShowPreview(true)}
            tabIndex={0}
            aria-label="Preview Image"
            role="button"
          >
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIndex}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="relative h-full w-full transition-all duration-700"
              >
                <Image 
                  src={project.images[activeIndex]} 
                  alt="Asset Preview" 
                  fill 
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  priority
                />
              </motion.div>
            </AnimatePresence>
            {/* Visual Metadata Overlay */}
            <div className="absolute bottom-6 right-6 px-3 py-1 bg-black/60 dark:bg-black/80 border border-zinc-700 dark:border-zinc-800 text-[9px] text-zinc-400 dark:text-zinc-500 font-bold uppercase">
              {project.images[activeIndex].split('/').pop()?.split('.')[0]}
            </div>

            <div className="hidden group-hover:block absolute top-6 right-6 p-1 bg-black/60 dark:bg-black/80 border border-zinc-700 dark:border-zinc-800 text-[9px] text-zinc-400 dark:text-zinc-500 font-bold uppercase">
              <Maximize2 size={18} />
            </div>
          </div>

          {/* Preview Modal */}
          <AnimatePresence>
            {showPreview && (
              <motion.div
                key="modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-200 flex items-center justify-center bg-black/80 dark:bg-black/80"
                onClick={() => setShowPreview(false)}
                aria-modal="true"
                role="dialog"
              >
                <div
                  className="relative max-w-3xl w-full flex flex-col items-end"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setShowPreview(false)}
                    className="absolute cursor-pointer top-2 right-2 z-20 p-2 bg-black/60 dark:bg-black/60 rounded-full text-zinc-300 dark:text-zinc-300 hover:text-white dark:hover:text-white hover:bg-zinc-900 dark:hover:bg-zinc-900 transition"
                    aria-label="Close Preview"
                  >
                    <X size={18} />
                  </button>
                    <div className="w-full relative aspect-video bg-gray-100 dark:bg-zinc-900 overflow-hidden border border-zinc-400 dark:border-zinc-700 flex items-center justify-center">
                    <Image
                      src={project.images[activeIndex]}
                      alt="Asset Preview Full"
                      fill
                      className="object-contain"
                      sizes="(min-width: 768px) 80vw, 95vw"
                      priority
                    />
                  </div>
                  <div className="mt-3 text-xs text-zinc-600 dark:text-zinc-300 w-full px-2 text-center truncate">
                    {project.images[activeIndex].split('/').pop()?.split(".")[0]}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Thumbnail Buffer Track */}
          <div className="grid grid-cols-5 md:grid-cols-10 gap-2 h-24 md:h-12">
            {project.images.map((img, i) => (
              <button 
                key={i} 
                onClick={() => setActiveIndex(i)}
                className={`relative cursor-pointer h-full border transition-all ${activeIndex === i ? 'border-blue-600 dark:border-blue-600 opacity-100 scale-105 z-10' : 'border-zinc-400 dark:border-zinc-900 opacity-80 hover:opacity-60'}`}
              >
                <Image src={img} alt="Thumb" fill className="object-cover" />
              </button>
            ))}
          </div>
        </section>

        {/* NARRATIVE & LOGS */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-zinc-300 dark:border-zinc-900 pt-16">
          <div className="md:col-span-12 space-y-4">
            <span className="text-[10px] font-black text-zinc-600 dark:text-zinc-700 uppercase tracking-widest flex items-center gap-2">
              <Terminal size={12} className="text-blue-600 dark:text-blue-500" /> 01_Manifest_Summary
            </span>
            <p className="text-2xl md:text-3xl font-black text-black dark:text-white italic leading-tight">
              {project.overview}
            </p>
          </div>
          
          <div className="md:col-span-6 p-6 border border-zinc-300 dark:border-zinc-900 bg-gray-50 dark:bg-zinc-950/20">
            <h4 className="text-[10px] text-blue-600 dark:text-blue-900 font-black uppercase mb-4">{"// Input_Challenge"}</h4>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">{project.problemStatement}</p>
          </div>
          <div className="md:col-span-6 p-6 border border-zinc-300 dark:border-zinc-900 bg-gray-50 dark:bg-zinc-950/20">
            <h4 className="text-[10px] text-emerald-600 dark:text-emerald-900 font-black uppercase mb-4">{"// Output_Logic"}</h4>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">{project.solutionApproach}</p>
          </div>
        </section>

        {/* INFRASTRUCTURE */}
        <section className="space-y-8">
           <div className="flex items-center gap-3">
             <Cpu size={14} className="text-zinc-600 dark:text-zinc-700" />
             <span className="text-[10px] font-black text-zinc-600 dark:text-zinc-700 uppercase tracking-widest">Stack_Registry</span>
             <div className="h-px flex-1 bg-zinc-300 dark:bg-zinc-900" />
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
             {Object.entries(project.tech).map(([category, skills]) => (
               <div key={category} className="space-y-3">
                 <p className="text-[9px] text-zinc-600 dark:text-zinc-800 font-black uppercase tracking-widest">_{category}</p>
                 <div className="flex flex-wrap gap-1.5">
                   {(skills as string[]).map((s) => (
                     <span key={s} className="text-[9px] font-bold text-zinc-600 dark:text-zinc-400 border border-zinc-400 dark:border-zinc-900 px-2 py-0.5 bg-gray-100 dark:bg-black/40 uppercase">
                       {s}
                     </span>
                   ))}
                 </div>
               </div>
             ))}
           </div>
        </section>

        {/* OUTCOMES LOG */}
        <section className="space-y-8 pb-32">
          <div className="flex items-center gap-3">
            <Box size={14} className="text-emerald-600 dark:text-emerald-500" />
            <span className="text-[10px] font-black text-zinc-600 dark:text-zinc-700 uppercase tracking-widest">System_Outcomes</span>
          </div>
          <div className="divide-y divide-zinc-300 dark:divide-zinc-900 border border-zinc-300 dark:border-zinc-900">
            {project.outcomes.map((outcome, i) => (
              <div key={i} className="flex gap-6 p-6 bg-gray-50 dark:bg-zinc-950/30 group hover:bg-gray-100 dark:hover:bg-zinc-950 transition-colors items-start">
              <span className="text-blue-600 dark:text-blue-600 font-black text-xs shrink-0">[ SUCCESS_0{i+1} ]</span>
              <p className="text-lg text-zinc-700 dark:text-zinc-300 font-black uppercase tracking-tight italic">
                {outcome}
              </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </motion.main>
  );
}
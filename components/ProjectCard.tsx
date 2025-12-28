"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Terminal, Cpu, ArrowUpRight } from 'lucide-react';
import { Project } from '@/lib/constants'; 

type ProjectCardProps = {
  project: Project;
  index: number;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const heroImage = project.images[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative w-full border border-zinc-900 bg-zinc-950/30 hover:bg-zinc-950/80 transition-all duration-500 overflow-hidden"
    >
      {/* 1. SYSTEM HEADER */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-900 bg-black/40">
        <div className="flex items-center gap-3">
          <Terminal size={12} className="text-blue-500" />
          <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">
            {`Module_0x${index + 1 > 9 ? '' : '0'}${index + 1} // ${project.id}.manifest`}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[9px] text-zinc-700 font-bold uppercase tracking-tighter">
            Build: {project.year}
          </span>
          <div className="px-2 py-0.5 border border-zinc-800 text-[8px] text-zinc-500 font-black uppercase">
            {project.status}
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        
        {/* 2. IMAGE SECTION (45% Width) */}
        <div className="relative w-full lg:w-[45%] aspect-video lg:aspect-auto overflow-hidden border-r border-zinc-900">
          <Image
            src={heroImage}
            alt={project.title}
            fill
            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 opacity-40 group-hover:opacity-100"
          />
          {/* CRT/Scanline Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] z-10 bg-[length:100%_2px] pointer-events-none opacity-20" />
          
          <Link href={`/project/${project.id}`} className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/60">
             <div className="px-4 py-2 border border-white/20 backdrop-blur-md text-[10px] font-black text-white uppercase flex items-center gap-2">
                Open_System_Details <ArrowUpRight size={12} />
             </div>
          </Link>
        </div>

        {/* 3. CONTENT SECTION (55% Width) */}
        <div className="flex-1 p-8 flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            <div>
              <h3 className="text-4xl font-black text-white tracking-tighter uppercase leading-none mb-2">
                {project.title}
              </h3>
              <p className="text-[10px] text-blue-500 font-black uppercase tracking-[0.3em]">
                {project.role} @ {project.client}
              </p>
            </div>

            {/* Simplified Description Block */}
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-px bg-zinc-800" />
              <p className="text-sm text-zinc-400 leading-relaxed italic max-w-xl">
                {project.description}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-4 border-t border-zinc-900/50">
            {/* Tech Manifest (Frontend + Backend Slice) */}
            <div className="flex flex-wrap gap-1.5">
              {[...project.tech.frontend.slice(0, 2), ...project.tech.backend.slice(0, 1)].map((t) => (
                <span key={t} className="px-2 py-1 text-[8px] font-black text-zinc-600 border border-zinc-900 bg-black/40 uppercase tracking-tighter">
                  {t}
                </span>
              ))}
              <span className="px-2 py-1 text-[8px] font-black text-blue-900 border border-blue-900/20 bg-blue-900/5 uppercase tracking-tighter">
                + Details
              </span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-3">
              <a 
                href={project.github} 
                target="_blank" 
                className="p-2 border border-zinc-900 hover:border-zinc-500 text-zinc-600 hover:text-white transition-all shadow-sm"
              >
                <Github size={14} />
              </a>
              <a 
                href={project.link} 
                target="_blank" 
                className="p-2 border border-zinc-900 hover:border-zinc-500 text-zinc-600 hover:text-white transition-all shadow-sm"
              >
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Index Tag (Leaky Detail) */}
      <div className="absolute -bottom-2 -right-2 text-[60px] font-black text-white/[0.02] italic pointer-events-none select-none">
        0{index + 1}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
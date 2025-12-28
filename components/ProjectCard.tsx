"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Plus } from 'lucide-react';
// Import the Project type from your constants file
import { Project } from '@/lib/constants'; 

type ProjectCardProps = {
  project: Project;
  index: number;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  // Flatten the tech categories for the preview badges
  const previewTech = [
    ...project.tech.frontend.slice(0, 2), 
    ...project.tech.backend.slice(0, 1)
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative md:pb-0 pb-12 border-b md:border-0 border-zinc-900 last:border-0"
    >
      <div className="flex flex-col lg:flex-row md:gap-16 gap-8 items-start">

        {/* 1. Visual Fragment (60% Width) */}
        <div className="w-full lg:w-3/5 relative aspect-video bg-zinc-950 border border-zinc-900 group-hover:border-zinc-700 transition-colors overflow-hidden rounded-sm">
          {/* Frame Metadata */}
          <div className="absolute top-2 left-2 z-20 text-[10px] text-zinc-500 uppercase tracking-tighter bg-black/40 px-1 backdrop-blur-sm">
            SRC: {project.id}_v{project.year}.raw
          </div>

          <Link href={`/project/${project.id}`} className="block h-full w-full">
            <Image
              src={project.images[0]} // Use the first image as the cover
              alt={project.title}
              fill
              className="object-cover transition-all duration-700 scale-105 group-hover:scale-100 opacity-60 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent opacity-60" />
          </Link>

          {/* Overlay Tech Manifest */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            {/* Displaying main tech stack tags */}
            {previewTech.map((t: string) => (
              <span
                key={t}
                className="px-2 py-0.5 bg-black/60 border border-white/5 text-[9px] text-zinc-400 rounded-sm uppercase tracking-tighter backdrop-blur-md"
              >
                {t}
              </span>
            ))}
            {project.tech.frontend.length + project.tech.backend.length > 3 && (
              <span className="flex items-center gap-1 justify-center px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 text-[9px] text-blue-400 rounded-sm">
                <Plus size={7} /> MORE
              </span>
            )}
          </div>
        </div>

        {/* 2. Deployment Details (40% Width) */}
        <div className="w-full lg:w-2/5 space-y-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-blue-600 text-xs font-bold">
                {index + 1 > 9 ? `0x${index + 1}` : `0x0${index + 1}`}
              </span>
              <span className="text-[10px] text-zinc-600 tracking-widest uppercase border border-zinc-900 px-2 py-0.5">
                {project.status}
              </span>
            </div>

            <Link href={`/project/${project.id}`}  className="text-4xl md:text-5xl font-bold tracking-tighter text-white group-hover:text-blue-500 transition-colors leading-none">
              {project.title}
            </Link>

            <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">
              {project.role} @ {project.client}
            </p>
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed max-w-md border-l border-zinc-900 pl-6 py-1 italic">
            {project.description}
          </p>

          <div className="flex items-center gap-8">
            <Link
              href={`/project/${project.id}`}
              className="group/link flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest"
            >
              <span className="text-zinc-600">[</span> open_details <span className="text-zinc-600">]</span>
            </Link>

            <div className="flex gap-4 border-l border-zinc-900 pl-8">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-600 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-600 hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
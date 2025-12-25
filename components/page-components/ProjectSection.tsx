"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge } from '../ui/badge';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const PROJECTS = [
  {
    id: "quizard",
    title: "Quizard",
    client: "Self Project",
    role: "Lead Developer",
    description: "A specialized AI engine that transforms unstructured text and PDFs into structured assessments using LLM prompt engineering and vector processing.",
    status: "AI-Powered",
    tech: ["Next.js", "OpenAI SDK", "Supabase", "Tailwind"],
    image: "/projects/cover/quizard.png",
    github: "https://github.com/Manish6523/Quizard",
    link: "https://quizardio.netlify.app",
  },
  {
    id: "legacy-gifts",
    title: "Legacy Gifts",
    client: "Karmadude IT Solutions",
    role: "Full Stack Intern",
    description: "Architected a corporate gifting ecosystem focused on high-concurrency and secure distribution. Developed custom dashboards and integrated scalable Supabase schemas.",
    status: "Internship Project",
    tech: ["React", "Redux Toolkit", "Supabase", "Tailwind"],
    image: "/projects/cover/legacygifts.png",
    github: "https://github.com/Manish6523/corporate-gifting-website",
    link: "https://legacygift.netlify.app/",
  }
];

export default function ProjectSection() {
  return (
    <section id="work" className=" space-y-32 mb-32">
        <div className="pt-12 border-t border-white/5">
        <h3 className="text-sm font-mono text-zinc-600 mb-12 uppercase tracking-widest ">
          Projects
        </h3>

      <div className="md:space-y-30 space-y-16">
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative"
          >
            {/* Project Hero Wrapper */}
            <div className="flex flex-col lg:flex-row md:gap-12 gap-5 items-center">
              
              {/* Image Side - 60% Width */}
              <div className="w-full lg:w-3/5 overflow-hidden rounded-xl bg-zinc-900 border border-white/5 relative aspect-video group">
                <Link href={`/project/${project.id}`}>
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </Link>
                
                {/* Floating Tech Stack on Image */}
                <div className="absolute bottom-6 left-6 flex gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-2 py-1 bg-black/50 backdrop-blur-md border border-white/10 text-[9px] font-mono text-white/70 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Side - 40% Width */}
              <div className="w-full lg:w-2/5 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-zinc-700 font-mono text-xs">0{index + 1}</span>
                    <Badge variant="outline" className="text-[10px] border-zinc-800 text-zinc-500">
                      {project.status}
                    </Badge>
                  </div>
                  <h3 className="text-4xl font-bold tracking-tighter text-white">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                    {project.role} @ {project.client}
                  </p>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
                  {project.description}
                </p>

                <div className="pt-4 flex items-center gap-6">
                  <Link 
                    href={`/project/${project.id}`}
                    className="flex items-center gap-2 text-white font-bold text-sm hover:gap-4 transition-all"
                  >
                    View Project <ArrowRight className="w-4 h-4 text-blue-500" />
                  </Link>
                  <div className="h-px w-12 bg-zinc-800" />
                  <div className="flex gap-4">
                    <a href={project.github} target='_blank' className="text-zinc-600 hover:text-white transition-colors"><Github className="w-4 h-4" /></a>
                    <a href={project.link} target='_blank' className="text-zinc-600 hover:text-white transition-colors"><ExternalLink className="w-4 h-4" /></a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}
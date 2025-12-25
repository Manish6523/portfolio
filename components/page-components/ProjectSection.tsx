"use client";

import React from 'react';
import ProjectCard from '../ProjectCard';


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
    <section id="work" className="mb-32 font-mono">
      <div className="pt-12 border-t border-white/5">
        
        {/* Section Header */}
        <div className="flex justify-between items-end mb-16">
          <div className="space-y-1">
            <h3 className="text-[10px] uppercase tracking-[0.5em] text-zinc-600">
              05 // Production_Deployments
            </h3>
            <h3 className="text-2xl font-bold text-white tracking-tighter">
              Deployment_History.log
            </h3>
          </div>
          <div className="text-right hidden md:block text-[9px] text-zinc-800 uppercase tracking-widest">
            Total_Entries: {PROJECTS.length}
          </div>
        </div>

        <div className="space-y-12 md:space-y-32">
          {PROJECTS.map((project, index) => (
            <ProjectCard project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
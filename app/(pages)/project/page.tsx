"use client";

import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/constants";
import ProjectCard from "@/components/ProjectCard";
import { Terminal, Cpu } from "lucide-react";

// Matches the About Page "Boot-up" Sequence
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.15, // Sequential loading of cards
      delayChildren: 0.2 
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)"
  }
};

const itemTransition = {
  duration: 0.5,
  ease: "easeOut" as const
};

export default function ProjectsPage() {
  return (
    <motion.main 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-[#050505] text-zinc-400 font-mono pt-32 pb-20 px-6"
    >
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* HEADER: INITIALIZATION LOGS */}
        <motion.header variants={itemVariants} transition={itemTransition} className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
             <Cpu className="w-4 h-4 text-blue-900 animate-pulse" />
             <span className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.4em]">
               Registry_v3.0 // Production_Assets
             </span>
          </div>
          <h1 className="text-3xl md:text-6xl font-black text-white tracking-tighter uppercase mb-6 leading-none">
            Technical_Output
          </h1>
          <div className="text-[10px] text-zinc-600 space-y-1 uppercase font-bold">
            <p>{">"} FETCHING_REMOTE_MODULES... DONE</p>
            {/* <p>{">"} VERIFYING_EXECUTION_LOGS... DONE</p> */}
          </div>
        </motion.header>

        {/* PROJECT LIST: STAGGERED REVEAL */}
        <div className="flex flex-col gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div key={project.id} variants={itemVariants} transition={itemTransition}>
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
}
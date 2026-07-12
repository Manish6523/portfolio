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
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

const itemTransition = {
  duration: 0.5,
  ease: "easeOut" as const,
};

export default function ProjectsPage() {
  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-white dark:bg-[#050505] text-zinc-600 dark:text-zinc-400 font-mono pt-32 pb-20 px-3"
    >
      <div className="max-w-4xl mx-auto space-y-16">
        {/* HEADER: INITIALIZATION LOGS */}
        <motion.header
          variants={itemVariants}
          className="border-b border-zinc-300 dark:border-zinc-900 pb-12 mb-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <Cpu className="w-4 h-4 text-blue-600" />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-zinc-600">
              Registry_v3.0 // Production_Assets
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-black dark:text-white tracking-tighter uppercase leading-none">
            Projects_
          </h1>
        </motion.header>

        {/* PROJECT LIST: STAGGERED REVEAL */}
        <div className="flex flex-col gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              transition={itemTransition}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
}

"use client";

import React from 'react';
import ProjectCard from '../ProjectCard';
import { PROJECTS } from '@/lib/constants';
import { motion } from 'framer-motion';
import SectionHeader from '../SectionHeader';


export default function ProjectSection() {
  return (
    <motion.section
      id="work"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-32 font-mono"
    >
      <div className="pt-20 border-t border-white/5">
        
        {/* Section Header */}
        <div className="flex justify-between items-end mb-16">
          <SectionHeader
            number="04"
            label="Production_Deployments"
            title="Deployment_History.log"
          />
          <div className="text-right hidden md:block text-[9px] text-zinc-800 uppercase tracking-widest">
            Total_Entries: {PROJECTS.length}
          </div>
        </div>

        <div className="space-y-12 md:space-y-32">
          {PROJECTS.map((project, index) => (
            <ProjectCard project={project} index={index} key={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
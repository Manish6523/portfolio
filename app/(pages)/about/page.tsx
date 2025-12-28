"use client";

import React from "react";
import Image from "next/image";
import { motion } from 'framer-motion';
import { Shield, Activity, Layers, Terminal, Code2 } from 'lucide-react';
import { 
  SiNextdotjs, SiTypescript, SiSupabase, SiPostgresql, 
  SiTailwindcss, SiFramer, SiMongodb, SiRedux, 
  SiJavascript, SiReact, SiHtml5, SiCss3, 
  SiNodedotjs, SiExpress, SiGithub 
} from 'react-icons/si';
import Link from "next/link";

// 1. CONFIGURATION: Centralized Tech Stack with href
const CORE_STACK = [
  { name: "HTML5", icon: <SiHtml5 />, category: "Markup", color: "text-orange-500", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS3", icon: <SiCss3 />, category: "Styling", color: "text-blue-500", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "JavaScript", icon: <SiJavascript />, category: "Logic", color: "text-yellow-400", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "TypeScript", icon: <SiTypescript />, category: "Logic", color: "text-blue-400", href: "https://www.typescriptlang.org/" },
  { name: "React.js", icon: <SiReact />, category: "Frontend", color: "text-cyan-400", href: "https://reactjs.org/" },
  { name: "Next.js 15", icon: <SiNextdotjs />, category: "Frontend", color: "text-white", href: "https://nextjs.org/" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, category: "Styling", color: "text-cyan-400", href: "https://tailwindcss.com/" },
  { name: "Redux Toolkit", icon: <SiRedux />, category: "State", color: "text-purple-500", href: "https://redux-toolkit.js.org/" },
  { name: "Node.js", icon: <SiNodedotjs />, category: "Backend", color: "text-green-500", href: "https://nodejs.org/" },
  { name: "Express.js", icon: <SiExpress />, category: "Backend", color: "text-gray-400", href: "https://expressjs.com/" },
  { name: "Supabase", icon: <SiSupabase />, category: "Backend", color: "text-emerald-500", href: "https://supabase.com/" },
  { name: "PostgreSQL", icon: <SiPostgresql />, category: "Database", color: "text-blue-300", href: "https://www.postgresql.org/" },
  { name: "MongoDB", icon: <SiMongodb />, category: "Database", color: "text-green-500", href: "https://www.mongodb.com/" },
  { name: "Framer Motion", icon: <SiFramer />, category: "Motion", color: "text-pink-500", href: "https://www.framer.com/motion/" },
  { name: "GitHub", icon: <SiGithub />, category: "Version_Control", color: "text-white", href: "https://github.com/" },
];


const CAPABILITIES = [
  { 
    id: "01",
    title: "Innovative_Architecture", 
    solve: "I design modular and maintainable systems that scale seamlessly as your product grows.",
    icon: <Layers className="w-4 h-4" /> 
  },
  { 
    id: "02", 
    title: "Error_Proof_Execution", 
    solve: "Leveraging TypeScript and strict validation to ensure reliable and bug-free applications.",
    icon: <Shield className="w-4 h-4" /> 
  },
  { 
    id: "03",
    title: "Real_Time_Collaboration", 
    solve: "Enabling live data synchronization and interactive features for dynamic user experiences.",
    icon: <Activity className="w-4 h-4" /> 
  }
];

// 2. ANIMATION VARIANTS
const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const itemVariants = {
  initial: { opacity: 0, y: 15, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.4, ease: [0.17, 0.67, 0.83, 0.67] as const } }
};

export default function AboutManifest() {
  return (
    <motion.main 
      variants={containerVariants}
      initial="initial"
      animate="animate"
      className="min-h-screen bg-[#050505] text-zinc-400 font-mono pt-24 pb-20 px-3"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* SECTION: HERO / SYSTEM HEADER */}
        <motion.header variants={itemVariants} className="border-b border-zinc-900 pb-12 mb-16 relative">
          <div className="flex items-center gap-3 mb-6">
             <div className="px-2 py-0.5 border border-blue-900 text-[10px] text-blue-500 font-black uppercase tracking-widest bg-blue-500/5">
               Portfolio_Verified
             </div>
             <span className="text-[10px] font-bold text-zinc-700 uppercase">Tech_Runtime: NextJS_15</span>
          </div>
          <h1 className="text-3xl md:text-7xl font-black text-white tracking-tighter uppercase mb-6 leading-none">
            Manish_Sharma
          </h1>
          <p className="max-w-2xl text-sm md:text-lg leading-relaxed text-zinc-500">
            I am a <span className="text-white italic">full-stack developer</span> passionate about turning ideas into robust, scalable software that drives real impact. My work bridges creativity, logic, and execution.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          
          {/* COLUMN LEFT: CAPABILITIES & TECH STACK */}
          <div className="md:col-span-8 space-y-20">
            
            {/* CAPABILITIES SECTION */}
            <section className="space-y-10">
              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <Terminal className="w-4 h-4 text-zinc-800" />
                <span className="text-[10px] font-black text-zinc-800 uppercase tracking-[0.4em]">Capabilities</span>
                <div className="h-px flex-1 bg-zinc-900" />
              </motion.div>

              <div className="space-y-12">
                {CAPABILITIES.map((cap) => (
                  <motion.div variants={itemVariants} key={cap.id} className="group relative pl-8 border-l border-zinc-900 hover:border-blue-600 transition-colors">
                    <div className="absolute -left-[1px] top-0 h-4 w-px bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] text-zinc-700 font-black">{cap.id}</span>
                      <h3 className="text-white text-sm font-black uppercase tracking-widest">{cap.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-zinc-500 group-hover:text-zinc-300 transition-colors">
                      {cap.solve}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* TECH STACK SECTION */}
            <section className="space-y-10">
              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <Code2 className="w-4 h-4 text-zinc-800" />
                <span className="text-[10px] font-black text-zinc-800 uppercase tracking-[0.4em]">Tech Stack</span>
                <div className="h-px flex-1 bg-zinc-900" />
              </motion.div>
              
              <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {CORE_STACK.map((tech, idx) => (
                  <Link href={tech?.href} target="_blank" key={idx} className="flex flex-col gap-2 p-4 border border-zinc-900 bg-zinc-950/30 hover:bg-zinc-900/50 transition-all group">
                    <div className={`text-2xl opacity-40 group-hover:opacity-100 transition-opacity ${tech.color}`}>
                      {tech.icon}
                    </div>
                    <div>
                      <p className="text-[10px] text-white font-bold uppercase truncate">{tech.name}</p>
                      <p className="text-[9px] text-zinc-700 font-black uppercase tracking-tighter">{tech.category}</p>
                    </div>
                  </Link>
                ))}
              </motion.div>
            </section>
          </div>

          {/* COLUMN RIGHT: PROFILE / METADATA */}
          <aside className="md:col-span-4 space-y-8">
            <motion.div variants={itemVariants} className="sticky top-24 space-y-8">
              
              {/* PORTRAIT BLOCK */}
              <div className="border border-zinc-900 p-2 bg-zinc-950 shadow-2xl shadow-blue-500/5">
                <div className="relative aspect-4/5 overflow-hidden grayscale contrast-[1.1] brightness-90 hover:grayscale-0 transition-all duration-700">
                  <Image 
                    src="/me02.png" 
                    alt="Manish Sharma" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay" />
                </div>
                <div className="p-4 space-y-3 bg-black">
                  <div className="flex justify-between items-center border-b border-zinc-900 pb-2">
                    <span className="text-[9px] text-zinc-700 font-black uppercase">Availability</span>
                    <span className="text-[9px] text-emerald-500 font-black uppercase">Open for Projects</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] text-zinc-700 font-black uppercase">Location</span>
                    <span className="text-[9px] text-zinc-400 font-black uppercase">Ahmedabad, India</span>
                  </div>
                </div>
              </div>

              {/* STATUS LOG */}
              <div className="space-y-2 p-4 bg-zinc-950 border border-zinc-900 text-[10px] leading-relaxed text-zinc-600 uppercase">
                <p className="mb-2 text-zinc-400"># Professional_Manifest</p>
                <p>{">"} I focus on creating scalable, maintainable, and high-performance applications.</p>
                <p>{">"} I optimize both user experience and code quality.</p>
                <p>{">"} I build solutions that stand the test of time.</p>
              </div>
            </motion.div>
          </aside>

        </div>
      </div>
    </motion.main>
  );
}

"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TIMELINE } from '@/lib/constants';
import { Terminal, Cpu, Activity, Circle } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.4 } }
};

export default function TimelinePage() {
  return (
    <motion.main 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-[#050505] text-zinc-400 font-mono pt-32 pb-20 px-3"
    >
      <div className="max-w-4xl mx-auto space-y-20">
        
        {/* HEADER: TEMPORAL REGISTRY */}
        <motion.header variants={itemVariants} className="border-b border-zinc-900 pb-12">
          <div className="flex items-center gap-3 mb-6">
             <Activity className="w-4 h-4 text-blue-600 animate-pulse" />
             <span className="text-[10px] font-black tracking-[0.4em] uppercase text-zinc-600">
               Temporal_Registry // Career_Logs
             </span>
          </div>
          <h1 className="text-3xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none">
            Execution_History
          </h1>
          <p className="max-w-xl text-sm mt-6 leading-relaxed text-zinc-500 italic">
            {">"} Sequential log of professional growth and academic foundations. 
            Focusing on architectural stability and system security across all nodes.
          </p>
        </motion.header>

        {/* TIMELINE FEED */}
        <div className="space-y-px bg-zinc-900 border border-zinc-900">
          {TIMELINE.map((entry, index) => (
            <motion.section 
              key={index}
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 p-5 md:p-10 bg-black hover:bg-zinc-950/50 transition-colors group"
            >
              {/* DATE COLUMN */}
              <div className="md:col-span-3 space-y-2">
                <span className="text-[10px] font-black text-blue-900 uppercase tracking-widest block">
                  [{entry.period}]
                </span>
                <div className="flex items-center gap-2">
                   <Circle size={8} className="fill-zinc-800 text-zinc-800 group-hover:fill-blue-600 group-hover:text-blue-600 transition-colors" />
                   <span className="text-[9px] text-zinc-800 font-black uppercase tracking-tighter">Verified_Node</span>
                </div>
              </div>

              {/* CONTENT COLUMN */}
              <div className="md:col-span-9 space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-none">
                    {entry.title}
                  </h3>
                  <p className="text-[10px] text-zinc-600 font-black uppercase mt-2 tracking-widest">
                    {entry.company}
                  </p>
                </div>

                <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl border-l border-zinc-900 pl-6 italic">
                  {entry.description}
                </p>

                {/* DETAILS LOG */}
                <div className="space-y-3 bg-zinc-950/50 p-6 border border-zinc-900/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal size={12} className="text-blue-500" />
                    <span className="text-[9px] font-black text-zinc-700 uppercase">Execution_Details</span>
                  </div>
                  <ul className="space-y-2">
                    {entry.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex gap-3 items-start">
                        <span className="text-blue-900 font-black text-[10px] mt-1">↳</span>
                        <p className="text-[11px] text-zinc-500 uppercase font-bold tracking-tight leading-normal">
                          {detail}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </motion.main>
  );
}
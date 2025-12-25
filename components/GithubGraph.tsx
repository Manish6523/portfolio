"use client";

import React from 'react';
import {GitHubCalendar} from 'react-github-calendar';
import { motion } from 'framer-motion';

export default function GithubSection() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="pt-12 border-t border-white/5 mb-32 font-mono"
    >
      {/* Header with System Numbering */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <div className="space-y-1">
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-zinc-600">
            03 // Activity_Log
          </h2>
          <h3 className="text-2xl font-bold text-white tracking-tighter">
            Engineering_Consistency.exe
          </h3>
        </div>
        <div className="text-right">
            <p className="text-[9px] text-zinc-700 uppercase tracking-widest">Data_Source: GitHub_API_V3</p>
            <p className="text-[10px] text-blue-500">{"[ STATUS: SYNCED ]"}</p>
        </div>
      </div>

      {/* The "Leaky" Container */}
      <div className="relative group p-6 bg-[#050505] border border-zinc-900 rounded-sm overflow-dden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[length:20px_20px] bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)]" />

        {/* Frame Markers */}
        <div className="absolute -top-2 -left-2 size-4 border-t border-l border-zinc-700" />
        <div className="absolute -top-2 -right-2 size-4 border-t border-r border-zinc-700" />
        <div className="absolute -bottom-2 -left-2 size-4 border-b border-l border-zinc-700" />
        <div className="absolute -bottom-2 -right-2 size-4 border-b border-r border-zinc-700" />

        <div className="relative flex justify-center grayscale contrast-125 opacity-60 group-hover:opacity-100 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 ease-in-out">
          <GitHubCalendar 
            username="Manish6523"
            fontSize={12}
            blockSize={12}
            blockMargin={4}
            colorScheme="dark"
            theme={{
              dark: ['#111111', '#064e3b', '#065f46', '#059669', '#10b981'],
            }}
          />
        </div>
      </div>
      
      {/* Footer System Details */}
      <div className="mt-4 flex justify-between items-center px-1">
        <div className="flex gap-4">
            <span className="text-[9px] text-zinc-800 uppercase tracking-widest font-bold">Enc: UTF-8</span>
            <span className="text-[9px] text-zinc-800 uppercase tracking-widest font-bold">Buffer: 1024KB</span>
        </div>
        <div className="text-[10px] text-zinc-600 italic">
          {"// "} Visualizing the execution-bias through commit frequency.
        </div>
      </div>
    </motion.div>
  );
}
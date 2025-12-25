"use client";

import React from 'react';
import {GitHubCalendar} from 'react-github-calendar';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

export default function GithubSection() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="pt-12 border-t border-white/5 mb-32"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="space-y-1">
          <h2 className="text-[10px] font-mono uppercase tracking-[0.5em] text-zinc-600">
            02 // Engineering Consistency
          </h2>
          <h3 className="text-xl font-bold text-white tracking-tighter">
            Open Source & Contribution Activity
          </h3>
        </div>
      </div>

      <SpotlightCard className="p-6 bg-zinc-950 border border-white/5 rounded-2xl overflow-hidden group">
        <div className="flex justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100">
          <GitHubCalendar 
            username="Manish6523" // Replace with your actual username
            fontSize={12}
            blockSize={11}
            blockMargin={4}
            colorScheme="dark"
            // Matching your UI colors: Zinc-900 to Emerald-500
            theme={{
              dark: ['#18181b', '#064e3b', '#065f46', '#059669', '#10b981'],
            }}
          />
        </div>
      </SpotlightCard>
      
      {/* <p className="mt-4 text-[10px] font-mono text-zinc-600 uppercase tracking-widest text-right">
        Live Data Synced via GitHub API
      </p> */}
    </motion.div>
  );
}
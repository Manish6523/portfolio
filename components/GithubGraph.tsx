"use client";

import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

// A hook for getting the current responsive breakpoint
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    // Set initial
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}

export default function GithubSection() {
  const {theme} = useTheme();  
  const isMobile = useIsMobile();

  // Reduce the block size, margin, and font size for mobile screens
  const blockSize = isMobile ? 7 : 12;
  const blockMargin = isMobile ? 2 : 4;
  const fontSize = isMobile ? 8 : 12;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-12 md:px-0 px-3 mb-12 font-mono"
    >
      {/* The "Leaky" Container */}
      <div className="relative group p-1 md:p-6 bg-white dark:bg-[#050505] border border-zinc-300 dark:border-zinc-900">
        {/* Decorative Grid Background */}
        <div className="absolute  inset-0 opacity-[0.03] pointer-events-none bg-size-[20px_20px] bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)]" />

        {/* Frame Markers */}
        <div className="absolute -top-2 -left-2 size-4 border-t border-l border-zinc-400 dark:border-zinc-700" />
        <div className="absolute -top-2 -right-2 size-4 border-t border-r border-zinc-400 dark:border-zinc-700" />
        <div className="absolute -bottom-2 -left-2 size-4 border-b border-l border-zinc-400 dark:border-zinc-700" />
        <div className="absolute -bottom-2 -right-2 size-4 border-b border-r border-zinc-400 dark:border-zinc-700" />

        {/* <SpotlightCard className="relative flex justify-center transition-all duration-700 ease-in-out"> */}
            <div className={`flex items-center justify-center ${isMobile ? "w-full overflow-x-auto px-1 " : "mx-auto"}`}>
            <GitHubCalendar 
              username="Manish6523"
              fontSize={fontSize}
              blockSize={blockSize}
              blockMargin={blockMargin}
              colorScheme={theme === 'dark' ? 'dark' : 'light'}
              theme={theme === 'dark' ? {
              dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              } : {
              light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
              }}
            />
            </div>
        {/* </SpotlightCard> */}
      </div>
      
      {/* Footer System Details */}
      <div className="mt-4 flex justify-between items-center px-1">
        <div className="flex gap-4">
            <span className="text-[9px] text-zinc-700 dark:text-zinc-800 uppercase tracking-widest font-bold">Enc: UTF-8</span>
            <span className="text-[9px] text-zinc-700 dark:text-zinc-800 uppercase tracking-widest font-bold">Buffer: 1024KB</span>
        </div>
        <div className="text-[10px] text-zinc-600 dark:text-zinc-600 italic hidden md:block">
          {"// "} Visualizing the execution-bias through commit frequency.
        </div>
      </div>
    </motion.div>
  );
}
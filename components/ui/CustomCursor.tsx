"use client";

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth follow for the HUD/Frame only
  const springConfig = { damping: 25, stiffness: 250 };
  const frameX = useSpring(cursorX, springConfig);
  const frameY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setCoords({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, .cursor-pointer, input, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseleave", () => setIsVisible(false));
    window.addEventListener("mouseenter", () => setIsVisible(true));
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  return (
    <>
      {/* 1. THE CORE CROSSHAIR (Zero Latency) */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          {/* Central Point */}
          <div className={`w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full transition-transform duration-300 ${isHovering ? 'scale-0' : 'scale-100'}`} />
          
          {/* Crosshair Lines */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-[1px] bg-blue-600/50 dark:bg-blue-400/50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-[1px] bg-blue-600/50 dark:bg-blue-400/50" />
        </div>
      </motion.div>

      {/* 2. THE LEAKY FRAME (Spring Follower) */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          x: frameX,
          y: frameY,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div 
          animate={{ 
            width: isHovering ? 40 : 20, 
            height: isHovering ? 40 : 20,
            rotate: isHovering ? 90 : 0
          }}
          className="relative -translate-x-1/2 -translate-y-1/2 border border-blue-600/20 dark:border-blue-400/20"
        >
          {/* Corner Brackets */}
          <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-blue-600 dark:border-blue-400" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-blue-600 dark:border-blue-400" />
        </motion.div>

        {/* HUD DATA LOG */}
        <div className="ml-8 -mt-2 space-y-0.5 font-mono">
            <div className="flex items-center gap-1.5">
                <div className={`w-1 h-1 rounded-full ${isHovering ? 'bg-blue-600 dark:bg-blue-400 animate-ping' : 'bg-zinc-400 dark:bg-zinc-700'}`} />
                <span className={`text-[8px] font-bold tracking-tighter transition-colors ${isHovering ? 'text-blue-600 dark:text-blue-400' : 'text-zinc-600 dark:text-zinc-500'}`}>
                    {isHovering ? 'SYSTEM_ENGAGED' : 'SCANNING_NODE'}
                </span>
            </div>
            <div className="text-[6px] text-zinc-700 dark:text-zinc-500 font-medium tabular-nums border-t border-zinc-300 dark:border-zinc-800 pt-0.5">
                POS_{coords.x.toString().padStart(4, '0')} // {coords.y.toString().padStart(4, '0')}
            </div>
        </div>
      </motion.div>

      {/* 3. GLOBAL CSS OVERRIDE */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}
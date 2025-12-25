"use client";

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // 1:1 Tracking (No jiggle)
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Subtle spring ONLY for the HUD elements (adds a "leaky" float feel to the text)
  const textX = useSpring(cursorX, { damping: 30, stiffness: 200 });
  const textY = useSpring(cursorY, { damping: 30, stiffness: 200 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
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
      {/* 1. THE MAIN POINTER (Zero Latency) */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          animate={{ 
            scale: isHovering ? 1.2 : 1,
            rotate: isHovering ? -15 : 0 
          }}
          className="relative"
        >
          {/* Sharp Modern Arrow Shape */}
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            className="text-blue-500 fill-current"
            style={{ transform: 'translate(-2px, -2px)' }}
          >
            <path d="M5.5 3.5L19 12L5.5 20.5V3.5Z" stroke="currentColor" strokeWidth="1" />
            <path d="M5.5 3.5L19 12L5.5 20.5V3.5Z" className="opacity-20" />
          </svg>
        </motion.div>
      </motion.div>

      {/* 2. THE LEAKY HUD (Subtle Spring Follower) */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          x: textX,
          y: textY,
          opacity: isVisible ? 0.4 : 0,
        }}
      >
        <div className="ml-8 mt-4 space-y-0.5 border-l border-blue-500/30 pl-2">
            <div className="flex items-center gap-1">
                <span className="text-[7px] text-zinc-500 font-mono">ST_</span>
                <span className={`text-[7px] font-bold font-mono transition-colors ${isHovering ? 'text-blue-500' : 'text-zinc-600'}`}>
                    {isHovering ? 'INTERACT_READY' : 'IDLE_SCAN'}
                </span>
            </div>
            <div className="text-[6px] text-zinc-700 font-mono tracking-tighter uppercase">
                X:{cursorX.get().toFixed(0)} Y:{cursorY.get().toFixed(0)}
            </div>
        </div>
      </motion.div>
    </>
  );
}
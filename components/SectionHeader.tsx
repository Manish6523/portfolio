"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  number: string;
  label: string;
  title: string;
  className?: string;
  titleClassName?: string;
}

export default function SectionHeader({ 
  number, 
  label, 
  title, 
  className = "",
  titleClassName = ""
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className={`space-y-1 ${className}`}
    >
      <h2 className="text-[10px] uppercase tracking-[0.4em] text-zinc-600">
        {number} // {label}
      </h2>
      <h3 className={`text-2xl font-bold text-white tracking-tighter ${titleClassName}`}>
        {title}
      </h3>
    </motion.div>
  );
}


"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TIMELINE } from "@/lib/constants";
import {
  Terminal,
  MapPin,
  Calendar,
  ChevronDown,
  TerminalIcon,
} from "lucide-react";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function TimelinePage() {
  const [activeNode, setActiveNode] = useState<number | null>(0);

  return (
    <motion.main
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-white dark:bg-[#030303] text-zinc-500 dark:text-zinc-500 font-mono pt-32 pb-32 px-4 selection:bg-blue-500/20"
    >
      <div className="max-w-3xl mx-auto">
        {/* HEADER // ARCHITECTURE OVERVIEW */}
        <motion.header
          variants={itemVariants}
          className="border-b border-zinc-300 dark:border-zinc-900 pb-12 mb-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <TerminalIcon className="w-4 h-4 text-blue-600" />
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-zinc-600">
              Chronicle // Life_Archive
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-black dark:text-white tracking-tighter uppercase leading-none">
            Experience_
          </h1>
        </motion.header>

        {/* TIMELINE STREAM */}
        <div className="relative border-l border-zinc-200 dark:border-zinc-900 ml-2 md:ml-4 pl-6 md:pl-10 space-y-16">
          {TIMELINE.map((entry, index) => {
            const isActive = activeNode === index;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                {/* DYNAMIC NODE TRACKER */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 z-20 flex items-center justify-center">
                  <button
                    onClick={() => setActiveNode(isActive ? null : index)}
                    className={`w-4 h-4 rounded-full border bg-white dark:bg-[#030303] flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "border-blue-600 dark:border-blue-500 ring-4 ring-blue-600/10 dark:ring-blue-500/10"
                        : "border-zinc-300 dark:border-zinc-800 group-hover:border-zinc-400 dark:group-hover:border-zinc-600"
                    }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-blue-600 dark:bg-blue-500 scale-110"
                          : "bg-zinc-300 dark:bg-zinc-800"
                      }`}
                    />
                  </button>
                </div>

                {/* METADATA STRIP */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] font-bold tracking-wider uppercase mb-2">
                  <div className="flex items-center gap-1.5 text-zinc-400 dark:text-zinc-600">
                    <Calendar size={11} />
                    <span>{entry.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-900 dark:text-zinc-100 ">
                    <MapPin size={11} />
                    <span>{entry.company}</span>
                  </div>
                  {entry.tag && (
                    <span className="text-[9px] px-1.5 py-0.5 rounded border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/40 text-zinc-600 dark:text-zinc-400 font-bold tracking-normal">
                      {entry.tag}
                    </span>
                  )}
                </div>

                {/* CONTENT BLOCK */}
                <div className="space-y-4">
                  <div
                    onClick={() => setActiveNode(isActive ? null : index)}
                    className="cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 group/title"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4 flex-1 w-full">
                      {/* NODE ASSET EMBEDDED IN TITLE ROW */}
                      <div className="relative w-24 h-11 shrink-0 rounded border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-zinc-50 dark:bg-zinc-900/40 opacity-80 group-hover/title:opacity-100 transition-opacity duration-200">
                        <Image
                          src={entry.image}
                          alt={entry.company}
                          fill
                          className={`object-contain p-1 ${entry.company === "InAmigos Foundation" ? "bg-black" : "bg-black/5"}`}
                        />
                      </div>
                      
                      {/* RESPONSIVE H3 EXTENSION */}
                      <h3 className="text-xl md:text-3xl font-black text-zinc-900 dark:text-zinc-100 tracking-tighter uppercase group-hover/title:text-blue-600 dark:group-hover/title:text-blue-400 transition-colors duration-200 break-words max-w-full">
                        {entry.title}
                      </h3>
                    </div>

                    <ChevronDown
                      size={16}
                      className={`text-zinc-400 shrink-0 transition-transform duration-300 hidden md:block ${
                        isActive ? "rotate-180 text-blue-500" : ""
                      }`}
                    />
                  </div>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans max-w-2xl">
                    {entry.description}
                  </p>

                  {/* ANIMATED EXPANSION ZONE */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.16, 1, 0.3, 1] as const,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 pb-2 border-t border-zinc-100 dark:border-zinc-900 mt-4 space-y-3">
                          <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-widest mb-1">
                            <Terminal size={10} />
                            <span>Execution_Scope</span>
                          </div>

                          <ul className="space-y-2.5 max-w-2xl">
                            {entry.details.map((detail, dIdx) => (
                              <li
                                key={dIdx}
                                className="flex gap-2 items-start text-[11px] text-zinc-600 dark:text-zinc-400 uppercase tracking-wide font-bold leading-relaxed "
                              >
                                <span className="text-blue-600 dark:text-blue-500 shrink-0">
                                  ::
                                </span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}

          {/* STREAM TERMINATOR */}
          <div className="relative pt-4">
            <div className="absolute -left-[30px] md:-left-[46px] top-[22px] w-2 h-2 rounded-full border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-[#030303]" />
            <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-700 uppercase tracking-widest">
              END_OF_STREAM // ORIGIN_INIT
            </span>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
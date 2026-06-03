"use client";

import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  ArrowDownRight,
  Terminal,
  Download,
} from "lucide-react";
import SplitText from "@/components/react-bits/SplitText";
import RotatingText from "../react-bits/RotatingText";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { useCursorActivity } from "@/lib/lanyard";
import GithubSection from "../GithubGraph";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function HeroSection() {
  const { isCoding, details, start, name: ideName } = useCursorActivity();
  const [timeElapsed, setTimeElapsed] = useState("");

  let ideIcon = "/cursor.png";
  let displayIdeName = "Cursor";

  if (ideName === "Visual Studio Code") {
    ideIcon = "/vscode.png";
    displayIdeName = "VS Code";
  } else if (ideName === "Antigravity") {
    ideIcon = "/antigravity.png";
    displayIdeName = "Antigravity";
  } else if (ideName) {
    displayIdeName = ideName;
  }

  // Live Ticking Logic for Cursor Activity
  useEffect(() => {
    if (!isCoding || !start) return;

    const updateTimer = () => {
      const now = Date.now();
      const diff = now - start;

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeElapsed(`${hours}h ${minutes}m ${seconds}s`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [isCoding, start]);

  return (
    <>
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pt-22 px-3 md:mt-12 flex flex-col max-w-5xl mx-auto md:flex-row gap-16 items-start justify-between font-mono"
      >
        <div className="flex-1 space-y-8">
          {/* 1. Status Indicator: Terminal Style */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4"
          >
            <div className="flex items-center gap-2 px-3 py-1 bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-300 dark:border-white/5 rounded-sm">
              <span className="relative flex h-2 w-2">
                <span
                  className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                    isCoding
                      ? "bg-blue-500 dark:bg-blue-400"
                      : "bg-red-500 dark:bg-red-400"
                  }`}
                ></span>
                <span
                  className={`relative inline-flex rounded-full h-2 w-2 ${
                    isCoding
                      ? "bg-blue-600 dark:bg-blue-500"
                      : "bg-red-600 dark:bg-red-500"
                  }`}
                ></span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-zinc-600 dark:text-zinc-400">
                {isCoding ? (
                  <span className="flex items-center font-mono">
                    <span className="flex items-center gap-1 ">
                      <span className="text-black dark:text-white hidden md:block">
                        coding in
                      </span>
                      <Image
                        src={ideIcon}
                        height="12"
                        width="15"
                        alt={displayIdeName}
                      />
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">
                        [{displayIdeName}]
                      </span>
                    </span>
                    <span className="ml-2 text-zinc-600 dark:text-zinc-600">
                      <span className="text-black dark:text-white">
                        {timeElapsed}
                      </span>
                    </span>
                  </span>
                ) : (
                  <span className="flex items-center gap-1 font-mono">
                    <span className="flex items-center gap-1">
                      <span className="text-black dark:text-white hidden md:block">
                        Status :
                      </span>
                      <Image
                        src="/antigravity.png"
                        height="12"
                        width="15"
                        alt="cursor"
                        className="opacity-50"
                      />
                      <span className="text-zinc-600 dark:text-zinc-600 font-semibold">
                        [Offline]
                      </span>
                    </span>
                    <span className="ml-2 text-zinc-600 dark:text-zinc-500 hidden md:block">
                      <span className="text-black dark:text-white">
                        Last seen coding recently
                      </span>
                    </span>
                  </span>
                )}{" "}
              </span>
            </div>
            <div className="text-[10px] text-zinc-700 dark:text-zinc-600 tracking-tighter">
              {isCoding
                ? `ACT: ${details || "Thinking..."}`
                : "LOC: 23.0225° N, 72.5714° E"}{" "}
            </div>
          </motion.div>

          {/* 2. Headline: Bold & Leaky */}
          <motion.div variants={itemVariants} className="space-y-2">
            <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-black dark:text-white leading-[0.85]">
              <SplitText
                text="Manish Sharma."
                duration={2}
                className="inline-block"
              />
              <br />
              <span className="text-zinc-500 dark:text-zinc-600 italic">
                0x_FullStack
              </span>
            </h1>
          </motion.div>

          {/* 3. Description: Execution Logic */}
          <motion.div variants={itemVariants} className="space-y-6 w-full">
            <p className="max-w-md text-sm leading-relaxed text-zinc-700 dark:text-zinc-400">
              {"> "}
              Full-stack engineer turning
              <span className="text-black dark:text-white"> ideas </span>
              into clean, scalable products with strong
              <span className="text-black dark:text-white"> execution</span>.
              Building{" "}
              <span className="inline-block align-middle m2">
                <RotatingText
                  texts={[
                    "Scalable_Apps",
                    "Production_Ready",
                    "AI_Features",
                    "Smart_Systems",
                    "Reliable_Code",
                  ]}
                  mainClassName="text-blue-600 dark:text-blue-400 font-bold px-1.5 py-0.5 bg-blue-100 dark:bg-blue-400/5 rounded-sm"
                  rotationInterval={2500}
                />
              </span>
              .
            </p>

            {/* 4. Actions: Brutalist Buttons */}
            <div className="flex flex-wrap gap-6 pt-4">
              <Link
                href="/project"
                className="group flex items-center gap-2 text-xs font-bold text-black dark:text-white uppercase tracking-widest"
              >
                <span className="text-zinc-500 dark:text-zinc-600">[</span>
                view_deployments
                <span className="text-zinc-500 dark:text-zinc-600">]</span>
                <ArrowDownRight className="w-4 h-4 text-blue-600 dark:text-blue-400 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
              </Link>

              <a href="/resume.pdf" download="Manish_Sharma_Resume.pdf" className="group flex items-center gap-2 text-xs font-bold text-black dark:text-white uppercase tracking-widest">
                <span className="text-zinc-500 dark:text-zinc-600">[</span>
                get_resume
                <span className="text-zinc-500 dark:text-zinc-600">]</span>
                <Download className="w-4 h-4 text-green-600 dark:text-green-400 transition-transform group-hover:-translate-y-1"/>
              </a>

              <div className="flex items-center gap-4 sm:border-l border-zinc-400 dark:border-zinc-700 sm:pl-6">
                {[
                  {
                    icon: Github,
                    href: "https://github.com/Manish6523",
                  },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/sharma-manish6523",
                  },
                  {
                    icon: Mail,
                    href: "mailto:ms5392363@gmail.com",
                  },
                ].map((social, i) => (
                  <Link
                    key={i}
                    href={social.href}
                    target="_blank"
                    className="text-zinc-600 dark:text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
                  >
                    <social.icon className="w-4 h-4" />
                  </Link>
                ))}{" "}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 5. Hero Image Section */}
        <motion.div
          variants={itemVariants}
          className="relative group self-center md:self-start"
        >
          <div className="absolute -top-4 -right-4 text-zinc-400 dark:text-zinc-700 text-[10px] font-mono">
            FRM_024
          </div>
          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-blue-600/30 dark:border-blue-400/30 z-20" />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-blue-600/30 dark:border-blue-400/30 z-20" />

          <div className="relative size-72 md:size-80 overflow-hidden bg-zinc-200 dark:bg-zinc-900 border border-zinc-400 dark:border-white/5 transition-all duration-700">
            <Image
              src="/me.png"
              alt="Manish Sharma"
              draggable="false"
              fill
              className="object-cover opacity-95 group-hover:opacity-100 transition-all"
              style={{
                transform: "scaleX(-1)",
              }}
            />
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[20px_20px] opacity-[0.03]" />
          </div>

          <div className="mt-4 flex justify-between items-center text-[9px] font-mono text-zinc-600 dark:text-zinc-600 uppercase tracking-widest">
            <span>Object: Developer</span>
            <span>Mode: {isCoding ? "Focus" : "Stable"}</span>
          </div>
        </motion.div>
      </motion.section>
      <div className="px-3 md:mt-12 max-w-5xl mx-auto font-mono">
        <GithubSection />
      </div>
    </>
  );
}

"use client";

import React from 'react';
import LogoLoop from '@/components/react-bits/LogoLoop';
import { motion } from 'framer-motion';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiBun, SiGit, 
  SiPostman, SiAmazonwebservices, SiVercel, SiOpenai, SiFramer, 
  SiRedux, SiFigma, SiNodedotjs, SiExpress, SiSupabase, SiPostgresql, 
  SiMongodb, SiJsonwebtokens 
} from 'react-icons/si';

const frontendLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiRedux />, title: "Redux", href: "https://redux-toolkit.js.org" },
  { node: <SiFramer />, title: "Framer", href: "https://www.framer.com/motion" },
  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
];

const backendLogos = [
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
  { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiJsonwebtokens />, title: "JWT", href: "https://jwt.io" },
];

const toolingLogos = [
  { node: <SiOpenai />, title: "OpenAI", href: "https://platform.openai.com" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
  { node: <SiAmazonwebservices />, title: "AWS", href: "https://aws.amazon.com" },
  { node: <SiPostman />, title: "Postman", href: "https://www.postman.com" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiBun />, title: "Bun", href: "https://bun.sh" }
];

export default function TechnicalSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-32 font-mono"
    >
      <div className="pt-12 border-t border-white/5">
        
        {/* Section Header with Metadata */}
        <div className="flex justify-between items-end mb-12">
          <div className="space-y-1">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-zinc-600">
              04 // Architectural_Ecosystem
            </h2>
            <h3 className="text-2xl font-bold text-white tracking-tighter">
              Integrated_Stack.manifest
            </h3>
          </div>
          <div className="hidden md:block text-right">
             <span className="text-[9px] text-zinc-800 uppercase tracking-widest leading-none block">Scanning Dependencies...</span>
             <span className="text-[9px] text-blue-900 uppercase tracking-widest leading-none block">All modules stable</span>
          </div>
        </div>

        <div className="space-y-10">
          
          {/* Row 1: Frontend */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 group">
              <span className="text-zinc-800 text-[10px] whitespace-nowrap">0xF1 // FRONTEND</span>
              <div className="h-px w-full bg-zinc-900 group-hover:bg-zinc-800 transition-colors" />
            </div>
            <div className="grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-700">
              <LogoLoop
                logos={frontendLogos}
                speed={40}
                direction="left"
                logoHeight={32}
                gap={80}
                
              />
            </div>
          </div>

          {/* Row 2: Backend */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 group">
              <span className="text-zinc-800 text-[10px] whitespace-nowrap">0xB2 // BACKEND</span>
              <div className="h-px w-full bg-zinc-900 group-hover:bg-zinc-800 transition-colors" />
            </div>
            <div className="grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-700">
              <LogoLoop
                logos={backendLogos}
                speed={30}
                direction="right"
                logoHeight={32}
                gap={80}
                
              />
            </div>
          </div>

          {/* Row 3: Tooling */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 group">
              <span className="text-zinc-800 text-[10px] whitespace-nowrap">0xT3 // TOOLING</span>
              <div className="h-px w-full bg-zinc-900 group-hover:bg-zinc-800 transition-colors" />
            </div>
            <div className="grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-700">
              <LogoLoop
                logos={toolingLogos}
                speed={50}
                direction="left"
                logoHeight={32}
                gap={80}
              />
            </div>
          </div>
          
        </div>

        {/* Leaky Footer Metadata */}
        <div className="mt-12 flex justify-between text-[9px] text-zinc-800 uppercase tracking-widest ">
            <span>
              [ Total_Modules: {frontendLogos.length + backendLogos.length + toolingLogos.length} ]
            </span>
            <span>[ Lifecycle: Active ]</span>
        </div>
      </div>
    </motion.section>
  );
}
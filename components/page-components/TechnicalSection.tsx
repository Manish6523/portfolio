"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiBun, SiGit, 
  SiPostman, SiAmazonwebservices, SiVercel, SiOpenai, SiFramer, 
  SiRedux, SiFigma, SiNodedotjs, SiExpress, SiSupabase, SiPostgresql, 
  SiMongodb, SiJsonwebtokens 
} from 'react-icons/si';
import SectionHeader from '../SectionHeader';

// Restored href logic within the Framer Motion component
const SkillCard = ({ icon: Icon, name, index, href }: { icon: any, name: string, index: number, href: string }) => (
  <motion.a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ 
      duration: 0.3, 
      // delay: index * 0.05,
      ease: "easeOut" 
    }}
    whileHover={{ x: 5, backgroundColor: "rgba(30, 58, 138, 0.15)", borderColor: "rgba(59, 130, 246, 0.5)" }}
    className="group relative flex cursor-pointer items-center gap-4 p-3 border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 transition-all duration-200 cursor-alias block hover:bg-blue-50 dark:hover:bg-zinc-900/70"
  >
    <div className="text-xl text-zinc-600 dark:text-zinc-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
      <Icon />
    </div>
    <div className="flex flex-col">
      <span className="text-[10px] font-bold text-zinc-700 dark:text-zinc-500 group-hover:text-blue-600 dark:group-hover:text-white uppercase tracking-wider">
        {name}
      </span>
      {/* <span className="text-[8px] text-zinc-800 uppercase tracking-tighter font-mono group-hover:text-zinc-600">
        view_docs.ptr
      </span> */}
    </div>
    <div className="absolute top-0 right-0 w-1 h-1 bg-zinc-300 dark:bg-zinc-800 group-hover:bg-blue-600 dark:group-hover:bg-blue-400 transition-colors" />
  </motion.a>
);

const techStack = {
  frontend: [
    { icon: SiReact, name: "React", href: "https://react.dev" },
    { icon: SiNextdotjs, name: "Next.js", href: "https://nextjs.org" },
    { icon: SiTypescript, name: "TypeScript", href: "https://www.typescriptlang.org" },
    { icon: SiTailwindcss, name: "Tailwind", href: "https://tailwindcss.com" },
    { icon: SiRedux, name: "Redux_Toolkit", href: "https://redux-toolkit.js.org" },
    { icon: SiFramer, name: "Framer_Motion", href: "https://www.framer.com/motion" },
  ],
  backend: [
    { icon: SiNodedotjs, name: "Node.js", href: "https://nodejs.org" },
    { icon: SiExpress, name: "Express", href: "https://expressjs.com" },
    { icon: SiSupabase, name: "Supabase", href: "https://supabase.com" },
    { icon: SiPostgresql, name: "PostgreSQL", href: "https://www.postgresql.org" },
    { icon: SiMongodb, name: "MongoDB", href: "https://www.mongodb.com" },
    { icon: SiJsonwebtokens, name: "Auth_JWT", href: "https://jwt.io" },
  ],
  tooling: [
    { icon: SiOpenai, name: "OpenAI_API", href: "https://platform.openai.com" },
    { icon: SiVercel, name: "Vercel", href: "https://vercel.com" },
    { icon: SiAmazonwebservices, name: "AWS", href: "https://aws.amazon.com" },
    { icon: SiPostman, name: "Postman", href: "https://www.postman.com" },
    { icon: SiGit, name: "Git_Logic", href: "https://git-scm.com" },
    { icon: SiBun, name: "Bun_Runtime", href: "https://bun.sh" },
  ]
};

export default function TechnicalSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="mb-32 font-mono"
    >
      <div className="pt-12 border-t border-zinc-300 dark:border-white/5">
        
        {/* Header Logic */}
        <div className="flex justify-between items-start mb-16">
          <SectionHeader
            number="03"
            label="Architectural_Ecosystem"
            title="Tech_Stack.manifest"
            titleClassName="italic"
          />
          
          <div className="text-right font-mono hidden sm:block">
            <div className="text-[9px] text-blue-900 dark:text-blue-900 uppercase animate-pulse">Scanning System Modules...</div>
            <div className="text-[9px] text-zinc-700 dark:text-zinc-700 uppercase tracking-widest leading-none">Status: 0 errors / 0 warnings</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {Object.entries(techStack).map(([category, skills], catIndex) => (
            <motion.div 
              key={category} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="text-blue-900 dark:text-blue-900 text-[10px] font-bold">0{catIndex + 1}</span>
                <span className="text-zinc-600 dark:text-zinc-600 text-[10px] uppercase tracking-[0.2em] font-bold">
                  {category}_Layer
                </span>
                <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: "100%" }}
                   transition={{ duration: 0.8, delay: 0.5 }}
                   className="h-px bg-zinc-300 dark:bg-zinc-800" 
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                {skills.map((skill, i) => (
                  <SkillCard 
                    key={skill.name} 
                    icon={skill.icon} 
                    name={skill.name} 
                    href={skill.href}
                    index={i + (catIndex * 6)} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
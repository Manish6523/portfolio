"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Cpu, GraduationCap, Briefcase } from 'lucide-react';

export default function AboutSection() {
  const vitals = [
    { label: "Education", value: "B.Tech Computer Engineering", icon: <GraduationCap className="w-4 h-4" /> },
    { label: "Current GPA", value: "8.26 / 10.0", icon: <Code2 className="w-4 h-4" /> },
    { label: "Focus", value: "Full-Stack & AI Systems", icon: <Cpu className="w-4 h-4" /> },
    { label: "Availability", value: "Open for Opportunities", icon: <Briefcase className="w-4 h-4" /> },
  ];

  return (
    <section id="about" className="py-24 border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Narrative & Philosophy */}
        <div className="lg:col-span-8 space-y-12">
          <div className="space-y-4">
            <h2 className="text-[10px] font-mono uppercase tracking-[0.5em] text-zinc-600">
              01 // Professional Profile
            </h2>
            <h3 className="text-4xl font-bold tracking-tighter text-white max-w-xl">
              Software engineer driven by an <span className="text-zinc-500 italic">execution-bias</span> and architectural rigor.
            </h3>
          </div>

          <div className="space-y-6 text-zinc-400 leading-relaxed max-w-2xl">
            <p>
              I specialize in translating complex requirements into reliable, user-centric software systems. 
              My approach is rooted in an outcome-driven mindset, ensuring that every line of code serves a 
              measurable production goal.
            </p>
            <p>
              During my internship at <span className="text-white">Karmadude IT Solutions</span>, I architected the 
              frontend infrastructure for corporate gifting platforms, focusing on maintainability and 
              scalable API integrations. Whether it's building AI assessment tools like 
              <span className="text-white italic"> Quizard</span> or experimental UI communities, 
              I prioritize engineering quality and user experience.
            </p>
          </div>

          {/* Core Values / "Operating Principles" */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            <div className="p-6 bg-zinc-950 border border-white/5 rounded-xl space-y-3">
              <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-white">
                <Terminal className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white">Engineering Rigor</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Prioritizing clean architecture, scalable schemas, and robust error handling in production-grade code.
              </p>
            </div>
            <div className="p-6 bg-zinc-950 border border-white/5 rounded-xl space-y-3">
              <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-white">
                <Cpu className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white">Outcome Focus</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Applying an execution-bias to ensure rapid deployment without compromising system stability.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Vitals Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <div className="p-8 bg-zinc-900/30 border border-white/5 rounded-2xl space-y-8">
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500">Technical Vitals</h4>
            
            <div className="space-y-6">
              {vitals.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="mt-1 p-2 rounded bg-zinc-800 text-zinc-400 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase text-zinc-600 tracking-tighter">{item.label}</p>
                    <p className="text-sm text-white font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/5">
              <p className="text-[10px] font-mono text-zinc-600 mb-4 uppercase tracking-widest">Recent Interests</p>
              <div className="flex flex-wrap gap-2">
                {["Prompt Eng.", "System Design", "Vector DBs", "Micro-interactions"].map(interest => (
                  <span key={interest} className="px-2 py-1 bg-white/5 text-[9px] text-zinc-400 rounded border border-white/5">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
"use client";

import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="mb-32 pt-12 border-t border-white/5 font-mono selection:bg-blue-500/30"
    >
      <div className="space-y-1 mb-8">
        <h2 className="text-[10px] uppercase tracking-[0.5em] text-zinc-600">
          01 // About_Me
        </h2>
        <h3 className="text-xl font-bold text-white tracking-tighter">
          The story behind the code
        </h3>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 space-y-8 md:mx-0 mx-auto">
            <div className="relative group p-1 bg-zinc-900/50 rounded-sm inline-block">
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-zinc-700 group-hover:border-blue-500/50 transition-colors" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-zinc-700 group-hover:border-blue-500/50 transition-colors" />

              <div className="relative w-64 h-80 overflow-hidden grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 ease-in-out">
                <Image
                  src="/me02.png"
                  alt="Manish Sharma"
                  fill
                  draggable='false'
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-50" />
              </div>
            </div>

            {/* Object Representation */}
            <div className="space-y-1 text-[13px] leading-relaxed">
              <p className="text-blue-500">
                const <span className="text-white">engineer</span> = {"{"}
              </p>
              <div className="pl-6 space-y-1 border-l border-zinc-900 ml-1">
                <p className="text-zinc-500">
                  name: <span className="text-orange-300">"Manish Sharma"</span>,
                </p>
                <p className="text-zinc-500">
                  focus: <span className="text-orange-300">"problem_solving"</span>,
                </p>
                <p className="text-zinc-500">
                  background: <span className="text-orange-300">"computer_engineering"</span>,
                </p>
                <p className="text-zinc-500">
                  tools: <span className="text-blue-400">["Next.js", "Supabase", "AI"]</span>
                </p>
              </div>
              <p className="text-blue-500">{"}"};</p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
                <span className="ml-2 text-zinc-700 text-[10px] tracking-[0.3em] uppercase font-bold">
                  runtime.log
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white leading-[0.9]">
                Writing software <br />
                that people can <span className="text-zinc-600 italic">rely on</span>.
              </h2>
            </div>

            <div className="space-y-8 border-l border-zinc-900 pl-8 py-2 relative">
              <div className="absolute left-0 top-0 w-1 h-1 bg-blue-500 -translate-x-1/2" />

              <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                I care about building systems that feel calm under pressure.
                My work is driven by the belief that good software should be easy
                to reason about, easy to extend, and difficult to break.
                From internships at{" "}
                <span className="text-zinc-300">Karmadude IT Solutions</span> to
                independent AI experiments, I focus on clarity before cleverness.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-3">
                  <h4 className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <span className="text-blue-600">01</span> // CLARITY
                  </h4>
                  <p className="text-zinc-600 text-[11px] leading-relaxed">
                    Writing code that reads like intent, not instructions—so future
                    developers (including myself) can understand it instantly.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <span className="text-blue-600">02</span> // RELIABILITY
                  </h4>
                  <p className="text-zinc-600 text-[11px] leading-relaxed">
                    Designing systems that behave predictably in real-world
                    conditions, not just ideal ones.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-12 flex flex-wrap gap-x-12 gap-y-4 border-t border-zinc-900">
              <div>
                <p className="text-[9px] uppercase text-zinc-700 mb-1">Mode</p>
                <p className="text-[11px] text-zinc-500">Learning & Building</p>
              </div>
              <div>
                <p className="text-[9px] uppercase text-zinc-700 mb-1">Focus</p>
                <p className="text-[11px] text-zinc-500">Quality over shortcuts</p>
              </div>
              <div>
                <p className="text-[9px] uppercase text-zinc-700 mb-1">Last Sync</p>
                <p className="text-[11px] text-zinc-500">Dec 2025</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Copy, Check, Terminal, ShieldCheck } from 'lucide-react';
import { SOCIALS_LINKS } from '@/lib/constants';
import SectionHeader from '../SectionHeader';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const email = "ms5392363@gmail.com";

  const copyToClipboard = async () => {
    setError(null);
    if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      try {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        setError("Clipboard denied");
        fallbackCopy();
      }
    } else {
      fallbackCopy();
    }
  };

  // Fallback uses a temporary input and the execCommand for broader mobile compatibility
  const fallbackCopy = () => {
    try {
      const tempInput = document.createElement("input");
      tempInput.value = email;
      // For iOS Safari, element must be part of document body
      document.body.appendChild(tempInput);
      tempInput.select();
      tempInput.setSelectionRange(0, tempInput.value.length); // For mobile devices

      const successful = document.execCommand("copy");
      document.body.removeChild(tempInput);

      if (successful) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        setError(null);
      } else {
        setError("Unable to copy. Please copy manually.");
      }
    } catch {
      setError("Unable to copy. Please copy manually.");
    }
  };

  return (
    <section id="contact" className="pt-20 border-t border-white/5 font-mono overflow-hidden">
      <div className="max-w-7xl mx-auto ">

        {/* SECTION HEADER */}
        <div className="flex justify-between items-end mb-16">
          <SectionHeader
            number="06"
            label="Initiate_Contact"
            title="Open_Comm_Channel"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT: The Terminal Input Form */}
          <div className="bg-zinc-950 border border-zinc-900 p-6 md:p-8 rounded-sm relative overflow-hidden group">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[length:30px_30px] bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)]" />

            <form className="space-y-6 md:space-y-8 relative z-10">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[9px] md:text-[10px] text-white/40 uppercase">
                  <span>Input_Field: 01</span>
                  <span>Type: String</span>
                </div>
                <input
                  type="text"
                  placeholder="[ ENTER_NAME ]"
                  className="w-full bg-transparent border-b border-zinc-900 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-white/60 text-sm"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-[9px] md:text-[10px] text-white/40 uppercase">
                  <span>Input_Field: 02</span>
                  <span>Type: Email_Addr</span>
                </div>
                <input
                  type="email"
                  placeholder="[ ENTER_EMAIL ]"
                  className="w-full bg-transparent border-b border-zinc-900 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-white/60 text-sm"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-[9px] md:text-[10px] text-white/40 uppercase">
                  <span>Input_Field: 03</span>
                  <span>Type: Text_Block</span>
                </div>
                <textarea
                  rows={4}
                  placeholder="[ COMPOSE_MESSAGE ]"
                  className="w-full bg-transparent border-b border-zinc-900 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-white/60 resize-none text-sm"
                />
              </div>

              <button className="group/btn w-full py-4 bg-blue-600 text-black font-bold uppercase tracking-widest text-[10px] md:text-xs flex items-center justify-center gap-3 hover:bg-white transition-all">
                Execute_Send <Send className="w-3 h-3 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* RIGHT: Quick Access & Metadata */}
          <div className="space-y-8 md:space-y-12">

            {/* Email Copy Box */}
            <div className="space-y-4">
              <h4 className="text-[10px] text-white/40 uppercase tracking-widest flex items-center gap-2 font-bold">
                <Terminal className="w-3 h-3" /> Quick_Connect
              </h4>
              <div
                onClick={copyToClipboard}
                role="button"
                tabIndex={0}
                onKeyDown={e => {
                  if (e.key === "Enter" || e.key === " ") copyToClipboard();
                }}
                className="group relative p-5 md:p-6 border border-zinc-900 bg-zinc-950/50 hover:border-blue-500/50 transition-all overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Copy email to clipboard"
              >
                <div className="flex justify-between items-center gap-4">
                  <div className="space-y-1 min-w-0">
                    <span className="text-[8px] md:text-[9px] text-zinc-800 block uppercase font-bold tracking-tighter">Primary_Node</span>
                    <span className="text-lg sm:text-xl md:text-2xl text-white font-bold tracking-tight truncate block uppercase">
                      {email}
                    </span>
                  </div>
                  <div className="p-3 bg-zinc-900 group-hover:bg-blue-600 group-hover:text-black transition-colors flex-shrink-0">
                    {copied ? <Check className="w-4 h-4 md:w-5 md:h-5" /> : <Copy className="w-4 h-4 md:w-5 md:h-5" />}
                  </div>
                </div>

                {/* Success and error state */}
                <AnimatePresence>
                  {copied && !error && (
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      className="absolute bottom-1 right-3 text-[7px] md:text-[8px] text-blue-500 font-bold uppercase tracking-tighter"
                    >
                      Data_Packet_Sent // 200 OK
                    </motion.div>
                  )}
                  {error && (
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      className="absolute bottom-1 right-3 text-[7px] md:text-[8px] text-red-500 font-bold uppercase tracking-tighter"
                    >
                      {error}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Availability Status */}
            <div className="p-6 border border-zinc-900 space-y-4 bg-zinc-950/20">
              <div className="flex items-center gap-2 text-green-500">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Availability_Status</span>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                Currently accepting requests for <span className="text-white">Full Stack Engineering</span> roles and <span className="text-white">AI Automation</span> consults. Current timezone: IST (UTC+5:30).
              </p>

              {/* Responsive Social Links */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 pt-4 border-t border-zinc-900/50">
                {SOCIALS_LINKS.map(social => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-white/40 hover:text-white transition-colors border-b border-transparent hover:border-white uppercase tracking-widest font-bold"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Hidden Footer Metadata - Mobile optimized */}
            <div className="pt-8 border-t border-zinc-900 flex flex-wrap gap-x-8 gap-y-4 justify-between items-center opacity-30 group-hover:opacity-100 transition-opacity">
              <p className="text-[8px] md:text-[9px] text-white/40uppercase tracking-widest">© 2025 M_SHARMA</p>
              <div className="flex gap-4 md:gap-8 text-[8px] text-white/40 uppercase font-bold">
                <span>Latency: 24ms</span>
                <span>Env: Prod</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
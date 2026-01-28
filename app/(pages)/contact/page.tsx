"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Send, Activity, ShieldCheck, Globe, Mail, Github, Linkedin, Instagram, ExternalLink } from 'lucide-react';
import { SOCIALS_LINKS } from '@/lib/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.4 } }
};

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'transmitted'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('transmitted'), 2000);
  };

  return (
    <motion.main 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-white dark:bg-[#050505] text-zinc-600 dark:text-zinc-400 font-mono pt-32 pb-20 px-3"
    >
      <div className="max-w-4xl mx-auto space-y-10 md:space-y-20">
        
        {/* HEADER: PROTOCOL INITIALIZATION */}
        <motion.header variants={itemVariants} className="border-b border-zinc-300 dark:border-zinc-900 pb-12">
          <div className="flex items-center gap-3 mb-6">
             <ShieldCheck className="w-4 h-4 text-blue-600" />
             <span className="text-[10px] font-black tracking-[0.4em] uppercase text-zinc-600">
               Communication_Protocol // Secure_Channel
             </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-black dark:text-white tracking-tighter uppercase leading-none">
            Inbound_Data
          </h1>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">
          
          {/* LEFT: FORM (Data Payload) */}
          <div className="lg:col-span-7">
            <motion.form 
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="space-y-px bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-900"
            >
              <div className="p-4 sm:p-8 bg-gray-50 dark:bg-black space-y-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-zinc-600 dark:text-zinc-700 uppercase tracking-widest">Sender_Identity</label>
                    <input 
                      required
                      type="text" 
                      placeholder="NAME_OR_ORG"
                      className="w-full bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-900 px-4 py-3 text-sm text-black dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-800"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black text-zinc-600 dark:text-zinc-700 uppercase tracking-widest">Return_Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="EMAIL@DOMAIN.COM"
                      className="w-full bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-900 px-4 py-3 text-sm text-black dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-800"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-black text-zinc-600 dark:text-zinc-700 uppercase tracking-widest">Data_Payload</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="ENTER_MESSAGE_BODY..."
                    className="w-full bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-900 px-4 py-3 text-sm text-black dark:text-white focus:outline-none focus:border-blue-600 dark:focus:border-blue-600 transition-colors resize-none placeholder:text-zinc-400 dark:placeholder:text-zinc-800"
                  />
                </div>

                <button 
                  disabled={status !== 'idle'}
                  className="w-full group flex items-center justify-center gap-4 py-4 bg-black dark:bg-white text-white dark:text-black text-[10px] font-black uppercase tracking-[0.3em] hover:bg-blue-600 dark:hover:bg-blue-400 transition-all disabled:opacity-50"
                >
                  {status === 'idle' && (
                    <> TRANSMIT_PACKET <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> </>
                  )}
                  {status === 'sending' && "ENCRYPTING..."}
                  {status === 'transmitted' && "TRANSMISSION_COMPLETE"}
                </button>
              </div>
            </motion.form>
          </div>

          {/* RIGHT: SOCIAL ENDPOINTS & METADATA */}
          <aside className="lg:col-span-5 space-y-12">
            {/* SOCIAL REGISTRY */}
            <motion.div variants={itemVariants} className="space-y-6">
                <div className="flex items-center gap-2">
                  <Globe className="w-3 h-3 text-zinc-600 dark:text-zinc-800" />
                  <span className="text-[9px] font-black text-zinc-600 dark:text-zinc-700 uppercase tracking-widest">Endpoint_Registry</span>
                </div>
                <div className="space-y-px bg-gray-50 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-900">
                    {SOCIALS_LINKS.map((social) => (
                        <a 
                            key={social.name}
                            href={social.href} 
                            target="_blank"
                            className="flex items-center justify-between p-4 bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-zinc-950 group transition-colors"
                        >
                            <span className="text-[10px] font-black text-zinc-600 dark:text-zinc-500 group-hover:text-black dark:group-hover:text-white uppercase tracking-tighter">
                                {social.name}
                            </span>
                            <ExternalLink size={12} className="text-zinc-400 dark:text-zinc-800 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors" />
                        </a>
                    ))}
                </div>
            </motion.div>

            {/* SYSTEM STATUS BOX */}
            <motion.div variants={itemVariants} className="p-6 border border-dashed border-zinc-300 dark:border-zinc-800 bg-gray-50 dark:bg-zinc-950/30 space-y-4">
                <div className="flex items-center gap-2">
                  <Activity className="w-3 h-3 text-blue-600 dark:text-blue-900" />
                  <span className="text-[9px] font-black text-blue-600 dark:text-blue-900 uppercase">Packet_Diagnostics</span>
                </div>
                <div className="text-[9px] text-zinc-600 dark:text-zinc-600 space-y-2 leading-tight uppercase font-bold">
                  <p className="flex justify-between"><span>Protocol</span> <span>SMTP/TLS_1.3</span></p>
                  <p className="flex justify-between"><span>Node_Locale</span> <span>Ahmedabad_IN</span></p>
                  <p className="flex justify-between"><span>Status</span> <span className="text-emerald-600 dark:text-emerald-900">Listening...</span></p>
                </div>
            </motion.div>
          </aside>
        </div>
      </div>
    </motion.main>
  );
}
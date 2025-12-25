"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Terminal, Bot, Sparkles, ShieldCheck, MessageSquareCode } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { AIResponse } from "@/app/actions";

const PREMADE_QUESTIONS = [
  { label: "PROJECT_MANIFEST", query: "Tell me about your projects" },
  { label: "EXP_HISTORY", query: "What's your experience?" },
  { label: "TECH_STACK", query: "What technologies do you use?" },
  { label: "DEEP_DIVE_QUIZARD", query: "Tell me about Quizard" },
  { label: "CONTACT_PROTOCOLS", query: "How can I contact you?" },
];

export default function AIAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isLoading]);

  const handleSend = async (e?: React.FormEvent, question?: string) => {
    if (e) e.preventDefault();
    const questionText = question || input.trim();
    if (!questionText || isLoading) return;

    const userMessage = { role: 'user', content: questionText };
    const newMessages = [...messages, userMessage];

    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const output = await AIResponse(newMessages);
      setMessages([...newMessages, { role: 'assistant', content: output || "SYSTEM_ERROR: Empty response payload." }]);
    } catch (error) {
      setMessages([...newMessages, { role: 'assistant', content: "❌ **FATAL_ERROR**: Handshake failed. Check API_KEY." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="fixed bottom-6 right-6 z-[100] p-3 sm:p-4 bg-blue-600 text-black rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:scale-110 active:scale-95 transition-all cursor-none group"
      >
        {isOpen ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        ) : (
          <MessageSquareCode className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-[100] w-[calc(100vw-3rem)] sm:w-[420px] h-[600px] bg-[#080808] border border-zinc-800/50 rounded-2xl shadow-2xl flex flex-col overflow-hidden font-mono backdrop-blur-xl"
          >
            {/* TERMINAL HEADER */}
            <div className="p-4 border-b border-zinc-900 bg-zinc-950/50 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Bot className="w-5 h-5 text-blue-500" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full border-2 border-black animate-pulse" />
                </div>
                <div>
                  <h4 className="text-[10px] text-zinc-100 font-bold uppercase tracking-widest">Proxy_v3.0.0</h4>
                  <div className="flex items-center gap-1 text-[8px] text-zinc-500 uppercase font-medium">
                    <ShieldCheck className="w-2 h-2" /> Encrypted_Session
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-zinc-900 p-1.5 rounded-lg transition-colors">
                <X className="w-4 h-4 text-zinc-500" />
              </button>
            </div>

            {/* MESSAGE CONTAINER */}
            <div ref={scrollRef} className="flex-1 p-5 overflow-y-auto space-y-6 no-scrollbar bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:20px_20px]">
              {messages.length === 0 && !isLoading && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-blue-500/60 text-[9px] uppercase tracking-[0.2em] font-bold">
                    <Sparkles className="w-3 h-3" />
                    <span>Initialization Suggestions</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {PREMADE_QUESTIONS.map((item, idx) => (
                      <motion.button
                        key={idx}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        onClick={() => handleSend(undefined, item.query)}
                        className="group flex items-center gap-2 px-3 py-2 text-[10px] bg-zinc-900/40 hover:bg-blue-600/10 border border-zinc-800 hover:border-blue-500/50 rounded-md text-zinc-400 hover:text-blue-400 transition-all cursor-none"
                      >
                        <span className="text-zinc-600 group-hover:text-blue-500/50">[{idx}]</span>
                        {item.label}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`group relative max-w-[88%] p-3 text-[11px] leading-relaxed transition-all ${
                    m.role === 'user' 
                      ? 'bg-blue-600 text-black font-bold rounded-2xl rounded-tr-none' 
                      : 'bg-zinc-900/80 text-zinc-300 border border-zinc-800 rounded-2xl rounded-tl-none shadow-lg'
                  }`}>
                    {m.role === 'assistant' ? (
                      <div className="prose prose-invert prose-xs max-w-none">
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          components={{
                            a: ({ ...props }) => <a {...props} target="_blank" className="text-blue-400 underline decoration-blue-500/30 underline-offset-4 hover:text-blue-300 transition-colors" />,
                            p: ({ ...props }) => <p {...props} className="mb-3 last:mb-0" />,
                            ul: ({ ...props }) => <ul {...props} className="list-none space-y-1.5 mb-3" />,
                            li: ({ ...props }) => <li {...props} className="flex gap-2 before:content-['>'] before:text-blue-500 before:font-bold" />,
                            strong: ({ ...props }) => <strong {...props} className="text-white font-black tracking-tight" />,
                            code: ({ inline, ...props }: any) => (
                              <code {...props} className={`${inline ? 'bg-zinc-800 px-1 py-0.5 rounded text-blue-400' : 'block bg-black/50 p-3 rounded-lg border border-zinc-800 my-2 text-zinc-400 overflow-x-auto font-light'}`} />
                            )
                          }}
                        >
                          {m.content}
                        </ReactMarkdown>
                      </div>
                    ) : (
                      <span className="flex items-center gap-2 uppercase tracking-tight italic">
                        <Terminal className="w-3 h-3" /> {m.content}
                      </span>
                    )}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex items-center gap-3 text-blue-500">
                  <div className="flex gap-1">
                    {[0, 1, 2].map((d) => (
                      <motion.div
                        key={d}
                        animate={{ height: [4, 12, 4] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: d * 0.1 }}
                        className="w-0.5 bg-blue-500 rounded-full"
                      />
                    ))}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] animate-pulse">Stream_In_Progress</span>
                </div>
              )}
            </div>

            {/* INPUT BLOCK */}
            <form onSubmit={handleSend} className="p-4 bg-zinc-950/80 border-t border-zinc-900/50">
              <div className="flex items-center gap-3 bg-black/50 border border-zinc-800 px-4 py-3 rounded-xl focus-within:border-blue-500/50 focus-within:ring-1 focus-within:ring-blue-500/20 transition-all">
                <Terminal className="w-3.5 h-3.5 text-zinc-600" />
                <input 
                  value={input} 
                  onChange={(e) => setInput(e.target.value)} 
                  placeholder="QUERY_SYSTEM..." 
                  className="flex-1 bg-transparent text-[11px] text-white outline-none placeholder:text-zinc-700 font-medium" 
                />
                <button type="submit" disabled={isLoading} className="disabled:opacity-20 group">
                  <Send className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${isLoading ? 'text-zinc-800' : 'text-blue-500'}`} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
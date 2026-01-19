"use client";

import { Check } from 'lucide-react'; // Make sure to import Check
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Terminal, Bot, Sparkles, Trash2, History, Copy } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { AIResponse } from "@/app/actions";

const PREMADE_QUESTIONS = [
  { label: "INIT_PROJECTS", query: "Show me your project manifest." },
  { label: "GET_STACK", query: "What is your primary tech stack?" },
  { label: "AUTH_CONTACT", query: "How can I reach you for a collab?" },
  { label: "INTRO", query: "Can you introduce yourself?" },
  { label: "WORK_EXPERIENCE", query: "Tell me about your work experience." },
  { label: "LATEST_TECH", query: "What's the latest technology you've been working with?" },
  { label: "SOCIAL_LINKS", query: "Where can I find your social media or professional profiles?" },
  { label: "MOTIVATION", query: "What drives you as a developer?" },
];



const CopyButton = ({ content }: { content: string }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      // Modern API
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(content);
      } else {
        // Fallback for older mobile browsers
        const textArea = document.createElement("textarea");
        textArea.value = content;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      // Removed opacity-0 and group-hover:opacity-100 so it's always visible
      // Added md:opacity-0 md:group-hover:opacity-100 to keep it hidden on desktop until hover if you prefer
      className="absolute cursor-pointer top-2 right-2 p-2 bg-zinc-800/90 border border-white/10 rounded-lg transition-all hover:bg-zinc-700 active:scale-95 flex items-center gap-2 z-10 shadow-lg md:opacity-0 md:group-hover:opacity-100 transition-all"
      title="Copy message"
    >
      {copied ? (
        <>
          <span className="text-[9px] text-green-400 font-bold uppercase tracking-tighter">Copied</span>
          <Check className="size-3 text-green-400" strokeWidth='4' />
        </>
      ) : (
        <Copy className="size-3 text-zinc-300" />
      )}
    </button>
  );
};

export default function AIAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // --- LOCAL STORAGE LOGIC ---
  useEffect(() => {
    const savedChat = localStorage.getItem('manish_proxy_chat');
    if (savedChat) {
      try {
        setMessages(JSON.parse(savedChat));
      } catch (e) {
        console.error("Failed to parse chat history");
      }
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('manish_proxy_chat', JSON.stringify(messages));
    }
  }, [messages]);

  const clearHistory = () => {
    localStorage.removeItem('manish_proxy_chat');
    setMessages([]);
  };
  // ---------------------------

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
      setMessages([...newMessages, { role: 'assistant', content: output || "SYSTEM: Empty payload received." }]);
    } catch (error) {
      setMessages([...newMessages, { role: 'assistant', content: "❌ **FATAL_ERROR**: Connection timeout." }]);
    } finally {
      setIsLoading(false);
    }
  };

useEffect(() => {
  // Use document.body directly for better reliability
  const body = document.body;

  if (isOpen) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = '';
    body.style.paddingRight = '';
  }

  // CLEANUP: If the user navigates away or component unmounts, 
  // we MUST re-enable scrolling.
  return () => {
    body.style.overflow = '';
    body.style.paddingRight = '';
  };
}, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-[100] p-3 cursor-pointer bg-blue-500 text-black rounded-full shadow-[0_0_15px_rgba(37,99,235,0.5)] hover:scale-105 active:scale-95 transition-all md:animate-none 
          ${!isOpen ? 'animate-bounce' : 'animate-none'} `}
      >
        {isOpen
          ? <X className="text-white size-3 md:size-5" />
          : <MessageSquare className="text-white size-3 md:size-5" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0.5, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0.5, y: 30, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-6 z-[100] w-[calc(100vw-3rem)] sm:w-[420px] h-[600px] bg-black/80 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden font-mono backdrop-blur-2xl"
          >
            {/* NEW HEADER DESIGN */}
            <div className="p-4 border-b border-white/5 bg-white/5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Bot className="w-4 h-4 text-blue-500" />
                </div>
                <div>
                  <h4 className="text-[10px] text-white font-bold tracking-[0.1em]">PROXY_V3_CORE</h4>
                  <p className="text-[8px] text-green-500/70 font-medium">● SYSTEM_READY</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {messages.length > 0 && (
                  <button onClick={clearHistory} className="p-2 hover:bg-red-500/10 rounded-lg group transition-colors" title="Clear History">
                    <Trash2 className="w-3.5 h-3.5 text-zinc-500 group-hover:text-red-500" />
                  </button>
                )}
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                  <X className="w-4 h-4 text-zinc-500 cursor-pointer" />
                </button>
              </div>
            </div>

            {/* CHAT AREA */}
            <div ref={scrollRef} className="flex-1 p-3 md:p-5 overflow-y-auto space-y-6 no-scrollbar">
              {messages.length === 0 && !isLoading && (
                <div className="space-y-6 mt-4">
                  <div className="p-4 rounded-xl border border-blue-500/20 bg-blue-500/5">
                    <p className="text-[11px] text-blue-200 leading-relaxed">
                      Welcome. I am Manish&apos;s digital proxy. Accessing his project archives and technical history...
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[9px] text-zinc-500 uppercase font-bold tracking-widest">
                      <History className="w-3 h-3" /> Preferred Commands
                    </div>
                    {PREMADE_QUESTIONS.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(undefined, item.query)}
                        className="w-fit cursor-pointer mr-1 text-left p-2 text-[10px] bg-white/5 hover:bg-blue-600/10 border border-white/5 hover:border-blue-500/30 rounded-xl text-zinc-400 hover:text-blue-400 transition-all  "
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((m, i) => (
                <div key={i} className={`flex relative mb-4 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[100%] md:max-w-[95%] p-4 text-[11px] leading-relaxed group relative transition-all ${m.role === 'user'
                    ? 'bg-blue-600 text-black font-bold rounded-2xl rounded-tr-none'
                    : 'bg-white/5 text-zinc-200 border border-white/10 rounded-2xl rounded-tl-none'
                    }`}>
                    {m.role === 'assistant' ? (
                      <div className="prose prose-invert prose-xs break-words overflow-x-scroll pr-">
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          components={{
                            a: (props) => <a {...props} target="_blank" className="text-blue-400 underline" />,
                            ul: (props) => <ul {...props} className="list-disc ml-3 mt-2" />,
                            strong: (props) => <span {...props} className="text-white font-black" />,
                            // Table styling
                            table: (props) => (
                              <div className="overflow-x-auto my-3">
                                <table {...props} className="border-collapse border border-white/20 w-screen max-w-lg md:w-auto" />
                              </div>
                            ),
                            thead: (props) => <thead {...props} className="bg-white/10" />,
                            th: (props) => (
                              <th {...props} className="border border-white/20 p-1 text-left font-bold" />
                            ),
                            td: (props) => (
                              <td {...props} className="border border-white/20 p-1" />
                            ),
                          }}
                        >
                          {m.content}
                        </ReactMarkdown>

                        {/* Proper Copy Button */}
                        <CopyButton content={m.content} />
                      </div>
                    ) : (
                      m.content
                    )}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex items-center gap-2 text-[10px] text-blue-500 font-bold uppercase animate-pulse">
                  <Terminal className="w-3 h-3" /> fetching_packets...
                </div>
              )}
            </div>

            {/* INPUT */}
            <form onSubmit={handleSend} className="p-4 bg-white/5 border-t border-white/5">
              <div className="flex items-center gap-3 bg-black/40 border border-white/10 px-4 py-3 rounded-2xl focus-within:border-blue-500/50 transition-all">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Execute query..."
                  className="flex-1 bg-transparent text-[11px] text-white outline-none placeholder:text-zinc-600"
                />
                <button type="submit" disabled={isLoading}>
                  <Send className={`w-4 h-4 cursor-pointer ${isLoading ? 'text-zinc-800' : 'text-blue-500'}`} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
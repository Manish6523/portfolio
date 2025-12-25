"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Terminal, Bot, Sparkles } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { AIResponse } from "@/app/actions";

const PREMADE_QUESTIONS = [
  "Tell me about your projects",
  "What's your experience?",
  "What technologies do you use?",
  "Tell me about Quizard",
  "What's your current role?",
  "How can I contact you?",
];

export default function AIAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

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
      setMessages([...newMessages, { role: 'assistant', content: output || "I'm sorry, I couldn't generate a response." }]);
    } catch (error) {
      setMessages([...newMessages, { role: 'assistant', content: "❌ **Error**: Connection failed. Please check your API key configuration." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuestionClick = (question: string) => {
    handleSend(undefined, question);
  };

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="fixed bottom-6 right-6 z-[100] p-4 bg-blue-600 text-black rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all cursor-none">
        <MessageSquare className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-[100] w-[calc(100vw-3rem)] sm:w-[400px] h-[550px] bg-[#050505] border border-zinc-900 rounded-xl shadow-2xl flex flex-col overflow-hidden font-mono"
          >
            <div className="p-4 border-b border-zinc-900 bg-zinc-950 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-blue-500" />
                <h4 className="text-[11px] text-white font-bold uppercase">Manish_Proxy_v3.0</h4>
              </div>
              <button onClick={() => setIsOpen(false)}><X className="w-4 h-4 text-zinc-700" /></button>
            </div>

            <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 no-scrollbar bg-[radial-gradient(circle_at_center,_#111_1px,_transparent_1px)] bg-[length:24px_24px]">
              {messages.length === 0 && !isLoading && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-2 text-zinc-500 text-[10px] uppercase tracking-wider">
                    <Sparkles className="w-3 h-3 text-blue-500" />
                    <span>Suggested Questions</span>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {PREMADE_QUESTIONS.map((question, idx) => (
                      <motion.button
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        onClick={() => handleQuestionClick(question)}
                        className="text-left p-2.5 text-[11px] bg-zinc-900/30 hover:bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 rounded-lg text-zinc-400 hover:text-zinc-300 transition-all cursor-pointer"
                      >
                        {question}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-3 text-[11px] leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-blue-600 text-black font-bold rounded-l-lg rounded-tr-lg' 
                      : 'bg-zinc-900/50 text-zinc-300 border border-zinc-800 rounded-r-lg rounded-tl-lg'
                  }`}>
                    {m.role === 'assistant' ? (
                      <div className="prose prose-invert prose-sm max-w-none">
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          components={{
                          a: ({ node, ...props }) => (
                            <a
                              {...props}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300 underline break-all"
                            />
                          ),
                          p: ({ node, ...props }) => (
                            <p {...props} className="mb-2 last:mb-0" />
                          ),
                          ul: ({ node, ...props }) => (
                            <ul {...props} className="list-disc list-inside mb-2 space-y-1" />
                          ),
                          ol: ({ node, ...props }) => (
                            <ol {...props} className="list-decimal list-inside mb-2 space-y-1" />
                          ),
                          li: ({ node, ...props }) => (
                            <li {...props} className="ml-2" />
                          ),
                          code: ({ node, inline, ...props }: any) => {
                            if (inline) {
                              return (
                                <code
                                  {...props}
                                  className="bg-zinc-800 px-1.5 py-0.5 rounded text-[10px] text-blue-300"
                                />
                              );
                            }
                            return (
                              <code
                                {...props}
                                className="block bg-zinc-950 p-2 rounded text-[10px] overflow-x-auto border border-zinc-800"
                              />
                            );
                          },
                          pre: ({ node, ...props }) => (
                            <pre {...props} className="mb-2 overflow-x-auto" />
                          ),
                          strong: ({ node, ...props }) => (
                            <strong {...props} className="font-bold text-white" />
                          ),
                          em: ({ node, ...props }) => (
                            <em {...props} className="italic" />
                          ),
                        }}
                      >
                        {m.content}
                      </ReactMarkdown>
                      </div>
                    ) : (
                      <span>{m.content}</span>
                    )}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2 text-[10px] text-blue-500 font-bold tracking-widest"
                >
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                  <span>{"//"} RECEIVING_PACKETS...</span>
                </motion.div>
              )}
            </div>

            <form onSubmit={handleSend} className="p-4 bg-zinc-950 border-t border-zinc-900">
              <div className="flex items-center gap-2 bg-black border border-zinc-800 px-3 py-2 rounded-sm">
                <Terminal className="w-3 h-3 text-zinc-700" />
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Execute query..." className="flex-1 bg-transparent text-[11px] text-white outline-none" />
                <button type="submit" disabled={isLoading}><Send className={`w-3 h-3 ${isLoading ? 'text-zinc-700' : 'text-blue-500'}`} /></button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
"use client";

import { motion } from 'framer-motion';

export default function About() {
    return (
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-8 tracking-tight">About Me</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6 text-zinc-400 leading-relaxed"
        >
          <p>
            Hello! I'm a web developer and engineering student with a passion for building things for the web[cite: 4]. 
            I enjoy the challenge of diving into both front-end and back-end development to create seamless user experiences[cite: 5].
          </p>
          <p>
            My goal is to leverage my problem-solving skills and love for technology to contribute to meaningful projects[cite: 6]. 
            I operate with an <span className="text-white">"Execution Bias,"</span> meaning I prioritize shipping maintainable, 
            production-grade code over endless theory.
          </p>
        </motion.div>
        
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20"
        >
          <h2 className="text-white font-bold mb-6">Education</h2>
          <div className="border-l border-zinc-800 pl-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-white">Gandhinagar Institute of Technology</h4>
              <p className="text-sm text-zinc-500">B. Tech in Computer Engineering • CGPA: 8.26% [cite: 9, 14]</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className="text-white">Image English School, Ahmedabad</h4>
              <p className="text-sm text-zinc-500">HSCE • Percentage: 52.15% [cite: 8, 13]</p>
            </motion.div>
          </div>
        </motion.section>
      </main>
    );
  }
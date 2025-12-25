'use client';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink} from "lucide-react";
import HomeSection from "@/components/page-components/HomeSection";
import TechnicalSection from "@/components/page-components/TechnicalSection";
import { useEffect, useState } from "react";
import ClickSpark from "@/components/react-bits/ClickSpark";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/page-components/ProjectSection";
import AboutSection from "@/components/page-components/AboutSection";
import GithubSection from "@/components/GithubGraph";

export default function Portfolio() {
  // Setup a state to track if the component has mounted in the browser
  const [hasMounted, setHasMounted] = useState(false);

  // useEffect only runs on the client side after the first render
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Return a shell or null during SSR to prevent "window is not defined"
  if (!hasMounted) {
    return <div className="min-h-screen bg-[#050505]" />;
  }
  return (

<ClickSpark
  sparkColor='#fff'
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>
  {/* Your content here */}
    <div className="min-h-screen bg-[#050505] text-zinc-400 selection:bg-white selection:text-black">
      
      {/* Navbar */}
        <Navbar />

      <main className="mx-auto max-w-5xl px-6 pt-32 pb-20">
        
        {/* Hero Section */}
        <HomeSection />

        {/* About Section */}
        <AboutSection />
        
        {/* Github Section */}
        <GithubSection />
        
        {/* Technical Section */}
        <TechnicalSection />

      {/* Project Section */}
      <ProjectSection />

        {/* Experience Timeline */}
        <section className="mb-32">
          <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-zinc-600 mb-12">Timeline</h2>
          <div className="space-y-12">
            <div className="group flex flex-col md:flex-row gap-4 md:gap-24">
              <span className="text-zinc-600 font-mono text-xs pt-1">2025 — PRESENT</span>
              <div>
                <h4 className="text-white font-bold tracking-tight">Web Development Intern</h4>
                <p className="text-zinc-500 text-sm mb-4">Karmadude IT Solutions [cite: 11, 12]</p>
                <ul className="text-sm text-zinc-600 space-y-2 max-w-xl list-disc list-inside">
                  <li>Developed secure authentication flows using OTP and Google Login[cite: 17, 22].</li>
                  <li>Built interactive dashboards for order tracking and analytics[cite: 19].</li>
                </ul>
              </div>
            </div>

            <div className="group flex flex-col md:flex-row gap-4 md:gap-24 border-t border-white/5 pt-12">
              <span className="text-zinc-600 font-mono text-xs pt-1">2022 — 2026</span>
              <div>
                <h4 className="text-white font-bold tracking-tight">B. Tech in Computer Engineering</h4>
                <p className="text-zinc-500 text-sm mb-2">Gandhinagar Institute of Technology [cite: 9, 14]</p>
                <p className="text-xs text-zinc-600 font-mono uppercase tracking-widest">Current CGPA: 8.26% [cite: 14]</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-32 border-t border-white/5 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Let's build something <br/> together.</h2>
          <p className="text-zinc-500 mb-12 max-w-md mx-auto">Currently open to remote roles and high-impact freelance projects.</p>
          <Button size="lg" className="rounded-full bg-white text-black hover:bg-zinc-200 px-12 font-bold tracking-tighter">
            GET IN TOUCH
          </Button>
        </section>

      </main>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-[10px] font-mono text-zinc-700 tracking-[0.4em] uppercase">© 2025 Manish Sharma • Execution Driven</p>
      </footer>
    </div>
</ClickSpark>

  );
}
'use client';
import {Button} from "@/components/ui/button";
import TechnicalSection from "@/components/page-components/TechnicalSection";
import {useEffect, useState} from "react";
import ClickSpark from "@/components/react-bits/ClickSpark";
import Navbar from "@/components/Navbar";
import ProjectSection from "@/components/page-components/ProjectSection";
import AboutSection from "@/components/page-components/AboutSection";
import GithubSection from "@/components/GithubGraph";
import HeroSection from "@/components/page-components/HeroSection";
import TimelineSection from "@/components/page-components/TimelineSection";
import ContactSection from "@/components/page-components/ContactSection";
import AIAgent  from "@/components/page-components/AIAgent";


export default function Portfolio() { // Setup a state to track if the component has mounted in the browser
    const [hasMounted, setHasMounted] = useState(false);

    // useEffect only runs on the client side after the first render
    useEffect(() => {
        setHasMounted(true);
    }, []);

    // Return a shell or null during SSR to prevent "window is not defined"
    if (!hasMounted) {
        return <div className="min-h-screen bg-[#050505]"/>;
    }
    return (

        <ClickSpark sparkColor='#fff'
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}>
            {/* Your content here */}
            <div className="min-h-screen  text-zinc-400 selection:bg-white selection:text-black">
                <Navbar/>
                <main className="mx-auto max-w-5xl px-3 md:px-6 pt-24 sm:pt-32 pb-20">
                    <HeroSection/>
                    <AboutSection/>
                    <GithubSection/>
                    <TechnicalSection/>
                    <ProjectSection/>
                    <TimelineSection/> {/* Contact CTA */}
                    <ContactSection/>
                    <AIAgent/>
                </main>

                <footer className="py-12 border-t border-white/5 text-center">
                    <p className="text-[10px] font-mono text-zinc-700 tracking-[0.4em] uppercase">© 2025 Manish Sharma • Execution Driven</p>
                </footer>
            </div>
        </ClickSpark>

    );
}

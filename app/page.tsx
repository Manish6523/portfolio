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

                    {/* <section className="py-32 border-t border-white/5 text-center">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Let's build something
                            <br/>
                            together.</h2>
                        <p className="text-zinc-500 mb-12 max-w-md mx-auto">Currently open to remote roles and high-impact freelance projects.</p>
                        <Button size="lg" className="rounded-full bg-white text-black hover:bg-zinc-200 px-12 font-bold tracking-tighter">
                            GET IN TOUCH
                        </Button>
                    </section> */}
                </main>

                <footer className="py-12 border-t border-white/5 text-center">
                    <p className="text-[10px] font-mono text-zinc-700 tracking-[0.4em] uppercase">© 2025 Manish Sharma • Execution Driven</p>
                </footer>
            </div>
        </ClickSpark>

    );
}

"use client";

import React, {useState, useEffect} from 'react'
import {Button} from '../ui/button'
import Image from 'next/image'
import {
    Github,
    Linkedin,
    Mail,
    Instagram,
    ArrowDownRight,
    Terminal
} from 'lucide-react'
import SplitText from '@/components/react-bits/SplitText'
import RotatingText from '../react-bits/RotatingText'
import Link from 'next/link'
import {motion, Variants} from 'framer-motion'
import {useCursorActivity} from '@/lib/lanyard'

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: { 
        opacity: 1, 
        y: 0, 
        filter: "blur(0px)",
        transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } 
    }
};

export default function HeroSection() {
    const {isCoding, details, start} = useCursorActivity();
    const [timeElapsed, setTimeElapsed] = useState("");

    // Live Ticking Logic for Cursor Activity
    useEffect(() => {
        if (!isCoding || !start) 
            return;
        

        const updateTimer = () => {
            const now = Date.now();
            const diff = now - start;

            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            setTimeElapsed(`${hours}h ${minutes}m ${seconds}s`);
        };

        updateTimer();
        const interval = setInterval(updateTimer, 1000);
        return() => clearInterval(interval);
    }, [isCoding, start]);

    return (
        <>
        <motion.section 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="py-22 px-3 md:mt-12 flex flex-col max-w-5xl mx-auto md:flex-row gap-16 items-start justify-between font-mono">
            <div className="flex-1 space-y-8">
                {/* 1. Status Indicator: Terminal Style */}
                <motion.div variants={itemVariants} className="flex items-center gap-4">
                    <div className="flex items-center gap-2 px-3 py-1 bg-zinc-900/50 border border-white/5 rounded-sm">
                        <span className="relative flex h-2 w-2">
                            <span className={
                                `animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                                    isCoding ? 'bg-blue-400' : 'bg-green-400'
                                }`
                            }></span>
                            <span className={
                                `relative inline-flex rounded-full h-2 w-2 ${
                                    isCoding ? 'bg-blue-500' : 'bg-green-500'
                                }`
                            }></span>
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-zinc-400">
                            {
                            isCoding ? (
                                <span className="flex items-center font-mono">
                                    <span className="flex items-center gap-1 shadow-inner">
                                        <span className="text-white hidden md:block">coding in</span>
                                        <Image src='https://img.icons8.com/color/48/cursor-ai.png' height='12' width='15' alt='cursor'/>
                                        <span className="text-blue-400 font-semibold">[Cursor]</span>
                                    </span>
                                    <span className="ml-2 text-zinc-600">
                                        <span className="text-white">
                                            {timeElapsed}</span>
                                    </span>
                                </span>
                            ) : (
                                <span className="flex items-center gap-1 font-mono">
                                    <span className="flex items-center gap-1 shadow-inner">
                                        <span className="text-white hidden md:block">Status :</span>
                                        <Image src='https://img.icons8.com/color/48/cursor-ai.png' height='12' width='15' alt='cursor' className='opacity-50 grayscale'/>
                                        <span className="text-zinc-600 font-semibold">[Offline]</span>
                                    </span>
                                    <span className="ml-2 text-zinc-500 hidden md:block">
                                        <span className="text-white">Last seen coding recently</span>
                                    </span>
                                </span>
                            )
                        } </span>
                    </div>
                    <div className="text-[10px] text-zinc-700 tracking-tighter">
                        {
                        isCoding ? `ACT: ${
                            details || 'Thinking...'
                        }` : "LOC: 23.0225° N, 72.5714° E"
                    } </div>
                </motion.div>

                {/* 2. Headline: Bold & Leaky */}
                <motion.div variants={itemVariants} className="space-y-2">
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-white leading-[0.85]">
                        <SplitText text="Manish Sharma."
                            duration={2}
                            className="inline-block"/>
                        <br/>
                        <span className="text-zinc-700 italic">0x_FullStack</span>
                    </h1>
                </motion.div>

                {/* 3. Description: Execution Logic */}
                <motion.div variants={itemVariants} className="max-w-md space-y-6">
                    <p className="text-sm leading-relaxed text-zinc-500">
                        {"> "}
                        Full-stack engineer turning
                        <span className="text-white"> ideas </span>
                        into clean, 
                            scalable products with strong
                        <span className="text-white"> execution</span>. 
                                Building {" "}
                        <span className="inline-block align-middle m2">
                            <RotatingText texts={
                                    [
                                        "Scalable_Apps",
                                        "Production_Ready",
                                        "AI_Features",
                                        "Smart_Systems",
                                        "Reliable_Code"
                                    ]
                                }
                                mainClassName="text-blue-500 font-bold px-1.5 py-0.5 bg-blue-500/5 rounded-sm"
                                rotationInterval={2500}/>
                        </span>
                        .
                    </p>


                    {/* 4. Actions: Brutalist Buttons */}
                    <div className="flex flex-wrap gap-6 pt-4">
                        <Link href="#work" className="group flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest">
                            <span className="text-zinc-600">[</span>
                            view_deployments
                            <span className="text-zinc-600">]</span>
                            <ArrowDownRight className="w-4 h-4 text-blue-500 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"/>
                        </Link>

                        <div className="flex items-center gap-4 border-l border-zinc-800 pl-6">
                            {
                            [
                                {
                                    icon: Github,
                                    href: "https://github.com/Manish6523"
                                }, {
                                    icon: Linkedin,
                                    href: "https://www.linkedin.com/in/sharma-manish6523"
                                }, {
                                    icon: Mail,
                                    href: "mailto:ms5392363@gmail.com"
                                }
                            ].map((social, i) => (
                                <Link key={i}
                                    href={
                                        social.href
                                    }
                                    target="_blank"
                                    className="text-zinc-600 hover:text-white transition-colors">
                                    <social.icon className="w-4 h-4"/>
                                </Link>
                            ))
                        } </div>
                    </div>
                </motion.div>
            </div>

            {/* 5. Hero Image Section */}
            <motion.div variants={itemVariants}
                className="relative group self-center md:self-start">
                <div className="absolute -top-4 -right-4 text-zinc-800 text-[10px] font-mono">FRM_024</div>
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-blue-500/30 z-20"/>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-blue-500/30 z-20"/>

                <div className="relative size-72 md:size-80 overflow-hidden bg-zinc-950 border border-white/5 transition-all duration-700">
                    <Image src="/me.png" alt="Manish Sharma" draggable="false" fill className="object-cover opacity-80 group-hover:opacity-100 transition-all"
                        style={
                            {
                                transform: "scaleX(-1)"
                            }
                        }/>
                    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03]"/>
                </div>

                <div className="mt-4 flex justify-between items-center text-[9px] font-mono text-zinc-700 uppercase tracking-widest">
                    <span>Object: Developer</span>
                    <span>Mode: {
                        isCoding ? 'Focus' : 'Stable'
                    }</span>
                </div>
            </motion.div>
        </motion.section>
        </>
    )
}
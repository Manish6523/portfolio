import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { Github } from 'lucide-react'
import { Linkedin } from 'lucide-react'
import { Mail } from 'lucide-react'
import SplitText from '@/components/react-bits/SplitText'
import RotatingText from '../react-bits/RotatingText'
import Link from 'next/link'

const HomeSection = () => {
    return (
            <section className="mb-32 flex flex-col md:flex-row gap-16 items-center">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500">Currently Building: Quizard AI</span>
                    </div>
                    <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-[1.05]">
                        <SplitText text="Manish Sharma." className="text-6xl font-semibold text-center"/>
                        <br/>
                        <span className="text-zinc-600">Full Stack Engineer.</span>
                    </h1>
                    <p className="text-lg leading-relaxed max-w-md mb-8 text-zinc-500">
                        A software engineer with an{" "}
                        <span className="text-white font-medium">execution bias</span>
                        . {" "}I build production-grade systems using{" "}
                        <span className="inline-block align-middle ml-1">
                            <RotatingText
                                texts={["Next.js", "React.js", "Supabase", "AI Logic", "PostgreSQL", "Scalability"]}
                                mainClassName="font-medium mr-1 px-2 bg-white w-fit text-black rounded-lg"
                                staggerFrom="last"
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                rotationInterval={2000}
                            />
                        </span>
                        .
                    </p>
                    <div className="flex gap-4">
                        <Button className="rounded-full cursor-pointer px-8 bg-white text-black hover:bg-zinc-200">View Resume</Button>
                        <div className="flex items-center gap-3">
                            <Button
                                asChild
                                variant="ghost"
                                size="icon"
                                className="rounded-full cursor-pointer border border-white/5 hover:bg-white/5 p-2"
                            >
                                <Link href="https://github.com/Manish6523" target="_blank" rel="noopener noreferrer">
                                    <Github className="w-4 h-4" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="ghost"
                                size="icon"
                                className="rounded-full cursor-pointer border border-white/5 hover:bg-white/5 p-2"
                            >
                                <Link href="https://www.linkedin.com/in/sharma-manish6523" target="_blank" rel="noopener noreferrer">
                                    <Linkedin className="w-4 h-4" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="ghost"
                                size="icon"
                                className="rounded-full cursor-pointer border border-white/5 hover:bg-white/5 p-2"
                            >
                                <Link href="https://instagram.com/sharma.man1sh" target="_blank" rel="noopener noreferrer">
                                    {/* Use Instagram SVG directly for consistent icon style */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <rect width="18" height="18" x="3" y="3" rx="5" stroke="currentColor" strokeWidth="2" />
                                        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                                        <circle cx="17" cy="7" r="1.2" fill="currentColor"/>
                                    </svg>
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant="ghost"
                                size="icon"
                                className="rounded-full cursor-pointer border border-white/5 hover:bg-white/5 p-2"
                            >
                                <Link href="mailto:ms5392363@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <Mail className="w-4 h-4" />
                                </Link>
                            </Button>
                            
                        </div>
                    </div>
                </div>

                <div className="relative size-72 ">
                    <div className="absolute inset-0 border border-white/5 rounded-full scale-125"></div>
                    <Image src="/me.png" alt="Manish Sharma" draggable='false' fill className="rounded-full object-cover border-8 border-zinc-900/50 grayscale transition-all duration-700 hover:grayscale-0"/>
                </div>
            </section>
    )
}

export default HomeSection

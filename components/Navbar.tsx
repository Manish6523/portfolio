import React from 'react'
import { ModeToggle } from './ModeToggle'

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/50 backdrop-blur-xl">
    <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
      <a href="#" className="text-xl font-bold tracking-tighter text-white underline decoration-zinc-700 underline-offset-4">MS.</a>
      <div className="flex gap-8 text-sm font-medium items-center">
        <a href="/about" className="hover:text-white transition-colors">About</a>
        <a href="/projects" className="hover:text-white transition-colors">Projects</a>
        <a href="#work" className="hover:text-white transition-colors">Work</a>
        <ModeToggle />
      </div>
    </div>
  </nav>  )
}

export default Navbar
import React from 'react'
import { ModeToggle } from './ModeToggle'
import { NAV_LINKS } from '@/lib/constants'

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/50 backdrop-blur-xl">
    <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
      <a href="#" className="text-xl font-bold tracking-tighter text-white underline decoration-zinc-700 underline-offset-4">MS.</a>
      <div className="flex gap-8 text-sm font-medium items-center">
        {NAV_LINKS.map((link: { name: string, href: string }) => (
          <a
            key={link.name}
            href={link.href}
            className="hover:text-white transition-colors"
            target={link.href.startsWith('mailto:') ? "_blank" : undefined}
            rel={link.href.startsWith('mailto:') ? "noopener noreferrer" : undefined}
          >
            {link.name}
          </a>
        ))}
        <ModeToggle />
      </div>
    </div>
  </nav>  )
}

export default Navbar
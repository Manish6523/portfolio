"use client";

import React, { useState, useEffect } from 'react'
import { NAV_LINKS } from '@/lib/constants'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Terminal as TerminalIcon, TextAlignJustify } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ModeToggle } from './ModeToggle'
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(typeof window !== "undefined" ? window.navigator.onLine : true);
  const pathname = usePathname();

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Track online/offline status
  useEffect(() => {
    function updateOnlineStatus() {
      setIsOnline(window.navigator.onLine);
    }

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    // set initial status
    updateOnlineStatus();

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  // Utility to check active state (treating trailing slashes as equivalent)
  function isLinkActive(href: string) {
    // Special case homepage: treat "/" and "" or pathname === "/"
    if (href === "/" && pathname === "/") return true;
    // Remove any trailing slash for comparison
    const normalize = (path: string) => path.replace(/\/$/, "");
    return normalize(pathname) === normalize(href);
  }

  return (
    <nav className="fixed top-0 z-100 w-full border-b border-black/20 dark:border-white/20 bg-white/90 dark:bg-black/60 backdrop-blur-sm font-mono">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter text-black dark:text-white flex items-center gap-2 group "
        >
          <span className="text-blue-600 dark:text-blue-400 group-hover:rotate-180 transition-transform duration-500">{"//"}</span>
          MS<span className="text-zinc-400 dark:text-zinc-600">.</span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-10 text-[10px] font-bold items-center uppercase tracking-widest">
          {NAV_LINKS.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors flex items-center gap-1 ${active
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-zinc-600 dark:text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
              >
                <span className="text-[8px] text-zinc-400 dark:text-zinc-700 tracking-tighter">0{NAV_LINKS.indexOf(link) + 1}</span>
                {link.name}
              </Link>
            );
          })}
          <div className="h-4 w-px bg-zinc-300 dark:bg-zinc-700" />
          {isOnline ? (
            <span className="text-[8px] text-green-600 dark:text-green-500 animate-pulse tracking-tighter uppercase">Sys_Online</span>
          ) : (
            <span className="text-[8px] text-red-600 dark:text-red-500 animate-pulse tracking-tighter uppercase">Sys_Offline</span>
          )}
          <ModeToggle />
        </div>

        {/* MOBILE TRIGGER */}
        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setIsOpen(!isOpen)}
            className="text-black dark:text-white cursor-pointer relative z-110"
          >
            {isOpen ? <X className="w-5 h-5" /> : <TextAlignJustify className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-105 w-full h-screen bg-white dark:bg-[#050505] p-6 md:hidden flex flex-col"
          >
            {/* Leaky Background Texture */}
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.02] pointer-events-none bg-size-[20px_20px] bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)]" />

            <div className="mt-20 space-y-12 relative z-10">
              <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-700 text-[10px] uppercase tracking-[0.4em]">
                <TerminalIcon className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                Root_Directory_Access
              </div>

              <div className="flex flex-col gap-8">
                {NAV_LINKS.map((link, i) => {
                  const active = isLinkActive(link.href);
                  return (
                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                      key={link.name}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-4xl font-bold uppercase tracking-tighter flex items-end gap-4 group transition-colors ${active ? "text-blue-600 dark:text-blue-400" : "text-black dark:text-white"
                          }`}
                      >
                        <span className="text-xs text-blue-600 dark:text-blue-500 mb-1 font-mono">0{i + 1}</span>
                        {link.name}
                        <div className={`h-px]flex-1 ${active ? "bg-blue-600 dark:bg-blue-500" : "bg-zinc-300 dark:bg-zinc-800 group-hover:bg-blue-600 dark:group-hover:bg-blue-500"
                          } transition-colors mb-3`} />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Bottom System Metadata */}
            <div className="mt-auto pb-12 relative z-10">
              <div className="p-4 border border-zinc-300 dark:border-zinc-800 bg-white/50 dark:bg-zinc-950/50 space-y-2">
                <p className="text-[9px] text-zinc-600 dark:text-zinc-600 uppercase tracking-widest">
                  Connection_Secure: {isOnline ? 'true' : 'false'}
                </p>
                <p className="text-[9px] text-zinc-600 dark:text-zinc-600 uppercase tracking-widest font-bold">Node_Active: Ahmedabad_IN</p>
                <p className="text-[9px] text-blue-900 dark:text-blue-900 uppercase tracking-widest">Protocol: HTTPS/TLS_1.3</p>
                <div className="pt-1">
                  {isOnline ? (
                    <span className="text-[8px] text-green-600 dark:text-green-500 animate-pulse tracking-tighter uppercase">[Sys_Online]</span>
                  ) : (
                    <span className="text-[8px] text-red-600 dark:text-red-500 animate-pulse tracking-tighter uppercase">[Sys_Offline]</span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
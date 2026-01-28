'use client';
import { ThemeProvider } from "@/components/theme-provider";
import './globals.css';
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClickSpark from "@/components/react-bits/ClickSpark";
import { useTheme } from "next-themes";
import AIAgent from "@/components/page-components/AIAgent";
import { useEffect, useState } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Manish Sharma - Portfolio</title>
        <meta name="description" content="Manish Sharma's professional portfolio showcasing web development projects and expertise." />
        <meta name="keywords" content="Manish Sharma, portfolio, web developer, software engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Manish Sharma - Portfolio" />
        <meta property="og:description" content="Manish Sharma's professional portfolio showcasing web development projects and expertise." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://sharma-manish.netlify.app" />
      </head>
      <body className="bg-white dark:bg-[#050505] text-black dark:text-white transition-colors duration-300">
        <ClickSpark 
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <AnimatePresence mode="wait">
              {children}
            </AnimatePresence>
            <AIAgent />
            <Footer />
          </ThemeProvider>
        </ClickSpark>
      </body>
    </html>
  )
}

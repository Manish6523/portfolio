"use client"
import * as React from "react"
import { Contrast } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"

export function ModeToggle() {
  const [mounted, setMounted] = React.useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = (theme === "system" ? resolvedTheme : theme) ?? "light"
  const nextTheme = currentTheme === "dark" ? "light" : "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      className="cursor-pointer"
      onClick={() => setTheme(nextTheme)}
      aria-label="Toggle theme"
    >
      <motion.span
        animate={{ rotate: currentTheme === 'dark' ? 360 : 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 15 }}
      >
      {mounted && (
        <Contrast className="h-[1.2rem] w-[1.2rem] transition-all" />
      )}
      </motion.span>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

"use client"
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme()

  // Use the resolved theme so "system" follows the actual current mode
  const currentTheme = (theme === "system" ? resolvedTheme : theme) ?? "light"
  const nextTheme = currentTheme === "dark" ? "light" : "dark"

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(nextTheme)}
      aria-label="Toggle theme"
    >
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all ${
          currentTheme === "dark" ? "scale-0" : "scale-100"
        }`}
      />
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
          currentTheme === "dark" ? "scale-100" : "scale-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
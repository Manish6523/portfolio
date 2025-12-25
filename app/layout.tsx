import { ThemeProvider } from "@/components/theme-provider";
import './globals.css';
import CustomCursor from "@/components/ui/CustomCursor";

// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="bg-background text-foreground transition-colors duration-300">
        {/* 
          NOTE: 
          If your theme toggler only works when globals.css is removed,
          check whether your globals.css file contains a background or color
          style set on html or body that does NOT use Tailwind's theme classes 
          (such as bg-background or text-foreground on the 'body' tag).
          
          To fix this, ensure your Tailwind config generates the correct CSS 
          variables for dark/light and your globals.css doesn't override them. 
          The "class" attribute (used via ThemeProvider) toggles on the <html> element.
          Ensure ALL background/text-color CSS is using Tailwind classes or variables.
        */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
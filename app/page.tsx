'use client';
import {useEffect, useState} from "react";
import ClickSpark from "@/components/react-bits/ClickSpark";
import HeroSection from "@/components/page-components/HeroSection";
import AIAgent from "@/components/page-components/AIAgent";
import { useTheme } from "next-themes";

export default function Portfolio() {
    const { theme, resolvedTheme } = useTheme();
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    const currentTheme = (theme === "system" ? resolvedTheme : theme) ?? "light";
    const sparkColor = currentTheme === "dark" ? "#fff" : "#000";

    if (!hasMounted) {
        return <div className="min-h-screen bg-white dark:bg-[#050505]"/>;
    }

    return (
        <ClickSpark sparkColor={sparkColor}
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}>
            <HeroSection/>
        </ClickSpark>
    );
}

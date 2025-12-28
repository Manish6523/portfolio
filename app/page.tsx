'use client';
import {useEffect, useState} from "react";
import ClickSpark from "@/components/react-bits/ClickSpark";
import HeroSection from "@/components/page-components/HeroSection";
import AIAgent from "@/components/page-components/AIAgent";

export default function Portfolio() {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return <div className="min-h-screen bg-[#050505]"/>;
    }

    return (
        <ClickSpark sparkColor="#fff"
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}>
            <HeroSection/>
            <AIAgent/>
        </ClickSpark>
    );
}

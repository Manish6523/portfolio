'use client';
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ClickSpark from "@/components/react-bits/ClickSpark";
import HeroSection from "@/components/page-components/HeroSection";
import AIAgent from "@/components/page-components/AIAgent";
import Footer from "@/components/Footer";

export default function Portfolio() {
    const [hasMounted, setHasMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return <div className="min-h-screen bg-[#050505]" />;
    }

    return (
        <ClickSpark
            sparkColor="#fff"
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
        >
            <div className="min-h-screen text-zinc-400 selection:bg-white selection:text-black">
                <main className="mx-auto max-w-5xl px-3 md:px-6 pt-24 sm:pt-32 pb-20">
                    <HeroSection />
                    <AIAgent />
                </main>
                {pathname !== "/" && <Footer />}
            </div>
        </ClickSpark>
    );
}

'use client';

import React from 'react';
import {usePathname} from 'next/navigation';

const Footer = () => {
    const pathname = usePathname();

    return (
        <footer className="py-8 md:py-12 border-t border-zinc-300 dark:border-white/5 text-center">
            <p className="text-[10px] font-mono text-zinc-600 dark:text-zinc-600 tracking-[0.4em] uppercase">
                {
                pathname === '/' ? `use navigation for more info` : `© 2025 Manish Sharma • Execution Driven`
            } </p>
        </footer>
    );
};

export default Footer;

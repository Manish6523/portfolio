"use client";

import React from 'react';
import {motion} from 'framer-motion';
import {TIMELINE} from '@/lib/constants';
import SectionHeader from '../SectionHeader';


const TimelineSection = () => {
    return (
        <section id="timeline" className="mb-32 font-sans">
            <div className="pt-20 border-t border-white/10">
                {/* Section Header */}
                <SectionHeader
          number="05"
          label="Timeline.log"
          title="Journey_Chronicle.exe"
        />
                <div className="space-y-20 mt-12">
                    {
                    TIMELINE.map((item, index) => (
                        <motion.div key={index}
                            initial={
                                {
                                    opacity: 0,
                                    x: -10
                                }
                            }
                            whileInView={
                                {
                                    opacity: 1,
                                    x: 0
                                }
                            }
                            viewport={
                                {
                                    once: true
                                }
                            }
                            transition={
                                {
                                    duration: 0.5,
                                    delay: index * 0.1
                                }
                            }
                            className="relative grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4">
                            {/* Date Column */}
                            <div className="md:col-span-3">
                                <span className="text-zinc-600 font-mono text-[11px] tracking-tighter">
                                    {
                                    item.period
                                } </span>
                            </div>

                            {/* Content Column */}
                            <div className="md:col-span-9 relative pl-8 md:pl-0">
                                {/* Vertical Decorative Line for Mobile */}
                                <div className="absolute left-0 top-0 w-px h-full bg-zinc-800 md:hidden"/>

                                <div className="space-y-4">
                                    <div className="space-y-1">
                                        <h4 className="text-xl font-bold text-white tracking-tight">
                                            {
                                            item.title
                                        } </h4>
                                        <p className="text-blue-400/80 text-sm font-medium">
                                            {
                                            item.company
                                        } </p>
                                    </div>

                                    <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                                        {
                                        item.description
                                    } </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                                        {
                                        item.details.map((detail, i) => (
                                            <div key={i}
                                                className="flex gap-3 items-start">
                                                <span className="text-blue-500 font-bold text-xs mt-1">↳</span>
                                                <p className="text-xs text-zinc-500 leading-relaxed italic">
                                                    {detail} </p>
                                            </div>
                                        ))
                                    } </div>
                                </div>
                            </div>
                        </motion.div>
                    ))
                } </div>
            </div>
        </section>
    );
};

export default TimelineSection;

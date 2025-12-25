"use client";

import { useEffect, useState } from "react";
import { Play, Music } from "lucide-react";
import SpotlightCard from "@/components/SpotlightCard";
import Image from "next/image";

export default function SpotifyLive() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('/api/spotify')
      .then(res => res.json())
      .then(setData);
    // console.log(data); // Remove to avoid console spam in small/compact widget
  }, []);

  if (!data) return <div className="h-10 animate-pulse bg-zinc-900 rounded-2xl" />;

  return (
    <a href={data.songUrl || "#"} target="_blank" rel="noopener noreferrer">
      <SpotlightCard className="px-2 py-1 flex items-center gap-2 bg-[#0a0a0a] border-white/5 h-10 min-h-0">
        <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-md">
          <Image 
            src={data.albumImageUrl || "/default-album.png"} 
            alt="Album Art" 
            fill 
            className="object-cover grayscale hover:grayscale-0 transition-all"
          />
        </div>
        
        <div className="flex flex-col justify-center flex-1 overflow-hidden min-w-0">
          <div className="flex items-center gap-1 mb-0">
            <Music className={`w-3 h-3 ${data.isPlaying ? "text-green-500 animate-bounce" : "text-zinc-500"}`} />
            <span className="text-[8px] uppercase tracking-widest text-zinc-500 font-bold">
              {data.isPlaying ? "Now Playing" : "Last Played"}
            </span>
          </div>
          <div className="flex gap-1 items-center min-w-0">
            <span className="text-white font-bold text-xs truncate max-w-[90px]">{data.title || "No title"}</span>
            <span className="text-[10px] text-zinc-500">/</span>
            <span className="text-zinc-500 text-[10px] truncate max-w-[70px]">{data.artist || "No artist"}</span>
          </div>
        </div>

        <div className="ml-auto flex items-center justify-center h-7 w-7 rounded-lg bg-white/5 border border-white/10 hover:bg-green-500/20 transition-all">
          <Play className={`w-3.5 h-3.5 text-white ${data.isPlaying ? "fill-green-500 text-green-500" : ""}`} />
        </div>
      </SpotlightCard>
    </a>
  );
}
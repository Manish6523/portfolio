"use client";

import { useLanyardWS } from 'use-lanyard';

// Discord expects a string literal (user ID, as a string)
const DISCORD_ID = process.env.NEXT_PUBLIC_DISCORD_ID as `${bigint}` | undefined;

export function useCursorActivity() { 
  // Don't call hook with undefined
  const data = DISCORD_ID ? useLanyardWS(DISCORD_ID) : undefined;

  const activities = data?.activities || [];
  
  const isAntigravity = (a: any) => 
    a.name === "Antigravity" || 
    a.assets?.small_text?.includes("Antigravity") || 
    a.assets?.large_text?.includes("Antigravity");

  const cursorActivity = activities.find(isAntigravity)
                      || activities.find((a) => a.name === "Cursor")
                      || activities.find((a) => a.name === "Visual Studio Code");

  let trueName = cursorActivity?.name || null;
  if (cursorActivity && isAntigravity(cursorActivity)) {
    trueName = "Antigravity";
  }

  return { 
    isCoding: !!cursorActivity,
    name: trueName,
    details: cursorActivity?.details || null,
    state: cursorActivity?.state || null,
    start: cursorActivity?.timestamps?.start || null,
    status: data?.discord_status || 'offline'
  };
}
"use client";

import { useLanyardWS } from 'use-lanyard';

// Discord expects a string literal (user ID, as a string)
const DISCORD_ID = process.env.NEXT_PUBLIC_DISCORD_ID as `${bigint}` | undefined;

export function useCursorActivity() { 
  // Don't call hook with undefined
  const data = DISCORD_ID ? useLanyardWS(DISCORD_ID) : undefined;

  // Filter for Cursor or VS Code activity
  const cursorActivity = data?.activities?.find(
    (a) => a.name === "Cursor" || a.name === "Visual Studio Code"
  );

  return { 
    isCoding: !!cursorActivity,
    details: cursorActivity?.details || null,
    state: cursorActivity?.state || null,
    start: cursorActivity?.timestamps?.start || null,
    status: data?.discord_status || 'offline'
  };
}
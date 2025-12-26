"use client";

import { useLanyardWS } from 'use-lanyard';

const DISCORD_ID = '919414679208591391';

export function useCursorActivity() { 
  const data = useLanyardWS(DISCORD_ID);

  // Filter for Cursor or VS Code activity
  const cursorActivity = data?.activities.find(
    (a) => a.name === "Cursor" || a.name === "Visual Studio Code"
  );

  return { 
    isCoding: !!cursorActivity,
    // Extracting filename from "Editing filename.ts"
    details: cursorActivity?.details || null,
    state: cursorActivity?.state || null,
    start: cursorActivity?.timestamps?.start || null,
    status: data?.discord_status || 'offline'
  };
}
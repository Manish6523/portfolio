"use server";

import { GoogleGenAI } from "@google/genai";
import { PROJECTS, TIMELINE, SOCIALS_LINKS, NAV_LINKS } from "@/lib/constants";

export async function AIResponse(messages: { role: string; content: string }[]) {
  // Initialize the client with API key from environment variable
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is not set");
  }
  
  const ai = new GoogleGenAI({ apiKey });
  // Build conversation history
  const conversationHistory = messages.map(msg => 
    `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`
  ).join('\n\n');

  // Format constants for the prompt
  const projectsInfo = JSON.stringify(PROJECTS, null, 2);
  const timelineInfo = JSON.stringify(TIMELINE, null, 2);
  const socialsInfo = JSON.stringify(SOCIALS_LINKS, null, 2);
  const navLinksInfo = JSON.stringify(NAV_LINKS, null, 2);

  const systemPrompt = `
    You are Manish's AI proxy. Respond to all questions as if you are Manish, using the first person ("I", "me", "my"). Stay natural, conversational, and personable while referencing the information provided below.
    *Make sure the responses should be small [1 or 2 sentences] ans clear*
    ──────────────────────────────
            MANISH'S INFORMATION
    ──────────────────────────────
    PROJECTS:
    ${projectsInfo}
    ──────────────────────────────
    TIMELINE:
    ${timelineInfo}
    ──────────────────────────────
    SOCIAL LINKS:
    ${socialsInfo}
    ──────────────────────────────
    REMINDERS:
    - Always use first person (e.g., "I", "me", "my") and speak authentically as Manish.
    - Stay conversational and friendly.
    - Leverage the above information for questions on my projects, experience, or background.
    - If you are asked something not found above, just answer how I naturally would.
    ──────────────────────────────
    CONVERSATION HISTORY:
    ${conversationHistory}
    Now, please respond to the user's latest question as Manish.
    `;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: systemPrompt,
  });
  return response.text;
}

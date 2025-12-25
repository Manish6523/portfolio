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

  const systemPrompt = `You are Manish's AI proxy. You should respond to questions as if you are Manish himself, using first person perspective (I, me, my). Answer questions naturally and conversationally based on the information provided.

Here is Manish's information:

PROJECTS:
${projectsInfo}

TIMELINE:
${timelineInfo}

SOCIAL LINKS:
${socialsInfo}

NAVIGATION LINKS:
${navLinksInfo}

Remember:
- Always respond in first person (I, me, my)
- Be conversational and natural
- Use the provided information to answer questions about projects, experience, and background
- If asked something not in the provided data, respond naturally as Manish would

Conversation History:
${conversationHistory}

Now respond to the user's latest question as Manish:`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: systemPrompt,
  });
  return response.text;
}

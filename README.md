# 🚀 Manish Sharma // Portfolio v3

### `Status: Production-Grade` | `0x_FullStack` | `execution_bias`

A brutalist, high-performance portfolio with a "Leaky" aesthetic. Features real-time IDE tracking, a live AI proxy agent, and a custom design system.

---

## 🛠 Tech Stack

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **AI Engine:** [Gemini 2.0 Flash](https://ai.google.dev/) via Google Generative AI SDK
- **Realtime Presence:** [Lanyard API](https://lanyard.rest/) (Discord WebSocket & REST)
- **Database:** [PostgreSQL](https://www.postgresql.org/), [Supabase](https://supabase.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/), [Lucide React](https://lucide.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)

---

## ✨ Features

### 🛰 Real-time IDE Presence

- Live hero status synced with **Cursor IDE** via Lanyard websocket bridge.
- **Live Timer:** Real session duration.
- **File Awareness:** Shows current file being edited.
- **Visual Status:** `Focus_Active` ↔ `Stable_Idle` cues.

### 🤖 AI Proxy (Gemini-powered)

- Server-side AI agent ("digital twin") summarizes project status and timeline.
- Fast, context-injected short-burst responses for recruiters.
- Knows if I’m actively coding, leaks session info.

### 🧩 Modular Components

- **SplitText & RotatingText:** Animated typography React-bits.
- **Vinyl Avatar:** Circular profile w/ reactive badges and orbit rings.
- **Brutalist Pill Status:** Monochrome IDE-style bar.

---

## 🏗 Structure

```
app/
  api/                # AI & Lanyard proxies
  page.tsx            # Main route
  layout.tsx          # Global config/layout
components/
  ui/                 # Shadcn / general UI
  react-bits/         # Custom text/animation
  HeroSection.tsx     # Hero logic & presence
lib/
  lanyard.ts          # WebSocket/REST presence logic
  constants.ts        # Project/social data
  gemini.ts           # AI logic
public/               # Static assets/icons
```

---

## 🚦 Getting Started

1. **Clone**

    ```bash
    git clone https://github.com/sharma-manish6523/portfolio-v3.git
    cd portfolio-v3
    npm install
    ```

2. **Setup Environment**

    Create `.env.local`:

    ```
    GEMINI_API_KEY=your_gemini_key_here
    NEXT_PUBLIC_DISCORD_ID=919414679208591391
    ```

3. **Discord Rich Presence**

    - Join the **Lanyard Discord**
    - Turn ON "Display current activity..." in Discord settings
    - Install the **Discord Presence Extension** in Cursor (or VS Code)

4. **Develop**

    ```bash
    npm run dev
    ```

---

## 📈 Roadmap

- [x] Live Cursor Integration
- [x] Gemini 2.0 AI Proxy
- [ ] Spotify "Coding Soundtrack" Integration
- [ ] GitHub “Last Push” Status Log
- [ ] One-click Resume PDF Generation

---

## 🤝 Connect

- [LinkedIn](https://www.linkedin.com/in/sharma-manish6523)
- [manishsharma.dev](https://manishsharma.dev)
- **Status:** Building **Quizard AI**

---

> _Generated with execution_bias by Manish's AI Proxy._

**Want an architecture diagram (Mermaid.js)? Open an issue or reach out.**
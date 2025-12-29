export interface ProjectTech {
  frontend: string[];
  backend: string[];
  tools: string[];
}

export interface ProjectFeature {
  title: string;
  detail: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  role: string;
  description: string; // Short summary for main feed
  overview: string; // High-level "The What"
  problemStatement: string; // "The Why"
  solutionApproach: string; // "The How"
  status: "Active" | "Production" | "Internship" | "Experiment";
  tech: ProjectTech;
  images: string[]; // Array for long-scroll galleries
  github: string;
  link: string;
  year: string;
  features: ProjectFeature[];
  outcomes: string[];
}

export interface TimelineEntry {
  period: string;
  title: string;
  company: string;
  description: string; // New field for high-level context
  details: string[];
}

export interface NavLink {
  name: string;
  href: string;
}

export const PROJECTS: Project[] = [
  {
    id: "quizard",
    title: "Quizard",
    client: "Self Project",
    role: "Lead Developer",
    year: "2024",
    status: "Active",
    description:
      "An AI-driven assessment platform that transforms unstructured content into structured, high-quality quizzes.",
    overview:
      "Quizard streamlines assessment creation by converting static learning materials into interactive quizzes, enabling educators and learners to prioritize comprehension over content preparation.",
    problemStatement:
      "Manual quiz creation from large technical documents and academic PDFs is inefficient and error-prone, creating a significant bottleneck in scalable learning workflows.",
    solutionApproach:
      "Designed an end-to-end AI pipeline using LangChain for document chunking and vectorization, combined with GPT-4o prompt orchestration to extract semantic context and generate quiz-ready JSON optimized for real-time React rendering.",
    tech: {
      frontend: ["Next.js 14", "Tailwind CSS", "Framer Motion", "Lucide React"],
      backend: ["Supabase Auth", "PostgreSQL", "Edge Functions"],
      tools: ["OpenAI API", "LangChain", "Vercel SDK", "Zustand"],
    },
    images: [
      "/projects/quizard/hero.png",
      "/projects/quizard/authpage.png",
      "/projects/quizard/newchatpage.png",
      "/projects/quizard/chatpage.png",
      "/projects/quizard/dashboard.png",
      "/projects/quizard/settingpage.png",
      "/projects/quizard/attemptpage.png",
      "/projects/quizard/resultpage.png",
      "/projects/quizard/analyticspage.png",
    ],
    github: "https://github.com/Manish6523/Quizard",
    link: "https://quizardio.netlify.app",
    features: [
      {
        title: "Advanced Document Parsing",
        detail:
          "Extracts structured content from complex academic PDFs using OCR and layout-aware processing.",
      },
      {
        title: "Adaptive Prompt Configuration",
        detail:
          "Supports difficulty calibration via Bloom’s Taxonomy and customizable question tone.",
      },
      {
        title: "Semantic Vector Indexing",
        detail:
          "Leverages vector embeddings for context-aware and consistent question generation.",
      },
      {
        title: "Instant AI Evaluation",
        detail:
          "Provides real-time answer validation with AI-generated explanatory feedback.",
      },
    ],
    outcomes: [
      "Cut quiz creation time by approximately 90%.",
      "Delivered ~95% semantic extraction accuracy on technical content.",
      "Implemented scalable, Supabase-backed multi-user authentication and session tracking.",
    ],
  },
  {
    id: "legacy-gifts",
    title: "Legacy Gifts",
    client: "Karmadude IT Solutions",
    role: "Full Stack Intern",
    year: "2025",
    status: "Internship",
    description:
      "A simple corporate gifting web application built using React, Redux, and Supabase.",
    overview:
      "Legacy Gifts is a basic web platform developed to manage product listings, user authentication, and order placement for a corporate gifting workflow.",
    problemStatement:
      "The project required a functional frontend with reliable state management and backend integration to support authentication, product browsing, cart management, and checkout flows.",
    solutionApproach:
      "Implemented core application flows using React and Redux Toolkit, integrated Supabase for authentication and database operations, and styled the UI with Tailwind CSS. Version control and collaboration were managed using Git.",
    tech: {
      frontend: ["React.js", "Redux Toolkit", "Tailwind CSS"],
      backend: ["Supabase", "PostgreSQL"],
      tools: ["Git", "Postman"],
    },
    images: [
      "/projects/legacy/hero.png",
      "/projects/legacy/productpage.png",
      "/projects/legacy/cartpage.png",
      "/projects/legacy/checkoutpage.png",
      "/projects/legacy/dashboard.png",
    ],
    github: "https://github.com/Manish6523/corporate-gifting-website",
    link: "https://legacygift.netlify.app/",
    features: [
      {
        title: "Authentication",
        detail: "User login and signup implemented using Supabase Auth.",
      },
      {
        title: "State Management",
        detail: "Handled cart and order state using Redux Toolkit.",
      },
      {
        title: "Product & Cart Flow",
        detail:
          "Implemented product listing, cart updates, and checkout functionality.",
      },
      {
        title: "Responsive UI",
        detail: "Styled responsive layouts using Tailwind CSS.",
      },
    ],
    outcomes: [
      "Delivered a working end-to-end React application during internship.",
      "Gained hands-on experience with Redux-based state management.",
      "Integrated frontend workflows with a backend-as-a-service (Supabase).",
    ],
  },
];

export const TIMELINE: TimelineEntry[] = [
  {
    period: "2025 — PRESENT",
    title: "Web Development Intern",
    company: "Karmadude IT Solutions",
    description:
      "Building web-based corporate gifting solutions and internal tools, focusing on stability, usability, and simple authentication flows.",
    details: [
      "Engineered robust authentication systems utilizing Supabase Auth, integrating multi-factor OTP and Google OAuth for secure corporate access.",
      "Designed and developed real-time analytics dashboards that visualize order lifecycles and inventory movement using React and PostgreSQL.",
      "Collaborated on database schema design to ensure high-concurrency handling during peak seasonal traffic.",
      "Optimized frontend performance by implementing efficient state management and lazy-loading strategies.",
    ],
  },
  {
    period: "2022 — 2026",
    title: "B. Tech in Computer Engineering",
    company: "Gandhinagar Institute of Technology",
    description:
      "Pursuing comprehensive education in computing, software engineering, and system design.",
    details: [
      "Current CGPA: 8.26 / 10.0",
      "Focus Areas: Full-Stack Development, Distributed Systems, AI & ML.",
      "Active in technical events and open-source projects.",
      "Relevant Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Machine Learning.",
    ],
  },
];


export const NAV_LINKS: NavLink[] = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "project",
    href: "/project",
  },
  {
    name: "Timeline",
    href: "/timeline",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const SOCIALS_LINKS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sharma-manish6523",
  },
  {
    name: "GitHub",
    href: "https://github.com/Manish6523",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/sharma.man1sh",
  },
];

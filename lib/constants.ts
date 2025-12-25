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
        description: "An AI-powered assessment engine that converts unstructured data into structured quizzes.",
        overview: "Quizard is a sophisticated educational tool designed to bridge the gap between static content and active learning. It automates the creation of high-quality assessments, allowing educators and students to focus on mastery rather than material preparation.",
        problemStatement: "Traditional quiz creation is a manual, time-consuming process. When dealing with hundreds of pages of technical documentation or dense academic PDFs, identifying key learning points and formatting them into varied question types (MCQ, True/False, Short Answer) is an bottleneck for learning.",
        solutionApproach: "I architected a pipeline that uses LangChain for document chunking and vectorization. By implementing strategic prompt engineering via OpenAI's GPT-4o, the system extracts semantic meaning from unstructured text and maps it into a structured JSON schema optimized for real-time React rendering.",
        tech: {
            frontend: [
                "Next.js 14", "Tailwind CSS", "Framer Motion", "Lucide React"
            ],
            backend: [
                "Supabase Auth", "PostgreSQL", "Edge Functions"
            ],
            tools: ["OpenAI API", "LangChain", "Vercel SDK", "Zustand"]
        },
        images: [
            "/projects/quizard/hero.png",
            "/projects/quizard/hero.png",
            "/projects/quizard/hero.png",
            "/projects/quizard/hero.png",
            "/projects/quizard/hero.png",
            "/projects/quizard/hero.png",
            // "/projects/quizard/dashboard.png",
            // "/projects/quizard/editor-view.png",
            // "/projects/quizard/results-analytics.png",
            // "/projects/quizard/mobile-responsive.png"
        ],
        github: "https://github.com/Manish6523/Quizard",
        link: "https://quizardio.netlify.app",
        features: [
            {
                title: "Intelligent PDF Parsing",
                detail: "Uses OCR and layout analysis to extract text from complex academic documents without losing context."
            }, {
                title: "Custom Prompt Tuning",
                detail: "Allows users to set difficulty levels (Bloom's Taxonomy) and tone for the generated questions."
            }, {
                title: "Vector Embeddings",
                detail: "Stores document chunks in a vector database for context-aware question generation."
            }, {
                title: "Real-time Feedback",
                detail: "Instant evaluation of user answers with AI-generated explanations for why a choice was correct or incorrect."
            }
        ],
        outcomes: ["Reduced quiz generation time by 90% compared to manual methods.", "Achieved 95% accuracy in semantic extraction from technical documentation.", "Integrated a seamless Supabase-backed auth system for multi-user session tracking."]
    }, {
        id: "legacy-gifts",
        title: "Legacy Gifts",
        client: "Karmadude IT Solutions",
        role: "Full Stack Intern",
        year: "2025",
        status: "Internship",
        description: "A high-concurrency corporate gifting platform with secure distribution and custom dashboards.",
        overview: "Legacy Gifts is an enterprise-level gifting solution designed to handle massive seasonal order surges. It provides corporate clients with a streamlined way to send gifts to thousands of employees simultaneously while maintaining rigorous security and inventory tracking.",
        problemStatement: "The client needed a system that could handle over 10,000 concurrent users during holiday sales without database locks. Additionally, corporate security required a multi-tenant authentication system where sensitive employee data remained isolated.",
        solutionApproach: "During my internship at Karmadude, I focused on database normalization in PostgreSQL to prevent race conditions during checkout. I implemented a robust Redux state management system to ensure that complex multi-step gifting forms remained performant and data-consistent across user sessions.",
        tech: {
            frontend: [
                "React.js", "Redux Toolkit", "Tailwind CSS", "React Query"
            ],
            backend: [
                "Supabase", "PostgreSQL", "Node.js"
            ],
            tools: ["Postman", "Git", "Figma", "AWS S3"]
        },
        images: [
            "/projects/legacy/hero.png",
            "/projects/legacy/admin-panel.png",
            "/projects/legacy/checkout-flow.png",
            "/projects/legacy/inventory-mgmt.png",
            "/projects/legacy/otp-verification.png"
        ],
        github: "https://github.com/Manish6523/corporate-gifting-website",
        link: "https://legacygift.netlify.app/",
        features: [
            {
                title: "OTP & OAuth Shield",
                detail: "Implemented custom Supabase triggers for secure OTP verification and Google OAuth integration."
            }, {
                title: "Dynamic Inventory Locking",
                detail: "A custom PostgreSQL function that prevents over-selling by locking inventory items the moment they enter a cart."
            }, {
                title: "Corporate Dashboard",
                detail: "A React-based analytics view for HR managers to track gift delivery status in real-time."
            }, {
                title: "Scalable Schema",
                detail: "Database architecture designed to scale horizontally as client volume increases."
            }
        ],
        outcomes: ["Successfully processed high-volume orders with zero data loss during testing phases.", "Built a reusable UI component library that reduced future development time for Karmadude by 30%.", "Optimized API response times by implementing efficient caching strategies via React Query."]
    }
];

export const TIMELINE: TimelineEntry[] = [
    {
        period: "2025 — PRESENT",
        title: "Web Development Intern",
        company: "Karmadude IT Solutions",
        description: "Contributing to the development of enterprise-grade gifting solutions and internal management tools, focusing on architectural stability and user security.",
        details: ["Engineered robust authentication systems utilizing Supabase Auth, integrating multi-factor OTP and Google OAuth for secure corporate access.", "Designed and developed real-time analytics dashboards that visualize order lifecycles and inventory movement using React and PostgreSQL.", "Collaborated on database schema design to ensure high-concurrency handling during peak seasonal traffic.", "Optimized frontend performance by implementing efficient state management and lazy-loading strategies."]
    }, {
        period: "2022 — 2026",
        title: "B. Tech in Computer Engineering",
        company: "Gandhinagar Institute of Technology",
        description: "Developing a strong foundation in computational logic, system design, and software engineering principles while maintaining a high academic standard.",
        details: ["Current Academic Standing: 8.26 / 10.0 CGPA.", "Primary Focus: Full-Stack Architecture, Distributed Systems, and AI-Driven Logic.", "Active participant in technical symposiums and open-source development projects.", "Relevant Coursework: Data Structures & Algorithms, DBMS, Operating Systems, and Machine Learning."]
    }
];

export const NAV_LINKS: NavLink[] = [
    {
        name: "About",
        href: "#about"
    }, {
        name: "Work",
        href: "#work"
    }, {
        name: "Timeline",
        href: "#timeline"
    }, {
        name: "Contact",
        href: "mailto:ms5392363@gmail.com"
    },
];

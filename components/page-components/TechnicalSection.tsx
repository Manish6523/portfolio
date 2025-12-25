import LogoLoop from '@/components/react-bits/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiBun, SiGit, SiPostman, SiAmazonwebservices, SiVercel, SiOpenai, SiFramer, SiRedux, SiFigma, SiNodedotjs, SiExpress, SiSupabase, SiPostgresql, SiMongodb, SiJsonwebtokens } from 'react-icons/si';

const frontendLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiRedux />, title: "Redux", href: "https://redux-toolkit.js.org" },
  { node: <SiFramer />, title: "Framer", href: "https://www.framer.com/motion" },
  { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
];

const backendLogos = [
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
  { node: <SiSupabase />, title: "Supabase", href: "https://supabase.com" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiJsonwebtokens />, title: "JWT", href: "https://jwt.io" },
];

const toolingLogos = [
  { node: <SiOpenai />, title: "OpenAI", href: "https://platform.openai.com" },
  { node: <SiVercel />, title: "Vercel", href: "https://vercel.com" },
  { node: <SiAmazonwebservices />, title: "AWS", href: "https://aws.amazon.com" },
  { node: <SiPostman />, title: "Postman", href: "https://www.postman.com" },
  { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
  { node: <SiBun />, title: "Bun", href: "https://bun.sh" }
];



export default function TechnicalSection() {
  return (
    <section className="mb-32">
      <div className="pt-12 border-t border-white/5">
        <h3 className="text-sm font-mono text-zinc-600 mb-12 uppercase tracking-widest ">
          Architectural Ecosystem
        </h3>

        <h3 className="text-[10px] font-mono text-zinc-600 mb-4 uppercase tracking-[0.2em] font-bold">
          Frontend utils
        </h3>

        <div className="space-y-8 overflow-hidden">
          {/* Row 1: Frontend - Moves Left */}
          <LogoLoop
            logos={frontendLogos}
            speed={40}
            direction="left"
            logoHeight={40}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#050505"
          />

          {/* Row 2: Backend - Moves Right (Inverse Direction) */}
          <h3 className="text-[10px] font-mono text-zinc-600 mb-4 uppercase tracking-[0.2em] font-bold">          Backend utils
        </h3>
          <LogoLoop
            logos={backendLogos}
            speed={30}
            direction="right"
            logoHeight={40}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#050505"
          />

          {/* Row 3: AI & Tooling - Moves Left (Slower) */}
          <h3 className="text-[10px] font-mono text-zinc-600 mb-4 uppercase tracking-[0.2em] font-bold">          Tools
        </h3>
          <LogoLoop
            logos={toolingLogos}
            speed={50}
            direction="left"
            logoHeight={40}
            gap={60}
            hoverSpeed={0}
            scaleOnHover
            fadeOut
            fadeOutColor="#050505"
          />
        </div>
      </div>
    </section>
  );
}
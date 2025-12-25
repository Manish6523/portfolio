// components/Timeline.tsx
const experiences = [
  {
    date: "June 2025 - July 2025",
    title: "Web Development Intern",
    company: "Karmadude IT Solutions",
    description: "Developed 'Legacy Gifts', a corporate gifting platform. Focused on Google Auth, OTP verification, and Redux state management[cite: 11, 16, 17, 20].",
  },
  {
    date: "Sep 2022 - Present",
    title: "B.Tech in Computer Engineering",
    company: "Gandhinagar Institute of Technology",
    description: "Maintaining a CGPA of 8.26% with a focus on core software engineering principles[cite: 9, 14].",
  },
];

export const Timeline = () => (
  <section className="py-20 border-t border-white/5">
    <h2 className="text-sm font-mono uppercase tracking-widest text-zinc-500 mb-12">History</h2>
    <div className="space-y-12">
      {experiences.map((exp, i) => (
        <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-20">
          <p className="text-zinc-500 font-mono text-xs w-32">{exp.date}</p>
          <div>
            <h3 className="text-white font-bold">{exp.title}</h3>
            <p className="text-zinc-400 text-sm">{exp.company}</p>
            <p className="mt-2 text-zinc-500 max-w-lg text-sm">{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);
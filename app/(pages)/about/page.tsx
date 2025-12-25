export default function About() {
    return (
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl font-bold text-white mb-8 tracking-tight">About Me</h1>
        <div className="space-y-6 text-zinc-400 leading-relaxed">
          <p>
            Hello! I'm a web developer and engineering student with a passion for building things for the web[cite: 4]. 
            I enjoy the challenge of diving into both front-end and back-end development to create seamless user experiences[cite: 5].
          </p>
          <p>
            My goal is to leverage my problem-solving skills and love for technology to contribute to meaningful projects[cite: 6]. 
            I operate with an <span className="text-white">"Execution Bias,"</span> meaning I prioritize shipping maintainable, 
            production-grade code over endless theory.
          </p>
        </div>
        
        <section className="mt-20">
          <h2 className="text-white font-bold mb-6">Education</h2>
          <div className="border-l border-zinc-800 pl-6 space-y-8">
            <div>
              <h4 className="text-white">Gandhinagar Institute of Technology</h4>
              <p className="text-sm text-zinc-500">B. Tech in Computer Engineering • CGPA: 8.26% [cite: 9, 14]</p>
            </div>
            <div>
              <h4 className="text-white">Image English School, Ahmedabad</h4>
              <p className="text-sm text-zinc-500">HSCE • Percentage: 52.15% [cite: 8, 13]</p>
            </div>
          </div>
        </section>
      </main>
    );
  }
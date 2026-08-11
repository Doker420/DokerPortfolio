import { Atom, Server, Terminal, FileCode, Coffee, Database, Container, Paintbrush } from 'lucide-react';

const techs = [
  { name: 'React', color: '#61DAFB', icon: Atom },
  { name: 'Node.js', color: '#43853D', icon: Server },
  { name: 'Python', color: '#3776AB', icon: Terminal },
  { name: 'PHP', color: '#777BB4', icon: FileCode },
  { name: 'Java', color: '#007396', icon: Coffee },
  { name: 'MongoDB', color: '#4EA94B', icon: Database },
  { name: 'MySQL', color: '#4479A1', icon: Database },
  { name: 'Redis', color: '#DC382D', icon: Database },
  { name: 'Docker', color: '#2496ED', icon: Container },
  { name: 'CSS3', color: '#1572B6', icon: Paintbrush },
];

export default function TechStack() {
  return (
    <section id="stack" className="relative z-10 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent-purple text-sm font-semibold uppercase tracking-widest">
            Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Мой стек технологий
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-purple to-accent-cyan mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Tech grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="tech-badge group flex flex-col items-center gap-3 p-6 bg-[#12121a] rounded-2xl border border-[#1e1e2e] cursor-default w-full max-w-[160px]"
            >
              <tech.icon size={28} className="transition-transform group-hover:scale-125 duration-300" style={{ color: tech.color }} />
              <span className="text-sm text-gray-400 group-hover:text-white transition-colors font-medium text-center">
                {tech.name}
              </span>
              <div
                className="w-full h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: tech.color }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

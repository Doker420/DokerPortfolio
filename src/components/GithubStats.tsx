import { Activity, Code } from 'lucide-react';

export default function GithubStats() {
  return (
    <section className="relative z-10 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-accent-purple text-sm font-semibold uppercase tracking-widest">
            GitHub Activity
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Активность на GitHub
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-purple to-accent-cyan mx-auto mt-4 rounded-full"></div>
        </div>

        {/* GitHub stats cards */}
        <div className="flex flex-wrap justify-center gap-5 max-w-3xl mx-auto">
          <div className="card-hover bg-[#12121a] rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-2 w-full max-w-md">
            <Activity size={24} className="text-accent-cyan mb-2" />
            <img
              src="https://github-readme-stats.vercel.app/api?username=Doker420&show_icons=true&theme=midnight-purple&hide_border=true&bg_color=12121a&title_color=6600ff&icon_color=44abd0&text_color=93b8c0"
              alt="GitHub Stats"
              className="w-full"
              loading="lazy"
            />
          </div>
          <div className="card-hover bg-[#12121a] rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-2 w-full max-w-md">
            <Code size={24} className="text-accent-purple mb-2" />
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Doker420&layout=compact&theme=midnight-purple&hide_border=true&bg_color=12121a&title_color=6600ff&text_color=93b8c0"
              alt="Top Languages"
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* Contribution snake */}
        <div className="mt-8 card-hover bg-[#12121a] rounded-2xl p-6 flex items-center justify-center max-w-3xl mx-auto overflow-hidden">
          <img
            src="https://raw.githubusercontent.com/Doker420/Doker420/main/snake.svg"
            alt="Snake animation"
            className="w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

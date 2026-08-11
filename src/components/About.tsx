import { Shield, Cpu, TrendingUp, Database, Code, Zap } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Reverse Engineering',
    desc: 'Анализ блокчейн-транзакций и смарт-контрактов',
    color: '#6600ff',
  },
  {
    icon: TrendingUp,
    title: 'SMM Marketing',
    desc: 'Автоматизированные маркетинговые стратегии',
    color: '#44abd0',
  },
  {
    icon: Cpu,
    title: 'Arbitrage',
    desc: 'Мониторинг разницы цен на крипто-рынках',
    color: '#b3d7c9',
  },
  {
    icon: Database,
    title: 'Database Integration',
    desc: 'MySQL, PostgreSQL, MongoDB, Redis',
    color: '#4EA94B',
  },
  {
    icon: Code,
    title: 'Multi-Language',
    desc: 'JS, Python, PHP, Java, HTML/CSS',
    color: '#93b8c0',
  },
  {
    icon: Zap,
    title: 'Automation',
    desc: 'Автоматизация процессов и скриптинг',
    color: '#DC382D',
  },
];

export default function About() {
  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent-purple text-sm font-semibold uppercase tracking-widest">
            About
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Чем я занимаюсь
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-purple to-accent-cyan mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="card-hover group bg-[#12121a] rounded-2xl p-6 flex flex-col gap-4 w-full max-w-md mx-auto text-center"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                style={{ backgroundColor: f.color + '15' }}
              >
                <f.icon size={22} style={{ color: f.color }} />
              </div>
              <h3 className="text-white font-bold text-lg">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

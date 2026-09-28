import { ExternalLink, Shield, Bot, FileText, TrendingUp, LineChart } from 'lucide-react';

const projects = [
  {
    name: 'OdinWork',
    description:
      'Трафик в Telegram: покупайте и продавайте',
    tags: ['Python', 'PR', 'Traffic'],
    color: '#6600ff',
    icon: Shield,
    link: 'https://odinwork.sbs/',
  },
  {
    name: 'VOLTAVPN',
    description:
      'Современный Flask-сайт + Telegram-бот для продажи VPN-подписок с автоматическим сбором и проверкой конфигураций.',
    tags: ['vpn', 'flask', 'Python'],
    color: '#44abd0',
    icon: Bot,
    link: 'https://vpn.stats-max.ru',
  },
  {
    name: 'PROMax',
    description:
      'Мощный инструмент для автоматизации и массового управления аккаунтами MAX мессенджера. Инвайтинг, рассылки, парсинг, прогрев аккаунтов.',
    tags: ['Python', 'Automation', 'SMM'],
    color: '#b3d7c9',
    icon: Bot,
    link: 'https://github.com/Doker420/PROMax',
  },
  {
    name: 'BiO',
    description:
      'Персональная Bio-страница с информацией о проектах и навыках.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: '#93b8c0',
    icon: FileText,
    link: 'https://github.com/Doker420/BiO',
  },
  {
    name: 'SMM Marketing Bot',
    description:
      'Автоматизированные маркетинговые стратегии для социальных сетей. Продвижение и аналитика.',
    tags: ['Python', 'API', 'Automation'],
    color: '#DC382D',
    icon: TrendingUp,
    link: 'https://github.com/Doker420',
  },
  {
    name: 'Arbitrage System',
    description:
      'Идентификация и использование разницы цен на крипто-рынках. Мониторинг в реальном времени.',
    tags: ['Node.js', 'Redis', 'MongoDB'],
    color: '#4479A1',
    icon: LineChart,
    link: 'https://github.com/Doker420',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent-purple text-sm font-semibold uppercase tracking-widest">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Мои проекты
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-purple to-accent-cyan mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Projects grid */}
        <div className="flex flex-wrap justify-center gap-5">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover group bg-[#12121a] rounded-2xl p-6 flex flex-col gap-4 w-full max-w-md mx-auto"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <span className="text-3xl">
                  <project.icon size={28} style={{ color: project.color }} />
                </span>
                <ExternalLink
                  size={16}
                  className="text-gray-600 group-hover:text-accent-purple transition-colors"
                />
              </div>

              {/* Title */}
              <h3
                className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-purple group-hover:to-accent-cyan transition-all"
              >
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-lg bg-[#1a1a25] text-gray-400 border border-[#1e1e2e]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom bar */}
              <div
                className="h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundColor: project.color }}
              ></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

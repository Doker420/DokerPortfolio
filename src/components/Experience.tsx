import { ExternalLink, Wifi, Bot, Users, Copy } from 'lucide-react';

const experiences = [
  {
    name: 'VOLTAVPN',
    description:
      'Современный Flask-сайт + Telegram-бот для продажи VPN-подписок с автоматическим сбором и проверкой конфигураций.',
    link: 'https://vpn.stats-max.ru',
    color: '#44abd0',
    icon: Wifi,
    isCommissioned: true,
  },
  {
    name: 'PROMax',
    description:
      'Мощный инструмент для автоматизации и массового управления аккаунтами MAX мессенджера. Инвайтинг, рассылки, парсинг, прогрев аккаунтов.',
    link: 'https://github.com/Doker420/PROMax',
    color: '#b3d7c9',
    icon: Bot,
    isCommissioned: false,
  },
  {
    name: 'Форум ГОА',
    description:
      'Администратор форума legal-goa.club',
    link: 'https://legal-goa.club',
    color: '#4EA94B',
    icon: Users,
    isCommissioned: false,
  },
  {
    name: 'Клонер каналов Telegram',
    description:
      'Интерфейс с гибкими настройками для клонирования Telegram-каналов.',
    link: '#',
    color: '#DC382D',
    icon: Copy,
    isCommissioned: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent-purple text-sm font-semibold uppercase tracking-widest">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            Опыт работы
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-purple to-accent-cyan mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Experience grid */}
        <div className="flex flex-wrap justify-center gap-5">
          {experiences.map((exp) => (
            <a
              key={exp.name}
              href={exp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover group bg-[#12121a] rounded-2xl p-6 flex flex-col gap-4 w-full max-w-md mx-auto"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <span className="text-3xl">
                  <exp.icon size={28} style={{ color: exp.color }} />
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
                {exp.name}
              </h3>

              {/* Commissioned badge */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400">Заказной проект:</span>
                {exp.isCommissioned ? (
                  <span className="text-green-400 text-sm">✅</span>
                ) : (
                  <span className="text-red-400 text-sm">❌</span>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed flex-1">
                {exp.description}
              </p>

              {/* Bottom bar */}
              <div
                className="h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ backgroundColor: exp.color }}
              ></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

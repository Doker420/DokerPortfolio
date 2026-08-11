import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { MapPin, Heart } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';

function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function TelegramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

function LiveClock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString());
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return <span className="font-mono text-accent-cyan">{time}</span>;
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">
        {/* Avatar */}
        <div className="fade-in-up fade-in-up-1 float-anim mb-8 relative">
          <div className="avatar-glow rounded-full p-1 bg-gradient-to-br from-accent-purple via-accent-cyan to-accent-mint">
            <img
              src="https://avatars.githubusercontent.com/u/181776372?v=4"
              alt="Doker"
              className="w-36 h-36 rounded-full object-cover border-4 border-[#0a0a0f]"
            />
          </div>
          {/* Online status */}
          <div className="absolute bottom-2 right-2 flex items-center gap-1">
            <span className="status-pulse w-3 h-3 bg-green-400 rounded-full block"></span>
          </div>
        </div>

        {/* Name */}
        <h1 className="fade-in-up fade-in-up-2 text-5xl md:text-6xl font-bold gradient-text mb-4">
          Doker
        </h1>

        {/* Subtitle / Typing */}
        <div className="fade-in-up fade-in-up-3 text-lg md:text-xl text-gray-400 mb-4 h-8">
          <TypeAnimation
            sequence={[
              'Full-Stack Developer',
              2000,
              'Reverse Engineering',
              2000,
              'Crypto & Blockchain',
              2000,
              'SMM Marketing',
              2000,
              'DOKER CORP',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={true}
            style={{ display: 'inline-block' }}
          />
        </div>

        {/* Location & Time */}
        <div className="fade-in-up fade-in-up-4 flex items-center gap-6 text-sm text-gray-500 mb-8">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-accent-purple" />
            USA
          </span>
          <span className="flex items-center gap-1.5">
            🕐 <LiveClock />
          </span>
        </div>

        {/* CTA */}
        <div className="fade-in-up fade-in-up-5 flex flex-wrap gap-4 justify-center">
          <a
            href="https://github.com/Doker420"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 min-w-[160px] px-12 py-3 bg-gradient-to-r from-accent-purple to-accent-cyan text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-accent-purple/20 whitespace-nowrap"
          >
            <GithubIcon size={18} />
            GitHub
          </a>
          <a
            href="https://t.me/doker"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 min-w-[160px] px-12 py-3 bg-gradient-to-r from-accent-cyan to-accent-mint text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-accent-cyan/20 whitespace-nowrap"
          >
            <TelegramIcon size={18} />
            Telegram
          </a>
          <RouterLink
            to="/projects"
            className="flex items-center justify-center min-w-[160px] px-12 py-3 border border-[#1e1e2e] text-gray-300 rounded-xl hover:border-accent-purple/50 hover:text-white transition-all whitespace-nowrap"
          >
            Проекты
          </RouterLink>
          <RouterLink
            to="/donate"
            className="flex items-center justify-center gap-2 min-w-[180px] px-12 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-red-500/20 whitespace-nowrap"
          >
            <Heart size={18} />
            Поддержать
          </RouterLink>
        </div>

        {/* Scroll indicator */}
        <div className="fade-in-up fade-in-up-6 mt-16 flex flex-col items-center gap-2 text-gray-600 text-xs uppercase tracking-widest">
          <span>scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-accent-purple/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}

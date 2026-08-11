import { useState } from 'react';
import { Heart, Copy, Check } from 'lucide-react';

const wallets = [
  {
    name: 'Bitcoin',
    symbol: '₿',
    network: 'BTC',
    address: 'bc1q3rxd86rss3arks39es95hyzewmpd5vjz994yh9',
    color: '#F7931A',
  },
  {
    name: 'Litecoin',
    symbol: 'Ł',
    network: 'LTC',
    address: 'LRtvkGPLej7EW4ribC2ovQRPp72TfNHvm8',
    color: '#345D9D',
  },
  {
    name: 'Tether',
    symbol: '₮',
    network: 'USDT (TRC20)',
    address: 'TJekB7LkzDFVnYP3Aj5ktdZrKpGj6CVZbB',
    color: '#26A17B',
  },
  {
    name: 'BNB',
    symbol: 'B',
    network: 'BNB (BEP20)',
    address: '0x81cA761f715267508256241A197cF3F9B8EC9110',
    color: '#F0B90B',
  },
];

function WalletCard({ wallet }: { wallet: (typeof wallets)[number] }) {
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(wallet.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable
    }
  };

  return (
    <div className="card-hover group bg-[#12121a] rounded-2xl p-6 flex flex-col items-center gap-4 w-full max-w-xs mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold transition-transform group-hover:scale-110"
          style={{ backgroundColor: wallet.color + '15', color: wallet.color }}
        >
          {wallet.symbol}
        </div>
        <div>
          <h3 className="text-white font-bold">{wallet.name}</h3>
          <p className="text-gray-500 text-xs">{wallet.network}</p>
        </div>
      </div>

      {/* QR code */}
      <div className="bg-white rounded-xl p-3 shadow-lg shadow-black/30">
        <img
          src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
            wallet.address
          )}`}
          alt={`${wallet.name} QR`}
          className="w-[180px] h-[180px]"
          loading="lazy"
        />
      </div>

      {/* Address */}
      <p className="text-xs text-gray-500 text-center break-all leading-relaxed font-mono px-2">
        {wallet.address}
      </p>

      {/* Copy button */}
      <button
        onClick={copyAddress}
        className="flex items-center justify-center gap-2 min-w-[140px] px-6 py-2.5 rounded-xl border border-[#1e1e2e] text-gray-300 text-sm font-medium hover:border-accent-purple/50 hover:text-white transition-all"
        style={copied ? { borderColor: wallet.color, color: wallet.color } : undefined}
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
        {copied ? 'Скопировано' : 'Копировать'}
      </button>

      {/* Bottom bar */}
      <div
        className="h-0.5 w-full rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ backgroundColor: wallet.color }}
      ></div>
    </div>
  );
}

export default function Donate() {
  return (
    <section id="donate" className="relative z-10 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent-purple text-sm font-semibold uppercase tracking-widest">
            Donate
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 flex items-center justify-center gap-3">
            Поддержать <Heart size={28} className="text-red-500" />
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-purple to-accent-cyan mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 text-sm mt-6 max-w-md mx-auto">
            Отсканируйте QR-код или скопируйте адрес кошелька для поддержки
            проекта
          </p>
        </div>

        {/* Wallets grid */}
        <div className="flex flex-wrap justify-center gap-5">
          {wallets.map((wallet) => (
            <WalletCard key={wallet.network} wallet={wallet} />
          ))}
        </div>
      </div>
    </section>
  );
}

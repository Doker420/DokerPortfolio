export default function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-[#1e1e2e] py-8 mt-auto">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()}{' '}
          <span className="gradient-text font-semibold">DOKER CORP</span>. All
          rights reserved.
        </p>
        <p className="text-gray-700 text-xs mt-2">
          🅳 🅾 🅺 🅴 🆁 🅲 🅾 🆁 🅿
        </p>
      </div>
    </footer>
  );
}

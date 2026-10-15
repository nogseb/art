import { DATE_VEILLE } from "@/data/appels";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = [
    ["#appels", "Appels"],
    ["#archives", "Archives"],
    ["#methodologie", "Méthode"],
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/8 bg-[oklch(0.08_0.005_285/0.95)] backdrop-blur-md">
      <div className="container flex items-center justify-between h-14">
        <a href="/" className="flex items-center gap-3 no-underline group">
          <div className="w-8 h-8 border border-white/20 flex items-center justify-center text-xs font-mono font-bold text-white/90 group-hover:border-white/40 transition-colors">1%</div>
          <div className="hidden sm:block">
            <div className="text-sm font-bold tracking-wide text-white/90 leading-none">NATHALIE CHARRIÉ</div>
            <div className="text-[10px] font-mono text-white/40 tracking-widest uppercase leading-none mt-0.5">Veille artistique</div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-2 text-xs font-mono text-white/40">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse" />
          Mise à jour : {DATE_VEILLE}
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map(([href, label]) => (
            <a key={href} href={href} className="text-xs font-mono tracking-widest text-white/50 hover:text-white/90 transition-colors uppercase">{label}</a>
          ))}
          <a href="https://nathalie-charrie.fr" target="_blank" rel="noopener noreferrer" className="text-xs font-mono tracking-widest text-white/50 hover:text-white/90 transition-colors uppercase">Portfolio →</a>
        </nav>

        <button className="md:hidden text-white/60 hover:text-white/90 transition-colors text-xs font-mono tracking-widest uppercase" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "FERMER" : "MENU"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/8 bg-[oklch(0.08_0.005_285)] px-4 py-4 flex flex-col gap-4">
          {menuItems.map(([href, label]) => (
            <a key={href} href={href} className="text-xs font-mono tracking-widest text-white/60 hover:text-white/90 transition-colors uppercase" onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a href="https://nathalie-charrie.fr" target="_blank" rel="noopener noreferrer" className="text-xs font-mono tracking-widest text-white/60 hover:text-white/90 transition-colors uppercase">Portfolio →</a>
          <div className="flex items-center gap-2 text-xs font-mono text-white/30 pt-2 border-t border-white/8"><span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse" />Mise à jour : {DATE_VEILLE}</div>
        </div>
      )}
    </header>
  );
}

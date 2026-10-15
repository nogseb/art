import { appelOuverts, budgetCumuleOuverts, DATE_VEILLE, nouveauxCetteSemaine, SEMAINE_VEILLE } from "@/data/appels";

function formatBudget(n: number): string {
  if (n >= 1000000) return `${(n / 1000000).toFixed(1)} M€`;
  if (n >= 1000) return `${Math.round(n / 1000)} K€`;
  return `${n} €`;
}

function StatBlock({ value, label, accent }: { value: string | number; label: string; accent?: "urgent" | "high" | "active" }) {
  const accentColors = {
    urgent: "text-[oklch(0.55_0.22_25)]",
    high: "text-[oklch(0.72_0.18_65)]",
    active: "text-[oklch(0.65_0.18_145)]",
  };
  const color = accent ? accentColors[accent] : "text-white/90";
  return (
    <div className="flex flex-col gap-1">
      <div className={`text-3xl sm:text-4xl font-bold font-mono ${color} leading-none`}>{value}</div>
      <div className="text-[10px] font-mono tracking-widest text-white/35 uppercase">{label}</div>
    </div>
  );
}

export default function HeroSection() {
  const hautementPertinents = appelOuverts.filter((a) => a.score >= 7);
  const deadlineLimit = new Date();
  deadlineLimit.setDate(deadlineLimit.getDate() + 7);
  const imminentLimit = deadlineLimit.toISOString().slice(0, 10);
  const imminents = appelOuverts.filter((a) => a.dateLimite <= imminentLimit);

  return (
    <section className="pt-14 min-h-[420px] relative overflow-hidden flex flex-col justify-end">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[oklch(0.08_0.005_285)] to-transparent" />

      <div className="container relative z-10 pb-10 pt-16">
        <div className="flex items-center gap-3 mb-6"><div className="h-px w-8 bg-white/20" /><span className="text-[10px] font-mono tracking-widest text-white/40 uppercase">Commande publique · Arts plastiques · France</span></div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.9] mb-2"><span className="text-white/90">Appels à</span><br /><span className="text-white/90">Candidatures</span><br /><span className="text-white/25">1% Artistique</span></h1>
        <p className="mt-6 text-sm text-white/45 max-w-lg leading-relaxed font-mono">Veille des opportunités de commande publique ouvertes aux artistes plasticiens — céramique, verre soufflé, sculpture.</p>
        <div className="mt-10 flex flex-wrap gap-8 sm:gap-12">
          <StatBlock value={appelOuverts.length} label="Appels ouverts" accent="active" />
          <StatBlock value={imminents.length} label="Échéance sous 7 jours" accent="urgent" />
          <StatBlock value={hautementPertinents.length} label="Score 7–9 / 9" accent="high" />
          <StatBlock value={formatBudget(budgetCumuleOuverts)} label="Budget cumulé" />
          <StatBlock value={`+${nouveauxCetteSemaine.length}`} label="Nouveau cette semaine" accent="active" />
        </div>
        <div className="mt-8 flex items-center gap-3"><a href="#appels" className="inline-flex items-center gap-2 px-4 py-2 border border-white/15 text-xs font-mono tracking-widest text-white/60 hover:text-white/90 hover:border-white/30 transition-all uppercase">Voir les appels <span className="text-white/30">↓</span></a><span className="text-[10px] font-mono text-white/25">{SEMAINE_VEILLE}</span></div>
      </div>
    </section>
  );
}

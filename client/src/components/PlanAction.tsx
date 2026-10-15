const ACTIONS = [
  {
    priorite: "DÉCISION IMMÉDIATE",
    color: "text-[oklch(0.55_0.22_25)]",
    borderColor: "border-l-[oklch(0.55_0.22_25)]",
    bgColor: "bg-[oklch(0.55_0.22_25/8%)]",
    date: "Avant le 19 octobre · 12 h",
    action: "Groisy — collège de Haute-Savoie",
    detail:
      "Arbitrer aujourd’hui la candidature. Ne lancer le dépôt que si les pièces administratives, les 5 à 10 références et la note d’intention sont prêtes. La consultation sélectionne au plus cinq candidats pour la phase projet.",
  },
  {
    priorite: "URGENCE HAUTE",
    color: "text-[oklch(0.72_0.18_65)]",
    borderColor: "border-l-[oklch(0.72_0.18_65)]",
    bgColor: "bg-[oklch(0.72_0.18_65/8%)]",
    date: "Qualification avant le 20 octobre",
    action: "Nantes — Le Cinématographe",
    detail:
      "Valider l’angle sculpture/verre, la lisibilité de façade et les contraintes de pose/maintenance. Le premier dossier est limité à 15 pages et clôture le 30 octobre à midi.",
  },
  {
    priorite: "À PRÉPARER",
    color: "text-[oklch(0.65_0.18_145)]",
    borderColor: "border-l-[oklch(0.65_0.18_145)]",
    bgColor: "bg-[oklch(0.65_0.18_145/8%)]",
    date: "Avant le 5 novembre",
    action: "Ry — Vitrail de la Médiathèque Bovary",
    detail:
      "Cadrer un projet réaliste au regard du plafond de 9 408 € TTC : niche traversante, lumière, sécurité au contact des publics et références à Madame Bovary. Le cahier des charges est disponible dans la fiche détaillée.",
  },
];

export default function PlanAction() {
  return (
    <section className="py-12 border-t border-white/8">
      <div className="container">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-8 bg-white/20" />
          <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase">
            Plan d'action
          </span>
        </div>

        <h2 className="text-2xl font-bold text-white/80 mb-8 leading-tight">
          Prochaines étapes
        </h2>

        <div className="space-y-3">
          {ACTIONS.map((action) => (
            <div
              key={action.action}
              className={`p-5 border border-white/8 border-l-[3px] ${action.borderColor} ${action.bgColor}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                <div className="flex-shrink-0 flex items-center gap-3">
                  <span className={`text-[9px] font-mono font-bold tracking-widest uppercase ${action.color}`}>
                    {action.priorite}
                  </span>
                  <span className="text-[10px] font-mono text-white/25">{action.date}</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-white/80 mb-1">{action.action}</div>
                  <p className="text-xs text-white/45 leading-relaxed">{action.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

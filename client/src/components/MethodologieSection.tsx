const SOURCES = [
  { num: "01", label: "Ministère de la Culture", description: "Référence officielle du 1 % artistique et de ses appels", url: "https://www.culture.gouv.fr/thematiques/arts-plastiques/commande-artistique/le-1-artistique" },
  { num: "02", label: "CNAP", description: "Liste générale d’appels à candidatures", url: "https://www.cnap.fr/annonces" },
  { num: "03", label: "CIPAC", description: "Appels à candidatures — commandes, 1 % et marchés publics", url: "https://cipac.net/annonces/appels" },
  { num: "04", label: "Artenda", description: "Répertoire complémentaire — signalements à vérifier", url: "https://artenda.net/pays-selectionne/1-artistique/France" },
  { num: "05", label: "Un pour cent", description: "Référentiel complémentaire de la commande artistique publique", url: "https://www.unpourcent.eu/" },
];

export default function MethodologieSection() {
  return (
    <section id="methodologie" className="py-16 border-t border-white/8">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6"><div className="h-px w-8 bg-white/20" /><span className="text-[10px] font-mono tracking-widest text-white/30 uppercase">Méthodologie</span></div>
            <h2 className="text-2xl font-bold text-white/80 mb-4 leading-tight">Sources<br />et notation</h2>
            <p className="text-sm text-white/45 leading-relaxed mb-6">Les appels sont recoupés en priorité sur les fiches du Ministère, les plateformes de dépôt et les pièces de consultation. Le CIPAC, Artenda et Un pour cent complètent la détection ; un signalement est écarté lorsqu’une source primaire contredit son périmètre.</p>
            <p className="text-sm text-white/45 leading-relaxed">La note sur 9 associe le type d’équipement, la localisation et le délai, chacun sur 3. <strong className="text-white/65">7–9 : haute</strong> ; <strong className="text-white/65">4–6 : moyenne</strong> ; <strong className="text-white/65">0–3 : faible</strong>. L’adéquation métier céramique/verre est explicitée dans chaque fiche et ne remplace pas ce score.</p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6"><div className="h-px w-8 bg-white/20" /><span className="text-[10px] font-mono tracking-widest text-white/30 uppercase">Sources consultées</span></div>
            <div className="space-y-3">
              {SOURCES.map((source) => (
                <a key={source.num} href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 border border-white/8 bg-[oklch(0.11_0.006_285)] hover:border-white/15 hover:bg-[oklch(0.13_0.006_285)] transition-all group no-underline">
                  <span className="text-[10px] font-mono text-white/20 tabular-nums flex-shrink-0 mt-0.5">{source.num}</span>
                  <div><div className="text-sm font-bold text-white/70 group-hover:text-white/90 transition-colors">{source.label}</div><div className="text-xs font-mono text-white/30 mt-0.5">{source.description}</div></div>
                  <span className="ml-auto text-white/20 group-hover:text-white/50 transition-colors text-xs font-mono flex-shrink-0">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

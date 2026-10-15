const ARCHIVES = [
  {
    date: "6 avril 2026",
    title: "Alerte initiale — 3 appels alors ouverts",
    status: "Archivée",
    description:
      "Mérignac, Roanne et Limoges figuraient dans l’état initial. Tous sont désormais clos et sortis de la liste d’action.",
    calls: [
      "École Jules Ferry · Mérignac · clôture 10 avril 2026",
      "CBRS François Denis · Limoges · clôture 14 avril 2026",
      "ZAC Gambetta · Roanne · clôture 30 avril 2026",
    ],
  },
];

export default function ArchivesSection() {
  return (
    <section id="archives" className="py-12 border-t border-white/8">
      <div className="container">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-white/20" />
          <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase">
            Archives
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white/80 leading-tight">
              Historique<br />
              des alertes
            </h2>
            <p className="mt-4 text-sm text-white/45 leading-relaxed max-w-md">
              L’alerte active remplace la liste d’action. Les semaines précédentes
              restent conservées ici pour tracer les appels sortis, sans les
              confondre avec les opportunités encore ouvertes.
            </p>
          </div>

          <div className="space-y-3">
            {ARCHIVES.map((archive) => (
              <article
                key={archive.date}
                className="border border-white/8 bg-[oklch(0.11_0.006_285)] p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-white/30">
                      Semaine du {archive.date}
                    </p>
                    <h3 className="mt-1 text-base font-bold text-white/75">
                      {archive.title}
                    </h3>
                  </div>
                  <span className="border border-white/10 px-2 py-1 text-[9px] font-mono uppercase tracking-widest text-white/35">
                    {archive.status}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/45">
                  {archive.description}
                </p>
                <ul className="mt-4 space-y-1.5 border-t border-white/8 pt-4">
                  {archive.calls.map((call) => (
                    <li key={call} className="text-[11px] font-mono text-white/30">
                      {call}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

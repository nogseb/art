import type { Appel } from "@/data/appels";
import Countdown from "./Countdown";
import PrioriteBadge from "./PrioriteBadge";
import { useState } from "react";

interface AppelCardProps {
  appel: Appel;
  index: number;
}

function EtoileRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} étoiles sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-[10px] ${i < count ? "text-[oklch(0.72_0.18_65)]" : "text-white/10"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function AppelCard({ appel, index }: AppelCardProps) {
  const [expanded, setExpanded] = useState(false);

  const borderColors: Record<string, string> = {
    urgente: "card-urgent",
    haute: "card-high",
    moyenne: "card-medium",
    faible: "card-low",
  };

  const isActive = appel.statut === "ouvert";
  const isEcarte = appel.statut === "a_ecarter";
  const isCloture = appel.statut === "cloture";
  const borderClass = isActive ? borderColors[appel.priorite] || "card-low" : "border-l-[3px] border-l-white/10";

  return (
    <article
      className={`relative bg-[oklch(0.11_0.006_285)] border border-white/8 ${borderClass} transition-all duration-300 animate-fade-up ${isCloture || isEcarte ? "opacity-50" : "hover:border-white/15 hover:bg-[oklch(0.13_0.006_285)]"}`}
      style={{ animationDelay: `${index * 80}ms`, animationFillMode: "both" }}
    >
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="text-[10px] font-mono text-white/20 tabular-nums">{String(index + 1).padStart(2, "0")}</span>
              <PrioriteBadge priorite={appel.priorite} statut={appel.statut} nouveau={appel.nouveauCetteSemaine} />
              <span className="border border-white/10 px-1.5 py-0.5 text-[9px] font-mono text-white/40">
                SCORE {appel.score}/9
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-white/90 leading-tight mb-1">{appel.titre}</h3>
            <p className="text-sm text-white/45 font-medium">{appel.commanditaire}</p>
          </div>

          {isActive && (
            <div className="flex-shrink-0">
              <Countdown dateLimite={appel.dateLimite} statut={appel.statut} />
            </div>
          )}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-mono text-white/35">
          <span>{appel.lieu} — {appel.departement}</span>
          <span className="text-white/15">·</span>
          <span>{appel.dateLimiteAffichage}{appel.heureLimit && ` · ${appel.heureLimit}`}</span>
          <span className="text-white/15">·</span>
          <span className="text-white/60 font-bold">{appel.budget}</span>
          <span className="text-white/15">·</span>
          <EtoileRating count={appel.etoiles} />
        </div>

        <p className="mt-4 text-sm text-white/55 leading-relaxed line-clamp-3">{appel.description}</p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 flex items-center gap-2 text-[10px] font-mono tracking-widest text-white/35 hover:text-white/70 transition-colors uppercase"
          aria-expanded={expanded}
        >
          <span className={`transition-transform duration-200 ${expanded ? "rotate-90" : ""}`}>▶</span>
          {expanded ? "Masquer l'analyse" : "Voir l'analyse complète"}
        </button>
      </div>

      {expanded && (
        <div className="border-t border-white/8 px-5 sm:px-6 py-5 space-y-5">
          <div>
            <h4 className="text-[10px] font-mono tracking-widest text-white/30 uppercase mb-2">Score de pertinence</h4>
            <p className="text-sm text-white/65 leading-relaxed">{appel.scoreDetail}</p>
            <p className="mt-1 text-[11px] font-mono text-white/30">Publication : {appel.datePublication}</p>
          </div>

          <div>
            <h4 className="text-[10px] font-mono tracking-widest text-white/30 uppercase mb-2">Analyse de pertinence</h4>
            <p className="text-sm text-white/65 leading-relaxed">{appel.analyseRelevance}</p>
          </div>

          <div>
            <h4 className="text-[10px] font-mono tracking-widest text-white/30 uppercase mb-2">Recommandation</h4>
            <p className="text-sm text-white/65 leading-relaxed">{appel.recommandation}</p>
          </div>

          <div>
            <h4 className="text-[10px] font-mono tracking-widest text-white/30 uppercase mb-2">Médiums et conditions</h4>
            <p className="text-sm text-white/50 leading-relaxed">{appel.mediumsAcceptes}</p>
          </div>

          <div>
            <h4 className="text-[10px] font-mono tracking-widest text-white/30 uppercase mb-3">Calendrier</h4>
            <div className="space-y-2">
              {appel.phases.map((phase, phaseIndex) => (
                <div key={`${phase.label}-${phaseIndex}`} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-4 h-4 mt-0.5 border border-white/15 flex items-center justify-center">
                    <span className="text-[8px] font-mono text-white/30">{phaseIndex + 1}</span>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-white/60">{phase.label}</span>
                    <span className="text-xs font-mono text-white/35 ml-2">— {phase.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {appel.indemniteNonRetenu && (
            <div>
              <h4 className="text-[10px] font-mono tracking-widest text-white/30 uppercase mb-2">Indemnité de phase étude</h4>
              <p className="text-sm text-white/50">{appel.indemniteNonRetenu}</p>
            </div>
          )}

          {appel.contact && (
            <div>
              <h4 className="text-[10px] font-mono tracking-widest text-white/30 uppercase mb-2">Contact</h4>
              <p className="text-sm text-white/50 font-mono">{appel.contact}</p>
            </div>
          )}

          <div>
            <h4 className="text-[10px] font-mono tracking-widest text-white/30 uppercase mb-2">Sources et cahier des charges</h4>
            <div className="flex flex-wrap gap-2">
              {appel.sources.map((source) => (
                <a
                  key={source.url}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono text-white/40 hover:text-white/70 underline underline-offset-2 transition-colors"
                >
                  {source.label} →
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

// ============================================================
// PRIORITÉ BADGE — Capsule typographique uppercase
// Rouge urgent · Ambre haute · Bleu moyenne · Gris faible
// ============================================================

import type { Priorite, Statut } from "@/data/appels";

interface PrioriteBadgeProps {
  priorite: Priorite;
  statut: Statut;
  nouveau?: boolean;
}

export default function PrioriteBadge({
  priorite,
  statut,
  nouveau,
}: PrioriteBadgeProps) {
  if (statut === "cloture") {
    return (
      <span className="inline-flex items-center px-2 py-0.5 text-[9px] font-mono font-bold tracking-widest uppercase border border-white/10 text-white/25 bg-white/5">
        Clôturé
      </span>
    );
  }

  if (statut === "a_ecarter") {
    return (
      <span className="inline-flex items-center px-2 py-0.5 text-[9px] font-mono font-bold tracking-widest uppercase border border-white/10 text-white/25 bg-white/5">
        À écarter
      </span>
    );
  }

  const configs: Record<Priorite, { label: string; className: string }> = {
    urgente: {
      label: "URGENT",
      className: "badge-urgent",
    },
    haute: {
      label: "PRIORITÉ HAUTE",
      className: "badge-high",
    },
    moyenne: {
      label: "PRIORITÉ MOYENNE",
      className: "badge-medium",
    },
    faible: {
      label: "PRIORITÉ BASSE",
      className: "badge-low",
    },
  };

  const config = configs[priorite];

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span
        className={`inline-flex items-center px-2 py-0.5 text-[9px] font-mono font-bold tracking-widest uppercase ${config.className}`}
      >
        {config.label}
      </span>
      {nouveau && (
        <span className="inline-flex items-center px-2 py-0.5 text-[9px] font-mono font-bold tracking-widest uppercase border border-[oklch(0.65_0.18_145)] text-[oklch(0.65_0.18_145)] bg-[oklch(0.65_0.18_145/10%)]">
          Nouveau
        </span>
      )}
    </div>
  );
}

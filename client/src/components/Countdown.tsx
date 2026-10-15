// ============================================================
// COUNTDOWN — Compteur de jours restants
// Pulse rouge si < 7 jours, ambre si < 14 jours
// ============================================================

import { useMemo } from "react";

interface CountdownProps {
  dateLimite: string; // ISO format YYYY-MM-DD
  statut: string;
}

export default function Countdown({ dateLimite, statut }: CountdownProps) {
  const joursRestants = useMemo(() => {
    if (statut !== "ouvert") return null;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const deadline = new Date(dateLimite);
    deadline.setHours(0, 0, 0, 0);
    const diff = Math.ceil(
      (deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );
    return diff;
  }, [dateLimite, statut]);

  if (joursRestants === null) return null;

  if (joursRestants < 0) {
    return (
      <div className="flex flex-col items-end">
        <span className="text-[10px] font-mono text-white/25 uppercase tracking-widest">
          Clôturé
        </span>
      </div>
    );
  }

  if (joursRestants === 0) {
    return (
      <div className="flex flex-col items-end pulse-urgent">
        <span className="text-2xl font-bold font-mono text-[oklch(0.55_0.22_25)] leading-none">
          Aujourd'hui
        </span>
        <span className="text-[10px] font-mono text-[oklch(0.55_0.22_25/0.7)] uppercase tracking-widest">
          Dernier jour
        </span>
      </div>
    );
  }

  const isUrgent = joursRestants <= 7;
  const isHigh = joursRestants <= 14;

  const color = isUrgent
    ? "text-[oklch(0.55_0.22_25)]"
    : isHigh
    ? "text-[oklch(0.72_0.18_65)]"
    : "text-white/60";

  const labelColor = isUrgent
    ? "text-[oklch(0.55_0.22_25/0.7)]"
    : isHigh
    ? "text-[oklch(0.72_0.18_65/0.7)]"
    : "text-white/30";

  return (
    <div className={`flex flex-col items-end ${isUrgent ? "pulse-urgent" : ""}`}>
      <span className={`text-2xl font-bold font-mono ${color} leading-none`}>
        {joursRestants}
      </span>
      <span className={`text-[10px] font-mono ${labelColor} uppercase tracking-widest`}>
        {joursRestants === 1 ? "jour" : "jours"}
      </span>
    </div>
  );
}

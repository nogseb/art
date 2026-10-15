import { appels, type Appel } from "@/data/appels";
import AppelCard from "./AppelCard";
import { useMemo, useState } from "react";

type FilterType = "tous" | "ouverts" | "urgents" | "haute" | "ecarter" | "clotures";

const REGIONS = ["Toutes régions", ...Array.from(new Set(appels.map((a) => a.region))).sort()];

export default function AppelsList() {
  const [filter, setFilter] = useState<FilterType>("ouverts");
  const [region, setRegion] = useState("Toutes régions");
  const [showEcarter, setShowEcarter] = useState(false);
  const [search, setSearch] = useState("");
  const urgentDate = new Date();
  urgentDate.setDate(urgentDate.getDate() + 7);
  const urgentLimit = urgentDate.toISOString().slice(0, 10);

  const filtered = useMemo(() => {
    let list: Appel[] = appels;

    if (filter === "ouverts") {
      list = list.filter((a) => a.statut === "ouvert");
    } else if (filter === "urgents") {
      list = list.filter((a) => a.statut === "ouvert" && a.dateLimite <= urgentLimit);
    } else if (filter === "haute") {
      list = list.filter((a) => a.statut === "ouvert" && (a.priorite === "haute" || a.priorite === "urgente"));
    } else if (filter === "ecarter") {
      list = list.filter((a) => a.statut === "a_ecarter");
    } else if (filter === "clotures") {
      list = list.filter((a) => a.statut === "cloture");
    } else if (!showEcarter) {
      list = list.filter((a) => a.statut !== "a_ecarter");
    }

    if (region !== "Toutes régions") list = list.filter((a) => a.region === region);

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((a) =>
        [a.titre, a.commanditaire, a.lieu, a.departement, a.typeLieu]
          .join(" ")
          .toLowerCase()
          .includes(q)
      );
    }

    return [...list].sort((a, b) => a.dateLimite.localeCompare(b.dateLimite));
  }, [filter, region, showEcarter, search, urgentLimit]);

  const filterButtons: { id: FilterType; label: string; count?: number }[] = [
    { id: "ouverts", label: "Ouverts", count: appels.filter((a) => a.statut === "ouvert").length },
    { id: "urgents", label: "Urgents", count: appels.filter((a) => a.statut === "ouvert" && a.dateLimite <= urgentLimit).length },
    { id: "haute", label: "Hautement pertinents", count: appels.filter((a) => a.statut === "ouvert" && a.priorite === "haute").length },
    { id: "clotures", label: "Clôturés", count: appels.filter((a) => a.statut === "cloture").length },
    { id: "ecarter", label: "À écarter", count: appels.filter((a) => a.statut === "a_ecarter").length },
    { id: "tous", label: "Tous" },
  ];

  return (
    <section id="appels" className="py-12">
      <div className="container">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-white/8" />
          <span className="text-[10px] font-mono tracking-widest text-white/30 uppercase">Appels à candidatures</span>
          <div className="h-px flex-1 bg-white/8" />
        </div>

        <p className="mb-6 max-w-3xl text-sm leading-relaxed text-white/45">
          Les scores combinent le type d’équipement, la localisation et le délai. Les appels ouverts sont classés par échéance ; les signalements hors périmètre sont isolés.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="text"
            placeholder="Rechercher…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-[oklch(0.11_0.006_285)] border border-white/10 px-3 py-2 text-xs font-mono text-white/70 placeholder:text-white/25 focus:outline-none focus:border-white/25 transition-colors"
          />
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="bg-[oklch(0.11_0.006_285)] border border-white/10 px-3 py-2 text-xs font-mono text-white/60 focus:outline-none focus:border-white/25 transition-colors"
          >
            {REGIONS.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {filterButtons.map((btn) => {
            const isActive = filter === btn.id;
            return (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-3 py-1.5 text-[10px] font-mono tracking-widest uppercase transition-all ${isActive ? "bg-white/10 text-white/90 border border-white/20" : "text-white/35 border border-white/8 hover:text-white/60 hover:border-white/15"}`}
              >
                {btn.label}
                {btn.count !== undefined && <span className={`ml-1.5 ${isActive ? "text-white/50" : "text-white/20"}`}>({btn.count})</span>}
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-mono text-white/25">{filtered.length} résultat{filtered.length !== 1 ? "s" : ""}</span>
          {filter === "tous" && (
            <button
              onClick={() => setShowEcarter(!showEcarter)}
              className="text-[10px] font-mono text-white/25 hover:text-white/50 transition-colors uppercase tracking-widest"
            >
              {showEcarter ? "Masquer écartés" : "Afficher écartés"}
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="py-16 text-center"><p className="text-sm font-mono text-white/25">Aucun appel trouvé pour ces critères.</p></div>
        ) : (
          <div className="space-y-3">{filtered.map((appel, i) => <AppelCard key={appel.id} appel={appel} index={i} />)}</div>
        )}
      </div>
    </section>
  );
}

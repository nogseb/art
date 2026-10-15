import { DATE_VEILLE } from "@/data/appels";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 py-10 mt-8">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div><div className="text-sm font-bold text-white/60 mb-1">Nathalie Charrié</div><div className="text-xs font-mono text-white/25">Artiste plasticienne · Céramique sculpturale · Verre soufflé</div></div>
          <div className="flex flex-wrap gap-6">
            <a href="https://www.culture.gouv.fr/thematiques/arts-plastiques/commande-artistique/le-1-artistique" target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono tracking-widest text-white/25 hover:text-white/60 transition-colors uppercase">Ministère →</a>
            <a href="https://www.cnap.fr/annonces" target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono tracking-widest text-white/25 hover:text-white/60 transition-colors uppercase">CNAP →</a>
            <a href="https://cipac.net/annonces/appels" target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono tracking-widest text-white/25 hover:text-white/60 transition-colors uppercase">CIPAC →</a>
            <a href="https://nathalie-charrie.fr" target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono tracking-widest text-white/25 hover:text-white/60 transition-colors uppercase">nathalie-charrie.fr →</a>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"><span className="text-[10px] font-mono text-white/15">Veille vérifiée — {DATE_VEILLE}</span><span className="text-[10px] font-mono text-white/15">Sources : Ministère · CNAP · CIPAC · Artenda · Un pour cent</span></div>
      </div>
    </footer>
  );
}

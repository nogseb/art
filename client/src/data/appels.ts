// ============================================================
// DONNÉES DES APPELS 1 % ARTISTIQUE — Veille du 15 octobre 2026
// Sources vérifiées : Ministère, CNAP, CIPAC, Artenda, Un pour cent
// ============================================================

export type Priorite = "urgente" | "haute" | "moyenne" | "faible";
export type Statut = "ouvert" | "a_ecarter" | "cloture";

export interface Phase {
  label: string;
  date: string;
}

export interface Source {
  label: string;
  url: string;
}

export interface Appel {
  id: string;
  titre: string;
  commanditaire: string;
  lieu: string;
  departement: string;
  region: string;
  budget: string;
  budgetBrut: number | null;
  dateLimite: string;
  dateLimiteAffichage: string;
  heureLimit?: string;
  statut: Statut;
  priorite: Priorite;
  etoiles: number;
  score: number;
  scoreDetail: string;
  datePublication: string;
  description: string;
  analyseRelevance: string;
  recommandation: string;
  sources: Source[];
  typeLieu: string;
  mediumsAcceptes: string;
  phases: Phase[];
  indemniteNonRetenu?: string;
  contact?: string;
  nouveauCetteSemaine?: boolean;
}

export const appels: Appel[] = [
  {
    id: "groisy-2026",
    titre: "Nouveau collège de Groisy — 1 % artistique",
    commanditaire: "Département de la Haute-Savoie",
    lieu: "Groisy",
    departement: "Haute-Savoie (74)",
    region: "Auvergne-Rhône-Alpes",
    budget: "342 000 € TTC — enveloppe globale",
    budgetBrut: 342000,
    dateLimite: "2026-10-19",
    dateLimiteAffichage: "19 octobre 2026",
    heureLimit: "12 h",
    statut: "ouvert",
    priorite: "moyenne",
    etoiles: 3,
    score: 4,
    scoreDetail: "Collège 3/3 · Auvergne-Rhône-Alpes 1/3 · J-4 0/3",
    datePublication: "Septembre 2026",
    description:
      "Conception, réalisation et installation d’une œuvre d’art au titre du 1 % artistique, pour la construction d’un nouveau collège et la restructuration du collège existant à Groisy.",
    analyseRelevance:
      "L’équipement scolaire et l’enveloppe sont très favorables à une œuvre pérenne. En revanche, le score formel est moyen car le délai est très court et la région n’est pas prioritaire. La céramique ou le verre doivent être défendus à travers des références de réalisations durables et une capacité technique explicite.",
    recommandation:
      "DÉCISION IMMÉDIATE : ne candidater que si le dossier administratif, les références et la personne disponible pour le dépôt sont prêts. Le marché retient au plus cinq candidats pour la phase projet.",
    sources: [
      {
        label: "Fiche officielle — Ministère de la Culture",
        url: "https://www.culture.gouv.fr/catalogue-des-demarches-et-subventions/appels-a-projet-partenaires/appel-a-candidatures-pour-le-1-artistique-dans-le-cadre-de-la-construction-du-nouveau-college-de-groisy-en-haute-savoie-74",
      },
      {
        label: "DCE / plateforme Haute-Savoie — réf. 2026M0367",
        url: "https://www.marches-publics.info/mpiaws/index.cfm?fuseaction=dematEnt.choixDCE&IDM=1868504&XFAOK=dce.verifLotsDCE",
      },
      {
        label: "Règlement d'appel public à candidatures (PDF)",
        url: "https://www.culture.gouv.fr/mc/content/download/394210/file/R%C3%A8glement%20d%E2%80%99appel%20public%20%C3%A0%20candidatures%20%28RAPC%29%201%20pourcent%20Groisy.pdf?inLanguage=fre-FR&version=1",
      },
    ],
    typeLieu: "Collège public",
    mediumsAcceptes:
      "Artistes-auteurs ou groupements. La plateforme Artenda classe notamment la sculpture et la céramique parmi les domaines de l’appel ; le programme artistique complet est à retirer sur la plateforme acheteur.",
    phases: [
      { label: "Date limite de candidature", date: "19 octobre 2026 à 12 h" },
      { label: "Sélection des candidats admis", date: "Décembre 2026" },
      { label: "Remise des offres / études", date: "Janvier à avril 2027" },
      { label: "Attribution du contrat", date: "Juillet 2027" },
    ],
    indemniteNonRetenu: "2 500 € TTC pour les candidats présélectionnés, sous condition de conformité de l’étude.",
  },
  {
    id: "cinematographe-nantes-2026",
    titre: "Œuvre en hommage à Jacques Demy — Le Cinématographe",
    commanditaire: "Le Cinématographe / Ciné-Nantes Loire-Atlantique",
    lieu: "Nantes",
    departement: "Loire-Atlantique (44)",
    region: "Pays de la Loire",
    budget: "55 500 € TTC — 49 700 € TTC pour le lauréat",
    budgetBrut: 55500,
    dateLimite: "2026-10-30",
    dateLimiteAffichage: "30 octobre 2026",
    heureLimit: "12 h",
    statut: "ouvert",
    priorite: "moyenne",
    etoiles: 4,
    score: 6,
    scoreDetail: "Équipement culturel 3/3 · Pays de la Loire 1/3 · J-15 2/3",
    datePublication: "2 octobre 2026",
    description:
      "Commande d’une œuvre pérenne en façade et sur un mur intérieur visibles depuis la rue, destinée à signaler le nouveau Cinématographe et à dialoguer avec l’univers de Jacques Demy.",
    analyseRelevance:
      "Le projet offre un bon terrain pour une sculpture ou un dispositif lumineux en verre, voire une association avec la céramique. La réponse doit démontrer la lisibilité du nom, la tenue en façade, la maintenance simple et la compatibilité avec les contraintes d’un établissement recevant du public et l’avis ABF.",
    recommandation:
      "À ÉVALUER rapidement : qualifier l’axe artistique et les solutions de fixation avant le 20 octobre. Le premier dépôt est limité à 15 pages et ne requiert pas encore de proposition formelle détaillée.",
    sources: [
      {
        label: "Annonce CIPAC",
        url: "https://cipac.net/annonces/appels/le-cinematographe-nantes-oeuvre-en-hommage-a-jacques-demy-01-10-2026",
      },
      {
        label: "Appel à candidatures (PDF)",
        url: "https://cipac.net/media/pages/annonces/appels/le-cinematographe-nantes-oeuvre-en-hommage-a-jacques-demy-01-10-2026/87262969-1791278940/cinematographe.pdf",
      },
    ],
    typeLieu: "Cinéma / équipement culturel",
    mediumsAcceptes:
      "Aucun matériau prescrit. Artistes, collectifs et équipes pluridisciplinaires justifiant d’une pratique confirmée dans l’espace public ou architectural et d’une capacité à garantir la durabilité de l’œuvre.",
    phases: [
      { label: "Clôture des candidatures", date: "30 octobre 2026 à 12 h" },
      { label: "Jury de présélection", date: "9 novembre 2026" },
      { label: "Visite sur site", date: "18 novembre 2026" },
      { label: "Remise des études", date: "18 décembre 2026 à 12 h" },
      { label: "Installation", date: "Mai 2027" },
    ],
    indemniteNonRetenu: "2 900 € TTC pour chacun des trois candidats retenus en phase étude ; avance intégrée au budget du lauréat.",
    contact: "studio@galeriegaia.fr · 02 40 48 14 91",
  },
  {
    id: "mediatheque-bovary-ry-2027",
    titre: "Vitrail — Médiathèque Bovary",
    commanditaire: "Commune de Ry",
    lieu: "Ry",
    departement: "Seine-Maritime (76)",
    region: "Normandie",
    budget: "9 408 € TTC maximum pour l’artiste",
    budgetBrut: 9408,
    dateLimite: "2027-01-25",
    dateLimiteAffichage: "25 janvier 2027",
    statut: "ouvert",
    priorite: "haute",
    etoiles: 5,
    score: 7,
    scoreDetail: "Médiathèque 3/3 · Normandie 1/3 · >30 jours 3/3",
    datePublication: "13 octobre 2026",
    nouveauCetteSemaine: true,
    description:
      "Commande 1 % artistique de vitrail contemporain pour la reconversion d’une ancienne auberge en Médiathèque Bovary. L’œuvre prendra place dans une niche traversante, visible depuis le salon d’Emma et l’escalier.",
    analyseRelevance:
      "C’est l’opportunité la plus directement alignée avec la pratique du verre soufflé. Le cahier autorise le vitrail au plomb, la grisaille, le fusing, Tiffany, les techniques mixtes et l’association à d’autres matériaux. Le plafond budgétaire appelle une proposition resserrée, robuste et non coupante, adaptée à un usage public intérieur.",
    recommandation:
      "À PRÉPARER : cadrer la réponse autour de la lumière, de la couleur et des thèmes littéraires liés à Madame Bovary. Organiser le portfolio autour d’œuvres en verre/céramique, de la médiation et de la durabilité en intérieur.",
    sources: [
      {
        label: "Annonce CIPAC",
        url: "https://cipac.net/annonces/appels/vitrail-mediatheque-bovary-13-10-2026",
      },
      {
        label: "Cahier des charges (PDF)",
        url: "https://cipac.net/media/pages/annonces/appels/vitrail-mediatheque-bovary-13-10-2026/2072894552-1791968636/mediatheque-bovary_1-cahier-des-charges_compressed.pdf",
      },
    ],
    typeLieu: "Médiathèque / équipement patrimonial",
    mediumsAcceptes:
      "Vitrail contemporain : vitrail au plomb, grisaille, fusing, vitrail Tiffany, techniques mixtes ou associées à un autre matériau.",
    phases: [
      { label: "Lancement de la consultation", date: "19 octobre 2026" },
      { label: "Date limite de candidature", date: "25 janvier 2027" },
      { label: "Choix de l’artiste", date: "8 février 2027" },
      { label: "Installation de l’œuvre", date: "4e trimestre 2027" },
    ],
    contact: "mairie@mairie-ry.fr · 02 35 23 60 61",
  },
  {
    id: "liancourt-ujpe-2026",
    titre: "UJPE de Liancourt — 1 % artistique",
    commanditaire: "Ministère de la Justice",
    lieu: "Liancourt",
    departement: "Oise (60)",
    region: "Hauts-de-France",
    budget: "38 040 € TTC (source complémentaire)",
    budgetBrut: 38040,
    dateLimite: "2026-10-12",
    dateLimiteAffichage: "12 octobre 2026",
    heureLimit: "12 h",
    statut: "cloture",
    priorite: "faible",
    etoiles: 2,
    score: 4,
    scoreDetail: "Équipement judiciaire éducatif 2/3 · Hauts-de-France 1/3 · clos 0/3",
    datePublication: "15 septembre 2026",
    description: "Appel 1 % artistique pour la future unité judiciaire à priorité éducative de Liancourt.",
    analyseRelevance: "Appel fermé, conservé à titre de référence.",
    recommandation: "Aucune action de candidature : clôture confirmée par le Ministère.",
    sources: [
      {
        label: "Fiche officielle — Ministère de la Culture",
        url: "https://www.culture.gouv.fr/regions/drac-hauts-de-france/appel-a-candidatures-1-artistique-du-ministere-de-la-justice-unite-judiciaire-a-priorite-educative-ujpe-de-liancourt-60",
      },
    ],
    typeLieu: "Unité judiciaire à priorité éducative",
    mediumsAcceptes: "Artistes ou collectifs d’artistes.",
    phases: [{ label: "Clôture", date: "12 octobre 2026 à 12 h" }],
  },
  {
    id: "issy-epinettes-2026",
    titre: "Groupe scolaire des Épinettes",
    commanditaire: "Ville d’Issy-les-Moulineaux",
    lieu: "Issy-les-Moulineaux",
    departement: "Hauts-de-Seine (92)",
    region: "Île-de-France",
    budget: "148 766 € HT maximum (source complémentaire)",
    budgetBrut: 148766,
    dateLimite: "2026-10-05",
    dateLimiteAffichage: "5 octobre 2026",
    heureLimit: "17 h",
    statut: "cloture",
    priorite: "faible",
    etoiles: 3,
    score: 5,
    scoreDetail: "Groupe scolaire 3/3 · Île-de-France 2/3 · clos 0/3",
    datePublication: "24 juillet 2026",
    description: "1 % artistique associé au futur groupe scolaire des Épinettes et à un équipement socio-culturel.",
    analyseRelevance: "Appel fermé, conservé à titre de référence pour les futures consultations scolaires franciliennes.",
    recommandation: "Aucune action de candidature : clôture confirmée par le Ministère.",
    sources: [
      {
        label: "Fiche officielle — Ministère de la Culture",
        url: "https://www.culture.gouv.fr/catalogue-des-demarches-et-subventions/appels-a-projet-partenaires/1-artistique-a-issy-les-moulineaux.-une-aeuvre-a-imaginer-pour-le-futur-groupe-scolaire-des-epinettes",
      },
    ],
    typeLieu: "Groupe scolaire et équipement socio-culturel",
    mediumsAcceptes: "Arts plastiques et visuels.",
    phases: [{ label: "Clôture", date: "5 octobre 2026 à 17 h" }],
  },
  {
    id: "chaudfontaine-2026",
    titre: "Festival des 5 Saisons — Fresques",
    commanditaire: "Commune de Chaudfontaine",
    lieu: "Chaudfontaine",
    departement: "Belgique",
    region: "Hors périmètre France",
    budget: "3 500 à 7 000 € TTC selon la fresque",
    budgetBrut: null,
    dateLimite: "2026-10-31",
    dateLimiteAffichage: "31 octobre 2026",
    statut: "a_ecarter",
    priorite: "faible",
    etoiles: 1,
    score: 1,
    scoreDetail: "Fresque 1/3 · hors France 0/3 · J-16 0/3",
    datePublication: "14 septembre 2026",
    description: "Appel belge pour trois fresques murales, repéré dans la sélection France d’Artenda.",
    analyseRelevance: "La source primaire confirme que le projet se situe en Belgique et concerne exclusivement des fresques. Il ne relève donc pas du périmètre France de cette veille et n’est pas adapté aux médiums ciblés.",
    recommandation: "À écarter et ne pas compter dans les appels français ouverts.",
    sources: [
      {
        label: "Source primaire — Fédération Wallonie-Bruxelles",
        url: "https://www.culture.be/en/vous-cherchez/appels-a-projetcandidature/detail/?tx_ttnews%5Bpointer%5D=2&tx_ttnews%5BbackPid%5D=17500&tx_ttnews%5Btt_news%5D=11690&cHash=f80a47b2d5a727c069fe21753e6c9b3a",
      },
      {
        label: "Artenda — sélection France",
        url: "https://artenda.net/pays-selectionne/1-artistique/France",
      },
    ],
    typeLieu: "Murs et espaces publics",
    mediumsAcceptes: "Peinture et dessin uniquement.",
    phases: [{ label: "Date limite", date: "31 octobre 2026" }],
  },
];

export const appelOuverts = appels.filter((a) => a.statut === "ouvert");
export const appelEcarter = appels.filter((a) => a.statut === "a_ecarter");
export const appelClotures = appels.filter((a) => a.statut === "cloture");
export const budgetCumuleOuverts = appelOuverts.reduce(
  (sum, a) => sum + (a.budgetBrut ?? 0),
  0
);
export const nouveauxCetteSemaine = appels.filter((a) => a.nouveauCetteSemaine);

export const DATE_VEILLE = "15 octobre 2026";
export const SEMAINE_VEILLE = "Semaine du 12 au 18 octobre 2026";

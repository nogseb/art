# Veille 1 % artistique — Nathalie Charrié

Tableau de bord statique de veille des appels à candidatures de commande publique, ciblé sur la céramique sculpturale et le verre soufflé.

La version courante présente l’alerte du **15 octobre 2026** : trois appels ouverts vérifiés (Groisy, Nantes et Ry), une archive du 6 avril 2026, les scores de pertinence, les actions prioritaires et les liens vers les pièces de consultation.

## Développement local

Prérequis : Node.js 22 et pnpm 10.

```bash
pnpm install --frozen-lockfile
pnpm run dev
```

Contrôles de production :

```bash
pnpm run check
pnpm run build
```

Le build statique est produit dans `dist/public/`.

## Publication GitHub

Chaque push sur `main` exécute le workflow `.github/workflows/deploy-pages.yml` et publie la version statique sur GitHub Pages. Cette publication fournit une URL de contrôle GitHub Pages ; elle ne remplace pas automatiquement l’hébergement actuel de `nogues.app`.

## Publication sur `nogues.app/art`

Le domaine répond aujourd’hui depuis un serveur Apache externe et le chemin `/art` n’existe pas encore. GitHub ne peut pas le mettre à jour sans une liaison explicite avec ce serveur.

Le déploiement à activer côté hébergement consiste à copier le contenu du build GitHub Actions `dist/public/` dans le répertoire servi par Apache, puis à exposer ce répertoire sous `/art/`. Exemple de configuration Apache, à adapter au DocumentRoot réel :

```apache
Alias /art/ /var/www/nogues.app/art/
<Directory /var/www/nogues.app/art>
    Options -Indexes
    Require all granted
</Directory>
```

L’automatisation recommandée est un workflow GitHub Actions qui transfère l’artefact vers ce répertoire via SSH ou le mécanisme de déploiement déjà utilisé par le serveur. Les secrets de déploiement doivent être configurés dans GitHub par l’administrateur de l’hébergement ; ils ne sont pas stockés dans ce dépôt.

## Structure

- `client/` : interface React/Vite/Tailwind.
- `client/src/data/appels.ts` : données et sources de la veille.
- `client/src/components/ArchivesSection.tsx` : historique des alertes.
- `.github/workflows/deploy-pages.yml` : build et publication GitHub Pages.

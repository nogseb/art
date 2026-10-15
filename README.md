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

## Publication sur `nogues.app/art`

Chaque push sur `main` déclenche `.github/workflows/deploy-nogues-app.yml` : le site est compilé puis synchronisé par SFTP depuis `dist/public/` vers `./art/` du compte SFTP.

Le workflow attend trois secrets GitHub, déjà configurés dans le dépôt :

- `SFTP_HOST` ou `SFTP_SERVER` : nom d’hôte SFTP ;
- `SFTP_USERNAME` ou `SFTP_USER` : utilisateur SFTP ;
- `SFTP_PASSWORD` : mot de passe SFTP.

La synchronisation est **non destructive** (`delete_remote_files: false`) : elle n’efface pas de fichiers distants avant l’envoi. Le répertoire cible `./art/` doit correspondre à la racine web exposée sous `https://nogues.app/art/` pour le compte SFTP.

## Structure

- `client/` : interface React/Vite/Tailwind.
- `client/src/data/appels.ts` : données et sources de la veille.
- `client/src/components/ArchivesSection.tsx` : historique des alertes.
- `.github/workflows/deploy-nogues-app.yml` : build et publication SFTP.

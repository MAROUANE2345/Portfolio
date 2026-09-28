# Portfolio — Marouane Abderrahmane

Portfolio Next.js (App Router, TypeScript, Tailwind CSS) généré à partir du CV.

## Démarrer en local

```bash
npm install
npm run dev
```

Puis ouvrir http://localhost:3000

## Déploiement

Le plus simple : pousser ce dossier sur GitHub puis l'importer sur [Vercel](https://vercel.com/new) (aucune configuration nécessaire, Next.js y est reconnu automatiquement).

## Structure

- `app/` — layout, page d'accueil et styles globaux
- `components/` — sections de la page (Header, Hero, Stack, Experience, Projects, Education, Contact)
- `lib/data.ts` — tout le contenu (nom, expériences, projets, compétences...) : modifier ce fichier suffit pour mettre le site à jour

## Personnaliser

- Couleurs et polices : `tailwind.config.js` et `app/globals.css`
- Contenu : `lib/data.ts`
- Photo de profil : ajouter une image dans `public/` puis l'afficher dans `components/Hero.tsx`

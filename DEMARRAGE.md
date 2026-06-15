# SA-Errandlogistics — Guide de démarrage

## Problème de lenteur / blocage ?

Ce projet a été optimisé pour éviter de saturer la RAM :

- **Turbopack désactivé** par défaut (utilise Webpack, plus stable)
- **Dépendances lourdes supprimées** : Ant Design, GSAP, Framer Motion
- **Police Poppins** via `next/font` (pas de Google Fonts externe)
- **Port fixe** : 3010

## Commandes

```bash
cd sa-logistics

# 1. Installer (une seule fois)
npm install

# 2. Développement — léger, port 3010
npm run dev

# 3. Production (recommandé si dev est lent)
npm run build
npm start
```

Ouvrir : **http://localhost:3010**

## Si ça bloque encore

1. **Fermer tous les autres serveurs Next.js** :
   ```bash
   kill $(lsof -ti:3000,3001,3005,3007,3008,3009,3010) 2>/dev/null
   ```

2. **Nettoyer le cache** :
   ```bash
   rm -rf .next node_modules/.cache
   npm run build
   npm start
   ```

3. **Ne pas lancer plusieurs `npm run dev` en parallèle** — un seul suffit.

4. **Éviter `npm run dev:turbo`** sauf si vous avez 16 Go+ RAM libre.

## Stack allégée

- Next.js 16 + React 19
- Tailwind CSS 3
- Lucide React (icônes)
- Animations CSS légères (`Reveal` component)

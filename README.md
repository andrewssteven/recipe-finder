# recipe-finder

A small, fast React app built with Vite that helps users search and browse recipes.

This repository contains the front-end for the Recipe Finder project — a single-page React application that demonstrates a search-driven UI, reusable recipe cards, and a minimal build setup using Vite.

## Contents

- `src/` — React source files (components, pages, utilities)
- `components/` — reusable UI components (e.g. `Recipecard.jsx`)
- `public/images/` — static images used by the app
- `src/recipe.js` — recipe data / API helper used by the app

## Key features

- Fast development with Vite and React 19
- Simple search UX for finding recipes
- Reusable components (recipe card, search input)
- Production-ready build output via `vite build`

## Tech stack

- React 19
- Vite (bundler & dev server)
- ESLint (linting)

## Prerequisites

- Node.js 18 or newer
- npm (or Yarn / pnpm)

## Quick start (run locally)

Clone the repository, install dependencies, then run the dev server:

```bash
git clone https://github.com/andrewssteven/recipe-finder.git
cd recipe-finder
npm install
npm run dev
```

Open http://localhost:5173 in your browser (Vite will print the dev URL in the terminal).

## Available scripts

All scripts are defined in `package.json`.

- `npm run dev` — start development server with hot module replacement
- `npm run build` — produce an optimized production build (output in `dist/`)
- `npm run preview` — locally preview the production build
- `npm run lint` — run ESLint across the project

Example (development):

```bash
npm run dev
```

Example (build for production):

```bash
npm run build
npm run preview
```

## Project structure (high level)

- `index.html` — Vite entry HTML
- `src/main.jsx` — app bootstrap
- `src/App.jsx` — main application component (wires search + results)
- `components/Recipecard.jsx` — recipe card component
- `src/recipe.js` — recipe fetcher / local dataset
- `public/images/` — static images and screenshots

Inspect these files to learn how the search is implemented and how recipes are rendered.

## Configuration & environment

This project currently does not require secret environment variables to run. If you later integrate a remote recipe API that needs an API key, place keys in a `.env` file and reference them via `import.meta.env.VITE_API_KEY` (Vite prefix `VITE_` required).

Example `.env` (do not commit secrets):

```
VITE_API_KEY=your_api_key_here
```

## Build & deploy

The app builds to static assets in `dist/`. You can deploy the contents of `dist/` to any static host (Netlify, Vercel, GitHub Pages, S3, etc.).

Typical steps for production deployment:

```bash
npm ci
npm run build
# deploy the `dist/` folder with your host's recommended method
```

For Vercel: connect the repo and set the build command to `npm run build` and the output directory to `dist`.

## Linting & code quality

Run the project's linter with:

```bash
npm run lint
```

Add or configure ESLint rules in the project config if you want stricter checks or TypeScript support.

## License

This repository currently does not include a `LICENSE` file. Add one (for example MIT) to make the project's license explicit.

Last updated: 2025-11-06

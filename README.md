# ARTI AI

Private AI workspace — React + TypeScript + Vite foundation.

## Current foundation

The previous basic static Step 1 UI has been replaced by a premium, cinematic React intelligence workspace.

### Included
- React + TypeScript + Vite structure
- Premium responsive command-center shell
- Collapsible desktop sidebar + mobile drawer
- Home / Intelligence landing experience
- Search, Magic Mode, profile and system-status surfaces
- Cinematic AI environment with stars, aurora, grid, particles and vignette
- Animated ARTI intelligence globe/core with orbital nodes
- Main prompt composer with attach, voice and model controls
- Quick directions for projects, research, generation, code and worlds
- Responsive phone/tablet/laptop/desktop composition
- Reduced-motion support
- No backend, provider, authentication or fake AI response layer yet
- Official ARTI logo deliberately left as a placeholder for the supplied logo

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## GitHub Pages

A GitHub Actions workflow is included at `.github/workflows/deploy.yml`.

It builds the Vite application and deploys the generated `dist` output to GitHub Pages whenever `main` changes. The Vite base path automatically switches to `/ARTI/` during GitHub Actions builds.

The hosting provider still needs GitHub Pages to be enabled with **GitHub Actions** as its source.

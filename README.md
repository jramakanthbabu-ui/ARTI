# ARTI AI — Step 1 Home UI

Step 1 establishes the ARTI AI Home experience and responsive interaction foundation.

## Included

- Responsive Home UI for desktop, laptop, tablet and mobile viewports.
- Immediate Home screen on app launch.
- Collapsible desktop sidebar and mobile navigation drawer.
- Search field, Magic Mode control, hero prompt and quick actions.
- Continuously animated globe/orbital layer.
- Controlled ambient particle motion.
- Static cinematic-style background treatment with a separate animated layer.
- Static-hosting-friendly entry point at `index.html`.
- No backend or AI provider dependency in Step 1.

## Logo

The official ARTI logo asset is intentionally **not included in this commit**, per project instruction. The logo placeholder is isolated so the official logo can be inserted later without changing the surrounding Home layout.

## Run

```bash
python3 -m http.server 4173 -d .
```

Then open `http://localhost:4173`.

## Deployment

The current Step 1 is a static site with `index.html` as the entry point.

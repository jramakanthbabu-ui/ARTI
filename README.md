# ARTI AI — Step 1 Home UI

Step 1 establishes the ARTI AI Home experience from the supplied visual reference and official ARTI logo.

## Step 1 scope

- Responsive Home UI for desktop, laptop, tablet and mobile viewports.
- Supplied ARTI AI logo asset.
- Supplied cinematic Home environment asset.
- Continuously rotating globe with independent orbital rings.
- Controlled ambient particle motion.
- Collapsible desktop sidebar and mobile navigation drawer.
- Search field, Magic Mode visual control, hero prompt and quick actions.
- Static/dependency-free deployment target.
- No backend or AI provider dependency in Step 1.

## Run

```bash
python3 -m http.server 4173 -d .
```

Open `http://localhost:4173`.

## Deployment

The repository is structured as a static site with `index.html` as the entry point.
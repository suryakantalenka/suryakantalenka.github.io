# Suryakanta Lenka — research portfolio

A buildless, responsive portfolio for Suryakanta Lenka. Its visual system is inspired by the IRIS National Fair website: a dark, image-led hero; rich maroon-to-indigo gradients; Playfair Display headlines; technical monospace labels; warm paper sections; and fine, color-coded project frames.

## Included

- Complete Home, About, Projects, Achievements, Experience and Contact sections
- Dedicated case studies for TurtleGuard, SeriScope and the Interactive Braille Learning System
- Eighteen filterable and expandable achievement records
- Twelve-image keyboard- and touch-accessible achievement gallery with a full-screen viewer
- Responsive desktop, tablet and phone layouts
- Accessible semantic HTML and reduced-motion support
- Social metadata, structured profile data, web manifest and custom 404 page
- Branch-based GitHub Pages support with no build step or custom workflow

## Preview locally

From this folder, run:

```bash
python -m http.server 4173
```

Then open `http://127.0.0.1:4173/`.

## Publish with GitHub Pages

1. Create an empty GitHub repository.
2. Add it as this repository's `origin` and push the `main` branch.
3. In the GitHub repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main`, choose `/(root)`, and save.

The included `.nojekyll` file keeps GitHub Pages in static-file mode. No GitHub Actions workflow, framework, package manager or build step is required.

The root-level `CNAME` retains the custom domain `suryakantalenka.com`.

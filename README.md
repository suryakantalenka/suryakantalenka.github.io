# Suryakanta Lenka — portfolio coming soon

A buildless, responsive portfolio teaser for Suryakanta Lenka. Its current visual system is inspired by the IRIS National Fair website: a dark, image-led hero; rich maroon-to-indigo gradients; Playfair Display headlines; technical monospace labels; warm paper sections; and fine, color-coded project frames.

## Included

- Portfolio coming-soon landing page
- Selected-work previews for TurtleGuard, SeriScope and the Interactive Braille Learning System
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

If a custom domain is added later, configure it in GitHub Pages first and then add the generated domain to a root-level `CNAME` file.

# CW Portfolio

A one-page portfolio with a layered landscape hero, anchor navigation, and a vertical timeline. The site runs with HTML, CSS, and JavaScript and has no build step.

## Preview locally

Run from the repository root and open [http://localhost:4173](http://localhost:4173).

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

## Edit the portfolio

- Update the introduction, timeline, projects, and contact link in `index.html`. The portfolio kickoff is the first real entry. The earlier entries are examples.
- Replace `assets/mountain-vista.webp` and `assets/forest-ridge.webp` to change the two hero backgrounds. The foreground image uses transparency above its treeline.
- Adjust the palette and spacing in `styles.css`. Manrope is bundled under its [Open Font License](assets/manrope-OFL.txt).

## Publish with GitHub Pages

Push the site to `main`, then open the repository’s **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, choose **main** and **/(root)**, and save. When the deployment finishes, the site will be at [majix0418.github.io/CW-S-Website/](https://majix0418.github.io/CW-S-Website/).

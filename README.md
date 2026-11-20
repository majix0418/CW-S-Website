# Cold War & Sports

A one-page research site about the Olympic recognition dispute between the PRC and ROC. It uses plain HTML, CSS, and JavaScript.

## Preview locally

Run from the repository root and open [http://localhost:4173](http://localhost:4173).

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

## Edit the research notes

- Edit the research question, background, timeline, and source notes in `index.html`.
- Add each event as a `timeline-row` with a year and a `timeline-card`. Use `timeline-card-right` for an entry on the right. Two cards in the same row share a year and stack in reading order on smaller screens.
- Keep quotations and paraphrases under `Source notes`. Put interpretation in the separate `Analysis` block. Inline short citations link to the source list.
- The Works Cited section lists full references. The stadium and sprinter are archive-inspired illustrations.
- Manrope and Barlow Condensed are bundled under their [Manrope Open Font License](assets/manrope-OFL.txt) and [Barlow Open Font License](assets/barlow-OFL.txt).

## GitHub Pages

The site deploys from `main` and `/(root)`. Check **Actions → pages build and deployment** for the status of each update. [Published site](https://majix0418.github.io/CW-S-Website/)

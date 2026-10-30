# Rules for agents working in this repo

- This repo is served by GitHub Pages from `main` (https://ghanemja.github.io/npcity/). Work on `main` unless told otherwise; a change isn't done until it's live.
- Bump the cache token `js/maker.js?cb=NN` in `index.html` whenever you edit `js/` (and the `export-pack.js?cb=NN` import in `js/maker.js` when you edit the export).

## People are always clothed

Never render, screenshot or ship an unclothed body, not even a debug render. The skin mesh only has the parts clothes don't cover (face, neck, hands), so a missing garment shows as a hole, never a body. Hair and clothes go on before the first render.

## Characters and animation

- Pivot limbs at the joint, never at the part's centre.
- Check the SIDE profile, and all four compass angles, of anything you change, especially hands, feet, props and hair.
- Verify posed or animated changes up close, at 3+ animation phases, from an unblocked angle, before pushing. A wide shot that happens to contain the object does not count.
- After changing motions or the export, export a zip and open its own `viewer.html`: the clips and props must play there, not only in the maker.

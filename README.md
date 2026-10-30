# Citizen Maker: browser based citizens on demand

**Live:** https://ghanemja.github.io/citizen-maker/

A parametric, batch production line of NPC characters for games, running entirely in your
browser (no server, no install, no build step). Make one person by hand or a seeded batch of
up to 200, watch them stroll round a plaza, and export them as rigged, animated `.glb` files.

- **Parametric people:** age 2–90, sex, body type, build, height, muscle, face shape and features, skin, eyes, hair, clothes, shoes, smile. Everyone is always clothed.
- **Seeded batches:** the same seed always makes the same crowd (`?batch=30&seed=harbour&ages=adults&render=anime` in the URL).
- **Ten drawing styles:** gouache, anime, clay, low-poly, hand-drawn, watercolour, comic, flat, pixel, realistic.
- **Rigged and animated:** a 76-bone skeleton with baked clips for `idle`, `walk`, `run`, `sit`, `bike`, and the bystander activities `coffee`, `read` (newspaper) and `phone`.
- **Props that fit:** a bicycle built to each rider, and a coffee cup, newspaper and phone, each with its own clip in step with the person's.
- **Agent-ready export:** the zip includes `HANDOFF.md`, which tells an agent (or a person) how to put the models into Unity, Unreal, Godot, Blender or three.js.

## The export (`citizens.zip`)

| path | what |
|---|---|
| `models/<name>.glb` | one rigged, dressed person with all clips |
| `models/<name>-<prop>.glb` | `bike`, `coffee`, `read`, `phone`, sized to that person |
| `portraits/<name>.png` | a portrait of each person |
| `citizens.json` | the editable roster (import it back to change anyone) |
| `manifest.json` | files, clip lengths and ground speeds per person |
| `viewer.html` + `three-style/` | the people in the exact chosen style, in three.js |
| `HANDOFF.md` | integration notes for agents |

## Run it locally

ES modules need a server, not `file://`:

```bash
python3 -m http.server
```

Then open http://localhost:8000/.

## How it's built

three.js (via importmap, from a CDN), no bundler.

- `js/maker.js`: the page
- `js/citizens.js`: the citizen description, random and seeded batches
- `js/people.js`, `js/anatomy.js`, `js/stylize.js`, `js/hair.js`: the person (MakeHuman's anatomy, clothed, styled)
- `js/motion.js`: the rig's motions (two-bone IK; walk, run, sit, bike, bystanders) and the bike
- `js/render-styles.js`, `js/style.js`: the ten drawing styles and the ink outlines
- `js/export-pack.js`: the zip: GLB export, baked clips, props, `HANDOFF.md`, viewer
- `models/human/`: the MakeHuman data, baked by `node tools/human/bake.mjs`

Citizen Maker grew out of the town at [ghanemja.github.io](https://ghanemja.github.io/).

## License

The code is [MIT](LICENSE). `models/human/` is baked from [MakeHuman](https://github.com/makehumancommunity/makehuman)'s
base human (CC0 1.0); thank you to the MakeHuman team. The fonts in `fonts/` (Caveat, Patrick Hand) are under the
SIL Open Font License. three.js is MIT.

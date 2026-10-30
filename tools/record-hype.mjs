// Renders hype.html frame by frame into an MP4 (1920×1080).
//
//   python3 -m http.server 8000 &          # from the repo root
//   node tools/record-hype.mjs [out.mp4] [--fps 30] [--url http://localhost:8000/hype.html]
//
// Needs Playwright (with Chromium) and ffmpeg on the PATH. The page is driven by
// window.__frame(t), so every frame is exact however slowly it renders.
import { chromium } from 'playwright';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

const args = process.argv.slice(2), opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const out = args.find(a => a.endsWith('.mp4')) ?? 'npcity-hype.mp4';
const fps = +opt('--fps', 30), url = opt('--url', 'http://localhost:8000/hype.html');

const dir = await mkdtemp(join(tmpdir(), 'hype-'));
const browser = await chromium.launch({ args: ['--use-gl=angle', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
page.on('pageerror', e => console.error('page error:', e.message));
await page.goto(url + (url.includes('?') ? '&' : '?') + 'record');
await page.waitForFunction(() => window.__ready, null, { timeout: 300000 });
await page.evaluate(() => document.fonts.ready);
const dur = await page.evaluate(() => window.__duration), n = Math.round(dur * fps);
for (let i = 0; i < n; i++) {
  await page.evaluate((t) => window.__frame(t), i / fps);
  await page.screenshot({ path: join(dir, `f${String(i).padStart(5, '0')}.png`) });
  if (i % fps === 0) process.stdout.write(`\r${i} / ${n} frames`);
}
await browser.close();
console.log(`\rencoding ${n} frames → ${out}`);
const r = spawnSync('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', String(fps), '-i', join(dir, 'f%05d.png'), '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '18', out], { stdio: 'inherit' });
await rm(dir, { recursive: true, force: true });
process.exit(r.status ?? 1);

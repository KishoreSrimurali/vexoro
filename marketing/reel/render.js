// usage: node render.js <dir> stills <t1,t2,...>   |   node render.js <dir> video <fps> <seconds> <out.mp4>
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const { spawn } = require('child_process');
const [dir, mode, a, b, out] = process.argv.slice(2);
(async () => {
  const br = await chromium.launch();
  const p = await br.newPage({ viewport: { width: 1080, height: 1920 } });
  await p.goto('file://' + dir + '/reel.html'); await p.evaluate(() => window.ready);
  const el = await p.$('#c');
  if (mode === 'stills') {
    for (const t of a.split(',').map(Number)) {
      await p.evaluate(t => render(t), t);
      await el.screenshot({ path: `${dir}/still_${String(t.toFixed(2)).padStart(6, '0')}.png` });
    }
  } else {
    const fps = Number(a), n = Math.round(Number(b) * fps);
    const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(fps), '-i', '-',
      '-c:v', 'libx264', '-preset', 'slow', '-crf', '19', '-maxrate', '20M', '-bufsize', '40M', '-profile:v', 'high', '-pix_fmt', 'yuv420p', '-tune', 'grain', out], { stdio: ['pipe', 'inherit', 'inherit'] });
    for (let i = 0; i < n; i++) {
      await p.evaluate(t => render(t), i / fps);
      const buf = await el.screenshot({ type: 'jpeg', quality: 95 });
      if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
      if (i % 60 === 0) process.stdout.write(`frame ${i}/${n}\n`);
    }
    ff.stdin.end(); await new Promise(r => ff.on('close', r));
  }
  await br.close();
})();

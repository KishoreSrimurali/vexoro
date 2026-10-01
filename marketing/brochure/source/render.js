const { chromium } = require('/opt/node-tools/node_modules/playwright');
const dir = process.argv[2];
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1123, height: 794 }, deviceScaleFactor: 2 });
  await p.goto('file://' + dir + '/brochure.html', { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  await p.pdf({ path: dir + '/vexoro-brochure.pdf', width: '297mm', height: '210mm', printBackground: true, preferCSSPageSize: true });
  const sheets = await p.$$('.sheet');
  for (let i = 0; i < sheets.length; i++) await sheets[i].screenshot({ path: `${dir}/side-${i + 1}.png` });
  // overflow check: any panel whose content is taller than the panel
  console.log(await p.evaluate(() => [...document.querySelectorAll('.panel')].map((el, i) => `p${i + 1}:${el.scrollHeight - el.clientHeight}`).join(' ')));
  await b.close();
})();

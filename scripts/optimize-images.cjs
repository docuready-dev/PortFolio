const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicBase = path.join(__dirname, '..', 'public', 'screenshots');
const directories = ['custom-apps', 'learnready', 'strovr'];

async function run() {
  let totalBefore = 0;
  let totalAfter = 0;

  for (const dir of directories) {
    const fullDir = path.join(publicBase, dir);
    if (!fs.existsSync(fullDir)) continue;

    const files = fs.readdirSync(fullDir);
    for (const file of files) {
      if (file.endsWith('.webp')) continue;
      if (!file.match(/\.(png|jpg|jpeg)$/i)) continue;

      const srcPath = path.join(fullDir, file);
      const ext = path.extname(file);
      const baseName = path.basename(file, ext);
      const outPath = path.join(fullDir, `${baseName}.webp`);

      const statBefore = fs.statSync(srcPath);
      totalBefore += statBefore.size;

      // High-quality WebP conversion (q: 92, near-lossless sharpness)
      await sharp(srcPath)
        .webp({ quality: 92, effort: 6 })
        .toFile(outPath);

      const statAfter = fs.statSync(outPath);
      totalAfter += statAfter.size;

      console.log(`[${dir}] ${file} -> ${baseName}.webp: ${(statBefore.size / 1024 / 1024).toFixed(2)}MB -> ${(statAfter.size / 1024).toFixed(1)}KB`);
    }
  }

  // Also optimize Ashley's hero portrait
  const ashleySrc = path.join(__dirname, '..', 'src', 'assets', 'ashley', 'ashley-portrait.jpg');
  const ashleyOut = path.join(__dirname, '..', 'src', 'assets', 'ashley', 'ashley-portrait.webp');
  if (fs.existsSync(ashleySrc)) {
    const statBefore = fs.statSync(ashleySrc);
    totalBefore += statBefore.size;
    await sharp(ashleySrc)
      .webp({ quality: 92, effort: 6 })
      .toFile(ashleyOut);
    const statAfter = fs.statSync(ashleyOut);
    totalAfter += statAfter.size;
    console.log(`[ashley] ashley-portrait.jpg -> ashley-portrait.webp: ${(statBefore.size / 1024).toFixed(1)}KB -> ${(statAfter.size / 1024).toFixed(1)}KB`);
  }

  console.log(`\n===========================================`);
  console.log(`Total Before: ${(totalBefore / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total After:  ${(totalAfter / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Reduction:    ${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)}% faster loading!`);
  console.log(`===========================================`);
}

run().catch(console.error);

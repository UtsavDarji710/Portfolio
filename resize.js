const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const logoPath = path.join(__dirname, 'public', 'logo.png');
const outDir = path.join(__dirname, 'public');

async function resize() {
  const sizes = [16, 32, 192, 512];
  
  for (const size of sizes) {
    const outFile = path.join(outDir, `logo-${size}x${size}.png`);
    await sharp(logoPath)
      .resize(size, size)
      .toFile(outFile);
    console.log(`Created ${outFile}`);
  }
}

resize().catch(console.error);

const fs = require('fs');
const path = require('path');

const srcDir = '/home/mrwhity/.gemini/antigravity/brain/2fc0e4fc-7c7b-46d4-98f7-f5e1911a10cd';
const destDir = path.join(__dirname, 'src', 'assets');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

fs.copyFileSync(
  path.join(srcDir, 'traditional_dhoti_1778590045351.png'),
  path.join(destDir, 'dhoti.png')
);

fs.copyFileSync(
  path.join(srcDir, 'traditional_shirt_1778590063040.png'),
  path.join(destDir, 'shirt.png')
);

console.log('Images copied to src/assets');

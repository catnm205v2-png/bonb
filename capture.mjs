import puppeteer from 'puppeteer-core';
import fs from 'fs';

const pages = [
  { path: '/', name: '01-home' },
  { path: '/homes', name: '02-homes' },
  { path: '/services', name: '03-services' },
  { path: '/content', name: '04-content' },
  { path: '/about', name: '05-about' },
  { path: '/appointment', name: '06-appointment' },
  { path: '/wireframe', name: '07-wireframe' },
  { path: '/design-system', name: '08-design-system' },
  { path: '/integrations', name: '09-integrations' },
  { path: '/lead-funnel', name: '10-lead-funnel' }
];

async function capture() {
  console.log("Starting Chrome...");
  const browser = await puppeteer.launch({
    executablePath: '/nix/store/zi4f80l169xlmivz8vja8wlphq74qqk0-chromium-125.0.6422.141/bin/chromium',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  if (!fs.existsSync('client/public/screenshots')) {
    fs.mkdirSync('client/public/screenshots', { recursive: true });
  }

  for (const p of pages) {
    console.log(`Capturing ${p.name}...`);
    try {
      await page.goto(`http://localhost:5000${p.path}`, { waitUntil: 'networkidle2', timeout: 15000 });
      // Wait a bit extra for images to load just in case
      await new Promise(r => setTimeout(r, 1000));
      await page.screenshot({ path: `client/public/screenshots/${p.name}.jpg`, type: 'jpeg', fullPage: true, quality: 80 });
    } catch (e) {
      console.log(`Failed to capture ${p.name}:`, e.message);
    }
  }

  await browser.close();
  console.log('Screenshots captured successfully.');
}

capture();

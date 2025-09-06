const fs = require('fs');
const path = require('path');

// Simple favicon creation script
// This creates basic favicon files by copying the original logo
// For production, you'd want to use a proper image processing library

const sourceLogo = path.join(__dirname, '../public/assets/NambikeJustLogo.png');
const publicDir = path.join(__dirname, '../public');

// Create different favicon sizes
const faviconSizes = [
  { name: 'favicon.ico', size: 32 },
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'icon-192.png', size: 192 },
  { name: 'icon-512.png', size: 512 },
];

console.log('Creating favicon files...');

// For now, we'll copy the original logo to all favicon locations
// In a real project, you'd resize the image to the appropriate dimensions
faviconSizes.forEach(({ name, size }) => {
  const destPath = path.join(publicDir, name);
  try {
    fs.copyFileSync(sourceLogo, destPath);
    console.log(`Created ${name} (${size}x${size})`);
  } catch (error) {
    console.error(`Error creating ${name}:`, error.message);
  }
});

console.log('Favicon creation complete!');
console.log('Note: For production, use a proper image processing tool to resize images to exact dimensions.');

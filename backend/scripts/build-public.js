#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Crear carpeta public si no existe
const publicDir = path.join(__dirname, '..', 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
  console.log('✅ Public folder created');
} else {
  console.log('✅ Public folder already exists');
}

// Crear uploads subfolder
const uploadsDir = path.join(publicDir, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
  console.log('✅ Uploads folder created');
}

console.log('🎉 Strapi public setup complete');

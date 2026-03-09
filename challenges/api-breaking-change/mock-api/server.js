import express from 'express';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

// Load data files
const dbV1 = JSON.parse(readFileSync(join(__dirname, 'db-v1.json'), 'utf-8'));
const dbV2 = JSON.parse(readFileSync(join(__dirname, 'db-v2.json'), 'utf-8'));

// CORS headers (allow Angular dev server)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// API v1 — clean data, matching the TypeScript interface
app.get('/api/v1/products', (req, res) => {
  console.log('[v1] GET /api/v1/products');
  res.json(dbV1);
});

// API v2 — breaking changes!
app.get('/api/v2/products', (req, res) => {
  console.log('[v2] GET /api/v2/products — ⚠️ Breaking Changes!');
  res.json(dbV2);
});

app.listen(PORT, () => {
  console.log(`\n🚀 Mock API running on http://localhost:${PORT}`);
  console.log(`\n   v1 (stable): http://localhost:${PORT}/api/v1/products`);
  console.log(`   v2 (breaking): http://localhost:${PORT}/api/v2/products\n`);
});

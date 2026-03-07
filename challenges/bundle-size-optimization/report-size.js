#!/usr/bin/env node

/**
 * Parst die ng-build-Ausgabe, liest den Teamnamen aus team.json
 * und sendet das Ergebnis an den Leaderboard-Server.
 *
 * Wird automatisch nach `ng build` via npm postbuild-Hook aufgerufen.
 *
 * Konfiguration:
 *   team.json → { "name": "Team Awesome", "server": "https://xyz.trycloudflare.com" }
 *
 * Priorität für Server-URL:
 *   1. team.json "server" Feld
 *   2. Umgebungsvariable LEADERBOARD_URL
 *   3. Fallback: http://localhost:3000
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

// --- team.json lesen ---
let teamName;
let serverUrl;
try {
  const teamData = JSON.parse(readFileSync('team.json', 'utf-8'));
  teamName = teamData.name?.trim();
  serverUrl = teamData.server?.trim();
} catch {
  console.error('❌ team.json nicht gefunden oder ungültig.');
  process.exit(1);
}

if (!teamName) {
  console.error('❌ Bitte tragt euren Teamnamen in team.json ein:');
  console.error('   { "name": "Euer Team", "server": "https://xyz.trycloudflare.com" }');
  process.exit(1);
}

const LEADERBOARD_URL = serverUrl || process.env.LEADERBOARD_URL || 'http://localhost:3000';

// --- Bundle Size aus dist/ berechnen ---
const distDir = 'dist/bundle-size-optimization/browser';

function getInitialBundleSize(dir) {
  let totalSize = 0;
  try {
    const files = readdirSync(dir);
    for (const file of files) {
      // Initial chunks: main.js, polyfills.js, styles.css und chunks ohne lazy-prefix
      if (file.endsWith('.js') || file.endsWith('.css')) {
        const filePath = join(dir, file);
        const stat = statSync(filePath);
        totalSize += stat.size;
      }
    }
  } catch {
    return null;
  }
  return totalSize;
}

// Alle JS/CSS im browser-Ordner (initial + lazy)
const totalSize = getInitialBundleSize(distDir);

if (!totalSize) {
  console.error(`❌ Build-Output nicht gefunden in ${distDir}. Bitte zuerst 'ng build' ausführen.`);
  process.exit(1);
}

// Genauere Messung: ng build Output parsen ist fragil,
// deshalb messen wir die tatsächliche Dateigrösse der Initial Chunks.
// Initial = alles ausser lazy chunks (die haben "chunk-" Prefix).
let initialSize = 0;
let lazySize = 0;
const files = readdirSync(distDir);
for (const file of files) {
  if (!file.endsWith('.js') && !file.endsWith('.css')) continue;
  const size = statSync(join(distDir, file)).size;
  if (file.startsWith('chunk-')) {
    lazySize += size;
  } else {
    initialSize += size;
  }
}

const initialKB = (initialSize / 1024).toFixed(1);
const lazyKB = (lazySize / 1024).toFixed(1);
const lazyChunks = files.filter(f => f.startsWith('chunk-') && f.endsWith('.js')).length;

console.log(`\n📊 Bundle Report für "${teamName}":`);
console.log(`   Initial: ${initialKB} kB`);
console.log(`   Lazy:    ${lazyKB} kB (${lazyChunks} Chunks)`);

// --- An Leaderboard senden ---
try {
  const response = await fetch(`${LEADERBOARD_URL}/api/submit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      team: teamName,
      initialSize: Number(initialKB),
      lazySize: Number(lazyKB),
      lazyChunks,
      timestamp: new Date().toISOString(),
    }),
  });

  if (response.ok) {
    console.log(`   ✅ Ergebnis an Leaderboard gesendet!`);
  } else {
    console.log(`   ⚠️  Leaderboard nicht erreichbar (${response.status}) — Ergebnis nur lokal.`);
  }
} catch {
  console.log(`   ⚠️  Leaderboard-Server nicht erreichbar — Ergebnis nur lokal.`);
  console.log(`   (Server-URL: ${LEADERBOARD_URL})`);
}

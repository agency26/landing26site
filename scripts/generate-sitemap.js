import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function parseCSV(csvContent) {
  const lines = csvContent.trim().split('\n');
  const headers = lines[0].split(',');
  
  return lines.slice(1).map(line => {
    const values = parseCSVLine(line);
    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = values[index] || '';
    });
    return obj;
  });
}

function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  
  result.push(current.trim());
  return result;
}

// Lire les fichiers CSV
const villesCSV = fs.readFileSync(path.join(__dirname, '../src/data/villes.csv'), 'utf-8');
const secteursCSV = fs.readFileSync(path.join(__dirname, '../src/data/secteurs.csv'), 'utf-8');

const villes = parseCSV(villesCSV);
const secteurs = parseCSV(secteursCSV);

const baseUrl = 'https://landing26.fr';
const today = new Date().toISOString().split('T')[0];

// Pages statiques
const staticPages = [
  { url: '', priority: '1.0', changefreq: 'daily' },
  { url: '/offre', priority: '0.8', changefreq: 'weekly' },
  { url: '/process', priority: '0.8', changefreq: 'weekly' },
  { url: '/tarifs', priority: '0.9', changefreq: 'weekly' },
  { url: '/faq', priority: '0.7', changefreq: 'weekly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/villes', priority: '0.9', changefreq: 'weekly' },
  { url: '/secteurs', priority: '0.9', changefreq: 'weekly' },
];

// Générer le sitemap XML
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Ajouter les pages statiques
staticPages.forEach(page => {
  sitemap += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
});

// Ajouter les pages villes
villes.forEach(ville => {
  sitemap += `  <url>
    <loc>${baseUrl}/ville/${ville.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
});

// Ajouter les pages secteurs
secteurs.forEach(secteur => {
  sitemap += `  <url>
    <loc>${baseUrl}/secteur/${secteur.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
});

sitemap += `</urlset>`;

// Écrire le sitemap
fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);

console.log(`✅ Sitemap généré avec succès !`);
console.log(`   - ${staticPages.length} pages statiques`);
console.log(`   - ${villes.length} pages villes`);
console.log(`   - ${secteurs.length} pages secteurs`);
console.log(`   - Total : ${staticPages.length + villes.length + secteurs.length} URLs`);

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

// Générer toutes les routes
const routes = [
  '/',
  '/offre',
  '/process',
  '/tarifs',
  '/blog',
  '/blog/optimiser-conversion-landing-page',
  '/blog/seo-landing-page-guide-2024',
  '/blog/ia-copywriting-landing-page',
  '/blog/erreurs-design-landing',
  '/blog/psychologie-conversion',
  '/blog/preuve-sociale',
  '/faq',
  '/contact',
  '/villes',
  '/secteurs',
  ...villes.map(v => `/ville/${v.slug}`),
  ...secteurs.map(s => `/secteur/${s.slug}`)
];

// Écrire les routes dans un fichier
fs.writeFileSync(
  path.join(__dirname, '../routes.json'),
  JSON.stringify(routes, null, 2)
);

console.log(`✅ ${routes.length} routes générées`);
console.log(`   - ${villes.length} pages villes`);
console.log(`   - ${secteurs.length} pages secteurs`);

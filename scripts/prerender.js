import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🚀 Pré-rendu des pages statiques...');

// Lire les routes générées
const routesPath = path.join(__dirname, '../routes.json');
if (!fs.existsSync(routesPath)) {
  console.error('❌ routes.json non trouvé. Générez d\'abord les routes.');
  process.exit(1);
}

const routes = JSON.parse(fs.readFileSync(routesPath, 'utf-8'));
const distPath = path.join(__dirname, '../dist');
const indexHtml = fs.readFileSync(path.join(distPath, 'index.html'), 'utf-8');

console.log(`📄 Génération de ${routes.length} pages HTML...`);

// Créer un fichier HTML pour chaque route
routes.forEach((route) => {
  if (route === '/') return; // index.html existe déjà
  
  const routePath = route.substring(1); // Enlever le '/' initial
  const fullPath = path.join(distPath, routePath);
  
  // Créer le dossier si nécessaire
  fs.mkdirSync(fullPath, { recursive: true });
  
  // Copier index.html dans le dossier de la route
  fs.writeFileSync(path.join(fullPath, 'index.html'), indexHtml);
});

console.log('✅ Pré-rendu terminé !');
console.log(`   ${routes.length} pages HTML générées dans dist/`);

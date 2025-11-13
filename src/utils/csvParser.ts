export interface Ville {
  ville: string;
  slug: string;
  region: string;
  meta_title: string;
  meta_description: string;
  intro: string;
  benefices_locaux: string;
}

export interface Secteur {
  secteur: string;
  slug: string;
  meta_title: string;
  meta_description: string;
  intro: string;
  besoins_metier: string;
  avantages_site: string;
}

export function parseCSV<T>(csv: string): T[] {
  const lines = csv.trim().split('\n');
  const headers = lines[0].split(',');
  
  return lines.slice(1).map(line => {
    const values = parseCSVLine(line);
    const obj: any = {};
    headers.forEach((header, index) => {
      obj[header] = values[index] || '';
    });
    return obj as T;
  });
}

function parseCSVLine(line: string): string[] {
  const result: string[] = [];
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

// Import CSV data
import villesCSV from '../data/villes.csv?raw';
import secteursCSV from '../data/secteurs.csv?raw';

export const villes = parseCSV<Ville>(villesCSV);
export const secteurs = parseCSV<Secteur>(secteursCSV);

export function getVilleBySlug(slug: string): Ville | undefined {
  return villes.find(v => v.slug === slug);
}

export function getSecteurBySlug(slug: string): Secteur | undefined {
  return secteurs.find(s => s.slug === slug);
}

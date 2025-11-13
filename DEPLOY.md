# Guide de Déploiement - Landing26

## 🚀 Déploiement sur Vercel (Recommandé)

### Option 1 : Import depuis Git (Le plus simple)

1. **Push votre code sur GitHub**
   - Créez un dépôt GitHub
   - Push votre code : `git push origin main`

2. **Connectez Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Cliquez sur "New Project"
   - Importez votre dépôt GitHub
   - Vercel détectera automatiquement la configuration

3. **Déployez**
   - Cliquez sur "Deploy"
   - ✅ C'est fait ! Toutes vos pages dynamiques sont pré-générées

### Option 2 : Upload manuel (Sans Git)

1. **Depuis Lovable**
   - Cliquez sur le bouton "Publish" en haut à droite
   - Téléchargez le ZIP du build

2. **Sur Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Créez un nouveau projet
   - Uploadez le dossier `dist` du ZIP

### Configuration du domaine personnalisé

1. Dans Vercel, allez dans Project Settings → Domains
2. Ajoutez votre domaine (ex: `landing26.fr`)
3. Suivez les instructions pour configurer les DNS

## 📦 Ce qui est inclus dans le build

✅ **Toutes les pages statiques générées** :
- Page d'accueil (`/`)
- Pages statiques (`/offre`, `/tarifs`, `/faq`, etc.)
- **200 pages villes** (ex: `/ville/paris`, `/ville/lyon`, etc.)
- **150 pages secteurs** (ex: `/secteur/plombier`, `/secteur/coach`, etc.)

✅ **SEO optimisé** :
- Sitemap.xml avec toutes les URLs
- Robots.txt configuré
- Balises meta uniques pour chaque page
- Schema.org (données structurées)
- OpenGraph et Twitter Cards

✅ **Performance** :
- Pages pré-rendues (HTML statique)
- CDN Vercel mondial
- Cache optimisé
- Temps de chargement < 1s

## 🔧 Build local (optionnel)

Si vous voulez tester le build en local :

```bash
# Installer les dépendances
npm install

# Générer le build de production
npm run build

# Le dossier 'dist' contiendra toutes vos pages HTML
```

## ✅ Vérification post-déploiement

Après le déploiement, vérifiez que :

1. **Toutes les pages fonctionnent** :
   - `https://votresite.com/` ✓
   - `https://votresite.com/ville/paris` ✓
   - `https://votresite.com/secteur/plombier` ✓

2. **Le SEO est bon** :
   - Testez avec [Google Rich Results Test](https://search.google.com/test/rich-results)
   - Vérifiez le sitemap : `https://votresite.com/sitemap.xml`
   - Vérifiez robots.txt : `https://votresite.com/robots.txt`

3. **Les performances sont bonnes** :
   - Testez avec [PageSpeed Insights](https://pagespeed.web.dev/)
   - Score cible : > 90/100

## 🆘 Problèmes fréquents

**404 sur les pages dynamiques** :
→ Vérifiez que le fichier `vercel.json` est bien présent

**Pages non indexées par Google** :
→ Soumettez votre sitemap dans Google Search Console

**Build échoue** :
→ Vérifiez que les fichiers CSV sont bien dans `src/data/`

## 📝 Mises à jour

Pour mettre à jour le site :

1. Modifiez votre code dans Lovable
2. Push sur GitHub (ou re-uploadez sur Vercel)
3. Vercel redéploie automatiquement

## 💡 Support

- Documentation Vercel : [vercel.com/docs](https://vercel.com/docs)
- Support Lovable : [docs.lovable.dev](https://docs.lovable.dev)

---

**Félicitations ! Votre site est prêt à conquérir Google 🚀**

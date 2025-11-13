import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const SEOGuide = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="SEO pour landing pages : le guide complet 2024"
        description="Le guide complet pour optimiser le SEO de vos landing pages en 2024. Structure, contenu, technique et stratégies pour ranker sur Google."
        canonical="https://landing26.fr/blog/seo-landing-page-guide-2024"
      />
      <Header />

      {/* Hero */}
      <section className="bg-white border-b border-border py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Link to="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux articles
            </Link>
            <h1 className="mb-4">SEO pour landing pages : le guide complet 2024</h1>
            <p className="text-lg text-muted-foreground">
              Découvrez comment optimiser vos landing pages pour Google tout en maximisant vos conversions.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="prose prose-lg max-w-4xl mx-auto">
            <p>
              Le SEO a longtemps été considéré comme incompatible avec les landing pages. Pourtant, avec les bonnes méthodes, une landing page peut se positionner dans les premiers résultats Google tout en restant optimisée conversion. Voici le guide complet pour 2024.
            </p>

            <h2>Pourquoi optimiser une landing page pour le SEO ?</h2>
            <p>Parce que le SEO permet :</p>
            <ul>
              <li>D'obtenir du trafic qualifié</li>
              <li>Gratuitement</li>
              <li>En continu</li>
              <li>Sans dépendre de la publicité</li>
            </ul>

            <h2>Les fondamentaux SEO pour une landing page</h2>
            
            <h3>1. Un mot-clé unique par page</h3>
            <p>Chaque landing doit cibler un seul mot-clé principal, exemple :</p>
            <ul>
              <li>"landing page freelance"</li>
              <li>"landing page avocat"</li>
              <li>"landing page Lyon"</li>
            </ul>

            <h3>2. Structure H1-H2-H3 claire</h3>
            <p>Google lit la structure de la page pour comprendre le sujet.</p>

            <h3>3. Un contenu d'au moins 500–800 mots</h3>
            <p>
              Même pour une page orientée conversion, vous devez ajouter du contenu textuel plus bas dans la page.
            </p>

            <h2>Optimisation technique (2024)</h2>

            <h3>1. Vitesse de chargement</h3>
            <p>La vitesse est un critère majeur chez Google.</p>

            <h3>2. Version mobile irréprochable</h3>
            <p>La majorité du trafic vient du mobile → score indispensable.</p>

            <h3>3. Balises essentielles</h3>
            <ul>
              <li>Meta title</li>
              <li>Meta description</li>
              <li>Canonical</li>
              <li>OG tags</li>
              <li>JSON-LD (Organization + FAQ)</li>
            </ul>

            <h2>Ajouter des FAQ pour capter les "People Also Ask"</h2>
            <p>Les FAQ permettent d'apparaître dans :</p>
            <ul>
              <li>Google "People Also Ask"</li>
              <li>Featured Snippets</li>
              <li>Réponses directes</li>
            </ul>

            <h2>Maillage interne stratégique</h2>
            <p>Créez des liens :</p>
            <ul>
              <li>Vers vos pages services</li>
              <li>Vers vos pages villes</li>
              <li>Vers vos pages secteurs</li>
              <li>Vers vos articles SEO</li>
            </ul>
            <p>C'est un accélérateur de ranking.</p>

            <h2>Le rôle de l'IA dans l'optimisation SEO 2024</h2>
            <p>L'IA permet :</p>
            <ul>
              <li>D'analyser les concurrents</li>
              <li>De détecter les mots-clés</li>
              <li>D'optimiser les titres</li>
              <li>De générer des FAQ</li>
              <li>D'améliorer la structure</li>
            </ul>

            <h2>🟢 Conclusion</h2>
            <p>Une landing page peut devenir un levier SEO puissant, à condition de respecter :</p>
            <ul>
              <li>Un mot-clé clair</li>
              <li>Du contenu</li>
              <li>Une structure optimisée</li>
              <li>Un SEO technique propre</li>
              <li>Un maillage interne intelligent</li>
            </ul>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="bg-[hsl(var(--dark-bg))] py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-white">Besoin d'une landing page optimisée SEO ?</h2>
            <p className="mb-8 text-gray-300">
              Nous créons des landing pages qui rankent sur Google. SEO technique, contenu optimisé, structure parfaite.
            </p>
            <Button size="lg" asChild className="bg-gradient-to-r from-primary to-primary-orange">
              <a href="https://calendly.com/kabalodov/rdv" target="_blank" rel="noopener noreferrer">
                Réserver un créneau
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEOGuide;

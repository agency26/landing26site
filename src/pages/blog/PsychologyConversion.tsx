import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const PsychologyConversion = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Techniques psychologiques pour augmenter votre conversion"
        description="Découvrez les 5 leviers psychologiques les plus puissants pour augmenter le taux de conversion d'une landing page."
        canonical="https://landing26.fr/blog/psychologie-conversion"
      />
      <Header />

      <article className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Retour au blog
                </Link>
              </Button>
            </div>

            {/* Header */}
            <header className="mb-12">
              <div className="mb-4 flex items-center gap-3 text-sm text-muted-foreground">
                <span className="rounded-full bg-secondary/10 px-3 py-1 text-secondary">
                  Conversion
                </span>
                <span>8 min de lecture</span>
                <span>26 septembre 2024</span>
              </div>
              <h1 className="mb-6">
                5 techniques psychologiques qui boostent la conversion d'une landing page
              </h1>
            </header>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground">
                La psychologie humaine influence fortement la conversion.
                Voici les 5 techniques les plus puissantes à intégrer sur une landing page.
              </p>

              <h2>1. La preuve sociale (Social Proof)</h2>
              <p>
                Les chiffres sont clairs : ajouter des avis peut augmenter les conversions de 20 à 35 %.
              </p>

              <p><strong>Inclure :</strong></p>
              <ul>
                <li>✔ avis</li>
                <li>✔ logos</li>
                <li>✔ chiffres clés</li>
                <li>✔ témoignages</li>
              </ul>

              <h2>2. Le FOMO (Fear Of Missing Out)</h2>
              <p>
                La peur de rater une opportunité est un puissant moteur émotionnel.
              </p>

              <p><strong>Exemples :</strong></p>
              <ul>
                <li>Offre limitée</li>
                <li>Plus que 3 places</li>
                <li>Livraison express en 3 jours</li>
              </ul>

              <h2>3. L'autorité</h2>
              <p><strong>Positionnez-vous comme expert :</strong></p>
              <ul>
                <li>✔ clients connus</li>
                <li>✔ certifications</li>
                <li>✔ résultats concrets</li>
              </ul>

              <h2>4. La cohérence visuelle</h2>
              <p>
                Une page cohérente inspire confiance.
                C'est ce que Google, Meta Ads et les visiteurs préfèrent.
              </p>

              <h2>5. La simplicité</h2>
              <p>
                Supprimer la friction permet d'augmenter instantanément les conversions.
              </p>

              {/* Internal links */}
              <div className="my-12 rounded-lg border border-border/50 bg-card p-6">
                <h3 className="mb-4 text-lg font-semibold">Liens internes</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/blog/seo-landing-page-guide-2024" className="text-secondary hover:underline">
                      SEO pour landing pages : le guide complet 2024
                    </Link>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="my-12 rounded-lg border border-border/50 bg-card p-8 text-center">
                <h3 className="mb-4 text-xl font-semibold">
                  Obtenez votre landing page optimisée psychologiquement
                </h3>
                <p className="mb-6 text-muted-foreground">
                  Nous intégrons toutes les techniques psychologiques pour maximiser vos conversions.
                </p>
                <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link to="/contact">
                    Démarrer votre projet
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default PsychologyConversion;

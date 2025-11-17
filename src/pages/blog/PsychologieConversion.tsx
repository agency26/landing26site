import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const PsychologieConversion = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Techniques psychologiques pour augmenter votre conversion"
        description="Découvrez les 5 leviers psychologiques les plus puissants pour augmenter le taux de conversion d'une landing page."
        canonical="https://landing26.fr/articles/psychologie-conversion"
      />
      <Header />

      <article className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <Button variant="ghost" size="sm" asChild className="mb-8">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour au blog
              </Link>
            </Button>

            <div className="mb-8 flex items-center gap-3 text-sm text-muted-foreground">
              <span className="rounded-full bg-secondary/10 px-3 py-1 text-secondary">
                Conversion
              </span>
              <span>8 min de lecture</span>
              <span>•</span>
              <time dateTime="2025-09-26">26 septembre 2025</time>
            </div>

            <h1 className="mb-8">5 techniques psychologiques qui boostent la conversion d'une landing page</h1>

            <div className="prose prose-lg max-w-none">
              <p className="lead">
                La psychologie humaine influence fortement la conversion.
                Voici les 5 techniques les plus puissantes à intégrer sur une landing page.
              </p>

              <h2>1. La preuve sociale (Social Proof)</h2>

              <p>Les chiffres sont clairs : ajouter des avis peut augmenter les conversions de 20 à 35 %.</p>

              <p>Inclure :</p>
              <ul>
                <li>✔ avis</li>
                <li>✔ logos</li>
                <li>✔ chiffres clés</li>
                <li>✔ témoignages</li>
              </ul>

              <h2>2. Le FOMO (Fear Of Missing Out)</h2>

              <p>La peur de rater une opportunité est un puissant moteur émotionnel.</p>

              <p>Exemples :</p>
              <ul>
                <li>Offre limitée</li>
                <li>Plus que 3 places</li>
                <li>Livraison express en 3 jours</li>
              </ul>

              <h2>3. L'autorité</h2>

              <p>Positionnez-vous comme expert :</p>
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

              <p>Supprimer la friction permet d'augmenter instantanément les conversions.</p>

              <div className="not-prose my-12 rounded-lg border border-border/50 bg-card p-8">
                <h3 className="mb-4 text-xl font-semibold">Liens internes</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/blog/seo-landing-page-guide-2024"
                      className="flex items-center text-secondary hover:underline"
                    >
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      SEO pour landing pages : le guide complet 2024
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/articles/preuve-sociale"
                      className="flex items-center text-secondary hover:underline"
                    >
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Comment utiliser la preuve sociale
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="not-prose mt-12 rounded-lg bg-gradient-to-r from-primary to-secondary p-8 text-center text-white">
                <h3 className="mb-4 text-2xl font-bold">
                  Prêt à créer une landing page qui convertit ?
                </h3>
                <p className="mb-6 text-lg opacity-90">
                  Obtenir votre landing page optimisée psychologiquement
                </p>
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/contact">
                    Démarrer mon projet
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

export default PsychologieConversion;

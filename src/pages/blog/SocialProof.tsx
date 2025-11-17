import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const SocialProof = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Utiliser la preuve sociale sur une landing page"
        description="Découvrez comment utiliser avis, logos et crédibilité pour augmenter les conversions."
        canonical="https://landing26.fr/blog/preuve-sociale"
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
                  Social Proof
                </span>
                <span>8 min de lecture</span>
                <span>30 septembre 2024</span>
              </div>
              <h1 className="mb-6">
                Comment utiliser la preuve sociale pour booster vos conversions ?
              </h1>
            </header>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground">
                La preuve sociale est l'un des leviers psychologiques les plus puissants pour augmenter les conversions sur une landing page. Découvrez comment l'utiliser efficacement.
              </p>

              <h2>Qu'est-ce que la preuve sociale ?</h2>
              <p>
                La preuve sociale repose sur un principe simple : les gens font confiance aux décisions des autres. Quand un prospect voit que d'autres ont déjà fait confiance à votre offre, il sera plus enclin à passer à l'action.
              </p>

              <h2>1. Les avis clients</h2>
              <p>
                Les avis clients sont la forme de preuve sociale la plus directe et la plus efficace.
              </p>
              <p><strong>Comment les utiliser :</strong></p>
              <ul>
                <li>✔ Incluez des avis authentiques avec photo et nom</li>
                <li>✔ Ajoutez des étoiles (4,8/5 par exemple)</li>
                <li>✔ Mettez en avant des résultats concrets</li>
                <li>✔ Variez les profils pour toucher différents segments</li>
              </ul>

              <h2>2. Les logos de clients</h2>
              <p>
                Afficher les logos de vos clients connus renforce immédiatement votre crédibilité.
              </p>
              <p><strong>Bonnes pratiques :</strong></p>
              <ul>
                <li>Mettez les logos en noir et blanc pour un rendu premium</li>
                <li>Choisissez vos clients les plus reconnus</li>
                <li>Limitez-vous à 6-8 logos pour ne pas surcharger</li>
              </ul>

              <h2>3. Les chiffres clés</h2>
              <p>
                Les statistiques concrètes rassurent et prouvent votre expertise.
              </p>
              <p><strong>Exemples :</strong></p>
              <ul>
                <li>+500 landing pages créées</li>
                <li>98% de clients satisfaits</li>
                <li>Livraison en 3 jours garantie</li>
              </ul>

              <h2>4. Les témoignages vidéo</h2>
              <p>
                Les témoignages vidéo sont 2x plus engageants que les avis écrits et augmentent la confiance de 40%.
              </p>

              <h2>5. Les badges de confiance</h2>
              <p>
                Certifications, garanties, paiement sécurisé : tous ces éléments rassurent le visiteur.
              </p>
              <ul>
                <li>Badges de paiement sécurisé</li>
                <li>Certifications professionnelles</li>
                <li>Garantie satisfait ou remboursé</li>
              </ul>

              <h2>Où placer la preuve sociale ?</h2>
              <p>
                La preuve sociale doit être visible à plusieurs endroits stratégiques :
              </p>
              <ul>
                <li><strong>Dans le hero</strong> : nombre de clients, note moyenne</li>
                <li><strong>Près des CTA</strong> : pour rassurer juste avant la conversion</li>
                <li><strong>Section dédiée</strong> : pour approfondir avec des témoignages détaillés</li>
                <li><strong>Footer</strong> : logos de partenaires</li>
              </ul>

              {/* Internal links */}
              <div className="my-12 rounded-lg border border-border/50 bg-card p-6">
                <h3 className="mb-4 text-lg font-semibold">Articles connexes</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/blog/psychologie-conversion" className="text-secondary hover:underline">
                      5 techniques psychologiques qui boostent la conversion
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/optimiser-conversion-landing-page" className="text-secondary hover:underline">
                      10 techniques pour optimiser votre taux de conversion
                    </Link>
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="my-12 rounded-lg border border-border/50 bg-card p-8 text-center">
                <h3 className="mb-4 text-xl font-semibold">
                  Besoin d'une landing page avec preuve sociale intégrée ?
                </h3>
                <p className="mb-6 text-muted-foreground">
                  Nous créons votre landing page avec tous les éléments de réassurance nécessaires pour maximiser vos conversions.
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

export default SocialProof;

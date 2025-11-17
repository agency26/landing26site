import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const CTAConversion = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Créer un CTA performant sur une landing page"
        description="Découvrez comment optimiser vos boutons d'appel à l'action."
        canonical="https://landing26.fr/articles/cta-conversion"
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
                CTA
              </span>
              <span>7 min de lecture</span>
              <span>•</span>
              <time dateTime="2025-10-08">8 octobre 2025</time>
            </div>

            <h1 className="mb-8">Comment créer un CTA qui convertit vraiment sur une landing page</h1>

            <div className="prose prose-lg max-w-none">
              <p className="lead">
                Le CTA est le bouton le plus important de votre landing page.
                Mal placé, mal formulé ou mal coloré → toute votre page perd son efficacité.
              </p>

              <p>Voici les règles exactes.</p>

              <h2>1. La couleur</h2>

              <p>
                Le CTA doit être la couleur la plus visible de la page.
                Chez Landing26 : #FF4338.
              </p>

              <h2>2. Le texte</h2>

              <p>Un CTA doit être actionnable, pas descriptif.</p>

              <p>
                ❌ "Envoyer"<br />
                ✔ "Obtenir ma landing page"<br />
                ✔ "Réserver ma création"
              </p>

              <h2>3. L'emplacement</h2>

              <p>Un bon CTA se place :</p>
              <ul>
                <li>dans le hero</li>
                <li>dans les sections clés</li>
                <li>en bas de page</li>
              </ul>

              <h2>4. La cohérence</h2>

              <p>Le CTA doit être cohérent avec la promesse de la page.</p>

              <div className="not-prose my-12 rounded-lg border border-border/50 bg-card p-8">
                <h3 className="mb-4 text-xl font-semibold">Articles connexes</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/blog/optimiser-conversion-landing-page"
                      className="flex items-center text-secondary hover:underline"
                    >
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      10 techniques pour optimiser votre taux de conversion
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/articles/structure-parfaite"
                      className="flex items-center text-secondary hover:underline"
                    >
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      La structure idéale d'une landing page
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="not-prose mt-12 rounded-lg bg-gradient-to-r from-primary to-secondary p-8 text-center text-white">
                <h3 className="mb-4 text-2xl font-bold">
                  Prêt à créer une landing page qui convertit ?
                </h3>
                <p className="mb-6 text-lg opacity-90">
                  Votre landing page premium en 72h
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

export default CTAConversion;

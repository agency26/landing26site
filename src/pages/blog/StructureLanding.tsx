import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const StructureLanding = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="La structure idéale d'une landing page moderne"
        description="Découvrez l'architecture parfaite d'une landing page qui convertit."
        canonical="https://landing26.fr/articles/structure-parfaite"
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
                Structure
              </span>
              <span>9 min de lecture</span>
              <span>•</span>
              <time dateTime="2025-10-04">4 octobre 2025</time>
            </div>

            <h1 className="mb-8">Comment construire une landing page efficace : la structure idéale</h1>

            <div className="prose prose-lg max-w-none">
              <p className="lead">
                La structure d'une landing page n'est pas improvisée.
                Elle suit une logique psychologique très précise, pensée pour amener le visiteur d'un point A → un point B : convertir.
              </p>

              <p>Voici la structure exacte utilisée par les meilleures agences.</p>

              <h2>1. Le Hero (promesse + CTA)</h2>

              <p>Le hero doit contenir :</p>
              <ul>
                <li>un titre clair</li>
                <li>un sous-titre crédible</li>
                <li>un CTA visible</li>
                <li>une preuve sociale</li>
              </ul>

              <p>Vous devez répondre en 3 secondes : "Qu'est-ce que vous faites et pourquoi c'est utile ?"</p>

              <h2>2. La section bénéfices</h2>

              <p>Les visiteurs n'achètent pas une landing page. Ils achètent :</p>
              <ul>
                <li>plus de clients</li>
                <li>un site plus pro</li>
                <li>un taux de conversion plus haut</li>
                <li>une vitesse plus rapide</li>
                <li>une image plus premium</li>
              </ul>

              <h2>3. Le fonctionnement (process 1-2-3)</h2>

              <p>Une landing page doit paraître simple :</p>
              <ol>
                <li>Vous remplissez le brief</li>
                <li>Nous créons la page</li>
                <li>Vous la recevez en 3 jours</li>
              </ol>

              <h2>4. La preuve sociale</h2>

              <p>
                Avis, logos, chiffres, études... C'est ici que la confiance explose.
              </p>

              <h2>5. L'offre</h2>

              <p>Une bonne offre = prix clair + valeur claire.</p>

              <h2>6. Le CTA final</h2>

              <p>Toujours terminer par une invitation à agir.</p>

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
                      to="/blog/seo-landing-page-guide-2024"
                      className="flex items-center text-secondary hover:underline"
                    >
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      SEO pour landing pages : le guide complet 2024
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="not-prose mt-12 rounded-lg bg-gradient-to-r from-primary to-secondary p-8 text-center text-white">
                <h3 className="mb-4 text-2xl font-bold">
                  Prêt à créer une landing page qui convertit ?
                </h3>
                <p className="mb-6 text-lg opacity-90">
                  Commander votre landing page maintenant
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

export default StructureLanding;

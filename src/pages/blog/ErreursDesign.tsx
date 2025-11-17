import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const ErreursDesign = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Les erreurs de design qui ruinent vos conversions"
        description="Découvrez les erreurs de design les plus courantes sur une landing page et comment les éviter pour augmenter vos conversions."
        canonical="https://landing26.fr/articles/erreurs-design-landing"
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
                Design
              </span>
              <span>7 min de lecture</span>
              <span>•</span>
              <time dateTime="2025-09-22">22 septembre 2025</time>
            </div>

            <h1 className="mb-8">Les erreurs de design qui détruisent le taux de conversion d'une landing page</h1>

            <div className="prose prose-lg max-w-none">
              <p className="lead">
                Une landing page n'est pas un site vitrine : elle a un seul objectif, pousser le visiteur à passer à l'action.
                Pourtant, la plupart échouent à cause de problèmes de design, pas à cause de l'offre.
              </p>

              <p>Dans cet article, nous analysons les erreurs les plus fréquentes et comment les corriger.</p>

              <h2>1. Un hero trop chargé ou trop pauvre</h2>

              <p>Le hero est la section la plus importante. C'est là que se joue 80 % de la conversion.</p>

              <p>Erreurs fréquentes :</p>
              <ul>
                <li>❌ un visuel trop lourd</li>
                <li>❌ un slogan vague</li>
                <li>❌ aucun CTA visible</li>
                <li>❌ trop d'éléments en concurrence</li>
              </ul>

              <p>Un hero efficace doit contenir :</p>
              <ul>
                <li>une promesse claire</li>
                <li>un sous-titre crédible</li>
                <li>un CTA fort</li>
                <li>un élément de preuve sociale</li>
              </ul>

              <h2>2. Trop de couleurs et manque de hiérarchie</h2>

              <p>Les landing pages qui convertissent le mieux utilisent rarement plus de 3 couleurs :</p>
              <ul>
                <li>couleur principale (CTA)</li>
                <li>couleur secondaire (titres / accents)</li>
                <li>couleur neutre (fond)</li>
              </ul>

              <p>➡️ Une landing page doit guider l'œil du visiteur.</p>

              <h2>3. Manque de contraste</h2>

              <p>Si les visiteurs ne voient pas tes CTA, ils ne cliqueront pas.</p>

              <p>Résoudre :</p>
              <ul>
                <li>✔ CTA en #FF4338</li>
                <li>✔ Texte CTA en blanc</li>
                <li>✔ Fond sombre noir/gris (#0A0A0A)</li>
              </ul>

              <h2>4. Trop d'animations ou d'effets</h2>

              <p>Les animations non maîtrisées ralentissent la page et réduisent les conversions.</p>

              <p>Une landing page performante doit :</p>
              <ul>
                <li>➡️ charger vite</li>
                <li>➡️ être simple</li>
                <li>➡️ éviter le "wow inutile"</li>
              </ul>

              <h2>5. Pas d'espace blanc</h2>

              <p>L'espace blanc = respiration. Les landing pages professionnelles sont très aérées.</p>

              <div className="not-prose my-12 rounded-lg border border-border/50 bg-card p-8">
                <h3 className="mb-4 text-xl font-semibold">Liens internes utiles</h3>
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
                      to="/blog/ia-copywriting-landing-page"
                      className="flex items-center text-secondary hover:underline"
                    >
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Comment l'IA révolutionne le copywriting des landing pages
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="not-prose mt-12 rounded-lg bg-gradient-to-r from-primary to-secondary p-8 text-center text-white">
                <h3 className="mb-4 text-2xl font-bold">
                  Prêt à créer une landing page qui convertit ?
                </h3>
                <p className="mb-6 text-lg opacity-90">
                  Obtenez une landing page design & performante en 3 jours
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

export default ErreursDesign;

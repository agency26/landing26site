import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const PreuveSociale = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Comment utiliser la preuve sociale sur une landing page"
        description="Les meilleures techniques de preuve sociale pour augmenter la conversion d'une landing page."
        canonical="https://landing26.fr/articles/preuve-sociale"
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
                Social Proof
              </span>
              <span>8 min de lecture</span>
              <span>•</span>
              <time dateTime="2024-09-30">30 septembre 2024</time>
            </div>

            <h1 className="mb-8">Comment utiliser la preuve sociale pour booster vos conversions ?</h1>

            <div className="prose prose-lg max-w-none">
              <p className="lead">
                La preuve sociale est l'un des leviers psychologiques les plus puissants pour convertir un visiteur en client.
                C'est simple : les gens font confiance à ce que les autres valident.
                Sur une landing page, bien utilisée, elle peut augmenter les conversions de 20 à 45%.
              </p>

              <p>Voici comment l'utiliser intelligemment.</p>

              <h2>1. Les avis clients</h2>

              <p>Les avis sont la base de la preuve sociale.</p>

              <p>Les règles :</p>
              <ul>
                <li>mettre des avis courts mais authentiques</li>
                <li>ajouter le prénom + métier</li>
                <li>éviter les avis trop long (pas lus)</li>
                <li>viser 3 à 6 avis maximum</li>
              </ul>

              <h2>2. Les logos clients</h2>

              <p>Les logos créent une impression immédiate de crédibilité. Même 3 logos suffisent.</p>

              <p>➡️ Astuce : utiliser des logos en monochrome pour un effet premium.</p>

              <h2>3. Les chiffres clés</h2>

              <p>Les statistiques crédibilisent en 0,3 seconde.</p>

              <p>Exemples :</p>
              <ul>
                <li>+35 landing pages créées</li>
                <li>72h de délai moyen</li>
                <li>4,9/5 de satisfaction</li>
                <li>+120 campagnes optimisées</li>
              </ul>

              <h2>4. Les cas clients / mini études</h2>

              <p>Même 2 lignes suffisent :</p>

              <blockquote>
                "Avant : site lent et peu clair. Après Landing26 : +42% de conversion en 12 jours."
              </blockquote>

              <h2>5. Les publications et apparitions</h2>

              <p>Vous pouvez mettre :</p>
              <ul>
                <li>"Vu sur LinkedIn"</li>
                <li>"+20.000 vues cumulées"</li>
                <li>"Recommandé par X"</li>
              </ul>

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
                  Obtenez une landing page premium en 3 jours
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

export default PreuveSociale;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const LandingVsSite = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Landing page ou site classique ? Le comparatif"
        description="Découvrez pourquoi une landing page convertit mieux qu'un site classique."
        canonical="https://landing26.fr/articles/landing-vs-site"
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
                Comparatif
              </span>
              <span>9 min de lecture</span>
              <span>•</span>
              <time dateTime="2024-10-12">12 octobre 2024</time>
            </div>

            <h1 className="mb-8">Landing page vs site classique : lequel convertit le mieux ?</h1>

            <div className="prose prose-lg max-w-none">
              <p className="lead">
                Beaucoup d'entrepreneurs ne savent pas s'il vaut mieux créer une landing page ou un site complet.
                La réponse dépend de l'objectif.
              </p>

              <p>Mais pour convertir → la landing page est gagnante.</p>

              <h2>1. Un site classique disperse l'attention</h2>

              <ul>
                <li>Menu</li>
                <li>Footer</li>
                <li>Liens multiples</li>
                <li>Blog</li>
                <li>Pages inutiles</li>
              </ul>

              <p>➡️ Le cerveau se perd.</p>

              <h2>2. Une landing page = objectif unique</h2>

              <p>Tout est optimisé pour un seul bouton.</p>

              <h2>3. La vitesse</h2>

              <p>Une landing page est 4 à 8× plus rapide.</p>

              <h2>4. Le coût</h2>

              <p>
                Site classique : 1.500€ à 3.000€<br />
                Landing page premium : 499€ HT
              </p>

              <h2>5. Le délai</h2>

              <p>
                Site classique : 2 à 6 semaines<br />
                Landing26 : 3 jours
              </p>

              <div className="not-prose my-12 rounded-lg border border-border/50 bg-card p-8">
                <h3 className="mb-4 text-xl font-semibold">Articles connexes</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/articles/structure-parfaite"
                      className="flex items-center text-secondary hover:underline"
                    >
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      La structure idéale d'une landing page
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/tarifs"
                      className="flex items-center text-secondary hover:underline"
                    >
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Nos tarifs
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="not-prose mt-12 rounded-lg bg-gradient-to-r from-primary to-secondary p-8 text-center text-white">
                <h3 className="mb-4 text-2xl font-bold">
                  Prêt à créer une landing page qui convertit ?
                </h3>
                <p className="mb-6 text-lg opacity-90">
                  Faire créer votre landing page premium
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

export default LandingVsSite;

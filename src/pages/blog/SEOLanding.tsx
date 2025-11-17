import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const SEOLanding = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Optimiser le SEO d'une landing page"
        description="Les clés pour rendre une landing page visible sur Google."
        canonical="https://landing26.fr/articles/seo-landing"
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
                SEO
              </span>
              <span>8 min de lecture</span>
              <span>•</span>
              <time dateTime="2025-10-15">15 octobre 2025</time>
            </div>

            <h1 className="mb-8">Comment optimiser le SEO d'une landing page moderne ?</h1>

            <div className="prose prose-lg max-w-none">
              <p className="lead">
                Le SEO d'une landing page est particulier : il doit être ultra ciblé.
                Voici les clés.
              </p>

              <h2>1. Un H1 clair et unique</h2>

              <p>Google doit comprendre la page instantanément.</p>

              <h2>2. Une meta description attractive</h2>

              <p>Elle doit donner envie de cliquer tout en incluant votre mot-clé principal.</p>

              <h2>3. Un contenu structuré (H2/H3)</h2>

              <p>Google lit la structure avant le texte.</p>

              <h2>4. Une page rapide</h2>

              <p>La vitesse de chargement est un facteur de référencement majeur.</p>

              <h2>5. Maillage interne</h2>

              <p>Créez des liens vers vos autres pages pertinentes pour renforcer votre autorité.</p>

              <div className="not-prose my-12 rounded-lg border border-border/50 bg-card p-8">
                <h3 className="mb-4 text-xl font-semibold">Articles connexes</h3>
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
                      to="/articles/vitesse-conversion"
                      className="flex items-center text-secondary hover:underline"
                    >
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Impact de la vitesse sur la conversion
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="not-prose mt-12 rounded-lg bg-gradient-to-r from-primary to-secondary p-8 text-center text-white">
                <h3 className="mb-4 text-2xl font-bold">
                  Prêt à créer une landing page qui convertit ?
                </h3>
                <p className="mb-6 text-lg opacity-90">
                  Obtenez une landing page optimisée SEO
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

export default SEOLanding;

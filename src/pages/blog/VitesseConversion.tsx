import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const VitesseConversion = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Impact de la vitesse sur la conversion"
        description="Découvrez pourquoi une landing page rapide convertit toujours mieux."
        canonical="https://landing26.fr/articles/vitesse-conversion"
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
                Performance
              </span>
              <span>6 min de lecture</span>
              <span>•</span>
              <time dateTime="2024-10-22">22 octobre 2024</time>
            </div>

            <h1 className="mb-8">Pourquoi la vitesse d'une landing page influence vos conversions</h1>

            <div className="prose prose-lg max-w-none">
              <p className="lead">
                Une landing page rapide convertit mieux.
                C'est un fait mesuré : chaque seconde de chargement = –7% de conversion.
              </p>

              <h2>1. Le visiteur s'impatiente vite</h2>

              <p>Au-delà de 2 secondes → perte de 40%.</p>

              <h2>2. Google favorise les pages rapides</h2>

              <p>SEO + UX → double bénéfice.</p>

              <h2>3. Stack moderne = conversions plus hautes</h2>

              <ul>
                <li>React + Vite</li>
                <li>Vercel</li>
                <li>Prerendering</li>
                <li>Compression</li>
                <li>Caching</li>
              </ul>

              <p>➡️ Une architecture moderne garantit des performances optimales.</p>

              <div className="not-prose my-12 rounded-lg border border-border/50 bg-card p-8">
                <h3 className="mb-4 text-xl font-semibold">Articles connexes</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/articles/seo-landing"
                      className="flex items-center text-secondary hover:underline"
                    >
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Optimiser le SEO d'une landing page
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog/optimiser-conversion-landing-page"
                      className="flex items-center text-secondary hover:underline"
                    >
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      10 techniques pour optimiser votre conversion
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="not-prose mt-12 rounded-lg bg-gradient-to-r from-primary to-secondary p-8 text-center text-white">
                <h3 className="mb-4 text-2xl font-bold">
                  Prêt à créer une landing page qui convertit ?
                </h3>
                <p className="mb-6 text-lg opacity-90">
                  Une landing page ultra rapide en 3 jours
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

export default VitesseConversion;

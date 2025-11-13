import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { secteurs } from "@/utils/csvParser";
import { SEOHead } from "@/components/SEOHead";

const Secteurs = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Création de landing page par secteur - Landing26",
    "description": "Découvrez nos services de création de landing page adaptés à chaque secteur d'activité. Livraison en 3 jours, 299€ HT.",
    "provider": {
      "@type": "Organization",
      "name": "Landing26",
      "url": "https://landing26.fr"
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Création de landing page par secteur - Landing26"
        description="Découvrez nos services de création de landing page adaptés à chaque secteur d'activité. Design sur mesure, SEO optimisé, livraison en 3 jours."
        canonical="https://landing26.fr/secteurs"
        structuredData={structuredData}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 text-sm text-secondary">
              <Briefcase className="h-4 w-4" />
              <span>{secteurs.length} secteurs d'activité</span>
            </div>
            
            <h1 className="mb-6">
              Landing page adaptée à votre secteur
            </h1>
            
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Landing26 crée des landing pages sur mesure pour chaque secteur. 
              Livraison en 3 jours pour <span className="bg-gradient-to-r from-primary to-primary-orange bg-clip-text text-transparent font-semibold">299€ HT</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="bg-[hsl(var(--dark-bg))] py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {secteurs.map((secteur) => (
                <Link
                  key={secteur.slug}
                  to={`/secteur/${secteur.slug}`}
                  className="group"
                >
                  <Card className="border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 hover:shadow-lg">
                    <CardContent className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/20">
                          <Briefcase className="h-5 w-5 text-secondary" />
                        </div>
                        <div className="font-semibold text-white group-hover:text-secondary">
                          {secteur.secteur}
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400 opacity-0 transition-opacity group-hover:opacity-100" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Secteurs;

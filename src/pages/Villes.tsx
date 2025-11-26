import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { villes } from "@/utils/csvParser";
import { SEOHead } from "@/components/SEOHead";

const Villes = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Création de landing page par ville - Landing26",
    "description": "Découvrez nos services de création de landing page dans toutes les villes de France. Livraison en 3 jours, 499€ HT.",
    "provider": {
      "@type": "Organization",
      "name": "Landing26",
      "url": "https://landing26.fr"
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Création de landing page par ville - Landing26"
        description="Découvrez nos services de création de landing page dans toutes les villes de France. Livraison rapide en 3 jours, design premium et SEO optimisé."
        canonical="https://landing26.fr/villes"
        structuredData={structuredData}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 text-sm text-secondary">
              <MapPin className="h-4 w-4" />
              <span>{villes.length} villes couvertes</span>
            </div>
            
            <h1 className="mb-6">
              Création de landing page dans toute la France
            </h1>
            
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Landing26 intervient dans toutes les grandes villes de France. 
              Livraison en 3 jours pour <span className="bg-gradient-to-r from-primary to-primary-orange bg-clip-text text-transparent font-semibold whitespace-nowrap">499€ HT</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="bg-gradient-to-br from-muted via-background to-secondary/5 py-20 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {villes.map((ville, index) => (
                <Link
                  key={ville.slug}
                  to={`/ville/${ville.slug}`}
                  className="group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.02}s` }}
                >
                  <Card className="border-2 border-border bg-card backdrop-blur-sm transition-all hover:border-secondary hover:shadow-xl hover:-translate-y-1">
                    <CardContent className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/20 group-hover:bg-secondary/30 transition-colors">
                          <MapPin className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground group-hover:text-secondary transition-colors">
                            {ville.ville}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {ville.region}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
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

export default Villes;

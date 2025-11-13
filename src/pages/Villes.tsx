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
    "description": "Découvrez nos services de création de landing page dans toutes les villes de France. Livraison en 3 jours, 299€ HT.",
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
      <section className="border-b border-border bg-dark py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 text-sm text-secondary">
              <MapPin className="h-4 w-4" />
              <span>{villes.length} villes couvertes</span>
            </div>
            
            <h1 className="mb-6 text-white">
              Création de landing page dans toute la France
            </h1>
            
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200">
              Landing26 intervient dans toutes les grandes villes de France. 
              Sélectionnez votre ville pour découvrir notre offre locale.
            </p>
          </div>
        </div>
      </section>

      {/* Cities Grid */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {villes.map((ville) => (
                <Link
                  key={ville.slug}
                  to={`/ville/${ville.slug}`}
                  className="group"
                >
                  <Card className="border-border bg-white transition-all hover:border-secondary/50 hover:shadow-md">
                    <CardContent className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                          <MapPin className="h-5 w-5 text-secondary" />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground group-hover:text-secondary">
                            {ville.ville}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {ville.region}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
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

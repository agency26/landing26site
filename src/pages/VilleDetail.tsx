import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, MapPin, Clock, Euro } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getVilleBySlug } from "@/utils/csvParser";
import { SEOHead } from "@/components/SEOHead";
import NotFound from "./NotFound";

const VilleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const ville = slug ? getVilleBySlug(slug) : undefined;

  if (!ville) {
    return <NotFound />;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Création de landing page à ${ville.ville}`,
    "description": ville.meta_description,
    "provider": {
      "@type": "Organization",
      "name": "Landing26",
      "url": "https://landing26.fr"
    },
    "areaServed": {
      "@type": "City",
      "name": ville.ville,
      "containedIn": {
        "@type": "Country",
        "name": "France"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "299",
      "priceCurrency": "EUR"
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title={ville.meta_title}
        description={ville.meta_description}
        canonical={`https://landing26.fr/ville/${ville.slug}`}
        structuredData={structuredData}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 flex items-center gap-2 text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Accueil</Link>
              <span>/</span>
              <Link to="/villes" className="hover:text-foreground">Villes</Link>
              <span>/</span>
              <span className="text-foreground">{ville.ville}</span>
            </div>
            
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 text-sm text-secondary">
              <MapPin className="h-4 w-4" />
              <span>{ville.region}</span>
            </div>
            
            <h1 className="mb-6">
              Création de landing page à {ville.ville}
            </h1>
            
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              {ville.intro}
            </p>

            <div className="flex flex-col items-start justify-start gap-4 sm:flex-row">
              <GradientButton size="lg" asChild>
                <a
                  href="https://calendly.com/kabalodov/rdv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Réserver un créneau
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </GradientButton>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-b border-border bg-[hsl(var(--dark-bg))] py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-white">Pourquoi choisir Landing26 à {ville.ville} ?</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              {ville.benefices_locaux.split(',').map((benefice, index) => (
                <Card key={index} className="border-white/10 bg-white/5 backdrop-blur-sm">
                  <CardContent className="flex items-start gap-3 pt-6">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span className="text-white">{benefice.trim()}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="border-b border-border bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center">Notre offre à {ville.ville}</h2>
            
            <Card className="border-border bg-muted">
              <CardContent className="p-8">
                <div className="mb-8 flex flex-col items-center justify-between gap-4 border-b border-border pb-8 md:flex-row">
                  <div>
                    <h3 className="mb-2 text-2xl font-bold">Landing Page IA</h3>
                    <p className="text-muted-foreground">Livraison en 3 jours</p>
                  </div>
                  <div className="text-center">
                    <div className="mb-1 bg-gradient-to-r from-primary to-primary-orange bg-clip-text text-4xl font-bold text-transparent">
                      299 €
                    </div>
                    <div className="text-sm text-muted-foreground">HT</div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    "Design premium sur mesure",
                    "SEO optimisé pour " + ville.ville,
                    "Responsive mobile-first",
                    "Copywriting IA",
                    "Hébergement inclus",
                    "Intégration WhatsApp/Calendly",
                    "Vitesse maximale",
                    "Support 7j après livraison",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <GradientButton size="lg" asChild>
                    <a
                      href="https://calendly.com/kabalodov/rdv"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Démarrer mon projet
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </GradientButton>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6">Prêt à lancer votre projet à {ville.ville} ?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Réservez votre créneau maintenant. Livraison garantie en 3 jours.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <GradientButton size="lg" asChild>
                <a
                  href="https://calendly.com/kabalodov/rdv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Clock className="mr-2 h-5 w-5" />
                  Réserver un créneau
                </a>
              </GradientButton>
              
              <Button size="lg" variant="outline" asChild>
                <Link to="/tarifs">
                  <Euro className="mr-2 h-5 w-5" />
                  Voir les tarifs
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VilleDetail;

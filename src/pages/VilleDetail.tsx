import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, MapPin, Clock, Euro, Briefcase, Sparkles } from "lucide-react";
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
      "price": "499",
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
      <section className="relative overflow-hidden border-b border-border">
        {/* Mesh gradient background */}
        <div className="absolute inset-0 bg-[var(--mesh-gradient)] opacity-60"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-primary-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 flex items-center gap-2 text-muted-foreground font-medium animate-fade-in">
              <Link to="/" className="hover:text-secondary transition-colors">Accueil</Link>
              <span>/</span>
              <Link to="/villes" className="hover:text-secondary transition-colors">Villes</Link>
              <span>/</span>
              <span className="text-foreground">{ville.ville}</span>
            </div>
            
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-secondary/30 bg-secondary/10 px-5 py-2.5 text-sm font-semibold text-secondary backdrop-blur-sm shadow-lg animate-fade-in-down">
              <MapPin className="h-4 w-4 animate-pulse" />
              <span>{ville.region}</span>
            </div>
            
            <h1 className="mb-6 font-black tracking-tight animate-fade-in-up">
              Création de landing page à {ville.ville}
            </h1>
            
            <p className="mb-8 text-lg md:text-xl font-medium text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {ville.intro}
            </p>

            <div className="flex flex-col items-start justify-start gap-4 sm:flex-row animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <GradientButton size="lg" asChild className="shadow-2xl">
                <a
                  href="https://calendly.com/kabalodov/rdv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Réserver un créneau
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </GradientButton>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-b border-border bg-gradient-to-br from-muted via-background to-secondary/5 py-20 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 font-black">Pourquoi choisir Landing26 à {ville.ville} ?</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              {ville.benefices_locaux.split(',').map((benefice, index) => (
                <Card key={index} className="border-2 border-border bg-card backdrop-blur-sm transition-all hover:border-secondary hover:shadow-xl hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="flex items-start gap-3 pt-6">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-secondary" />
                    <span className="text-foreground font-medium">{benefice.trim()}</span>
                  </CardContent>
                </Card>
              ))}
              <Card className="border-2 border-border bg-card backdrop-blur-sm transition-all hover:border-secondary hover:shadow-xl hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: `${ville.benefices_locaux.split(',').length * 0.1}s` }}>
                <CardContent className="flex items-start gap-3 pt-6">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-secondary" />
                  <span className="text-foreground font-medium">Design premium IA adapté à votre secteur</span>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="border-b border-border bg-white py-20 relative overflow-hidden">
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary-purple/5 rounded-full blur-3xl"></div>
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center font-black">Notre offre à {ville.ville}</h2>
            
            <Card className="border-2 border-primary/30 bg-gradient-to-br from-card to-background shadow-2xl shadow-primary/10 backdrop-blur-sm animate-scale-in">
              <CardContent className="p-8 md:p-10">
                <div className="mb-8 flex flex-col items-center justify-between gap-4 border-b-2 border-border pb-8 md:flex-row">
                  <div>
                    <h3 className="mb-2 text-2xl font-black">Landing Page IA</h3>
                    <p className="text-muted-foreground font-medium">Livraison en 3 jours</p>
                  </div>
                  <div className="text-center">
                    <div className="mb-1 bg-gradient-to-r from-primary via-primary-orange to-primary-purple bg-clip-text text-4xl md:text-5xl font-black text-transparent animate-gradient-shift bg-200%">
                      499 €
                    </div>
                    <div className="text-sm text-muted-foreground font-semibold">HT</div>
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
                    <div key={index} className="flex items-start gap-3 group">
                      <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-secondary group-hover:text-primary-orange transition-colors" />
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <GradientButton size="lg" asChild className="shadow-2xl">
                    <a
                      href="https://calendly.com/kabalodov/rdv"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Démarrer mon projet
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </GradientButton>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-background via-secondary/5 to-background py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--mesh-gradient)] opacity-40"></div>
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-black">Prêt à lancer votre projet à {ville.ville} ?</h2>
            <p className="mb-8 text-lg md:text-xl font-medium text-muted-foreground">
              Réservez votre créneau maintenant. Livraison garantie en 3 jours.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <GradientButton size="lg" asChild className="shadow-2xl">
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

      {/* Internal Linking Section */}
      <section className="border-t border-border bg-gradient-to-br from-background via-secondary/5 to-background py-20 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary-purple/5 rounded-full blur-3xl"></div>
        
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h3 className="text-2xl font-black mb-2">Explorez nos services</h3>
              <p className="text-muted-foreground font-medium">Landing pages partout en France, tous secteurs</p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              {/* Villes populaires */}
              <Card className="border-2 border-border bg-card/50 backdrop-blur-sm transition-all hover:border-secondary/50 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="pt-6">
                  <h4 className="mb-6 text-lg font-bold text-foreground flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-secondary" />
                    Villes populaires
                  </h4>
                  <ul className="space-y-3">
                    {['paris', 'lyon', 'marseille', 'bordeaux', 'lille'].map((city) => (
                      <li key={city}>
                        <Link 
                          to={`/ville/${city}`}
                          className="text-sm font-medium text-foreground hover:text-secondary transition-colors flex items-center gap-2 group"
                        >
                          <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          {city.charAt(0).toUpperCase() + city.slice(1)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Secteurs populaires */}
              <Card className="border-2 border-border bg-card/50 backdrop-blur-sm transition-all hover:border-secondary/50 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="pt-6">
                  <h4 className="mb-6 text-lg font-bold text-foreground flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-secondary" />
                    Secteurs populaires
                  </h4>
                  <ul className="space-y-3">
                    {['coach', 'consultant', 'agent-immobilier', 'avocat', 'agence-marketing'].map((sector) => {
                      const displayNames: Record<string, string> = {
                        'coach': 'Coach',
                        'consultant': 'Consultant',
                        'agent-immobilier': 'Agent immobilier',
                        'avocat': 'Avocat',
                        'agence-marketing': 'Agence marketing'
                      };
                      return (
                        <li key={sector}>
                          <Link 
                            to={`/secteur/${sector}`}
                            className="text-sm font-medium text-foreground hover:text-secondary transition-colors flex items-center gap-2 group"
                          >
                            <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            {displayNames[sector]}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
              </Card>

              {/* Articles utiles */}
              <Card className="border-2 border-border bg-card/50 backdrop-blur-sm transition-all hover:border-secondary/50 hover:shadow-xl hover:-translate-y-1">
                <CardContent className="pt-6">
                  <h4 className="mb-6 text-lg font-bold text-foreground flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-secondary" />
                    Articles utiles
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <Link 
                        to="/blog/optimiser-conversion-landing-page"
                        className="text-sm font-medium text-foreground hover:text-secondary transition-colors flex items-start gap-2 group"
                      >
                        <ArrowRight className="h-4 w-4 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        <span>10 techniques pour optimiser le taux de conversion</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/blog/seo-landing-page-guide-2024"
                        className="text-sm font-medium text-foreground hover:text-secondary transition-colors flex items-start gap-2 group"
                      >
                        <ArrowRight className="h-4 w-4 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        <span>SEO pour landing pages : le guide complet</span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/blog/ia-copywriting-landing-page"
                        className="text-sm font-medium text-foreground hover:text-secondary transition-colors flex items-start gap-2 group"
                      >
                        <ArrowRight className="h-4 w-4 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        <span>Comment l'IA révolutionne le copywriting</span>
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VilleDetail;

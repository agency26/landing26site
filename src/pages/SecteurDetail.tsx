import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Briefcase, Clock, Euro } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSecteurBySlug } from "@/utils/csvParser";
import { SEOHead } from "@/components/SEOHead";
import NotFound from "./NotFound";

const SecteurDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const secteur = slug ? getSecteurBySlug(slug) : undefined;

  if (!secteur) {
    return <NotFound />;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Landing page pour ${secteur.secteur}`,
    "description": secteur.meta_description,
    "provider": {
      "@type": "Organization",
      "name": "Landing26",
      "url": "https://landing26.fr"
    },
    "serviceType": secteur.secteur,
    "offers": {
      "@type": "Offer",
      "price": "299",
      "priceCurrency": "EUR"
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title={secteur.meta_title}
        description={secteur.meta_description}
        canonical={`https://landing26.fr/secteur/${secteur.slug}`}
        structuredData={structuredData}
      />
      <Header />

      {/* Hero Section */}
      <section className="border-b border-border bg-dark py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 flex items-center gap-2 text-gray-300">
              <Link to="/" className="hover:text-white">Accueil</Link>
              <span>/</span>
              <Link to="/secteurs" className="hover:text-white">Secteurs</Link>
              <span>/</span>
              <span className="text-white">{secteur.secteur}</span>
            </div>
            
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 text-sm text-secondary">
              <Briefcase className="h-4 w-4" />
              <span>Secteur d'activité</span>
            </div>
            
            <h1 className="mb-6 text-white">
              Landing page pour {secteur.secteur}
            </h1>
            
            <p className="mb-8 text-lg text-gray-200">
              {secteur.intro}
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

      {/* Business Needs Section */}
      <section className="border-b border-border bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8">Besoins spécifiques du secteur {secteur.secteur}</h2>
            
            <Card className="border-border bg-muted">
              <CardContent className="pt-6">
                <p className="text-lg text-foreground">{secteur.besoins_metier}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="border-b border-border bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8">Avantages d'un site Landing26</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              {secteur.avantages_site.split(',').map((avantage, index) => (
                <Card key={index} className="border-border bg-white">
                  <CardContent className="flex items-start gap-3 pt-6">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                    <span className="text-foreground">{avantage.trim()}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="border-b border-border bg-gray py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-white">Notre offre pour {secteur.secteur}</h2>
            
            <Card className="border border-white/10 bg-dark">
              <CardContent className="p-8">
                <div className="mb-8 flex flex-col items-center justify-between gap-4 border-b border-white/10 pb-8 md:flex-row">
                  <div>
                    <h3 className="mb-2 text-2xl font-bold text-white">Landing Page IA</h3>
                    <p className="text-gray-300">Livraison en 3 jours</p>
                  </div>
                  <div className="text-center">
                    <div className="mb-1 bg-gradient-to-r from-primary to-primary-orange bg-clip-text text-4xl font-bold text-transparent">
                      299 €
                    </div>
                    <div className="text-sm text-gray-300">HT</div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    "Design adapté au secteur",
                    "SEO optimisé métier",
                    "Responsive mobile-first",
                    "Copywriting IA",
                    "Hébergement inclus",
                    "Intégration WhatsApp/Calendly",
                    "Vitesse maximale",
                    "Support 7j après livraison",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span className="text-gray-100">{item}</span>
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
            <h2 className="mb-6">Prêt à lancer votre projet ?</h2>
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

export default SecteurDetail;

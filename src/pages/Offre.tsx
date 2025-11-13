import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, X, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Offre = () => {
  const included = [
    "Design sur mesure premium fintech",
    "SEO technique complet (meta, structure, vitesse)",
    "Responsive mobile-first parfait",
    "Copywriting optimisé avec IA",
    "Formulaire de contact fonctionnel",
    "Hébergement inclus 1 mois",
    "Analyse de performance intégrée",
    "Support 7 jours après livraison",
    "Export statique pour déploiement",
    "Structured data JSON-LD",
  ];

  const comparison = [
    {
      feature: "Délai de livraison",
      landing26: "3 jours",
      agency: "2-4 semaines",
    },
    {
      feature: "Prix",
      landing26: "499 € HT",
      agency: "2000-5000 €",
    },
    {
      feature: "Révisions incluses",
      landing26: "2 cycles",
      agency: "1-2 cycles",
    },
    {
      feature: "SEO technique",
      landing26: "Inclus",
      agency: "Option payante",
    },
    {
      feature: "IA intégrée",
      landing26: "Oui",
      agency: "Rarement",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="border-b border-border/50 bg-gradient-to-b from-background to-card py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6">L'offre Landing26</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Une landing page premium, livrée en 3 jours, optimisée pour la conversion.
              Tout ce dont vous avez besoin, rien de superflu.
            </p>
          </div>
        </div>
      </section>

      {/* Main Offer */}
      <section className="border-b border-border/50 bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Card className="border-2 border-primary/20 bg-card">
              <CardContent className="p-8 md:p-12">
                <div className="mb-8 text-center">
                  <h2 className="mb-2">Landing Page IA</h2>
                  <div className="mb-4 text-5xl font-bold text-primary">499 € HT</div>
                  <p className="text-muted-foreground">
                    Livraison garantie en 3 jours ouvrés
                  </p>
                </div>

                <div className="space-y-3">
                  {included.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Button
                    size="lg"
                    asChild
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <a
                      href="https://calendly.com/kabalodov/rdv"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Commander maintenant
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="border-b border-border/50 bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4">Landing26 vs Agences classiques</h2>
              <p className="text-lg text-muted-foreground">
                Rapidité, qualité, prix. Sans compromis.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="p-4 text-left font-semibold">Critère</th>
                    <th className="bg-primary/5 p-4 text-left font-semibold text-primary">
                      Landing26
                    </th>
                    <th className="p-4 text-left font-semibold text-muted-foreground">
                      Agence classique
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-border/50 transition-colors hover:bg-muted/50"
                    >
                      <td className="p-4 font-medium">{row.feature}</td>
                      <td className="bg-primary/5 p-4 text-primary">
                        {row.landing26}
                      </td>
                      <td className="p-4 text-muted-foreground">{row.agency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Not Included */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4">Ce qui n'est PAS inclus</h2>
              <p className="text-lg text-muted-foreground">
                Transparence totale sur ce que vous obtenez.
              </p>
            </div>

            <Card className="border-border/50 bg-card">
              <CardContent className="p-8">
                <div className="space-y-3">
                  {[
                    "Site multi-pages (e-commerce, blog complet)",
                    "Développement backend complexe",
                    "Intégrations API tierces avancées",
                    "Maintenance mensuelle (disponible en option)",
                    "Campagnes publicitaires",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-muted-foreground" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-lg border border-secondary/20 bg-secondary/5 p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Besoin de plus ?</strong> Contactez-nous
                    pour un devis personnalisé. Nous proposons des options sur mesure.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Offre;

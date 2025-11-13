import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Tarifs = () => {
  const addons = [
    {
      title: "Pages supplémentaires",
      price: "150 € HT / page",
      description: "Page About, Services, etc.",
    },
    {
      title: "Blog intégré",
      price: "400 € HT",
      description: "CMS + 5 articles optimisés SEO",
    },
    {
      title: "Maintenance mensuelle",
      price: "99 € HT / mois",
      description: "Updates, corrections, support prioritaire",
    },
    {
      title: "SEO avancé",
      price: "300 € HT",
      description: "Audit complet + optimisations poussées",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="border-b border-border/50 bg-gradient-to-b from-background to-card py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6">Tarifs transparents</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Un prix unique, tout inclus. Pas de surprise.
            </p>
          </div>
        </div>
      </section>

      {/* Main Pricing */}
      <section className="border-b border-border/50 bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Card className="border-2 border-primary/20 bg-card">
              <CardContent className="p-8 md:p-12">
                <div className="mb-8 text-center">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
                    Offre principale
                  </div>
                  <h2 className="mb-2">Landing Page IA</h2>
                  <div className="mb-2 text-6xl font-bold text-primary">299 €</div>
                  <div className="mb-4 text-muted-foreground">HT - Livraison en 3 jours</div>
                </div>

                <div className="mb-8 space-y-3">
                  {[
                    "Design sur mesure premium fintech",
                    "SEO technique complet",
                    "Responsive mobile-first",
                    "Copywriting optimisé IA",
                    "Hébergement 1 mois inclus",
                    "Formulaire de contact",
                    "Analyse de performance",
                    "Support 7 jours post-livraison",
                    "Export statique pour Vercel/Hostinger",
                    "2 cycles de révision inclus",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center">
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

      {/* Add-ons */}
      <section className="border-b border-border/50 bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4">Options supplémentaires</h2>
              <p className="text-lg text-muted-foreground">
                Besoin de plus ? Ajoutez ces options à votre commande.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {addons.map((addon, index) => (
                <Card key={index} className="border-border/50 bg-background">
                  <CardContent className="pt-6">
                    <div className="mb-2 flex items-baseline justify-between">
                      <h3 className="text-xl font-semibold">{addon.title}</h3>
                      <div className="text-lg font-bold text-primary">
                        {addon.price}
                      </div>
                    </div>
                    <p className="text-muted-foreground">{addon.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 rounded-lg border border-secondary/20 bg-secondary/5 p-6">
              <h3 className="mb-2 font-semibold">Projet sur mesure ?</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Vous avez besoin de fonctionnalités spécifiques ou d'un projet plus complexe ?
                Contactez-nous pour un devis personnalisé.
              </p>
              <Button variant="outline" asChild>
                <a
                  href="https://wa.me/972555002400?text=Bonjour, j'ai besoin d'un devis personnalisé"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demander un devis
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4">Modalités de paiement</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-border/50 bg-card">
                <CardContent className="pt-6">
                  <div className="mb-3 text-3xl font-bold text-primary">50%</div>
                  <h3 className="mb-2 font-semibold">À la commande</h3>
                  <p className="text-sm text-muted-foreground">
                    Acompte de 50% pour lancer le projet. On démarre dès réception.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card">
                <CardContent className="pt-6">
                  <div className="mb-3 text-3xl font-bold text-primary">50%</div>
                  <h3 className="mb-2 font-semibold">À la livraison</h3>
                  <p className="text-sm text-muted-foreground">
                    Solde à régler avant mise en ligne définitive. J+3 maximum.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-card">
                <CardContent className="pt-6">
                  <div className="mb-3 text-3xl font-bold text-secondary">7j</div>
                  <h3 className="mb-2 font-semibold">Support inclus</h3>
                  <p className="text-sm text-muted-foreground">
                    Support technique gratuit pendant 7 jours après livraison.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Moyens de paiement acceptés : Virement bancaire, Stripe (carte), PayPal
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tarifs;

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Tarifs = () => {
  const addons = [
    {
      title: "Pages supplémentaires",
      price: "49 € HT / page",
      description: "Page About, Services, etc.",
    },
    {
      title: "Maintenance mensuelle",
      price: "19 € HT / mois",
      description: "Updates, corrections, support prioritaire",
    },
    {
      title: "SEO avancé",
      price: "99 € HT",
      description: "Audit complet + optimisations poussées",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="border-b border-border bg-dark py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-white">Tarifs transparents</h1>
            <p className="text-lg text-gray-300 md:text-xl">
              Un prix unique, tout inclus. Pas de surprise.
            </p>
          </div>
        </div>
      </section>

      {/* Main Pricing */}
      <section className="border-b border-border bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Card className="border-2 border-primary/20 bg-muted">
              <CardContent className="p-8 md:p-12">
                <div className="mb-8 text-center">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
                    Offre principale
                  </div>
                  <h2 className="mb-2">Landing Page IA</h2>
                  <div className="mb-2 bg-gradient-to-r from-primary to-primary-orange bg-clip-text text-6xl font-bold text-transparent">299 €</div>
                  <div className="mb-4 text-muted-foreground">HT - Livraison en 3 jours</div>
                </div>

                <div className="mb-8 space-y-3">
                  {[
                    "Design sur mesure premium fintech",
                    "SEO technique complet",
                    "Responsive mobile-first",
                    "Copywriting optimisé IA",
                    "Hébergement inclus (permanent)",
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
                  <GradientButton
                    size="lg"
                    asChild
                  >
                    <a
                      href="https://calendly.com/kabalodov/rdv"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Commander maintenant
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </GradientButton>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="border-b border-border bg-gray py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-white">Options supplémentaires</h2>
              <p className="text-lg text-gray-300">
                Besoin de plus ? Ajoutez ces options à votre commande.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {addons.map((addon, index) => (
                <Card key={index} className="border border-white/10 bg-dark">
                  <CardContent className="pt-6">
                    <div className="mb-2 flex items-baseline justify-between">
                      <h3 className="text-xl font-semibold text-white">{addon.title}</h3>
                    </div>
                    <div className="mb-3 bg-gradient-to-r from-primary to-primary-orange bg-clip-text text-lg font-bold text-transparent">
                      {addon.price}
                    </div>
                    <p className="text-gray-300">{addon.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 rounded-lg border border-secondary/20 bg-secondary/5 p-6">
              <h3 className="mb-2 font-semibold text-white">Projet sur mesure ?</h3>
              <p className="mb-4 text-sm text-gray-300">
                Vous avez besoin de fonctionnalités spécifiques ou d'un projet plus complexe ?
                Contactez-nous pour un devis personnalisé.
              </p>
              <Button variant="outline" asChild className="border-white/20 text-white hover:bg-white/10">
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
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4">Modalités de paiement</h2>
              <p className="text-lg text-muted-foreground">Simple et transparent</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-2 border-primary/20 bg-muted">
                <CardContent className="pt-6">
                  <div className="mb-3 bg-gradient-to-r from-primary to-primary-orange bg-clip-text text-4xl font-bold text-transparent">100%</div>
                  <h3 className="mb-2 font-semibold">À la commande</h3>
                  <p className="text-sm text-muted-foreground">
                    Paiement unique de 299 € HT pour lancer le projet. On démarre dès réception et vous livrez en 3 jours maximum.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-border bg-card">
                <CardContent className="pt-6">
                  <div className="mb-3 text-4xl font-bold text-secondary">Inclus</div>
                  <h3 className="mb-2 font-semibold">Hébergement permanent</h3>
                  <p className="text-sm text-muted-foreground">
                    Hébergement inclus sans frais supplémentaires. Votre site reste en ligne sans coût caché.
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

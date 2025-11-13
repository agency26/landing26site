import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Palette, Code, Rocket, CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Process = () => {
  const steps = [
    {
      day: "J0",
      icon: MessageSquare,
      title: "Brief & Stratégie",
      duration: "30-60 min",
      description: "On discute de votre projet en détail.",
      tasks: [
        "Analyse de votre cible et objectifs",
        "Définition du message clé",
        "Benchmark concurrentiel rapide",
        "Validation de la structure",
      ],
    },
    {
      day: "J1",
      icon: Palette,
      title: "Design & Maquette",
      duration: "Journée complète",
      description: "Création de la maquette premium selon vos recommandations.",
      tasks: [
        "Design system (couleurs, typo, composants)",
        "Maquette haute fidélité",
        "Application de vos recommandations",
        "Préparation pour développement",
      ],
    },
    {
      day: "J2",
      icon: Code,
      title: "Développement",
      duration: "Journée complète",
      description: "Construction et optimisation technique.",
      tasks: [
        "Développement responsive",
        "Intégration SEO technique",
        "Copywriting IA optimisé",
        "Tests de performance",
      ],
    },
    {
      day: "J3",
      icon: Rocket,
      title: "Livraison & Go Live",
      duration: "Demi-journée",
      description: "Livraison selon vos recommandations et mise en ligne.",
      tasks: [
        "Tests cross-browser et mobile",
        "Optimisations Core Web Vitals",
        "Livraison du site finalisé",
        "Mise en ligne + documentation",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="border-b border-border/50 bg-gradient-to-b from-background to-card py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6">De zéro à live en 3 jours</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Un process rodé, transparent, efficace. Chaque jour a son objectif.
              Vous savez toujours où on en est.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-b border-border/50 bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col gap-6 md:flex-row md:gap-8">
                  {/* Day Badge */}
                  <div className="flex-shrink-0">
                    <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-secondary/10 text-2xl font-bold text-secondary md:h-24 md:w-24">
                      {step.day}
                    </div>
                  </div>

                  {/* Content */}
                  <Card className="flex-1 border-border/50 bg-card">
                    <CardContent className="p-6 md:p-8">
                      <div className="mb-4 flex items-start justify-between">
                        <div>
                          <h3 className="mb-1 text-2xl font-semibold">
                            {step.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {step.duration}
                          </p>
                        </div>
                        <div className="rounded-xl bg-secondary/10 p-3">
                          <step.icon className="h-6 w-6 text-secondary" />
                        </div>
                      </div>

                      <p className="mb-6 text-muted-foreground">
                        {step.description}
                      </p>

                      <div className="space-y-2">
                        {step.tasks.map((task, taskIndex) => (
                          <div key={taskIndex} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                            <span className="text-sm text-foreground">{task}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-10 top-24 h-12 w-0.5 bg-secondary/30 md:left-12" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="border-b border-border/50 bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4">À quoi s'attendre ?</h2>
              <p className="text-lg text-muted-foreground">
                Transparence totale sur le déroulement.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-border/50 bg-background">
                <CardContent className="pt-6">
                  <h3 className="mb-3 text-xl font-semibold">Communication</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Disponible sur WhatsApp</li>
                    <li>• Preview live dès J2</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-background">
                <CardContent className="pt-6">
                  <h3 className="mb-3 text-xl font-semibold">Révisions</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 2 révisions post-livraison</li>
                    <li>• Ajustements design, texte, fonctionnalités</li>
                    <li>• Changements majeurs = sur devis</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-background">
                <CardContent className="pt-6">
                  <h3 className="mb-3 text-xl font-semibold">Livrables</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Landing page en ligne</li>
                    <li>• Modifications sur demande</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-background">
                <CardContent className="pt-6">
                  <h3 className="mb-3 text-xl font-semibold">Après livraison</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Support 7 jours inclus</li>
                    <li>• Corrections de bugs gratuites</li>
                    <li>• Maintenance sur devis</li>
                    <li>• Évolutions possibles</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6">Prêt à démarrer ?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Réservez votre créneau maintenant. On commence dès demain.
            </p>
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
                Réserver un créneau
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Process;

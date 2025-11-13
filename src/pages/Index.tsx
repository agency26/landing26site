import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Zap,
  Target,
  Search,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Clock,
  Euro,
  MessageCircle,
  Star,
  MapPin,
  Briefcase,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { villes, secteurs } from "@/utils/csvParser";

const Index = () => {
  const features = [
    {
      icon: Zap,
      title: "Livraison en 3 jours",
      description: "De la commande à la mise en ligne, votre site est prêt en 72h.",
    },
    {
      icon: Search,
      title: "SEO-first",
      description: "Optimisé pour Google dès le premier jour. Structure, meta, vitesse.",
    },
    {
      icon: Sparkles,
      title: "IA intégrée",
      description: "Copywriting, design, optimisation. L'IA accélère sans compromis.",
    },
    {
      icon: Target,
      title: "Conversion maximale",
      description: "CTA stratégiques, parcours optimisé, design qui convertit.",
    },
  ];

  const processSteps = [
    {
      day: "J0",
      title: "Brief",
      description: "On discute de votre projet, vos objectifs, votre cible.",
    },
    {
      day: "J1",
      title: "Design",
      description: "Maquette premium validée. Couleurs, typo, structure.",
    },
    {
      day: "J2",
      title: "Build",
      description: "Développement, intégration, SEO technique, contenu.",
    },
    {
      day: "J3",
      title: "Go Live",
      description: "Tests, corrections, mise en ligne. Votre site est live.",
    },
  ];

  const testimonials = [
    {
      name: "Sophie Martin",
      role: "CEO, TechStart",
      content: "Site livré en 3 jours, qualité exceptionnelle. 40% de conversion en plus.",
    },
    {
      name: "Thomas Dubois",
      role: "Fondateur, GrowthLab",
      content: "Meilleur rapport qualité/prix du marché. Design pro, SEO au top.",
    },
    {
      name: "Marie Laurent",
      role: "Marketing, InnoHub",
      content: "Réactivité incroyable. L'équipe comprend les enjeux business.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 text-sm text-secondary">
              <Sparkles className="h-4 w-4" />
              <span>+100 landing pages livrées</span>
            </div>
            
            <h1 className="mb-6 animate-fade-in-up">
              Votre landing page pro en 3 jours — <span className="bg-gradient-to-r from-primary to-primary-orange bg-clip-text text-transparent whitespace-nowrap">499 € HT</span>
            </h1>
            
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Design premium + SEO + IA. Livraison express pour entrepreneurs pressés.
              Pas de blabla, juste des résultats.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <GradientButton
                size="lg"
                asChild
                className="text-lg"
              >
                <a
                  href="https://calendly.com/kabalodov/rdv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Réserver un créneau
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </GradientButton>
              
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-secondary/50 text-lg hover:bg-secondary/10"
              >
                <a
                  href="https://wa.me/33768410643?text=Bonjour"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-secondary" />
                <span>SEO-first</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-secondary" />
                <span>Responsive</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-secondary" />
                <span>IA intégrée</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-b border-border bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4">Pourquoi Landing26 ?</h2>
            <p className="text-lg text-muted-foreground">
              Parce que votre temps est précieux et vos résultats comptent.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group border-border bg-white transition-all hover:border-secondary/50 hover:shadow-md"
              >
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                    <feature.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="border-b border-border bg-[hsl(var(--dark-bg))] py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-white">L'offre Landing26</h2>
              <p className="text-lg text-gray-300">
                Tout ce dont vous avez besoin. Rien de superflu.
              </p>
            </div>

            <Card className="border border-gray/30 bg-[hsl(var(--gray-bg))]">
              <CardContent className="p-8 md:p-12">
                <div className="mb-8 flex flex-col items-center justify-between gap-4 border-b border-white/10 pb-8 md:flex-row">
                  <div>
                    <h3 className="mb-2 text-2xl font-bold text-white">Landing Page IA</h3>
                    <p className="text-gray-300">
                      Design premium • SEO • Livraison 3 jours
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mb-1 bg-gradient-to-r from-primary to-primary-orange bg-clip-text text-4xl font-bold text-transparent">499 €</div>
                    <div className="text-sm text-gray-300">HT</div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    "Design sur mesure premium",
                    "SEO de base inclus",
                    "Responsive mobile-first",
                    "Copywriting optimisé IA",
                    "Hébergement inclus",
                    "Formulaire de contact",
                    "Analyse de performance",
                    "Support 7j après livraison",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-secondary" />
                      <span className="text-gray-100">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
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

      {/* Process Section */}
      <section className="border-b border-border bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4">De zéro à live en 3 jours</h2>
            <p className="text-lg text-muted-foreground">
              Un process rodé, transparent, efficace.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="border-border bg-card transition-all hover:border-secondary/50 hover:shadow-md">
                  <CardContent className="pt-6">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-secondary/10 text-2xl font-bold text-secondary">
                      {step.day}
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                {index < processSteps.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden h-0.5 w-6 -translate-y-1/2 translate-x-full bg-secondary/30 md:block" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <Link to="/process">
                Voir le process détaillé
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-b border-border bg-[hsl(var(--gray-bg))] py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-white">Ils nous font confiance</h2>
            <p className="text-lg text-gray-300">
              Résultats réels, clients satisfaits.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border border-white/10 bg-[hsl(var(--dark-bg))] transition-all hover:border-secondary/30 hover:shadow-md"
              >
                <CardContent className="pt-6">
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary-orange text-primary-orange" />
                    ))}
                  </div>
                  <p className="mb-6 text-gray-200">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Villes desservies Section */}
      <section className="border-b border-border bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 text-sm text-secondary">
                <MapPin className="h-4 w-4" />
                <span>Disponible partout en France</span>
              </div>
              <h2 className="mb-4">Nos villes desservies en France</h2>
              <p className="text-lg text-muted-foreground">
                Nous créons votre landing page premium en 3 jours dans toutes ces villes.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {villes.slice(0, 12).map((ville, index) => (
                <Link
                  key={ville.slug}
                  to={`/ville/${ville.slug}`}
                  className={`group inline-flex items-center rounded-lg border border-border bg-card px-4 py-2 text-sm transition-all hover:border-secondary hover:bg-secondary/5 hover:shadow-sm ${index >= 6 ? 'hidden md:inline-flex' : ''}`}
                >
                  <span className="text-foreground group-hover:text-secondary">
                    {ville.ville}
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" asChild>
                <Link to="/villes">
                  Voir toutes les villes
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Secteurs pris en charge Section */}
      <section className="border-b border-border bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-4 py-2 text-sm text-secondary">
                <Briefcase className="h-4 w-4" />
                <span>Tous secteurs d'activité</span>
              </div>
              <h2 className="mb-4">Secteurs pour lesquels nous créons des landing pages</h2>
              <p className="text-lg text-muted-foreground">
                Nos designs premium s'adaptent à tous les métiers.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {secteurs
                .filter((secteur) => secteur.secteur !== 'Comptable' && secteur.secteur !== 'Expert SEO')
                .slice(0, 12)
                .map((secteur, index) => (
                  <Link
                    key={secteur.slug}
                    to={`/secteur/${secteur.slug}`}
                    className={`group inline-flex items-center rounded-lg border border-border bg-card px-4 py-2 text-sm transition-all hover:border-secondary hover:bg-secondary/5 hover:shadow-sm ${index >= 6 ? 'hidden md:inline-flex' : ''}`}
                  >
                    <span className="text-foreground group-hover:text-secondary">
                      {secteur.secteur}
                    </span>
                  </Link>
                ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" asChild>
                <Link to="/secteurs">
                  Voir tous les secteurs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6">Prêt à lancer votre projet ?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Réservez votre créneau maintenant. Places limitées chaque mois.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <GradientButton
                size="lg"
                asChild
              >
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

export default Index;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Zap,
  Target,
  Search,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Star,
  MapPin,
  Briefcase,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuickContactForm from "@/components/QuickContactForm";
import { villes, secteurs } from "@/utils/csvParser";
import { SEOHead } from "@/components/SEOHead";

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
      <SEOHead
        title="Landing page IA livrée en 3 jours – 499 € HT | Landing26"
        description="Landing page premium en 3 jours pour 499 € HT. Design fintech + SEO + IA. Conversion maximale, livraison express."
        canonical="https://landing26.fr"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        {/* Mesh gradient background */}
        <div className="absolute inset-0 bg-[var(--mesh-gradient)] opacity-60"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-primary-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        
        <div className="container relative mx-auto px-4 py-24 md:py-36">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-secondary/30 bg-secondary/10 px-5 py-2.5 text-sm font-semibold text-secondary backdrop-blur-sm animate-fade-in-down shadow-lg">
              <Sparkles className="h-4 w-4 animate-pulse-glow" />
              <span>+100 landing pages livrées</span>
            </div>
            
            <h1 className="mb-6 animate-fade-in-up font-black tracking-tight leading-tight md:leading-relaxed">
              Votre landing page pro <span className="whitespace-nowrap">en 3 jours</span> — <span className="bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent whitespace-nowrap">499 € HT</span>
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl font-medium animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Design premium + SEO + IA. Livraison express pour entrepreneurs pressés.
              Pas de blabla, juste des résultats.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <GradientButton
                size="lg"
                className="text-lg shadow-2xl"
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Commander ma landing
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </GradientButton>
              
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-secondary/50 text-lg hover:bg-secondary/10 hover:border-secondary hover:scale-[1.02] transition-all font-semibold"
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

            <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-center gap-2 hover:text-secondary transition-colors">
                <CheckCircle2 className="h-5 w-5 text-secondary" />
                <span>SEO-first</span>
              </div>
              <div className="flex items-center gap-2 hover:text-secondary transition-colors">
                <CheckCircle2 className="h-5 w-5 text-secondary" />
                <span>Responsive</span>
              </div>
              <div className="flex items-center gap-2 hover:text-secondary transition-colors">
                <CheckCircle2 className="h-5 w-5 text-secondary" />
                <span>IA intégrée</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-b border-border bg-white py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent"></div>
        
        <div className="container relative mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 font-black animate-fade-in">Pourquoi Landing26 ?</h2>
            <p className="text-xl text-muted-foreground font-medium animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Parce que votre temps est précieux et vos résultats comptent.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group border-2 border-border bg-white transition-all duration-300 hover:border-secondary hover:shadow-2xl hover:shadow-secondary/20 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary/20 to-primary-purple/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg">
                    <feature.icon className="h-8 w-8 text-secondary group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold group-hover:text-secondary transition-colors">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="border-b border-border bg-gradient-to-br from-muted via-background to-secondary/5 py-24 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary-purple/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-black animate-fade-in">L'offre Landing26</h2>
              <p className="text-xl text-muted-foreground font-medium animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Tout ce dont vous avez besoin. Rien de superflu.
              </p>
            </div>

            <Card className="border-2 border-primary/30 bg-gradient-to-br from-card to-background shadow-2xl shadow-primary/10 backdrop-blur-sm animate-scale-in">
              <CardContent className="p-8 md:p-14">
                <div className="mb-10 flex flex-col items-center justify-between gap-6 border-b-2 border-border pb-10 md:flex-row">
                  <div>
                    <h3 className="mb-3 text-2xl md:text-3xl font-black">Landing Page IA</h3>
                    <p className="text-base md:text-lg text-muted-foreground font-medium">
                      Design premium • SEO • Livraison 3 jours
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-4xl md:text-5xl font-black text-transparent">499 €</div>
                    <div className="text-sm text-muted-foreground font-semibold">HT</div>
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
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
                    <div key={index} className="flex items-start gap-3 group animate-fade-in-up" style={{ animationDelay: `${index * 0.05}s` }}>
                      <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-secondary group-hover:text-primary-orange transition-colors" />
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 text-center">
                  <GradientButton
                    size="lg"
                    asChild
                    className="shadow-2xl w-full sm:w-auto"
                  >
                    <a
                      href="https://calendly.com/kabalodov/rdv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whitespace-normal sm:whitespace-nowrap"
                    >
                      Commander maintenant
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </a>
                  </GradientButton>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="border-b border-border bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 font-black animate-fade-in">De zéro à live en 3 jours</h2>
            <p className="text-xl text-muted-foreground font-medium animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Un process rodé, transparent, efficace.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <Card className="border-2 border-border bg-card transition-all duration-300 hover:border-secondary hover:shadow-2xl hover:-translate-y-2 hover:shadow-secondary/20 group">
                  <CardContent className="pt-8">
                    <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary/20 to-primary-purple/20 text-3xl font-black text-secondary transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-xl">
                      {step.day}
                    </div>
                    <h3 className="mb-3 text-2xl font-bold group-hover:text-secondary transition-colors">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                {index < processSteps.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden h-1 w-6 -translate-y-1/2 translate-x-full bg-gradient-to-r from-secondary to-primary-purple md:block opacity-40" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button variant="outline" asChild className="border-2 hover:border-secondary hover:bg-secondary/10 hover:scale-105 transition-all font-semibold">
              <Link to="/process">
                Voir le process détaillé
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-b border-border bg-gradient-to-br from-background via-secondary/5 to-background py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        
        <div className="container relative mx-auto px-4">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <h2 className="mb-4 font-black animate-fade-in">Ils nous font confiance</h2>
            <p className="text-xl text-muted-foreground font-medium animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Résultats réels, clients satisfaits.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-2 border-border bg-card transition-all duration-300 hover:border-secondary/50 hover:shadow-2xl hover:-translate-y-2 hover:shadow-secondary/20 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8">
                  <div className="mb-6 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform" style={{ transitionDelay: `${i * 50}ms` }} />
                    ))}
                  </div>
                  <p className="mb-8 text-lg text-foreground font-medium leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-bold text-foreground text-lg">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Villes & Secteurs Section - Unified with Tabs */}
      <section className="border-b border-border bg-background py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-black animate-fade-in">Partout en France, tous les secteurs</h2>
              <p className="text-xl text-muted-foreground font-medium animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Nos landing pages premium s'adaptent à votre localisation et votre métier.
              </p>
            </div>

            <Tabs defaultValue="villes" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 h-14 bg-muted/50 p-1 rounded-2xl">
                <TabsTrigger 
                  value="villes" 
                  className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:via-primary-orange data-[state=active]:to-primary-purple data-[state=active]:text-white font-bold text-base transition-all"
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  Villes
                </TabsTrigger>
                <TabsTrigger 
                  value="secteurs" 
                  className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:via-primary-orange data-[state=active]:to-primary-purple data-[state=active]:text-white font-bold text-base transition-all"
                >
                  <Briefcase className="mr-2 h-5 w-5" />
                  Secteurs
                </TabsTrigger>
              </TabsList>

              <TabsContent value="villes" className="mt-0">
                <div className="mb-6 text-center">
                  <div className="inline-flex items-center gap-2 rounded-full border-2 border-secondary/30 bg-secondary/10 px-5 py-2.5 text-sm font-semibold text-secondary backdrop-blur-sm shadow-lg">
                    <MapPin className="h-4 w-4 animate-pulse" />
                    <span>Disponible dans toute la France</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4">
                  {villes.slice(0, 12).map((ville, index) => (
                    <Link
                      key={ville.slug}
                      to={`/ville/${ville.slug}`}
                      className={`group inline-flex items-center rounded-xl border-2 border-border bg-card px-6 py-3 text-sm font-semibold transition-all hover:border-secondary hover:bg-secondary/10 hover:shadow-lg hover:shadow-secondary/20 hover:-translate-y-1 animate-fade-in-up ${index >= 6 ? 'hidden md:inline-flex' : ''}`}
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <span className="text-foreground group-hover:text-secondary transition-colors">
                        {ville.ville}
                      </span>
                    </Link>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <Button variant="outline" asChild className="border-2 hover:border-secondary hover:bg-secondary/10 hover:scale-105 transition-all font-semibold">
                    <Link to="/villes">
                      Voir toutes les villes
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="secteurs" className="mt-0">
                <div className="mb-6 text-center">
                  <div className="inline-flex items-center gap-2 rounded-full border-2 border-secondary/30 bg-secondary/10 px-5 py-2.5 text-sm font-semibold text-secondary backdrop-blur-sm shadow-lg">
                    <Briefcase className="h-4 w-4 animate-pulse" />
                    <span>Tous secteurs d'activité</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4">
                  {secteurs
                    .filter((secteur) => secteur.secteur !== 'Comptable' && secteur.secteur !== 'Expert SEO')
                    .slice(0, 12)
                    .map((secteur, index) => (
                      <Link
                        key={secteur.slug}
                        to={`/secteur/${secteur.slug}`}
                        className={`group inline-flex items-center rounded-xl border-2 border-border bg-card px-6 py-3 text-sm font-semibold transition-all hover:border-secondary hover:bg-secondary/10 hover:shadow-lg hover:shadow-secondary/20 hover:-translate-y-1 animate-fade-in-up ${index >= 6 ? 'hidden md:inline-flex' : ''}`}
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <span className="text-foreground group-hover:text-secondary transition-colors">
                          {secteur.secteur}
                        </span>
                      </Link>
                    ))}
                </div>

                <div className="mt-12 text-center">
                  <Button variant="outline" asChild className="border-2 hover:border-secondary hover:bg-secondary/10 hover:scale-105 transition-all font-semibold">
                    <Link to="/secteurs">
                      Voir tous les secteurs
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Quick Contact Form */}
      <QuickContactForm />

      <Footer />
    </div>
  );
};

export default Index;

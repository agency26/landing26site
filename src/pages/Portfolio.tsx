import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import landingSaas from "@/assets/portfolio/landing-saas.jpg";
import landingEcommerce from "@/assets/portfolio/landing-ecommerce.jpg";
import landingFintech from "@/assets/portfolio/landing-fintech.jpg";
import landingCoaching from "@/assets/portfolio/landing-coaching.jpg";
import landingAgency from "@/assets/portfolio/landing-agency.jpg";
import landingApp from "@/assets/portfolio/landing-app.jpg";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Landing Page — SaaS B2B",
      description: "Design premium optimisé pour la conversion. Interface moderne avec animations fluides.",
      image: landingSaas,
      tags: ["SaaS", "B2B", "Tech"],
    },
    {
      id: 2,
      title: "Landing Page — E-commerce",
      description: "Page de vente haute conversion. Design épuré et CTA stratégiques.",
      image: landingEcommerce,
      tags: ["E-commerce", "Retail", "Mode"],
    },
    {
      id: 3,
      title: "Landing Page — Fintech",
      description: "Design fintech moderne. Typographie bold et gradients premium.",
      image: landingFintech,
      tags: ["Startup", "Fintech", "Innovation"],
    },
    {
      id: 4,
      title: "Landing Page — Coaching",
      description: "Page de capture optimisée. Design humain et authentique.",
      image: landingCoaching,
      tags: ["Coaching", "Formation", "Personnel"],
    },
    {
      id: 5,
      title: "Landing Page — Agence",
      description: "Portfolio créatif haute gamme. Animations et micro-interactions.",
      image: landingAgency,
      tags: ["Agence", "Créatif", "Design"],
    },
    {
      id: 6,
      title: "Landing Page — App Mobile",
      description: "Landing d'application. Mockups devices et features showcase.",
      image: landingApp,
      tags: ["App", "Mobile", "Tech"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Portfolio Landing Pages | Landing26"
        description="Découvrez nos réalisations de landing pages premium. Design moderne, conversion optimisée, livraison en 48h."
        canonical="https://landing26.fr/portfolio"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border py-24 md:py-32">
        <div className="absolute inset-0 bg-[var(--mesh-gradient)] opacity-40"></div>
        <div className="absolute top-20 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-40 w-80 h-80 bg-primary-purple/10 rounded-full blur-3xl"></div>
        
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary animate-fade-in-down">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              +100 projets livrés
            </div>
            
            <h1 className="mb-6 font-black tracking-tight animate-fade-in-up">
              Découvrez nos{" "}
              <span className="bg-gradient-to-r from-primary via-primary-orange to-primary-purple bg-clip-text text-transparent animate-gradient-shift bg-200%">
                landing pages
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Voici quelques projets réalisés ou exemples de ce que nous livrons en 48h.
              Design premium, conversion maximale.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:gap-10 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-card rounded-2xl border border-border overflow-hidden transition-all duration-500 hover:border-secondary/50 hover:shadow-2xl hover:shadow-secondary/10 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <Button
                      onClick={() => setSelectedProject(project.id)}
                      className="bg-white/95 text-foreground hover:bg-white shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Voir le projet
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-secondary/10 text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Bottom Action */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <button
                      onClick={() => setSelectedProject(project.id)}
                      className="inline-flex items-center text-sm font-semibold text-secondary hover:text-primary transition-colors group/btn"
                    >
                      Voir le détail
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 border-t border-border bg-gradient-to-br from-muted/50 via-background to-secondary/5 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-purple/5 rounded-full blur-3xl"></div>
        
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-black animate-fade-in">
              Vous voulez une landing page{" "}
              <span className="bg-gradient-to-r from-primary via-primary-orange to-primary-purple bg-clip-text text-transparent">
                comme celles-ci ?
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 font-medium max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Livraison en 48h. Design premium. Conversion maximale.
              Contactez-nous pour démarrer votre projet.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <GradientButton size="lg" asChild className="shadow-2xl w-full sm:w-auto">
                <a
                  href="https://calendly.com/kabalodov/rdv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Réserver un appel
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </GradientButton>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-secondary/50 hover:bg-secondary/10 hover:border-secondary font-semibold w-full sm:w-auto"
              >
                <a
                  href="https://wa.me/33768410643?text=Bonjour,%20je%20souhaite%20une%20landing%20page%20comme%20celles%20du%20portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>

            <p className="mt-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.3s" }}>
              À partir de <span className="font-bold text-secondary">499 € HT</span> • Livraison 48-72h
            </p>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedProject && (
            <>
              <div className="relative aspect-video">
                <img
                  src={projects.find(p => p.id === selectedProject)?.image}
                  alt={projects.find(p => p.id === selectedProject)?.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">
                    {projects.find(p => p.id === selectedProject)?.title}
                  </DialogTitle>
                </DialogHeader>
                <p className="mt-4 text-muted-foreground">
                  {projects.find(p => p.id === selectedProject)?.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {projects.find(p => p.id === selectedProject)?.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm font-medium px-4 py-1.5 rounded-full bg-secondary/10 text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row gap-4">
                  <GradientButton asChild className="flex-1">
                    <a
                      href="https://calendly.com/kabalodov/rdv"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Je veux la même
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </GradientButton>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedProject(null)}
                    className="border-2"
                  >
                    Fermer
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Portfolio;

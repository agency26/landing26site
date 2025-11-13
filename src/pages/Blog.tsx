import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  // Articles SEO
  const articles = [
    {
      slug: "optimiser-conversion-landing-page",
      title: "10 techniques pour optimiser le taux de conversion de votre landing page",
      excerpt: "Découvrez 10 techniques éprouvées pour améliorer significativement le taux de conversion de votre landing page.",
      category: "Conversion",
      readTime: "5 min",
      date: "2024-11-13",
    },
    {
      slug: "seo-landing-page-guide-2024",
      title: "SEO pour landing pages : le guide complet 2024",
      excerpt: "Le guide complet pour optimiser le SEO de vos landing pages et ranker sur Google tout en maximisant vos conversions.",
      category: "SEO",
      readTime: "7 min",
      date: "2024-11-13",
    },
    {
      slug: "ia-copywriting-landing-page",
      title: "Comment l'IA révolutionne le copywriting des landing pages",
      excerpt: "L'intelligence artificielle transforme le copywriting : plus rapide, plus précis, mieux optimisé conversion.",
      category: "IA",
      readTime: "6 min",
      date: "2024-11-13",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="border-b border-border/50 bg-gradient-to-b from-background to-card py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6">Blog Landing26</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Guides, conseils et stratégies pour créer des landing pages qui convertissent.
              SEO, design, copywriting, et plus encore.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Derniers articles</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Tous
                </Button>
                <Button variant="ghost" size="sm">
                  SEO
                </Button>
                <Button variant="ghost" size="sm">
                  Conversion
                </Button>
                <Button variant="ghost" size="sm">
                  IA
                </Button>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article, index) => (
                <Card
                  key={index}
                  className="group border-border/50 bg-card transition-all hover:border-secondary/50"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center gap-3 text-sm">
                      <span className="rounded-full bg-secondary/10 px-3 py-1 text-secondary">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    <h3 className="mb-3 text-xl font-semibold group-hover:text-secondary">
                      {article.title}
                    </h3>

                    <p className="mb-4 text-muted-foreground">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                      </div>

                      <Button variant="ghost" size="sm" asChild>
                        <Link to={`/blog/${article.slug}`}>
                          Lire
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Placeholder message */}
            <div className="mt-12 rounded-lg border border-border/50 bg-card p-8 text-center">
              <h3 className="mb-2 text-xl font-semibold">Plus d'articles bientôt</h3>
              <p className="text-muted-foreground">
                Nous publions régulièrement de nouveaux guides et conseils. Revenez bientôt !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="border-t border-border/50 bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6">Restez informé</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Recevez nos meilleurs conseils directement dans votre boîte mail.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link to="/contact">
                  Nous contacter
                  <ArrowRight className="ml-2 h-5 w-5" />
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

export default Blog;

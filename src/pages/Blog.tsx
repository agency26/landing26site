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
      slug: "articles/erreurs-design-landing",
      title: "Les erreurs de design qui détruisent le taux de conversion d'une landing page",
      excerpt: "Découvrez les erreurs de design les plus courantes sur une landing page et comment les éviter pour augmenter vos conversions.",
      category: "Design",
      readTime: "7 min",
      date: "2024-09-22",
    },
    {
      slug: "articles/psychologie-conversion",
      title: "5 techniques psychologiques qui boostent la conversion d'une landing page",
      excerpt: "Découvrez les 5 leviers psychologiques les plus puissants pour augmenter le taux de conversion d'une landing page.",
      category: "Conversion",
      readTime: "8 min",
      date: "2024-09-26",
    },
    {
      slug: "articles/preuve-sociale",
      title: "Comment utiliser la preuve sociale pour booster vos conversions ?",
      excerpt: "Les meilleures techniques de preuve sociale pour augmenter la conversion d'une landing page.",
      category: "Social Proof",
      readTime: "8 min",
      date: "2024-09-30",
    },
    {
      slug: "articles/structure-parfaite",
      title: "Comment construire une landing page efficace : la structure idéale",
      excerpt: "Découvrez l'architecture parfaite d'une landing page qui convertit.",
      category: "Structure",
      readTime: "9 min",
      date: "2024-10-04",
    },
    {
      slug: "articles/cta-conversion",
      title: "Comment créer un CTA qui convertit vraiment sur une landing page",
      excerpt: "Découvrez comment optimiser vos boutons d'appel à l'action.",
      category: "CTA",
      readTime: "7 min",
      date: "2024-10-08",
    },
    {
      slug: "articles/landing-vs-site",
      title: "Landing page vs site classique : lequel convertit le mieux ?",
      excerpt: "Découvrez pourquoi une landing page convertit mieux qu'un site classique.",
      category: "Comparatif",
      readTime: "9 min",
      date: "2024-10-12",
    },
    {
      slug: "articles/seo-landing",
      title: "Comment optimiser le SEO d'une landing page moderne ?",
      excerpt: "Les clés pour rendre une landing page visible sur Google.",
      category: "SEO",
      readTime: "8 min",
      date: "2024-10-15",
    },
    {
      slug: "articles/copywriting-landing",
      title: "Comment écrire du contenu qui convertit sur une landing page",
      excerpt: "Apprenez à rédiger un texte clair, persuasif et optimisé conversion.",
      category: "Contenu",
      readTime: "7 min",
      date: "2024-10-18",
    },
    {
      slug: "articles/vitesse-conversion",
      title: "Pourquoi la vitesse d'une landing page influence vos conversions",
      excerpt: "Découvrez pourquoi une landing page rapide convertit toujours mieux.",
      category: "Performance",
      readTime: "6 min",
      date: "2024-10-22",
    },
    {
      slug: "blog/optimiser-conversion-landing-page",
      title: "10 techniques pour optimiser le taux de conversion de votre landing page",
      excerpt: "Découvrez 10 techniques éprouvées pour améliorer significativement le taux de conversion de votre landing page.",
      category: "Conversion",
      readTime: "5 min",
      date: "2024-11-13",
    },
    {
      slug: "blog/seo-landing-page-guide-2024",
      title: "SEO pour landing pages : le guide complet 2024",
      excerpt: "Le guide complet pour optimiser le SEO de vos landing pages et ranker sur Google tout en maximisant vos conversions.",
      category: "SEO",
      readTime: "7 min",
      date: "2024-11-13",
    },
    {
      slug: "blog/ia-copywriting-landing-page",
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
            <div className="mb-12">
              <h2 className="text-2xl font-semibold">Derniers articles</h2>
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
                        <Link to={`/${article.slug}`}>
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

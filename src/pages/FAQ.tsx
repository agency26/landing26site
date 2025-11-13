import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FAQ = () => {
  const faqs = [
    {
      question: "Combien de temps faut-il pour créer une landing page avec Landing26 ?",
      answer: "Nous livrons votre landing page en 3 jours ouvrés maximum. Le processus est le suivant : J0 (Brief), J1 (Design), J2 (Développement), J3 (Tests & livraison). Le site est livré à J3 selon vos recommandations (couleurs, texte, etc.). Vous recevez votre site prêt à convertir en moins d'une semaine.",
    },
    {
      question: "Pourquoi choisir Landing26 plutôt qu'une agence web classique ?",
      answer: "Landing26 combine rapidité, qualité et prix imbattable. Là où une agence classique facture 2000-5000 € et livre en 2-4 semaines, nous livrons en 3 jours pour 499 € HT. Nous utilisons l'IA pour accélérer le processus sans compromettre la qualité du design ou du SEO.",
    },
    {
      question: "Le prix de 499 € HT inclut-il vraiment tout ?",
      answer: "Oui ! Le prix inclut : design sur mesure premium, développement responsive, SEO de base pour landing page, copywriting optimisé IA, formulaire de contact, hébergement, analyse de performance, 2 révisions post-livraison, et support 7 jours. Le SEO avancé est disponible en option à 99 € HT. Seules les options supplémentaires (pages additionnelles, blog, maintenance) sont en sus.",
    },
    {
      question: "Comment fonctionne le SEO sur mes landing pages Landing26 ?",
      answer: "Chaque landing page inclut un SEO de base : structure HTML sémantique, balises title et meta uniques, optimisation des images avec alt text, vitesse de chargement optimale (Core Web Vitals). Pour un SEO avancé incluant données structurées JSON-LD complètes, stratégie de mots-clés approfondie, et optimisations poussées, optez pour notre option SEO avancé à 99 € HT.",
    },
    {
      question: "Puis-je modifier ma landing page après la livraison ?",
      answer: "Absolument ! Nous effectuons toutes les modifications sur demande. Le support 7 jours post-livraison inclut les corrections de bugs. Les modifications supplémentaires peuvent être facturées selon leur ampleur, ou vous pouvez souscrire à notre maintenance mensuelle (19 € HT/mois) pour des modifications régulières.",
    },
    {
      question: "Qu'est-ce qu'une landing page et pourquoi en ai-je besoin ?",
      answer: "Une landing page est une page web conçue pour convertir les visiteurs en clients ou leads. Contrairement à un site multi-pages, elle est focalisée sur un seul objectif : inciter à l'action (achat, inscription, contact). C'est l'outil idéal pour vos campagnes publicitaires, lancements de produits, ou génération de leads qualifiés.",
    },
    {
      question: "Comment l'intelligence artificielle est-elle utilisée dans mes landing pages ?",
      answer: "Nous utilisons l'IA à plusieurs niveaux : génération et optimisation du copywriting, analyse de la concurrence pour identifier les meilleures pratiques, suggestions de structure et d'appels à l'action, optimisation SEO automatique, et génération de variations de contenu. L'IA accélère le processus tout en maintenant une qualité premium vérifiée par nos experts.",
    },
    {
      question: "Ma landing page sera-t-elle responsive sur mobile et tablette ?",
      answer: "Oui, à 100% ! Toutes nos landing pages sont développées en mobile-first, ce qui signifie qu'elles sont d'abord optimisées pour mobile, puis adaptées aux tablettes et desktops. Nous testons sur tous les devices avant livraison pour garantir une expérience parfaite sur tous les écrans.",
    },
    {
      question: "Proposez-vous un hébergement ou dois-je avoir mon propre serveur ?",
      answer: "L'hébergement est inclus et géré par nos soins. Votre landing page est hébergée sur une infrastructure performante et sécurisée. Vous n'avez rien à gérer techniquement.",
    },
    {
      question: "Combien de révisions sont incluses dans le prix ?",
      answer: "2 révisions sont incluses post-livraison. Ces révisions portent sur des ajustements de design, textes, ou fonctionnalités. Les demandes de refonte complète ou de nouvelles fonctionnalités majeures ne sont pas considérées comme des révisions et feront l'objet d'un devis séparé.",
    },
    {
      question: "Puis-je voir des exemples de landing pages que vous avez créées ?",
      answer: "Oui ! Visitez notre page Portfolio pour découvrir nos réalisations récentes. Chaque projet présente des screenshots, les objectifs du client, et les résultats obtenus. Nous créons des designs uniques adaptés à chaque secteur : SaaS, e-commerce, services B2B, formations, etc.",
    },
    {
      question: "Que se passe-t-il si je ne suis pas satisfait du résultat final ?",
      answer: "Votre satisfaction est notre priorité. Le site est livré à J3 selon vos recommandations (couleurs, texte, etc.), puis vous disposez de 2 révisions post-livraison pour affiner le résultat. Si malgré tout vous n'êtes pas satisfait, nous travaillons avec vous jusqu'à ce que le résultat corresponde à vos attentes.",
    },
    {
      question: "Faut-il prévoir du contenu avant de commencer (textes, images) ?",
      answer: "Idéalement oui, mais ce n'est pas obligatoire. Si vous avez déjà vos textes et images, c'est parfait ! Sinon, nous pouvons générer le copywriting avec l'IA (inclus) et utiliser des images de qualité (banques d'images ou génération IA). Nous vous guidons dans la préparation du brief pour identifier vos besoins.",
    },
    {
      question: "Comment puis-je suivre les performances de ma landing page après la mise en ligne ?",
      answer: "Nous intégrons les outils d'analyse de base (Google Analytics, Meta Pixel si demandé) dans votre landing page. Vous pouvez suivre le trafic, les conversions, le taux de rebond, etc. Si vous souhaitez un suivi plus avancé, nous proposons des intégrations supplémentaires (heatmaps, A/B testing) sur devis.",
    },
    {
      question: "Proposez-vous des services de maintenance après la livraison ?",
      answer: "Oui ! Le support est inclus 7 jours après livraison (corrections de bugs, questions techniques). Au-delà, vous pouvez souscrire à notre forfait maintenance mensuel (19 € HT/mois) qui inclut : mises à jour de contenu, corrections, support prioritaire, et optimisations continues. Idéal pour garder votre landing page performante dans la durée.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="border-b border-border/50 bg-gradient-to-b from-background to-card py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6">Questions fréquentes</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Tout ce que vous devez savoir sur Landing26 et nos landing pages premium.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-lg border border-border/50 bg-card px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <h2 className="text-lg font-semibold">{faq.question}</h2>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/50 bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6">Une autre question ?</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Contactez-nous directement. Nous répondons en moins de 2h.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
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
                  Réserver un appel
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://wa.me/33768410643?text=Bonjour, j'ai une question"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;

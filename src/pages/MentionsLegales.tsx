import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const MentionsLegales = () => {
  return (
    <>
      <SEOHead 
        title="Mentions Légales | Landing26"
        description="Mentions légales de Landing26 - Création de landing pages IA premium en 3 jours."
        canonical="https://landing26.fr/mentions-legales"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Mentions Légales</h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Éditeur du site</h2>
                <p>
                  Le site landing26.fr est édité par <strong>Landing26</strong>.
                </p>
                <p>
                  <strong>Email :</strong> <a href="mailto:contact@landing26.fr" className="text-primary hover:underline">contact@landing26.fr</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Hébergement</h2>
                <p>
                  Le site landing26.fr est hébergé par <strong>Vercel Inc.</strong>
                </p>
                <p>
                  Vercel Inc.<br />
                  440 N Barranca Ave #4133<br />
                  Covina, CA 91723<br />
                  États-Unis
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Propriété intellectuelle</h2>
                <p>
                  L'ensemble du contenu de ce site (textes, images, vidéos, logos, etc.) est protégé par le droit d'auteur et appartient à Landing26 ou à ses partenaires. Toute reproduction, distribution, modification ou utilisation sans autorisation préalable est strictement interdite.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Données personnelles</h2>
                <p>
                  Les informations recueillies sur ce site font l'objet d'un traitement informatique destiné à Landing26. Conformément au RGPD et à la loi "Informatique et Libertés", vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données personnelles.
                </p>
                <p>
                  Pour exercer ces droits, vous pouvez nous contacter à l'adresse : <a href="mailto:contact@landing26.fr" className="text-primary hover:underline">contact@landing26.fr</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Cookies</h2>
                <p>
                  Ce site utilise des cookies pour améliorer votre expérience de navigation. Pour en savoir plus, consultez notre <a href="/cookies" className="text-primary hover:underline">politique de cookies</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Responsabilité</h2>
                <p>
                  Landing26 s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, Landing26 ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
                </p>
                <p>
                  Landing26 ne pourra être tenue responsable des dommages directs ou indirects résultant de l'accès au site ou de l'utilisation du site, y compris l'inaccessibilité, les pertes de données, détériorations, destructions ou virus qui pourraient affecter votre équipement informatique.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Liens hypertextes</h2>
                <p>
                  Ce site peut contenir des liens vers d'autres sites web. Landing26 n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Droit applicable</h2>
                <p>
                  Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
                </p>
              </section>

              <section className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MentionsLegales;

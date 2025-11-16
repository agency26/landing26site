import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const Confidentialite = () => {
  return (
    <>
      <SEOHead 
        title="Politique de Confidentialité | Landing26"
        description="Politique de confidentialité de Landing26 - Protection de vos données personnelles."
        canonical="https://landing26.fr/confidentialite"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Politique de Confidentialité</h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p>
                  Landing26 accorde une grande importance à la protection de vos données personnelles. Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons vos données lorsque vous utilisez notre site web.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Responsable du traitement</h2>
                <p>
                  Le responsable du traitement des données est <strong>Landing26</strong>.
                </p>
                <p>
                  <strong>Contact :</strong> <a href="mailto:contact@landing26.fr" className="text-primary hover:underline">contact@landing26.fr</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Données collectées</h2>
                <p>
                  Nous collectons les types de données suivants :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Données d'identification :</strong> nom, prénom, adresse email</li>
                  <li><strong>Données de contact :</strong> numéro de téléphone (si fourni)</li>
                  <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées, durée de visite</li>
                  <li><strong>Données de communication :</strong> contenu des messages envoyés via nos formulaires de contact</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Finalités du traitement</h2>
                <p>
                  Vos données personnelles sont utilisées pour :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Répondre à vos demandes et assurer le suivi de nos échanges</li>
                  <li>Fournir nos services de création de landing pages</li>
                  <li>Améliorer nos services et votre expérience utilisateur</li>
                  <li>Respecter nos obligations légales et réglementaires</li>
                  <li>Analyser et optimiser le fonctionnement de notre site web</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Base légale du traitement</h2>
                <p>
                  Le traitement de vos données personnelles repose sur :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Votre consentement :</strong> lorsque vous utilisez nos formulaires de contact</li>
                  <li><strong>L'exécution d'un contrat :</strong> pour la fourniture de nos services</li>
                  <li><strong>Notre intérêt légitime :</strong> pour améliorer nos services et analyser notre site</li>
                  <li><strong>Obligations légales :</strong> pour respecter les lois en vigueur</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Durée de conservation</h2>
                <p>
                  Vos données personnelles sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées, conformément aux obligations légales :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Données de contact :</strong> 3 ans à compter du dernier contact</li>
                  <li><strong>Données clients :</strong> durée de la relation commerciale + 5 ans</li>
                  <li><strong>Données de navigation :</strong> 13 mois maximum</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Destinataires des données</h2>
                <p>
                  Vos données personnelles peuvent être transmises à :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Les membres autorisés de notre équipe</li>
                  <li>Nos prestataires techniques (hébergement, outils de communication)</li>
                  <li>Les autorités légales, sur demande et dans les limites légales</li>
                </ul>
                <p className="mt-4">
                  Nous nous assurons que tous nos prestataires respectent le RGPD et garantissent un niveau de sécurité approprié.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Sécurité des données</h2>
                <p>
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre la perte, l'utilisation abusive, l'accès non autorisé, la divulgation, l'altération ou la destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Vos droits</h2>
                <p>
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
                  <li><strong>Droit de rectification :</strong> corriger vos données inexactes ou incomplètes</li>
                  <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                  <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
                  <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                  <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                  <li><strong>Droit de retirer votre consentement :</strong> à tout moment</li>
                </ul>
                <p className="mt-4">
                  Pour exercer ces droits, contactez-nous à : <a href="mailto:contact@landing26.fr" className="text-primary hover:underline">contact@landing26.fr</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Cookies</h2>
                <p>
                  Notre site utilise des cookies pour améliorer votre expérience. Pour plus d'informations, consultez notre <a href="/cookies" className="text-primary hover:underline">politique de cookies</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Modifications</h2>
                <p>
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page avec une nouvelle date de mise à jour.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">12. Réclamation</h2>
                <p>
                  Si vous estimez que vos droits ne sont pas respectés, vous avez le droit de déposer une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) :
                </p>
                <p>
                  <strong>CNIL</strong><br />
                  3 Place de Fontenoy<br />
                  TSA 80715<br />
                  75334 PARIS CEDEX 07<br />
                  Téléphone : 01 53 73 22 22<br />
                  Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a>
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

export default Confidentialite;

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const Cookies = () => {
  return (
    <>
      <SEOHead 
        title="Politique de Cookies | Landing26"
        description="Politique de cookies de Landing26 - Informations sur l'utilisation des cookies sur notre site."
        canonical="https://landing26.fr/cookies"
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">Politique de Cookies</h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Qu'est-ce qu'un cookie ?</h2>
                <p>
                  Un cookie est un petit fichier texte stocké sur votre ordinateur, tablette ou smartphone lorsque vous visitez un site web. Les cookies permettent au site de se souvenir de vos actions et préférences pendant une certaine période.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Comment utilisons-nous les cookies ?</h2>
                <p>
                  Landing26 utilise des cookies pour :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Assurer le bon fonctionnement du site</li>
                  <li>Mémoriser vos préférences (langue, région, etc.)</li>
                  <li>Améliorer votre expérience de navigation</li>
                  <li>Analyser le trafic et l'utilisation du site</li>
                  <li>Mesurer l'efficacité de nos campagnes marketing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Types de cookies utilisés</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">3.1. Cookies strictement nécessaires</h3>
                    <p>
                      Ces cookies sont essentiels au fonctionnement du site. Ils permettent des fonctionnalités de base comme la navigation entre les pages et l'accès aux zones sécurisées. Le site ne peut pas fonctionner correctement sans ces cookies.
                    </p>
                    <p className="mt-2">
                      <strong>Durée de conservation :</strong> Session ou jusqu'à 1 an
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">3.2. Cookies de performance</h3>
                    <p>
                      Ces cookies nous permettent de compter les visites et les sources de trafic afin de mesurer et d'améliorer les performances de notre site. Ils nous aident à savoir quelles pages sont les plus et les moins populaires et à voir comment les visiteurs naviguent sur le site.
                    </p>
                    <p className="mt-2">
                      <strong>Durée de conservation :</strong> Jusqu'à 13 mois
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">3.3. Cookies de fonctionnalité</h3>
                    <p>
                      Ces cookies permettent au site de se souvenir de vos choix (comme votre nom d'utilisateur, votre langue ou votre région) et de fournir des fonctionnalités améliorées et personnalisées.
                    </p>
                    <p className="mt-2">
                      <strong>Durée de conservation :</strong> Jusqu'à 2 ans
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-2">3.4. Cookies de ciblage/publicitaires</h3>
                    <p>
                      Ces cookies peuvent être installés sur notre site par nos partenaires publicitaires. Ils peuvent être utilisés par ces sociétés pour créer un profil de vos intérêts et vous montrer des publicités pertinentes sur d'autres sites.
                    </p>
                    <p className="mt-2">
                      <strong>Durée de conservation :</strong> Jusqu'à 13 mois
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Cookies tiers</h2>
                <p>
                  Certains cookies sont placés par des services tiers qui apparaissent sur nos pages. Nous n'avons pas de contrôle sur ces cookies. Les services tiers peuvent inclure :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Google Analytics :</strong> pour analyser l'utilisation du site</li>
                  <li><strong>Réseaux sociaux :</strong> pour les fonctionnalités de partage</li>
                  <li><strong>Outils de communication :</strong> pour le chat et le support client</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Gestion des cookies</h2>
                <p>
                  Vous pouvez contrôler et/ou supprimer les cookies comme vous le souhaitez. Vous pouvez supprimer tous les cookies déjà présents sur votre ordinateur et configurer la plupart des navigateurs pour qu'ils les bloquent.
                </p>
                
                <div className="mt-4 space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Comment gérer les cookies dans votre navigateur :</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Google Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies
                      </li>
                      <li>
                        <strong>Firefox :</strong> Options → Vie privée et sécurité → Cookies et données de sites
                      </li>
                      <li>
                        <strong>Safari :</strong> Préférences → Confidentialité → Cookies et données de sites web
                      </li>
                      <li>
                        <strong>Edge :</strong> Paramètres → Confidentialité, recherche et services → Cookies
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="font-semibold mb-2">⚠️ Important :</p>
                    <p>
                      Si vous bloquez ou supprimez les cookies, certaines fonctionnalités du site peuvent ne pas fonctionner correctement, et votre expérience utilisateur peut être dégradée.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Modifications de la politique de cookies</h2>
                <p>
                  Nous pouvons mettre à jour cette politique de cookies de temps en temps pour refléter les changements dans notre utilisation des cookies ou pour d'autres raisons opérationnelles, légales ou réglementaires.
                </p>
                <p className="mt-2">
                  Nous vous encourageons à consulter régulièrement cette page pour rester informé de notre utilisation des cookies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Contact</h2>
                <p>
                  Pour toute question concernant notre utilisation des cookies, vous pouvez nous contacter à :
                </p>
                <p className="mt-2">
                  <strong>Email :</strong> <a href="mailto:contact@landing26.fr" className="text-primary hover:underline">contact@landing26.fr</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Plus d'informations</h2>
                <p>
                  Pour en savoir plus sur les cookies et comment les gérer, vous pouvez consulter :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <a href="https://www.cnil.fr/fr/cookies-et-autres-traceurs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      CNIL - Cookies et traceurs
                    </a>
                  </li>
                  <li>
                    <a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      AllAboutCookies.org
                    </a>
                  </li>
                </ul>
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

export default Cookies;

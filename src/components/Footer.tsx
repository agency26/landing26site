import { Link } from "react-router-dom";
import { Mail, MessageCircle, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="mb-4 inline-block text-xl font-bold">
              Landing<span className="text-primary">26</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Landing page IA premium en 3 jours pour <span className="whitespace-nowrap">499 € HT</span>.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="mailto:hello@landing26.fr"
                className="text-secondary transition-colors hover:text-secondary/80"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/33768410643?text=Bonjour"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary transition-colors hover:text-secondary/80"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/dov-kabalo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary transition-colors hover:text-secondary/80"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/offre"
                  className="text-muted-foreground transition-colors hover:text-secondary"
                >
                  Offre
                </Link>
              </li>
              <li>
                <Link
                  to="/process"
                  className="text-muted-foreground transition-colors hover:text-secondary"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  to="/tarifs"
                  className="text-muted-foreground transition-colors hover:text-secondary"
                >
                  Tarifs
                </Link>
              </li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Ressources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/blog"
                  className="text-muted-foreground transition-colors hover:text-secondary"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-muted-foreground transition-colors hover:text-secondary"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/villes"
                  className="text-muted-foreground transition-colors hover:text-secondary"
                >
                  Villes
                </Link>
              </li>
              <li>
                <Link
                  to="/secteurs"
                  className="text-muted-foreground transition-colors hover:text-secondary"
                >
                  Secteurs
                </Link>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/mentions-legales"
                  className="text-muted-foreground transition-colors hover:text-secondary"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  to="/confidentialite"
                  className="text-muted-foreground transition-colors hover:text-secondary"
                >
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  className="text-muted-foreground transition-colors hover:text-secondary"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Landing26. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

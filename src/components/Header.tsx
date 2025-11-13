import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Offre", href: "/offre" },
    { name: "Process", href: "/process" },
    { name: "Tarifs", href: "/tarifs" },
    { name: "Villes", href: "/villes" },
    { name: "Secteurs", href: "/secteurs" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">
            Landing<span className="text-primary">26</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-secondary"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="text-secondary hover:text-secondary/80"
          >
            <a
              href="https://wa.me/33768410643?text=Bonjour"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </Button>
          <Button
            size="sm"
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a
              href="https://calendly.com/kabalodov/rdv"
              target="_blank"
              rel="noopener noreferrer"
            >
              Réserver un créneau
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-border/50 bg-card md:hidden">
          <div className="container mx-auto flex flex-col space-y-4 px-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="justify-start"
              >
                <a
                  href="https://wa.me/33768410643?text=Bonjour"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
              <Button size="sm" asChild className="bg-primary">
                <a
                  href="https://calendly.com/kabalodov/rdv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Réserver un créneau
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToForm = () => {
    if (location.pathname === "/") {
      document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#contact-form");
    }
    setIsMenuOpen(false);
  };

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
          <Button size="sm" onClick={scrollToForm}>
            Réserver un créneau
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
            <Button size="sm" onClick={scrollToForm} className="w-full">
              Réserver un créneau
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GradientButton } from "@/components/ui/gradient-button";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const QuickContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    project: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast.success("Message envoyé ! Réponse sous quelques minutes.");
      setFormData({ name: "", email: "", mobile: "", project: "" });
      setIsSubmitting(false);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 bg-[var(--mesh-gradient)] opacity-40" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-xl">
          {/* Header */}
          <div className="mb-10 text-center">
            <h2 className="mb-4 font-black">Démarrez votre projet</h2>
            <p className="text-lg text-muted-foreground">
              Remplissez en 20 secondes, recevez une réponse en quelques minutes
            </p>
          </div>

          {/* Form Card */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-lg)] md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="quick-name" className="font-medium">
                  Nom
                </Label>
                <Input
                  id="quick-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  className="h-12 rounded-xl bg-background"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="quick-email" className="font-medium">
                  Email
                </Label>
                <Input
                  id="quick-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  className="h-12 rounded-xl bg-background"
                />
              </div>

              {/* Mobile */}
              <div className="space-y-2">
                <Label htmlFor="quick-mobile" className="font-medium">
                  Mobile
                </Label>
                <Input
                  id="quick-mobile"
                  name="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="+33 6 12 34 56 78"
                  className="h-12 rounded-xl bg-background"
                />
              </div>

              {/* Project */}
              <div className="space-y-2">
                <Label htmlFor="quick-project" className="font-medium">
                  Votre projet ?
                </Label>
                <Input
                  id="quick-project"
                  name="project"
                  type="text"
                  required
                  value={formData.project}
                  onChange={handleChange}
                  placeholder="Décrivez brièvement votre projet"
                  className="h-12 rounded-xl bg-background"
                />
              </div>

              {/* Submit Button */}
              <GradientButton
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full shadow-[var(--shadow-colored)]"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                    Envoi en cours...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Recevoir une réponse en quelques minutes
                    <ArrowRight className="h-5 w-5" />
                  </span>
                )}
              </GradientButton>
            </form>
          </div>

          {/* Alternative Contact */}
          <div className="mt-10 text-center">
            <p className="mb-6 text-muted-foreground">
              Pas le temps ? Contactez-moi directement via WhatsApp ou réservez un créneau.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full border-2 font-semibold transition-all hover:border-secondary hover:bg-secondary/10 hover:scale-105 sm:w-auto"
              >
                <a
                  href="https://wa.me/33768410643?text=Bonjour%2C%20je%20souhaite%20discuter%20d%27un%20projet."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full border-2 font-semibold transition-all hover:border-secondary hover:bg-secondary/10 hover:scale-105 sm:w-auto"
              >
                <a
                  href="https://calendly.com/kabalodov/rdv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Réserver un créneau
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickContactForm;

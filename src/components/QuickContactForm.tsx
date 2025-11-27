import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MessageCircle, Calendar, ArrowRight, Sparkles } from "lucide-react";
import { toast } from "sonner";

const QuickContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      toast.success("Message envoyé ! Réponse sous quelques minutes.");
      setFormData({ name: "", email: "", project: "" });
      setIsSubmitting(false);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="relative overflow-hidden bg-card py-24">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />
      
      {/* Decorative elements */}
      <div className="absolute left-1/4 top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-1/4 h-px w-1/2 bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-xl">
          {/* Header */}
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/50 bg-background/50 px-4 py-1.5 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Formulaire rapide
              </span>
            </div>
            <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
              Démarrez votre projet
            </h2>
            <p className="text-muted-foreground">
              Remplissez en 20 secondes, recevez une réponse en quelques minutes
            </p>
          </div>

          {/* Form Card */}
          <div className="relative rounded-2xl border border-border/50 bg-background/80 p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-border hover:shadow-2xl md:p-10">
            {/* Glow effect */}
            <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-b from-secondary/20 via-transparent to-primary/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="quick-name" className="text-sm font-medium">
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
                  className="h-12 rounded-xl border-border/50 bg-card/50 transition-colors focus:border-secondary focus:bg-background"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="quick-email" className="text-sm font-medium">
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
                  className="h-12 rounded-xl border-border/50 bg-card/50 transition-colors focus:border-secondary focus:bg-background"
                />
              </div>

              {/* Project Type */}
              <div className="space-y-2">
                <Label htmlFor="quick-project" className="text-sm font-medium">
                  Votre projet ?
                </Label>
                <Select
                  value={formData.project}
                  onValueChange={(value) =>
                    setFormData({ ...formData, project: value })
                  }
                  required
                >
                  <SelectTrigger className="h-12 rounded-xl border-border/50 bg-card/50 transition-colors focus:border-secondary focus:bg-background">
                    <SelectValue placeholder="Sélectionnez un type de projet" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="landing-page">
                      Création de landing page
                    </SelectItem>
                    <SelectItem value="meta-ads">Meta Ads</SelectItem>
                    <SelectItem value="google-ads">Google Ads</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="group h-14 w-full rounded-xl bg-gradient-to-r from-primary to-primary/80 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                    Envoi en cours...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Recevoir une réponse en quelques minutes
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                )}
              </Button>
            </form>
          </div>

          {/* Alternative Contact */}
          <div className="mt-8 text-center">
            <p className="mb-5 text-sm text-muted-foreground">
              Pas le temps ? Contactez-moi directement via WhatsApp ou réservez un créneau.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full rounded-xl border-border/50 bg-background/50 backdrop-blur-sm transition-all hover:border-[#25D366] hover:bg-[#25D366]/10 hover:text-[#25D366] sm:w-auto"
              >
                <a
                  href="https://wa.me/33768410643?text=Bonjour%2C%20je%20souhaite%20discuter%20d%27un%20projet."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="w-full rounded-xl border-border/50 bg-background/50 backdrop-blur-sm transition-all hover:border-secondary hover:bg-secondary/10 hover:text-secondary sm:w-auto"
              >
                <a
                  href="https://calendly.com/kabalodov/rdv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Calendar className="h-5 w-5" />
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

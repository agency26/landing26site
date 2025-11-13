import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageCircle, Linkedin, MapPin, Clock, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would be handled here
    toast.success("Message envoyé ! Nous vous répondons sous 2h.");
    setFormData({ name: "", email: "", phone: "", project: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="border-b border-border/50 bg-gradient-to-b from-background to-card py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6">Parlons de votre projet</h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Réponse garantie en moins de 2h. Disponibles 7j/7 pour vos projets urgents.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-3xl font-semibold">Envoyez-nous un message</h2>
              <Card className="border-border/50 bg-card">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jean Dupont"
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jean@exemple.com"
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+33 6 12 34 56 78"
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="project">Type de projet *</Label>
                      <Input
                        id="project"
                        name="project"
                        type="text"
                        required
                        value={formData.project}
                        onChange={handleChange}
                        placeholder="Landing page SaaS, E-commerce, etc."
                        className="bg-background"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Votre message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Décrivez votre projet, vos objectifs, vos délais..."
                        rows={5}
                        className="bg-background"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Envoyer le message
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-3xl font-semibold">Autres moyens de contact</h2>
                <div className="space-y-6">
                  <Card className="border-border/50 bg-card transition-all hover:border-secondary/50">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="rounded-xl bg-secondary/10 p-3">
                        <MessageCircle className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold">WhatsApp</h3>
                        <p className="mb-2 text-sm text-muted-foreground">
                          Réponse immédiate pour vos questions urgentes
                        </p>
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href="https://wa.me/33768410643?text=Bonjour"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Discuter maintenant
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50 bg-card transition-all hover:border-secondary/50">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="rounded-xl bg-secondary/10 p-3">
                        <Clock className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold">Calendly</h3>
                        <p className="mb-2 text-sm text-muted-foreground">
                          Réservez un créneau pour discuter de votre projet
                        </p>
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
                            Réserver un appel
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50 bg-card transition-all hover:border-secondary/50">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="rounded-xl bg-secondary/10 p-3">
                        <Mail className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold">Email</h3>
                        <p className="mb-2 text-sm text-muted-foreground">
                          Réponse en moins de 2h (jours ouvrés)
                        </p>
                        <a
                          href="mailto:hello@landing26.fr"
                          className="text-sm text-secondary hover:underline"
                        >
                          hello@landing26.fr
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50 bg-card transition-all hover:border-secondary/50">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="rounded-xl bg-secondary/10 p-3">
                        <Linkedin className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold">LinkedIn</h3>
                        <p className="mb-2 text-sm text-muted-foreground">
                          Suivez nos actualités et projets
                        </p>
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href="https://www.linkedin.com/in/dov-kabalo/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Voir le profil
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Hours */}
              <Card className="border-border/50 bg-card">
                <CardContent className="p-6">
                  <h3 className="mb-4 font-semibold">Horaires</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Lundi - Vendredi</span>
                      <span className="text-foreground">9h - 19h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samedi - Dimanche</span>
                      <span className="text-foreground">Sur rendez-vous</span>
                    </div>
                  </div>
                  <div className="mt-4 rounded-lg border border-secondary/20 bg-secondary/5 p-3">
                    <p className="text-xs text-muted-foreground">
                      <strong className="text-foreground">Projets urgents ?</strong> Contactez-nous
                      sur WhatsApp, nous sommes disponibles 7j/7 pour les demandes urgentes.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Offre from "./pages/Offre";
import Process from "./pages/Process";
import Tarifs from "./pages/Tarifs";
import Blog from "./pages/Blog";
import ConversionOptimization from "./pages/blog/ConversionOptimization";
import SEOGuide from "./pages/blog/SEOGuide";
import AICopywriting from "./pages/blog/AICopywriting";
import ErreursDesign from "./pages/blog/ErreursDesign";
import PsychologieConversion from "./pages/blog/PsychologieConversion";
import PreuveSociale from "./pages/blog/PreuveSociale";
import StructureLanding from "./pages/blog/StructureLanding";
import CTAConversion from "./pages/blog/CTAConversion";
import LandingVsSite from "./pages/blog/LandingVsSite";
import SEOLanding from "./pages/blog/SEOLanding";
import CopywritingLanding from "./pages/blog/CopywritingLanding";
import VitesseConversion from "./pages/blog/VitesseConversion";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Villes from "./pages/Villes";
import VilleDetail from "./pages/VilleDetail";
import Secteurs from "./pages/Secteurs";
import SecteurDetail from "./pages/SecteurDetail";
import MentionsLegales from "./pages/MentionsLegales";
import Confidentialite from "./pages/Confidentialite";
import Cookies from "./pages/Cookies";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/offre" element={<Offre />} />
          <Route path="/process" element={<Process />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/optimiser-conversion-landing-page" element={<ConversionOptimization />} />
          <Route path="/blog/seo-landing-page-guide-2024" element={<SEOGuide />} />
          <Route path="/blog/ia-copywriting-landing-page" element={<AICopywriting />} />
          <Route path="/articles/erreurs-design-landing" element={<ErreursDesign />} />
          <Route path="/articles/psychologie-conversion" element={<PsychologieConversion />} />
          <Route path="/articles/preuve-sociale" element={<PreuveSociale />} />
          <Route path="/articles/structure-parfaite" element={<StructureLanding />} />
          <Route path="/articles/cta-conversion" element={<CTAConversion />} />
          <Route path="/articles/landing-vs-site" element={<LandingVsSite />} />
          <Route path="/articles/seo-landing" element={<SEOLanding />} />
          <Route path="/articles/copywriting-landing" element={<CopywritingLanding />} />
          <Route path="/articles/vitesse-conversion" element={<VitesseConversion />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/villes" element={<Villes />} />
          <Route path="/ville/:slug" element={<VilleDetail />} />
          <Route path="/secteurs" element={<Secteurs />} />
          <Route path="/secteur/:slug" element={<SecteurDetail />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/confidentialite" element={<Confidentialite />} />
          <Route path="/cookies" element={<Cookies />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

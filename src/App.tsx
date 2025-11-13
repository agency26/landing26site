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
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Villes from "./pages/Villes";
import VilleDetail from "./pages/VilleDetail";
import Secteurs from "./pages/Secteurs";
import SecteurDetail from "./pages/SecteurDetail";
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
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/villes" element={<Villes />} />
          <Route path="/ville/:slug" element={<VilleDetail />} />
          <Route path="/secteurs" element={<Secteurs />} />
          <Route path="/secteur/:slug" element={<SecteurDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

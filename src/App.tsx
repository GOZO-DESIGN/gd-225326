import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsent from "./components/CookieConsent";
import Index from "./pages/Index";

const NotFound = lazy(() => import("./pages/NotFound"));
const Rueden = lazy(() => import("./pages/Rueden"));
const Huendinnen = lazy(() => import("./pages/Huendinnen"));
const Welpen = lazy(() => import("./pages/Welpen"));
const Wurfplanung = lazy(() => import("./pages/Wurfplanung"));
const Zuchtstaette = lazy(() => import("./pages/Zuchtstaette"));
const WissenUrsprung = lazy(() => import("./pages/WissenUrsprung"));
const UeberWeiterbildungen = lazy(() => import("./pages/UeberWeiterbildungen"));
const Gesundheit = lazy(() => import("./pages/Gesundheit"));
const WissenStubenreinheit = lazy(() => import("./pages/WissenStubenreinheit"));
const WissenHundeerziehung = lazy(() => import("./pages/WissenHundeerziehung"));
const WissenGeschlechtsreife = lazy(() => import("./pages/WissenGeschlechtsreife"));
const WissenKastration = lazy(() => import("./pages/WissenKastration"));
const WissenZahngesundheit = lazy(() => import("./pages/WissenZahngesundheit"));
const WissenFellpflege = lazy(() => import("./pages/WissenFellpflege"));
const Galerie = lazy(() => import("./pages/Galerie"));
const Kontakt = lazy(() => import("./pages/Kontakt"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/rueden" element={<Rueden />} />
            <Route path="/huendinnen" element={<Huendinnen />} />
            <Route path="/welpen" element={<Welpen />} />
            <Route path="/wurfplanung" element={<Wurfplanung />} />
            <Route path="/zuchtstaette" element={<Zuchtstaette />} />
            <Route path="/wissen/ursprung" element={<WissenUrsprung />} />
            <Route path="/ueber/weiterbildungen" element={<UeberWeiterbildungen />} />
            <Route path="/wissen/gesundheit" element={<Gesundheit />} />
            <Route path="/wissen/stubenreinheit" element={<WissenStubenreinheit />} />
            <Route path="/wissen/hundeerziehung" element={<WissenHundeerziehung />} />
            <Route path="/wissen/geschlechtsreife" element={<WissenGeschlechtsreife />} />
            <Route path="/wissen/kastration" element={<WissenKastration />} />
            <Route path="/wissen/zahngesundheit" element={<WissenZahngesundheit />} />
            <Route path="/wissen/fellpflege" element={<WissenFellpflege />} />
            <Route path="/galerie" element={<Galerie />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Rueden from "./pages/Rueden";
import Huendinnen from "./pages/Huendinnen";
import Welpen from "./pages/Welpen";
import Wurfplanung from "./pages/Wurfplanung";
import Zuchtstaette from "./pages/Zuchtstaette";
import WissenUrsprung from "./pages/WissenUrsprung";
import UeberWeiterbildungen from "./pages/UeberWeiterbildungen";
import Gesundheit from "./pages/Gesundheit";
import WissenStubenreinheit from "./pages/WissenStubenreinheit";
import WissenHundeerziehung from "./pages/WissenHundeerziehung";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/rueden" element={<Rueden />} />
          <Route path="/huendinnen" element={<Huendinnen />} />
          <Route path="/welpen" element={<Welpen />} />
          <Route path="/wurfplanung" element={<Wurfplanung />} />
          <Route path="/zuchtstaette" element={<Zuchtstaette />} />
          <Route path="/wissen/ursprung" element={<WissenUrsprung />} />
          <Route path="/ueber/weiterbildungen" element={<UeberWeiterbildungen />} />
          <Route path="/gesundheit" element={<Gesundheit />} />
          <Route path="/wissen/stubenreinheit" element={<WissenStubenreinheit />} />
          <Route path="/wissen/hundeerziehung" element={<WissenHundeerziehung />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
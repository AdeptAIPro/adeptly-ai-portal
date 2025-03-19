
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import Products from "./pages/Products";
import AIRecruitment from "./pages/products/AIRecruitment";
import ComplianceManagement from "./pages/products/ComplianceManagement";
import AnalyticsSuite from "./pages/products/AnalyticsSuite";
import ProfessionalDevelopment from "./pages/products/ProfessionalDevelopment";
import Integrations from "./pages/Integrations";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Other from "./pages/Other";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Add smooth scrolling behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <ThemeProvider defaultTheme="system" storageKey="adept-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/ai-recruitment" element={<AIRecruitment />} />
              <Route path="/products/compliance-management" element={<ComplianceManagement />} />
              <Route path="/products/analytics-suite" element={<AnalyticsSuite />} />
              <Route path="/products/professional-development" element={<ProfessionalDevelopment />} />
              <Route path="/integrations" element={<Integrations />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/other" element={<Other />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;

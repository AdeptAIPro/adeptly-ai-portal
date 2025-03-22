
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import AIRecruitment from "./pages/products/AIRecruitment";
import ComplianceManagement from "./pages/products/ComplianceManagement";
import AnalyticsSuite from "./pages/products/AnalyticsSuite";
import ProfessionalDevelopment from "./pages/products/ProfessionalDevelopment";
import Integrations from "./pages/Integrations";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
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
            <AuthProvider>
              <Routes>
                {/* Public routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                
                {/* Routes with Navbar and Footer */}
                <Route path="/" element={
                  <>
                    <Navbar />
                    <Index />
                    <Footer />
                  </>
                } />
                <Route path="/products" element={
                  <>
                    <Navbar />
                    <Products />
                    <Footer />
                  </>
                } />
                <Route path="/products/ai-recruitment" element={
                  <>
                    <Navbar />
                    <AIRecruitment />
                    <Footer />
                  </>
                } />
                <Route path="/products/compliance-management" element={
                  <>
                    <Navbar />
                    <ComplianceManagement />
                    <Footer />
                  </>
                } />
                <Route path="/products/analytics-suite" element={
                  <>
                    <Navbar />
                    <AnalyticsSuite />
                    <Footer />
                  </>
                } />
                <Route path="/products/professional-development" element={
                  <>
                    <Navbar />
                    <ProfessionalDevelopment />
                    <Footer />
                  </>
                } />
                <Route path="/integrations" element={
                  <>
                    <Navbar />
                    <Integrations />
                    <Footer />
                  </>
                } />
                <Route path="/pricing" element={
                  <>
                    <Navbar />
                    <Pricing />
                    <Footer />
                  </>
                } />
                <Route path="/about" element={
                  <>
                    <Navbar />
                    <About />
                    <Footer />
                  </>
                } />
                <Route path="/contact" element={
                  <>
                    <Navbar />
                    <Contact />
                    <Footer />
                  </>
                } />
                
                {/* Protected routes */}
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } />
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AuthProvider>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;

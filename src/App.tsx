
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
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import IntegrationsDashboard from "./pages/IntegrationsDashboard";
import IntegrationsOverviewPage from "./pages/IntegrationsOverview";
import IntegrationsPage from "./pages/Integrations";
import PricingPage from "./pages/Pricing";
import AboutPage from "./pages/About";
import CompanyPage from "./pages/Company";

// Define empty placeholder pages for sidebar navigation
import PlaceholderPage from "./pages/PlaceholderPage";

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
                
                {/* Public pages with Navbar and Footer */}
                <Route path="/integrations" element={
                  <>
                    <Navbar />
                    <IntegrationsPage />
                    <Footer />
                  </>
                } />
                <Route path="/pricing" element={
                  <>
                    <Navbar />
                    <PricingPage />
                    <Footer />
                  </>
                } />
                <Route path="/about" element={
                  <>
                    <Navbar />
                    <AboutPage />
                    <Footer />
                  </>
                } />
                <Route path="/company" element={
                  <>
                    <Navbar />
                    <CompanyPage />
                    <Footer />
                  </>
                } />
                
                {/* Protected routes */}
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } />
                
                {/* Integration Dashboards */}
                <Route path="/dashboard/integrations-hub" element={
                  <ProtectedRoute>
                    <IntegrationsDashboard />
                  </ProtectedRoute>
                } />
                
                {/* New Integrations Overview Page */}
                <Route path="/dashboard/integrations" element={
                  <ProtectedRoute>
                    <IntegrationsOverviewPage />
                  </ProtectedRoute>
                } />
                
                {/* Dashboard sub-routes */}
                <Route path="/dashboard/members" element={
                  <ProtectedRoute>
                    <PlaceholderPage title="Members" />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard/messages" element={
                  <ProtectedRoute>
                    <PlaceholderPage title="Messages" />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard/challenges" element={
                  <ProtectedRoute>
                    <PlaceholderPage title="Challenges" />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard/products" element={
                  <ProtectedRoute>
                    <PlaceholderPage title="Products" />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard/events" element={
                  <ProtectedRoute>
                    <PlaceholderPage title="Events" />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard/feed" element={
                  <ProtectedRoute>
                    <PlaceholderPage title="Feed" />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard/magic-reach" element={
                  <ProtectedRoute>
                    <PlaceholderPage title="Magic Reach" />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard/promotions" element={
                  <ProtectedRoute>
                    <PlaceholderPage title="Promotions" />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard/analytics" element={
                  <ProtectedRoute>
                    <PlaceholderPage title="Analytics" />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard/settings" element={
                  <ProtectedRoute>
                    <PlaceholderPage title="Settings" />
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

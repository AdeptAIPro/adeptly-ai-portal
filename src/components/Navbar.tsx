import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const industryCategories = [
  {
    name: "Financial Services & Insurance",
    href: "/products/ai-recruitment",
    icon: "💰",
  },
  {
    name: "Healthcare",
    href: "/products/compliance-management",
    icon: "🏥",
  },
  {
    name: "Logistics & Transportation",
    href: "/products/analytics-suite",
    icon: "🚚",
  },
  {
    name: "Manufacturing & Warehousing",
    href: "/products/professional-development",
    icon: "🏭",
  },
  {
    name: "Retail, Restaurant, & Hospitality",
    href: "/products",
    icon: "🍽️",
  },
  {
    name: "Staffing",
    href: "/products",
    icon: "👥",
  },
  {
    name: "Technology & IT",
    href: "/products",
    icon: "💻",
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();

  const productPages = [
    { name: "AI Recruitment", href: "/products/ai-recruitment" },
    { name: "Compliance Management", href: "/products/compliance-management" },
    { name: "Analytics Suite", href: "/products/analytics-suite" },
    { name: "Professional Development", href: "/products/professional-development" },
  ];

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Integrations", href: "/integrations" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isProductPage = (path) => {
    return path === "/products" || productPages.some(page => path === page.href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-background"
      )}
    >
      <div className="container mx-auto px-12 sm:px-16 lg:px-20">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/60852535-1853-450a-ad04-80f25e502b5a.png" 
              alt="Adept AI Logo" 
              className="h-10"
            />
          </Link>

          <div className="hidden md:flex items-center justify-center flex-1 px-12">
            <nav className="flex items-center space-x-12">
              <Link
                to="/"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative py-2 px-5",
                  location.pathname === "/"
                    ? "text-primary"
                    : "text-foreground/80 hover:text-foreground"
                )}
              >
                Home
                {location.pathname === "/" && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-primary w-full"
                    layoutId="navbar-indicator"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary h-auto px-5 py-2 relative",
                      isProductPage(location.pathname)
                        ? "text-primary"
                        : "text-foreground/80 hover:text-foreground"
                    )}
                  >
                    Products
                    {isProductPage(location.pathname) && (
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-primary w-full"
                        layoutId="navbar-indicator"
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[240px]">
                  <div className="py-2">
                    <div className="px-2 pb-2 mb-2 border-b">
                      <span className="text-sm font-medium">Products</span>
                    </div>
                    {productPages.map((product) => (
                      <DropdownMenuItem key={product.name} asChild>
                        <Link to={product.href} className="cursor-pointer">
                          {product.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                    
                    <div className="px-2 py-2 mt-2 mb-2 border-b">
                      <span className="text-sm font-medium">Industries</span>
                    </div>
                    {industryCategories.map((industry) => (
                      <DropdownMenuItem key={industry.name} asChild>
                        <Link to={industry.href} className="cursor-pointer">
                          <span className="mr-2">{industry.icon}</span>
                          {industry.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {navigation.slice(1).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative py-2 px-5",
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-foreground/80 hover:text-foreground"
                  )}
                >
                  {item.name}
                  {location.pathname === item.href && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-primary w-full"
                      layoutId="navbar-indicator"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                </Link>
              ))}

              <Link
                to="/privacy-policy"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative py-2 px-5",
                  location.pathname === "/privacy-policy"
                    ? "text-primary"
                    : "text-foreground/80 hover:text-foreground"
                )}
              >
                Privacy
                {location.pathname === "/privacy-policy" && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-primary w-full"
                    layoutId="navbar-indicator"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
              </Link>
              
              {isAuthenticated && (
                <Link
                  to="/dashboard"
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative py-2 px-5",
                    location.pathname === "/dashboard"
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  )}
                >
                  Dashboard
                  {location.pathname === "/dashboard" && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-primary w-full"
                      layoutId="navbar-indicator"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                </Link>
              )}
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            
            {isAuthenticated ? (
              <Button variant="outline" size="sm" onClick={logout}>
                Log out
              </Button>
            ) : (
              <>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/login">Log in</Link>
                </Button>
                <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
                  <Link to="/signup">Sign up</Link>
                </Button>
              </>
            )}
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-12 pt-2 pb-4 space-y-1">
              <Link
                to="/"
                className={cn(
                  "block px-5 py-4 text-base font-medium border-b border-border",
                  location.pathname === "/"
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                )}
              >
                Home
              </Link>
              
              <div className="border-b border-border">
                <div className="px-5 py-4 text-base font-medium text-foreground/80">
                  Products
                </div>
                <div className="pl-6 pb-2 space-y-2">
                  <Link
                    to="/products"
                    className={cn(
                      "block px-5 py-2 text-sm font-medium",
                      location.pathname === "/products"
                        ? "text-primary"
                        : "text-foreground/70 hover:text-primary"
                    )}
                  >
                    All Products
                  </Link>
                  {productPages.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        "block px-5 py-2 text-sm font-medium",
                        location.pathname === item.href
                          ? "text-primary"
                          : "text-foreground/70 hover:text-primary"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              {navigation.slice(1).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block px-5 py-4 text-base font-medium border-b border-border",
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              
              <Link
                to="/privacy-policy"
                className={cn(
                  "block px-5 py-4 text-base font-medium border-b border-border",
                  location.pathname === "/privacy-policy"
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                )}
              >
                Privacy Policy
              </Link>
              
              {isAuthenticated && (
                <Link
                  to="/dashboard"
                  className={cn(
                    "block px-5 py-4 text-base font-medium border-b border-border",
                    location.pathname === "/dashboard"
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  )}
                >
                  Dashboard
                </Link>
              )}
              
              <div className="flex flex-col space-y-2 pt-4">
                {isAuthenticated ? (
                  <Button variant="outline" onClick={logout}>
                    Log out
                  </Button>
                ) : (
                  <>
                    <Button variant="outline" asChild>
                      <Link to="/login">Log in</Link>
                    </Button>
                    <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                      <Link to="/signup">Sign up</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

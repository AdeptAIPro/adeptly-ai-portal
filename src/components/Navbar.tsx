import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Product pages for dropdown
  const productPages = [
    { name: "AI Recruitment", href: "/products/ai-recruitment" },
    { name: "Compliance Management", href: "/products/compliance-management" },
    { name: "Analytics Suite", href: "/products/analytics-suite" },
    { name: "Professional Development", href: "/products/professional-development" },
  ];

  // Main navigation items
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Integrations", href: "/integrations" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Handle scroll events to change navbar appearance
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

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Check if current path is a product page
  const isProductPage = (path) => {
    return path === "/products" || productPages.some(page => path === page.href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                Adept AI
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Home and other main nav items */}
            <Link
              to="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative py-2 px-1",
                location.pathname === "/"
                  ? "text-primary"
                  : "text-secondary/80 hover:text-secondary"
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

            {/* Products Dropdown */}
            <div className="relative">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary flex items-center py-2 px-1",
                      isProductPage(location.pathname)
                        ? "text-primary"
                        : "text-secondary/80 hover:text-secondary"
                    )}
                  >
                    Products <ChevronDown className="ml-1 h-4 w-4" />
                    {isProductPage(location.pathname) && (
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-primary w-full"
                        layoutId="navbar-indicator"
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="center"
                  className="w-[200px] bg-white shadow-lg rounded-md p-2"
                >
                  <DropdownMenuItem asChild>
                    <Link
                      to="/products"
                      className="cursor-pointer px-3 py-2 text-sm rounded-md hover:bg-gray-100"
                    >
                      All Products
                    </Link>
                  </DropdownMenuItem>
                  {productPages.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link
                        to={item.href}
                        className="cursor-pointer px-3 py-2 text-sm rounded-md hover:bg-gray-100"
                      >
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Other navigation items */}
            {navigation.slice(1).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative py-2 px-1",
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-secondary/80 hover:text-secondary"
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
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Get started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
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

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 pt-2 pb-4 space-y-1">
              <Link
                to="/"
                className={cn(
                  "block px-3 py-4 text-base font-medium border-b border-gray-200",
                  location.pathname === "/"
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary"
                )}
              >
                Home
              </Link>
              
              {/* Products section in mobile menu */}
              <div className="border-b border-gray-200">
                <div className="px-3 py-4 text-base font-medium text-gray-700">
                  Products
                </div>
                <div className="pl-6 pb-2">
                  <Link
                    to="/products"
                    className={cn(
                      "block px-3 py-2 text-sm font-medium",
                      location.pathname === "/products"
                        ? "text-primary"
                        : "text-gray-600 hover:text-primary"
                    )}
                  >
                    All Products
                  </Link>
                  {productPages.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        "block px-3 py-2 text-sm font-medium",
                        location.pathname === item.href
                          ? "text-primary"
                          : "text-gray-600 hover:text-primary"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Other navigation items */}
              {navigation.slice(1).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block px-3 py-4 text-base font-medium border-b border-gray-200",
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-gray-700 hover:text-primary"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="w-full">
                  Log in
                </Button>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Get started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const industryCategories = [
  {
    name: "Financial Services & Insurance",
    description: "A single platform for sustainable workforce growth and retention",
    href: "/products/ai-recruitment",
    color: "bg-purple-100",
  },
  {
    name: "Healthcare",
    description: "Make healthcare recruiting immune to inefficiencies",
    href: "/products/compliance-management",
    color: "bg-blue-100",
  },
  {
    name: "Logistics & Transportation",
    description: "The one-stop-shop for logistics and transportation recruitment",
    href: "/products/analytics-suite",
    color: "bg-green-100",
  },
  {
    name: "Manufacturing & Warehousing",
    description: "Assemble and retain a talented workforce, fast",
    href: "/products/professional-development",
    color: "bg-amber-100",
  },
  {
    name: "Retail, Restaurant, & Hospitality",
    description: "Fast, frictionless hiring for your front and back of house recruiting",
    href: "/products",
    color: "bg-red-100",
  },
  {
    name: "Staffing",
    description: "Accelerate growth with recruiting technology built for staffing",
    href: "/products",
    color: "bg-indigo-100",
  },
  {
    name: "Technology & IT",
    description: "Attract and retain top tech talent, all from one platform",
    href: "/products",
    color: "bg-teal-100",
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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

          <nav className="hidden md:flex items-center space-x-8">
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

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary h-auto px-1 py-2 bg-transparent",
                      isProductPage(location.pathname)
                        ? "text-primary"
                        : "text-secondary/80 hover:text-secondary"
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
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white p-6 rounded-lg shadow-lg w-[800px] border">
                    <div className="flex flex-col">
                      <h3 className="text-lg font-semibold border-b pb-2 mb-4">Solutions</h3>
                      
                      <div className="grid grid-cols-2 gap-6">
                        {industryCategories.map((category) => (
                          <Link
                            key={category.name}
                            to={category.href}
                            className="group flex flex-col"
                          >
                            <div className={`p-4 rounded-md mb-2 ${category.color} transition-colors duration-200 hover:opacity-80`}>
                              <h4 className="font-medium text-gray-900">{category.name}</h4>
                              <p className="text-sm text-gray-600 mt-1">
                                {category.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      
                      <div className="mt-4 pt-4 border-t">
                        <Link
                          to="/products"
                          className="text-sm text-primary hover:underline font-medium flex items-center"
                        >
                          View all solutions <ChevronDown className="h-4 w-4 ml-1 rotate-270" />
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

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
              
              <div className="border-b border-gray-200">
                <div className="px-3 py-4 text-base font-medium text-gray-700">
                  Products
                </div>
                <div className="pl-6 pb-2 space-y-2">
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

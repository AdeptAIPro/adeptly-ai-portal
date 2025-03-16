
import { useEffect } from "react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import {
  Check,
  Code,
  Database,
  ArrowRight,
  LineChart,
  Mail,
  MessageSquare,
  Search,
  ShoppingCart,
  Users,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Integrations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categories = [
    {
      name: "CRM & Sales",
      icon: Users,
      integrations: [
        { name: "Salesforce", logo: "SF" },
        { name: "HubSpot", logo: "HS" },
        { name: "Pipedrive", logo: "PD" },
        { name: "Zoho CRM", logo: "ZH" },
      ],
    },
    {
      name: "Marketing",
      icon: Mail,
      integrations: [
        { name: "Mailchimp", logo: "MC" },
        { name: "Marketo", logo: "MK" },
        { name: "HubSpot Marketing", logo: "HM" },
        { name: "Klaviyo", logo: "KL" },
      ],
    },
    {
      name: "E-commerce",
      icon: ShoppingCart,
      integrations: [
        { name: "Shopify", logo: "SH" },
        { name: "WooCommerce", logo: "WC" },
        { name: "Magento", logo: "MG" },
        { name: "BigCommerce", logo: "BC" },
      ],
    },
    {
      name: "Analytics",
      icon: LineChart,
      integrations: [
        { name: "Google Analytics", logo: "GA" },
        { name: "Mixpanel", logo: "MP" },
        { name: "Amplitude", logo: "AM" },
        { name: "Looker", logo: "LK" },
      ],
    },
    {
      name: "Customer Support",
      icon: MessageSquare,
      integrations: [
        { name: "Zendesk", logo: "ZD" },
        { name: "Intercom", logo: "IC" },
        { name: "Freshdesk", logo: "FD" },
        { name: "Help Scout", logo: "HS" },
      ],
    },
    {
      name: "Data & Storage",
      icon: Database,
      integrations: [
        { name: "AWS", logo: "AW" },
        { name: "Google Cloud", logo: "GC" },
        { name: "MongoDB", logo: "MD" },
        { name: "PostgreSQL", logo: "PG" },
      ],
    },
  ];

  const featuredIntegrations = [
    {
      name: "Salesforce",
      description:
        "Seamlessly sync customer data, automate sales processes, and enhance your CRM capabilities with AI insights.",
      features: [
        "Bi-directional data sync",
        "AI-powered lead scoring",
        "Automated task creation",
        "Custom dashboards and reports",
      ],
      ctaText: "Learn More",
      bgColor: "bg-blue-500",
    },
    {
      name: "Slack",
      description:
        "Bring AI-powered insights and automation to your team's communication hub with our deep Slack integration.",
      features: [
        "Real-time notifications",
        "AI chatbot assistance",
        "Command-based automation",
        "Custom workflow triggers",
      ],
      ctaText: "Connect",
      bgColor: "bg-purple-500",
    },
    {
      name: "Shopify",
      description:
        "Enhance your e-commerce operations with predictive analytics, inventory forecasting, and personalized recommendations.",
      features: [
        "Demand forecasting",
        "Product recommendation engine",
        "Customer segmentation",
        "Fraud detection",
      ],
      ctaText: "Explore",
      bgColor: "bg-green-500",
    },
  ];

  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              Connect & Extend
            </motion.span>

            <motion.h1
              className="text-4xl sm:text-5xl font-display font-bold mb-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.2 },
                },
              }}
            >
              Powerful Integrations for Seamless Workflows
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.4 },
                },
              }}
            >
              Connect Adept AI with your favorite tools and services to create
              unified, intelligent workflows that enhance productivity.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.6 },
                },
              }}
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Browse Integrations
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Ecosystem"
            title="Connect with Your Tech Stack"
            description="Adept AI integrates with hundreds of popular platforms and tools across multiple categories."
          />

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {categories.map((category, idx) => (
              <motion.div
                key={idx}
                className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                variants={fadeIn}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">{category.name}</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {category.integrations.map((integration, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-muted rounded-lg"
                    >
                      <div className="w-8 h-8 rounded bg-gray-200 flex items-center justify-center mr-3 text-xs font-bold">
                        {integration.logo}
                      </div>
                      <span className="text-sm font-medium">
                        {integration.name}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  className="w-full mt-6 group"
                >
                  View All
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Integrations */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Highlighted"
            title="Featured Integrations"
            description="Discover our most popular integrations and how they can enhance your experience with Adept AI."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {featuredIntegrations.map((integration, idx) => (
              <motion.div
                key={idx}
                className="relative overflow-hidden rounded-xl bg-white border border-border shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: idx * 0.1 },
                }}
                viewport={{ once: true }}
              >
                <div
                  className={`h-3 w-full ${integration.bgColor}`}
                  aria-hidden="true"
                />
                <div className="p-6">
                  <div className="w-12 h-12 rounded bg-gray-200 flex items-center justify-center text-sm font-bold mb-4">
                    {integration.name.substring(0, 2)}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{integration.name}</h3>
                  <p className="text-muted-foreground mb-6">
                    {integration.description}
                  </p>

                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {integration.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    className="w-full group"
                  >
                    {integration.ctaText}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Getting Started"
            title="Simple Integration Process"
            description="Connect your existing tools with Adept AI in minutes, not days."
          />

          <div className="max-w-4xl mx-auto mt-16">
            <div className="relative">
              {/* Horizontal connection line */}
              <div className="absolute top-24 left-0 right-0 h-1 bg-primary/20 hidden md:block" />

              <motion.div
                className="grid md:grid-cols-4 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {[
                  {
                    step: "1",
                    title: "Select",
                    description:
                      "Choose from our library of pre-built integrations.",
                    icon: Search,
                  },
                  {
                    step: "2",
                    title: "Connect",
                    description:
                      "Authorize the connection with a few clicks.",
                    icon: Zap,
                  },
                  {
                    step: "3",
                    title: "Configure",
                    description:
                      "Set up data mappings and triggers to fit your workflow.",
                    icon: Code,
                  },
                  {
                    step: "4",
                    title: "Activate",
                    description:
                      "Go live with your integration and start seeing results.",
                    icon: Check,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center text-center relative"
                    variants={fadeIn}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mb-6 relative z-10">
                      {item.step}
                    </div>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* API and Custom Integrations */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-white/20 mb-6">
                For Developers
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Build Custom Integrations with Our API
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Need something more specific? Our comprehensive API lets you
                build custom integrations tailored to your unique requirements.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "RESTful API with comprehensive documentation",
                  "Webhooks for real-time event handling",
                  "SDKs for popular programming languages",
                  "OAuth 2.0 authentication",
                  "Rate limits suitable for enterprise use",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-white mr-3 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  API Documentation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white/10"
                >
                  Developer Portal
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 overflow-hidden">
                <pre className="text-sm text-white/90 overflow-x-auto">
                  <code>
                    {`// Sample API request
const response = await fetch(
  'https://api.adeptai.com/v1/predict',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify({
      model: 'text-analysis',
      input: {
        text: 'Your text to analyze'
      },
      parameters: {
        depth: 'detailed',
        format: 'json'
      }
    })
  }
);

const result = await response.json();
console.log(result);`}
                  </code>
                </pre>
              </div>

              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 flex items-center justify-center">
                <Code className="w-10 h-10 text-white/70" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Connect Your Tools with Adept AI?"
        description="Start integrating today and experience the power of an AI-enhanced workflow."
        primaryButtonText="Start Integrating"
        primaryButtonLink="/contact"
        secondaryButtonText="Talk to Sales"
        secondaryButtonLink="/contact"
        background="light"
      />
    </div>
  );
};

export default Integrations;

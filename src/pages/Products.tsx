
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import {
  Activity,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Database,
  FileSearch,
  LineChart,
  MessageSquare,
  PencilRuler,
  ShieldAlert,
  UserCheck,
  Workflow,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Products = () => {
  useEffect(() => {
    // Scroll to top when component mounts
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
        staggerChildren: 0.2,
      },
    },
  };

  const products = [
    {
      id: "analytics",
      name: "Adept Analytics",
      icon: BarChart3,
      shortDesc: "AI-powered business intelligence",
      description:
        "Transform your data into actionable insights with our advanced analytics platform. Uncover hidden patterns, predict trends, and make data-driven decisions with confidence.",
      features: [
        "Real-time data processing",
        "Interactive dashboards",
        "Anomaly detection",
        "Predictive forecasting",
        "Custom report generation",
        "Data visualization",
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
      caseStudy: {
        company: "TechCorp Inc.",
        result: "Increased operational efficiency by 47%",
        quote:
          "Adept Analytics helped us make sense of terabytes of customer data, revealing insights that directly improved our product strategy.",
        author: "James Wilson, CTO",
      },
    },
    {
      id: "nlp",
      name: "Adept Language AI",
      icon: MessageSquare,
      shortDesc: "Natural language understanding & generation",
      description:
        "Process, understand, and generate human language with remarkable accuracy. From customer service automation to content creation, our NLP tools handle language tasks with human-like comprehension.",
      features: [
        "Sentiment analysis",
        "Entity recognition",
        "Text summarization",
        "Language translation",
        "Content generation",
        "Conversational AI",
      ],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80",
      caseStudy: {
        company: "Global Support Solutions",
        result: "Customer response time reduced by 68%",
        quote:
          "The language understanding capabilities are remarkable. Our customer satisfaction scores have never been higher.",
        author: "Emily Rodriguez, Customer Success Director",
      },
    },
    {
      id: "decision",
      name: "Adept Decision Engine",
      icon: BrainCircuit,
      shortDesc: "Automated decision intelligence",
      description:
        "Optimize complex decision-making processes with our AI-powered decision engine. Evaluate options, model outcomes, and automate decisions based on your business rules and objectives.",
      features: [
        "Decision tree automation",
        "Risk assessment",
        "Scenario modeling",
        "Optimization algorithms",
        "Regulatory compliance",
        "Audit trails",
      ],
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
      caseStudy: {
        company: "Financial Services Group",
        result: "Approval process streamlined by 73%",
        quote:
          "Adept's Decision Engine transformed our risk assessment process, reducing manual reviews while improving accuracy.",
        author: "Michael Chang, Risk Management Director",
      },
    },
  ];

  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-white/10"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              Our Solutions
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
              Cutting-edge AI Products for the Enterprise
            </motion.h1>

            <motion.p
              className="text-xl text-white/80 mb-8"
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
              Discover our suite of powerful AI solutions designed to transform
              how your business operates, analyzes data, and engages with
              customers.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Overview"
            title="Our Product Suite"
            description="A comprehensive ecosystem of AI tools to address your most complex business challenges."
          />

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {products.map((product, index) => (
              <motion.div key={index} variants={fadeIn}>
                <div className="group h-full flex flex-col text-center p-6 rounded-xl border border-border bg-white hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 mx-auto rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <product.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {product.shortDesc}
                  </p>
                  <Button
                    variant="ghost"
                    className="group mt-2"
                    onClick={() => {
                      document
                        .getElementById(product.id)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed Product Sections */}
      {products.map((product, index) => (
        <section
          key={product.id}
          id={product.id}
          className={`py-20 ${index % 2 === 0 ? "bg-muted" : "bg-white"}`}
        >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                className={`${index % 2 === 1 ? "md:order-2" : ""}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6 },
                  },
                }}
              >
                <div
                  className={`inline-block px-3 py-1 text-sm font-medium tracking-wider text-primary bg-primary/10 rounded-full mb-4`}
                >
                  Featured Product
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  {product.name}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {product.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                  <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="bg-primary hover:bg-primary/90 group">
                  Request Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>

              <motion.div
                className={`${index % 2 === 1 ? "md:order-1" : ""}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 1 ? -50 : 50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.6 },
                  },
                }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-xl transform rotate-3 scale-105" />
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full aspect-video object-cover"
                    />
                  </div>

                  {/* Case Study */}
                  <div className="bg-white rounded-lg shadow-lg p-6 absolute -bottom-10 -right-10 max-w-xs">
                    <div className="flex items-center mb-4">
                      <div className="h-2 w-2 rounded-full bg-primary mr-2" />
                      <p className="text-sm font-medium">Case Study</p>
                    </div>
                    <p className="font-semibold mb-1">{product.caseStudy.company}</p>
                    <p className="text-sm text-primary font-medium mb-3">
                      {product.caseStudy.result}
                    </p>
                    <p className="text-sm italic text-muted-foreground mb-2">
                      "{product.caseStudy.quote}"
                    </p>
                    <p className="text-sm font-medium">
                      — {product.caseStudy.author}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Use Cases */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Applications"
            title="Transforming Industries"
            description="See how Adept AI solutions are being applied across different sectors to drive innovation and efficiency."
            className="text-white"
          />

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { industry: "Healthcare", icon: Activity },
              { industry: "Finance", icon: LineChart },
              { industry: "Retail", icon: ShieldAlert },
              { industry: "Manufacturing", icon: Workflow },
              { industry: "Legal", icon: FileSearch },
              { industry: "Education", icon: PencilRuler },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20"
                variants={fadeIn}
              >
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.industry}</h3>
                <p className="text-white/80">
                  Discover how organizations in the {item.industry.toLowerCase()} sector
                  are leveraging Adept AI to overcome challenges and
                  drive innovation.
                </p>
                <Button
                  variant="link"
                  className="text-white px-0 mt-4 group hover:no-underline"
                >
                  Read case studies
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Explore Adept AI Products?"
        description="Schedule a personalized demo to see our products in action and discuss your specific needs."
        primaryButtonText="Book a Demo"
        primaryButtonLink="/contact"
        secondaryButtonText="View Pricing"
        secondaryButtonLink="/pricing"
        background="light"
      />
    </div>
  );
};

export default Products;

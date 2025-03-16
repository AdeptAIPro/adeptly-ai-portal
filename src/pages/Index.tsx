
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import { 
  ArrowRight, 
  BrainCircuit, 
  ChartBar, 
  Check, 
  CloudCog, 
  Code, 
  Database,
  Layers, 
  Lock, 
  MessageSquare, 
  PanelRight, 
  UserCheck, 
  Zap
} from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 -z-10" />
        <div className="absolute inset-0 opacity-20 bg-neural-pattern -z-10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
                Powering the Future with AI
              </span>
            </motion.div>
            
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, delay: 0.2 }
                }
              }}
            >
              AI-driven Solutions for the{" "}
              <span className="text-gradient">Modern Enterprise</span>
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
                  transition: { duration: 0.6, delay: 0.4 }
                }
              }}
            >
              Transform your business operations with our cutting-edge AI solutions that optimize workflows,
              enhance decision-making, and drive innovation across your organization.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, delay: 0.6 }
                }
              }}
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 group">
                Request Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative mt-16 mx-auto max-w-5xl aspect-video rounded-lg overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.8, delay: 0.8 }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 z-10" />
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] z-10" />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <Button variant="outline" size="lg" className="bg-black/30 text-white border-white/30 hover:bg-black/50">
                Watch Video
              </Button>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=1920&q=80" 
              alt="AI Technology" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        
        {/* Stats Section */}
        <div className="container mx-auto px-4 mt-20">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { label: "Clients", value: "200+" },
              { label: "Global Reach", value: "30+ Countries" },
              { label: "Data Processed", value: "10+ PB" },
              { label: "Accuracy Rate", value: "99.8%" }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={fadeIn}
              >
                <div className="text-3xl font-display font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Key Capabilities"
            title="Powerful AI Solutions for Every Need"
            description="Our suite of AI-powered tools helps businesses streamline operations, gain insights, and deliver exceptional customer experiences."
          />
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                icon: BrainCircuit,
                title: "AI Decision Intelligence",
                description: "Make smarter decisions with AI-powered analytics and recommendations based on your data."
              },
              {
                icon: MessageSquare,
                title: "Natural Language Processing",
                description: "Understand and generate human language for customer service, content creation, and more."
              },
              {
                icon: ChartBar,
                title: "Predictive Analytics",
                description: "Forecast trends and behaviors with high accuracy to stay ahead of market changes."
              },
              {
                icon: Layers,
                title: "Data Processing",
                description: "Process and analyze massive datasets to uncover hidden patterns and opportunities."
              },
              {
                icon: CloudCog,
                title: "Cloud Integration",
                description: "Seamlessly integrate with existing cloud infrastructure for maximum efficiency."
              },
              {
                icon: Lock,
                title: "Security & Compliance",
                description: "Enterprise-grade security with full compliance with industry regulations."
              }
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeIn}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading 
            eyebrow="Our Process"
            title="How Adept AI Works"
            description="A simple, effective process to implement AI solutions tailored to your business needs."
          />
          
          <div className="max-w-5xl mx-auto mt-16">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-primary/30" />
              
              <motion.div 
                className="space-y-24"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                {[
                  {
                    number: "01",
                    title: "Discover",
                    description: "We start by understanding your business, challenges, and goals through in-depth consultation."
                  },
                  {
                    number: "02",
                    title: "Design",
                    description: "Our team designs a custom AI solution tailored to your specific needs and existing systems."
                  },
                  {
                    number: "03",
                    title: "Develop",
                    description: "We build and train your AI models with your data, ensuring accuracy and reliability."
                  },
                  {
                    number: "04",
                    title: "Deploy",
                    description: "Seamless implementation with minimal disruption to your existing workflows and operations."
                  }
                ].map((step, index) => (
                  <motion.div 
                    key={index}
                    className={`relative flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                    variants={fadeIn}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                      <div className="mb-2 inline-block px-3 py-1 text-sm font-medium tracking-wider text-primary bg-primary/10 rounded-full">
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-display font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg z-10">
                      {step.number}
                    </div>
                    
                    <div className={`w-1/2 ${index % 2 === 0 ? "pl-12" : "pr-12"}`}>
                      <div className={`bg-white rounded-lg shadow-md h-48 overflow-hidden ${index % 2 === 0 ? "transform -rotate-1" : "transform rotate-1"}`}>
                        <div className="h-full w-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center">
                          <img 
                            src={`https://images.unsplash.com/photo-148859052827${index}-${index}ad4aaf24ca7?auto=format&fit=crop&w=800&q=80`} 
                            alt={step.title}
                            className="w-full h-full object-cover opacity-80"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            eyebrow="Client Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it. Here's what businesses like yours have achieved with Adept AI."
          />
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                quote: "Implementing Adept AI's predictive analytics has transformed our inventory management, reducing costs by 35% and improving fulfillment times.",
                author: "Sarah Johnson",
                role: "VP Operations",
                company: "Global Retail Inc."
              },
              {
                quote: "The natural language processing capabilities have revolutionized our customer service. Response times are down 60% while satisfaction scores are up 40%.",
                author: "Michael Chen",
                role: "CTO",
                company: "TechSolutions Ltd"
              },
              {
                quote: "Adept AI helped us process years of unstructured data to uncover insights we never knew existed. It's been a game-changer for our strategy.",
                author: "Emma Rodriguez",
                role: "Data Director",
                company: "FinServe Group"
              }
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeIn}>
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  company={testimonial.company}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integrations Preview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading 
            eyebrow="Seamless Connectivity"
            title="Integrate with Your Favorite Tools"
            description="Adept AI connects seamlessly with the tools and platforms you already use."
          />
          
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mt-12 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {Array.from({ length: 8 }).map((_, index) => (
              <motion.div 
                key={index}
                className="w-24 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center p-4"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { 
                    opacity: 1, 
                    scale: 1,
                    transition: { duration: 0.4 }
                  }
                }}
              >
                <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-sm text-gray-500">Logo {index + 1}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <Link to="/integrations">
              <Button variant="outline" size="lg" className="group">
                View All Integrations
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Transform Your Business with AI?"
        description="Join hundreds of forward-thinking companies already leveraging our AI solutions."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        secondaryButtonText="Book a Demo"
        secondaryButtonLink="/contact"
        background="gradient"
      />
    </div>
  );
};

export default Index;


import { motion } from "framer-motion";
import { ChartBar, GraduationCap, BrainCircuit, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeatureHighlights = () => {
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

  const features = [
    {
      icon: ChartBar,
      title: "Analytics Suite",
      description: "Provides intelligence for proactive decision-making in workforce management.",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=800&q=80",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: GraduationCap,
      title: "Professional Development",
      description: "Empowers healthcare professionals to manage their growth and continuing education.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: BrainCircuit,
      title: "AI-Driven Matchmaking",
      description: "Redefines recruitment with precision and innovation through cutting-edge algorithms.",
      image: "https://images.unsplash.com/photo-1581092160607-ee23499d5b29?auto=format&fit=crop&w=800&q=80",
      color: "from-purple-500/20 to-indigo-500/20"
    },
    {
      icon: FileCheck,
      title: "Compliance Management",
      description: "Automates and simplifies credentialing and compliance processes with intelligent tools.",
      image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=800&q=80",
      color: "from-amber-500/20 to-orange-500/20"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
              Platform Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 tracking-tight">
              Feature Highlights
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover the powerful features that make Adept AI the leading platform for AI-driven business transformation.
            </p>
          </motion.div>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-10 mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index} 
                variants={fadeIn}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color}`}></div>
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <Link to="/products" className="text-primary font-medium hover:underline inline-flex items-center">
                    Learn more <span className="ml-1">→</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        <div className="text-center mt-12">
          <Link to="/products">
            <Button size="lg" variant="outline">
              Explore All Features
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;

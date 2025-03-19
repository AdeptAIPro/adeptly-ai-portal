
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import HeroGradient from "@/components/hero/HeroGradient";
import HeroSplit from "@/components/hero/HeroSplit";
import HeroMinimal from "@/components/hero/HeroMinimal";
import HeroImage from "@/components/hero/HeroImage";

const Other = () => {
  const [activeHero, setActiveHero] = useState<"gradient" | "split" | "minimal" | "image">("gradient");

  return (
    <div className="min-h-screen">
      {/* Hero Selector */}
      <div className="container mx-auto pt-24 px-8 md:px-12 lg:px-16">
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          <Button 
            variant={activeHero === "gradient" ? "default" : "outline"}
            onClick={() => setActiveHero("gradient")}
          >
            Gradient Hero
          </Button>
          <Button 
            variant={activeHero === "split" ? "default" : "outline"}
            onClick={() => setActiveHero("split")}
          >
            Split Hero
          </Button>
          <Button 
            variant={activeHero === "minimal" ? "default" : "outline"}
            onClick={() => setActiveHero("minimal")}
          >
            Minimal Hero
          </Button>
          <Button 
            variant={activeHero === "image" ? "default" : "outline"}
            onClick={() => setActiveHero("image")}
          >
            Image Hero
          </Button>
        </div>
      </div>

      {/* Dynamic Hero Section */}
      {activeHero === "gradient" && <HeroGradient />}
      {activeHero === "split" && <HeroSplit />}
      {activeHero === "minimal" && <HeroMinimal />}
      {activeHero === "image" && <HeroImage />}
      
      {/* Additional Content Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <SectionHeading
            title="Discover Our Features"
            subtitle="What sets us apart"
            align="center"
          />
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Advanced Analytics",
                description: "Gain valuable insights with our powerful analytics tools designed to uncover patterns and trends.",
                icon: "📈"
              },
              {
                title: "Seamless Integration",
                description: "Easily connect with your existing tools and platforms for a smooth workflow experience.",
                icon: "🔄"
              },
              {
                title: "Intelligent Automation",
                description: "Save time and resources by automating repetitive tasks with smart AI-driven processes.",
                icon: "🤖"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Other;

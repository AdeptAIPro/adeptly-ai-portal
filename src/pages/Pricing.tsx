
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const PricingPage = () => {
  return (
    <div className="container mx-auto px-4 py-24 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading
          title="Simple, Transparent Pricing"
          subtitle="Choose the plan that's right for your business"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <PricingCard 
            title="Starter"
            price={299}
            description="Perfect for small businesses and startups"
            features={[
              "Up to 50 active jobs",
              "3 user accounts",
              "5 integrations",
              "Basic analytics",
              "Email support"
            ]}
            buttonText="Get Started"
            popular={false}
          />
          
          <PricingCard 
            title="Professional"
            price={799}
            description="Ideal for growing teams and businesses"
            features={[
              "Up to 200 active jobs",
              "10 user accounts",
              "15 integrations",
              "Advanced analytics",
              "Priority support",
              "Custom workflows"
            ]}
            buttonText="Get Started"
            popular={true}
          />
          
          <PricingCard 
            title="Enterprise"
            price={1999}
            description="For large organizations with complex needs"
            features={[
              "Unlimited active jobs",
              "Unlimited user accounts",
              "All integrations",
              "Enterprise analytics",
              "24/7 dedicated support",
              "Custom workflows",
              "Dedicated success manager",
              "API access"
            ]}
            buttonText="Contact Sales"
            popular={false}
          />
        </div>
      </motion.div>
    </div>
  );
};

// Pricing Card Component
const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  buttonText, 
  popular 
}: { 
  title: string; 
  price: number; 
  description: string; 
  features: string[]; 
  buttonText: string; 
  popular: boolean 
}) => {
  return (
    <div className={`relative bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border ${
      popular ? 'border-primary' : 'border-gray-200 dark:border-gray-700'
    }`}>
      {popular && (
        <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-3">
          <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="flex items-baseline mt-4 mb-6">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-gray-500 dark:text-gray-400 ml-2">/month</span>
      </div>
      <p className="text-gray-500 dark:text-gray-400 mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
            <span className="text-gray-600 dark:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        className={`w-full ${popular ? 'bg-primary hover:bg-primary/90' : ''}`} 
        variant={popular ? "default" : "outline"}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default PricingPage;

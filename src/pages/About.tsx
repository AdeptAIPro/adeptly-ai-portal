
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-24 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading
          title="About Adept AI"
          subtitle="Revolutionizing recruitment through artificial intelligence"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              At Adept AI, our mission is to transform the recruitment industry by harnessing the power of artificial intelligence to create more efficient, fair, and effective hiring processes.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We believe that the right match between talent and opportunity creates boundless potential for both individuals and organizations. By removing biases, streamlining workflows, and providing data-driven insights, we're building a future where hiring is faster, smarter, and more equitable.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 mt-12">Our Values</h2>
            <ul className="space-y-4">
              <ValueItem 
                title="Innovation" 
                description="We continuously push the boundaries of what's possible in AI-powered recruitment."
              />
              <ValueItem 
                title="Fairness" 
                description="We design our systems to reduce bias and create equal opportunities for all candidates."
              />
              <ValueItem 
                title="Efficiency" 
                description="We help organizations save time and resources by automating repetitive tasks."
              />
              <ValueItem 
                title="Transparency" 
                description="We believe in clear communication and explainable AI decisions."
              />
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Founded in 2019 by a team of AI researchers and recruitment industry veterans, Adept AI was born from a shared frustration with traditional hiring processes and a vision for how technology could transform them.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our founders recognized that while recruitment was becoming increasingly digital, it wasn't becoming significantly smarter. Most systems were simply digitizing old processes rather than reimagining them.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Starting with a focus on talent matching, we've expanded our platform to address the entire recruitment lifecycle, from job posting to onboarding. Today, we're proud to serve clients across industries, from fast-growing startups to Fortune 500 companies.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              As we continue to grow, our commitment to innovation, fairness, and customer success remains unwavering. We're just getting started on our mission to build the future of recruitment.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Value Item Component
const ValueItem = ({ title, description }: { title: string; description: string }) => {
  return (
    <li>
      <h3 className="text-lg font-semibold text-primary">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </li>
  );
};

export default AboutPage;

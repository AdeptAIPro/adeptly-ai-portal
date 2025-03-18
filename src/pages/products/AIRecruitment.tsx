
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const AIRecruitment = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
            AI-Powered Recruitment
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Revolutionary talent matching powered by advanced artificial intelligence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-2 rounded-xl shadow-sm mb-6">
              <img 
                src="/placeholder.svg" 
                alt="AI Recruitment Platform" 
                className="w-full h-auto rounded-lg"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-2xl font-bold mb-4">Smarter Candidate Matching</h2>
            <p className="text-gray-600 mb-6">
              Our AI-powered recruitment solution uses machine learning to match candidates with positions based on skills, experience, and cultural fit, going beyond keyword matching.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Advanced skill analysis and mapping",
                "Behavioral and cultural fit predictions",
                "Bias-free candidate evaluations",
                "Automated interview scheduling",
                "Continuous learning algorithms"
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full sm:w-auto">Schedule a Demo</Button>
          </motion.div>
        </div>

        <SectionHeading
          title="Key Features"
          subtitle="Discover how our AI recruitment solution transforms hiring"
          center={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Smart Matching",
              description: "Our AI evaluates candidates holistically, matching them to positions where they'll truly excel.",
              icon: "🧠"
            },
            {
              title: "Bias Elimination",
              description: "Removes unconscious bias from the recruitment process for truly merit-based hiring.",
              icon: "⚖️"
            },
            {
              title: "Integration Ready",
              description: "Seamlessly connects with your existing HR systems and applicant tracking software.",
              icon: "🔄"
            },
            {
              title: "Candidate Insights",
              description: "Provides deep analytics on candidate strengths, potential growth areas, and team fit.",
              icon: "📊"
            },
            {
              title: "Automated Workflows",
              description: "Streamlines repetitive tasks like screening and initial interviews to save time.",
              icon: "⚙️"
            },
            {
              title: "Performance Tracking",
              description: "Monitors hiring success and continuously improves matching algorithms.",
              icon: "📈"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIRecruitment;

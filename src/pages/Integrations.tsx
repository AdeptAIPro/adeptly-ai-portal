
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const IntegrationsPage = () => {
  return (
    <div className="container mx-auto px-4 py-24 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading
          title="Integrations"
          subtitle="Connect your existing systems to Adept AI"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <IntegrationCard 
            title="VMS Systems"
            description="Connect with Stafferlink, SAP Fieldglass, Beeline and more"
            count={7}
          />
          <IntegrationCard 
            title="ATS Systems"
            description="Connect with Workday, Ceipal, Bullhorn and more"
            count={5}
          />
          <IntegrationCard 
            title="Job Boards"
            description="Connect with LinkedIn, Indeed, ZipRecruiter and more"
            count={8}
          />
          <IntegrationCard 
            title="CRM & HRMS" 
            description="Connect with Salesforce, Zoho, BambooHR and more"
            count={6}
          />
          <IntegrationCard 
            title="Productivity"
            description="Connect with Google Workspace, Office 365, Slack and more"
            count={9}
          />
          <IntegrationCard 
            title="Compliance"
            description="Connect with background check and verification systems"
            count={4}
          />
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" className="bg-primary text-white">
            View All Integrations
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

// Integration Card Component
const IntegrationCard = ({ title, description, count }: { title: string; description: string; count: number }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
          {count} integrations
        </span>
        <Button variant="ghost" size="sm">
          Learn more
        </Button>
      </div>
    </div>
  );
};

export default IntegrationsPage;

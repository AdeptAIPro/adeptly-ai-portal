
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const CompanyPage = () => {
  return (
    <div className="container mx-auto px-4 py-24 mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionHeading
          title="Our Company"
          subtitle="Meet the team behind Adept AI"
          centered
        />
        
        <div className="mt-12 mb-20">
          <h2 className="text-2xl font-bold mb-8">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember
              name="Alex Johnson"
              role="CEO & Co-Founder"
              image="https://randomuser.me/api/portraits/men/32.jpg"
            />
            <TeamMember
              name="Sarah Chen"
              role="CTO & Co-Founder"
              image="https://randomuser.me/api/portraits/women/44.jpg"
            />
            <TeamMember
              name="Michael Rodriguez"
              role="Chief AI Officer"
              image="https://randomuser.me/api/portraits/men/22.jpg"
            />
            <TeamMember
              name="Priya Patel"
              role="Chief Product Officer"
              image="https://randomuser.me/api/portraits/women/64.jpg"
            />
          </div>
        </div>
        
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Our Investors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InvestorCard
              name="Sequoia Capital"
              description="Seed & Series A Lead"
            />
            <InvestorCard
              name="Andreessen Horowitz"
              description="Series B Lead"
            />
            <InvestorCard
              name="Y Combinator"
              description="Seed Investor"
            />
          </div>
        </div>
        
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Careers at Adept AI</h2>
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Join Our Team</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We're always looking for talented individuals who are passionate about AI, recruitment, and building products that make a difference.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <JobListing
                title="Senior Machine Learning Engineer"
                location="San Francisco, CA"
                type="Full-time"
              />
              <JobListing
                title="Product Designer"
                location="Remote"
                type="Full-time"
              />
              <JobListing
                title="Backend Developer"
                location="New York, NY"
                type="Full-time"
              />
              <JobListing
                title="Customer Success Manager"
                location="London, UK"
                type="Full-time"
              />
            </div>
            <Button size="lg">View All Openings</Button>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-8">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ContactCard
              title="General Inquiries"
              email="hello@adeptai.com"
            />
            <ContactCard
              title="Sales"
              email="sales@adeptai.com"
            />
            <ContactCard
              title="Support"
              email="support@adeptai.com"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Team Member Component
const TeamMember = ({ name, role, image }: { name: string; role: string; image: string }) => {
  return (
    <div className="text-center">
      <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500 dark:text-gray-400">{role}</p>
    </div>
  );
};

// Investor Card Component
const InvestorCard = ({ name, description }: { name: string; description: string }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
};

// Job Listing Component
const JobListing = ({ title, location, type }: { title: string; location: string; type: string }) => {
  return (
    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg flex justify-between items-center">
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">{location} · {type}</p>
      </div>
      <Button variant="outline" size="sm">Apply</Button>
    </div>
  );
};

// Contact Card Component
const ContactCard = ({ title, email }: { title: string; email: string }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <a 
        href={`mailto:${email}`} 
        className="text-primary hover:underline"
      >
        {email}
      </a>
    </div>
  );
};

export default CompanyPage;

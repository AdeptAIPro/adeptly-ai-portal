
import React from 'react';
import SectionHeading from "@/components/SectionHeading";

const ComplianceManagement = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-8 md:px-12 lg:px-16 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Hero Content */}
        <div className="md:order-2">
          <h1 className="text-4xl font-display font-bold mb-4 tracking-tight">
            Compliance Management Solutions
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Ensure adherence to industry regulations and internal policies with our comprehensive compliance management tools.
          </p>
          {/* Add call-to-action buttons here if needed */}
        </div>

        {/* Hero Image */}
        <div className="md:order-1">
          <img
            src="https://via.placeholder.com/600x400" // Replace with your actual image URL
            alt="Compliance Management"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <SectionHeading
            title="Platform Features"
            description="Tools to accelerate professional growth"
            align="center"
          />
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Automated Compliance Checks</h3>
              <p className="text-muted-foreground">
                Automatically scan documents and processes for compliance with regulatory standards.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Real-time Monitoring</h3>
              <p className="text-muted-foreground">
                Monitor compliance status in real-time with alerts and notifications for potential violations.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Customizable Reporting</h3>
              <p className="text-muted-foreground">
                Generate custom reports to track compliance metrics and demonstrate adherence to stakeholders.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Secure Data Storage</h3>
              <p className="text-muted-foreground">
                Store compliance-related data securely with encryption and access controls.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Audit Trail</h3>
              <p className="text-muted-foreground">
                Maintain a detailed audit trail of all compliance-related activities for accountability and transparency.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Integration with Existing Systems</h3>
              <p className="text-muted-foreground">
                Integrate compliance management tools with existing HR, finance, and legal systems for seamless data flow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <SectionHeading
            title="What Our Clients Say"
            description="See how our compliance management solutions have helped organizations like yours."
            align="center"
          />
          {/* Add testimonials or client quotes here */}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-8 md:px-12 lg:px-16 text-center">
          <h2 className="text-3xl font-display font-bold mb-4 tracking-tight text-white">
            Ready to Streamline Your Compliance Processes?
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Contact us today to learn more about our compliance management solutions and how they can benefit your organization.
          </p>
          {/* Add a call-to-action button here */}
        </div>
      </section>
    </div>
  );
};

export default ComplianceManagement;

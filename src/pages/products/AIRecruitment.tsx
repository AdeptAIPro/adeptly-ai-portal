import React from "react";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const AIRecruitment = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="md:order-2">
          <img
            src="/images/ai-recruitment-hero.png"
            alt="AI Recruitment Hero"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:order-1">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">
            Revolutionize Your Hiring with AI Recruitment
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Discover how our AI-powered recruitment solutions can streamline your
            hiring process, reduce time-to-hire, and improve candidate quality.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Get Started <Rocket className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Platform Features"
            description="Tools to accelerate professional growth"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">AI-Driven Matching</h3>
              <p className="text-muted-foreground">
                Our AI algorithms match candidates to your job requirements with
                unparalleled accuracy.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Automated Screening</h3>
              <p className="text-muted-foreground">
                Automatically screen resumes and applications to identify top talent
                quickly.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Predictive Analytics</h3>
              <p className="text-muted-foreground">
                Leverage predictive analytics to forecast hiring needs and optimize
                your recruitment strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <SectionHeading
          title="The Benefits of AI Recruitment"
          description="Transform your recruitment process and gain a competitive edge"
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="/images/ai-recruitment-benefits.png"
              alt="AI Recruitment Benefits"
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-2">
                  <Rocket className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Reduce Time-to-Hire</h3>
                  <p className="text-muted-foreground">
                    Accelerate your hiring process with AI-powered automation.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2">
                  <Rocket className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Improve Candidate Quality</h3>
                  <p className="text-muted-foreground">
                    Identify and attract top talent with AI-driven matching.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-2">
                  <Rocket className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Reduce Hiring Costs</h3>
                  <p className="text-muted-foreground">
                    Optimize your recruitment budget with efficient AI solutions.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What Our Clients Say"
            description="Real stories from companies transforming their recruitment with AI"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-muted-foreground italic mb-4">
                "AI Recruitment has revolutionized our hiring process. We've seen a
                significant improvement in candidate quality and a reduction in
                time-to-hire."
              </p>
              <p className="font-semibold">- John Doe, HR Manager</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-muted-foreground italic mb-4">
                "The AI-driven matching and automated screening features have saved
                us countless hours. We're now able to focus on strategic HR
                initiatives."
              </p>
              <p className="font-semibold">- Jane Smith, CEO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 tracking-tight">
          Ready to Transform Your Recruitment Process?
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Contact us today to learn more about our AI recruitment solutions and
          how they can benefit your organization.
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          Request a Demo <Rocket className="ml-2" />
        </Button>
      </section>
    </div>
  );
};

export default AIRecruitment;

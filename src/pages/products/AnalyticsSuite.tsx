import React from 'react';
import SectionHeading from "@/components/SectionHeading";

const AnalyticsSuite = () => {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Hero Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight">
            Unlock Deeper Insights with Our Analytics Suite
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Transform your data into actionable intelligence. Our analytics suite provides comprehensive tools for data visualization, predictive analysis, and custom reporting.
          </p>
          {/* Call to Action Buttons */}
          <div className="flex space-x-4">
            <button className="bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/90 transition-colors">
              Explore Analytics
            </button>
            <button className="bg-secondary text-secondary-foreground py-3 px-6 rounded-md hover:bg-secondary/80 transition-colors">
              Request a Demo
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div>
          <img
            src="https://via.placeholder.com/600x400"
            alt="Analytics Dashboard"
            className="rounded-lg shadow-md"
          />
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
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Data Visualization</h3>
              <p className="text-muted-foreground">
                Create interactive charts and graphs to explore your data.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Predictive Analysis</h3>
              <p className="text-muted-foreground">
                Forecast future trends and make data-driven decisions.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Custom Reporting</h3>
              <p className="text-muted-foreground">
                Generate detailed reports tailored to your specific needs.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Real-Time Monitoring</h3>
              <p className="text-muted-foreground">
                Track key metrics and performance indicators in real-time.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Data Integration</h3>
              <p className="text-muted-foreground">
                Seamlessly integrate data from multiple sources.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-muted-foreground">
                Utilize advanced statistical techniques for in-depth analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="What Our Clients Say"
            description="See how our analytics suite has helped businesses like yours."
            align="center"
          />
          {/* Testimonial Slider or Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-muted-foreground italic mb-4">
                "The analytics suite has transformed the way we make decisions. We now have real-time insights that drive our business forward."
              </p>
              <h4 className="font-semibold">John Doe</h4>
              <p className="text-sm text-muted-foreground">CEO, Example Company</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-muted-foreground italic mb-4">
                "We've been able to identify key trends and opportunities thanks to the advanced analytics capabilities. It's a game-changer for our team."
              </p>
              <h4 className="font-semibold">Jane Smith</h4>
              <p className="text-sm text-muted-foreground">Marketing Director, Another Company</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8 tracking-tight">
            Ready to Transform Your Data?
          </h2>
          <p className="text-lg text-white/80 mb-12">
            Start your journey towards data-driven success with our analytics suite.
          </p>
          <button className="bg-white text-primary py-3 px-6 rounded-md hover:bg-gray-100 transition-colors">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default AnalyticsSuite;

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import ResumeUploadSection from "@/components/home/ResumeUploadSection";
import { 
  ArrowRight, 
  BrainCircuit, 
  ChartBar, 
  Check, 
  CloudCog, 
  Code, 
  Database,
  Layers, 
  Lock, 
  MessageSquare, 
  PanelRight, 
  UserCheck, 
  Zap,
  Users,
  TrendingUp,
  Shield
} from "lucide-react";
import { motion } from "framer-motion";
import SolutionsOverview from "@/components/home/SolutionsOverview";
import ServiceSteps from "@/components/home/ServiceSteps";
import AIPoweredRecruitment from "@/components/home/AIPoweredRecruitment";
import MissionVision from "@/components/home/MissionVision";
import FeatureHighlights from "@/components/home/FeatureHighlights";
import JobMatchingSelectorDemo from "@/components/home/jobMatching/JobMatchingSelectorDemo";
import JobSearchSelector from "@/components/home/jobSearch/JobSearchSelector";

const Index = () => {
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

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section with Dual Value Proposition */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 -z-10" />
        <div className="absolute inset-0 opacity-20 bg-neural-pattern -z-10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
                AI Workforce Intelligence Platform
              </span>
            </motion.div>
            
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, delay: 0.2 }
                }
              }}
            >
              Where Top Talent Meets{" "}
              <span className="text-gradient">Smart Employers</span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-muted-foreground mb-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, delay: 0.4 }
                }
              }}
            >
              Get discovered by leading companies through our AI-powered talent matching. 
              Skip lengthy applications - let our intelligent system connect you with your dream job automatically.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, delay: 0.6 }
                }
              }}
            >
              <Link to="/marketplace/talent">
                <Button size="lg" className="bg-primary hover:bg-primary/90 group">
                  Submit Your Resume
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                See How It Works
              </Button>
            </motion.div>

            {/* Candidate Benefits */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6, delay: 0.8 }
                }
              }}
            >
              <div className="flex items-center gap-3 bg-white/50 rounded-lg p-4">
                <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="h-5 w-5 text-green-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-sm">Auto-Matching</p>
                  <p className="text-xs text-muted-foreground">Get matched instantly</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/50 rounded-lg p-4">
                <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-sm">100% Confidential</p>
                  <p className="text-xs text-muted-foreground">Your data is secure</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/50 rounded-lg p-4">
                <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-purple-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-sm">Exclusive Jobs</p>
                  <p className="text-xs text-muted-foreground">Access hidden market</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative mt-16 mx-auto max-w-5xl aspect-video rounded-lg overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.8, delay: 0.8 }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 z-10" />
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] z-10" />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <Button variant="outline" size="lg" className="bg-black/30 text-white border-white/30 hover:bg-black/50">
                Watch Video
              </Button>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=1920&q=80" 
              alt="AI Technology" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        
        {/* Enhanced Stats Section with Candidate Focus */}
        <div className="container mx-auto px-4 mt-20">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { label: "Candidates Placed", value: "2,000+" },
              { label: "Partner Companies", value: "200+" },
              { label: "Success Rate", value: "95%" },
              { label: "Avg. Time to Match", value: "3 Days" }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                variants={fadeIn}
              >
                <div className="text-3xl font-display font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Resume Upload Section - Moved Higher */}
      <ResumeUploadSection />

      {/* Candidate Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            eyebrow="Success Stories"
            title="Real People, Real Results"
            description="See how our AI platform has transformed careers and connected top talent with leading companies."
          />
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                quote: "I uploaded my resume and got matched with my dream job at a Fortune 500 company within 48 hours. The AI really understood my skills!",
                author: "Sarah Chen",
                role: "Senior Software Engineer",
                company: "TechCorp"
              },
              {
                quote: "As an employer, finding qualified candidates used to take months. Now we get perfect matches in days. Game changer!",
                author: "Michael Rodriguez",
                role: "VP of Engineering",
                company: "InnovateNow"
              },
              {
                quote: "The platform found opportunities I never would have discovered on my own. My salary increased by 40%!",
                author: "Emma Johnson",
                role: "Data Scientist",
                company: "AI Solutions Inc"
              }
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeIn}>
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  company={testimonial.company}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How Our AI Works for Both Sides */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading 
            eyebrow="How It Works"
            title="Intelligent Matching for Everyone"
            description="Our AI creates win-win connections between exceptional talent and forward-thinking employers."
          />
          
          <div className="max-w-6xl mx-auto mt-16">
            <motion.div 
              className="grid md:grid-cols-2 gap-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {/* For Candidates */}
              <motion.div variants={fadeIn} className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold">For Candidates</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold text-blue-600">1</span>
                    </div>
                    <div>
                      <p className="font-medium">Upload Your Resume</p>
                      <p className="text-sm text-muted-foreground">Our AI analyzes your skills, experience, and career goals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold text-blue-600">2</span>
                    </div>
                    <div>
                      <p className="font-medium">Get Auto-Matched</p>
                      <p className="text-sm text-muted-foreground">Receive perfect job matches based on AI analysis</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold text-blue-600">3</span>
                    </div>
                    <div>
                      <p className="font-medium">Land Your Dream Job</p>
                      <p className="text-sm text-muted-foreground">Connect directly with hiring managers at top companies</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* For Employers */}
              <motion.div variants={fadeIn} className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <BrainCircuit className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold">For Employers</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold text-purple-600">1</span>
                    </div>
                    <div>
                      <p className="font-medium">Define Your Needs</p>
                      <p className="text-sm text-muted-foreground">Specify role requirements and company culture fit</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold text-purple-600">2</span>
                    </div>
                    <div>
                      <p className="font-medium">AI Finds Perfect Matches</p>
                      <p className="text-sm text-muted-foreground">Our algorithm surfaces the best candidates from our talent pool</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold text-purple-600">3</span>
                    </div>
                    <div>
                      <p className="font-medium">Hire Top Talent</p>
                      <p className="text-sm text-muted-foreground">Connect with pre-qualified candidates who fit your exact needs</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Existing sections */}
      <SolutionsOverview />
      <ServiceSteps />
      <AIPoweredRecruitment />
      <MissionVision />
      <FeatureHighlights />
      <JobMatchingSelectorDemo />
      <JobSearchSelector />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Key Capabilities"
            title="Powerful AI Solutions for Every Need"
            description="Our suite of AI-powered tools helps businesses streamline operations, gain insights, and deliver exceptional customer experiences."
          />
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                icon: BrainCircuit,
                title: "AI Decision Intelligence",
                description: "Make smarter decisions with AI-powered analytics and recommendations based on your data."
              },
              {
                icon: MessageSquare,
                title: "Natural Language Processing",
                description: "Understand and generate human language for customer service, content creation, and more."
              },
              {
                icon: ChartBar,
                title: "Predictive Analytics",
                description: "Forecast trends and behaviors with high accuracy to stay ahead of market changes."
              },
              {
                icon: Layers,
                title: "Data Processing",
                description: "Process and analyze massive datasets to uncover hidden patterns and opportunities."
              },
              {
                icon: CloudCog,
                title: "Cloud Integration",
                description: "Seamlessly integrate with existing cloud infrastructure for maximum efficiency."
              },
              {
                icon: Lock,
                title: "Security & Compliance",
                description: "Enterprise-grade security with full compliance with industry regulations."
              }
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeIn}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integrations Preview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading 
            eyebrow="Seamless Connectivity"
            title="Integrate with Your Favorite Tools"
            description="Adept AI connects seamlessly with the tools and platforms you already use."
          />
          
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mt-12 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {Array.from({ length: 8 }).map((_, index) => (
              <motion.div 
                key={index}
                className="w-24 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center p-4"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { 
                    opacity: 1, 
                    scale: 1,
                    transition: { duration: 0.4 }
                  }
                }}
              >
                <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-sm text-gray-500">Logo {index + 1}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="text-center mt-12">
            <Link to="/integrations">
              <Button variant="outline" size="lg" className="group">
                View All Integrations
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <CTASection 
        title="Ready to Transform Your Career or Business?"
        description="Join thousands of professionals and companies already leveraging our AI-powered talent matching platform."
        primaryButtonText="Submit Resume"
        primaryButtonLink="/marketplace/talent"
        secondaryButtonText="Request Demo"
        secondaryButtonLink="/contact"
        background="gradient"
      />
    </div>
  );
};

export default Index;

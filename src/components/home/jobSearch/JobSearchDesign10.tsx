
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Zap, Target, Users, Award, ChevronRight } from "lucide-react";

const JobSearchDesign10 = () => {
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);

  const industries = [
    "Technology", "Healthcare", "Finance", "Education", "Marketing", 
    "Sales", "Engineering", "Design", "Operations", "Consulting"
  ];

  const toggleIndustry = (industry: string) => {
    setSelectedIndustries(prev => 
      prev.includes(industry) 
        ? prev.filter(i => i !== industry)
        : [...prev, industry]
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Unlock Your Career
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Potential
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join the AI revolution in career matching. Get discovered by companies that value your unique skills and ambitions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-full flex-shrink-0">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Lightning-Fast Matching</h3>
                  <p className="text-gray-300">Our AI processes thousands of job requirements in seconds to find your perfect match.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full flex-shrink-0">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Precision Targeting</h3>
                  <p className="text-gray-300">Get matched with roles that align with your career goals and compensation expectations.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 p-3 rounded-full flex-shrink-0">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Elite Network</h3>
                  <p className="text-gray-300">Connect with hiring managers at Fortune 500 companies and innovative startups.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="h-6 w-6" />
                  <h3 className="text-xl font-semibold">Success Guarantee</h3>
                </div>
                <p className="text-sm">95% of our candidates receive interview invitations within the first week.</p>
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Start Your Journey</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-white">First Name</Label>
                      <Input id="firstName" className="mt-1 bg-white/10 border-white/30 text-white placeholder:text-gray-300" />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-white">Last Name</Label>
                      <Input id="lastName" className="mt-1 bg-white/10 border-white/30 text-white placeholder:text-gray-300" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">Email Address</Label>
                    <Input id="email" type="email" className="mt-1 bg-white/10 border-white/30 text-white placeholder:text-gray-300" />
                  </div>
                  <div>
                    <Label htmlFor="profession" className="text-white">Current Profession</Label>
                    <Input id="profession" placeholder="e.g., Software Engineer" className="mt-1 bg-white/10 border-white/30 text-white placeholder:text-gray-300" />
                  </div>
                  <div>
                    <Label className="text-white mb-3 block">Industries of Interest</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {industries.map((industry) => (
                        <button
                          key={industry}
                          type="button"
                          onClick={() => toggleIndustry(industry)}
                          className={`text-sm px-3 py-2 rounded-lg border transition-colors ${
                            selectedIndustries.includes(industry)
                              ? 'bg-cyan-500 border-cyan-500 text-white'
                              : 'bg-white/10 border-white/30 text-gray-300 hover:bg-white/20'
                          }`}
                        >
                          {industry}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="goals" className="text-white">Career Goals</Label>
                    <Textarea 
                      id="goals" 
                      placeholder="Tell us about your career aspirations..."
                      className="mt-1 bg-white/10 border-white/30 text-white placeholder:text-gray-300 min-h-[80px]"
                    />
                  </div>
                  <div>
                    <Label className="text-white mb-2 block">Upload Resume</Label>
                    <div className="border-2 border-dashed border-cyan-400 rounded-lg p-6 text-center bg-cyan-500/10">
                      <Upload className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                      <p className="text-cyan-300 font-medium">Drop your resume here</p>
                      <p className="text-gray-400 text-sm">PDF, DOC, DOCX (Max 10MB)</p>
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white py-3 text-lg font-semibold">
                    Launch My Career
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSearchDesign10;

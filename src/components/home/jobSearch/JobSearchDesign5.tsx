
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, FileText, User, Briefcase } from "lucide-react";

const JobSearchDesign5 = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <section className="py-20 bg-gradient-to-r from-cyan-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Find Your Next Opportunity</h2>
            <p className="text-lg text-gray-600">Complete your profile to get personalized job recommendations</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-gray-50">
                <TabsTrigger value="profile" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Profile
                </TabsTrigger>
                <TabsTrigger value="experience" className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  Experience
                </TabsTrigger>
                <TabsTrigger value="resume" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Resume
                </TabsTrigger>
              </TabsList>

              <div className="p-8">
                <TabsContent value="profile" className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-4">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="location">Current Location</Label>
                      <Input id="location" placeholder="City, State" className="mt-1" />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button onClick={() => setActiveTab("experience")}>
                      Next: Experience
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="experience" className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-4">Professional Experience</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="currentTitle">Current Job Title</Label>
                      <Input id="currentTitle" placeholder="e.g., Senior Software Engineer" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="company">Current Company</Label>
                      <Input id="company" className="mt-1" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="industry">Industry</Label>
                        <select className="w-full mt-1 px-3 py-2 border border-input rounded-md">
                          <option>Technology</option>
                          <option>Finance</option>
                          <option>Healthcare</option>
                          <option>Education</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="salary">Current Salary Range</Label>
                        <select className="w-full mt-1 px-3 py-2 border border-input rounded-md">
                          <option>$40,000 - $60,000</option>
                          <option>$60,000 - $80,000</option>
                          <option>$80,000 - $100,000</option>
                          <option>$100,000+</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="skills">Key Skills (comma separated)</Label>
                      <Input id="skills" placeholder="JavaScript, React, Node.js, etc." className="mt-1" />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline" onClick={() => setActiveTab("profile")}>
                      Previous
                    </Button>
                    <Button onClick={() => setActiveTab("resume")}>
                      Next: Upload Resume
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="resume" className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-4">Upload Your Resume</h3>
                  <div className="border-2 border-dashed border-blue-300 rounded-xl p-12 text-center bg-blue-50">
                    <Upload className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">Drop your resume here</h4>
                    <p className="text-gray-600 mb-6">or click to browse and upload</p>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Choose File
                    </Button>
                    <p className="text-sm text-gray-500 mt-4">Supported formats: PDF, DOC, DOCX (Max 10MB)</p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">What happens next?</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Our AI will analyze your resume and skills</li>
                      <li>• You'll receive personalized job matches within 24 hours</li>
                      <li>• Connect directly with hiring managers</li>
                    </ul>
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline" onClick={() => setActiveTab("experience")}>
                      Previous
                    </Button>
                    <Button className="bg-green-600 hover:bg-green-700">
                      Complete Profile & Find Jobs
                    </Button>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSearchDesign5;

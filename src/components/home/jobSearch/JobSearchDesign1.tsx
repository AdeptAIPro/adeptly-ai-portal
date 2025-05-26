
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Search, Sparkles } from "lucide-react";

const JobSearchDesign1 = () => {
  const [file, setFile] = useState<File | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              <span>AI-Powered Job Matching</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Find Your Dream Job</h2>
            <p className="text-lg text-muted-foreground">Let our AI match you with perfect opportunities</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your full name" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+1 (555) 000-0000" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="skills">Key Skills</Label>
                  <Input id="skills" placeholder="React, Node.js, Python..." className="mt-1" />
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="experience">Experience Level</Label>
                  <select className="w-full mt-1 px-3 py-2 border border-input rounded-md">
                    <option>Entry Level (0-2 years)</option>
                    <option>Mid Level (3-5 years)</option>
                    <option>Senior Level (6-10 years)</option>
                    <option>Expert Level (10+ years)</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="location">Preferred Location</Label>
                  <Input id="location" placeholder="City, State or Remote" className="mt-1" />
                </div>
                <div>
                  <Label>Upload Resume</Label>
                  <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 transition-colors">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Drop your resume here or click to browse</p>
                    <p className="text-xs text-gray-500 mt-1">PDF, DOC, DOCX up to 10MB</p>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  <Search className="mr-2 h-5 w-5" />
                  Find Matching Jobs
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSearchDesign1;

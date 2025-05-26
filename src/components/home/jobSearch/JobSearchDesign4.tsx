
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Target, Users, Zap } from "lucide-react";

const JobSearchDesign4 = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 text-white">
            <h2 className="text-4xl font-bold mb-4">Launch Your Career</h2>
            <p className="text-xl text-gray-300">Join thousands of professionals who found their dream jobs through our platform</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Target className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Precision Matching</h3>
                  <p className="text-gray-300">Our AI analyzes your profile to find perfect job matches</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="bg-green-600 p-3 rounded-full">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Top Companies</h3>
                  <p className="text-gray-300">Connect directly with hiring managers at leading firms</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="bg-purple-600 p-3 rounded-full">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Fast Results</h3>
                  <p className="text-gray-300">Get matched with opportunities within 24 hours</p>
                </div>
              </div>
            </div>

            <Card className="bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-center">Get Started Today</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" className="mt-1" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="profession">Current Role/Profession</Label>
                    <Input id="profession" placeholder="e.g., Software Developer" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="experience">Experience Level</Label>
                    <select className="w-full mt-1 px-3 py-2 border border-input rounded-md">
                      <option>Entry Level</option>
                      <option>Mid Level</option>
                      <option>Senior Level</option>
                      <option>Executive Level</option>
                    </select>
                  </div>
                  <div>
                    <Label>Resume</Label>
                    <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 transition-colors cursor-pointer">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm font-medium">Upload your resume</p>
                      <p className="text-xs text-gray-500">PDF, DOC, DOCX (Max 5MB)</p>
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3">
                    Find My Dream Job
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

export default JobSearchDesign4;

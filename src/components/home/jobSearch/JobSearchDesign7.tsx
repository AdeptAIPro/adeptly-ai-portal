
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Rocket, Brain, Heart } from "lucide-react";

const JobSearchDesign7 = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Heart className="h-4 w-4" />
              Find Work You Love
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Where Passion Meets Opportunity
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI doesn't just match skills - it understands your career aspirations and company culture preferences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-full">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Smart Matching</h3>
                </div>
                <p className="text-gray-600">Our AI analyzes your career trajectory, skills, and preferences to find roles that align with your goals.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-gradient-to-r from-blue-500 to-teal-500 p-3 rounded-full">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Career Growth</h3>
                </div>
                <p className="text-gray-600">We don't just find you a job - we help you discover career paths that lead to long-term success and satisfaction.</p>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-3">Success Stories</h3>
                <blockquote className="text-sm italic">
                  "I found my dream job in just 3 days! The AI understood exactly what I was looking for in terms of company culture and growth opportunities."
                </blockquote>
                <cite className="text-xs mt-2 block opacity-90">- Sarah K., Software Engineer</cite>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Tell Us About Yourself</h3>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" className="mt-1" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" className="mt-1" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="currentRole">Current Role</Label>
                  <Input id="currentRole" placeholder="e.g., Marketing Manager" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="dreamJob">Dream Job/Role</Label>
                  <Input id="dreamJob" placeholder="What's your ideal position?" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="values">What matters most to you in a job?</Label>
                  <Textarea 
                    id="values" 
                    placeholder="e.g., work-life balance, growth opportunities, company mission..." 
                    className="mt-1 min-h-[80px]" 
                  />
                </div>
                <div>
                  <Label>Resume Upload</Label>
                  <div className="mt-1 border-2 border-dashed border-pink-300 rounded-lg p-6 text-center bg-pink-50">
                    <Upload className="h-8 w-8 text-pink-500 mx-auto mb-2" />
                    <p className="text-sm font-medium text-pink-700">Upload your resume</p>
                    <p className="text-xs text-pink-600">PDF, DOC, DOCX (Max 5MB)</p>
                  </div>
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white py-3">
                  Find My Perfect Match
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSearchDesign7;

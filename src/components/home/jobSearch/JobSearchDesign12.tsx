
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Briefcase, Globe, Award, TrendingUp } from "lucide-react";

const JobSearchDesign12 = () => {
  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%234F46E5" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold mb-8">
              Next-Gen Career Platform
            </div>
            <h2 className="text-7xl font-black mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              FUTURE OF HIRING
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              Where artificial intelligence meets human potential. Experience the most advanced career matching technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="bg-gray-900 border-purple-500 border-2 shadow-2xl shadow-purple-500/20">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-bold mb-8 text-purple-400">Neural Network Application</h3>
                  <form className="space-y-8">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="fullName" className="text-white text-lg">Full Name</Label>
                        <Input 
                          id="fullName" 
                          className="mt-2 h-14 bg-black border-purple-500 border-2 text-white text-lg placeholder:text-gray-400" 
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-white text-lg">Email</Label>
                        <Input 
                          id="email" 
                          type="email"
                          className="mt-2 h-14 bg-black border-purple-500 border-2 text-white text-lg placeholder:text-gray-400" 
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="role" className="text-white text-lg">Target Role</Label>
                      <Input 
                        id="role" 
                        className="mt-2 h-14 bg-black border-purple-500 border-2 text-white text-lg placeholder:text-gray-400" 
                        placeholder="e.g., AI Engineer, Data Scientist"
                      />
                    </div>

                    <div>
                      <Label htmlFor="skills" className="text-white text-lg">Core Technologies</Label>
                      <Input 
                        id="skills" 
                        className="mt-2 h-14 bg-black border-purple-500 border-2 text-white text-lg placeholder:text-gray-400" 
                        placeholder="Python, TensorFlow, React..."
                      />
                    </div>

                    <div className="border-2 border-dashed border-purple-500 rounded-xl p-8 text-center bg-purple-900/20">
                      <Upload className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                      <p className="text-xl font-bold text-purple-300 mb-2">Neural Resume Analysis</p>
                      <p className="text-purple-400">Advanced AI will analyze your experience</p>
                    </div>

                    <Button className="w-full h-16 text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 border-0">
                      Activate AI Matching
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-2xl">
                <Award className="h-12 w-12 text-white mb-4" />
                <h3 className="text-2xl font-bold mb-3">AI Precision</h3>
                <p className="text-purple-100">99.7% accuracy in role matching using advanced neural networks</p>
              </div>

              <div className="bg-gradient-to-br from-pink-600 to-purple-600 p-8 rounded-2xl">
                <TrendingUp className="h-12 w-12 text-white mb-4" />
                <h3 className="text-2xl font-bold mb-3">Career Growth</h3>
                <p className="text-pink-100">Average 45% salary increase for our placed candidates</p>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-8 rounded-2xl">
                <Globe className="h-12 w-12 text-white mb-4" />
                <h3 className="text-2xl font-bold mb-3">Global Reach</h3>
                <p className="text-blue-100">Connected with 10,000+ companies worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSearchDesign12;

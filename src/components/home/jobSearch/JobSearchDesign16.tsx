
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Leaf, Sun, Wind, Mountain } from "lucide-react";

const JobSearchDesign16 = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-100 via-teal-50 to-blue-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-300 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-blue-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-teal-300 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold mb-8">
              <Leaf className="h-6 w-6" />
              Organic Career Growth
            </div>
            <h2 className="text-6xl font-bold mb-8 text-gray-800">
              Grow Your Career
              <span className="block text-green-600 font-black">Naturally</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Like nature, the best careers grow organically. Let us help you plant the seeds of your success in the right environment.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-green-200">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <Sun className="h-10 w-10 text-yellow-500" />
                  <h3 className="text-3xl font-bold text-gray-800">Plant Your Profile</h3>
                </div>
                
                <form className="space-y-8">
                  <div>
                    <Label htmlFor="name" className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                      <span>🌱</span> Full Name
                    </Label>
                    <Input 
                      id="name" 
                      className="mt-3 h-14 text-lg border-2 border-green-200 rounded-2xl focus:border-green-400 transition-colors" 
                      placeholder="Your name here"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                      <span>💧</span> Email Address
                    </Label>
                    <Input 
                      id="email" 
                      type="email"
                      className="mt-3 h-14 text-lg border-2 border-green-200 rounded-2xl focus:border-green-400 transition-colors" 
                      placeholder="water.your.career@growth.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="field" className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                      <span>🌿</span> Your Field of Growth
                    </Label>
                    <select className="w-full mt-3 h-14 px-4 text-lg border-2 border-green-200 rounded-2xl focus:border-green-400 transition-colors bg-white">
                      <option>Technology & Innovation</option>
                      <option>Creative & Design</option>
                      <option>Business & Strategy</option>
                      <option>Healthcare & Wellness</option>
                      <option>Education & Learning</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="stage" className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                      <span>🌳</span> Growth Stage
                    </Label>
                    <select className="w-full mt-3 h-14 px-4 text-lg border-2 border-green-200 rounded-2xl focus:border-green-400 transition-colors bg-white">
                      <option>Seedling (Entry Level)</option>
                      <option>Sapling (Mid Level)</option>
                      <option>Growing Tree (Senior Level)</option>
                      <option>Mighty Oak (Executive Level)</option>
                    </select>
                  </div>

                  <div className="border-4 border-dashed border-green-300 rounded-3xl p-10 text-center bg-green-50/50">
                    <Upload className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <p className="text-xl font-bold text-green-700 mb-2">🌺 Share Your Story</p>
                    <p className="text-green-600">Upload your resume to let your experience blossom</p>
                  </div>
                </form>
              </div>

              <div className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-700 mb-4">🌈 Your Growth Environment</h3>
                </div>

                <Card className="bg-gradient-to-br from-blue-100 to-teal-100 border-0">
                  <CardContent className="p-8">
                    <Wind className="h-12 w-12 text-blue-500 mb-4" />
                    <h4 className="text-xl font-bold mb-3 text-blue-700">Fresh Opportunities</h4>
                    <p className="text-blue-600">New positions that match your natural talents and aspirations</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-100 to-emerald-100 border-0">
                  <CardContent className="p-8">
                    <Mountain className="h-12 w-12 text-green-500 mb-4" />
                    <h4 className="text-xl font-bold mb-3 text-green-700">Stable Foundation</h4>
                    <p className="text-green-600">Companies with strong values and sustainable growth</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-yellow-100 to-orange-100 border-0">
                  <CardContent className="p-8">
                    <Sun className="h-12 w-12 text-yellow-500 mb-4" />
                    <h4 className="text-xl font-bold mb-3 text-yellow-700">Nurturing Culture</h4>
                    <p className="text-yellow-600">Workplaces that help you flourish and reach your potential</p>
                  </CardContent>
                </Card>

                <Button className="w-full h-16 text-xl font-bold bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 hover:from-green-600 hover:via-teal-600 hover:to-blue-600 rounded-2xl">
                  🌟 Begin Your Growth Journey
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSearchDesign16;

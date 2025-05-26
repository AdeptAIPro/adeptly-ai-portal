
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Rocket, Orbit, Satellite, Star } from "lucide-react";

const JobSearchDesign17 = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-indigo-900 via-purple-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-purple-300 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-pink-300 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-40 right-20 w-1 h-1 bg-cyan-300 rounded-full animate-pulse delay-1500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-xl font-bold mb-8">
              <Rocket className="h-8 w-8" />
              Mission Control
            </div>
            <h2 className="text-7xl font-black mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              LAUNCH YOUR CAREER
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              Houston, we have a solution! Blast off to new career heights with our interstellar job matching technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-black/60 backdrop-blur-sm border border-cyan-500 rounded-3xl p-10 shadow-2xl shadow-cyan-500/20">
                <div className="flex items-center gap-4 mb-8">
                  <Satellite className="h-12 w-12 text-cyan-400" />
                  <h3 className="text-3xl font-bold text-cyan-300">Astronaut Registration</h3>
                </div>

                <form className="space-y-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="callSign" className="text-cyan-300 text-lg font-semibold">Call Sign</Label>
                      <Input 
                        id="callSign" 
                        className="mt-3 h-14 bg-indigo-900/50 border-cyan-500 border-2 text-white text-lg placeholder:text-gray-400" 
                        placeholder="Commander John"
                      />
                    </div>
                    <div>
                      <Label htmlFor="transmission" className="text-cyan-300 text-lg font-semibold">Transmission Frequency</Label>
                      <Input 
                        id="transmission" 
                        type="email"
                        className="mt-3 h-14 bg-indigo-900/50 border-cyan-500 border-2 text-white text-lg placeholder:text-gray-400" 
                        placeholder="commander@space.station"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="mission" className="text-cyan-300 text-lg font-semibold">Mission Specialization</Label>
                    <select className="w-full mt-3 h-14 px-4 bg-indigo-900/50 border-cyan-500 border-2 text-white text-lg rounded-md">
                      <option value="">Select your mission</option>
                      <option value="engineering">🛸 Space Engineering</option>
                      <option value="data">📡 Data Communications</option>
                      <option value="research">🔬 Research & Development</option>
                      <option value="exploration">🌌 Deep Space Exploration</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="coordinates" className="text-cyan-300 text-lg font-semibold">Current Coordinates</Label>
                    <Input 
                      id="coordinates" 
                      className="mt-3 h-14 bg-indigo-900/50 border-cyan-500 border-2 text-white text-lg placeholder:text-gray-400" 
                      placeholder="New York, Earth"
                    />
                  </div>

                  <div>
                    <Label htmlFor="skills" className="text-cyan-300 text-lg font-semibold">Technical Equipment</Label>
                    <Input 
                      id="skills" 
                      className="mt-3 h-14 bg-indigo-900/50 border-cyan-500 border-2 text-white text-lg placeholder:text-gray-400" 
                      placeholder="React, Python, AI Systems..."
                    />
                  </div>

                  <div className="border-4 border-dashed border-pink-500 rounded-2xl p-10 text-center bg-pink-900/20">
                    <Upload className="h-16 w-16 text-pink-400 mx-auto mb-4" />
                    <p className="text-xl font-bold text-pink-300 mb-2">🚀 Upload Mission Log</p>
                    <p className="text-pink-400">Your resume is your space exploration history</p>
                  </div>

                  <Button className="w-full h-16 text-2xl font-bold bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 rounded-xl">
                    🌟 Initiate Launch Sequence
                  </Button>
                </form>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-cyan-600 to-blue-600 border-0 text-white">
                <CardContent className="p-8">
                  <Orbit className="h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Orbital Network</h3>
                  <p className="text-cyan-100 mb-4">Connected to 500+ space stations</p>
                  <div className="text-3xl font-bold">∞</div>
                  <div className="text-cyan-200">Possibilities</div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-600 to-pink-600 border-0 text-white">
                <CardContent className="p-8">
                  <Star className="h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Star Rating</h3>
                  <p className="text-purple-100 mb-4">Mission success rate</p>
                  <div className="text-3xl font-bold">99.9%</div>
                  <div className="text-purple-200">Successful Launches</div>
                </CardContent>
              </Card>

              <div className="bg-gradient-to-br from-indigo-800 to-purple-800 p-8 rounded-2xl border border-purple-500">
                <h4 className="text-xl font-bold mb-4 text-purple-300">Mission Briefing</h4>
                <ul className="space-y-3 text-purple-100">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>Zero gravity career advancement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>Interplanetary collaboration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Cosmic compensation packages</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSearchDesign17;

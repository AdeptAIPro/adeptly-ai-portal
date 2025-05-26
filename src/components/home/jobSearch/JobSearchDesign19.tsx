
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Coffee, Book, Lightbulb, Heart } from "lucide-react";

const JobSearchDesign19 = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-amber-600 text-white px-6 py-3 rounded-full text-lg font-semibold mb-8">
              <Coffee className="h-6 w-6" />
              Cozy Career Corner
            </div>
            <h2 className="text-5xl font-bold mb-8 text-gray-800 leading-tight">
              Find Your Perfect
              <span className="block text-amber-600 font-black text-6xl">Work-Life Blend</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Like your favorite coffee blend, the perfect job should feel just right. Warm, comfortable, and energizing.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-amber-100">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-6 text-white">
              <div className="flex items-center gap-4">
                <Book className="h-10 w-10" />
                <h3 className="text-2xl font-bold">Your Career Story</h3>
              </div>
            </div>
            
            <div className="p-12">
              <form className="space-y-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <Label htmlFor="name" className="text-lg font-semibold text-gray-700 mb-3 block">
                      ☕ What should we call you?
                    </Label>
                    <Input 
                      id="name" 
                      className="h-14 text-lg border-2 border-amber-200 rounded-xl focus:border-amber-400 transition-colors shadow-sm" 
                      placeholder="Your friendly name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-lg font-semibold text-gray-700 mb-3 block">
                      📧 How can we reach you?
                    </Label>
                    <Input 
                      id="email" 
                      type="email"
                      className="h-14 text-lg border-2 border-amber-200 rounded-xl focus:border-amber-400 transition-colors shadow-sm" 
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="currentRole" className="text-lg font-semibold text-gray-700 mb-3 block">
                    💼 What do you do right now?
                  </Label>
                  <Input 
                    id="currentRole" 
                    className="h-14 text-lg border-2 border-amber-200 rounded-xl focus:border-amber-400 transition-colors shadow-sm" 
                    placeholder="Your current role or what you'd like to do"
                  />
                </div>

                <div>
                  <Label htmlFor="workStyle" className="text-lg font-semibold text-gray-700 mb-3 block">
                    🏡 What's your ideal work style?
                  </Label>
                  <select className="w-full h-14 px-4 text-lg border-2 border-amber-200 rounded-xl focus:border-amber-400 transition-colors shadow-sm bg-white">
                    <option>Cozy home office (Remote)</option>
                    <option>Bustling office environment</option>
                    <option>Mix of both (Hybrid)</option>
                    <option>Coffee shop nomad</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="values" className="text-lg font-semibold text-gray-700 mb-3 block">
                    💭 What matters most to you in work?
                  </Label>
                  <Textarea 
                    id="values" 
                    className="text-lg border-2 border-amber-200 rounded-xl focus:border-amber-400 transition-colors shadow-sm min-h-[120px] resize-none" 
                    placeholder="Tell us about your work values, what motivates you, what kind of culture you thrive in..."
                  />
                </div>

                <div>
                  <Label htmlFor="schedule" className="text-lg font-semibold text-gray-700 mb-3 block">
                    ⏰ When do you do your best work?
                  </Label>
                  <select className="w-full h-14 px-4 text-lg border-2 border-amber-200 rounded-xl focus:border-amber-400 transition-colors shadow-sm bg-white">
                    <option>Early bird (Traditional 9-5)</option>
                    <option>Night owl (Flexible hours)</option>
                    <option>Burst worker (Project-based)</option>
                    <option>Steady pacer (Consistent schedule)</option>
                  </select>
                </div>

                <div className="bg-gradient-to-r from-amber-100 to-orange-100 border-4 border-dashed border-amber-300 rounded-2xl p-10 text-center">
                  <Upload className="h-16 w-16 text-amber-600 mx-auto mb-4" />
                  <p className="text-xl font-bold text-amber-700 mb-2">📋 Share Your Journey</p>
                  <p className="text-amber-600 text-lg">Upload your resume - think of it as your career diary</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 my-10">
                  <div className="text-center p-6 bg-amber-50 rounded-2xl">
                    <Heart className="h-10 w-10 text-red-500 mx-auto mb-3" />
                    <h4 className="font-bold text-gray-700">Made with Love</h4>
                    <p className="text-gray-600 text-sm">Personal attention to every application</p>
                  </div>
                  <div className="text-center p-6 bg-orange-50 rounded-2xl">
                    <Lightbulb className="h-10 w-10 text-yellow-500 mx-auto mb-3" />
                    <h4 className="font-bold text-gray-700">Bright Ideas</h4>
                    <p className="text-gray-600 text-sm">Innovative matching algorithms</p>
                  </div>
                  <div className="text-center p-6 bg-red-50 rounded-2xl">
                    <Coffee className="h-10 w-10 text-amber-600 mx-auto mb-3" />
                    <h4 className="font-bold text-gray-700">Comfort First</h4>
                    <p className="text-gray-600 text-sm">Companies that care about your wellbeing</p>
                  </div>
                </div>

                <Button className="w-full h-16 text-xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-600 hover:via-orange-600 hover:to-red-600 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300">
                  ☕ Brew My Perfect Career Match
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSearchDesign19;

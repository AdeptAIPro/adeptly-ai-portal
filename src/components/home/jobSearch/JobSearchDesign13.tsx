
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Heart, Coffee, Music, Camera } from "lucide-react";

const JobSearchDesign13 = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-100 via-yellow-50 to-green-100">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-pink-500 text-white px-6 py-3 rounded-full text-lg font-bold mb-6">
              <Heart className="h-6 w-6" />
              Find Work You Love
            </div>
            <h2 className="text-5xl font-bold mb-6 text-gray-800">
              Work Should Feel Like
              <span className="block text-pink-500 font-black text-6xl">Play!</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Life's too short for boring jobs. Let's find you something amazing that makes you excited to wake up every Monday!
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-12 border-8 border-pink-200">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold mb-8 text-pink-600">Tell Us About You!</h3>
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-lg font-semibold flex items-center gap-2">
                      <span>👋</span> What's your name?
                    </Label>
                    <Input id="name" className="mt-2 h-12 text-lg border-2 border-pink-200 rounded-xl" placeholder="Your awesome name here!" />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-lg font-semibold flex items-center gap-2">
                      <span>📧</span> Email address
                    </Label>
                    <Input id="email" type="email" className="mt-2 h-12 text-lg border-2 border-pink-200 rounded-xl" placeholder="your.email@awesome.com" />
                  </div>

                  <div>
                    <Label htmlFor="passion" className="text-lg font-semibold flex items-center gap-2">
                      <span>🔥</span> What makes you passionate?
                    </Label>
                    <Input id="passion" className="mt-2 h-12 text-lg border-2 border-pink-200 rounded-xl" placeholder="Coding, designing, teaching..." />
                  </div>

                  <div>
                    <Label htmlFor="dream" className="text-lg font-semibold flex items-center gap-2">
                      <span>✨</span> Dream job description
                    </Label>
                    <Textarea 
                      id="dream" 
                      className="mt-2 text-lg border-2 border-pink-200 rounded-xl min-h-[100px]" 
                      placeholder="Describe your perfect workday..."
                    />
                  </div>

                  <div className="border-4 border-dashed border-yellow-300 rounded-2xl p-8 text-center bg-yellow-50">
                    <Upload className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                    <p className="text-xl font-bold text-yellow-700 mb-2">📄 Share Your Story</p>
                    <p className="text-yellow-600">Upload your resume and let your experience shine!</p>
                  </div>
                </form>
              </div>

              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-6 text-gray-700">Why You'll Love It Here</h3>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-2xl">
                    <Coffee className="h-10 w-10 text-pink-500" />
                    <div>
                      <h4 className="font-bold text-lg">Work-Life Balance</h4>
                      <p className="text-gray-600">Companies that actually care about your wellbeing</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-2xl">
                    <Music className="h-10 w-10 text-green-500" />
                    <div>
                      <h4 className="font-bold text-lg">Creative Freedom</h4>
                      <p className="text-gray-600">Express yourself and bring new ideas to life</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 bg-gradient-to-r from-yellow-100 to-orange-100 p-6 rounded-2xl">
                    <Camera className="h-10 w-10 text-yellow-500" />
                    <div>
                      <h4 className="font-bold text-lg">Growth Opportunities</h4>
                      <p className="text-gray-600">Level up your skills and advance your career</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full h-16 text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 rounded-2xl">
                  🚀 Let's Find Your Dream Job!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSearchDesign13;

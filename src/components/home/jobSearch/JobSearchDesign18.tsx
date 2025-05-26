
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Brush, Palette, Sparkles, Rainbow } from "lucide-react";

const JobSearchDesign18 = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-pink-300 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute top-60 right-32 w-40 h-40 bg-purple-300 rounded-full blur-3xl opacity-60 animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-36 h-36 bg-indigo-300 rounded-full blur-3xl opacity-60 animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-8 py-4 rounded-full text-xl font-bold mb-8">
              <Palette className="h-8 w-8" />
              Creative Canvas
            </div>
            <h2 className="text-7xl font-black mb-8 text-gray-800">
              Paint Your
              <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                CAREER MASTERPIECE
              </span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto">
              Every great artist needs the perfect canvas. Let us help you create your career masterpiece with companies that appreciate your creativity.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border-4 border-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-border">
            <div className="bg-white rounded-2xl p-10">
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <Brush className="h-12 w-12 text-purple-600" />
                    <h3 className="text-3xl font-bold text-gray-800">Artist Profile</h3>
                  </div>
                  
                  <form className="space-y-8">
                    <div>
                      <Label htmlFor="artistName" className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                        <span>🎨</span> Artist Name
                      </Label>
                      <Input 
                        id="artistName" 
                        className="mt-3 h-14 text-lg border-4 border-pink-200 rounded-2xl focus:border-pink-400 transition-all duration-300 shadow-lg" 
                        placeholder="Your creative identity"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="gallery" className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                        <span>🖼️</span> Gallery Contact
                      </Label>
                      <Input 
                        id="gallery" 
                        type="email"
                        className="mt-3 h-14 text-lg border-4 border-purple-200 rounded-2xl focus:border-purple-400 transition-all duration-300 shadow-lg" 
                        placeholder="artist@creative.studio"
                      />
                    </div>

                    <div>
                      <Label htmlFor="medium" className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                        <span>🖌️</span> Creative Medium
                      </Label>
                      <select className="w-full mt-3 h-14 px-4 text-lg border-4 border-indigo-200 rounded-2xl focus:border-indigo-400 transition-all duration-300 shadow-lg bg-white">
                        <option>Digital Arts & Design</option>
                        <option>Content & Storytelling</option>
                        <option>Marketing & Branding</option>
                        <option>Product & UX Design</option>
                        <option>Creative Technology</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="style" className="text-lg font-semibold text-gray-700 flex items-center gap-2">
                        <span>✨</span> Artistic Style
                      </Label>
                      <select className="w-full mt-3 h-14 px-4 text-lg border-4 border-pink-200 rounded-2xl focus:border-pink-400 transition-all duration-300 shadow-lg bg-white">
                        <option>Bold & Innovative</option>
                        <option>Classic & Refined</option>
                        <option>Experimental & Cutting-edge</option>
                        <option>Minimalist & Clean</option>
                      </select>
                    </div>

                    <div className="border-6 border-dashed border-rainbow rounded-3xl p-10 text-center bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50">
                      <Upload className="h-16 w-16 text-purple-500 mx-auto mb-4" />
                      <p className="text-xl font-bold text-purple-700 mb-2">🌈 Showcase Your Portfolio</p>
                      <p className="text-purple-600">Upload your creative resume and let your work speak</p>
                    </div>
                  </form>
                </div>

                <div className="space-y-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-700 mb-4">🎭 Your Creative Universe</h3>
                  </div>

                  <Card className="bg-gradient-to-br from-pink-100 to-pink-200 border-0 shadow-lg">
                    <CardContent className="p-8 text-center">
                      <Rainbow className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                      <h4 className="text-xl font-bold mb-3 text-pink-700">Vibrant Opportunities</h4>
                      <p className="text-pink-600">Companies that celebrate creative expression and innovation</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-purple-100 to-purple-200 border-0 shadow-lg">
                    <CardContent className="p-8 text-center">
                      <Sparkles className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                      <h4 className="text-xl font-bold mb-3 text-purple-700">Inspiring Culture</h4>
                      <p className="text-purple-600">Workplaces that nurture creativity and artistic vision</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-indigo-100 to-indigo-200 border-0 shadow-lg">
                    <CardContent className="p-8 text-center">
                      <Brush className="h-12 w-12 text-indigo-500 mx-auto mb-4" />
                      <h4 className="text-xl font-bold mb-3 text-indigo-700">Creative Freedom</h4>
                      <p className="text-indigo-600">Freedom to experiment and push creative boundaries</p>
                    </CardContent>
                  </Card>

                  <Button className="w-full h-16 text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
                    🎨 Create Your Masterpiece
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSearchDesign18;

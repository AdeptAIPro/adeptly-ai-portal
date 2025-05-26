
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Gamepad2, Trophy, Target, Star } from "lucide-react";

const JobSearchDesign15 = () => {
  const [points, setPoints] = useState(0);
  const [level, setLevel] = useState(1);

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-green-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23FBBF24" fill-opacity="0.1"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zM0 0h40v40H0V0z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-4 rounded-full text-xl font-bold mb-8">
              <Gamepad2 className="h-8 w-8" />
              Career Quest
            </div>
            <h2 className="text-7xl font-black mb-8 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              LEVEL UP YOUR CAREER
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              Turn your job search into an epic adventure. Complete quests, earn rewards, and unlock your dream career!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-black/50 backdrop-blur-sm border-2 border-yellow-500 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-bold text-yellow-400">Player Profile Setup</h3>
                  <div className="flex items-center gap-4">
                    <div className="bg-yellow-500 text-black px-4 py-2 rounded-full font-bold">
                      Level {level}
                    </div>
                    <div className="bg-green-500 text-black px-4 py-2 rounded-full font-bold">
                      {points} XP
                    </div>
                  </div>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="playerName" className="text-yellow-300 text-lg font-semibold">Player Name</Label>
                      <Input 
                        id="playerName" 
                        className="mt-2 h-14 bg-gray-900 border-yellow-500 border-2 text-white text-lg placeholder:text-gray-400" 
                        placeholder="Enter your hero name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-yellow-300 text-lg font-semibold">Contact Portal</Label>
                      <Input 
                        id="email" 
                        type="email"
                        className="mt-2 h-14 bg-gray-900 border-yellow-500 border-2 text-white text-lg placeholder:text-gray-400" 
                        placeholder="hero@adventure.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="class" className="text-yellow-300 text-lg font-semibold">Character Class</Label>
                    <select className="w-full mt-2 h-14 px-4 bg-gray-900 border-yellow-500 border-2 text-white text-lg rounded-md">
                      <option value="">Choose your class</option>
                      <option value="developer">🧙‍♂️ Code Wizard</option>
                      <option value="designer">🎨 Design Paladin</option>
                      <option value="manager">⚔️ Strategy Knight</option>
                      <option value="analyst">📊 Data Sage</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="skills" className="text-yellow-300 text-lg font-semibold">Special Abilities</Label>
                    <Input 
                      id="skills" 
                      className="mt-2 h-14 bg-gray-900 border-yellow-500 border-2 text-white text-lg placeholder:text-gray-400" 
                      placeholder="JavaScript, React, Python..."
                    />
                  </div>

                  <div className="border-4 border-dashed border-orange-500 rounded-xl p-8 text-center bg-orange-900/30">
                    <Upload className="h-16 w-16 text-orange-400 mx-auto mb-4" />
                    <p className="text-xl font-bold text-orange-300 mb-2">🏆 Upload Character Sheet</p>
                    <p className="text-orange-400">Your resume is your character's backstory</p>
                  </div>

                  <Button className="w-full h-16 text-2xl font-bold bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-black">
                    🚀 Start Your Quest!
                  </Button>
                </form>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-yellow-600 to-orange-600 p-8 rounded-2xl text-black">
                <Trophy className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Achievement Unlocked!</h3>
                <p className="font-medium">Join 100,000+ career adventurers</p>
              </div>

              <div className="bg-gradient-to-br from-green-600 to-teal-600 p-8 rounded-2xl">
                <Target className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Daily Quests</h3>
                <ul className="space-y-2 text-green-100">
                  <li>✅ Upload resume (+100 XP)</li>
                  <li>🎯 Complete profile (+200 XP)</li>
                  <li>🌟 Get first match (+500 XP)</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 rounded-2xl">
                <Star className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Power-Ups</h3>
                <p className="text-purple-100">Unlock premium features as you level up your career!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSearchDesign15;

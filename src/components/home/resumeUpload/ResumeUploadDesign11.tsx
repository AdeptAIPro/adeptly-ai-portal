
import { Button } from "@/components/ui/button";
import { Upload, Gamepad2, Trophy, Star } from "lucide-react";

const ResumeUploadDesign11 = () => {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-green-900 text-white rounded-2xl p-8 border-4 border-yellow-500">
      <div className="text-center mb-8">
        <Gamepad2 className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
        <h3 className="text-3xl font-bold mb-2">Career Quest 🎮</h3>
        <p className="text-purple-200">Level up your professional journey!</p>
      </div>
      
      <div className="flex justify-center gap-4 mb-6">
        <div className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
          Level 1
        </div>
        <div className="bg-green-500 text-black px-3 py-1 rounded-full text-sm font-bold">
          0 XP
        </div>
      </div>
      
      <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold py-3 mb-6">
        🎯 Start Your Quest!
      </Button>
      
      <div className="text-center text-purple-200 mb-4">— OR —</div>
      
      <div className="border-4 border-dashed border-yellow-400 rounded-xl p-6 text-center bg-yellow-900/20">
        <Upload className="h-12 w-12 text-yellow-400 mx-auto mb-3" />
        <p className="text-lg font-bold text-yellow-300 mb-2">📋 Upload Character Sheet</p>
        <p className="text-yellow-400">Your resume unlocks new abilities!</p>
        <p className="text-sm text-purple-300 mt-2">PDF, DOC, DOCX (MAX. 5MB)</p>
      </div>
      
      <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 border-2 border-yellow-400">
        🏆 Upload & Earn XP!
      </Button>
      
      <div className="mt-6 grid grid-cols-3 gap-2 text-center text-xs">
        <div className="bg-yellow-500/20 rounded p-2">
          <Trophy className="h-4 w-4 text-yellow-400 mx-auto mb-1" />
          <span>Achievements</span>
        </div>
        <div className="bg-green-500/20 rounded p-2">
          <Star className="h-4 w-4 text-green-400 mx-auto mb-1" />
          <span>Rewards</span>
        </div>
        <div className="bg-blue-500/20 rounded p-2">
          <Gamepad2 className="h-4 w-4 text-blue-400 mx-auto mb-1" />
          <span>Challenges</span>
        </div>
      </div>
    </div>
  );
};

export default ResumeUploadDesign11;

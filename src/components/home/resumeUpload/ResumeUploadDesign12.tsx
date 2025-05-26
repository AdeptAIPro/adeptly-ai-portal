
import { Button } from "@/components/ui/button";
import { Upload, Rocket, Satellite, Star } from "lucide-react";

const ResumeUploadDesign12 = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-900 via-purple-900 to-black text-white rounded-2xl p-8 relative overflow-hidden">
      <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
      <div className="absolute top-12 left-8 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-8 right-8 w-1 h-1 bg-purple-300 rounded-full animate-pulse delay-2000"></div>
      
      <div className="text-center mb-8 relative z-10">
        <Rocket className="h-16 w-16 text-cyan-400 mx-auto mb-4" />
        <h3 className="text-3xl font-bold mb-2">🚀 Mission: Career Launch</h3>
        <p className="text-gray-300">Houston, we have your next opportunity!</p>
      </div>
      
      <Button className="w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 py-3 mb-6">
        🌟 Explore Space Opportunities
      </Button>
      
      <div className="text-center text-gray-300 mb-4">— Mission Control —</div>
      
      <div className="border-4 border-dashed border-cyan-500 rounded-xl p-6 text-center bg-cyan-900/20">
        <Upload className="h-12 w-12 text-cyan-400 mx-auto mb-3" />
        <p className="text-lg font-bold text-cyan-300 mb-2">📡 Transmit Mission Log</p>
        <p className="text-cyan-400">Upload your space exploration history</p>
        <p className="text-sm text-gray-400 mt-2">PDF, DOC, DOCX (MAX. 5MB)</p>
      </div>
      
      <Button className="w-full mt-4 bg-cyan-600 hover:bg-cyan-700 border border-cyan-400">
        🛸 Initiate Upload Sequence
      </Button>
      
      <div className="mt-6 grid grid-cols-3 gap-2 text-center text-xs">
        <div className="flex flex-col items-center">
          <Satellite className="h-4 w-4 text-cyan-400 mb-1" />
          <span>Connected</span>
        </div>
        <div className="flex flex-col items-center">
          <Star className="h-4 w-4 text-yellow-400 mb-1" />
          <span>Elite Network</span>
        </div>
        <div className="flex flex-col items-center">
          <Rocket className="h-4 w-4 text-purple-400 mb-1" />
          <span>Fast Track</span>
        </div>
      </div>
    </div>
  );
};

export default ResumeUploadDesign12;

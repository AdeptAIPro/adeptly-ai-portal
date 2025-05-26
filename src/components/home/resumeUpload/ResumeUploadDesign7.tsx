
import { Button } from "@/components/ui/button";
import { Upload, Rocket, Target, TrendingUp } from "lucide-react";

const ResumeUploadDesign7 = () => {
  return (
    <div className="bg-gradient-to-br from-purple-900 to-blue-900 text-white rounded-2xl p-8">
      <div className="text-center mb-8">
        <Rocket className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
        <h3 className="text-3xl font-bold mb-2">Launch Your Career</h3>
        <p className="text-purple-200">Submit your resume to blast off!</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white/10 rounded-lg p-4 text-center">
          <Target className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
          <p className="text-sm font-bold">Precision Matching</p>
        </div>
        <div className="bg-white/10 rounded-lg p-4 text-center">
          <TrendingUp className="h-6 w-6 text-green-400 mx-auto mb-2" />
          <p className="text-sm font-bold">Career Growth</p>
        </div>
      </div>
      
      <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 mb-6">
        🚀 Explore Talent Marketplace
      </Button>
      
      <div className="text-center text-purple-200 mb-4">— OR —</div>
      
      <div className="border-2 border-dashed border-purple-400 rounded-xl p-6 text-center bg-purple-800/30">
        <Upload className="h-12 w-12 text-purple-300 mx-auto mb-3" />
        <p className="text-lg text-purple-100 mb-2">Upload Mission Profile</p>
        <p className="text-sm text-purple-300">PDF, DOC, DOCX (MAX. 5MB)</p>
      </div>
      
      <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 border border-purple-400">
        Initialize Upload
      </Button>
    </div>
  );
};

export default ResumeUploadDesign7;

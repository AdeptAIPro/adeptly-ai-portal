
import { Button } from "@/components/ui/button";
import { Upload, Sparkles, Heart, Rainbow } from "lucide-react";

const ResumeUploadDesign20 = () => {
  return (
    <div className="bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300 rounded-3xl p-8">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
        <div className="text-center mb-8">
          <div className="flex justify-center gap-2 mb-4">
            <Rainbow className="h-8 w-8 text-pink-500" />
            <Sparkles className="h-8 w-8 text-purple-500" />
            <Heart className="h-8 w-8 text-red-500" />
          </div>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            ✨ Magical Career Portal
          </h3>
          <p className="text-gray-600">Where dreams meet opportunities</p>
        </div>
        
        <Button className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white font-bold py-3 mb-6">
          🌈 Discover Magical Opportunities
        </Button>
        
        <div className="flex items-center justify-center mb-6">
          <div className="flex-1 border-t-2 border-gradient-to-r from-pink-300 to-purple-300"></div>
          <span className="mx-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">
            ✨ or cast your spell
          </span>
          <div className="flex-1 border-t-2 border-gradient-to-r from-purple-300 to-indigo-300"></div>
        </div>
        
        <div className="border-4 border-dashed border-purple-300 rounded-2xl p-8 text-center bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50">
          <Upload className="h-12 w-12 text-purple-500 mx-auto mb-4" />
          <p className="text-xl font-bold text-purple-700 mb-2">🌟 Share Your Magic Story</p>
          <p className="text-purple-600">Let your experience sparkle and shine</p>
          <p className="text-sm text-gray-500 mt-2">PDF, DOC, DOCX (MAX. 5MB)</p>
        </div>
        
        <Button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold">
          ✨ Upload & Make Magic!
        </Button>
        
        <div className="mt-6 text-center text-sm text-gray-600">
          🌈 Believe in yourself • Dream big • Make it happen ✨
        </div>
      </div>
    </div>
  );
};

export default ResumeUploadDesign20;

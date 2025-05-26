
import { Button } from "@/components/ui/button";
import { Upload, Heart, Coffee, Sparkles } from "lucide-react";

const ResumeUploadDesign8 = () => {
  return (
    <div className="bg-gradient-to-br from-pink-100 to-yellow-100 rounded-3xl p-8 border-4 border-pink-200">
      <div className="text-center mb-6">
        <div className="flex justify-center gap-2 mb-4">
          <Heart className="h-8 w-8 text-pink-500" />
          <Coffee className="h-8 w-8 text-yellow-600" />
          <Sparkles className="h-8 w-8 text-purple-500" />
        </div>
        <h3 className="text-3xl font-bold text-gray-800 mb-2">Find Your Dream Job! 💫</h3>
        <p className="text-gray-600">Let's make work feel like play</p>
      </div>
      
      <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
        <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-3 mb-4">
          ✨ Explore Amazing Opportunities
        </Button>
        
        <div className="flex items-center justify-center mb-4">
          <span className="text-gray-500 bg-gray-100 px-4 py-1 rounded-full">or</span>
        </div>
        
        <div className="border-4 border-dashed border-pink-300 rounded-2xl p-6 text-center bg-pink-50 hover:bg-pink-100 transition-colors">
          <Upload className="h-12 w-12 text-pink-500 mx-auto mb-3" />
          <p className="text-lg font-bold text-pink-700 mb-2">Share your story! 📄</p>
          <p className="text-pink-600">PDF, DOC, DOCX (MAX. 5MB)</p>
        </div>
        
        <Button className="w-full mt-4 bg-pink-500 hover:bg-pink-600 text-white">
          Upload Resume 🎉
        </Button>
      </div>
      
      <div className="text-center text-sm text-gray-600">
        Made with ❤️ for amazing people like you!
      </div>
    </div>
  );
};

export default ResumeUploadDesign8;

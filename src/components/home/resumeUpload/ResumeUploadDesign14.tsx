
import { Button } from "@/components/ui/button";
import { Upload, Coffee, Heart, Book } from "lucide-react";

const ResumeUploadDesign14 = () => {
  return (
    <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 rounded-3xl p-8 border-4 border-amber-200">
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="text-center mb-8">
          <div className="flex justify-center gap-3 mb-4">
            <Coffee className="h-8 w-8 text-amber-600" />
            <Heart className="h-8 w-8 text-red-500" />
            <Book className="h-8 w-8 text-orange-600" />
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mb-2">☕ Your Cozy Career Corner</h3>
          <p className="text-gray-600">Find work that feels like home</p>
        </div>
        
        <Button className="w-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-600 hover:via-orange-600 hover:to-red-600 text-white py-3 mb-6">
          🏡 Discover Cozy Opportunities
        </Button>
        
        <div className="flex items-center justify-center mb-6">
          <div className="flex-1 border-t border-amber-300"></div>
          <span className="mx-4 text-amber-700 bg-amber-100 px-4 py-2 rounded-full text-sm font-semibold">or share your story</span>
          <div className="flex-1 border-t border-amber-300"></div>
        </div>
        
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 border-4 border-dashed border-amber-300 rounded-2xl p-8 text-center">
          <Upload className="h-12 w-12 text-amber-600 mx-auto mb-4" />
          <p className="text-lg font-bold text-amber-700 mb-2">📖 Share Your Journey</p>
          <p className="text-amber-600">Tell us about your professional adventure</p>
          <p className="text-sm text-gray-500 mt-2">PDF, DOC, DOCX (MAX. 5MB)</p>
        </div>
        
        <Button className="w-full mt-6 bg-amber-500 hover:bg-amber-600 text-white">
          ☕ Upload & Get Cozy
        </Button>
        
        <div className="mt-6 grid grid-cols-3 gap-4 text-center text-sm">
          <div className="bg-amber-50 rounded p-3">
            <Heart className="h-5 w-5 text-red-500 mx-auto mb-1" />
            <span className="text-gray-600">Made with Love</span>
          </div>
          <div className="bg-orange-50 rounded p-3">
            <Coffee className="h-5 w-5 text-amber-600 mx-auto mb-1" />
            <span className="text-gray-600">Comfort First</span>
          </div>
          <div className="bg-red-50 rounded p-3">
            <Book className="h-5 w-5 text-orange-600 mx-auto mb-1" />
            <span className="text-gray-600">Your Story</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeUploadDesign14;


import { Button } from "@/components/ui/button";
import { Upload, Palette, Brush, Sparkles } from "lucide-react";

const ResumeUploadDesign13 = () => {
  return (
    <div className="bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 rounded-3xl p-8 border-4 border-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-border">
      <div className="bg-white rounded-2xl p-6">
        <div className="text-center mb-8">
          <div className="flex justify-center gap-2 mb-4">
            <Palette className="h-8 w-8 text-pink-500" />
            <Brush className="h-8 w-8 text-purple-500" />
            <Sparkles className="h-8 w-8 text-indigo-500" />
          </div>
          <h3 className="text-3xl font-bold text-gray-800 mb-2">🎨 Paint Your Career Canvas</h3>
          <p className="text-gray-600">Create your masterpiece opportunity</p>
        </div>
        
        <Button className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white py-3 mb-6">
          ✨ Explore Creative Opportunities
        </Button>
        
        <div className="flex items-center justify-center mb-6">
          <div className="flex-1 border-t-2 border-pink-300"></div>
          <span className="mx-4 text-purple-600 bg-purple-100 px-3 py-1 rounded-full text-sm font-semibold">or create</span>
          <div className="flex-1 border-t-2 border-indigo-300"></div>
        </div>
        
        <div className="border-4 border-dashed border-purple-300 rounded-2xl p-8 text-center bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50">
          <Upload className="h-12 w-12 text-purple-500 mx-auto mb-4" />
          <p className="text-lg font-bold text-purple-700 mb-2">🖼️ Showcase Your Portfolio</p>
          <p className="text-purple-600">Let your creativity shine through</p>
          <p className="text-sm text-gray-500 mt-2">PDF, DOC, DOCX (MAX. 5MB)</p>
        </div>
        
        <Button className="w-full mt-6 bg-purple-500 hover:bg-purple-600 text-white">
          🎨 Upload Your Masterpiece
        </Button>
        
        <div className="mt-6 text-center text-sm text-gray-600">
          Express yourself • Be authentic • Create magic
        </div>
      </div>
    </div>
  );
};

export default ResumeUploadDesign13;

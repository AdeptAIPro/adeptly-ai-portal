
import { Button } from "@/components/ui/button";
import { Upload, Leaf, Sun, Mountain } from "lucide-react";

const ResumeUploadDesign10 = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 border-2 border-green-200">
      <div className="text-center mb-8">
        <div className="flex justify-center gap-3 mb-4">
          <Leaf className="h-8 w-8 text-green-500" />
          <Sun className="h-8 w-8 text-yellow-500" />
          <Mountain className="h-8 w-8 text-blue-500" />
        </div>
        <h3 className="text-3xl font-bold text-gray-800 mb-2">Grow Your Career Naturally 🌱</h3>
        <p className="text-gray-600">Organic career development</p>
      </div>
      
      <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white py-3 mb-6">
        🌿 Explore Career Garden
      </Button>
      
      <div className="flex items-center justify-center mb-6">
        <div className="flex-1 border-t border-green-300"></div>
        <span className="mx-4 text-green-600 bg-green-100 px-3 py-1 rounded-full text-sm">or plant your seed</span>
        <div className="flex-1 border-t border-green-300"></div>
      </div>
      
      <div className="bg-white border-2 border-dashed border-green-300 rounded-2xl p-8 text-center hover:border-green-500 transition-colors">
        <Upload className="h-12 w-12 text-green-500 mx-auto mb-4" />
        <p className="text-lg font-semibold text-green-700 mb-2">Plant Your Resume 🌱</p>
        <p className="text-green-600">Watch your career bloom</p>
        <p className="text-sm text-gray-500 mt-2">PDF, DOC, DOCX (MAX. 5MB)</p>
      </div>
      
      <Button className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white">
        🌟 Start Growing
      </Button>
      
      <div className="mt-6 text-center text-sm text-green-700">
        🌿 Nurturing careers since 2020 🌿
      </div>
    </div>
  );
};

export default ResumeUploadDesign10;

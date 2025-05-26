
import { Button } from "@/components/ui/button";
import { Upload, Shield, Users, Clock } from "lucide-react";

const ResumeUploadDesign2 = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-800 mb-2">Submit Your Resume</h3>
        <p className="text-gray-600">Join thousands of successful candidates</p>
      </div>
      
      <Button className="w-full mb-6 bg-green-600 hover:bg-green-700 text-lg py-3">
        Explore Talent Marketplace →
      </Button>
      
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">OR</span>
        </div>
      </div>
      
      <div className="mt-6 border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-green-400 transition-colors">
        <Upload className="h-10 w-10 text-gray-400 mx-auto mb-3" />
        <p className="text-center text-gray-600 mb-2">Click to upload or drag and drop</p>
        <p className="text-center text-sm text-gray-500">PDF, DOC, DOCX (MAX. 5MB)</p>
      </div>
      
      <Button className="w-full mt-4 border border-green-600 text-green-600 hover:bg-green-50">
        Upload Resume
      </Button>
      
      <div className="grid grid-cols-3 gap-4 mt-6 text-center">
        <div className="flex flex-col items-center">
          <Shield className="h-6 w-6 text-green-600 mb-1" />
          <span className="text-xs text-gray-600">Confidential</span>
        </div>
        <div className="flex flex-col items-center">
          <Users className="h-6 w-6 text-blue-600 mb-1" />
          <span className="text-xs text-gray-600">2000+ Placements</span>
        </div>
        <div className="flex flex-col items-center">
          <Clock className="h-6 w-6 text-purple-600 mb-1" />
          <span className="text-xs text-gray-600">48hr Response</span>
        </div>
      </div>
    </div>
  );
};

export default ResumeUploadDesign2;

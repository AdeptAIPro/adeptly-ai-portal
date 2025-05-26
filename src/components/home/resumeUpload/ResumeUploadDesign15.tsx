
import { Button } from "@/components/ui/button";
import { Upload, Zap, Target, Shield } from "lucide-react";

const ResumeUploadDesign15 = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg p-8 border border-gray-700">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Professional Resume Portal</h3>
        <p className="text-gray-300">Enterprise-grade career matching</p>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 text-center">
          <Zap className="h-6 w-6 text-blue-400 mx-auto mb-2" />
          <p className="text-xs text-gray-300">Lightning Fast</p>
        </div>
        <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 text-center">
          <Target className="h-6 w-6 text-green-400 mx-auto mb-2" />
          <p className="text-xs text-gray-300">Precision Match</p>
        </div>
        <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 text-center">
          <Shield className="h-6 w-6 text-purple-400 mx-auto mb-2" />
          <p className="text-xs text-gray-300">Secure & Private</p>
        </div>
      </div>
      
      <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-6 py-3">
        Access Professional Network →
      </Button>
      
      <div className="border-t border-gray-600 my-6 relative">
        <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gray-800 px-3 text-gray-400 text-sm">
          OR
        </span>
      </div>
      
      <div className="bg-gray-800 border border-gray-600 border-dashed rounded-lg p-6 text-center">
        <Upload className="h-10 w-10 text-gray-400 mx-auto mb-3" />
        <p className="text-gray-300 mb-2">Secure Document Upload</p>
        <p className="text-sm text-gray-500">PDF, DOC, DOCX (MAX. 5MB)</p>
      </div>
      
      <Button variant="outline" className="w-full mt-4 border-gray-600 text-gray-300 hover:bg-gray-700">
        Upload Resume
      </Button>
      
      <div className="mt-6 text-center text-xs text-gray-500">
        Bank-level encryption • GDPR compliant • SOC 2 certified
      </div>
    </div>
  );
};

export default ResumeUploadDesign15;

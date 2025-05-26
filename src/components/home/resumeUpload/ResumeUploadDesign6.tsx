
import { Button } from "@/components/ui/button";
import { Upload, CheckCircle } from "lucide-react";

const ResumeUploadDesign6 = () => {
  return (
    <div className="bg-white rounded-xl shadow-2xl p-8 border-t-4 border-green-500">
      <div className="flex items-center justify-center mb-6">
        <div className="bg-green-100 p-3 rounded-full">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-2">Submit Your Resume</h3>
      <p className="text-center text-gray-600 mb-8">Join our success stories</p>
      
      <div className="space-y-4">
        <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg">
          Explore Talent Marketplace
        </Button>
        
        <div className="flex items-center justify-center">
          <div className="border-t w-16 border-gray-300"></div>
          <span className="mx-4 text-gray-500 bg-white px-2">OR</span>
          <div className="border-t w-16 border-gray-300"></div>
        </div>
        
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-500 transition-colors cursor-pointer">
          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-lg font-medium text-gray-700 mb-2">Drag & drop your resume</p>
          <p className="text-sm text-gray-500">or click to browse</p>
          <p className="text-xs text-gray-400 mt-2">PDF, DOC, DOCX (MAX. 5MB)</p>
        </div>
        
        <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-50">
          Browse Files
        </Button>
      </div>
      
      <div className="mt-6 bg-green-50 rounded-lg p-4">
        <ul className="text-sm text-green-700 space-y-1">
          <li>✓ Confidential until you choose to share</li>
          <li>✓ Only relevant opportunities</li>
          <li>✓ Free career insights</li>
        </ul>
      </div>
    </div>
  );
};

export default ResumeUploadDesign6;

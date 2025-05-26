
import { Button } from "@/components/ui/button";
import { Upload, ArrowRight } from "lucide-react";

const ResumeUploadDesign4 = () => {
  return (
    <div className="bg-black text-white rounded-lg p-8 border border-gray-800">
      <h3 className="text-2xl font-bold mb-6 text-center">Submit Your Resume</h3>
      
      <div className="space-y-4">
        <Button className="w-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center gap-2 py-3">
          <span>Explore Talent Marketplace</span>
          <ArrowRight className="h-5 w-5" />
        </Button>
        
        <div className="flex items-center gap-4">
          <div className="flex-1 border-t border-gray-600"></div>
          <span className="text-gray-400 text-sm">OR</span>
          <div className="flex-1 border-t border-gray-600"></div>
        </div>
        
        <div className="border border-gray-600 border-dashed rounded-lg p-6 text-center hover:border-purple-500 transition-colors">
          <Upload className="h-12 w-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-300 mb-1">Click to upload or drag and drop</p>
          <p className="text-gray-500 text-sm">PDF, DOC, DOCX (MAX. 5MB)</p>
        </div>
        
        <Button variant="outline" className="w-full border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white">
          Upload Resume
        </Button>
      </div>
      
      <div className="mt-6 flex justify-center space-x-6 text-xs text-gray-400">
        <span>✓ Your resume stays confidential</span>
        <span>✓ No spam</span>
        <span>✓ Free analysis</span>
      </div>
    </div>
  );
};

export default ResumeUploadDesign4;


import { Button } from "@/components/ui/button";
import { Upload, Star } from "lucide-react";

const ResumeUploadDesign3 = () => {
  return (
    <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl p-8 border-4 border-orange-200">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full mb-4">
          <Star className="h-5 w-5" />
          <span className="font-bold">Premium Service</span>
        </div>
        <h3 className="text-3xl font-black text-gray-800">Submit Your Resume</h3>
      </div>
      
      <div className="bg-white rounded-2xl p-6 shadow-xl mb-6">
        <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-lg py-3 mb-4">
          🚀 Explore Talent Marketplace
        </Button>
        
        <div className="text-center text-gray-500 mb-4 font-medium">OR</div>
        
        <div className="border-4 border-dashed border-orange-300 rounded-2xl p-8 text-center bg-orange-50">
          <Upload className="h-16 w-16 text-orange-500 mx-auto mb-4" />
          <p className="text-xl font-bold text-orange-700 mb-2">Drop your resume here</p>
          <p className="text-orange-600">PDF, DOC, DOCX (MAX. 5MB)</p>
        </div>
        
        <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white">
          Upload Now
        </Button>
      </div>
      
      <div className="text-center text-sm text-gray-600">
        ✓ Confidential ✓ No Spam ✓ Expert Analysis
      </div>
    </div>
  );
};

export default ResumeUploadDesign3;

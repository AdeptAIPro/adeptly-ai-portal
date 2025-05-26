
import { Button } from "@/components/ui/button";
import { Upload, Building, Globe, Users } from "lucide-react";

const ResumeUploadDesign19 = () => {
  return (
    <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
      <div className="text-center mb-8">
        <Building className="h-12 w-12 text-gray-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Corporate Talent Portal</h3>
        <p className="text-gray-600">Connect with Fortune 500 companies</p>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="text-center p-4 bg-white rounded-lg border">
          <Globe className="h-6 w-6 text-blue-600 mx-auto mb-2" />
          <p className="text-xs font-medium text-gray-700">Global</p>
          <p className="text-xs text-gray-500">Network</p>
        </div>
        <div className="text-center p-4 bg-white rounded-lg border">
          <Users className="h-6 w-6 text-green-600 mx-auto mb-2" />
          <p className="text-xs font-medium text-gray-700">Expert</p>
          <p className="text-xs text-gray-500">Matching</p>
        </div>
        <div className="text-center p-4 bg-white rounded-lg border">
          <Building className="h-6 w-6 text-purple-600 mx-auto mb-2" />
          <p className="text-xs font-medium text-gray-700">Top</p>
          <p className="text-xs text-gray-500">Companies</p>
        </div>
      </div>
      
      <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 mb-6">
        Access Corporate Network →
      </Button>
      
      <div className="border-t border-gray-300 my-6 relative">
        <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gray-50 px-3 text-gray-500 text-sm">
          OR
        </span>
      </div>
      
      <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
        <Upload className="h-10 w-10 text-gray-400 mx-auto mb-3" />
        <p className="text-gray-700 font-medium mb-2">Upload Professional Resume</p>
        <p className="text-sm text-gray-500">PDF, DOC, DOCX (MAX. 5MB)</p>
      </div>
      
      <Button variant="outline" className="w-full mt-4 border-gray-400 text-gray-700 hover:bg-gray-100">
        Select Document
      </Button>
      
      <div className="mt-6 text-center text-xs text-gray-500">
        Confidential • Professional • Trusted by 500+ enterprises
      </div>
    </div>
  );
};

export default ResumeUploadDesign19;

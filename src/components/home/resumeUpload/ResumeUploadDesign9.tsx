
import { Button } from "@/components/ui/button";
import { Upload, Shield, Zap, Award } from "lucide-react";

const ResumeUploadDesign9 = () => {
  return (
    <div className="bg-slate-800 text-white rounded-lg p-8 border border-slate-600">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Executive Placement Portal</h3>
        <p className="text-slate-300">Confidential & Professional</p>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="text-center">
          <Shield className="h-6 w-6 text-blue-400 mx-auto mb-2" />
          <p className="text-xs text-slate-300">Secure</p>
        </div>
        <div className="text-center">
          <Zap className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
          <p className="text-xs text-slate-300">Fast</p>
        </div>
        <div className="text-center">
          <Award className="h-6 w-6 text-green-400 mx-auto mb-2" />
          <p className="text-xs text-slate-300">Premium</p>
        </div>
      </div>
      
      <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-6 py-3">
        Access Talent Network →
      </Button>
      
      <div className="border-t border-slate-600 my-6 relative">
        <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-slate-800 px-3 text-slate-400 text-sm">
          OR
        </span>
      </div>
      
      <div className="border border-slate-600 border-dashed rounded-lg p-6 text-center">
        <Upload className="h-10 w-10 text-slate-400 mx-auto mb-3" />
        <p className="text-slate-300 mb-2">Upload Resume</p>
        <p className="text-sm text-slate-500">PDF, DOC, DOCX (MAX. 5MB)</p>
      </div>
      
      <Button variant="outline" className="w-full mt-4 border-slate-600 text-slate-300 hover:bg-slate-700">
        Select File
      </Button>
    </div>
  );
};

export default ResumeUploadDesign9;

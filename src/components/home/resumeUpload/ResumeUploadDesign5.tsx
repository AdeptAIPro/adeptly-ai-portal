
import { Button } from "@/components/ui/button";
import { Upload, Users, Zap, Award } from "lucide-react";

const ResumeUploadDesign5 = () => {
  return (
    <div className="bg-gradient-to-t from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-indigo-800 mb-2">Submit Your Resume</h3>
        <p className="text-indigo-600">Get matched with your dream job</p>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="text-center">
          <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
          <p className="text-sm font-semibold text-gray-700">2000+</p>
          <p className="text-xs text-gray-600">Placements</p>
        </div>
        <div className="text-center">
          <Zap className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
          <p className="text-sm font-semibold text-gray-700">48hrs</p>
          <p className="text-xs text-gray-600">Response</p>
        </div>
        <div className="text-center">
          <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
          <p className="text-sm font-semibold text-gray-700">95%</p>
          <p className="text-xs text-gray-600">Success Rate</p>
        </div>
      </div>
      
      <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white mb-6 py-3">
        Explore Talent Marketplace →
      </Button>
      
      <div className="text-center text-gray-500 mb-4">— OR —</div>
      
      <div className="bg-white border-2 border-dashed border-indigo-300 rounded-xl p-6 text-center">
        <Upload className="h-12 w-12 text-indigo-500 mx-auto mb-3" />
        <p className="text-gray-700 mb-2">Upload your resume</p>
        <p className="text-sm text-gray-500">PDF, DOC, DOCX (MAX. 5MB)</p>
      </div>
      
      <Button variant="outline" className="w-full mt-4 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white">
        Choose File
      </Button>
    </div>
  );
};

export default ResumeUploadDesign5;

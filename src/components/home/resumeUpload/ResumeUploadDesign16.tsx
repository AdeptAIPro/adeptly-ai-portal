
import { Button } from "@/components/ui/button";
import { Upload, Clock, Users, Star } from "lucide-react";

const ResumeUploadDesign16 = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border-l-8 border-blue-500">
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-blue-100 p-3 rounded-full">
          <Star className="h-8 w-8 text-blue-600" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-800">Submit Your Resume</h3>
          <p className="text-gray-600">Fast-track to your next role</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
          <p className="text-sm font-bold text-gray-700">2,000+</p>
          <p className="text-xs text-gray-600">Success Stories</p>
        </div>
        <div className="bg-green-50 rounded-lg p-4 text-center">
          <Clock className="h-6 w-6 text-green-600 mx-auto mb-2" />
          <p className="text-sm font-bold text-gray-700">48 Hours</p>
          <p className="text-xs text-gray-600">Avg Response</p>
        </div>
      </div>
      
      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 mb-6">
        Explore Talent Marketplace →
      </Button>
      
      <div className="text-center text-gray-500 mb-4 font-medium">OR</div>
      
      <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 text-center hover:border-blue-500 hover:bg-blue-50 transition-all">
        <Upload className="h-10 w-10 text-blue-500 mx-auto mb-3" />
        <p className="font-medium text-gray-700 mb-2">Drop your resume here</p>
        <p className="text-sm text-gray-500">PDF, DOC, DOCX (MAX. 5MB)</p>
      </div>
      
      <Button variant="outline" className="w-full mt-4 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
        Browse Files
      </Button>
    </div>
  );
};

export default ResumeUploadDesign16;

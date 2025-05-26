
import { Button } from "@/components/ui/button";
import { Upload, ArrowUp, TrendingUp, Award } from "lucide-react";

const ResumeUploadDesign17 = () => {
  return (
    <div className="bg-gradient-to-t from-blue-600 to-indigo-700 text-white rounded-xl p-8">
      <div className="text-center mb-8">
        <ArrowUp className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
        <h3 className="text-3xl font-bold mb-2">Elevate Your Career</h3>
        <p className="text-blue-100">Rise to new professional heights</p>
      </div>
      
      <div className="flex justify-around mb-8">
        <div className="text-center">
          <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-2" />
          <p className="text-sm font-bold">Growth</p>
        </div>
        <div className="text-center">
          <Award className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
          <p className="text-sm font-bold">Excellence</p>
        </div>
        <div className="text-center">
          <ArrowUp className="h-8 w-8 text-purple-400 mx-auto mb-2" />
          <p className="text-sm font-bold">Progress</p>
        </div>
      </div>
      
      <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 mb-6">
        🚀 Explore Elite Opportunities
      </Button>
      
      <div className="text-center text-blue-200 mb-4">— OR —</div>
      
      <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 text-center bg-blue-800/50">
        <Upload className="h-12 w-12 text-blue-200 mx-auto mb-3" />
        <p className="text-lg text-blue-100 mb-2">Elevate Your Profile</p>
        <p className="text-sm text-blue-300">PDF, DOC, DOCX (MAX. 5MB)</p>
      </div>
      
      <Button className="w-full mt-4 bg-blue-500 hover:bg-blue-400 border border-blue-300">
        Upload & Ascend
      </Button>
    </div>
  );
};

export default ResumeUploadDesign17;


import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

const ResumeUploadDesign1 = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-2xl text-white">
      <h3 className="text-2xl font-bold mb-4">Submit Your Resume</h3>
      <Button className="w-full mb-6 bg-white text-blue-600 hover:bg-gray-100">
        Explore Talent Marketplace →
      </Button>
      <div className="text-center text-white/80 mb-4">OR</div>
      <div className="border-2 border-dashed border-white/50 rounded-xl p-8 text-center">
        <Upload className="h-12 w-12 mx-auto mb-4 text-white/80" />
        <p className="text-lg mb-2">Click to upload or drag and drop</p>
        <p className="text-sm text-white/60">PDF, DOC, DOCX (MAX. 5MB)</p>
      </div>
      <Button className="w-full mt-6 bg-white/20 hover:bg-white/30 border border-white/30">
        Upload Resume
      </Button>
    </div>
  );
};

export default ResumeUploadDesign1;

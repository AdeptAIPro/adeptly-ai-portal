
import { Button } from "@/components/ui/button";
import { Upload, Gift, Smile, Star } from "lucide-react";

const ResumeUploadDesign18 = () => {
  return (
    <div className="bg-gradient-to-br from-yellow-100 to-pink-100 rounded-3xl p-8 border-4 border-yellow-300">
      <div className="text-center mb-8">
        <div className="flex justify-center gap-2 mb-4">
          <Gift className="h-8 w-8 text-pink-500" />
          <Smile className="h-8 w-8 text-yellow-500" />
          <Star className="h-8 w-8 text-purple-500" />
        </div>
        <h3 className="text-3xl font-bold text-gray-800 mb-2">Your Career Gift Box! 🎁</h3>
        <p className="text-gray-600">Unwrap amazing opportunities</p>
      </div>
      
      <div className="bg-white rounded-2xl p-6 shadow-lg border-4 border-yellow-200">
        <Button className="w-full bg-gradient-to-r from-yellow-400 to-pink-400 hover:from-yellow-500 hover:to-pink-500 text-white font-bold py-3 mb-6">
          🎉 Open Gift Box of Jobs!
        </Button>
        
        <div className="text-center mb-4">
          <span className="bg-gradient-to-r from-yellow-400 to-pink-400 text-white px-4 py-2 rounded-full text-sm font-bold">
            Special Delivery ✨
          </span>
        </div>
        
        <div className="border-4 border-dashed border-pink-300 rounded-2xl p-8 text-center bg-pink-50">
          <Upload className="h-12 w-12 text-pink-500 mx-auto mb-4" />
          <p className="text-xl font-bold text-pink-700 mb-2">🎁 Wrap Your Resume</p>
          <p className="text-pink-600">Let's package your talents beautifully!</p>
          <p className="text-sm text-gray-500 mt-2">PDF, DOC, DOCX (MAX. 5MB)</p>
        </div>
        
        <Button className="w-full mt-6 bg-pink-500 hover:bg-pink-600 text-white font-bold">
          🌟 Send My Gift!
        </Button>
      </div>
      
      <div className="mt-6 text-center text-sm text-gray-600">
        🎊 Every upload is a celebration of your potential! 🎊
      </div>
    </div>
  );
};

export default ResumeUploadDesign18;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ResumeUploadDesign1 from "./ResumeUploadDesign1";
import ResumeUploadDesign2 from "./ResumeUploadDesign2";
import ResumeUploadDesign3 from "./ResumeUploadDesign3";
import ResumeUploadDesign4 from "./ResumeUploadDesign4";
import ResumeUploadDesign5 from "./ResumeUploadDesign5";
import ResumeUploadDesign6 from "./ResumeUploadDesign6";
import ResumeUploadDesign7 from "./ResumeUploadDesign7";
import ResumeUploadDesign8 from "./ResumeUploadDesign8";
import ResumeUploadDesign9 from "./ResumeUploadDesign9";
import ResumeUploadDesign10 from "./ResumeUploadDesign10";
import ResumeUploadDesign11 from "./ResumeUploadDesign11";
import ResumeUploadDesign12 from "./ResumeUploadDesign12";
import ResumeUploadDesign13 from "./ResumeUploadDesign13";
import ResumeUploadDesign14 from "./ResumeUploadDesign14";
import ResumeUploadDesign15 from "./ResumeUploadDesign15";
import ResumeUploadDesign16 from "./ResumeUploadDesign16";
import ResumeUploadDesign17 from "./ResumeUploadDesign17";
import ResumeUploadDesign18 from "./ResumeUploadDesign18";
import ResumeUploadDesign19 from "./ResumeUploadDesign19";
import ResumeUploadDesign20 from "./ResumeUploadDesign20";

const ResumeUploadSelector = () => {
  const [currentDesign, setCurrentDesign] = useState(1);

  const designs = [
    { id: 1, name: "Gradient Modern", component: ResumeUploadDesign1 },
    { id: 2, name: "Professional Clean", component: ResumeUploadDesign2 },
    { id: 3, name: "Premium Bold", component: ResumeUploadDesign3 },
    { id: 4, name: "Dark Tech", component: ResumeUploadDesign4 },
    { id: 5, name: "Stats Focused", component: ResumeUploadDesign5 },
    { id: 6, name: "Success Oriented", component: ResumeUploadDesign6 },
    { id: 7, name: "Space Mission", component: ResumeUploadDesign7 },
    { id: 8, name: "Playful Fun", component: ResumeUploadDesign8 },
    { id: 9, name: "Executive Suite", component: ResumeUploadDesign9 },
    { id: 10, name: "Nature Growth", component: ResumeUploadDesign10 },
    { id: 11, name: "Gaming Quest", component: ResumeUploadDesign11 },
    { id: 12, name: "Cosmic Launch", component: ResumeUploadDesign12 },
    { id: 13, name: "Creative Canvas", component: ResumeUploadDesign13 },
    { id: 14, name: "Cozy Corner", component: ResumeUploadDesign14 },
    { id: 15, name: "Enterprise Pro", component: ResumeUploadDesign15 },
    { id: 16, name: "Success Metrics", component: ResumeUploadDesign16 },
    { id: 17, name: "Career Elevation", component: ResumeUploadDesign17 },
    { id: 18, name: "Gift Box Joy", component: ResumeUploadDesign18 },
    { id: 19, name: "Corporate Network", component: ResumeUploadDesign19 },
    { id: 20, name: "Magical Dreams", component: ResumeUploadDesign20 }
  ];

  const currentDesignData = designs.find(d => d.id === currentDesign);
  const CurrentComponent = currentDesignData?.component || ResumeUploadDesign1;

  const nextDesign = () => {
    setCurrentDesign(prev => prev >= 20 ? 1 : prev + 1);
  };

  const prevDesign = () => {
    setCurrentDesign(prev => prev <= 1 ? 20 : prev - 1);
  };

  return (
    <div className="relative">
      {/* Design Navigation */}
      <div className="fixed top-1/2 left-4 transform -translate-y-1/2 z-50 bg-white rounded-lg shadow-lg p-2">
        <div className="flex flex-col gap-2">
          <Button 
            onClick={prevDesign} 
            size="sm" 
            variant="outline"
            className="p-2"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="text-center py-2 px-3 bg-purple-50 rounded text-sm font-medium">
            {currentDesign}/20
          </div>
          <Button 
            onClick={nextDesign} 
            size="sm" 
            variant="outline"
            className="p-2"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Design Title */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
        Resume Upload Design {currentDesign}: {currentDesignData?.name}
      </div>

      {/* Design Grid Navigation */}
      <div className="fixed top-4 right-4 z-50 bg-white rounded-lg shadow-lg p-4 max-w-xs">
        <h4 className="text-sm font-semibold mb-3 text-gray-700">Quick Jump</h4>
        <div className="grid grid-cols-5 gap-1">
          {designs.map((design) => (
            <button
              key={design.id}
              onClick={() => setCurrentDesign(design.id)}
              className={`w-8 h-8 text-xs font-bold rounded transition-colors ${
                currentDesign === design.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {design.id}
            </button>
          ))}
        </div>
      </div>

      {/* Current Design Component */}
      <div className="max-w-lg mx-auto">
        <CurrentComponent />
      </div>
    </div>
  );
};

export default ResumeUploadSelector;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import JobSearchDesign1 from "./JobSearchDesign1";
import JobSearchDesign2 from "./JobSearchDesign2";
import JobSearchDesign3 from "./JobSearchDesign3";
import JobSearchDesign4 from "./JobSearchDesign4";
import JobSearchDesign5 from "./JobSearchDesign5";
import JobSearchDesign6 from "./JobSearchDesign6";
import JobSearchDesign7 from "./JobSearchDesign7";
import JobSearchDesign8 from "./JobSearchDesign8";
import JobSearchDesign9 from "./JobSearchDesign9";
import JobSearchDesign10 from "./JobSearchDesign10";
import JobSearchDesign11 from "./JobSearchDesign11";
import JobSearchDesign12 from "./JobSearchDesign12";
import JobSearchDesign13 from "./JobSearchDesign13";
import JobSearchDesign14 from "./JobSearchDesign14";
import JobSearchDesign15 from "./JobSearchDesign15";
import JobSearchDesign16 from "./JobSearchDesign16";
import JobSearchDesign17 from "./JobSearchDesign17";
import JobSearchDesign18 from "./JobSearchDesign18";
import JobSearchDesign19 from "./JobSearchDesign19";
import JobSearchDesign20 from "./JobSearchDesign20";

const JobSearchSelector = () => {
  const [currentDesign, setCurrentDesign] = useState(1);

  const designs = [
    { id: 1, name: "Gradient Form", component: JobSearchDesign1 },
    { id: 2, name: "Step-by-Step", component: JobSearchDesign2 },
    { id: 3, name: "Skills Focused", component: JobSearchDesign3 },
    { id: 4, name: "Dark Hero", component: JobSearchDesign4 },
    { id: 5, name: "Tabbed Layout", component: JobSearchDesign5 },
    { id: 6, name: "Split Layout", component: JobSearchDesign6 },
    { id: 7, name: "Passion Focused", component: JobSearchDesign7 },
    { id: 8, name: "Preference Based", component: JobSearchDesign8 },
    { id: 9, name: "Progress Tracker", component: JobSearchDesign9 },
    { id: 10, name: "Career Potential", component: JobSearchDesign10 },
    { id: 11, name: "Elite Accelerator", component: JobSearchDesign11 },
    { id: 12, name: "Future Tech", component: JobSearchDesign12 },
    { id: 13, name: "Playful & Fun", component: JobSearchDesign13 },
    { id: 14, name: "Enterprise Grade", component: JobSearchDesign14 },
    { id: 15, name: "Gaming Quest", component: JobSearchDesign15 },
    { id: 16, name: "Nature Organic", component: JobSearchDesign16 },
    { id: 17, name: "Space Mission", component: JobSearchDesign17 },
    { id: 18, name: "Creative Canvas", component: JobSearchDesign18 },
    { id: 19, name: "Cozy & Warm", component: JobSearchDesign19 },
    { id: 20, name: "Executive Analytics", component: JobSearchDesign20 }
  ];

  const currentDesignData = designs.find(d => d.id === currentDesign);
  const CurrentComponent = currentDesignData?.component || JobSearchDesign1;

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
          <div className="text-center py-2 px-3 bg-blue-50 rounded text-sm font-medium">
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
        Design {currentDesign}: {currentDesignData?.name}
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
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {design.id}
            </button>
          ))}
        </div>
      </div>

      {/* Current Design Component */}
      <CurrentComponent />
    </div>
  );
};

export default JobSearchSelector;

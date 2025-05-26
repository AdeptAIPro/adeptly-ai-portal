
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
    { id: 10, name: "Career Potential", component: JobSearchDesign10 }
  ];

  const currentDesignData = designs.find(d => d.id === currentDesign);
  const CurrentComponent = currentDesignData?.component || JobSearchDesign1;

  const nextDesign = () => {
    setCurrentDesign(prev => prev >= 10 ? 1 : prev + 1);
  };

  const prevDesign = () => {
    setCurrentDesign(prev => prev <= 1 ? 10 : prev - 1);
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
            {currentDesign}/10
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

      {/* Current Design Component */}
      <CurrentComponent />
    </div>
  );
};

export default JobSearchSelector;

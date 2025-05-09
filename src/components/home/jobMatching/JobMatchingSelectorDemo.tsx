
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import JobMatchingSection from "../JobMatchingSection"; // Default option (our new design)
import JobMatchingOption1 from "./JobMatchingOption1";
import JobMatchingOption2 from "./JobMatchingOption2";
import JobMatchingOption3 from "./JobMatchingOption3";
import JobMatchingOption4 from "./JobMatchingOption4";
import JobMatchingOption5 from "./JobMatchingOption5";

const JobMatchingSelectorDemo = () => {
  const [selectedOption, setSelectedOption] = useState<number>(0); // Default to our new design (0)

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
          Choose a UI Design Option
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {[0, 1, 2, 3, 4, 5].map((option) => (
            <Button
              key={option}
              onClick={() => setSelectedOption(option)}
              variant={selectedOption === option ? "default" : "outline"}
              className={`px-6 py-3 rounded-xl transition-all ${
                selectedOption === option 
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-200 scale-105" 
                  : "hover:bg-gray-100"
              }`}
            >
              {option === 0 ? "Default" : `Option ${option}`}
            </Button>
          ))}
        </div>

        <div className="rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          {selectedOption === 0 && <JobMatchingSection />}
          {selectedOption === 1 && <JobMatchingOption1 />}
          {selectedOption === 2 && <JobMatchingOption2 />}
          {selectedOption === 3 && <JobMatchingOption3 />}
          {selectedOption === 4 && <JobMatchingOption4 />}
          {selectedOption === 5 && <JobMatchingOption5 />}
        </div>
      </div>
    </div>
  );
};

export default JobMatchingSelectorDemo;


import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import JobMatchingOption1 from "./JobMatchingOption1";
import JobMatchingOption2 from "./JobMatchingOption2";
import JobMatchingOption3 from "./JobMatchingOption3";
import JobMatchingOption4 from "./JobMatchingOption4";
import JobMatchingOption5 from "./JobMatchingOption5";

const JobMatchingSelectorDemo = () => {
  const [selectedOption, setSelectedOption] = useState<number>(1);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Choose a UI Design Option</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {[1, 2, 3, 4, 5].map((option) => (
            <Button
              key={option}
              onClick={() => setSelectedOption(option)}
              variant={selectedOption === option ? "default" : "outline"}
              className={`px-6 py-2 ${selectedOption === option ? "bg-primary text-primary-foreground" : ""}`}
            >
              Option {option}
            </Button>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden border">
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

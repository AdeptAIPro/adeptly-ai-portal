
import { useState } from "react";
import { motion } from "framer-motion";
import { MockResumeMatch, FormValues } from "./types";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { Search, CheckCircle2, Upload } from "lucide-react";
import { MOCK_MATCHES } from "./mockData";

const JobMatchingSection = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [matches, setMatches] = useState<MockResumeMatch[] | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "success" | "error">("idle");
  
  const form = useForm<FormValues>({
    defaultValues: {
      jobDescription: "",
    }
  });
  
  const handleSearch = (data: FormValues) => {
    if (!data.jobDescription.trim()) return;
    
    setIsSearching(true);
    
    // Simulate API call
    setTimeout(() => {
      setMatches(MOCK_MATCHES);
      setIsSearching(false);
    }, 1500);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setTimeout(() => {
        setUploadStatus("success");
      }, 1000);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              AI Talent Matching
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the power of our AI talent matching engine. Paste a job description to find matching
              candidates or upload your resume to be discovered by employers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left side - For employers */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 rounded-full p-2">
                  <Search className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Find Top Talent</h3>
                  <p className="text-sm text-gray-500">Let our AI find the perfect candidates for your needs</p>
                </div>
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSearch)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="jobDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe the job position, required skills..."
                            className="min-h-[200px] resize-none"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSearching} 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Search className="mr-2 h-4 w-4" />
                    {isSearching ? "Finding Matches..." : "Find Matching Candidates"}
                  </Button>
                </form>
              </Form>
            </div>
            
            {/* Right side - For job seekers */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-100 rounded-full p-2">
                  <Upload className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">For Job Seekers</h3>
                  <p className="text-sm text-gray-500">Get discovered by top employers</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-base font-medium mb-3">Upload Resume</h4>
                  <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      id="resume-upload"
                      className="hidden"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                    />
                    <label
                      htmlFor="resume-upload"
                      className="flex flex-col items-center cursor-pointer"
                    >
                      <div className="text-gray-400 mb-2">
                        <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                        </svg>
                      </div>
                      <span className="block font-medium text-gray-700">Choose File</span>
                      <span className="text-xs text-gray-500 mt-1">
                        {file ? file.name : "No file chosen"}
                      </span>
                    </label>
                    <p className="text-xs text-gray-500 mt-2">
                      Accepted formats: PDF, DOC, DOCX
                    </p>
                  </div>
                </div>
                
                <Button 
                  onClick={() => {}} 
                  disabled={!file || uploadStatus === "success"} 
                  className={`w-full ${uploadStatus === "success" ? "bg-green-600" : "bg-purple-600 hover:bg-purple-700"} text-white`}
                >
                  {uploadStatus === "success" ? (
                    <>
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Resume Submitted
                    </>
                  ) : (
                    "Submit Resume"
                  )}
                </Button>
              </div>
            </div>
          </div>
          
          {/* Results Section styled like image 2 */}
          {matches && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="p-6 pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-blue-100 rounded-full p-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Top Matching Candidates</h3>
                    <p className="text-sm text-gray-500">AI-matched candidates based on your job description</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-4 border-b border-gray-200 pb-3">
                  <div className="grid grid-cols-5 w-full text-sm font-medium text-gray-500">
                    <div className="col-span-1">Match</div>
                    <div className="col-span-1">Candidate</div>
                    <div className="col-span-1">Experience</div>
                    <div className="col-span-1">Skills</div>
                    <div className="col-span-1">Availability</div>
                  </div>
                </div>
                
                <div className="divide-y divide-gray-100">
                  {matches.map((candidate) => (
                    <div key={candidate.id} className="py-4 grid grid-cols-5 w-full items-center">
                      <div className="col-span-1">
                        <div className="flex items-center gap-2">
                          <div className="font-bold text-lg text-blue-600">{candidate.matchScore}%</div>
                          <div className="w-20 h-1 bg-gray-200 rounded-full">
                            <div 
                              className="h-1 bg-blue-600 rounded-full" 
                              style={{ width: `${candidate.matchScore}%` }}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-span-1">
                        <div className="font-medium">{candidate.name}</div>
                        <div className="text-sm text-gray-500">{candidate.topSkills[0]} Specialist</div>
                      </div>
                      
                      <div className="col-span-1">
                        {candidate.experience}
                      </div>
                      
                      <div className="col-span-1">
                        <div className="flex flex-wrap gap-1">
                          {candidate.topSkills.slice(0, 2).map((skill, index) => (
                            <Badge key={index} variant="outline" className="bg-gray-100">
                              {skill}
                            </Badge>
                          ))}
                          {candidate.topSkills.length > 2 && (
                            <span className="text-xs text-gray-500">+{candidate.topSkills.length - 2} more</span>
                          )}
                        </div>
                      </div>
                      
                      <div className="col-span-1 flex justify-between items-center">
                        <span className="text-sm">Immediately</span>
                        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">
                          Unlock
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                {matches.length > 3 && (
                  <div className="mt-4 p-5 text-center bg-gray-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Unlock All Matches</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Get full access to all candidate profiles, detailed skills analysis,
                      and direct contact options
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Upgrade Now
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default JobMatchingSection;

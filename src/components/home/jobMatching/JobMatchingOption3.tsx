
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Upload, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormControl } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FormValues, MockResumeMatch, UploadStatus } from "../types";
import { MOCK_MATCHES } from "../mockData";

const JobMatchingOption3 = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [matches, setMatches] = useState<MockResumeMatch[] | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  
  const form = useForm<FormValues>({
    defaultValues: {
      jobDescription: "",
    }
  });
  
  const handleSearch = (data: FormValues) => {
    if (!data.jobDescription.trim()) return;
    
    setIsSearching(true);
    
    // Simulating API call to AWS services
    setTimeout(() => {
      setMatches(MOCK_MATCHES);
      setIsSearching(false);
    }, 1500);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    
    if (!selectedFile) {
      return;
    }
    
    // Check file type
    const fileType = selectedFile.type;
    const validTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    
    if (!validTypes.includes(fileType)) {
      setUploadStatus("error");
      setErrorMessage("Invalid file format. Please upload PDF, DOC, or DOCX files only.");
      setFile(null);
      return;
    }
    
    // Check file size (5MB = 5 * 1024 * 1024 bytes)
    if (selectedFile.size > 5 * 1024 * 1024) {
      setUploadStatus("error");
      setErrorMessage("File is too large. Maximum size is 5MB.");
      setFile(null);
      return;
    }
    
    setFile(selectedFile);
    setUploadStatus("idle");
    setErrorMessage("");
  };
  
  const handleUpload = () => {
    if (!file) return;
    
    // Here you would normally send the file to your server
    // For now we'll just simulate a successful upload
    setTimeout(() => {
      setUploadStatus("success");
    }, 1000);
  };

  return (
    <section className="bg-[#00A3FF] py-20 min-h-screen relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-[#00A3FF] to-[#00D1FF] blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-[#00D1FF] to-[#00FFBF] blur-3xl opacity-30"></div>
      <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-[#00FFBF] to-[#00FFD1] blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              AI-Powered Talent Matching
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Find the perfect candidates for your positions or submit your resume to be matched with future opportunities.
            </p>
          </motion.div>
          
          <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden relative">
            {/* Accent Bar */}
            <div className="h-2 bg-gradient-to-r from-[#00A3FF] via-[#00D1FF] to-[#00FFBF]"></div>
            
            <div className="flex flex-wrap">
              {/* Side Navigation */}
              <div className="w-full lg:w-1/4 bg-[#F0FAFF] p-8 border-r border-gray-100">
                <div className="space-y-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#00A3FF] flex items-center justify-center shadow-lg text-white font-bold">
                      1
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Job Description</h3>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#00D1FF] flex items-center justify-center shadow-lg text-white font-bold">
                      2
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">View Matches</h3>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#00FFBF] flex items-center justify-center shadow-lg text-white font-bold">
                      3
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Submit Resume</h3>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-3/4 p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Left Content - Job Description & Results */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-8"
                  >
                    {/* Job Description Input */}
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-[#00A3FF] flex items-center justify-center mr-3 shadow-md">
                          <Search className="w-5 h-5 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Job Description</h2>
                      </div>
                      
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleSearch)} className="space-y-4">
                          <FormField
                            control={form.control}
                            name="jobDescription"
                            render={({ field }) => (
                              <FormItem>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Describe the job position, required skills..."
                                    className="min-h-[180px] resize-none bg-gray-50 border-gray-200 focus-visible:ring-[#00A3FF] focus-visible:border-[#00A3FF]"
                                    {...field}
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                          
                          <Button 
                            type="submit" 
                            disabled={isSearching} 
                            className="w-full bg-[#00A3FF] hover:bg-[#0090E0] text-white font-medium py-6 rounded-xl"
                          >
                            {isSearching ? (
                              <span className="flex items-center">
                                <svg className="animate-spin -ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Searching...
                              </span>
                            ) : (
                              <span className="flex items-center">
                                <Search className="mr-2 h-5 w-5" />
                                Find Matches
                              </span>
                            )}
                          </Button>
                        </form>
                      </Form>
                    </div>
                    
                    {/* Results Section */}
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-[#00D1FF] flex items-center justify-center mr-3 shadow-md">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Matching Results</h2>
                      </div>
                      
                      {!matches && !isSearching ? (
                        <div className="h-[250px] flex items-center justify-center rounded-lg border-2 border-dashed border-gray-200 bg-gray-50 p-4">
                          <div className="text-center">
                            <Search className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                            <p className="text-gray-500">
                              Enter a job description to see matching candidates
                            </p>
                          </div>
                        </div>
                      ) : isSearching ? (
                        <div className="h-[250px] flex items-center justify-center">
                          <div className="text-center">
                            <div className="relative w-20 h-20 mx-auto">
                              <div className="absolute inset-0 rounded-full border-8 border-gray-200"></div>
                              <div className="absolute inset-0 rounded-full border-t-8 border-[#00D1FF] animate-spin"></div>
                            </div>
                            <p className="mt-4 text-lg font-medium text-[#00D1FF]">Analyzing data...</p>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-3 max-h-[300px] overflow-auto pr-2">
                          {matches && matches.map((match) => (
                            <div key={match.id} className="bg-gray-50 hover:bg-blue-50 rounded-lg p-4 border border-gray-100 hover:border-[#00D1FF] transition duration-200">
                              <div className="flex justify-between items-center mb-2">
                                <h4 className="text-lg font-bold text-gray-800">{match.name}</h4>
                                <div className="px-3 py-1 rounded-full bg-[#00D1FF] text-white font-bold text-sm">
                                  {match.matchScore}% Match
                                </div>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                                <div 
                                  className="bg-[#00D1FF] h-2 rounded-full" 
                                  style={{ width: `${match.matchScore}%` }}
                                ></div>
                              </div>
                              <div className="flex flex-wrap gap-1 mb-1">
                                {match.topSkills.map((skill, index) => (
                                  <span key={index} className="bg-white text-[#00A3FF] text-xs px-2 py-0.5 rounded-md border border-[#00A3FF]/20 font-medium">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                              <div className="text-xs text-gray-600 mt-1">
                                <span className="font-medium">Experience:</span> {match.experience}
                              </div>
                            </div>
                          ))}
                          
                          <p className="text-sm text-gray-500 pt-2">
                            {matches && `Showing top ${matches.length} candidates`}
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                  
                  {/* Right Content - Resume Upload */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 rounded-full bg-[#00FFBF] flex items-center justify-center mr-3 shadow-md">
                        <Upload className="w-5 h-5 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800">Submit Resume</h2>
                    </div>
                    
                    <div className="mb-8">
                      <p className="text-gray-700 mb-4">
                        Already have a resume? Upload it to be matched with future opportunities. Our AI will analyze your skills and experience.
                      </p>
                      
                      <Link to="/marketplace/talent">
                        <Button 
                          className="w-full bg-[#00FFBF] hover:bg-[#00E6AA] text-gray-900 font-medium py-6 rounded-xl group"
                        >
                          Explore Talent Marketplace
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                    
                    <div className="space-y-5">
                      <div className="relative">
                        <input
                          type="file"
                          id="resume-upload"
                          className="sr-only"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx"
                        />
                        <label
                          htmlFor="resume-upload"
                          className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-blue-50 border-gray-300 hover:border-[#00A3FF] transition-colors duration-200"
                        >
                          <div className="flex flex-col items-center justify-center py-5">
                            <div className="w-16 h-16 rounded-full bg-[#F0FAFF] flex items-center justify-center mb-3">
                              <Upload className="w-8 h-8 text-[#00A3FF]" />
                            </div>
                            <p className="mb-1 text-center text-gray-900 font-medium">
                              Click to upload your resume
                            </p>
                            <p className="text-xs text-gray-500">
                              PDF, DOC, DOCX (MAX. 5MB)
                            </p>
                          </div>
                        </label>
                      </div>
                      
                      {uploadStatus === "error" && (
                        <div className="bg-red-50 border border-red-200 text-red-600 rounded-lg p-4 text-sm">
                          <span>{errorMessage}</span>
                        </div>
                      )}
                      
                      {file && uploadStatus !== "error" && (
                        <div className="bg-[#F0FAFF] rounded-lg p-4 border border-[#00A3FF]/20">
                          <div className="flex items-center">
                            <div className="bg-[#00A3FF]/10 rounded-lg p-2 mr-3">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00A3FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                              </svg>
                            </div>
                            <div className="text-sm flex-1">
                              <p className="font-medium truncate text-gray-900">{file.name}</p>
                              <p className="text-gray-500">
                                {Math.round(file.size / 1024)} KB
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <Button 
                        onClick={handleUpload} 
                        disabled={!file || uploadStatus === "success"} 
                        className="w-full bg-[#00A3FF] hover:bg-[#0090E0] text-white font-medium py-6 rounded-xl"
                      >
                        {uploadStatus === "success" ? "Resume Uploaded!" : "Upload Resume"}
                        {uploadStatus !== "success" && <Upload className="ml-2 h-4 w-4" />}
                      </Button>
                      
                      {uploadStatus === "success" && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-5 text-green-700 text-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto mb-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <p className="font-medium">Thank you for your submission!</p>
                          <p className="text-sm text-green-600 mt-1">We'll match your resume with suitable positions.</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-white/70 text-sm">
              Our AI analyzes job descriptions and resumes to provide the best possible matches.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobMatchingOption3;

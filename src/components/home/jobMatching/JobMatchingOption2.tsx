
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

const JobMatchingOption2 = () => {
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

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-b from-[#222222] to-[#111111] text-white py-20 px-4"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Decorative elements */}
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#FF3D71]/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#0095FF]/20 blur-3xl"></div>
        
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF3D71] to-[#0095FF]">
              AI-Powered Talent Matching
            </span>
            <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-[#FF3D71] to-[#0095FF] rounded-full"></div>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Find the perfect candidates for your positions or submit your resume to be matched with future opportunities.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Job Description */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 bg-[#1E1E1E] rounded-3xl overflow-hidden border border-gray-800"
          >
            <div className="p-8">
              <div className="flex items-center mb-6 space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FF3D71] flex items-center justify-center">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Job Description</h2>
                  <p className="text-gray-400">Step 1: Describe what you're looking for</p>
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
                            className="min-h-[220px] resize-none bg-[#171717] border-gray-800 focus-visible:ring-[#FF3D71] focus-visible:border-[#FF3D71] placeholder:text-gray-500 text-white"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSearching} 
                    className="w-full bg-[#FF3D71] hover:bg-[#FF2861] text-white font-medium py-6 rounded-xl"
                  >
                    {isSearching ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Scanning Candidates...
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
          </motion.div>
          
          {/* Center Column - Results */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-4 bg-[#1E1E1E] rounded-3xl overflow-hidden border border-gray-800"
          >
            <div className="p-8">
              <div className="flex items-center mb-6 space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0095FF] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Matching Results</h2>
                  <p className="text-gray-400">Step 2: Review matched candidates</p>
                </div>
              </div>
              
              <div className="h-[400px]">
                {!matches && !isSearching ? (
                  <div className="h-full flex items-center justify-center rounded-xl border-2 border-dashed border-gray-700 p-4">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#171717] flex items-center justify-center">
                        <Search className="h-10 w-10 text-gray-600" />
                      </div>
                      <p className="text-gray-500">
                        Enter a job description<br />to see matching candidates
                      </p>
                    </div>
                  </div>
                ) : isSearching ? (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-24 h-24 mx-auto mb-6" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="url(#grad1)" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset="100">
                          <animateTransform 
                            attributeName="transform" 
                            attributeType="XML" 
                            type="rotate"
                            from="0 50 50"
                            to="360 50 50"
                            dur="2s"
                            repeatCount="indefinite" />
                        </circle>
                        <defs>
                          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#FF3D71" />
                            <stop offset="100%" stopColor="#0095FF" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <p className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#FF3D71] to-[#0095FF]">
                        Finding ideal matches...
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 overflow-auto h-full pr-2 custom-scrollbar">
                    {matches && matches.map((match) => (
                      <div key={match.id} className="group bg-[#171717] hover:bg-[#2A2A2A] rounded-xl p-4 border border-gray-800 hover:border-[#0095FF] transition duration-300">
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="text-xl font-bold text-white group-hover:text-[#0095FF] transition duration-300">{match.name}</h4>
                          <div className="px-3 py-1 rounded-full bg-gradient-to-r from-[#FF3D71] to-[#0095FF] text-white font-bold text-sm">
                            {match.matchScore}% Match
                          </div>
                        </div>
                        <div className="w-full h-2 bg-gray-800 rounded-full mb-3">
                          <div 
                            className="h-full rounded-full bg-gradient-to-r from-[#FF3D71] to-[#0095FF]" 
                            style={{ width: `${match.matchScore}%` }}
                          ></div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {match.topSkills.map((skill, index) => (
                            <span key={index} className="bg-[#333] text-gray-300 px-2 py-1 rounded-md text-xs">
                              {skill}
                            </span>
                          ))}
                        </div>
                        <div className="text-sm text-gray-400">
                          Experience: <span className="text-gray-300">{match.experience}</span>
                        </div>
                      </div>
                    ))}
                    
                    {matches && (
                      <p className="text-sm text-gray-500 pt-2">
                        Showing top {matches.length} candidates
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Resume Upload */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-3 bg-[#1E1E1E] rounded-3xl overflow-hidden border border-gray-800"
          >
            <div className="p-8">
              <div className="flex items-center mb-6 space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-[#00CFDD] flex items-center justify-center">
                  <Upload className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Submit Resume</h2>
                  <p className="text-gray-400">Step 3: Add your profile</p>
                </div>
              </div>
              
              <div className="mb-6">
                <Link to="/marketplace/talent">
                  <Button 
                    className="w-full bg-gradient-to-r from-[#00CFDD] to-[#00A3FF] hover:opacity-90 text-white py-6 rounded-xl font-medium group"
                  >
                    Explore Talent Marketplace
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Browse our talents database
                </p>
              </div>
              
              <div className="space-y-5 rounded-xl">
                <div className="bg-[#171717] rounded-xl p-6 border border-gray-800">
                  <input
                    type="file"
                    id="resume-upload"
                    className="sr-only"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                  />
                  <label
                    htmlFor="resume-upload"
                    className="group flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer border-gray-700 hover:border-[#00CFDD] transition duration-300"
                  >
                    <div className="flex flex-col items-center justify-center py-4">
                      <div className="w-12 h-12 rounded-full bg-gray-800 group-hover:bg-[#00CFDD]/20 flex items-center justify-center mb-2 transition duration-300">
                        <Upload className="w-6 h-6 text-gray-400 group-hover:text-[#00CFDD]" />
                      </div>
                      <p className="text-sm text-center">
                        <span className="font-medium group-hover:text-[#00CFDD] transition duration-300">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        PDF, DOC, DOCX (MAX. 5MB)
                      </p>
                    </div>
                  </label>
                  
                  {uploadStatus === "error" && (
                    <div className="mt-4 bg-[#3A1A1A] border border-red-500/30 text-red-400 rounded-lg p-3 text-sm">
                      <span>{errorMessage}</span>
                    </div>
                  )}
                  
                  {file && uploadStatus !== "error" && (
                    <div className="mt-4 bg-[#222] rounded-lg p-3 border border-gray-700">
                      <div className="flex items-center">
                        <div className="bg-[#00CFDD]/10 rounded-lg p-2 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00CFDD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div className="text-sm flex-1">
                          <p className="font-medium truncate">{file.name}</p>
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
                    className="w-full mt-4 bg-gradient-to-r from-[#00CFDD] to-[#00A3FF] hover:opacity-90 text-white"
                  >
                    {uploadStatus === "success" ? "Resume Uploaded!" : "Upload Resume"}
                    {uploadStatus !== "success" && <Upload className="ml-2 h-4 w-4" />}
                  </Button>
                  
                  {uploadStatus === "success" && (
                    <div className="mt-4 bg-[#1A2B1F] border border-green-500/30 rounded-lg p-3 text-green-400 text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-1 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Thank you for your submission!
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          variants={itemVariants}
          className="mt-12 text-center max-w-xl mx-auto"
        >
          <p className="text-gray-500">
            Our advanced AI analyzes job descriptions and resumes to provide precise matches based on skills, experience, and cultural fit criteria.
          </p>
        </motion.div>
      </div>
      
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #171717;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #FF3D71, #0095FF);
          border-radius: 10px;
        }
      `}</style>
    </motion.div>
  );
};

export default JobMatchingOption2;

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

const JobMatchingOption5 = () => {
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <div className="bg-[#111] text-white min-h-screen overflow-hidden">
      {/* 3D perspective wrapper */}
      <div className="py-16 max-w-7xl mx-auto px-6 perspective-1000">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF3366] via-[#FF9933] to-[#FFFF33]">
              AI-Powered Talent Matching
            </span>
            <div className="absolute -inset-x-32 top-1/2 h-px bg-gradient-to-r from-transparent via-[#FF3366]/20 to-transparent"></div>
          </h1>
          
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Our advanced AI system connects the right talent with the right opportunities
          </p>
        </motion.div>
        
        <div className="relative">
          {/* 3D Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Card 1: Job Description */}
            <motion.div
              custom={0}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="glass-card group"
              style={{ 
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="h-full p-8 relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#111] to-[#222] border border-white/10 shadow-[0_15px_40px_-15px_rgba(255,51,102,0.3)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF3366]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Glow effect */}
                <div className="absolute -inset-px bg-gradient-to-r from-[#FF3366] to-[#FF9933] rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF3366] to-[#FF9933] flex items-center justify-center mb-6 shadow-lg shadow-[#FF3366]/20">
                    <Search className="w-7 h-7 text-white" />
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-4">Job Description</h2>
                  <p className="text-gray-400 mb-6">Enter the details of the position you're looking to fill</p>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSearch)} className="space-y-5">
                      <FormField
                        control={form.control}
                        name="jobDescription"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Textarea 
                                placeholder="Describe the job position, required skills..."
                                className="min-h-[200px] resize-none bg-white/5 border-white/10 focus-visible:ring-[#FF3366]/50 focus-visible:border-[#FF3366]/50 placeholder:text-gray-500 text-white"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        disabled={isSearching}
                        className="w-full bg-gradient-to-r from-[#FF3366] to-[#FF9933] hover:opacity-90 text-white py-6 font-medium text-lg shadow-[0_5px_30px_-15px_rgba(255,51,102,0.6)] transition-all duration-300 hover:shadow-[0_5px_40px_-10px_rgba(255,51,102,0.7)]"
                      >
                        {isSearching ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
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
              </div>
            </motion.div>
            
            {/* Card 2: Results */}
            <motion.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="glass-card group md:translate-y-6"
              style={{ 
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="h-full p-8 relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#111] to-[#222] border border-white/10 shadow-[0_15px_40px_-15px_rgba(255,153,51,0.3)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF9933]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Glow effect */}
                <div className="absolute -inset-px bg-gradient-to-r from-[#FF9933] to-[#FFFF33] rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF9933] to-[#FFFF33] flex items-center justify-center mb-6 shadow-lg shadow-[#FF9933]/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-4">Matching Results</h2>
                  <p className="text-gray-400 mb-6">View candidates that match your job description</p>
                  
                  {!matches && !isSearching ? (
                    <div className="h-[300px] flex items-center justify-center rounded-xl border border-dashed border-white/10 bg-white/5 p-4">
                      <div className="text-center">
                        <div className="w-20 h-20 rounded-full bg-white/5 mx-auto mb-4 flex items-center justify-center">
                          <Search className="w-10 h-10 text-gray-500" />
                        </div>
                        <p className="text-gray-400 text-lg">
                          Enter a job description<br />to see matching candidates
                        </p>
                      </div>
                    </div>
                  ) : isSearching ? (
                    <div className="h-[300px] flex items-center justify-center">
                      <div className="text-center">
                        <div className="mx-auto mb-6 relative">
                          <svg className="w-24 h-24 animate-pulse" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="url(#grad)" strokeWidth="8" strokeLinecap="round">
                              <animateTransform 
                                attributeName="transform" 
                                type="rotate"
                                dur="2s" 
                                repeatCount="indefinite"
                                from="0 50 50"
                                to="360 50 50" />
                            </circle>
                            <defs>
                              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#FF9933" />
                                <stop offset="100%" stopColor="#FFFF33" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] to-[#FFFF33]">
                          Finding your perfect matches...
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 max-h-[300px] overflow-auto custom-scrollbar pr-2">
                      {matches && matches.map((match, idx) => (
                        <motion.div 
                          key={match.id} 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-[#FF9933]/50 transition duration-300"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="text-xl font-medium">{match.name}</h4>
                            <div className="px-3 py-1 rounded-full bg-gradient-to-r from-[#FF9933] to-[#FFFF33] text-black font-bold text-sm">
                              {match.matchScore}% Match
                            </div>
                          </div>
                          <div className="w-full h-1 bg-white/10 rounded-full mb-3">
                            <div 
                              className="h-full rounded-full bg-gradient-to-r from-[#FF9933] to-[#FFFF33]" 
                              style={{ width: `${match.matchScore}%` }}
                            ></div>
                          </div>
                          <div className="flex flex-wrap gap-1 mb-1">
                            {match.topSkills.map((skill, index) => (
                              <span key={index} className="bg-white/5 text-gray-300 px-2 py-0.5 rounded-md text-xs border border-white/10">
                                {skill}
                              </span>
                            ))}
                          </div>
                          <div className="text-xs text-gray-400">
                            Experience: {match.experience}
                          </div>
                        </motion.div>
                      ))}
                      
                      <p className="text-sm text-gray-500 pt-2">
                        {matches && `Showing top ${matches.length} candidates`}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
            
            {/* Card 3: Upload Section */}
            <motion.div
              custom={2}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="glass-card group"
              style={{ 
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="h-full p-8 relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#111] to-[#222] border border-white/10 shadow-[0_15px_40px_-15px_rgba(255,255,51,0.3)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFFF33]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Glow effect */}
                <div className="absolute -inset-px bg-gradient-to-r from-[#FFFF33] to-[#33FF99] rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFFF33] to-[#33FF99] flex items-center justify-center mb-6 shadow-lg shadow-[#FFFF33]/20">
                    <Upload className="w-7 h-7 text-black" />
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-4">Submit Resume</h2>
                  <p className="text-gray-400 mb-6">Upload your resume to find matching opportunities</p>
                  
                  <div className="mb-6">
                    <Link to="/marketplace/talent">
                      <Button 
                        className="w-full bg-gradient-to-r from-[#FFFF33] to-[#33FF99] text-black hover:opacity-90 group relative overflow-hidden py-6 font-medium text-lg shadow-[0_5px_30px_-15px_rgba(255,255,51,0.6)] transition-all duration-300 hover:shadow-[0_5px_40px_-10px_rgba(255,255,51,0.7)]"
                      >
                        <span className="relative z-10 flex items-center">
                          Explore Talent Marketplace
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </span>
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="space-y-4">
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
                        className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-xl cursor-pointer bg-white/5 hover:bg-white/10 border-white/10 transition-all duration-300"
                      >
                        <div className="flex flex-col items-center justify-center py-5">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFFF33]/20 to-[#33FF99]/20 flex items-center justify-center mb-3">
                            <Upload className="w-8 h-8 text-[#FFFF33]" />
                          </div>
                          <p className="text-center">
                            <span className="font-medium">Drop files here</span> or click to browse
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            PDF, DOC, DOCX (MAX. 5MB)
                          </p>
                        </div>
                      </label>
                    </div>
                    
                    {uploadStatus === "error" && (
                      <div className="bg-red-900/20 border border-red-500/30 text-red-400 rounded-lg p-3 text-sm">
                        <span>{errorMessage}</span>
                      </div>
                    )}
                    
                    {file && uploadStatus !== "error" && (
                      <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="flex items-center">
                          <div className="bg-[#FFFF33]/10 rounded-lg p-2 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FFFF33]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div className="text-sm flex-1">
                            <p className="font-medium truncate text-gray-200">{file.name}</p>
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
                      className="w-full bg-gradient-to-r from-[#FFFF33] to-[#33FF99] text-black hover:opacity-90 py-6 font-medium shadow-[0_5px_30px_-15px_rgba(255,255,51,0.4)]"
                    >
                      {uploadStatus === "success" ? "Resume Uploaded!" : "Upload Resume"}
                      {uploadStatus !== "success" && <Upload className="ml-2 h-4 w-4" />}
                    </Button>
                    
                    {uploadStatus === "success" && (
                      <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 text-green-300 text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto mb-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-16 text-sm text-center max-w-xl mx-auto"
          >
            <p className="text-gray-500 border-t border-gray-800 pt-6">
              Our advanced neural networks analyze job descriptions and resumes to find the perfect matches based on skills, experience and cultural fit.
            </p>
          </motion.div>
        </div>
      </div>
      
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .glass-card {
          transform: translateZ(0);
          transition: transform 0.3s ease;
        }
        .glass-card:hover {
          transform: translateY(-5px) translateZ(0);
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #FF9933, #FFFF33);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default JobMatchingOption5;

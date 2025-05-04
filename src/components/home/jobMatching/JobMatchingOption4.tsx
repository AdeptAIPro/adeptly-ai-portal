
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

const JobMatchingOption4 = () => {
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
    <div className="bg-[#0F172A] text-white min-h-screen overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-1/4 h-1/4 bg-cyan-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative py-16 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
          >
            AI-Powered Talent Matching
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Experience the future of recruitment with our cutting-edge AI matching system
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Job Description */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center shadow-lg mr-4">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">1. Job Description</h2>
            </div>
            
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
                          className="min-h-[180px] resize-none bg-white/5 border-white/10 focus-visible:ring-blue-500/50 focus-visible:border-blue-500/50 text-white placeholder:text-gray-400"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isSearching}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-400 hover:opacity-90 text-white font-medium py-6"
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
          </motion.div>
          
          {/* Card 2: Results */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-400 flex items-center justify-center shadow-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">2. Matching Results</h2>
            </div>
            
            {!matches && !isSearching ? (
              <div className="h-[300px] flex items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/5 p-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center">
                    <Search className="h-8 w-8 text-gray-400" />
                  </div>
                  <p className="text-gray-400 text-lg">
                    Enter a job description to see matching candidates
                  </p>
                </div>
              </div>
            ) : isSearching ? (
              <div className="h-[300px] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 relative">
                    <div className="absolute inset-0 rounded-full border-t-2 border-b-2 border-blue-500 animate-spin"></div>
                    <div className="absolute inset-3 rounded-full border-t-2 border-blue-400 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
                    <div className="absolute inset-6 rounded-full border-t-2 border-blue-300 animate-spin" style={{ animationDuration: '2s' }}></div>
                  </div>
                  <p className="text-blue-400 font-medium">Processing matches...</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4 max-h-[350px] overflow-auto pr-2 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100/10">
                {matches && matches.map((match) => (
                  <div key={match.id} className="bg-gradient-to-r from-white/5 to-white/10 rounded-xl p-4 border border-white/10 hover:border-blue-500/30 transition duration-300">
                    <div className="flex flex-wrap md:flex-nowrap justify-between items-center mb-3">
                      <h4 className="text-xl font-semibold">{match.name}</h4>
                      <div className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold text-sm">
                        {match.matchScore}% Match
                      </div>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1.5 mb-4">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-cyan-400 h-1.5 rounded-full" 
                        style={{ width: `${match.matchScore}%` }}
                      ></div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {match.topSkills.map((skill, index) => (
                        <span key={index} className="bg-white/10 text-gray-200 px-2 py-1 rounded-md text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm text-gray-400">
                      <span className="text-gray-300">Experience:</span> {match.experience}
                    </div>
                  </div>
                ))}
                
                <p className="text-sm text-gray-400 pt-2">
                  {matches && `Showing top ${matches.length} candidates`}
                </p>
              </div>
            )}
          </motion.div>
          
          {/* Card 3: Upload Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center shadow-lg mr-4">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">3. Submit Resume</h2>
            </div>
            
            <div className="mb-6">
              <Link to="/marketplace/talent">
                <Button 
                  className="w-full bg-gradient-to-r from-pink-500 to-orange-400 hover:opacity-90 text-white group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Explore Talent Marketplace
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Button>
              </Link>
              <p className="text-sm text-gray-400 mt-2 text-center">
                Browse our talent database
              </p>
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
                  className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed rounded-xl cursor-pointer bg-white/5 hover:bg-white/10 border-gray-500/30 transition-colors duration-200"
                >
                  <div className="flex flex-col items-center justify-center py-5">
                    <div className="w-14 h-14 rounded-full bg-pink-500/20 flex items-center justify-center mb-2">
                      <Upload className="w-7 h-7 text-pink-400" />
                    </div>
                    <p className="text-center text-gray-300">
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
                    <div className="bg-blue-500/20 rounded-lg p-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
                className="w-full bg-gradient-to-r from-pink-500 to-orange-400 hover:opacity-90 text-white"
              >
                {uploadStatus === "success" ? "Resume Uploaded!" : "Upload Resume"}
                {uploadStatus !== "success" && <Upload className="ml-2 h-4 w-4" />}
              </Button>
              
              {uploadStatus === "success" && (
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3 text-green-400 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto mb-1 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Thank you for your submission!
                </div>
              )}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 text-sm text-gray-400 text-center"
        >
          <p>Our advanced AI analyzes job descriptions and resumes to provide the best possible matches.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default JobMatchingOption4;

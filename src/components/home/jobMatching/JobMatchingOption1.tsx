
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

const JobMatchingOption1 = () => {
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
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-[#5A32A3] to-[#D32E8F] text-white py-16 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          AI-Powered Talent Matching
        </h2>
        
        <p className="text-lg opacity-90 mb-12 text-center max-w-3xl mx-auto">
          Find the perfect candidates for your positions or submit your resume to be matched with future opportunities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Job Description Section */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="md:col-span-5 bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mr-4">
                <Search className="w-6 h-6" />
              </div>
              Job Description
            </h3>
            
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
                          className="min-h-[180px] resize-none border-0 bg-white/10 backdrop-blur-sm placeholder:text-white/50 text-white focus-visible:ring-white/30 focus-visible:ring-offset-0"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isSearching} 
                  className="w-full bg-white text-[#5A32A3] hover:bg-white/90 hover:text-[#5A32A3] transition-all font-medium py-6"
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
                    <span className="flex items-center justify-center">
                      <Search className="mr-2 h-5 w-5" />
                      Find Matches
                    </span>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
          
          {/* Results Section */}
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="md:col-span-7 bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20"
          >
            <h3 className="text-2xl font-bold mb-6">Matching Results</h3>
            
            {!matches && !isSearching ? (
              <div className="h-[250px] flex items-center justify-center rounded-2xl border border-dashed border-white/30 p-8">
                <div className="text-center">
                  <Search className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="opacity-75 text-lg">
                    Enter a job description to see matching candidates
                  </p>
                </div>
              </div>
            ) : isSearching ? (
              <div className="h-[250px] flex items-center justify-center">
                <div className="text-center">
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-white/20"></div>
                    <div className="absolute top-0 left-0 w-full h-full rounded-full border-t-4 border-white animate-spin"></div>
                  </div>
                  <p className="text-lg font-medium">Finding the best matches...</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4 max-h-[400px] overflow-auto pr-2 custom-scrollbar">
                {matches && matches.map((match) => (
                  <div key={match.id} className="bg-white/10 rounded-2xl p-5 border border-white/20 hover:bg-white/20 transition duration-200">
                    <div className="flex flex-wrap md:flex-nowrap justify-between items-center mb-4">
                      <h4 className="text-xl font-semibold">{match.name}</h4>
                      <div className="px-4 py-1 rounded-full bg-white/20 text-white font-bold">
                        {match.matchScore}% Match
                      </div>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2.5 mb-4">
                      <div 
                        className="bg-white h-2.5 rounded-full" 
                        style={{ width: `${match.matchScore}%` }}
                      ></div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {match.topSkills.map((skill, index) => (
                        <span key={index} className="bg-white/15 text-white px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm opacity-75">
                      <span className="font-medium">Experience:</span> {match.experience}
                    </div>
                  </div>
                ))}
                
                <p className="text-sm opacity-75 pt-2">
                  {matches && `Showing top ${matches.length} candidates`}
                </p>
              </div>
            )}
          </motion.div>
          
          {/* Resume Upload Section */}
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="md:col-span-12 bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/20"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="md:flex-1">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mr-4">
                    <Upload className="w-6 h-6" />
                  </div>
                  Submit Your Resume
                </h3>
                <p className="mb-6 opacity-80">
                  Upload your resume to be matched with future job opportunities. Our AI will analyze your skills and experience.
                </p>
                <Link to="/marketplace/talent">
                  <Button 
                    className="bg-white/20 hover:bg-white/30 text-white border border-white/30 group"
                  >
                    Explore Talent Marketplace
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              
              <div className="md:flex-1 space-y-4">
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
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-2xl cursor-pointer bg-white/5 hover:bg-white/10 border-white/30"
                  >
                    <div className="flex flex-col items-center justify-center py-4">
                      <Upload className="w-10 h-10 mb-2 opacity-80" />
                      <p className="text-center">
                        <span className="font-medium">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-sm opacity-70 mt-1">
                        PDF, DOC, DOCX (MAX. 5MB)
                      </p>
                    </div>
                  </label>
                </div>
                
                {uploadStatus === "error" && (
                  <div className="bg-red-500/20 border border-red-500/30 text-white rounded-xl p-3 text-sm">
                    <span>{errorMessage}</span>
                  </div>
                )}
                
                {file && uploadStatus !== "error" && (
                  <div className="bg-white/10 rounded-xl p-3 border border-white/20">
                    <div className="flex items-center">
                      <div className="bg-white/20 rounded-lg p-2 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="text-sm flex-1">
                        <p className="font-medium truncate">{file.name}</p>
                        <p className="opacity-70">
                          {Math.round(file.size / 1024)} KB
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                <Button 
                  onClick={handleUpload} 
                  disabled={!file || uploadStatus === "success"} 
                  className="w-full bg-white text-[#5A32A3] hover:bg-white/90"
                >
                  {uploadStatus === "success" ? "Resume Uploaded!" : "Upload Resume"}
                  {uploadStatus !== "success" && <Upload className="ml-2 h-4 w-4" />}
                </Button>
                
                {uploadStatus === "success" && (
                  <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-3 text-white text-center">
                    <span className="font-medium">Thank you for your submission!</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-12 text-sm opacity-75 text-center">
          <p>Our AI analyzes job descriptions and resumes to provide the best possible matches.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default JobMatchingOption1;

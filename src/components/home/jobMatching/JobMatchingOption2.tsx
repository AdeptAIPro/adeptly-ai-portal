import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Upload, ArrowRight, Shield, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormControl, FormLabel } from "@/components/ui/form";
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

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 py-16 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            AI-Powered Talent Matching
          </h2>
          
          <p className="text-lg mb-12 max-w-3xl mx-auto">
            Find the perfect candidates for your positions or submit your resume to be matched with future opportunities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Job Description Section */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white rounded-xl p-8 shadow-sm border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="text-indigo-600">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold">Enter Job Description</h3>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              Our AI analyzes your requirements to find the best talent match
            </p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSearch)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="jobDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium">Job Description</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe the job position, required skills, experience level, and responsibilities in detail..."
                          className="min-h-[150px] resize-none border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                          {...field}
                        />
                      </FormControl>
                      <p className="text-xs text-gray-500 flex items-center mt-1">
                        <CheckCircle2 className="h-3 w-3 mr-1 inline" />
                        More details = better matches
                      </p>
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isSearching} 
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  {isSearching ? (
                    <span className="flex items-center justify-center">
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
          
          {/* Resume Upload Section */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white rounded-xl p-8 shadow-sm border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="text-indigo-600">
                <Upload className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold">Submit Your Resume</h3>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              Join our talent marketplace to get matched with opportunities
            </p>
            
            <div className="space-y-6">
              <div className="resume-container">
                <label className="resume-label">
                  Drag & drop your resume here, or click to select a file
                </label>
                <div className="resume-drop">
                  <Upload className="h-8 w-8 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">
                    Supported formats: PDF, DOC, DOCX
                  </p>
                  <input
                    type="file"
                    className="resume-input"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                  />
                </div>
              </div>
              
              {uploadStatus === "error" && (
                <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 p-3 rounded-lg">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16.0001V16.0101M12 8.00007V12.0001M12 22.0001C17.5228 22.0001 22 17.5229 22 12.0001C22 6.47721 17.5228 2.00007 12 2.00007C6.47715 2.00007 2 6.47721 2 12.0001C2 17.5229 6.47715 22.0001 12 22.0001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{errorMessage}</span>
                </div>
              )}
              
              {file && uploadStatus !== "error" && (
                <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                  <div className="bg-indigo-100 rounded-lg p-2">
                    <svg className="h-6 w-6 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2.26953V6.40007C14 6.96012 14 7.24015 14.109 7.45406C14.2049 7.64222 14.3578 7.7952 14.546 7.89108C14.7599 8.00007 15.0399 8.00007 15.6 8.00007H19.7305M14 2.00007H8.8C7.11984 2.00007 6.27976 2.00007 5.63803 2.32715C5.07354 2.6146 4.6146 3.07354 4.32715 3.63803C4 4.27976 4 5.11984 4 6.80005V17.2001C4 18.8803 4 19.7203 4.32715 20.3621C4.6146 20.9266 5.07354 21.3855 5.63803 21.673C6.27976 22.0001 7.11984 22.0001 8.8 22.0001H15.2C16.8802 22.0001 17.7202 22.0001 18.362 21.673C18.9265 21.3855 19.3854 20.9266 19.6729 20.3621C20 19.7203 20 18.8803 20 17.2001V8.00007" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{file.name}</p>
                    <p className="text-xs text-gray-500">
                      {Math.round(file.size / 1024)} KB
                    </p>
                  </div>
                </div>
              )}
              
              <Button 
                onClick={handleUpload} 
                disabled={!file || uploadStatus === "success"} 
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                {uploadStatus === "success" ? (
                  <span className="flex items-center justify-center">
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                    Resume Uploaded!
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Upload Resume
                  </span>
                )}
              </Button>
              
              {uploadStatus === "success" && (
                <div className="bg-green-50 border border-green-100 rounded-lg p-3 text-sm text-green-700 text-center">
                  <span className="font-medium">Thank you for your submission!</span>
                </div>
              )}
              
              <div className="flex items-center justify-center text-xs text-gray-500">
                <Shield className="h-3 w-3 mr-1" />
                <span>Your data is secure and protected</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Results Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white rounded-xl p-8 shadow-sm border border-gray-200"
        >
          <h3 className="text-xl font-semibold mb-6">Matching Results</h3>
          
          {!matches && !isSearching ? (
            <div className="h-[180px] flex flex-col items-center justify-center">
              <p className="text-center text-gray-500 mb-2">
                Enter a job description to see matching candidates
              </p>
              <Search className="h-6 w-6 text-gray-400" />
            </div>
          ) : isSearching ? (
            <div className="h-[180px] flex flex-col items-center justify-center">
              <div className="relative w-16 h-16 mb-4">
                <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-gray-200"></div>
                <div className="absolute top-0 left-0 w-full h-full rounded-full border-t-4 border-indigo-600 animate-spin"></div>
              </div>
              <p className="text-indigo-600 font-medium">Finding the best matches...</p>
            </div>
          ) : (
            <div className="space-y-4 max-h-[400px] overflow-auto pr-2">
              {matches && matches.map((match) => (
                <div key={match.id} className="bg-gray-50 rounded-lg p-4 border border-gray-100 hover:bg-gray-100 transition duration-200">
                  <div className="flex flex-wrap md:flex-nowrap justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold">{match.name}</h4>
                    <div className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm">
                      {match.matchScore}% Match
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                    <div 
                      className="bg-indigo-600 h-2 rounded-full" 
                      style={{ width: `${match.matchScore}%` }}
                    ></div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {match.topSkills.map((skill, index) => (
                      <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Experience:</span> {match.experience}
                  </div>
                </div>
              ))}
              
              <p className="text-sm text-gray-500 pt-2">
                {matches && `Showing top ${matches.length} candidates`}
              </p>
            </div>
          )}
        </motion.div>
        
        <div className="text-center text-sm text-gray-500 pt-6">
          <p>Our AI analyzes job descriptions and resumes to provide the best possible matches, using
          <br />advanced machine learning models trained on millions of successful placements.</p>
          
          <div className="flex items-center justify-center gap-4 mt-4">
            <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs">SOC 2 Compliant</span>
            <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs">GDPR Compliant</span>
            <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs">99.9% Uptime</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default JobMatchingOption2;

<style>
  {`
    .resume-container {
      position: relative;
    }
    
    .resume-label {
      color: #718096;
      display: block;
      font-size: 0.875rem;
      margin-bottom: 0.5rem;
    }
    
    .resume-drop {
      border: 2px dashed #CBD5E0;
      border-radius: 0.5rem;
      padding: 2rem;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .resume-drop:hover {
      border-color: #4A5568;
      background-color: #F7FAFC;
    }
    
    .resume-input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }
  `}
</style>

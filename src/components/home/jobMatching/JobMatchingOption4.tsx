
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Upload, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription } from "@/components/ui/form";
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
    <section className="py-20 bg-gradient-to-br from-purple-50 via-indigo-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-5xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
            AI-Powered Talent Matching
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Find the perfect candidates for your positions or submit your resume to be matched with future opportunities.
          </p>
        </div>
        
        <div className="rounded-3xl overflow-hidden bg-white shadow-xl backdrop-blur-sm border border-indigo-50">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Job Description Section */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-indigo-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-bl-full opacity-20 -z-10" />
              
              <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 mr-2 text-lg font-semibold">1</span>
                Enter Job Description
              </h3>
              
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
                            className="min-h-[200px] resize-none border-indigo-200 focus:border-indigo-300"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription className="text-indigo-600">
                          More details = better matches
                        </FormDescription>
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSearching} 
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-md"
                  >
                    {isSearching ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Searching...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Search className="mr-2 h-4 w-4" />
                        Find Matches
                      </span>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
            
            {/* Results Section */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-indigo-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-bl-full opacity-20 -z-10" />
              
              <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 mr-2 text-lg font-semibold">2</span>
                Matching Results
              </h3>
              
              {!matches && !isSearching ? (
                <div className="h-[250px] flex items-center justify-center border-2 border-dashed rounded-xl p-4 border-indigo-200 bg-indigo-50/30">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Search className="w-8 h-8 text-indigo-500" />
                    </div>
                    <p className="text-gray-600">
                      Enter a job description to see matching candidates
                    </p>
                  </div>
                </div>
              ) : isSearching ? (
                <div className="h-[250px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative w-20 h-20 mx-auto mb-3">
                      <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-indigo-200"></div>
                      <div className="absolute top-0 left-0 w-full h-full rounded-full border-t-4 border-indigo-600 animate-spin"></div>
                    </div>
                    <p className="text-indigo-600 font-medium">Finding the best matches...</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 max-h-[300px] overflow-auto pr-2">
                  {matches && matches.map((match) => (
                    <div key={match.id} className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 hover:shadow-md transition duration-200">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-semibold text-gray-800">{match.name}</h4>
                        <div className="bg-white py-1 px-3 rounded-full text-indigo-600 font-bold border border-indigo-200 text-sm">
                          {match.matchScore}% Match
                        </div>
                      </div>
                      <div className="w-full bg-indigo-100 rounded-full h-2 mb-3">
                        <div 
                          className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full" 
                          style={{ width: `${match.matchScore}%` }}
                        ></div>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        {match.topSkills.map((skill, index) => (
                          <span key={index} className="bg-white text-indigo-700 text-xs px-2 py-1 rounded-full border border-indigo-200">
                            {skill}
                          </span>
                        ))}
                        <span className="bg-white text-indigo-700 text-xs px-2 py-1 rounded-full border border-indigo-200">
                          {match.experience}
                        </span>
                      </div>
                    </div>
                  ))}
                  
                  <p className="text-sm text-gray-500 pt-2">
                    {matches && `Showing top ${matches.length} candidates`}
                  </p>
                </div>
              )}
            </div>
            
            {/* Resume Upload Section */}
            <div className="p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-200 to-purple-200 rounded-bl-full opacity-20 -z-10" />
              
              <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 mr-2 text-lg font-semibold">3</span>
                Submit Your Resume
              </h3>
              
              <div className="mb-6">
                <Link to="/marketplace/talent">
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md group"
                  >
                    Talent Marketplace
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <p className="text-xs text-gray-500 mt-2 text-center">Browse our talent marketplace</p>
              </div>
              
              <div className="space-y-5">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-indigo-100">
                  <input
                    type="file"
                    id="resume-upload"
                    className="sr-only"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                  />
                  <label
                    htmlFor="resume-upload"
                    className="flex flex-col items-center justify-center w-full cursor-pointer"
                  >
                    <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 border border-indigo-100">
                      <Upload className="w-10 h-10 text-indigo-500" />
                    </div>
                    <p className="text-center font-medium text-indigo-700">
                      Click to upload your resume
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      PDF, DOC, DOCX (MAX. 5MB)
                    </p>
                  </label>
                </div>
                
                {uploadStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-600 text-sm">
                    <span>{errorMessage}</span>
                  </div>
                )}
                
                {file && uploadStatus !== "error" && (
                  <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100">
                    <div className="flex items-center">
                      <div className="bg-white rounded-xl p-2 mr-3 border border-indigo-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="text-sm flex-1">
                        <p className="font-medium text-gray-800 truncate">{file.name}</p>
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
                  className="w-full bg-indigo-600 hover:bg-indigo-700 shadow-md"
                >
                  {uploadStatus === "success" ? "Resume Uploaded!" : "Upload Resume"}
                  {uploadStatus !== "success" && <Upload className="ml-2 h-4 w-4" />}
                </Button>
                
                {uploadStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-green-700 text-sm text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Thank you for your submission!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-sm text-gray-600 text-center">
          <p>Our AI analyzes job descriptions and resumes to provide the best possible matches.</p>
        </div>
      </div>
    </section>
  );
};

export default JobMatchingOption4;

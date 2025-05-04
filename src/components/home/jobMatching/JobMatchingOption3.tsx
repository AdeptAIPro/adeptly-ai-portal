
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
    <section className="py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4">AI-Powered Talent Matching</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find the perfect candidates for your positions or submit your resume to be matched with future opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white rounded-2xl shadow-sm overflow-hidden">
            {/* Job Description Section */}
            <div className="lg:col-span-4 p-6 border-r border-gray-100">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold">Enter Job Description</h3>
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
                            className="min-h-[180px] resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          More details = better matches
                        </FormDescription>
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSearching} 
                    className="w-full bg-blue-600 hover:bg-blue-700"
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
            <div className="lg:col-span-4 p-6 border-r border-gray-100">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold">Matching Results</h3>
              </div>
              
              {!matches && !isSearching ? (
                <div className="h-[220px] flex items-center justify-center border-2 border-dashed rounded-lg p-4 bg-gray-50">
                  <p className="text-center text-gray-500">
                    Enter a job description to see matching candidates
                  </p>
                </div>
              ) : isSearching ? (
                <div className="h-[220px] flex items-center justify-center">
                  <div className="text-center">
                    <svg className="animate-spin h-10 w-10 text-blue-600 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <p className="text-blue-600 font-medium">Finding the best matches...</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-3 max-h-[300px] overflow-auto pr-2">
                  {matches && matches.map((match) => (
                    <div key={match.id} className="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition duration-150">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-medium">{match.name}</h4>
                        <span className="text-blue-600 font-bold">{match.matchScore}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div 
                          className="bg-blue-600 h-1.5 rounded-full" 
                          style={{ width: `${match.matchScore}%` }}
                        ></div>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {match.topSkills.map((skill, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">
                            {skill}
                          </span>
                        ))}
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
            <div className="lg:col-span-4 p-6">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold">Submit Your Resume</h3>
              </div>
              
              <div className="mb-6">
                <Link to="/marketplace/talent">
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 group"
                  >
                    Talent Marketplace
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
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
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                      <Upload className="w-8 h-8 text-blue-600" />
                    </div>
                    <p className="text-center font-medium">
                      Click to upload your resume
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      PDF, DOC, DOCX (MAX. 5MB)
                    </p>
                  </label>
                </div>
                
                {uploadStatus === "error" && (
                  <div className="flex items-center gap-2 text-red-600 text-sm p-3 bg-red-50 rounded-lg">
                    <span>{errorMessage}</span>
                  </div>
                )}
                
                {file && uploadStatus !== "error" && (
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="flex items-center">
                      <div className="bg-blue-100 rounded-md p-2 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="text-sm flex-1 truncate">
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
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  {uploadStatus === "success" ? "Resume Uploaded!" : "Upload Resume"}
                  {uploadStatus !== "success" && <Upload className="ml-2 h-4 w-4" />}
                </Button>
                
                {uploadStatus === "success" && (
                  <p className="text-sm text-green-600 bg-green-50 p-3 rounded-lg text-center">
                    Thank you for your submission!
                  </p>
                )}
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-sm text-gray-500 text-center">
            <p>Our AI analyzes job descriptions and resumes to provide the best possible matches.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobMatchingOption3;

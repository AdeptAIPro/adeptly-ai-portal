
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Upload, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
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

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight text-center">
            AI-Powered Talent Matching
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Find the perfect candidates for your positions or submit your resume to be matched with future opportunities.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 rounded-xl overflow-hidden shadow-2xl">
            {/* Job Description Section */}
            <div className="bg-white p-8">
              <h3 className="text-2xl font-bold mb-6">Enter Job Description</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSearch)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="jobDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Job Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe the job position, required skills..."
                            className="min-h-[200px] resize-none"
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
                    className="w-full"
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
            <div className="bg-white p-8 border-x border-gray-100">
              <h3 className="text-2xl font-bold mb-6">Matching Results</h3>
              
              {!matches && !isSearching ? (
                <div className="h-[250px] flex items-center justify-center border-2 border-dashed rounded-lg p-4">
                  <p className="text-center text-muted-foreground">
                    Enter a job description to see matching candidates
                  </p>
                </div>
              ) : isSearching ? (
                <div className="h-[250px] flex items-center justify-center">
                  <div className="text-center">
                    <svg className="animate-spin h-12 w-12 text-primary mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <p className="text-primary font-medium">Finding the best matches...</p>
                  </div>
                </div>
              ) : (
                <div className="overflow-auto max-h-[350px]">
                  <Table>
                    <TableHeader className="bg-gray-50">
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Match</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {matches && matches.map((match) => (
                        <TableRow key={match.id} className="hover:bg-gray-50">
                          <TableCell className="font-medium">{match.name}</TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                                <div 
                                  className="bg-primary h-2.5 rounded-full" 
                                  style={{ width: `${match.matchScore}%` }}
                                ></div>
                              </div>
                              <span className="whitespace-nowrap font-medium">{match.matchScore}%</span>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  
                  <p className="text-sm text-muted-foreground mt-4">
                    {matches && `Showing top ${matches.length} candidates`}
                  </p>
                </div>
              )}
            </div>
            
            {/* Resume Upload Section */}
            <div className="bg-white p-8">
              <h3 className="text-2xl font-bold mb-6">Submit Your Resume</h3>
              
              <div className="mb-6">
                <Link to="/marketplace/talent">
                  <Button 
                    variant="outline"
                    className="w-full group"
                  >
                    Talent Marketplace
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              
              <div className="space-y-4">
                <div className="relative border-2 border-dashed rounded-xl p-4 bg-gray-50">
                  <input
                    type="file"
                    id="resume-upload"
                    className="sr-only"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                  />
                  <label
                    htmlFor="resume-upload"
                    className="flex flex-col items-center justify-center w-full h-32 cursor-pointer"
                  >
                    <div className="flex flex-col items-center justify-center pt-3 pb-3">
                      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center">
                        <Upload className="w-7 h-7 text-primary" />
                      </div>
                      <p className="mt-2 text-sm text-center">
                        <span className="font-medium">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        PDF, DOC, DOCX (MAX. 5MB)
                      </p>
                    </div>
                  </label>
                </div>
                
                {uploadStatus === "error" && (
                  <div className="flex items-center gap-2 text-destructive text-sm p-2 bg-destructive/10 rounded-md">
                    <span>{errorMessage}</span>
                  </div>
                )}
                
                {file && uploadStatus !== "error" && (
                  <div className="flex items-center gap-2">
                    <div className="text-sm truncate flex-1 border p-3 rounded-md bg-gray-50">
                      <p className="font-medium truncate">{file.name}</p>
                      <p className="text-muted-foreground">
                        {Math.round(file.size / 1024)} KB
                      </p>
                    </div>
                  </div>
                )}
                
                <Button 
                  onClick={handleUpload} 
                  disabled={!file || uploadStatus === "success"} 
                  className="w-full"
                >
                  {uploadStatus === "success" ? "Resume Uploaded!" : "Upload Resume"}
                  {uploadStatus !== "success" && <Upload className="ml-2 h-4 w-4" />}
                </Button>
                
                {uploadStatus === "success" && (
                  <p className="text-sm text-green-600 bg-green-50 p-2 rounded-md text-center">
                    Thank you for your submission!
                  </p>
                )}
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-sm text-muted-foreground text-center">
            <p>Our AI analyzes job descriptions and resumes to provide the best possible matches.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JobMatchingOption2;

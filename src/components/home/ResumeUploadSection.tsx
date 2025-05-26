
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Check, AlertCircle, ArrowRight, Star, Users, TrendingUp, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ResumeUploadSection = () => {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    
    if (!selectedFile) {
      return;
    }
    
    // Check file type
    const fileType = selectedFile.type;
    const validTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    
    if (!validTypes.includes(fileType)) {
      setStatus("error");
      setErrorMessage("Invalid file format. Please upload PDF, DOC, or DOCX files only.");
      setFile(null);
      return;
    }
    
    // Check file size (5MB = 5 * 1024 * 1024 bytes)
    if (selectedFile.size > 5 * 1024 * 1024) {
      setStatus("error");
      setErrorMessage("File is too large. Maximum size is 5MB.");
      setFile(null);
      return;
    }
    
    setFile(selectedFile);
    setStatus("idle");
    setErrorMessage("");
  };
  
  const handleSubmit = () => {
    if (!file) return;
    
    // Here you would normally send the file to your server
    // For now we'll just simulate a successful upload
    setTimeout(() => {
      setStatus("success");
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
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          {/* Header with Strong Value Proposition */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Star className="h-4 w-4" />
              <span>Trusted by 2,000+ professionals</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 tracking-tight">
              Get Discovered by Your Dream Employer
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Upload your resume and let our AI connect you with exclusive job opportunities. 
              Join thousands of professionals who've already found their perfect match.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">95% Success Rate</h3>
                <p className="text-sm text-muted-foreground">Most candidates get matched within 3 days</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">100% Confidential</h3>
                <p className="text-sm text-muted-foreground">Your data is encrypted and secure</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold mb-2">Exclusive Access</h3>
                <p className="text-sm text-muted-foreground">Hidden job market at top companies</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Upload Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Submit Your Resume</h3>
              
              {/* Prominent CTA Button */}
              <div className="mb-6">
                <Link to="/marketplace/talent">
                  <Button 
                    size="lg"
                    className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-medium py-6 text-lg"
                  >
                    Explore Talent Marketplace
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              
              <div className="relative mb-6">
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                  OR
                </div>
                <div className="border-t border-gray-200"></div>
              </div>
              
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="file"
                    id="resume-upload"
                    className="sr-only"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  />
                  <label
                    htmlFor="resume-upload"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 border-gray-300 transition-colors"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-2 text-gray-400" />
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        PDF, DOC, DOCX (MAX. 5MB)
                      </p>
                    </div>
                  </label>
                </div>
                
                {status === "error" && (
                  <div className="flex items-center gap-2 text-destructive text-sm">
                    <AlertCircle className="h-4 w-4" />
                    <span>{errorMessage}</span>
                  </div>
                )}
                
                {file && status !== "error" && (
                  <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{file.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {Math.round(file.size / 1024)} KB - Ready to upload
                      </p>
                    </div>
                  </div>
                )}
                
                <Button 
                  onClick={handleSubmit} 
                  disabled={!file || status === "success"} 
                  className="w-full"
                  size="lg"
                >
                  {status === "success" ? "Resume Uploaded Successfully!" : "Upload Resume"}
                  {status !== "success" && <Upload className="ml-2 h-4 w-4" />}
                </Button>
                
                {status === "success" && (
                  <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                    <Check className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <p className="text-sm text-green-800 font-medium mb-1">
                      Thank you for your submission!
                    </p>
                    <p className="text-xs text-green-600">
                      Our AI is analyzing your profile. We'll contact you when we find matching opportunities.
                    </p>
                  </div>
                )}
              </div>
              
              <div className="text-xs text-muted-foreground text-center mt-4 space-y-1">
                <p>✓ Your resume stays confidential until you choose to share</p>
                <p>✓ No spam - only relevant opportunities</p>
                <p>✓ Free career insights and skill analysis</p>
              </div>
            </div>

            {/* Right side - Social Proof */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-600">SJ</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Sarah Johnson</p>
                    <p className="text-xs text-muted-foreground">Software Engineer at Microsoft</p>
                  </div>
                  <div className="ml-auto flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  "Uploaded my resume on Monday, had 3 interviews by Friday. The AI matching is incredible!"
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-green-600">MR</span>
                  </div>
                  <div>
                    <p className="font-medium text-sm">Mike Rodriguez</p>
                    <p className="text-xs text-muted-foreground">Data Scientist at Google</p>
                  </div>
                  <div className="ml-auto flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  "40% salary increase! The platform found opportunities I never would have discovered."
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6">
                <h4 className="font-semibold mb-2">Join Our Success Stories</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-2xl font-bold">2,000+</p>
                    <p className="text-blue-100">Successful Placements</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">48hrs</p>
                    <p className="text-blue-100">Avg. Response Time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeUploadSection;

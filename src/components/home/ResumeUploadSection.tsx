
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, Check, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

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
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 tracking-tight">
            Looking for new career opportunities?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            Submit your resume to be considered for future openings that match your skills and experience. 
            Our recruitment team regularly reviews uploaded resumes and will contact you if there's a fit. 
            Upload your file below and take the first step toward your next job.
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-sm mb-6">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="w-full max-w-sm">
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
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 border-gray-300"
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
                  <div className="mt-4 flex items-center gap-2 text-destructive text-sm">
                    <AlertCircle className="h-4 w-4" />
                    <span>{errorMessage}</span>
                  </div>
                )}
                
                {file && status !== "error" && (
                  <div className="mt-4 flex items-center gap-2">
                    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-sm">
                      <p className="font-medium">{file.name}</p>
                      <p className="text-muted-foreground">
                        {Math.round(file.size / 1024)} KB
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              <Button 
                onClick={handleSubmit} 
                disabled={!file || status === "success"} 
                className="mt-4"
                size="lg"
              >
                {status === "success" ? "Resume Uploaded!" : "Upload Resume"}
                {status !== "success" && <Upload className="ml-2 h-4 w-4" />}
              </Button>
              
              {status === "success" && (
                <p className="text-sm text-green-600 mt-2">
                  Thank you for your submission! We'll contact you if there's a match.
                </p>
              )}
            </div>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>Accepted Formats: PDF, DOC, DOCX</p>
            <p>Maximum File Size: 5MB</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeUploadSection;

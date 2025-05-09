
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";

const TalentMarketplace = () => {
  return (
    <div className="container mx-auto py-12 px-3 sm:px-4 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-3">Upload Your Resume</h1>
        <p className="text-lg text-muted-foreground">
          Submit your resume to be discovered by top employers
        </p>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm">
        <form className="space-y-5">
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input 
              id="fullName" 
              placeholder="John Doe" 
              className="mt-1"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="you@example.com" 
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input 
                id="phoneNumber" 
                placeholder="(123) 456-7890" 
                className="mt-1"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="skills">Skills (comma separated)</Label>
            <Input 
              id="skills" 
              placeholder="JavaScript, React, Node.js" 
              className="mt-1"
            />
            <p className="text-sm text-muted-foreground mt-1">
              List your top skills to help employers find you
            </p>
          </div>
          
          <div>
            <Label htmlFor="experience">Experience Summary (optional)</Label>
            <Textarea 
              id="experience" 
              placeholder="Briefly describe your experience and background" 
              className="mt-1 min-h-[120px]"
            />
          </div>
          
          <div>
            <Label>Resume</Label>
            <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-5 flex flex-col items-center justify-center">
              <Upload className="h-8 w-8 text-gray-400 mb-2" />
              <p className="text-sm text-gray-500">
                <span className="font-medium">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500 mt-1">
                PDF, DOC, DOCX (MAX. 5MB)
              </p>
              <input 
                type="file" 
                className="hidden" 
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
              />
              <Button variant="outline" className="mt-4">
                Select File
              </Button>
            </div>
          </div>
          
          <div className="flex justify-end">
            <Button 
              type="submit" 
              size="lg"
              className="mt-2"
            >
              Submit Application
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TalentMarketplace;

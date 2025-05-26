
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Upload, CheckCircle, Circle, ArrowRight } from "lucide-react";

const JobSearchDesign9 = () => {
  const [completedSteps, setCompletedSteps] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState<number>(1);

  const steps = [
    { id: 1, title: "Basic Info", description: "Name and contact details" },
    { id: 2, title: "Experience", description: "Professional background" },
    { id: 3, title: "Skills", description: "Technical and soft skills" },
    { id: 4, title: "Resume", description: "Upload your resume" },
    { id: 5, title: "Preferences", description: "Job preferences" }
  ];

  const progress = (completedSteps / steps.length) * 100;

  const completeStep = () => {
    if (currentStep <= steps.length) {
      setCompletedSteps(currentStep);
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Complete Your Profile</h2>
            <p className="text-lg text-gray-600">Follow these steps to get the best job matches</p>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium">Profile Completion</span>
              <span className="text-sm font-medium">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            <div className="space-y-3">
              {steps.map((step) => (
                <div 
                  key={step.id} 
                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    step.id === currentStep 
                      ? 'bg-blue-100 border border-blue-300' 
                      : completedSteps >= step.id 
                        ? 'bg-green-50 border border-green-200' 
                        : 'bg-white border border-gray-200'
                  }`}
                >
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                    completedSteps >= step.id 
                      ? 'bg-green-500 text-white' 
                      : step.id === currentStep 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-200'
                  }`}>
                    {completedSteps >= step.id ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <span className="text-xs font-bold">{step.id}</span>
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{step.title}</p>
                    <p className="text-xs text-gray-500">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle>
                    Step {currentStep}: {steps[currentStep - 1]?.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {currentStep === 1 && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" className="mt-1" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" className="mt-1" />
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="currentTitle">Current Job Title</Label>
                        <Input id="currentTitle" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="currentCompany">Current Company</Label>
                        <Input id="currentCompany" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="experience">Years of Experience</Label>
                        <select className="w-full mt-1 px-3 py-2 border border-input rounded-md">
                          <option>0-2 years</option>
                          <option>3-5 years</option>
                          <option>6-10 years</option>
                          <option>10+ years</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="primarySkills">Primary Skills</Label>
                        <Input id="primarySkills" placeholder="JavaScript, React, Node.js..." className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="secondarySkills">Secondary Skills</Label>
                        <Input id="secondarySkills" placeholder="Git, Docker, AWS..." className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="certifications">Certifications (Optional)</Label>
                        <Input id="certifications" placeholder="AWS Certified, PMP..." className="mt-1" />
                      </div>
                    </div>
                  )}

                  {currentStep === 4 && (
                    <div className="space-y-4">
                      <div className="border-2 border-dashed border-indigo-300 rounded-lg p-8 text-center bg-indigo-50">
                        <Upload className="h-12 w-12 text-indigo-500 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Upload Your Resume</h3>
                        <p className="text-gray-600 mb-4">Help us understand your background better</p>
                        <Button className="bg-indigo-600 hover:bg-indigo-700">
                          Choose File
                        </Button>
                        <p className="text-sm text-gray-500 mt-2">PDF, DOC, DOCX (Max 10MB)</p>
                      </div>
                    </div>
                  )}

                  {currentStep === 5 && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="desiredRole">Desired Job Title</Label>
                        <Input id="desiredRole" className="mt-1" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="location">Preferred Location</Label>
                          <Input id="location" placeholder="City, State or Remote" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="salaryRange">Salary Range</Label>
                          <select className="w-full mt-1 px-3 py-2 border border-input rounded-md">
                            <option>$50,000 - $70,000</option>
                            <option>$70,000 - $90,000</option>
                            <option>$90,000 - $120,000</option>
                            <option>$120,000+</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep > 5 && (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">Profile Complete!</h3>
                      <p className="text-gray-600 mb-6">We're now finding the best job matches for you.</p>
                      <Button className="bg-green-600 hover:bg-green-700" size="lg">
                        View My Matches
                      </Button>
                    </div>
                  )}

                  {currentStep <= 5 && (
                    <div className="flex justify-end mt-6">
                      <Button onClick={completeStep} className="bg-blue-600 hover:bg-blue-700">
                        {currentStep === 5 ? 'Complete Profile' : 'Next Step'}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSearchDesign9;

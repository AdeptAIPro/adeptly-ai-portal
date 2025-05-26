
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Briefcase, MapPin, Clock } from "lucide-react";

const JobSearchDesign2 = () => {
  const [step, setStep] = useState(1);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Get Started in 3 Steps</h2>
            <div className="flex justify-center items-center space-x-4 mb-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step >= i ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {i}
                  </div>
                  {i < 3 && <div className="w-12 h-1 bg-gray-200 mx-2"></div>}
                </div>
              ))}
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {step === 1 && <><Briefcase className="h-5 w-5" /> Personal Information</>}
                {step === 2 && <><MapPin className="h-5 w-5" /> Job Preferences</>}
                {step === 3 && <><Upload className="h-5 w-5" /> Upload Resume</>}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {step === 1 && (
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
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" className="mt-1" />
                  </div>
                </div>
              )}
              
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="jobTitle">Desired Job Title</Label>
                    <Input id="jobTitle" placeholder="Software Engineer, Data Scientist..." className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="salary">Expected Salary Range</Label>
                    <select className="w-full mt-1 px-3 py-2 border border-input rounded-md">
                      <option>$50,000 - $70,000</option>
                      <option>$70,000 - $90,000</option>
                      <option>$90,000 - $120,000</option>
                      <option>$120,000+</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="workType">Work Type</Label>
                    <select className="w-full mt-1 px-3 py-2 border border-input rounded-md">
                      <option>Full-time</option>
                      <option>Part-time</option>
                      <option>Contract</option>
                      <option>Freelance</option>
                    </select>
                  </div>
                </div>
              )}
              
              {step === 3 && (
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-blue-300 rounded-lg p-8 text-center bg-blue-50">
                    <Upload className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Upload Your Resume</h3>
                    <p className="text-gray-600 mb-4">Our AI will analyze your skills and experience</p>
                    <Button variant="outline">Choose File</Button>
                  </div>
                </div>
              )}
              
              <div className="flex justify-between mt-6">
                {step > 1 && (
                  <Button variant="outline" onClick={() => setStep(step - 1)}>
                    Previous
                  </Button>
                )}
                <div className="ml-auto">
                  {step < 3 ? (
                    <Button onClick={() => setStep(step + 1)}>
                      Next
                    </Button>
                  ) : (
                    <Button className="bg-green-600 hover:bg-green-700">
                      Find Jobs
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default JobSearchDesign2;

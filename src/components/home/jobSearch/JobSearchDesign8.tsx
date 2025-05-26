
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Upload, MapPin, DollarSign, Clock, Building } from "lucide-react";

const JobSearchDesign8 = () => {
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);

  const preferences = [
    "Remote Work", "Flexible Hours", "Startup Environment", "Large Corporation",
    "Work-Life Balance", "High Growth", "Creative Freedom", "Team Collaboration",
    "Leadership Opportunities", "Learning & Development", "Competitive Salary", "Stock Options"
  ];

  const togglePreference = (pref: string) => {
    setSelectedPreferences(prev => 
      prev.includes(pref) 
        ? prev.filter(p => p !== pref)
        : [...prev, pref]
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Build Your Career Profile</h2>
            <p className="text-lg text-gray-600">Help us understand what you're looking for in your next role</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Building className="h-5 w-5 text-blue-600" />
                    Professional Details
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="title">Current Job Title</Label>
                      <Input id="title" placeholder="e.g., Senior Developer" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="company">Current Company</Label>
                      <Input id="company" className="mt-1" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-green-600" />
                    Job Preferences
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="location">Preferred Location</Label>
                      <Input id="location" placeholder="City, State or Remote" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="jobType">Job Type</Label>
                      <select className="w-full mt-1 px-3 py-2 border border-input rounded-md">
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Contract</option>
                        <option>Consulting</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <Label className="mb-3 block">What's important to you? (Select all that apply)</Label>
                    <div className="flex flex-wrap gap-2">
                      {preferences.map((pref) => (
                        <Badge
                          key={pref}
                          variant={selectedPreferences.includes(pref) ? "default" : "outline"}
                          className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                          onClick={() => togglePreference(pref)}
                        >
                          {pref}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-yellow-600" />
                    Salary Expectations
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="minSalary">Minimum Salary</Label>
                      <Input id="minSalary" placeholder="$75,000" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="maxSalary">Target Salary</Label>
                      <Input id="maxSalary" placeholder="$95,000" className="mt-1" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Resume Upload</h3>
                  <div className="border-2 border-dashed border-green-300 rounded-lg p-6 text-center bg-green-50">
                    <Upload className="h-10 w-10 text-green-600 mx-auto mb-3" />
                    <p className="font-medium text-green-700">Upload Resume</p>
                    <p className="text-sm text-green-600 mb-3">PDF, DOC, DOCX</p>
                    <Button variant="outline" size="sm">Choose File</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Quick Stats</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Active Jobs</span>
                      <span className="font-bold">2,847</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">New This Week</span>
                      <span className="font-bold">156</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Avg. Response Time</span>
                      <span className="font-bold">18 hours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-3">
                <Clock className="mr-2 h-4 w-4" />
                Start Job Matching
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSearchDesign8;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Upload, X, Plus } from "lucide-react";

const JobSearchDesign3 = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Smart Job Matching
            </h2>
            <p className="text-xl text-gray-600">Tell us about yourself and we'll find the perfect opportunities</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Basic Information</h3>
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
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="City, State" className="mt-1" />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Skills & Experience</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="experience">Years of Experience</Label>
                    <select className="w-full mt-1 px-3 py-2 border border-input rounded-md">
                      <option>0-1 years</option>
                      <option>2-4 years</option>
                      <option>5-7 years</option>
                      <option>8-10 years</option>
                      <option>10+ years</option>
                    </select>
                  </div>
                  <div>
                    <Label>Skills</Label>
                    <div className="flex gap-2 mt-1">
                      <Input 
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        placeholder="Add a skill"
                        onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                      />
                      <Button type="button" onClick={addSkill} size="sm">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="flex items-center gap-1">
                          {skill}
                          <X className="h-3 w-3 cursor-pointer" onClick={() => removeSkill(skill)} />
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="bio">Professional Summary</Label>
                    <Textarea id="bio" placeholder="Brief description of your experience and goals" className="mt-1" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-b from-orange-50 to-red-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Resume Upload</h3>
                <div className="border-2 border-dashed border-orange-300 rounded-lg p-6 text-center">
                  <Upload className="h-10 w-10 text-orange-500 mx-auto mb-3" />
                  <p className="font-medium">Drop resume here</p>
                  <p className="text-sm text-gray-600 mb-3">or click to browse</p>
                  <Button variant="outline" size="sm">Browse Files</Button>
                </div>
              </div>

              <div className="bg-gray-900 text-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    AI-powered job matching
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Access to exclusive opportunities
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Confidential job search
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Direct employer connections
                  </li>
                </ul>
                <Button className="w-full mt-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                  Start Job Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobSearchDesign3;

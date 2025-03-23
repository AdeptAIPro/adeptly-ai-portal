
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Search, 
  Filter, 
  Zap, 
  Users, 
  User, 
  CheckCircle2, 
  Star, 
  Briefcase, 
  MapPin, 
  ArrowRight,
  CornerDownRight
} from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

// Sample data for the talent matching interface
const mockJobs = [
  { id: 1, title: "Senior Software Engineer", department: "Engineering", requirements: "JavaScript, React, Node.js", location: "Remote", matches: 18 },
  { id: 2, title: "UX Designer", department: "Product", requirements: "Figma, User Research, Prototyping", location: "San Francisco, CA", matches: 12 },
  { id: 3, title: "Product Manager", department: "Product", requirements: "Agile, Stakeholder Management, Data Analysis", location: "New York, NY", matches: 7 },
  { id: 4, title: "DevOps Engineer", department: "IT Operations", requirements: "AWS, Kubernetes, CI/CD", location: "Remote", matches: 5 },
];

const mockCandidates = [
  { 
    id: 1, 
    name: "Alex Johnson", 
    title: "Full Stack Developer",
    skills: ["JavaScript", "React", "Node.js", "GraphQL", "MongoDB"],
    experience: "8 years",
    location: "Seattle, WA",
    matchScore: 92,
    source: "Workday"
  },
  { 
    id: 2, 
    name: "Maya Patel", 
    title: "Senior Frontend Engineer",
    skills: ["JavaScript", "React", "TypeScript", "CSS", "HTML"],
    experience: "6 years",
    location: "Remote",
    matchScore: 88,
    source: "LinkedIn Jobs"
  },
  { 
    id: 3, 
    name: "Thomas Wilson", 
    title: "Software Engineer",
    skills: ["JavaScript", "React", "Node.js", "AWS", "Docker"],
    experience: "4 years",
    location: "Austin, TX",
    matchScore: 85,
    source: "Workday"
  },
  { 
    id: 4, 
    name: "Sarah Chen", 
    title: "Backend Developer",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Python"],
    experience: "5 years",
    location: "Remote",
    matchScore: 78,
    source: "SAP Fieldglass"
  },
  { 
    id: 5, 
    name: "James Rodriguez", 
    title: "Full Stack Engineer",
    skills: ["JavaScript", "React", "Node.js", "Redux", "Firebase"],
    experience: "3 years",
    location: "Chicago, IL",
    matchScore: 76,
    source: "LinkedIn Jobs"
  },
];

const TalentMatchingPanel = () => {
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);
  const [isMatching, setIsMatching] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [matchingCriteria, setMatchingCriteria] = useState("skills");
  const [showMatchedOnly, setShowMatchedOnly] = useState(false);
  
  // Filter candidates based on search term and other filters
  const filteredCandidates = mockCandidates
    .filter(candidate => {
      if (searchTerm === "") return true;
      
      const searchLower = searchTerm.toLowerCase();
      return (
        candidate.name.toLowerCase().includes(searchLower) ||
        candidate.title.toLowerCase().includes(searchLower) ||
        candidate.skills.some(skill => skill.toLowerCase().includes(searchLower))
      );
    })
    .filter(candidate => {
      if (!showMatchedOnly) return true;
      return candidate.matchScore > 80;
    });

  const handleJobSelect = (jobId: number) => {
    setSelectedJobId(jobId);
  };

  const handleRunMatching = async () => {
    if (!selectedJobId) {
      toast.error("Please select a job first");
      return;
    }
    
    setIsMatching(true);
    setProgressValue(0);
    
    // Simulated progress
    const interval = setInterval(() => {
      setProgressValue(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success("AI talent matching completed");
    } catch (error) {
      toast.error("Error during talent matching");
    } finally {
      clearInterval(interval);
      setProgressValue(100);
      setTimeout(() => {
        setIsMatching(false);
      }, 500);
    }
  };

  const selectedJob = mockJobs.find(job => job.id === selectedJobId);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold mb-1">AI Talent Matching</h2>
          <p className="text-muted-foreground">
            Match job requirements with candidate profiles
          </p>
        </div>
        <Button 
          className="gap-2"
          onClick={handleRunMatching}
          disabled={!selectedJobId || isMatching}
        >
          <Zap className="h-4 w-4" />
          {isMatching ? "Running AI Matching..." : "Run AI Matching"}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Job Selection Panel */}
        <Card>
          <CardHeader>
            <CardTitle>Select a Job</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search jobs..." className="pl-9" />
            </div>
            
            <div className="space-y-3 mt-2">
              {mockJobs.map(job => (
                <motion.div 
                  key={job.id}
                  whileHover={{ y: -2 }}
                  className={`p-4 border rounded-lg cursor-pointer transition-all ${
                    selectedJobId === job.id 
                      ? 'bg-primary/10 border-primary/50' 
                      : 'hover:bg-accent/5 border-border'
                  }`}
                  onClick={() => handleJobSelect(job.id)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">{job.title}</h3>
                    <Badge variant="outline">{job.matches} matches</Badge>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                    <Briefcase className="h-3 w-3 mr-1" />
                    {job.department}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                    <MapPin className="h-3 w-3 mr-1" />
                    {job.location}
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">
                    <span className="font-medium">Skills:</span> {job.requirements}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="space-y-4 mt-4">
              <h3 className="font-medium">Matching Criteria</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>Priority matching criteria</Label>
                  <Select defaultValue="skills" onValueChange={setMatchingCriteria}>
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Select criteria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="skills">Skills</SelectItem>
                      <SelectItem value="experience">Experience</SelectItem>
                      <SelectItem value="location">Location</SelectItem>
                      <SelectItem value="balanced">Balanced</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch 
                    id="show-matched-only" 
                    checked={showMatchedOnly}
                    onCheckedChange={setShowMatchedOnly}
                  />
                  <Label htmlFor="show-matched-only">Show high matches only (&gt;80%)</Label>
                </div>
              </div>
            </div>
            
            {isMatching && (
              <div className="mt-4">
                <Progress value={progressValue} className="h-2" />
                <p className="text-xs text-center mt-1 text-muted-foreground">
                  Analyzing candidate profiles...
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Candidates List */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>
              {selectedJob 
                ? `Candidates for ${selectedJob.title}`
                : "Candidate Matches"}
            </CardTitle>
            <div className="flex items-center gap-2">
              <div className="relative w-[200px]">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search candidates..." 
                  className="pl-9"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {filteredCandidates.length > 0 ? (
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Candidate</TableHead>
                      <TableHead>Skills</TableHead>
                      <TableHead>Match</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredCandidates.map((candidate) => (
                      <TableRow key={candidate.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                              {candidate.name.charAt(0)}
                            </div>
                            <div>
                              <div className="font-medium">{candidate.name}</div>
                              <div className="text-sm text-muted-foreground flex items-center gap-1">
                                <Briefcase className="h-3 w-3" />
                                {candidate.title}
                              </div>
                              <div className="text-sm text-muted-foreground flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {candidate.location}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1 max-w-[200px]">
                            {candidate.skills.slice(0, 3).map((skill, i) => (
                              <Badge key={i} variant="outline" className="bg-muted/50">
                                {skill}
                              </Badge>
                            ))}
                            {candidate.skills.length > 3 && (
                              <Badge variant="outline">+{candidate.skills.length - 3}</Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${
                              candidate.matchScore >= 90 ? 'bg-green-600' :
                              candidate.matchScore >= 80 ? 'bg-green-500' :
                              candidate.matchScore >= 70 ? 'bg-amber-500' : 'bg-gray-400'
                            }`} />
                            <span className={`${
                              candidate.matchScore >= 90 ? 'text-green-600 dark:text-green-400' :
                              candidate.matchScore >= 80 ? 'text-green-500 dark:text-green-500' :
                              candidate.matchScore >= 70 ? 'text-amber-500 dark:text-amber-400' : 'text-gray-500'
                            } font-medium`}>
                              {candidate.matchScore}%
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex gap-1 justify-end">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <User className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Star className="h-4 w-4" />
                            </Button>
                            <Button variant="default" size="sm">
                              View
                              <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-[400px] p-6 text-center">
                <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium mb-1">No candidates found</h3>
                <p className="text-muted-foreground max-w-md">
                  {selectedJob 
                    ? "Try adjusting your search filters or selecting a different job." 
                    : "Please select a job to see matching candidates."}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* AI Insights Section */}
      {selectedJob && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">AI Insights</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Skill Gap Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>JavaScript</span>
                    <span className="text-green-600">Strong Match (87%)</span>
                  </div>
                  <Progress value={87} className="h-2" />
                  
                  <div className="flex justify-between text-sm">
                    <span>React</span>
                    <span className="text-green-600">Strong Match (92%)</span>
                  </div>
                  <Progress value={92} className="h-2" />
                  
                  <div className="flex justify-between text-sm">
                    <span>Node.js</span>
                    <span className="text-amber-600">Moderate Match (65%)</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                
                <div className="border-l-4 border-amber-500 pl-4 py-2 bg-amber-50 dark:bg-amber-950/20 rounded-r-md">
                  <p className="text-sm font-medium text-amber-800 dark:text-amber-300">
                    Skill Gap Alert
                  </p>
                  <p className="text-sm text-amber-700 dark:text-amber-400">
                    Consider candidates with strong React skills even if Node.js experience is limited.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>AI Recommendations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    "Focus on candidates with full-stack experience, especially those familiar with modern JavaScript frameworks.",
                    "Remote candidates show high match scores, consider expanding your search nationwide.",
                    "Maya Patel and Alex Johnson are top matches based on technical skills and experience level."
                  ].map((recommendation, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CornerDownRight className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <p className="text-sm">{recommendation}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between mt-4">
                  <Button variant="outline">
                    Export Insights
                  </Button>
                  <Button>
                    Apply Recommendations
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default TalentMatchingPanel;

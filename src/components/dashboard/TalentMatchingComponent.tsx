
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { 
  Search, 
  Filter, 
  Zap, 
  Users, 
  FileText, 
  User, 
  CheckCircle2, 
  Star, 
  Briefcase, 
  BookOpen, 
  Gauge, 
  MapPin, 
  BarChart3 
} from "lucide-react";

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

// Mock function for AI talent matching
const runTalentMatching = (jobId: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      toast.success("AI talent matching completed");
      resolve();
    }, 2000);
  });
};

const TalentMatchingComponent = () => {
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
      await runTalentMatching(selectedJobId);
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Job Selection & Matching Criteria */}
        <Card className="dashboard-card lg:col-span-1">
          <CardHeader className="dashboard-card-header">
            <CardTitle className="dark-high-contrast">Job Selection</CardTitle>
            <CardDescription className="dark-muted-text">
              Select a job to match with candidates
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-4">
              {mockJobs.map(job => (
                <div 
                  key={job.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedJobId === job.id 
                      ? 'bg-primary/10 border-primary/50 dark:bg-primary/20' 
                      : 'border-border hover:bg-muted/50'
                  }`}
                  onClick={() => handleJobSelect(job.id)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium dark-high-contrast">{job.title}</h3>
                    <Badge variant="outline">{job.matches} matches</Badge>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground dark-muted-text mb-1">
                    <Briefcase className="h-3 w-3 mr-1" />
                    {job.department}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground dark-muted-text mb-1">
                    <MapPin className="h-3 w-3 mr-1" />
                    {job.location}
                  </div>
                  <div className="text-sm text-muted-foreground dark-muted-text mt-2">
                    <span className="font-medium">Requirements:</span> {job.requirements}
                  </div>
                </div>
              ))}
            </div>

            <Separator className="my-6" />

            <div className="space-y-4">
              <h3 className="font-medium dark-high-contrast">Matching Criteria</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm dark-muted-text">Priority matching criteria</label>
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
                  <Label htmlFor="show-matched-only">Show high matches only (>80%)</Label>
                </div>
              </div>
            </div>

            <Button 
              className="w-full mt-6"
              onClick={handleRunMatching}
              disabled={!selectedJobId || isMatching}
            >
              <Zap className="h-4 w-4 mr-2" />
              {isMatching ? "Running AI Matching..." : "Run AI Talent Matching"}
            </Button>
            
            {isMatching && (
              <div className="mt-4">
                <Progress value={progressValue} className="h-2" />
                <p className="text-xs text-center mt-1 text-muted-foreground dark-muted-text">
                  Analyzing candidate profiles...
                </p>
              </div>
            )}
          </CardContent>
        </Card>
        
        {/* Candidates List */}
        <Card className="dashboard-card lg:col-span-2">
          <CardHeader className="dashboard-card-header">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="dark-high-contrast">Candidate Matches</CardTitle>
                <CardDescription className="dark-muted-text">
                  {selectedJob 
                    ? `Candidates matching "${selectedJob.title}"`
                    : "Select a job to see matching candidates"}
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative w-64">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    type="search" 
                    placeholder="Search candidates..." 
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {filteredCandidates.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Candidate</TableHead>
                    <TableHead>Skills</TableHead>
                    <TableHead>Experience</TableHead>
                    <TableHead>Match Score</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead className="w-[80px]"></TableHead>
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
                            <div className="font-medium dark-high-contrast">{candidate.name}</div>
                            <div className="text-sm text-muted-foreground dark-muted-text">{candidate.title}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1 max-w-[240px]">
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
                      <TableCell>{candidate.experience}</TableCell>
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
                      <TableCell>
                        <Badge variant="outline" className="bg-muted/50">
                          {candidate.source}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1 justify-end">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <User className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Star className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            ) : (
              <div className="flex flex-col items-center justify-center h-[300px] p-6 text-center">
                <div className="h-12 w-12 rounded-full bg-muted/50 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium mb-1 dark-high-contrast">No matching candidates found</h3>
                <p className="text-muted-foreground dark-muted-text max-w-md">
                  Try adjusting your search filters or selecting a different job.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      
      {/* Job Analysis and Candidate Insights */}
      {selectedJob && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Job Analysis */}
          <Card className="dashboard-card">
            <CardHeader className="dashboard-card-header">
              <CardTitle className="dark-high-contrast">Job Analysis</CardTitle>
              <CardDescription className="dark-muted-text">
                AI insights for the selected role
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <Tabs defaultValue="requirements">
                <TabsList className="mb-4">
                  <TabsTrigger value="requirements">Requirements</TabsTrigger>
                  <TabsTrigger value="market">Market Analysis</TabsTrigger>
                </TabsList>
                
                <TabsContent value="requirements" className="space-y-4">
                  <div className="space-y-3">
                    <h4 className="font-medium dark-high-contrast flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      Key Skills Required
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {selectedJob.requirements.split(", ").map((skill, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-medium dark-high-contrast flex items-center gap-2 mb-3">
                      <BookOpen className="h-4 w-4 text-primary" />
                      Suggested Experience
                    </h4>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>Junior (1-3 years)</span>
                        <span className="text-amber-500">Fair match</span>
                      </div>
                      <Progress value={40} className="h-1.5" />
                      
                      <div className="flex justify-between items-center text-sm">
                        <span>Mid-level (3-5 years)</span>
                        <span className="text-green-500">Good match</span>
                      </div>
                      <Progress value={75} className="h-1.5" />
                      
                      <div className="flex justify-between items-center text-sm">
                        <span>Senior (5+ years)</span>
                        <span className="text-green-600">Excellent match</span>
                      </div>
                      <Progress value={95} className="h-1.5" />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="market" className="space-y-4">
                  <div>
                    <h4 className="font-medium dark-high-contrast flex items-center gap-2 mb-3">
                      <BarChart3 className="h-4 w-4 text-primary" />
                      Market Competitiveness
                    </h4>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span>Candidate availability</span>
                        <Badge variant="outline" className="bg-amber-100/30 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                          Moderate
                        </Badge>
                      </div>
                      <Progress value={65} className="h-1.5" />
                      
                      <div className="flex justify-between items-center text-sm">
                        <span>Salary competitiveness</span>
                        <Badge variant="outline" className="bg-green-100/30 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          Competitive
                        </Badge>
                      </div>
                      <Progress value={85} className="h-1.5" />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-medium dark-high-contrast mb-3">Location Analysis</h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium">Top locations for talent:</span> San Francisco, New York, Austin, Seattle</p>
                      <p><span className="font-medium">Remote talent pool:</span> High availability</p>
                      <p><span className="font-medium">Hiring difficulty:</span> Medium (based on requirements)</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          {/* Candidate Insights */}
          <Card className="dashboard-card">
            <CardHeader className="dashboard-card-header">
              <CardTitle className="dark-high-contrast">Candidate Insights</CardTitle>
              <CardDescription className="dark-muted-text">
                AI-powered recruitment suggestions
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium dark-high-contrast mb-3 flex items-center gap-2">
                    <Gauge className="h-4 w-4 text-primary" />
                    Match Quality Metrics
                  </h4>
                  
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "Skills Match", value: "82%", icon: <CheckCircle2 className="h-4 w-4 text-green-500" /> },
                      { label: "Experience Fit", value: "74%", icon: <User className="h-4 w-4 text-amber-500" /> },
                      { label: "Overall Quality", value: "78%", icon: <Star className="h-4 w-4 text-primary" /> }
                    ].map((metric, index) => (
                      <div key={index} className="bg-muted/30 p-3 rounded-lg text-center">
                        <div className="flex justify-center mb-1">
                          {metric.icon}
                        </div>
                        <div className="text-lg font-bold dark-high-contrast">{metric.value}</div>
                        <div className="text-xs text-muted-foreground dark-muted-text">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium dark-high-contrast mb-3">AI Suggestions</h4>
                  <Textarea 
                    className="min-h-[120px]" 
                    readOnly
                    value={`Based on the job requirements and available candidate pool:

1. Consider candidates with strong JavaScript and React experience, even if they lack Node.js experience.
2. Expand your search to include remote candidates to increase the talent pool.
3. Focus on quality of experience rather than years of experience for this role.`}
                  />
                </div>
                
                <div className="flex justify-between">
                  <Button variant="outline">
                    Export Matches
                  </Button>
                  <Button className="gap-2">
                    <Zap className="h-4 w-4" />
                    Auto-schedule Interviews
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </motion.div>
  );
};

export default TalentMatchingComponent;

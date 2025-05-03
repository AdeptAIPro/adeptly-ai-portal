
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription } from "@/components/ui/form";
import { useForm } from "react-hook-form";

type MockResumeMatch = {
  id: string;
  name: string;
  matchScore: number;
  topSkills: string[];
  experience: string;
};

// Mock data that would come from actual resume matching
const MOCK_MATCHES: MockResumeMatch[] = [
  {
    id: "1",
    name: "John Doe",
    matchScore: 92,
    topSkills: ["JavaScript", "React", "Node.js"],
    experience: "5 years"
  },
  {
    id: "2",
    name: "Jane Smith",
    matchScore: 85,
    topSkills: ["Python", "Data Analysis", "AWS"],
    experience: "3 years"
  },
  {
    id: "3",
    name: "Alex Johnson",
    matchScore: 78,
    topSkills: ["Java", "Spring Boot", "SQL"],
    experience: "7 years"
  },
  {
    id: "4",
    name: "Sarah Williams",
    matchScore: 68,
    topSkills: ["HTML/CSS", "UI/UX", "Figma"],
    experience: "2 years"
  }
];

type FormValues = {
  jobDescription: string;
};

const JobMatchingSection = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [matches, setMatches] = useState<MockResumeMatch[] | null>(null);
  
  const form = useForm<FormValues>({
    defaultValues: {
      jobDescription: "",
    }
  });
  
  const onSubmit = (data: FormValues) => {
    if (!data.jobDescription.trim()) return;
    
    setIsSearching(true);
    
    // Simulating API call to AWS services
    setTimeout(() => {
      setMatches(MOCK_MATCHES);
      setIsSearching(false);
    }, 1500);
    
    // In a real implementation, this would call your backend:
    // const fetchMatches = async () => {
    //   try {
    //     const response = await fetch('/api/match-resumes', {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify({ jobDescription: data.jobDescription })
    //     });
    //     const matchData = await response.json();
    //     setMatches(matchData);
    //   } catch (error) {
    //     console.error('Error matching resumes:', error);
    //   } finally {
    //     setIsSearching(false);
    //   }
    // };
    // fetchMatches();
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 tracking-tight">
            Find the Perfect Candidates
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            Enter your job description below and our AI will match it with the most relevant resumes
            in our database, helping you find the perfect candidates for your position.
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-sm mb-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="jobDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Description</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Describe the job position, required skills, experience level, and any other relevant details..."
                          className="min-h-[200px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        The more details you provide, the better the matching results will be.
                      </FormDescription>
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isSearching} 
                  className="w-full md:w-auto"
                >
                  {isSearching ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Searching for matches...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Search className="mr-2 h-4 w-4" />
                      Find Matching Candidates
                    </span>
                  )}
                </Button>
              </form>
            </Form>
            
            {matches && (
              <div className="mt-8">
                <h3 className="text-xl font-medium mb-4">Top Matching Candidates</h3>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Match Score</TableHead>
                        <TableHead>Skills</TableHead>
                        <TableHead>Experience</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {matches.map((match) => (
                        <TableRow key={match.id}>
                          <TableCell className="font-medium">{match.name}</TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                                <div 
                                  className="bg-primary h-2.5 rounded-full" 
                                  style={{ width: `${match.matchScore}%` }}
                                ></div>
                              </div>
                              <span>{match.matchScore}%</span>
                            </div>
                          </TableCell>
                          <TableCell>{match.topSkills.join(", ")}</TableCell>
                          <TableCell>{match.experience}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Showing top {matches.length} candidates based on your job description.
                </p>
              </div>
            )}
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>Our AI analyzes both job descriptions and resume content to provide the best matches.</p>
            <p>Results are based on skills, experience, education, and other relevant factors.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JobMatchingSection;

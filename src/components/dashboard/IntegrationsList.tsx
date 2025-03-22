
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Link as LinkIcon, PlusCircle, Search } from "lucide-react";
import { toast } from "sonner";

// Integration systems data from the screenshot
const vmsSystemsList = [
  "Stafferlink", 
  "SAP Fieldglass", 
  "Beeline", 
  "IQNavigator", 
  "PRO Unlimited VMS", 
  "Pontoon", 
  "KellyOCG VMS"
];

const atsSystemsList = [
  "Ceipal", 
  "Workday", 
  "Taleo", 
  "ICIMS", 
  "Lever", 
  "Smart Recruiters", 
  "Bullhorn ATS", 
  "Pinpoint", 
  "Jobvite", 
  "JazzHR", 
  "Zoho Recruit"
];

const jobBoardsList = [
  "LinkedIn Jobs", 
  "Indeed (Paid)", 
  "Glassdoor", 
  "Dice (IT)", 
  "Zip Recruiter", 
  "CareerBuilder", 
  "SimplyHired", 
  "Adzuna", 
  "The Ladders"
];

interface IntegrationItemProps {
  name: string;
  isActive?: boolean;
  onClick: () => void;
}

const IntegrationItem = ({ name, isActive = false, onClick }: IntegrationItemProps) => (
  <div 
    className={`integration-item ${isActive ? 'integration-item-active' : ''}`}
    onClick={onClick}
  >
    <div className="flex items-center justify-between">
      <span className={`${isActive ? 'text-foreground dark:text-white' : 'text-muted-foreground dark:text-gray-400'}`}>
        {name}
      </span>
      {isActive && <CheckCircle2 className="h-4 w-4 text-primary" />}
    </div>
  </div>
);

const IntegrationsList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeIntegrations, setActiveIntegrations] = useState<string[]>([]);
  const [currentCategory, setCurrentCategory] = useState("vms");

  const handleIntegrationToggle = (name: string) => {
    if (activeIntegrations.includes(name)) {
      setActiveIntegrations(activeIntegrations.filter(item => item !== name));
      toast.info(`Disconnected from ${name}`);
    } else {
      setActiveIntegrations([...activeIntegrations, name]);
      toast.success(`Connected to ${name} successfully`);
    }
  };

  const getFilteredList = (list: string[]) => {
    return list.filter(item => 
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredVMS = getFilteredList(vmsSystemsList);
  const filteredATS = getFilteredList(atsSystemsList);
  const filteredJobBoards = getFilteredList(jobBoardsList);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="dashboard-card">
        <CardHeader className="dashboard-card-header">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="dark-high-contrast">Integrations</CardTitle>
              <CardDescription className="dark-muted-text">
                Connect your existing recruitment systems with Adept AI
              </CardDescription>
            </div>
            <Button size="sm">
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Custom Integration
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-6">
          <div className="relative mb-6">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search for integrations..." 
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex gap-6">
            {/* Integrations Categories */}
            <div className="w-full max-w-xs">
              <Tabs defaultValue="vms" value={currentCategory} onValueChange={setCurrentCategory}>
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="vms">VMS</TabsTrigger>
                  <TabsTrigger value="ats">ATS</TabsTrigger>
                  <TabsTrigger value="job-boards">Job Boards</TabsTrigger>
                </TabsList>
                
                <TabsContent value="vms" className="space-y-1">
                  <div className="font-medium text-sm text-muted-foreground mb-2 dark-muted-text">
                    VMS Systems ({filteredVMS.length})
                  </div>
                  {filteredVMS.map((system) => (
                    <IntegrationItem 
                      key={system} 
                      name={system} 
                      isActive={activeIntegrations.includes(system)}
                      onClick={() => handleIntegrationToggle(system)}
                    />
                  ))}
                </TabsContent>
                
                <TabsContent value="ats" className="space-y-1">
                  <div className="font-medium text-sm text-muted-foreground mb-2 dark-muted-text">
                    ATS Systems ({filteredATS.length}) 
                  </div>
                  {filteredATS.map((system) => (
                    <IntegrationItem 
                      key={system} 
                      name={system} 
                      isActive={activeIntegrations.includes(system)}
                      onClick={() => handleIntegrationToggle(system)}
                    />
                  ))}
                </TabsContent>
                
                <TabsContent value="job-boards" className="space-y-1">
                  <div className="font-medium text-sm text-muted-foreground mb-2 dark-muted-text">
                    Job Boards ({filteredJobBoards.length})
                  </div>
                  {filteredJobBoards.map((system) => (
                    <IntegrationItem 
                      key={system} 
                      name={system} 
                      isActive={activeIntegrations.includes(system)}
                      onClick={() => handleIntegrationToggle(system)}
                    />
                  ))}
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Integration Details */}
            <div className="flex-1">
              {activeIntegrations.length > 0 ? (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium dark-high-contrast">Active Integrations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeIntegrations.map((integration) => (
                      <Card key={integration} className="p-4 border border-border">
                        <div className="flex justify-between items-start">
                          <div className="space-y-2">
                            <h4 className="font-medium dark-high-contrast">{integration}</h4>
                            <Badge variant="outline" className="bg-green-100/30 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                              Connected
                            </Badge>
                          </div>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => handleIntegrationToggle(integration)}>
                            <LinkIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-[300px] border border-dashed border-border rounded-lg p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-muted/50 flex items-center justify-center mb-4">
                    <LinkIcon className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium mb-1 dark-high-contrast">No active integrations</h3>
                  <p className="text-muted-foreground dark-muted-text max-w-md">
                    Select systems from the left panel to integrate them with your Adept AI dashboard
                  </p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default IntegrationsList;

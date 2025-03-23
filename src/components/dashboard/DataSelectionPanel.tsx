
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { 
  Database, 
  FileText, 
  Users, 
  Briefcase, 
  BarChart3, 
  CheckCircle2, 
  Filter, 
  RefreshCw,
  Sliders
} from "lucide-react";
import { motion } from "framer-motion";

// Data types
const dataTypes = [
  { id: "job-descriptions", name: "Job Descriptions", icon: <FileText className="h-4 w-4" />, description: "Full job listings with requirements" },
  { id: "candidate-profiles", name: "Candidate Profiles", icon: <Users className="h-4 w-4" />, description: "Candidate resumes and profiles" },
  { id: "job-applications", name: "Job Applications", icon: <Briefcase className="h-4 w-4" />, description: "Application details and status" },
  { id: "hiring-metrics", name: "Hiring Metrics", icon: <BarChart3 className="h-4 w-4" />, description: "Performance and hiring data" }
];

const connectedSources = [
  { id: 1, name: "Workday", type: "ATS", dataCount: 543, status: "active" },
  { id: 2, name: "LinkedIn Jobs", type: "Job Board", dataCount: 217, status: "active" },
  { id: 3, name: "SAP Fieldglass", type: "VMS", dataCount: 129, status: "active" }
];

const DataSelectionPanel = () => {
  const [selectedDataTypes, setSelectedDataTypes] = useState<string[]>(["job-descriptions", "candidate-profiles"]);
  const [isAutoSync, setIsAutoSync] = useState(true);
  const [syncFrequency, setSyncFrequency] = useState("daily");
  const [activeSourceTab, setActiveSourceTab] = useState("all");

  const toggleDataType = (id: string) => {
    if (selectedDataTypes.includes(id)) {
      setSelectedDataTypes(selectedDataTypes.filter(item => item !== id));
      toast.info(`${dataTypes.find(type => type.id === id)?.name} will no longer be synchronized`);
    } else {
      setSelectedDataTypes([...selectedDataTypes, id]);
      toast.success(`${dataTypes.find(type => type.id === id)?.name} will now be synchronized`);
    }
  };

  const handleSyncNow = () => {
    toast.success("Data synchronization started");
  };

  // Filter sources based on the active tab
  const getFilteredSources = () => {
    if (activeSourceTab === "all") {
      return connectedSources;
    }
    return connectedSources.filter(source => source.type.toLowerCase() === activeSourceTab);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold mb-1">Data Selection</h2>
          <p className="text-muted-foreground">
            Choose what data to sync from your integrated systems
          </p>
        </div>
        <Button onClick={handleSyncNow} className="gap-2">
          <Database className="h-4 w-4" />
          Sync Now
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Data Selection */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Data Types</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {dataTypes.map((type) => (
                <motion.div 
                  key={type.id}
                  whileHover={{ y: -2 }}
                  className="flex items-center justify-between p-4 border rounded-lg transition-colors hover:bg-accent/5"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-md">
                      {type.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{type.name}</h3>
                      <p className="text-sm text-muted-foreground">{type.description}</p>
                    </div>
                  </div>
                  <Switch 
                    checked={selectedDataTypes.includes(type.id)}
                    onCheckedChange={() => toggleDataType(type.id)}
                  />
                </motion.div>
              ))}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Sync Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="auto-sync">Automatic Synchronization</Label>
                  <p className="text-sm text-muted-foreground">
                    Keep data automatically in sync
                  </p>
                </div>
                <Switch 
                  id="auto-sync" 
                  checked={isAutoSync}
                  onCheckedChange={setIsAutoSync}
                />
              </div>
              
              {isAutoSync && (
                <div className="space-y-2">
                  <Label>Sync Frequency</Label>
                  <div className="flex flex-wrap gap-2">
                    <Button 
                      variant={syncFrequency === "hourly" ? "default" : "outline"} 
                      size="sm"
                      onClick={() => setSyncFrequency("hourly")}
                    >
                      Hourly
                    </Button>
                    <Button 
                      variant={syncFrequency === "daily" ? "default" : "outline"} 
                      size="sm"
                      onClick={() => setSyncFrequency("daily")}
                    >
                      Daily
                    </Button>
                    <Button 
                      variant={syncFrequency === "weekly" ? "default" : "outline"} 
                      size="sm"
                      onClick={() => setSyncFrequency("weekly")}
                    >
                      Weekly
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        
        {/* Connected Sources */}
        <div className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle>Connected Sources</CardTitle>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Sliders className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all" value={activeSourceTab} onValueChange={setActiveSourceTab}>
                <TabsList className="mb-4">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="ats">ATS</TabsTrigger>
                  <TabsTrigger value="vms">VMS</TabsTrigger>
                  <TabsTrigger value="job board">Job Boards</TabsTrigger>
                </TabsList>
                
                <TabsContent value={activeSourceTab} className="space-y-4">
                  {getFilteredSources().length > 0 ? (
                    getFilteredSources().map((source) => (
                      <motion.div
                        key={source.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Card>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <h3 className="font-medium">{source.name}</h3>
                                  <Badge variant="outline" className="text-xs">
                                    {source.type}
                                  </Badge>
                                </div>
                                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                  <Database className="h-3 w-3 mr-1" />
                                  {source.dataCount} records available
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm">
                                  <Filter className="h-4 w-4 mr-1" />
                                  Filter
                                </Button>
                                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))
                  ) : (
                    <div className="flex flex-col items-center justify-center h-[200px] border border-dashed rounded-lg p-6 text-center">
                      <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-4">
                        <Database className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <h3 className="text-lg font-medium mb-1">No data sources</h3>
                      <p className="text-muted-foreground max-w-md">
                        No sources found with the current filter
                      </p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Recent Sync Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { source: "LinkedIn Jobs", time: "2 hours ago", items: 18, success: true },
                  { source: "Workday", time: "Yesterday", items: 43, success: true },
                  { source: "SAP Fieldglass", time: "3 days ago", items: 12, success: false }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`h-2 w-2 rounded-full ${activity.success ? 'bg-green-500' : 'bg-red-500'}`}></div>
                      <span className="text-sm">
                        {activity.success 
                          ? `Synced ${activity.items} items from ${activity.source}` 
                          : `Failed to sync from ${activity.source}`}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                  </div>
                ))}
                
                <Separator className="my-2" />
                
                <div>
                  <h4 className="text-sm font-medium mb-2">Storage Usage</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span>Current Usage</span>
                      <span>45.3 MB of 1 GB</span>
                    </div>
                    <Progress value={4.5} className="h-2" />
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button variant="outline" size="sm" className="gap-1">
                    <RefreshCw className="h-3 w-3" />
                    View Full History
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DataSelectionPanel;

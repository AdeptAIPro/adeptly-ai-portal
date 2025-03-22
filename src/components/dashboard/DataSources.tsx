
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { BarChart3, Database, Filter, FileText, Users, Briefcase, CheckCircle2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

// Data types
const dataTypes = [
  { id: "job-descriptions", name: "Job Descriptions", icon: <FileText className="h-4 w-4" /> },
  { id: "candidate-profiles", name: "Candidate Profiles", icon: <Users className="h-4 w-4" /> },
  { id: "job-applications", name: "Job Applications", icon: <Briefcase className="h-4 w-4" /> },
  { id: "hiring-metrics", name: "Hiring Metrics", icon: <BarChart3 className="h-4 w-4" /> }
];

const connectedSources = [
  { name: "Workday", type: "ATS", dataCount: 543 },
  { name: "LinkedIn Jobs", type: "Job Board", dataCount: 217 },
  { name: "SAP Fieldglass", type: "VMS", dataCount: 129 }
];

const DataSources = () => {
  const [selectedDataTypes, setSelectedDataTypes] = useState<string[]>(["job-descriptions", "candidate-profiles"]);
  const [isAutoSync, setIsAutoSync] = useState(true);

  const toggleDataType = (id: string) => {
    if (selectedDataTypes.includes(id)) {
      setSelectedDataTypes(selectedDataTypes.filter(item => item !== id));
    } else {
      setSelectedDataTypes([...selectedDataTypes, id]);
      toast.success(`${dataTypes.find(type => type.id === id)?.name} will now be synchronized`);
    }
  };

  const handleSyncNow = () => {
    toast.success("Data synchronization started");
  };

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
              <CardTitle className="dark-high-contrast">Data Sources</CardTitle>
              <CardDescription className="dark-muted-text">
                Manage what data is synced from your integrated systems
              </CardDescription>
            </div>
            <Button onClick={handleSyncNow}>
              <Database className="h-4 w-4 mr-2" />
              Sync Now
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Data Selection */}
            <div>
              <h3 className="text-lg font-medium mb-4 dark-high-contrast">Data Selection</h3>
              <div className="space-y-3">
                {dataTypes.map((type) => (
                  <div 
                    key={type.id}
                    className="flex items-center justify-between p-3 border border-border rounded-lg hover:bg-accent/5 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 bg-muted/80 dark:bg-gray-800 rounded-md">
                        {type.icon}
                      </div>
                      <span className="font-medium dark-muted-text">{type.name}</span>
                    </div>
                    <Switch 
                      checked={selectedDataTypes.includes(type.id)}
                      onCheckedChange={() => toggleDataType(type.id)}
                    />
                  </div>
                ))}
              </div>
              
              <div className="mt-6 space-y-4">
                <h4 className="font-medium dark-high-contrast">Sync Settings</h4>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="auto-sync">Automatic Synchronization</Label>
                    <p className="text-sm text-muted-foreground dark-muted-text">
                      Keep data automatically in sync
                    </p>
                  </div>
                  <Switch 
                    id="auto-sync" 
                    checked={isAutoSync}
                    onCheckedChange={setIsAutoSync}
                  />
                </div>
              </div>
            </div>
            
            {/* Connected Sources */}
            <div>
              <h3 className="text-lg font-medium mb-4 dark-high-contrast">Connected Sources</h3>
              {connectedSources.length > 0 ? (
                <div className="space-y-4">
                  {connectedSources.map((source, index) => (
                    <motion.div
                      key={source.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Card className="border border-border">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-medium dark-high-contrast">{source.name}</h4>
                                <Badge variant="outline" className="text-xs">
                                  {source.type}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-1 text-sm text-muted-foreground dark-muted-text">
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
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-[200px] border border-dashed border-border rounded-lg p-6 text-center">
                  <div className="h-12 w-12 rounded-full bg-muted/50 flex items-center justify-center mb-4">
                    <Database className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium mb-1 dark-high-contrast">No data sources</h3>
                  <p className="text-muted-foreground dark-muted-text max-w-md">
                    Connect integrations first to add data sources
                  </p>
                </div>
              )}
              
              <Separator className="my-6" />
              
              {/* Recent Sync Activities */}
              <div>
                <h4 className="font-medium mb-3 dark-high-contrast">Recent Sync Activities</h4>
                <div className="space-y-3">
                  {[
                    { source: "LinkedIn Jobs", time: "2 hours ago", items: 18 },
                    { source: "Workday", time: "Yesterday", items: 43 }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="dark-muted-text">Synced {activity.items} items from {activity.source}</span>
                      </div>
                      <span className="text-muted-foreground dark:text-gray-500">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DataSources;

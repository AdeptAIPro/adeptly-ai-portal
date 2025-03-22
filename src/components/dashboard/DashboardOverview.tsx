
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { AreaChart } from "@/components/dashboard/charts/AreaChart";
import { PieChart } from "@/components/dashboard/charts/PieChart";
import { ArrowRight, BarChart3, CheckCircle2, ChevronRight, Clock, Database, Link as LinkIcon, PieChart as PieChartIcon, User, Users, Zap } from "lucide-react";

const DashboardOverview = () => {
  return (
    <div className="space-y-6">
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Total Integrations", value: "3", icon: <LinkIcon />, color: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" },
          { title: "Active Data Sources", value: "5", icon: <Database />, color: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400" },
          { title: "Candidate Profiles", value: "243", icon: <Users />, color: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" },
          { title: "Live Job Listings", value: "42", icon: <Zap />, color: "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400" }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="dashboard-card">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground dark-muted-text mb-1">{stat.title}</p>
                    <h3 className="text-2xl font-bold dark-high-contrast">{stat.value}</h3>
                  </div>
                  <div className={`p-2 rounded-full ${stat.color}`}>
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      
      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Integration Status */}
        <Card className="dashboard-card lg:col-span-2">
          <CardHeader className="dashboard-card-header">
            <CardTitle className="dark-high-contrast">Integration Activity</CardTitle>
            <CardDescription className="dark-muted-text">
              Data flow across your connected systems
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="h-[240px] w-full">
              <AreaChart />
            </div>
          </CardContent>
          <Separator />
          <CardFooter className="p-4 flex justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
                <span className="text-sm text-muted-foreground dark-muted-text">Job Data</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-sm text-muted-foreground dark-muted-text">Candidate Data</span>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="text-primary">
              <span>View Details</span>
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </CardFooter>
        </Card>
        
        {/* Integration Types */}
        <Card className="dashboard-card">
          <CardHeader className="dashboard-card-header">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="dark-high-contrast">Integration Types</CardTitle>
                <CardDescription className="dark-muted-text">
                  Distribution by system type
                </CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <PieChartIcon className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6 flex flex-col items-center">
            <div className="h-[200px] w-full">
              <PieChart />
            </div>
            
            <div className="grid grid-cols-2 gap-4 w-full mt-6">
              {[
                { label: "VMS", value: "33%", color: "bg-primary" },
                { label: "ATS", value: "42%", color: "bg-blue-500" },
                { label: "Job Boards", value: "25%", color: "bg-amber-500" },
              ].map((item, i) => (
                <div key={i} className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${item.color} mr-2`}></div>
                  <div className="flex justify-between items-center w-full">
                    <span className="text-sm dark-muted-text">{item.label}</span>
                    <span className="text-sm font-medium dark-high-contrast">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Recent Integrations */}
      <Card className="dashboard-card">
        <CardHeader className="dashboard-card-header">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="dark-high-contrast">Recent Integrations</CardTitle>
              <CardDescription className="dark-muted-text">
                Recently connected recruitment systems
              </CardDescription>
            </div>
            <Button variant="outline" size="sm">View All</Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-border">
            {[
              { name: "LinkedIn Jobs", type: "Job Board", status: "Active", time: "2 hours ago" },
              { name: "Workday", type: "ATS", status: "Active", time: "Yesterday" },
              { name: "SAP Fieldglass", type: "VMS", status: "Setting up", time: "3 days ago" }
            ].map((integration, index) => (
              <div key={index} className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-md bg-muted/50 dark:bg-gray-800/50">
                    <LinkIcon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium dark-high-contrast">{integration.name}</h4>
                    <p className="text-sm text-muted-foreground dark-muted-text">{integration.type}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Badge 
                    variant="outline" 
                    className={integration.status === "Active" 
                      ? "bg-green-100/30 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-amber-100/30 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                    }
                  >
                    {integration.status}
                  </Badge>
                  <div className="text-xs text-muted-foreground dark:text-gray-500 ml-4 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {integration.time}
                  </div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="sm" className="ml-2 h-8 w-8 p-0">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View details</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardOverview;

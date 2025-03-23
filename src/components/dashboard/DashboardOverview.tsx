
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  Database, 
  Link as LinkIcon, 
  Users, 
  Zap,
  ArrowRight,
  ArrowUp,
  CheckCircle2,
  Clock 
} from "lucide-react";
import { motion } from "framer-motion";

const StatCard = ({ title, value, icon, color, trend }: { 
  title: string; 
  value: string; 
  icon: React.ReactNode; 
  color: string;
  trend?: { value: string; direction: 'up' | 'down' | 'none' } 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
            <h3 className="text-2xl font-bold">{value}</h3>
            {trend && (
              <div className="flex items-center mt-1 text-xs">
                {trend.direction === 'up' && <ArrowUp className="h-3 w-3 text-green-500 mr-1" />}
                <span className={
                  trend.direction === 'up' ? 'text-green-500' : 
                  trend.direction === 'down' ? 'text-red-500' : 'text-muted-foreground'
                }>
                  {trend.value}
                </span>
              </div>
            )}
          </div>
          <div className={`p-2 rounded-full ${color}`}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const ActivityItem = ({ title, time, status }: { title: string; time: string; status: 'success' | 'pending' | 'fail' }) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'success': return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case 'pending': return <Clock className="h-4 w-4 text-amber-500" />;
      case 'fail': return <div className="h-4 w-4 rounded-full bg-red-500" />;
    }
  };
  
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center gap-3">
        {getStatusIcon()}
        <span className="text-sm">{title}</span>
      </div>
      <span className="text-xs text-muted-foreground">{time}</span>
    </div>
  );
};

const DashboardOverview = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Message */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-6">
          <div className="space-y-3">
            <Badge variant="outline" className="bg-primary/10 text-primary">Welcome</Badge>
            <h1 className="text-2xl font-bold">Welcome to Adept AI Dashboard</h1>
            <p className="text-muted-foreground max-w-2xl">
              Connect your recruitment systems, manage data, and leverage AI to find the perfect candidates for your jobs. Let's get started!
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button className="gap-2">
                <LinkIcon className="h-4 w-4" />
                Connect Systems
              </Button>
              <Button variant="outline" className="gap-2">
                Explore Features
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Connected Systems" 
          value="5" 
          icon={<LinkIcon className="h-5 w-5 text-blue-500" />}
          color="bg-blue-100 dark:bg-blue-900/30"
          trend={{ value: "+2 this week", direction: "up" }}
        />
        <StatCard 
          title="Data Sources" 
          value="12" 
          icon={<Database className="h-5 w-5 text-purple-500" />}
          color="bg-purple-100 dark:bg-purple-900/30"
        />
        <StatCard 
          title="Candidate Profiles" 
          value="328" 
          icon={<Users className="h-5 w-5 text-green-500" />}
          color="bg-green-100 dark:bg-green-900/30"
          trend={{ value: "+65 this month", direction: "up" }}
        />
        <StatCard 
          title="Active Jobs" 
          value="47" 
          icon={<Zap className="h-5 w-5 text-amber-500" />}
          color="bg-amber-100 dark:bg-amber-900/30"
        />
      </div>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Panel */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Integration Performance</CardTitle>
            <CardDescription>
              Data flow across your connected systems
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="weekly">
              <div className="flex justify-between items-center mb-4">
                <TabsList>
                  <TabsTrigger value="daily">Daily</TabsTrigger>
                  <TabsTrigger value="weekly">Weekly</TabsTrigger>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                </TabsList>
                <Button variant="outline" size="sm">Download Report</Button>
              </div>
              
              <TabsContent value="daily" className="space-y-4">
                <div className="h-[200px] bg-muted/20 rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground">Daily performance chart would appear here</p>
                </div>
              </TabsContent>
              
              <TabsContent value="weekly" className="space-y-4">
                <div className="h-[200px] bg-muted/20 rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground">Weekly performance chart would appear here</p>
                </div>
              </TabsContent>
              
              <TabsContent value="monthly" className="space-y-4">
                <div className="h-[200px] bg-muted/20 rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground">Monthly performance chart would appear here</p>
                </div>
              </TabsContent>
              
              <div className="flex items-center space-x-4 mt-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-primary mr-2"></div>
                  <span className="text-sm text-muted-foreground">Job Data</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-sm text-muted-foreground">Candidate Data</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm text-muted-foreground">Applications</span>
                </div>
              </div>
            </Tabs>
          </CardContent>
        </Card>
        
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest events from your connected systems
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <ActivityItem 
                title="Connected to LinkedIn Jobs" 
                time="2 hours ago" 
                status="success" 
              />
              <ActivityItem 
                title="Data sync from Workday" 
                time="5 hours ago" 
                status="success" 
              />
              <ActivityItem 
                title="Talent matching in progress" 
                time="In progress" 
                status="pending" 
              />
              <ActivityItem 
                title="Connection attempt to ICIMS" 
                time="Yesterday" 
                status="fail" 
              />
              <ActivityItem 
                title="Synced 43 jobs from SAP Fieldglass" 
                time="2 days ago" 
                status="success" 
              />
            </div>
            
            <Button variant="outline" className="w-full mt-4" size="sm">
              View All Activity
            </Button>
          </CardContent>
        </Card>
      </div>
      
      {/* System Health */}
      <Card>
        <CardHeader>
          <CardTitle>System Health & Performance</CardTitle>
          <CardDescription>
            Monitoring the health of your integrations and data pipelines
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="text-sm font-medium">API Response Time</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>LinkedIn API</span>
                  <span className="text-green-600">180ms</span>
                </div>
                <Progress value={18} className="h-2" />
                
                <div className="flex justify-between text-sm">
                  <span>Workday API</span>
                  <span className="text-green-600">220ms</span>
                </div>
                <Progress value={22} className="h-2" />
                
                <div className="flex justify-between text-sm">
                  <span>SAP Fieldglass API</span>
                  <span className="text-amber-600">450ms</span>
                </div>
                <Progress value={45} className="h-2" />
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Data Processing</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Job Data</span>
                  <span className="text-green-600">Healthy</span>
                </div>
                <Progress value={92} className="h-2" />
                
                <div className="flex justify-between text-sm">
                  <span>Candidate Profiles</span>
                  <span className="text-green-600">Healthy</span>
                </div>
                <Progress value={95} className="h-2" />
                
                <div className="flex justify-between text-sm">
                  <span>Application Data</span>
                  <span className="text-green-600">Healthy</span>
                </div>
                <Progress value={90} className="h-2" />
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Service Status</h3>
              <div className="space-y-3">
                {[
                  { name: "Integration Services", status: "Operational", statusColor: "text-green-600" },
                  { name: "Data Synchronization", status: "Operational", statusColor: "text-green-600" },
                  { name: "AI Matching Engine", status: "Operational", statusColor: "text-green-600" },
                  { name: "Reporting Services", status: "Degraded", statusColor: "text-amber-600" }
                ].map((service, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-sm">{service.name}</span>
                    <span className={`text-sm font-medium ${service.statusColor}`}>
                      {service.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <LinkIcon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium mb-2">Connect New System</h3>
            <p className="text-sm text-muted-foreground mb-4">Add more recruitment systems to enhance your talent pool</p>
            <Button variant="outline" className="w-full">
              Manage Integrations
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Database className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium mb-2">Configure Data Sources</h3>
            <p className="text-sm text-muted-foreground mb-4">Select what data to sync from your integrated systems</p>
            <Button variant="outline" className="w-full">
              Manage Data
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium mb-2">Run Talent Matching</h3>
            <p className="text-sm text-muted-foreground mb-4">Find the best candidates for your open positions</p>
            <Button variant="outline" className="w-full">
              Match Talent
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardOverview;

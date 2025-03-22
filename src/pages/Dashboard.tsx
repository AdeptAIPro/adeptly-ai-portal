
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Users, 
  ChevronDown, 
  ChevronUp, 
  PlusCircle, 
  UserPlus, 
  Copy, 
  Package, 
  Building2, 
  DollarSign, 
  ArrowUp,
  BarChart3,
  Database,
  Link as LinkIcon,
  ArrowRight
} from "lucide-react";

// Task card component for the "Next thing to do" section
interface TaskCardProps {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
}

const TaskCard = ({ icon, title, onClick }: TaskCardProps) => (
  <Card className="bg-gray-50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 transition-colors cursor-pointer border border-gray-200 dark:border-gray-700" onClick={onClick}>
    <CardContent className="p-6 flex flex-col items-center justify-center gap-4 text-center">
      <div className="w-12 h-12 rounded-md bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center">
        {icon}
      </div>
      <p className="font-medium">{title}</p>
    </CardContent>
  </Card>
);

// Stat card component for the metrics at the bottom
interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle?: string;
}

const StatCard = ({ icon, title, value, subtitle }: StatCardProps) => (
  <Card className="border border-gray-200 dark:border-gray-700">
    <CardContent className="p-6">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <span className="text-gray-500 dark:text-gray-400 text-sm">{title}</span>
      </div>
      <div className="text-3xl font-bold mb-1">{value}</div>
      {subtitle && <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
        {subtitle.includes("in the last") ? (
          <>
            <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
            {subtitle}
          </>
        ) : (
          subtitle
        )}
      </div>}
    </CardContent>
  </Card>
);

const Dashboard = () => {
  const { user } = useAuth();
  const [taskSectionCollapsed, setTaskSectionCollapsed] = useState(false);
  
  const handleTaskAction = (task: string) => {
    console.log(`Task clicked: ${task}`);
    // In a real app, this would navigate to the relevant page or open a modal
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <DashboardSidebar />
      
      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <main className="max-w-6xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Home</h1>
              <p className="text-gray-500 dark:text-gray-400 flex items-center mt-1">
                nas.io/adept-ai
                <Button variant="ghost" size="sm" className="ml-1 h-6 w-6 p-0">
                  <Copy className="h-4 w-4" />
                </Button>
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="outline" className="flex items-center gap-2">
                <UserPlus className="h-4 w-4" />
                Invite
              </Button>
              <Button className="flex items-center gap-2">
                <PlusCircle className="h-4 w-4" />
                Create
                <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>

          {/* Integration Hub Feature Card */}
          <Card className="border border-primary/20 bg-primary/5 mb-8 overflow-hidden">
            <CardContent className="p-6 flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <Badge variant="outline" className="bg-primary/10 text-primary mb-2">New Feature</Badge>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">AI Integration Hub</h2>
                <p className="text-gray-500 dark:text-gray-400 mb-4 max-w-lg">
                  Connect your recruitment systems, select data, and match candidates with our AI-powered talent matching engine.
                </p>
                <Link to="/dashboard/integrations-hub">
                  <Button className="flex items-center gap-2 group">
                    Explore the Integration Hub
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <LinkIcon className="h-6 w-6 text-primary" />
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Next thing to do section */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Next thing to do</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">0 of 4 complete</p>
              </div>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setTaskSectionCollapsed(!taskSectionCollapsed)}
              >
                {taskSectionCollapsed ? <ChevronDown className="h-5 w-5" /> : <ChevronUp className="h-5 w-5" />}
              </Button>
            </div>
            
            {!taskSectionCollapsed && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <TaskCard 
                  icon={<Building2 className="h-6 w-6 text-gray-700 dark:text-gray-300" />} 
                  title="Personalize your business" 
                  onClick={() => handleTaskAction("personalize")}
                />
                <TaskCard 
                  icon={<Users className="h-6 w-6 text-gray-700 dark:text-gray-300" />} 
                  title="Enrich your profile" 
                  onClick={() => handleTaskAction("profile")}
                />
                <TaskCard 
                  icon={<Package className="h-6 w-6 text-gray-700 dark:text-gray-300" />} 
                  title="Create your first product" 
                  onClick={() => handleTaskAction("product")}
                />
                <TaskCard 
                  icon={<UserPlus className="h-6 w-6 text-gray-700 dark:text-gray-300" />} 
                  title="Invite your first member" 
                  onClick={() => handleTaskAction("invite")}
                />
              </div>
            )}
            
            {taskSectionCollapsed ? null : (
              <div className="text-right mt-2">
                <Button variant="link" size="sm" className="text-gray-500 dark:text-gray-400">
                  Dismiss forever
                </Button>
              </div>
            )}
          </div>
          
          {/* Stats section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard 
              icon={<BarChart3 className="h-5 w-5 text-gray-500" />} 
              title="Community Visits" 
              value="0" 
            />
            <StatCard 
              icon={<Users className="h-5 w-5 text-gray-500" />} 
              title="Total members" 
              value="1" 
              subtitle="2 in the last 30 days"
            />
            <StatCard 
              icon={<DollarSign className="h-5 w-5 text-gray-500" />} 
              title="March Earnings" 
              value="USD 5" 
              subtitle="1 Sales"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

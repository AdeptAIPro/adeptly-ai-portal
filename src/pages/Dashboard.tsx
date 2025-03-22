
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ThemeButton } from "@/components/ThemeButton";
import { motion } from "framer-motion";
import {
  BarChart3,
  LineChart,
  PieChart,
  Users,
  Database,
  Filter,
  Settings,
  Search,
  LayoutDashboard,
  ArrowRight,
  Link,
  CheckCircle2,
  PlusCircle,
  ChevronRight,
  Clock
} from "lucide-react";
import { toast } from "sonner";
import IntegrationsList from "@/components/dashboard/IntegrationsList";
import DataSources from "@/components/dashboard/DataSources";
import DashboardOverview from "@/components/dashboard/DashboardOverview";

const Dashboard = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    toast.success("You've been logged out successfully");
  };

  if (!user) {
    return null; // or a loading state
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* Top Navigation */}
      <header className="bg-card dark:bg-gray-900/90 border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-bold dark-high-contrast">Adept AI</h1>
              <nav className="hidden md:flex items-center space-x-1">
                <Button variant="ghost" className="text-sm h-9" asChild>
                  <span className="flex items-center gap-1">
                    <LayoutDashboard className="h-4 w-4" />
                    Dashboard
                  </span>
                </Button>
                <Button variant="ghost" className="text-sm h-9">
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    Candidates
                  </span>
                </Button>
                <Button variant="ghost" className="text-sm h-9">
                  <span className="flex items-center gap-1">
                    <Database className="h-4 w-4" />
                    Integrations
                  </span>
                </Button>
                <Button variant="ghost" className="text-sm h-9">
                  <span className="flex items-center gap-1">
                    <Settings className="h-4 w-4" />
                    Settings
                  </span>
                </Button>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative hidden md:block w-64">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search..." 
                  className="pl-8 bg-background/50 focus:bg-background"
                />
              </div>
              <ThemeButton />
              <Button variant="outline" onClick={handleLogout} size="sm">
                Log out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="flex flex-col space-y-6">
          {/* Welcome Section */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold dark-high-contrast">
                Welcome back, {user.name}
              </h1>
              <p className="text-muted-foreground dark-muted-text mt-1">
                Here's what's happening with your recruitment integrations today.
              </p>
            </div>
            <Button className="hidden md:flex">
              <PlusCircle className="mr-2 h-4 w-4" />
              New Integration
            </Button>
          </div>

          {/* Dashboard Tabs & Content */}
          <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList className="bg-muted/80 dark:bg-gray-800/50 p-1">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
              <TabsTrigger value="datasources">Data Sources</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            
            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-4">
              <DashboardOverview />
            </TabsContent>
            
            {/* Integrations Tab */}
            <TabsContent value="integrations" className="space-y-4">
              <IntegrationsList />
            </TabsContent>
            
            {/* Data Sources Tab */}
            <TabsContent value="datasources" className="space-y-4">
              <DataSources />
            </TabsContent>
            
            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Analytics Cards */}
                {[
                  { title: "Candidate Matches", icon: <BarChart3 />, color: "bg-blue-100 dark:bg-blue-900/30" },
                  { title: "Sourcing Efficiency", icon: <LineChart />, color: "bg-green-100 dark:bg-green-900/30" },
                  { title: "Integration Health", icon: <PieChart />, color: "bg-purple-100 dark:bg-purple-900/30" }
                ].map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="h-full dashboard-card">
                      <CardHeader className={`${card.color} rounded-t-lg`}>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg dark-high-contrast">{card.title}</CardTitle>
                          <div className="p-2 rounded-full bg-background">{card.icon}</div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p className="text-sm text-muted-foreground dark-muted-text">
                          Detailed analytics and insights will appear here once your integrations are active.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

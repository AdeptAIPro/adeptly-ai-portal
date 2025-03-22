
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import IntegrationsList from "@/components/dashboard/IntegrationsList";
import DataSources from "@/components/dashboard/DataSources";
import DashboardOverview from "@/components/dashboard/DashboardOverview";
import TalentMatchingComponent from "@/components/dashboard/TalentMatchingComponent";
import { MoveLeft, Share2 } from "lucide-react";

const IntegrationsDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

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
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Integration Hub</h1>
                <Badge variant="outline" className="bg-primary/10 text-primary">Beta</Badge>
              </div>
              <p className="text-gray-500 dark:text-gray-400 mt-1">
                Connect your recruitment systems and leverage AI for talent matching
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="outline" className="flex items-center gap-2">
                <MoveLeft className="h-4 w-4" />
                Back to Dashboard
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
          
          {/* Tabs Navigation */}
          <Tabs 
            defaultValue="overview" 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="space-y-6"
          >
            <TabsList className="grid grid-cols-4 w-full max-w-2xl">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
              <TabsTrigger value="data-sources">Data Sources</TabsTrigger>
              <TabsTrigger value="talent-matching">Talent Matching</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <DashboardOverview />
              </motion.div>
            </TabsContent>
            
            <TabsContent value="integrations" className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <IntegrationsList />
              </motion.div>
            </TabsContent>
            
            <TabsContent value="data-sources" className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <DataSources />
              </motion.div>
            </TabsContent>
            
            <TabsContent value="talent-matching" className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <TalentMatchingComponent />
              </motion.div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default IntegrationsDashboard;

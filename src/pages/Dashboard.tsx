
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import IntegrationsPanel from "@/components/dashboard/IntegrationsPanel";
import DataSelectionPanel from "@/components/dashboard/DataSelectionPanel";
import TalentMatchingPanel from "@/components/dashboard/TalentMatchingPanel";
import DashboardOverview from "@/components/dashboard/DashboardOverview";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <DashboardLayout>
      <div className="p-6 max-w-7xl mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Connect your recruitment systems, analyze data, and find the perfect talent match
          </p>
        </div>

        <Tabs 
          defaultValue="overview" 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="space-y-4"
        >
          <TabsList className="grid grid-cols-4 w-full max-w-3xl">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
            <TabsTrigger value="data">Data Selection</TabsTrigger>
            <TabsTrigger value="talent">Talent Matching</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <DashboardOverview />
          </TabsContent>
          
          <TabsContent value="integrations" className="space-y-4">
            <IntegrationsPanel />
          </TabsContent>
          
          <TabsContent value="data" className="space-y-4">
            <DataSelectionPanel />
          </TabsContent>
          
          <TabsContent value="talent" className="space-y-4">
            <TalentMatchingPanel />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

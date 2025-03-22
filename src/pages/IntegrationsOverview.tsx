
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import IntegrationsOverview from "@/components/dashboard/IntegrationsOverview";
import { MoveLeft, Share2 } from "lucide-react";

const IntegrationsOverviewPage = () => {
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
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Integrations</h1>
                <Badge variant="outline" className="bg-primary/10 text-primary">Connected</Badge>
              </div>
              <p className="text-gray-500 dark:text-gray-400 mt-1">
                Manage your connected systems and data sources
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
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <IntegrationsOverview />
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default IntegrationsOverviewPage;

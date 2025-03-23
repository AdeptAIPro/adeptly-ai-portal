
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { RefreshCw, Check, X, AlertTriangle } from "lucide-react";

// Integration systems data
const integrationSystems = [
  { 
    id: 1,
    name: "Stafferlink", 
    type: "VMS System",
    status: "connected", 
    lastSync: "2 hours ago",
    enabled: true,
  },
  { 
    id: 2,
    name: "SAP Fieldglass", 
    type: "VMS System",
    status: "connected", 
    lastSync: "1 day ago",
    enabled: true,
  },
  { 
    id: 3,
    name: "Beeline", 
    type: "VMS System",
    status: "disconnected", 
    lastSync: null,
    enabled: false,
  },
  { 
    id: 4,
    name: "IQNavigator", 
    type: "VMS System",
    status: "disconnected", 
    lastSync: null,
    enabled: false,
  },
  { 
    id: 5,
    name: "PRO Unlimited VMS", 
    type: "VMS System",
    status: "connected", 
    lastSync: "3 days ago",
    enabled: true,
  },
  { 
    id: 6,
    name: "Pontoon", 
    type: "VMS System",
    status: "pending", 
    lastSync: null,
    enabled: false,
  },
  { 
    id: 7,
    name: "Ceipal", 
    type: "ATS System",
    status: "disconnected", 
    lastSync: null,
    enabled: false,
  },
  { 
    id: 8,
    name: "Workday", 
    type: "ATS System",
    status: "connected", 
    lastSync: "5 hours ago",
    enabled: true,
  },
  { 
    id: 9,
    name: "LinkedIn Jobs", 
    type: "Paid Job Board",
    status: "connected", 
    lastSync: "12 hours ago",
    enabled: true,
  },
  { 
    id: 10,
    name: "Indeed", 
    type: "Paid Job Board",
    status: "connected", 
    lastSync: "1 day ago",
    enabled: true,
  }
];

const IntegrationsOverview = () => {
  const [systems, setSystems] = useState(integrationSystems);
  const [activeFilter, setActiveFilter] = useState("all");

  // Count integrations by status
  const connectedCount = systems.filter(sys => sys.status === "connected").length;
  const pendingCount = systems.filter(sys => sys.status === "pending").length;
  const disconnectedCount = systems.filter(sys => sys.status === "disconnected").length;

  const handleRefresh = () => {
    toast.success("Integration data refreshed successfully");
  };

  const handleToggleEnable = (id: number) => {
    setSystems(systems.map(system => {
      if (system.id === id) {
        const newEnabled = !system.enabled;
        
        // Show appropriate toast message
        if (newEnabled) {
          toast.success(`${system.name} has been enabled`);
        } else {
          toast.info(`${system.name} has been disabled`);
        }
        
        return { ...system, enabled: newEnabled };
      }
      return system;
    }));
  };

  const handleConfigure = (name: string) => {
    toast.info(`Opening configuration for ${name}`);
  };

  const getFilteredSystems = () => {
    if (activeFilter === "all") {
      return systems;
    }
    
    return systems.filter(system => {
      if (activeFilter === "vms") return system.type === "VMS System";
      if (activeFilter === "ats") return system.type === "ATS System";
      if (activeFilter === "paid") return system.type === "Paid Job Board";
      if (activeFilter === "free") return system.type === "Free Job Board";
      if (activeFilter === "social") return system.type === "Social";
      if (activeFilter === "productivity") return system.type === "Productivity";
      if (activeFilter === "compliance") return system.type === "Compliance";
      if (activeFilter === "background") return system.type === "Background";
      if (activeFilter === "onboarding") return system.type === "Onboarding";
      if (activeFilter === "crm") return system.type === "CRM & HRMS";
      return true;
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div>
            <CardTitle className="text-2xl font-bold">Integrations</CardTitle>
            <p className="text-muted-foreground">
              Connect your existing systems to Adept AI
            </p>
          </div>
          <Button 
            onClick={handleRefresh}
            className="flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh All
          </Button>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="text-2xl font-bold">{connectedCount} Connected</div>
              <p className="text-xs text-muted-foreground">Active integrations</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="text-2xl font-bold">{pendingCount} Pending</div>
              <p className="text-xs text-muted-foreground">Awaiting verification</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <div className="text-2xl font-bold">{disconnectedCount} Disconnected</div>
              <p className="text-xs text-muted-foreground">Available to connect</p>
            </div>
          </div>

          <Tabs defaultValue="all" value={activeFilter} onValueChange={setActiveFilter}>
            <TabsList className="mb-4 flex flex-wrap">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="vms">VMS Systems</TabsTrigger>
              <TabsTrigger value="ats">ATS</TabsTrigger>
              <TabsTrigger value="paid">Paid Job Boards</TabsTrigger>
              <TabsTrigger value="free">Free Job Boards</TabsTrigger>
              <TabsTrigger value="social">Social</TabsTrigger>
              <TabsTrigger value="productivity">Productivity</TabsTrigger>
              <TabsTrigger value="compliance">Compliance</TabsTrigger>
              <TabsTrigger value="background">Background</TabsTrigger>
              <TabsTrigger value="onboarding">Onboarding</TabsTrigger>
              <TabsTrigger value="crm">CRM & HRMS</TabsTrigger>
            </TabsList>

            <TabsContent value={activeFilter} className="space-y-4">
              {getFilteredSystems().map((system) => (
                <IntegrationCard 
                  key={system.id}
                  system={system}
                  onToggle={() => handleToggleEnable(system.id)}
                  onConfigure={() => handleConfigure(system.name)}
                />
              ))}

              {getFilteredSystems().length === 0 && (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <p className="text-muted-foreground mb-4">No integrations found in this category</p>
                  <Button variant="outline">Add Integration</Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

// Integration Card Component
interface IntegrationSystem {
  id: number;
  name: string;
  type: string;
  status: string;
  lastSync: string | null;
  enabled: boolean;
}

interface IntegrationCardProps {
  system: IntegrationSystem;
  onToggle: () => void;
  onConfigure: () => void;
}

const IntegrationCard = ({ system, onToggle, onConfigure }: IntegrationCardProps) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "connected":
        return <Check className="h-5 w-5 text-green-500" />;
      case "disconnected":
        return <X className="h-5 w-5 text-gray-400" />;
      case "pending":
        return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "connected":
        return (
          <Badge className="bg-green-500 hover:bg-green-600">Connected</Badge>
        );
      case "disconnected":
        return (
          <Badge variant="outline" className="text-gray-500 border-gray-300">
            Disconnected
          </Badge>
        );
      case "pending":
        return (
          <Badge className="bg-amber-500 hover:bg-amber-600">Pending</Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-between p-4 rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">
          {getStatusIcon(system.status)}
        </div>
        <div>
          <h3 className="font-medium">{system.name}</h3>
          <p className="text-sm text-muted-foreground">{system.type}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right">
          <div className="font-medium">Status</div>
          <div>{getStatusBadge(system.status)}</div>
        </div>

        {system.lastSync && (
          <div className="text-right min-w-24">
            <div className="font-medium">Last Sync</div>
            <div className="text-sm text-muted-foreground">{system.lastSync}</div>
          </div>
        )}

        <div className="flex items-center gap-2">
          <Switch
            checked={system.enabled}
            onCheckedChange={onToggle}
            disabled={system.status === "disconnected"}
          />
          <span className="text-sm">
            {system.enabled ? "Enabled" : "Disabled"}
          </span>
        </div>

        <Button 
          variant="outline" 
          onClick={onConfigure}
        >
          Configure
        </Button>
      </div>
    </div>
  );
};

export default IntegrationsOverview;

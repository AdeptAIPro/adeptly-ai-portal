
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { 
  Search, 
  Filter, 
  CheckCircle2, 
  X, 
  AlertTriangle,
  PlusCircle,
  Sliders,
  RefreshCw,
  Link as LinkIcon
} from "lucide-react";
import { motion } from "framer-motion";

// Integration systems data
const integrationSystems = [
  // VMS Systems
  { id: 1, name: "Stafferlink", type: "VMS", status: "connected", lastSync: "2 hours ago" },
  { id: 2, name: "SAP Fieldglass", type: "VMS", status: "connected", lastSync: "1 day ago" },
  { id: 3, name: "Beeline", type: "VMS", status: "disconnected", lastSync: null },
  { id: 4, name: "IQNavigator", type: "VMS", status: "disconnected", lastSync: null },
  { id: 5, name: "PRO Unlimited VMS", type: "VMS", status: "pending", lastSync: null },
  
  // ATS Systems
  { id: 6, name: "Workday", type: "ATS", status: "connected", lastSync: "5 hours ago" },
  { id: 7, name: "Taleo", type: "ATS", status: "disconnected", lastSync: null },
  { id: 8, name: "ICIMS", type: "ATS", status: "disconnected", lastSync: null },
  { id: 9, name: "Lever", type: "ATS", status: "pending", lastSync: null },
  { id: 10, name: "Smart Recruiters", type: "ATS", status: "connected", lastSync: "3 days ago" },
  
  // Job Boards
  { id: 11, name: "LinkedIn Jobs", type: "Job Board", status: "connected", lastSync: "12 hours ago" },
  { id: 12, name: "Indeed", type: "Job Board", status: "connected", lastSync: "1 day ago" },
  { id: 13, name: "Glassdoor", type: "Job Board", status: "disconnected", lastSync: null },
  { id: 14, name: "Dice", type: "Job Board", status: "disconnected", lastSync: null },
];

interface IntegrationSystem {
  id: number;
  name: string;
  type: string;
  status: string;
  lastSync: string | null;
}

const IntegrationsPanel = () => {
  const [systems, setSystems] = useState(integrationSystems);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  // Count integrations by status
  const connectedCount = systems.filter(sys => sys.status === "connected").length;
  const pendingCount = systems.filter(sys => sys.status === "pending").length;
  const disconnectedCount = systems.filter(sys => sys.status === "disconnected").length;

  // Handle integration toggle
  const handleToggleEnable = (id: number) => {
    setSystems(systems.map(system => {
      if (system.id === id) {
        const newStatus = system.status === "connected" ? "disconnected" : "connected";
        
        // Show appropriate toast message
        if (newStatus === "connected") {
          toast.success(`${system.name} has been connected`);
        } else {
          toast.info(`${system.name} has been disconnected`);
        }
        
        return { ...system, status: newStatus };
      }
      return system;
    }));
  };

  // Handle refresh all
  const handleRefresh = () => {
    toast.success("Integration data refreshed successfully");
  };

  // Filter systems based on search and tab
  const getFilteredSystems = () => {
    return systems.filter(system => {
      // Search filter
      if (searchTerm && !system.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      
      // Tab filter
      if (activeFilter === "all") return true;
      if (activeFilter === "vms") return system.type === "VMS";
      if (activeFilter === "ats") return system.type === "ATS";
      if (activeFilter === "job-boards") return system.type === "Job Board";
      
      return true;
    });
  };

  const filteredSystems = getFilteredSystems();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold mb-1">Integrations</h2>
          <p className="text-muted-foreground">
            Connect your existing recruitment systems with Adept AI
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={handleRefresh} variant="outline" className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Refresh
          </Button>
          <Button className="gap-2">
            <PlusCircle className="h-4 w-4" />
            Add Integration
          </Button>
        </div>
      </div>
      
      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatusCard 
          title="Connected" 
          count={connectedCount} 
          description="Active integrations"
          status="connected"
        />
        <StatusCard 
          title="Pending" 
          count={pendingCount} 
          description="Awaiting verification"
          status="pending"
        />
        <StatusCard 
          title="Disconnected" 
          count={disconnectedCount} 
          description="Available to connect"
          status="disconnected"
        />
      </div>
      
      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search integrations..." 
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Sliders className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Integration List */}
      <Tabs defaultValue="all" value={activeFilter} onValueChange={setActiveFilter}>
        <TabsList className="mb-4">
          <TabsTrigger value="all">All Systems</TabsTrigger>
          <TabsTrigger value="vms">VMS</TabsTrigger>
          <TabsTrigger value="ats">ATS</TabsTrigger>
          <TabsTrigger value="job-boards">Job Boards</TabsTrigger>
        </TabsList>
        
        <TabsContent value={activeFilter} className="space-y-4">
          {filteredSystems.length > 0 ? (
            filteredSystems.map((system) => (
              <motion.div
                key={system.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <IntegrationCard 
                  system={system}
                  onToggle={() => handleToggleEnable(system.id)}
                />
              </motion.div>
            ))
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-10 text-center">
                <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center mb-4">
                  <LinkIcon className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium mb-2">No integrations found</h3>
                <p className="text-muted-foreground max-w-md mb-4">
                  No matching integrations found with your current filters
                </p>
                <Button variant="outline">Add Integration</Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Status Card Component
interface StatusCardProps {
  title: string;
  count: number;
  description: string;
  status: string;
}

const StatusCard = ({ title, count, description, status }: StatusCardProps) => {
  const getBgColor = () => {
    switch (status) {
      case "connected": return "bg-green-500/10 dark:bg-green-900/20";
      case "pending": return "bg-amber-500/10 dark:bg-amber-900/20";
      case "disconnected": return "bg-gray-500/10 dark:bg-gray-800/20";
      default: return "bg-gray-100 dark:bg-gray-800";
    }
  };
  
  const getIcon = () => {
    switch (status) {
      case "connected": return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case "pending": return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case "disconnected": return <X className="h-5 w-5 text-gray-400" />;
      default: return null;
    }
  };

  return (
    <Card className={`${getBgColor()} border-0`}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-2xl font-bold">{count}</span>
            <h3 className="text-base font-medium">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
          <div className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-sm">
            {getIcon()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Integration Card Component
interface IntegrationCardProps {
  system: IntegrationSystem;
  onToggle: () => void;
}

const IntegrationCard = ({ system, onToggle }: IntegrationCardProps) => {
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
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex items-center justify-between p-4 md:p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-md bg-primary/10 flex-shrink-0">
              <LinkIcon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-base">{system.name}</h3>
              <p className="text-sm text-muted-foreground">{system.type}</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right hidden md:block">
              {getStatusBadge(system.status)}
              {system.lastSync && (
                <p className="text-xs text-muted-foreground mt-1">Last synced {system.lastSync}</p>
              )}
            </div>

            <div className="flex items-center gap-2">
              <Switch
                checked={system.status === "connected"}
                onCheckedChange={onToggle}
              />
              <span className="text-sm hidden md:inline">
                {system.status === "connected" ? "Enabled" : "Disabled"}
              </span>
            </div>

            <Button size="sm" variant="outline">Configure</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IntegrationsPanel;

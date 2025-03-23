
import { useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { RefreshCw, X, CheckCircle2, AlertTriangle, LogOut, Search } from "lucide-react";

// Simplified dashboard sidebar
const DashboardSidebar = () => {
  return (
    <aside className="w-60 h-screen bg-white dark:bg-gray-900 border-r dark:border-gray-800 flex flex-col">
      <div className="p-6 border-b dark:border-gray-800">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
            A
          </div>
          <h1 className="font-bold text-lg">Adept AI Dashboard</h1>
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          <li>
            <Link to="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg>
              </div>
              <span>Overview</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/integrations" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-medium">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 18h.01"></path><path d="M8 18h.01"></path><path d="M16 18h.01"></path><path d="M12 13a5 5 0 0 1 10 0"></path><path d="M2 13a5 5 0 0 1 8.9-3"></path><path d="M16 8a5 5 0 0 1-8.9-3"></path></svg>
              </div>
              <span>Integrations</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/talent-matching" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <span>Talent Matching</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
              <div className="w-6 h-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              </div>
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
      
      <div className="p-4 border-t dark:border-gray-800">
        <Link to="/login" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
};

// Integration card component
interface IntegrationCardProps {
  name: string;
  type: string;
  status: 'connected' | 'disconnected' | 'pending';
  lastSync?: string;
  enabled: boolean;
  onToggle: () => void;
  onConfigure: () => void;
}

const StatusBadge = ({ status }: { status: 'connected' | 'disconnected' | 'pending' }) => {
  if (status === 'connected') {
    return (
      <div className="px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
        Connected
      </div>
    );
  } else if (status === 'pending') {
    return (
      <div className="px-3 py-1 bg-amber-500 text-white text-xs font-medium rounded-full">
        Pending
      </div>
    );
  } else {
    return (
      <div className="px-3 py-1 bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">
        Disconnected
      </div>
    );
  }
};

const StatusIcon = ({ status }: { status: 'connected' | 'disconnected' | 'pending' }) => {
  if (status === 'connected') {
    return <CheckCircle2 className="h-5 w-5 text-green-500" />;
  } else if (status === 'pending') {
    return <AlertTriangle className="h-5 w-5 text-amber-500" />;
  } else {
    return <X className="h-5 w-5 text-gray-400" />;
  }
};

const IntegrationCard = ({ 
  name, 
  type, 
  status, 
  lastSync, 
  enabled, 
  onToggle, 
  onConfigure 
}: IntegrationCardProps) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 shadow-sm">
      <div className="flex justify-between">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <StatusIcon status={status} />
          </div>
          <div>
            <h3 className="font-medium text-lg">{name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{type}</p>
          </div>
        </div>
        
        <div className="text-right">
          <div className="font-medium mb-1">Status</div>
          <StatusBadge status={status} />
        </div>
      </div>
      
      <div className="mt-6 flex items-center justify-between">
        {lastSync && (
          <div>
            <div className="font-medium text-sm text-gray-500 dark:text-gray-400">Last Sync</div>
            <div className="text-sm">{lastSync}</div>
          </div>
        )}
        {!lastSync && <div></div>}
        
        <div className="flex items-center justify-end gap-8">
          <div className="flex items-center gap-2">
            <Switch 
              checked={enabled} 
              onCheckedChange={onToggle}
              disabled={status === 'disconnected'}
            />
            <span className="text-sm">{enabled ? 'Enabled' : 'Disabled'}</span>
          </div>
          
          <Button 
            variant="outline" 
            size="sm"
            onClick={onConfigure}
          >
            Configure
          </Button>
        </div>
      </div>
    </div>
  );
};

// Integration systems data
const integrationSystems = [
  { 
    id: 1,
    name: "Stafferlink", 
    type: "VMS System",
    status: "connected" as const, 
    lastSync: "2 hours ago",
    enabled: true,
  },
  { 
    id: 2,
    name: "SAP Fieldglass", 
    type: "VMS System",
    status: "connected" as const, 
    lastSync: "1 day ago",
    enabled: true,
  },
  { 
    id: 3,
    name: "Beeline", 
    type: "VMS System",
    status: "disconnected" as const, 
    lastSync: null,
    enabled: false,
  },
  { 
    id: 4,
    name: "IQNavigator", 
    type: "VMS System",
    status: "disconnected" as const, 
    lastSync: null,
    enabled: false,
  },
  { 
    id: 5,
    name: "PRO Unlimited VMS", 
    type: "VMS System",
    status: "connected" as const, 
    lastSync: "3 days ago",
    enabled: true,
  },
  { 
    id: 6,
    name: "Pontoon", 
    type: "VMS System",
    status: "pending" as const, 
    lastSync: null,
    enabled: false,
  }
];

const IntegrationsDashboard = () => {
  const [systems, setSystems] = useState(integrationSystems);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

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
    let filtered = systems;
    
    // Filter by category tab
    if (activeFilter !== "all") {
      filtered = filtered.filter(system => {
        if (activeFilter === "vms") return system.type === "VMS System";
        if (activeFilter === "ats") return system.type === "ATS System";
        if (activeFilter === "paid") return system.type.includes("Paid");
        if (activeFilter === "free") return system.type.includes("Free");
        if (activeFilter === "social") return system.type === "Social";
        if (activeFilter === "productivity") return system.type === "Productivity";
        if (activeFilter === "compliance") return system.type === "Compliance";
        if (activeFilter === "background") return system.type === "Background";
        if (activeFilter === "onboarding") return system.type === "Onboarding";
        if (activeFilter === "crm") return system.type.includes("CRM") || system.type.includes("HRMS");
        return true;
      });
    }
    
    // Filter by search
    if (searchTerm) {
      filtered = filtered.filter(system => 
        system.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        system.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <DashboardSidebar />
      
      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-6xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Integrations</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Connect your existing systems to Adept AI
            </p>
          </div>
          
          {/* Status summary */}
          <div className="flex gap-4 mb-6">
            <div className="font-medium">{connectedCount} Connected</div>
            <div className="font-medium">{pendingCount} Pending</div>
            <div className="font-medium">{disconnectedCount} Disconnected</div>
            
            <div className="ml-auto">
              <Button 
                onClick={handleRefresh}
                variant="default"
                className="flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
              >
                <RefreshCw className="h-4 w-4" />
                Refresh All
              </Button>
            </div>
          </div>
          
          {/* Search and filters */}
          <div className="mb-6">
            <div className="relative w-full md:max-w-sm mb-4">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                placeholder="Search integrations..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Tabs defaultValue="all" value={activeFilter} onValueChange={setActiveFilter} className="w-full">
              <TabsList className="flex flex-wrap bg-transparent h-auto p-0 gap-2">
                <TabsTrigger 
                  value="all" 
                  className="rounded-full px-4 py-1.5 h-auto data-[state=active]:bg-black data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black"
                >
                  All
                </TabsTrigger>
                <TabsTrigger 
                  value="vms" 
                  className="rounded-full px-4 py-1.5 h-auto data-[state=active]:bg-black data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black"
                >
                  VMS Systems
                </TabsTrigger>
                <TabsTrigger 
                  value="ats" 
                  className="rounded-full px-4 py-1.5 h-auto data-[state=active]:bg-black data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black"
                >
                  ATS
                </TabsTrigger>
                <TabsTrigger 
                  value="paid" 
                  className="rounded-full px-4 py-1.5 h-auto data-[state=active]:bg-black data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black"
                >
                  Paid Job Boards
                </TabsTrigger>
                <TabsTrigger 
                  value="free" 
                  className="rounded-full px-4 py-1.5 h-auto data-[state=active]:bg-black data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black"
                >
                  Free Job Boards
                </TabsTrigger>
                <TabsTrigger 
                  value="social" 
                  className="rounded-full px-4 py-1.5 h-auto data-[state=active]:bg-black data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black"
                >
                  Social
                </TabsTrigger>
                <TabsTrigger 
                  value="productivity" 
                  className="rounded-full px-4 py-1.5 h-auto data-[state=active]:bg-black data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black"
                >
                  Productivity
                </TabsTrigger>
                <TabsTrigger 
                  value="compliance" 
                  className="rounded-full px-4 py-1.5 h-auto data-[state=active]:bg-black data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black"
                >
                  Compliance
                </TabsTrigger>
                <TabsTrigger 
                  value="background" 
                  className="rounded-full px-4 py-1.5 h-auto data-[state=active]:bg-black data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black"
                >
                  Background
                </TabsTrigger>
                <TabsTrigger 
                  value="onboarding" 
                  className="rounded-full px-4 py-1.5 h-auto data-[state=active]:bg-black data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black"
                >
                  Onboarding
                </TabsTrigger>
                <TabsTrigger 
                  value="crm" 
                  className="rounded-full px-4 py-1.5 h-auto data-[state=active]:bg-black data-[state=active]:text-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black"
                >
                  CRM & HRMS
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          {/* Integration cards */}
          <div className="space-y-4">
            {getFilteredSystems().map((system) => (
              <IntegrationCard 
                key={system.id}
                name={system.name}
                type={system.type}
                status={system.status}
                lastSync={system.lastSync || undefined}
                enabled={system.enabled}
                onToggle={() => handleToggleEnable(system.id)}
                onConfigure={() => handleConfigure(system.name)}
              />
            ))}
            
            {getFilteredSystems().length === 0 && (
              <div className="bg-white dark:bg-gray-800 p-8 text-center rounded-lg border dark:border-gray-700">
                <p className="text-gray-500 dark:text-gray-400">No integrations found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationsDashboard;

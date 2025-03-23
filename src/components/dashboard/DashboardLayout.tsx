
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { 
  LayoutDashboard, 
  Link as LinkIcon, 
  Database, 
  Users, 
  Settings, 
  LogOut,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeButton } from "@/components/ThemeButton";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const Logo = () => (
  <div className="flex items-center space-x-2">
    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-lime-300 rounded-md flex items-center justify-center overflow-hidden">
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    </div>
    <span className="font-bold text-xl">Adept AI</span>
  </div>
);

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  const handleLogout = () => {
    logout();
    toast.success("You've been logged out successfully");
    navigate("/login");
  };
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      {/* Remove className from Navbar component */}
      <Navbar />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar Toggle for Mobile */}
        <Button
          variant="ghost"
          size="icon"
          className="fixed bottom-4 right-4 z-50 md:hidden shadow-lg bg-white dark:bg-gray-800"
          onClick={toggleSidebar}
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
        
        {/* Sidebar */}
        <div className={`
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          transition-transform duration-300 ease-in-out
          md:translate-x-0 fixed md:static z-40 h-[calc(100vh-64px)] w-64 
          bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col
        `}>
          <div className="p-4 border-b border-gray-200 dark:border-gray-800">
            <Logo />
          </div>
          
          <div className="flex-1 py-6 overflow-y-auto">
            <nav className="px-3 space-y-1">
              <SidebarLink icon={<LayoutDashboard size={18} />} href="/dashboard" label="Dashboard" />
              <SidebarLink icon={<LinkIcon size={18} />} href="/dashboard" label="Integrations" onClick={() => navigate('/dashboard?tab=integrations')} />
              <SidebarLink icon={<Database size={18} />} href="/dashboard" label="Data Selection" onClick={() => navigate('/dashboard?tab=data')} />
              <SidebarLink icon={<Users size={18} />} href="/dashboard" label="Talent Matching" onClick={() => navigate('/dashboard?tab=talent')} />
              <SidebarLink icon={<Settings size={18} />} href="/dashboard/settings" label="Settings" />
            </nav>
          </div>
          
          <div className="p-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={handleLogout} className="flex items-center gap-2 text-red-500 hover:text-red-600">
              <LogOut size={16} />
              <span>Log out</span>
            </Button>
            <ThemeButton />
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 overflow-y-auto pb-10">
          {children}
        </div>
      </div>
    </div>
  );
};

interface SidebarLinkProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  onClick?: () => void;
}

const SidebarLink = ({ icon, label, href, onClick }: SidebarLinkProps) => {
  return (
    <a 
      href={href} 
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
};

export default DashboardLayout;


import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { 
  Users, 
  MessageSquare, 
  Trophy, 
  Package, 
  Calendar, 
  Rss, 
  Wand2, 
  Percent, 
  BarChart3, 
  Settings,
  LogOut,
  Link as LinkIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeButton } from "@/components/ThemeButton";
import { cn } from "@/lib/utils";

// Logo SVG for the sidebar
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

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
  isHeader?: boolean;
}

const SidebarItem = ({ icon, label, href, onClick, isHeader }: SidebarItemProps) => {
  return href ? (
    <Link to={href} className={cn(
      "flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
      isHeader && "text-xs uppercase font-semibold text-gray-500 dark:text-gray-400 hover:bg-transparent dark:hover:bg-transparent cursor-default"
    )}>
      {icon}
      <span>{label}</span>
    </Link>
  ) : (
    <button 
      onClick={onClick} 
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors w-full text-left",
        isHeader && "text-xs uppercase font-semibold text-gray-500 dark:text-gray-400 hover:bg-transparent dark:hover:bg-transparent cursor-default"
      )}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

export const DashboardSidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    toast.success("You've been logged out successfully");
    navigate("/login");
  };

  return (
    <div className="w-64 h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col">
      <div className="p-4 border-b border-gray-200 dark:border-gray-800">
        <Logo />
      </div>
      
      <div className="flex-1 py-4 overflow-y-auto">
        <nav className="px-2 space-y-1">
          <SidebarItem icon={<Users size={18} />} label="Members" href="/dashboard/members" />
          <SidebarItem icon={<MessageSquare size={18} />} label="Messages" href="/dashboard/messages" />
          <SidebarItem icon={<LinkIcon size={18} />} label="Integrations" href="/dashboard/integrations" />
          
          <div className="pt-5 pb-2 px-3">
            <SidebarItem icon={null} label="ENGAGE" isHeader />
          </div>
          
          <SidebarItem icon={<Trophy size={18} />} label="Challenges" href="/dashboard/challenges" />
          <SidebarItem icon={<Package size={18} />} label="Products" href="/dashboard/products" />
          <SidebarItem icon={<Calendar size={18} />} label="Events" href="/dashboard/events" />
          <SidebarItem icon={<Rss size={18} />} label="Feed" href="/dashboard/feed" />
          
          <div className="pt-5 pb-2 px-3">
            <SidebarItem icon={null} label="MARKETING" isHeader />
          </div>
          
          <SidebarItem icon={<Wand2 size={18} />} label="Magic Reach" href="/dashboard/magic-reach" />
          <SidebarItem icon={<Percent size={18} />} label="Promotions" href="/dashboard/promotions" />
          
          <div className="pt-5 pb-2 px-3">
            <SidebarItem icon={null} label="MANAGE" isHeader />
          </div>
          
          <SidebarItem icon={<BarChart3 size={18} />} label="Analytics" href="/dashboard/analytics" />
          <SidebarItem icon={<Settings size={18} />} label="Settings" href="/dashboard/settings" />
        </nav>
      </div>
      
      <div className="p-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={handleLogout} className="flex items-center gap-2 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">
          <LogOut size={16} />
          <span>Log out</span>
        </Button>
        <ThemeButton />
      </div>
    </div>
  );
};

export default DashboardSidebar;

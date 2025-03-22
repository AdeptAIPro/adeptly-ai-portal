
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage = ({ title }: PlaceholderPageProps) => {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <DashboardSidebar />
      
      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <main className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{title}</h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-8 text-center">
            <h2 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
              This is a placeholder for the {title} page
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              The functionality for this page is not implemented yet.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PlaceholderPage;

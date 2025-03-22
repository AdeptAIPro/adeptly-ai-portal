
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BarChart, LineChart, PieChart } from "lucide-react";

const Dashboard = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  if (!user) {
    return null; // or a loading state
  }

  return (
    <div className="min-h-screen bg-background pb-12">
      <header className="bg-card shadow-sm border-b border-border">
        <div className="container mx-auto px-8 md:px-12 lg:px-16 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <Button variant="outline" onClick={logout}>Log out</Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-8 md:px-12 lg:px-16 py-8">
        <section className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Welcome back, {user.name}!</CardTitle>
                <CardDescription>
                  Here's an overview of your dashboard
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This is your personalized dashboard. We're working on adding more features and analytics to help you track your progress.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Analytics Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Performance Metrics", icon: <BarChart />, color: "bg-blue-100 dark:bg-blue-900" },
              { title: "Growth Insights", icon: <LineChart />, color: "bg-green-100 dark:bg-green-900" },
              { title: "Resource Allocation", icon: <PieChart />, color: "bg-purple-100 dark:bg-purple-900" }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader className={`${card.color} bg-opacity-20 dark:bg-opacity-20 rounded-t-lg`}>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{card.title}</CardTitle>
                      <div className="p-2 rounded-full bg-background">{card.icon}</div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-sm text-muted-foreground">
                      Detailed analytics and insights will appear here in the future updates.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;

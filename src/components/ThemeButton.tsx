
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeButton() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="w-9 h-9 p-0 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {theme === "dark" ? (
          <Moon className="h-[1rem] w-[1rem] text-yellow-500" />
        ) : (
          <Sun className="h-[1rem] w-[1rem] text-amber-400" />
        )}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

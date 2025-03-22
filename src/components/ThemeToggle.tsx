
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { Toggle } from "@/components/ui/toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Toggle 
          variant="outline" 
          aria-label="Toggle theme" 
          className="h-9 w-9 rounded-full border border-border/80 bg-background/50 backdrop-blur-sm hover:bg-accent/10"
        >
          <motion.div
            initial={false}
            className="relative w-full h-full"
          >
            <Sun className="absolute inset-0 m-auto h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-yellow-500 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute inset-0 m-auto h-[1.2rem] w-[1.2rem] rotate-90 scale-0 text-primary transition-all dark:rotate-0 dark:scale-100" />
          </motion.div>
        </Toggle>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-card/95 backdrop-blur-sm border border-border">
        <DropdownMenuItem 
          onClick={() => setTheme("light")} 
          className={theme === "light" ? "bg-accent/40 text-accent-foreground" : ""}
        >
          <Sun className="mr-2 h-4 w-4 text-yellow-500" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")} 
          className={theme === "dark" ? "bg-accent/40 text-accent-foreground" : ""}
        >
          <Moon className="mr-2 h-4 w-4 text-primary" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")} 
          className={theme === "system" ? "bg-accent/40 text-accent-foreground" : ""}
        >
          <svg 
            className="mr-2 h-4 w-4 text-foreground/80" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

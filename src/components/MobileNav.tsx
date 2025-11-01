import { Home, Zap, BarChart3, Bot, Settings } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const MobileNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/dashboard" },
    { icon: Zap, label: "Invoice", path: "/quick-invoice" },
    { icon: BarChart3, label: "Analytics", path: "/analytics" },
    { icon: Bot, label: "AI", path: "/ai-assistant" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="glass border-t border-white/10 backdrop-blur-xl px-4 py-3">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <motion.button
                key={item.path}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigate(item.path)}
                className={cn(
                  "flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all",
                  isActive && "bg-white/10"
                )}
              >
                <Icon
                  className={cn(
                    "w-5 h-5 transition-colors",
                    isActive ? "text-[hsl(var(--neon-cyan))]" : "text-muted-foreground"
                  )}
                />
                <span
                  className={cn(
                    "text-xs transition-colors",
                    isActive ? "text-[hsl(var(--neon-cyan))]" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

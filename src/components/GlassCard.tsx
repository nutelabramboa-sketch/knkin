import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  neonBorder?: "cyan" | "blue" | "green" | "none";
  hover?: boolean;
  onClick?: () => void;
}

export const GlassCard = ({ children, className, neonBorder = "none", hover = false, onClick }: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "glass rounded-2xl p-6 transition-all duration-300",
        hover && "hover:glass-hover cursor-pointer active:scale-95",
        neonBorder === "cyan" && "neon-border-cyan",
        neonBorder === "blue" && "neon-border-blue",
        neonBorder === "green" && "neon-border-green",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

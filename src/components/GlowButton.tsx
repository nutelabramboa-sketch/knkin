import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "cyan" | "green" | "coral" | "blue";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
}

export const GlowButton = ({
  children,
  onClick,
  variant = "cyan",
  size = "md",
  className,
  type = "button",
}: GlowButtonProps) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    cyan: "bg-gradient-to-r from-[hsl(var(--neon-cyan))] to-[hsl(var(--neon-blue))] text-[hsl(var(--primary-foreground))] glow-cyan",
    green: "bg-gradient-to-r from-[hsl(var(--neon-green))] to-[hsl(var(--neon-cyan))] text-[hsl(var(--accent-foreground))] glow-green",
    blue: "bg-gradient-to-r from-[hsl(var(--neon-blue))] to-[hsl(var(--neon-cyan))] text-[hsl(var(--primary-foreground))] glow-blue",
    coral: "bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] text-white shadow-[0_0_20px_rgba(255,107,107,0.5)]",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      type={type}
      className={cn(
        "rounded-full font-semibold transition-all duration-300 active:shadow-lg",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {children}
    </motion.button>
  );
};

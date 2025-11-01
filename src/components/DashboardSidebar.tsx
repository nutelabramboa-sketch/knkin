import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Users,
  TrendingUp,
  Brain,
  BarChart3,
  Activity,
  Smartphone,
  FileText,
  Camera,
  Mic,
  Upload,
  Download,
  Calculator,
  BookOpen,
  DollarSign,
  CreditCard,
  Package,
  Users as TeamIcon,
  Wallet,
  Building2,
  Shield,
  Zap,
  Lock,
  Key,
  Webhook,
  FileCode,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import icon from "@/assets/icon-192.png";

interface MenuItem {
  icon: any;
  label: string;
  path: string;
}

interface MenuCategory {
  label: string;
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    label: "ADMIN",
    items: [
      { icon: Users, label: "User Management", path: "/admin-panel" },
    ],
  },
  {
    label: "EXECUTIVE",
    items: [
      { icon: TrendingUp, label: "Executive Dashboard", path: "/executive" },
      { icon: Brain, label: "AI Financial Advisor", path: "/ai-advisor" },
      { icon: Activity, label: "AI Market Predictor", path: "/ai-assistant" },
      { icon: BarChart3, label: "Advanced Analytics", path: "/analytics" },
      { icon: Activity, label: "Predictive Insights", path: "/executive" },
    ],
  },
  {
    label: "FINANCIAL",
    items: [
      { icon: Smartphone, label: "NFC Terminal", path: "/nfc-terminal" },
      { icon: FileText, label: "Quick Invoice", path: "/quick-invoice" },
      { icon: Camera, label: "Photo Invoice", path: "/photo-invoice" },
      { icon: Mic, label: "Voice Invoice", path: "/voice-invoice" },
      { icon: Calculator, label: "Tax Assistant", path: "/tax-assistant" },
      { icon: BookOpen, label: "AI Bookkeeper", path: "/ai-assistant" },
      { icon: DollarSign, label: "Cash Flow", path: "/cash-flow" },
      { icon: CreditCard, label: "Recurring Billing", path: "/recurring" },
      { icon: Building2, label: "Accounting Sync", path: "/bank" },
    ],
  },
  {
    label: "OPERATIONS",
    items: [
      { icon: Package, label: "Warehouse Management", path: "/warehouse" },
      { icon: TeamIcon, label: "Team Collaboration", path: "/team" },
      { icon: Wallet, label: "Payroll System", path: "/payroll" },
      { icon: Building2, label: "Bank Integration", path: "/bank" },
    ],
  },
  {
    label: "ADMINISTRATION",
    items: [
      { icon: Settings, label: "Admin Panel", path: "/admin-panel" },
      { icon: Users, label: "Customer Management", path: "/customers" },
      { icon: Building2, label: "Multi-Tenant Manager", path: "/admin-panel" },
      { icon: Lock, label: "RBAC Manager", path: "/admin-panel" },
      { icon: Key, label: "SSO Manager", path: "/admin-panel" },
      { icon: Zap, label: "API Gateway", path: "/api" },
      { icon: Shield, label: "Compliance & Audit", path: "/compliance" },
      { icon: Webhook, label: "Webhooks System", path: "/api" },
      { icon: FileCode, label: "Smart Contracts", path: "/dashboard" },
    ],
  },
  {
    label: "DATA MANAGEMENT",
    items: [
      { icon: Upload, label: "Import Data", path: "/dashboard" },
      { icon: Download, label: "Export Data", path: "/dashboard" },
    ],
  },
];

export const DashboardSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [openCategories, setOpenCategories] = useState<string[]>([
    "EXECUTIVE",
    "FINANCIAL",
  ]);

  const toggleCategory = (category: string) => {
    if (openCategories.includes(category)) {
      setOpenCategories(openCategories.filter((c) => c !== category));
    } else {
      setOpenCategories([...openCategories, category]);
    }
  };

  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: 0, width: collapsed ? 80 : 280 }}
      transition={{ duration: 0.3 }}
      className="fixed left-0 top-0 bottom-0 z-40 glass border-r border-white/10 backdrop-blur-xl hidden md:block overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
    >
      {/* Logo & Collapse Button */}
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        {!collapsed && (
          <div className="flex items-center gap-3">
            <img src={icon} alt="AI Control Money" className="w-8 h-8 animate-float" />
            <span className="text-sm font-bold gradient-text-cyan">AI CONTROL</span>
          </div>
        )}
        {collapsed && (
          <img src={icon} alt="AI Control Money" className="w-8 h-8 animate-float mx-auto" />
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "p-2 rounded-lg hover:bg-white/5 transition-colors",
            collapsed && "mx-auto mt-2"
          )}
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4 text-[hsl(var(--neon-cyan))]" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-[hsl(var(--neon-cyan))]" />
          )}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="p-3 space-y-1">
        {/* Dashboard Home */}
        <motion.button
          whileHover={{ scale: 1.02, x: 2 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/dashboard")}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all group",
            location.pathname === "/dashboard"
              ? "bg-[hsl(var(--neon-cyan))]/20 border border-[hsl(var(--neon-cyan))]/40"
              : "hover:bg-white/5"
          )}
        >
          <TrendingUp
            className={cn(
              "w-5 h-5 transition-colors",
              location.pathname === "/dashboard"
                ? "text-[hsl(var(--neon-cyan))] drop-shadow-[0_0_8px_hsl(var(--neon-cyan))]"
                : "text-muted-foreground group-hover:text-[hsl(var(--neon-cyan))]"
            )}
          />
          {!collapsed && (
            <span
              className={cn(
                "text-sm font-medium transition-colors",
                location.pathname === "/dashboard"
                  ? "text-[hsl(var(--neon-cyan))]"
                  : "group-hover:text-foreground"
              )}
            >
              Dashboard Home
            </span>
          )}
        </motion.button>

        {/* Categories */}
        {menuCategories.map((category, i) => (
          <div key={i} className="mt-6">
            {!collapsed && (
              <button
                onClick={() => toggleCategory(category.label)}
                className="w-full flex items-center justify-between px-3 py-2 mb-1 group"
              >
                <span className="text-xs font-bold text-muted-foreground/60 group-hover:text-muted-foreground transition-colors">
                  {category.label}
                </span>
                <ChevronRight
                  className={cn(
                    "w-3 h-3 text-muted-foreground/40 transition-transform",
                    openCategories.includes(category.label) && "rotate-90"
                  )}
                />
              </button>
            )}

            {(!collapsed && openCategories.includes(category.label)) ||
            collapsed ? (
              <div className="space-y-0.5">
                {category.items.map((item, j) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <motion.button
                      key={j}
                      whileHover={{ scale: 1.02, x: 2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => navigate(item.path)}
                      className={cn(
                        "w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all group relative",
                        isActive
                          ? "bg-[hsl(var(--neon-cyan))]/10 border-l-2 border-[hsl(var(--neon-cyan))]"
                          : "hover:bg-white/5 border-l-2 border-transparent"
                      )}
                      title={collapsed ? item.label : undefined}
                    >
                      <Icon
                        className={cn(
                          "w-4 h-4 transition-all flex-shrink-0",
                          isActive
                            ? "text-[hsl(var(--neon-cyan))] drop-shadow-[0_0_6px_hsl(var(--neon-cyan))]"
                            : "text-muted-foreground group-hover:text-[hsl(var(--neon-cyan))] group-hover:drop-shadow-[0_0_6px_hsl(var(--neon-cyan))]"
                        )}
                      />
                      {!collapsed && (
                        <span
                          className={cn(
                            "text-sm transition-colors",
                            isActive
                              ? "text-foreground font-medium"
                              : "text-muted-foreground group-hover:text-foreground"
                          )}
                        >
                          {item.label}
                        </span>
                      )}
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute right-2 w-1.5 h-1.5 rounded-full bg-[hsl(var(--neon-cyan))] shadow-[0_0_8px_hsl(var(--neon-cyan))]"
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            ) : null}
          </div>
        ))}
      </nav>
    </motion.aside>
  );
};

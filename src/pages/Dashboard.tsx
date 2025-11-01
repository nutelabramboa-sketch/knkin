import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { TopBar } from "@/components/TopBar";
import { MobileNav } from "@/components/MobileNav";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { Mic, Camera, Smartphone, FileText, Calculator, TrendingUp, DollarSign, Users, Package, CreditCard, Brain, Building2, Shield, Zap, Activity, ArrowUpRight, ArrowDownRight, Clock, CheckCircle2, AlertCircle, PieChart, BarChart3, LineChart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useEmblaCarousel from 'embla-carousel-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [emblaRef] = useEmblaCarousel({ 
    loop: false, 
    align: 'start',
    skipSnaps: false,
    dragFree: true
  });
  
  const quickActions = [
    {
      icon: Smartphone,
      title: "NFC Terminal",
      subtitle: "Tap to pay & invoice",
      status: "Ready",
      color: "cyan",
      badge: "PRO",
      path: "/nfc-terminal",
    },
    {
      icon: Camera,
      title: "Photo Invoice",
      subtitle: "Snap & create",
      status: "Ready",
      color: "green",
      badge: "AI",
      path: "/photo-invoice",
    },
    {
      icon: Mic,
      title: "Voice Invoice",
      subtitle: "Speak to create",
      status: "Ready",
      color: "blue",
      badge: "AI",
      path: "/voice-invoice",
    },
    {
      icon: FileText,
      title: "Quick Invoice",
      subtitle: "Manual entry",
      status: "Ready",
      color: "cyan",
      badge: "NEW",
      path: "/quick-invoice",
    },
    {
      icon: Calculator,
      title: "Tax Assistant",
      subtitle: "AI tax help",
      status: "Ready",
      color: "green",
      badge: "AI",
      path: "/tax-assistant",
    },
  ];

  const stats = [
    { 
      label: "Today's Revenue", 
      value: "$12,450", 
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
      color: "cyan",
      subtext: "vs yesterday $11,070"
    },
    { 
      label: "Active Invoices", 
      value: "24", 
      change: "+3",
      trend: "up",
      icon: FileText,
      color: "green",
      subtext: "8 pending payment"
    },
    { 
      label: "New Customers", 
      value: "12", 
      change: "+5.1%",
      trend: "up",
      icon: Users,
      color: "blue",
      subtext: "this week"
    },
    { 
      label: "Avg. Invoice", 
      value: "$2,340", 
      change: "-2.3%",
      trend: "down",
      icon: TrendingUp,
      color: "cyan",
      subtext: "last 30 days"
    },
  ];

  const recentActivities = [
    { type: "success", icon: CheckCircle2, text: "Invoice #1234 paid", amount: "$1,250", time: "5 min ago", color: "green" },
    { type: "pending", icon: Clock, text: "Invoice #1233 sent", amount: "$890", time: "23 min ago", color: "cyan" },
    { type: "success", icon: CheckCircle2, text: "Payment received", amount: "$3,200", time: "1 hour ago", color: "green" },
    { type: "alert", icon: AlertCircle, text: "Invoice #1230 overdue", amount: "$670", time: "2 hours ago", color: "coral" },
  ];

  const modules = [
    { icon: TrendingUp, title: "Executive Dashboard", desc: "High-level insights", path: "/executive", color: "cyan" },
    { icon: Brain, title: "AI Financial Advisor", desc: "Smart recommendations", path: "/ai-advisor", color: "green" },
    { icon: DollarSign, title: "Cash Flow", desc: "Money in & out", path: "/cash-flow", color: "blue" },
    { icon: Users, title: "Customers", desc: "Manage clients", path: "/customers", color: "cyan" },
    { icon: Package, title: "Warehouse", desc: "Inventory tracking", path: "/warehouse", color: "green" },
    { icon: Users, title: "Team", desc: "Collaboration tools", path: "/team", color: "blue" },
    { icon: CreditCard, title: "Payroll", desc: "Employee payments", path: "/payroll", color: "cyan" },
    { icon: Building2, title: "Bank Integration", desc: "Connect accounts", path: "/bank", color: "green" },
    { icon: CreditCard, title: "Recurring Billing", desc: "Subscriptions", path: "/recurring", color: "blue" },
    { icon: Zap, title: "API Gateway", desc: "Manage API keys", path: "/api", color: "cyan" },
    { icon: Shield, title: "Compliance", desc: "Audit logs", path: "/compliance", color: "green" },
  ];

  return (
    <div className="min-h-screen pb-24 md:pb-8">
      <DashboardSidebar />
      <TopBar />

      <div className="md:ml-[280px] container mx-auto px-4 pt-20 md:pt-24">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text-cyan">Welcome back!</h1>
          <p className="text-muted-foreground">Here's what's happening with your business today.</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            const TrendIcon = stat.trend === "up" ? ArrowUpRight : ArrowDownRight;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      stat.color === "cyan" ? "bg-[hsl(var(--neon-cyan))]/20" :
                      stat.color === "green" ? "bg-[hsl(var(--neon-green))]/20" :
                      "bg-[hsl(var(--neon-blue))]/20"
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        stat.color === "cyan" ? "text-[hsl(var(--neon-cyan))]" :
                        stat.color === "green" ? "text-[hsl(var(--neon-green))]" :
                        "text-[hsl(var(--neon-blue))]"
                      }`} />
                    </div>
                    <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
                      stat.trend === "up" 
                        ? "bg-[hsl(var(--neon-green))]/20 text-[hsl(var(--neon-green))]"
                        : "bg-red-500/20 text-red-400"
                    }`}>
                      <TrendIcon className="w-3 h-3" />
                      {stat.change}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold gradient-text-cyan mb-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.subtext}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Analytics Charts - Swipeable on Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold gradient-text-cyan">Analytics Dashboard</h2>
            <p className="text-sm text-muted-foreground lg:hidden">Swipe →</p>
          </div>
          
          {/* Desktop: Grid Layout */}
          <div className="hidden lg:block space-y-6">
            {/* First Row: Revenue + Activity */}
            <div className="grid grid-cols-3 gap-6">
              {/* Revenue Chart */}
              <div className="col-span-2">
                <GlassCard neonBorder="cyan">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-[hsl(var(--neon-cyan))]" />
                      Revenue Trend
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Activity className="w-4 h-4" />
                      <span>Last 7 days</span>
                    </div>
                  </div>
                  <div className="h-48 flex items-end justify-between gap-2 mb-4">
                    {[65, 72, 68, 78, 82, 85, 90].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex-1 bg-gradient-to-t from-[hsl(var(--neon-cyan))] to-[hsl(var(--neon-blue))] rounded-t-lg relative group"
                      >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-2 py-1 rounded text-xs whitespace-nowrap">
                          ${(height * 100).toFixed(0)}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mb-4">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                  <div className="p-4 bg-[hsl(var(--neon-cyan))]/10 rounded-xl border border-[hsl(var(--neon-cyan))]/30">
                    <p className="text-sm text-[hsl(var(--neon-cyan))]">
                      💡 <strong>AI Insight:</strong> Revenue up 24% this week. Peak performance on Friday.
                    </p>
                  </div>
                </GlassCard>
              </div>

              {/* Recent Activities */}
              <div>
                <GlassCard neonBorder="green" className="h-full">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-[hsl(var(--neon-green))]" />
                    Recent Activity
                  </h3>
                  <div className="space-y-3">
                    {recentActivities.map((activity, i) => {
                      const Icon = activity.icon;
                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="flex items-start gap-3 p-3 glass rounded-xl hover:bg-white/5 transition-colors"
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            activity.color === "green" ? "bg-[hsl(var(--neon-green))]/20" :
                            activity.color === "cyan" ? "bg-[hsl(var(--neon-cyan))]/20" :
                            "bg-red-500/20"
                          }`}>
                            <Icon className={`w-4 h-4 ${
                              activity.color === "green" ? "text-[hsl(var(--neon-green))]" :
                              activity.color === "cyan" ? "text-[hsl(var(--neon-cyan))]" :
                              "text-red-400"
                            }`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium mb-0.5">{activity.text}</p>
                            <p className="text-xs text-muted-foreground">{activity.time}</p>
                          </div>
                          <span className="text-sm font-bold gradient-text-cyan flex-shrink-0">
                            {activity.amount}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </GlassCard>
              </div>
            </div>

            {/* Second Row: Expenses, Profit, Cash Flow */}
            <div className="grid grid-cols-3 gap-6">
              {/* Expenses Chart */}
              <GlassCard neonBorder="blue">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <LineChart className="w-5 h-5 text-[hsl(var(--neon-blue))]" />
                    Expenses
                  </h3>
                  <span className="text-xs text-muted-foreground">7 days</span>
                </div>
                <div className="h-48 flex items-end justify-between gap-2 mb-4">
                  {[45, 52, 48, 55, 50, 58, 53].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="flex-1 bg-gradient-to-t from-[hsl(var(--neon-blue))] to-blue-400 rounded-t-lg relative group"
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-2 py-1 rounded text-xs whitespace-nowrap">
                        ${(height * 50).toFixed(0)}
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mb-4">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
                <div className="p-4 bg-[hsl(var(--neon-blue))]/10 rounded-xl border border-[hsl(var(--neon-blue))]/30">
                  <p className="text-sm text-[hsl(var(--neon-blue))]">
                    💡 <strong>AI Insight:</strong> Expenses stable at $5.3K/week
                  </p>
                </div>
              </GlassCard>

              {/* Profit Chart */}
              <GlassCard neonBorder="green">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-[hsl(var(--neon-green))]" />
                    Profit
                  </h3>
                  <span className="text-xs text-muted-foreground">7 days</span>
                </div>
                <div className="h-48 flex items-end justify-between gap-2 mb-4">
                  {[40, 48, 45, 52, 58, 62, 68].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="flex-1 bg-gradient-to-t from-[hsl(var(--neon-green))] to-green-400 rounded-t-lg relative group"
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-2 py-1 rounded text-xs whitespace-nowrap">
                        ${(height * 70).toFixed(0)}
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mb-4">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
                <div className="p-4 bg-[hsl(var(--neon-green))]/10 rounded-xl border border-[hsl(var(--neon-green))]/30">
                  <p className="text-sm text-[hsl(var(--neon-green))]">
                    💡 <strong>AI Insight:</strong> Profit margin up 32%
                  </p>
                </div>
              </GlassCard>

              {/* Cash Flow Chart */}
              <GlassCard neonBorder="cyan">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-[hsl(var(--neon-cyan))]" />
                    Cash Flow
                  </h3>
                  <span className="text-xs text-muted-foreground">7 days</span>
                </div>
                <div className="h-48 relative mb-4">
                  <div className="absolute inset-0 flex items-center">
                    <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                      <motion.path
                        d="M 0,30 L 14,25 L 28,20 L 42,18 L 56,15 L 70,12 L 84,10 L 100,8"
                        fill="none"
                        stroke="hsl(var(--neon-cyan))"
                        strokeWidth="2"
                        className="drop-shadow-[0_0_8px_hsl(var(--neon-cyan))]"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 0.6, duration: 1.5 }}
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mb-4">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
                <div className="p-4 bg-[hsl(var(--neon-cyan))]/10 rounded-xl border border-[hsl(var(--neon-cyan))]/30">
                  <p className="text-sm text-[hsl(var(--neon-cyan))]">
                    💡 <strong>AI Insight:</strong> Positive cash flow trend
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Mobile & Tablet: Carousel */}
          <div className="lg:hidden overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 touch-pan-y">
              {/* Revenue Chart */}
              <div className="flex-[0_0_85%] md:flex-[0_0_70%] min-w-0">
                <GlassCard neonBorder="cyan">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-[hsl(var(--neon-cyan))]" />
                      Revenue
                    </h3>
                    <span className="text-xs text-muted-foreground">7 days</span>
                  </div>
                  <div className="h-40 flex items-end justify-between gap-1 mb-3">
                    {[65, 72, 68, 78, 82, 85, 90].map((height, i) => (
                      <div
                        key={i}
                        style={{ height: `${height}%` }}
                        className="flex-1 bg-gradient-to-t from-[hsl(var(--neon-cyan))] to-[hsl(var(--neon-blue))] rounded-t"
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-[10px] text-muted-foreground mb-3">
                    <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                  </div>
                  <div className="p-3 bg-[hsl(var(--neon-cyan))]/10 rounded-lg border border-[hsl(var(--neon-cyan))]/30">
                    <p className="text-xs text-[hsl(var(--neon-cyan))]">
                      💡 Revenue up 24% this week
                    </p>
                  </div>
                </GlassCard>
              </div>

              {/* Expenses Chart */}
              <div className="flex-[0_0_85%] md:flex-[0_0_70%] min-w-0">
                <GlassCard neonBorder="blue">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold flex items-center gap-2">
                      <LineChart className="w-4 h-4 text-[hsl(var(--neon-blue))]" />
                      Expenses
                    </h3>
                    <span className="text-xs text-muted-foreground">7 days</span>
                  </div>
                  <div className="h-40 flex items-end justify-between gap-1 mb-3">
                    {[45, 52, 48, 55, 50, 58, 53].map((height, i) => (
                      <div
                        key={i}
                        style={{ height: `${height}%` }}
                        className="flex-1 bg-gradient-to-t from-[hsl(var(--neon-blue))] to-blue-400 rounded-t"
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-[10px] text-muted-foreground mb-3">
                    <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                  </div>
                  <div className="p-3 bg-[hsl(var(--neon-blue))]/10 rounded-lg border border-[hsl(var(--neon-blue))]/30">
                    <p className="text-xs text-[hsl(var(--neon-blue))]">
                      💡 Expenses stable at $5.3K/week
                    </p>
                  </div>
                </GlassCard>
              </div>

              {/* Profit Chart */}
              <div className="flex-[0_0_85%] md:flex-[0_0_70%] min-w-0">
                <GlassCard neonBorder="green">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-[hsl(var(--neon-green))]" />
                      Profit
                    </h3>
                    <span className="text-xs text-muted-foreground">7 days</span>
                  </div>
                  <div className="h-40 flex items-end justify-between gap-1 mb-3">
                    {[40, 48, 45, 52, 58, 62, 68].map((height, i) => (
                      <div
                        key={i}
                        style={{ height: `${height}%` }}
                        className="flex-1 bg-gradient-to-t from-[hsl(var(--neon-green))] to-green-400 rounded-t"
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-[10px] text-muted-foreground mb-3">
                    <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                  </div>
                  <div className="p-3 bg-[hsl(var(--neon-green))]/10 rounded-lg border border-[hsl(var(--neon-green))]/30">
                    <p className="text-xs text-[hsl(var(--neon-green))]">
                      💡 Profit margin up 32%
                    </p>
                  </div>
                </GlassCard>
              </div>

              {/* Cash Flow Chart */}
              <div className="flex-[0_0_85%] md:flex-[0_0_70%] min-w-0">
                <GlassCard neonBorder="cyan">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-[hsl(var(--neon-cyan))]" />
                      Cash Flow
                    </h3>
                    <span className="text-xs text-muted-foreground">7 days</span>
                  </div>
                  <div className="h-40 relative mb-3">
                    <div className="absolute inset-0 flex items-center">
                      <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                        <path
                          d="M 0,30 L 14,25 L 28,20 L 42,18 L 56,15 L 70,12 L 84,10 L 100,8"
                          fill="none"
                          stroke="hsl(var(--neon-cyan))"
                          strokeWidth="2"
                          className="drop-shadow-[0_0_8px_hsl(var(--neon-cyan))]"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-between text-[10px] text-muted-foreground mb-3">
                    <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                  </div>
                  <div className="p-3 bg-[hsl(var(--neon-cyan))]/10 rounded-lg border border-[hsl(var(--neon-cyan))]/30">
                    <p className="text-xs text-[hsl(var(--neon-cyan))]">
                      💡 Positive cash flow trend
                    </p>
                  </div>
                </GlassCard>
              </div>

              {/* Recent Activities */}
              <div className="flex-[0_0_85%] md:flex-[0_0_70%] min-w-0">
                <GlassCard neonBorder="green" className="h-full">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[hsl(var(--neon-green))]" />
                    Activity
                  </h3>
                  <div className="space-y-2">
                    {recentActivities.slice(0, 5).map((activity, i) => {
                      const Icon = activity.icon;
                      return (
                        <div
                          key={i}
                          className="flex items-start gap-2 p-2 glass rounded-lg"
                        >
                          <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            activity.color === "green" ? "bg-[hsl(var(--neon-green))]/20" :
                            activity.color === "cyan" ? "bg-[hsl(var(--neon-cyan))]/20" :
                            "bg-red-500/20"
                          }`}>
                            <Icon className={`w-3 h-3 ${
                              activity.color === "green" ? "text-[hsl(var(--neon-green))]" :
                              activity.color === "cyan" ? "text-[hsl(var(--neon-cyan))]" :
                              "text-red-400"
                            }`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium truncate">{activity.text}</p>
                            <p className="text-[10px] text-muted-foreground">{activity.time}</p>
                          </div>
                          <span className="text-xs font-bold gradient-text-cyan flex-shrink-0">
                            {activity.amount}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-6 gradient-text-cyan">Quick Actions</h2>
          <div className="grid grid-cols-1 gap-5">
            {quickActions.map((action, i) => {
              const Icon = action.icon;
              const neonColor = action.color === "cyan" ? "cyan" : action.color === "green" ? "green" : "blue";
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="relative group"
                >
                  <GlassCard
                    neonBorder={neonColor as any}
                    hover
                    className="flex items-center gap-5 p-6 cursor-pointer relative overflow-hidden"
                    onClick={() => navigate(action.path)}
                  >
                    {/* Gradient background effect on hover */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      action.color === "cyan"
                        ? "bg-gradient-to-r from-[hsl(var(--neon-cyan))]/10 to-transparent"
                        : action.color === "green"
                        ? "bg-gradient-to-r from-[hsl(var(--neon-green))]/10 to-transparent"
                        : "bg-gradient-to-r from-[hsl(var(--neon-blue))]/10 to-transparent"
                    }`} />
                    
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 relative z-10 ${
                        action.color === "cyan"
                          ? "bg-[hsl(var(--neon-cyan))]/20 group-hover:shadow-[0_0_30px_hsl(var(--neon-cyan))]"
                          : action.color === "green"
                          ? "bg-[hsl(var(--neon-green))]/20 group-hover:shadow-[0_0_30px_hsl(var(--neon-green))]"
                          : "bg-[hsl(var(--neon-blue))]/20 group-hover:shadow-[0_0_30px_hsl(var(--neon-blue))]"
                      }`}
                    >
                      <Icon
                        className={`w-8 h-8 transition-all duration-300 ${
                          action.color === "cyan"
                            ? "text-[hsl(var(--neon-cyan))]"
                            : action.color === "green"
                            ? "text-[hsl(var(--neon-green))]"
                            : "text-[hsl(var(--neon-blue))]"
                        }`}
                      />
                    </div>
                    <div className="flex-1 relative z-10">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-bold group-hover:translate-x-2 transition-transform">{action.title}</h3>
                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                          action.color === "cyan"
                            ? "bg-[hsl(var(--neon-cyan))]/20 text-[hsl(var(--neon-cyan))] group-hover:bg-[hsl(var(--neon-cyan))]/30"
                            : action.color === "green"
                            ? "bg-[hsl(var(--neon-green))]/20 text-[hsl(var(--neon-green))] group-hover:bg-[hsl(var(--neon-green))]/30"
                            : "bg-[hsl(var(--neon-blue))]/20 text-[hsl(var(--neon-blue))] group-hover:bg-[hsl(var(--neon-blue))]/30"
                        }`}>
                          {action.badge}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{action.subtitle}</p>
                    </div>
                    <div className="flex-shrink-0 relative z-10">
                      <span className="text-sm px-4 py-2 rounded-full bg-[hsl(var(--neon-green))]/20 text-[hsl(var(--neon-green))] font-semibold border border-[hsl(var(--neon-green))]/30 group-hover:border-[hsl(var(--neon-green))]/60 transition-all">
                        {action.status}
                      </span>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* All Modules - Hidden on desktop (visible in sidebar), shown on mobile (quick access) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mt-12 block lg:hidden"
        >
          <h2 className="text-2xl font-bold mb-6 gradient-text-cyan">All Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, i) => {
              const Icon = module.icon;
              const neonColor = module.color === "cyan" ? "cyan" : module.color === "green" ? "green" : "blue";
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + i * 0.05 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="relative group"
                >
                  <GlassCard
                    neonBorder={neonColor as any}
                    hover
                    className="p-6 cursor-pointer relative overflow-hidden"
                    onClick={() => navigate(module.path)}
                  >
                    {/* Gradient background effect on hover */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      module.color === "cyan"
                        ? "bg-gradient-to-br from-[hsl(var(--neon-cyan))]/10 to-transparent"
                        : module.color === "green"
                        ? "bg-gradient-to-br from-[hsl(var(--neon-green))]/10 to-transparent"
                        : "bg-gradient-to-br from-[hsl(var(--neon-blue))]/10 to-transparent"
                    }`} />
                    
                    <div className="flex items-center gap-4 relative z-10">
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                          module.color === "cyan"
                            ? "bg-[hsl(var(--neon-cyan))]/20 group-hover:shadow-[0_0_20px_hsl(var(--neon-cyan))]"
                            : module.color === "green"
                            ? "bg-[hsl(var(--neon-green))]/20 group-hover:shadow-[0_0_20px_hsl(var(--neon-green))]"
                            : "bg-[hsl(var(--neon-blue))]/20 group-hover:shadow-[0_0_20px_hsl(var(--neon-blue))]"
                        }`}
                      >
                        <Icon
                          className={`w-7 h-7 transition-all duration-300 ${
                            module.color === "cyan"
                              ? "text-[hsl(var(--neon-cyan))]"
                              : module.color === "green"
                              ? "text-[hsl(var(--neon-green))]"
                              : "text-[hsl(var(--neon-blue))]"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold mb-1 text-lg group-hover:translate-x-1 transition-transform">{module.title}</h3>
                        <p className="text-sm text-muted-foreground">{module.desc}</p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <MobileNav />
    </div>
  );
};

export default Dashboard;

import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { TopBar } from "@/components/TopBar";
import { MobileNav } from "@/components/MobileNav";
import { TrendingUp, TrendingDown } from "lucide-react";

const Analytics = () => {
  const metrics = [
    { label: "Total Revenue", value: "$45,231", change: "+15.3%", trend: "up" },
    { label: "Avg Invoice", value: "$290", change: "+8.1%", trend: "up" },
    { label: "Conversion", value: "68%", change: "-2.3%", trend: "down" },
    { label: "Active Users", value: "1,234", change: "+23.5%", trend: "up" },
  ];

  return (
    <div className="min-h-screen pb-24 md:pb-8">
      <TopBar />

      <div className="container mx-auto px-4 pt-20 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text-cyan">Analytics</h1>
          <p className="text-muted-foreground">Track your business performance</p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {["Week", "Month", "Year"].map((period, i) => (
            <button
              key={period}
              className={`px-6 py-2 rounded-full glass transition-all ${
                i === 1 ? "neon-border-cyan" : "border border-white/10"
              }`}
            >
              {period}
            </button>
          ))}
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard>
                <p className="text-sm text-muted-foreground mb-2">{metric.label}</p>
                <p className="text-3xl font-bold gradient-text-cyan mb-2">{metric.value}</p>
                <div className="flex items-center gap-1">
                  {metric.trend === "up" ? (
                    <TrendingUp className="w-4 h-4 text-[hsl(var(--neon-green))]" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-destructive" />
                  )}
                  <span
                    className={`text-sm ${
                      metric.trend === "up" ? "text-[hsl(var(--neon-green))]" : "text-destructive"
                    }`}
                  >
                    {metric.change}
                  </span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Chart Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <GlassCard neonBorder="cyan" className="h-64 md:h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[hsl(var(--neon-cyan))]/20 flex items-center justify-center mx-auto mb-4 animate-glow-pulse">
                <TrendingUp className="w-8 h-8 text-[hsl(var(--neon-cyan))]" />
              </div>
              <p className="text-lg font-semibold mb-2">Revenue Chart</p>
              <p className="text-sm text-muted-foreground">Interactive chart will be displayed here</p>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      <MobileNav />
    </div>
  );
};

export default Analytics;

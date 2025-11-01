import { motion } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { TopBar } from "@/components/TopBar";
import { MobileNav } from "@/components/MobileNav";
import { TrendingUp, DollarSign, Users, Target, Brain } from "lucide-react";

const ExecutiveDashboard = () => {
  const kpis = [
    { icon: DollarSign, label: "Revenue", value: "$2.4M", change: "+18% MoM", color: "cyan" },
    { icon: TrendingUp, label: "Profit Margin", value: "34.2%", change: "+5.1%", color: "green" },
    { icon: Users, label: "Customers", value: "12,450", change: "+12.4%", color: "blue" },
    { icon: Target, label: "Conversion", value: "8.9%", change: "+2.3%", color: "cyan" },
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
          <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text-cyan">Executive Dashboard</h1>
          <p className="text-muted-foreground">High-level business intelligence</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {kpis.map((kpi, i) => {
            const Icon = kpi.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className={`w-8 h-8 text-[hsl(var(--neon-${kpi.color}))]`} />
                    <span className="text-xs px-2 py-1 rounded-full bg-[hsl(var(--neon-green))]/20 text-[hsl(var(--neon-green))]">
                      {kpi.change}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{kpi.label}</p>
                  <p className="text-2xl font-bold gradient-text-cyan">{kpi.value}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <GlassCard neonBorder="cyan">
            <h3 className="font-bold text-lg mb-4">Revenue Trend</h3>
            <div className="h-64 flex items-end justify-between gap-2">
              {[65, 78, 82, 90, 85, 92, 100].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ delay: i * 0.1 }}
                  className="flex-1 bg-gradient-to-t from-[hsl(var(--neon-cyan))] to-[hsl(var(--neon-blue))] rounded-t-lg"
                />
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-muted-foreground">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
            </div>
          </GlassCard>

          <GlassCard neonBorder="green">
            <div className="flex items-center gap-3 mb-6">
              <Brain className="w-8 h-8 text-[hsl(var(--neon-green))]" />
              <div>
                <h3 className="font-bold text-lg">AI Summary</h3>
                <p className="text-sm text-muted-foreground">Last 30 days</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="glass rounded-xl p-4">
                <p className="text-sm mb-2 text-[hsl(var(--neon-green))]">Revenue Growing</p>
                <p className="text-sm text-muted-foreground">
                  Revenue is up 18% month-over-month, driven by strong performance in the enterprise segment.
                </p>
              </div>
              <div className="glass rounded-xl p-4">
                <p className="text-sm mb-2 text-[hsl(var(--neon-cyan))]">Customer Acquisition</p>
                <p className="text-sm text-muted-foreground">
                  New customer sign-ups increased by 24%, with mobile conversion improving significantly.
                </p>
              </div>
              <div className="glass rounded-xl p-4">
                <p className="text-sm mb-2 text-[hsl(var(--neon-blue))]">Churn Reduction</p>
                <p className="text-sm text-muted-foreground">
                  Customer retention improved by 8% after implementing AI-powered onboarding.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>

        <GlassCard>
          <h3 className="font-bold text-lg mb-4">Top Performing Regions</h3>
          <div className="space-y-3">
            {[
              { region: "North America", revenue: "$980K", growth: "+22%" },
              { region: "Europe", revenue: "$720K", growth: "+18%" },
              { region: "Asia Pacific", revenue: "$580K", growth: "+15%" },
              { region: "Latin America", revenue: "$120K", growth: "+12%" },
            ].map((region, i) => (
              <div key={i} className="glass rounded-xl p-4 flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-medium">{region.region}</p>
                  <p className="text-sm text-muted-foreground">Revenue: {region.revenue}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs px-2 py-1 rounded-full bg-[hsl(var(--neon-green))]/20 text-[hsl(var(--neon-green))]">
                    {region.growth}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      <MobileNav />
    </div>
  );
};

export default ExecutiveDashboard;
